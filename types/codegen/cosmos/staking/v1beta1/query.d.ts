import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorAmino, ValidatorSDKType, DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationAmino, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseAmino, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoAmino, HistoricalInfoSDKType, Pool, PoolAmino, PoolSDKType, Params, ParamsAmino, ParamsSDKType } from "./staking";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
    /** status enables to query for validators matching a given status. */
    status: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequestAmino {
    /** status enables to query for validators matching a given status. */
    status: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequestSDKType {
    status: string;
    pagination?: PageRequestSDKType;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
    /** validators contains all the queried validators. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponseAmino {
    /** validators contains all the queried validators. */
    validators: ValidatorAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponseSDKType {
    validators: ValidatorSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequestAmino {
    /** validator_addr defines the validator address to query for. */
    validator_addr: string;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequestSDKType {
    validator_addr: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
    /** validator defines the validator info. */
    validator?: Validator;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponseAmino {
    /** validator defines the validator info. */
    validator?: ValidatorAmino;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponseSDKType {
    validator?: ValidatorSDKType;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequestAmino {
    /** validator_addr defines the validator address to query for. */
    validator_addr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequestSDKType {
    validator_addr: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
    delegationResponses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponseAmino {
    delegation_responses: DelegationResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponseSDKType {
    delegation_responses: DelegationResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequestAmino {
    /** validator_addr defines the validator address to query for. */
    validator_addr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequestSDKType {
    validator_addr: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
    unbondingResponses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponseAmino {
    unbonding_responses: UnbondingDelegationAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponseSDKType {
    unbonding_responses: UnbondingDelegationSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** validator_addr defines the validator address to query for. */
    validator_addr: string;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequestSDKType {
    delegator_addr: string;
    validator_addr: string;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
    /** delegation_responses defines the delegation info of a delegation. */
    delegationResponse?: DelegationResponse;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponseAmino {
    /** delegation_responses defines the delegation info of a delegation. */
    delegation_response?: DelegationResponseAmino;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponseSDKType {
    delegation_response?: DelegationResponseSDKType;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** validator_addr defines the validator address to query for. */
    validator_addr: string;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequestSDKType {
    delegator_addr: string;
    validator_addr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
    /** unbond defines the unbonding information of a delegation. */
    unbond?: UnbondingDelegation;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponseAmino {
    /** unbond defines the unbonding information of a delegation. */
    unbond?: UnbondingDelegationAmino;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponseSDKType {
    unbond?: UnbondingDelegationSDKType;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequestSDKType {
    delegator_addr: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
    /** delegation_responses defines all the delegations' info of a delegator. */
    delegationResponses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponseAmino {
    /** delegation_responses defines all the delegations' info of a delegator. */
    delegation_responses: DelegationResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponseSDKType {
    delegation_responses: DelegationResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequestSDKType {
    delegator_addr: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
    unbondingResponses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponseAmino {
    unbonding_responses: UnbondingDelegationAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponseSDKType {
    unbonding_responses: UnbondingDelegationSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** src_validator_addr defines the validator address to redelegate from. */
    srcValidatorAddr: string;
    /** dst_validator_addr defines the validator address to redelegate to. */
    dstValidatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** src_validator_addr defines the validator address to redelegate from. */
    src_validator_addr: string;
    /** dst_validator_addr defines the validator address to redelegate to. */
    dst_validator_addr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequestSDKType {
    delegator_addr: string;
    src_validator_addr: string;
    dst_validator_addr: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
    redelegationResponses: RedelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponseAmino {
    redelegation_responses: RedelegationResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponseSDKType {
    redelegation_responses: RedelegationResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestSDKType {
    delegator_addr: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
    /** validators defines the validators' info of a delegator. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseAmino {
    /** validators defines the validators' info of a delegator. */
    validators: ValidatorAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseSDKType {
    validators: ValidatorSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** validator_addr defines the validator address to query for. */
    validator_addr: string;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequestSDKType {
    delegator_addr: string;
    validator_addr: string;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
    /** validator defines the validator info. */
    validator?: Validator;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponseAmino {
    /** validator defines the validator info. */
    validator?: ValidatorAmino;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponseSDKType {
    validator?: ValidatorSDKType;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
    /** height defines at which height to query the historical info. */
    height: Long;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequestAmino {
    /** height defines at which height to query the historical info. */
    height: string;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequestSDKType {
    height: Long;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
    /** hist defines the historical info at the given height. */
    hist?: HistoricalInfo;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponseAmino {
    /** hist defines the historical info at the given height. */
    hist?: HistoricalInfoAmino;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponseSDKType {
    hist?: HistoricalInfoSDKType;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequestAmino {
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequestSDKType {
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
    /** pool defines the pool info. */
    pool?: Pool;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponseAmino {
    /** pool defines the pool info. */
    pool?: PoolAmino;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponseSDKType {
    pool?: PoolSDKType;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const QueryValidatorsRequest: {
    encode(message: QueryValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsRequest;
    fromJSON(object: any): QueryValidatorsRequest;
    toJSON(message: QueryValidatorsRequest): unknown;
    fromPartial(object: Partial<QueryValidatorsRequest>): QueryValidatorsRequest;
    fromAmino(object: QueryValidatorsRequestAmino): QueryValidatorsRequest;
    toAmino(message: QueryValidatorsRequest): QueryValidatorsRequestAmino;
};
export declare const QueryValidatorsResponse: {
    encode(message: QueryValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse;
    fromJSON(object: any): QueryValidatorsResponse;
    toJSON(message: QueryValidatorsResponse): unknown;
    fromPartial(object: Partial<QueryValidatorsResponse>): QueryValidatorsResponse;
    fromAmino(object: QueryValidatorsResponseAmino): QueryValidatorsResponse;
    toAmino(message: QueryValidatorsResponse): QueryValidatorsResponseAmino;
};
export declare const QueryValidatorRequest: {
    encode(message: QueryValidatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorRequest;
    fromJSON(object: any): QueryValidatorRequest;
    toJSON(message: QueryValidatorRequest): unknown;
    fromPartial(object: Partial<QueryValidatorRequest>): QueryValidatorRequest;
    fromAmino(object: QueryValidatorRequestAmino): QueryValidatorRequest;
    toAmino(message: QueryValidatorRequest): QueryValidatorRequestAmino;
};
export declare const QueryValidatorResponse: {
    encode(message: QueryValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorResponse;
    fromJSON(object: any): QueryValidatorResponse;
    toJSON(message: QueryValidatorResponse): unknown;
    fromPartial(object: Partial<QueryValidatorResponse>): QueryValidatorResponse;
    fromAmino(object: QueryValidatorResponseAmino): QueryValidatorResponse;
    toAmino(message: QueryValidatorResponse): QueryValidatorResponseAmino;
};
export declare const QueryValidatorDelegationsRequest: {
    encode(message: QueryValidatorDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsRequest;
    fromJSON(object: any): QueryValidatorDelegationsRequest;
    toJSON(message: QueryValidatorDelegationsRequest): unknown;
    fromPartial(object: Partial<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest;
    fromAmino(object: QueryValidatorDelegationsRequestAmino): QueryValidatorDelegationsRequest;
    toAmino(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestAmino;
};
export declare const QueryValidatorDelegationsResponse: {
    encode(message: QueryValidatorDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsResponse;
    fromJSON(object: any): QueryValidatorDelegationsResponse;
    toJSON(message: QueryValidatorDelegationsResponse): unknown;
    fromPartial(object: Partial<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse;
    fromAmino(object: QueryValidatorDelegationsResponseAmino): QueryValidatorDelegationsResponse;
    toAmino(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseAmino;
};
export declare const QueryValidatorUnbondingDelegationsRequest: {
    encode(message: QueryValidatorUnbondingDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest;
    fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest;
    toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown;
    fromPartial(object: Partial<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest;
    fromAmino(object: QueryValidatorUnbondingDelegationsRequestAmino): QueryValidatorUnbondingDelegationsRequest;
    toAmino(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestAmino;
};
export declare const QueryValidatorUnbondingDelegationsResponse: {
    encode(message: QueryValidatorUnbondingDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse;
    fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse;
    toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown;
    fromPartial(object: Partial<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse;
    fromAmino(object: QueryValidatorUnbondingDelegationsResponseAmino): QueryValidatorUnbondingDelegationsResponse;
    toAmino(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseAmino;
};
export declare const QueryDelegationRequest: {
    encode(message: QueryDelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRequest;
    fromJSON(object: any): QueryDelegationRequest;
    toJSON(message: QueryDelegationRequest): unknown;
    fromPartial(object: Partial<QueryDelegationRequest>): QueryDelegationRequest;
    fromAmino(object: QueryDelegationRequestAmino): QueryDelegationRequest;
    toAmino(message: QueryDelegationRequest): QueryDelegationRequestAmino;
};
export declare const QueryDelegationResponse: {
    encode(message: QueryDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationResponse;
    fromJSON(object: any): QueryDelegationResponse;
    toJSON(message: QueryDelegationResponse): unknown;
    fromPartial(object: Partial<QueryDelegationResponse>): QueryDelegationResponse;
    fromAmino(object: QueryDelegationResponseAmino): QueryDelegationResponse;
    toAmino(message: QueryDelegationResponse): QueryDelegationResponseAmino;
};
export declare const QueryUnbondingDelegationRequest: {
    encode(message: QueryUnbondingDelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationRequest;
    fromJSON(object: any): QueryUnbondingDelegationRequest;
    toJSON(message: QueryUnbondingDelegationRequest): unknown;
    fromPartial(object: Partial<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest;
    fromAmino(object: QueryUnbondingDelegationRequestAmino): QueryUnbondingDelegationRequest;
    toAmino(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestAmino;
};
export declare const QueryUnbondingDelegationResponse: {
    encode(message: QueryUnbondingDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationResponse;
    fromJSON(object: any): QueryUnbondingDelegationResponse;
    toJSON(message: QueryUnbondingDelegationResponse): unknown;
    fromPartial(object: Partial<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse;
    fromAmino(object: QueryUnbondingDelegationResponseAmino): QueryUnbondingDelegationResponse;
    toAmino(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseAmino;
};
export declare const QueryDelegatorDelegationsRequest: {
    encode(message: QueryDelegatorDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest;
    fromJSON(object: any): QueryDelegatorDelegationsRequest;
    toJSON(message: QueryDelegatorDelegationsRequest): unknown;
    fromPartial(object: Partial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest;
    fromAmino(object: QueryDelegatorDelegationsRequestAmino): QueryDelegatorDelegationsRequest;
    toAmino(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestAmino;
};
export declare const QueryDelegatorDelegationsResponse: {
    encode(message: QueryDelegatorDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse;
    fromJSON(object: any): QueryDelegatorDelegationsResponse;
    toJSON(message: QueryDelegatorDelegationsResponse): unknown;
    fromPartial(object: Partial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse;
    fromAmino(object: QueryDelegatorDelegationsResponseAmino): QueryDelegatorDelegationsResponse;
    toAmino(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseAmino;
};
export declare const QueryDelegatorUnbondingDelegationsRequest: {
    encode(message: QueryDelegatorUnbondingDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest;
    fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest;
    toJSON(message: QueryDelegatorUnbondingDelegationsRequest): unknown;
    fromPartial(object: Partial<QueryDelegatorUnbondingDelegationsRequest>): QueryDelegatorUnbondingDelegationsRequest;
    fromAmino(object: QueryDelegatorUnbondingDelegationsRequestAmino): QueryDelegatorUnbondingDelegationsRequest;
    toAmino(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestAmino;
};
export declare const QueryDelegatorUnbondingDelegationsResponse: {
    encode(message: QueryDelegatorUnbondingDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse;
    fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse;
    toJSON(message: QueryDelegatorUnbondingDelegationsResponse): unknown;
    fromPartial(object: Partial<QueryDelegatorUnbondingDelegationsResponse>): QueryDelegatorUnbondingDelegationsResponse;
    fromAmino(object: QueryDelegatorUnbondingDelegationsResponseAmino): QueryDelegatorUnbondingDelegationsResponse;
    toAmino(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseAmino;
};
export declare const QueryRedelegationsRequest: {
    encode(message: QueryRedelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsRequest;
    fromJSON(object: any): QueryRedelegationsRequest;
    toJSON(message: QueryRedelegationsRequest): unknown;
    fromPartial(object: Partial<QueryRedelegationsRequest>): QueryRedelegationsRequest;
    fromAmino(object: QueryRedelegationsRequestAmino): QueryRedelegationsRequest;
    toAmino(message: QueryRedelegationsRequest): QueryRedelegationsRequestAmino;
};
export declare const QueryRedelegationsResponse: {
    encode(message: QueryRedelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsResponse;
    fromJSON(object: any): QueryRedelegationsResponse;
    toJSON(message: QueryRedelegationsResponse): unknown;
    fromPartial(object: Partial<QueryRedelegationsResponse>): QueryRedelegationsResponse;
    fromAmino(object: QueryRedelegationsResponseAmino): QueryRedelegationsResponse;
    toAmino(message: QueryRedelegationsResponse): QueryRedelegationsResponseAmino;
};
export declare const QueryDelegatorValidatorsRequest: {
    encode(message: QueryDelegatorValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest;
    fromJSON(object: any): QueryDelegatorValidatorsRequest;
    toJSON(message: QueryDelegatorValidatorsRequest): unknown;
    fromPartial(object: Partial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest;
    fromAmino(object: QueryDelegatorValidatorsRequestAmino): QueryDelegatorValidatorsRequest;
    toAmino(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestAmino;
};
export declare const QueryDelegatorValidatorsResponse: {
    encode(message: QueryDelegatorValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse;
    fromJSON(object: any): QueryDelegatorValidatorsResponse;
    toJSON(message: QueryDelegatorValidatorsResponse): unknown;
    fromPartial(object: Partial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse;
    fromAmino(object: QueryDelegatorValidatorsResponseAmino): QueryDelegatorValidatorsResponse;
    toAmino(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseAmino;
};
export declare const QueryDelegatorValidatorRequest: {
    encode(message: QueryDelegatorValidatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorRequest;
    fromJSON(object: any): QueryDelegatorValidatorRequest;
    toJSON(message: QueryDelegatorValidatorRequest): unknown;
    fromPartial(object: Partial<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest;
    fromAmino(object: QueryDelegatorValidatorRequestAmino): QueryDelegatorValidatorRequest;
    toAmino(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestAmino;
};
export declare const QueryDelegatorValidatorResponse: {
    encode(message: QueryDelegatorValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorResponse;
    fromJSON(object: any): QueryDelegatorValidatorResponse;
    toJSON(message: QueryDelegatorValidatorResponse): unknown;
    fromPartial(object: Partial<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse;
    fromAmino(object: QueryDelegatorValidatorResponseAmino): QueryDelegatorValidatorResponse;
    toAmino(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseAmino;
};
export declare const QueryHistoricalInfoRequest: {
    encode(message: QueryHistoricalInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoRequest;
    fromJSON(object: any): QueryHistoricalInfoRequest;
    toJSON(message: QueryHistoricalInfoRequest): unknown;
    fromPartial(object: Partial<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest;
    fromAmino(object: QueryHistoricalInfoRequestAmino): QueryHistoricalInfoRequest;
    toAmino(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestAmino;
};
export declare const QueryHistoricalInfoResponse: {
    encode(message: QueryHistoricalInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoResponse;
    fromJSON(object: any): QueryHistoricalInfoResponse;
    toJSON(message: QueryHistoricalInfoResponse): unknown;
    fromPartial(object: Partial<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse;
    fromAmino(object: QueryHistoricalInfoResponseAmino): QueryHistoricalInfoResponse;
    toAmino(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseAmino;
};
export declare const QueryPoolRequest: {
    encode(_: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(_: any): QueryPoolRequest;
    toJSON(_: QueryPoolRequest): unknown;
    fromPartial(_: Partial<QueryPoolRequest>): QueryPoolRequest;
    fromAmino(_: QueryPoolRequestAmino): QueryPoolRequest;
    toAmino(_: QueryPoolRequest): QueryPoolRequestAmino;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
    fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse;
    toAmino(message: QueryPoolResponse): QueryPoolResponseAmino;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
};
