(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "OmL/": function (t, e, r) {},
    RXBc: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r("q1tI"),
        o = r.n(n);
      var a = { error: void 0 },
        i = (function (t) {
          var e, r;
          function n() {
            for (
              var e, r = arguments.length, n = new Array(r), o = 0;
              o < r;
              o++
            )
              n[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(n)) || this).state = a), e
            );
          }
          (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var i = n.prototype;
          return (
            (i.componentDidCatch = function (t) {
              var e = this;
              this.setState({ error: t }),
                setTimeout(function () {
                  return e.setState(a);
                }, 500);
            }),
            (i.render = function () {
              return o.a.createElement(
                "div",
                null,
                this.state.error &&
                  o.a.createElement(
                    "div",
                    { className: "error" },
                    this.state.error.message
                  ),
                this.props.children
              );
            }),
            n
          );
        })(o.a.Component),
        c = r("Wbzz"),
        s = r("7O5W"),
        l = r("wHSu"),
        p = JSON.stringify({
          nodes: {
            "379, 363": { type: "Oscillator", links: ["379, 809"] },
            "379, 809": { type: "Speakers", links: ["379, 363"] },
          },
        });
      r("OmL/");
      s.b.add(l.d, l.b, l.a, l.c);
      e.default = function () {
        return o.a.createElement(
          i,
          null,
          o.a.createElement("h2", null, "Audio.play"),
          o.a.createElement(c.Link, { to: "/playground" }, "Go play"),
          o.a.createElement(
            c.Link,
            { to: "/playground", state: { config: p } },
            "With State"
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-8aeb8375d9ba6841b69c.js.map