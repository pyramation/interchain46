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
            fromAmino(object: _100.HttpAmino): _100.Http;
            toAmino(message: _100.Http): _100.HttpAmino;
        };
        HttpRule: {
            encode(message: _100.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.HttpRule;
            fromJSON(object: any): _100.HttpRule;
            toJSON(message: _100.HttpRule): unknown;
            fromPartial(object: Partial<_100.HttpRule>): _100.HttpRule;
            fromAmino(object: _100.HttpRuleAmino): _100.HttpRule;
            toAmino(message: _100.HttpRule): _100.HttpRuleAmino;
        };
        CustomHttpPattern: {
            encode(message: _100.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.CustomHttpPattern;
            fromJSON(object: any): _100.CustomHttpPattern;
            toJSON(message: _100.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_100.CustomHttpPattern>): _100.CustomHttpPattern;
            fromAmino(object: _100.CustomHttpPatternAmino): _100.CustomHttpPattern;
            toAmino(message: _100.CustomHttpPattern): _100.CustomHttpPatternAmino;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _105.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Timestamp;
            fromJSON(object: any): _105.Timestamp;
            toJSON(message: _105.Timestamp): unknown;
            fromPartial(object: Partial<_105.Timestamp>): _105.Timestamp;
            fromAmino(object: string): _105.Timestamp;
            toAmino(message: _105.Timestamp): string;
        };
        Empty: {
            encode(_: _104.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Empty;
            fromJSON(_: any): _104.Empty;
            toJSON(_: _104.Empty): unknown;
            fromPartial(_: Partial<_104.Empty>): _104.Empty;
            fromAmino(_: _104.EmptyAmino): _104.Empty;
            toAmino(_: _104.Empty): _104.EmptyAmino;
        };
        Duration: {
            encode(message: _103.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Duration;
            fromJSON(object: any): _103.Duration;
            toJSON(message: _103.Duration): unknown;
            fromPartial(object: Partial<_103.Duration>): _103.Duration;
            fromAmino(object: string): _103.Duration;
            toAmino(message: _103.Duration): string;
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
        FieldDescriptorProto_TypeSDKType: typeof _102.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _102.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _102.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _102.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _102.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _102.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _102.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _102.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _102.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _102.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _102.FieldOptions_CType;
        FieldOptions_JSType: typeof _102.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _102.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _102.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _102.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _102.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _102.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _102.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FileDescriptorSet;
            fromJSON(object: any): _102.FileDescriptorSet;
            toJSON(message: _102.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_102.FileDescriptorSet>): _102.FileDescriptorSet;
            fromAmino(object: _102.FileDescriptorSetAmino): _102.FileDescriptorSet;
            toAmino(message: _102.FileDescriptorSet): _102.FileDescriptorSetAmino;
        };
        FileDescriptorProto: {
            encode(message: _102.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FileDescriptorProto;
            fromJSON(object: any): _102.FileDescriptorProto;
            toJSON(message: _102.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_102.FileDescriptorProto>): _102.FileDescriptorProto;
            fromAmino(object: _102.FileDescriptorProtoAmino): _102.FileDescriptorProto;
            toAmino(message: _102.FileDescriptorProto): _102.FileDescriptorProtoAmino;
        };
        DescriptorProto: {
            encode(message: _102.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.DescriptorProto;
            fromJSON(object: any): _102.DescriptorProto;
            toJSON(message: _102.DescriptorProto): unknown;
            fromPartial(object: Partial<_102.DescriptorProto>): _102.DescriptorProto;
            fromAmino(object: _102.DescriptorProtoAmino): _102.DescriptorProto;
            toAmino(message: _102.DescriptorProto): _102.DescriptorProtoAmino;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _102.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _102.DescriptorProto_ExtensionRange;
            toJSON(message: _102.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_102.DescriptorProto_ExtensionRange>): _102.DescriptorProto_ExtensionRange;
            fromAmino(object: _102.DescriptorProto_ExtensionRangeAmino): _102.DescriptorProto_ExtensionRange;
            toAmino(message: _102.DescriptorProto_ExtensionRange): _102.DescriptorProto_ExtensionRangeAmino;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _102.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.DescriptorProto_ReservedRange;
            fromJSON(object: any): _102.DescriptorProto_ReservedRange;
            toJSON(message: _102.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_102.DescriptorProto_ReservedRange>): _102.DescriptorProto_ReservedRange;
            fromAmino(object: _102.DescriptorProto_ReservedRangeAmino): _102.DescriptorProto_ReservedRange;
            toAmino(message: _102.DescriptorProto_ReservedRange): _102.DescriptorProto_ReservedRangeAmino;
        };
        ExtensionRangeOptions: {
            encode(message: _102.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ExtensionRangeOptions;
            fromJSON(object: any): _102.ExtensionRangeOptions;
            toJSON(message: _102.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_102.ExtensionRangeOptions>): _102.ExtensionRangeOptions;
            fromAmino(object: _102.ExtensionRangeOptionsAmino): _102.ExtensionRangeOptions;
            toAmino(message: _102.ExtensionRangeOptions): _102.ExtensionRangeOptionsAmino;
        };
        FieldDescriptorProto: {
            encode(message: _102.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FieldDescriptorProto;
            fromJSON(object: any): _102.FieldDescriptorProto;
            toJSON(message: _102.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_102.FieldDescriptorProto>): _102.FieldDescriptorProto;
            fromAmino(object: _102.FieldDescriptorProtoAmino): _102.FieldDescriptorProto;
            toAmino(message: _102.FieldDescriptorProto): _102.FieldDescriptorProtoAmino;
        };
        OneofDescriptorProto: {
            encode(message: _102.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.OneofDescriptorProto;
            fromJSON(object: any): _102.OneofDescriptorProto;
            toJSON(message: _102.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_102.OneofDescriptorProto>): _102.OneofDescriptorProto;
            fromAmino(object: _102.OneofDescriptorProtoAmino): _102.OneofDescriptorProto;
            toAmino(message: _102.OneofDescriptorProto): _102.OneofDescriptorProtoAmino;
        };
        EnumDescriptorProto: {
            encode(message: _102.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EnumDescriptorProto;
            fromJSON(object: any): _102.EnumDescriptorProto;
            toJSON(message: _102.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_102.EnumDescriptorProto>): _102.EnumDescriptorProto;
            fromAmino(object: _102.EnumDescriptorProtoAmino): _102.EnumDescriptorProto;
            toAmino(message: _102.EnumDescriptorProto): _102.EnumDescriptorProtoAmino;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _102.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _102.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _102.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_102.EnumDescriptorProto_EnumReservedRange>): _102.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _102.EnumDescriptorProto_EnumReservedRangeAmino): _102.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _102.EnumDescriptorProto_EnumReservedRange): _102.EnumDescriptorProto_EnumReservedRangeAmino;
        };
        EnumValueDescriptorProto: {
            encode(message: _102.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EnumValueDescriptorProto;
            fromJSON(object: any): _102.EnumValueDescriptorProto;
            toJSON(message: _102.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_102.EnumValueDescriptorProto>): _102.EnumValueDescriptorProto;
            fromAmino(object: _102.EnumValueDescriptorProtoAmino): _102.EnumValueDescriptorProto;
            toAmino(message: _102.EnumValueDescriptorProto): _102.EnumValueDescriptorProtoAmino;
        };
        ServiceDescriptorProto: {
            encode(message: _102.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ServiceDescriptorProto;
            fromJSON(object: any): _102.ServiceDescriptorProto;
            toJSON(message: _102.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_102.ServiceDescriptorProto>): _102.ServiceDescriptorProto;
            fromAmino(object: _102.ServiceDescriptorProtoAmino): _102.ServiceDescriptorProto;
            toAmino(message: _102.ServiceDescriptorProto): _102.ServiceDescriptorProtoAmino;
        };
        MethodDescriptorProto: {
            encode(message: _102.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MethodDescriptorProto;
            fromJSON(object: any): _102.MethodDescriptorProto;
            toJSON(message: _102.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_102.MethodDescriptorProto>): _102.MethodDescriptorProto;
            fromAmino(object: _102.MethodDescriptorProtoAmino): _102.MethodDescriptorProto;
            toAmino(message: _102.MethodDescriptorProto): _102.MethodDescriptorProtoAmino;
        };
        FileOptions: {
            encode(message: _102.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FileOptions;
            fromJSON(object: any): _102.FileOptions;
            toJSON(message: _102.FileOptions): unknown;
            fromPartial(object: Partial<_102.FileOptions>): _102.FileOptions;
            fromAmino(object: _102.FileOptionsAmino): _102.FileOptions;
            toAmino(message: _102.FileOptions): _102.FileOptionsAmino;
        };
        MessageOptions: {
            encode(message: _102.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MessageOptions;
            fromJSON(object: any): _102.MessageOptions;
            toJSON(message: _102.MessageOptions): unknown;
            fromPartial(object: Partial<_102.MessageOptions>): _102.MessageOptions;
            fromAmino(object: _102.MessageOptionsAmino): _102.MessageOptions;
            toAmino(message: _102.MessageOptions): _102.MessageOptionsAmino;
        };
        FieldOptions: {
            encode(message: _102.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FieldOptions;
            fromJSON(object: any): _102.FieldOptions;
            toJSON(message: _102.FieldOptions): unknown;
            fromPartial(object: Partial<_102.FieldOptions>): _102.FieldOptions;
            fromAmino(object: _102.FieldOptionsAmino): _102.FieldOptions;
            toAmino(message: _102.FieldOptions): _102.FieldOptionsAmino;
        };
        OneofOptions: {
            encode(message: _102.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.OneofOptions;
            fromJSON(object: any): _102.OneofOptions;
            toJSON(message: _102.OneofOptions): unknown;
            fromPartial(object: Partial<_102.OneofOptions>): _102.OneofOptions;
            fromAmino(object: _102.OneofOptionsAmino): _102.OneofOptions;
            toAmino(message: _102.OneofOptions): _102.OneofOptionsAmino;
        };
        EnumOptions: {
            encode(message: _102.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EnumOptions;
            fromJSON(object: any): _102.EnumOptions;
            toJSON(message: _102.EnumOptions): unknown;
            fromPartial(object: Partial<_102.EnumOptions>): _102.EnumOptions;
            fromAmino(object: _102.EnumOptionsAmino): _102.EnumOptions;
            toAmino(message: _102.EnumOptions): _102.EnumOptionsAmino;
        };
        EnumValueOptions: {
            encode(message: _102.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EnumValueOptions;
            fromJSON(object: any): _102.EnumValueOptions;
            toJSON(message: _102.EnumValueOptions): unknown;
            fromPartial(object: Partial<_102.EnumValueOptions>): _102.EnumValueOptions;
            fromAmino(object: _102.EnumValueOptionsAmino): _102.EnumValueOptions;
            toAmino(message: _102.EnumValueOptions): _102.EnumValueOptionsAmino;
        };
        ServiceOptions: {
            encode(message: _102.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ServiceOptions;
            fromJSON(object: any): _102.ServiceOptions;
            toJSON(message: _102.ServiceOptions): unknown;
            fromPartial(object: Partial<_102.ServiceOptions>): _102.ServiceOptions;
            fromAmino(object: _102.ServiceOptionsAmino): _102.ServiceOptions;
            toAmino(message: _102.ServiceOptions): _102.ServiceOptionsAmino;
        };
        MethodOptions: {
            encode(message: _102.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MethodOptions;
            fromJSON(object: any): _102.MethodOptions;
            toJSON(message: _102.MethodOptions): unknown;
            fromPartial(object: Partial<_102.MethodOptions>): _102.MethodOptions;
            fromAmino(object: _102.MethodOptionsAmino): _102.MethodOptions;
            toAmino(message: _102.MethodOptions): _102.MethodOptionsAmino;
        };
        UninterpretedOption: {
            encode(message: _102.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.UninterpretedOption;
            fromJSON(object: any): _102.UninterpretedOption;
            toJSON(message: _102.UninterpretedOption): unknown;
            fromPartial(object: Partial<_102.UninterpretedOption>): _102.UninterpretedOption;
            fromAmino(object: _102.UninterpretedOptionAmino): _102.UninterpretedOption;
            toAmino(message: _102.UninterpretedOption): _102.UninterpretedOptionAmino;
        };
        UninterpretedOption_NamePart: {
            encode(message: _102.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.UninterpretedOption_NamePart;
            fromJSON(object: any): _102.UninterpretedOption_NamePart;
            toJSON(message: _102.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_102.UninterpretedOption_NamePart>): _102.UninterpretedOption_NamePart;
            fromAmino(object: _102.UninterpretedOption_NamePartAmino): _102.UninterpretedOption_NamePart;
            toAmino(message: _102.UninterpretedOption_NamePart): _102.UninterpretedOption_NamePartAmino;
        };
        SourceCodeInfo: {
            encode(message: _102.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.SourceCodeInfo;
            fromJSON(object: any): _102.SourceCodeInfo;
            toJSON(message: _102.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_102.SourceCodeInfo>): _102.SourceCodeInfo;
            fromAmino(object: _102.SourceCodeInfoAmino): _102.SourceCodeInfo;
            toAmino(message: _102.SourceCodeInfo): _102.SourceCodeInfoAmino;
        };
        SourceCodeInfo_Location: {
            encode(message: _102.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.SourceCodeInfo_Location;
            fromJSON(object: any): _102.SourceCodeInfo_Location;
            toJSON(message: _102.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_102.SourceCodeInfo_Location>): _102.SourceCodeInfo_Location;
            fromAmino(object: _102.SourceCodeInfo_LocationAmino): _102.SourceCodeInfo_Location;
            toAmino(message: _102.SourceCodeInfo_Location): _102.SourceCodeInfo_LocationAmino;
        };
        GeneratedCodeInfo: {
            encode(message: _102.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GeneratedCodeInfo;
            fromJSON(object: any): _102.GeneratedCodeInfo;
            toJSON(message: _102.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_102.GeneratedCodeInfo>): _102.GeneratedCodeInfo;
            fromAmino(object: _102.GeneratedCodeInfoAmino): _102.GeneratedCodeInfo;
            toAmino(message: _102.GeneratedCodeInfo): _102.GeneratedCodeInfoAmino;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _102.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _102.GeneratedCodeInfo_Annotation;
            toJSON(message: _102.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_102.GeneratedCodeInfo_Annotation>): _102.GeneratedCodeInfo_Annotation;
            fromAmino(object: _102.GeneratedCodeInfo_AnnotationAmino): _102.GeneratedCodeInfo_Annotation;
            toAmino(message: _102.GeneratedCodeInfo_Annotation): _102.GeneratedCodeInfo_AnnotationAmino;
        };
        Any: {
            encode(message: _101.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Any;
            fromJSON(object: any): _101.Any;
            toJSON(message: _101.Any): unknown;
            fromPartial(object: Partial<_101.Any>): _101.Any;
            fromAmino(object: _101.AnyAmino): _101.Any;
            toAmino(message: _101.Any): _101.AnyAmino;
        };
    };
}
