import { MemberRequest, MemberRequestAmino, MemberRequestSDKType, VoteOption, ProposalExecutorResult, ThresholdDecisionPolicy, PercentageDecisionPolicy, voteOptionFromJSON, voteOptionToJSON, proposalExecutorResultFromJSON, proposalExecutorResultToJSON } from "./types";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, DeepPartial } from "../../../helpers";
/** Exec defines modes of execution of a proposal on creation or on new vote. */

export enum Exec {
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
  UNRECOGNIZED = -1,
}
export const ExecSDKType = Exec;
export const ExecAmino = Exec;
export function execFromJSON(object: any): Exec {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return Exec.EXEC_UNSPECIFIED;

    case 1:
    case "EXEC_TRY":
      return Exec.EXEC_TRY;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Exec.UNRECOGNIZED;
  }
}
export function execToJSON(object: Exec): string {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";

    case Exec.EXEC_TRY:
      return "EXEC_TRY";

    case Exec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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

export interface MsgUpdateGroupMembersResponse {}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */

export interface MsgUpdateGroupMembersResponseAmino {}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */

export interface MsgUpdateGroupMembersResponseSDKType {}
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

export interface MsgUpdateGroupAdminResponse {}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */

export interface MsgUpdateGroupAdminResponseAmino {}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */

export interface MsgUpdateGroupAdminResponseSDKType {}
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

export interface MsgUpdateGroupMetadataResponse {}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */

export interface MsgUpdateGroupMetadataResponseAmino {}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */

export interface MsgUpdateGroupMetadataResponseSDKType {}
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

export interface MsgUpdateGroupPolicyAdminResponse {}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */

export interface MsgUpdateGroupPolicyAdminResponseAmino {}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */

export interface MsgUpdateGroupPolicyAdminResponseSDKType {}
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

export interface MsgUpdateGroupPolicyDecisionPolicyResponse {}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */

export interface MsgUpdateGroupPolicyDecisionPolicyResponseAmino {}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */

export interface MsgUpdateGroupPolicyDecisionPolicyResponseSDKType {}
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

export interface MsgUpdateGroupPolicyMetadataResponse {}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */

export interface MsgUpdateGroupPolicyMetadataResponseAmino {}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */

export interface MsgUpdateGroupPolicyMetadataResponseSDKType {}
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

export interface MsgWithdrawProposalResponse {}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */

export interface MsgWithdrawProposalResponseAmino {}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */

export interface MsgWithdrawProposalResponseSDKType {}
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

export interface MsgVoteResponse {}
/** MsgVoteResponse is the Msg/Vote response type. */

export interface MsgVoteResponseAmino {}
/** MsgVoteResponse is the Msg/Vote response type. */

export interface MsgVoteResponseSDKType {}
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

export interface MsgLeaveGroupResponse {}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */

export interface MsgLeaveGroupResponseAmino {}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */

export interface MsgLeaveGroupResponseSDKType {}

function createBaseMsgCreateGroup(): MsgCreateGroup {
  return {
    admin: "",
    members: [],
    metadata: ""
  };
}

export const MsgCreateGroup = {
  encode(message: MsgCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    for (const v of message.members) {
      MemberRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.members.push(MemberRequest.decode(reader, reader.uint32()));
          break;

        case 3:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroup {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);

    if (message.members) {
      obj.members = message.members.map(e => e ? MemberRequest.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateGroup>): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    message.admin = object.admin ?? "";
    message.members = object.members?.map(e => MemberRequest.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },

  fromAmino(object: MsgCreateGroupAmino): MsgCreateGroup {
    return {
      admin: object.admin,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromAmino(e)) : [],
      metadata: object.metadata
    };
  },

  toAmino(message: MsgCreateGroup): MsgCreateGroupAmino {
    const obj: any = {};
    obj.admin = message.admin;

    if (message.members) {
      obj.members = message.members.map(e => e ? MemberRequest.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }

    obj.metadata = message.metadata;
    return obj;
  }

};

function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return {
    groupId: Long.UZERO
  };
}

export const MsgCreateGroupResponse = {
  encode(message: MsgCreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroupResponse {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgCreateGroupResponse>): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    return message;
  },

  fromAmino(object: MsgCreateGroupResponseAmino): MsgCreateGroupResponse {
    return {
      groupId: Long.fromString(object.group_id)
    };
  },

  toAmino(message: MsgCreateGroupResponse): MsgCreateGroupResponseAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  }

};

function createBaseMsgUpdateGroupMembers(): MsgUpdateGroupMembers {
  return {
    admin: "",
    groupId: Long.UZERO,
    memberUpdates: []
  };
}

export const MsgUpdateGroupMembers = {
  encode(message: MsgUpdateGroupMembers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }

    for (const v of message.memberUpdates) {
      MemberRequest.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembers();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.groupId = (reader.uint64() as Long);
          break;

        case 3:
          message.memberUpdates.push(MemberRequest.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateGroupMembers {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      memberUpdates: Array.isArray(object?.memberUpdates) ? object.memberUpdates.map((e: any) => MemberRequest.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgUpdateGroupMembers): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());

    if (message.memberUpdates) {
      obj.memberUpdates = message.memberUpdates.map(e => e ? MemberRequest.toJSON(e) : undefined);
    } else {
      obj.memberUpdates = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers {
    const message = createBaseMsgUpdateGroupMembers();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.memberUpdates = object.memberUpdates?.map(e => MemberRequest.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: MsgUpdateGroupMembersAmino): MsgUpdateGroupMembers {
    return {
      admin: object.admin,
      groupId: Long.fromString(object.group_id),
      memberUpdates: Array.isArray(object?.member_updates) ? object.member_updates.map((e: any) => MemberRequest.fromAmino(e)) : []
    };
  },

  toAmino(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;

    if (message.memberUpdates) {
      obj.member_updates = message.memberUpdates.map(e => e ? MemberRequest.toAmino(e) : undefined);
    } else {
      obj.member_updates = [];
    }

    return obj;
  }

};

function createBaseMsgUpdateGroupMembersResponse(): MsgUpdateGroupMembersResponse {
  return {};
}

export const MsgUpdateGroupMembersResponse = {
  encode(_: MsgUpdateGroupMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateGroupMembersResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupMembersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },

  fromAmino(_: MsgUpdateGroupMembersResponseAmino): MsgUpdateGroupMembersResponse {
    return {};
  },

  toAmino(_: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateGroupAdmin(): MsgUpdateGroupAdmin {
  return {
    admin: "",
    groupId: Long.UZERO,
    newAdmin: ""
  };
}

export const MsgUpdateGroupAdmin = {
  encode(message: MsgUpdateGroupAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }

    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdmin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.groupId = (reader.uint64() as Long);
          break;

        case 3:
          message.newAdmin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateGroupAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },

  toJSON(message: MsgUpdateGroupAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial(object: Partial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin {
    const message = createBaseMsgUpdateGroupAdmin();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },

  fromAmino(object: MsgUpdateGroupAdminAmino): MsgUpdateGroupAdmin {
    return {
      admin: object.admin,
      groupId: Long.fromString(object.group_id),
      newAdmin: object.new_admin
    };
  },

  toAmino(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.new_admin = message.newAdmin;
    return obj;
  }

};

function createBaseMsgUpdateGroupAdminResponse(): MsgUpdateGroupAdminResponse {
  return {};
}

export const MsgUpdateGroupAdminResponse = {
  encode(_: MsgUpdateGroupAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdminResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateGroupAdminResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateGroupAdminResponse>): MsgUpdateGroupAdminResponse {
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  },

  fromAmino(_: MsgUpdateGroupAdminResponseAmino): MsgUpdateGroupAdminResponse {
    return {};
  },

  toAmino(_: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateGroupMetadata(): MsgUpdateGroupMetadata {
  return {
    admin: "",
    groupId: Long.UZERO,
    metadata: ""
  };
}

export const MsgUpdateGroupMetadata = {
  encode(message: MsgUpdateGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.groupId = (reader.uint64() as Long);
          break;

        case 3:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateGroupMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: MsgUpdateGroupMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: Partial<MsgUpdateGroupMetadata>): MsgUpdateGroupMetadata {
    const message = createBaseMsgUpdateGroupMetadata();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.metadata = object.metadata ?? "";
    return message;
  },

  fromAmino(object: MsgUpdateGroupMetadataAmino): MsgUpdateGroupMetadata {
    return {
      admin: object.admin,
      groupId: Long.fromString(object.group_id),
      metadata: object.metadata
    };
  },

  toAmino(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.metadata = message.metadata;
    return obj;
  }

};

function createBaseMsgUpdateGroupMetadataResponse(): MsgUpdateGroupMetadataResponse {
  return {};
}

export const MsgUpdateGroupMetadataResponse = {
  encode(_: MsgUpdateGroupMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateGroupMetadataResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateGroupMetadataResponse>): MsgUpdateGroupMetadataResponse {
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  },

  fromAmino(_: MsgUpdateGroupMetadataResponseAmino): MsgUpdateGroupMetadataResponse {
    return {};
  },

  toAmino(_: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgCreateGroupPolicy(): MsgCreateGroupPolicy {
  return {
    admin: "",
    groupId: Long.UZERO,
    metadata: "",
    decisionPolicy: undefined
  };
}

export const MsgCreateGroupPolicy = {
  encode(message: MsgCreateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    if (message.decisionPolicy !== undefined) {
      Any.encode((message.decisionPolicy as Any), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.groupId = (reader.uint64() as Long);
          break;

        case 3:
          message.metadata = reader.string();
          break;

        case 4:
          message.decisionPolicy = (DecisionPolicy_InterfaceDecoder(reader) as Any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroupPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
    };
  },

  toJSON(message: MsgCreateGroupPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateGroupPolicy>): MsgCreateGroupPolicy {
    const message = createBaseMsgCreateGroupPolicy();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.metadata = object.metadata ?? "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },

  fromAmino(object: MsgCreateGroupPolicyAmino): MsgCreateGroupPolicy {
    return {
      admin: object.admin,
      groupId: Long.fromString(object.group_id),
      metadata: object.metadata,
      decisionPolicy: object?.decision_policy ? DecisionPolicy_FromAmino(object.decision_policy) : undefined
    };
  },

  toAmino(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.metadata = message.metadata;
    obj.decision_policy = message.decisionPolicy ? DecisionPolicy_ToAmino((message.decisionPolicy as Any)) : undefined;
    return obj;
  }

};

function createBaseMsgCreateGroupPolicyResponse(): MsgCreateGroupPolicyResponse {
  return {
    address: ""
  };
}

export const MsgCreateGroupPolicyResponse = {
  encode(message: MsgCreateGroupPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroupPolicyResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: MsgCreateGroupPolicyResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateGroupPolicyResponse>): MsgCreateGroupPolicyResponse {
    const message = createBaseMsgCreateGroupPolicyResponse();
    message.address = object.address ?? "";
    return message;
  },

  fromAmino(object: MsgCreateGroupPolicyResponseAmino): MsgCreateGroupPolicyResponse {
    return {
      address: object.address
    };
  },

  toAmino(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  }

};

function createBaseMsgUpdateGroupPolicyAdmin(): MsgUpdateGroupPolicyAdmin {
  return {
    admin: "",
    groupPolicyAddress: "",
    newAdmin: ""
  };
}

export const MsgUpdateGroupPolicyAdmin = {
  encode(message: MsgUpdateGroupPolicyAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }

    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdmin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.groupPolicyAddress = reader.string();
          break;

        case 3:
          message.newAdmin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },

  toJSON(message: MsgUpdateGroupPolicyAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial(object: Partial<MsgUpdateGroupPolicyAdmin>): MsgUpdateGroupPolicyAdmin {
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    message.admin = object.admin ?? "";
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },

  fromAmino(object: MsgUpdateGroupPolicyAdminAmino): MsgUpdateGroupPolicyAdmin {
    return {
      admin: object.admin,
      groupPolicyAddress: object.group_policy_address,
      newAdmin: object.new_admin
    };
  },

  toAmino(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_policy_address = message.groupPolicyAddress;
    obj.new_admin = message.newAdmin;
    return obj;
  }

};

function createBaseMsgUpdateGroupPolicyAdminResponse(): MsgUpdateGroupPolicyAdminResponse {
  return {};
}

export const MsgUpdateGroupPolicyAdminResponse = {
  encode(_: MsgUpdateGroupPolicyAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupPolicyAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateGroupPolicyAdminResponse>): MsgUpdateGroupPolicyAdminResponse {
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
    return message;
  },

  fromAmino(_: MsgUpdateGroupPolicyAdminResponseAmino): MsgUpdateGroupPolicyAdminResponse {
    return {};
  },

  toAmino(_: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgCreateGroupWithPolicy(): MsgCreateGroupWithPolicy {
  return {
    admin: "",
    members: [],
    groupMetadata: "",
    groupPolicyMetadata: "",
    groupPolicyAsAdmin: false,
    decisionPolicy: undefined
  };
}

export const MsgCreateGroupWithPolicy = {
  encode(message: MsgCreateGroupWithPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    for (const v of message.members) {
      MemberRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.groupMetadata !== "") {
      writer.uint32(26).string(message.groupMetadata);
    }

    if (message.groupPolicyMetadata !== "") {
      writer.uint32(34).string(message.groupPolicyMetadata);
    }

    if (message.groupPolicyAsAdmin === true) {
      writer.uint32(40).bool(message.groupPolicyAsAdmin);
    }

    if (message.decisionPolicy !== undefined) {
      Any.encode((message.decisionPolicy as Any), writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.members.push(MemberRequest.decode(reader, reader.uint32()));
          break;

        case 3:
          message.groupMetadata = reader.string();
          break;

        case 4:
          message.groupPolicyMetadata = reader.string();
          break;

        case 5:
          message.groupPolicyAsAdmin = reader.bool();
          break;

        case 6:
          message.decisionPolicy = (DecisionPolicy_InterfaceDecoder(reader) as Any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroupWithPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromJSON(e)) : [],
      groupMetadata: isSet(object.groupMetadata) ? String(object.groupMetadata) : "",
      groupPolicyMetadata: isSet(object.groupPolicyMetadata) ? String(object.groupPolicyMetadata) : "",
      groupPolicyAsAdmin: isSet(object.groupPolicyAsAdmin) ? Boolean(object.groupPolicyAsAdmin) : false,
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
    };
  },

  toJSON(message: MsgCreateGroupWithPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);

    if (message.members) {
      obj.members = message.members.map(e => e ? MemberRequest.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }

    message.groupMetadata !== undefined && (obj.groupMetadata = message.groupMetadata);
    message.groupPolicyMetadata !== undefined && (obj.groupPolicyMetadata = message.groupPolicyMetadata);
    message.groupPolicyAsAdmin !== undefined && (obj.groupPolicyAsAdmin = message.groupPolicyAsAdmin);
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateGroupWithPolicy>): MsgCreateGroupWithPolicy {
    const message = createBaseMsgCreateGroupWithPolicy();
    message.admin = object.admin ?? "";
    message.members = object.members?.map(e => MemberRequest.fromPartial(e)) || [];
    message.groupMetadata = object.groupMetadata ?? "";
    message.groupPolicyMetadata = object.groupPolicyMetadata ?? "";
    message.groupPolicyAsAdmin = object.groupPolicyAsAdmin ?? false;
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },

  fromAmino(object: MsgCreateGroupWithPolicyAmino): MsgCreateGroupWithPolicy {
    return {
      admin: object.admin,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromAmino(e)) : [],
      groupMetadata: object.group_metadata,
      groupPolicyMetadata: object.group_policy_metadata,
      groupPolicyAsAdmin: object.group_policy_as_admin,
      decisionPolicy: object?.decision_policy ? DecisionPolicy_FromAmino(object.decision_policy) : undefined
    };
  },

  toAmino(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyAmino {
    const obj: any = {};
    obj.admin = message.admin;

    if (message.members) {
      obj.members = message.members.map(e => e ? MemberRequest.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }

    obj.group_metadata = message.groupMetadata;
    obj.group_policy_metadata = message.groupPolicyMetadata;
    obj.group_policy_as_admin = message.groupPolicyAsAdmin;
    obj.decision_policy = message.decisionPolicy ? DecisionPolicy_ToAmino((message.decisionPolicy as Any)) : undefined;
    return obj;
  }

};

function createBaseMsgCreateGroupWithPolicyResponse(): MsgCreateGroupWithPolicyResponse {
  return {
    groupId: Long.UZERO,
    groupPolicyAddress: ""
  };
}

export const MsgCreateGroupWithPolicyResponse = {
  encode(message: MsgCreateGroupWithPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }

    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;

        case 2:
          message.groupPolicyAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroupWithPolicyResponse {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : ""
    };
  },

  toJSON(message: MsgCreateGroupWithPolicyResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateGroupWithPolicyResponse>): MsgCreateGroupWithPolicyResponse {
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    return message;
  },

  fromAmino(object: MsgCreateGroupWithPolicyResponseAmino): MsgCreateGroupWithPolicyResponse {
    return {
      groupId: Long.fromString(object.group_id),
      groupPolicyAddress: object.group_policy_address
    };
  },

  toAmino(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.group_policy_address = message.groupPolicyAddress;
    return obj;
  }

};

function createBaseMsgUpdateGroupPolicyDecisionPolicy(): MsgUpdateGroupPolicyDecisionPolicy {
  return {
    admin: "",
    groupPolicyAddress: "",
    decisionPolicy: undefined
  };
}

export const MsgUpdateGroupPolicyDecisionPolicy = {
  encode(message: MsgUpdateGroupPolicyDecisionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }

    if (message.decisionPolicy !== undefined) {
      Any.encode((message.decisionPolicy as Any), writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.groupPolicyAddress = reader.string();
          break;

        case 3:
          message.decisionPolicy = (DecisionPolicy_InterfaceDecoder(reader) as Any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
    };
  },

  toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgUpdateGroupPolicyDecisionPolicy>): MsgUpdateGroupPolicyDecisionPolicy {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    message.admin = object.admin ?? "";
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },

  fromAmino(object: MsgUpdateGroupPolicyDecisionPolicyAmino): MsgUpdateGroupPolicyDecisionPolicy {
    return {
      admin: object.admin,
      groupPolicyAddress: object.group_policy_address,
      decisionPolicy: object?.decision_policy ? DecisionPolicy_FromAmino(object.decision_policy) : undefined
    };
  },

  toAmino(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_policy_address = message.groupPolicyAddress;
    obj.decision_policy = message.decisionPolicy ? DecisionPolicy_ToAmino((message.decisionPolicy as Any)) : undefined;
    return obj;
  }

};

function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse(): MsgUpdateGroupPolicyDecisionPolicyResponse {
  return {};
}

export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
  encode(_: MsgUpdateGroupPolicyDecisionPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateGroupPolicyDecisionPolicyResponse>): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return message;
  },

  fromAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponseAmino): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return {};
  },

  toAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateGroupPolicyMetadata(): MsgUpdateGroupPolicyMetadata {
  return {
    admin: "",
    groupPolicyAddress: "",
    metadata: ""
  };
}

export const MsgUpdateGroupPolicyMetadata = {
  encode(message: MsgUpdateGroupPolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.groupPolicyAddress = reader.string();
          break;

        case 3:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: MsgUpdateGroupPolicyMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: Partial<MsgUpdateGroupPolicyMetadata>): MsgUpdateGroupPolicyMetadata {
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    message.admin = object.admin ?? "";
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },

  fromAmino(object: MsgUpdateGroupPolicyMetadataAmino): MsgUpdateGroupPolicyMetadata {
    return {
      admin: object.admin,
      groupPolicyAddress: object.group_policy_address,
      metadata: object.metadata
    };
  },

  toAmino(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_policy_address = message.groupPolicyAddress;
    obj.metadata = message.metadata;
    return obj;
  }

};

function createBaseMsgUpdateGroupPolicyMetadataResponse(): MsgUpdateGroupPolicyMetadataResponse {
  return {};
}

export const MsgUpdateGroupPolicyMetadataResponse = {
  encode(_: MsgUpdateGroupPolicyMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupPolicyMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateGroupPolicyMetadataResponse>): MsgUpdateGroupPolicyMetadataResponse {
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return message;
  },

  fromAmino(_: MsgUpdateGroupPolicyMetadataResponseAmino): MsgUpdateGroupPolicyMetadataResponse {
    return {};
  },

  toAmino(_: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    groupPolicyAddress: "",
    proposers: [],
    metadata: "",
    messages: [],
    exec: 0
  };
}

export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupPolicyAddress !== "") {
      writer.uint32(10).string(message.groupPolicyAddress);
    }

    for (const v of message.proposers) {
      writer.uint32(18).string(v!);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groupPolicyAddress = reader.string();
          break;

        case 2:
          message.proposers.push(reader.string());
          break;

        case 3:
          message.metadata = reader.string();
          break;

        case 4:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;

        case 5:
          message.exec = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSubmitProposal {
    return {
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => String(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0
    };
  },

  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);

    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata);

    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }

    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },

  fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.proposers = object.proposers?.map(e => e) || [];
    message.metadata = object.metadata ?? "";
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.exec = object.exec ?? 0;
    return message;
  },

  fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal {
    return {
      groupPolicyAddress: object.group_policy_address,
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => e) : [],
      metadata: object.metadata,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromAmino(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0
    };
  },

  toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino {
    const obj: any = {};
    obj.group_policy_address = message.groupPolicyAddress;

    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }

    obj.metadata = message.metadata;

    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = [];
    }

    obj.exec = message.exec;
    return obj;
  }

};

function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: Long.UZERO
  };
}

export const MsgSubmitProposalResponse = {
  encode(message: MsgSubmitProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSubmitProposalResponse {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },

  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  },

  fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse {
    return {
      proposalId: Long.fromString(object.proposal_id)
    };
  },

  toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  }

};

function createBaseMsgWithdrawProposal(): MsgWithdrawProposal {
  return {
    proposalId: Long.UZERO,
    address: ""
  };
}

export const MsgWithdrawProposal = {
  encode(message: MsgWithdrawProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgWithdrawProposal {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: MsgWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<MsgWithdrawProposal>): MsgWithdrawProposal {
    const message = createBaseMsgWithdrawProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },

  fromAmino(object: MsgWithdrawProposalAmino): MsgWithdrawProposal {
    return {
      proposalId: Long.fromString(object.proposal_id),
      address: object.address
    };
  },

  toAmino(message: MsgWithdrawProposal): MsgWithdrawProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.address = message.address;
    return obj;
  }

};

function createBaseMsgWithdrawProposalResponse(): MsgWithdrawProposalResponse {
  return {};
}

export const MsgWithdrawProposalResponse = {
  encode(_: MsgWithdrawProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgWithdrawProposalResponse {
    return {};
  },

  toJSON(_: MsgWithdrawProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgWithdrawProposalResponse>): MsgWithdrawProposalResponse {
    const message = createBaseMsgWithdrawProposalResponse();
    return message;
  },

  fromAmino(_: MsgWithdrawProposalResponseAmino): MsgWithdrawProposalResponse {
    return {};
  },

  toAmino(_: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgVote(): MsgVote {
  return {
    proposalId: Long.UZERO,
    voter: "",
    option: 0,
    metadata: "",
    exec: 0
  };
}

export const MsgVote = {
  encode(message: MsgVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.option = (reader.int32() as any);
          break;

        case 4:
          message.metadata = reader.string();
          break;

        case 5:
          message.exec = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgVote {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0
    };
  },

  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },

  fromPartial(object: Partial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.exec = object.exec ?? 0;
    return message;
  },

  fromAmino(object: MsgVoteAmino): MsgVote {
    return {
      proposalId: Long.fromString(object.proposal_id),
      voter: object.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: object.metadata,
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0
    };
  },

  toAmino(message: MsgVote): MsgVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    obj.option = message.option;
    obj.metadata = message.metadata;
    obj.exec = message.exec;
    return obj;
  }

};

function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}

export const MsgVoteResponse = {
  encode(_: MsgVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgVoteResponse {
    return {};
  },

  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },

  fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse {
    return {};
  },

  toAmino(_: MsgVoteResponse): MsgVoteResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgExec(): MsgExec {
  return {
    proposalId: Long.UZERO,
    executor: ""
  };
}

export const MsgExec = {
  encode(message: MsgExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.executor = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExec {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      executor: isSet(object.executor) ? String(object.executor) : ""
    };
  },

  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.executor !== undefined && (obj.executor = message.executor);
    return obj;
  },

  fromPartial(object: Partial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.executor = object.executor ?? "";
    return message;
  },

  fromAmino(object: MsgExecAmino): MsgExec {
    return {
      proposalId: Long.fromString(object.proposal_id),
      executor: object.executor
    };
  },

  toAmino(message: MsgExec): MsgExecAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.executor = message.executor;
    return obj;
  }

};

function createBaseMsgExecResponse(): MsgExecResponse {
  return {
    result: 0
  };
}

export const MsgExecResponse = {
  encode(message: MsgExecResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.result = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecResponse {
    return {
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0
    };
  },

  toJSON(message: MsgExecResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
    return obj;
  },

  fromPartial(object: Partial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.result = object.result ?? 0;
    return message;
  },

  fromAmino(object: MsgExecResponseAmino): MsgExecResponse {
    return {
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0
    };
  },

  toAmino(message: MsgExecResponse): MsgExecResponseAmino {
    const obj: any = {};
    obj.result = message.result;
    return obj;
  }

};

function createBaseMsgLeaveGroup(): MsgLeaveGroup {
  return {
    address: "",
    groupId: Long.UZERO
  };
}

export const MsgLeaveGroup = {
  encode(message: MsgLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.groupId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgLeaveGroup {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO
    };
  },

  toJSON(message: MsgLeaveGroup): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgLeaveGroup>): MsgLeaveGroup {
    const message = createBaseMsgLeaveGroup();
    message.address = object.address ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    return message;
  },

  fromAmino(object: MsgLeaveGroupAmino): MsgLeaveGroup {
    return {
      address: object.address,
      groupId: Long.fromString(object.group_id)
    };
  },

  toAmino(message: MsgLeaveGroup): MsgLeaveGroupAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  }

};

function createBaseMsgLeaveGroupResponse(): MsgLeaveGroupResponse {
  return {};
}

export const MsgLeaveGroupResponse = {
  encode(_: MsgLeaveGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgLeaveGroupResponse {
    return {};
  },

  toJSON(_: MsgLeaveGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgLeaveGroupResponse>): MsgLeaveGroupResponse {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  },

  fromAmino(_: MsgLeaveGroupResponseAmino): MsgLeaveGroupResponse {
    return {};
  },

  toAmino(_: MsgLeaveGroupResponse): MsgLeaveGroupResponseAmino {
    const obj: any = {};
    return obj;
  }

};
export const DecisionPolicy_InterfaceDecoder = (input: _m0.Reader | Uint8Array): ThresholdDecisionPolicy | PercentageDecisionPolicy | Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());

  switch (data.typeUrl) {
    case "/cosmos.group.v1.ThresholdDecisionPolicy":
      return ThresholdDecisionPolicy.decode(data.value);

    case "/cosmos.group.v1.PercentageDecisionPolicy":
      return PercentageDecisionPolicy.decode(data.value);

    default:
      return data;
  }
};
export const DecisionPolicy_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "cosmos-sdk/ThresholdDecisionPolicy":
      return Any.fromPartial({
        typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
        value: ThresholdDecisionPolicy.encode(ThresholdDecisionPolicy.fromPartial((content.value as DeepPartial<ThresholdDecisionPolicy>))).finish()
      });

    case "cosmos-sdk/PercentageDecisionPolicy":
      return Any.fromPartial({
        typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
        value: PercentageDecisionPolicy.encode(PercentageDecisionPolicy.fromPartial((content.value as DeepPartial<PercentageDecisionPolicy>))).finish()
      });

    default:
      return Any.fromAmino(content);
  }
};
export const DecisionPolicy_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmos.group.v1.ThresholdDecisionPolicy":
      return {
        type: "cosmos-sdk/ThresholdDecisionPolicy",
        value: ThresholdDecisionPolicy.toAmino(ThresholdDecisionPolicy.decode(content.value))
      };

    case "/cosmos.group.v1.PercentageDecisionPolicy":
      return {
        type: "cosmos-sdk/PercentageDecisionPolicy",
        value: PercentageDecisionPolicy.toAmino(PercentageDecisionPolicy.decode(content.value))
      };

    default:
      return Any.toAmino(content);
  }
};