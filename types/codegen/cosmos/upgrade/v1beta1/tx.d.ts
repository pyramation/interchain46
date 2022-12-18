import { Plan, PlanAmino, PlanSDKType } from "./upgrade";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgrade {
    /** authority is the address of the governance account. */
    authority: string;
    /** plan is the upgrade plan. */
    plan?: Plan;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeAmino {
    /** authority is the address of the governance account. */
    authority: string;
    /** plan is the upgrade plan. */
    plan?: PlanAmino;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeSDKType {
    authority: string;
    plan?: PlanSDKType;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponse {
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponseAmino {
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponseSDKType {
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgrade {
    /** authority is the address of the governance account. */
    authority: string;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeAmino {
    /** authority is the address of the governance account. */
    authority: string;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeSDKType {
    authority: string;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponse {
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponseAmino {
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponseSDKType {
}
export declare const MsgSoftwareUpgrade: {
    encode(message: MsgSoftwareUpgrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSoftwareUpgrade;
    fromJSON(object: any): MsgSoftwareUpgrade;
    toJSON(message: MsgSoftwareUpgrade): unknown;
    fromPartial(object: Partial<MsgSoftwareUpgrade>): MsgSoftwareUpgrade;
    fromAmino(object: MsgSoftwareUpgradeAmino): MsgSoftwareUpgrade;
    toAmino(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeAmino;
};
export declare const MsgSoftwareUpgradeResponse: {
    encode(_: MsgSoftwareUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSoftwareUpgradeResponse;
    fromJSON(_: any): MsgSoftwareUpgradeResponse;
    toJSON(_: MsgSoftwareUpgradeResponse): unknown;
    fromPartial(_: Partial<MsgSoftwareUpgradeResponse>): MsgSoftwareUpgradeResponse;
    fromAmino(_: MsgSoftwareUpgradeResponseAmino): MsgSoftwareUpgradeResponse;
    toAmino(_: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseAmino;
};
export declare const MsgCancelUpgrade: {
    encode(message: MsgCancelUpgrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUpgrade;
    fromJSON(object: any): MsgCancelUpgrade;
    toJSON(message: MsgCancelUpgrade): unknown;
    fromPartial(object: Partial<MsgCancelUpgrade>): MsgCancelUpgrade;
    fromAmino(object: MsgCancelUpgradeAmino): MsgCancelUpgrade;
    toAmino(message: MsgCancelUpgrade): MsgCancelUpgradeAmino;
};
export declare const MsgCancelUpgradeResponse: {
    encode(_: MsgCancelUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUpgradeResponse;
    fromJSON(_: any): MsgCancelUpgradeResponse;
    toJSON(_: MsgCancelUpgradeResponse): unknown;
    fromPartial(_: Partial<MsgCancelUpgradeResponse>): MsgCancelUpgradeResponse;
    fromAmino(_: MsgCancelUpgradeResponseAmino): MsgCancelUpgradeResponse;
    toAmino(_: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseAmino;
};
