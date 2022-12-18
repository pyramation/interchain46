import { Header, HeaderAmino, HeaderSDKType } from "../../../tendermint/types/types";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** BondStatus is the status of a validator. */
export declare enum BondStatus {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BOND_STATUS_UNSPECIFIED = 0,
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BOND_STATUS_UNBONDED = 1,
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BOND_STATUS_UNBONDING = 2,
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BOND_STATUS_BONDED = 3,
    UNRECOGNIZED = -1
}
export declare const BondStatusSDKType: typeof BondStatus;
export declare const BondStatusAmino: typeof BondStatus;
export declare function bondStatusFromJSON(object: any): BondStatus;
export declare function bondStatusToJSON(object: BondStatus): string;
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
    header?: Header;
    valset: Validator[];
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfoAmino {
    header?: HeaderAmino;
    valset: ValidatorAmino[];
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfoSDKType {
    header?: HeaderSDKType;
    valset: ValidatorSDKType[];
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRates {
    /** rate is the commission rate charged to delegators, as a fraction. */
    rate: string;
    /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
    maxRate: string;
    /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
    maxChangeRate: string;
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRatesAmino {
    /** rate is the commission rate charged to delegators, as a fraction. */
    rate: string;
    /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
    max_rate: string;
    /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
    max_change_rate: string;
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRatesSDKType {
    rate: string;
    max_rate: string;
    max_change_rate: string;
}
/** Commission defines commission parameters for a given validator. */
export interface Commission {
    /** commission_rates defines the initial commission rates to be used for creating a validator. */
    commissionRates?: CommissionRates;
    /** update_time is the last time the commission rate was changed. */
    updateTime?: Timestamp;
}
/** Commission defines commission parameters for a given validator. */
export interface CommissionAmino {
    /** commission_rates defines the initial commission rates to be used for creating a validator. */
    commission_rates?: CommissionRatesAmino;
    /** update_time is the last time the commission rate was changed. */
    update_time?: TimestampAmino;
}
/** Commission defines commission parameters for a given validator. */
export interface CommissionSDKType {
    commission_rates?: CommissionRatesSDKType;
    update_time?: TimestampSDKType;
}
/** Description defines a validator description. */
export interface Description {
    /** moniker defines a human-readable name for the validator. */
    moniker: string;
    /** identity defines an optional identity signature (ex. UPort or Keybase). */
    identity: string;
    /** website defines an optional website link. */
    website: string;
    /** security_contact defines an optional email for security contact. */
    securityContact: string;
    /** details define other optional details. */
    details: string;
}
/** Description defines a validator description. */
export interface DescriptionAmino {
    /** moniker defines a human-readable name for the validator. */
    moniker: string;
    /** identity defines an optional identity signature (ex. UPort or Keybase). */
    identity: string;
    /** website defines an optional website link. */
    website: string;
    /** security_contact defines an optional email for security contact. */
    security_contact: string;
    /** details define other optional details. */
    details: string;
}
/** Description defines a validator description. */
export interface DescriptionSDKType {
    moniker: string;
    identity: string;
    website: string;
    security_contact: string;
    details: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operatorAddress: string;
    /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
    consensusPubkey?: (Any) | undefined;
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed: boolean;
    /** status is the validator status (bonded/unbonding/unbonded). */
    status: BondStatus;
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegatorShares: string;
    /** description defines the description terms for the validator. */
    description?: Description;
    /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
    unbondingHeight: Long;
    /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
    unbondingTime?: Timestamp;
    /** commission defines the commission parameters. */
    commission?: Commission;
    /**
     * min_self_delegation is the validator's self declared minimum self delegation.
     *
     * Since: cosmos-sdk 0.46
     */
    minSelfDelegation: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface ValidatorAmino {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operator_address: string;
    /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
    consensus_pubkey?: AnyAmino;
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed: boolean;
    /** status is the validator status (bonded/unbonding/unbonded). */
    status: BondStatus;
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares: string;
    /** description defines the description terms for the validator. */
    description?: DescriptionAmino;
    /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
    unbonding_height: string;
    /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
    unbonding_time?: TimestampAmino;
    /** commission defines the commission parameters. */
    commission?: CommissionAmino;
    /**
     * min_self_delegation is the validator's self declared minimum self delegation.
     *
     * Since: cosmos-sdk 0.46
     */
    min_self_delegation: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface ValidatorSDKType {
    operator_address: string;
    consensus_pubkey?: AnySDKType;
    jailed: boolean;
    status: BondStatus;
    tokens: string;
    delegator_shares: string;
    description?: DescriptionSDKType;
    unbonding_height: Long;
    unbonding_time?: TimestampSDKType;
    commission?: CommissionSDKType;
    min_self_delegation: string;
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
    addresses: string[];
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddressesAmino {
    addresses: string[];
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddressesSDKType {
    addresses: string[];
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
    delegatorAddress: string;
    validatorAddress: string;
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPairAmino {
    delegator_address: string;
    validator_address: string;
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPairSDKType {
    delegator_address: string;
    validator_address: string;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
    pairs: DVPair[];
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairsAmino {
    pairs: DVPairAmino[];
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairsSDKType {
    pairs: DVPairSDKType[];
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTripletAmino {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTripletSDKType {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
    triplets: DVVTriplet[];
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTripletsAmino {
    triplets: DVVTripletAmino[];
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTripletsSDKType {
    triplets: DVVTripletSDKType[];
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegatorAddress: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validatorAddress: string;
    /** shares define the delegation shares received. */
    shares: string;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface DelegationAmino {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address: string;
    /** shares define the delegation shares received. */
    shares: string;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface DelegationSDKType {
    delegator_address: string;
    validator_address: string;
    shares: string;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegatorAddress: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validatorAddress: string;
    /** entries are the unbonding delegation entries. */
    entries: UnbondingDelegationEntry[];
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegationAmino {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address: string;
    /** entries are the unbonding delegation entries. */
    entries: UnbondingDelegationEntryAmino[];
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegationSDKType {
    delegator_address: string;
    validator_address: string;
    entries: UnbondingDelegationEntrySDKType[];
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
    /** creation_height is the height which the unbonding took place. */
    creationHeight: Long;
    /** completion_time is the unix time for unbonding completion. */
    completionTime?: Timestamp;
    /** initial_balance defines the tokens initially scheduled to receive at completion. */
    initialBalance: string;
    /** balance defines the tokens to receive at completion. */
    balance: string;
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntryAmino {
    /** creation_height is the height which the unbonding took place. */
    creation_height: string;
    /** completion_time is the unix time for unbonding completion. */
    completion_time?: TimestampAmino;
    /** initial_balance defines the tokens initially scheduled to receive at completion. */
    initial_balance: string;
    /** balance defines the tokens to receive at completion. */
    balance: string;
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntrySDKType {
    creation_height: Long;
    completion_time?: TimestampSDKType;
    initial_balance: string;
    balance: string;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
    /** creation_height  defines the height which the redelegation took place. */
    creationHeight: Long;
    /** completion_time defines the unix time for redelegation completion. */
    completionTime?: Timestamp;
    /** initial_balance defines the initial balance when redelegation started. */
    initialBalance: string;
    /** shares_dst is the amount of destination-validator shares created by redelegation. */
    sharesDst: string;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntryAmino {
    /** creation_height  defines the height which the redelegation took place. */
    creation_height: string;
    /** completion_time defines the unix time for redelegation completion. */
    completion_time?: TimestampAmino;
    /** initial_balance defines the initial balance when redelegation started. */
    initial_balance: string;
    /** shares_dst is the amount of destination-validator shares created by redelegation. */
    shares_dst: string;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntrySDKType {
    creation_height: Long;
    completion_time?: TimestampSDKType;
    initial_balance: string;
    shares_dst: string;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegatorAddress: string;
    /** validator_src_address is the validator redelegation source operator address. */
    validatorSrcAddress: string;
    /** validator_dst_address is the validator redelegation destination operator address. */
    validatorDstAddress: string;
    /** entries are the redelegation entries. */
    entries: RedelegationEntry[];
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface RedelegationAmino {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address: string;
    /** validator_src_address is the validator redelegation source operator address. */
    validator_src_address: string;
    /** validator_dst_address is the validator redelegation destination operator address. */
    validator_dst_address: string;
    /** entries are the redelegation entries. */
    entries: RedelegationEntryAmino[];
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface RedelegationSDKType {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    entries: RedelegationEntrySDKType[];
}
/** Params defines the parameters for the staking module. */
export interface Params {
    /** unbonding_time is the time duration of unbonding. */
    unbondingTime?: Duration;
    /** max_validators is the maximum number of validators. */
    maxValidators: number;
    /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
    maxEntries: number;
    /** historical_entries is the number of historical entries to persist. */
    historicalEntries: number;
    /** bond_denom defines the bondable coin denomination. */
    bondDenom: string;
    /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
    minCommissionRate: string;
}
/** Params defines the parameters for the staking module. */
export interface ParamsAmino {
    /** unbonding_time is the time duration of unbonding. */
    unbonding_time?: DurationAmino;
    /** max_validators is the maximum number of validators. */
    max_validators: number;
    /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
    max_entries: number;
    /** historical_entries is the number of historical entries to persist. */
    historical_entries: number;
    /** bond_denom defines the bondable coin denomination. */
    bond_denom: string;
    /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
    min_commission_rate: string;
}
/** Params defines the parameters for the staking module. */
export interface ParamsSDKType {
    unbonding_time?: DurationSDKType;
    max_validators: number;
    max_entries: number;
    historical_entries: number;
    bond_denom: string;
    min_commission_rate: string;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
    delegation?: Delegation;
    balance?: Coin;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponseAmino {
    delegation?: DelegationAmino;
    balance?: CoinAmino;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponseSDKType {
    delegation?: DelegationSDKType;
    balance?: CoinSDKType;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
    redelegationEntry?: RedelegationEntry;
    balance: string;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponseAmino {
    redelegation_entry?: RedelegationEntryAmino;
    balance: string;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponseSDKType {
    redelegation_entry?: RedelegationEntrySDKType;
    balance: string;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
    redelegation?: Redelegation;
    entries: RedelegationEntryResponse[];
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponseAmino {
    redelegation?: RedelegationAmino;
    entries: RedelegationEntryResponseAmino[];
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponseSDKType {
    redelegation?: RedelegationSDKType;
    entries: RedelegationEntryResponseSDKType[];
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface Pool {
    notBondedTokens: string;
    bondedTokens: string;
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface PoolAmino {
    not_bonded_tokens: string;
    bonded_tokens: string;
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface PoolSDKType {
    not_bonded_tokens: string;
    bonded_tokens: string;
}
export declare const HistoricalInfo: {
    encode(message: HistoricalInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalInfo;
    fromJSON(object: any): HistoricalInfo;
    toJSON(message: HistoricalInfo): unknown;
    fromPartial(object: Partial<HistoricalInfo>): HistoricalInfo;
    fromAmino(object: HistoricalInfoAmino): HistoricalInfo;
    toAmino(message: HistoricalInfo): HistoricalInfoAmino;
};
export declare const CommissionRates: {
    encode(message: CommissionRates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommissionRates;
    fromJSON(object: any): CommissionRates;
    toJSON(message: CommissionRates): unknown;
    fromPartial(object: Partial<CommissionRates>): CommissionRates;
    fromAmino(object: CommissionRatesAmino): CommissionRates;
    toAmino(message: CommissionRates): CommissionRatesAmino;
};
export declare const Commission: {
    encode(message: Commission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Commission;
    fromJSON(object: any): Commission;
    toJSON(message: Commission): unknown;
    fromPartial(object: Partial<Commission>): Commission;
    fromAmino(object: CommissionAmino): Commission;
    toAmino(message: Commission): CommissionAmino;
};
export declare const Description: {
    encode(message: Description, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Description;
    fromJSON(object: any): Description;
    toJSON(message: Description): unknown;
    fromPartial(object: Partial<Description>): Description;
    fromAmino(object: DescriptionAmino): Description;
    toAmino(message: Description): DescriptionAmino;
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
export declare const ValAddresses: {
    encode(message: ValAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValAddresses;
    fromJSON(object: any): ValAddresses;
    toJSON(message: ValAddresses): unknown;
    fromPartial(object: Partial<ValAddresses>): ValAddresses;
    fromAmino(object: ValAddressesAmino): ValAddresses;
    toAmino(message: ValAddresses): ValAddressesAmino;
};
export declare const DVPair: {
    encode(message: DVPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DVPair;
    fromJSON(object: any): DVPair;
    toJSON(message: DVPair): unknown;
    fromPartial(object: Partial<DVPair>): DVPair;
    fromAmino(object: DVPairAmino): DVPair;
    toAmino(message: DVPair): DVPairAmino;
};
export declare const DVPairs: {
    encode(message: DVPairs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DVPairs;
    fromJSON(object: any): DVPairs;
    toJSON(message: DVPairs): unknown;
    fromPartial(object: Partial<DVPairs>): DVPairs;
    fromAmino(object: DVPairsAmino): DVPairs;
    toAmino(message: DVPairs): DVPairsAmino;
};
export declare const DVVTriplet: {
    encode(message: DVVTriplet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplet;
    fromJSON(object: any): DVVTriplet;
    toJSON(message: DVVTriplet): unknown;
    fromPartial(object: Partial<DVVTriplet>): DVVTriplet;
    fromAmino(object: DVVTripletAmino): DVVTriplet;
    toAmino(message: DVVTriplet): DVVTripletAmino;
};
export declare const DVVTriplets: {
    encode(message: DVVTriplets, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplets;
    fromJSON(object: any): DVVTriplets;
    toJSON(message: DVVTriplets): unknown;
    fromPartial(object: Partial<DVVTriplets>): DVVTriplets;
    fromAmino(object: DVVTripletsAmino): DVVTriplets;
    toAmino(message: DVVTriplets): DVVTripletsAmino;
};
export declare const Delegation: {
    encode(message: Delegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegation;
    fromJSON(object: any): Delegation;
    toJSON(message: Delegation): unknown;
    fromPartial(object: Partial<Delegation>): Delegation;
    fromAmino(object: DelegationAmino): Delegation;
    toAmino(message: Delegation): DelegationAmino;
};
export declare const UnbondingDelegation: {
    encode(message: UnbondingDelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegation;
    fromJSON(object: any): UnbondingDelegation;
    toJSON(message: UnbondingDelegation): unknown;
    fromPartial(object: Partial<UnbondingDelegation>): UnbondingDelegation;
    fromAmino(object: UnbondingDelegationAmino): UnbondingDelegation;
    toAmino(message: UnbondingDelegation): UnbondingDelegationAmino;
};
export declare const UnbondingDelegationEntry: {
    encode(message: UnbondingDelegationEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegationEntry;
    fromJSON(object: any): UnbondingDelegationEntry;
    toJSON(message: UnbondingDelegationEntry): unknown;
    fromPartial(object: Partial<UnbondingDelegationEntry>): UnbondingDelegationEntry;
    fromAmino(object: UnbondingDelegationEntryAmino): UnbondingDelegationEntry;
    toAmino(message: UnbondingDelegationEntry): UnbondingDelegationEntryAmino;
};
export declare const RedelegationEntry: {
    encode(message: RedelegationEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntry;
    fromJSON(object: any): RedelegationEntry;
    toJSON(message: RedelegationEntry): unknown;
    fromPartial(object: Partial<RedelegationEntry>): RedelegationEntry;
    fromAmino(object: RedelegationEntryAmino): RedelegationEntry;
    toAmino(message: RedelegationEntry): RedelegationEntryAmino;
};
export declare const Redelegation: {
    encode(message: Redelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation;
    fromJSON(object: any): Redelegation;
    toJSON(message: Redelegation): unknown;
    fromPartial(object: Partial<Redelegation>): Redelegation;
    fromAmino(object: RedelegationAmino): Redelegation;
    toAmino(message: Redelegation): RedelegationAmino;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
};
export declare const DelegationResponse: {
    encode(message: DelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationResponse;
    fromJSON(object: any): DelegationResponse;
    toJSON(message: DelegationResponse): unknown;
    fromPartial(object: Partial<DelegationResponse>): DelegationResponse;
    fromAmino(object: DelegationResponseAmino): DelegationResponse;
    toAmino(message: DelegationResponse): DelegationResponseAmino;
};
export declare const RedelegationEntryResponse: {
    encode(message: RedelegationEntryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntryResponse;
    fromJSON(object: any): RedelegationEntryResponse;
    toJSON(message: RedelegationEntryResponse): unknown;
    fromPartial(object: Partial<RedelegationEntryResponse>): RedelegationEntryResponse;
    fromAmino(object: RedelegationEntryResponseAmino): RedelegationEntryResponse;
    toAmino(message: RedelegationEntryResponse): RedelegationEntryResponseAmino;
};
export declare const RedelegationResponse: {
    encode(message: RedelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationResponse;
    fromJSON(object: any): RedelegationResponse;
    toJSON(message: RedelegationResponse): unknown;
    fromPartial(object: Partial<RedelegationResponse>): RedelegationResponse;
    fromAmino(object: RedelegationResponseAmino): RedelegationResponse;
    toAmino(message: RedelegationResponse): RedelegationResponseAmino;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial(object: Partial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
};
export declare const Cosmos_cryptoPubKey_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => Any;
export declare const Cosmos_cryptoPubKey_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_cryptoPubKey_ToAmino: (content: Any) => AnyAmino;
