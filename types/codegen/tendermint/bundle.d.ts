import * as _106 from "./abci/types";
import * as _107 from "./crypto/keys";
import * as _108 from "./crypto/proof";
import * as _109 from "./libs/bits/types";
import * as _110 from "./p2p/types";
import * as _111 from "./types/block";
import * as _112 from "./types/evidence";
import * as _113 from "./types/params";
import * as _114 from "./types/types";
import * as _115 from "./types/validator";
import * as _116 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _106.CheckTxType;
        checkTxTypeToJSON(object: _106.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _106.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _106.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _106.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _106.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _106.EvidenceType;
        evidenceTypeToJSON(object: _106.EvidenceType): string;
        CheckTxType: typeof _106.CheckTxType;
        CheckTxTypeSDKType: typeof _106.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _106.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _106.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _106.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _106.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _106.EvidenceType;
        EvidenceTypeSDKType: typeof _106.EvidenceType;
        Request: {
            encode(message: _106.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Request;
            fromJSON(object: any): _106.Request;
            toJSON(message: _106.Request): unknown;
            fromPartial(object: Partial<_106.Request>): _106.Request;
        };
        RequestEcho: {
            encode(message: _106.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestEcho;
            fromJSON(object: any): _106.RequestEcho;
            toJSON(message: _106.RequestEcho): unknown;
            fromPartial(object: Partial<_106.RequestEcho>): _106.RequestEcho;
        };
        RequestFlush: {
            encode(_: _106.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestFlush;
            fromJSON(_: any): _106.RequestFlush;
            toJSON(_: _106.RequestFlush): unknown;
            fromPartial(_: Partial<_106.RequestFlush>): _106.RequestFlush;
        };
        RequestInfo: {
            encode(message: _106.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestInfo;
            fromJSON(object: any): _106.RequestInfo;
            toJSON(message: _106.RequestInfo): unknown;
            fromPartial(object: Partial<_106.RequestInfo>): _106.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _106.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestSetOption;
            fromJSON(object: any): _106.RequestSetOption;
            toJSON(message: _106.RequestSetOption): unknown;
            fromPartial(object: Partial<_106.RequestSetOption>): _106.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _106.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestInitChain;
            fromJSON(object: any): _106.RequestInitChain;
            toJSON(message: _106.RequestInitChain): unknown;
            fromPartial(object: Partial<_106.RequestInitChain>): _106.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _106.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestQuery;
            fromJSON(object: any): _106.RequestQuery;
            toJSON(message: _106.RequestQuery): unknown;
            fromPartial(object: Partial<_106.RequestQuery>): _106.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _106.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestBeginBlock;
            fromJSON(object: any): _106.RequestBeginBlock;
            toJSON(message: _106.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_106.RequestBeginBlock>): _106.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _106.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestCheckTx;
            fromJSON(object: any): _106.RequestCheckTx;
            toJSON(message: _106.RequestCheckTx): unknown;
            fromPartial(object: Partial<_106.RequestCheckTx>): _106.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _106.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestDeliverTx;
            fromJSON(object: any): _106.RequestDeliverTx;
            toJSON(message: _106.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_106.RequestDeliverTx>): _106.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _106.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestEndBlock;
            fromJSON(object: any): _106.RequestEndBlock;
            toJSON(message: _106.RequestEndBlock): unknown;
            fromPartial(object: Partial<_106.RequestEndBlock>): _106.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _106.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestCommit;
            fromJSON(_: any): _106.RequestCommit;
            toJSON(_: _106.RequestCommit): unknown;
            fromPartial(_: Partial<_106.RequestCommit>): _106.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _106.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestListSnapshots;
            fromJSON(_: any): _106.RequestListSnapshots;
            toJSON(_: _106.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_106.RequestListSnapshots>): _106.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _106.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestOfferSnapshot;
            fromJSON(object: any): _106.RequestOfferSnapshot;
            toJSON(message: _106.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_106.RequestOfferSnapshot>): _106.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _106.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestLoadSnapshotChunk;
            fromJSON(object: any): _106.RequestLoadSnapshotChunk;
            toJSON(message: _106.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_106.RequestLoadSnapshotChunk>): _106.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _106.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestApplySnapshotChunk;
            fromJSON(object: any): _106.RequestApplySnapshotChunk;
            toJSON(message: _106.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_106.RequestApplySnapshotChunk>): _106.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _106.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Response;
            fromJSON(object: any): _106.Response;
            toJSON(message: _106.Response): unknown;
            fromPartial(object: Partial<_106.Response>): _106.Response;
        };
        ResponseException: {
            encode(message: _106.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseException;
            fromJSON(object: any): _106.ResponseException;
            toJSON(message: _106.ResponseException): unknown;
            fromPartial(object: Partial<_106.ResponseException>): _106.ResponseException;
        };
        ResponseEcho: {
            encode(message: _106.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseEcho;
            fromJSON(object: any): _106.ResponseEcho;
            toJSON(message: _106.ResponseEcho): unknown;
            fromPartial(object: Partial<_106.ResponseEcho>): _106.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _106.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseFlush;
            fromJSON(_: any): _106.ResponseFlush;
            toJSON(_: _106.ResponseFlush): unknown;
            fromPartial(_: Partial<_106.ResponseFlush>): _106.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _106.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseInfo;
            fromJSON(object: any): _106.ResponseInfo;
            toJSON(message: _106.ResponseInfo): unknown;
            fromPartial(object: Partial<_106.ResponseInfo>): _106.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _106.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseSetOption;
            fromJSON(object: any): _106.ResponseSetOption;
            toJSON(message: _106.ResponseSetOption): unknown;
            fromPartial(object: Partial<_106.ResponseSetOption>): _106.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _106.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseInitChain;
            fromJSON(object: any): _106.ResponseInitChain;
            toJSON(message: _106.ResponseInitChain): unknown;
            fromPartial(object: Partial<_106.ResponseInitChain>): _106.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _106.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseQuery;
            fromJSON(object: any): _106.ResponseQuery;
            toJSON(message: _106.ResponseQuery): unknown;
            fromPartial(object: Partial<_106.ResponseQuery>): _106.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _106.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseBeginBlock;
            fromJSON(object: any): _106.ResponseBeginBlock;
            toJSON(message: _106.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_106.ResponseBeginBlock>): _106.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _106.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseCheckTx;
            fromJSON(object: any): _106.ResponseCheckTx;
            toJSON(message: _106.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_106.ResponseCheckTx>): _106.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _106.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseDeliverTx;
            fromJSON(object: any): _106.ResponseDeliverTx;
            toJSON(message: _106.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_106.ResponseDeliverTx>): _106.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _106.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseEndBlock;
            fromJSON(object: any): _106.ResponseEndBlock;
            toJSON(message: _106.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_106.ResponseEndBlock>): _106.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _106.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseCommit;
            fromJSON(object: any): _106.ResponseCommit;
            toJSON(message: _106.ResponseCommit): unknown;
            fromPartial(object: Partial<_106.ResponseCommit>): _106.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _106.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseListSnapshots;
            fromJSON(object: any): _106.ResponseListSnapshots;
            toJSON(message: _106.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_106.ResponseListSnapshots>): _106.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _106.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseOfferSnapshot;
            fromJSON(object: any): _106.ResponseOfferSnapshot;
            toJSON(message: _106.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_106.ResponseOfferSnapshot>): _106.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _106.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _106.ResponseLoadSnapshotChunk;
            toJSON(message: _106.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_106.ResponseLoadSnapshotChunk>): _106.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _106.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseApplySnapshotChunk;
            fromJSON(object: any): _106.ResponseApplySnapshotChunk;
            toJSON(message: _106.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_106.ResponseApplySnapshotChunk>): _106.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _106.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ConsensusParams;
            fromJSON(object: any): _106.ConsensusParams;
            toJSON(message: _106.ConsensusParams): unknown;
            fromPartial(object: Partial<_106.ConsensusParams>): _106.ConsensusParams;
        };
        BlockParams: {
            encode(message: _106.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.BlockParams;
            fromJSON(object: any): _106.BlockParams;
            toJSON(message: _106.BlockParams): unknown;
            fromPartial(object: Partial<_106.BlockParams>): _106.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _106.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.LastCommitInfo;
            fromJSON(object: any): _106.LastCommitInfo;
            toJSON(message: _106.LastCommitInfo): unknown;
            fromPartial(object: Partial<_106.LastCommitInfo>): _106.LastCommitInfo;
        };
        Event: {
            encode(message: _106.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Event;
            fromJSON(object: any): _106.Event;
            toJSON(message: _106.Event): unknown;
            fromPartial(object: Partial<_106.Event>): _106.Event;
        };
        EventAttribute: {
            encode(message: _106.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventAttribute;
            fromJSON(object: any): _106.EventAttribute;
            toJSON(message: _106.EventAttribute): unknown;
            fromPartial(object: Partial<_106.EventAttribute>): _106.EventAttribute;
        };
        TxResult: {
            encode(message: _106.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.TxResult;
            fromJSON(object: any): _106.TxResult;
            toJSON(message: _106.TxResult): unknown;
            fromPartial(object: Partial<_106.TxResult>): _106.TxResult;
        };
        Validator: {
            encode(message: _106.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Validator;
            fromJSON(object: any): _106.Validator;
            toJSON(message: _106.Validator): unknown;
            fromPartial(object: Partial<_106.Validator>): _106.Validator;
        };
        ValidatorUpdate: {
            encode(message: _106.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ValidatorUpdate;
            fromJSON(object: any): _106.ValidatorUpdate;
            toJSON(message: _106.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_106.ValidatorUpdate>): _106.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _106.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.VoteInfo;
            fromJSON(object: any): _106.VoteInfo;
            toJSON(message: _106.VoteInfo): unknown;
            fromPartial(object: Partial<_106.VoteInfo>): _106.VoteInfo;
        };
        Evidence: {
            encode(message: _106.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Evidence;
            fromJSON(object: any): _106.Evidence;
            toJSON(message: _106.Evidence): unknown;
            fromPartial(object: Partial<_106.Evidence>): _106.Evidence;
        };
        Snapshot: {
            encode(message: _106.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Snapshot;
            fromJSON(object: any): _106.Snapshot;
            toJSON(message: _106.Snapshot): unknown;
            fromPartial(object: Partial<_106.Snapshot>): _106.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _108.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Proof;
            fromJSON(object: any): _108.Proof;
            toJSON(message: _108.Proof): unknown;
            fromPartial(object: Partial<_108.Proof>): _108.Proof;
        };
        ValueOp: {
            encode(message: _108.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ValueOp;
            fromJSON(object: any): _108.ValueOp;
            toJSON(message: _108.ValueOp): unknown;
            fromPartial(object: Partial<_108.ValueOp>): _108.ValueOp;
        };
        DominoOp: {
            encode(message: _108.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.DominoOp;
            fromJSON(object: any): _108.DominoOp;
            toJSON(message: _108.DominoOp): unknown;
            fromPartial(object: Partial<_108.DominoOp>): _108.DominoOp;
        };
        ProofOp: {
            encode(message: _108.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ProofOp;
            fromJSON(object: any): _108.ProofOp;
            toJSON(message: _108.ProofOp): unknown;
            fromPartial(object: Partial<_108.ProofOp>): _108.ProofOp;
        };
        ProofOps: {
            encode(message: _108.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ProofOps;
            fromJSON(object: any): _108.ProofOps;
            toJSON(message: _108.ProofOps): unknown;
            fromPartial(object: Partial<_108.ProofOps>): _108.ProofOps;
        };
        PublicKey: {
            encode(message: _107.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PublicKey;
            fromJSON(object: any): _107.PublicKey;
            toJSON(message: _107.PublicKey): unknown;
            fromPartial(object: Partial<_107.PublicKey>): _107.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _109.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.BitArray;
                fromJSON(object: any): _109.BitArray;
                toJSON(message: _109.BitArray): unknown;
                fromPartial(object: Partial<_109.BitArray>): _109.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _110.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.NetAddress;
            fromJSON(object: any): _110.NetAddress;
            toJSON(message: _110.NetAddress): unknown;
            fromPartial(object: Partial<_110.NetAddress>): _110.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _110.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ProtocolVersion;
            fromJSON(object: any): _110.ProtocolVersion;
            toJSON(message: _110.ProtocolVersion): unknown;
            fromPartial(object: Partial<_110.ProtocolVersion>): _110.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _110.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DefaultNodeInfo;
            fromJSON(object: any): _110.DefaultNodeInfo;
            toJSON(message: _110.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_110.DefaultNodeInfo>): _110.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _110.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DefaultNodeInfoOther;
            fromJSON(object: any): _110.DefaultNodeInfoOther;
            toJSON(message: _110.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_110.DefaultNodeInfoOther>): _110.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _115.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ValidatorSet;
            fromJSON(object: any): _115.ValidatorSet;
            toJSON(message: _115.ValidatorSet): unknown;
            fromPartial(object: Partial<_115.ValidatorSet>): _115.ValidatorSet;
        };
        Validator: {
            encode(message: _115.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Validator;
            fromJSON(object: any): _115.Validator;
            toJSON(message: _115.Validator): unknown;
            fromPartial(object: Partial<_115.Validator>): _115.Validator;
        };
        SimpleValidator: {
            encode(message: _115.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.SimpleValidator;
            fromJSON(object: any): _115.SimpleValidator;
            toJSON(message: _115.SimpleValidator): unknown;
            fromPartial(object: Partial<_115.SimpleValidator>): _115.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _114.BlockIDFlag;
        blockIDFlagToJSON(object: _114.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _114.SignedMsgType;
        signedMsgTypeToJSON(object: _114.SignedMsgType): string;
        BlockIDFlag: typeof _114.BlockIDFlag;
        BlockIDFlagSDKType: typeof _114.BlockIDFlag;
        SignedMsgType: typeof _114.SignedMsgType;
        SignedMsgTypeSDKType: typeof _114.SignedMsgType;
        PartSetHeader: {
            encode(message: _114.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.PartSetHeader;
            fromJSON(object: any): _114.PartSetHeader;
            toJSON(message: _114.PartSetHeader): unknown;
            fromPartial(object: Partial<_114.PartSetHeader>): _114.PartSetHeader;
        };
        Part: {
            encode(message: _114.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Part;
            fromJSON(object: any): _114.Part;
            toJSON(message: _114.Part): unknown;
            fromPartial(object: Partial<_114.Part>): _114.Part;
        };
        BlockID: {
            encode(message: _114.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.BlockID;
            fromJSON(object: any): _114.BlockID;
            toJSON(message: _114.BlockID): unknown;
            fromPartial(object: Partial<_114.BlockID>): _114.BlockID;
        };
        Header: {
            encode(message: _114.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Header;
            fromJSON(object: any): _114.Header;
            toJSON(message: _114.Header): unknown;
            fromPartial(object: Partial<_114.Header>): _114.Header;
        };
        Data: {
            encode(message: _114.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Data;
            fromJSON(object: any): _114.Data;
            toJSON(message: _114.Data): unknown;
            fromPartial(object: Partial<_114.Data>): _114.Data;
        };
        Vote: {
            encode(message: _114.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Vote;
            fromJSON(object: any): _114.Vote;
            toJSON(message: _114.Vote): unknown;
            fromPartial(object: Partial<_114.Vote>): _114.Vote;
        };
        Commit: {
            encode(message: _114.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Commit;
            fromJSON(object: any): _114.Commit;
            toJSON(message: _114.Commit): unknown;
            fromPartial(object: Partial<_114.Commit>): _114.Commit;
        };
        CommitSig: {
            encode(message: _114.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.CommitSig;
            fromJSON(object: any): _114.CommitSig;
            toJSON(message: _114.CommitSig): unknown;
            fromPartial(object: Partial<_114.CommitSig>): _114.CommitSig;
        };
        Proposal: {
            encode(message: _114.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Proposal;
            fromJSON(object: any): _114.Proposal;
            toJSON(message: _114.Proposal): unknown;
            fromPartial(object: Partial<_114.Proposal>): _114.Proposal;
        };
        SignedHeader: {
            encode(message: _114.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.SignedHeader;
            fromJSON(object: any): _114.SignedHeader;
            toJSON(message: _114.SignedHeader): unknown;
            fromPartial(object: Partial<_114.SignedHeader>): _114.SignedHeader;
        };
        LightBlock: {
            encode(message: _114.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.LightBlock;
            fromJSON(object: any): _114.LightBlock;
            toJSON(message: _114.LightBlock): unknown;
            fromPartial(object: Partial<_114.LightBlock>): _114.LightBlock;
        };
        BlockMeta: {
            encode(message: _114.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.BlockMeta;
            fromJSON(object: any): _114.BlockMeta;
            toJSON(message: _114.BlockMeta): unknown;
            fromPartial(object: Partial<_114.BlockMeta>): _114.BlockMeta;
        };
        TxProof: {
            encode(message: _114.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.TxProof;
            fromJSON(object: any): _114.TxProof;
            toJSON(message: _114.TxProof): unknown;
            fromPartial(object: Partial<_114.TxProof>): _114.TxProof;
        };
        ConsensusParams: {
            encode(message: _113.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ConsensusParams;
            fromJSON(object: any): _113.ConsensusParams;
            toJSON(message: _113.ConsensusParams): unknown;
            fromPartial(object: Partial<_113.ConsensusParams>): _113.ConsensusParams;
        };
        BlockParams: {
            encode(message: _113.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.BlockParams;
            fromJSON(object: any): _113.BlockParams;
            toJSON(message: _113.BlockParams): unknown;
            fromPartial(object: Partial<_113.BlockParams>): _113.BlockParams;
        };
        EvidenceParams: {
            encode(message: _113.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.EvidenceParams;
            fromJSON(object: any): _113.EvidenceParams;
            toJSON(message: _113.EvidenceParams): unknown;
            fromPartial(object: Partial<_113.EvidenceParams>): _113.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _113.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ValidatorParams;
            fromJSON(object: any): _113.ValidatorParams;
            toJSON(message: _113.ValidatorParams): unknown;
            fromPartial(object: Partial<_113.ValidatorParams>): _113.ValidatorParams;
        };
        VersionParams: {
            encode(message: _113.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.VersionParams;
            fromJSON(object: any): _113.VersionParams;
            toJSON(message: _113.VersionParams): unknown;
            fromPartial(object: Partial<_113.VersionParams>): _113.VersionParams;
        };
        HashedParams: {
            encode(message: _113.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.HashedParams;
            fromJSON(object: any): _113.HashedParams;
            toJSON(message: _113.HashedParams): unknown;
            fromPartial(object: Partial<_113.HashedParams>): _113.HashedParams;
        };
        Evidence: {
            encode(message: _112.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Evidence;
            fromJSON(object: any): _112.Evidence;
            toJSON(message: _112.Evidence): unknown;
            fromPartial(object: Partial<_112.Evidence>): _112.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _112.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DuplicateVoteEvidence;
            fromJSON(object: any): _112.DuplicateVoteEvidence;
            toJSON(message: _112.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_112.DuplicateVoteEvidence>): _112.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _112.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.LightClientAttackEvidence;
            fromJSON(object: any): _112.LightClientAttackEvidence;
            toJSON(message: _112.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_112.LightClientAttackEvidence>): _112.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _112.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.EvidenceList;
            fromJSON(object: any): _112.EvidenceList;
            toJSON(message: _112.EvidenceList): unknown;
            fromPartial(object: Partial<_112.EvidenceList>): _112.EvidenceList;
        };
        Block: {
            encode(message: _111.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Block;
            fromJSON(object: any): _111.Block;
            toJSON(message: _111.Block): unknown;
            fromPartial(object: Partial<_111.Block>): _111.Block;
        };
    };
    const version: {
        App: {
            encode(message: _116.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.App;
            fromJSON(object: any): _116.App;
            toJSON(message: _116.App): unknown;
            fromPartial(object: Partial<_116.App>): _116.App;
        };
        Consensus: {
            encode(message: _116.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Consensus;
            fromJSON(object: any): _116.Consensus;
            toJSON(message: _116.Consensus): unknown;
            fromPartial(object: Partial<_116.Consensus>): _116.Consensus;
        };
    };
}
