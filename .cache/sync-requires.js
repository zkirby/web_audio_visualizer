const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/kirby/Desktop/web-dev/projects/web_audio_visualizer/src/pages/index.js"))),
  "component---src-pages-playground-jsx": hot(preferDefault(require("/Users/kirby/Desktop/web-dev/projects/web_audio_visualizer/src/pages/playground.jsx")))
}

