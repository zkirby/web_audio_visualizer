import React from "react";
import Platform from "./platform";
import "../styles.css";

const audio = window.AudioContext || window.webkitAudioContext;
const Index = () => <Platform audio={audio} />;

export default Index;
