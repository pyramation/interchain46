import * as _1 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _1.ScalarType;
    scalarTypeToJSON(object: _1.ScalarType): string;
    ScalarType: typeof _1.ScalarType;
    ScalarTypeSDKType: typeof _1.ScalarType;
    ScalarTypeAmino: typeof _1.ScalarType;
    InterfaceDescriptor: {
        encode(message: _1.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.InterfaceDescriptor;
        fromJSON(object: any): _1.InterfaceDescriptor;
        toJSON(message: _1.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_1.InterfaceDescriptor>): _1.InterfaceDescriptor;
        fromAmino(object: _1.InterfaceDescriptorAmino): _1.InterfaceDescriptor;
        toAmino(message: _1.InterfaceDescriptor): _1.InterfaceDescriptorAmino;
    };
    ScalarDescriptor: {
        encode(message: _1.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ScalarDescriptor;
        fromJSON(object: any): _1.ScalarDescriptor;
        toJSON(message: _1.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_1.ScalarDescriptor>): _1.ScalarDescriptor;
        fromAmino(object: _1.ScalarDescriptorAmino): _1.ScalarDescriptor;
        toAmino(message: _1.ScalarDescriptor): _1.ScalarDescriptorAmino;
    };
};
