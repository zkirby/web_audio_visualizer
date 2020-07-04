import React from "react";
import Menu from "../components/Menu";

import Oscillator from "../components/Sources/Oscillator";
import ConstantSource from "../components/Sources/ConstantSource";

// Possible audio options
const nodes = {
  Sources: {
    Oscillator,
    ConstantSource,
  },
};
export default class Platform extends React.Component {
  state = {
    selectedNode: Oscillator,
    activeNodes: [],
  };

  addActiveNode = ({ pageY, pageX }) => {
    this.setState(({ selectedNode, activeNodes }) => {
      return {
        activeNodes: [...activeNodes, [selectedNode, { pageY, pageX }]],
      };
    });
  };

  setSelectedNode = (selectedNode, e) => {
    this.setState({ selectedNode });
    e.stopPropagation();
  };

  clearActiveNodes = (e) => {
    this.setState({ activeNodes: [] });
    e.stopPropagation();
  };

  render() {
    return (
      <div className="platform" onClick={this.addActiveNode}>
        <div className="super-menu">
          <Menu
            nodes={nodes}
            setSelectedNode={this.setSelectedNode}
            selectedNode={this.state.selectedNode}
          />
          <span onClick={this.clearActiveNodes}> clear </span>
        </div>
        {this.state.activeNodes.map(([Node, { pageY, pageX }], i) => (
          <Node key={i} top={pageY} left={pageX} audio={this.props.audio} />
        ))}
      </div>
    );
  }
}
