import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType, BaseAccount, ModuleAccount } from "./auth";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Long, DeepPartial } from "../../../helpers";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface QueryAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAccountsRequestProtoType {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest";
  value: Uint8Array;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface QueryAccountsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAccountsRequestAminoType {
  type: "cosmos-sdk/QueryAccountsRequest";
  value: QueryAccountsRequestAmino;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface QueryAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface QueryAccountsResponse {
  /** accounts are the existing accounts */
  accounts: (BaseAccount & Any)[] | Any[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
export interface QueryAccountsResponseProtoType {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse";
  value: Uint8Array;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface QueryAccountsResponseAmino {
  /** accounts are the existing accounts */
  accounts: AnyAmino[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseAmino;
}
export interface QueryAccountsResponseAminoType {
  type: "cosmos-sdk/QueryAccountsResponse";
  value: QueryAccountsResponseAmino;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface QueryAccountsResponseSDKType {
  accounts: AnySDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */

export interface QueryAccountRequest {
  /** address defines the address to query for. */
  address: string;
}
export interface QueryAccountRequestProtoType {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest";
  value: Uint8Array;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */

export interface QueryAccountRequestAmino {
  /** address defines the address to query for. */
  address: string;
}
export interface QueryAccountRequestAminoType {
  type: "cosmos-sdk/QueryAccountRequest";
  value: QueryAccountRequestAmino;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */

export interface QueryAccountRequestSDKType {
  address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */

export interface QueryAccountResponse {
  /** account defines the account of the corresponding address. */
  account?: (BaseAccount & Any) | undefined;
}
export interface QueryAccountResponseProtoType {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse";
  value: Uint8Array;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */

export interface QueryAccountResponseAmino {
  /** account defines the account of the corresponding address. */
  account?: AnyAmino;
}
export interface QueryAccountResponseAminoType {
  type: "cosmos-sdk/QueryAccountResponse";
  value: QueryAccountResponseAmino;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */

export interface QueryAccountResponseSDKType {
  account?: AnySDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoType {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoType {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryParamsResponseProtoType {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoType {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface QueryModuleAccountsRequest {}
export interface QueryModuleAccountsRequestProtoType {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest";
  value: Uint8Array;
}
/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface QueryModuleAccountsRequestAmino {}
export interface QueryModuleAccountsRequestAminoType {
  type: "cosmos-sdk/QueryModuleAccountsRequest";
  value: QueryModuleAccountsRequestAmino;
}
/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface QueryModuleAccountsRequestSDKType {}
/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface QueryModuleAccountsResponse {
  accounts: (ModuleAccount & Any)[] | Any[];
}
export interface QueryModuleAccountsResponseProtoType {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse";
  value: Uint8Array;
}
/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface QueryModuleAccountsResponseAmino {
  accounts: AnyAmino[];
}
export interface QueryModuleAccountsResponseAminoType {
  type: "cosmos-sdk/QueryModuleAccountsResponse";
  value: QueryModuleAccountsResponseAmino;
}
/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface QueryModuleAccountsResponseSDKType {
  accounts: AnySDKType[];
}
/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */

export interface QueryModuleAccountByNameRequest {
  name: string;
}
export interface QueryModuleAccountByNameRequestProtoType {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest";
  value: Uint8Array;
}
/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */

export interface QueryModuleAccountByNameRequestAmino {
  name: string;
}
export interface QueryModuleAccountByNameRequestAminoType {
  type: "cosmos-sdk/QueryModuleAccountByNameRequest";
  value: QueryModuleAccountByNameRequestAmino;
}
/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */

export interface QueryModuleAccountByNameRequestSDKType {
  name: string;
}
/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */

export interface QueryModuleAccountByNameResponse {
  account?: (ModuleAccount & Any) | undefined;
}
export interface QueryModuleAccountByNameResponseProtoType {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse";
  value: Uint8Array;
}
/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */

export interface QueryModuleAccountByNameResponseAmino {
  account?: AnyAmino;
}
export interface QueryModuleAccountByNameResponseAminoType {
  type: "cosmos-sdk/QueryModuleAccountByNameResponse";
  value: QueryModuleAccountByNameResponseAmino;
}
/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */

export interface QueryModuleAccountByNameResponseSDKType {
  account?: AnySDKType;
}
/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface Bech32PrefixRequest {}
export interface Bech32PrefixRequestProtoType {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest";
  value: Uint8Array;
}
/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface Bech32PrefixRequestAmino {}
export interface Bech32PrefixRequestAminoType {
  type: "cosmos-sdk/Bech32PrefixRequest";
  value: Bech32PrefixRequestAmino;
}
/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface Bech32PrefixRequestSDKType {}
/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface Bech32PrefixResponse {
  bech32Prefix: string;
}
export interface Bech32PrefixResponseProtoType {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse";
  value: Uint8Array;
}
/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface Bech32PrefixResponseAmino {
  bech32_prefix: string;
}
export interface Bech32PrefixResponseAminoType {
  type: "cosmos-sdk/Bech32PrefixResponse";
  value: Bech32PrefixResponseAmino;
}
/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface Bech32PrefixResponseSDKType {
  bech32_prefix: string;
}
/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface AddressBytesToStringRequest {
  addressBytes: Uint8Array;
}
export interface AddressBytesToStringRequestProtoType {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest";
  value: Uint8Array;
}
/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface AddressBytesToStringRequestAmino {
  address_bytes: Uint8Array;
}
export interface AddressBytesToStringRequestAminoType {
  type: "cosmos-sdk/AddressBytesToStringRequest";
  value: AddressBytesToStringRequestAmino;
}
/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface AddressBytesToStringRequestSDKType {
  address_bytes: Uint8Array;
}
/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface AddressBytesToStringResponse {
  addressString: string;
}
export interface AddressBytesToStringResponseProtoType {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse";
  value: Uint8Array;
}
/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface AddressBytesToStringResponseAmino {
  address_string: string;
}
export interface AddressBytesToStringResponseAminoType {
  type: "cosmos-sdk/AddressBytesToStringResponse";
  value: AddressBytesToStringResponseAmino;
}
/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface AddressBytesToStringResponseSDKType {
  address_string: string;
}
/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface AddressStringToBytesRequest {
  addressString: string;
}
export interface AddressStringToBytesRequestProtoType {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest";
  value: Uint8Array;
}
/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface AddressStringToBytesRequestAmino {
  address_string: string;
}
export interface AddressStringToBytesRequestAminoType {
  type: "cosmos-sdk/AddressStringToBytesRequest";
  value: AddressStringToBytesRequestAmino;
}
/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface AddressStringToBytesRequestSDKType {
  address_string: string;
}
/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface AddressStringToBytesResponse {
  addressBytes: Uint8Array;
}
export interface AddressStringToBytesResponseProtoType {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse";
  value: Uint8Array;
}
/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface AddressStringToBytesResponseAmino {
  address_bytes: Uint8Array;
}
export interface AddressStringToBytesResponseAminoType {
  type: "cosmos-sdk/AddressStringToBytesResponse";
  value: AddressStringToBytesResponseAmino;
}
/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface AddressStringToBytesResponseSDKType {
  address_bytes: Uint8Array;
}
/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 * 
 * Since: cosmos-sdk 0.46.2
 */

export interface QueryAccountAddressByIDRequest {
  /**
   * id is the account number of the address to be queried. This field
   * should have been an uint64 (like all account numbers), and will be
   * updated to uint64 in a future version of the auth query.
   */
  id: Long;
}
export interface QueryAccountAddressByIDRequestProtoType {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest";
  value: Uint8Array;
}
/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 * 
 * Since: cosmos-sdk 0.46.2
 */

export interface QueryAccountAddressByIDRequestAmino {
  /**
   * id is the account number of the address to be queried. This field
   * should have been an uint64 (like all account numbers), and will be
   * updated to uint64 in a future version of the auth query.
   */
  id: string;
}
export interface QueryAccountAddressByIDRequestAminoType {
  type: "cosmos-sdk/QueryAccountAddressByIDRequest";
  value: QueryAccountAddressByIDRequestAmino;
}
/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 * 
 * Since: cosmos-sdk 0.46.2
 */

export interface QueryAccountAddressByIDRequestSDKType {
  id: Long;
}
/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 * 
 * Since: cosmos-sdk 0.46.2
 */

export interface QueryAccountAddressByIDResponse {
  accountAddress: string;
}
export interface QueryAccountAddressByIDResponseProtoType {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse";
  value: Uint8Array;
}
/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 * 
 * Since: cosmos-sdk 0.46.2
 */

export interface QueryAccountAddressByIDResponseAmino {
  account_address: string;
}
export interface QueryAccountAddressByIDResponseAminoType {
  type: "cosmos-sdk/QueryAccountAddressByIDResponse";
  value: QueryAccountAddressByIDResponseAmino;
}
/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 * 
 * Since: cosmos-sdk 0.46.2
 */

export interface QueryAccountAddressByIDResponseSDKType {
  account_address: string;
}

function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    pagination: undefined
  };
}

export const QueryAccountsRequest = {
  encode(message: QueryAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAccountsRequest): QueryAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}

export const QueryAccountsResponse = {
  encode(message: QueryAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Any.encode((v! as Any), writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accounts.push((AccountI_InterfaceDecoder(reader) as Any));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAccountsResponse): unknown {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => AccountI_FromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? AccountI_ToAmino((e as Any)) : undefined);
    } else {
      obj.accounts = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: ""
  };
}

export const QueryAccountRequest = {
  encode(message: QueryAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();

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

  fromJSON(object: any): QueryAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? "";
    return message;
  },

  fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest {
    return {
      address: object.address
    };
  },

  toAmino(message: QueryAccountRequest): QueryAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  }

};

function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    account: undefined
  };
}

export const QueryAccountResponse = {
  encode(message: QueryAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Any.encode((message.account as Any), writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = (AccountI_InterfaceDecoder(reader) as Any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountResponse {
    return {
      account: isSet(object.account) ? Any.fromJSON(object.account) : undefined
    };
  },

  toJSON(message: QueryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    return message;
  },

  fromAmino(object: QueryAccountResponseAmino): QueryAccountResponse {
    return {
      account: object?.account ? AccountI_FromAmino(object.account) : undefined
    };
  },

  toAmino(message: QueryAccountResponse): QueryAccountResponseAmino {
    const obj: any = {};
    obj.account = message.account ? AccountI_ToAmino((message.account as Any)) : undefined;
    return obj;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },

  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },

  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },

  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  }

};

function createBaseQueryModuleAccountsRequest(): QueryModuleAccountsRequest {
  return {};
}

export const QueryModuleAccountsRequest = {
  encode(_: QueryModuleAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsRequest();

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

  fromJSON(_: any): QueryModuleAccountsRequest {
    return {};
  },

  toJSON(_: QueryModuleAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest {
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  },

  fromAmino(_: QueryModuleAccountsRequestAmino): QueryModuleAccountsRequest {
    return {};
  },

  toAmino(_: QueryModuleAccountsRequest): QueryModuleAccountsRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryModuleAccountsResponse(): QueryModuleAccountsResponse {
  return {
    accounts: []
  };
}

export const QueryModuleAccountsResponse = {
  encode(message: QueryModuleAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Any.encode((v! as Any), writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accounts.push((ModuleAccountI_InterfaceDecoder(reader) as Any));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryModuleAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryModuleAccountsResponse): unknown {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse {
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: QueryModuleAccountsResponseAmino): QueryModuleAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => ModuleAccountI_FromAmino(e)) : []
    };
  },

  toAmino(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAmino {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? ModuleAccountI_ToAmino((e as Any)) : undefined);
    } else {
      obj.accounts = [];
    }

    return obj;
  }

};

function createBaseQueryModuleAccountByNameRequest(): QueryModuleAccountByNameRequest {
  return {
    name: ""
  };
}

export const QueryModuleAccountByNameRequest = {
  encode(message: QueryModuleAccountByNameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountByNameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryModuleAccountByNameRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: QueryModuleAccountByNameRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: Partial<QueryModuleAccountByNameRequest>): QueryModuleAccountByNameRequest {
    const message = createBaseQueryModuleAccountByNameRequest();
    message.name = object.name ?? "";
    return message;
  },

  fromAmino(object: QueryModuleAccountByNameRequestAmino): QueryModuleAccountByNameRequest {
    return {
      name: object.name
    };
  },

  toAmino(message: QueryModuleAccountByNameRequest): QueryModuleAccountByNameRequestAmino {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  }

};

function createBaseQueryModuleAccountByNameResponse(): QueryModuleAccountByNameResponse {
  return {
    account: undefined
  };
}

export const QueryModuleAccountByNameResponse = {
  encode(message: QueryModuleAccountByNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Any.encode((message.account as Any), writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountByNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = (ModuleAccountI_InterfaceDecoder(reader) as Any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryModuleAccountByNameResponse {
    return {
      account: isSet(object.account) ? Any.fromJSON(object.account) : undefined
    };
  },

  toJSON(message: QueryModuleAccountByNameResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryModuleAccountByNameResponse>): QueryModuleAccountByNameResponse {
    const message = createBaseQueryModuleAccountByNameResponse();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    return message;
  },

  fromAmino(object: QueryModuleAccountByNameResponseAmino): QueryModuleAccountByNameResponse {
    return {
      account: object?.account ? ModuleAccountI_FromAmino(object.account) : undefined
    };
  },

  toAmino(message: QueryModuleAccountByNameResponse): QueryModuleAccountByNameResponseAmino {
    const obj: any = {};
    obj.account = message.account ? ModuleAccountI_ToAmino((message.account as Any)) : undefined;
    return obj;
  }

};

function createBaseBech32PrefixRequest(): Bech32PrefixRequest {
  return {};
}

export const Bech32PrefixRequest = {
  encode(_: Bech32PrefixRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixRequest();

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

  fromJSON(_: any): Bech32PrefixRequest {
    return {};
  },

  toJSON(_: Bech32PrefixRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<Bech32PrefixRequest>): Bech32PrefixRequest {
    const message = createBaseBech32PrefixRequest();
    return message;
  },

  fromAmino(_: Bech32PrefixRequestAmino): Bech32PrefixRequest {
    return {};
  },

  toAmino(_: Bech32PrefixRequest): Bech32PrefixRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseBech32PrefixResponse(): Bech32PrefixResponse {
  return {
    bech32Prefix: ""
  };
}

export const Bech32PrefixResponse = {
  encode(message: Bech32PrefixResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Bech32PrefixResponse {
    return {
      bech32Prefix: isSet(object.bech32Prefix) ? String(object.bech32Prefix) : ""
    };
  },

  toJSON(message: Bech32PrefixResponse): unknown {
    const obj: any = {};
    message.bech32Prefix !== undefined && (obj.bech32Prefix = message.bech32Prefix);
    return obj;
  },

  fromPartial(object: Partial<Bech32PrefixResponse>): Bech32PrefixResponse {
    const message = createBaseBech32PrefixResponse();
    message.bech32Prefix = object.bech32Prefix ?? "";
    return message;
  },

  fromAmino(object: Bech32PrefixResponseAmino): Bech32PrefixResponse {
    return {
      bech32Prefix: object.bech32_prefix
    };
  },

  toAmino(message: Bech32PrefixResponse): Bech32PrefixResponseAmino {
    const obj: any = {};
    obj.bech32_prefix = message.bech32Prefix;
    return obj;
  }

};

function createBaseAddressBytesToStringRequest(): AddressBytesToStringRequest {
  return {
    addressBytes: new Uint8Array()
  };
}

export const AddressBytesToStringRequest = {
  encode(message: AddressBytesToStringRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AddressBytesToStringRequest {
    return {
      addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array()
    };
  },

  toJSON(message: AddressBytesToStringRequest): unknown {
    const obj: any = {};
    message.addressBytes !== undefined && (obj.addressBytes = base64FromBytes(message.addressBytes !== undefined ? message.addressBytes : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<AddressBytesToStringRequest>): AddressBytesToStringRequest {
    const message = createBaseAddressBytesToStringRequest();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },

  fromAmino(object: AddressBytesToStringRequestAmino): AddressBytesToStringRequest {
    return {
      addressBytes: object.address_bytes
    };
  },

  toAmino(message: AddressBytesToStringRequest): AddressBytesToStringRequestAmino {
    const obj: any = {};
    obj.address_bytes = message.addressBytes;
    return obj;
  }

};

function createBaseAddressBytesToStringResponse(): AddressBytesToStringResponse {
  return {
    addressString: ""
  };
}

export const AddressBytesToStringResponse = {
  encode(message: AddressBytesToStringResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AddressBytesToStringResponse {
    return {
      addressString: isSet(object.addressString) ? String(object.addressString) : ""
    };
  },

  toJSON(message: AddressBytesToStringResponse): unknown {
    const obj: any = {};
    message.addressString !== undefined && (obj.addressString = message.addressString);
    return obj;
  },

  fromPartial(object: Partial<AddressBytesToStringResponse>): AddressBytesToStringResponse {
    const message = createBaseAddressBytesToStringResponse();
    message.addressString = object.addressString ?? "";
    return message;
  },

  fromAmino(object: AddressBytesToStringResponseAmino): AddressBytesToStringResponse {
    return {
      addressString: object.address_string
    };
  },

  toAmino(message: AddressBytesToStringResponse): AddressBytesToStringResponseAmino {
    const obj: any = {};
    obj.address_string = message.addressString;
    return obj;
  }

};

function createBaseAddressStringToBytesRequest(): AddressStringToBytesRequest {
  return {
    addressString: ""
  };
}

export const AddressStringToBytesRequest = {
  encode(message: AddressStringToBytesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AddressStringToBytesRequest {
    return {
      addressString: isSet(object.addressString) ? String(object.addressString) : ""
    };
  },

  toJSON(message: AddressStringToBytesRequest): unknown {
    const obj: any = {};
    message.addressString !== undefined && (obj.addressString = message.addressString);
    return obj;
  },

  fromPartial(object: Partial<AddressStringToBytesRequest>): AddressStringToBytesRequest {
    const message = createBaseAddressStringToBytesRequest();
    message.addressString = object.addressString ?? "";
    return message;
  },

  fromAmino(object: AddressStringToBytesRequestAmino): AddressStringToBytesRequest {
    return {
      addressString: object.address_string
    };
  },

  toAmino(message: AddressStringToBytesRequest): AddressStringToBytesRequestAmino {
    const obj: any = {};
    obj.address_string = message.addressString;
    return obj;
  }

};

function createBaseAddressStringToBytesResponse(): AddressStringToBytesResponse {
  return {
    addressBytes: new Uint8Array()
  };
}

export const AddressStringToBytesResponse = {
  encode(message: AddressStringToBytesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AddressStringToBytesResponse {
    return {
      addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array()
    };
  },

  toJSON(message: AddressStringToBytesResponse): unknown {
    const obj: any = {};
    message.addressBytes !== undefined && (obj.addressBytes = base64FromBytes(message.addressBytes !== undefined ? message.addressBytes : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<AddressStringToBytesResponse>): AddressStringToBytesResponse {
    const message = createBaseAddressStringToBytesResponse();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },

  fromAmino(object: AddressStringToBytesResponseAmino): AddressStringToBytesResponse {
    return {
      addressBytes: object.address_bytes
    };
  },

  toAmino(message: AddressStringToBytesResponse): AddressStringToBytesResponseAmino {
    const obj: any = {};
    obj.address_bytes = message.addressBytes;
    return obj;
  }

};

function createBaseQueryAccountAddressByIDRequest(): QueryAccountAddressByIDRequest {
  return {
    id: Long.ZERO
  };
}

export const QueryAccountAddressByIDRequest = {
  encode(message: QueryAccountAddressByIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAddressByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountAddressByIDRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO
    };
  },

  toJSON(message: QueryAccountAddressByIDRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryAccountAddressByIDRequest>): QueryAccountAddressByIDRequest {
    const message = createBaseQueryAccountAddressByIDRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.ZERO;
    return message;
  },

  fromAmino(object: QueryAccountAddressByIDRequestAmino): QueryAccountAddressByIDRequest {
    return {
      id: Long.fromString(object.id)
    };
  },

  toAmino(message: QueryAccountAddressByIDRequest): QueryAccountAddressByIDRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  }

};

function createBaseQueryAccountAddressByIDResponse(): QueryAccountAddressByIDResponse {
  return {
    accountAddress: ""
  };
}

export const QueryAccountAddressByIDResponse = {
  encode(message: QueryAccountAddressByIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAddressByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountAddressByIDResponse {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : ""
    };
  },

  toJSON(message: QueryAccountAddressByIDResponse): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    return obj;
  },

  fromPartial(object: Partial<QueryAccountAddressByIDResponse>): QueryAccountAddressByIDResponse {
    const message = createBaseQueryAccountAddressByIDResponse();
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },

  fromAmino(object: QueryAccountAddressByIDResponseAmino): QueryAccountAddressByIDResponse {
    return {
      accountAddress: object.account_address
    };
  },

  toAmino(message: QueryAccountAddressByIDResponse): QueryAccountAddressByIDResponseAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress;
    return obj;
  }

};
export const AccountI_InterfaceDecoder = (input: _m0.Reader | Uint8Array): BaseAccount | Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());

  switch (data.typeUrl) {
    case "/cosmos.auth.v1beta1.BaseAccount":
      return BaseAccount.decode(data.value);

    default:
      return data;
  }
};
export const AccountI_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "cosmos-sdk/BaseAccount":
      return Any.fromPartial({
        typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
        value: BaseAccount.encode(BaseAccount.fromPartial((content.value as DeepPartial<BaseAccount>))).finish()
      });

    default:
      return Any.fromAmino(content);
  }
};
export const AccountI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmos.auth.v1beta1.BaseAccount":
      return {
        type: "cosmos-sdk/BaseAccount",
        value: BaseAccount.toAmino(BaseAccount.decode(content.value))
      };

    default:
      return Any.toAmino(content);
  }
};
export const ModuleAccountI_InterfaceDecoder = (input: _m0.Reader | Uint8Array): ModuleAccount | Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());

  switch (data.typeUrl) {
    case "/cosmos.auth.v1beta1.ModuleAccount":
      return ModuleAccount.decode(data.value);

    default:
      return data;
  }
};
export const ModuleAccountI_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "cosmos-sdk/ModuleAccount":
      return Any.fromPartial({
        typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
        value: ModuleAccount.encode(ModuleAccount.fromPartial((content.value as DeepPartial<ModuleAccount>))).finish()
      });

    default:
      return Any.fromAmino(content);
  }
};
export const ModuleAccountI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmos.auth.v1beta1.ModuleAccount":
      return {
        type: "cosmos-sdk/ModuleAccount",
        value: ModuleAccount.toAmino(ModuleAccount.decode(content.value))
      };

    default:
      return Any.toAmino(content);
  }
};