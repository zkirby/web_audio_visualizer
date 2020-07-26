import React from "react";
import Error from "../components/Error";
import { Link } from "gatsby";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimesCircle,
  faPen,
  faArrowsAlt,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { SINGLE_OSCILL } from "../utils/defaults";

import "../styles.css";

library.add(faTimesCircle, faPen, faArrowsAlt, faQuestionCircle);
const Index = () => (
  <Error>
    <h2>Audio.play</h2>
    <Link to="/playground">Go play</Link>
    <Link to="/playground" state={{ config: SINGLE_OSCILL }}>
      With State
    </Link>
  </Error>
);

export default Index;
