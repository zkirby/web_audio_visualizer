(window.webpackJsonp = window.webpackJsonp || []).push([
  [6, 4, 5],
  {
    GybN: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, "default", function () {
          return c;
        });
      var n = r("q1tI"),
        a = r.n(n);
      var o = { error: void 0 },
        c = (function (t) {
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
          var c = n.prototype;
          return (
            (c.componentDidCatch = function (t) {
              var e = this;
              this.setState({ error: t }),
                setTimeout(function () {
                  return e.setState(o);
                }, 500);
            }),
            (c.render = function () {
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
    KWJC: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, "default", function () {
          return u;
        });
      var n = r("q1tI"),
        a = r.n(n),
        o = r("55Ip"),
        c = JSON.stringify({
          nodes: {
            "379, 363": { type: "Oscillator", links: ["379, 809"] },
            "379, 809": { type: "Speakers", links: ["379, 363"] },
          },
        });
      var u = (function (t) {
        var e, r;
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          (r = t),
          ((e = n).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = r),
          (n.prototype.render = function () {
            return a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement("h2", null, "Audio.play"),
              a.a.createElement(
                o.b,
                { to: { pathname: "/playground" } },
                "Go play"
              ),
              a.a.createElement(
                o.b,
                { to: { pathname: "/playground", state: { config: c } } },
                " ",
                "With State",
                " "
              )
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
        o = r("hCUD"),
        c = r("KWJC"),
        u = r("GybN"),
        p = r("7O5W"),
        l = r("wHSu"),
        i = r("55Ip"),
        s = r("Ty5D");
      r("OmL/");
      p.b.add(l.d, l.b, l.a, l.c);
      e.default = function () {
        return a.a.createElement(
          i.a,
          null,
          a.a.createElement(
            u.default,
            null,
            a.a.createElement(
              s.c,
              null,
              a.a.createElement(s.a, {
                exact: !0,
                path: "/",
                component: c.default,
              }),
              a.a.createElement(s.a, {
                path: "/playground",
                component: o.default,
              })
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-d3d007704b2cb4e3bd28.js.map
