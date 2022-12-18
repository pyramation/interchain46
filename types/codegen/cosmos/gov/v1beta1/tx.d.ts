import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, WeightedVoteOption, WeightedVoteOptionAmino, WeightedVoteOptionSDKType, TextProposal } from "./gov";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalWithDeposit } from "../../distribution/v1beta1/distribution";
import { ParameterChangeProposal } from "../../params/v1beta1/params";
import { SoftwareUpgradeProposal, CancelSoftwareUpgradeProposal } from "../../upgrade/v1beta1/upgrade";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
    content?: (CommunityPoolSpendProposal & CommunityPoolSpendProposalWithDeposit & TextProposal & ParameterChangeProposal & SoftwareUpgradeProposal & CancelSoftwareUpgradeProposal & Any) | undefined;
    initialDeposit: Coin[];
    proposer: string;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalAmino {
    content?: AnyAmino;
    initial_deposit: CoinAmino[];
    proposer: string;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalSDKType {
    content?: AnySDKType;
    initial_deposit: CoinSDKType[];
    proposer: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    proposalId: Long;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseAmino {
    proposal_id: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseSDKType {
    proposal_id: Long;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
    proposalId: Long;
    voter: string;
    option: VoteOption;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteAmino {
    proposal_id: string;
    voter: string;
    option: VoteOption;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteSDKType {
    proposal_id: Long;
    voter: string;
    option: VoteOption;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseAmino {
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeighted {
    proposalId: Long;
    voter: string;
    options: WeightedVoteOption[];
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedAmino {
    proposal_id: string;
    voter: string;
    options: WeightedVoteOptionAmino[];
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedSDKType {
    proposal_id: Long;
    voter: string;
    options: WeightedVoteOptionSDKType[];
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponse {
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponseAmino {
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponseSDKType {
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
    proposalId: Long;
    depositor: string;
    amount: Coin[];
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositAmino {
    proposal_id: string;
    depositor: string;
    amount: CoinAmino[];
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositSDKType {
    proposal_id: Long;
    depositor: string;
    amount: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
export declare const MsgSubmitProposal: {
    encode(message: MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): unknown;
    fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal;
    fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal;
    toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino;
};
export declare const MsgSubmitProposalResponse: {
    encode(message: MsgSubmitProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse;
    fromJSON(object: any): MsgSubmitProposalResponse;
    toJSON(message: MsgSubmitProposalResponse): unknown;
    fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse;
    fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse;
    toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino;
};
export declare const MsgVote: {
    encode(message: MsgVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote;
    fromJSON(object: any): MsgVote;
    toJSON(message: MsgVote): unknown;
    fromPartial(object: Partial<MsgVote>): MsgVote;
    fromAmino(object: MsgVoteAmino): MsgVote;
    toAmino(message: MsgVote): MsgVoteAmino;
};
export declare const MsgVoteResponse: {
    encode(_: MsgVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse;
    fromJSON(_: any): MsgVoteResponse;
    toJSON(_: MsgVoteResponse): unknown;
    fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse;
    fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse;
    toAmino(_: MsgVoteResponse): MsgVoteResponseAmino;
};
export declare const MsgVoteWeighted: {
    encode(message: MsgVoteWeighted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeighted;
    fromJSON(object: any): MsgVoteWeighted;
    toJSON(message: MsgVoteWeighted): unknown;
    fromPartial(object: Partial<MsgVoteWeighted>): MsgVoteWeighted;
    fromAmino(object: MsgVoteWeightedAmino): MsgVoteWeighted;
    toAmino(message: MsgVoteWeighted): MsgVoteWeightedAmino;
};
export declare const MsgVoteWeightedResponse: {
    encode(_: MsgVoteWeightedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeightedResponse;
    fromJSON(_: any): MsgVoteWeightedResponse;
    toJSON(_: MsgVoteWeightedResponse): unknown;
    fromPartial(_: Partial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse;
    fromAmino(_: MsgVoteWeightedResponseAmino): MsgVoteWeightedResponse;
    toAmino(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseAmino;
};
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    toJSON(message: MsgDeposit): unknown;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
    fromAmino(object: MsgDepositAmino): MsgDeposit;
    toAmino(message: MsgDeposit): MsgDepositAmino;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(_: any): MsgDepositResponse;
    toJSON(_: MsgDepositResponse): unknown;
    fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse;
    fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse;
    toAmino(_: MsgDepositResponse): MsgDepositResponseAmino;
};
export declare const Content_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | TextProposal | ParameterChangeProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | Any;
export declare const Content_FromAmino: (content: AnyAmino) => Any;
export declare const Content_ToAmino: (content: Any) => AnyAmino | {
    type: string;
    value: import("./gov").TextProposalAmino;
};
