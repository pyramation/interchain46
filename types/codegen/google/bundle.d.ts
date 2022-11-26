import * as _100 from "./api/http";
import * as _101 from "./protobuf/any";
import * as _102 from "./protobuf/descriptor";
import * as _103 from "./protobuf/duration";
import * as _104 from "./protobuf/empty";
import * as _105 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _100.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Http;
            fromJSON(object: any): _100.Http;
            toJSON(message: _100.Http): unknown;
            fromPartial(object: Partial<_100.Http>): _100.Http;
        };
        HttpRule: {
            encode(message: _100.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.HttpRule;
            fromJSON(object: any): _100.HttpRule;
            toJSON(message: _100.HttpRule): unknown;
            fromPartial(object: Partial<_100.HttpRule>): _100.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _100.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.CustomHttpPattern;
            fromJSON(object: any): _100.CustomHttpPattern;
            toJSON(message: _100.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_100.CustomHttpPattern>): _100.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _105.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Timestamp;
            fromJSON(object: any): _105.Timestamp;
            toJSON(message: _105.Timestamp): unknown;
            fromPartial(object: Partial<_105.Timestamp>): _105.Timestamp;
        };
        Empty: {
            encode(_: _104.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Empty;
            fromJSON(_: any): _104.Empty;
            toJSON(_: _104.Empty): unknown;
            fromPartial(_: Partial<_104.Empty>): _104.Empty;
        };
        Duration: {
            encode(message: _103.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Duration;
            fromJSON(object: any): _103.Duration;
            toJSON(message: _103.Duration): unknown;
            fromPartial(object: Partial<_103.Duration>): _103.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _102.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _102.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _102.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _102.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _102.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _102.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _102.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _102.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _102.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _102.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _102.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _102.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _102.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _102.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _102.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _102.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _102.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _102.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _102.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _102.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _102.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _102.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _102.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _102.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _102.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FileDescriptorSet;
            fromJSON(object: any): _102.FileDescriptorSet;
            toJSON(message: _102.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_102.FileDescriptorSet>): _102.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _102.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FileDescriptorProto;
            fromJSON(object: any): _102.FileDescriptorProto;
            toJSON(message: _102.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_102.FileDescriptorProto>): _102.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _102.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.DescriptorProto;
            fromJSON(object: any): _102.DescriptorProto;
            toJSON(message: _102.DescriptorProto): unknown;
            fromPartial(object: Partial<_102.DescriptorProto>): _102.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _102.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _102.DescriptorProto_ExtensionRange;
            toJSON(message: _102.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_102.DescriptorProto_ExtensionRange>): _102.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _102.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.DescriptorProto_ReservedRange;
            fromJSON(object: any): _102.DescriptorProto_ReservedRange;
            toJSON(message: _102.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_102.DescriptorProto_ReservedRange>): _102.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _102.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ExtensionRangeOptions;
            fromJSON(object: any): _102.ExtensionRangeOptions;
            toJSON(message: _102.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_102.ExtensionRangeOptions>): _102.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _102.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FieldDescriptorProto;
            fromJSON(object: any): _102.FieldDescriptorProto;
            toJSON(message: _102.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_102.FieldDescriptorProto>): _102.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _102.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.OneofDescriptorProto;
            fromJSON(object: any): _102.OneofDescriptorProto;
            toJSON(message: _102.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_102.OneofDescriptorProto>): _102.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _102.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EnumDescriptorProto;
            fromJSON(object: any): _102.EnumDescriptorProto;
            toJSON(message: _102.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_102.EnumDescriptorProto>): _102.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _102.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _102.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _102.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_102.EnumDescriptorProto_EnumReservedRange>): _102.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _102.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EnumValueDescriptorProto;
            fromJSON(object: any): _102.EnumValueDescriptorProto;
            toJSON(message: _102.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_102.EnumValueDescriptorProto>): _102.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _102.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ServiceDescriptorProto;
            fromJSON(object: any): _102.ServiceDescriptorProto;
            toJSON(message: _102.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_102.ServiceDescriptorProto>): _102.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _102.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MethodDescriptorProto;
            fromJSON(object: any): _102.MethodDescriptorProto;
            toJSON(message: _102.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_102.MethodDescriptorProto>): _102.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _102.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FileOptions;
            fromJSON(object: any): _102.FileOptions;
            toJSON(message: _102.FileOptions): unknown;
            fromPartial(object: Partial<_102.FileOptions>): _102.FileOptions;
        };
        MessageOptions: {
            encode(message: _102.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MessageOptions;
            fromJSON(object: any): _102.MessageOptions;
            toJSON(message: _102.MessageOptions): unknown;
            fromPartial(object: Partial<_102.MessageOptions>): _102.MessageOptions;
        };
        FieldOptions: {
            encode(message: _102.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FieldOptions;
            fromJSON(object: any): _102.FieldOptions;
            toJSON(message: _102.FieldOptions): unknown;
            fromPartial(object: Partial<_102.FieldOptions>): _102.FieldOptions;
        };
        OneofOptions: {
            encode(message: _102.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.OneofOptions;
            fromJSON(object: any): _102.OneofOptions;
            toJSON(message: _102.OneofOptions): unknown;
            fromPartial(object: Partial<_102.OneofOptions>): _102.OneofOptions;
        };
        EnumOptions: {
            encode(message: _102.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EnumOptions;
            fromJSON(object: any): _102.EnumOptions;
            toJSON(message: _102.EnumOptions): unknown;
            fromPartial(object: Partial<_102.EnumOptions>): _102.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _102.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EnumValueOptions;
            fromJSON(object: any): _102.EnumValueOptions;
            toJSON(message: _102.EnumValueOptions): unknown;
            fromPartial(object: Partial<_102.EnumValueOptions>): _102.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _102.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ServiceOptions;
            fromJSON(object: any): _102.ServiceOptions;
            toJSON(message: _102.ServiceOptions): unknown;
            fromPartial(object: Partial<_102.ServiceOptions>): _102.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _102.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MethodOptions;
            fromJSON(object: any): _102.MethodOptions;
            toJSON(message: _102.MethodOptions): unknown;
            fromPartial(object: Partial<_102.MethodOptions>): _102.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _102.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.UninterpretedOption;
            fromJSON(object: any): _102.UninterpretedOption;
            toJSON(message: _102.UninterpretedOption): unknown;
            fromPartial(object: Partial<_102.UninterpretedOption>): _102.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _102.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.UninterpretedOption_NamePart;
            fromJSON(object: any): _102.UninterpretedOption_NamePart;
            toJSON(message: _102.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_102.UninterpretedOption_NamePart>): _102.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _102.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.SourceCodeInfo;
            fromJSON(object: any): _102.SourceCodeInfo;
            toJSON(message: _102.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_102.SourceCodeInfo>): _102.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _102.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.SourceCodeInfo_Location;
            fromJSON(object: any): _102.SourceCodeInfo_Location;
            toJSON(message: _102.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_102.SourceCodeInfo_Location>): _102.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _102.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GeneratedCodeInfo;
            fromJSON(object: any): _102.GeneratedCodeInfo;
            toJSON(message: _102.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_102.GeneratedCodeInfo>): _102.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _102.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _102.GeneratedCodeInfo_Annotation;
            toJSON(message: _102.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_102.GeneratedCodeInfo_Annotation>): _102.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _101.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Any;
            fromJSON(object: any): _101.Any;
            toJSON(message: _101.Any): unknown;
            fromPartial(object: Partial<_101.Any>): _101.Any;
        };
    };
}
