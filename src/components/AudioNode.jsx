import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AudioNode = ({ coords, Node, removeNode, currentInLink, selectNode }) => {
  const [top, left] = coords.split(",");
  return (
    <div
      onClick={selectNode}
      style={{ left: `${left}px`, top: `${top}px` }}
      className={`node ${currentInLink === coords ? "selected-node" : ""}`}
    >
      <div className="node-overlay">
        <div onClick={removeNode} className="close">
          <FontAwesomeIcon icon="times-circle" />
        </div>
        <div className="edit">
          <FontAwesomeIcon icon="pen" />
        </div>
      </div>
      <Node />
    </div>
  );
};
export default AudioNode;
