"use strict";
(() => {
    var e, t, n, r, i, a, o, u, c, s, l, d, f, v, m, p, h, g, y, T, S, E, b, L, w, C, M, x, k, A, F, I, B, D, P, R, q, N, O, H, V, _, j, J, U, $, z, G, K, Q, W, X, Y, Z, ee, et, en, er, ei, ea, eo, eu = (e, t) => () => (e && (t = e(e = 0)), t),
        ec = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        es = eu(() => {
            a = function() {
                return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
            }, o = function(e) {
                if ("loading" === document.readyState) return "loading";
                var t = a();
                if (t) {
                    if (e < t.domInteractive) return "loading";
                    if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return "dom-interactive";
                    if (0 === t.domComplete || e < t.domComplete) return "dom-content-loaded"
                }
                return "complete"
            }, u = function(e) {
                var t = e.nodeName;
                return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
            }, c = function(e, t) {
                var n = "";
                try {
                    for (; e && 9 !== e.nodeType;) {
                        var r = e,
                            i = r.id ? "#" + r.id : u(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
                        if (n.length + i.length > (t || 100) - 1) return n || i;
                        if (n = n ? i + ">" + n : i, r.id) break;
                        e = r.parentNode
                    }
                } catch (a) {}
                return n
            }, s = -1, l = function() {
                return s
            }, d = function(e) {
                addEventListener("pageshow", function(t) {
                    t.persisted && (s = t.timeStamp, e(t))
                }, !0)
            }, f = function() {
                var e = a();
                return e && e.activationStart || 0
            }, v = function(e, t) {
                var n = a(),
                    r = "navigate";
                return l() >= 0 ? r = "back-forward-cache" : n && (document.prerendering || f() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
                    name: e,
                    value: void 0 === t ? -1 : t,
                    rating: "good",
                    delta: 0,
                    entries: [],
                    id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                    navigationType: r
                }
            }, m = function(e, t, n) {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                        var r = new PerformanceObserver(function(e) {
                            Promise.resolve().then(function() {
                                t(e.getEntries())
                            })
                        });
                        return r.observe(Object.assign({
                            type: e,
                            buffered: !0
                        }, n || {})), r
                    }
                } catch (i) {}
            }, p = function(e, t, n, r) {
                var i, a;
                return function(o) {
                    var u;
                    t.value >= 0 && (o || r) && ((a = t.value - (i || 0)) || void 0 === i) && (i = t.value, t.delta = a, t.rating = (u = t.value) > n[1] ? "poor" : u > n[0] ? "needs-improvement" : "good", e(t))
                }
            }, h = function(e) {
                requestAnimationFrame(function() {
                    return requestAnimationFrame(function() {
                        return e()
                    })
                })
            }, g = function(e) {
                var t = function(t) {
                    "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
                };
                addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0)
            }, y = function(e) {
                var t = !1;
                return function(n) {
                    t || (e(n), t = !0)
                }
            }, T = -1, S = function() {
                return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
            }, E = function(e) {
                "hidden" === document.visibilityState && T > -1 && (T = "visibilitychange" === e.type ? e.timeStamp : 0, L())
            }, b = function() {
                addEventListener("visibilitychange", E, !0), addEventListener("prerenderingchange", E, !0)
            }, L = function() {
                removeEventListener("visibilitychange", E, !0), removeEventListener("prerenderingchange", E, !0)
            }, w = function() {
                return T < 0 && (T = S(), b(), d(function() {
                    setTimeout(function() {
                        T = S(), b()
                    }, 0)
                })), {
                    get firstHiddenTime() {
                        return T
                    }
                }
            }, C = function(e) {
                document.prerendering ? addEventListener("prerenderingchange", function() {
                    return e()
                }, !0) : e()
            }, M = [1800, 3e3], x = function(e, t) {
                t = t || {}, C(function() {
                    var n, r = w(),
                        i = v("FCP"),
                        a = m("paint", function(e) {
                            e.forEach(function(e) {
                                "first-contentful-paint" === e.name && (a.disconnect(), e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - f(), 0), i.entries.push(e), n(!0)))
                            })
                        });
                    a && (n = p(e, i, M, t.reportAllChanges), d(function(r) {
                        n = p(e, i = v("FCP"), M, t.reportAllChanges), h(function() {
                            i.value = performance.now() - r.timeStamp, n(!0)
                        })
                    }))
                })
            }, k = [.1, .25], A = function(e, t) {
                var n, r;
                n = function(t) {
                    (function(e) {
                        if (e.entries.length) {
                            var t, n = e.entries.reduce(function(e, t) {
                                return e && e.value > t.value ? e : t
                            });
                            if (n && n.sources && n.sources.length) {
                                var r = (t = n.sources).find(function(e) {
                                    return e.node && 1 === e.node.nodeType
                                }) || t[0];
                                if (r) return void(e.attribution = {
                                    largestShiftTarget: c(r.node),
                                    largestShiftTime: n.startTime,
                                    largestShiftValue: n.value,
                                    largestShiftSource: r,
                                    largestShiftEntry: n,
                                    loadState: o(n.startTime)
                                })
                            }
                        }
                        e.attribution = {}
                    })(t), e(t)
                }, r = (r = t) || {}, x(y(function() {
                    var e, t = v("CLS", 0),
                        i = 0,
                        a = [],
                        o = function(n) {
                            n.forEach(function(e) {
                                if (!e.hadRecentInput) {
                                    var t = a[0],
                                        n = a[a.length - 1];
                                    i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value, a.push(e)) : (i = e.value, a = [e])
                                }
                            }), i > t.value && (t.value = i, t.entries = a, e())
                        },
                        u = m("layout-shift", o);
                    u && (e = p(n, t, k, r.reportAllChanges), g(function() {
                        o(u.takeRecords()), e(!0)
                    }), d(function() {
                        i = 0, e = p(n, t = v("CLS", 0), k, r.reportAllChanges), h(function() {
                            return e()
                        })
                    }), setTimeout(e, 0))
                }))
            }, F = function(e, t) {
                x(function(t) {
                    (function(e) {
                        if (e.entries.length) {
                            var t = a(),
                                n = e.entries[e.entries.length - 1];
                            if (t) {
                                var r = t.activationStart || 0,
                                    i = Math.max(0, t.responseStart - r);
                                return void(e.attribution = {
                                    timeToFirstByte: i,
                                    firstByteToFCP: e.value - i,
                                    loadState: o(e.entries[0].startTime),
                                    navigationEntry: t,
                                    fcpEntry: n
                                })
                            }
                        }
                        e.attribution = {
                            timeToFirstByte: 0,
                            firstByteToFCP: e.value,
                            loadState: o(l())
                        }
                    })(t), e(t)
                }, t)
            }, I = {
                passive: !0,
                capture: !0
            }, B = new Date, D = function(r, i) {
                e || (e = i, t = r, n = new Date, q(removeEventListener), P())
            }, P = function() {
                if (t >= 0 && t < n - B) {
                    var i = {
                        entryType: "first-input",
                        name: e.type,
                        target: e.target,
                        cancelable: e.cancelable,
                        startTime: e.timeStamp,
                        processingStart: e.timeStamp + t
                    };
                    r.forEach(function(e) {
                        e(i)
                    }), r = []
                }
            }, R = function(e) {
                if (e.cancelable) {
                    var t, n, r, i = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                    "pointerdown" == e.type ? (t = function() {
                        D(i, e), r()
                    }, n = function() {
                        r()
                    }, r = function() {
                        removeEventListener("pointerup", t, I), removeEventListener("pointercancel", n, I)
                    }, addEventListener("pointerup", t, I), addEventListener("pointercancel", n, I)) : D(i, e)
                }
            }, q = function(e) {
                ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t) {
                    return e(t, R, I)
                })
            }, N = [100, 300], O = function(n, i) {
                i = i || {}, C(function() {
                    var a, o = w(),
                        u = v("FID"),
                        c = function(e) {
                            e.startTime < o.firstHiddenTime && (u.value = e.processingStart - e.startTime, u.entries.push(e), a(!0))
                        },
                        s = function(e) {
                            e.forEach(c)
                        },
                        l = m("first-input", s);
                    a = p(n, u, N, i.reportAllChanges), l && g(y(function() {
                        s(l.takeRecords()), l.disconnect()
                    })), l && d(function() {
                        a = p(n, u = v("FID"), N, i.reportAllChanges), r = [], t = -1, e = null, q(addEventListener), r.push(c), P()
                    })
                })
            }, H = function(e, t) {
                O(function(t) {
                    var n, r;
                    r = (n = t).entries[0], n.attribution = {
                        eventTarget: c(r.target),
                        eventType: r.name,
                        eventTime: r.startTime,
                        eventEntry: r,
                        loadState: o(r.startTime)
                    }, e(t)
                }, t)
            }, V = 0, _ = 1 / 0, j = 0, J = function(e) {
                e.forEach(function(e) {
                    e.interactionId && (_ = Math.min(_, e.interactionId), V = (j = Math.max(j, e.interactionId)) ? (j - _) / 7 + 1 : 0)
                })
            }, U = function() {
                return i ? V : performance.interactionCount || 0
            }, $ = function() {
                "interactionCount" in performance || i || (i = m("event", J, {
                    type: "event",
                    buffered: !0,
                    durationThreshold: 0
                }))
            }, z = [200, 500], G = 0, K = function() {
                return U() - G
            }, Q = [], W = {}, X = function(e) {
                var t = Q[Q.length - 1],
                    n = W[e.interactionId];
                if (n || Q.length < 10 || e.duration > t.latency) {
                    if (n) n.entries.push(e), n.latency = Math.max(n.latency, e.duration);
                    else {
                        var r = {
                            id: e.interactionId,
                            latency: e.duration,
                            entries: [e]
                        };
                        W[r.id] = r, Q.push(r)
                    }
                    Q.sort(function(e, t) {
                        return t.latency - e.latency
                    }), Q.splice(10).forEach(function(e) {
                        delete W[e.id]
                    })
                }
            }, Y = function(e, t) {
                t = t || {}, C(function() {
                    $();
                    var n, r = v("INP"),
                        i = function(e) {
                            e.forEach(function(e) {
                                e.interactionId && X(e), "first-input" !== e.entryType || Q.some(function(t) {
                                    return t.entries.some(function(t) {
                                        return e.duration === t.duration && e.startTime === t.startTime
                                    })
                                }) || X(e)
                            });
                            var t = Q[Math.min(Q.length - 1, Math.floor(K() / 50))];
                            t && t.latency !== r.value && (r.value = t.latency, r.entries = t.entries, n())
                        },
                        a = m("event", i, {
                            durationThreshold: t.durationThreshold || 40
                        });
                    n = p(e, r, z, t.reportAllChanges), a && (a.observe({
                        type: "first-input",
                        buffered: !0
                    }), g(function() {
                        i(a.takeRecords()), r.value < 0 && K() > 0 && (r.value = 0, r.entries = []), n(!0)
                    }), d(function() {
                        Q = [], G = U(), n = p(e, r = v("INP"), z, t.reportAllChanges)
                    }))
                })
            }, Z = function(e, t) {
                Y(function(t) {
                    (function(e) {
                        if (e.entries.length) {
                            var t = e.entries.sort(function(e, t) {
                                return t.duration - e.duration || t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart)
                            })[0];
                            e.attribution = {
                                eventTarget: c(t.target),
                                eventType: t.name,
                                eventTime: t.startTime,
                                eventEntry: t,
                                loadState: o(t.startTime)
                            }
                        } else e.attribution = {}
                    })(t), e(t)
                }, t)
            }, ee = [2500, 4e3], et = {}, en = function(e, t) {
                var n, r;
                n = function(t) {
                    (function(e) {
                        if (e.entries.length) {
                            var t = a();
                            if (t) {
                                var n = t.activationStart || 0,
                                    r = e.entries[e.entries.length - 1],
                                    i = r.url && performance.getEntriesByType("resource").filter(function(e) {
                                        return e.name === r.url
                                    })[0],
                                    o = Math.max(0, t.responseStart - n),
                                    u = Math.max(o, i ? (i.requestStart || i.startTime) - n : 0),
                                    s = Math.max(u, i ? i.responseEnd - n : 0),
                                    l = Math.max(s, r ? r.startTime - n : 0),
                                    d = {
                                        element: c(r.element),
                                        timeToFirstByte: o,
                                        resourceLoadDelay: u - o,
                                        resourceLoadTime: s - u,
                                        elementRenderDelay: l - s,
                                        navigationEntry: t,
                                        lcpEntry: r
                                    };
                                return r.url && (d.url = r.url), i && (d.lcpResourceEntry = i), void(e.attribution = d)
                            }
                        }
                        e.attribution = {
                            timeToFirstByte: 0,
                            resourceLoadDelay: 0,
                            resourceLoadTime: 0,
                            elementRenderDelay: e.value
                        }
                    })(t), e(t)
                }, r = (r = t) || {}, C(function() {
                    var e, t = w(),
                        i = v("LCP"),
                        a = function(n) {
                            var r = n[n.length - 1];
                            r && r.startTime < t.firstHiddenTime && (i.value = Math.max(r.startTime - f(), 0), i.entries = [r], e())
                        },
                        o = m("largest-contentful-paint", a);
                    if (o) {
                        e = p(n, i, ee, r.reportAllChanges);
                        var u = y(function() {
                            et[i.id] || (a(o.takeRecords()), o.disconnect(), et[i.id] = !0, e(!0))
                        });
                        ["keydown", "click"].forEach(function(e) {
                            addEventListener(e, u, !0)
                        }), g(u), d(function(t) {
                            e = p(n, i = v("LCP"), ee, r.reportAllChanges), h(function() {
                                i.value = performance.now() - t.timeStamp, et[i.id] = !0, e(!0)
                            })
                        })
                    }
                })
            }, er = [800, 1800], ei = function e(t) {
                document.prerendering ? C(function() {
                    return e(t)
                }) : "complete" !== document.readyState ? addEventListener("load", function() {
                    return e(t)
                }, !0) : setTimeout(t, 0)
            }, ea = function(e, t) {
                t = t || {};
                var n = v("TTFB"),
                    r = p(e, n, er, t.reportAllChanges);
                ei(function() {
                    var i = a();
                    if (i) {
                        var o = i.responseStart;
                        if (o <= 0 || o > performance.now()) return;
                        n.value = Math.max(o - f(), 0), n.entries = [i], r(!0), d(function() {
                            (r = p(e, n = v("TTFB", 0), er, t.reportAllChanges))(!0)
                        })
                    }
                })
            }, eo = function(e, t) {
                ea(function(t) {
                    (function(e) {
                        if (e.entries.length) {
                            var t = e.entries[0],
                                n = t.activationStart || 0,
                                r = Math.max(t.domainLookupStart - n, 0),
                                i = Math.max(t.connectStart - n, 0),
                                a = Math.max(t.requestStart - n, 0);
                            e.attribution = {
                                waitingTime: r,
                                dnsTime: i - r,
                                connectionTime: a - i,
                                requestTime: e.value - a,
                                navigationEntry: t
                            }
                        } else e.attribution = {
                            waitingTime: 0,
                            dnsTime: 0,
                            connectionTime: 0,
                            requestTime: 0
                        }
                    })(t), e(t)
                }, t)
            }
        });

    function el() {
        let e = "";
        if ("connection" in navigator) {
            let t = navigator.connection;
            null != t && t.effectiveType && (e = t.effectiveType)
        }
        return e
    }

    function ed(e) {
        A(e), H(e), en(e), F(e), Z(e), eo(e)
    }

    function ef(e, t) {
        let n = new Blob([JSON.stringify(e)], {
            type: "text/plain"
        });
        try {
            "keepalive" in Request.prototype ? fetch(t, {
                method: "POST",
                body: n,
                keepalive: !0,
                mode: "no-cors"
            }) : "sendBeacon" in navigator && navigator.sendBeacon(t, n)
        } catch (r) {}
    }

    function ev(e) {
        return "CLS" === e.name ? e.attribution.largestShiftTarget : "FID" === e.name ? e.attribution.eventTarget : "LCP" === e.name ? e.attribution.element : void 0
    }

    function em(e, t) {
        if (Number.isInteger(e)) return e;
        let n = Math.pow(10, t);
        return Math.floor(e * n) / n
    }

    function ep(e) {
        return "CLS" === e.name ? em(e.value, 4) : "FID" === e.name ? em(e.value, 2) : Math.round(e.value)
    }
    var eh = eu(() => {
        es()
    });
    ec(() => {
        eh(),
            function() {
                var e;
                let t = [],
                    n = e => e,
                    r = document.currentScript,
                    i = Number(null != (e = null == r ? void 0 : r.dataset.sampleRate) ? e : 0),
                    a = null == r ? void 0 : r.dataset.dsn,
                    o = (null == r ? void 0 : r.dataset.endpoint) || (a ? `https://vitals.vercel-insights.com/v2/vitals?dsn=${a}&ve=production` : "/_vercel/speed-insights/vitals"),
                    u = () => {
                        var e, a;
                        0 === t.length || i && Math.random() > i || (ef({
                            speed: el(),
                            metrics: t.map(e => ({
                                id: e.id,
                                type: e.name,
                                route: e.route,
                                href: e.href,
                                value: ep(e),
                                attribution: {
                                    target: ev(e)
                                }
                            })).map(e => {
                                let t = n({
                                    type: "vital",
                                    url: e.href,
                                    route: e.route
                                });
                                return t ? { ...e,
                                    href: t.url
                                } : null
                            }).filter(e => null !== e),
                            scriptVersion: "0.1.2",
                            sdkName: null != (e = null == r ? void 0 : r.getAttribute("data-sdkn")) ? e : void 0,
                            sdkVersion: null != (a = null == r ? void 0 : r.getAttribute("data-sdkv")) ? a : void 0
                        }, o), t = [])
                    },
                    c = () => {
                        var e;
                        window.si = function(e, t) {
                            "beforeSend" === e && (n = t)
                        }, null == (e = window.siq) || e.forEach(([e, t]) => {
                            window.si(e, t)
                        })
                    };
                (() => {
                    if (window.sil) return;
                    window.sil = !0, ed(e => {
                        t.push({ ...e,
                            href: window.location.href,
                            route: null == r ? void 0 : r.dataset.route
                        }), 6 === t.length && u()
                    }), addEventListener("visibilitychange", u), addEventListener("pagehide", u), addEventListener("popstate", u);
                    let e = history.pushState.bind(history);
                    history.pushState = function(...t) {
                        e(...t), u()
                    }, c()
                })()
            }()
    })()
})();