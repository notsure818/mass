(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [687], {
        17537: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/mint", function() {
                return t(78392)
            }])
        },
        78392: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return s
                }
            });
            var u = t(85893),
                i = t(5113),
                c = t(62724),
                r = t(79014);

            function s() {
                let {
                    connectedWallet: n
                } = (0, r.useWallet)();
                return (0, u.jsx)(i.Z, {
                    children: n ? (0, u.jsx)(c.C, {}) : (0, u.jsx)("div", {
                        children: "please connect your walet to use this page"
                    })
                })
            }
        }
    },
    function(n) {
        n.O(0, [417, 309, 892, 681, 719, 794, 873, 785, 774, 888, 179], function() {
            return n(n.s = 17537)
        }), _N_E = n.O()
    }
]);