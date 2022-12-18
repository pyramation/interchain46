import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ValidatorSet {
    validators: Validator[];
    proposer?: Validator;
    totalVotingPower: Long;
}
export interface ValidatorSetAmino {
    validators: ValidatorAmino[];
    proposer?: ValidatorAmino;
    total_voting_power: string;
}
export interface ValidatorSetSDKType {
    validators: ValidatorSDKType[];
    proposer?: ValidatorSDKType;
    total_voting_power: Long;
}
export interface Validator {
    address: Uint8Array;
    pubKey?: PublicKey;
    votingPower: Long;
    proposerPriority: Long;
}
export interface ValidatorAmino {
    address: Uint8Array;
    pub_key?: PublicKeyAmino;
    voting_power: string;
    proposer_priority: string;
}
export interface ValidatorSDKType {
    address: Uint8Array;
    pub_key?: PublicKeySDKType;
    voting_power: Long;
    proposer_priority: Long;
}
export interface SimpleValidator {
    pubKey?: PublicKey;
    votingPower: Long;
}
export interface SimpleValidatorAmino {
    pub_key?: PublicKeyAmino;
    voting_power: string;
}
export interface SimpleValidatorSDKType {
    pub_key?: PublicKeySDKType;
    voting_power: Long;
}
export declare const ValidatorSet: {
    encode(message: ValidatorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet;
    fromJSON(object: any): ValidatorSet;
    toJSON(message: ValidatorSet): unknown;
    fromPartial(object: Partial<ValidatorSet>): ValidatorSet;
    fromAmino(object: ValidatorSetAmino): ValidatorSet;
    toAmino(message: ValidatorSet): ValidatorSetAmino;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial(object: Partial<Validator>): Validator;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
};
export declare const SimpleValidator: {
    encode(message: SimpleValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimpleValidator;
    fromJSON(object: any): SimpleValidator;
    toJSON(message: SimpleValidator): unknown;
    fromPartial(object: Partial<SimpleValidator>): SimpleValidator;
    fromAmino(object: SimpleValidatorAmino): SimpleValidator;
    toAmino(message: SimpleValidator): SimpleValidatorAmino;
};
