import * as _101 from "./api/http";
import * as _102 from "./protobuf/any";
import * as _103 from "./protobuf/descriptor";
import * as _104 from "./protobuf/duration";
import * as _105 from "./protobuf/empty";
import * as _106 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _101.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Http;
            fromJSON(object: any): _101.Http;
            toJSON(message: _101.Http): unknown;
            fromPartial(object: Partial<_101.Http>): _101.Http;
            fromAmino(object: _101.HttpAmino): _101.Http;
            toAmino(message: _101.Http): _101.HttpAmino;
        };
        HttpRule: {
            encode(message: _101.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.HttpRule;
            fromJSON(object: any): _101.HttpRule;
            toJSON(message: _101.HttpRule): unknown;
            fromPartial(object: Partial<_101.HttpRule>): _101.HttpRule;
            fromAmino(object: _101.HttpRuleAmino): _101.HttpRule;
            toAmino(message: _101.HttpRule): _101.HttpRuleAmino;
        };
        CustomHttpPattern: {
            encode(message: _101.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.CustomHttpPattern;
            fromJSON(object: any): _101.CustomHttpPattern;
            toJSON(message: _101.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_101.CustomHttpPattern>): _101.CustomHttpPattern;
            fromAmino(object: _101.CustomHttpPatternAmino): _101.CustomHttpPattern;
            toAmino(message: _101.CustomHttpPattern): _101.CustomHttpPatternAmino;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _106.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Timestamp;
            fromJSON(object: any): _106.Timestamp;
            toJSON(message: _106.Timestamp): unknown;
            fromPartial(object: Partial<_106.Timestamp>): _106.Timestamp;
            fromAmino(object: string): _106.Timestamp;
            toAmino(message: _106.Timestamp): string;
        };
        Empty: {
            encode(_: _105.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Empty;
            fromJSON(_: any): _105.Empty;
            toJSON(_: _105.Empty): unknown;
            fromPartial(_: Partial<_105.Empty>): _105.Empty;
            fromAmino(_: _105.EmptyAmino): _105.Empty;
            toAmino(_: _105.Empty): _105.EmptyAmino;
        };
        Duration: {
            encode(message: _104.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Duration;
            fromJSON(object: any): _104.Duration;
            toJSON(message: _104.Duration): unknown;
            fromPartial(object: Partial<_104.Duration>): _104.Duration;
            fromAmino(object: string): _104.Duration;
            toAmino(message: _104.Duration): string;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _103.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _103.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _103.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _103.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _103.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _103.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _103.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _103.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _103.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _103.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _103.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _103.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _103.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _103.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _103.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _103.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _103.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _103.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _103.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _103.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _103.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _103.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _103.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _103.FieldOptions_CType;
        FieldOptions_JSType: typeof _103.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _103.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _103.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _103.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _103.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _103.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _103.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.FileDescriptorSet;
            fromJSON(object: any): _103.FileDescriptorSet;
            toJSON(message: _103.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_103.FileDescriptorSet>): _103.FileDescriptorSet;
            fromAmino(object: _103.FileDescriptorSetAmino): _103.FileDescriptorSet;
            toAmino(message: _103.FileDescriptorSet): _103.FileDescriptorSetAmino;
        };
        FileDescriptorProto: {
            encode(message: _103.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.FileDescriptorProto;
            fromJSON(object: any): _103.FileDescriptorProto;
            toJSON(message: _103.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_103.FileDescriptorProto>): _103.FileDescriptorProto;
            fromAmino(object: _103.FileDescriptorProtoAmino): _103.FileDescriptorProto;
            toAmino(message: _103.FileDescriptorProto): _103.FileDescriptorProtoAmino;
        };
        DescriptorProto: {
            encode(message: _103.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DescriptorProto;
            fromJSON(object: any): _103.DescriptorProto;
            toJSON(message: _103.DescriptorProto): unknown;
            fromPartial(object: Partial<_103.DescriptorProto>): _103.DescriptorProto;
            fromAmino(object: _103.DescriptorProtoAmino): _103.DescriptorProto;
            toAmino(message: _103.DescriptorProto): _103.DescriptorProtoAmino;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _103.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _103.DescriptorProto_ExtensionRange;
            toJSON(message: _103.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_103.DescriptorProto_ExtensionRange>): _103.DescriptorProto_ExtensionRange;
            fromAmino(object: _103.DescriptorProto_ExtensionRangeAmino): _103.DescriptorProto_ExtensionRange;
            toAmino(message: _103.DescriptorProto_ExtensionRange): _103.DescriptorProto_ExtensionRangeAmino;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _103.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DescriptorProto_ReservedRange;
            fromJSON(object: any): _103.DescriptorProto_ReservedRange;
            toJSON(message: _103.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_103.DescriptorProto_ReservedRange>): _103.DescriptorProto_ReservedRange;
            fromAmino(object: _103.DescriptorProto_ReservedRangeAmino): _103.DescriptorProto_ReservedRange;
            toAmino(message: _103.DescriptorProto_ReservedRange): _103.DescriptorProto_ReservedRangeAmino;
        };
        ExtensionRangeOptions: {
            encode(message: _103.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ExtensionRangeOptions;
            fromJSON(object: any): _103.ExtensionRangeOptions;
            toJSON(message: _103.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_103.ExtensionRangeOptions>): _103.ExtensionRangeOptions;
            fromAmino(object: _103.ExtensionRangeOptionsAmino): _103.ExtensionRangeOptions;
            toAmino(message: _103.ExtensionRangeOptions): _103.ExtensionRangeOptionsAmino;
        };
        FieldDescriptorProto: {
            encode(message: _103.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.FieldDescriptorProto;
            fromJSON(object: any): _103.FieldDescriptorProto;
            toJSON(message: _103.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_103.FieldDescriptorProto>): _103.FieldDescriptorProto;
            fromAmino(object: _103.FieldDescriptorProtoAmino): _103.FieldDescriptorProto;
            toAmino(message: _103.FieldDescriptorProto): _103.FieldDescriptorProtoAmino;
        };
        OneofDescriptorProto: {
            encode(message: _103.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.OneofDescriptorProto;
            fromJSON(object: any): _103.OneofDescriptorProto;
            toJSON(message: _103.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_103.OneofDescriptorProto>): _103.OneofDescriptorProto;
            fromAmino(object: _103.OneofDescriptorProtoAmino): _103.OneofDescriptorProto;
            toAmino(message: _103.OneofDescriptorProto): _103.OneofDescriptorProtoAmino;
        };
        EnumDescriptorProto: {
            encode(message: _103.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.EnumDescriptorProto;
            fromJSON(object: any): _103.EnumDescriptorProto;
            toJSON(message: _103.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_103.EnumDescriptorProto>): _103.EnumDescriptorProto;
            fromAmino(object: _103.EnumDescriptorProtoAmino): _103.EnumDescriptorProto;
            toAmino(message: _103.EnumDescriptorProto): _103.EnumDescriptorProtoAmino;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _103.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _103.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _103.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_103.EnumDescriptorProto_EnumReservedRange>): _103.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _103.EnumDescriptorProto_EnumReservedRangeAmino): _103.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _103.EnumDescriptorProto_EnumReservedRange): _103.EnumDescriptorProto_EnumReservedRangeAmino;
        };
        EnumValueDescriptorProto: {
            encode(message: _103.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.EnumValueDescriptorProto;
            fromJSON(object: any): _103.EnumValueDescriptorProto;
            toJSON(message: _103.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_103.EnumValueDescriptorProto>): _103.EnumValueDescriptorProto;
            fromAmino(object: _103.EnumValueDescriptorProtoAmino): _103.EnumValueDescriptorProto;
            toAmino(message: _103.EnumValueDescriptorProto): _103.EnumValueDescriptorProtoAmino;
        };
        ServiceDescriptorProto: {
            encode(message: _103.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ServiceDescriptorProto;
            fromJSON(object: any): _103.ServiceDescriptorProto;
            toJSON(message: _103.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_103.ServiceDescriptorProto>): _103.ServiceDescriptorProto;
            fromAmino(object: _103.ServiceDescriptorProtoAmino): _103.ServiceDescriptorProto;
            toAmino(message: _103.ServiceDescriptorProto): _103.ServiceDescriptorProtoAmino;
        };
        MethodDescriptorProto: {
            encode(message: _103.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MethodDescriptorProto;
            fromJSON(object: any): _103.MethodDescriptorProto;
            toJSON(message: _103.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_103.MethodDescriptorProto>): _103.MethodDescriptorProto;
            fromAmino(object: _103.MethodDescriptorProtoAmino): _103.MethodDescriptorProto;
            toAmino(message: _103.MethodDescriptorProto): _103.MethodDescriptorProtoAmino;
        };
        FileOptions: {
            encode(message: _103.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.FileOptions;
            fromJSON(object: any): _103.FileOptions;
            toJSON(message: _103.FileOptions): unknown;
            fromPartial(object: Partial<_103.FileOptions>): _103.FileOptions;
            fromAmino(object: _103.FileOptionsAmino): _103.FileOptions;
            toAmino(message: _103.FileOptions): _103.FileOptionsAmino;
        };
        MessageOptions: {
            encode(message: _103.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MessageOptions;
            fromJSON(object: any): _103.MessageOptions;
            toJSON(message: _103.MessageOptions): unknown;
            fromPartial(object: Partial<_103.MessageOptions>): _103.MessageOptions;
            fromAmino(object: _103.MessageOptionsAmino): _103.MessageOptions;
            toAmino(message: _103.MessageOptions): _103.MessageOptionsAmino;
        };
        FieldOptions: {
            encode(message: _103.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.FieldOptions;
            fromJSON(object: any): _103.FieldOptions;
            toJSON(message: _103.FieldOptions): unknown;
            fromPartial(object: Partial<_103.FieldOptions>): _103.FieldOptions;
            fromAmino(object: _103.FieldOptionsAmino): _103.FieldOptions;
            toAmino(message: _103.FieldOptions): _103.FieldOptionsAmino;
        };
        OneofOptions: {
            encode(message: _103.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.OneofOptions;
            fromJSON(object: any): _103.OneofOptions;
            toJSON(message: _103.OneofOptions): unknown;
            fromPartial(object: Partial<_103.OneofOptions>): _103.OneofOptions;
            fromAmino(object: _103.OneofOptionsAmino): _103.OneofOptions;
            toAmino(message: _103.OneofOptions): _103.OneofOptionsAmino;
        };
        EnumOptions: {
            encode(message: _103.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.EnumOptions;
            fromJSON(object: any): _103.EnumOptions;
            toJSON(message: _103.EnumOptions): unknown;
            fromPartial(object: Partial<_103.EnumOptions>): _103.EnumOptions;
            fromAmino(object: _103.EnumOptionsAmino): _103.EnumOptions;
            toAmino(message: _103.EnumOptions): _103.EnumOptionsAmino;
        };
        EnumValueOptions: {
            encode(message: _103.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.EnumValueOptions;
            fromJSON(object: any): _103.EnumValueOptions;
            toJSON(message: _103.EnumValueOptions): unknown;
            fromPartial(object: Partial<_103.EnumValueOptions>): _103.EnumValueOptions;
            fromAmino(object: _103.EnumValueOptionsAmino): _103.EnumValueOptions;
            toAmino(message: _103.EnumValueOptions): _103.EnumValueOptionsAmino;
        };
        ServiceOptions: {
            encode(message: _103.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ServiceOptions;
            fromJSON(object: any): _103.ServiceOptions;
            toJSON(message: _103.ServiceOptions): unknown;
            fromPartial(object: Partial<_103.ServiceOptions>): _103.ServiceOptions;
            fromAmino(object: _103.ServiceOptionsAmino): _103.ServiceOptions;
            toAmino(message: _103.ServiceOptions): _103.ServiceOptionsAmino;
        };
        MethodOptions: {
            encode(message: _103.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MethodOptions;
            fromJSON(object: any): _103.MethodOptions;
            toJSON(message: _103.MethodOptions): unknown;
            fromPartial(object: Partial<_103.MethodOptions>): _103.MethodOptions;
            fromAmino(object: _103.MethodOptionsAmino): _103.MethodOptions;
            toAmino(message: _103.MethodOptions): _103.MethodOptionsAmino;
        };
        UninterpretedOption: {
            encode(message: _103.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.UninterpretedOption;
            fromJSON(object: any): _103.UninterpretedOption;
            toJSON(message: _103.UninterpretedOption): unknown;
            fromPartial(object: Partial<_103.UninterpretedOption>): _103.UninterpretedOption;
            fromAmino(object: _103.UninterpretedOptionAmino): _103.UninterpretedOption;
            toAmino(message: _103.UninterpretedOption): _103.UninterpretedOptionAmino;
        };
        UninterpretedOption_NamePart: {
            encode(message: _103.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.UninterpretedOption_NamePart;
            fromJSON(object: any): _103.UninterpretedOption_NamePart;
            toJSON(message: _103.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_103.UninterpretedOption_NamePart>): _103.UninterpretedOption_NamePart;
            fromAmino(object: _103.UninterpretedOption_NamePartAmino): _103.UninterpretedOption_NamePart;
            toAmino(message: _103.UninterpretedOption_NamePart): _103.UninterpretedOption_NamePartAmino;
        };
        SourceCodeInfo: {
            encode(message: _103.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.SourceCodeInfo;
            fromJSON(object: any): _103.SourceCodeInfo;
            toJSON(message: _103.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_103.SourceCodeInfo>): _103.SourceCodeInfo;
            fromAmino(object: _103.SourceCodeInfoAmino): _103.SourceCodeInfo;
            toAmino(message: _103.SourceCodeInfo): _103.SourceCodeInfoAmino;
        };
        SourceCodeInfo_Location: {
            encode(message: _103.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.SourceCodeInfo_Location;
            fromJSON(object: any): _103.SourceCodeInfo_Location;
            toJSON(message: _103.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_103.SourceCodeInfo_Location>): _103.SourceCodeInfo_Location;
            fromAmino(object: _103.SourceCodeInfo_LocationAmino): _103.SourceCodeInfo_Location;
            toAmino(message: _103.SourceCodeInfo_Location): _103.SourceCodeInfo_LocationAmino;
        };
        GeneratedCodeInfo: {
            encode(message: _103.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.GeneratedCodeInfo;
            fromJSON(object: any): _103.GeneratedCodeInfo;
            toJSON(message: _103.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_103.GeneratedCodeInfo>): _103.GeneratedCodeInfo;
            fromAmino(object: _103.GeneratedCodeInfoAmino): _103.GeneratedCodeInfo;
            toAmino(message: _103.GeneratedCodeInfo): _103.GeneratedCodeInfoAmino;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _103.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _103.GeneratedCodeInfo_Annotation;
            toJSON(message: _103.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_103.GeneratedCodeInfo_Annotation>): _103.GeneratedCodeInfo_Annotation;
            fromAmino(object: _103.GeneratedCodeInfo_AnnotationAmino): _103.GeneratedCodeInfo_Annotation;
            toAmino(message: _103.GeneratedCodeInfo_Annotation): _103.GeneratedCodeInfo_AnnotationAmino;
        };
        Any: {
            encode(message: _102.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Any;
            fromJSON(object: any): _102.Any;
            toJSON(message: _102.Any): unknown;
            fromPartial(object: Partial<_102.Any>): _102.Any;
            fromAmino(object: _102.AnyAmino): _102.Any;
            toAmino(message: _102.Any): _102.AnyAmino;
        };
    };
}
