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
        CheckTxTypeAmino: typeof _106.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _106.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _106.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _106.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _106.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _106.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _106.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _106.EvidenceType;
        EvidenceTypeSDKType: typeof _106.EvidenceType;
        EvidenceTypeAmino: typeof _106.EvidenceType;
        Request: {
            encode(message: _106.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Request;
            fromJSON(object: any): _106.Request;
            toJSON(message: _106.Request): unknown;
            fromPartial(object: Partial<_106.Request>): _106.Request;
            fromAmino(object: _106.RequestAmino): _106.Request;
            toAmino(message: _106.Request): _106.RequestAmino;
        };
        RequestEcho: {
            encode(message: _106.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestEcho;
            fromJSON(object: any): _106.RequestEcho;
            toJSON(message: _106.RequestEcho): unknown;
            fromPartial(object: Partial<_106.RequestEcho>): _106.RequestEcho;
            fromAmino(object: _106.RequestEchoAmino): _106.RequestEcho;
            toAmino(message: _106.RequestEcho): _106.RequestEchoAmino;
        };
        RequestFlush: {
            encode(_: _106.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestFlush;
            fromJSON(_: any): _106.RequestFlush;
            toJSON(_: _106.RequestFlush): unknown;
            fromPartial(_: Partial<_106.RequestFlush>): _106.RequestFlush;
            fromAmino(_: _106.RequestFlushAmino): _106.RequestFlush;
            toAmino(_: _106.RequestFlush): _106.RequestFlushAmino;
        };
        RequestInfo: {
            encode(message: _106.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestInfo;
            fromJSON(object: any): _106.RequestInfo;
            toJSON(message: _106.RequestInfo): unknown;
            fromPartial(object: Partial<_106.RequestInfo>): _106.RequestInfo;
            fromAmino(object: _106.RequestInfoAmino): _106.RequestInfo;
            toAmino(message: _106.RequestInfo): _106.RequestInfoAmino;
        };
        RequestSetOption: {
            encode(message: _106.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestSetOption;
            fromJSON(object: any): _106.RequestSetOption;
            toJSON(message: _106.RequestSetOption): unknown;
            fromPartial(object: Partial<_106.RequestSetOption>): _106.RequestSetOption;
            fromAmino(object: _106.RequestSetOptionAmino): _106.RequestSetOption;
            toAmino(message: _106.RequestSetOption): _106.RequestSetOptionAmino;
        };
        RequestInitChain: {
            encode(message: _106.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestInitChain;
            fromJSON(object: any): _106.RequestInitChain;
            toJSON(message: _106.RequestInitChain): unknown;
            fromPartial(object: Partial<_106.RequestInitChain>): _106.RequestInitChain;
            fromAmino(object: _106.RequestInitChainAmino): _106.RequestInitChain;
            toAmino(message: _106.RequestInitChain): _106.RequestInitChainAmino;
        };
        RequestQuery: {
            encode(message: _106.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestQuery;
            fromJSON(object: any): _106.RequestQuery;
            toJSON(message: _106.RequestQuery): unknown;
            fromPartial(object: Partial<_106.RequestQuery>): _106.RequestQuery;
            fromAmino(object: _106.RequestQueryAmino): _106.RequestQuery;
            toAmino(message: _106.RequestQuery): _106.RequestQueryAmino;
        };
        RequestBeginBlock: {
            encode(message: _106.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestBeginBlock;
            fromJSON(object: any): _106.RequestBeginBlock;
            toJSON(message: _106.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_106.RequestBeginBlock>): _106.RequestBeginBlock;
            fromAmino(object: _106.RequestBeginBlockAmino): _106.RequestBeginBlock;
            toAmino(message: _106.RequestBeginBlock): _106.RequestBeginBlockAmino;
        };
        RequestCheckTx: {
            encode(message: _106.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestCheckTx;
            fromJSON(object: any): _106.RequestCheckTx;
            toJSON(message: _106.RequestCheckTx): unknown;
            fromPartial(object: Partial<_106.RequestCheckTx>): _106.RequestCheckTx;
            fromAmino(object: _106.RequestCheckTxAmino): _106.RequestCheckTx;
            toAmino(message: _106.RequestCheckTx): _106.RequestCheckTxAmino;
        };
        RequestDeliverTx: {
            encode(message: _106.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestDeliverTx;
            fromJSON(object: any): _106.RequestDeliverTx;
            toJSON(message: _106.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_106.RequestDeliverTx>): _106.RequestDeliverTx;
            fromAmino(object: _106.RequestDeliverTxAmino): _106.RequestDeliverTx;
            toAmino(message: _106.RequestDeliverTx): _106.RequestDeliverTxAmino;
        };
        RequestEndBlock: {
            encode(message: _106.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestEndBlock;
            fromJSON(object: any): _106.RequestEndBlock;
            toJSON(message: _106.RequestEndBlock): unknown;
            fromPartial(object: Partial<_106.RequestEndBlock>): _106.RequestEndBlock;
            fromAmino(object: _106.RequestEndBlockAmino): _106.RequestEndBlock;
            toAmino(message: _106.RequestEndBlock): _106.RequestEndBlockAmino;
        };
        RequestCommit: {
            encode(_: _106.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestCommit;
            fromJSON(_: any): _106.RequestCommit;
            toJSON(_: _106.RequestCommit): unknown;
            fromPartial(_: Partial<_106.RequestCommit>): _106.RequestCommit;
            fromAmino(_: _106.RequestCommitAmino): _106.RequestCommit;
            toAmino(_: _106.RequestCommit): _106.RequestCommitAmino;
        };
        RequestListSnapshots: {
            encode(_: _106.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestListSnapshots;
            fromJSON(_: any): _106.RequestListSnapshots;
            toJSON(_: _106.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_106.RequestListSnapshots>): _106.RequestListSnapshots;
            fromAmino(_: _106.RequestListSnapshotsAmino): _106.RequestListSnapshots;
            toAmino(_: _106.RequestListSnapshots): _106.RequestListSnapshotsAmino;
        };
        RequestOfferSnapshot: {
            encode(message: _106.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestOfferSnapshot;
            fromJSON(object: any): _106.RequestOfferSnapshot;
            toJSON(message: _106.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_106.RequestOfferSnapshot>): _106.RequestOfferSnapshot;
            fromAmino(object: _106.RequestOfferSnapshotAmino): _106.RequestOfferSnapshot;
            toAmino(message: _106.RequestOfferSnapshot): _106.RequestOfferSnapshotAmino;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _106.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestLoadSnapshotChunk;
            fromJSON(object: any): _106.RequestLoadSnapshotChunk;
            toJSON(message: _106.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_106.RequestLoadSnapshotChunk>): _106.RequestLoadSnapshotChunk;
            fromAmino(object: _106.RequestLoadSnapshotChunkAmino): _106.RequestLoadSnapshotChunk;
            toAmino(message: _106.RequestLoadSnapshotChunk): _106.RequestLoadSnapshotChunkAmino;
        };
        RequestApplySnapshotChunk: {
            encode(message: _106.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestApplySnapshotChunk;
            fromJSON(object: any): _106.RequestApplySnapshotChunk;
            toJSON(message: _106.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_106.RequestApplySnapshotChunk>): _106.RequestApplySnapshotChunk;
            fromAmino(object: _106.RequestApplySnapshotChunkAmino): _106.RequestApplySnapshotChunk;
            toAmino(message: _106.RequestApplySnapshotChunk): _106.RequestApplySnapshotChunkAmino;
        };
        Response: {
            encode(message: _106.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Response;
            fromJSON(object: any): _106.Response;
            toJSON(message: _106.Response): unknown;
            fromPartial(object: Partial<_106.Response>): _106.Response;
            fromAmino(object: _106.ResponseAmino): _106.Response;
            toAmino(message: _106.Response): _106.ResponseAmino;
        };
        ResponseException: {
            encode(message: _106.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseException;
            fromJSON(object: any): _106.ResponseException;
            toJSON(message: _106.ResponseException): unknown;
            fromPartial(object: Partial<_106.ResponseException>): _106.ResponseException;
            fromAmino(object: _106.ResponseExceptionAmino): _106.ResponseException;
            toAmino(message: _106.ResponseException): _106.ResponseExceptionAmino;
        };
        ResponseEcho: {
            encode(message: _106.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseEcho;
            fromJSON(object: any): _106.ResponseEcho;
            toJSON(message: _106.ResponseEcho): unknown;
            fromPartial(object: Partial<_106.ResponseEcho>): _106.ResponseEcho;
            fromAmino(object: _106.ResponseEchoAmino): _106.ResponseEcho;
            toAmino(message: _106.ResponseEcho): _106.ResponseEchoAmino;
        };
        ResponseFlush: {
            encode(_: _106.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseFlush;
            fromJSON(_: any): _106.ResponseFlush;
            toJSON(_: _106.ResponseFlush): unknown;
            fromPartial(_: Partial<_106.ResponseFlush>): _106.ResponseFlush;
            fromAmino(_: _106.ResponseFlushAmino): _106.ResponseFlush;
            toAmino(_: _106.ResponseFlush): _106.ResponseFlushAmino;
        };
        ResponseInfo: {
            encode(message: _106.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseInfo;
            fromJSON(object: any): _106.ResponseInfo;
            toJSON(message: _106.ResponseInfo): unknown;
            fromPartial(object: Partial<_106.ResponseInfo>): _106.ResponseInfo;
            fromAmino(object: _106.ResponseInfoAmino): _106.ResponseInfo;
            toAmino(message: _106.ResponseInfo): _106.ResponseInfoAmino;
        };
        ResponseSetOption: {
            encode(message: _106.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseSetOption;
            fromJSON(object: any): _106.ResponseSetOption;
            toJSON(message: _106.ResponseSetOption): unknown;
            fromPartial(object: Partial<_106.ResponseSetOption>): _106.ResponseSetOption;
            fromAmino(object: _106.ResponseSetOptionAmino): _106.ResponseSetOption;
            toAmino(message: _106.ResponseSetOption): _106.ResponseSetOptionAmino;
        };
        ResponseInitChain: {
            encode(message: _106.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseInitChain;
            fromJSON(object: any): _106.ResponseInitChain;
            toJSON(message: _106.ResponseInitChain): unknown;
            fromPartial(object: Partial<_106.ResponseInitChain>): _106.ResponseInitChain;
            fromAmino(object: _106.ResponseInitChainAmino): _106.ResponseInitChain;
            toAmino(message: _106.ResponseInitChain): _106.ResponseInitChainAmino;
        };
        ResponseQuery: {
            encode(message: _106.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseQuery;
            fromJSON(object: any): _106.ResponseQuery;
            toJSON(message: _106.ResponseQuery): unknown;
            fromPartial(object: Partial<_106.ResponseQuery>): _106.ResponseQuery;
            fromAmino(object: _106.ResponseQueryAmino): _106.ResponseQuery;
            toAmino(message: _106.ResponseQuery): _106.ResponseQueryAmino;
        };
        ResponseBeginBlock: {
            encode(message: _106.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseBeginBlock;
            fromJSON(object: any): _106.ResponseBeginBlock;
            toJSON(message: _106.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_106.ResponseBeginBlock>): _106.ResponseBeginBlock;
            fromAmino(object: _106.ResponseBeginBlockAmino): _106.ResponseBeginBlock;
            toAmino(message: _106.ResponseBeginBlock): _106.ResponseBeginBlockAmino;
        };
        ResponseCheckTx: {
            encode(message: _106.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseCheckTx;
            fromJSON(object: any): _106.ResponseCheckTx;
            toJSON(message: _106.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_106.ResponseCheckTx>): _106.ResponseCheckTx;
            fromAmino(object: _106.ResponseCheckTxAmino): _106.ResponseCheckTx;
            toAmino(message: _106.ResponseCheckTx): _106.ResponseCheckTxAmino;
        };
        ResponseDeliverTx: {
            encode(message: _106.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseDeliverTx;
            fromJSON(object: any): _106.ResponseDeliverTx;
            toJSON(message: _106.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_106.ResponseDeliverTx>): _106.ResponseDeliverTx;
            fromAmino(object: _106.ResponseDeliverTxAmino): _106.ResponseDeliverTx;
            toAmino(message: _106.ResponseDeliverTx): _106.ResponseDeliverTxAmino;
        };
        ResponseEndBlock: {
            encode(message: _106.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseEndBlock;
            fromJSON(object: any): _106.ResponseEndBlock;
            toJSON(message: _106.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_106.ResponseEndBlock>): _106.ResponseEndBlock;
            fromAmino(object: _106.ResponseEndBlockAmino): _106.ResponseEndBlock;
            toAmino(message: _106.ResponseEndBlock): _106.ResponseEndBlockAmino;
        };
        ResponseCommit: {
            encode(message: _106.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseCommit;
            fromJSON(object: any): _106.ResponseCommit;
            toJSON(message: _106.ResponseCommit): unknown;
            fromPartial(object: Partial<_106.ResponseCommit>): _106.ResponseCommit;
            fromAmino(object: _106.ResponseCommitAmino): _106.ResponseCommit;
            toAmino(message: _106.ResponseCommit): _106.ResponseCommitAmino;
        };
        ResponseListSnapshots: {
            encode(message: _106.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseListSnapshots;
            fromJSON(object: any): _106.ResponseListSnapshots;
            toJSON(message: _106.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_106.ResponseListSnapshots>): _106.ResponseListSnapshots;
            fromAmino(object: _106.ResponseListSnapshotsAmino): _106.ResponseListSnapshots;
            toAmino(message: _106.ResponseListSnapshots): _106.ResponseListSnapshotsAmino;
        };
        ResponseOfferSnapshot: {
            encode(message: _106.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseOfferSnapshot;
            fromJSON(object: any): _106.ResponseOfferSnapshot;
            toJSON(message: _106.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_106.ResponseOfferSnapshot>): _106.ResponseOfferSnapshot;
            fromAmino(object: _106.ResponseOfferSnapshotAmino): _106.ResponseOfferSnapshot;
            toAmino(message: _106.ResponseOfferSnapshot): _106.ResponseOfferSnapshotAmino;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _106.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _106.ResponseLoadSnapshotChunk;
            toJSON(message: _106.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_106.ResponseLoadSnapshotChunk>): _106.ResponseLoadSnapshotChunk;
            fromAmino(object: _106.ResponseLoadSnapshotChunkAmino): _106.ResponseLoadSnapshotChunk;
            toAmino(message: _106.ResponseLoadSnapshotChunk): _106.ResponseLoadSnapshotChunkAmino;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _106.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseApplySnapshotChunk;
            fromJSON(object: any): _106.ResponseApplySnapshotChunk;
            toJSON(message: _106.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_106.ResponseApplySnapshotChunk>): _106.ResponseApplySnapshotChunk;
            fromAmino(object: _106.ResponseApplySnapshotChunkAmino): _106.ResponseApplySnapshotChunk;
            toAmino(message: _106.ResponseApplySnapshotChunk): _106.ResponseApplySnapshotChunkAmino;
        };
        ConsensusParams: {
            encode(message: _106.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ConsensusParams;
            fromJSON(object: any): _106.ConsensusParams;
            toJSON(message: _106.ConsensusParams): unknown;
            fromPartial(object: Partial<_106.ConsensusParams>): _106.ConsensusParams;
            fromAmino(object: _106.ConsensusParamsAmino): _106.ConsensusParams;
            toAmino(message: _106.ConsensusParams): _106.ConsensusParamsAmino;
        };
        BlockParams: {
            encode(message: _106.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.BlockParams;
            fromJSON(object: any): _106.BlockParams;
            toJSON(message: _106.BlockParams): unknown;
            fromPartial(object: Partial<_106.BlockParams>): _106.BlockParams;
            fromAmino(object: _106.BlockParamsAmino): _106.BlockParams;
            toAmino(message: _106.BlockParams): _106.BlockParamsAmino;
        };
        LastCommitInfo: {
            encode(message: _106.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.LastCommitInfo;
            fromJSON(object: any): _106.LastCommitInfo;
            toJSON(message: _106.LastCommitInfo): unknown;
            fromPartial(object: Partial<_106.LastCommitInfo>): _106.LastCommitInfo;
            fromAmino(object: _106.LastCommitInfoAmino): _106.LastCommitInfo;
            toAmino(message: _106.LastCommitInfo): _106.LastCommitInfoAmino;
        };
        Event: {
            encode(message: _106.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Event;
            fromJSON(object: any): _106.Event;
            toJSON(message: _106.Event): unknown;
            fromPartial(object: Partial<_106.Event>): _106.Event;
            fromAmino(object: _106.EventAmino): _106.Event;
            toAmino(message: _106.Event): _106.EventAmino;
        };
        EventAttribute: {
            encode(message: _106.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventAttribute;
            fromJSON(object: any): _106.EventAttribute;
            toJSON(message: _106.EventAttribute): unknown;
            fromPartial(object: Partial<_106.EventAttribute>): _106.EventAttribute;
            fromAmino(object: _106.EventAttributeAmino): _106.EventAttribute;
            toAmino(message: _106.EventAttribute): _106.EventAttributeAmino;
        };
        TxResult: {
            encode(message: _106.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.TxResult;
            fromJSON(object: any): _106.TxResult;
            toJSON(message: _106.TxResult): unknown;
            fromPartial(object: Partial<_106.TxResult>): _106.TxResult;
            fromAmino(object: _106.TxResultAmino): _106.TxResult;
            toAmino(message: _106.TxResult): _106.TxResultAmino;
        };
        Validator: {
            encode(message: _106.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Validator;
            fromJSON(object: any): _106.Validator;
            toJSON(message: _106.Validator): unknown;
            fromPartial(object: Partial<_106.Validator>): _106.Validator;
            fromAmino(object: _106.ValidatorAmino): _106.Validator;
            toAmino(message: _106.Validator): _106.ValidatorAmino;
        };
        ValidatorUpdate: {
            encode(message: _106.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ValidatorUpdate;
            fromJSON(object: any): _106.ValidatorUpdate;
            toJSON(message: _106.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_106.ValidatorUpdate>): _106.ValidatorUpdate;
            fromAmino(object: _106.ValidatorUpdateAmino): _106.ValidatorUpdate;
            toAmino(message: _106.ValidatorUpdate): _106.ValidatorUpdateAmino;
        };
        VoteInfo: {
            encode(message: _106.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.VoteInfo;
            fromJSON(object: any): _106.VoteInfo;
            toJSON(message: _106.VoteInfo): unknown;
            fromPartial(object: Partial<_106.VoteInfo>): _106.VoteInfo;
            fromAmino(object: _106.VoteInfoAmino): _106.VoteInfo;
            toAmino(message: _106.VoteInfo): _106.VoteInfoAmino;
        };
        Evidence: {
            encode(message: _106.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Evidence;
            fromJSON(object: any): _106.Evidence;
            toJSON(message: _106.Evidence): unknown;
            fromPartial(object: Partial<_106.Evidence>): _106.Evidence;
            fromAmino(object: _106.EvidenceAmino): _106.Evidence;
            toAmino(message: _106.Evidence): _106.EvidenceAmino;
        };
        Snapshot: {
            encode(message: _106.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Snapshot;
            fromJSON(object: any): _106.Snapshot;
            toJSON(message: _106.Snapshot): unknown;
            fromPartial(object: Partial<_106.Snapshot>): _106.Snapshot;
            fromAmino(object: _106.SnapshotAmino): _106.Snapshot;
            toAmino(message: _106.Snapshot): _106.SnapshotAmino;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _108.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Proof;
            fromJSON(object: any): _108.Proof;
            toJSON(message: _108.Proof): unknown;
            fromPartial(object: Partial<_108.Proof>): _108.Proof;
            fromAmino(object: _108.ProofAmino): _108.Proof;
            toAmino(message: _108.Proof): _108.ProofAmino;
        };
        ValueOp: {
            encode(message: _108.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ValueOp;
            fromJSON(object: any): _108.ValueOp;
            toJSON(message: _108.ValueOp): unknown;
            fromPartial(object: Partial<_108.ValueOp>): _108.ValueOp;
            fromAmino(object: _108.ValueOpAmino): _108.ValueOp;
            toAmino(message: _108.ValueOp): _108.ValueOpAmino;
        };
        DominoOp: {
            encode(message: _108.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.DominoOp;
            fromJSON(object: any): _108.DominoOp;
            toJSON(message: _108.DominoOp): unknown;
            fromPartial(object: Partial<_108.DominoOp>): _108.DominoOp;
            fromAmino(object: _108.DominoOpAmino): _108.DominoOp;
            toAmino(message: _108.DominoOp): _108.DominoOpAmino;
        };
        ProofOp: {
            encode(message: _108.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ProofOp;
            fromJSON(object: any): _108.ProofOp;
            toJSON(message: _108.ProofOp): unknown;
            fromPartial(object: Partial<_108.ProofOp>): _108.ProofOp;
            fromAmino(object: _108.ProofOpAmino): _108.ProofOp;
            toAmino(message: _108.ProofOp): _108.ProofOpAmino;
        };
        ProofOps: {
            encode(message: _108.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ProofOps;
            fromJSON(object: any): _108.ProofOps;
            toJSON(message: _108.ProofOps): unknown;
            fromPartial(object: Partial<_108.ProofOps>): _108.ProofOps;
            fromAmino(object: _108.ProofOpsAmino): _108.ProofOps;
            toAmino(message: _108.ProofOps): _108.ProofOpsAmino;
        };
        PublicKey: {
            encode(message: _107.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PublicKey;
            fromJSON(object: any): _107.PublicKey;
            toJSON(message: _107.PublicKey): unknown;
            fromPartial(object: Partial<_107.PublicKey>): _107.PublicKey;
            fromAmino(object: _107.PublicKeyAmino): _107.PublicKey;
            toAmino(message: _107.PublicKey): _107.PublicKeyAmino;
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
                fromAmino(object: _109.BitArrayAmino): _109.BitArray;
                toAmino(message: _109.BitArray): _109.BitArrayAmino;
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
            fromAmino(object: _110.NetAddressAmino): _110.NetAddress;
            toAmino(message: _110.NetAddress): _110.NetAddressAmino;
        };
        ProtocolVersion: {
            encode(message: _110.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ProtocolVersion;
            fromJSON(object: any): _110.ProtocolVersion;
            toJSON(message: _110.ProtocolVersion): unknown;
            fromPartial(object: Partial<_110.ProtocolVersion>): _110.ProtocolVersion;
            fromAmino(object: _110.ProtocolVersionAmino): _110.ProtocolVersion;
            toAmino(message: _110.ProtocolVersion): _110.ProtocolVersionAmino;
        };
        DefaultNodeInfo: {
            encode(message: _110.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DefaultNodeInfo;
            fromJSON(object: any): _110.DefaultNodeInfo;
            toJSON(message: _110.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_110.DefaultNodeInfo>): _110.DefaultNodeInfo;
            fromAmino(object: _110.DefaultNodeInfoAmino): _110.DefaultNodeInfo;
            toAmino(message: _110.DefaultNodeInfo): _110.DefaultNodeInfoAmino;
        };
        DefaultNodeInfoOther: {
            encode(message: _110.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DefaultNodeInfoOther;
            fromJSON(object: any): _110.DefaultNodeInfoOther;
            toJSON(message: _110.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_110.DefaultNodeInfoOther>): _110.DefaultNodeInfoOther;
            fromAmino(object: _110.DefaultNodeInfoOtherAmino): _110.DefaultNodeInfoOther;
            toAmino(message: _110.DefaultNodeInfoOther): _110.DefaultNodeInfoOtherAmino;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _115.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ValidatorSet;
            fromJSON(object: any): _115.ValidatorSet;
            toJSON(message: _115.ValidatorSet): unknown;
            fromPartial(object: Partial<_115.ValidatorSet>): _115.ValidatorSet;
            fromAmino(object: _115.ValidatorSetAmino): _115.ValidatorSet;
            toAmino(message: _115.ValidatorSet): _115.ValidatorSetAmino;
        };
        Validator: {
            encode(message: _115.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Validator;
            fromJSON(object: any): _115.Validator;
            toJSON(message: _115.Validator): unknown;
            fromPartial(object: Partial<_115.Validator>): _115.Validator;
            fromAmino(object: _115.ValidatorAmino): _115.Validator;
            toAmino(message: _115.Validator): _115.ValidatorAmino;
        };
        SimpleValidator: {
            encode(message: _115.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.SimpleValidator;
            fromJSON(object: any): _115.SimpleValidator;
            toJSON(message: _115.SimpleValidator): unknown;
            fromPartial(object: Partial<_115.SimpleValidator>): _115.SimpleValidator;
            fromAmino(object: _115.SimpleValidatorAmino): _115.SimpleValidator;
            toAmino(message: _115.SimpleValidator): _115.SimpleValidatorAmino;
        };
        blockIDFlagFromJSON(object: any): _114.BlockIDFlag;
        blockIDFlagToJSON(object: _114.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _114.SignedMsgType;
        signedMsgTypeToJSON(object: _114.SignedMsgType): string;
        BlockIDFlag: typeof _114.BlockIDFlag;
        BlockIDFlagSDKType: typeof _114.BlockIDFlag;
        BlockIDFlagAmino: typeof _114.BlockIDFlag;
        SignedMsgType: typeof _114.SignedMsgType;
        SignedMsgTypeSDKType: typeof _114.SignedMsgType;
        SignedMsgTypeAmino: typeof _114.SignedMsgType;
        PartSetHeader: {
            encode(message: _114.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.PartSetHeader;
            fromJSON(object: any): _114.PartSetHeader;
            toJSON(message: _114.PartSetHeader): unknown;
            fromPartial(object: Partial<_114.PartSetHeader>): _114.PartSetHeader;
            fromAmino(object: _114.PartSetHeaderAmino): _114.PartSetHeader;
            toAmino(message: _114.PartSetHeader): _114.PartSetHeaderAmino;
        };
        Part: {
            encode(message: _114.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Part;
            fromJSON(object: any): _114.Part;
            toJSON(message: _114.Part): unknown;
            fromPartial(object: Partial<_114.Part>): _114.Part;
            fromAmino(object: _114.PartAmino): _114.Part;
            toAmino(message: _114.Part): _114.PartAmino;
        };
        BlockID: {
            encode(message: _114.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.BlockID;
            fromJSON(object: any): _114.BlockID;
            toJSON(message: _114.BlockID): unknown;
            fromPartial(object: Partial<_114.BlockID>): _114.BlockID;
            fromAmino(object: _114.BlockIDAmino): _114.BlockID;
            toAmino(message: _114.BlockID): _114.BlockIDAmino;
        };
        Header: {
            encode(message: _114.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Header;
            fromJSON(object: any): _114.Header;
            toJSON(message: _114.Header): unknown;
            fromPartial(object: Partial<_114.Header>): _114.Header;
            fromAmino(object: _114.HeaderAmino): _114.Header;
            toAmino(message: _114.Header): _114.HeaderAmino;
        };
        Data: {
            encode(message: _114.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Data;
            fromJSON(object: any): _114.Data;
            toJSON(message: _114.Data): unknown;
            fromPartial(object: Partial<_114.Data>): _114.Data;
            fromAmino(object: _114.DataAmino): _114.Data;
            toAmino(message: _114.Data): _114.DataAmino;
        };
        Vote: {
            encode(message: _114.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Vote;
            fromJSON(object: any): _114.Vote;
            toJSON(message: _114.Vote): unknown;
            fromPartial(object: Partial<_114.Vote>): _114.Vote;
            fromAmino(object: _114.VoteAmino): _114.Vote;
            toAmino(message: _114.Vote): _114.VoteAmino;
        };
        Commit: {
            encode(message: _114.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Commit;
            fromJSON(object: any): _114.Commit;
            toJSON(message: _114.Commit): unknown;
            fromPartial(object: Partial<_114.Commit>): _114.Commit;
            fromAmino(object: _114.CommitAmino): _114.Commit;
            toAmino(message: _114.Commit): _114.CommitAmino;
        };
        CommitSig: {
            encode(message: _114.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.CommitSig;
            fromJSON(object: any): _114.CommitSig;
            toJSON(message: _114.CommitSig): unknown;
            fromPartial(object: Partial<_114.CommitSig>): _114.CommitSig;
            fromAmino(object: _114.CommitSigAmino): _114.CommitSig;
            toAmino(message: _114.CommitSig): _114.CommitSigAmino;
        };
        Proposal: {
            encode(message: _114.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Proposal;
            fromJSON(object: any): _114.Proposal;
            toJSON(message: _114.Proposal): unknown;
            fromPartial(object: Partial<_114.Proposal>): _114.Proposal;
            fromAmino(object: _114.ProposalAmino): _114.Proposal;
            toAmino(message: _114.Proposal): _114.ProposalAmino;
        };
        SignedHeader: {
            encode(message: _114.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.SignedHeader;
            fromJSON(object: any): _114.SignedHeader;
            toJSON(message: _114.SignedHeader): unknown;
            fromPartial(object: Partial<_114.SignedHeader>): _114.SignedHeader;
            fromAmino(object: _114.SignedHeaderAmino): _114.SignedHeader;
            toAmino(message: _114.SignedHeader): _114.SignedHeaderAmino;
        };
        LightBlock: {
            encode(message: _114.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.LightBlock;
            fromJSON(object: any): _114.LightBlock;
            toJSON(message: _114.LightBlock): unknown;
            fromPartial(object: Partial<_114.LightBlock>): _114.LightBlock;
            fromAmino(object: _114.LightBlockAmino): _114.LightBlock;
            toAmino(message: _114.LightBlock): _114.LightBlockAmino;
        };
        BlockMeta: {
            encode(message: _114.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.BlockMeta;
            fromJSON(object: any): _114.BlockMeta;
            toJSON(message: _114.BlockMeta): unknown;
            fromPartial(object: Partial<_114.BlockMeta>): _114.BlockMeta;
            fromAmino(object: _114.BlockMetaAmino): _114.BlockMeta;
            toAmino(message: _114.BlockMeta): _114.BlockMetaAmino;
        };
        TxProof: {
            encode(message: _114.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.TxProof;
            fromJSON(object: any): _114.TxProof;
            toJSON(message: _114.TxProof): unknown;
            fromPartial(object: Partial<_114.TxProof>): _114.TxProof;
            fromAmino(object: _114.TxProofAmino): _114.TxProof;
            toAmino(message: _114.TxProof): _114.TxProofAmino;
        };
        ConsensusParams: {
            encode(message: _113.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ConsensusParams;
            fromJSON(object: any): _113.ConsensusParams;
            toJSON(message: _113.ConsensusParams): unknown;
            fromPartial(object: Partial<_113.ConsensusParams>): _113.ConsensusParams;
            fromAmino(object: _113.ConsensusParamsAmino): _113.ConsensusParams;
            toAmino(message: _113.ConsensusParams): _113.ConsensusParamsAmino;
        };
        BlockParams: {
            encode(message: _113.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.BlockParams;
            fromJSON(object: any): _113.BlockParams;
            toJSON(message: _113.BlockParams): unknown;
            fromPartial(object: Partial<_113.BlockParams>): _113.BlockParams;
            fromAmino(object: _113.BlockParamsAmino): _113.BlockParams;
            toAmino(message: _113.BlockParams): _113.BlockParamsAmino;
        };
        EvidenceParams: {
            encode(message: _113.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.EvidenceParams;
            fromJSON(object: any): _113.EvidenceParams;
            toJSON(message: _113.EvidenceParams): unknown;
            fromPartial(object: Partial<_113.EvidenceParams>): _113.EvidenceParams;
            fromAmino(object: _113.EvidenceParamsAmino): _113.EvidenceParams;
            toAmino(message: _113.EvidenceParams): _113.EvidenceParamsAmino;
        };
        ValidatorParams: {
            encode(message: _113.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ValidatorParams;
            fromJSON(object: any): _113.ValidatorParams;
            toJSON(message: _113.ValidatorParams): unknown;
            fromPartial(object: Partial<_113.ValidatorParams>): _113.ValidatorParams;
            fromAmino(object: _113.ValidatorParamsAmino): _113.ValidatorParams;
            toAmino(message: _113.ValidatorParams): _113.ValidatorParamsAmino;
        };
        VersionParams: {
            encode(message: _113.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.VersionParams;
            fromJSON(object: any): _113.VersionParams;
            toJSON(message: _113.VersionParams): unknown;
            fromPartial(object: Partial<_113.VersionParams>): _113.VersionParams;
            fromAmino(object: _113.VersionParamsAmino): _113.VersionParams;
            toAmino(message: _113.VersionParams): _113.VersionParamsAmino;
        };
        HashedParams: {
            encode(message: _113.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.HashedParams;
            fromJSON(object: any): _113.HashedParams;
            toJSON(message: _113.HashedParams): unknown;
            fromPartial(object: Partial<_113.HashedParams>): _113.HashedParams;
            fromAmino(object: _113.HashedParamsAmino): _113.HashedParams;
            toAmino(message: _113.HashedParams): _113.HashedParamsAmino;
        };
        Evidence: {
            encode(message: _112.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Evidence;
            fromJSON(object: any): _112.Evidence;
            toJSON(message: _112.Evidence): unknown;
            fromPartial(object: Partial<_112.Evidence>): _112.Evidence;
            fromAmino(object: _112.EvidenceAmino): _112.Evidence;
            toAmino(message: _112.Evidence): _112.EvidenceAmino;
        };
        DuplicateVoteEvidence: {
            encode(message: _112.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DuplicateVoteEvidence;
            fromJSON(object: any): _112.DuplicateVoteEvidence;
            toJSON(message: _112.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_112.DuplicateVoteEvidence>): _112.DuplicateVoteEvidence;
            fromAmino(object: _112.DuplicateVoteEvidenceAmino): _112.DuplicateVoteEvidence;
            toAmino(message: _112.DuplicateVoteEvidence): _112.DuplicateVoteEvidenceAmino;
        };
        LightClientAttackEvidence: {
            encode(message: _112.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.LightClientAttackEvidence;
            fromJSON(object: any): _112.LightClientAttackEvidence;
            toJSON(message: _112.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_112.LightClientAttackEvidence>): _112.LightClientAttackEvidence;
            fromAmino(object: _112.LightClientAttackEvidenceAmino): _112.LightClientAttackEvidence;
            toAmino(message: _112.LightClientAttackEvidence): _112.LightClientAttackEvidenceAmino;
        };
        EvidenceList: {
            encode(message: _112.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.EvidenceList;
            fromJSON(object: any): _112.EvidenceList;
            toJSON(message: _112.EvidenceList): unknown;
            fromPartial(object: Partial<_112.EvidenceList>): _112.EvidenceList;
            fromAmino(object: _112.EvidenceListAmino): _112.EvidenceList;
            toAmino(message: _112.EvidenceList): _112.EvidenceListAmino;
        };
        Block: {
            encode(message: _111.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Block;
            fromJSON(object: any): _111.Block;
            toJSON(message: _111.Block): unknown;
            fromPartial(object: Partial<_111.Block>): _111.Block;
            fromAmino(object: _111.BlockAmino): _111.Block;
            toAmino(message: _111.Block): _111.BlockAmino;
        };
    };
    const version: {
        App: {
            encode(message: _116.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.App;
            fromJSON(object: any): _116.App;
            toJSON(message: _116.App): unknown;
            fromPartial(object: Partial<_116.App>): _116.App;
            fromAmino(object: _116.AppAmino): _116.App;
            toAmino(message: _116.App): _116.AppAmino;
        };
        Consensus: {
            encode(message: _116.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Consensus;
            fromJSON(object: any): _116.Consensus;
            toJSON(message: _116.Consensus): unknown;
            fromPartial(object: Partial<_116.Consensus>): _116.Consensus;
            fromAmino(object: _116.ConsensusAmino): _116.Consensus;
            toAmino(message: _116.Consensus): _116.ConsensusAmino;
        };
    };
}
