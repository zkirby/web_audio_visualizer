import React from "react";
import Node from "./Node";
import Link from "./Link";
import { noProp } from "../utils/utils.js";

export default class Graph extends React.Component {
  constructor(props) {
    super(props);

    this.key = props.rootKey;
    this.state = {
      sourceBlocks: props.nodes.filter((n) => n.isSource),
    };
  }

  render() {
    const { selectedNodeKey, nodes, selectNode, removeNode } = this.props;
    return (
      <div>
        {nodes.flatMap((node) =>
          node.links.map((outLink) => (
            <Link
              key={`${outLink}-${node.coords}`}
              link1={outLink}
              link2={node.coords}
            />
          ))
        )}
        {nodes.map((node) => (
          <Node
            key={node.coords}
            coords={node.coords}
            NodeType={node.nodeType}
            isSelected={selectedNodeKey === node.coords}
            removeNode={noProp(() => removeNode(this.key, node.coords))}
            selectNode={noProp(() => selectNode(this.key, node.coords))}
          />
        ))}
      </div>
    );
  }
}
