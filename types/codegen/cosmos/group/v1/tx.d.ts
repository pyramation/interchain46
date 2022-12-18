import { MemberRequest, MemberRequestAmino, MemberRequestSDKType, VoteOption, ProposalExecutorResult, ThresholdDecisionPolicy, PercentageDecisionPolicy } from "./types";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export declare enum Exec {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    EXEC_UNSPECIFIED = 0,
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    EXEC_TRY = 1,
    UNRECOGNIZED = -1
}
export declare const ExecSDKType: typeof Exec;
export declare const ExecAmino: typeof Exec;
export declare function execFromJSON(object: any): Exec;
export declare function execToJSON(object: Exec): string;
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
    /** admin is the account address of the group admin. */
    admin: string;
    /** members defines the group members. */
    members: MemberRequest[];
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: string;
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroupAmino {
    /** admin is the account address of the group admin. */
    admin: string;
    /** members defines the group members. */
    members: MemberRequestAmino[];
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: string;
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroupSDKType {
    admin: string;
    members: MemberRequestSDKType[];
    metadata: string;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
    /** group_id is the unique ID of the newly created group. */
    groupId: Long;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponseAmino {
    /** group_id is the unique ID of the newly created group. */
    group_id: string;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponseSDKType {
    group_id: Long;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /**
     * member_updates is the list of members to update,
     * set weight to 0 to remove a member.
     */
    memberUpdates: MemberRequest[];
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembersAmino {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: string;
    /**
     * member_updates is the list of members to update,
     * set weight to 0 to remove a member.
     */
    member_updates: MemberRequestAmino[];
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembersSDKType {
    admin: string;
    group_id: Long;
    member_updates: MemberRequestSDKType[];
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseAmino {
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseSDKType {
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
    /** admin is the current account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** new_admin is the group new admin account address. */
    newAdmin: string;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdminAmino {
    /** admin is the current account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: string;
    /** new_admin is the group new admin account address. */
    new_admin: string;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdminSDKType {
    admin: string;
    group_id: Long;
    new_admin: string;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseAmino {
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseSDKType {
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** metadata is the updated group's metadata. */
    metadata: string;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadataAmino {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: string;
    /** metadata is the updated group's metadata. */
    metadata: string;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadataSDKType {
    admin: string;
    group_id: Long;
    metadata: string;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseAmino {
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseSDKType {
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** metadata is any arbitrary metadata attached to the group policy. */
    metadata: string;
    /** decision_policy specifies the group policy's decision policy. */
    decisionPolicy?: (ThresholdDecisionPolicy & PercentageDecisionPolicy & Any) | undefined;
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicyAmino {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: string;
    /** metadata is any arbitrary metadata attached to the group policy. */
    metadata: string;
    /** decision_policy specifies the group policy's decision policy. */
    decision_policy?: AnyAmino;
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicySDKType {
    admin: string;
    group_id: Long;
    metadata: string;
    decision_policy?: AnySDKType;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
    /** address is the account address of the newly created group policy. */
    address: string;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponseAmino {
    /** address is the account address of the newly created group policy. */
    address: string;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponseSDKType {
    address: string;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_policy_address is the account address of the group policy. */
    groupPolicyAddress: string;
    /** new_admin is the new group policy admin. */
    newAdmin: string;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdminAmino {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_policy_address is the account address of the group policy. */
    group_policy_address: string;
    /** new_admin is the new group policy admin. */
    new_admin: string;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdminSDKType {
    admin: string;
    group_policy_address: string;
    new_admin: string;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponseAmino {
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponseSDKType {
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicy {
    /** admin is the account address of the group and group policy admin. */
    admin: string;
    /** members defines the group members. */
    members: MemberRequest[];
    /** group_metadata is any arbitrary metadata attached to the group. */
    groupMetadata: string;
    /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
    groupPolicyMetadata: string;
    /**
     * group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group
     * and group policy admin.
     */
    groupPolicyAsAdmin: boolean;
    /** decision_policy specifies the group policy's decision policy. */
    decisionPolicy?: (ThresholdDecisionPolicy & PercentageDecisionPolicy & Any) | undefined;
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicyAmino {
    /** admin is the account address of the group and group policy admin. */
    admin: string;
    /** members defines the group members. */
    members: MemberRequestAmino[];
    /** group_metadata is any arbitrary metadata attached to the group. */
    group_metadata: string;
    /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
    group_policy_metadata: string;
    /**
     * group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group
     * and group policy admin.
     */
    group_policy_as_admin: boolean;
    /** decision_policy specifies the group policy's decision policy. */
    decision_policy?: AnyAmino;
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicySDKType {
    admin: string;
    members: MemberRequestSDKType[];
    group_metadata: string;
    group_policy_metadata: string;
    group_policy_as_admin: boolean;
    decision_policy?: AnySDKType;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponse {
    /** group_id is the unique ID of the newly created group with policy. */
    groupId: Long;
    /** group_policy_address is the account address of the newly created group policy. */
    groupPolicyAddress: string;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponseAmino {
    /** group_id is the unique ID of the newly created group with policy. */
    group_id: string;
    /** group_policy_address is the account address of the newly created group policy. */
    group_policy_address: string;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponseSDKType {
    group_id: Long;
    group_policy_address: string;
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_policy_address is the account address of group policy. */
    groupPolicyAddress: string;
    /** decision_policy is the updated group policy's decision policy. */
    decisionPolicy?: (ThresholdDecisionPolicy & PercentageDecisionPolicy & Any) | undefined;
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicyAmino {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_policy_address is the account address of group policy. */
    group_policy_address: string;
    /** decision_policy is the updated group policy's decision policy. */
    decision_policy?: AnyAmino;
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicySDKType {
    admin: string;
    group_policy_address: string;
    decision_policy?: AnySDKType;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponseAmino {
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponseSDKType {
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_policy_address is the account address of group policy. */
    groupPolicyAddress: string;
    /** metadata is the updated group policy metadata. */
    metadata: string;
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadataAmino {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_policy_address is the account address of group policy. */
    group_policy_address: string;
    /** metadata is the updated group policy metadata. */
    metadata: string;
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadataSDKType {
    admin: string;
    group_policy_address: string;
    metadata: string;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponseAmino {
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponseSDKType {
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
    /** group_policy_address is the account address of group policy. */
    groupPolicyAddress: string;
    /**
     * proposers are the account addresses of the proposers.
     * Proposers signatures will be counted as yes votes.
     */
    proposers: string[];
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: string;
    /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
    messages: Any[];
    /**
     * exec defines the mode of execution of the proposal,
     * whether it should be executed immediately on creation or not.
     * If so, proposers signatures are considered as Yes votes.
     */
    exec: Exec;
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposalAmino {
    /** group_policy_address is the account address of group policy. */
    group_policy_address: string;
    /**
     * proposers are the account addresses of the proposers.
     * Proposers signatures will be counted as yes votes.
     */
    proposers: string[];
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: string;
    /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
    messages: AnyAmino[];
    /**
     * exec defines the mode of execution of the proposal,
     * whether it should be executed immediately on creation or not.
     * If so, proposers signatures are considered as Yes votes.
     */
    exec: Exec;
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposalSDKType {
    group_policy_address: string;
    proposers: string[];
    metadata: string;
    messages: AnySDKType[];
    exec: Exec;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    /** proposal is the unique ID of the proposal. */
    proposalId: Long;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id: string;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseSDKType {
    proposal_id: Long;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
    /** proposal is the unique ID of the proposal. */
    proposalId: Long;
    /** address is the admin of the group policy or one of the proposer of the proposal. */
    address: string;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposalAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id: string;
    /** address is the admin of the group policy or one of the proposer of the proposal. */
    address: string;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposalSDKType {
    proposal_id: Long;
    address: string;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponseAmino {
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponseSDKType {
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
    /** proposal is the unique ID of the proposal. */
    proposalId: Long;
    /** voter is the voter account address. */
    voter: string;
    /** option is the voter's choice on the proposal. */
    option: VoteOption;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: string;
    /**
     * exec defines whether the proposal should be executed
     * immediately after voting or not.
     */
    exec: Exec;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVoteAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id: string;
    /** voter is the voter account address. */
    voter: string;
    /** option is the voter's choice on the proposal. */
    option: VoteOption;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: string;
    /**
     * exec defines whether the proposal should be executed
     * immediately after voting or not.
     */
    exec: Exec;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVoteSDKType {
    proposal_id: Long;
    voter: string;
    option: VoteOption;
    metadata: string;
    exec: Exec;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseAmino {
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
    /** proposal is the unique ID of the proposal. */
    proposalId: Long;
    /** executor is the account address used to execute the proposal. */
    executor: string;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExecAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id: string;
    /** executor is the account address used to execute the proposal. */
    executor: string;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExecSDKType {
    proposal_id: Long;
    executor: string;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
    /** result is the final result of the proposal execution. */
    result: ProposalExecutorResult;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseAmino {
    /** result is the final result of the proposal execution. */
    result: ProposalExecutorResult;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseSDKType {
    result: ProposalExecutorResult;
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroup {
    /** address is the account address of the group member. */
    address: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroupAmino {
    /** address is the account address of the group member. */
    address: string;
    /** group_id is the unique ID of the group. */
    group_id: string;
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroupSDKType {
    address: string;
    group_id: Long;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponse {
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponseAmino {
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponseSDKType {
}
export declare const MsgCreateGroup: {
    encode(message: MsgCreateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup;
    fromJSON(object: any): MsgCreateGroup;
    toJSON(message: MsgCreateGroup): unknown;
    fromPartial(object: Partial<MsgCreateGroup>): MsgCreateGroup;
    fromAmino(object: MsgCreateGroupAmino): MsgCreateGroup;
    toAmino(message: MsgCreateGroup): MsgCreateGroupAmino;
};
export declare const MsgCreateGroupResponse: {
    encode(message: MsgCreateGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse;
    fromJSON(object: any): MsgCreateGroupResponse;
    toJSON(message: MsgCreateGroupResponse): unknown;
    fromPartial(object: Partial<MsgCreateGroupResponse>): MsgCreateGroupResponse;
    fromAmino(object: MsgCreateGroupResponseAmino): MsgCreateGroupResponse;
    toAmino(message: MsgCreateGroupResponse): MsgCreateGroupResponseAmino;
};
export declare const MsgUpdateGroupMembers: {
    encode(message: MsgUpdateGroupMembers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembers;
    fromJSON(object: any): MsgUpdateGroupMembers;
    toJSON(message: MsgUpdateGroupMembers): unknown;
    fromPartial(object: Partial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers;
    fromAmino(object: MsgUpdateGroupMembersAmino): MsgUpdateGroupMembers;
    toAmino(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersAmino;
};
export declare const MsgUpdateGroupMembersResponse: {
    encode(_: MsgUpdateGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse;
    fromJSON(_: any): MsgUpdateGroupMembersResponse;
    toJSON(_: MsgUpdateGroupMembersResponse): unknown;
    fromPartial(_: Partial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse;
    fromAmino(_: MsgUpdateGroupMembersResponseAmino): MsgUpdateGroupMembersResponse;
    toAmino(_: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseAmino;
};
export declare const MsgUpdateGroupAdmin: {
    encode(message: MsgUpdateGroupAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdmin;
    fromJSON(object: any): MsgUpdateGroupAdmin;
    toJSON(message: MsgUpdateGroupAdmin): unknown;
    fromPartial(object: Partial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin;
    fromAmino(object: MsgUpdateGroupAdminAmino): MsgUpdateGroupAdmin;
    toAmino(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAmino;
};
export declare const MsgUpdateGroupAdminResponse: {
    encode(_: MsgUpdateGroupAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse;
    fromJSON(_: any): MsgUpdateGroupAdminResponse;
    toJSON(_: MsgUpdateGroupAdminResponse): unknown;
    fromPartial(_: Partial<MsgUpdateGroupAdminResponse>): MsgUpdateGroupAdminResponse;
    fromAmino(_: MsgUpdateGroupAdminResponseAmino): MsgUpdateGroupAdminResponse;
    toAmino(_: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseAmino;
};
export declare const MsgUpdateGroupMetadata: {
    encode(message: MsgUpdateGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadata;
    fromJSON(object: any): MsgUpdateGroupMetadata;
    toJSON(message: MsgUpdateGroupMetadata): unknown;
    fromPartial(object: Partial<MsgUpdateGroupMetadata>): MsgUpdateGroupMetadata;
    fromAmino(object: MsgUpdateGroupMetadataAmino): MsgUpdateGroupMetadata;
    toAmino(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAmino;
};
export declare const MsgUpdateGroupMetadataResponse: {
    encode(_: MsgUpdateGroupMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse;
    fromJSON(_: any): MsgUpdateGroupMetadataResponse;
    toJSON(_: MsgUpdateGroupMetadataResponse): unknown;
    fromPartial(_: Partial<MsgUpdateGroupMetadataResponse>): MsgUpdateGroupMetadataResponse;
    fromAmino(_: MsgUpdateGroupMetadataResponseAmino): MsgUpdateGroupMetadataResponse;
    toAmino(_: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseAmino;
};
export declare const MsgCreateGroupPolicy: {
    encode(message: MsgCreateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicy;
    fromJSON(object: any): MsgCreateGroupPolicy;
    toJSON(message: MsgCreateGroupPolicy): unknown;
    fromPartial(object: Partial<MsgCreateGroupPolicy>): MsgCreateGroupPolicy;
    fromAmino(object: MsgCreateGroupPolicyAmino): MsgCreateGroupPolicy;
    toAmino(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyAmino;
};
export declare const MsgCreateGroupPolicyResponse: {
    encode(message: MsgCreateGroupPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicyResponse;
    fromJSON(object: any): MsgCreateGroupPolicyResponse;
    toJSON(message: MsgCreateGroupPolicyResponse): unknown;
    fromPartial(object: Partial<MsgCreateGroupPolicyResponse>): MsgCreateGroupPolicyResponse;
    fromAmino(object: MsgCreateGroupPolicyResponseAmino): MsgCreateGroupPolicyResponse;
    toAmino(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseAmino;
};
export declare const MsgUpdateGroupPolicyAdmin: {
    encode(message: MsgUpdateGroupPolicyAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdmin;
    fromJSON(object: any): MsgUpdateGroupPolicyAdmin;
    toJSON(message: MsgUpdateGroupPolicyAdmin): unknown;
    fromPartial(object: Partial<MsgUpdateGroupPolicyAdmin>): MsgUpdateGroupPolicyAdmin;
    fromAmino(object: MsgUpdateGroupPolicyAdminAmino): MsgUpdateGroupPolicyAdmin;
    toAmino(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminAmino;
};
export declare const MsgUpdateGroupPolicyAdminResponse: {
    encode(_: MsgUpdateGroupPolicyAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdminResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse;
    toJSON(_: MsgUpdateGroupPolicyAdminResponse): unknown;
    fromPartial(_: Partial<MsgUpdateGroupPolicyAdminResponse>): MsgUpdateGroupPolicyAdminResponse;
    fromAmino(_: MsgUpdateGroupPolicyAdminResponseAmino): MsgUpdateGroupPolicyAdminResponse;
    toAmino(_: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseAmino;
};
export declare const MsgCreateGroupWithPolicy: {
    encode(message: MsgCreateGroupWithPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicy;
    fromJSON(object: any): MsgCreateGroupWithPolicy;
    toJSON(message: MsgCreateGroupWithPolicy): unknown;
    fromPartial(object: Partial<MsgCreateGroupWithPolicy>): MsgCreateGroupWithPolicy;
    fromAmino(object: MsgCreateGroupWithPolicyAmino): MsgCreateGroupWithPolicy;
    toAmino(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyAmino;
};
export declare const MsgCreateGroupWithPolicyResponse: {
    encode(message: MsgCreateGroupWithPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicyResponse;
    fromJSON(object: any): MsgCreateGroupWithPolicyResponse;
    toJSON(message: MsgCreateGroupWithPolicyResponse): unknown;
    fromPartial(object: Partial<MsgCreateGroupWithPolicyResponse>): MsgCreateGroupWithPolicyResponse;
    fromAmino(object: MsgCreateGroupWithPolicyResponseAmino): MsgCreateGroupWithPolicyResponse;
    toAmino(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseAmino;
};
export declare const MsgUpdateGroupPolicyDecisionPolicy: {
    encode(message: MsgUpdateGroupPolicyDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicy;
    fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy;
    toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown;
    fromPartial(object: Partial<MsgUpdateGroupPolicyDecisionPolicy>): MsgUpdateGroupPolicyDecisionPolicy;
    fromAmino(object: MsgUpdateGroupPolicyDecisionPolicyAmino): MsgUpdateGroupPolicyDecisionPolicy;
    toAmino(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyAmino;
};
export declare const MsgUpdateGroupPolicyDecisionPolicyResponse: {
    encode(_: MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicyResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse;
    toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
    fromPartial(_: Partial<MsgUpdateGroupPolicyDecisionPolicyResponse>): MsgUpdateGroupPolicyDecisionPolicyResponse;
    fromAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponseAmino): MsgUpdateGroupPolicyDecisionPolicyResponse;
    toAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
};
export declare const MsgUpdateGroupPolicyMetadata: {
    encode(message: MsgUpdateGroupPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadata;
    fromJSON(object: any): MsgUpdateGroupPolicyMetadata;
    toJSON(message: MsgUpdateGroupPolicyMetadata): unknown;
    fromPartial(object: Partial<MsgUpdateGroupPolicyMetadata>): MsgUpdateGroupPolicyMetadata;
    fromAmino(object: MsgUpdateGroupPolicyMetadataAmino): MsgUpdateGroupPolicyMetadata;
    toAmino(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataAmino;
};
export declare const MsgUpdateGroupPolicyMetadataResponse: {
    encode(_: MsgUpdateGroupPolicyMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadataResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse;
    toJSON(_: MsgUpdateGroupPolicyMetadataResponse): unknown;
    fromPartial(_: Partial<MsgUpdateGroupPolicyMetadataResponse>): MsgUpdateGroupPolicyMetadataResponse;
    fromAmino(_: MsgUpdateGroupPolicyMetadataResponseAmino): MsgUpdateGroupPolicyMetadataResponse;
    toAmino(_: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseAmino;
};
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
export declare const MsgWithdrawProposal: {
    encode(message: MsgWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposal;
    fromJSON(object: any): MsgWithdrawProposal;
    toJSON(message: MsgWithdrawProposal): unknown;
    fromPartial(object: Partial<MsgWithdrawProposal>): MsgWithdrawProposal;
    fromAmino(object: MsgWithdrawProposalAmino): MsgWithdrawProposal;
    toAmino(message: MsgWithdrawProposal): MsgWithdrawProposalAmino;
};
export declare const MsgWithdrawProposalResponse: {
    encode(_: MsgWithdrawProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposalResponse;
    fromJSON(_: any): MsgWithdrawProposalResponse;
    toJSON(_: MsgWithdrawProposalResponse): unknown;
    fromPartial(_: Partial<MsgWithdrawProposalResponse>): MsgWithdrawProposalResponse;
    fromAmino(_: MsgWithdrawProposalResponseAmino): MsgWithdrawProposalResponse;
    toAmino(_: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseAmino;
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
export declare const MsgExec: {
    encode(message: MsgExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec;
    fromJSON(object: any): MsgExec;
    toJSON(message: MsgExec): unknown;
    fromPartial(object: Partial<MsgExec>): MsgExec;
    fromAmino(object: MsgExecAmino): MsgExec;
    toAmino(message: MsgExec): MsgExecAmino;
};
export declare const MsgExecResponse: {
    encode(message: MsgExecResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse;
    fromJSON(object: any): MsgExecResponse;
    toJSON(message: MsgExecResponse): unknown;
    fromPartial(object: Partial<MsgExecResponse>): MsgExecResponse;
    fromAmino(object: MsgExecResponseAmino): MsgExecResponse;
    toAmino(message: MsgExecResponse): MsgExecResponseAmino;
};
export declare const MsgLeaveGroup: {
    encode(message: MsgLeaveGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroup;
    fromJSON(object: any): MsgLeaveGroup;
    toJSON(message: MsgLeaveGroup): unknown;
    fromPartial(object: Partial<MsgLeaveGroup>): MsgLeaveGroup;
    fromAmino(object: MsgLeaveGroupAmino): MsgLeaveGroup;
    toAmino(message: MsgLeaveGroup): MsgLeaveGroupAmino;
};
export declare const MsgLeaveGroupResponse: {
    encode(_: MsgLeaveGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroupResponse;
    fromJSON(_: any): MsgLeaveGroupResponse;
    toJSON(_: MsgLeaveGroupResponse): unknown;
    fromPartial(_: Partial<MsgLeaveGroupResponse>): MsgLeaveGroupResponse;
    fromAmino(_: MsgLeaveGroupResponseAmino): MsgLeaveGroupResponse;
    toAmino(_: MsgLeaveGroupResponse): MsgLeaveGroupResponseAmino;
};
export declare const DecisionPolicy_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => ThresholdDecisionPolicy | PercentageDecisionPolicy | Any;
export declare const DecisionPolicy_FromAmino: (content: AnyAmino) => Any;
export declare const DecisionPolicy_ToAmino: (content: Any) => AnyAmino | {
    type: string;
    value: import("./types").ThresholdDecisionPolicyAmino;
} | {
    type: string;
    value: import("./types").PercentageDecisionPolicyAmino;
};
