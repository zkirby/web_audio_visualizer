import Oscillator from "../components/Sources/Oscillator";
import ConstantSource from "../components/Sources/ConstantSource";
import Speakers from "../components/Destinations/Speakers";
import Gain from "../components/Filters/Gain";

export const nodeTypes = {
  Sources: {
    Oscillator,
    ConstantSource,
  },
  Destinations: {
    Speakers,
  },
  Filters: {
    Gain,
  },
};

export const noProp = (fn) => (e) => {
  fn && fn();
  e.stopPropagation();
};

export const nodeIsSource = (nodeType) =>
  Object.keys(nodeTypes.Sources).includes(nodeType.name);
