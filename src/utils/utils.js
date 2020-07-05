export const noProp = (fn) => (e) => {
  fn && fn();
  e.stopPropagation();
};
