(window.webpackJsonp = window.webpackJsonp || []).push([
  [5, 3],
  {
    GybN: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, "default", function () {
          return i;
        });
      var n = r("q1tI"),
        a = r.n(n);
      var o = { error: void 0 },
        i = (function (t) {
          var e, r;
          function n() {
            for (
              var e, r = arguments.length, n = new Array(r), a = 0;
              a < r;
              a++
            )
              n[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(n)) || this).state = o), e
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
                  return e.setState(o);
                }, 500);
            }),
            (i.render = function () {
              return a.a.createElement(
                "div",
                null,
                this.state.error &&
                  a.a.createElement(
                    "div",
                    { className: "error" },
                    this.state.error.message
                  ),
                this.props.children
              );
            }),
            n
          );
        })(a.a.Component);
    },
    "OmL/": function (t, e, r) {},
    RXBc: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r("q1tI"),
        a = r.n(n),
        o = r("GybN"),
        i = r("Wbzz"),
        c = r("7O5W"),
        s = r("wHSu"),
        u = r("XMYm");
      r("OmL/");
      c.b.add(s.d, s.b, s.a, s.c);
      e.default = function () {
        return a.a.createElement(
          o.default,
          null,
          a.a.createElement("h2", null, "Audio.play"),
          a.a.createElement(i.Link, { to: "/playground" }, "Go play"),
          a.a.createElement(
            i.Link,
            { to: "/playground", state: { config: u.a } },
            "With State"
          )
        );
      };
    },
    XMYm: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return n;
      });
      var n = JSON.stringify({
        nodes: {
          "379, 363": { type: "Oscillator", links: ["379, 809"] },
          "379, 809": { type: "Speakers", links: ["379, 363"] },
        },
      });
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-fc8136571431742a3902.js.map
