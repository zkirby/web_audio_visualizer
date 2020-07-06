import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Oscillator from "../components/Sources/Oscillator";
import ConstantSource from "../components/Sources/ConstantSource";
import Speakers from "../components/Destinations/Speakers";

export const nodeTypes = {
  Sources: {
    Oscillator,
    ConstantSource,
  },
  Destinations: {
    Speakers,
  },
};

export class Node extends React.Component{
  constructor(coords, nodeType) {
    this.isSource = Object.keys(nodeTypes.Sources).includes(nodeType.name);
    this.links = [];
    this.coords = coords.split(",");
  }

  link(nodeKey) {
    this.links.push(nodeKey);
  }

  render({ selectNode, removeNode, isSelected }) {
    const [top, left] = this.coords;
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
        <Node />
      </div>
    );
  }
}
