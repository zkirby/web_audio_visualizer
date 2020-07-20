import React from "react";
import Node from "./Node";

export default class Graph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sourceBlocks: props.nodes
        .filter((n) => n.isSource)
        .map((node) => ({
          node,
        })),
    };
  }

  getRootNodes() {
    /*
     * Graphs are only responsible for rendering and grouping source nodes
     * and only need to render 'all nodes' if there are no source nodes (i.e. no audio contexts)
     */
    if (this.state.sourceBlocks.length) {
      return this.state.sourceBlocks.map(({ node }) => node);
    } else {
      return this.props.nodes;
    }
  }

  render() {
    const { selectedNodeKey, nodes, selectNode, removeNode } = this.props;
    return (
      <div>
        {this.getRootNodes().map((node) => (
          <Node
            key={node.coords}
            graphKey={this.props.graphKey}
            node={node}
            allNodes={nodes}
            selectedNodeKey={selectedNodeKey}
            removeNode={removeNode}
            selectNode={selectNode}
          />
        ))}
      </div>
    );
  }
}
