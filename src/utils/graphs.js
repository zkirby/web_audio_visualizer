import React from "react";
import { Node } from "./nodes";
import { noProp } from "./utils";

import Link from "../components/Link";
export class Graph {
  constructor(rootCoords, rootType) {
    this.key = rootCoords;
    this.audio = window.AudioContext || window.webkitAudioContext;

    if (rootType) {
      const root = new Node(rootCoords, rootType);
      this.sinkBlocks = root.isSource ? [rootCoords] : [];
      this.sourceBlocks = root.isSource ? [rootCoords] : [];

      this.nodes = { [rootCoords]: root };
      this.links = [];
    }
  }

  // Merges two graphs by the time it gets
  // here, we can assume both are allowed to create another connection.
  static merge(g1, g2, node1, node2) {
    const graph = new Graph(g1.key);
    graph.sinkBlocks = [...g1.sinkBlocks, ...g2.sinkBlocks];
    graph.sourceBlocks = [...g1.sourceBlocks, ...g2.sourceBlocks];
    graph.nodes = { ...g1.nodes, ...g2.nodes };
    graph.links = { ...g1.links, ...g2.links };
    graph.link(node1, node2);

    return graph;
  }

  // link two nodes
  link(node1Key, node2Key) {
    this.nodes[node1Key].push(node2Key);
    this.nodes[node2Key].push(node1Key);
    this.links.push([node1Key, node2Key]);
  }

  removeNode(nodeCoords) {
    // If this is the last node, delete the graph.

    // If this was a source
    console.log("deleting node", nodeCoords);
  }

  play() {
    // Starting from sources connect through all the nodes.
  }

  // render all nodes and all links
  renderAll({ removeNode, selectNode, selectedNodeKey }) {
    return [
      ...this.links.map(([link1, link2]) => (
        <Link link1={link1} link2={link2} />
      )),
      ...Object.entries(this.nodes).map(([k, n]) =>
        n.render({
          removeNode: noProp(() => removeNode(this.key, k)),
          selectNode: noProp(() => selectNode(this.key, k)),
          isSelected: selectedNodeKey === k,
        })
      ),
    ];
  }
}
