import React from "react";
import Menu from "../components/Menu";
import AudioNode from "../components/AudioNode";

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
    selectedNode: undefined,
    activeNodes: {},
  };

  addActiveNode = ({ pageY, pageX }) => {
    this.setState(({ selectedNode, activeNodes }) => {
      if (!selectedNode) {
        return;
      }
      return {
        activeNodes: {
          ...activeNodes,
          [`${pageY}, ${pageX}`]: selectedNode,
        },
      };
    });
  };

  setSelectedNode = (incomingSelection) => {
    this.setState(({ selectedNode }) => {
      if (selectedNode?.name === incomingSelection?.name) {
        return { selectedNode: undefined };
      }
      return { selectedNode: incomingSelection };
    });
  };

  clearActiveNodes = () => {
    this.setState({ activeNodes: [] });
  };

  removeNode = (key) => {
    this.setState(({ activeNodes}) => {
      const newNodes = { ...activeNodes }
      delete newNodes[key];
      return { activeNodes: newNodes };
    })
  }

  render() {
    return (
      <div style={{ cursor: this.state.selectedNode ? 'pointer': 'default' }} className="platform" onClick={this.addActiveNode}>
        <div onClick={(e) => e.stopPropagation()} className="super-menu">
          <Menu
            nodes={nodes}
            setSelectedNode={this.setSelectedNode}
            selectedNode={this.state.selectedNode}
          />
          <span onClick={this.clearActiveNodes}> clear </span>
          <span onClick={() => console.log('playing')}> play </span>
        </div>
        {Object.entries(this.state.activeNodes).map(([key, Node]) => {
          const [pageY, pageX] = key.split(",");
          return (
            <AudioNode
              key={key}
              top={pageY}
              left={pageX}
              audio={this.props.audio}
              Node={Node}
              removeNode={() => this.removeNode(key)}
            />
          );
        })}
      </div>
    );
  }
}
