import React from "react";
import Platform from "./platform";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle, faPen } from "@fortawesome/free-solid-svg-icons";

import "../styles.css";

library.add(faTimesCircle, faPen);
const audio = window.AudioContext || window.webkitAudioContext;
const Index = () => <Platform audio={audio} />;

export default Index;
