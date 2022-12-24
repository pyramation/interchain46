import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, PeriodicAllowance, AllowedMsgAllowance } from "./feegrant";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */

export interface MsgGrantAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */

  grantee: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */

  allowance?: (BasicAllowance & PeriodicAllowance & AllowedMsgAllowance & Any) | undefined;
}
export interface MsgGrantAllowanceProtoType {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance";
  value: Uint8Array;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */

export interface MsgGrantAllowanceAmino {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */

  grantee: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */

  allowance?: AnyAmino;
}
export interface MsgGrantAllowanceAminoType {
  type: "cosmos-sdk/MsgGrantAllowance";
  value: MsgGrantAllowanceAmino;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */

export interface MsgGrantAllowanceSDKType {
  granter: string;
  grantee: string;
  allowance?: AnySDKType;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */

export interface MsgGrantAllowanceResponse {}
export interface MsgGrantAllowanceResponseProtoType {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse";
  value: Uint8Array;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */

export interface MsgGrantAllowanceResponseAmino {}
export interface MsgGrantAllowanceResponseAminoType {
  type: "cosmos-sdk/MsgGrantAllowanceResponse";
  value: MsgGrantAllowanceResponseAmino;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */

export interface MsgGrantAllowanceResponseSDKType {}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */

export interface MsgRevokeAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */

  grantee: string;
}
export interface MsgRevokeAllowanceProtoType {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance";
  value: Uint8Array;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */

export interface MsgRevokeAllowanceAmino {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */

  grantee: string;
}
export interface MsgRevokeAllowanceAminoType {
  type: "cosmos-sdk/MsgRevokeAllowance";
  value: MsgRevokeAllowanceAmino;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */

export interface MsgRevokeAllowanceSDKType {
  granter: string;
  grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */

export interface MsgRevokeAllowanceResponse {}
export interface MsgRevokeAllowanceResponseProtoType {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse";
  value: Uint8Array;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */

export interface MsgRevokeAllowanceResponseAmino {}
export interface MsgRevokeAllowanceResponseAminoType {
  type: "cosmos-sdk/MsgRevokeAllowanceResponse";
  value: MsgRevokeAllowanceResponseAmino;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */

export interface MsgRevokeAllowanceResponseSDKType {}

function createBaseMsgGrantAllowance(): MsgGrantAllowance {
  return {
    granter: "",
    grantee: "",
    allowance: undefined
  };
}

export const MsgGrantAllowance = {
  encode(message: MsgGrantAllowance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    if (message.allowance !== undefined) {
      Any.encode((message.allowance as Any), writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.allowance = (FeeAllowanceI_InterfaceDecoder(reader) as Any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgGrantAllowance {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined
    };
  },

  toJSON(message: MsgGrantAllowance): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgGrantAllowance>): MsgGrantAllowance {
    const message = createBaseMsgGrantAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    return message;
  },

  fromAmino(object: MsgGrantAllowanceAmino): MsgGrantAllowance {
    return {
      granter: object.granter,
      grantee: object.grantee,
      allowance: object?.allowance ? FeeAllowanceI_FromAmino(object.allowance) : undefined
    };
  },

  toAmino(message: MsgGrantAllowance): MsgGrantAllowanceAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.allowance = message.allowance ? FeeAllowanceI_ToAmino((message.allowance as Any)) : undefined;
    return obj;
  }

};

function createBaseMsgGrantAllowanceResponse(): MsgGrantAllowanceResponse {
  return {};
}

export const MsgGrantAllowanceResponse = {
  encode(_: MsgGrantAllowanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowanceResponse();

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

  fromJSON(_: any): MsgGrantAllowanceResponse {
    return {};
  },

  toJSON(_: MsgGrantAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },

  fromAmino(_: MsgGrantAllowanceResponseAmino): MsgGrantAllowanceResponse {
    return {};
  },

  toAmino(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgRevokeAllowance(): MsgRevokeAllowance {
  return {
    granter: "",
    grantee: ""
  };
}

export const MsgRevokeAllowance = {
  encode(message: MsgRevokeAllowance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRevokeAllowance {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },

  toJSON(message: MsgRevokeAllowance): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },

  fromPartial(object: Partial<MsgRevokeAllowance>): MsgRevokeAllowance {
    const message = createBaseMsgRevokeAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },

  fromAmino(object: MsgRevokeAllowanceAmino): MsgRevokeAllowance {
    return {
      granter: object.granter,
      grantee: object.grantee
    };
  },

  toAmino(message: MsgRevokeAllowance): MsgRevokeAllowanceAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  }

};

function createBaseMsgRevokeAllowanceResponse(): MsgRevokeAllowanceResponse {
  return {};
}

export const MsgRevokeAllowanceResponse = {
  encode(_: MsgRevokeAllowanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowanceResponse();

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

  fromJSON(_: any): MsgRevokeAllowanceResponse {
    return {};
  },

  toJSON(_: MsgRevokeAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },

  fromAmino(_: MsgRevokeAllowanceResponseAmino): MsgRevokeAllowanceResponse {
    return {};
  },

  toAmino(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAmino {
    const obj: any = {};
    return obj;
  }

};
export const FeeAllowanceI_InterfaceDecoder = (input: _m0.Reader | Uint8Array): BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());

  switch (data.typeUrl) {
    case "/cosmos.feegrant.v1beta1.BasicAllowance":
      return BasicAllowance.decode(data.value);

    case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
      return PeriodicAllowance.decode(data.value);

    case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
      return AllowedMsgAllowance.decode(data.value);

    default:
      return data;
  }
};
export const FeeAllowanceI_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "cosmos-sdk/BasicAllowance":
      return Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
        value: BasicAllowance.encode(BasicAllowance.fromPartial((content.value as DeepPartial<BasicAllowance>))).finish()
      });

    case "cosmos-sdk/PeriodicAllowance":
      return Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
        value: PeriodicAllowance.encode(PeriodicAllowance.fromPartial((content.value as DeepPartial<PeriodicAllowance>))).finish()
      });

    case "cosmos-sdk/AllowedMsgAllowance":
      return Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
        value: AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial((content.value as DeepPartial<AllowedMsgAllowance>))).finish()
      });

    default:
      return Any.fromAmino(content);
  }
};
export const FeeAllowanceI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmos.feegrant.v1beta1.BasicAllowance":
      return {
        type: "cosmos-sdk/BasicAllowance",
        value: BasicAllowance.toAmino(BasicAllowance.decode(content.value))
      };

    case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
      return {
        type: "cosmos-sdk/PeriodicAllowance",
        value: PeriodicAllowance.toAmino(PeriodicAllowance.decode(content.value))
      };

    case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
      return {
        type: "cosmos-sdk/AllowedMsgAllowance",
        value: AllowedMsgAllowance.toAmino(AllowedMsgAllowance.decode(content.value))
      };

    default:
      return Any.toAmino(content);
  }
};