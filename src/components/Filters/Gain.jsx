import React from "react";
import { noProp } from "../../utils/utils";

export default class Gain extends React.Component {
  constructor(props) {
    super(props);

    this.gainNode = null;
    this.state = {
      gainValue: props.node.options.gain || 1,
    };
  }

  componentDidMount() {
    try {
      if (this.props.parent) {
        this.gainNode = this.props.parent.context.createGain();
        this.setGain(this.state.gainValue);

        this.props.parent.connect(this.gainNode);
        this.props.updateParent(this.gainNode);
      }
    } catch {
      throw new Error("Could not connect Gain");
    }
  }

  updateGainValue = (event) => {
    const gainValue = event.target.value;

    this.setGain(gainValue);
    this.setState({ gainValue });
  };

  setGain = (value) => {
    if (this.gainNode.gain) {
      this.gainNode.gain.value = value;
    }
    this.props.node.options.gain = value;
  };

  render() {
    return (
      <div className="filter single-input gain">
        <div className="node-text">Gain</div>
        <input
          type="number"
          value={this.state.gainValue}
          onClick={noProp(() => {})}
          onChange={this.updateGainValue}
        />
      </div>
    );
  }
}
