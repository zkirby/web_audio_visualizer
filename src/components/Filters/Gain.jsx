import React from "react";
import { noProp } from '../../utils/utils'

export default class Gain extends React.Component {
  constructor(props) {
    super(props);

    this.gainNode = null;
    this.state = {
      gainValue: this.props.node.options.gain || 1,
    }
  }

  componentDidMount() {
    try {
      if (this.props.parent) {
        this.gainNode = this.props.parent.context.createGain();

        this.props.parent.connect(this.gainNode);
        this.props.updateParent(this.gainNode);
      }
    } catch {
      throw new Error("Could not connect Gain");
    }
  }

  updateGainValue = (event) => {
    const gainValue = event.target.value;
    if (this.gainNode.gain) {
      this.gainNode.gain.value = gainValue;
    }

    this.props.node.options.gain = gainValue;
    this.setState({ gainValue})
  }

  render() {
    return (
      <div className="filter gain">
        <div className="node-text">Gain</div>
        <input type="number" value={this.state.gainValue} onClick={noProp(() => {})} onChange={this.updateGainValue} />
      </div>
    );
  }
}
