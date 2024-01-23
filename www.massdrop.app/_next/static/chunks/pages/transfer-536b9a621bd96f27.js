(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [117], {
        76242: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/transfer", function() {
                return t(9283)
            }])
        },
        9283: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return i
                }
            });
            var u = t(85893),
                r = t(5113),
                c = t(71095),
                s = t(79014);

            function i() {
                let {
                    connectedWallet: n
                } = (0, s.useWallet)();
                return (0, u.jsx)(r.Z, {
                    children: n ? (0, u.jsx)(c.c, {}) : (0, u.jsx)("div", {
                        children: "please connect your walet to use this page"
                    })
                })
            }
        }
    },
    function(n) {
        n.O(0, [417, 309, 892, 681, 719, 466, 774, 888, 179], function() {
            return n(n.s = 76242)
        }), _N_E = n.O()
    }
]);