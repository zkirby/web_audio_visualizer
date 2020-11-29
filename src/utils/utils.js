import Oscillator from "../components/Sources/Oscillator";
import Key from "../components/Sources/Key";
import ConstantSource from "../components/Sources/ConstantSource";
import Speakers from "../components/Destinations/Speakers";
import Gain from "../components/Filters/Gain";
import Delay from "../components/Filters/Delay";
import StereoPanner from "../components/Filters/StereoPanner";

export const nodeTypes = {
  Sources: {
    Oscillator,
    "Constant Source": ConstantSource,
    Key,
  },
  Destinations: {
    Speakers,
  },
  Filters: {
    Gain,
    Delay,
    "Stereo Panner": StereoPanner,
  },
};
export const nameToNode = {
  Oscillator,
  ConstantSource,
  Speakers,
  Gain,
  Delay,
  StereoPanner,
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
