(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [466], {
        5113: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return _
                }
            });
            var n = t(85893),
                r = t(45995),
                a = t.n(r),
                l = t(67294),
                i = t(70959),
                c = t(44461),
                o = t(24124),
                d = t(79014),
                m = t(34292),
                u = t(6089),
                h = t(71293),
                x = t(8371),
                f = t(26101),
                j = t(41664),
                p = t.n(j),
                g = t(11163),
                b = t(20967),
                v = t(35541),
                k = t(19778),
                y = t(82999),
                S = t(64859),
                w = t(66205),
                N = t(54346),
                C = t(14253),
                z = t(14225);

            function _(e) {
                let {
                    children: s
                } = e, {
                    connectedWallet: t
                } = (0, d.useWallet)(), r = (0, g.useRouter)(), j = ["/", "/transfer", "/mint", "/list"].findIndex((e, s) => 0 === s ? r.pathname === e : r.pathname.startsWith(e)), {
                    isOpen: _,
                    onOpen: E,
                    onClose: A
                } = (0, b.q)();
                return l.useEffect(() => {
                    let e = Number(localStorage.getItem("visited")),
                        s = new Date().getTime();
                    (null === e || s - e > 6048e5) && (E(), localStorage.setItem("visited", s.toString()))
                }, [E]), (0, n.jsxs)("main", {
                    className: "flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 ".concat(a().className),
                    children: [(0, n.jsxs)("div", {
                        className: "flex flex-col z-0 max-w-6xl w-full justify-between font-mono text-sm lg:flex",
                        children: [(0, n.jsxs)("div", {
                            className: "flex items-center mt-5 sm:mt-[-30px] relative",
                            children: [(0, n.jsxs)(m.U, {
                                spacing: 2,
                                mb: 6,
                                children: [(0, n.jsx)(u.E, {
                                    src: "/images/massdrop.png",
                                    width: 50,
                                    alt: "Logo"
                                }), (0, n.jsx)(h.x, {
                                    fontSize: "4xl",
                                    children: "massdrop"
                                })]
                            }), " ", (0, n.jsx)(x.Vp, {
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
                        }), (0, n.jsx)(i.m, {
                            colorScheme: "gray",
                            className: "mb-10",
                            index: j,
                            children: (0, n.jsxs)(c.t, {
                                children: [(0, n.jsx)(o.O, {
                                    children: (0, n.jsx)(p(), {
                                        href: "/",
                                        children: "home"
                                    })
                                }), (0, n.jsx)(o.O, {
                                    children: (0, n.jsx)(p(), {
                                        href: "/transfer",
                                        children: "transfer"
                                    })
                                }), (0, n.jsx)(o.O, {
                                    children: (0, n.jsx)(p(), {
                                        href: "/mint",
                                        children: "mint"
                                    })
                                }), (0, n.jsx)(o.O, {
                                    children: (0, n.jsx)(p(), {
                                        href: "/list",
                                        children: "list"
                                    })
                                })]
                            })
                        }), ("/" === r.pathname || t) && s, (0, n.jsxs)("div", {
                            className: "font-mono text-sm bottom-0 sm:bottom-10 fixed bg-[#1A202C] rounded-lg p-1",
                            children: ["donations: ", (0, n.jsx)(f.E, {
                                children: "sei1pg3wnvdn483cyyuspa6pu0ekxc7zl8cw5y0m2d"
                            })]
                        })]
                    }), (0, n.jsxs)(v.u_, {
                        isOpen: _,
                        onClose: A,
                        children: [(0, n.jsx)(k.Z, {}), (0, n.jsxs)(y.h, {
                            className: "font-mono text-sm",
                            children: [(0, n.jsx)(S.x, {
                                children: "disclaimer"
                            }), (0, n.jsx)(w.o, {}), (0, n.jsx)(N.f, {
                                children: "massdrop is currently in beta. by using this platform, you acknowledge and accept that there may be bugs or issues that could impact its functionality. please note that I, as the developer, assume no responsibility for any problems or damages that may occur as a result of these potential issues. use at your own risk."
                            }), (0, n.jsx)(C.m, {
                                children: (0, n.jsx)(z.z, {
                                    size: "sm",
                                    mr: 3,
                                    onClick: A,
                                    children: "I accept"
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        71095: function(e, s, t) {
            "use strict";
            t.d(s, {
                c: function() {
                    return L
                }
            });
            var n = t(85893),
                r = t(67294),
                a = t(9669),
                l = t.n(a),
                i = t(79014);
            let {
                GasPrice: c
            } = t(24658), {
                SigningCosmWasmClient: o
            } = t(74926), d = async (e, s, t, n, r, a) => {
                try {
                    if (n && r) {
                        let n = await o.connectWithSigner("https://rpc.ankr.com/sei", r, {
                                gasPrice: c.fromString("0.1usei")
                            }),
                            l = e.map(e => ({
                                contractAddress: s,
                                msg: {
                                    transfer_nft: {
                                        recipient: t,
                                        token_id: e.toString()
                                    }
                                }
                            })),
                            i = await n.executeMultiple(a[0].address, l, "auto", "");
                        return console.log("Successful transfer", i), {
                            success: !0,
                            result: i
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
            var m = t(71293),
                u = t(33090),
                h = t(14225),
                x = t(26101);
            let f = e => {
                    let {
                        contractAddress: s,
                        isLoading: t,
                        handleSearch: r,
                        setContractAddress: a,
                        searchPerformed: l,
                        tokenData: i,
                        accounts: c
                    } = e;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(m.x, {
                            className: "mb-2",
                            children: "contract address"
                        }), (0, n.jsxs)("div", {
                            className: "flex items-center mb-8",
                            children: [(0, n.jsx)(u.I, {
                                size: "sm",
                                value: s,
                                onChange: e => a(e.target.value)
                            }), (0, n.jsx)(h.z, {
                                ml: 2,
                                size: "sm",
                                onClick: r,
                                isLoading: t,
                                isDisabled: !/^sei[a-zA-Z0-9]{59}$/.test(s),
                                children: "search"
                            })]
                        }), l && !t && (!i || (null == i ? void 0 : i.length) == 0) && (0, n.jsxs)("div", {
                            className: "no-tokens-message",
                            children: ["no tokens found for ", (0, n.jsx)(x.E, {
                                children: c[0].address
                            })]
                        })]
                    })
                },
                j = e => {
                    let {
                        recipientAddress: s,
                        selectedTokens: t,
                        handleTransferClick: r,
                        setRecipientAddress: a,
                        tokenData: l
                    } = e;
                    return (0, n.jsx)(n.Fragment, {
                        children: l && (null == l ? void 0 : l.length) !== 0 && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(m.x, {
                                className: "mb-2",
                                children: "recipient address"
                            }), (0, n.jsxs)("div", {
                                className: "flex items-center mb-4",
                                children: [(0, n.jsx)(u.I, {
                                    size: "sm",
                                    value: s,
                                    onChange: e => a(e.target.value)
                                }), (0, n.jsx)(h.z, {
                                    ml: 2,
                                    size: "sm",
                                    onClick: r,
                                    isDisabled: !s || t.length < 1,
                                    children: "transfer"
                                })]
                            })]
                        })
                    })
                };
            var p = t(8371),
                g = t(79078),
                b = t(68519),
                v = t(57747),
                k = t(13990),
                y = t(40607),
                S = t(6089),
                w = t(49429),
                N = t(96854);
            let C = e => {
                    let {
                        name: s,
                        mint: t,
                        imageUrl: r,
                        onTokenSelect: a,
                        isSelected: l
                    } = e;
                    return (0, n.jsx)(v.xu, {
                        mb: 2,
                        p: 2,
                        onClick: () => a(t),
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        children: (0, n.jsx)(k.Z, {
                            maxW: "sm",
                            children: (0, n.jsxs)(y.e, {
                                bg: l ? "rgba(56, 161, 105, 0.5)" : "#2D3748",
                                borderRadius: "lg",
                                children: [(0, n.jsxs)(m.x, {
                                    className: "text-md sm:text-lg font-medium mb-2",
                                    style: {
                                        userSelect: "none"
                                    },
                                    children: [s.toLowerCase(), " ", (0, n.jsxs)(m.x, {
                                        as: "span",
                                        className: "font-bold",
                                        children: ["#", t]
                                    })]
                                }), (0, n.jsx)(w.o, {
                                    ratio: 1,
                                    children: (0, n.jsx)(N.O, {
                                        isLoaded: !!r,
                                        fadeDuration: .8,
                                        borderRadius: "lg",
                                        children: (0, n.jsx)(S.E, {
                                            src: r,
                                            alt: "".concat(s, " #").concat(t),
                                            borderRadius: "lg",
                                            objectFit: "cover"
                                        })
                                    })
                                })]
                            })
                        })
                    })
                },
                z = e => {
                    let {
                        tokenData: s,
                        contractData: t,
                        imageUrls: r,
                        selectedTokens: a,
                        areAllTokensSelected: l,
                        handleTokenSelect: i,
                        handleSelectAll: c
                    } = e;
                    return (0, n.jsx)(n.Fragment, {
                        children: s && 0 !== s.length && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("div", {
                                className: "flex items-center mt-6",
                                children: [(0, n.jsx)(h.z, {
                                    mt: 2,
                                    size: "sm",
                                    mb: 2,
                                    onClick: c,
                                    children: l || s && a.length === s.length ? "deselect all" : "select all"
                                }), (0, n.jsxs)(p.Vp, {
                                    size: "md",
                                    ml: 5,
                                    variant: "solid",
                                    colorScheme: "green",
                                    className: "ml-2",
                                    children: [a.length, "/", s.length, " selected"]
                                })]
                            }), (0, n.jsx)(g.r, {
                                templateColumns: {
                                    base: "repeat(2, 1fr)",
                                    md: "repeat(3, 1fr)",
                                    lg: "repeat(5, 1fr)"
                                },
                                gap: 1,
                                children: s.map((e, s) => (0, n.jsx)(b.P, {
                                    children: (0, n.jsx)(C, {
                                        name: (null == t ? void 0 : t.name) || "",
                                        mint: e.id,
                                        imageUrl: r[e.id],
                                        onTokenSelect: i,
                                        isSelected: a.includes(e.id)
                                    })
                                }, s))
                            })]
                        })
                    })
                };
            var _ = t(35541),
                E = t(19778),
                A = t(82999),
                R = t(64859),
                D = t(66205),
                I = t(54346),
                O = t(14253);
            let F = e => {
                    let {
                        isModalOpen: s,
                        setIsModalOpen: t,
                        selectedTokens: r,
                        contractData: a,
                        recipientAddress: l,
                        accounts: i,
                        handleTransfer: c,
                        isTransferLoading: o
                    } = e;
                    return (0, n.jsxs)(_.u_, {
                        size: "lg",
                        isOpen: s,
                        onClose: () => t(!1),
                        children: [(0, n.jsx)(E.Z, {}), (0, n.jsxs)(A.h, {
                            children: [(0, n.jsx)(R.x, {
                                className: "font-mono",
                                children: "confirmation"
                            }), (0, n.jsx)(D.o, {}), (0, n.jsxs)(I.f, {
                                className: "font-mono text-sm",
                                children: ["you are about to transfer:", (0, n.jsx)("br", {}), (0, n.jsx)("br", {}), (0, n.jsx)(x.E, {
                                    children: r.length
                                }), " ", null == a ? void 0 : a.name, " ", 1 === r.length ? "token" : "tokens", " ", "from ", (0, n.jsx)("br", {}), " ", (0, n.jsx)("br", {}), (0, n.jsx)(x.E, {
                                    children: i[0].address
                                }), (0, n.jsx)("br", {}), " ", (0, n.jsx)("br", {}), "to ", (0, n.jsx)("br", {}), " ", (0, n.jsx)("br", {}), (0, n.jsx)(x.E, {
                                    children: l
                                })]
                            }), (0, n.jsxs)(O.m, {
                                children: [(0, n.jsx)(h.z, {
                                    mt: 2,
                                    size: "sm",
                                    mr: 4,
                                    onClick: () => c(r),
                                    isLoading: o,
                                    children: "confirm"
                                }), (0, n.jsx)(h.z, {
                                    mt: 2,
                                    size: "sm",
                                    colorScheme: "red",
                                    onClick: () => t(!1),
                                    children: "cancel"
                                })]
                            })]
                        })]
                    })
                },
                T = e => {
                    let {
                        isResultModalOpen: s,
                        setIsResultModalOpen: t,
                        transferResult: r,
                        transferFailed: a,
                        resetTransferResult: l
                    } = e;
                    return (0, n.jsxs)(_.u_, {
                        size: "lg",
                        isOpen: s,
                        onClose: () => t(!1),
                        children: [(0, n.jsx)(E.Z, {}), (0, n.jsxs)(A.h, {
                            children: [(0, n.jsx)(R.x, {
                                className: "font-mono",
                                children: r ? "transfer successful" : "transfer failed"
                            }), (0, n.jsx)(D.o, {}), (0, n.jsx)(I.f, {
                                className: "font-mono text-sm",
                                children: r ? (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)("div", {
                                        children: (0, n.jsx)("a", {
                                            href: "https://www.seiscan.app/pacific-1/txs/".concat(r.transactionHash),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "https://www.seiscan.app/pacific-1/txs/".concat(r.transactionHash.toLowerCase())
                                        })
                                    })
                                }) : (0, n.jsx)("div", {
                                    children: a
                                })
                            }), (0, n.jsx)(O.m, {
                                children: (0, n.jsx)(h.z, {
                                    mt: 2,
                                    size: "sm",
                                    colorScheme: "red",
                                    onClick: () => {
                                        t(!1), l()
                                    },
                                    children: "close"
                                })
                            })]
                        })]
                    })
                },
                L = e => {
                    let {
                        initialContractAddress: s
                    } = e, {
                        offlineSigner: t,
                        connectedWallet: a,
                        accounts: c
                    } = (0, i.useWallet)(), [o, m] = (0, r.useState)(s || ""), [u, h] = (0, r.useState)(""), [x, p] = (0, r.useState)([]), [g, b] = (0, r.useState)(null), [v, k] = (0, r.useState)(!1), [y, S] = (0, r.useState)({}), [w, N] = (0, r.useState)([]), [C, _] = (0, r.useState)(""), [E, A] = (0, r.useState)(!1), [R, D] = (0, r.useState)(!1), [I, O] = (0, r.useState)(null), [L, W] = (0, r.useState)(!1), [$, Z] = (0, r.useState)(""), [M, G] = (0, r.useState)(!1), [P, U] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                        s && V()
                    }, [s]);
                    let Q = () => {
                        h(""), p([]), b(null), k(!1), S({}), N([]), _(""), A(!1), D(!1), W(!1), G(!1)
                    };
                    (0, r.useEffect)(() => {
                        x && A(w.length === x.length)
                    }, [w, x]);
                    let q = async e => {
                        W(!0);
                        try {
                            let s = await d(e, o, C, a, t, c);
                            if (s) {
                                let {
                                    success: e,
                                    result: t
                                } = s;
                                e ? (O(t), V()) : Z(t)
                            }
                        } catch (e) {
                            Z(e.message)
                        } finally {
                            W(!1), D(!1), U(!0)
                        }
                    };
                    (0, r.useEffect)(() => {
                        x && B(x)
                    }, [x]);
                    let B = async e => {
                            let s = {};
                            for (let t of e) {
                                let e = await H(t.uri);
                                s[t.id] = e
                            }
                            S(s)
                        },
                        H = async e => {
                            try {
                                return (await l().get(e)).data.image
                            } catch (e) {
                                console.error(e)
                            }
                        },
                        J = async (e, s) => (await l().get("/api/find-tokens?contractAddress=".concat(e, "&walletAddress=").concat(s))).data,
                        V = async () => {
                            Q(), k(!0);
                            let e = await (null == a ? void 0 : a.getAccounts("pacific-1"));
                            if (e && e[0] && o) try {
                                let s = await J(o, e[0].address);
                                p(s.tokensInWallet), b(s.contractInfo), h(s.tokenUri)
                            } catch (e) {
                                console.error(e)
                            } finally {
                                k(!1), G(!0)
                            } else console.error("Wallet address is undefined")
                        };
                    if (a) return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(f, {
                            contractAddress: o,
                            isLoading: v,
                            handleSearch: V,
                            setContractAddress: m,
                            searchPerformed: M,
                            tokenData: x,
                            accounts: c
                        }), (0, n.jsx)(j, {
                            recipientAddress: C,
                            selectedTokens: w,
                            handleTransferClick: () => {
                                D(!0)
                            },
                            setRecipientAddress: _,
                            tokenData: x
                        }), (0, n.jsx)(z, {
                            tokenData: x,
                            contractData: g,
                            imageUrls: y,
                            selectedTokens: w,
                            areAllTokensSelected: E,
                            handleTokenSelect: e => {
                                N(s => s.includes(e) ? s.filter(s => s !== e) : [...s, e])
                            },
                            handleSelectAll: () => {
                                x && (E ? (N([]), A(!1)) : (N(x.map(e => e.id)), A(!0)))
                            }
                        }), (0, n.jsx)(F, {
                            isModalOpen: R,
                            setIsModalOpen: D,
                            selectedTokens: w,
                            contractData: g,
                            recipientAddress: C,
                            accounts: c,
                            handleTransfer: q,
                            isTransferLoading: L
                        }), (0, n.jsx)(T, {
                            isResultModalOpen: P,
                            transferFailed: $,
                            setIsResultModalOpen: U,
                            transferResult: I,
                            resetTransferResult: () => {
                                O(null), Z("")
                            }
                        })]
                    })
                }
        },
        20131: function() {},
        16026: function() {},
        68519: function(e, s, t) {
            "use strict";
            t.d(s, {
                P: function() {
                    return o
                }
            });
            var n = t(16554),
                r = t(16914),
                a = t(87052),
                l = t(33951),
                i = t(85893);

            function c(e) {
                return (0, l.XQ)(e, e => "auto" === e ? "auto" : `span ${e}/span ${e}`)
            }
            var o = (0, n.G)(function(e, s) {
                let {
                    area: t,
                    colSpan: n,
                    colStart: l,
                    colEnd: o,
                    rowEnd: d,
                    rowSpan: m,
                    rowStart: u,
                    ...h
                } = e, x = (0, a.o)({
                    gridArea: t,
                    gridColumn: c(n),
                    gridRow: c(m),
                    gridColumnStart: l,
                    gridColumnEnd: o,
                    gridRowStart: u,
                    gridRowEnd: d
                });
                return (0, i.jsx)(r.m.div, {
                    ref: s,
                    __css: x,
                    ...h
                })
            });
            o.displayName = "GridItem"
        },
        49429: function(e, s, t) {
            "use strict";
            t.d(s, {
                o: function() {
                    return o
                }
            });
            var n = t(16554),
                r = t(16914),
                a = t(33951),
                l = t(25432),
                i = t(67294),
                c = t(85893),
                o = (0, n.G)(function(e, s) {
                    let {
                        ratio: t = 4 / 3,
                        children: n,
                        className: o,
                        ...d
                    } = e, m = i.Children.only(n), u = (0, l.cx)("chakra-aspect-ratio", o);
                    return (0, c.jsx)(r.m.div, {
                        ref: s,
                        position: "relative",
                        className: u,
                        _before: {
                            height: 0,
                            content: '""',
                            display: "block",
                            paddingBottom: (0, a.XQ)(t, e => `${1/e*100}%`)
                        },
                        __css: {
                            "& > *:not(style)": {
                                overflow: "hidden",
                                position: "absolute",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                height: "100%"
                            },
                            "& > img, & > video": {
                                objectFit: "cover"
                            }
                        },
                        ...d,
                        children: m
                    })
                });
            o.displayName = "AspectRatio"
        },
        96854: function(e, s, t) {
            "use strict";
            t.d(s, {
                O: function() {
                    return p
                }
            });
            var n = t(67294),
                r = t(25432),
                a = t(16914),
                l = t(33179),
                i = t(70917),
                c = t(16554),
                o = t(77030),
                d = t(83058),
                m = t(85893),
                u = (0, a.m)("div", {
                    baseStyle: {
                        boxShadow: "none",
                        backgroundClip: "padding-box",
                        cursor: "default",
                        color: "transparent",
                        pointerEvents: "none",
                        userSelect: "none",
                        "&::before, &::after, *": {
                            visibility: "hidden"
                        }
                    }
                }),
                h = (0, l.gJ)("skeleton-start-color"),
                x = (0, l.gJ)("skeleton-end-color"),
                f = (0, i.F4)({
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    }
                }),
                j = (0, i.F4)({
                    from: {
                        borderColor: h.reference,
                        background: h.reference
                    },
                    to: {
                        borderColor: x.reference,
                        background: x.reference
                    }
                }),
                p = (0, c.G)((e, s) => {
                    let t = { ...e,
                            fadeDuration: "number" == typeof e.fadeDuration ? e.fadeDuration : .4,
                            speed: "number" == typeof e.speed ? e.speed : .8
                        },
                        i = (0, o.mq)("Skeleton", t),
                        c = function() {
                            let e = (0, n.useRef)(!0);
                            return (0, n.useEffect)(() => {
                                e.current = !1
                            }, []), e.current
                        }(),
                        {
                            startColor: p = "",
                            endColor: g = "",
                            isLoaded: b,
                            fadeDuration: v,
                            speed: k,
                            className: y,
                            fitContent: S,
                            ...w
                        } = (0, l.Lr)(t),
                        [N, C] = (0, d.dQ)("colors", [p, g]),
                        z = function(e) {
                            let s = (0, n.useRef)();
                            return (0, n.useEffect)(() => {
                                s.current = e
                            }, [e]), s.current
                        }(b),
                        _ = (0, r.cx)("chakra-skeleton", y),
                        E = { ...N && {
                                [h.variable]: N
                            },
                            ...C && {
                                [x.variable]: C
                            }
                        };
                    if (b) {
                        let e = c || z ? "none" : `${f} ${v}s`;
                        return (0, m.jsx)(a.m.div, {
                            ref: s,
                            className: _,
                            __css: {
                                animation: e
                            },
                            ...w
                        })
                    }
                    return (0, m.jsx)(u, {
                        ref: s,
                        className: _,
                        ...w,
                        __css: {
                            width: S ? "fit-content" : void 0,
                            ...i,
                            ...E,
                            _dark: { ...i._dark,
                                ...E
                            },
                            animation: `${k}s linear infinite alternate ${j}`
                        }
                    })
                });
            p.displayName = "Skeleton"
        }
    }
]);