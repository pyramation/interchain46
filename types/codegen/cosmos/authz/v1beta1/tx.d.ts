import { Grant, GrantAmino, GrantSDKType, GenericAuthorization } from "./authz";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { SendAuthorization } from "../../bank/v1beta1/authz";
import { StakeAuthorization } from "../../staking/v1beta1/authz";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrant {
    granter: string;
    grantee: string;
    grant?: Grant;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrantAmino {
    granter: string;
    grantee: string;
    grant?: GrantAmino;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrantSDKType {
    granter: string;
    grantee: string;
    grant?: GrantSDKType;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponse {
    results: Uint8Array[];
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponseAmino {
    results: Uint8Array[];
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponseSDKType {
    results: Uint8Array[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExec {
    grantee: string;
    /**
     * Authorization Msg requests to execute. Each msg must implement Authorization interface
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs: (GenericAuthorization & SendAuthorization & StakeAuthorization & Any)[] | Any[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecAmino {
    grantee: string;
    /**
     * Authorization Msg requests to execute. Each msg must implement Authorization interface
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs: AnyAmino[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecSDKType {
    grantee: string;
    msgs: AnySDKType[];
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponse {
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponseAmino {
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponseSDKType {
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevoke {
    granter: string;
    grantee: string;
    msgTypeUrl: string;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeAmino {
    granter: string;
    grantee: string;
    msg_type_url: string;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeSDKType {
    granter: string;
    grantee: string;
    msg_type_url: string;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponse {
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponseAmino {
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponseSDKType {
}
export declare const MsgGrant: {
    encode(message: MsgGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrant;
    fromJSON(object: any): MsgGrant;
    toJSON(message: MsgGrant): unknown;
    fromPartial(object: Partial<MsgGrant>): MsgGrant;
    fromAmino(object: MsgGrantAmino): MsgGrant;
    toAmino(message: MsgGrant): MsgGrantAmino;
};
export declare const MsgExecResponse: {
    encode(message: MsgExecResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse;
    fromJSON(object: any): MsgExecResponse;
    toJSON(message: MsgExecResponse): unknown;
    fromPartial(object: Partial<MsgExecResponse>): MsgExecResponse;
    fromAmino(object: MsgExecResponseAmino): MsgExecResponse;
    toAmino(message: MsgExecResponse): MsgExecResponseAmino;
};
export declare const MsgExec: {
    encode(message: MsgExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec;
    fromJSON(object: any): MsgExec;
    toJSON(message: MsgExec): unknown;
    fromPartial(object: Partial<MsgExec>): MsgExec;
    fromAmino(object: MsgExecAmino): MsgExec;
    toAmino(message: MsgExec): MsgExecAmino;
};
export declare const MsgGrantResponse: {
    encode(_: MsgGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantResponse;
    fromJSON(_: any): MsgGrantResponse;
    toJSON(_: MsgGrantResponse): unknown;
    fromPartial(_: Partial<MsgGrantResponse>): MsgGrantResponse;
    fromAmino(_: MsgGrantResponseAmino): MsgGrantResponse;
    toAmino(_: MsgGrantResponse): MsgGrantResponseAmino;
};
export declare const MsgRevoke: {
    encode(message: MsgRevoke, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevoke;
    fromJSON(object: any): MsgRevoke;
    toJSON(message: MsgRevoke): unknown;
    fromPartial(object: Partial<MsgRevoke>): MsgRevoke;
    fromAmino(object: MsgRevokeAmino): MsgRevoke;
    toAmino(message: MsgRevoke): MsgRevokeAmino;
};
export declare const MsgRevokeResponse: {
    encode(_: MsgRevokeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeResponse;
    fromJSON(_: any): MsgRevokeResponse;
    toJSON(_: MsgRevokeResponse): unknown;
    fromPartial(_: Partial<MsgRevokeResponse>): MsgRevokeResponse;
    fromAmino(_: MsgRevokeResponseAmino): MsgRevokeResponse;
    toAmino(_: MsgRevokeResponse): MsgRevokeResponseAmino;
};
export declare const Authorization_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => GenericAuthorization | SendAuthorization | StakeAuthorization | Any;
export declare const Authorization_FromAmino: (content: AnyAmino) => Any;
export declare const Authorization_ToAmino: (content: Any) => AnyAmino | {
    type: string;
    value: import("./authz").GenericAuthorizationAmino;
} | {
    type: string;
    value: import("../../bank/v1beta1/authz").SendAuthorizationAmino;
} | {
    type: string;
    value: import("../../staking/v1beta1/authz").StakeAuthorizationAmino;
};
