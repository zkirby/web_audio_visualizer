import Oscillator from "../components/Sources/Oscillator";
import ConstantSource from "../components/Sources/ConstantSource";
import Speakers from "../components/Destinations/Speakers";
import Gain from "../components/Filters/Gain";
import Delay from "../components/Filters/Delay";

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
    Delay,
  },
};

export const noProp = (fn) => (e) => {
  fn && fn(e);
  e.stopPropagation();
};

export const nodeIsSource = (nodeType) =>
  Object.keys(nodeTypes.Sources).includes(nodeType.name);

export const fakeAudio = {
  context: new Proxy({}, { get: () => () => fakeAudio }),
  connect: () => {},
};
