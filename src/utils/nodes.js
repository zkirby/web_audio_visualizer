import { nodeTypes } from "./utils";

export default class Node {
  constructor(coords, nodeType) {
    // The only way a single node can be both a sink and a source is if
    // it is a source
    this.isSource = this.isSink = Object.keys(nodeTypes.Sources).includes(
      nodeType.name
    );
    this.maxLinks = 2;
    this.coords = coords;
    this.nodeType = nodeType;
    this.links = [];
    this.options = {};
  }

  addLink(nodeCoords) {
    if (this.links.length < this.maxLinks) {
      this.links.push(nodeCoords);
    } else {
      throw new Error("This node is already at max links");
    }
  }

  unLink(nodeCoords) {
    if (this.links.includes(nodeCoords)) {
      this.links.splice(this.links.indexOf(nodeCoords), 1);
    }
  }
}
