import React from "react";

export default class Gain extends React.Component {
  gainNode = null;

  componentDidMount() {
    try {
      if (this.props.parent) {
        this.gainNode = this.props.parent.context.createGain();

        this.props.parent.connect(this.gainNode);
        this.props.updateParent(this.gainNode);
      }
    } catch {
      throw new Error("Could not connect Oscillator");
    }
  }

  render() {
    return (
      <div className="filter gain">
        <div className="node-text">Gain</div>
      </div>
    );
  }
}
