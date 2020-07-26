(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    GybN: function (t, r, e) {
      "use strict";
      e.r(r),
        e.d(r, "default", function () {
          return s;
        });
      var n = e("q1tI"),
        o = e.n(n);
      var a = { error: void 0 },
        s = (function (t) {
          var r, e;
          function n() {
            for (
              var r, e = arguments.length, n = new Array(e), o = 0;
              o < e;
              o++
            )
              n[o] = arguments[o];
            return (
              ((r = t.call.apply(t, [this].concat(n)) || this).state = a), r
            );
          }
          (e = t),
            ((r = n).prototype = Object.create(e.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = e);
          var s = n.prototype;
          return (
            (s.componentDidCatch = function (t) {
              var r = this;
              this.setState({ error: t }),
                setTimeout(function () {
                  return r.setState(a);
                }, 500);
            }),
            (s.render = function () {
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
        })(o.a.Component);
    },
  },
]);
//# sourceMappingURL=component---src-pages-error-jsx-8e1c86d92210564eee7b.js.map
