import { ProposalExecutorResult } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
    /** group_id is the unique ID of the group. */
    groupId: Long;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupAmino {
    /** group_id is the unique ID of the group. */
    group_id: string;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupSDKType {
    group_id: Long;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
    /** group_id is the unique ID of the group. */
    groupId: Long;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupAmino {
    /** group_id is the unique ID of the group. */
    group_id: string;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupSDKType {
    group_id: Long;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicyAmino {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicySDKType {
    address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicyAmino {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicySDKType {
    address: string;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: Long;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposalAmino {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: string;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposalSDKType {
    proposal_id: Long;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: Long;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposalAmino {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: string;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposalSDKType {
    proposal_id: Long;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: Long;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteAmino {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: string;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteSDKType {
    proposal_id: Long;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: Long;
    /** result is the proposal execution result. */
    result: ProposalExecutorResult;
    /** logs contains error logs in case the execution result is FAILURE. */
    logs: string;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecAmino {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: string;
    /** result is the proposal execution result. */
    result: ProposalExecutorResult;
    /** logs contains error logs in case the execution result is FAILURE. */
    logs: string;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecSDKType {
    proposal_id: Long;
    result: ProposalExecutorResult;
    logs: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** address is the account address of the group member. */
    address: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroupAmino {
    /** group_id is the unique ID of the group. */
    group_id: string;
    /** address is the account address of the group member. */
    address: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroupSDKType {
    group_id: Long;
    address: string;
}
export declare const EventCreateGroup: {
    encode(message: EventCreateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup;
    fromJSON(object: any): EventCreateGroup;
    toJSON(message: EventCreateGroup): unknown;
    fromPartial(object: Partial<EventCreateGroup>): EventCreateGroup;
    fromAmino(object: EventCreateGroupAmino): EventCreateGroup;
    toAmino(message: EventCreateGroup): EventCreateGroupAmino;
};
export declare const EventUpdateGroup: {
    encode(message: EventUpdateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroup;
    fromJSON(object: any): EventUpdateGroup;
    toJSON(message: EventUpdateGroup): unknown;
    fromPartial(object: Partial<EventUpdateGroup>): EventUpdateGroup;
    fromAmino(object: EventUpdateGroupAmino): EventUpdateGroup;
    toAmino(message: EventUpdateGroup): EventUpdateGroupAmino;
};
export declare const EventCreateGroupPolicy: {
    encode(message: EventCreateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroupPolicy;
    fromJSON(object: any): EventCreateGroupPolicy;
    toJSON(message: EventCreateGroupPolicy): unknown;
    fromPartial(object: Partial<EventCreateGroupPolicy>): EventCreateGroupPolicy;
    fromAmino(object: EventCreateGroupPolicyAmino): EventCreateGroupPolicy;
    toAmino(message: EventCreateGroupPolicy): EventCreateGroupPolicyAmino;
};
export declare const EventUpdateGroupPolicy: {
    encode(message: EventUpdateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupPolicy;
    fromJSON(object: any): EventUpdateGroupPolicy;
    toJSON(message: EventUpdateGroupPolicy): unknown;
    fromPartial(object: Partial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy;
    fromAmino(object: EventUpdateGroupPolicyAmino): EventUpdateGroupPolicy;
    toAmino(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyAmino;
};
export declare const EventSubmitProposal: {
    encode(message: EventSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitProposal;
    fromJSON(object: any): EventSubmitProposal;
    toJSON(message: EventSubmitProposal): unknown;
    fromPartial(object: Partial<EventSubmitProposal>): EventSubmitProposal;
    fromAmino(object: EventSubmitProposalAmino): EventSubmitProposal;
    toAmino(message: EventSubmitProposal): EventSubmitProposalAmino;
};
export declare const EventWithdrawProposal: {
    encode(message: EventWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawProposal;
    fromJSON(object: any): EventWithdrawProposal;
    toJSON(message: EventWithdrawProposal): unknown;
    fromPartial(object: Partial<EventWithdrawProposal>): EventWithdrawProposal;
    fromAmino(object: EventWithdrawProposalAmino): EventWithdrawProposal;
    toAmino(message: EventWithdrawProposal): EventWithdrawProposalAmino;
};
export declare const EventVote: {
    encode(message: EventVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventVote;
    fromJSON(object: any): EventVote;
    toJSON(message: EventVote): unknown;
    fromPartial(object: Partial<EventVote>): EventVote;
    fromAmino(object: EventVoteAmino): EventVote;
    toAmino(message: EventVote): EventVoteAmino;
};
export declare const EventExec: {
    encode(message: EventExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventExec;
    fromJSON(object: any): EventExec;
    toJSON(message: EventExec): unknown;
    fromPartial(object: Partial<EventExec>): EventExec;
    fromAmino(object: EventExecAmino): EventExec;
    toAmino(message: EventExec): EventExecAmino;
};
export declare const EventLeaveGroup: {
    encode(message: EventLeaveGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaveGroup;
    fromJSON(object: any): EventLeaveGroup;
    toJSON(message: EventLeaveGroup): unknown;
    fromPartial(object: Partial<EventLeaveGroup>): EventLeaveGroup;
    fromAmino(object: EventLeaveGroupAmino): EventLeaveGroup;
    toAmino(message: EventLeaveGroup): EventLeaveGroupAmino;
};
