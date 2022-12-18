import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAmino, GrantSDKType, GrantAuthorization, GrantAuthorizationAmino, GrantAuthorizationSDKType } from "./authz";
import * as _m0 from "protobufjs/minimal";
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequest {
    granter: string;
    grantee: string;
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msgTypeUrl: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequestAmino {
    granter: string;
    grantee: string;
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msg_type_url: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequestSDKType {
    granter: string;
    grantee: string;
    msg_type_url: string;
    pagination?: PageRequestSDKType;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponse {
    /** authorizations is a list of grants granted for grantee by granter. */
    grants: Grant[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponseAmino {
    /** authorizations is a list of grants granted for grantee by granter. */
    grants: GrantAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponseSDKType {
    grants: GrantSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequest {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequestAmino {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequestSDKType {
    granter: string;
    pagination?: PageRequestSDKType;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponse {
    /** grants is a list of grants granted by the granter. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponseAmino {
    /** grants is a list of grants granted by the granter. */
    grants: GrantAuthorizationAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponseSDKType {
    grants: GrantAuthorizationSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequest {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequestAmino {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequestSDKType {
    grantee: string;
    pagination?: PageRequestSDKType;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponse {
    /** grants is a list of grants granted to the grantee. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponseAmino {
    /** grants is a list of grants granted to the grantee. */
    grants: GrantAuthorizationAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponseSDKType {
    grants: GrantAuthorizationSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryGrantsRequest: {
    encode(message: QueryGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsRequest;
    fromJSON(object: any): QueryGrantsRequest;
    toJSON(message: QueryGrantsRequest): unknown;
    fromPartial(object: Partial<QueryGrantsRequest>): QueryGrantsRequest;
    fromAmino(object: QueryGrantsRequestAmino): QueryGrantsRequest;
    toAmino(message: QueryGrantsRequest): QueryGrantsRequestAmino;
};
export declare const QueryGrantsResponse: {
    encode(message: QueryGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsResponse;
    fromJSON(object: any): QueryGrantsResponse;
    toJSON(message: QueryGrantsResponse): unknown;
    fromPartial(object: Partial<QueryGrantsResponse>): QueryGrantsResponse;
    fromAmino(object: QueryGrantsResponseAmino): QueryGrantsResponse;
    toAmino(message: QueryGrantsResponse): QueryGrantsResponseAmino;
};
export declare const QueryGranterGrantsRequest: {
    encode(message: QueryGranterGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranterGrantsRequest;
    fromJSON(object: any): QueryGranterGrantsRequest;
    toJSON(message: QueryGranterGrantsRequest): unknown;
    fromPartial(object: Partial<QueryGranterGrantsRequest>): QueryGranterGrantsRequest;
    fromAmino(object: QueryGranterGrantsRequestAmino): QueryGranterGrantsRequest;
    toAmino(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestAmino;
};
export declare const QueryGranterGrantsResponse: {
    encode(message: QueryGranterGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranterGrantsResponse;
    fromJSON(object: any): QueryGranterGrantsResponse;
    toJSON(message: QueryGranterGrantsResponse): unknown;
    fromPartial(object: Partial<QueryGranterGrantsResponse>): QueryGranterGrantsResponse;
    fromAmino(object: QueryGranterGrantsResponseAmino): QueryGranterGrantsResponse;
    toAmino(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseAmino;
};
export declare const QueryGranteeGrantsRequest: {
    encode(message: QueryGranteeGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranteeGrantsRequest;
    fromJSON(object: any): QueryGranteeGrantsRequest;
    toJSON(message: QueryGranteeGrantsRequest): unknown;
    fromPartial(object: Partial<QueryGranteeGrantsRequest>): QueryGranteeGrantsRequest;
    fromAmino(object: QueryGranteeGrantsRequestAmino): QueryGranteeGrantsRequest;
    toAmino(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestAmino;
};
export declare const QueryGranteeGrantsResponse: {
    encode(message: QueryGranteeGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranteeGrantsResponse;
    fromJSON(object: any): QueryGranteeGrantsResponse;
    toJSON(message: QueryGranteeGrantsResponse): unknown;
    fromPartial(object: Partial<QueryGranteeGrantsResponse>): QueryGranteeGrantsResponse;
    fromAmino(object: QueryGranteeGrantsResponseAmino): QueryGranteeGrantsResponse;
    toAmino(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseAmino;
};
