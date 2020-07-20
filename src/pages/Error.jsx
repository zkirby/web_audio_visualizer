import React from "react";

const defaultState = { error: undefined };
export default class Error extends React.Component {
  state = defaultState;

  componentDidCatch(error) {
    console.log("error", error);
    this.setState({ error });
    setTimeout(() => this.setState(defaultState), 500);
  }

  render() {
    return (
      <div>
        {this.state.error && <div>{this.state.error.message}</div>}
        {this.props.children}
      </div>
    );
  }
}
