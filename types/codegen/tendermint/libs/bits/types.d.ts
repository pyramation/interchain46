import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BitArray {
    bits: Long;
    elems: Long[];
}
export interface BitArrayAmino {
    bits: string;
    elems: string[];
}
export interface BitArraySDKType {
    bits: Long;
    elems: Long[];
}
export declare const BitArray: {
    encode(message: BitArray, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BitArray;
    fromJSON(object: any): BitArray;
    toJSON(message: BitArray): unknown;
    fromPartial(object: Partial<BitArray>): BitArray;
    fromAmino(object: BitArrayAmino): BitArray;
    toAmino(message: BitArray): BitArrayAmino;
};
