import { Params, ParamsAmino, ParamsSDKType, Validator, ValidatorAmino, ValidatorSDKType, Delegation, DelegationAmino, DelegationSDKType, UnbondingDelegation, UnbondingDelegationAmino, UnbondingDelegationSDKType, Redelegation, RedelegationAmino, RedelegationSDKType } from "./staking";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GenesisState defines the staking module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of related to deposit. */
    params?: Params;
    /**
     * last_total_power tracks the total amounts of bonded tokens recorded during
     * the previous end block.
     */
    lastTotalPower: Uint8Array;
    /**
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     */
    lastValidatorPowers: LastValidatorPower[];
    /** delegations defines the validator set at genesis. */
    validators: Validator[];
    /** delegations defines the delegations active at genesis. */
    delegations: Delegation[];
    /** unbonding_delegations defines the unbonding delegations active at genesis. */
    unbondingDelegations: UnbondingDelegation[];
    /** redelegations defines the redelegations active at genesis. */
    redelegations: Redelegation[];
    exported: boolean;
}
/** GenesisState defines the staking module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of related to deposit. */
    params?: ParamsAmino;
    /**
     * last_total_power tracks the total amounts of bonded tokens recorded during
     * the previous end block.
     */
    last_total_power: Uint8Array;
    /**
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     */
    last_validator_powers: LastValidatorPowerAmino[];
    /** delegations defines the validator set at genesis. */
    validators: ValidatorAmino[];
    /** delegations defines the delegations active at genesis. */
    delegations: DelegationAmino[];
    /** unbonding_delegations defines the unbonding delegations active at genesis. */
    unbonding_delegations: UnbondingDelegationAmino[];
    /** redelegations defines the redelegations active at genesis. */
    redelegations: RedelegationAmino[];
    exported: boolean;
}
/** GenesisState defines the staking module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    last_total_power: Uint8Array;
    last_validator_powers: LastValidatorPowerSDKType[];
    validators: ValidatorSDKType[];
    delegations: DelegationSDKType[];
    unbonding_delegations: UnbondingDelegationSDKType[];
    redelegations: RedelegationSDKType[];
    exported: boolean;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
    /** address is the address of the validator. */
    address: string;
    /** power defines the power of the validator. */
    power: Long;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPowerAmino {
    /** address is the address of the validator. */
    address: string;
    /** power defines the power of the validator. */
    power: string;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPowerSDKType {
    address: string;
    power: Long;
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
export declare const LastValidatorPower: {
    encode(message: LastValidatorPower, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastValidatorPower;
    fromJSON(object: any): LastValidatorPower;
    toJSON(message: LastValidatorPower): unknown;
    fromPartial(object: Partial<LastValidatorPower>): LastValidatorPower;
    fromAmino(object: LastValidatorPowerAmino): LastValidatorPower;
    toAmino(message: LastValidatorPower): LastValidatorPowerAmino;
};
