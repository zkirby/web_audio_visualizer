import React from "react";
import { noProp } from "../../utils/utils";

export default class StereoPanner extends React.Component {
  constructor(props) {
    super(props);

    this.sPanner = null;
    this.state = {
      panValue: props.node.options.pan || 0,
    };
  }

  componentDidMount() {
    try {
      if (this.props.parent) {
        this.sPanner = this.props.parent.context.createStereoPanner();
        this.setPan(this.state.panValue);

        this.props.parent.connect(this.sPanner);
        this.props.updateParent(this.sPanner);
      }
    } catch {
      throw new Error("Could not connect Stereo Panner");
    }
  }

  updateSPanner = (event) => {
    const panValue = event.target.value;

    this.setPan(panValue);
    this.setState({ panValue });
  };

  setPan = (value) => {
    if (this.sPanner.pan) {
      this.sPanner.pan.setValueAtTime(value, this.sPanner.context.currentTime);
    }
    this.props.node.options.pan = value;
  };

  render() {
    return (
      <div className="filter single-input s-pan">
        <div className="node-text">Stereo Panner</div>
        <input
          type="range"
          value={this.state.panValue}
          onClick={noProp(() => {})}
          onChange={this.updateSPanner}
          min="-1"
          max="1"
          step="0.1"
        ></input>
      </div>
    );
  }
}
