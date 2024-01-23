"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [309], {
        50783: function(e, t, o) {
            var n, r, i, s, a, d, l, p, u, c;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ResponsePrepareProposal = t.ResponseApplySnapshotChunk = t.ResponseLoadSnapshotChunk = t.ResponseOfferSnapshot = t.ResponseListSnapshots = t.ResponseCommit = t.ResponseEndBlock = t.ResponseDeliverTx = t.ResponseCheckTx = t.ResponseBeginBlock = t.ResponseQuery = t.ResponseInitChain = t.ResponseInfo = t.ResponseFlush = t.ResponseEcho = t.ResponseException = t.Response = t.RequestProcessProposal = t.RequestPrepareProposal = t.RequestApplySnapshotChunk = t.RequestLoadSnapshotChunk = t.RequestOfferSnapshot = t.RequestListSnapshots = t.RequestCommit = t.RequestEndBlock = t.RequestDeliverTx = t.RequestCheckTx = t.RequestBeginBlock = t.RequestQuery = t.RequestInitChain = t.RequestInfo = t.RequestFlush = t.RequestEcho = t.Request = t.misbehaviorTypeToJSON = t.misbehaviorTypeFromJSON = t.MisbehaviorType = t.responseProcessProposal_ProposalStatusToJSON = t.responseProcessProposal_ProposalStatusFromJSON = t.ResponseProcessProposal_ProposalStatus = t.responseApplySnapshotChunk_ResultToJSON = t.responseApplySnapshotChunk_ResultFromJSON = t.ResponseApplySnapshotChunk_Result = t.responseOfferSnapshot_ResultToJSON = t.responseOfferSnapshot_ResultFromJSON = t.ResponseOfferSnapshot_Result = t.checkTxTypeToJSON = t.checkTxTypeFromJSON = t.CheckTxType = t.protobufPackage = void 0, t.ABCIApplicationClientImpl = t.Snapshot = t.Misbehavior = t.ExtendedVoteInfo = t.VoteInfo = t.ValidatorUpdate = t.Validator = t.TxResult = t.EventAttribute = t.Event = t.ExtendedCommitInfo = t.CommitInfo = t.ResponseProcessProposal = void 0;
            let h = o(90614),
                m = o(47289),
                f = o(64255),
                v = o(16208),
                S = o(39324),
                y = o(28486),
                k = o(6476);

            function g(e) {
                switch (e) {
                    case 0:
                    case "NEW":
                        return n.NEW;
                    case 1:
                    case "RECHECK":
                        return n.RECHECK;
                    default:
                        return n.UNRECOGNIZED
                }
            }

            function B(e) {
                switch (e) {
                    case n.NEW:
                        return "NEW";
                    case n.RECHECK:
                        return "RECHECK";
                    case n.UNRECOGNIZED:
                    default:
                        return "UNRECOGNIZED"
                }
            }

            function R(e) {
                switch (e) {
                    case 0:
                    case "UNKNOWN":
                        return r.UNKNOWN;
                    case 1:
                    case "ACCEPT":
                        return r.ACCEPT;
                    case 2:
                    case "ABORT":
                        return r.ABORT;
                    case 3:
                    case "REJECT":
                        return r.REJECT;
                    case 4:
                    case "REJECT_FORMAT":
                        return r.REJECT_FORMAT;
                    case 5:
                    case "REJECT_SENDER":
                        return r.REJECT_SENDER;
                    default:
                        return r.UNRECOGNIZED
                }
            }

            function b(e) {
                switch (e) {
                    case r.UNKNOWN:
                        return "UNKNOWN";
                    case r.ACCEPT:
                        return "ACCEPT";
                    case r.ABORT:
                        return "ABORT";
                    case r.REJECT:
                        return "REJECT";
                    case r.REJECT_FORMAT:
                        return "REJECT_FORMAT";
                    case r.REJECT_SENDER:
                        return "REJECT_SENDER";
                    case r.UNRECOGNIZED:
                    default:
                        return "UNRECOGNIZED"
                }
            }

            function C(e) {
                switch (e) {
                    case 0:
                    case "UNKNOWN":
                        return i.UNKNOWN;
                    case 1:
                    case "ACCEPT":
                        return i.ACCEPT;
                    case 2:
                    case "ABORT":
                        return i.ABORT;
                    case 3:
                    case "RETRY":
                        return i.RETRY;
                    case 4:
                    case "RETRY_SNAPSHOT":
                        return i.RETRY_SNAPSHOT;
                    case 5:
                    case "REJECT_SNAPSHOT":
                        return i.REJECT_SNAPSHOT;
                    default:
                        return i.UNRECOGNIZED
                }
            }

            function P(e) {
                switch (e) {
                    case i.UNKNOWN:
                        return "UNKNOWN";
                    case i.ACCEPT:
                        return "ACCEPT";
                    case i.ABORT:
                        return "ABORT";
                    case i.RETRY:
                        return "RETRY";
                    case i.RETRY_SNAPSHOT:
                        return "RETRY_SNAPSHOT";
                    case i.REJECT_SNAPSHOT:
                        return "REJECT_SNAPSHOT";
                    case i.UNRECOGNIZED:
                    default:
                        return "UNRECOGNIZED"
                }
            }

            function N(e) {
                switch (e) {
                    case 0:
                    case "UNKNOWN":
                        return s.UNKNOWN;
                    case 1:
                    case "ACCEPT":
                        return s.ACCEPT;
                    case 2:
                    case "REJECT":
                        return s.REJECT;
                    default:
                        return s.UNRECOGNIZED
                }
            }

            function O(e) {
                switch (e) {
                    case s.UNKNOWN:
                        return "UNKNOWN";
                    case s.ACCEPT:
                        return "ACCEPT";
                    case s.REJECT:
                        return "REJECT";
                    case s.UNRECOGNIZED:
                    default:
                        return "UNRECOGNIZED"
                }
            }

            function x(e) {
                switch (e) {
                    case 0:
                    case "UNKNOWN":
                        return a.UNKNOWN;
                    case 1:
                    case "DUPLICATE_VOTE":
                        return a.DUPLICATE_VOTE;
                    case 2:
                    case "LIGHT_CLIENT_ATTACK":
                        return a.LIGHT_CLIENT_ATTACK;
                    default:
                        return a.UNRECOGNIZED
                }
            }

            function T(e) {
                switch (e) {
                    case a.UNKNOWN:
                        return "UNKNOWN";
                    case a.DUPLICATE_VOTE:
                        return "DUPLICATE_VOTE";
                    case a.LIGHT_CLIENT_ATTACK:
                        return "LIGHT_CLIENT_ATTACK";
                    case a.UNRECOGNIZED:
                    default:
                        return "UNRECOGNIZED"
                }
            }

            function E() {
                return {
                    echo: void 0,
                    flush: void 0,
                    info: void 0,
                    initChain: void 0,
                    query: void 0,
                    beginBlock: void 0,
                    checkTx: void 0,
                    deliverTx: void 0,
                    endBlock: void 0,
                    commit: void 0,
                    listSnapshots: void 0,
                    offerSnapshot: void 0,
                    loadSnapshotChunk: void 0,
                    applySnapshotChunk: void 0,
                    prepareProposal: void 0,
                    processProposal: void 0
                }
            }

            function I() {
                return {
                    message: ""
                }
            }

            function A() {
                return {
                    version: "",
                    blockVersion: BigInt(0),
                    p2pVersion: BigInt(0),
                    abciVersion: ""
                }
            }

            function J() {
                return {
                    time: h.Timestamp.fromPartial({}),
                    chainId: "",
                    consensusParams: void 0,
                    validators: [],
                    appStateBytes: new Uint8Array,
                    initialHeight: BigInt(0)
                }
            }

            function U() {
                return {
                    data: new Uint8Array,
                    path: "",
                    height: BigInt(0),
                    prove: !1
                }
            }

            function w() {
                return {
                    hash: new Uint8Array,
                    header: f.Header.fromPartial({}),
                    lastCommitInfo: t.CommitInfo.fromPartial({}),
                    byzantineValidators: []
                }
            }

            function q() {
                return {
                    tx: new Uint8Array,
                    type: 0
                }
            }

            function V() {
                return {
                    tx: new Uint8Array
                }
            }

            function H() {
                return {
                    height: BigInt(0)
                }
            }

            function L() {
                return {
                    snapshot: void 0,
                    appHash: new Uint8Array
                }
            }

            function W() {
                return {
                    height: BigInt(0),
                    format: 0,
                    chunk: 0
                }
            }

            function F() {
                return {
                    index: 0,
                    chunk: new Uint8Array,
                    sender: ""
                }
            }

            function _() {
                return {
                    maxTxBytes: BigInt(0),
                    txs: [],
                    localLastCommit: t.ExtendedCommitInfo.fromPartial({}),
                    misbehavior: [],
                    height: BigInt(0),
                    time: h.Timestamp.fromPartial({}),
                    nextValidatorsHash: new Uint8Array,
                    proposerAddress: new Uint8Array
                }
            }

            function D() {
                return {
                    txs: [],
                    proposedLastCommit: t.CommitInfo.fromPartial({}),
                    misbehavior: [],
                    hash: new Uint8Array,
                    height: BigInt(0),
                    time: h.Timestamp.fromPartial({}),
                    nextValidatorsHash: new Uint8Array,
                    proposerAddress: new Uint8Array
                }
            }

            function K() {
                return {
                    exception: void 0,
                    echo: void 0,
                    flush: void 0,
                    info: void 0,
                    initChain: void 0,
                    query: void 0,
                    beginBlock: void 0,
                    checkTx: void 0,
                    deliverTx: void 0,
                    endBlock: void 0,
                    commit: void 0,
                    listSnapshots: void 0,
                    offerSnapshot: void 0,
                    loadSnapshotChunk: void 0,
                    applySnapshotChunk: void 0,
                    prepareProposal: void 0,
                    processProposal: void 0
                }
            }

            function M() {
                return {
                    error: ""
                }
            }

            function G() {
                return {
                    message: ""
                }
            }

            function Z() {
                return {
                    data: "",
                    version: "",
                    appVersion: BigInt(0),
                    lastBlockHeight: BigInt(0),
                    lastBlockAppHash: new Uint8Array
                }
            }

            function Q() {
                return {
                    consensusParams: void 0,
                    validators: [],
                    appHash: new Uint8Array
                }
            }

            function j() {
                return {
                    code: 0,
                    log: "",
                    info: "",
                    index: BigInt(0),
                    key: new Uint8Array,
                    value: new Uint8Array,
                    proofOps: void 0,
                    height: BigInt(0),
                    codespace: ""
                }
            }

            function z() {
                return {
                    events: []
                }
            }

            function Y() {
                return {
                    code: 0,
                    data: new Uint8Array,
                    log: "",
                    info: "",
                    gasWanted: BigInt(0),
                    gasUsed: BigInt(0),
                    events: [],
                    codespace: "",
                    sender: "",
                    priority: BigInt(0),
                    mempoolError: ""
                }
            }

            function X() {
                return {
                    code: 0,
                    data: new Uint8Array,
                    log: "",
                    info: "",
                    gasWanted: BigInt(0),
                    gasUsed: BigInt(0),
                    events: [],
                    codespace: ""
                }
            }

            function $() {
                return {
                    validatorUpdates: [],
                    consensusParamUpdates: void 0,
                    events: []
                }
            }

            function ee() {
                return {
                    data: new Uint8Array,
                    retainHeight: BigInt(0)
                }
            }

            function et() {
                return {
                    snapshots: []
                }
            }

            function eo() {
                return {
                    result: 0
                }
            }

            function en() {
                return {
                    chunk: new Uint8Array
                }
            }

            function er() {
                return {
                    result: 0,
                    refetchChunks: [],
                    rejectSenders: []
                }
            }

            function ei() {
                return {
                    txs: []
                }
            }

            function es() {
                return {
                    status: 0
                }
            }

            function ea() {
                return {
                    round: 0,
                    votes: []
                }
            }

            function ed() {
                return {
                    round: 0,
                    votes: []
                }
            }

            function el() {
                return {
                    type: "",
                    attributes: []
                }
            }

            function ep() {
                return {
                    key: "",
                    value: "",
                    index: !1
                }
            }

            function eu() {
                return {
                    height: BigInt(0),
                    index: 0,
                    tx: new Uint8Array,
                    result: t.ResponseDeliverTx.fromPartial({})
                }
            }

            function ec() {
                return {
                    address: new Uint8Array,
                    power: BigInt(0)
                }
            }

            function eh() {
                return {
                    pubKey: S.PublicKey.fromPartial({}),
                    power: BigInt(0)
                }
            }

            function em() {
                return {
                    validator: t.Validator.fromPartial({}),
                    signedLastBlock: !1
                }
            }

            function ef() {
                return {
                    validator: t.Validator.fromPartial({}),
                    signedLastBlock: !1,
                    voteExtension: new Uint8Array
                }
            }

            function ev() {
                return {
                    type: 0,
                    validator: t.Validator.fromPartial({}),
                    height: BigInt(0),
                    time: h.Timestamp.fromPartial({}),
                    totalVotingPower: BigInt(0)
                }
            }

            function eS() {
                return {
                    height: BigInt(0),
                    format: 0,
                    chunks: 0,
                    hash: new Uint8Array,
                    metadata: new Uint8Array
                }
            }
            t.protobufPackage = "tendermint.abci", (d = n || (t.CheckTxType = n = {}))[d.NEW = 0] = "NEW", d[d.RECHECK = 1] = "RECHECK", d[d.UNRECOGNIZED = -1] = "UNRECOGNIZED", t.checkTxTypeFromJSON = g, t.checkTxTypeToJSON = B, (l = r || (t.ResponseOfferSnapshot_Result = r = {}))[l.UNKNOWN = 0] = "UNKNOWN", l[l.ACCEPT = 1] = "ACCEPT", l[l.ABORT = 2] = "ABORT", l[l.REJECT = 3] = "REJECT", l[l.REJECT_FORMAT = 4] = "REJECT_FORMAT", l[l.REJECT_SENDER = 5] = "REJECT_SENDER", l[l.UNRECOGNIZED = -1] = "UNRECOGNIZED", t.responseOfferSnapshot_ResultFromJSON = R, t.responseOfferSnapshot_ResultToJSON = b, (p = i || (t.ResponseApplySnapshotChunk_Result = i = {}))[p.UNKNOWN = 0] = "UNKNOWN", p[p.ACCEPT = 1] = "ACCEPT", p[p.ABORT = 2] = "ABORT", p[p.RETRY = 3] = "RETRY", p[p.RETRY_SNAPSHOT = 4] = "RETRY_SNAPSHOT", p[p.REJECT_SNAPSHOT = 5] = "REJECT_SNAPSHOT", p[p.UNRECOGNIZED = -1] = "UNRECOGNIZED", t.responseApplySnapshotChunk_ResultFromJSON = C, t.responseApplySnapshotChunk_ResultToJSON = P, (u = s || (t.ResponseProcessProposal_ProposalStatus = s = {}))[u.UNKNOWN = 0] = "UNKNOWN", u[u.ACCEPT = 1] = "ACCEPT", u[u.REJECT = 2] = "REJECT", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", t.responseProcessProposal_ProposalStatusFromJSON = N, t.responseProcessProposal_ProposalStatusToJSON = O, (c = a || (t.MisbehaviorType = a = {}))[c.UNKNOWN = 0] = "UNKNOWN", c[c.DUPLICATE_VOTE = 1] = "DUPLICATE_VOTE", c[c.LIGHT_CLIENT_ATTACK = 2] = "LIGHT_CLIENT_ATTACK", c[c.UNRECOGNIZED = -1] = "UNRECOGNIZED", t.misbehaviorTypeFromJSON = x, t.misbehaviorTypeToJSON = T, t.Request = {
                typeUrl: "/tendermint.abci.Request",
                encode: (e, o = y.BinaryWriter.create()) => (void 0 !== e.echo && t.RequestEcho.encode(e.echo, o.uint32(10).fork()).ldelim(), void 0 !== e.flush && t.RequestFlush.encode(e.flush, o.uint32(18).fork()).ldelim(), void 0 !== e.info && t.RequestInfo.encode(e.info, o.uint32(26).fork()).ldelim(), void 0 !== e.initChain && t.RequestInitChain.encode(e.initChain, o.uint32(42).fork()).ldelim(), void 0 !== e.query && t.RequestQuery.encode(e.query, o.uint32(50).fork()).ldelim(), void 0 !== e.beginBlock && t.RequestBeginBlock.encode(e.beginBlock, o.uint32(58).fork()).ldelim(), void 0 !== e.checkTx && t.RequestCheckTx.encode(e.checkTx, o.uint32(66).fork()).ldelim(), void 0 !== e.deliverTx && t.RequestDeliverTx.encode(e.deliverTx, o.uint32(74).fork()).ldelim(), void 0 !== e.endBlock && t.RequestEndBlock.encode(e.endBlock, o.uint32(82).fork()).ldelim(), void 0 !== e.commit && t.RequestCommit.encode(e.commit, o.uint32(90).fork()).ldelim(), void 0 !== e.listSnapshots && t.RequestListSnapshots.encode(e.listSnapshots, o.uint32(98).fork()).ldelim(), void 0 !== e.offerSnapshot && t.RequestOfferSnapshot.encode(e.offerSnapshot, o.uint32(106).fork()).ldelim(), void 0 !== e.loadSnapshotChunk && t.RequestLoadSnapshotChunk.encode(e.loadSnapshotChunk, o.uint32(114).fork()).ldelim(), void 0 !== e.applySnapshotChunk && t.RequestApplySnapshotChunk.encode(e.applySnapshotChunk, o.uint32(122).fork()).ldelim(), void 0 !== e.prepareProposal && t.RequestPrepareProposal.encode(e.prepareProposal, o.uint32(130).fork()).ldelim(), void 0 !== e.processProposal && t.RequestProcessProposal.encode(e.processProposal, o.uint32(138).fork()).ldelim(), o),
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = E();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.echo = t.RequestEcho.decode(n, n.uint32());
                                break;
                            case 2:
                                i.flush = t.RequestFlush.decode(n, n.uint32());
                                break;
                            case 3:
                                i.info = t.RequestInfo.decode(n, n.uint32());
                                break;
                            case 5:
                                i.initChain = t.RequestInitChain.decode(n, n.uint32());
                                break;
                            case 6:
                                i.query = t.RequestQuery.decode(n, n.uint32());
                                break;
                            case 7:
                                i.beginBlock = t.RequestBeginBlock.decode(n, n.uint32());
                                break;
                            case 8:
                                i.checkTx = t.RequestCheckTx.decode(n, n.uint32());
                                break;
                            case 9:
                                i.deliverTx = t.RequestDeliverTx.decode(n, n.uint32());
                                break;
                            case 10:
                                i.endBlock = t.RequestEndBlock.decode(n, n.uint32());
                                break;
                            case 11:
                                i.commit = t.RequestCommit.decode(n, n.uint32());
                                break;
                            case 12:
                                i.listSnapshots = t.RequestListSnapshots.decode(n, n.uint32());
                                break;
                            case 13:
                                i.offerSnapshot = t.RequestOfferSnapshot.decode(n, n.uint32());
                                break;
                            case 14:
                                i.loadSnapshotChunk = t.RequestLoadSnapshotChunk.decode(n, n.uint32());
                                break;
                            case 15:
                                i.applySnapshotChunk = t.RequestApplySnapshotChunk.decode(n, n.uint32());
                                break;
                            case 16:
                                i.prepareProposal = t.RequestPrepareProposal.decode(n, n.uint32());
                                break;
                            case 17:
                                i.processProposal = t.RequestProcessProposal.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = E();
                    return (0, k.isSet)(e.echo) && (o.echo = t.RequestEcho.fromJSON(e.echo)), (0, k.isSet)(e.flush) && (o.flush = t.RequestFlush.fromJSON(e.flush)), (0, k.isSet)(e.info) && (o.info = t.RequestInfo.fromJSON(e.info)), (0, k.isSet)(e.initChain) && (o.initChain = t.RequestInitChain.fromJSON(e.initChain)), (0, k.isSet)(e.query) && (o.query = t.RequestQuery.fromJSON(e.query)), (0, k.isSet)(e.beginBlock) && (o.beginBlock = t.RequestBeginBlock.fromJSON(e.beginBlock)), (0, k.isSet)(e.checkTx) && (o.checkTx = t.RequestCheckTx.fromJSON(e.checkTx)), (0, k.isSet)(e.deliverTx) && (o.deliverTx = t.RequestDeliverTx.fromJSON(e.deliverTx)), (0, k.isSet)(e.endBlock) && (o.endBlock = t.RequestEndBlock.fromJSON(e.endBlock)), (0, k.isSet)(e.commit) && (o.commit = t.RequestCommit.fromJSON(e.commit)), (0, k.isSet)(e.listSnapshots) && (o.listSnapshots = t.RequestListSnapshots.fromJSON(e.listSnapshots)), (0, k.isSet)(e.offerSnapshot) && (o.offerSnapshot = t.RequestOfferSnapshot.fromJSON(e.offerSnapshot)), (0, k.isSet)(e.loadSnapshotChunk) && (o.loadSnapshotChunk = t.RequestLoadSnapshotChunk.fromJSON(e.loadSnapshotChunk)), (0, k.isSet)(e.applySnapshotChunk) && (o.applySnapshotChunk = t.RequestApplySnapshotChunk.fromJSON(e.applySnapshotChunk)), (0, k.isSet)(e.prepareProposal) && (o.prepareProposal = t.RequestPrepareProposal.fromJSON(e.prepareProposal)), (0, k.isSet)(e.processProposal) && (o.processProposal = t.RequestProcessProposal.fromJSON(e.processProposal)), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.echo && (o.echo = e.echo ? t.RequestEcho.toJSON(e.echo) : void 0), void 0 !== e.flush && (o.flush = e.flush ? t.RequestFlush.toJSON(e.flush) : void 0), void 0 !== e.info && (o.info = e.info ? t.RequestInfo.toJSON(e.info) : void 0), void 0 !== e.initChain && (o.initChain = e.initChain ? t.RequestInitChain.toJSON(e.initChain) : void 0), void 0 !== e.query && (o.query = e.query ? t.RequestQuery.toJSON(e.query) : void 0), void 0 !== e.beginBlock && (o.beginBlock = e.beginBlock ? t.RequestBeginBlock.toJSON(e.beginBlock) : void 0), void 0 !== e.checkTx && (o.checkTx = e.checkTx ? t.RequestCheckTx.toJSON(e.checkTx) : void 0), void 0 !== e.deliverTx && (o.deliverTx = e.deliverTx ? t.RequestDeliverTx.toJSON(e.deliverTx) : void 0), void 0 !== e.endBlock && (o.endBlock = e.endBlock ? t.RequestEndBlock.toJSON(e.endBlock) : void 0), void 0 !== e.commit && (o.commit = e.commit ? t.RequestCommit.toJSON(e.commit) : void 0), void 0 !== e.listSnapshots && (o.listSnapshots = e.listSnapshots ? t.RequestListSnapshots.toJSON(e.listSnapshots) : void 0), void 0 !== e.offerSnapshot && (o.offerSnapshot = e.offerSnapshot ? t.RequestOfferSnapshot.toJSON(e.offerSnapshot) : void 0), void 0 !== e.loadSnapshotChunk && (o.loadSnapshotChunk = e.loadSnapshotChunk ? t.RequestLoadSnapshotChunk.toJSON(e.loadSnapshotChunk) : void 0), void 0 !== e.applySnapshotChunk && (o.applySnapshotChunk = e.applySnapshotChunk ? t.RequestApplySnapshotChunk.toJSON(e.applySnapshotChunk) : void 0), void 0 !== e.prepareProposal && (o.prepareProposal = e.prepareProposal ? t.RequestPrepareProposal.toJSON(e.prepareProposal) : void 0), void 0 !== e.processProposal && (o.processProposal = e.processProposal ? t.RequestProcessProposal.toJSON(e.processProposal) : void 0), o
                },
                fromPartial(e) {
                    let o = E();
                    return void 0 !== e.echo && null !== e.echo && (o.echo = t.RequestEcho.fromPartial(e.echo)), void 0 !== e.flush && null !== e.flush && (o.flush = t.RequestFlush.fromPartial(e.flush)), void 0 !== e.info && null !== e.info && (o.info = t.RequestInfo.fromPartial(e.info)), void 0 !== e.initChain && null !== e.initChain && (o.initChain = t.RequestInitChain.fromPartial(e.initChain)), void 0 !== e.query && null !== e.query && (o.query = t.RequestQuery.fromPartial(e.query)), void 0 !== e.beginBlock && null !== e.beginBlock && (o.beginBlock = t.RequestBeginBlock.fromPartial(e.beginBlock)), void 0 !== e.checkTx && null !== e.checkTx && (o.checkTx = t.RequestCheckTx.fromPartial(e.checkTx)), void 0 !== e.deliverTx && null !== e.deliverTx && (o.deliverTx = t.RequestDeliverTx.fromPartial(e.deliverTx)), void 0 !== e.endBlock && null !== e.endBlock && (o.endBlock = t.RequestEndBlock.fromPartial(e.endBlock)), void 0 !== e.commit && null !== e.commit && (o.commit = t.RequestCommit.fromPartial(e.commit)), void 0 !== e.listSnapshots && null !== e.listSnapshots && (o.listSnapshots = t.RequestListSnapshots.fromPartial(e.listSnapshots)), void 0 !== e.offerSnapshot && null !== e.offerSnapshot && (o.offerSnapshot = t.RequestOfferSnapshot.fromPartial(e.offerSnapshot)), void 0 !== e.loadSnapshotChunk && null !== e.loadSnapshotChunk && (o.loadSnapshotChunk = t.RequestLoadSnapshotChunk.fromPartial(e.loadSnapshotChunk)), void 0 !== e.applySnapshotChunk && null !== e.applySnapshotChunk && (o.applySnapshotChunk = t.RequestApplySnapshotChunk.fromPartial(e.applySnapshotChunk)), void 0 !== e.prepareProposal && null !== e.prepareProposal && (o.prepareProposal = t.RequestPrepareProposal.fromPartial(e.prepareProposal)), void 0 !== e.processProposal && null !== e.processProposal && (o.processProposal = t.RequestProcessProposal.fromPartial(e.processProposal)), o
                }
            }, t.RequestEcho = {
                typeUrl: "/tendermint.abci.RequestEcho",
                encode: (e, t = y.BinaryWriter.create()) => ("" !== e.message && t.uint32(10).string(e.message), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = I();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        e >>> 3 == 1 ? r.message = o.string() : o.skipType(7 & e)
                    }
                    return r
                },
                fromJSON(e) {
                    let t = I();
                    return (0, k.isSet)(e.message) && (t.message = String(e.message)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.message && (t.message = e.message), t
                },
                fromPartial(e) {
                    let t = I();
                    return t.message = e.message ? ? "", t
                }
            }, t.RequestFlush = {
                typeUrl: "/tendermint.abci.RequestFlush",
                encode: (e, t = y.BinaryWriter.create()) => t,
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t;
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        o.skipType(7 & e)
                    }
                    return {}
                },
                fromJSON: e => ({}),
                toJSON: e => ({}),
                fromPartial: e => ({})
            }, t.RequestInfo = {
                typeUrl: "/tendermint.abci.RequestInfo",
                encode: (e, t = y.BinaryWriter.create()) => ("" !== e.version && t.uint32(10).string(e.version), e.blockVersion !== BigInt(0) && t.uint32(16).uint64(e.blockVersion), e.p2pVersion !== BigInt(0) && t.uint32(24).uint64(e.p2pVersion), "" !== e.abciVersion && t.uint32(34).string(e.abciVersion), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = A();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.version = o.string();
                                break;
                            case 2:
                                r.blockVersion = o.uint64();
                                break;
                            case 3:
                                r.p2pVersion = o.uint64();
                                break;
                            case 4:
                                r.abciVersion = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    let t = A();
                    return (0, k.isSet)(e.version) && (t.version = String(e.version)), (0, k.isSet)(e.blockVersion) && (t.blockVersion = BigInt(e.blockVersion.toString())), (0, k.isSet)(e.p2pVersion) && (t.p2pVersion = BigInt(e.p2pVersion.toString())), (0, k.isSet)(e.abciVersion) && (t.abciVersion = String(e.abciVersion)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.version && (t.version = e.version), void 0 !== e.blockVersion && (t.blockVersion = (e.blockVersion || BigInt(0)).toString()), void 0 !== e.p2pVersion && (t.p2pVersion = (e.p2pVersion || BigInt(0)).toString()), void 0 !== e.abciVersion && (t.abciVersion = e.abciVersion), t
                },
                fromPartial(e) {
                    let t = A();
                    return t.version = e.version ? ? "", void 0 !== e.blockVersion && null !== e.blockVersion && (t.blockVersion = BigInt(e.blockVersion.toString())), void 0 !== e.p2pVersion && null !== e.p2pVersion && (t.p2pVersion = BigInt(e.p2pVersion.toString())), t.abciVersion = e.abciVersion ? ? "", t
                }
            }, t.RequestInitChain = {
                typeUrl: "/tendermint.abci.RequestInitChain",
                encode(e, o = y.BinaryWriter.create()) {
                    for (let n of (void 0 !== e.time && h.Timestamp.encode(e.time, o.uint32(10).fork()).ldelim(), "" !== e.chainId && o.uint32(18).string(e.chainId), void 0 !== e.consensusParams && m.ConsensusParams.encode(e.consensusParams, o.uint32(26).fork()).ldelim(), e.validators)) t.ValidatorUpdate.encode(n, o.uint32(34).fork()).ldelim();
                    return 0 !== e.appStateBytes.length && o.uint32(42).bytes(e.appStateBytes), e.initialHeight !== BigInt(0) && o.uint32(48).int64(e.initialHeight), o
                },
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = J();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.time = h.Timestamp.decode(n, n.uint32());
                                break;
                            case 2:
                                i.chainId = n.string();
                                break;
                            case 3:
                                i.consensusParams = m.ConsensusParams.decode(n, n.uint32());
                                break;
                            case 4:
                                i.validators.push(t.ValidatorUpdate.decode(n, n.uint32()));
                                break;
                            case 5:
                                i.appStateBytes = n.bytes();
                                break;
                            case 6:
                                i.initialHeight = n.int64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = J();
                    return (0, k.isSet)(e.time) && (o.time = (0, k.fromJsonTimestamp)(e.time)), (0, k.isSet)(e.chainId) && (o.chainId = String(e.chainId)), (0, k.isSet)(e.consensusParams) && (o.consensusParams = m.ConsensusParams.fromJSON(e.consensusParams)), Array.isArray(e ? .validators) && (o.validators = e.validators.map(e => t.ValidatorUpdate.fromJSON(e))), (0, k.isSet)(e.appStateBytes) && (o.appStateBytes = (0, k.bytesFromBase64)(e.appStateBytes)), (0, k.isSet)(e.initialHeight) && (o.initialHeight = BigInt(e.initialHeight.toString())), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.time && (o.time = (0, k.fromTimestamp)(e.time).toISOString()), void 0 !== e.chainId && (o.chainId = e.chainId), void 0 !== e.consensusParams && (o.consensusParams = e.consensusParams ? m.ConsensusParams.toJSON(e.consensusParams) : void 0), e.validators ? o.validators = e.validators.map(e => e ? t.ValidatorUpdate.toJSON(e) : void 0) : o.validators = [], void 0 !== e.appStateBytes && (o.appStateBytes = (0, k.base64FromBytes)(void 0 !== e.appStateBytes ? e.appStateBytes : new Uint8Array)), void 0 !== e.initialHeight && (o.initialHeight = (e.initialHeight || BigInt(0)).toString()), o
                },
                fromPartial(e) {
                    let o = J();
                    return void 0 !== e.time && null !== e.time && (o.time = h.Timestamp.fromPartial(e.time)), o.chainId = e.chainId ? ? "", void 0 !== e.consensusParams && null !== e.consensusParams && (o.consensusParams = m.ConsensusParams.fromPartial(e.consensusParams)), o.validators = e.validators ? .map(e => t.ValidatorUpdate.fromPartial(e)) || [], o.appStateBytes = e.appStateBytes ? ? new Uint8Array, void 0 !== e.initialHeight && null !== e.initialHeight && (o.initialHeight = BigInt(e.initialHeight.toString())), o
                }
            }, t.RequestQuery = {
                typeUrl: "/tendermint.abci.RequestQuery",
                encode: (e, t = y.BinaryWriter.create()) => (0 !== e.data.length && t.uint32(10).bytes(e.data), "" !== e.path && t.uint32(18).string(e.path), e.height !== BigInt(0) && t.uint32(24).int64(e.height), !0 === e.prove && t.uint32(32).bool(e.prove), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = U();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.data = o.bytes();
                                break;
                            case 2:
                                r.path = o.string();
                                break;
                            case 3:
                                r.height = o.int64();
                                break;
                            case 4:
                                r.prove = o.bool();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    let t = U();
                    return (0, k.isSet)(e.data) && (t.data = (0, k.bytesFromBase64)(e.data)), (0, k.isSet)(e.path) && (t.path = String(e.path)), (0, k.isSet)(e.height) && (t.height = BigInt(e.height.toString())), (0, k.isSet)(e.prove) && (t.prove = !!e.prove), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.data && (t.data = (0, k.base64FromBytes)(void 0 !== e.data ? e.data : new Uint8Array)), void 0 !== e.path && (t.path = e.path), void 0 !== e.height && (t.height = (e.height || BigInt(0)).toString()), void 0 !== e.prove && (t.prove = e.prove), t
                },
                fromPartial(e) {
                    let t = U();
                    return t.data = e.data ? ? new Uint8Array, t.path = e.path ? ? "", void 0 !== e.height && null !== e.height && (t.height = BigInt(e.height.toString())), t.prove = e.prove ? ? !1, t
                }
            }, t.RequestBeginBlock = {
                typeUrl: "/tendermint.abci.RequestBeginBlock",
                encode(e, o = y.BinaryWriter.create()) {
                    for (let n of (0 !== e.hash.length && o.uint32(10).bytes(e.hash), void 0 !== e.header && f.Header.encode(e.header, o.uint32(18).fork()).ldelim(), void 0 !== e.lastCommitInfo && t.CommitInfo.encode(e.lastCommitInfo, o.uint32(26).fork()).ldelim(), e.byzantineValidators)) t.Misbehavior.encode(n, o.uint32(34).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = w();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.hash = n.bytes();
                                break;
                            case 2:
                                i.header = f.Header.decode(n, n.uint32());
                                break;
                            case 3:
                                i.lastCommitInfo = t.CommitInfo.decode(n, n.uint32());
                                break;
                            case 4:
                                i.byzantineValidators.push(t.Misbehavior.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = w();
                    return (0, k.isSet)(e.hash) && (o.hash = (0, k.bytesFromBase64)(e.hash)), (0, k.isSet)(e.header) && (o.header = f.Header.fromJSON(e.header)), (0, k.isSet)(e.lastCommitInfo) && (o.lastCommitInfo = t.CommitInfo.fromJSON(e.lastCommitInfo)), Array.isArray(e ? .byzantineValidators) && (o.byzantineValidators = e.byzantineValidators.map(e => t.Misbehavior.fromJSON(e))), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.hash && (o.hash = (0, k.base64FromBytes)(void 0 !== e.hash ? e.hash : new Uint8Array)), void 0 !== e.header && (o.header = e.header ? f.Header.toJSON(e.header) : void 0), void 0 !== e.lastCommitInfo && (o.lastCommitInfo = e.lastCommitInfo ? t.CommitInfo.toJSON(e.lastCommitInfo) : void 0), e.byzantineValidators ? o.byzantineValidators = e.byzantineValidators.map(e => e ? t.Misbehavior.toJSON(e) : void 0) : o.byzantineValidators = [], o
                },
                fromPartial(e) {
                    let o = w();
                    return o.hash = e.hash ? ? new Uint8Array, void 0 !== e.header && null !== e.header && (o.header = f.Header.fromPartial(e.header)), void 0 !== e.lastCommitInfo && null !== e.lastCommitInfo && (o.lastCommitInfo = t.CommitInfo.fromPartial(e.lastCommitInfo)), o.byzantineValidators = e.byzantineValidators ? .map(e => t.Misbehavior.fromPartial(e)) || [], o
                }
            }, t.RequestCheckTx = {
                typeUrl: "/tendermint.abci.RequestCheckTx",
                encode: (e, t = y.BinaryWriter.create()) => (0 !== e.tx.length && t.uint32(10).bytes(e.tx), 0 !== e.type && t.uint32(16).int32(e.type), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = q();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.tx = o.bytes();
                                break;
                            case 2:
                                r.type = o.int32();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    let t = q();
                    return (0, k.isSet)(e.tx) && (t.tx = (0, k.bytesFromBase64)(e.tx)), (0, k.isSet)(e.type) && (t.type = g(e.type)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.tx && (t.tx = (0, k.base64FromBytes)(void 0 !== e.tx ? e.tx : new Uint8Array)), void 0 !== e.type && (t.type = B(e.type)), t
                },
                fromPartial(e) {
                    let t = q();
                    return t.tx = e.tx ? ? new Uint8Array, t.type = e.type ? ? 0, t
                }
            }, t.RequestDeliverTx = {
                typeUrl: "/tendermint.abci.RequestDeliverTx",
                encode: (e, t = y.BinaryWriter.create()) => (0 !== e.tx.length && t.uint32(10).bytes(e.tx), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = V();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        e >>> 3 == 1 ? r.tx = o.bytes() : o.skipType(7 & e)
                    }
                    return r
                },
                fromJSON(e) {
                    let t = V();
                    return (0, k.isSet)(e.tx) && (t.tx = (0, k.bytesFromBase64)(e.tx)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.tx && (t.tx = (0, k.base64FromBytes)(void 0 !== e.tx ? e.tx : new Uint8Array)), t
                },
                fromPartial(e) {
                    let t = V();
                    return t.tx = e.tx ? ? new Uint8Array, t
                }
            }, t.RequestEndBlock = {
                typeUrl: "/tendermint.abci.RequestEndBlock",
                encode: (e, t = y.BinaryWriter.create()) => (e.height !== BigInt(0) && t.uint32(8).int64(e.height), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = H();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        e >>> 3 == 1 ? r.height = o.int64() : o.skipType(7 & e)
                    }
                    return r
                },
                fromJSON(e) {
                    let t = H();
                    return (0, k.isSet)(e.height) && (t.height = BigInt(e.height.toString())), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.height && (t.height = (e.height || BigInt(0)).toString()), t
                },
                fromPartial(e) {
                    let t = H();
                    return void 0 !== e.height && null !== e.height && (t.height = BigInt(e.height.toString())), t
                }
            }, t.RequestCommit = {
                typeUrl: "/tendermint.abci.RequestCommit",
                encode: (e, t = y.BinaryWriter.create()) => t,
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t;
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        o.skipType(7 & e)
                    }
                    return {}
                },
                fromJSON: e => ({}),
                toJSON: e => ({}),
                fromPartial: e => ({})
            }, t.RequestListSnapshots = {
                typeUrl: "/tendermint.abci.RequestListSnapshots",
                encode: (e, t = y.BinaryWriter.create()) => t,
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t;
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        o.skipType(7 & e)
                    }
                    return {}
                },
                fromJSON: e => ({}),
                toJSON: e => ({}),
                fromPartial: e => ({})
            }, t.RequestOfferSnapshot = {
                typeUrl: "/tendermint.abci.RequestOfferSnapshot",
                encode: (e, o = y.BinaryWriter.create()) => (void 0 !== e.snapshot && t.Snapshot.encode(e.snapshot, o.uint32(10).fork()).ldelim(), 0 !== e.appHash.length && o.uint32(18).bytes(e.appHash), o),
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = L();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.snapshot = t.Snapshot.decode(n, n.uint32());
                                break;
                            case 2:
                                i.appHash = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = L();
                    return (0, k.isSet)(e.snapshot) && (o.snapshot = t.Snapshot.fromJSON(e.snapshot)), (0, k.isSet)(e.appHash) && (o.appHash = (0, k.bytesFromBase64)(e.appHash)), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.snapshot && (o.snapshot = e.snapshot ? t.Snapshot.toJSON(e.snapshot) : void 0), void 0 !== e.appHash && (o.appHash = (0, k.base64FromBytes)(void 0 !== e.appHash ? e.appHash : new Uint8Array)), o
                },
                fromPartial(e) {
                    let o = L();
                    return void 0 !== e.snapshot && null !== e.snapshot && (o.snapshot = t.Snapshot.fromPartial(e.snapshot)), o.appHash = e.appHash ? ? new Uint8Array, o
                }
            }, t.RequestLoadSnapshotChunk = {
                typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
                encode: (e, t = y.BinaryWriter.create()) => (e.height !== BigInt(0) && t.uint32(8).uint64(e.height), 0 !== e.format && t.uint32(16).uint32(e.format), 0 !== e.chunk && t.uint32(24).uint32(e.chunk), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = W();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.height = o.uint64();
                                break;
                            case 2:
                                r.format = o.uint32();
                                break;
                            case 3:
                                r.chunk = o.uint32();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    let t = W();
                    return (0, k.isSet)(e.height) && (t.height = BigInt(e.height.toString())), (0, k.isSet)(e.format) && (t.format = Number(e.format)), (0, k.isSet)(e.chunk) && (t.chunk = Number(e.chunk)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.height && (t.height = (e.height || BigInt(0)).toString()), void 0 !== e.format && (t.format = Math.round(e.format)), void 0 !== e.chunk && (t.chunk = Math.round(e.chunk)), t
                },
                fromPartial(e) {
                    let t = W();
                    return void 0 !== e.height && null !== e.height && (t.height = BigInt(e.height.toString())), t.format = e.format ? ? 0, t.chunk = e.chunk ? ? 0, t
                }
            }, t.RequestApplySnapshotChunk = {
                typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
                encode: (e, t = y.BinaryWriter.create()) => (0 !== e.index && t.uint32(8).uint32(e.index), 0 !== e.chunk.length && t.uint32(18).bytes(e.chunk), "" !== e.sender && t.uint32(26).string(e.sender), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = F();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.index = o.uint32();
                                break;
                            case 2:
                                r.chunk = o.bytes();
                                break;
                            case 3:
                                r.sender = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    let t = F();
                    return (0, k.isSet)(e.index) && (t.index = Number(e.index)), (0, k.isSet)(e.chunk) && (t.chunk = (0, k.bytesFromBase64)(e.chunk)), (0, k.isSet)(e.sender) && (t.sender = String(e.sender)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.index && (t.index = Math.round(e.index)), void 0 !== e.chunk && (t.chunk = (0, k.base64FromBytes)(void 0 !== e.chunk ? e.chunk : new Uint8Array)), void 0 !== e.sender && (t.sender = e.sender), t
                },
                fromPartial(e) {
                    let t = F();
                    return t.index = e.index ? ? 0, t.chunk = e.chunk ? ? new Uint8Array, t.sender = e.sender ? ? "", t
                }
            }, t.RequestPrepareProposal = {
                typeUrl: "/tendermint.abci.RequestPrepareProposal",
                encode(e, o = y.BinaryWriter.create()) {
                    for (let t of (e.maxTxBytes !== BigInt(0) && o.uint32(8).int64(e.maxTxBytes), e.txs)) o.uint32(18).bytes(t);
                    for (let n of (void 0 !== e.localLastCommit && t.ExtendedCommitInfo.encode(e.localLastCommit, o.uint32(26).fork()).ldelim(), e.misbehavior)) t.Misbehavior.encode(n, o.uint32(34).fork()).ldelim();
                    return e.height !== BigInt(0) && o.uint32(40).int64(e.height), void 0 !== e.time && h.Timestamp.encode(e.time, o.uint32(50).fork()).ldelim(), 0 !== e.nextValidatorsHash.length && o.uint32(58).bytes(e.nextValidatorsHash), 0 !== e.proposerAddress.length && o.uint32(66).bytes(e.proposerAddress), o
                },
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = _();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.maxTxBytes = n.int64();
                                break;
                            case 2:
                                i.txs.push(n.bytes());
                                break;
                            case 3:
                                i.localLastCommit = t.ExtendedCommitInfo.decode(n, n.uint32());
                                break;
                            case 4:
                                i.misbehavior.push(t.Misbehavior.decode(n, n.uint32()));
                                break;
                            case 5:
                                i.height = n.int64();
                                break;
                            case 6:
                                i.time = h.Timestamp.decode(n, n.uint32());
                                break;
                            case 7:
                                i.nextValidatorsHash = n.bytes();
                                break;
                            case 8:
                                i.proposerAddress = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = _();
                    return (0, k.isSet)(e.maxTxBytes) && (o.maxTxBytes = BigInt(e.maxTxBytes.toString())), Array.isArray(e ? .txs) && (o.txs = e.txs.map(e => (0, k.bytesFromBase64)(e))), (0, k.isSet)(e.localLastCommit) && (o.localLastCommit = t.ExtendedCommitInfo.fromJSON(e.localLastCommit)), Array.isArray(e ? .misbehavior) && (o.misbehavior = e.misbehavior.map(e => t.Misbehavior.fromJSON(e))), (0, k.isSet)(e.height) && (o.height = BigInt(e.height.toString())), (0, k.isSet)(e.time) && (o.time = (0, k.fromJsonTimestamp)(e.time)), (0, k.isSet)(e.nextValidatorsHash) && (o.nextValidatorsHash = (0, k.bytesFromBase64)(e.nextValidatorsHash)), (0, k.isSet)(e.proposerAddress) && (o.proposerAddress = (0, k.bytesFromBase64)(e.proposerAddress)), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.maxTxBytes && (o.maxTxBytes = (e.maxTxBytes || BigInt(0)).toString()), e.txs ? o.txs = e.txs.map(e => (0, k.base64FromBytes)(void 0 !== e ? e : new Uint8Array)) : o.txs = [], void 0 !== e.localLastCommit && (o.localLastCommit = e.localLastCommit ? t.ExtendedCommitInfo.toJSON(e.localLastCommit) : void 0), e.misbehavior ? o.misbehavior = e.misbehavior.map(e => e ? t.Misbehavior.toJSON(e) : void 0) : o.misbehavior = [], void 0 !== e.height && (o.height = (e.height || BigInt(0)).toString()), void 0 !== e.time && (o.time = (0, k.fromTimestamp)(e.time).toISOString()), void 0 !== e.nextValidatorsHash && (o.nextValidatorsHash = (0, k.base64FromBytes)(void 0 !== e.nextValidatorsHash ? e.nextValidatorsHash : new Uint8Array)), void 0 !== e.proposerAddress && (o.proposerAddress = (0, k.base64FromBytes)(void 0 !== e.proposerAddress ? e.proposerAddress : new Uint8Array)), o
                },
                fromPartial(e) {
                    let o = _();
                    return void 0 !== e.maxTxBytes && null !== e.maxTxBytes && (o.maxTxBytes = BigInt(e.maxTxBytes.toString())), o.txs = e.txs ? .map(e => e) || [], void 0 !== e.localLastCommit && null !== e.localLastCommit && (o.localLastCommit = t.ExtendedCommitInfo.fromPartial(e.localLastCommit)), o.misbehavior = e.misbehavior ? .map(e => t.Misbehavior.fromPartial(e)) || [], void 0 !== e.height && null !== e.height && (o.height = BigInt(e.height.toString())), void 0 !== e.time && null !== e.time && (o.time = h.Timestamp.fromPartial(e.time)), o.nextValidatorsHash = e.nextValidatorsHash ? ? new Uint8Array, o.proposerAddress = e.proposerAddress ? ? new Uint8Array, o
                }
            }, t.RequestProcessProposal = {
                typeUrl: "/tendermint.abci.RequestProcessProposal",
                encode(e, o = y.BinaryWriter.create()) {
                    for (let t of e.txs) o.uint32(10).bytes(t);
                    for (let n of (void 0 !== e.proposedLastCommit && t.CommitInfo.encode(e.proposedLastCommit, o.uint32(18).fork()).ldelim(), e.misbehavior)) t.Misbehavior.encode(n, o.uint32(26).fork()).ldelim();
                    return 0 !== e.hash.length && o.uint32(34).bytes(e.hash), e.height !== BigInt(0) && o.uint32(40).int64(e.height), void 0 !== e.time && h.Timestamp.encode(e.time, o.uint32(50).fork()).ldelim(), 0 !== e.nextValidatorsHash.length && o.uint32(58).bytes(e.nextValidatorsHash), 0 !== e.proposerAddress.length && o.uint32(66).bytes(e.proposerAddress), o
                },
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = D();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.txs.push(n.bytes());
                                break;
                            case 2:
                                i.proposedLastCommit = t.CommitInfo.decode(n, n.uint32());
                                break;
                            case 3:
                                i.misbehavior.push(t.Misbehavior.decode(n, n.uint32()));
                                break;
                            case 4:
                                i.hash = n.bytes();
                                break;
                            case 5:
                                i.height = n.int64();
                                break;
                            case 6:
                                i.time = h.Timestamp.decode(n, n.uint32());
                                break;
                            case 7:
                                i.nextValidatorsHash = n.bytes();
                                break;
                            case 8:
                                i.proposerAddress = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = D();
                    return Array.isArray(e ? .txs) && (o.txs = e.txs.map(e => (0, k.bytesFromBase64)(e))), (0, k.isSet)(e.proposedLastCommit) && (o.proposedLastCommit = t.CommitInfo.fromJSON(e.proposedLastCommit)), Array.isArray(e ? .misbehavior) && (o.misbehavior = e.misbehavior.map(e => t.Misbehavior.fromJSON(e))), (0, k.isSet)(e.hash) && (o.hash = (0, k.bytesFromBase64)(e.hash)), (0, k.isSet)(e.height) && (o.height = BigInt(e.height.toString())), (0, k.isSet)(e.time) && (o.time = (0, k.fromJsonTimestamp)(e.time)), (0, k.isSet)(e.nextValidatorsHash) && (o.nextValidatorsHash = (0, k.bytesFromBase64)(e.nextValidatorsHash)), (0, k.isSet)(e.proposerAddress) && (o.proposerAddress = (0, k.bytesFromBase64)(e.proposerAddress)), o
                },
                toJSON(e) {
                    let o = {};
                    return e.txs ? o.txs = e.txs.map(e => (0, k.base64FromBytes)(void 0 !== e ? e : new Uint8Array)) : o.txs = [], void 0 !== e.proposedLastCommit && (o.proposedLastCommit = e.proposedLastCommit ? t.CommitInfo.toJSON(e.proposedLastCommit) : void 0), e.misbehavior ? o.misbehavior = e.misbehavior.map(e => e ? t.Misbehavior.toJSON(e) : void 0) : o.misbehavior = [], void 0 !== e.hash && (o.hash = (0, k.base64FromBytes)(void 0 !== e.hash ? e.hash : new Uint8Array)), void 0 !== e.height && (o.height = (e.height || BigInt(0)).toString()), void 0 !== e.time && (o.time = (0, k.fromTimestamp)(e.time).toISOString()), void 0 !== e.nextValidatorsHash && (o.nextValidatorsHash = (0, k.base64FromBytes)(void 0 !== e.nextValidatorsHash ? e.nextValidatorsHash : new Uint8Array)), void 0 !== e.proposerAddress && (o.proposerAddress = (0, k.base64FromBytes)(void 0 !== e.proposerAddress ? e.proposerAddress : new Uint8Array)), o
                },
                fromPartial(e) {
                    let o = D();
                    return o.txs = e.txs ? .map(e => e) || [], void 0 !== e.proposedLastCommit && null !== e.proposedLastCommit && (o.proposedLastCommit = t.CommitInfo.fromPartial(e.proposedLastCommit)), o.misbehavior = e.misbehavior ? .map(e => t.Misbehavior.fromPartial(e)) || [], o.hash = e.hash ? ? new Uint8Array, void 0 !== e.height && null !== e.height && (o.height = BigInt(e.height.toString())), void 0 !== e.time && null !== e.time && (o.time = h.Timestamp.fromPartial(e.time)), o.nextValidatorsHash = e.nextValidatorsHash ? ? new Uint8Array, o.proposerAddress = e.proposerAddress ? ? new Uint8Array, o
                }
            }, t.Response = {
                typeUrl: "/tendermint.abci.Response",
                encode: (e, o = y.BinaryWriter.create()) => (void 0 !== e.exception && t.ResponseException.encode(e.exception, o.uint32(10).fork()).ldelim(), void 0 !== e.echo && t.ResponseEcho.encode(e.echo, o.uint32(18).fork()).ldelim(), void 0 !== e.flush && t.ResponseFlush.encode(e.flush, o.uint32(26).fork()).ldelim(), void 0 !== e.info && t.ResponseInfo.encode(e.info, o.uint32(34).fork()).ldelim(), void 0 !== e.initChain && t.ResponseInitChain.encode(e.initChain, o.uint32(50).fork()).ldelim(), void 0 !== e.query && t.ResponseQuery.encode(e.query, o.uint32(58).fork()).ldelim(), void 0 !== e.beginBlock && t.ResponseBeginBlock.encode(e.beginBlock, o.uint32(66).fork()).ldelim(), void 0 !== e.checkTx && t.ResponseCheckTx.encode(e.checkTx, o.uint32(74).fork()).ldelim(), void 0 !== e.deliverTx && t.ResponseDeliverTx.encode(e.deliverTx, o.uint32(82).fork()).ldelim(), void 0 !== e.endBlock && t.ResponseEndBlock.encode(e.endBlock, o.uint32(90).fork()).ldelim(), void 0 !== e.commit && t.ResponseCommit.encode(e.commit, o.uint32(98).fork()).ldelim(), void 0 !== e.listSnapshots && t.ResponseListSnapshots.encode(e.listSnapshots, o.uint32(106).fork()).ldelim(), void 0 !== e.offerSnapshot && t.ResponseOfferSnapshot.encode(e.offerSnapshot, o.uint32(114).fork()).ldelim(), void 0 !== e.loadSnapshotChunk && t.ResponseLoadSnapshotChunk.encode(e.loadSnapshotChunk, o.uint32(122).fork()).ldelim(), void 0 !== e.applySnapshotChunk && t.ResponseApplySnapshotChunk.encode(e.applySnapshotChunk, o.uint32(130).fork()).ldelim(), void 0 !== e.prepareProposal && t.ResponsePrepareProposal.encode(e.prepareProposal, o.uint32(138).fork()).ldelim(), void 0 !== e.processProposal && t.ResponseProcessProposal.encode(e.processProposal, o.uint32(146).fork()).ldelim(), o),
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = K();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.exception = t.ResponseException.decode(n, n.uint32());
                                break;
                            case 2:
                                i.echo = t.ResponseEcho.decode(n, n.uint32());
                                break;
                            case 3:
                                i.flush = t.ResponseFlush.decode(n, n.uint32());
                                break;
                            case 4:
                                i.info = t.ResponseInfo.decode(n, n.uint32());
                                break;
                            case 6:
                                i.initChain = t.ResponseInitChain.decode(n, n.uint32());
                                break;
                            case 7:
                                i.query = t.ResponseQuery.decode(n, n.uint32());
                                break;
                            case 8:
                                i.beginBlock = t.ResponseBeginBlock.decode(n, n.uint32());
                                break;
                            case 9:
                                i.checkTx = t.ResponseCheckTx.decode(n, n.uint32());
                                break;
                            case 10:
                                i.deliverTx = t.ResponseDeliverTx.decode(n, n.uint32());
                                break;
                            case 11:
                                i.endBlock = t.ResponseEndBlock.decode(n, n.uint32());
                                break;
                            case 12:
                                i.commit = t.ResponseCommit.decode(n, n.uint32());
                                break;
                            case 13:
                                i.listSnapshots = t.ResponseListSnapshots.decode(n, n.uint32());
                                break;
                            case 14:
                                i.offerSnapshot = t.ResponseOfferSnapshot.decode(n, n.uint32());
                                break;
                            case 15:
                                i.loadSnapshotChunk = t.ResponseLoadSnapshotChunk.decode(n, n.uint32());
                                break;
                            case 16:
                                i.applySnapshotChunk = t.ResponseApplySnapshotChunk.decode(n, n.uint32());
                                break;
                            case 17:
                                i.prepareProposal = t.ResponsePrepareProposal.decode(n, n.uint32());
                                break;
                            case 18:
                                i.processProposal = t.ResponseProcessProposal.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = K();
                    return (0, k.isSet)(e.exception) && (o.exception = t.ResponseException.fromJSON(e.exception)), (0, k.isSet)(e.echo) && (o.echo = t.ResponseEcho.fromJSON(e.echo)), (0, k.isSet)(e.flush) && (o.flush = t.ResponseFlush.fromJSON(e.flush)), (0, k.isSet)(e.info) && (o.info = t.ResponseInfo.fromJSON(e.info)), (0, k.isSet)(e.initChain) && (o.initChain = t.ResponseInitChain.fromJSON(e.initChain)), (0, k.isSet)(e.query) && (o.query = t.ResponseQuery.fromJSON(e.query)), (0, k.isSet)(e.beginBlock) && (o.beginBlock = t.ResponseBeginBlock.fromJSON(e.beginBlock)), (0, k.isSet)(e.checkTx) && (o.checkTx = t.ResponseCheckTx.fromJSON(e.checkTx)), (0, k.isSet)(e.deliverTx) && (o.deliverTx = t.ResponseDeliverTx.fromJSON(e.deliverTx)), (0, k.isSet)(e.endBlock) && (o.endBlock = t.ResponseEndBlock.fromJSON(e.endBlock)), (0, k.isSet)(e.commit) && (o.commit = t.ResponseCommit.fromJSON(e.commit)), (0, k.isSet)(e.listSnapshots) && (o.listSnapshots = t.ResponseListSnapshots.fromJSON(e.listSnapshots)), (0, k.isSet)(e.offerSnapshot) && (o.offerSnapshot = t.ResponseOfferSnapshot.fromJSON(e.offerSnapshot)), (0, k.isSet)(e.loadSnapshotChunk) && (o.loadSnapshotChunk = t.ResponseLoadSnapshotChunk.fromJSON(e.loadSnapshotChunk)), (0, k.isSet)(e.applySnapshotChunk) && (o.applySnapshotChunk = t.ResponseApplySnapshotChunk.fromJSON(e.applySnapshotChunk)), (0, k.isSet)(e.prepareProposal) && (o.prepareProposal = t.ResponsePrepareProposal.fromJSON(e.prepareProposal)), (0, k.isSet)(e.processProposal) && (o.processProposal = t.ResponseProcessProposal.fromJSON(e.processProposal)), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.exception && (o.exception = e.exception ? t.ResponseException.toJSON(e.exception) : void 0), void 0 !== e.echo && (o.echo = e.echo ? t.ResponseEcho.toJSON(e.echo) : void 0), void 0 !== e.flush && (o.flush = e.flush ? t.ResponseFlush.toJSON(e.flush) : void 0), void 0 !== e.info && (o.info = e.info ? t.ResponseInfo.toJSON(e.info) : void 0), void 0 !== e.initChain && (o.initChain = e.initChain ? t.ResponseInitChain.toJSON(e.initChain) : void 0), void 0 !== e.query && (o.query = e.query ? t.ResponseQuery.toJSON(e.query) : void 0), void 0 !== e.beginBlock && (o.beginBlock = e.beginBlock ? t.ResponseBeginBlock.toJSON(e.beginBlock) : void 0), void 0 !== e.checkTx && (o.checkTx = e.checkTx ? t.ResponseCheckTx.toJSON(e.checkTx) : void 0), void 0 !== e.deliverTx && (o.deliverTx = e.deliverTx ? t.ResponseDeliverTx.toJSON(e.deliverTx) : void 0), void 0 !== e.endBlock && (o.endBlock = e.endBlock ? t.ResponseEndBlock.toJSON(e.endBlock) : void 0), void 0 !== e.commit && (o.commit = e.commit ? t.ResponseCommit.toJSON(e.commit) : void 0), void 0 !== e.listSnapshots && (o.listSnapshots = e.listSnapshots ? t.ResponseListSnapshots.toJSON(e.listSnapshots) : void 0), void 0 !== e.offerSnapshot && (o.offerSnapshot = e.offerSnapshot ? t.ResponseOfferSnapshot.toJSON(e.offerSnapshot) : void 0), void 0 !== e.loadSnapshotChunk && (o.loadSnapshotChunk = e.loadSnapshotChunk ? t.ResponseLoadSnapshotChunk.toJSON(e.loadSnapshotChunk) : void 0), void 0 !== e.applySnapshotChunk && (o.applySnapshotChunk = e.applySnapshotChunk ? t.ResponseApplySnapshotChunk.toJSON(e.applySnapshotChunk) : void 0), void 0 !== e.prepareProposal && (o.prepareProposal = e.prepareProposal ? t.ResponsePrepareProposal.toJSON(e.prepareProposal) : void 0), void 0 !== e.processProposal && (o.processProposal = e.processProposal ? t.ResponseProcessProposal.toJSON(e.processProposal) : void 0), o
                },
                fromPartial(e) {
                    let o = K();
                    return void 0 !== e.exception && null !== e.exception && (o.exception = t.ResponseException.fromPartial(e.exception)), void 0 !== e.echo && null !== e.echo && (o.echo = t.ResponseEcho.fromPartial(e.echo)), void 0 !== e.flush && null !== e.flush && (o.flush = t.ResponseFlush.fromPartial(e.flush)), void 0 !== e.info && null !== e.info && (o.info = t.ResponseInfo.fromPartial(e.info)), void 0 !== e.initChain && null !== e.initChain && (o.initChain = t.ResponseInitChain.fromPartial(e.initChain)), void 0 !== e.query && null !== e.query && (o.query = t.ResponseQuery.fromPartial(e.query)), void 0 !== e.beginBlock && null !== e.beginBlock && (o.beginBlock = t.ResponseBeginBlock.fromPartial(e.beginBlock)), void 0 !== e.checkTx && null !== e.checkTx && (o.checkTx = t.ResponseCheckTx.fromPartial(e.checkTx)), void 0 !== e.deliverTx && null !== e.deliverTx && (o.deliverTx = t.ResponseDeliverTx.fromPartial(e.deliverTx)), void 0 !== e.endBlock && null !== e.endBlock && (o.endBlock = t.ResponseEndBlock.fromPartial(e.endBlock)), void 0 !== e.commit && null !== e.commit && (o.commit = t.ResponseCommit.fromPartial(e.commit)), void 0 !== e.listSnapshots && null !== e.listSnapshots && (o.listSnapshots = t.ResponseListSnapshots.fromPartial(e.listSnapshots)), void 0 !== e.offerSnapshot && null !== e.offerSnapshot && (o.offerSnapshot = t.ResponseOfferSnapshot.fromPartial(e.offerSnapshot)), void 0 !== e.loadSnapshotChunk && null !== e.loadSnapshotChunk && (o.loadSnapshotChunk = t.ResponseLoadSnapshotChunk.fromPartial(e.loadSnapshotChunk)), void 0 !== e.applySnapshotChunk && null !== e.applySnapshotChunk && (o.applySnapshotChunk = t.ResponseApplySnapshotChunk.fromPartial(e.applySnapshotChunk)), void 0 !== e.prepareProposal && null !== e.prepareProposal && (o.prepareProposal = t.ResponsePrepareProposal.fromPartial(e.prepareProposal)), void 0 !== e.processProposal && null !== e.processProposal && (o.processProposal = t.ResponseProcessProposal.fromPartial(e.processProposal)), o
                }
            }, t.ResponseException = {
                typeUrl: "/tendermint.abci.ResponseException",
                encode: (e, t = y.BinaryWriter.create()) => ("" !== e.error && t.uint32(10).string(e.error), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = M();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        e >>> 3 == 1 ? r.error = o.string() : o.skipType(7 & e)
                    }
                    return r
                },
                fromJSON(e) {
                    let t = M();
                    return (0, k.isSet)(e.error) && (t.error = String(e.error)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.error && (t.error = e.error), t
                },
                fromPartial(e) {
                    let t = M();
                    return t.error = e.error ? ? "", t
                }
            }, t.ResponseEcho = {
                typeUrl: "/tendermint.abci.ResponseEcho",
                encode: (e, t = y.BinaryWriter.create()) => ("" !== e.message && t.uint32(10).string(e.message), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = G();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        e >>> 3 == 1 ? r.message = o.string() : o.skipType(7 & e)
                    }
                    return r
                },
                fromJSON(e) {
                    let t = G();
                    return (0, k.isSet)(e.message) && (t.message = String(e.message)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.message && (t.message = e.message), t
                },
                fromPartial(e) {
                    let t = G();
                    return t.message = e.message ? ? "", t
                }
            }, t.ResponseFlush = {
                typeUrl: "/tendermint.abci.ResponseFlush",
                encode: (e, t = y.BinaryWriter.create()) => t,
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t;
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        o.skipType(7 & e)
                    }
                    return {}
                },
                fromJSON: e => ({}),
                toJSON: e => ({}),
                fromPartial: e => ({})
            }, t.ResponseInfo = {
                typeUrl: "/tendermint.abci.ResponseInfo",
                encode: (e, t = y.BinaryWriter.create()) => ("" !== e.data && t.uint32(10).string(e.data), "" !== e.version && t.uint32(18).string(e.version), e.appVersion !== BigInt(0) && t.uint32(24).uint64(e.appVersion), e.lastBlockHeight !== BigInt(0) && t.uint32(32).int64(e.lastBlockHeight), 0 !== e.lastBlockAppHash.length && t.uint32(42).bytes(e.lastBlockAppHash), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = Z();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.data = o.string();
                                break;
                            case 2:
                                r.version = o.string();
                                break;
                            case 3:
                                r.appVersion = o.uint64();
                                break;
                            case 4:
                                r.lastBlockHeight = o.int64();
                                break;
                            case 5:
                                r.lastBlockAppHash = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    let t = Z();
                    return (0, k.isSet)(e.data) && (t.data = String(e.data)), (0, k.isSet)(e.version) && (t.version = String(e.version)), (0, k.isSet)(e.appVersion) && (t.appVersion = BigInt(e.appVersion.toString())), (0, k.isSet)(e.lastBlockHeight) && (t.lastBlockHeight = BigInt(e.lastBlockHeight.toString())), (0, k.isSet)(e.lastBlockAppHash) && (t.lastBlockAppHash = (0, k.bytesFromBase64)(e.lastBlockAppHash)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.data && (t.data = e.data), void 0 !== e.version && (t.version = e.version), void 0 !== e.appVersion && (t.appVersion = (e.appVersion || BigInt(0)).toString()), void 0 !== e.lastBlockHeight && (t.lastBlockHeight = (e.lastBlockHeight || BigInt(0)).toString()), void 0 !== e.lastBlockAppHash && (t.lastBlockAppHash = (0, k.base64FromBytes)(void 0 !== e.lastBlockAppHash ? e.lastBlockAppHash : new Uint8Array)), t
                },
                fromPartial(e) {
                    let t = Z();
                    return t.data = e.data ? ? "", t.version = e.version ? ? "", void 0 !== e.appVersion && null !== e.appVersion && (t.appVersion = BigInt(e.appVersion.toString())), void 0 !== e.lastBlockHeight && null !== e.lastBlockHeight && (t.lastBlockHeight = BigInt(e.lastBlockHeight.toString())), t.lastBlockAppHash = e.lastBlockAppHash ? ? new Uint8Array, t
                }
            }, t.ResponseInitChain = {
                typeUrl: "/tendermint.abci.ResponseInitChain",
                encode(e, o = y.BinaryWriter.create()) {
                    for (let n of (void 0 !== e.consensusParams && m.ConsensusParams.encode(e.consensusParams, o.uint32(10).fork()).ldelim(), e.validators)) t.ValidatorUpdate.encode(n, o.uint32(18).fork()).ldelim();
                    return 0 !== e.appHash.length && o.uint32(26).bytes(e.appHash), o
                },
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = Q();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.consensusParams = m.ConsensusParams.decode(n, n.uint32());
                                break;
                            case 2:
                                i.validators.push(t.ValidatorUpdate.decode(n, n.uint32()));
                                break;
                            case 3:
                                i.appHash = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = Q();
                    return (0, k.isSet)(e.consensusParams) && (o.consensusParams = m.ConsensusParams.fromJSON(e.consensusParams)), Array.isArray(e ? .validators) && (o.validators = e.validators.map(e => t.ValidatorUpdate.fromJSON(e))), (0, k.isSet)(e.appHash) && (o.appHash = (0, k.bytesFromBase64)(e.appHash)), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.consensusParams && (o.consensusParams = e.consensusParams ? m.ConsensusParams.toJSON(e.consensusParams) : void 0), e.validators ? o.validators = e.validators.map(e => e ? t.ValidatorUpdate.toJSON(e) : void 0) : o.validators = [], void 0 !== e.appHash && (o.appHash = (0, k.base64FromBytes)(void 0 !== e.appHash ? e.appHash : new Uint8Array)), o
                },
                fromPartial(e) {
                    let o = Q();
                    return void 0 !== e.consensusParams && null !== e.consensusParams && (o.consensusParams = m.ConsensusParams.fromPartial(e.consensusParams)), o.validators = e.validators ? .map(e => t.ValidatorUpdate.fromPartial(e)) || [], o.appHash = e.appHash ? ? new Uint8Array, o
                }
            }, t.ResponseQuery = {
                typeUrl: "/tendermint.abci.ResponseQuery",
                encode: (e, t = y.BinaryWriter.create()) => (0 !== e.code && t.uint32(8).uint32(e.code), "" !== e.log && t.uint32(26).string(e.log), "" !== e.info && t.uint32(34).string(e.info), e.index !== BigInt(0) && t.uint32(40).int64(e.index), 0 !== e.key.length && t.uint32(50).bytes(e.key), 0 !== e.value.length && t.uint32(58).bytes(e.value), void 0 !== e.proofOps && v.ProofOps.encode(e.proofOps, t.uint32(66).fork()).ldelim(), e.height !== BigInt(0) && t.uint32(72).int64(e.height), "" !== e.codespace && t.uint32(82).string(e.codespace), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = j();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.code = o.uint32();
                                break;
                            case 3:
                                r.log = o.string();
                                break;
                            case 4:
                                r.info = o.string();
                                break;
                            case 5:
                                r.index = o.int64();
                                break;
                            case 6:
                                r.key = o.bytes();
                                break;
                            case 7:
                                r.value = o.bytes();
                                break;
                            case 8:
                                r.proofOps = v.ProofOps.decode(o, o.uint32());
                                break;
                            case 9:
                                r.height = o.int64();
                                break;
                            case 10:
                                r.codespace = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    let t = j();
                    return (0, k.isSet)(e.code) && (t.code = Number(e.code)), (0, k.isSet)(e.log) && (t.log = String(e.log)), (0, k.isSet)(e.info) && (t.info = String(e.info)), (0, k.isSet)(e.index) && (t.index = BigInt(e.index.toString())), (0, k.isSet)(e.key) && (t.key = (0, k.bytesFromBase64)(e.key)), (0, k.isSet)(e.value) && (t.value = (0, k.bytesFromBase64)(e.value)), (0, k.isSet)(e.proofOps) && (t.proofOps = v.ProofOps.fromJSON(e.proofOps)), (0, k.isSet)(e.height) && (t.height = BigInt(e.height.toString())), (0, k.isSet)(e.codespace) && (t.codespace = String(e.codespace)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.code && (t.code = Math.round(e.code)), void 0 !== e.log && (t.log = e.log), void 0 !== e.info && (t.info = e.info), void 0 !== e.index && (t.index = (e.index || BigInt(0)).toString()), void 0 !== e.key && (t.key = (0, k.base64FromBytes)(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.value && (t.value = (0, k.base64FromBytes)(void 0 !== e.value ? e.value : new Uint8Array)), void 0 !== e.proofOps && (t.proofOps = e.proofOps ? v.ProofOps.toJSON(e.proofOps) : void 0), void 0 !== e.height && (t.height = (e.height || BigInt(0)).toString()), void 0 !== e.codespace && (t.codespace = e.codespace), t
                },
                fromPartial(e) {
                    let t = j();
                    return t.code = e.code ? ? 0, t.log = e.log ? ? "", t.info = e.info ? ? "", void 0 !== e.index && null !== e.index && (t.index = BigInt(e.index.toString())), t.key = e.key ? ? new Uint8Array, t.value = e.value ? ? new Uint8Array, void 0 !== e.proofOps && null !== e.proofOps && (t.proofOps = v.ProofOps.fromPartial(e.proofOps)), void 0 !== e.height && null !== e.height && (t.height = BigInt(e.height.toString())), t.codespace = e.codespace ? ? "", t
                }
            }, t.ResponseBeginBlock = {
                typeUrl: "/tendermint.abci.ResponseBeginBlock",
                encode(e, o = y.BinaryWriter.create()) {
                    for (let n of e.events) t.Event.encode(n, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = z();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        e >>> 3 == 1 ? i.events.push(t.Event.decode(n, n.uint32())) : n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON(e) {
                    let o = z();
                    return Array.isArray(e ? .events) && (o.events = e.events.map(e => t.Event.fromJSON(e))), o
                },
                toJSON(e) {
                    let o = {};
                    return e.events ? o.events = e.events.map(e => e ? t.Event.toJSON(e) : void 0) : o.events = [], o
                },
                fromPartial(e) {
                    let o = z();
                    return o.events = e.events ? .map(e => t.Event.fromPartial(e)) || [], o
                }
            }, t.ResponseCheckTx = {
                typeUrl: "/tendermint.abci.ResponseCheckTx",
                encode(e, o = y.BinaryWriter.create()) {
                    for (let n of (0 !== e.code && o.uint32(8).uint32(e.code), 0 !== e.data.length && o.uint32(18).bytes(e.data), "" !== e.log && o.uint32(26).string(e.log), "" !== e.info && o.uint32(34).string(e.info), e.gasWanted !== BigInt(0) && o.uint32(40).int64(e.gasWanted), e.gasUsed !== BigInt(0) && o.uint32(48).int64(e.gasUsed), e.events)) t.Event.encode(n, o.uint32(58).fork()).ldelim();
                    return "" !== e.codespace && o.uint32(66).string(e.codespace), "" !== e.sender && o.uint32(74).string(e.sender), e.priority !== BigInt(0) && o.uint32(80).int64(e.priority), "" !== e.mempoolError && o.uint32(90).string(e.mempoolError), o
                },
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = Y();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.code = n.uint32();
                                break;
                            case 2:
                                i.data = n.bytes();
                                break;
                            case 3:
                                i.log = n.string();
                                break;
                            case 4:
                                i.info = n.string();
                                break;
                            case 5:
                                i.gasWanted = n.int64();
                                break;
                            case 6:
                                i.gasUsed = n.int64();
                                break;
                            case 7:
                                i.events.push(t.Event.decode(n, n.uint32()));
                                break;
                            case 8:
                                i.codespace = n.string();
                                break;
                            case 9:
                                i.sender = n.string();
                                break;
                            case 10:
                                i.priority = n.int64();
                                break;
                            case 11:
                                i.mempoolError = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = Y();
                    return (0, k.isSet)(e.code) && (o.code = Number(e.code)), (0, k.isSet)(e.data) && (o.data = (0, k.bytesFromBase64)(e.data)), (0, k.isSet)(e.log) && (o.log = String(e.log)), (0, k.isSet)(e.info) && (o.info = String(e.info)), (0, k.isSet)(e.gas_wanted) && (o.gasWanted = BigInt(e.gas_wanted.toString())), (0, k.isSet)(e.gas_used) && (o.gasUsed = BigInt(e.gas_used.toString())), Array.isArray(e ? .events) && (o.events = e.events.map(e => t.Event.fromJSON(e))), (0, k.isSet)(e.codespace) && (o.codespace = String(e.codespace)), (0, k.isSet)(e.sender) && (o.sender = String(e.sender)), (0, k.isSet)(e.priority) && (o.priority = BigInt(e.priority.toString())), (0, k.isSet)(e.mempoolError) && (o.mempoolError = String(e.mempoolError)), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.code && (o.code = Math.round(e.code)), void 0 !== e.data && (o.data = (0, k.base64FromBytes)(void 0 !== e.data ? e.data : new Uint8Array)), void 0 !== e.log && (o.log = e.log), void 0 !== e.info && (o.info = e.info), void 0 !== e.gasWanted && (o.gas_wanted = (e.gasWanted || BigInt(0)).toString()), void 0 !== e.gasUsed && (o.gas_used = (e.gasUsed || BigInt(0)).toString()), e.events ? o.events = e.events.map(e => e ? t.Event.toJSON(e) : void 0) : o.events = [], void 0 !== e.codespace && (o.codespace = e.codespace), void 0 !== e.sender && (o.sender = e.sender), void 0 !== e.priority && (o.priority = (e.priority || BigInt(0)).toString()), void 0 !== e.mempoolError && (o.mempoolError = e.mempoolError), o
                },
                fromPartial(e) {
                    let o = Y();
                    return o.code = e.code ? ? 0, o.data = e.data ? ? new Uint8Array, o.log = e.log ? ? "", o.info = e.info ? ? "", void 0 !== e.gasWanted && null !== e.gasWanted && (o.gasWanted = BigInt(e.gasWanted.toString())), void 0 !== e.gasUsed && null !== e.gasUsed && (o.gasUsed = BigInt(e.gasUsed.toString())), o.events = e.events ? .map(e => t.Event.fromPartial(e)) || [], o.codespace = e.codespace ? ? "", o.sender = e.sender ? ? "", void 0 !== e.priority && null !== e.priority && (o.priority = BigInt(e.priority.toString())), o.mempoolError = e.mempoolError ? ? "", o
                }
            }, t.ResponseDeliverTx = {
                typeUrl: "/tendermint.abci.ResponseDeliverTx",
                encode(e, o = y.BinaryWriter.create()) {
                    for (let n of (0 !== e.code && o.uint32(8).uint32(e.code), 0 !== e.data.length && o.uint32(18).bytes(e.data), "" !== e.log && o.uint32(26).string(e.log), "" !== e.info && o.uint32(34).string(e.info), e.gasWanted !== BigInt(0) && o.uint32(40).int64(e.gasWanted), e.gasUsed !== BigInt(0) && o.uint32(48).int64(e.gasUsed), e.events)) t.Event.encode(n, o.uint32(58).fork()).ldelim();
                    return "" !== e.codespace && o.uint32(66).string(e.codespace), o
                },
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = X();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.code = n.uint32();
                                break;
                            case 2:
                                i.data = n.bytes();
                                break;
                            case 3:
                                i.log = n.string();
                                break;
                            case 4:
                                i.info = n.string();
                                break;
                            case 5:
                                i.gasWanted = n.int64();
                                break;
                            case 6:
                                i.gasUsed = n.int64();
                                break;
                            case 7:
                                i.events.push(t.Event.decode(n, n.uint32()));
                                break;
                            case 8:
                                i.codespace = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = X();
                    return (0, k.isSet)(e.code) && (o.code = Number(e.code)), (0, k.isSet)(e.data) && (o.data = (0, k.bytesFromBase64)(e.data)), (0, k.isSet)(e.log) && (o.log = String(e.log)), (0, k.isSet)(e.info) && (o.info = String(e.info)), (0, k.isSet)(e.gas_wanted) && (o.gasWanted = BigInt(e.gas_wanted.toString())), (0, k.isSet)(e.gas_used) && (o.gasUsed = BigInt(e.gas_used.toString())), Array.isArray(e ? .events) && (o.events = e.events.map(e => t.Event.fromJSON(e))), (0, k.isSet)(e.codespace) && (o.codespace = String(e.codespace)), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.code && (o.code = Math.round(e.code)), void 0 !== e.data && (o.data = (0, k.base64FromBytes)(void 0 !== e.data ? e.data : new Uint8Array)), void 0 !== e.log && (o.log = e.log), void 0 !== e.info && (o.info = e.info), void 0 !== e.gasWanted && (o.gas_wanted = (e.gasWanted || BigInt(0)).toString()), void 0 !== e.gasUsed && (o.gas_used = (e.gasUsed || BigInt(0)).toString()), e.events ? o.events = e.events.map(e => e ? t.Event.toJSON(e) : void 0) : o.events = [], void 0 !== e.codespace && (o.codespace = e.codespace), o
                },
                fromPartial(e) {
                    let o = X();
                    return o.code = e.code ? ? 0, o.data = e.data ? ? new Uint8Array, o.log = e.log ? ? "", o.info = e.info ? ? "", void 0 !== e.gasWanted && null !== e.gasWanted && (o.gasWanted = BigInt(e.gasWanted.toString())), void 0 !== e.gasUsed && null !== e.gasUsed && (o.gasUsed = BigInt(e.gasUsed.toString())), o.events = e.events ? .map(e => t.Event.fromPartial(e)) || [], o.codespace = e.codespace ? ? "", o
                }
            }, t.ResponseEndBlock = {
                typeUrl: "/tendermint.abci.ResponseEndBlock",
                encode(e, o = y.BinaryWriter.create()) {
                    for (let n of e.validatorUpdates) t.ValidatorUpdate.encode(n, o.uint32(10).fork()).ldelim();
                    for (let n of (void 0 !== e.consensusParamUpdates && m.ConsensusParams.encode(e.consensusParamUpdates, o.uint32(18).fork()).ldelim(), e.events)) t.Event.encode(n, o.uint32(26).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = $();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validatorUpdates.push(t.ValidatorUpdate.decode(n, n.uint32()));
                                break;
                            case 2:
                                i.consensusParamUpdates = m.ConsensusParams.decode(n, n.uint32());
                                break;
                            case 3:
                                i.events.push(t.Event.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = $();
                    return Array.isArray(e ? .validatorUpdates) && (o.validatorUpdates = e.validatorUpdates.map(e => t.ValidatorUpdate.fromJSON(e))), (0, k.isSet)(e.consensusParamUpdates) && (o.consensusParamUpdates = m.ConsensusParams.fromJSON(e.consensusParamUpdates)), Array.isArray(e ? .events) && (o.events = e.events.map(e => t.Event.fromJSON(e))), o
                },
                toJSON(e) {
                    let o = {};
                    return e.validatorUpdates ? o.validatorUpdates = e.validatorUpdates.map(e => e ? t.ValidatorUpdate.toJSON(e) : void 0) : o.validatorUpdates = [], void 0 !== e.consensusParamUpdates && (o.consensusParamUpdates = e.consensusParamUpdates ? m.ConsensusParams.toJSON(e.consensusParamUpdates) : void 0), e.events ? o.events = e.events.map(e => e ? t.Event.toJSON(e) : void 0) : o.events = [], o
                },
                fromPartial(e) {
                    let o = $();
                    return o.validatorUpdates = e.validatorUpdates ? .map(e => t.ValidatorUpdate.fromPartial(e)) || [], void 0 !== e.consensusParamUpdates && null !== e.consensusParamUpdates && (o.consensusParamUpdates = m.ConsensusParams.fromPartial(e.consensusParamUpdates)), o.events = e.events ? .map(e => t.Event.fromPartial(e)) || [], o
                }
            }, t.ResponseCommit = {
                typeUrl: "/tendermint.abci.ResponseCommit",
                encode: (e, t = y.BinaryWriter.create()) => (0 !== e.data.length && t.uint32(18).bytes(e.data), e.retainHeight !== BigInt(0) && t.uint32(24).int64(e.retainHeight), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = ee();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 2:
                                r.data = o.bytes();
                                break;
                            case 3:
                                r.retainHeight = o.int64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    let t = ee();
                    return (0, k.isSet)(e.data) && (t.data = (0, k.bytesFromBase64)(e.data)), (0, k.isSet)(e.retainHeight) && (t.retainHeight = BigInt(e.retainHeight.toString())), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.data && (t.data = (0, k.base64FromBytes)(void 0 !== e.data ? e.data : new Uint8Array)), void 0 !== e.retainHeight && (t.retainHeight = (e.retainHeight || BigInt(0)).toString()), t
                },
                fromPartial(e) {
                    let t = ee();
                    return t.data = e.data ? ? new Uint8Array, void 0 !== e.retainHeight && null !== e.retainHeight && (t.retainHeight = BigInt(e.retainHeight.toString())), t
                }
            }, t.ResponseListSnapshots = {
                typeUrl: "/tendermint.abci.ResponseListSnapshots",
                encode(e, o = y.BinaryWriter.create()) {
                    for (let n of e.snapshots) t.Snapshot.encode(n, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = et();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        e >>> 3 == 1 ? i.snapshots.push(t.Snapshot.decode(n, n.uint32())) : n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON(e) {
                    let o = et();
                    return Array.isArray(e ? .snapshots) && (o.snapshots = e.snapshots.map(e => t.Snapshot.fromJSON(e))), o
                },
                toJSON(e) {
                    let o = {};
                    return e.snapshots ? o.snapshots = e.snapshots.map(e => e ? t.Snapshot.toJSON(e) : void 0) : o.snapshots = [], o
                },
                fromPartial(e) {
                    let o = et();
                    return o.snapshots = e.snapshots ? .map(e => t.Snapshot.fromPartial(e)) || [], o
                }
            }, t.ResponseOfferSnapshot = {
                typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
                encode: (e, t = y.BinaryWriter.create()) => (0 !== e.result && t.uint32(8).int32(e.result), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = eo();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        e >>> 3 == 1 ? r.result = o.int32() : o.skipType(7 & e)
                    }
                    return r
                },
                fromJSON(e) {
                    let t = eo();
                    return (0, k.isSet)(e.result) && (t.result = R(e.result)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.result && (t.result = b(e.result)), t
                },
                fromPartial(e) {
                    let t = eo();
                    return t.result = e.result ? ? 0, t
                }
            }, t.ResponseLoadSnapshotChunk = {
                typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
                encode: (e, t = y.BinaryWriter.create()) => (0 !== e.chunk.length && t.uint32(10).bytes(e.chunk), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = en();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        e >>> 3 == 1 ? r.chunk = o.bytes() : o.skipType(7 & e)
                    }
                    return r
                },
                fromJSON(e) {
                    let t = en();
                    return (0, k.isSet)(e.chunk) && (t.chunk = (0, k.bytesFromBase64)(e.chunk)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.chunk && (t.chunk = (0, k.base64FromBytes)(void 0 !== e.chunk ? e.chunk : new Uint8Array)), t
                },
                fromPartial(e) {
                    let t = en();
                    return t.chunk = e.chunk ? ? new Uint8Array, t
                }
            }, t.ResponseApplySnapshotChunk = {
                typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
                encode(e, t = y.BinaryWriter.create()) {
                    for (let o of (0 !== e.result && t.uint32(8).int32(e.result), t.uint32(18).fork(), e.refetchChunks)) t.uint32(o);
                    for (let o of (t.ldelim(), e.rejectSenders)) t.uint32(26).string(o);
                    return t
                },
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = er();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.result = o.int32();
                                break;
                            case 2:
                                if ((7 & e) == 2) {
                                    let e = o.uint32() + o.pos;
                                    for (; o.pos < e;) r.refetchChunks.push(o.uint32())
                                } else r.refetchChunks.push(o.uint32());
                                break;
                            case 3:
                                r.rejectSenders.push(o.string());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    let t = er();
                    return (0, k.isSet)(e.result) && (t.result = C(e.result)), Array.isArray(e ? .refetchChunks) && (t.refetchChunks = e.refetchChunks.map(e => Number(e))), Array.isArray(e ? .rejectSenders) && (t.rejectSenders = e.rejectSenders.map(e => String(e))), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.result && (t.result = P(e.result)), e.refetchChunks ? t.refetchChunks = e.refetchChunks.map(e => Math.round(e)) : t.refetchChunks = [], e.rejectSenders ? t.rejectSenders = e.rejectSenders.map(e => e) : t.rejectSenders = [], t
                },
                fromPartial(e) {
                    let t = er();
                    return t.result = e.result ? ? 0, t.refetchChunks = e.refetchChunks ? .map(e => e) || [], t.rejectSenders = e.rejectSenders ? .map(e => e) || [], t
                }
            }, t.ResponsePrepareProposal = {
                typeUrl: "/tendermint.abci.ResponsePrepareProposal",
                encode(e, t = y.BinaryWriter.create()) {
                    for (let o of e.txs) t.uint32(10).bytes(o);
                    return t
                },
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = ei();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        e >>> 3 == 1 ? r.txs.push(o.bytes()) : o.skipType(7 & e)
                    }
                    return r
                },
                fromJSON(e) {
                    let t = ei();
                    return Array.isArray(e ? .txs) && (t.txs = e.txs.map(e => (0, k.bytesFromBase64)(e))), t
                },
                toJSON(e) {
                    let t = {};
                    return e.txs ? t.txs = e.txs.map(e => (0, k.base64FromBytes)(void 0 !== e ? e : new Uint8Array)) : t.txs = [], t
                },
                fromPartial(e) {
                    let t = ei();
                    return t.txs = e.txs ? .map(e => e) || [], t
                }
            }, t.ResponseProcessProposal = {
                typeUrl: "/tendermint.abci.ResponseProcessProposal",
                encode: (e, t = y.BinaryWriter.create()) => (0 !== e.status && t.uint32(8).int32(e.status), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = es();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        e >>> 3 == 1 ? r.status = o.int32() : o.skipType(7 & e)
                    }
                    return r
                },
                fromJSON(e) {
                    let t = es();
                    return (0, k.isSet)(e.status) && (t.status = N(e.status)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.status && (t.status = O(e.status)), t
                },
                fromPartial(e) {
                    let t = es();
                    return t.status = e.status ? ? 0, t
                }
            }, t.CommitInfo = {
                typeUrl: "/tendermint.abci.CommitInfo",
                encode(e, o = y.BinaryWriter.create()) {
                    for (let n of (0 !== e.round && o.uint32(8).int32(e.round), e.votes)) t.VoteInfo.encode(n, o.uint32(18).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = ea();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.round = n.int32();
                                break;
                            case 2:
                                i.votes.push(t.VoteInfo.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = ea();
                    return (0, k.isSet)(e.round) && (o.round = Number(e.round)), Array.isArray(e ? .votes) && (o.votes = e.votes.map(e => t.VoteInfo.fromJSON(e))), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.round && (o.round = Math.round(e.round)), e.votes ? o.votes = e.votes.map(e => e ? t.VoteInfo.toJSON(e) : void 0) : o.votes = [], o
                },
                fromPartial(e) {
                    let o = ea();
                    return o.round = e.round ? ? 0, o.votes = e.votes ? .map(e => t.VoteInfo.fromPartial(e)) || [], o
                }
            }, t.ExtendedCommitInfo = {
                typeUrl: "/tendermint.abci.ExtendedCommitInfo",
                encode(e, o = y.BinaryWriter.create()) {
                    for (let n of (0 !== e.round && o.uint32(8).int32(e.round), e.votes)) t.ExtendedVoteInfo.encode(n, o.uint32(18).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = ed();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.round = n.int32();
                                break;
                            case 2:
                                i.votes.push(t.ExtendedVoteInfo.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = ed();
                    return (0, k.isSet)(e.round) && (o.round = Number(e.round)), Array.isArray(e ? .votes) && (o.votes = e.votes.map(e => t.ExtendedVoteInfo.fromJSON(e))), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.round && (o.round = Math.round(e.round)), e.votes ? o.votes = e.votes.map(e => e ? t.ExtendedVoteInfo.toJSON(e) : void 0) : o.votes = [], o
                },
                fromPartial(e) {
                    let o = ed();
                    return o.round = e.round ? ? 0, o.votes = e.votes ? .map(e => t.ExtendedVoteInfo.fromPartial(e)) || [], o
                }
            }, t.Event = {
                typeUrl: "/tendermint.abci.Event",
                encode(e, o = y.BinaryWriter.create()) {
                    for (let n of ("" !== e.type && o.uint32(10).string(e.type), e.attributes)) t.EventAttribute.encode(n, o.uint32(18).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = el();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.type = n.string();
                                break;
                            case 2:
                                i.attributes.push(t.EventAttribute.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = el();
                    return (0, k.isSet)(e.type) && (o.type = String(e.type)), Array.isArray(e ? .attributes) && (o.attributes = e.attributes.map(e => t.EventAttribute.fromJSON(e))), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.type && (o.type = e.type), e.attributes ? o.attributes = e.attributes.map(e => e ? t.EventAttribute.toJSON(e) : void 0) : o.attributes = [], o
                },
                fromPartial(e) {
                    let o = el();
                    return o.type = e.type ? ? "", o.attributes = e.attributes ? .map(e => t.EventAttribute.fromPartial(e)) || [], o
                }
            }, t.EventAttribute = {
                typeUrl: "/tendermint.abci.EventAttribute",
                encode: (e, t = y.BinaryWriter.create()) => ("" !== e.key && t.uint32(10).string(e.key), "" !== e.value && t.uint32(18).string(e.value), !0 === e.index && t.uint32(24).bool(e.index), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = ep();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.key = o.string();
                                break;
                            case 2:
                                r.value = o.string();
                                break;
                            case 3:
                                r.index = o.bool();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    let t = ep();
                    return (0, k.isSet)(e.key) && (t.key = String(e.key)), (0, k.isSet)(e.value) && (t.value = String(e.value)), (0, k.isSet)(e.index) && (t.index = !!e.index), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.key && (t.key = e.key), void 0 !== e.value && (t.value = e.value), void 0 !== e.index && (t.index = e.index), t
                },
                fromPartial(e) {
                    let t = ep();
                    return t.key = e.key ? ? "", t.value = e.value ? ? "", t.index = e.index ? ? !1, t
                }
            }, t.TxResult = {
                typeUrl: "/tendermint.abci.TxResult",
                encode: (e, o = y.BinaryWriter.create()) => (e.height !== BigInt(0) && o.uint32(8).int64(e.height), 0 !== e.index && o.uint32(16).uint32(e.index), 0 !== e.tx.length && o.uint32(26).bytes(e.tx), void 0 !== e.result && t.ResponseDeliverTx.encode(e.result, o.uint32(34).fork()).ldelim(), o),
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = eu();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.height = n.int64();
                                break;
                            case 2:
                                i.index = n.uint32();
                                break;
                            case 3:
                                i.tx = n.bytes();
                                break;
                            case 4:
                                i.result = t.ResponseDeliverTx.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = eu();
                    return (0, k.isSet)(e.height) && (o.height = BigInt(e.height.toString())), (0, k.isSet)(e.index) && (o.index = Number(e.index)), (0, k.isSet)(e.tx) && (o.tx = (0, k.bytesFromBase64)(e.tx)), (0, k.isSet)(e.result) && (o.result = t.ResponseDeliverTx.fromJSON(e.result)), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.height && (o.height = (e.height || BigInt(0)).toString()), void 0 !== e.index && (o.index = Math.round(e.index)), void 0 !== e.tx && (o.tx = (0, k.base64FromBytes)(void 0 !== e.tx ? e.tx : new Uint8Array)), void 0 !== e.result && (o.result = e.result ? t.ResponseDeliverTx.toJSON(e.result) : void 0), o
                },
                fromPartial(e) {
                    let o = eu();
                    return void 0 !== e.height && null !== e.height && (o.height = BigInt(e.height.toString())), o.index = e.index ? ? 0, o.tx = e.tx ? ? new Uint8Array, void 0 !== e.result && null !== e.result && (o.result = t.ResponseDeliverTx.fromPartial(e.result)), o
                }
            }, t.Validator = {
                typeUrl: "/tendermint.abci.Validator",
                encode: (e, t = y.BinaryWriter.create()) => (0 !== e.address.length && t.uint32(10).bytes(e.address), e.power !== BigInt(0) && t.uint32(24).int64(e.power), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = ec();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.address = o.bytes();
                                break;
                            case 3:
                                r.power = o.int64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    let t = ec();
                    return (0, k.isSet)(e.address) && (t.address = (0, k.bytesFromBase64)(e.address)), (0, k.isSet)(e.power) && (t.power = BigInt(e.power.toString())), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.address && (t.address = (0, k.base64FromBytes)(void 0 !== e.address ? e.address : new Uint8Array)), void 0 !== e.power && (t.power = (e.power || BigInt(0)).toString()), t
                },
                fromPartial(e) {
                    let t = ec();
                    return t.address = e.address ? ? new Uint8Array, void 0 !== e.power && null !== e.power && (t.power = BigInt(e.power.toString())), t
                }
            }, t.ValidatorUpdate = {
                typeUrl: "/tendermint.abci.ValidatorUpdate",
                encode: (e, t = y.BinaryWriter.create()) => (void 0 !== e.pubKey && S.PublicKey.encode(e.pubKey, t.uint32(10).fork()).ldelim(), e.power !== BigInt(0) && t.uint32(16).int64(e.power), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = eh();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.pubKey = S.PublicKey.decode(o, o.uint32());
                                break;
                            case 2:
                                r.power = o.int64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    let t = eh();
                    return (0, k.isSet)(e.pubKey) && (t.pubKey = S.PublicKey.fromJSON(e.pubKey)), (0, k.isSet)(e.power) && (t.power = BigInt(e.power.toString())), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.pubKey && (t.pubKey = e.pubKey ? S.PublicKey.toJSON(e.pubKey) : void 0), void 0 !== e.power && (t.power = (e.power || BigInt(0)).toString()), t
                },
                fromPartial(e) {
                    let t = eh();
                    return void 0 !== e.pubKey && null !== e.pubKey && (t.pubKey = S.PublicKey.fromPartial(e.pubKey)), void 0 !== e.power && null !== e.power && (t.power = BigInt(e.power.toString())), t
                }
            }, t.VoteInfo = {
                typeUrl: "/tendermint.abci.VoteInfo",
                encode: (e, o = y.BinaryWriter.create()) => (void 0 !== e.validator && t.Validator.encode(e.validator, o.uint32(10).fork()).ldelim(), !0 === e.signedLastBlock && o.uint32(16).bool(e.signedLastBlock), o),
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = em();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validator = t.Validator.decode(n, n.uint32());
                                break;
                            case 2:
                                i.signedLastBlock = n.bool();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = em();
                    return (0, k.isSet)(e.validator) && (o.validator = t.Validator.fromJSON(e.validator)), (0, k.isSet)(e.signedLastBlock) && (o.signedLastBlock = !!e.signedLastBlock), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.validator && (o.validator = e.validator ? t.Validator.toJSON(e.validator) : void 0), void 0 !== e.signedLastBlock && (o.signedLastBlock = e.signedLastBlock), o
                },
                fromPartial(e) {
                    let o = em();
                    return void 0 !== e.validator && null !== e.validator && (o.validator = t.Validator.fromPartial(e.validator)), o.signedLastBlock = e.signedLastBlock ? ? !1, o
                }
            }, t.ExtendedVoteInfo = {
                typeUrl: "/tendermint.abci.ExtendedVoteInfo",
                encode: (e, o = y.BinaryWriter.create()) => (void 0 !== e.validator && t.Validator.encode(e.validator, o.uint32(10).fork()).ldelim(), !0 === e.signedLastBlock && o.uint32(16).bool(e.signedLastBlock), 0 !== e.voteExtension.length && o.uint32(26).bytes(e.voteExtension), o),
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = ef();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validator = t.Validator.decode(n, n.uint32());
                                break;
                            case 2:
                                i.signedLastBlock = n.bool();
                                break;
                            case 3:
                                i.voteExtension = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = ef();
                    return (0, k.isSet)(e.validator) && (o.validator = t.Validator.fromJSON(e.validator)), (0, k.isSet)(e.signedLastBlock) && (o.signedLastBlock = !!e.signedLastBlock), (0, k.isSet)(e.voteExtension) && (o.voteExtension = (0, k.bytesFromBase64)(e.voteExtension)), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.validator && (o.validator = e.validator ? t.Validator.toJSON(e.validator) : void 0), void 0 !== e.signedLastBlock && (o.signedLastBlock = e.signedLastBlock), void 0 !== e.voteExtension && (o.voteExtension = (0, k.base64FromBytes)(void 0 !== e.voteExtension ? e.voteExtension : new Uint8Array)), o
                },
                fromPartial(e) {
                    let o = ef();
                    return void 0 !== e.validator && null !== e.validator && (o.validator = t.Validator.fromPartial(e.validator)), o.signedLastBlock = e.signedLastBlock ? ? !1, o.voteExtension = e.voteExtension ? ? new Uint8Array, o
                }
            }, t.Misbehavior = {
                typeUrl: "/tendermint.abci.Misbehavior",
                encode: (e, o = y.BinaryWriter.create()) => (0 !== e.type && o.uint32(8).int32(e.type), void 0 !== e.validator && t.Validator.encode(e.validator, o.uint32(18).fork()).ldelim(), e.height !== BigInt(0) && o.uint32(24).int64(e.height), void 0 !== e.time && h.Timestamp.encode(e.time, o.uint32(34).fork()).ldelim(), e.totalVotingPower !== BigInt(0) && o.uint32(40).int64(e.totalVotingPower), o),
                decode(e, o) {
                    let n = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        r = void 0 === o ? n.len : n.pos + o,
                        i = ev();
                    for (; n.pos < r;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.type = n.int32();
                                break;
                            case 2:
                                i.validator = t.Validator.decode(n, n.uint32());
                                break;
                            case 3:
                                i.height = n.int64();
                                break;
                            case 4:
                                i.time = h.Timestamp.decode(n, n.uint32());
                                break;
                            case 5:
                                i.totalVotingPower = n.int64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    let o = ev();
                    return (0, k.isSet)(e.type) && (o.type = x(e.type)), (0, k.isSet)(e.validator) && (o.validator = t.Validator.fromJSON(e.validator)), (0, k.isSet)(e.height) && (o.height = BigInt(e.height.toString())), (0, k.isSet)(e.time) && (o.time = (0, k.fromJsonTimestamp)(e.time)), (0, k.isSet)(e.totalVotingPower) && (o.totalVotingPower = BigInt(e.totalVotingPower.toString())), o
                },
                toJSON(e) {
                    let o = {};
                    return void 0 !== e.type && (o.type = T(e.type)), void 0 !== e.validator && (o.validator = e.validator ? t.Validator.toJSON(e.validator) : void 0), void 0 !== e.height && (o.height = (e.height || BigInt(0)).toString()), void 0 !== e.time && (o.time = (0, k.fromTimestamp)(e.time).toISOString()), void 0 !== e.totalVotingPower && (o.totalVotingPower = (e.totalVotingPower || BigInt(0)).toString()), o
                },
                fromPartial(e) {
                    let o = ev();
                    return o.type = e.type ? ? 0, void 0 !== e.validator && null !== e.validator && (o.validator = t.Validator.fromPartial(e.validator)), void 0 !== e.height && null !== e.height && (o.height = BigInt(e.height.toString())), void 0 !== e.time && null !== e.time && (o.time = h.Timestamp.fromPartial(e.time)), void 0 !== e.totalVotingPower && null !== e.totalVotingPower && (o.totalVotingPower = BigInt(e.totalVotingPower.toString())), o
                }
            }, t.Snapshot = {
                typeUrl: "/tendermint.abci.Snapshot",
                encode: (e, t = y.BinaryWriter.create()) => (e.height !== BigInt(0) && t.uint32(8).uint64(e.height), 0 !== e.format && t.uint32(16).uint32(e.format), 0 !== e.chunks && t.uint32(24).uint32(e.chunks), 0 !== e.hash.length && t.uint32(34).bytes(e.hash), 0 !== e.metadata.length && t.uint32(42).bytes(e.metadata), t),
                decode(e, t) {
                    let o = e instanceof y.BinaryReader ? e : new y.BinaryReader(e),
                        n = void 0 === t ? o.len : o.pos + t,
                        r = eS();
                    for (; o.pos < n;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.height = o.uint64();
                                break;
                            case 2:
                                r.format = o.uint32();
                                break;
                            case 3:
                                r.chunks = o.uint32();
                                break;
                            case 4:
                                r.hash = o.bytes();
                                break;
                            case 5:
                                r.metadata = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    let t = eS();
                    return (0, k.isSet)(e.height) && (t.height = BigInt(e.height.toString())), (0, k.isSet)(e.format) && (t.format = Number(e.format)), (0, k.isSet)(e.chunks) && (t.chunks = Number(e.chunks)), (0, k.isSet)(e.hash) && (t.hash = (0, k.bytesFromBase64)(e.hash)), (0, k.isSet)(e.metadata) && (t.metadata = (0, k.bytesFromBase64)(e.metadata)), t
                },
                toJSON(e) {
                    let t = {};
                    return void 0 !== e.height && (t.height = (e.height || BigInt(0)).toString()), void 0 !== e.format && (t.format = Math.round(e.format)), void 0 !== e.chunks && (t.chunks = Math.round(e.chunks)), void 0 !== e.hash && (t.hash = (0, k.base64FromBytes)(void 0 !== e.hash ? e.hash : new Uint8Array)), void 0 !== e.metadata && (t.metadata = (0, k.base64FromBytes)(void 0 !== e.metadata ? e.metadata : new Uint8Array)), t
                },
                fromPartial(e) {
                    let t = eS();
                    return void 0 !== e.height && null !== e.height && (t.height = BigInt(e.height.toString())), t.format = e.format ? ? 0, t.chunks = e.chunks ? ? 0, t.hash = e.hash ? ? new Uint8Array, t.metadata = e.metadata ? ? new Uint8Array, t
                }
            };
            class ey {
                constructor(e) {
                    this.rpc = e, this.Echo = this.Echo.bind(this), this.Flush = this.Flush.bind(this), this.Info = this.Info.bind(this), this.DeliverTx = this.DeliverTx.bind(this), this.CheckTx = this.CheckTx.bind(this), this.Query = this.Query.bind(this), this.Commit = this.Commit.bind(this), this.InitChain = this.InitChain.bind(this), this.BeginBlock = this.BeginBlock.bind(this), this.EndBlock = this.EndBlock.bind(this), this.ListSnapshots = this.ListSnapshots.bind(this), this.OfferSnapshot = this.OfferSnapshot.bind(this), this.LoadSnapshotChunk = this.LoadSnapshotChunk.bind(this), this.ApplySnapshotChunk = this.ApplySnapshotChunk.bind(this), this.PrepareProposal = this.PrepareProposal.bind(this), this.ProcessProposal = this.ProcessProposal.bind(this)
                }
                Echo(e) {
                    let o = t.RequestEcho.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "Echo", o).then(e => t.ResponseEcho.decode(new y.BinaryReader(e)))
                }
                Flush(e = {}) {
                    let o = t.RequestFlush.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "Flush", o).then(e => t.ResponseFlush.decode(new y.BinaryReader(e)))
                }
                Info(e) {
                    let o = t.RequestInfo.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "Info", o).then(e => t.ResponseInfo.decode(new y.BinaryReader(e)))
                }
                DeliverTx(e) {
                    let o = t.RequestDeliverTx.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "DeliverTx", o).then(e => t.ResponseDeliverTx.decode(new y.BinaryReader(e)))
                }
                CheckTx(e) {
                    let o = t.RequestCheckTx.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "CheckTx", o).then(e => t.ResponseCheckTx.decode(new y.BinaryReader(e)))
                }
                Query(e) {
                    let o = t.RequestQuery.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "Query", o).then(e => t.ResponseQuery.decode(new y.BinaryReader(e)))
                }
                Commit(e = {}) {
                    let o = t.RequestCommit.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "Commit", o).then(e => t.ResponseCommit.decode(new y.BinaryReader(e)))
                }
                InitChain(e) {
                    let o = t.RequestInitChain.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "InitChain", o).then(e => t.ResponseInitChain.decode(new y.BinaryReader(e)))
                }
                BeginBlock(e) {
                    let o = t.RequestBeginBlock.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "BeginBlock", o).then(e => t.ResponseBeginBlock.decode(new y.BinaryReader(e)))
                }
                EndBlock(e) {
                    let o = t.RequestEndBlock.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "EndBlock", o).then(e => t.ResponseEndBlock.decode(new y.BinaryReader(e)))
                }
                ListSnapshots(e = {}) {
                    let o = t.RequestListSnapshots.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "ListSnapshots", o).then(e => t.ResponseListSnapshots.decode(new y.BinaryReader(e)))
                }
                OfferSnapshot(e) {
                    let o = t.RequestOfferSnapshot.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "OfferSnapshot", o).then(e => t.ResponseOfferSnapshot.decode(new y.BinaryReader(e)))
                }
                LoadSnapshotChunk(e) {
                    let o = t.RequestLoadSnapshotChunk.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "LoadSnapshotChunk", o).then(e => t.ResponseLoadSnapshotChunk.decode(new y.BinaryReader(e)))
                }
                ApplySnapshotChunk(e) {
                    let o = t.RequestApplySnapshotChunk.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "ApplySnapshotChunk", o).then(e => t.ResponseApplySnapshotChunk.decode(new y.BinaryReader(e)))
                }
                PrepareProposal(e) {
                    let o = t.RequestPrepareProposal.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "PrepareProposal", o).then(e => t.ResponsePrepareProposal.decode(new y.BinaryReader(e)))
                }
                ProcessProposal(e) {
                    let o = t.RequestProcessProposal.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "ProcessProposal", o).then(e => t.ResponseProcessProposal.decode(new y.BinaryReader(e)))
                }
            }
            t.ABCIApplicationClientImpl = ey
        }
    }
]);