import { Params, ParamsAmino, ParamsSDKType } from "./auth";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the auth module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params?: Params;
    /** accounts are the accounts present at genesis. */
    accounts: Any[];
}
/** GenesisState defines the auth module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of the module. */
    params?: ParamsAmino;
    /** accounts are the accounts present at genesis. */
    accounts: AnyAmino[];
}
/** GenesisState defines the auth module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    accounts: AnySDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
};
