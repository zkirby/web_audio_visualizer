export class Graph {
  constructor(rootCoords, root) {
    this.key = rootCoords;
    this.sinkBlocks = root.isSource ? [rootCoords] : [];
    this.sourceBlocks = root.isSource ? [rootCoords] : [];

    this.nodes = { [rootCoords]: root };
    this.links = { [rootCoords]: [] };
  }

  // Merges two graphs by the time it gets
  // here, we can assume both are allowed to create another connection.
  static merge(g1, g2, node1, node2) {
    const graph = new Graph(g1.key, {});
    graph.sinkBlocks = [...g1.sinkBlocks, ...g2.sinkBlocks];
    graph.sourceBlocks = [...g1.sourceBlocks, ...g2.sourceBlocks];
    graph.nodes = { ...g1.nodes, ...g2.nodes };
    graph.links = { ...g1.links, ...g2.links };
    graph.link(node1, node2);

    return graph;
  }

  // link two nodes
  link(node1, node2) {
    const newLink = new Link(node1, node2);
    this.links[node1.key].push(newLink);
    this.links[node2.key].push(newLink);
  }

  // remove a node from this graph
  removeNode(nodeCoords) {
    console.log("deleting node", nodeCoords);
  }

  // render all nodes and all links
  renderAll() {
    return [
      ...Object.values(this.links.flatMap((l) => l.render())),
      ...Object.values(this.nodes).map((n) => n.render()),
    ];
  }
}

const soures = [];
const detinations = [];

//export const nodeType =

export class Node {
  constructor(nodeType) {
    this.isSource = sources.includes(nodeType);
  }

  render() {
    return asdfs;
  }
}

export class Link {
  constructor(node1, node2) {
    console.log("made link");
  }

  render() {
    return asdfasf
  }
}
