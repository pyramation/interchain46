import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAmino, GrantSDKType } from "./feegrant";
import * as _m0 from "protobufjs/minimal";
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequest {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequestAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequestSDKType {
    granter: string;
    grantee: string;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponse {
    /** allowance is a allowance granted for grantee by granter. */
    allowance?: Grant;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponseAmino {
    /** allowance is a allowance granted for grantee by granter. */
    allowance?: GrantAmino;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponseSDKType {
    allowance?: GrantSDKType;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequest {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequestAmino {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequestSDKType {
    grantee: string;
    pagination?: PageRequestSDKType;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponse {
    /** allowances are allowance's granted for grantee by granter. */
    allowances: Grant[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponseAmino {
    /** allowances are allowance's granted for grantee by granter. */
    allowances: GrantAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponseSDKType {
    allowances: GrantSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAllowancesByGranterRequest {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAllowancesByGranterRequestAmino {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAllowancesByGranterRequestSDKType {
    granter: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAllowancesByGranterResponse {
    /** allowances that have been issued by the granter. */
    allowances: Grant[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/**
 * QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAllowancesByGranterResponseAmino {
    /** allowances that have been issued by the granter. */
    allowances: GrantAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
/**
 * QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAllowancesByGranterResponseSDKType {
    allowances: GrantSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryAllowanceRequest: {
    encode(message: QueryAllowanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceRequest;
    fromJSON(object: any): QueryAllowanceRequest;
    toJSON(message: QueryAllowanceRequest): unknown;
    fromPartial(object: Partial<QueryAllowanceRequest>): QueryAllowanceRequest;
    fromAmino(object: QueryAllowanceRequestAmino): QueryAllowanceRequest;
    toAmino(message: QueryAllowanceRequest): QueryAllowanceRequestAmino;
};
export declare const QueryAllowanceResponse: {
    encode(message: QueryAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceResponse;
    fromJSON(object: any): QueryAllowanceResponse;
    toJSON(message: QueryAllowanceResponse): unknown;
    fromPartial(object: Partial<QueryAllowanceResponse>): QueryAllowanceResponse;
    fromAmino(object: QueryAllowanceResponseAmino): QueryAllowanceResponse;
    toAmino(message: QueryAllowanceResponse): QueryAllowanceResponseAmino;
};
export declare const QueryAllowancesRequest: {
    encode(message: QueryAllowancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesRequest;
    fromJSON(object: any): QueryAllowancesRequest;
    toJSON(message: QueryAllowancesRequest): unknown;
    fromPartial(object: Partial<QueryAllowancesRequest>): QueryAllowancesRequest;
    fromAmino(object: QueryAllowancesRequestAmino): QueryAllowancesRequest;
    toAmino(message: QueryAllowancesRequest): QueryAllowancesRequestAmino;
};
export declare const QueryAllowancesResponse: {
    encode(message: QueryAllowancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesResponse;
    fromJSON(object: any): QueryAllowancesResponse;
    toJSON(message: QueryAllowancesResponse): unknown;
    fromPartial(object: Partial<QueryAllowancesResponse>): QueryAllowancesResponse;
    fromAmino(object: QueryAllowancesResponseAmino): QueryAllowancesResponse;
    toAmino(message: QueryAllowancesResponse): QueryAllowancesResponseAmino;
};
export declare const QueryAllowancesByGranterRequest: {
    encode(message: QueryAllowancesByGranterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesByGranterRequest;
    fromJSON(object: any): QueryAllowancesByGranterRequest;
    toJSON(message: QueryAllowancesByGranterRequest): unknown;
    fromPartial(object: Partial<QueryAllowancesByGranterRequest>): QueryAllowancesByGranterRequest;
    fromAmino(object: QueryAllowancesByGranterRequestAmino): QueryAllowancesByGranterRequest;
    toAmino(message: QueryAllowancesByGranterRequest): QueryAllowancesByGranterRequestAmino;
};
export declare const QueryAllowancesByGranterResponse: {
    encode(message: QueryAllowancesByGranterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesByGranterResponse;
    fromJSON(object: any): QueryAllowancesByGranterResponse;
    toJSON(message: QueryAllowancesByGranterResponse): unknown;
    fromPartial(object: Partial<QueryAllowancesByGranterResponse>): QueryAllowancesByGranterResponse;
    fromAmino(object: QueryAllowancesByGranterResponseAmino): QueryAllowancesByGranterResponse;
    toAmino(message: QueryAllowancesByGranterResponse): QueryAllowancesByGranterResponseAmino;
};
