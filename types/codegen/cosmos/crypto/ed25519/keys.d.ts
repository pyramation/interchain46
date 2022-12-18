import * as _m0 from "protobufjs/minimal";
/**
 * PubKey is an ed25519 public key for handling Tendermint keys in SDK.
 * It's needed for Any serialization and SDK compatibility.
 * It must not be used in a non Tendermint key context because it doesn't implement
 * ADR-28. Nevertheless, you will like to use ed25519 in app user level
 * then you must create a new proto message and follow ADR-28 for Address construction.
 */
export interface PubKey {
    key: Uint8Array;
}
/**
 * PubKey is an ed25519 public key for handling Tendermint keys in SDK.
 * It's needed for Any serialization and SDK compatibility.
 * It must not be used in a non Tendermint key context because it doesn't implement
 * ADR-28. Nevertheless, you will like to use ed25519 in app user level
 * then you must create a new proto message and follow ADR-28 for Address construction.
 */
export interface PubKeyAmino {
    key: Uint8Array;
}
/**
 * PubKey is an ed25519 public key for handling Tendermint keys in SDK.
 * It's needed for Any serialization and SDK compatibility.
 * It must not be used in a non Tendermint key context because it doesn't implement
 * ADR-28. Nevertheless, you will like to use ed25519 in app user level
 * then you must create a new proto message and follow ADR-28 for Address construction.
 */
export interface PubKeySDKType {
    key: Uint8Array;
}
/**
 * Deprecated: PrivKey defines a ed25519 private key.
 * NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.
 */
export interface PrivKey {
    key: Uint8Array;
}
/**
 * Deprecated: PrivKey defines a ed25519 private key.
 * NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.
 */
export interface PrivKeyAmino {
    key: Uint8Array;
}
/**
 * Deprecated: PrivKey defines a ed25519 private key.
 * NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.
 */
export interface PrivKeySDKType {
    key: Uint8Array;
}
export declare const PubKey: {
    encode(message: PubKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PubKey;
    fromJSON(object: any): PubKey;
    toJSON(message: PubKey): unknown;
    fromPartial(object: Partial<PubKey>): PubKey;
    fromAmino(object: PubKeyAmino): PubKey;
    toAmino(message: PubKey): PubKeyAmino;
};
export declare const PrivKey: {
    encode(message: PrivKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrivKey;
    fromJSON(object: any): PrivKey;
    toJSON(message: PrivKey): unknown;
    fromPartial(object: Partial<PrivKey>): PrivKey;
    fromAmino(object: PrivKeyAmino): PrivKey;
    toAmino(message: PrivKey): PrivKeyAmino;
};
