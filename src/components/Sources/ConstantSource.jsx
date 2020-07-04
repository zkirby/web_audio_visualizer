import React from "react";

export default class ConstantSource extends React.Component {
  render() {
    const { left, top } = this.props;
    return (
      <div style={{ left, top }} className="source constant-source">
        <div>Constant Source</div>
      </div>
    );
  }
}
