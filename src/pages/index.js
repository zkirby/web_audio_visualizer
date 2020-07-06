import React from "react";
import Platform from "./platform";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle, faPen } from "@fortawesome/free-solid-svg-icons";

import "../styles.css";

library.add(faTimesCircle, faPen);
const Index = () => <Platform />;

export default Index;
