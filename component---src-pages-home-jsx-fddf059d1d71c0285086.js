(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    KWJC: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function () {
          return c;
        });
      var r = n("q1tI"),
        o = n.n(r),
        a = n("55Ip"),
        p = JSON.stringify({
          nodes: {
            "379, 363": { type: "Oscillator", links: ["379, 809"] },
            "379, 809": { type: "Speakers", links: ["379, 363"] },
          },
        });
      var c = (function (t) {
        var e, n;
        function r() {
          return t.apply(this, arguments) || this;
        }
        return (
          (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n),
          (r.prototype.render = function () {
            return o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement("h2", null, "Audio.play"),
              o.a.createElement(
                a.b,
                { to: { pathname: "/playground" } },
                "Go play"
              ),
              o.a.createElement(
                a.b,
                { to: { pathname: "/playground", state: { config: p } } },
                " ",
                "With State",
                " "
              )
            );
          }),
          r
        );
      })(o.a.Component);
    },
  },
]);
//# sourceMappingURL=component---src-pages-home-jsx-fddf059d1d71c0285086.js.map
