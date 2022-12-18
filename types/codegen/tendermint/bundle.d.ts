import * as _107 from "./abci/types";
import * as _108 from "./crypto/keys";
import * as _109 from "./crypto/proof";
import * as _110 from "./libs/bits/types";
import * as _111 from "./p2p/types";
import * as _112 from "./types/block";
import * as _113 from "./types/evidence";
import * as _114 from "./types/params";
import * as _115 from "./types/types";
import * as _116 from "./types/validator";
import * as _117 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _107.CheckTxType;
        checkTxTypeToJSON(object: _107.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _107.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _107.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _107.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _107.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _107.EvidenceType;
        evidenceTypeToJSON(object: _107.EvidenceType): string;
        CheckTxType: typeof _107.CheckTxType;
        CheckTxTypeSDKType: typeof _107.CheckTxType;
        CheckTxTypeAmino: typeof _107.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _107.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _107.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _107.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _107.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _107.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _107.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _107.EvidenceType;
        EvidenceTypeSDKType: typeof _107.EvidenceType;
        EvidenceTypeAmino: typeof _107.EvidenceType;
        Request: {
            encode(message: _107.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Request;
            fromJSON(object: any): _107.Request;
            toJSON(message: _107.Request): unknown;
            fromPartial(object: Partial<_107.Request>): _107.Request;
            fromAmino(object: _107.RequestAmino): _107.Request;
            toAmino(message: _107.Request): _107.RequestAmino;
        };
        RequestEcho: {
            encode(message: _107.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestEcho;
            fromJSON(object: any): _107.RequestEcho;
            toJSON(message: _107.RequestEcho): unknown;
            fromPartial(object: Partial<_107.RequestEcho>): _107.RequestEcho;
            fromAmino(object: _107.RequestEchoAmino): _107.RequestEcho;
            toAmino(message: _107.RequestEcho): _107.RequestEchoAmino;
        };
        RequestFlush: {
            encode(_: _107.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestFlush;
            fromJSON(_: any): _107.RequestFlush;
            toJSON(_: _107.RequestFlush): unknown;
            fromPartial(_: Partial<_107.RequestFlush>): _107.RequestFlush;
            fromAmino(_: _107.RequestFlushAmino): _107.RequestFlush;
            toAmino(_: _107.RequestFlush): _107.RequestFlushAmino;
        };
        RequestInfo: {
            encode(message: _107.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestInfo;
            fromJSON(object: any): _107.RequestInfo;
            toJSON(message: _107.RequestInfo): unknown;
            fromPartial(object: Partial<_107.RequestInfo>): _107.RequestInfo;
            fromAmino(object: _107.RequestInfoAmino): _107.RequestInfo;
            toAmino(message: _107.RequestInfo): _107.RequestInfoAmino;
        };
        RequestSetOption: {
            encode(message: _107.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestSetOption;
            fromJSON(object: any): _107.RequestSetOption;
            toJSON(message: _107.RequestSetOption): unknown;
            fromPartial(object: Partial<_107.RequestSetOption>): _107.RequestSetOption;
            fromAmino(object: _107.RequestSetOptionAmino): _107.RequestSetOption;
            toAmino(message: _107.RequestSetOption): _107.RequestSetOptionAmino;
        };
        RequestInitChain: {
            encode(message: _107.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestInitChain;
            fromJSON(object: any): _107.RequestInitChain;
            toJSON(message: _107.RequestInitChain): unknown;
            fromPartial(object: Partial<_107.RequestInitChain>): _107.RequestInitChain;
            fromAmino(object: _107.RequestInitChainAmino): _107.RequestInitChain;
            toAmino(message: _107.RequestInitChain): _107.RequestInitChainAmino;
        };
        RequestQuery: {
            encode(message: _107.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestQuery;
            fromJSON(object: any): _107.RequestQuery;
            toJSON(message: _107.RequestQuery): unknown;
            fromPartial(object: Partial<_107.RequestQuery>): _107.RequestQuery;
            fromAmino(object: _107.RequestQueryAmino): _107.RequestQuery;
            toAmino(message: _107.RequestQuery): _107.RequestQueryAmino;
        };
        RequestBeginBlock: {
            encode(message: _107.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestBeginBlock;
            fromJSON(object: any): _107.RequestBeginBlock;
            toJSON(message: _107.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_107.RequestBeginBlock>): _107.RequestBeginBlock;
            fromAmino(object: _107.RequestBeginBlockAmino): _107.RequestBeginBlock;
            toAmino(message: _107.RequestBeginBlock): _107.RequestBeginBlockAmino;
        };
        RequestCheckTx: {
            encode(message: _107.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestCheckTx;
            fromJSON(object: any): _107.RequestCheckTx;
            toJSON(message: _107.RequestCheckTx): unknown;
            fromPartial(object: Partial<_107.RequestCheckTx>): _107.RequestCheckTx;
            fromAmino(object: _107.RequestCheckTxAmino): _107.RequestCheckTx;
            toAmino(message: _107.RequestCheckTx): _107.RequestCheckTxAmino;
        };
        RequestDeliverTx: {
            encode(message: _107.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestDeliverTx;
            fromJSON(object: any): _107.RequestDeliverTx;
            toJSON(message: _107.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_107.RequestDeliverTx>): _107.RequestDeliverTx;
            fromAmino(object: _107.RequestDeliverTxAmino): _107.RequestDeliverTx;
            toAmino(message: _107.RequestDeliverTx): _107.RequestDeliverTxAmino;
        };
        RequestEndBlock: {
            encode(message: _107.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestEndBlock;
            fromJSON(object: any): _107.RequestEndBlock;
            toJSON(message: _107.RequestEndBlock): unknown;
            fromPartial(object: Partial<_107.RequestEndBlock>): _107.RequestEndBlock;
            fromAmino(object: _107.RequestEndBlockAmino): _107.RequestEndBlock;
            toAmino(message: _107.RequestEndBlock): _107.RequestEndBlockAmino;
        };
        RequestCommit: {
            encode(_: _107.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestCommit;
            fromJSON(_: any): _107.RequestCommit;
            toJSON(_: _107.RequestCommit): unknown;
            fromPartial(_: Partial<_107.RequestCommit>): _107.RequestCommit;
            fromAmino(_: _107.RequestCommitAmino): _107.RequestCommit;
            toAmino(_: _107.RequestCommit): _107.RequestCommitAmino;
        };
        RequestListSnapshots: {
            encode(_: _107.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestListSnapshots;
            fromJSON(_: any): _107.RequestListSnapshots;
            toJSON(_: _107.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_107.RequestListSnapshots>): _107.RequestListSnapshots;
            fromAmino(_: _107.RequestListSnapshotsAmino): _107.RequestListSnapshots;
            toAmino(_: _107.RequestListSnapshots): _107.RequestListSnapshotsAmino;
        };
        RequestOfferSnapshot: {
            encode(message: _107.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestOfferSnapshot;
            fromJSON(object: any): _107.RequestOfferSnapshot;
            toJSON(message: _107.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_107.RequestOfferSnapshot>): _107.RequestOfferSnapshot;
            fromAmino(object: _107.RequestOfferSnapshotAmino): _107.RequestOfferSnapshot;
            toAmino(message: _107.RequestOfferSnapshot): _107.RequestOfferSnapshotAmino;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _107.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestLoadSnapshotChunk;
            fromJSON(object: any): _107.RequestLoadSnapshotChunk;
            toJSON(message: _107.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_107.RequestLoadSnapshotChunk>): _107.RequestLoadSnapshotChunk;
            fromAmino(object: _107.RequestLoadSnapshotChunkAmino): _107.RequestLoadSnapshotChunk;
            toAmino(message: _107.RequestLoadSnapshotChunk): _107.RequestLoadSnapshotChunkAmino;
        };
        RequestApplySnapshotChunk: {
            encode(message: _107.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.RequestApplySnapshotChunk;
            fromJSON(object: any): _107.RequestApplySnapshotChunk;
            toJSON(message: _107.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_107.RequestApplySnapshotChunk>): _107.RequestApplySnapshotChunk;
            fromAmino(object: _107.RequestApplySnapshotChunkAmino): _107.RequestApplySnapshotChunk;
            toAmino(message: _107.RequestApplySnapshotChunk): _107.RequestApplySnapshotChunkAmino;
        };
        Response: {
            encode(message: _107.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Response;
            fromJSON(object: any): _107.Response;
            toJSON(message: _107.Response): unknown;
            fromPartial(object: Partial<_107.Response>): _107.Response;
            fromAmino(object: _107.ResponseAmino): _107.Response;
            toAmino(message: _107.Response): _107.ResponseAmino;
        };
        ResponseException: {
            encode(message: _107.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseException;
            fromJSON(object: any): _107.ResponseException;
            toJSON(message: _107.ResponseException): unknown;
            fromPartial(object: Partial<_107.ResponseException>): _107.ResponseException;
            fromAmino(object: _107.ResponseExceptionAmino): _107.ResponseException;
            toAmino(message: _107.ResponseException): _107.ResponseExceptionAmino;
        };
        ResponseEcho: {
            encode(message: _107.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseEcho;
            fromJSON(object: any): _107.ResponseEcho;
            toJSON(message: _107.ResponseEcho): unknown;
            fromPartial(object: Partial<_107.ResponseEcho>): _107.ResponseEcho;
            fromAmino(object: _107.ResponseEchoAmino): _107.ResponseEcho;
            toAmino(message: _107.ResponseEcho): _107.ResponseEchoAmino;
        };
        ResponseFlush: {
            encode(_: _107.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseFlush;
            fromJSON(_: any): _107.ResponseFlush;
            toJSON(_: _107.ResponseFlush): unknown;
            fromPartial(_: Partial<_107.ResponseFlush>): _107.ResponseFlush;
            fromAmino(_: _107.ResponseFlushAmino): _107.ResponseFlush;
            toAmino(_: _107.ResponseFlush): _107.ResponseFlushAmino;
        };
        ResponseInfo: {
            encode(message: _107.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseInfo;
            fromJSON(object: any): _107.ResponseInfo;
            toJSON(message: _107.ResponseInfo): unknown;
            fromPartial(object: Partial<_107.ResponseInfo>): _107.ResponseInfo;
            fromAmino(object: _107.ResponseInfoAmino): _107.ResponseInfo;
            toAmino(message: _107.ResponseInfo): _107.ResponseInfoAmino;
        };
        ResponseSetOption: {
            encode(message: _107.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseSetOption;
            fromJSON(object: any): _107.ResponseSetOption;
            toJSON(message: _107.ResponseSetOption): unknown;
            fromPartial(object: Partial<_107.ResponseSetOption>): _107.ResponseSetOption;
            fromAmino(object: _107.ResponseSetOptionAmino): _107.ResponseSetOption;
            toAmino(message: _107.ResponseSetOption): _107.ResponseSetOptionAmino;
        };
        ResponseInitChain: {
            encode(message: _107.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseInitChain;
            fromJSON(object: any): _107.ResponseInitChain;
            toJSON(message: _107.ResponseInitChain): unknown;
            fromPartial(object: Partial<_107.ResponseInitChain>): _107.ResponseInitChain;
            fromAmino(object: _107.ResponseInitChainAmino): _107.ResponseInitChain;
            toAmino(message: _107.ResponseInitChain): _107.ResponseInitChainAmino;
        };
        ResponseQuery: {
            encode(message: _107.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseQuery;
            fromJSON(object: any): _107.ResponseQuery;
            toJSON(message: _107.ResponseQuery): unknown;
            fromPartial(object: Partial<_107.ResponseQuery>): _107.ResponseQuery;
            fromAmino(object: _107.ResponseQueryAmino): _107.ResponseQuery;
            toAmino(message: _107.ResponseQuery): _107.ResponseQueryAmino;
        };
        ResponseBeginBlock: {
            encode(message: _107.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseBeginBlock;
            fromJSON(object: any): _107.ResponseBeginBlock;
            toJSON(message: _107.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_107.ResponseBeginBlock>): _107.ResponseBeginBlock;
            fromAmino(object: _107.ResponseBeginBlockAmino): _107.ResponseBeginBlock;
            toAmino(message: _107.ResponseBeginBlock): _107.ResponseBeginBlockAmino;
        };
        ResponseCheckTx: {
            encode(message: _107.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseCheckTx;
            fromJSON(object: any): _107.ResponseCheckTx;
            toJSON(message: _107.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_107.ResponseCheckTx>): _107.ResponseCheckTx;
            fromAmino(object: _107.ResponseCheckTxAmino): _107.ResponseCheckTx;
            toAmino(message: _107.ResponseCheckTx): _107.ResponseCheckTxAmino;
        };
        ResponseDeliverTx: {
            encode(message: _107.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseDeliverTx;
            fromJSON(object: any): _107.ResponseDeliverTx;
            toJSON(message: _107.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_107.ResponseDeliverTx>): _107.ResponseDeliverTx;
            fromAmino(object: _107.ResponseDeliverTxAmino): _107.ResponseDeliverTx;
            toAmino(message: _107.ResponseDeliverTx): _107.ResponseDeliverTxAmino;
        };
        ResponseEndBlock: {
            encode(message: _107.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseEndBlock;
            fromJSON(object: any): _107.ResponseEndBlock;
            toJSON(message: _107.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_107.ResponseEndBlock>): _107.ResponseEndBlock;
            fromAmino(object: _107.ResponseEndBlockAmino): _107.ResponseEndBlock;
            toAmino(message: _107.ResponseEndBlock): _107.ResponseEndBlockAmino;
        };
        ResponseCommit: {
            encode(message: _107.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseCommit;
            fromJSON(object: any): _107.ResponseCommit;
            toJSON(message: _107.ResponseCommit): unknown;
            fromPartial(object: Partial<_107.ResponseCommit>): _107.ResponseCommit;
            fromAmino(object: _107.ResponseCommitAmino): _107.ResponseCommit;
            toAmino(message: _107.ResponseCommit): _107.ResponseCommitAmino;
        };
        ResponseListSnapshots: {
            encode(message: _107.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseListSnapshots;
            fromJSON(object: any): _107.ResponseListSnapshots;
            toJSON(message: _107.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_107.ResponseListSnapshots>): _107.ResponseListSnapshots;
            fromAmino(object: _107.ResponseListSnapshotsAmino): _107.ResponseListSnapshots;
            toAmino(message: _107.ResponseListSnapshots): _107.ResponseListSnapshotsAmino;
        };
        ResponseOfferSnapshot: {
            encode(message: _107.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseOfferSnapshot;
            fromJSON(object: any): _107.ResponseOfferSnapshot;
            toJSON(message: _107.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_107.ResponseOfferSnapshot>): _107.ResponseOfferSnapshot;
            fromAmino(object: _107.ResponseOfferSnapshotAmino): _107.ResponseOfferSnapshot;
            toAmino(message: _107.ResponseOfferSnapshot): _107.ResponseOfferSnapshotAmino;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _107.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _107.ResponseLoadSnapshotChunk;
            toJSON(message: _107.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_107.ResponseLoadSnapshotChunk>): _107.ResponseLoadSnapshotChunk;
            fromAmino(object: _107.ResponseLoadSnapshotChunkAmino): _107.ResponseLoadSnapshotChunk;
            toAmino(message: _107.ResponseLoadSnapshotChunk): _107.ResponseLoadSnapshotChunkAmino;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _107.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ResponseApplySnapshotChunk;
            fromJSON(object: any): _107.ResponseApplySnapshotChunk;
            toJSON(message: _107.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_107.ResponseApplySnapshotChunk>): _107.ResponseApplySnapshotChunk;
            fromAmino(object: _107.ResponseApplySnapshotChunkAmino): _107.ResponseApplySnapshotChunk;
            toAmino(message: _107.ResponseApplySnapshotChunk): _107.ResponseApplySnapshotChunkAmino;
        };
        ConsensusParams: {
            encode(message: _107.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ConsensusParams;
            fromJSON(object: any): _107.ConsensusParams;
            toJSON(message: _107.ConsensusParams): unknown;
            fromPartial(object: Partial<_107.ConsensusParams>): _107.ConsensusParams;
            fromAmino(object: _107.ConsensusParamsAmino): _107.ConsensusParams;
            toAmino(message: _107.ConsensusParams): _107.ConsensusParamsAmino;
        };
        BlockParams: {
            encode(message: _107.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.BlockParams;
            fromJSON(object: any): _107.BlockParams;
            toJSON(message: _107.BlockParams): unknown;
            fromPartial(object: Partial<_107.BlockParams>): _107.BlockParams;
            fromAmino(object: _107.BlockParamsAmino): _107.BlockParams;
            toAmino(message: _107.BlockParams): _107.BlockParamsAmino;
        };
        LastCommitInfo: {
            encode(message: _107.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.LastCommitInfo;
            fromJSON(object: any): _107.LastCommitInfo;
            toJSON(message: _107.LastCommitInfo): unknown;
            fromPartial(object: Partial<_107.LastCommitInfo>): _107.LastCommitInfo;
            fromAmino(object: _107.LastCommitInfoAmino): _107.LastCommitInfo;
            toAmino(message: _107.LastCommitInfo): _107.LastCommitInfoAmino;
        };
        Event: {
            encode(message: _107.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Event;
            fromJSON(object: any): _107.Event;
            toJSON(message: _107.Event): unknown;
            fromPartial(object: Partial<_107.Event>): _107.Event;
            fromAmino(object: _107.EventAmino): _107.Event;
            toAmino(message: _107.Event): _107.EventAmino;
        };
        EventAttribute: {
            encode(message: _107.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.EventAttribute;
            fromJSON(object: any): _107.EventAttribute;
            toJSON(message: _107.EventAttribute): unknown;
            fromPartial(object: Partial<_107.EventAttribute>): _107.EventAttribute;
            fromAmino(object: _107.EventAttributeAmino): _107.EventAttribute;
            toAmino(message: _107.EventAttribute): _107.EventAttributeAmino;
        };
        TxResult: {
            encode(message: _107.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.TxResult;
            fromJSON(object: any): _107.TxResult;
            toJSON(message: _107.TxResult): unknown;
            fromPartial(object: Partial<_107.TxResult>): _107.TxResult;
            fromAmino(object: _107.TxResultAmino): _107.TxResult;
            toAmino(message: _107.TxResult): _107.TxResultAmino;
        };
        Validator: {
            encode(message: _107.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Validator;
            fromJSON(object: any): _107.Validator;
            toJSON(message: _107.Validator): unknown;
            fromPartial(object: Partial<_107.Validator>): _107.Validator;
            fromAmino(object: _107.ValidatorAmino): _107.Validator;
            toAmino(message: _107.Validator): _107.ValidatorAmino;
        };
        ValidatorUpdate: {
            encode(message: _107.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ValidatorUpdate;
            fromJSON(object: any): _107.ValidatorUpdate;
            toJSON(message: _107.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_107.ValidatorUpdate>): _107.ValidatorUpdate;
            fromAmino(object: _107.ValidatorUpdateAmino): _107.ValidatorUpdate;
            toAmino(message: _107.ValidatorUpdate): _107.ValidatorUpdateAmino;
        };
        VoteInfo: {
            encode(message: _107.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.VoteInfo;
            fromJSON(object: any): _107.VoteInfo;
            toJSON(message: _107.VoteInfo): unknown;
            fromPartial(object: Partial<_107.VoteInfo>): _107.VoteInfo;
            fromAmino(object: _107.VoteInfoAmino): _107.VoteInfo;
            toAmino(message: _107.VoteInfo): _107.VoteInfoAmino;
        };
        Evidence: {
            encode(message: _107.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Evidence;
            fromJSON(object: any): _107.Evidence;
            toJSON(message: _107.Evidence): unknown;
            fromPartial(object: Partial<_107.Evidence>): _107.Evidence;
            fromAmino(object: _107.EvidenceAmino): _107.Evidence;
            toAmino(message: _107.Evidence): _107.EvidenceAmino;
        };
        Snapshot: {
            encode(message: _107.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Snapshot;
            fromJSON(object: any): _107.Snapshot;
            toJSON(message: _107.Snapshot): unknown;
            fromPartial(object: Partial<_107.Snapshot>): _107.Snapshot;
            fromAmino(object: _107.SnapshotAmino): _107.Snapshot;
            toAmino(message: _107.Snapshot): _107.SnapshotAmino;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _109.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Proof;
            fromJSON(object: any): _109.Proof;
            toJSON(message: _109.Proof): unknown;
            fromPartial(object: Partial<_109.Proof>): _109.Proof;
            fromAmino(object: _109.ProofAmino): _109.Proof;
            toAmino(message: _109.Proof): _109.ProofAmino;
        };
        ValueOp: {
            encode(message: _109.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ValueOp;
            fromJSON(object: any): _109.ValueOp;
            toJSON(message: _109.ValueOp): unknown;
            fromPartial(object: Partial<_109.ValueOp>): _109.ValueOp;
            fromAmino(object: _109.ValueOpAmino): _109.ValueOp;
            toAmino(message: _109.ValueOp): _109.ValueOpAmino;
        };
        DominoOp: {
            encode(message: _109.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.DominoOp;
            fromJSON(object: any): _109.DominoOp;
            toJSON(message: _109.DominoOp): unknown;
            fromPartial(object: Partial<_109.DominoOp>): _109.DominoOp;
            fromAmino(object: _109.DominoOpAmino): _109.DominoOp;
            toAmino(message: _109.DominoOp): _109.DominoOpAmino;
        };
        ProofOp: {
            encode(message: _109.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ProofOp;
            fromJSON(object: any): _109.ProofOp;
            toJSON(message: _109.ProofOp): unknown;
            fromPartial(object: Partial<_109.ProofOp>): _109.ProofOp;
            fromAmino(object: _109.ProofOpAmino): _109.ProofOp;
            toAmino(message: _109.ProofOp): _109.ProofOpAmino;
        };
        ProofOps: {
            encode(message: _109.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ProofOps;
            fromJSON(object: any): _109.ProofOps;
            toJSON(message: _109.ProofOps): unknown;
            fromPartial(object: Partial<_109.ProofOps>): _109.ProofOps;
            fromAmino(object: _109.ProofOpsAmino): _109.ProofOps;
            toAmino(message: _109.ProofOps): _109.ProofOpsAmino;
        };
        PublicKey: {
            encode(message: _108.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.PublicKey;
            fromJSON(object: any): _108.PublicKey;
            toJSON(message: _108.PublicKey): unknown;
            fromPartial(object: Partial<_108.PublicKey>): _108.PublicKey;
            fromAmino(object: _108.PublicKeyAmino): _108.PublicKey;
            toAmino(message: _108.PublicKey): _108.PublicKeyAmino;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _110.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.BitArray;
                fromJSON(object: any): _110.BitArray;
                toJSON(message: _110.BitArray): unknown;
                fromPartial(object: Partial<_110.BitArray>): _110.BitArray;
                fromAmino(object: _110.BitArrayAmino): _110.BitArray;
                toAmino(message: _110.BitArray): _110.BitArrayAmino;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _111.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.NetAddress;
            fromJSON(object: any): _111.NetAddress;
            toJSON(message: _111.NetAddress): unknown;
            fromPartial(object: Partial<_111.NetAddress>): _111.NetAddress;
            fromAmino(object: _111.NetAddressAmino): _111.NetAddress;
            toAmino(message: _111.NetAddress): _111.NetAddressAmino;
        };
        ProtocolVersion: {
            encode(message: _111.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ProtocolVersion;
            fromJSON(object: any): _111.ProtocolVersion;
            toJSON(message: _111.ProtocolVersion): unknown;
            fromPartial(object: Partial<_111.ProtocolVersion>): _111.ProtocolVersion;
            fromAmino(object: _111.ProtocolVersionAmino): _111.ProtocolVersion;
            toAmino(message: _111.ProtocolVersion): _111.ProtocolVersionAmino;
        };
        DefaultNodeInfo: {
            encode(message: _111.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.DefaultNodeInfo;
            fromJSON(object: any): _111.DefaultNodeInfo;
            toJSON(message: _111.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_111.DefaultNodeInfo>): _111.DefaultNodeInfo;
            fromAmino(object: _111.DefaultNodeInfoAmino): _111.DefaultNodeInfo;
            toAmino(message: _111.DefaultNodeInfo): _111.DefaultNodeInfoAmino;
        };
        DefaultNodeInfoOther: {
            encode(message: _111.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.DefaultNodeInfoOther;
            fromJSON(object: any): _111.DefaultNodeInfoOther;
            toJSON(message: _111.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_111.DefaultNodeInfoOther>): _111.DefaultNodeInfoOther;
            fromAmino(object: _111.DefaultNodeInfoOtherAmino): _111.DefaultNodeInfoOther;
            toAmino(message: _111.DefaultNodeInfoOther): _111.DefaultNodeInfoOtherAmino;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _116.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ValidatorSet;
            fromJSON(object: any): _116.ValidatorSet;
            toJSON(message: _116.ValidatorSet): unknown;
            fromPartial(object: Partial<_116.ValidatorSet>): _116.ValidatorSet;
            fromAmino(object: _116.ValidatorSetAmino): _116.ValidatorSet;
            toAmino(message: _116.ValidatorSet): _116.ValidatorSetAmino;
        };
        Validator: {
            encode(message: _116.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Validator;
            fromJSON(object: any): _116.Validator;
            toJSON(message: _116.Validator): unknown;
            fromPartial(object: Partial<_116.Validator>): _116.Validator;
            fromAmino(object: _116.ValidatorAmino): _116.Validator;
            toAmino(message: _116.Validator): _116.ValidatorAmino;
        };
        SimpleValidator: {
            encode(message: _116.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.SimpleValidator;
            fromJSON(object: any): _116.SimpleValidator;
            toJSON(message: _116.SimpleValidator): unknown;
            fromPartial(object: Partial<_116.SimpleValidator>): _116.SimpleValidator;
            fromAmino(object: _116.SimpleValidatorAmino): _116.SimpleValidator;
            toAmino(message: _116.SimpleValidator): _116.SimpleValidatorAmino;
        };
        blockIDFlagFromJSON(object: any): _115.BlockIDFlag;
        blockIDFlagToJSON(object: _115.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _115.SignedMsgType;
        signedMsgTypeToJSON(object: _115.SignedMsgType): string;
        BlockIDFlag: typeof _115.BlockIDFlag;
        BlockIDFlagSDKType: typeof _115.BlockIDFlag;
        BlockIDFlagAmino: typeof _115.BlockIDFlag;
        SignedMsgType: typeof _115.SignedMsgType;
        SignedMsgTypeSDKType: typeof _115.SignedMsgType;
        SignedMsgTypeAmino: typeof _115.SignedMsgType;
        PartSetHeader: {
            encode(message: _115.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.PartSetHeader;
            fromJSON(object: any): _115.PartSetHeader;
            toJSON(message: _115.PartSetHeader): unknown;
            fromPartial(object: Partial<_115.PartSetHeader>): _115.PartSetHeader;
            fromAmino(object: _115.PartSetHeaderAmino): _115.PartSetHeader;
            toAmino(message: _115.PartSetHeader): _115.PartSetHeaderAmino;
        };
        Part: {
            encode(message: _115.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Part;
            fromJSON(object: any): _115.Part;
            toJSON(message: _115.Part): unknown;
            fromPartial(object: Partial<_115.Part>): _115.Part;
            fromAmino(object: _115.PartAmino): _115.Part;
            toAmino(message: _115.Part): _115.PartAmino;
        };
        BlockID: {
            encode(message: _115.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.BlockID;
            fromJSON(object: any): _115.BlockID;
            toJSON(message: _115.BlockID): unknown;
            fromPartial(object: Partial<_115.BlockID>): _115.BlockID;
            fromAmino(object: _115.BlockIDAmino): _115.BlockID;
            toAmino(message: _115.BlockID): _115.BlockIDAmino;
        };
        Header: {
            encode(message: _115.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Header;
            fromJSON(object: any): _115.Header;
            toJSON(message: _115.Header): unknown;
            fromPartial(object: Partial<_115.Header>): _115.Header;
            fromAmino(object: _115.HeaderAmino): _115.Header;
            toAmino(message: _115.Header): _115.HeaderAmino;
        };
        Data: {
            encode(message: _115.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Data;
            fromJSON(object: any): _115.Data;
            toJSON(message: _115.Data): unknown;
            fromPartial(object: Partial<_115.Data>): _115.Data;
            fromAmino(object: _115.DataAmino): _115.Data;
            toAmino(message: _115.Data): _115.DataAmino;
        };
        Vote: {
            encode(message: _115.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Vote;
            fromJSON(object: any): _115.Vote;
            toJSON(message: _115.Vote): unknown;
            fromPartial(object: Partial<_115.Vote>): _115.Vote;
            fromAmino(object: _115.VoteAmino): _115.Vote;
            toAmino(message: _115.Vote): _115.VoteAmino;
        };
        Commit: {
            encode(message: _115.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Commit;
            fromJSON(object: any): _115.Commit;
            toJSON(message: _115.Commit): unknown;
            fromPartial(object: Partial<_115.Commit>): _115.Commit;
            fromAmino(object: _115.CommitAmino): _115.Commit;
            toAmino(message: _115.Commit): _115.CommitAmino;
        };
        CommitSig: {
            encode(message: _115.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.CommitSig;
            fromJSON(object: any): _115.CommitSig;
            toJSON(message: _115.CommitSig): unknown;
            fromPartial(object: Partial<_115.CommitSig>): _115.CommitSig;
            fromAmino(object: _115.CommitSigAmino): _115.CommitSig;
            toAmino(message: _115.CommitSig): _115.CommitSigAmino;
        };
        Proposal: {
            encode(message: _115.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Proposal;
            fromJSON(object: any): _115.Proposal;
            toJSON(message: _115.Proposal): unknown;
            fromPartial(object: Partial<_115.Proposal>): _115.Proposal;
            fromAmino(object: _115.ProposalAmino): _115.Proposal;
            toAmino(message: _115.Proposal): _115.ProposalAmino;
        };
        SignedHeader: {
            encode(message: _115.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.SignedHeader;
            fromJSON(object: any): _115.SignedHeader;
            toJSON(message: _115.SignedHeader): unknown;
            fromPartial(object: Partial<_115.SignedHeader>): _115.SignedHeader;
            fromAmino(object: _115.SignedHeaderAmino): _115.SignedHeader;
            toAmino(message: _115.SignedHeader): _115.SignedHeaderAmino;
        };
        LightBlock: {
            encode(message: _115.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.LightBlock;
            fromJSON(object: any): _115.LightBlock;
            toJSON(message: _115.LightBlock): unknown;
            fromPartial(object: Partial<_115.LightBlock>): _115.LightBlock;
            fromAmino(object: _115.LightBlockAmino): _115.LightBlock;
            toAmino(message: _115.LightBlock): _115.LightBlockAmino;
        };
        BlockMeta: {
            encode(message: _115.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.BlockMeta;
            fromJSON(object: any): _115.BlockMeta;
            toJSON(message: _115.BlockMeta): unknown;
            fromPartial(object: Partial<_115.BlockMeta>): _115.BlockMeta;
            fromAmino(object: _115.BlockMetaAmino): _115.BlockMeta;
            toAmino(message: _115.BlockMeta): _115.BlockMetaAmino;
        };
        TxProof: {
            encode(message: _115.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.TxProof;
            fromJSON(object: any): _115.TxProof;
            toJSON(message: _115.TxProof): unknown;
            fromPartial(object: Partial<_115.TxProof>): _115.TxProof;
            fromAmino(object: _115.TxProofAmino): _115.TxProof;
            toAmino(message: _115.TxProof): _115.TxProofAmino;
        };
        ConsensusParams: {
            encode(message: _114.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.ConsensusParams;
            fromJSON(object: any): _114.ConsensusParams;
            toJSON(message: _114.ConsensusParams): unknown;
            fromPartial(object: Partial<_114.ConsensusParams>): _114.ConsensusParams;
            fromAmino(object: _114.ConsensusParamsAmino): _114.ConsensusParams;
            toAmino(message: _114.ConsensusParams): _114.ConsensusParamsAmino;
        };
        BlockParams: {
            encode(message: _114.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.BlockParams;
            fromJSON(object: any): _114.BlockParams;
            toJSON(message: _114.BlockParams): unknown;
            fromPartial(object: Partial<_114.BlockParams>): _114.BlockParams;
            fromAmino(object: _114.BlockParamsAmino): _114.BlockParams;
            toAmino(message: _114.BlockParams): _114.BlockParamsAmino;
        };
        EvidenceParams: {
            encode(message: _114.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.EvidenceParams;
            fromJSON(object: any): _114.EvidenceParams;
            toJSON(message: _114.EvidenceParams): unknown;
            fromPartial(object: Partial<_114.EvidenceParams>): _114.EvidenceParams;
            fromAmino(object: _114.EvidenceParamsAmino): _114.EvidenceParams;
            toAmino(message: _114.EvidenceParams): _114.EvidenceParamsAmino;
        };
        ValidatorParams: {
            encode(message: _114.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.ValidatorParams;
            fromJSON(object: any): _114.ValidatorParams;
            toJSON(message: _114.ValidatorParams): unknown;
            fromPartial(object: Partial<_114.ValidatorParams>): _114.ValidatorParams;
            fromAmino(object: _114.ValidatorParamsAmino): _114.ValidatorParams;
            toAmino(message: _114.ValidatorParams): _114.ValidatorParamsAmino;
        };
        VersionParams: {
            encode(message: _114.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.VersionParams;
            fromJSON(object: any): _114.VersionParams;
            toJSON(message: _114.VersionParams): unknown;
            fromPartial(object: Partial<_114.VersionParams>): _114.VersionParams;
            fromAmino(object: _114.VersionParamsAmino): _114.VersionParams;
            toAmino(message: _114.VersionParams): _114.VersionParamsAmino;
        };
        HashedParams: {
            encode(message: _114.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.HashedParams;
            fromJSON(object: any): _114.HashedParams;
            toJSON(message: _114.HashedParams): unknown;
            fromPartial(object: Partial<_114.HashedParams>): _114.HashedParams;
            fromAmino(object: _114.HashedParamsAmino): _114.HashedParams;
            toAmino(message: _114.HashedParams): _114.HashedParamsAmino;
        };
        Evidence: {
            encode(message: _113.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Evidence;
            fromJSON(object: any): _113.Evidence;
            toJSON(message: _113.Evidence): unknown;
            fromPartial(object: Partial<_113.Evidence>): _113.Evidence;
            fromAmino(object: _113.EvidenceAmino): _113.Evidence;
            toAmino(message: _113.Evidence): _113.EvidenceAmino;
        };
        DuplicateVoteEvidence: {
            encode(message: _113.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.DuplicateVoteEvidence;
            fromJSON(object: any): _113.DuplicateVoteEvidence;
            toJSON(message: _113.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_113.DuplicateVoteEvidence>): _113.DuplicateVoteEvidence;
            fromAmino(object: _113.DuplicateVoteEvidenceAmino): _113.DuplicateVoteEvidence;
            toAmino(message: _113.DuplicateVoteEvidence): _113.DuplicateVoteEvidenceAmino;
        };
        LightClientAttackEvidence: {
            encode(message: _113.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.LightClientAttackEvidence;
            fromJSON(object: any): _113.LightClientAttackEvidence;
            toJSON(message: _113.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_113.LightClientAttackEvidence>): _113.LightClientAttackEvidence;
            fromAmino(object: _113.LightClientAttackEvidenceAmino): _113.LightClientAttackEvidence;
            toAmino(message: _113.LightClientAttackEvidence): _113.LightClientAttackEvidenceAmino;
        };
        EvidenceList: {
            encode(message: _113.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.EvidenceList;
            fromJSON(object: any): _113.EvidenceList;
            toJSON(message: _113.EvidenceList): unknown;
            fromPartial(object: Partial<_113.EvidenceList>): _113.EvidenceList;
            fromAmino(object: _113.EvidenceListAmino): _113.EvidenceList;
            toAmino(message: _113.EvidenceList): _113.EvidenceListAmino;
        };
        Block: {
            encode(message: _112.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Block;
            fromJSON(object: any): _112.Block;
            toJSON(message: _112.Block): unknown;
            fromPartial(object: Partial<_112.Block>): _112.Block;
            fromAmino(object: _112.BlockAmino): _112.Block;
            toAmino(message: _112.Block): _112.BlockAmino;
        };
    };
    const version: {
        App: {
            encode(message: _117.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.App;
            fromJSON(object: any): _117.App;
            toJSON(message: _117.App): unknown;
            fromPartial(object: Partial<_117.App>): _117.App;
            fromAmino(object: _117.AppAmino): _117.App;
            toAmino(message: _117.App): _117.AppAmino;
        };
        Consensus: {
            encode(message: _117.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Consensus;
            fromJSON(object: any): _117.Consensus;
            toJSON(message: _117.Consensus): unknown;
            fromPartial(object: Partial<_117.Consensus>): _117.Consensus;
            fromAmino(object: _117.ConsensusAmino): _117.Consensus;
            toAmino(message: _117.Consensus): _117.ConsensusAmino;
        };
    };
}
