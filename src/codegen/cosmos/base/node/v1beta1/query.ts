import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** ConfigRequest defines the request structure for the Config gRPC query. */

export interface ConfigRequest {}
export interface ConfigRequestProtoType {
  typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest";
  value: Uint8Array;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */

export interface ConfigRequestAmino {}
export interface ConfigRequestAminoType {
  type: "cosmos-sdk/ConfigRequest";
  value: ConfigRequestAmino;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */

export interface ConfigRequestSDKType {}
/** ConfigResponse defines the response structure for the Config gRPC query. */

export interface ConfigResponse {
  minimumGasPrice: string;
}
export interface ConfigResponseProtoType {
  typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse";
  value: Uint8Array;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */

export interface ConfigResponseAmino {
  minimum_gas_price: string;
}
export interface ConfigResponseAminoType {
  type: "cosmos-sdk/ConfigResponse";
  value: ConfigResponseAmino;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */

export interface ConfigResponseSDKType {
  minimum_gas_price: string;
}

function createBaseConfigRequest(): ConfigRequest {
  return {};
}

export const ConfigRequest = {
  encode(_: ConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();

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

  fromJSON(_: any): ConfigRequest {
    return {};
  },

  toJSON(_: ConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<ConfigRequest>): ConfigRequest {
    const message = createBaseConfigRequest();
    return message;
  },

  fromAmino(_: ConfigRequestAmino): ConfigRequest {
    return {};
  },

  toAmino(_: ConfigRequest): ConfigRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseConfigResponse(): ConfigResponse {
  return {
    minimumGasPrice: ""
  };
}

export const ConfigResponse = {
  encode(message: ConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minimumGasPrice !== "") {
      writer.uint32(10).string(message.minimumGasPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConfigResponse {
    return {
      minimumGasPrice: isSet(object.minimumGasPrice) ? String(object.minimumGasPrice) : ""
    };
  },

  toJSON(message: ConfigResponse): unknown {
    const obj: any = {};
    message.minimumGasPrice !== undefined && (obj.minimumGasPrice = message.minimumGasPrice);
    return obj;
  },

  fromPartial(object: Partial<ConfigResponse>): ConfigResponse {
    const message = createBaseConfigResponse();
    message.minimumGasPrice = object.minimumGasPrice ?? "";
    return message;
  },

  fromAmino(object: ConfigResponseAmino): ConfigResponse {
    return {
      minimumGasPrice: object.minimum_gas_price
    };
  },

  toAmino(message: ConfigResponse): ConfigResponseAmino {
    const obj: any = {};
    obj.minimum_gas_price = message.minimumGasPrice;
    return obj;
  }

};