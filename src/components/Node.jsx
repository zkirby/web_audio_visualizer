import React from "react";
import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { noProp } from "../utils/utils.js";

export default class Node extends React.Component {
  state = {
    parent: undefined,
    editOpen: false,
    moveLeft: undefined,
    moveTop: undefined,
    moveInProgress: false,
  };

  componentDidMount() {
    document.addEventListener("mousemove", this.updateMoves.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.updateMoves);
  }

  toggleEdit = () => {
    this.setState(({ editOpen }) => ({ editOpen: !editOpen }));
  };

  updateParent = (parent) => {
    this.setState({ parent });
  };

  updateMoves = ({ pageY, pageX }) => {
    this.state.moveInProgress &&
      this.setState({ moveLeft: pageX, moveTop: pageY });
  };

  initiateMove = ({ pageY, pageX }) => {
    // This is so the node will jump right to the mouse without
    // the first mousemove event
    this.props.node.updateCoords(pageY, pageX);
    this.setState({ moveLeft: pageY, moveTop: pageX, moveInProgress: true });
  };

  stopMove = () => {
    const { moveLeft, moveTop } = this.state;
    if (moveLeft || moveTop) {
      this.props.node.updateCoords(moveTop, moveLeft);
      this.setState({
        moveInProgress: false,
        moveLeft: undefined,
        moveTop: undefined,
      });
    }
  };

  render() {
    const {
      graphKey,
      selectNode,
      selectedNodeKey,
      removeNode,
      allNodes,
      parent,
      node,
    } = this.props;
    const { moveLeft, moveTop } = this.state;
    const [top, left] = node.coords.split(",");

    // recalculate the children and new all nodes, there is a possibility this changed
    // if a node was just added to the parent graph
    const newAllNodes = [...allNodes];
    newAllNodes.splice(
      allNodes.findIndex((n) => n === node),
      1
    );
    const childNodes = allNodes.filter((n) => node.isLinked(n));

    return (
      <div onClick={noProp(() => this.stopMove())}>
        {/* Node */}
        <div
          onClick={() => node.canAddLink() && selectNode(graphKey, node)}
          style={{ left: `${moveLeft || left}px`, top: `${moveTop || top}px` }}
          className={`node ${selectedNodeKey === node ? "selected-node" : ""} ${
            node.canAddLink() ? "" : "max-links"
          }`}
        >
          <div className="node-overlay">
            <div className="node-overlay-top">
              <div
                onClick={noProp(() => removeNode(graphKey, node))}
                className="close"
              >
                <FontAwesomeIcon icon="times-circle" />
              </div>
              <div className="edit" onClick={noProp(() => this.toggleEdit())}>
                <FontAwesomeIcon icon="pen" />
              </div>
            </div>
            <div className="node-overlay-bottom">
              <div
                className="move"
                onClick={noProp((e) => this.initiateMove(e))}
              >
                <FontAwesomeIcon icon="arrows-alt" />
              </div>
            </div>
          </div>
          <node.nodeType
            updateParent={this.updateParent}
            editOpen={this.state.editOpen}
            toggleEdit={this.toggleEdit}
            parent={parent}
            node={node}
          />
        </div>
        {/* Children */}
        <div>
          {this.state.parent &&
            node
              .linkCoords()
              .map((outLink) => (
                <Link
                  key={`${outLink}-${node.coords}`}
                  link1={outLink}
                  link2={node.coords}
                />
              ))}
          {this.state.parent &&
            childNodes.map((node) => (
              <Node
                key={node.coords}
                graphKey={graphKey}
                node={node}
                allNodes={newAllNodes}
                selectedNodeKey={selectedNodeKey}
                parent={this.state.parent}
                removeNode={removeNode}
                selectNode={selectNode}
              />
            ))}
        </div>
      </div>
    );
  }
}
