import React from "react";
import Error from "../components/Error";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimesCircle,
  faPen,
  faArrowsAlt,
  faQuestionCircle,
  faPlayCircle,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { SINGLE_OSCILL } from "../utils/defaults";

import "../styles.css";

library.add(
  faTimesCircle,
  faPen,
  faArrowsAlt,
  faQuestionCircle,
  faPlayCircle,
  faPlay
);
const Index = () => (
  <div className="main-container">
    <Helmet>
      <meta charSet="utf-8" />
      <title>audio.play</title>
    </Helmet>
    <Error >
      <div className="play-container">
        <h2>Audio.play</h2>
        <div class="play-cirlces">
          <Link to="/playground">
            <FontAwesomeIcon icon="play" />
            <span>free form</span>
          </Link>
          <Link to="/playground" state={{ config: SINGLE_OSCILL }}>
            <FontAwesomeIcon icon="play" />
            <span>with default setup</span>
          </Link>
        </div>
      </div>
    </Error>
  </div>
);

export default Index;
