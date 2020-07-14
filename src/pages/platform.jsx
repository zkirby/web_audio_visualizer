import React from "react";
import Graph from "../components/Graph";
import Node from "../utils/nodes";
import { noProp, nodeTypes } from "../utils/utils.js";

import Menu from "../components/Menu";

const defaultState = {
  activeGraphs: {},
  selectedNodeRootType: undefined,
  proposedNode: undefined, // The node of the current graph to try merging
};
export default class Platform extends React.Component {
  state = defaultState;

  /** Add a new graph to the platform */
  addNewGraph = ({ pageY, pageX }) => {
    this.setState(({ selectedNodeRootType, activeGraphs }) => {
      if (!selectedNodeRootType) {
        return;
      }

      const key = `${pageY}, ${pageX}`;
      return {
        activeGraphs: {
          ...activeGraphs,
          [key]: [new Node(key, selectedNodeRootType)],
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

  removeNode = (rootKey, nodeKey) => {
    this.setState(({ activeGraphs }) => {
      const newGraphs = { ...activeGraphs }

      // Remove graph
      const g = newGraphs[rootKey];
      delete newGraphs[rootKey];

      // Remove Node
      const nI = g.findIndex((n) => n.coords === nodeKey);
      const n = g[nI];
      g.splice(nI, 1);

      // Unlink nodes
      g.map(n => n.unLink(nodeKey))

      // Rebuild graphs from node lists
      const graphs = {};
      n.links.map(l => {
        graphs[l] = [];
        const s = new Set();
        let q = [l];
        while (q.length) {
          const coords = q.pop();
          const newNode = g.find(n => n.coords === coords)
          if (!s.has(coords)) {
            s.add(coords);
            graphs[l].push(newNode);
            q = [...q, ...newNode.links];
          }
        }
      })

      return { activeGraphs: {...graphs, ...newGraphs} };
    });
  };

  mergeGraphs = (keys1, keys2) => {
    const g1 = this.state.activeGraphs[keys1.rootKey];
    const g2 = this.state.activeGraphs[keys2.rootKey];

    // Update nodes
    const n1 = g1.find((n) => n.coords === keys1.nodeKey);
    const n2 = g2.find((n) => n.coords === keys2.nodeKey);
    // Enforce no loops.
    if (!g1.find(n => n.coords === keys2.nodeKey)) {
      n1.addLink(keys2.nodeKey);
      n2.addLink(keys1.nodeKey);
    } else {
      throw new Error('Linking these nodes would cause a loop')
    }

    this.setState(({ activeGraphs }) => {
      const newGraphs = { ...activeGraphs };
      delete newGraphs[keys1.rootKey];
      delete newGraphs[keys2.rootKey];

      return {
        activeGraphs: { ...newGraphs, [keys1.rootKey]: [...g1, ...g2] },
      };
    });
  };

  setProposedNode = (rootKey, nodeKey) => {
    if (this.state.proposedNode) {
      this.mergeGraphs(this.state.proposedNode, { rootKey, nodeKey });
      this.setState({ proposedNode: undefined });
    } else {
      this.setState({ proposedNode: { rootKey, nodeKey } });
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
        </div>
        {Object.entries(this.state.activeGraphs).map(([key, nodes]) => (
          <Graph
            key={key}
            rootKey={key}
            nodes={nodes}
            selectNode={this.setProposedNode}
            removeNode={this.removeNode}
            selectedNodeKey={this.state.proposedNode?.nodeKey}
          />
        ))}
      </div>
    );
  }
}
