import React from "react";

export default class Oscillator extends React.Component {
  render() {
    const { left, top } = this.props;
    return (
      <div style={{ left, top }} className="source oscillator">
        <div>Oscillator</div>
      </div>
    );
  }
}
