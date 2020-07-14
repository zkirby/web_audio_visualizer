import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Node extends React.Component {
  render() {
    const { coords, selectNode, removeNode, isSelected, NodeType } = this.props;
    const [top, left] = coords.split(",");
    return (
      <div
        onClick={selectNode}
        style={{ left: `${left}px`, top: `${top}px` }}
        className={`node ${isSelected ? "selected-node" : ""}`}
      >
        <div className="node-overlay">
          <div onClick={removeNode} className="close">
            <FontAwesomeIcon icon="times-circle" />
          </div>
          <div className="edit">
            <FontAwesomeIcon icon="pen" />
          </div>
        </div>
        <NodeType />
      </div>
    );
  }
}
