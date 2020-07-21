import React from "react";
import { noProp } from "../../utils/utils";

export default class ConstantSource extends React.Component {
  audio = {};
  csource = {};
  gainNode = {};

  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      isAlive: false,
      offset: props.node.options.offset || 1.0,
    };
  }

  componentDidMount() {
    try {
      this.audio = new (window.AudioContext || window.webkitAudioContext)();
      this.csource = this.audio.createConstantSource();
      this.updateCSource(this.state.offset);
      this.gainNode = this.audio.createGain();

      this.csource.connect(this.gainNode);
      this.props.updateParent(this.gainNode);
    } catch (e) {
      console.log(e);
      throw new Error("Could not connect Oscillator");
    }
  }

  componentWillUnmount() {
    if (this.state.isAlive) {
      this.csource.stop();
    }
    this.audio.close();
  }

  play = () => {
    if (!this.state.isAlive) {
      this.csource.start();
    } else {
      this.gainNode.gain.setValueAtTime(1, this.audio.currentTime);
    }
    this.setState({ playing: true, isAlive: true });
  };

  stop = () => {
    this.gainNode.gain.setValueAtTime(0, this.audio.currentTime);
    this.setState({ playing: false });
  };

  handleUpdateOffset = (event) => {
    const value = event.target.value;

    this.updateCSource(value);
    this.setState({ offset: value });
  };

  updateCSource(value) {
    this.csource.offset.value = value;
    this.props.node.options.offset = value;
  }

  render() {
    const { offset } = this.state;
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
                offset:{" "}
                <input
                  type="number"
                  value={offset}
                  onChange={this.handleUpdateOffset}
                />
              </label>
            </div>
          </div>
        )}
        <div className="source constant-source">
          <div className="node-text">Constant Source</div>
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
