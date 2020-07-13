import React from "react";
import Graph from "../components/Graph";
import { noProp, nodeTypes } from "../utils/utils.js";

import Menu from "../components/Menu";

const defaultState = {
  activeGraphs: {},
  error: undefined,
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
          [key]: { rootKey: key, rootType: selectedNodeRootType },
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

  removeNode = (rootKey, newKeys) => {
    this.setState(({ activeGraphs }) => {
      const newActiveGraphs = { ...activeGraphs };

      // If the new key is undefined, this
      // was the last node in the graph.
      delete newActiveGraphs[rootKey];
      if (newKey) {
        newActiveGraphs[newKey] = graph;
      }
      return {
        activeGraphs: newActiveGraphs,
      };
    });
  };

  mergeGraphs = (keys1, keys2) => {
    const g1 = this.state.activeGraphs[keys1.rootKey];
    const g2 = this.state.activeGraphs[keys2.rootKey];
    const graph = Graph.merge(g1, g2, keys1.nodeKey, keys2.nodeKey);

    this.setState(({ activeGraphs }) => {
      const newGraphs = { ...activeGraphs };
      delete newGraphs[keys1.rootKey];
      delete newGraphs[keys2.rootKey];

      return { activeGraphs: { ...newGraphs, [graph.key]: graph } };
    });
  };

  setProposedNode = (rootKey, nodeKey) => {
    if (this.state.proposedNode) {
      //this.mergeGraphs(this.state.proposedNode, { rootKey, nodeKey });
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
        {Object.entries(this.state.activeGraphs).map(([key, graphProps]) => (
          <Graph
            key={key}
            {...graphProps}
            selectNode={this.setProposedNode}
            removeNode={this.removeNode}
            selectedNodeKey={this.state.proposedNode}
          />
        ))}
      </div>
    );
  }
}
