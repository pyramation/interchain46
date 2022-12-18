import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDAmino, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block as Block1 } from "../../../../tendermint/types/block";
import { BlockAmino as Block1Amino } from "../../../../tendermint/types/block";
import { BlockSDKType as Block1SDKType } from "../../../../tendermint/types/block";
import { Block as Block2 } from "./types";
import { BlockAmino as Block2Amino } from "./types";
import { BlockSDKType as Block2SDKType } from "./types";
import { DefaultNodeInfo, DefaultNodeInfoAmino, DefaultNodeInfoSDKType } from "../../../../tendermint/p2p/types";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * GetValidatorSetByHeightRequest is the request type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetValidatorSetByHeightRequest {
    height: Long;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/**
 * GetValidatorSetByHeightRequest is the request type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetValidatorSetByHeightRequestAmino {
    height: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * GetValidatorSetByHeightRequest is the request type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetValidatorSetByHeightRequestSDKType {
    height: Long;
    pagination?: PageRequestSDKType;
}
/**
 * GetValidatorSetByHeightResponse is the response type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetValidatorSetByHeightResponse {
    blockHeight: Long;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/**
 * GetValidatorSetByHeightResponse is the response type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetValidatorSetByHeightResponseAmino {
    block_height: string;
    validators: ValidatorAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
/**
 * GetValidatorSetByHeightResponse is the response type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetValidatorSetByHeightResponseSDKType {
    block_height: Long;
    validators: ValidatorSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * GetLatestValidatorSetRequest is the request type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetLatestValidatorSetRequest {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/**
 * GetLatestValidatorSetRequest is the request type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetLatestValidatorSetRequestAmino {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * GetLatestValidatorSetRequest is the request type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetLatestValidatorSetRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * GetLatestValidatorSetResponse is the response type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetLatestValidatorSetResponse {
    blockHeight: Long;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/**
 * GetLatestValidatorSetResponse is the response type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetLatestValidatorSetResponseAmino {
    block_height: string;
    validators: ValidatorAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
/**
 * GetLatestValidatorSetResponse is the response type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetLatestValidatorSetResponseSDKType {
    block_height: Long;
    validators: ValidatorSDKType[];
    pagination?: PageResponseSDKType;
}
/** Validator is the type for the validator-set. */
export interface Validator {
    address: string;
    pubKey?: Any;
    votingPower: Long;
    proposerPriority: Long;
}
/** Validator is the type for the validator-set. */
export interface ValidatorAmino {
    address: string;
    pub_key?: AnyAmino;
    voting_power: string;
    proposer_priority: string;
}
/** Validator is the type for the validator-set. */
export interface ValidatorSDKType {
    address: string;
    pub_key?: AnySDKType;
    voting_power: Long;
    proposer_priority: Long;
}
/**
 * GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight
 * RPC method.
 */
export interface GetBlockByHeightRequest {
    height: Long;
}
/**
 * GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight
 * RPC method.
 */
export interface GetBlockByHeightRequestAmino {
    height: string;
}
/**
 * GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight
 * RPC method.
 */
export interface GetBlockByHeightRequestSDKType {
    height: Long;
}
/**
 * GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight
 * RPC method.
 */
export interface GetBlockByHeightResponse {
    blockId?: BlockID;
    /** Deprecated: please use `sdk_block` instead */
    block?: Block1;
    /** Since: cosmos-sdk 0.47 */
    sdkBlock?: Block2;
}
/**
 * GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight
 * RPC method.
 */
export interface GetBlockByHeightResponseAmino {
    block_id?: BlockIDAmino;
    /** Deprecated: please use `sdk_block` instead */
    block?: Block1Amino;
    /** Since: cosmos-sdk 0.47 */
    sdk_block?: Block2Amino;
}
/**
 * GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight
 * RPC method.
 */
export interface GetBlockByHeightResponseSDKType {
    block_id?: BlockIDSDKType;
    block?: Block1SDKType;
    sdk_block?: Block2SDKType;
}
/**
 * GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC
 * method.
 */
export interface GetLatestBlockRequest {
}
/**
 * GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC
 * method.
 */
export interface GetLatestBlockRequestAmino {
}
/**
 * GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC
 * method.
 */
export interface GetLatestBlockRequestSDKType {
}
/**
 * GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC
 * method.
 */
export interface GetLatestBlockResponse {
    blockId?: BlockID;
    /** Deprecated: please use `sdk_block` instead */
    block?: Block1;
    /** Since: cosmos-sdk 0.47 */
    sdkBlock?: Block2;
}
/**
 * GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC
 * method.
 */
export interface GetLatestBlockResponseAmino {
    block_id?: BlockIDAmino;
    /** Deprecated: please use `sdk_block` instead */
    block?: Block1Amino;
    /** Since: cosmos-sdk 0.47 */
    sdk_block?: Block2Amino;
}
/**
 * GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC
 * method.
 */
export interface GetLatestBlockResponseSDKType {
    block_id?: BlockIDSDKType;
    block?: Block1SDKType;
    sdk_block?: Block2SDKType;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequestAmino {
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequestSDKType {
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
    syncing: boolean;
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponseAmino {
    syncing: boolean;
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponseSDKType {
    syncing: boolean;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequestAmino {
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequestSDKType {
}
/**
 * GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC
 * method.
 */
export interface GetNodeInfoResponse {
    defaultNodeInfo?: DefaultNodeInfo;
    applicationVersion?: VersionInfo;
}
/**
 * GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC
 * method.
 */
export interface GetNodeInfoResponseAmino {
    default_node_info?: DefaultNodeInfoAmino;
    application_version?: VersionInfoAmino;
}
/**
 * GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC
 * method.
 */
export interface GetNodeInfoResponseSDKType {
    default_node_info?: DefaultNodeInfoSDKType;
    application_version?: VersionInfoSDKType;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
    name: string;
    appName: string;
    version: string;
    gitCommit: string;
    buildTags: string;
    goVersion: string;
    buildDeps: Module[];
    /** Since: cosmos-sdk 0.43 */
    cosmosSdkVersion: string;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfoAmino {
    name: string;
    app_name: string;
    version: string;
    git_commit: string;
    build_tags: string;
    go_version: string;
    build_deps: ModuleAmino[];
    /** Since: cosmos-sdk 0.43 */
    cosmos_sdk_version: string;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfoSDKType {
    name: string;
    app_name: string;
    version: string;
    git_commit: string;
    build_tags: string;
    go_version: string;
    build_deps: ModuleSDKType[];
    cosmos_sdk_version: string;
}
/** Module is the type for VersionInfo */
export interface Module {
    /** module path */
    path: string;
    /** module version */
    version: string;
    /** checksum */
    sum: string;
}
/** Module is the type for VersionInfo */
export interface ModuleAmino {
    /** module path */
    path: string;
    /** module version */
    version: string;
    /** checksum */
    sum: string;
}
/** Module is the type for VersionInfo */
export interface ModuleSDKType {
    path: string;
    version: string;
    sum: string;
}
/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */
export interface ABCIQueryRequest {
    data: Uint8Array;
    path: string;
    height: Long;
    prove: boolean;
}
/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */
export interface ABCIQueryRequestAmino {
    data: Uint8Array;
    path: string;
    height: string;
    prove: boolean;
}
/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */
export interface ABCIQueryRequestSDKType {
    data: Uint8Array;
    path: string;
    height: Long;
    prove: boolean;
}
/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC
 * query.
 *
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */
export interface ABCIQueryResponse {
    code: number;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    index: Long;
    key: Uint8Array;
    value: Uint8Array;
    proofOps?: ProofOps;
    height: Long;
    codespace: string;
}
/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC
 * query.
 *
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */
export interface ABCIQueryResponseAmino {
    code: number;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    index: string;
    key: Uint8Array;
    value: Uint8Array;
    proof_ops?: ProofOpsAmino;
    height: string;
    codespace: string;
}
/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC
 * query.
 *
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */
export interface ABCIQueryResponseSDKType {
    code: number;
    log: string;
    info: string;
    index: Long;
    key: Uint8Array;
    value: Uint8Array;
    proof_ops?: ProofOpsSDKType;
    height: Long;
    codespace: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing nessecary data for example neighbouring node
 * hash.
 *
 * Note: This type is a duplicate of the ProofOp proto type defined in
 * Tendermint.
 */
export interface ProofOp {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing nessecary data for example neighbouring node
 * hash.
 *
 * Note: This type is a duplicate of the ProofOp proto type defined in
 * Tendermint.
 */
export interface ProofOpAmino {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing nessecary data for example neighbouring node
 * hash.
 *
 * Note: This type is a duplicate of the ProofOp proto type defined in
 * Tendermint.
 */
export interface ProofOpSDKType {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 *
 * Note: This type is a duplicate of the ProofOps proto type defined in
 * Tendermint.
 */
export interface ProofOps {
    ops: ProofOp[];
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 *
 * Note: This type is a duplicate of the ProofOps proto type defined in
 * Tendermint.
 */
export interface ProofOpsAmino {
    ops: ProofOpAmino[];
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 *
 * Note: This type is a duplicate of the ProofOps proto type defined in
 * Tendermint.
 */
export interface ProofOpsSDKType {
    ops: ProofOpSDKType[];
}
export declare const GetValidatorSetByHeightRequest: {
    encode(message: GetValidatorSetByHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorSetByHeightRequest;
    fromJSON(object: any): GetValidatorSetByHeightRequest;
    toJSON(message: GetValidatorSetByHeightRequest): unknown;
    fromPartial(object: Partial<GetValidatorSetByHeightRequest>): GetValidatorSetByHeightRequest;
    fromAmino(object: GetValidatorSetByHeightRequestAmino): GetValidatorSetByHeightRequest;
    toAmino(message: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequestAmino;
};
export declare const GetValidatorSetByHeightResponse: {
    encode(message: GetValidatorSetByHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorSetByHeightResponse;
    fromJSON(object: any): GetValidatorSetByHeightResponse;
    toJSON(message: GetValidatorSetByHeightResponse): unknown;
    fromPartial(object: Partial<GetValidatorSetByHeightResponse>): GetValidatorSetByHeightResponse;
    fromAmino(object: GetValidatorSetByHeightResponseAmino): GetValidatorSetByHeightResponse;
    toAmino(message: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponseAmino;
};
export declare const GetLatestValidatorSetRequest: {
    encode(message: GetLatestValidatorSetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestValidatorSetRequest;
    fromJSON(object: any): GetLatestValidatorSetRequest;
    toJSON(message: GetLatestValidatorSetRequest): unknown;
    fromPartial(object: Partial<GetLatestValidatorSetRequest>): GetLatestValidatorSetRequest;
    fromAmino(object: GetLatestValidatorSetRequestAmino): GetLatestValidatorSetRequest;
    toAmino(message: GetLatestValidatorSetRequest): GetLatestValidatorSetRequestAmino;
};
export declare const GetLatestValidatorSetResponse: {
    encode(message: GetLatestValidatorSetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestValidatorSetResponse;
    fromJSON(object: any): GetLatestValidatorSetResponse;
    toJSON(message: GetLatestValidatorSetResponse): unknown;
    fromPartial(object: Partial<GetLatestValidatorSetResponse>): GetLatestValidatorSetResponse;
    fromAmino(object: GetLatestValidatorSetResponseAmino): GetLatestValidatorSetResponse;
    toAmino(message: GetLatestValidatorSetResponse): GetLatestValidatorSetResponseAmino;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial(object: Partial<Validator>): Validator;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
};
export declare const GetBlockByHeightRequest: {
    encode(message: GetBlockByHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockByHeightRequest;
    fromJSON(object: any): GetBlockByHeightRequest;
    toJSON(message: GetBlockByHeightRequest): unknown;
    fromPartial(object: Partial<GetBlockByHeightRequest>): GetBlockByHeightRequest;
    fromAmino(object: GetBlockByHeightRequestAmino): GetBlockByHeightRequest;
    toAmino(message: GetBlockByHeightRequest): GetBlockByHeightRequestAmino;
};
export declare const GetBlockByHeightResponse: {
    encode(message: GetBlockByHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockByHeightResponse;
    fromJSON(object: any): GetBlockByHeightResponse;
    toJSON(message: GetBlockByHeightResponse): unknown;
    fromPartial(object: Partial<GetBlockByHeightResponse>): GetBlockByHeightResponse;
    fromAmino(object: GetBlockByHeightResponseAmino): GetBlockByHeightResponse;
    toAmino(message: GetBlockByHeightResponse): GetBlockByHeightResponseAmino;
};
export declare const GetLatestBlockRequest: {
    encode(_: GetLatestBlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestBlockRequest;
    fromJSON(_: any): GetLatestBlockRequest;
    toJSON(_: GetLatestBlockRequest): unknown;
    fromPartial(_: Partial<GetLatestBlockRequest>): GetLatestBlockRequest;
    fromAmino(_: GetLatestBlockRequestAmino): GetLatestBlockRequest;
    toAmino(_: GetLatestBlockRequest): GetLatestBlockRequestAmino;
};
export declare const GetLatestBlockResponse: {
    encode(message: GetLatestBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestBlockResponse;
    fromJSON(object: any): GetLatestBlockResponse;
    toJSON(message: GetLatestBlockResponse): unknown;
    fromPartial(object: Partial<GetLatestBlockResponse>): GetLatestBlockResponse;
    fromAmino(object: GetLatestBlockResponseAmino): GetLatestBlockResponse;
    toAmino(message: GetLatestBlockResponse): GetLatestBlockResponseAmino;
};
export declare const GetSyncingRequest: {
    encode(_: GetSyncingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingRequest;
    fromJSON(_: any): GetSyncingRequest;
    toJSON(_: GetSyncingRequest): unknown;
    fromPartial(_: Partial<GetSyncingRequest>): GetSyncingRequest;
    fromAmino(_: GetSyncingRequestAmino): GetSyncingRequest;
    toAmino(_: GetSyncingRequest): GetSyncingRequestAmino;
};
export declare const GetSyncingResponse: {
    encode(message: GetSyncingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingResponse;
    fromJSON(object: any): GetSyncingResponse;
    toJSON(message: GetSyncingResponse): unknown;
    fromPartial(object: Partial<GetSyncingResponse>): GetSyncingResponse;
    fromAmino(object: GetSyncingResponseAmino): GetSyncingResponse;
    toAmino(message: GetSyncingResponse): GetSyncingResponseAmino;
};
export declare const GetNodeInfoRequest: {
    encode(_: GetNodeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoRequest;
    fromJSON(_: any): GetNodeInfoRequest;
    toJSON(_: GetNodeInfoRequest): unknown;
    fromPartial(_: Partial<GetNodeInfoRequest>): GetNodeInfoRequest;
    fromAmino(_: GetNodeInfoRequestAmino): GetNodeInfoRequest;
    toAmino(_: GetNodeInfoRequest): GetNodeInfoRequestAmino;
};
export declare const GetNodeInfoResponse: {
    encode(message: GetNodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoResponse;
    fromJSON(object: any): GetNodeInfoResponse;
    toJSON(message: GetNodeInfoResponse): unknown;
    fromPartial(object: Partial<GetNodeInfoResponse>): GetNodeInfoResponse;
    fromAmino(object: GetNodeInfoResponseAmino): GetNodeInfoResponse;
    toAmino(message: GetNodeInfoResponse): GetNodeInfoResponseAmino;
};
export declare const VersionInfo: {
    encode(message: VersionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VersionInfo;
    fromJSON(object: any): VersionInfo;
    toJSON(message: VersionInfo): unknown;
    fromPartial(object: Partial<VersionInfo>): VersionInfo;
    fromAmino(object: VersionInfoAmino): VersionInfo;
    toAmino(message: VersionInfo): VersionInfoAmino;
};
export declare const Module: {
    encode(message: Module, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Module;
    fromJSON(object: any): Module;
    toJSON(message: Module): unknown;
    fromPartial(object: Partial<Module>): Module;
    fromAmino(object: ModuleAmino): Module;
    toAmino(message: Module): ModuleAmino;
};
export declare const ABCIQueryRequest: {
    encode(message: ABCIQueryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIQueryRequest;
    fromJSON(object: any): ABCIQueryRequest;
    toJSON(message: ABCIQueryRequest): unknown;
    fromPartial(object: Partial<ABCIQueryRequest>): ABCIQueryRequest;
    fromAmino(object: ABCIQueryRequestAmino): ABCIQueryRequest;
    toAmino(message: ABCIQueryRequest): ABCIQueryRequestAmino;
};
export declare const ABCIQueryResponse: {
    encode(message: ABCIQueryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIQueryResponse;
    fromJSON(object: any): ABCIQueryResponse;
    toJSON(message: ABCIQueryResponse): unknown;
    fromPartial(object: Partial<ABCIQueryResponse>): ABCIQueryResponse;
    fromAmino(object: ABCIQueryResponseAmino): ABCIQueryResponse;
    toAmino(message: ABCIQueryResponse): ABCIQueryResponseAmino;
};
export declare const ProofOp: {
    encode(message: ProofOp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProofOp;
    fromJSON(object: any): ProofOp;
    toJSON(message: ProofOp): unknown;
    fromPartial(object: Partial<ProofOp>): ProofOp;
    fromAmino(object: ProofOpAmino): ProofOp;
    toAmino(message: ProofOp): ProofOpAmino;
};
export declare const ProofOps: {
    encode(message: ProofOps, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProofOps;
    fromJSON(object: any): ProofOps;
    toJSON(message: ProofOps): unknown;
    fromPartial(object: Partial<ProofOps>): ProofOps;
    fromAmino(object: ProofOpsAmino): ProofOps;
    toAmino(message: ProofOps): ProofOpsAmino;
};
