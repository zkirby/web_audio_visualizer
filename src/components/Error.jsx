import React from "react";

const defaultState = { error: undefined };
export default class Error extends React.Component {
  state = defaultState;

  componentDidCatch(error) {
    this.setState({ error });
    setTimeout(() => this.setState(defaultState), 500);
  }

  render() {
    return (
      <div>
        {this.state.error && (
          <div className="error">{this.state.error.message}</div>
        )}
        {this.props.children}
      </div>
    );
  }
}
