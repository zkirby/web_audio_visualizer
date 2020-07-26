import React from "react";

export default class Link extends React.Component {
  render() {
    const [y1, x1] = this.props.link1.split(",");
    const [y2, x2] = this.props.link2.split(",");
    return (
      <div className="link">
        <svg height="100%" width="100%">
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="black"
            strokeWidth="3"
          />
        </svg>
      </div>
    );
  }
}
