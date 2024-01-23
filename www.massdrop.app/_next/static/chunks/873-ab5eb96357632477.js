"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [873], {
        48783: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return u
                }
            });
            var a = n(55281),
                r = n(16554),
                i = n(85893),
                u = (0, r.G)((e, t) => (0, i.jsx)(a.K, {
                    align: "center",
                    ...e,
                    direction: "column",
                    ref: t
                }));
            u.displayName = "VStack"
        },
        72174: function(e, t, n) {
            n.d(t, {
                Y_: function() {
                    return I
                },
                WQ: function() {
                    return _
                },
                Y2: function() {
                    return T
                },
                zu: function() {
                    return E
                },
                Fi: function() {
                    return j
                }
            });
            var a = n(36948),
                r = n(85893),
                i = e => (0, r.jsx)(a.J, {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, r.jsx)("path", {
                        fill: "currentColor",
                        d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
                    })
                }),
                u = e => (0, r.jsx)(a.J, {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, r.jsx)("path", {
                        fill: "currentColor",
                        d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
                    })
                }),
                o = n(67294);

            function l(e, t, n, a) {
                (0, o.useEffect)(() => {
                    var r;
                    if (!e.current || !a) return;
                    let i = null != (r = e.current.ownerDocument.defaultView) ? r : window,
                        u = Array.isArray(t) ? t : [t],
                        o = new i.MutationObserver(e => {
                            for (let t of e) "attributes" === t.type && t.attributeName && u.includes(t.attributeName) && n(t)
                        });
                    return o.observe(e.current, {
                        attributes: !0,
                        attributeFilter: u
                    }), () => o.disconnect()
                })
            }
            var s = n(35155);

            function c(e, t) {
                let n = function(e) {
                        let t = parseFloat(e);
                        return "number" != typeof t || Number.isNaN(t) ? 0 : t
                    }(e),
                    a = 10 ** (null != t ? t : 10);
                return n = Math.round(n * a) / a, t ? n.toFixed(t) : n.toString()
            }

            function d(e) {
                if (!Number.isFinite(e)) return 0;
                let t = 1,
                    n = 0;
                for (; Math.round(e * t) / t !== e;) t *= 10, n += 1;
                return n
            }

            function m(e) {
                return parseFloat(e.toString().replace(/[^\w.-]+/g, ""))
            }

            function f(e, t) {
                return Math.max(d(t), d(e))
            }

            function h(e, t, n) {
                let a = m(e);
                if (Number.isNaN(a)) return;
                let r = f(a, t);
                return c(a, null != n ? n : r)
            }
            var b = n(52366),
                v = n(26245),
                g = n(81103),
                p = n(25432),
                y = /^[Ee0-9+\-.]$/;

            function w(e) {
                return y.test(e)
            }
            var M = n(28912),
                N = n(55227),
                C = n(16554),
                x = n(77030),
                k = n(33179),
                S = n(16914),
                [D, A] = (0, N.k)({
                    name: "NumberInputStylesContext",
                    errorMessage: "useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<NumberInput />\" "
                }),
                [W, P] = (0, N.k)({
                    name: "NumberInputContext",
                    errorMessage: "useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"
                }),
                T = (0, C.G)(function(e, t) {
                    let n = (0, x.jC)("NumberInput", e),
                        a = (0, k.Lr)(e),
                        {
                            htmlProps: i,
                            ...u
                        } = function(e = {}) {
                            let {
                                focusInputOnChange: t = !0,
                                clampValueOnBlur: n = !0,
                                keepWithinRange: a = !0,
                                min: r = Number.MIN_SAFE_INTEGER,
                                max: i = Number.MAX_SAFE_INTEGER,
                                step: u = 1,
                                isReadOnly: d,
                                isDisabled: y,
                                isRequired: M,
                                isInvalid: N,
                                pattern: C = "[0-9]*(.[0-9]+)?",
                                inputMode: x = "decimal",
                                allowMouseWheel: k,
                                id: S,
                                onChange: D,
                                precision: A,
                                name: W,
                                "aria-describedby": P,
                                "aria-label": T,
                                "aria-labelledby": j,
                                onFocus: E,
                                onBlur: F,
                                onInvalid: I,
                                getAriaValueText: _,
                                isValidCharacter: X,
                                format: O,
                                parse: Y,
                                ...q
                            } = e, R = (0, s.W)(E), G = (0, s.W)(F), z = (0, s.W)(I), J = (0, s.W)(null != X ? X : w), H = (0, s.W)(_), K = function(e = {}) {
                                let {
                                    onChange: t,
                                    precision: n,
                                    defaultValue: a,
                                    value: r,
                                    step: i = 1,
                                    min: u = Number.MIN_SAFE_INTEGER,
                                    max: l = Number.MAX_SAFE_INTEGER,
                                    keepWithinRange: d = !0
                                } = e, b = (0, s.W)(t), [v, g] = (0, o.useState)(() => {
                                    var e;
                                    return null == a ? "" : null != (e = h(a, i, n)) ? e : ""
                                }), p = void 0 !== r, y = p ? r : v, w = f(m(y), i), M = null != n ? n : w, N = (0, o.useCallback)(e => {
                                    e !== y && (p || g(e.toString()), null == b || b(e.toString(), m(e)))
                                }, [b, p, y]), C = (0, o.useCallback)(e => {
                                    let t = e;
                                    if (d) {
                                        var n;
                                        t = null == (n = t) ? n : (l < u && console.warn("clamp: max cannot be less than min"), Math.min(Math.max(n, u), l))
                                    }
                                    return c(t, M)
                                }, [M, d, l, u]), x = (0, o.useCallback)((e = i) => {
                                    N(C("" === y ? m(e) : m(y) + e))
                                }, [C, i, N, y]), k = (0, o.useCallback)((e = i) => {
                                    N(C("" === y ? m(-e) : m(y) - e))
                                }, [C, i, N, y]), S = (0, o.useCallback)(() => {
                                    var e;
                                    N(null == a ? "" : null != (e = h(a, i, n)) ? e : u)
                                }, [a, n, i, N, u]), D = (0, o.useCallback)(e => {
                                    var t;
                                    N(null != (t = h(e, i, M)) ? t : u)
                                }, [M, i, N, u]), A = m(y);
                                return {
                                    isOutOfRange: A > l || A < u,
                                    isAtMax: A === l,
                                    isAtMin: A === u,
                                    precision: M,
                                    value: y,
                                    valueAsNumber: A,
                                    update: N,
                                    reset: S,
                                    increment: x,
                                    decrement: k,
                                    clamp: C,
                                    cast: D,
                                    setValue: g
                                }
                            }(e), {
                                update: L,
                                increment: V,
                                decrement: Q
                            } = K, [B, U] = (0, o.useState)(!1), $ = !(d || y), Z = (0, o.useRef)(null), ee = (0, o.useRef)(null), et = (0, o.useRef)(null), en = (0, o.useRef)(null), ea = (0, o.useCallback)(e => e.split("").filter(J).join(""), [J]), er = (0, o.useCallback)(e => {
                                var t;
                                return null != (t = null == Y ? void 0 : Y(e)) ? t : e
                            }, [Y]), ei = (0, o.useCallback)(e => {
                                var t;
                                return (null != (t = null == O ? void 0 : O(e)) ? t : e).toString()
                            }, [O]);
                            (0, b.r)(() => {
                                K.valueAsNumber > i ? null == z || z("rangeOverflow", ei(K.value), K.valueAsNumber) : K.valueAsNumber < r && (null == z || z("rangeOverflow", ei(K.value), K.valueAsNumber))
                            }, [K.valueAsNumber, K.value, ei, z]), (0, v.G)(() => {
                                if (Z.current && Z.current.value != K.value) {
                                    let e = er(Z.current.value);
                                    K.setValue(ea(e))
                                }
                            }, [er, ea]);
                            let eu = (0, o.useCallback)((e = u) => {
                                    $ && V(e)
                                }, [V, $, u]),
                                eo = (0, o.useCallback)((e = u) => {
                                    $ && Q(e)
                                }, [Q, $, u]),
                                el = function(e, t) {
                                    let [n, a] = (0, o.useState)(!1), [r, i] = (0, o.useState)(null), [u, l] = (0, o.useState)(!0), c = (0, o.useRef)(null), d = () => clearTimeout(c.current);
                                    ! function(e, t) {
                                        let n = (0, s.W)(e);
                                        (0, o.useEffect)(() => {
                                            let e = null;
                                            return null !== t && (e = window.setInterval(() => n(), t)), () => {
                                                e && window.clearInterval(e)
                                            }
                                        }, [t, n])
                                    }(() => {
                                        "increment" === r && e(), "decrement" === r && t()
                                    }, n ? 50 : null);
                                    let m = (0, o.useCallback)(() => {
                                            u && e(), c.current = setTimeout(() => {
                                                l(!1), a(!0), i("increment")
                                            }, 300)
                                        }, [e, u]),
                                        f = (0, o.useCallback)(() => {
                                            u && t(), c.current = setTimeout(() => {
                                                l(!1), a(!0), i("decrement")
                                            }, 300)
                                        }, [t, u]),
                                        h = (0, o.useCallback)(() => {
                                            l(!0), a(!1), d()
                                        }, []);
                                    return (0, o.useEffect)(() => () => d(), []), {
                                        up: m,
                                        down: f,
                                        stop: h,
                                        isSpinning: n
                                    }
                                }(eu, eo);
                            l(et, "disabled", el.stop, el.isSpinning), l(en, "disabled", el.stop, el.isSpinning);
                            let es = (0, o.useCallback)(e => {
                                    e.nativeEvent.isComposing || (L(ea(er(e.currentTarget.value))), ee.current = {
                                        start: e.currentTarget.selectionStart,
                                        end: e.currentTarget.selectionEnd
                                    })
                                }, [L, ea, er]),
                                ec = (0, o.useCallback)(e => {
                                    var t, n, a;
                                    null == R || R(e), ee.current && (e.target.selectionStart = null != (n = ee.current.start) ? n : null == (t = e.currentTarget.value) ? void 0 : t.length, e.currentTarget.selectionEnd = null != (a = ee.current.end) ? a : e.currentTarget.selectionStart)
                                }, [R]),
                                ed = (0, o.useCallback)(e => {
                                    if (e.nativeEvent.isComposing) return;
                                    ! function(e, t) {
                                        if (null == e.key) return !0;
                                        let n = e.ctrlKey || e.altKey || e.metaKey;
                                        return 1 !== e.key.length || !!n || t(e.key)
                                    }(e, J) && e.preventDefault();
                                    let t = em(e) * u,
                                        n = {
                                            ArrowUp: () => eu(t),
                                            ArrowDown: () => eo(t),
                                            Home: () => L(r),
                                            End: () => L(i)
                                        }[e.key];
                                    n && (e.preventDefault(), n(e))
                                }, [J, u, eu, eo, L, r, i]),
                                em = e => {
                                    let t = 1;
                                    return (e.metaKey || e.ctrlKey) && (t = .1), e.shiftKey && (t = 10), t
                                },
                                ef = (0, o.useMemo)(() => {
                                    let e = null == H ? void 0 : H(K.value);
                                    return null != e ? e : K.value.toString() || void 0
                                }, [K.value, H]),
                                eh = (0, o.useCallback)(() => {
                                    let e = K.value;
                                    "" !== K.value && (/^[eE]/.test(K.value.toString()) ? K.setValue("") : (K.valueAsNumber < r && (e = r), K.valueAsNumber > i && (e = i), K.cast(e)))
                                }, [K, i, r]),
                                eb = (0, o.useCallback)(() => {
                                    U(!1), n && eh()
                                }, [n, U, eh]),
                                ev = (0, o.useCallback)(() => {
                                    t && requestAnimationFrame(() => {
                                        var e;
                                        null == (e = Z.current) || e.focus()
                                    })
                                }, [t]),
                                eg = (0, o.useCallback)(e => {
                                    e.preventDefault(), el.up(), ev()
                                }, [ev, el]),
                                ep = (0, o.useCallback)(e => {
                                    e.preventDefault(), el.down(), ev()
                                }, [ev, el]);
                            ! function(e, t, n, a) {
                                let r = (0, s.W)(n);
                                (0, o.useEffect)(() => {
                                    let i = "function" == typeof e ? e() : null != e ? e : document;
                                    if (n && i) return i.addEventListener(t, r, a), () => {
                                        i.removeEventListener(t, r, a)
                                    }
                                }, [t, e, a, r, n]), () => {
                                    let n = "function" == typeof e ? e() : null != e ? e : document;
                                    null == n || n.removeEventListener(t, r, a)
                                }
                            }(() => Z.current, "wheel", e => {
                                var t, n;
                                let a = (null != (n = null == (t = Z.current) ? void 0 : t.ownerDocument) ? n : document).activeElement === Z.current;
                                if (!k || !a) return;
                                e.preventDefault();
                                let r = em(e) * u,
                                    i = Math.sign(e.deltaY); - 1 === i ? eu(r) : 1 === i && eo(r)
                            }, {
                                passive: !1
                            });
                            let ey = (0, o.useCallback)((e = {}, t = null) => {
                                    let n = y || a && K.isAtMax;
                                    return { ...e,
                                        ref: (0, g.lq)(t, et),
                                        role: "button",
                                        tabIndex: -1,
                                        onPointerDown: (0, p.v0)(e.onPointerDown, e => {
                                            0 !== e.button || n || eg(e)
                                        }),
                                        onPointerLeave: (0, p.v0)(e.onPointerLeave, el.stop),
                                        onPointerUp: (0, p.v0)(e.onPointerUp, el.stop),
                                        disabled: n,
                                        "aria-disabled": (0, p.Qm)(n)
                                    }
                                }, [K.isAtMax, a, eg, el.stop, y]),
                                ew = (0, o.useCallback)((e = {}, t = null) => {
                                    let n = y || a && K.isAtMin;
                                    return { ...e,
                                        ref: (0, g.lq)(t, en),
                                        role: "button",
                                        tabIndex: -1,
                                        onPointerDown: (0, p.v0)(e.onPointerDown, e => {
                                            0 !== e.button || n || ep(e)
                                        }),
                                        onPointerLeave: (0, p.v0)(e.onPointerLeave, el.stop),
                                        onPointerUp: (0, p.v0)(e.onPointerUp, el.stop),
                                        disabled: n,
                                        "aria-disabled": (0, p.Qm)(n)
                                    }
                                }, [K.isAtMin, a, ep, el.stop, y]),
                                eM = (0, o.useCallback)((e = {}, t = null) => {
                                    var n, a, u, o;
                                    return {
                                        name: W,
                                        inputMode: x,
                                        type: "text",
                                        pattern: C,
                                        "aria-labelledby": j,
                                        "aria-label": T,
                                        "aria-describedby": P,
                                        id: S,
                                        disabled: y,
                                        ...e,
                                        readOnly: null != (n = e.readOnly) ? n : d,
                                        "aria-readonly": null != (a = e.readOnly) ? a : d,
                                        "aria-required": null != (u = e.required) ? u : M,
                                        required: null != (o = e.required) ? o : M,
                                        ref: (0, g.lq)(Z, t),
                                        value: ei(K.value),
                                        role: "spinbutton",
                                        "aria-valuemin": r,
                                        "aria-valuemax": i,
                                        "aria-valuenow": Number.isNaN(K.valueAsNumber) ? void 0 : K.valueAsNumber,
                                        "aria-invalid": (0, p.Qm)(null != N ? N : K.isOutOfRange),
                                        "aria-valuetext": ef,
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        onChange: (0, p.v0)(e.onChange, es),
                                        onKeyDown: (0, p.v0)(e.onKeyDown, ed),
                                        onFocus: (0, p.v0)(e.onFocus, ec, () => U(!0)),
                                        onBlur: (0, p.v0)(e.onBlur, G, eb)
                                    }
                                }, [W, x, C, j, T, ei, P, S, y, M, d, N, K.value, K.valueAsNumber, K.isOutOfRange, r, i, ef, es, ed, ec, G, eb]);
                            return {
                                value: ei(K.value),
                                valueAsNumber: K.valueAsNumber,
                                isFocused: B,
                                isDisabled: y,
                                isReadOnly: d,
                                getIncrementButtonProps: ey,
                                getDecrementButtonProps: ew,
                                getInputProps: eM,
                                htmlProps: q
                            }
                        }((0, M.K)(a)),
                        d = (0, o.useMemo)(() => u, [u]);
                    return (0, r.jsx)(W, {
                        value: d,
                        children: (0, r.jsx)(D, {
                            value: n,
                            children: (0, r.jsx)(S.m.div, { ...i,
                                ref: t,
                                className: (0, p.cx)("chakra-numberinput", e.className),
                                __css: {
                                    position: "relative",
                                    zIndex: 0,
                                    ...n.root
                                }
                            })
                        })
                    })
                });
            T.displayName = "NumberInput";
            var j = (0, C.G)(function(e, t) {
                let n = A();
                return (0, r.jsx)(S.m.div, {
                    "aria-hidden": !0,
                    ref: t,
                    ...e,
                    __css: {
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        top: "0",
                        insetEnd: "0px",
                        margin: "1px",
                        height: "calc(100% - 2px)",
                        zIndex: 1,
                        ...n.stepperGroup
                    }
                })
            });
            j.displayName = "NumberInputStepper";
            var E = (0, C.G)(function(e, t) {
                let {
                    getInputProps: n
                } = P(), a = n(e, t), i = A();
                return (0, r.jsx)(S.m.input, { ...a,
                    className: (0, p.cx)("chakra-numberinput__field", e.className),
                    __css: {
                        width: "100%",
                        ...i.field
                    }
                })
            });
            E.displayName = "NumberInputField";
            var F = (0, S.m)("div", {
                    baseStyle: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        userSelect: "none",
                        cursor: "pointer",
                        lineHeight: "normal"
                    }
                }),
                I = (0, C.G)(function(e, t) {
                    var n;
                    let a = A(),
                        {
                            getDecrementButtonProps: u
                        } = P(),
                        o = u(e, t);
                    return (0, r.jsx)(F, { ...o,
                        __css: a.stepper,
                        children: null != (n = e.children) ? n : (0, r.jsx)(i, {})
                    })
                });
            I.displayName = "NumberDecrementStepper";
            var _ = (0, C.G)(function(e, t) {
                var n;
                let {
                    getIncrementButtonProps: a
                } = P(), i = a(e, t), o = A();
                return (0, r.jsx)(F, { ...i,
                    __css: o.stepper,
                    children: null != (n = e.children) ? n : (0, r.jsx)(u, {})
                })
            });
            _.displayName = "NumberIncrementStepper"
        },
        79002: function(e, t, n) {
            var a;

            function r(e) {
                let t = Object.prototype.toString.call(e);
                return e instanceof Date || "object" == typeof e && "[object Date]" === t ? new e.constructor(+e) : new Date("number" == typeof e || "[object Number]" === t || "string" == typeof e || "[object String]" === t ? e : NaN)
            }

            function i(e, t) {
                let n = r(e),
                    a = r(t),
                    i = n.getTime() - a.getTime();
                return i < 0 ? -1 : i > 0 ? 1 : i
            }
            n.d(t, {
                Q: function() {
                    return b
                }
            });
            let u = {
                lessThanXSeconds: {
                    one: "less than a second",
                    other: "less than {{count}} seconds"
                },
                xSeconds: {
                    one: "1 second",
                    other: "{{count}} seconds"
                },
                halfAMinute: "half a minute",
                lessThanXMinutes: {
                    one: "less than a minute",
                    other: "less than {{count}} minutes"
                },
                xMinutes: {
                    one: "1 minute",
                    other: "{{count}} minutes"
                },
                aboutXHours: {
                    one: "about 1 hour",
                    other: "about {{count}} hours"
                },
                xHours: {
                    one: "1 hour",
                    other: "{{count}} hours"
                },
                xDays: {
                    one: "1 day",
                    other: "{{count}} days"
                },
                aboutXWeeks: {
                    one: "about 1 week",
                    other: "about {{count}} weeks"
                },
                xWeeks: {
                    one: "1 week",
                    other: "{{count}} weeks"
                },
                aboutXMonths: {
                    one: "about 1 month",
                    other: "about {{count}} months"
                },
                xMonths: {
                    one: "1 month",
                    other: "{{count}} months"
                },
                aboutXYears: {
                    one: "about 1 year",
                    other: "about {{count}} years"
                },
                xYears: {
                    one: "1 year",
                    other: "{{count}} years"
                },
                overXYears: {
                    one: "over 1 year",
                    other: "over {{count}} years"
                },
                almostXYears: {
                    one: "almost 1 year",
                    other: "almost {{count}} years"
                }
            };

            function o(e) {
                return (t = {}) => {
                    let n = t.width ? String(t.width) : e.defaultWidth;
                    return e.formats[n] || e.formats[e.defaultWidth]
                }
            }
            let l = {
                    date: o({
                        formats: {
                            full: "EEEE, MMMM do, y",
                            long: "MMMM do, y",
                            medium: "MMM d, y",
                            short: "MM/dd/yyyy"
                        },
                        defaultWidth: "full"
                    }),
                    time: o({
                        formats: {
                            full: "h:mm:ss a zzzz",
                            long: "h:mm:ss a z",
                            medium: "h:mm:ss a",
                            short: "h:mm a"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: o({
                        formats: {
                            full: "{{date}} 'at' {{time}}",
                            long: "{{date}} 'at' {{time}}",
                            medium: "{{date}}, {{time}}",
                            short: "{{date}}, {{time}}"
                        },
                        defaultWidth: "full"
                    })
                },
                s = {
                    lastWeek: "'last' eeee 'at' p",
                    yesterday: "'yesterday at' p",
                    today: "'today at' p",
                    tomorrow: "'tomorrow at' p",
                    nextWeek: "eeee 'at' p",
                    other: "P"
                };

            function c(e) {
                return (t, n) => {
                    let a;
                    if ("formatting" === (n ? .context ? String(n.context) : "standalone") && e.formattingValues) {
                        let t = e.defaultFormattingWidth || e.defaultWidth,
                            r = n ? .width ? String(n.width) : t;
                        a = e.formattingValues[r] || e.formattingValues[t]
                    } else {
                        let t = e.defaultWidth,
                            r = n ? .width ? String(n.width) : e.defaultWidth;
                        a = e.values[r] || e.values[t]
                    }
                    return a[e.argumentCallback ? e.argumentCallback(t) : t]
                }
            }

            function d(e) {
                return (t, n = {}) => {
                    let a;
                    let r = n.width,
                        i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth],
                        u = t.match(i);
                    if (!u) return null;
                    let o = u[0],
                        l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth],
                        s = Array.isArray(l) ? function(e, t) {
                            for (let n = 0; n < e.length; n++)
                                if (t(e[n])) return n
                        }(l, e => e.test(o)) : function(e, t) {
                            for (let n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n
                        }(l, e => e.test(o));
                    return a = e.valueCallback ? e.valueCallback(s) : s, {
                        value: a = n.valueCallback ? n.valueCallback(a) : a,
                        rest: t.slice(o.length)
                    }
                }
            }
            let m = {
                    code: "en-US",
                    formatDistance: (e, t, n) => {
                        let a;
                        let r = u[e];
                        return (a = "string" == typeof r ? r : 1 === t ? r.one : r.other.replace("{{count}}", t.toString()), n ? .addSuffix) ? n.comparison && n.comparison > 0 ? "in " + a : a + " ago" : a
                    },
                    formatLong: l,
                    formatRelative: (e, t, n, a) => s[e],
                    localize: {
                        ordinalNumber: (e, t) => {
                            let n = Number(e),
                                a = n % 100;
                            if (a > 20 || a < 10) switch (a % 10) {
                                case 1:
                                    return n + "st";
                                case 2:
                                    return n + "nd";
                                case 3:
                                    return n + "rd"
                            }
                            return n + "th"
                        },
                        era: c({
                            values: {
                                narrow: ["B", "A"],
                                abbreviated: ["BC", "AD"],
                                wide: ["Before Christ", "Anno Domini"]
                            },
                            defaultWidth: "wide"
                        }),
                        quarter: c({
                            values: {
                                narrow: ["1", "2", "3", "4"],
                                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                                wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
                            },
                            defaultWidth: "wide",
                            argumentCallback: e => e - 1
                        }),
                        month: c({
                            values: {
                                narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                                abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                            },
                            defaultWidth: "wide"
                        }),
                        day: c({
                            values: {
                                narrow: ["S", "M", "T", "W", "T", "F", "S"],
                                short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                                abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                            },
                            defaultWidth: "wide"
                        }),
                        dayPeriod: c({
                            values: {
                                narrow: {
                                    am: "a",
                                    pm: "p",
                                    midnight: "mi",
                                    noon: "n",
                                    morning: "morning",
                                    afternoon: "afternoon",
                                    evening: "evening",
                                    night: "night"
                                },
                                abbreviated: {
                                    am: "AM",
                                    pm: "PM",
                                    midnight: "midnight",
                                    noon: "noon",
                                    morning: "morning",
                                    afternoon: "afternoon",
                                    evening: "evening",
                                    night: "night"
                                },
                                wide: {
                                    am: "a.m.",
                                    pm: "p.m.",
                                    midnight: "midnight",
                                    noon: "noon",
                                    morning: "morning",
                                    afternoon: "afternoon",
                                    evening: "evening",
                                    night: "night"
                                }
                            },
                            defaultWidth: "wide",
                            formattingValues: {
                                narrow: {
                                    am: "a",
                                    pm: "p",
                                    midnight: "mi",
                                    noon: "n",
                                    morning: "in the morning",
                                    afternoon: "in the afternoon",
                                    evening: "in the evening",
                                    night: "at night"
                                },
                                abbreviated: {
                                    am: "AM",
                                    pm: "PM",
                                    midnight: "midnight",
                                    noon: "noon",
                                    morning: "in the morning",
                                    afternoon: "in the afternoon",
                                    evening: "in the evening",
                                    night: "at night"
                                },
                                wide: {
                                    am: "a.m.",
                                    pm: "p.m.",
                                    midnight: "midnight",
                                    noon: "noon",
                                    morning: "in the morning",
                                    afternoon: "in the afternoon",
                                    evening: "in the evening",
                                    night: "at night"
                                }
                            },
                            defaultFormattingWidth: "wide"
                        })
                    },
                    match: {
                        ordinalNumber: (a = {
                            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                            parsePattern: /\d+/i,
                            valueCallback: e => parseInt(e, 10)
                        }, (e, t = {}) => {
                            let n = e.match(a.matchPattern);
                            if (!n) return null;
                            let r = n[0],
                                i = e.match(a.parsePattern);
                            if (!i) return null;
                            let u = a.valueCallback ? a.valueCallback(i[0]) : i[0];
                            return {
                                value: u = t.valueCallback ? t.valueCallback(u) : u,
                                rest: e.slice(r.length)
                            }
                        }),
                        era: d({
                            matchPatterns: {
                                narrow: /^(b|a)/i,
                                abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                                wide: /^(before christ|before common era|anno domini|common era)/i
                            },
                            defaultMatchWidth: "wide",
                            parsePatterns: {
                                any: [/^b/i, /^(a|c)/i]
                            },
                            defaultParseWidth: "any"
                        }),
                        quarter: d({
                            matchPatterns: {
                                narrow: /^[1234]/i,
                                abbreviated: /^q[1234]/i,
                                wide: /^[1234](th|st|nd|rd)? quarter/i
                            },
                            defaultMatchWidth: "wide",
                            parsePatterns: {
                                any: [/1/i, /2/i, /3/i, /4/i]
                            },
                            defaultParseWidth: "any",
                            valueCallback: e => e + 1
                        }),
                        month: d({
                            matchPatterns: {
                                narrow: /^[jfmasond]/i,
                                abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                            },
                            defaultMatchWidth: "wide",
                            parsePatterns: {
                                narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                                any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                            },
                            defaultParseWidth: "any"
                        }),
                        day: d({
                            matchPatterns: {
                                narrow: /^[smtwf]/i,
                                short: /^(su|mo|tu|we|th|fr|sa)/i,
                                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                            },
                            defaultMatchWidth: "wide",
                            parsePatterns: {
                                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                            },
                            defaultParseWidth: "any"
                        }),
                        dayPeriod: d({
                            matchPatterns: {
                                narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                            },
                            defaultMatchWidth: "any",
                            parsePatterns: {
                                any: {
                                    am: /^a/i,
                                    pm: /^p/i,
                                    midnight: /^mi/i,
                                    noon: /^no/i,
                                    morning: /morning/i,
                                    afternoon: /afternoon/i,
                                    evening: /evening/i,
                                    night: /night/i
                                }
                            },
                            defaultParseWidth: "any"
                        })
                    },
                    options: {
                        weekStartsOn: 0,
                        firstWeekContainsDate: 1
                    }
                },
                f = {};

            function h(e) {
                let t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
            }

            function b(e, t) {
                return function(e, t, n) {
                    let a, u, o;
                    let l = n ? .locale ? ? f.locale ? ? m,
                        s = i(e, t);
                    if (isNaN(s)) throw RangeError("Invalid time value");
                    let c = Object.assign({}, n, {
                        addSuffix: n ? .addSuffix,
                        comparison: s
                    });
                    s > 0 ? (a = r(t), u = r(e)) : (a = r(e), u = r(t));
                    let d = function(e, t, n) {
                            return (0, Math.trunc)((r(e).getTime() - r(t).getTime()) / 1e3)
                        }(u, a),
                        b = Math.round((d - (h(u) - h(a)) / 1e3) / 60);
                    if (b < 2) {
                        if (n ? .includeSeconds) {
                            if (d < 5) return l.formatDistance("lessThanXSeconds", 5, c);
                            if (d < 10) return l.formatDistance("lessThanXSeconds", 10, c);
                            if (d < 20) return l.formatDistance("lessThanXSeconds", 20, c);
                            if (d < 40) return l.formatDistance("halfAMinute", 0, c);
                            else if (d < 60) return l.formatDistance("lessThanXMinutes", 1, c);
                            else return l.formatDistance("xMinutes", 1, c)
                        }
                        return 0 === b ? l.formatDistance("lessThanXMinutes", 1, c) : l.formatDistance("xMinutes", b, c)
                    }
                    if (b < 45) return l.formatDistance("xMinutes", b, c);
                    if (b < 90) return l.formatDistance("aboutXHours", 1, c);
                    if (b < 1440) return l.formatDistance("aboutXHours", Math.round(b / 60), c);
                    if (b < 2520) return l.formatDistance("xDays", 1, c);
                    if (b < 43200) return l.formatDistance("xDays", Math.round(b / 1440), c);
                    if (b < 86400) return o = Math.round(b / 43200), l.formatDistance("aboutXMonths", o, c);
                    if ((o = function(e, t) {
                            let n;
                            let a = r(e),
                                u = r(t),
                                o = i(a, u),
                                l = Math.abs(function(e, t) {
                                    let n = r(e),
                                        a = r(t);
                                    return 12 * (n.getFullYear() - a.getFullYear()) + (n.getMonth() - a.getMonth())
                                }(a, u));
                            if (l < 1) n = 0;
                            else {
                                1 === a.getMonth() && a.getDate() > 27 && a.setDate(30), a.setMonth(a.getMonth() - o * l);
                                let t = i(a, u) === -o;
                                (function(e) {
                                    let t = r(e);
                                    return + function(e) {
                                        let t = r(e);
                                        return t.setHours(23, 59, 59, 999), t
                                    }(t) == + function(e) {
                                        let t = r(e),
                                            n = t.getMonth();
                                        return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
                                    }(t)
                                })(r(e)) && 1 === l && 1 === i(e, u) && (t = !1), n = o * (l - Number(t))
                            }
                            return 0 === n ? 0 : n
                        }(u, a)) < 12) return l.formatDistance("xMonths", Math.round(b / 43200), c); {
                        let e = o % 12,
                            t = Math.floor(o / 12);
                        return e < 3 ? l.formatDistance("aboutXYears", t, c) : e < 9 ? l.formatDistance("overXYears", t, c) : l.formatDistance("almostXYears", t + 1, c)
                    }
                }(e, Date.now(), t)
            }
        }
    }
]);