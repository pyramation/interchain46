import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BIP44Params, BIP44ParamsAmino, BIP44ParamsSDKType } from "../../hd/v1/hd";
import * as _m0 from "protobufjs/minimal";
/** Record is used for representing a key in the keyring. */
export interface Record {
    /** name represents a name of Record */
    name: string;
    /** pub_key represents a public key in any format */
    pubKey?: Any;
    /** local stores the private key locally. */
    local?: Record_Local;
    /** ledger stores the information about a Ledger key. */
    ledger?: Record_Ledger;
    /** Multi does not store any other information. */
    multi?: Record_Multi;
    /** Offline does not store any other information. */
    offline?: Record_Offline;
}
/** Record is used for representing a key in the keyring. */
export interface RecordAmino {
    /** name represents a name of Record */
    name: string;
    /** pub_key represents a public key in any format */
    pub_key?: AnyAmino;
    /** local stores the private key locally. */
    local?: Record_LocalAmino;
    /** ledger stores the information about a Ledger key. */
    ledger?: Record_LedgerAmino;
    /** Multi does not store any other information. */
    multi?: Record_MultiAmino;
    /** Offline does not store any other information. */
    offline?: Record_OfflineAmino;
}
/** Record is used for representing a key in the keyring. */
export interface RecordSDKType {
    name: string;
    pub_key?: AnySDKType;
    local?: Record_LocalSDKType;
    ledger?: Record_LedgerSDKType;
    multi?: Record_MultiSDKType;
    offline?: Record_OfflineSDKType;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
    privKey?: Any;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_LocalAmino {
    priv_key?: AnyAmino;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_LocalSDKType {
    priv_key?: AnySDKType;
}
/** Ledger item */
export interface Record_Ledger {
    path?: BIP44Params;
}
/** Ledger item */
export interface Record_LedgerAmino {
    path?: BIP44ParamsAmino;
}
/** Ledger item */
export interface Record_LedgerSDKType {
    path?: BIP44ParamsSDKType;
}
/** Multi item */
export interface Record_Multi {
}
/** Multi item */
export interface Record_MultiAmino {
}
/** Multi item */
export interface Record_MultiSDKType {
}
/** Offline item */
export interface Record_Offline {
}
/** Offline item */
export interface Record_OfflineAmino {
}
/** Offline item */
export interface Record_OfflineSDKType {
}
export declare const Record: {
    encode(message: Record, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record;
    fromJSON(object: any): Record;
    toJSON(message: Record): unknown;
    fromPartial(object: Partial<Record>): Record;
    fromAmino(object: RecordAmino): Record;
    toAmino(message: Record): RecordAmino;
};
export declare const Record_Local: {
    encode(message: Record_Local, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Local;
    fromJSON(object: any): Record_Local;
    toJSON(message: Record_Local): unknown;
    fromPartial(object: Partial<Record_Local>): Record_Local;
    fromAmino(object: Record_LocalAmino): Record_Local;
    toAmino(message: Record_Local): Record_LocalAmino;
};
export declare const Record_Ledger: {
    encode(message: Record_Ledger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Ledger;
    fromJSON(object: any): Record_Ledger;
    toJSON(message: Record_Ledger): unknown;
    fromPartial(object: Partial<Record_Ledger>): Record_Ledger;
    fromAmino(object: Record_LedgerAmino): Record_Ledger;
    toAmino(message: Record_Ledger): Record_LedgerAmino;
};
export declare const Record_Multi: {
    encode(_: Record_Multi, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Multi;
    fromJSON(_: any): Record_Multi;
    toJSON(_: Record_Multi): unknown;
    fromPartial(_: Partial<Record_Multi>): Record_Multi;
    fromAmino(_: Record_MultiAmino): Record_Multi;
    toAmino(_: Record_Multi): Record_MultiAmino;
};
export declare const Record_Offline: {
    encode(_: Record_Offline, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Offline;
    fromJSON(_: any): Record_Offline;
    toJSON(_: Record_Offline): unknown;
    fromPartial(_: Partial<Record_Offline>): Record_Offline;
    fromAmino(_: Record_OfflineAmino): Record_Offline;
    toAmino(_: Record_Offline): Record_OfflineAmino;
};
