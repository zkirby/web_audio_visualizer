import React from "react";
import Node from "./Node";
import Link from "./Link";
import { noProp, nodeIsSource } from "../utils/utils.js";

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.key = props.rootKey;

    if (props.rootType) {
      const isSource = nodeIsSource(props.rootType);
      this.state = {
        // If this node is not a source block, then since this
        // graph is only composed of this node, there are no sinks
        sinkBlocks: isSource ? [this.key] : [],
        sourceBlocks: isSource ? [this.key] : [],
        nodes: { [this.key]: { NodeType: props.rootType, links: [] } },
      };
    } else {
      this.state = {
        sinkBlocks: [],
        sourceBlocks: [],
        nodes: {},
      };
    }
  }

  static merge(g1, g2, node1, node2) {
    const graph = <Graph key={g1.key} />;
    graph.sinkBlocks = [...g1.sinkBlocks, ...g2.sinkBlocks];
    graph.sourceBlocks = [...g1.sourceBlocks, ...g2.sourceBlocks];
    graph.nodes = { ...g1.nodes, ...g2.nodes };
    graph.links = { ...g1.links, ...g2.links };
    graph.link(node1, node2);

    return graph;
  }

  link = (node1Key, node2Key) => {
    this.nodes[node1Key].push(node2Key);
    this.nodes[node2Key].push(node1Key);
  }

  removeNode = (nodeKey) => {
    this.setState(({ nodes, sourceBlocks, sinkBlocks }) => {
      // Remove from all nodes and links
      const newNodes = {...nodes};
      const links = newNodes[nodeKey]?.links;
      delete newNodes[nodeKey];

      //TODO: recursive graph splitting

      // Remove from sources
      const newSources = [...sourceBlocks];
      let deleteAllSinks = false;
      if (newSources.includes(nodeKey)) {
        newSources.splice(newSources.indexOf(nodeKey));
        if (!newSources.length) {
          deleteAllSinks = true;
        }
      }

      // Remove from sinks
      let newSinks = [...sinkBlocks];
      if (deleteAllSinks) {
        newSinks = []; 
      } else {
        newSinks.splice(newSinks.indexOf(nodeKey));
        newSinks = [...newSinks, ...links];
      }

      //return { }
      //TODO: call passed in remove node if this is the last node
    })
  }

  render() {
    const { selectedNodeKey, removeNode, selectNode } = this.props;
    const { nodes } = this.state;

    return (
      <div>
        {/* {links.map(([link1, link2]) => (
          <Link link1={link1} link2={link2} />
        ))} */}
        {Object.entries(nodes).map(([key, nodeProps]) => (
          <Node
            {...nodeProps}
            key={key}
            coords={key}
            isSelected={selectedNodeKey === key}
            removeNode={noProp(() => this.removeNode(key))}
            selectNode={noProp(() => selectNode(this.key, key))}
          />
        ))}
      </div>
    );
  }
}
