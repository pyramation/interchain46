import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoAmino, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoAmino, GroupPolicyInfoSDKType, GroupMember, GroupMemberAmino, GroupMemberSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType, TallyResult, TallyResultAmino, TallyResultSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
    /** group_id is the unique ID of the group. */
    groupId: Long;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequestAmino {
    /** group_id is the unique ID of the group. */
    group_id: string;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequestSDKType {
    group_id: Long;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
    /** info is the GroupInfo for the group. */
    info?: GroupInfo;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponseAmino {
    /** info is the GroupInfo for the group. */
    info?: GroupInfoAmino;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponseSDKType {
    info?: GroupInfoSDKType;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequest {
    /** address is the account address of the group policy. */
    address: string;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequestAmino {
    /** address is the account address of the group policy. */
    address: string;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequestSDKType {
    address: string;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponse {
    /** info is the GroupPolicyInfo for the group policy. */
    info?: GroupPolicyInfo;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponseAmino {
    /** info is the GroupPolicyInfo for the group policy. */
    info?: GroupPolicyInfoAmino;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponseSDKType {
    info?: GroupPolicyInfoSDKType;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequest {
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequestAmino {
    /** group_id is the unique ID of the group. */
    group_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequestSDKType {
    group_id: Long;
    pagination?: PageRequestSDKType;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
    /** members are the members of the group with given group_id. */
    members: GroupMember[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponseAmino {
    /** members are the members of the group with given group_id. */
    members: GroupMemberAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponseSDKType {
    members: GroupMemberSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequest {
    /** admin is the account address of a group's admin. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequestAmino {
    /** admin is the account address of a group's admin. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequestSDKType {
    admin: string;
    pagination?: PageRequestSDKType;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
    /** groups are the groups info with the provided admin. */
    groups: GroupInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponseAmino {
    /** groups are the groups info with the provided admin. */
    groups: GroupInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponseSDKType {
    groups: GroupInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequest {
    /** group_id is the unique ID of the group policy's group. */
    groupId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequestAmino {
    /** group_id is the unique ID of the group policy's group. */
    group_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequestSDKType {
    group_id: Long;
    pagination?: PageRequestSDKType;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponse {
    /** group_policies are the group policies info associated with the provided group. */
    groupPolicies: GroupPolicyInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponseAmino {
    /** group_policies are the group policies info associated with the provided group. */
    group_policies: GroupPolicyInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponseSDKType {
    group_policies: GroupPolicyInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequest {
    /** admin is the admin address of the group policy. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequestAmino {
    /** admin is the admin address of the group policy. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequestSDKType {
    admin: string;
    pagination?: PageRequestSDKType;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponse {
    /** group_policies are the group policies info with provided admin. */
    groupPolicies: GroupPolicyInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponseAmino {
    /** group_policies are the group policies info with provided admin. */
    group_policies: GroupPolicyInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponseSDKType {
    group_policies: GroupPolicyInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: Long;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequestAmino {
    /** proposal_id is the unique ID of a proposal. */
    proposal_id: string;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequestSDKType {
    proposal_id: Long;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
    /** proposal is the proposal info. */
    proposal?: Proposal;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponseAmino {
    /** proposal is the proposal info. */
    proposal?: ProposalAmino;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponseSDKType {
    proposal?: ProposalSDKType;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequest {
    /** address is the account address of the group policy related to proposals. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequestAmino {
    /** address is the account address of the group policy related to proposals. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponse {
    /** proposals are the proposals with given group policy. */
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponseAmino {
    /** proposals are the proposals with given group policy. */
    proposals: ProposalAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponseSDKType {
    proposals: ProposalSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: Long;
    /** voter is a proposal voter account address. */
    voter: string;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequestAmino {
    /** proposal_id is the unique ID of a proposal. */
    proposal_id: string;
    /** voter is a proposal voter account address. */
    voter: string;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequestSDKType {
    proposal_id: Long;
    voter: string;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponse {
    /** vote is the vote with given proposal_id and voter. */
    vote?: Vote;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponseAmino {
    /** vote is the vote with given proposal_id and voter. */
    vote?: VoteAmino;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponseSDKType {
    vote?: VoteSDKType;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequestAmino {
    /** proposal_id is the unique ID of a proposal. */
    proposal_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequestSDKType {
    proposal_id: Long;
    pagination?: PageRequestSDKType;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
    /** votes are the list of votes for given proposal_id. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponseAmino {
    /** votes are the list of votes for given proposal_id. */
    votes: VoteAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponseSDKType {
    votes: VoteSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
    /** voter is a proposal voter account address. */
    voter: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequestAmino {
    /** voter is a proposal voter account address. */
    voter: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequestSDKType {
    voter: string;
    pagination?: PageRequestSDKType;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
    /** votes are the list of votes by given voter. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponseAmino {
    /** votes are the list of votes by given voter. */
    votes: VoteAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponseSDKType {
    votes: VoteSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequest {
    /** address is the group member address. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequestAmino {
    /** address is the group member address. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponse {
    /** groups are the groups info with the provided group member. */
    groups: GroupInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponseAmino {
    /** groups are the groups info with the provided group member. */
    groups: GroupInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponseSDKType {
    groups: GroupInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequest {
    /** proposal_id is the unique id of a proposal. */
    proposalId: Long;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequestAmino {
    /** proposal_id is the unique id of a proposal. */
    proposal_id: string;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequestSDKType {
    proposal_id: Long;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tally?: TallyResult;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponseAmino {
    /** tally defines the requested tally. */
    tally?: TallyResultAmino;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponseSDKType {
    tally?: TallyResultSDKType;
}
export declare const QueryGroupInfoRequest: {
    encode(message: QueryGroupInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupInfoRequest;
    fromJSON(object: any): QueryGroupInfoRequest;
    toJSON(message: QueryGroupInfoRequest): unknown;
    fromPartial(object: Partial<QueryGroupInfoRequest>): QueryGroupInfoRequest;
    fromAmino(object: QueryGroupInfoRequestAmino): QueryGroupInfoRequest;
    toAmino(message: QueryGroupInfoRequest): QueryGroupInfoRequestAmino;
};
export declare const QueryGroupInfoResponse: {
    encode(message: QueryGroupInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupInfoResponse;
    fromJSON(object: any): QueryGroupInfoResponse;
    toJSON(message: QueryGroupInfoResponse): unknown;
    fromPartial(object: Partial<QueryGroupInfoResponse>): QueryGroupInfoResponse;
    fromAmino(object: QueryGroupInfoResponseAmino): QueryGroupInfoResponse;
    toAmino(message: QueryGroupInfoResponse): QueryGroupInfoResponseAmino;
};
export declare const QueryGroupPolicyInfoRequest: {
    encode(message: QueryGroupPolicyInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPolicyInfoRequest;
    fromJSON(object: any): QueryGroupPolicyInfoRequest;
    toJSON(message: QueryGroupPolicyInfoRequest): unknown;
    fromPartial(object: Partial<QueryGroupPolicyInfoRequest>): QueryGroupPolicyInfoRequest;
    fromAmino(object: QueryGroupPolicyInfoRequestAmino): QueryGroupPolicyInfoRequest;
    toAmino(message: QueryGroupPolicyInfoRequest): QueryGroupPolicyInfoRequestAmino;
};
export declare const QueryGroupPolicyInfoResponse: {
    encode(message: QueryGroupPolicyInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPolicyInfoResponse;
    fromJSON(object: any): QueryGroupPolicyInfoResponse;
    toJSON(message: QueryGroupPolicyInfoResponse): unknown;
    fromPartial(object: Partial<QueryGroupPolicyInfoResponse>): QueryGroupPolicyInfoResponse;
    fromAmino(object: QueryGroupPolicyInfoResponseAmino): QueryGroupPolicyInfoResponse;
    toAmino(message: QueryGroupPolicyInfoResponse): QueryGroupPolicyInfoResponseAmino;
};
export declare const QueryGroupMembersRequest: {
    encode(message: QueryGroupMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersRequest;
    fromJSON(object: any): QueryGroupMembersRequest;
    toJSON(message: QueryGroupMembersRequest): unknown;
    fromPartial(object: Partial<QueryGroupMembersRequest>): QueryGroupMembersRequest;
    fromAmino(object: QueryGroupMembersRequestAmino): QueryGroupMembersRequest;
    toAmino(message: QueryGroupMembersRequest): QueryGroupMembersRequestAmino;
};
export declare const QueryGroupMembersResponse: {
    encode(message: QueryGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersResponse;
    fromJSON(object: any): QueryGroupMembersResponse;
    toJSON(message: QueryGroupMembersResponse): unknown;
    fromPartial(object: Partial<QueryGroupMembersResponse>): QueryGroupMembersResponse;
    fromAmino(object: QueryGroupMembersResponseAmino): QueryGroupMembersResponse;
    toAmino(message: QueryGroupMembersResponse): QueryGroupMembersResponseAmino;
};
export declare const QueryGroupsByAdminRequest: {
    encode(message: QueryGroupsByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByAdminRequest;
    fromJSON(object: any): QueryGroupsByAdminRequest;
    toJSON(message: QueryGroupsByAdminRequest): unknown;
    fromPartial(object: Partial<QueryGroupsByAdminRequest>): QueryGroupsByAdminRequest;
    fromAmino(object: QueryGroupsByAdminRequestAmino): QueryGroupsByAdminRequest;
    toAmino(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestAmino;
};
export declare const QueryGroupsByAdminResponse: {
    encode(message: QueryGroupsByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByAdminResponse;
    fromJSON(object: any): QueryGroupsByAdminResponse;
    toJSON(message: QueryGroupsByAdminResponse): unknown;
    fromPartial(object: Partial<QueryGroupsByAdminResponse>): QueryGroupsByAdminResponse;
    fromAmino(object: QueryGroupsByAdminResponseAmino): QueryGroupsByAdminResponse;
    toAmino(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseAmino;
};
export declare const QueryGroupPoliciesByGroupRequest: {
    encode(message: QueryGroupPoliciesByGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByGroupRequest;
    fromJSON(object: any): QueryGroupPoliciesByGroupRequest;
    toJSON(message: QueryGroupPoliciesByGroupRequest): unknown;
    fromPartial(object: Partial<QueryGroupPoliciesByGroupRequest>): QueryGroupPoliciesByGroupRequest;
    fromAmino(object: QueryGroupPoliciesByGroupRequestAmino): QueryGroupPoliciesByGroupRequest;
    toAmino(message: QueryGroupPoliciesByGroupRequest): QueryGroupPoliciesByGroupRequestAmino;
};
export declare const QueryGroupPoliciesByGroupResponse: {
    encode(message: QueryGroupPoliciesByGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByGroupResponse;
    fromJSON(object: any): QueryGroupPoliciesByGroupResponse;
    toJSON(message: QueryGroupPoliciesByGroupResponse): unknown;
    fromPartial(object: Partial<QueryGroupPoliciesByGroupResponse>): QueryGroupPoliciesByGroupResponse;
    fromAmino(object: QueryGroupPoliciesByGroupResponseAmino): QueryGroupPoliciesByGroupResponse;
    toAmino(message: QueryGroupPoliciesByGroupResponse): QueryGroupPoliciesByGroupResponseAmino;
};
export declare const QueryGroupPoliciesByAdminRequest: {
    encode(message: QueryGroupPoliciesByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByAdminRequest;
    fromJSON(object: any): QueryGroupPoliciesByAdminRequest;
    toJSON(message: QueryGroupPoliciesByAdminRequest): unknown;
    fromPartial(object: Partial<QueryGroupPoliciesByAdminRequest>): QueryGroupPoliciesByAdminRequest;
    fromAmino(object: QueryGroupPoliciesByAdminRequestAmino): QueryGroupPoliciesByAdminRequest;
    toAmino(message: QueryGroupPoliciesByAdminRequest): QueryGroupPoliciesByAdminRequestAmino;
};
export declare const QueryGroupPoliciesByAdminResponse: {
    encode(message: QueryGroupPoliciesByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByAdminResponse;
    fromJSON(object: any): QueryGroupPoliciesByAdminResponse;
    toJSON(message: QueryGroupPoliciesByAdminResponse): unknown;
    fromPartial(object: Partial<QueryGroupPoliciesByAdminResponse>): QueryGroupPoliciesByAdminResponse;
    fromAmino(object: QueryGroupPoliciesByAdminResponseAmino): QueryGroupPoliciesByAdminResponse;
    toAmino(message: QueryGroupPoliciesByAdminResponse): QueryGroupPoliciesByAdminResponseAmino;
};
export declare const QueryProposalRequest: {
    encode(message: QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest;
    fromJSON(object: any): QueryProposalRequest;
    toJSON(message: QueryProposalRequest): unknown;
    fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest;
    fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest;
    toAmino(message: QueryProposalRequest): QueryProposalRequestAmino;
};
export declare const QueryProposalResponse: {
    encode(message: QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse;
    fromJSON(object: any): QueryProposalResponse;
    toJSON(message: QueryProposalResponse): unknown;
    fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse;
    fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse;
    toAmino(message: QueryProposalResponse): QueryProposalResponseAmino;
};
export declare const QueryProposalsByGroupPolicyRequest: {
    encode(message: QueryProposalsByGroupPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsByGroupPolicyRequest;
    fromJSON(object: any): QueryProposalsByGroupPolicyRequest;
    toJSON(message: QueryProposalsByGroupPolicyRequest): unknown;
    fromPartial(object: Partial<QueryProposalsByGroupPolicyRequest>): QueryProposalsByGroupPolicyRequest;
    fromAmino(object: QueryProposalsByGroupPolicyRequestAmino): QueryProposalsByGroupPolicyRequest;
    toAmino(message: QueryProposalsByGroupPolicyRequest): QueryProposalsByGroupPolicyRequestAmino;
};
export declare const QueryProposalsByGroupPolicyResponse: {
    encode(message: QueryProposalsByGroupPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsByGroupPolicyResponse;
    fromJSON(object: any): QueryProposalsByGroupPolicyResponse;
    toJSON(message: QueryProposalsByGroupPolicyResponse): unknown;
    fromPartial(object: Partial<QueryProposalsByGroupPolicyResponse>): QueryProposalsByGroupPolicyResponse;
    fromAmino(object: QueryProposalsByGroupPolicyResponseAmino): QueryProposalsByGroupPolicyResponse;
    toAmino(message: QueryProposalsByGroupPolicyResponse): QueryProposalsByGroupPolicyResponseAmino;
};
export declare const QueryVoteByProposalVoterRequest: {
    encode(message: QueryVoteByProposalVoterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteByProposalVoterRequest;
    fromJSON(object: any): QueryVoteByProposalVoterRequest;
    toJSON(message: QueryVoteByProposalVoterRequest): unknown;
    fromPartial(object: Partial<QueryVoteByProposalVoterRequest>): QueryVoteByProposalVoterRequest;
    fromAmino(object: QueryVoteByProposalVoterRequestAmino): QueryVoteByProposalVoterRequest;
    toAmino(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestAmino;
};
export declare const QueryVoteByProposalVoterResponse: {
    encode(message: QueryVoteByProposalVoterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteByProposalVoterResponse;
    fromJSON(object: any): QueryVoteByProposalVoterResponse;
    toJSON(message: QueryVoteByProposalVoterResponse): unknown;
    fromPartial(object: Partial<QueryVoteByProposalVoterResponse>): QueryVoteByProposalVoterResponse;
    fromAmino(object: QueryVoteByProposalVoterResponseAmino): QueryVoteByProposalVoterResponse;
    toAmino(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseAmino;
};
export declare const QueryVotesByProposalRequest: {
    encode(message: QueryVotesByProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByProposalRequest;
    fromJSON(object: any): QueryVotesByProposalRequest;
    toJSON(message: QueryVotesByProposalRequest): unknown;
    fromPartial(object: Partial<QueryVotesByProposalRequest>): QueryVotesByProposalRequest;
    fromAmino(object: QueryVotesByProposalRequestAmino): QueryVotesByProposalRequest;
    toAmino(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestAmino;
};
export declare const QueryVotesByProposalResponse: {
    encode(message: QueryVotesByProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByProposalResponse;
    fromJSON(object: any): QueryVotesByProposalResponse;
    toJSON(message: QueryVotesByProposalResponse): unknown;
    fromPartial(object: Partial<QueryVotesByProposalResponse>): QueryVotesByProposalResponse;
    fromAmino(object: QueryVotesByProposalResponseAmino): QueryVotesByProposalResponse;
    toAmino(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseAmino;
};
export declare const QueryVotesByVoterRequest: {
    encode(message: QueryVotesByVoterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByVoterRequest;
    fromJSON(object: any): QueryVotesByVoterRequest;
    toJSON(message: QueryVotesByVoterRequest): unknown;
    fromPartial(object: Partial<QueryVotesByVoterRequest>): QueryVotesByVoterRequest;
    fromAmino(object: QueryVotesByVoterRequestAmino): QueryVotesByVoterRequest;
    toAmino(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestAmino;
};
export declare const QueryVotesByVoterResponse: {
    encode(message: QueryVotesByVoterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByVoterResponse;
    fromJSON(object: any): QueryVotesByVoterResponse;
    toJSON(message: QueryVotesByVoterResponse): unknown;
    fromPartial(object: Partial<QueryVotesByVoterResponse>): QueryVotesByVoterResponse;
    fromAmino(object: QueryVotesByVoterResponseAmino): QueryVotesByVoterResponse;
    toAmino(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseAmino;
};
export declare const QueryGroupsByMemberRequest: {
    encode(message: QueryGroupsByMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByMemberRequest;
    fromJSON(object: any): QueryGroupsByMemberRequest;
    toJSON(message: QueryGroupsByMemberRequest): unknown;
    fromPartial(object: Partial<QueryGroupsByMemberRequest>): QueryGroupsByMemberRequest;
    fromAmino(object: QueryGroupsByMemberRequestAmino): QueryGroupsByMemberRequest;
    toAmino(message: QueryGroupsByMemberRequest): QueryGroupsByMemberRequestAmino;
};
export declare const QueryGroupsByMemberResponse: {
    encode(message: QueryGroupsByMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByMemberResponse;
    fromJSON(object: any): QueryGroupsByMemberResponse;
    toJSON(message: QueryGroupsByMemberResponse): unknown;
    fromPartial(object: Partial<QueryGroupsByMemberResponse>): QueryGroupsByMemberResponse;
    fromAmino(object: QueryGroupsByMemberResponseAmino): QueryGroupsByMemberResponse;
    toAmino(message: QueryGroupsByMemberResponse): QueryGroupsByMemberResponseAmino;
};
export declare const QueryTallyResultRequest: {
    encode(message: QueryTallyResultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultRequest;
    fromJSON(object: any): QueryTallyResultRequest;
    toJSON(message: QueryTallyResultRequest): unknown;
    fromPartial(object: Partial<QueryTallyResultRequest>): QueryTallyResultRequest;
    fromAmino(object: QueryTallyResultRequestAmino): QueryTallyResultRequest;
    toAmino(message: QueryTallyResultRequest): QueryTallyResultRequestAmino;
};
export declare const QueryTallyResultResponse: {
    encode(message: QueryTallyResultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultResponse;
    fromJSON(object: any): QueryTallyResultResponse;
    toJSON(message: QueryTallyResultResponse): unknown;
    fromPartial(object: Partial<QueryTallyResultResponse>): QueryTallyResultResponse;
    fromAmino(object: QueryTallyResultResponseAmino): QueryTallyResultResponse;
    toAmino(message: QueryTallyResultResponse): QueryTallyResultResponseAmino;
};
