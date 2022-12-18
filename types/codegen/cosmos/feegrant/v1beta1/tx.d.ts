import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, PeriodicAllowance, AllowedMsgAllowance } from "./feegrant";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: (BasicAllowance & PeriodicAllowance & AllowedMsgAllowance & Any) | undefined;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: AnyAmino;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceSDKType {
    granter: string;
    grantee: string;
    allowance?: AnySDKType;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseAmino {
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseSDKType {
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceSDKType {
    granter: string;
    grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseAmino {
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseSDKType {
}
export declare const MsgGrantAllowance: {
    encode(message: MsgGrantAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowance;
    fromJSON(object: any): MsgGrantAllowance;
    toJSON(message: MsgGrantAllowance): unknown;
    fromPartial(object: Partial<MsgGrantAllowance>): MsgGrantAllowance;
    fromAmino(object: MsgGrantAllowanceAmino): MsgGrantAllowance;
    toAmino(message: MsgGrantAllowance): MsgGrantAllowanceAmino;
};
export declare const MsgGrantAllowanceResponse: {
    encode(_: MsgGrantAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowanceResponse;
    fromJSON(_: any): MsgGrantAllowanceResponse;
    toJSON(_: MsgGrantAllowanceResponse): unknown;
    fromPartial(_: Partial<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse;
    fromAmino(_: MsgGrantAllowanceResponseAmino): MsgGrantAllowanceResponse;
    toAmino(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAmino;
};
export declare const MsgRevokeAllowance: {
    encode(message: MsgRevokeAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowance;
    fromJSON(object: any): MsgRevokeAllowance;
    toJSON(message: MsgRevokeAllowance): unknown;
    fromPartial(object: Partial<MsgRevokeAllowance>): MsgRevokeAllowance;
    fromAmino(object: MsgRevokeAllowanceAmino): MsgRevokeAllowance;
    toAmino(message: MsgRevokeAllowance): MsgRevokeAllowanceAmino;
};
export declare const MsgRevokeAllowanceResponse: {
    encode(_: MsgRevokeAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowanceResponse;
    fromJSON(_: any): MsgRevokeAllowanceResponse;
    toJSON(_: MsgRevokeAllowanceResponse): unknown;
    fromPartial(_: Partial<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse;
    fromAmino(_: MsgRevokeAllowanceResponseAmino): MsgRevokeAllowanceResponse;
    toAmino(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAmino;
};
export declare const FeeAllowanceI_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any;
export declare const FeeAllowanceI_FromAmino: (content: AnyAmino) => Any;
export declare const FeeAllowanceI_ToAmino: (content: Any) => AnyAmino | {
    type: string;
    value: import("./feegrant").BasicAllowanceAmino;
} | {
    type: string;
    value: import("./feegrant").PeriodicAllowanceAmino;
} | {
    type: string;
    value: import("./feegrant").AllowedMsgAllowanceAmino;
};
