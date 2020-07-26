import { nodeTypes } from "./utils";

export default class Node {
  constructor(coords, nodeType, key) {
    this.isSource = Object.keys(nodeTypes.Sources).includes(nodeType.name);
    this.isSink = Object.keys(nodeTypes.Destinations).includes(nodeType.name);

    this.maxLinks = this.isSink || this.isSource ? 1 : 2;
    this.coords = coords;
    this.nodeType = nodeType;
    this.options = {};
    this.key = key;

    this._links = [];
  }

  canAddLink() {
    return this._links.length < this.maxLinks;
  }

  updateCoords(top, left) {
    this.coords = `${top}, ${left}`;
  }

  addLink(node) {
    this._links.push(node);
  }

  linkCoords() {
    return this._links.map((link) => link.coords);
  }

  getParentLinks(childNodes) {
    return this._links.filter((link) => !childNodes.includes(link));
  }

  isLinked(node) {
    return this._links.includes(node);
  }

  unLinkAll() {
    this._links.map((l) => l.unLink(this));
  }

  unLink(node) {
    if (this.isLinked(node)) {
      this._links.splice(this._links.indexOf(node), 1);
    }
  }
}
