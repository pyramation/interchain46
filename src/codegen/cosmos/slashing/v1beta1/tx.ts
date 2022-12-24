import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgUnjail defines the Msg/Unjail request type */

export interface MsgUnjail {
  validatorAddr: string;
}
export interface MsgUnjailProtoType {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail";
  value: Uint8Array;
}
/** MsgUnjail defines the Msg/Unjail request type */

export interface MsgUnjailAmino {
  validator_addr: string;
}
export interface MsgUnjailAminoType {
  type: "cosmos-sdk/MsgUnjail";
  value: MsgUnjailAmino;
}
/** MsgUnjail defines the Msg/Unjail request type */

export interface MsgUnjailSDKType {
  validator_addr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */

export interface MsgUnjailResponse {}
export interface MsgUnjailResponseProtoType {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse";
  value: Uint8Array;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */

export interface MsgUnjailResponseAmino {}
export interface MsgUnjailResponseAminoType {
  type: "cosmos-sdk/MsgUnjailResponse";
  value: MsgUnjailResponseAmino;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */

export interface MsgUnjailResponseSDKType {}

function createBaseMsgUnjail(): MsgUnjail {
  return {
    validatorAddr: ""
  };
}

export const MsgUnjail = {
  encode(message: MsgUnjail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjail();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUnjail {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },

  toJSON(message: MsgUnjail): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(object: Partial<MsgUnjail>): MsgUnjail {
    const message = createBaseMsgUnjail();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },

  fromAmino(object: MsgUnjailAmino): MsgUnjail {
    return {
      validatorAddr: object.validator_addr
    };
  },

  toAmino(message: MsgUnjail): MsgUnjailAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  }

};

function createBaseMsgUnjailResponse(): MsgUnjailResponse {
  return {};
}

export const MsgUnjailResponse = {
  encode(_: MsgUnjailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailResponse();

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

  fromJSON(_: any): MsgUnjailResponse {
    return {};
  },

  toJSON(_: MsgUnjailResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUnjailResponse>): MsgUnjailResponse {
    const message = createBaseMsgUnjailResponse();
    return message;
  },

  fromAmino(_: MsgUnjailResponseAmino): MsgUnjailResponse {
    return {};
  },

  toAmino(_: MsgUnjailResponse): MsgUnjailResponseAmino {
    const obj: any = {};
    return obj;
  }

};