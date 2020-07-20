import React from "react";
import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { noProp } from "../utils/utils.js";

export default class Node extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parent: undefined,
    };
    this.key = this.props.node.coords;
    this.type = this.props.node.nodeType;
  }

  updateParent = (parent) => {
    console.log('updating parent', parent);
    this.setState({
      parent,
    });
  };

  render() {
    const {
      graphKey,
      selectNode,
      selectedNodeKey,
      removeNode,
      allNodes,
      parent,
      node,
    } = this.props;
    const [top, left] = this.key.split(",");

    // recalculate the children and new all nodes, there is a possibility this changed
    // if a node was just added to the parent graph
    const newAllNodes = [...allNodes];
    newAllNodes.splice(
      allNodes.findIndex((n) => n.coords === this.key),
      1
    );
    const childNodes = allNodes.filter((n) => node.links.includes(n.coords));

    return (
      <>
        <div
          onClick={noProp(() => selectNode(graphKey, this.key))}
          style={{ left: `${left}px`, top: `${top}px` }}
          className={`node ${
            selectedNodeKey === this.key ? "selected-node" : ""
          }`}
        >
          <div className="node-overlay">
            <div
              onClick={noProp(() => removeNode(graphKey, this.key))}
              className="close"
            >
              <FontAwesomeIcon icon="times-circle" />
            </div>
            <div className="edit">
              <FontAwesomeIcon icon="pen" />
            </div>
          </div>
          <this.type updateParent={this.updateParent} parent={parent} />
        </div>
        <div>
          {this.state.parent &&
            this.props.node.links.map((outLink) => (
              <Link
                key={`${outLink}-${this.key}`}
                link1={outLink}
                link2={this.key}
              />
            ))}
          {this.state.parent &&
            childNodes.map((node) => (
              <Node
                key={node.coords}
                graphKey={graphKey}
                node={node}
                allNodes={newAllNodes}
                selectedNodeKey={selectedNodeKey}
                parent={this.state.parent}
                removeNode={removeNode}
                selectNode={selectNode}
              />
            ))}
        </div>
      </>
    );
  }
}
