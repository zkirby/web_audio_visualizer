import { nodeTypes } from "./utils";

export default class Node {
  constructor(coords, nodeType) {
    // The only way a single node can be both a sink and a source is if
    // it is a source
    this.isSource = Object.keys(nodeTypes.Sources).includes(
      nodeType.name
    );
    this.isSink = Object.keys(nodeTypes.Destinations).includes(nodeType.name);
    this.maxLinks = this.isSink || this.isSource ? 1 : 2;
    this.coords = coords;
    this.nodeType = nodeType;
    this.links = [];
    this.options = {};
  }

  canAddLink() {
    return this.links.length < this.maxLinks;
  }

  addLink(nodeCoords) {
    this.links.push(nodeCoords);
  }

  unLink(nodeCoords) {
    if (this.links.includes(nodeCoords)) {
      this.links.splice(this.links.indexOf(nodeCoords), 1);
    }
  }
}
