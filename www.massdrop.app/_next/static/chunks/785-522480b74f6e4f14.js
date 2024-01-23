(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [785], {
        5113: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return C
                }
            });
            var n = s(85893),
                l = s(45995),
                i = s.n(l),
                r = s(67294),
                a = s(70959),
                o = s(44461),
                c = s(24124),
                d = s(79014),
                u = s(34292),
                m = s(6089),
                x = s(71293),
                h = s(8371),
                p = s(26101),
                j = s(41664),
                f = s.n(j),
                g = s(11163),
                v = s(20967),
                _ = s(35541),
                w = s(19778),
                b = s(82999),
                y = s(64859),
                k = s(66205),
                S = s(54346),
                N = s(14253),
                z = s(14225);

            function C(e) {
                let {
                    children: t
                } = e, {
                    connectedWallet: s
                } = (0, d.useWallet)(), l = (0, g.useRouter)(), j = ["/", "/transfer", "/mint", "/list"].findIndex((e, t) => 0 === t ? l.pathname === e : l.pathname.startsWith(e)), {
                    isOpen: C,
                    onOpen: E,
                    onClose: I
                } = (0, v.q)();
                return r.useEffect(() => {
                    let e = Number(localStorage.getItem("visited")),
                        t = new Date().getTime();
                    (null === e || t - e > 6048e5) && (E(), localStorage.setItem("visited", t.toString()))
                }, [E]), (0, n.jsxs)("main", {
                    className: "flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 ".concat(i().className),
                    children: [(0, n.jsxs)("div", {
                        className: "flex flex-col z-0 max-w-6xl w-full justify-between font-mono text-sm lg:flex",
                        children: [(0, n.jsxs)("div", {
                            className: "flex items-center mt-5 sm:mt-[-30px] relative",
                            children: [(0, n.jsxs)(u.U, {
                                spacing: 2,
                                mb: 6,
                                children: [(0, n.jsx)(m.E, {
                                    src: "/images/massdrop.png",
                                    width: 50,
                                    alt: "Logo"
                                }), (0, n.jsx)(x.x, {
                                    fontSize: "4xl",
                                    children: "massdrop"
                                })]
                            }), " ", (0, n.jsx)(h.Vp, {
                                size: "sm",
                                variant: "solid",
                                colorScheme: "gray",
                                className: "absolute top-0 left-[230px] mt-[-10px] mr-2",
                                children: "beta"
                            })]
                        }), (0, n.jsx)("div", {
                            className: "mb-12 flex justify-end mt-[-80px] z-10",
                            children: (0, n.jsx)(d.WalletConnectButton, {
                                buttonClassName: "bg-white-alpha-200 hover:bg-white-alpha-300 hover:bg-white-alpha-300 p-2 rounded-lg"
                            })
                        }), (0, n.jsx)(a.m, {
                            colorScheme: "gray",
                            className: "mb-10",
                            index: j,
                            children: (0, n.jsxs)(o.t, {
                                children: [(0, n.jsx)(c.O, {
                                    children: (0, n.jsx)(f(), {
                                        href: "/",
                                        children: "home"
                                    })
                                }), (0, n.jsx)(c.O, {
                                    children: (0, n.jsx)(f(), {
                                        href: "/transfer",
                                        children: "transfer"
                                    })
                                }), (0, n.jsx)(c.O, {
                                    children: (0, n.jsx)(f(), {
                                        href: "/mint",
                                        children: "mint"
                                    })
                                }), (0, n.jsx)(c.O, {
                                    children: (0, n.jsx)(f(), {
                                        href: "/list",
                                        children: "list"
                                    })
                                })]
                            })
                        }), ("/" === l.pathname || s) && t, (0, n.jsxs)("div", {
                            className: "font-mono text-sm bottom-0 sm:bottom-10 fixed bg-[#1A202C] rounded-lg p-1",
                            children: ["donations: ", (0, n.jsx)(p.E, {
                                children: "sei1pg3wnvdn483cyyuspa6pu0ekxc7zl8cw5y0m2d"
                            })]
                        })]
                    }), (0, n.jsxs)(_.u_, {
                        isOpen: C,
                        onClose: I,
                        children: [(0, n.jsx)(w.Z, {}), (0, n.jsxs)(b.h, {
                            className: "font-mono text-sm",
                            children: [(0, n.jsx)(y.x, {
                                children: "disclaimer"
                            }), (0, n.jsx)(k.o, {}), (0, n.jsx)(S.f, {
                                children: "massdrop is currently in beta. by using this platform, you acknowledge and accept that there may be bugs or issues that could impact its functionality. please note that I, as the developer, assume no responsibility for any problems or damages that may occur as a result of these potential issues. use at your own risk."
                            }), (0, n.jsx)(N.m, {
                                children: (0, n.jsx)(z.z, {
                                    size: "sm",
                                    mr: 3,
                                    onClick: I,
                                    children: "I accept"
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        62724: function(e, t, s) {
            "use strict";
            s.d(t, {
                C: function() {
                    return F
                }
            });
            var n = s(85893),
                l = s(67294),
                i = s(85970),
                r = s(8371),
                a = s(57747),
                o = s(79078),
                c = s(79014),
                d = s(9669),
                u = s.n(d),
                m = s(24658),
                x = s(74926),
                h = s(70794);
            let p = async (e, t, s, n, l, i, r) => {
                try {
                    if (n && l) {
                        let n = await x.SigningCosmWasmClient.connectWithSigner("https://rpc.ankr.com/sei", l, {
                                gasPrice: m.GasPrice.fromString("0.1usei")
                            }),
                            a = new h.O("1500000"),
                            o = i[0].address,
                            c = [];
                        new h.O(t).isGreaterThan(0) && (c = [{
                            denom: "usei",
                            amount: new h.O(t).plus(a).toString()
                        }]);
                        let d = Array(s).fill({
                                contractAddress: "sei1hjsqrfdg2hvwl3gacg4fkznurf36usrv7rkzkyh29wz3guuzeh0snslz7d",
                                msg: {
                                    mint_native: {
                                        collection: r,
                                        group: e,
                                        recipient: o,
                                        merkle_proof: null,
                                        hashed_address: null
                                    }
                                },
                                funds: c
                            }),
                            u = await n.executeMultiple(o, d, "auto", "");
                        return console.log("Successful mint", u), {
                            success: !0,
                            result: u
                        }
                    }
                    console.log("No wallet connected")
                } catch (e) {
                    return console.error(e), {
                        success: !1,
                        result: e.message
                    }
                }
            };
            var j = s(79002),
                f = s(13990),
                g = s(40607),
                v = s(71293),
                _ = s(26101),
                w = s(48783),
                b = s(72174),
                y = s(14225);
            let k = e => {
                var t, s;
                let {
                    group: l,
                    index: i,
                    handleMint: r,
                    mintingGroupIndex: a,
                    amountToMint: o,
                    setAmountToMint: c,
                    relativeTimes: d,
                    contractInfo: u
                } = e;
                return (0, n.jsx)(f.Z, {
                    borderRadius: "lg",
                    border: "solid 1px",
                    children: (0, n.jsxs)(g.e, {
                        pl: 4,
                        children: [(0, n.jsx)(v.x, {
                            children: (0, n.jsx)("span", {
                                className: "font-bold text-lg",
                                children: l.name
                            })
                        }), (0, n.jsxs)(v.x, {
                            children: ["max per wallet: ", 0 === l.max_tokens ? "unlimited" : l.max_tokens]
                        }), " ", (0, n.jsxs)(v.x, {
                            children: ["unit price:", " ", new h.O(l.unit_price).isEqualTo(0) ? l.unit_price : new h.O(l.unit_price).dividedBy(1e6).toString(), " ", "sei"]
                        }), (0, n.jsxs)(v.x, {
                            children: ["start: ", (0, n.jsx)(_.E, {
                                children: new Date(1e3 * l.start_time).toISOString()
                            })]
                        }), (0, n.jsxs)(v.x, {
                            children: ["end: ", l.end_time ? (0, n.jsx)(_.E, {
                                children: new Date(1e3 * l.end_time).toLocaleString()
                            }) : "never"]
                        }), (0, n.jsxs)(v.x, {
                            children: ["merkle root: ", l.merkle_root ? "true" : "false"]
                        }), (0, n.jsxs)(v.x, {
                            children: ["public mintable:", " ", l.merkle_root ? (0, n.jsx)("span", {
                                className: "text-red-500",
                                children: "false"
                            }) : (0, n.jsx)("span", {
                                className: "text-green-500",
                                children: "true"
                            })]
                        }), 1e3 * l.start_time > Date.now() && (0, n.jsxs)(v.x, {
                            children: ["begins in: ", (0, n.jsx)(_.E, {
                                children: d[i]
                            })]
                        }), !l.merkle_root && (0, n.jsxs)(w.g, {
                            align: "start",
                            mt: 4,
                            children: [(0, n.jsxs)(b.Y2, {
                                defaultValue: 1,
                                min: 1,
                                max: 0 === l.max_tokens ? 999 : l.max_tokens,
                                width: "full",
                                onChange: (e, t) => {
                                    c(e => ({ ...e,
                                        [i]: t
                                    }))
                                },
                                children: [(0, n.jsx)(b.zu, {
                                    textAlign: "right"
                                }), (0, n.jsxs)(b.Fi, {
                                    children: [(0, n.jsx)(b.WQ, {}), (0, n.jsx)(b.Y_, {})]
                                })]
                            }), (0, n.jsxs)(v.x, {
                                children: ["Total cost:", " ", (0, n.jsx)(_.E, {
                                    children: new h.O((null == u ? void 0 : null === (t = u.mint_groups[i]) || void 0 === t ? void 0 : t.unit_price) || "0").isEqualTo(0) ? "0" : new h.O((null == u ? void 0 : null === (s = u.mint_groups[i]) || void 0 === s ? void 0 : s.unit_price) || "0").plus(new h.O("1500000")).multipliedBy(o[i] || 0).dividedBy(1e6).toString()
                                }), " ", "sei + gas"]
                            }), (0, n.jsx)(y.z, {
                                size: "sm",
                                variant: "solid",
                                width: "full",
                                isDisabled: 0 != l.end_time && 1e3 * l.end_time < Date.now() || 1e3 * l.start_time > Date.now() || ((null == u ? void 0 : u.next_token_id) || 0) >= ((null == u ? void 0 : u.supply) || 0),
                                onClick: () => {
                                    u && r(l, u, i)
                                },
                                isLoading: a === i,
                                children: "mint"
                            })]
                        })]
                    })
                }, i)
            };
            var S = s(6089);
            let N = e => {
                let {
                    contractInfo: t,
                    imageUrl: s
                } = e;
                return (0, n.jsxs)(o.r, {
                    templateColumns: "repeat(2, 1fr)",
                    gap: 6,
                    children: [(0, n.jsxs)(w.g, {
                        align: "start",
                        mt: 4,
                        children: [(0, n.jsxs)(v.x, {
                            className: "text-xl",
                            children: [null == t ? void 0 : t.name, " (", null == t ? void 0 : t.symbol, ")"]
                        }), (0, n.jsxs)(v.x, {
                            children: ["total minted: ", (null == t ? void 0 : t.next_token_id) ? t.next_token_id - 1 : 0, "/", null == t ? void 0 : t.supply]
                        }), (0, n.jsxs)(v.x, {
                            children: ["mint percent:", " ", Number((null == t ? void 0 : t.next_token_id) ? t.next_token_id - 1 : 0) / Number(null == t ? void 0 : t.supply) * 100, "%"]
                        }), (0, n.jsxs)(v.x, {
                            children: ["iterated uri: ", String(null == t ? void 0 : t.iterated_uri)]
                        }), (0, n.jsxs)(v.x, {
                            children: ["frozen: ", String(null == t ? void 0 : t.frozen)]
                        }), (0, n.jsxs)(v.x, {
                            children: ["hidden metadata: ", String(null == t ? void 0 : t.hidden_metadata)]
                        }), (0, n.jsxs)(v.x, {
                            children: ["placeholder token uri: ", (null == t ? void 0 : t.placeholder_token_uri) ? t.placeholder_token_uri : "none"]
                        }), (0, n.jsxs)(v.x, {
                            children: ["admin: ", (0, n.jsx)(_.E, {
                                children: null == t ? void 0 : t.admin
                            })]
                        })]
                    }), s && (0, n.jsx)(S.E, {
                        className: "ml-auto",
                        src: s,
                        alt: null == t ? void 0 : t.name,
                        boxSize: "250px",
                        objectFit: "cover",
                        borderRadius: "lg"
                    }), " "]
                })
            };
            var z = s(33090);
            let C = e => {
                let {
                    contractAddress: t,
                    setContractAddress: s,
                    handleSearch: l,
                    isLoading: i,
                    searchPerformed: r,
                    contractInfo: a,
                    accounts: o
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(v.x, {
                        className: "mb-2",
                        children: "contract address"
                    }), (0, n.jsxs)("div", {
                        className: "flex items-center mb-8",
                        children: [(0, n.jsx)(z.I, {
                            size: "sm",
                            value: t,
                            onChange: e => s(e.target.value)
                        }), (0, n.jsx)(y.z, {
                            ml: 2,
                            size: "sm",
                            onClick: l,
                            isLoading: i,
                            isDisabled: !/^sei[a-zA-Z0-9]{59}$/.test(t),
                            children: "search"
                        })]
                    }), r && !i && (!a || !(null == a ? void 0 : a.cw721_address)) && (0, n.jsxs)("div", {
                        className: "no-tokens-message",
                        children: ["no contract found for ", (0, n.jsx)(_.E, {
                            children: o[0].address
                        })]
                    })]
                })
            };
            var E = s(35541),
                I = s(19778),
                O = s(82999),
                A = s(64859),
                D = s(66205),
                T = s(54346),
                W = s(14253);
            let L = e => {
                    let {
                        isOpen: t,
                        onClose: s,
                        mintReceipt: l,
                        mintFailed: i
                    } = e;
                    return (0, n.jsxs)(E.u_, {
                        size: "lg",
                        isOpen: t,
                        onClose: s,
                        children: [(0, n.jsx)(I.Z, {}), (0, n.jsxs)(O.h, {
                            children: [(0, n.jsx)(A.x, {
                                className: "font-mono",
                                children: l ? "mint successful" : "mint failed"
                            }), (0, n.jsx)(D.o, {}), (0, n.jsx)(T.f, {
                                className: "font-mono text-sm",
                                children: l ? (0, n.jsx)("div", {
                                    children: (0, n.jsx)("a", {
                                        href: "https://www.seiscan.app/pacific-1/txs/".concat(l.transactionHash),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "https://www.seiscan.app/pacific-1/txs/".concat(l.transactionHash.toLowerCase())
                                    })
                                }) : (0, n.jsx)("div", {
                                    children: i
                                })
                            }), (0, n.jsx)(W.m, {
                                className: "font-mono text-sm",
                                children: (0, n.jsx)(y.z, {
                                    mt: 2,
                                    size: "sm",
                                    colorScheme: "red",
                                    onClick: s,
                                    children: "close"
                                })
                            })]
                        })]
                    })
                },
                F = e => {
                    var t;
                    let {
                        initialContractAddress: s
                    } = e, {
                        offlineSigner: d,
                        connectedWallet: m,
                        accounts: x
                    } = (0, c.useWallet)(), [h, f] = (0, l.useState)(s || ""), [g, v] = (0, l.useState)(!1), [_, w] = (0, l.useState)(null), [b, y] = (0, l.useState)(null), [S, z] = (0, l.useState)({}), [E, I] = (0, l.useState)(null), [O, A] = (0, l.useState)(!1), [D, T] = (0, l.useState)(""), [W, F] = (0, l.useState)(null), [Z, q] = (0, l.useState)({}), [B, M] = (0, l.useState)(!1), [R, G] = (0, l.useState)(!1);
                    (0, l.useEffect)(() => {
                        s && H()
                    }, [s]);
                    let P = (e, t) => {
                        let s = new Date(1e3 * e);
                        q(e => ({ ...e,
                            [t]: (0, j.Q)(s, {
                                addSuffix: !0,
                                includeSeconds: !0
                            })
                        }))
                    };
                    (0, l.useEffect)(() => {
                        var e;
                        let t = {};
                        return null == _ || null === (e = _.mint_groups) || void 0 === e || e.forEach((e, s) => {
                            P(e.start_time, s), t[s] = setInterval(() => P(e.start_time, s), 1e3)
                        }), () => {
                            Object.values(t).forEach(clearInterval)
                        }
                    }, [_]), (0, l.useEffect)(() => {
                        (async () => {
                            if (null == _ ? void 0 : _.token_uri) try {
                                let e = await u().get(_.token_uri);
                                y(e.data.image)
                            } catch (e) {
                                console.error(e)
                            }
                        })()
                    }, [null == _ ? void 0 : _.cw721_address]);
                    let V = async e => (await u().get("/api/find-contract?contractAddress=".concat(e))).data.contractInfo;
                    (0, l.useEffect)(() => {
                        let e = null,
                            t = async () => {
                                if (h && B) try {
                                    let e = await V(h);
                                    w(e)
                                } catch (e) {
                                    console.error(e)
                                }
                            };
                        return _ && (e = setInterval(t, 2e3)), () => {
                            e && clearInterval(e)
                        }
                    }, [_, h, B]);
                    let H = async () => {
                            v(!0), w(null), y(null), z({}), F(null), q({}), M(!1), G(!1);
                            try {
                                let e = await V(h);
                                w(e);
                                let t = e.mint_groups.reduce((e, t, s) => (e[s] = 1, e), {});
                                z(t), M(!0)
                            } catch (e) {
                                console.error(e)
                            } finally {
                                v(!1), G(!0)
                            }
                        },
                        Q = async (e, t, s) => {
                            F(s);
                            try {
                                let n = await p(e.name, e.unit_price, S[s], m, d, x, t.cw721_address);
                                if (n) {
                                    let {
                                        success: e,
                                        result: t
                                    } = n;
                                    e ? I(t) : T(t)
                                }
                            } catch (e) {
                                console.error(e)
                            } finally {
                                A(!0), F(null)
                            }
                        };
                    return (0, n.jsxs)(i.NI, {
                        children: [(0, n.jsx)(C, {
                            contractAddress: h,
                            setContractAddress: f,
                            handleSearch: H,
                            isLoading: g,
                            searchPerformed: R,
                            contractInfo: _,
                            accounts: x
                        }), (0, n.jsx)(r.Vp, {
                            mt: 2,
                            children: "only public collections are supported for minting. whitelist mints coming soon..."
                        }), _ && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(N, {
                                contractInfo: _,
                                imageUrl: b
                            }), (0, n.jsx)("div", {
                                className: "mt-8 mb-4",
                                children: "mint groups:"
                            })]
                        }), (0, n.jsx)(a.xu, {
                            children: (0, n.jsx)(o.r, {
                                templateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                                gap: 6,
                                mt: 2,
                                children: (null == _ ? void 0 : _.mint_groups) && (null == (t = _.mint_groups) ? void 0 : t.map((e, t) => (0, n.jsx)(k, {
                                    group: e,
                                    index: t,
                                    handleMint: Q,
                                    mintingGroupIndex: W,
                                    amountToMint: S,
                                    setAmountToMint: z,
                                    relativeTimes: Z,
                                    contractInfo: _
                                }, t)))
                            })
                        }), (0, n.jsx)(L, {
                            isOpen: O,
                            onClose: () => {
                                A(!1), I(null), T("")
                            },
                            mintReceipt: E,
                            mintFailed: D
                        })]
                    })
                }
        },
        20131: function() {},
        16026: function() {}
    }
]);