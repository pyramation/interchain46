import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowance {
    $typeUrl?: string;
    /**
     * spend_limit specifies the maximum amount of coins that can be spent
     * by this allowance and will be updated as coins are spent. If it is
     * empty, there is no spend limit and any amount of coins can be spent.
     */
    spendLimit: Coin[];
    /** expiration specifies an optional time when this allowance expires */
    expiration?: Timestamp;
}
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowanceAmino {
    /**
     * spend_limit specifies the maximum amount of coins that can be spent
     * by this allowance and will be updated as coins are spent. If it is
     * empty, there is no spend limit and any amount of coins can be spent.
     */
    spend_limit: CoinAmino[];
    /** expiration specifies an optional time when this allowance expires */
    expiration?: TimestampAmino;
}
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowanceSDKType {
    $typeUrl?: string;
    spend_limit: CoinSDKType[];
    expiration?: TimestampSDKType;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowance {
    $typeUrl?: string;
    /** basic specifies a struct of `BasicAllowance` */
    basic?: BasicAllowance;
    /**
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     */
    period?: Duration;
    /**
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     */
    periodSpendLimit: Coin[];
    /** period_can_spend is the number of coins left to be spent before the period_reset time */
    periodCanSpend: Coin[];
    /**
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     */
    periodReset?: Timestamp;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowanceAmino {
    /** basic specifies a struct of `BasicAllowance` */
    basic?: BasicAllowanceAmino;
    /**
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     */
    period?: DurationAmino;
    /**
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     */
    period_spend_limit: CoinAmino[];
    /** period_can_spend is the number of coins left to be spent before the period_reset time */
    period_can_spend: CoinAmino[];
    /**
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     */
    period_reset?: TimestampAmino;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowanceSDKType {
    $typeUrl?: string;
    basic?: BasicAllowanceSDKType;
    period?: DurationSDKType;
    period_spend_limit: CoinSDKType[];
    period_can_spend: CoinSDKType[];
    period_reset?: TimestampSDKType;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowance {
    $typeUrl?: string;
    /** allowance can be any of basic and periodic fee allowance. */
    allowance?: (BasicAllowance & PeriodicAllowance & AllowedMsgAllowance & Any) | undefined;
    /** allowed_messages are the messages for which the grantee has the access. */
    allowedMessages: string[];
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowanceAmino {
    /** allowance can be any of basic and periodic fee allowance. */
    allowance?: AnyAmino;
    /** allowed_messages are the messages for which the grantee has the access. */
    allowed_messages: string[];
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowanceSDKType {
    $typeUrl?: string;
    allowance?: AnySDKType;
    allowed_messages: string[];
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface Grant {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: (BasicAllowance & PeriodicAllowance & AllowedMsgAllowance & Any) | undefined;
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface GrantAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: AnyAmino;
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface GrantSDKType {
    granter: string;
    grantee: string;
    allowance?: AnySDKType;
}
export declare const BasicAllowance: {
    encode(message: BasicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasicAllowance;
    fromJSON(object: any): BasicAllowance;
    toJSON(message: BasicAllowance): unknown;
    fromPartial(object: Partial<BasicAllowance>): BasicAllowance;
    fromAmino(object: BasicAllowanceAmino): BasicAllowance;
    toAmino(message: BasicAllowance): BasicAllowanceAmino;
};
export declare const PeriodicAllowance: {
    encode(message: PeriodicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeriodicAllowance;
    fromJSON(object: any): PeriodicAllowance;
    toJSON(message: PeriodicAllowance): unknown;
    fromPartial(object: Partial<PeriodicAllowance>): PeriodicAllowance;
    fromAmino(object: PeriodicAllowanceAmino): PeriodicAllowance;
    toAmino(message: PeriodicAllowance): PeriodicAllowanceAmino;
};
export declare const AllowedMsgAllowance: {
    encode(message: AllowedMsgAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedMsgAllowance;
    fromJSON(object: any): AllowedMsgAllowance;
    toJSON(message: AllowedMsgAllowance): unknown;
    fromPartial(object: Partial<AllowedMsgAllowance>): AllowedMsgAllowance;
    fromAmino(object: AllowedMsgAllowanceAmino): AllowedMsgAllowance;
    toAmino(message: AllowedMsgAllowance): AllowedMsgAllowanceAmino;
};
export declare const Grant: {
    encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Grant;
    fromJSON(object: any): Grant;
    toJSON(message: Grant): unknown;
    fromPartial(object: Partial<Grant>): Grant;
    fromAmino(object: GrantAmino): Grant;
    toAmino(message: Grant): GrantAmino;
};
export declare const FeeAllowanceI_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any;
export declare const FeeAllowanceI_FromAmino: (content: AnyAmino) => Any;
export declare const FeeAllowanceI_ToAmino: (content: Any) => AnyAmino | {
    type: string;
    value: BasicAllowanceAmino;
} | {
    type: string;
    value: PeriodicAllowanceAmino;
} | {
    type: string;
    value: AllowedMsgAllowanceAmino;
};
