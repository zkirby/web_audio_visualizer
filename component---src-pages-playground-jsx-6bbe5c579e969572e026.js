(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "+ar0": function (e, t, n) {
      var o = n("P8UN");
      o(o.S + o.F * !n("QPJK"), "Object", { defineProperties: n("YmeT") });
    },
    "PZd/": function (e, t, n) {
      var o = n("P8UN"),
        r = n("ys0W")(!0);
      o(o.S, "Object", {
        entries: function (e) {
          return r(e);
        },
      });
    },
    RBdO: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return X;
        });
      n("q8oJ"),
        n("cFtU"),
        n("m210"),
        n("4DPX"),
        n("v9g0"),
        n("PZd/"),
        n("gu/5"),
        n("eoYm"),
        n("rzGZ"),
        n("Dq+y"),
        n("8npG"),
        n("YbXK"),
        n("ToIb"),
        n("HQhv"),
        n("pJf4"),
        n("E5k/");
      var o = n("q1tI"),
        r = n.n(o);
      n("zTTH");
      var a = (function (e) {
          var t, n;
          function o() {
            return e.apply(this, arguments) || this;
          }
          return (
            (n = e),
            ((t = o).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (o.prototype.render = function () {
              var e = this.props.link1.coords.split(","),
                t = e[0],
                n = e[1],
                o = this.props.link2.coords.split(","),
                a = o[0],
                i = o[1];
              return r.a.createElement(
                "div",
                { className: "link" },
                r.a.createElement(
                  "svg",
                  { height: "100%", width: "100%" },
                  r.a.createElement("line", {
                    x1: n,
                    y1: t,
                    x2: i,
                    y2: a,
                    stroke: "black",
                    strokeWidth: "3",
                  })
                )
              );
            }),
            o
          );
        })(r.a.Component),
        i =
          (n("n7j8"),
          n("TAD1"),
          n("HXzo"),
          n("U6Bt"),
          n("sC2a"),
          n("AqHK"),
          n("C9fy"),
          n("MIFh"),
          n("sc67"),
          n("+ar0"),
          n("xtjI"),
          n("JHok"),
          n("OeI1"),
          n("Ggvi"),
          n("R48M"),
          n("7O5W")),
        s = n("17x9"),
        c = n.n(s);
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function f(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              a = Object.keys(e);
            for (o = 0; o < a.length; o++)
              (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (n = a[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function y(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function m(e) {
        return (
          (t = e),
          (t -= 0) == t
            ? e
            : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : "";
              }))
                .substr(0, 1)
                .toLowerCase() + e.substr(1)
        );
        var t;
      }
      function h(e) {
        return e
          .split(";")
          .map(function (e) {
            return e.trim();
          })
          .filter(function (e) {
            return e;
          })
          .reduce(function (e, t) {
            var n,
              o = t.indexOf(":"),
              r = m(t.slice(0, o)),
              a = t.slice(o + 1).trim();
            return (
              r.startsWith("webkit")
                ? (e[((n = r), n.charAt(0).toUpperCase() + n.slice(1))] = a)
                : (e[r] = a),
              e
            );
          }, {});
      }
      var v = !1;
      try {
        v = !0;
      } catch (J) {}
      function g(e) {
        return null === e
          ? null
          : "object" === l(e) && e.prefix && e.iconName
          ? e
          : Array.isArray(e) && 2 === e.length
          ? { prefix: e[0], iconName: e[1] }
          : "string" == typeof e
          ? { prefix: "fas", iconName: e }
          : void 0;
      }
      function b(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? u({}, e, t)
          : {};
      }
      function N(e) {
        var t = e.forwardedRef,
          n = f(e, ["forwardedRef"]),
          o = n.icon,
          r = n.mask,
          a = n.symbol,
          s = n.className,
          c = n.title,
          l = g(o),
          p = b(
            "classes",
            [].concat(
              y(
                (function (e) {
                  var t,
                    n = e.spin,
                    o = e.pulse,
                    r = e.fixedWidth,
                    a = e.inverse,
                    i = e.border,
                    s = e.listItem,
                    c = e.flip,
                    l = e.size,
                    p = e.rotation,
                    d = e.pull,
                    f =
                      (u(
                        (t = {
                          "fa-spin": n,
                          "fa-pulse": o,
                          "fa-fw": r,
                          "fa-inverse": a,
                          "fa-border": i,
                          "fa-li": s,
                          "fa-flip-horizontal":
                            "horizontal" === c || "both" === c,
                          "fa-flip-vertical": "vertical" === c || "both" === c,
                        }),
                        "fa-".concat(l),
                        null != l
                      ),
                      u(t, "fa-rotate-".concat(p), null != p && 0 !== p),
                      u(t, "fa-pull-".concat(d), null != d),
                      u(t, "fa-swap-opacity", e.swapOpacity),
                      t);
                  return Object.keys(f)
                    .map(function (e) {
                      return f[e] ? e : null;
                    })
                    .filter(function (e) {
                      return e;
                    });
                })(n)
              ),
              y(s.split(" "))
            )
          ),
          m = b(
            "transform",
            "string" == typeof n.transform
              ? i.c.transform(n.transform)
              : n.transform
          ),
          h = b("mask", g(r)),
          O = Object(i.a)(l, d({}, p, {}, m, {}, h, { symbol: a, title: c }));
        if (!O)
          return (
            (function () {
              var e;
              !v &&
                console &&
                "function" == typeof console.error &&
                (e = console).error.apply(e, arguments);
            })("Could not find icon", l),
            null
          );
        var E = O.abstract,
          S = { ref: t };
        return (
          Object.keys(n).forEach(function (e) {
            N.defaultProps.hasOwnProperty(e) || (S[e] = n[e]);
          }),
          k(E[0], S)
        );
      }
      (N.displayName = "FontAwesomeIcon"),
        (N.propTypes = {
          border: c.a.bool,
          className: c.a.string,
          mask: c.a.oneOfType([c.a.object, c.a.array, c.a.string]),
          fixedWidth: c.a.bool,
          inverse: c.a.bool,
          flip: c.a.oneOf(["horizontal", "vertical", "both"]),
          icon: c.a.oneOfType([c.a.object, c.a.array, c.a.string]),
          listItem: c.a.bool,
          pull: c.a.oneOf(["right", "left"]),
          pulse: c.a.bool,
          rotation: c.a.oneOf([0, 90, 180, 270]),
          size: c.a.oneOf([
            "lg",
            "xs",
            "sm",
            "1x",
            "2x",
            "3x",
            "4x",
            "5x",
            "6x",
            "7x",
            "8x",
            "9x",
            "10x",
          ]),
          spin: c.a.bool,
          symbol: c.a.oneOfType([c.a.bool, c.a.string]),
          title: c.a.string,
          transform: c.a.oneOfType([c.a.string, c.a.object]),
          swapOpacity: c.a.bool,
        }),
        (N.defaultProps = {
          border: !1,
          className: "",
          mask: null,
          fixedWidth: !1,
          inverse: !1,
          flip: null,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          symbol: !1,
          title: "",
          transform: null,
          swapOpacity: !1,
        });
      var k = function e(t, n) {
        var o =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("string" == typeof n) return n;
        var r = (n.children || []).map(function (n) {
            return e(t, n);
          }),
          a = Object.keys(n.attributes || {}).reduce(
            function (e, t) {
              var o = n.attributes[t];
              switch (t) {
                case "class":
                  (e.attrs.className = o), delete n.attributes.class;
                  break;
                case "style":
                  e.attrs.style = h(o);
                  break;
                default:
                  0 === t.indexOf("aria-") || 0 === t.indexOf("data-")
                    ? (e.attrs[t.toLowerCase()] = o)
                    : (e.attrs[m(t)] = o);
              }
              return e;
            },
            { attrs: {} }
          ),
          i = o.style,
          s = void 0 === i ? {} : i,
          c = f(o, ["style"]);
        return (
          (a.attrs.style = d({}, a.attrs.style, {}, s)),
          t.apply(void 0, [n.tag, d({}, a.attrs, {}, c)].concat(y(r)))
        );
      }.bind(null, r.a.createElement);
      var O = (function (e) {
        var t, n;
        function o(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).audio = {}),
            (n.oscillator = {}),
            (n.gainNode = {}),
            (n.play = function () {
              n.state.isAlive
                ? n.gainNode.gain.setValueAtTime(1, n.audio.currentTime)
                : n.oscillator.start(),
                n.setState({ playing: !0, isAlive: !0 });
            }),
            (n.stop = function () {
              n.gainNode.gain.setValueAtTime(0, n.audio.currentTime),
                n.setState({ playing: !1 });
            }),
            (n.state = {
              playing: !1,
              isAlive: !1,
              frequency: t.node.options.frequency || 440,
              detune: t.node.options.detune || 100,
              type: t.node.options.type || "sine",
            }),
            n
          );
        }
        (n = e),
          ((t = o).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var a = o.prototype;
        return (
          (a.componentDidMount = function () {
            try {
              (this.audio = new (window.AudioContext ||
                window.webkitAudioContext)()),
                (this.oscillator = this.audio.createOscillator()),
                this.updateOscillator(this.state.frequency, "frequency"),
                this.updateOscillator(this.state.detune, "detune"),
                this.updateOscillator(this.state.type, "type"),
                (this.gainNode = this.audio.createGain()),
                this.oscillator.connect(this.gainNode),
                this.props.updateParent(this.gainNode);
            } catch (e) {
              throw new Error("Could not connect Oscillator");
            }
          }),
          (a.componentWillUnmount = function () {
            this.state.isAlive && this.oscillator.stop(), this.audio.close();
          }),
          (a.updateEditAttr = function (e, t) {
            var n,
              o = e.target.value;
            this.updateOscillator(o, t),
              (this.props.node.options[t] = o),
              this.setState((((n = {})[t] = o), n));
          }),
          (a.updateOscillator = function (e, t) {
            switch (t) {
              case "frequency":
                this.oscillator.frequency.setValueAtTime(
                  e,
                  this.audio.currentTime
                );
                break;
              case "detune":
                this.oscillator.detune.setValueAtTime(
                  e,
                  this.audio.currentTime
                );
                break;
              case "type":
                this.oscillator.type = e;
            }
          }),
          (a.render = function () {
            var e = this,
              t = this.state,
              n = t.frequency,
              o = t.type,
              a = t.detune;
            return r.a.createElement(
              r.a.Fragment,
              null,
              this.props.editOpen &&
                r.a.createElement(
                  "div",
                  { className: "node-edit-overlay" },
                  r.a.createElement(
                    "div",
                    {
                      className: "close",
                      onClick: x(function () {
                        return e.props.toggleEdit();
                      }),
                    },
                    "X"
                  ),
                  r.a.createElement(
                    "div",
                    { onClick: x(function () {}) },
                    r.a.createElement(
                      "label",
                      null,
                      "frequency:",
                      " ",
                      r.a.createElement("input", {
                        type: "number",
                        value: n,
                        onChange: function (t) {
                          return e.updateEditAttr(t, "frequency");
                        },
                      })
                    ),
                    r.a.createElement(
                      "label",
                      null,
                      "detune:",
                      " ",
                      r.a.createElement("input", {
                        type: "number",
                        value: a,
                        onChange: function (t) {
                          return e.updateEditAttr(t, "detune");
                        },
                      })
                    ),
                    r.a.createElement(
                      "select",
                      {
                        value: o,
                        onChange: function (t) {
                          return e.updateEditAttr(t, "type");
                        },
                        name: "type",
                      },
                      r.a.createElement("option", { value: "sine" }, "Sine"),
                      r.a.createElement(
                        "option",
                        { value: "square" },
                        "Square"
                      ),
                      r.a.createElement(
                        "option",
                        { value: "sawtooth" },
                        "Sawtooth"
                      ),
                      r.a.createElement(
                        "option",
                        { value: "triangle" },
                        "Triangle"
                      )
                    )
                  )
                ),
              r.a.createElement(
                "div",
                { className: "source oscillator" },
                r.a.createElement(
                  "div",
                  { className: "node-text" },
                  "Oscillator"
                ),
                r.a.createElement(
                  "div",
                  { className: "options" },
                  r.a.createElement(
                    "button",
                    {
                      onClick: x(function () {
                        return e.play();
                      }),
                      disabled: this.state.playing,
                    },
                    "play"
                  ),
                  r.a.createElement(
                    "button",
                    {
                      onClick: x(function () {
                        return e.stop();
                      }),
                      disabled: !this.state.playing,
                    },
                    "stop"
                  )
                )
              )
            );
          }),
          o
        );
      })(r.a.Component);
      var E = (function (e) {
        var t, n;
        function o(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).audio = {}),
            (n.csource = {}),
            (n.gainNode = {}),
            (n.play = function () {
              n.state.isAlive
                ? n.gainNode.gain.setValueAtTime(1, n.audio.currentTime)
                : n.csource.start(),
                n.setState({ playing: !0, isAlive: !0 });
            }),
            (n.stop = function () {
              n.gainNode.gain.setValueAtTime(0, n.audio.currentTime),
                n.setState({ playing: !1 });
            }),
            (n.handleUpdateOffset = function (e) {
              var t = e.target.value;
              n.updateCSource(t), n.setState({ offset: t });
            }),
            (n.state = {
              playing: !1,
              isAlive: !1,
              offset: t.node.options.offset || 1,
            }),
            n
          );
        }
        (n = e),
          ((t = o).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var a = o.prototype;
        return (
          (a.componentDidMount = function () {
            try {
              (this.audio = new (window.AudioContext ||
                window.webkitAudioContext)()),
                (this.csource = this.audio.createConstantSource()),
                this.updateCSource(this.state.offset),
                (this.gainNode = this.audio.createGain()),
                this.csource.connect(this.gainNode),
                this.props.updateParent(this.gainNode);
            } catch (J) {
              throw (console.log(J), new Error("Could not connect Oscillator"));
            }
          }),
          (a.componentWillUnmount = function () {
            this.state.isAlive && this.csource.stop(), this.audio.close();
          }),
          (a.updateCSource = function (e) {
            (this.csource.offset.value = e),
              (this.props.node.options.offset = e);
          }),
          (a.render = function () {
            var e = this,
              t = this.state.offset;
            return r.a.createElement(
              r.a.Fragment,
              null,
              this.props.editOpen &&
                r.a.createElement(
                  "div",
                  { className: "node-edit-overlay" },
                  r.a.createElement(
                    "div",
                    {
                      className: "close",
                      onClick: x(function () {
                        return e.props.toggleEdit();
                      }),
                    },
                    "X"
                  ),
                  r.a.createElement(
                    "div",
                    { onClick: x(function () {}) },
                    r.a.createElement(
                      "label",
                      null,
                      "offset:",
                      " ",
                      r.a.createElement("input", {
                        type: "number",
                        value: t,
                        onChange: this.handleUpdateOffset,
                      })
                    )
                  )
                ),
              r.a.createElement(
                "div",
                { className: "source constant-source" },
                r.a.createElement(
                  "div",
                  { className: "node-text" },
                  "Constant Source"
                ),
                r.a.createElement(
                  "div",
                  { className: "options" },
                  r.a.createElement(
                    "button",
                    {
                      onClick: x(function () {
                        return e.play();
                      }),
                      disabled: this.state.playing,
                    },
                    "play"
                  ),
                  r.a.createElement(
                    "button",
                    {
                      onClick: x(function () {
                        return e.stop();
                      }),
                      disabled: !this.state.playing,
                    },
                    "stop"
                  )
                )
              )
            );
          }),
          o
        );
      })(r.a.Component);
      var S = (function (e) {
        var t, n;
        function o() {
          return e.apply(this, arguments) || this;
        }
        (n = e),
          ((t = o).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var a = o.prototype;
        return (
          (a.componentDidMount = function () {
            try {
              this.props.parent &&
                (this.props.parent.connect(
                  this.props.parent.context.destination
                ),
                this.props.updateParent({ info: "Speaker Node Reached" }));
            } catch (e) {
              throw new Error("Could not connect to Speakers");
            }
          }),
          (a.render = function () {
            return r.a.createElement(
              "div",
              { className: "destination speakers" },
              r.a.createElement("div", { className: "node-text" }, "Speakers")
            );
          }),
          o
        );
      })(r.a.Component);
      var w = (function (e) {
        var t, n;
        function o(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).updateGainValue = function (e) {
              var t = e.target.value;
              n.setGain(t), n.setState({ gainValue: t });
            }),
            (n.setGain = function (e) {
              n.gainNode.gain && (n.gainNode.gain.value = e),
                (n.props.node.options.gain = e);
            }),
            (n.gainNode = null),
            (n.state = { gainValue: t.node.options.gain || 1 }),
            n
          );
        }
        (n = e),
          ((t = o).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var a = o.prototype;
        return (
          (a.componentDidMount = function () {
            try {
              this.props.parent &&
                ((this.gainNode = this.props.parent.context.createGain()),
                this.setGain(this.state.gainValue),
                this.props.parent.connect(this.gainNode),
                this.props.updateParent(this.gainNode));
            } catch (e) {
              throw new Error("Could not connect Gain");
            }
          }),
          (a.render = function () {
            return r.a.createElement(
              "div",
              { className: "filter single-input gain" },
              r.a.createElement("div", { className: "node-text" }, "Gain"),
              r.a.createElement("input", {
                type: "number",
                value: this.state.gainValue,
                onClick: x(function () {}),
                onChange: this.updateGainValue,
              })
            );
          }),
          o
        );
      })(r.a.Component);
      var C = (function (e) {
        var t, n;
        function o(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).updateDelayValue = function (e) {
              var t = e.target.value;
              n.setDelay(t), n.setState({ delayValue: t });
            }),
            (n.setDelay = function (e) {
              n.delayNode.delayTime && (n.delayNode.delayTime.value = e),
                (n.props.node.options.delay = e);
            }),
            (n.delayNode = null),
            (n.state = { delayValue: t.node.options.delay || 0 }),
            n
          );
        }
        (n = e),
          ((t = o).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var a = o.prototype;
        return (
          (a.componentDidMount = function () {
            try {
              this.props.parent &&
                ((this.delayNode = this.props.parent.context.createDelay()),
                this.setDelay(this.state.delayValue),
                this.props.parent.connect(this.delayNode),
                this.props.updateParent(this.delayNode));
            } catch (e) {
              throw new Error("Could not connect Delay");
            }
          }),
          (a.render = function () {
            return r.a.createElement(
              "div",
              { className: "filter single-input delay" },
              r.a.createElement("div", { className: "node-text" }, "Delay"),
              r.a.createElement("input", {
                type: "number",
                value: this.state.delayValue,
                onClick: x(function () {}),
                onChange: this.updateDelayValue,
              })
            );
          }),
          o
        );
      })(r.a.Component);
      var A = (function (e) {
          var t, n;
          function o(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).updateSPanner = function (e) {
                var t = e.target.value;
                n.setPan(t), n.setState({ panValue: t });
              }),
              (n.setPan = function (e) {
                n.sPanner.pan &&
                  n.sPanner.pan.setValueAtTime(
                    e,
                    n.sPanner.context.currentTime
                  ),
                  (n.props.node.options.pan = e);
              }),
              (n.sPanner = null),
              (n.state = { panValue: t.node.options.pan || 0 }),
              n
            );
          }
          (n = e),
            ((t = o).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var a = o.prototype;
          return (
            (a.componentDidMount = function () {
              try {
                this.props.parent &&
                  ((this.sPanner = this.props.parent.context.createStereoPanner()),
                  this.setPan(this.state.panValue),
                  this.props.parent.connect(this.sPanner),
                  this.props.updateParent(this.sPanner));
              } catch (e) {
                throw new Error("Could not connect Stereo Panner");
              }
            }),
            (a.render = function () {
              return r.a.createElement(
                "div",
                { className: "filter single-input s-pan" },
                r.a.createElement(
                  "div",
                  { className: "node-text" },
                  "Stereo Panner"
                ),
                r.a.createElement("input", {
                  type: "range",
                  value: this.state.panValue,
                  onClick: x(function () {}),
                  onChange: this.updateSPanner,
                  min: "-1",
                  max: "1",
                  step: "0.1",
                })
              );
            }),
            o
          );
        })(r.a.Component),
        j = {
          Sources: { Oscillator: O, "Constant Source": E },
          Destinations: { Speakers: S },
          Filters: { Gain: w, Delay: C, "Stereo Panner": A },
        },
        P = {
          Oscillator: O,
          ConstantSource: E,
          Speakers: S,
          Gain: w,
          Delay: C,
          StereoPanner: A,
        },
        x = function (e) {
          return function (t) {
            e && e(t), t.stopPropagation();
          };
        },
        _ = {
          context: new Proxy(
            {},
            {
              get: function () {
                return function () {
                  return _;
                };
              },
            }
          ),
          connect: function () {},
        };
      function T(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return L(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return L(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return L(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var G = (function (e) {
        var t, n;
        function o() {
          for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
            o[r] = arguments[r];
          return (
            ((t = e.call.apply(e, [this].concat(o)) || this).state = {
              parent: void 0,
              editOpen: !1,
              moveLeft: void 0,
              moveTop: void 0,
              moveInProgress: !1,
            }),
            (t.toggleEdit = function () {
              t.setState(function (e) {
                return { editOpen: !e.editOpen };
              });
            }),
            (t.updateParent = function (e) {
              t.setState({ parent: e });
            }),
            (t.updateMoves = function (e) {
              var n = e.pageY,
                o = e.pageX;
              t.state.moveInProgress &&
                (t.setState({ moveLeft: o, moveTop: n }),
                t.props.node.updateCoords(n, o));
            }),
            (t.initiateMove = function (e) {
              var n = e.pageY,
                o = e.pageX;
              t.props.node.updateCoords(n, o),
                t.setState({ moveLeft: n, moveTop: o, moveInProgress: !0 });
            }),
            (t.stopMove = function () {
              var e = t.state,
                n = e.moveLeft,
                o = e.moveTop;
              (n || o) &&
                t.setState({
                  moveInProgress: !1,
                  moveLeft: void 0,
                  moveTop: void 0,
                });
            }),
            t
          );
        }
        (n = e),
          ((t = o).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var i = o.prototype;
        return (
          (i.componentDidMount = function () {
            document.addEventListener("mousemove", this.updateMoves.bind(this));
          }),
          (i.componentWillUnmount = function () {
            document.removeEventListener("mousemove", this.updateMoves);
          }),
          (i.render = function () {
            var e = this,
              t = this.props,
              n = t.graphKey,
              i = t.selectNode,
              s = t.selectedNodeKey,
              c = t.removeNode,
              l = t.allNodes,
              u = t.parent,
              p = t.node,
              d = this.state,
              f = d.moveLeft,
              y = d.moveTop,
              m = p.coords.split(","),
              h = m[0],
              v = m[1],
              g = T(l);
            g.splice(
              l.findIndex(function (e) {
                return e === p;
              }),
              1
            );
            var b = l.filter(function (e) {
                return p.isLinked(e);
              }),
              k = p.getParentLinks(b);
            return r.a.createElement(
              "div",
              {
                onClick: x(function () {
                  return e.stopMove();
                }),
              },
              r.a.createElement(
                "div",
                {
                  onClick: function () {
                    return p.canAddLink() && i(n, p);
                  },
                  style: { left: (f || v) + "px", top: (y || h) + "px" },
                  className:
                    "node " +
                    (s === p ? "selected-node" : "") +
                    " " +
                    (p.canAddLink() ? "" : "max-links"),
                },
                r.a.createElement(
                  "div",
                  { className: "node-overlay" },
                  r.a.createElement(
                    "div",
                    { className: "node-overlay-top" },
                    r.a.createElement(
                      "div",
                      {
                        onClick: x(function () {
                          return c(n, p);
                        }),
                        className: "close",
                      },
                      r.a.createElement(N, { icon: "times-circle" })
                    ),
                    r.a.createElement(
                      "div",
                      {
                        className: "edit",
                        onClick: x(function () {
                          return e.toggleEdit();
                        }),
                      },
                      r.a.createElement(N, { icon: "pen" })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "node-overlay-bottom" },
                    r.a.createElement(
                      "div",
                      {
                        className: "move",
                        onClick: x(function (t) {
                          return e.initiateMove(t);
                        }),
                      },
                      r.a.createElement(N, { icon: "arrows-alt" })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "info" },
                      r.a.createElement(N, { icon: "question-circle" })
                    )
                  )
                ),
                r.a.createElement(p.nodeType, {
                  updateParent: this.updateParent,
                  editOpen: this.state.editOpen,
                  toggleEdit: this.toggleEdit,
                  parent: u,
                  node: p,
                })
              ),
              r.a.createElement(
                "div",
                null,
                this.state.parent &&
                  k.map(function (e) {
                    return r.a.createElement(a, {
                      key: e.coords + "-" + p.coords,
                      link1: e,
                      link2: p,
                    });
                  }),
                this.state.parent &&
                  b.map(function (t) {
                    return r.a.createElement(o, {
                      key: t.coords,
                      graphKey: n,
                      node: t,
                      allNodes: g,
                      selectedNodeKey: s,
                      parent: e.state.parent,
                      removeNode: c,
                      selectNode: i,
                    });
                  })
              )
            );
          }),
          o
        );
      })(r.a.Component);
      var D = (function (e) {
          var t, n;
          function o(t) {
            var n;
            n = e.call(this, t) || this;
            var o = t.nodes.filter(function (e) {
              return e.isSource;
            });
            return (
              (n.roots = o.length ? o : t.nodes),
              (n.parent = o.length ? void 0 : _),
              n
            );
          }
          return (
            (n = e),
            ((t = o).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (o.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.selectedNodeKey,
                o = t.nodes,
                a = t.selectNode,
                i = t.removeNode;
              return r.a.createElement(
                "div",
                null,
                this.roots.map(function (t) {
                  return r.a.createElement(G, {
                    key: t.key,
                    graphKey: e.props.graphKey,
                    node: t,
                    allNodes: o,
                    selectedNodeKey: n,
                    removeNode: i,
                    selectNode: a,
                    parent: e.parent,
                  });
                })
              );
            }),
            o
          );
        })(r.a.Component),
        I = (function () {
          function e(e, t, n) {
            (this.isSource = Object.keys(j.Sources).includes(t.name)),
              (this.isSink = Object.keys(j.Destinations).includes(t.name)),
              (this.maxLinks = this.isSink || this.isSource ? 1 : 2),
              (this.coords = e),
              (this.nodeType = t),
              (this.options = {}),
              (this.key = n),
              (this._links = []);
          }
          var t = e.prototype;
          return (
            (t.canAddLink = function () {
              return this._links.length < this.maxLinks;
            }),
            (t.updateCoords = function (e, t) {
              this.coords = e + ", " + t;
            }),
            (t.addLink = function (e) {
              this._links.push(e);
            }),
            (t.linkCoords = function () {
              return this._links.map(function (e) {
                return e.coords;
              });
            }),
            (t.getParentLinks = function (e) {
              return this._links.filter(function (t) {
                return !e.includes(t);
              });
            }),
            (t.isLinked = function (e) {
              return this._links.includes(e);
            }),
            (t.unLinkAll = function () {
              var e = this;
              this._links.map(function (t) {
                return t.unLink(e);
              });
            }),
            (t.unLink = function (e) {
              this.isLinked(e) && this._links.splice(this._links.indexOf(e), 1);
            }),
            e
          );
        })(),
        K = n("Wbzz"),
        V = function (e) {
          var t = e.nodes,
            n = e.setselectedNodeRootType,
            o = e.selectedNodeRootType;
          return r.a.createElement(
            "div",
            { className: "menu" },
            r.a.createElement(
              "ul",
              null,
              Object.entries(t).map(function (e) {
                var t = e[0],
                  a = e[1];
                return r.a.createElement(
                  "li",
                  { key: t },
                  t,
                  r.a.createElement(
                    "ul",
                    null,
                    Object.entries(a).map(function (e) {
                      var t = e[0],
                        a = e[1];
                      return r.a.createElement(
                        "li",
                        {
                          key: t,
                          className:
                            t === (null == o ? void 0 : o.name)
                              ? "selected"
                              : "can-select",
                          onClick: function () {
                            return n(a);
                          },
                        },
                        t
                      );
                    })
                  )
                );
              })
            )
          );
        };
      function M(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = q(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var o = 0;
            return function () {
              return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        return (n = e[Symbol.iterator]()).next.bind(n);
      }
      function R(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return U(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          q(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function q(e, t) {
        if (e) {
          if ("string" == typeof e) return U(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? U(e, t)
              : void 0
          );
        }
      }
      function U(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var W = {
          activeGraphs: {},
          selectedNodeRootType: void 0,
          proposedNode: void 0,
        },
        z = 0,
        F = 0,
        X = (function (e) {
          var t, n;
          function o() {
            for (
              var t, n = arguments.length, o = new Array(n), r = 0;
              r < n;
              r++
            )
              o[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(o)) || this).state = W),
              (t.addNewGraph = function (e) {
                var n = e.pageY,
                  o = e.pageX;
                t.setState(function (e) {
                  var r,
                    a = e.selectedNodeRootType,
                    i = e.activeGraphs;
                  if (a) {
                    var s = n + ", " + o;
                    return {
                      activeGraphs: Object.assign(
                        {},
                        i,
                        ((r = {}),
                        (r[t.getGraphKey(s)] = [new I(s, a, F++)]),
                        r)
                      ),
                    };
                  }
                });
              }),
              (t.setselectedNodeRootType = function (e) {
                t.setState(function (t) {
                  var n = t.selectedNodeRootType;
                  return (null == n ? void 0 : n.name) === e.name
                    ? { selectedNodeRootType: void 0 }
                    : { selectedNodeRootType: e };
                });
              }),
              (t.clearAll = function () {
                t.setState(W);
              }),
              (t.getGraphKey = function (e) {
                return e.split("-")[0] + "-" + ++z;
              }),
              (t.removeNode = function (e, n) {
                t.setState(function (o) {
                  var r = o.activeGraphs,
                    a = Object.assign({}, r),
                    i = a[e];
                  delete a[e], i.splice(i.indexOf(n), 1), n.unLinkAll();
                  var s = {};
                  return (
                    n._links.map(function (e) {
                      for (var n = [], o = new Set(), r = [e]; r.length; ) {
                        var a = r.pop();
                        o.has(a) ||
                          (o.add(a),
                          n.push(a),
                          (r = [].concat(R(r), R(a._links))));
                      }
                      s[t.getGraphKey(e.coords)] = n;
                    }),
                    { activeGraphs: Object.assign({}, s, a) }
                  );
                });
              }),
              (t.mergeGraphs = function (e, n) {
                var o = t.state.activeGraphs[e.rootKey],
                  r = t.state.activeGraphs[n.rootKey],
                  a = e.node,
                  i = n.node;
                if (o.includes(i))
                  throw new Error("Linking these nodes would cause a loop");
                a.addLink(i),
                  i.addLink(a),
                  t.setState(function (a) {
                    var i,
                      s = a.activeGraphs,
                      c = Object.assign({}, s);
                    return (
                      delete c[e.rootKey],
                      delete c[n.rootKey],
                      {
                        activeGraphs: Object.assign(
                          {},
                          c,
                          ((i = {}),
                          (i[t.getGraphKey(e.rootKey)] = [].concat(R(o), R(r))),
                          i)
                        ),
                      }
                    );
                  });
              }),
              (t.setProposedNode = function (e, n) {
                t.state.proposedNode
                  ? (t.state.proposedNode.node !== n &&
                      t.mergeGraphs(t.state.proposedNode, {
                        rootKey: e,
                        node: n,
                      }),
                    t.setState({ proposedNode: void 0 }))
                  : t.setState({ proposedNode: { rootKey: e, node: n } });
              }),
              t
            );
          }
          (n = e),
            ((t = o).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var a = o.prototype;
          return (
            (a.componentDidMount = function () {
              var e, t, n, o;
              if (
                null === (e = this.props.location) ||
                void 0 === e ||
                null === (t = e.state) ||
                void 0 === t
                  ? void 0
                  : t.config
              ) {
                for (
                  var r = JSON.parse(
                      null === (n = this.props.location) ||
                        void 0 === n ||
                        null === (o = n.state) ||
                        void 0 === o
                        ? void 0
                        : o.config
                    ).nodes,
                    a = Object.entries(r).map(function (e) {
                      var t = e[0],
                        n = e[1],
                        o = n.options,
                        r = n.links,
                        a = n.type,
                        i = new I(t, P[a], F++);
                      return (
                        (i.options = o || {}), (i._loadingLinks = r || []), i
                      );
                    }),
                    i = {};
                  a.length;

                ) {
                  var s = a[0],
                    c = this.getGraphKey(s.coords);
                  i[c] = [s];
                  for (var l = new Set(), u = [s]; u.length; ) {
                    var p = u.pop();
                    if (!l.has(p.coords)) {
                      l.add(p.coords), a.splice(a.indexOf(p), 1);
                      for (
                        var d,
                          f = function () {
                            var e = d.value,
                              t = a.find(function (t) {
                                return t.coords === e;
                              });
                            p.addLink(t),
                              t.addLink(p),
                              i[c].push(t),
                              t._loadingLinks.splice(
                                t._loadingLinks.indexOf(p.coords),
                                1
                              ),
                              u.push(t);
                          },
                          y = M(p._loadingLinks);
                        !(d = y()).done;

                      )
                        f();
                    }
                  }
                }
                this.setState({ activeGraphs: i });
              }
            }),
            (a.render = function () {
              var e = this;
              return r.a.createElement(
                "div",
                {
                  style: {
                    cursor: this.state.selectedNodeRootType
                      ? "pointer"
                      : "default",
                  },
                  className: "platform",
                  onClick: this.addNewGraph,
                },
                r.a.createElement(
                  "div",
                  { onClick: x(), className: "super-menu" },
                  r.a.createElement(V, {
                    nodes: j,
                    setselectedNodeRootType: this.setselectedNodeRootType,
                    selectedNodeRootType: this.state.selectedNodeRootType,
                  }),
                  r.a.createElement(
                    "span",
                    { onClick: this.clearAll },
                    " clear "
                  ),
                  r.a.createElement(
                    "span",
                    {
                      onClick: function () {
                        return console.log("playing");
                      },
                    },
                    " play "
                  ),
                  r.a.createElement(
                    "span",
                    null,
                    r.a.createElement(K.Link, { to: "/" }, "home")
                  )
                ),
                Object.entries(this.state.activeGraphs).map(function (t) {
                  var n,
                    o = t[0],
                    a = t[1];
                  return r.a.createElement(D, {
                    key: o,
                    graphKey: o,
                    nodes: a,
                    selectNode: e.setProposedNode,
                    removeNode: e.removeNode,
                    selectedNodeKey:
                      null === (n = e.state.proposedNode) || void 0 === n
                        ? void 0
                        : n.node,
                  });
                })
              );
            }),
            o
          );
        })(r.a.Component);
    },
    uSBc: function (e, t, n) {
      var o = n("chL8"),
        r = n("lHo0"),
        a = n("1a8y"),
        i = n("emib").Reflect;
      e.exports =
        (i && i.ownKeys) ||
        function (e) {
          var t = o.f(a(e)),
            n = r.f;
          return n ? t.concat(n(e)) : t;
        };
    },
    xtjI: function (e, t, n) {
      var o = n("P8UN"),
        r = n("uSBc"),
        a = n("5SQf"),
        i = n("Drra"),
        s = n("Fgx0");
      o(o.S, "Object", {
        getOwnPropertyDescriptors: function (e) {
          for (
            var t, n, o = a(e), c = i.f, l = r(o), u = {}, p = 0;
            l.length > p;

          )
            void 0 !== (n = c(o, (t = l[p++]))) && s(u, t, n);
          return u;
        },
      });
    },
    ys0W: function (e, t, n) {
      var o = n("QPJK"),
        r = n("2mBY"),
        a = n("5SQf"),
        i = n("BnbX").f;
      e.exports = function (e) {
        return function (t) {
          for (var n, s = a(t), c = r(s), l = c.length, u = 0, p = []; l > u; )
            (n = c[u++]), (o && !i.call(s, n)) || p.push(e ? [n, s[n]] : s[n]);
          return p;
        };
      };
    },
    zTTH: function (e, t, n) {
      "use strict";
      var o = n("P8UN"),
        r = n("Wadk")(6),
        a = "findIndex",
        i = !0;
      a in [] &&
        Array(1)[a](function () {
          i = !1;
        }),
        o(o.P + o.F * i, "Array", {
          findIndex: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n("Dq1/")(a);
    },
  },
]);
//# sourceMappingURL=component---src-pages-playground-jsx-6bbe5c579e969572e026.js.map