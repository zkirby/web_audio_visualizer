import React from "react";
import { noProp } from "../../utils/utils";

export default class Delay extends React.Component {
  constructor(props) {
    super(props);

    this.delayNode = null;
    this.state = {
      delayValue: props.node.options.delay || 0,
    };
  }

  componentDidMount() {
    try {
      if (this.props.parent) {
        this.delayNode = this.props.parent.context.createDelay();
        this.setDelay(this.state.delayValue);

        this.props.parent.connect(this.delayNode);
        this.props.updateParent(this.delayNode);
      }
    } catch {
      throw new Error("Could not connect Delay");
    }
  }

  updateDelayValue = (event) => {
    const delayValue = event.target.value;

    this.setDelay(delayValue);
    this.setState({ delayValue });
  };

  setDelay = (value) => {
    if (this.delayNode.delayTime) {
      this.delayNode.delayTime.value = value;
    }
    this.props.node.options.delay = value;
  };

  render() {
    return (
      <div className="filter single-input delay">
        <div className="node-text">Delay</div>
        <input
          type="number"
          value={this.state.delayValue}
          onClick={noProp(() => {})}
          onChange={this.updateDelayValue}
        />
      </div>
    );
  }
}
