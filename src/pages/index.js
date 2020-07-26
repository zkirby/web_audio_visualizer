import React from "react";
import Platform from "./platform";
import Home from "./Home";
import Error from "./Error";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimesCircle,
  faPen,
  faArrowsAlt,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles.css";

library.add(faTimesCircle, faPen, faArrowsAlt, faQuestionCircle);
const Index = () => (
  <Router>
    <Error>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/playground" component={Platform} />
      </Switch>
    </Error>
  </Router>
);

export default Index;
