(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        48312: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(93923)
            }])
        },
        5113: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return C
                }
            });
            var n = t(85893),
                l = t(45995),
                i = t.n(l),
                r = t(67294),
                a = t(70959),
                o = t(44461),
                c = t(24124),
                m = t(79014),
                d = t(34292),
                x = t(6089),
                h = t(71293),
                u = t(8371),
                f = t(26101),
                j = t(41664),
                p = t.n(j),
                g = t(11163),
                w = t(20967),
                b = t(35541),
                y = t(19778),
                N = t(82999),
                v = t(64859),
                _ = t(66205),
                k = t(54346),
                z = t(14253),
                E = t(14225);

            function C(e) {
                let {
                    children: s
                } = e, {
                    connectedWallet: t
                } = (0, m.useWallet)(), l = (0, g.useRouter)(), j = ["/", "/transfer", "/mint", "/list"].findIndex((e, s) => 0 === s ? l.pathname === e : l.pathname.startsWith(e)), {
                    isOpen: C,
                    onOpen: O,
                    onClose: S
                } = (0, w.q)();
                return r.useEffect(() => {
                    let e = Number(localStorage.getItem("visited")),
                        s = new Date().getTime();
                    (null === e || s - e > 6048e5) && (O(), localStorage.setItem("visited", s.toString()))
                }, [O]), (0, n.jsxs)("main", {
                    className: "flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 ".concat(i().className),
                    children: [(0, n.jsxs)("div", {
                        className: "flex flex-col z-0 max-w-6xl w-full justify-between font-mono text-sm lg:flex",
                        children: [(0, n.jsxs)("div", {
                            className: "flex items-center mt-5 sm:mt-[-30px] relative",
                            children: [(0, n.jsxs)(d.U, {
                                spacing: 2,
                                mb: 6,
                                children: [(0, n.jsx)(x.E, {
                                    src: "/images/massdrop.png",
                                    width: 50,
                                    alt: "Logo"
                                }), (0, n.jsx)(h.x, {
                                    fontSize: "4xl",
                                    children: "massdrop"
                                })]
                            }), " ", (0, n.jsx)(u.Vp, {
                                size: "sm",
                                variant: "solid",
                                colorScheme: "gray",
                                className: "absolute top-0 left-[230px] mt-[-10px] mr-2",
                                children: "beta"
                            })]
                        }), (0, n.jsx)("div", {
                            className: "mb-12 flex justify-end mt-[-80px] z-10",
                            children: (0, n.jsx)(m.WalletConnectButton, {
                                buttonClassName: "bg-white-alpha-200 hover:bg-white-alpha-300 hover:bg-white-alpha-300 p-2 rounded-lg"
                            })
                        }), (0, n.jsx)(a.m, {
                            colorScheme: "gray",
                            className: "mb-10",
                            index: j,
                            children: (0, n.jsxs)(o.t, {
                                children: [(0, n.jsx)(c.O, {
                                    children: (0, n.jsx)(p(), {
                                        href: "/",
                                        children: "home"
                                    })
                                }), (0, n.jsx)(c.O, {
                                    children: (0, n.jsx)(p(), {
                                        href: "/transfer",
                                        children: "transfer"
                                    })
                                }), (0, n.jsx)(c.O, {
                                    children: (0, n.jsx)(p(), {
                                        href: "/mint",
                                        children: "mint"
                                    })
                                }), (0, n.jsx)(c.O, {
                                    children: (0, n.jsx)(p(), {
                                        href: "/list",
                                        children: "list"
                                    })
                                })]
                            })
                        }), ("/" === l.pathname || t) && s, (0, n.jsxs)("div", {
                            className: "font-mono text-sm bottom-0 sm:bottom-10 fixed bg-[#1A202C] rounded-lg p-1",
                            children: ["donations: ", (0, n.jsx)(f.E, {
                                children: "sei1pg3wnvdn483cyyuspa6pu0ekxc7zl8cw5y0m2d"
                            })]
                        })]
                    }), (0, n.jsxs)(b.u_, {
                        isOpen: C,
                        onClose: S,
                        children: [(0, n.jsx)(y.Z, {}), (0, n.jsxs)(N.h, {
                            className: "font-mono text-sm",
                            children: [(0, n.jsx)(v.x, {
                                children: "disclaimer"
                            }), (0, n.jsx)(_.o, {}), (0, n.jsx)(k.f, {
                                children: "massdrop is currently in beta. by using this platform, you acknowledge and accept that there may be bugs or issues that could impact its functionality. please note that I, as the developer, assume no responsibility for any problems or damages that may occur as a result of these potential issues. use at your own risk."
                            }), (0, n.jsx)(z.m, {
                                children: (0, n.jsx)(E.z, {
                                    size: "sm",
                                    mr: 3,
                                    onClick: S,
                                    children: "I accept"
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        93923: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return o
                }
            });
            var n = t(85893),
                l = t(5113);
            t(67294);
            var i = t(57747),
                r = t(71293);
            let a = () => (0, n.jsxs)(i.xu, {
                className: "mt-6",
                children: [(0, n.jsx)(r.x, {
                    fontSize: "xl",
                    children: "welcome to massdrop"
                }), (0, n.jsx)(r.x, {
                    mt: 10,
                    children: "this platform allows you to:"
                }), (0, n.jsx)(r.x, {
                    mt: 4,
                    children: "— mass transfer nfts between wallets"
                }), (0, n.jsx)(r.x, {
                    mt: 4,
                    children: "— mint public lighthouse nft collections"
                }), (0, n.jsx)(r.x, {
                    mt: 4,
                    children: "— monitor collection contract updates"
                }), (0, n.jsx)(r.x, {
                    mt: 10,
                    children: "coming soon:"
                }), (0, n.jsx)(r.x, {
                    mt: 4,
                    children: "— directly mass list nfts on pallet or dagora"
                }), (0, n.jsx)(r.x, {
                    mt: 4,
                    children: "— live sei mint feed"
                }), (0, n.jsx)(r.x, {
                    mt: 4,
                    children: "— disperse sei between wallets"
                }), (0, n.jsx)(r.x, {
                    mt: 4,
                    children: "— airdrop nfts to many wallets"
                }), (0, n.jsx)(r.x, {
                    mt: 4,
                    children: "— mint whitelist groups on lighthouse collections"
                })]
            });

            function o() {
                return (0, n.jsx)(l.Z, {
                    children: (0, n.jsx)(a, {})
                })
            }
        }
    },
    function(e) {
        e.O(0, [681, 774, 888, 179], function() {
            return e(e.s = 48312)
        }), _N_E = e.O()
    }
]);