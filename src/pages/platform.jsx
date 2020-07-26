import React from "react";
import Graph from "../components/Graph";
import Node from "../utils/nodes";
import { Link } from "react-router-dom";
import { noProp, nodeTypes, nameToNode } from "../utils/utils.js";

import Menu from "../components/Menu";

const defaultState = {
  activeGraphs: {},
  selectedNodeRootType: undefined,
  proposedNode: undefined, // The node of the current graph to try merging
};
let graphNum = 0;
let nodeNum = 0;
export default class Platform extends React.Component {
  state = defaultState;

  componentDidMount() {
    // Seed active graphs with a config
    /** Config layout:
     *  { nodes: {
     *     [coords]: { links: [coords,] options: {}, type: String }
     *  } }
     */
    if (!this.props.location?.state?.config) {
      return;
    }
    const { nodes } = JSON.parse(this.props.location?.state?.config);
    const allNodes = Object.entries(nodes).map(
      ([coords, { options, links, type }]) => {
        const n = new Node(coords, nameToNode[type], nodeNum++);
        n.options = options || {};
        n._loadingLinks = links || [];
        return n;
      }
    );

    // Build the graphs
    const graphs = {};
    while (allNodes.length) {
      const node = allNodes[0];
      const key = this.getGraphKey(node.coords);
      graphs[key] = [node];
      const v = new Set();
      const q = [node];

      while (q.length) {
        const c = q.pop();
        if (!v.has(c.coords)) {
          v.add(c.coords);
          allNodes.splice(allNodes.indexOf(c), 1);
          for (const link of c._loadingLinks) {
            const linkedNode = allNodes.find((n) => n.coords === link);
            c.addLink(linkedNode);
            linkedNode.addLink(c);
            graphs[key].push(linkedNode);
            linkedNode._loadingLinks.splice(
              linkedNode._loadingLinks.indexOf(c.coords),
              1
            );
            q.push(linkedNode);
          }
        }
      }
    }

    this.setState({ activeGraphs: graphs });
  }

  /** Add a new graph to the platform */
  addNewGraph = ({ pageY, pageX }) => {
    this.setState(({ selectedNodeRootType, activeGraphs }) => {
      if (!selectedNodeRootType) {
        return;
      }

      const coords = `${pageY}, ${pageX}`;
      return {
        activeGraphs: {
          ...activeGraphs,
          [this.getGraphKey(coords)]: [
            new Node(coords, selectedNodeRootType, nodeNum++),
          ],
        },
      };
    });
  };

  /** Change the node root type based on menu selection, this will seed a new graph */
  setselectedNodeRootType = (incomingSelection) => {
    this.setState(({ selectedNodeRootType }) => {
      if (selectedNodeRootType?.name === incomingSelection.name) {
        return { selectedNodeRootType: undefined };
      }
      return { selectedNodeRootType: incomingSelection };
    });
  };

  clearAll = () => {
    this.setState(defaultState);
  };

  getGraphKey = (key) => {
    return `${key.split("-")[0]}-${++graphNum}`;
  };

  removeNode = (rootKey, node) => {
    this.setState(({ activeGraphs }) => {
      const newGraphs = { ...activeGraphs };

      // Remove graph
      const g = newGraphs[rootKey];
      delete newGraphs[rootKey];

      // Remove Node
      g.splice(g.indexOf(node), 1);

      // Unlink node
      node.unLinkAll();

      // Rebuild graphs from node lists
      const graphs = {};
      node._links.map((l) => {
        const n = [];
        const s = new Set();
        let q = [l];
        while (q.length) {
          const newNode = q.pop();
          if (!s.has(newNode)) {
            s.add(newNode);
            n.push(newNode);
            q = [...q, ...newNode._links];
          }
        }
        graphs[this.getGraphKey(l.coords)] = n;
      });

      return { activeGraphs: { ...graphs, ...newGraphs } };
    });
  };

  mergeGraphs = (p1, p2) => {
    const g1 = this.state.activeGraphs[p1.rootKey];
    const g2 = this.state.activeGraphs[p2.rootKey];

    // Update nodes
    const n1 = p1.node;
    const n2 = p2.node;

    // Enforce no loops.
    if (!g1.includes(n2)) {
      n1.addLink(n2);
      n2.addLink(n1);
    } else {
      throw new Error("Linking these nodes would cause a loop");
    }

    this.setState(({ activeGraphs }) => {
      const newGraphs = { ...activeGraphs };
      delete newGraphs[p1.rootKey];
      delete newGraphs[p2.rootKey];

      return {
        activeGraphs: {
          ...newGraphs,
          [this.getGraphKey(p1.rootKey)]: [...g1, ...g2],
        },
      };
    });
  };

  setProposedNode = (rootKey, node) => {
    if (this.state.proposedNode) {
      if (this.state.proposedNode.node !== node) {
        this.mergeGraphs(this.state.proposedNode, { rootKey, node });
      }
      // Unselect the node
      this.setState({ proposedNode: undefined });
    } else {
      this.setState({ proposedNode: { rootKey, node } });
    }
  };

  render() {
    return (
      <div
        style={{
          cursor: this.state.selectedNodeRootType ? "pointer" : "default",
        }}
        className="platform"
        onClick={this.addNewGraph}
      >
        <div onClick={noProp()} className="super-menu">
          <Menu
            nodes={nodeTypes}
            setselectedNodeRootType={this.setselectedNodeRootType}
            selectedNodeRootType={this.state.selectedNodeRootType}
          />
          <span onClick={this.clearAll}> clear </span>
          <span onClick={() => console.log("playing")}> play </span>
          <span>
            <Link to={{ pathname: "/" }}>home</Link>
          </span>
        </div>
        {Object.entries(this.state.activeGraphs).map(([key, nodes]) => (
          <Graph
            key={key}
            graphKey={key}
            nodes={nodes}
            selectNode={this.setProposedNode}
            removeNode={this.removeNode}
            selectedNodeKey={this.state.proposedNode?.node}
          />
        ))}
      </div>
    );
  }
}
