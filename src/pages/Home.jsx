import React from "react";
import { Link } from "react-router-dom";
import { SINGLE_OSCILL } from "../utils/defaults";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <h2>Audio.play</h2>
        <Link
          to={{
            pathname: "/playground",
          }}
        >
          Go play
        </Link>
        <Link
          to={{ pathname: "/playground", state: { config: SINGLE_OSCILL } }}
        >
          {" "}
          With State{" "}
        </Link>
      </>
    );
  }
}
