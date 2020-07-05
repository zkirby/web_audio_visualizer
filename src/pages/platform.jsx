import React from "react";
import Menu from "../components/Menu";
import AudioNode from "../components/AudioNode";
import Link from "../components/Link";
import { noProp } from "./utils.js"

import Oscillator from "../components/Sources/Oscillator";
import ConstantSource from "../components/Sources/ConstantSource";
import Speakers from "../components/Destinations/Speakers";

// Possible audio options
const nodes = {
  Sources: {
    Oscillator,
    ConstantSource,
  },
  Destinations: {
    Speakers,
  }
};

const defaultState = {
  activeNodes: {},
  activeLinks: [],
  selectedNodeType: undefined,
  currentInLink: undefined,
};
export default class Platform extends React.Component {
  state = defaultState;

  addActiveNode = ({ pageY, pageX }) => {
    this.setState(({ selectedNodeType, activeNodes }) => {
      if (!selectedNodeType) {
        return;
      }
      return {
        activeNodes: {
          ...activeNodes,
          [`${pageY}, ${pageX}`]: selectedNodeType,
        },
      };
    });
  };

  setselectedNodeType = (incomingSelection) => {
    this.setState(({ selectedNodeType }) => {
      if (selectedNodeType?.name === incomingSelection?.name) {
        return { selectedNodeType: undefined };
      }
      return { selectedNodeType: incomingSelection };
    });
  };

  clearAll = () => {
    this.setState(defaultState);
  };

  removeNode = (key) => {
    // remove node and all associated links
    this.setState(({ currentInLink, activeNodes, activeLinks }) => {
      const newNodes = { ...activeNodes };
      delete newNodes[key];

      const newLinks = [...activeLinks].filter(
        ([inLink, outLink]) => inLink !== key && outLink !== key
      );
      const newInLink = currentInLink === key ? undefined : currentInLink;
      return { activeNodes: newNodes, activeLinks: newLinks, currentInLink: newInLink };
    });
  };

  createLink = (inLink, outLink) => {
    this.setState(({ activeLinks }) => {
      return { activeLinks: [...activeLinks, [inLink, outLink]] };
    });
  };

  setInLink = (key) => {
    if (this.state.currentInLink) {
      this.createLink(this.state.currentInLink, key);
      this.setState({ currentInLink: undefined });
    } else {
      this.setState({ currentInLink: key });
    }
  };

  render() {
    return (
      <div
        style={{ cursor: this.state.selectedNodeType ? "pointer" : "default" }}
        className="platform"
        onClick={this.addActiveNode}
      >
        <div onClick={noProp()} className="super-menu">
          <Menu
            nodes={nodes}
            setselectedNodeType={this.setselectedNodeType}
            selectedNodeType={this.state.selectedNodeType}
          />
          <span onClick={this.clearAll}> clear </span>
          <span onClick={() => console.log("playing")}> play </span>
        </div>
        {this.state.activeLinks.map(([inLink, outLink]) => {
          return (
            <Link key={inLink + outLink} inLink={inLink} outLink={outLink} />
          );
        })}
        {Object.entries(this.state.activeNodes).map(([key, Node]) => {
          return (
            <AudioNode
              key={key}
              coords={key}
              audio={this.props.audio}
              Node={Node}
              currentInLink={this.state.currentInLink}
              removeNode={noProp(() => this.removeNode(key))}
              selectNode={noProp(() => this.setInLink(key))}
            />
          );
        })}
      </div>
    );
  }
}
