import React from "react";
import Node from "./Node";
import { fakeAudio } from "../utils/utils";

export default class Graph extends React.Component {
  constructor(props) {
    super(props);

    const sourceBlocks = props.nodes.filter((n) => n.isSource);

    /*
     * Graphs are only responsible for rendering and grouping source nodes
     * and only need to render 'all nodes' if there are no source nodes (i.e. no audio contexts)
     */
    this.roots = sourceBlocks.length ? sourceBlocks : props.nodes;
    this.parent = sourceBlocks.length ? undefined : fakeAudio;
  }

  render() {
    const { selectedNodeKey, nodes, selectNode, removeNode } = this.props;
    return (
      <div>
        {this.roots.map((node) => (
          <Node
            key={node.coords}
            graphKey={this.props.graphKey}
            node={node}
            allNodes={nodes}
            selectedNodeKey={selectedNodeKey}
            removeNode={removeNode}
            selectNode={selectNode}
            parent={this.parent}
          />
        ))}
      </div>
    );
  }
}
