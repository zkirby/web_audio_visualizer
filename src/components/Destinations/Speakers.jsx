import React from "react";

export default class Speakers extends React.Component {
  componentDidMount() {
    try {
      if (this.props.parent) {
        this.props.parent.connect(this.props.parent.context.destination);
      }
    } catch {
      throw new Error("Could not connect to Speakers");
    }
  }

  render() {
    return (
      <div className="destination speakers">
        <div className="node-text">Speakers</div>
      </div>
    );
  }
}
