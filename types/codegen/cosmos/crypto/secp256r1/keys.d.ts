import * as _m0 from "protobufjs/minimal";
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKey {
    /**
     * Point on secp256r1 curve in a compressed representation as specified in section
     * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
     */
    key: Uint8Array;
}
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKeyAmino {
    /**
     * Point on secp256r1 curve in a compressed representation as specified in section
     * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
     */
    key: Uint8Array;
}
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKeySDKType {
    key: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKey {
    /** secret number serialized using big-endian encoding */
    secret: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKeyAmino {
    /** secret number serialized using big-endian encoding */
    secret: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKeySDKType {
    secret: Uint8Array;
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
