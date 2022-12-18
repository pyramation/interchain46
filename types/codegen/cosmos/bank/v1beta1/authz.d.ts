import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorization {
    $typeUrl?: string;
    spendLimit: Coin[];
}
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorizationAmino {
    spend_limit: CoinAmino[];
}
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorizationSDKType {
    $typeUrl?: string;
    spend_limit: CoinSDKType[];
}
export declare const SendAuthorization: {
    encode(message: SendAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendAuthorization;
    fromJSON(object: any): SendAuthorization;
    toJSON(message: SendAuthorization): unknown;
    fromPartial(object: Partial<SendAuthorization>): SendAuthorization;
    fromAmino(object: SendAuthorizationAmino): SendAuthorization;
    toAmino(message: SendAuthorization): SendAuthorizationAmino;
};
