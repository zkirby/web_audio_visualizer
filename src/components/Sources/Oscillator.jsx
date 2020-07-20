import React from "react";
import { noProp } from '../../utils/utils';

export default class Oscillator extends React.Component {
  audio = {};
  oscillator = {};
  gainNode = {};
  state = {
    playing: false,
    isAlive: false,
  }

  componentDidMount() {
    try {
      this.audio = new (window.AudioContext || window.webkitAudioContext)();
      this.oscillator = this.audio.createOscillator();
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
    this.setState({ playing: true, isAlive: true })
  }

  stop = () => {
    this.gainNode.gain.setValueAtTime(0, this.audio.currentTime);
    this.setState({ playing: false })
  }

  render() {
    return (
      <div className="source oscillator">
        <div className="node-text">Oscillator</div>
        <div className="options">
          <button onClick={noProp(() => this.play())} disabled={this.state.playing}>play</button>
          <button onClick={noProp(() => this.stop())} disabled={!this.state.playing}>stop</button>
        </div>
      </div>
    );
  }
}
