import React from "react";
import { noProp } from "../../utils/utils";

export default class Oscillator extends React.Component {
  audio = {};
  oscillator = {};
  gainNode = {};

  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      isAlive: false,
      frequency: props.node.options.frequency || 440,
      detune: props.node.options.detune || 100,
      type: props.node.options.type || "sine",
    };
  }

  componentDidMount() {
    try {
      this.audio = new (window.AudioContext || window.webkitAudioContext)();
      this.oscillator = this.audio.createOscillator();
      this.updateOscillator(this.state.frequency, "frequency");
      this.updateOscillator(this.state.detune, "detune");
      this.updateOscillator(this.state.type, "type");
      this.gainNode = this.audio.createGain();

      this.oscillator.connect(this.gainNode);
      this.props.updateParent(this.gainNode);
    } catch {
      throw new Error("Could not connect Oscillator");
    }
  }

  componentWillUnmount() {
    if (this.state.isAlive) {
      this.oscillator.stop();
    }
    this.audio.close();
  }

  play = () => {
    if (!this.state.isAlive) {
      this.oscillator.start();
    } else {
      this.gainNode.gain.setValueAtTime(1, this.audio.currentTime);
    }
    this.setState({ playing: true, isAlive: true });
  };

  stop = () => {
    this.gainNode.gain.setValueAtTime(0, this.audio.currentTime);
    this.setState({ playing: false });
  };

  updateEditAttr(event, type) {
    const value = event.target.value;

    this.updateOscillator(value, type);
    this.props.node.options[type] = value;
    this.setState({ [type]: value });
  }

  updateOscillator(value, type) {
    switch (type) {
      case "frequency":
        this.oscillator.frequency.setValueAtTime(value, this.audio.currentTime);
        break;
      case "detune":
        this.oscillator.detune.setValueAtTime(value, this.audio.currentTime);
        break;
      case "type":
        this.oscillator.type = value;
        break;
    }
  }

  render() {
    const { frequency, type, detune } = this.state;
    return (
      <>
        {this.props.editOpen && (
          <div className="node-edit-overlay">
            <div
              className="close"
              onClick={noProp(() => this.props.toggleEdit())}
            >
              X
            </div>
            <div onClick={noProp(() => {})}>
              <label>
                frequency:{" "}
                <input
                  type="number"
                  value={frequency}
                  onChange={(e) => this.updateEditAttr(e, "frequency")}
                />
              </label>
              <label>
                detune:{" "}
                <input
                  type="number"
                  value={detune}
                  onChange={(e) => this.updateEditAttr(e, "detune")}
                />
              </label>
              <select
                value={type}
                onChange={(e) => this.updateEditAttr(e, "type")}
                name="type"
              >
                <option value="sine">Sine</option>
                <option value="square">Square</option>
                <option value="sawtooth">Sawtooth</option>
                <option value="triangle">Triangle</option>
              </select>
            </div>
          </div>
        )}
        <div className="source oscillator">
          <div className="node-text">Oscillator</div>
          <div className="options">
            <button
              onClick={noProp(() => this.play())}
              disabled={this.state.playing}
            >
              play
            </button>
            <button
              onClick={noProp(() => this.stop())}
              disabled={!this.state.playing}
            >
              stop
            </button>
          </div>
        </div>
      </>
    );
  }
}
