import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { SendAuthorization } from "../../bank/v1beta1/authz";
import { StakeAuthorization } from "../../staking/v1beta1/authz";
import * as _m0 from "protobufjs/minimal";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
    $typeUrl?: string;
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg: string;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationAmino {
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg: string;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationSDKType {
    $typeUrl?: string;
    msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
    authorization?: (GenericAuthorization & SendAuthorization & StakeAuthorization & Any) | undefined;
    /**
     * time when the grant will expire and will be pruned. If null, then the grant
     * doesn't have a time expiration (other conditions  in `authorization`
     * may apply to invalidate the grant)
     */
    expiration?: Timestamp;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantAmino {
    authorization?: AnyAmino;
    /**
     * time when the grant will expire and will be pruned. If null, then the grant
     * doesn't have a time expiration (other conditions  in `authorization`
     * may apply to invalidate the grant)
     */
    expiration?: TimestampAmino;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantSDKType {
    authorization?: AnySDKType;
    expiration?: TimestampSDKType;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorization {
    granter: string;
    grantee: string;
    authorization?: (GenericAuthorization & SendAuthorization & StakeAuthorization & Any) | undefined;
    expiration?: Timestamp;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorizationAmino {
    granter: string;
    grantee: string;
    authorization?: AnyAmino;
    expiration?: TimestampAmino;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorizationSDKType {
    granter: string;
    grantee: string;
    authorization?: AnySDKType;
    expiration?: TimestampSDKType;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItem {
    /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
    msgTypeUrls: string[];
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItemAmino {
    /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
    msg_type_urls: string[];
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItemSDKType {
    msg_type_urls: string[];
}
export declare const GenericAuthorization: {
    encode(message: GenericAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenericAuthorization;
    fromJSON(object: any): GenericAuthorization;
    toJSON(message: GenericAuthorization): unknown;
    fromPartial(object: Partial<GenericAuthorization>): GenericAuthorization;
    fromAmino(object: GenericAuthorizationAmino): GenericAuthorization;
    toAmino(message: GenericAuthorization): GenericAuthorizationAmino;
};
export declare const Grant: {
    encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Grant;
    fromJSON(object: any): Grant;
    toJSON(message: Grant): unknown;
    fromPartial(object: Partial<Grant>): Grant;
    fromAmino(object: GrantAmino): Grant;
    toAmino(message: Grant): GrantAmino;
};
export declare const GrantAuthorization: {
    encode(message: GrantAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrantAuthorization;
    fromJSON(object: any): GrantAuthorization;
    toJSON(message: GrantAuthorization): unknown;
    fromPartial(object: Partial<GrantAuthorization>): GrantAuthorization;
    fromAmino(object: GrantAuthorizationAmino): GrantAuthorization;
    toAmino(message: GrantAuthorization): GrantAuthorizationAmino;
};
export declare const GrantQueueItem: {
    encode(message: GrantQueueItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrantQueueItem;
    fromJSON(object: any): GrantQueueItem;
    toJSON(message: GrantQueueItem): unknown;
    fromPartial(object: Partial<GrantQueueItem>): GrantQueueItem;
    fromAmino(object: GrantQueueItemAmino): GrantQueueItem;
    toAmino(message: GrantQueueItem): GrantQueueItemAmino;
};
export declare const Authorization_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => GenericAuthorization | SendAuthorization | StakeAuthorization | Any;
export declare const Authorization_FromAmino: (content: AnyAmino) => Any;
export declare const Authorization_ToAmino: (content: Any) => AnyAmino | {
    type: string;
    value: GenericAuthorizationAmino;
} | {
    type: string;
    value: import("../../bank/v1beta1/authz").SendAuthorizationAmino;
} | {
    type: string;
    value: import("../../staking/v1beta1/authz").StakeAuthorizationAmino;
};
