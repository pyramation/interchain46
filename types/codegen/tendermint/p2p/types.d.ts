import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface NetAddress {
    id: string;
    ip: string;
    port: number;
}
export interface NetAddressAmino {
    id: string;
    ip: string;
    port: number;
}
export interface NetAddressSDKType {
    id: string;
    ip: string;
    port: number;
}
export interface ProtocolVersion {
    p2p: Long;
    block: Long;
    app: Long;
}
export interface ProtocolVersionAmino {
    p2p: string;
    block: string;
    app: string;
}
export interface ProtocolVersionSDKType {
    p2p: Long;
    block: Long;
    app: Long;
}
export interface DefaultNodeInfo {
    protocolVersion?: ProtocolVersion;
    defaultNodeId: string;
    listenAddr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: DefaultNodeInfoOther;
}
export interface DefaultNodeInfoAmino {
    protocol_version?: ProtocolVersionAmino;
    default_node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: DefaultNodeInfoOtherAmino;
}
export interface DefaultNodeInfoSDKType {
    protocol_version?: ProtocolVersionSDKType;
    default_node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: DefaultNodeInfoOtherSDKType;
}
export interface DefaultNodeInfoOther {
    txIndex: string;
    rpcAddress: string;
}
export interface DefaultNodeInfoOtherAmino {
    tx_index: string;
    rpc_address: string;
}
export interface DefaultNodeInfoOtherSDKType {
    tx_index: string;
    rpc_address: string;
}
export declare const NetAddress: {
    encode(message: NetAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NetAddress;
    fromJSON(object: any): NetAddress;
    toJSON(message: NetAddress): unknown;
    fromPartial(object: Partial<NetAddress>): NetAddress;
    fromAmino(object: NetAddressAmino): NetAddress;
    toAmino(message: NetAddress): NetAddressAmino;
};
export declare const ProtocolVersion: {
    encode(message: ProtocolVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion;
    fromJSON(object: any): ProtocolVersion;
    toJSON(message: ProtocolVersion): unknown;
    fromPartial(object: Partial<ProtocolVersion>): ProtocolVersion;
    fromAmino(object: ProtocolVersionAmino): ProtocolVersion;
    toAmino(message: ProtocolVersion): ProtocolVersionAmino;
};
export declare const DefaultNodeInfo: {
    encode(message: DefaultNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfo;
    fromJSON(object: any): DefaultNodeInfo;
    toJSON(message: DefaultNodeInfo): unknown;
    fromPartial(object: Partial<DefaultNodeInfo>): DefaultNodeInfo;
    fromAmino(object: DefaultNodeInfoAmino): DefaultNodeInfo;
    toAmino(message: DefaultNodeInfo): DefaultNodeInfoAmino;
};
export declare const DefaultNodeInfoOther: {
    encode(message: DefaultNodeInfoOther, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfoOther;
    fromJSON(object: any): DefaultNodeInfoOther;
    toJSON(message: DefaultNodeInfoOther): unknown;
    fromPartial(object: Partial<DefaultNodeInfoOther>): DefaultNodeInfoOther;
    fromAmino(object: DefaultNodeInfoOtherAmino): DefaultNodeInfoOther;
    toAmino(message: DefaultNodeInfoOther): DefaultNodeInfoOtherAmino;
};
