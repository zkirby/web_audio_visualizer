import React from "react";
import { noProp } from "../../utils/utils";
import notes from "../../utils/notes";

export default class Key extends React.Component {
  audio = {};
  oscillator = {};
  gainNode = {};

  constructor(props) {
    super(props);

    this.state = {
      frequency: props.node.options.frequency || 440,
      playing: false,
      isAlive: false,
    };
  }

  componentDidMount() {
    try {
      this.audio = new (window.AudioContext || window.webkitAudioContext)();
      const sineTerms = new Float32Array([0, 0, 1, 0, 1]);
      const cosineTerms = new Float32Array(sineTerms.length);
      const customWaveform = this.audio.createPeriodicWave(
        cosineTerms,
        sineTerms
      );

      this.oscillator = this.audio.createOscillator();
      this.oscillator.setPeriodicWave(customWaveform);
      this.updateOscillator(this.state.frequency, "frequency");
      this.gainNode = this.audio.createGain();

      this.oscillator.connect(this.gainNode);
      this.props.updateParent(this.gainNode);
    } catch (e) {
      console.log(e);
      throw new Error("Could not connect Key");
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
    }
  }

  render() {
    const { frequency } = this.state;
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
              <select
                value={frequency}
                onChange={(e) => this.updateEditAttr(e, "frequency")}
                name="frequency"
              >
                {Object.entries(notes).map(([note, freq]) => (
                  <option key={note} value={freq}>
                    {note}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        <div className="source oscillator">
          <div className="node-text">Key</div>
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
