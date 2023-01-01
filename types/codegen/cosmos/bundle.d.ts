import * as _3 from "./app/module/v1alpha1/module";
import * as _4 from "./app/v1alpha1/config";
import * as _5 from "./app/v1alpha1/module";
import * as _6 from "./app/v1alpha1/query";
import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./authz/v1beta1/authz";
import * as _11 from "./authz/v1beta1/event";
import * as _12 from "./authz/v1beta1/genesis";
import * as _13 from "./authz/v1beta1/query";
import * as _14 from "./authz/v1beta1/tx";
import * as _15 from "./bank/v1beta1/authz";
import * as _16 from "./bank/v1beta1/bank";
import * as _17 from "./bank/v1beta1/genesis";
import * as _18 from "./bank/v1beta1/query";
import * as _19 from "./bank/v1beta1/tx";
import * as _20 from "./base/abci/v1beta1/abci";
import * as _21 from "./base/kv/v1beta1/kv";
import * as _22 from "./base/node/v1beta1/query";
import * as _23 from "./base/query/v1beta1/pagination";
import * as _24 from "./base/reflection/v1beta1/reflection";
import * as _25 from "./base/reflection/v2alpha1/reflection";
import * as _26 from "./base/snapshots/v1beta1/snapshot";
import * as _27 from "./base/store/v1beta1/commit_info";
import * as _28 from "./base/store/v1beta1/listening";
import * as _29 from "./base/tendermint/v1beta1/query";
import * as _30 from "./base/tendermint/v1beta1/types";
import * as _31 from "./base/v1beta1/coin";
import * as _32 from "./capability/v1beta1/capability";
import * as _33 from "./capability/v1beta1/genesis";
import * as _34 from "./crisis/v1beta1/genesis";
import * as _35 from "./crisis/v1beta1/tx";
import * as _36 from "./crypto/ed25519/keys";
import * as _37 from "./crypto/hd/v1/hd";
import * as _38 from "./crypto/keyring/v1/record";
import * as _39 from "./crypto/multisig/keys";
import * as _40 from "./crypto/secp256k1/keys";
import * as _41 from "./crypto/secp256r1/keys";
import * as _42 from "./distribution/v1beta1/distribution";
import * as _43 from "./distribution/v1beta1/genesis";
import * as _44 from "./distribution/v1beta1/query";
import * as _45 from "./distribution/v1beta1/tx";
import * as _46 from "./evidence/v1beta1/evidence";
import * as _47 from "./evidence/v1beta1/genesis";
import * as _48 from "./evidence/v1beta1/query";
import * as _49 from "./evidence/v1beta1/tx";
import * as _50 from "./feegrant/v1beta1/feegrant";
import * as _51 from "./feegrant/v1beta1/genesis";
import * as _52 from "./feegrant/v1beta1/query";
import * as _53 from "./feegrant/v1beta1/tx";
import * as _54 from "./genutil/v1beta1/genesis";
import * as _55 from "./gov/v1/genesis";
import * as _56 from "./gov/v1/gov";
import * as _57 from "./gov/v1/query";
import * as _58 from "./gov/v1/tx";
import * as _59 from "./gov/v1beta1/genesis";
import * as _60 from "./gov/v1beta1/gov";
import * as _61 from "./gov/v1beta1/query";
import * as _62 from "./gov/v1beta1/tx";
import * as _63 from "./group/v1/events";
import * as _64 from "./group/v1/genesis";
import * as _65 from "./group/v1/query";
import * as _66 from "./group/v1/tx";
import * as _67 from "./group/v1/types";
import * as _68 from "./mint/v1beta1/genesis";
import * as _69 from "./mint/v1beta1/mint";
import * as _70 from "./mint/v1beta1/query";
import * as _72 from "./nft/v1beta1/event";
import * as _73 from "./nft/v1beta1/genesis";
import * as _74 from "./nft/v1beta1/nft";
import * as _75 from "./nft/v1beta1/query";
import * as _76 from "./nft/v1beta1/tx";
import * as _77 from "./orm/module/v1alpha1/module";
import * as _78 from "./orm/v1/orm";
import * as _79 from "./orm/v1alpha1/schema";
import * as _80 from "./params/v1beta1/params";
import * as _81 from "./params/v1beta1/query";
import * as _82 from "./slashing/v1beta1/genesis";
import * as _83 from "./slashing/v1beta1/query";
import * as _84 from "./slashing/v1beta1/slashing";
import * as _85 from "./slashing/v1beta1/tx";
import * as _86 from "./staking/v1beta1/authz";
import * as _87 from "./staking/v1beta1/genesis";
import * as _88 from "./staking/v1beta1/query";
import * as _89 from "./staking/v1beta1/staking";
import * as _90 from "./staking/v1beta1/tx";
import * as _91 from "./tx/signing/v1beta1/signing";
import * as _92 from "./tx/v1beta1/service";
import * as _93 from "./tx/v1beta1/tx";
import * as _94 from "./upgrade/v1beta1/query";
import * as _95 from "./upgrade/v1beta1/tx";
import * as _96 from "./upgrade/v1beta1/upgrade";
import * as _97 from "./vesting/v1beta1/tx";
import * as _98 from "./vesting/v1beta1/vesting";
import * as _146 from "./app/v1alpha1/query.rpc.Query";
import * as _147 from "./auth/v1beta1/query.rpc.Query";
import * as _148 from "./authz/v1beta1/query.rpc.Query";
import * as _149 from "./bank/v1beta1/query.rpc.Query";
import * as _150 from "./base/node/v1beta1/query.rpc.Service";
import * as _151 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _152 from "./distribution/v1beta1/query.rpc.Query";
import * as _153 from "./evidence/v1beta1/query.rpc.Query";
import * as _154 from "./feegrant/v1beta1/query.rpc.Query";
import * as _155 from "./gov/v1/query.rpc.Query";
import * as _156 from "./gov/v1beta1/query.rpc.Query";
import * as _157 from "./group/v1/query.rpc.Query";
import * as _158 from "./mint/v1beta1/query.rpc.Query";
import * as _159 from "./nft/v1beta1/query.rpc.Query";
import * as _160 from "./params/v1beta1/query.rpc.Query";
import * as _161 from "./slashing/v1beta1/query.rpc.Query";
import * as _162 from "./staking/v1beta1/query.rpc.Query";
import * as _163 from "./tx/v1beta1/service.rpc.Service";
import * as _164 from "./upgrade/v1beta1/query.rpc.Query";
import * as _165 from "./authz/v1beta1/tx.rpc.msg";
import * as _166 from "./bank/v1beta1/tx.rpc.msg";
import * as _167 from "./crisis/v1beta1/tx.rpc.msg";
import * as _168 from "./distribution/v1beta1/tx.rpc.msg";
import * as _169 from "./evidence/v1beta1/tx.rpc.msg";
import * as _170 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _171 from "./gov/v1/tx.rpc.msg";
import * as _172 from "./gov/v1beta1/tx.rpc.msg";
import * as _173 from "./group/v1/tx.rpc.msg";
import * as _174 from "./nft/v1beta1/tx.rpc.msg";
import * as _175 from "./slashing/v1beta1/tx.rpc.msg";
import * as _176 from "./staking/v1beta1/tx.rpc.msg";
import * as _177 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _178 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _3.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Module;
                    fromJSON(_: any): _3.Module;
                    toJSON(_: _3.Module): unknown;
                    fromPartial(_: Partial<_3.Module>): _3.Module;
                    fromAmino(_: _3.ModuleAmino): _3.Module;
                    toAmino(_: _3.Module): _3.ModuleAmino;
                    fromAminoMsg(object: _3.ModuleAminoMsg): _3.Module;
                    toAminoMsg(message: _3.Module): _3.ModuleAminoMsg;
                    fromProtoMsg(message: _3.ModuleProtoMsg): _3.Module;
                    toProto(message: _3.Module): Uint8Array;
                    toProtoMsg(message: _3.Module): _3.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _146.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _6.QueryConfigRequest): Promise<_6.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _6.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryConfigRequest;
                fromJSON(_: any): _6.QueryConfigRequest;
                toJSON(_: _6.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_6.QueryConfigRequest>): _6.QueryConfigRequest;
                fromAmino(_: _6.QueryConfigRequestAmino): _6.QueryConfigRequest;
                toAmino(_: _6.QueryConfigRequest): _6.QueryConfigRequestAmino;
                fromAminoMsg(object: _6.QueryConfigRequestAminoMsg): _6.QueryConfigRequest;
                toAminoMsg(message: _6.QueryConfigRequest): _6.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _6.QueryConfigRequestProtoMsg): _6.QueryConfigRequest;
                toProto(message: _6.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _6.QueryConfigRequest): _6.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                encode(message: _6.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryConfigResponse;
                fromJSON(object: any): _6.QueryConfigResponse;
                toJSON(message: _6.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_6.QueryConfigResponse>): _6.QueryConfigResponse;
                fromAmino(object: _6.QueryConfigResponseAmino): _6.QueryConfigResponse;
                toAmino(message: _6.QueryConfigResponse): _6.QueryConfigResponseAmino;
                fromAminoMsg(object: _6.QueryConfigResponseAminoMsg): _6.QueryConfigResponse;
                toAminoMsg(message: _6.QueryConfigResponse): _6.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _6.QueryConfigResponseProtoMsg): _6.QueryConfigResponse;
                toProto(message: _6.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _6.QueryConfigResponse): _6.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                encode(message: _5.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ModuleDescriptor;
                fromJSON(object: any): _5.ModuleDescriptor;
                toJSON(message: _5.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_5.ModuleDescriptor>): _5.ModuleDescriptor;
                fromAmino(object: _5.ModuleDescriptorAmino): _5.ModuleDescriptor;
                toAmino(message: _5.ModuleDescriptor): _5.ModuleDescriptorAmino;
                fromAminoMsg(object: _5.ModuleDescriptorAminoMsg): _5.ModuleDescriptor;
                toAminoMsg(message: _5.ModuleDescriptor): _5.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _5.ModuleDescriptorProtoMsg): _5.ModuleDescriptor;
                toProto(message: _5.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _5.ModuleDescriptor): _5.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                encode(message: _5.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.PackageReference;
                fromJSON(object: any): _5.PackageReference;
                toJSON(message: _5.PackageReference): unknown;
                fromPartial(object: Partial<_5.PackageReference>): _5.PackageReference;
                fromAmino(object: _5.PackageReferenceAmino): _5.PackageReference;
                toAmino(message: _5.PackageReference): _5.PackageReferenceAmino;
                fromAminoMsg(object: _5.PackageReferenceAminoMsg): _5.PackageReference;
                toAminoMsg(message: _5.PackageReference): _5.PackageReferenceAminoMsg;
                fromProtoMsg(message: _5.PackageReferenceProtoMsg): _5.PackageReference;
                toProto(message: _5.PackageReference): Uint8Array;
                toProtoMsg(message: _5.PackageReference): _5.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                encode(message: _5.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MigrateFromInfo;
                fromJSON(object: any): _5.MigrateFromInfo;
                toJSON(message: _5.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_5.MigrateFromInfo>): _5.MigrateFromInfo;
                fromAmino(object: _5.MigrateFromInfoAmino): _5.MigrateFromInfo;
                toAmino(message: _5.MigrateFromInfo): _5.MigrateFromInfoAmino;
                fromAminoMsg(object: _5.MigrateFromInfoAminoMsg): _5.MigrateFromInfo;
                toAminoMsg(message: _5.MigrateFromInfo): _5.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _5.MigrateFromInfoProtoMsg): _5.MigrateFromInfo;
                toProto(message: _5.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _5.MigrateFromInfo): _5.MigrateFromInfoProtoMsg;
            };
            Config: {
                encode(message: _4.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Config;
                fromJSON(object: any): _4.Config;
                toJSON(message: _4.Config): unknown;
                fromPartial(object: Partial<_4.Config>): _4.Config;
                fromAmino(object: _4.ConfigAmino): _4.Config;
                toAmino(message: _4.Config): _4.ConfigAmino;
                fromAminoMsg(object: _4.ConfigAminoMsg): _4.Config;
                toAminoMsg(message: _4.Config): _4.ConfigAminoMsg;
                fromProtoMsg(message: _4.ConfigProtoMsg): _4.Config;
                toProto(message: _4.Config): Uint8Array;
                toProtoMsg(message: _4.Config): _4.ConfigProtoMsg;
            };
            ModuleConfig: {
                encode(message: _4.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.ModuleConfig;
                fromJSON(object: any): _4.ModuleConfig;
                toJSON(message: _4.ModuleConfig): unknown;
                fromPartial(object: Partial<_4.ModuleConfig>): _4.ModuleConfig;
                fromAmino(object: _4.ModuleConfigAmino): _4.ModuleConfig;
                toAmino(message: _4.ModuleConfig): _4.ModuleConfigAmino;
                fromAminoMsg(object: _4.ModuleConfigAminoMsg): _4.ModuleConfig;
                toAminoMsg(message: _4.ModuleConfig): _4.ModuleConfigAminoMsg;
                fromProtoMsg(message: _4.ModuleConfigProtoMsg): _4.ModuleConfig;
                toProto(message: _4.ModuleConfig): Uint8Array;
                toProtoMsg(message: _4.ModuleConfig): _4.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _147.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                accountAddressByID(request: _9.QueryAccountAddressByIDRequest): Promise<_9.QueryAccountAddressByIDResponse>;
                params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                moduleAccounts(request?: _9.QueryModuleAccountsRequest): Promise<_9.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _9.Bech32PrefixRequest): Promise<_9.Bech32PrefixResponse>;
                addressBytesToString(request: _9.AddressBytesToStringRequest): Promise<_9.AddressBytesToStringResponse>;
                addressStringToBytes(request: _9.AddressStringToBytesRequest): Promise<_9.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _9.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountsRequest;
                fromJSON(object: any): _9.QueryAccountsRequest;
                toJSON(message: _9.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_9.QueryAccountsRequest>): _9.QueryAccountsRequest;
                fromAmino(object: _9.QueryAccountsRequestAmino): _9.QueryAccountsRequest;
                toAmino(message: _9.QueryAccountsRequest): _9.QueryAccountsRequestAmino;
                fromAminoMsg(object: _9.QueryAccountsRequestAminoMsg): _9.QueryAccountsRequest;
                toAminoMsg(message: _9.QueryAccountsRequest): _9.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryAccountsRequestProtoMsg): _9.QueryAccountsRequest;
                toProto(message: _9.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAccountsRequest): _9.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                encode(message: _9.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountsResponse;
                fromJSON(object: any): _9.QueryAccountsResponse;
                toJSON(message: _9.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_9.QueryAccountsResponse>): _9.QueryAccountsResponse;
                fromAmino(object: _9.QueryAccountsResponseAmino): _9.QueryAccountsResponse;
                toAmino(message: _9.QueryAccountsResponse): _9.QueryAccountsResponseAmino;
                fromAminoMsg(object: _9.QueryAccountsResponseAminoMsg): _9.QueryAccountsResponse;
                toAminoMsg(message: _9.QueryAccountsResponse): _9.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryAccountsResponseProtoMsg): _9.QueryAccountsResponse;
                toProto(message: _9.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAccountsResponse): _9.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                encode(message: _9.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountRequest;
                fromJSON(object: any): _9.QueryAccountRequest;
                toJSON(message: _9.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_9.QueryAccountRequest>): _9.QueryAccountRequest;
                fromAmino(object: _9.QueryAccountRequestAmino): _9.QueryAccountRequest;
                toAmino(message: _9.QueryAccountRequest): _9.QueryAccountRequestAmino;
                fromAminoMsg(object: _9.QueryAccountRequestAminoMsg): _9.QueryAccountRequest;
                toAminoMsg(message: _9.QueryAccountRequest): _9.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _9.QueryAccountRequestProtoMsg): _9.QueryAccountRequest;
                toProto(message: _9.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAccountRequest): _9.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                encode(message: _9.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountResponse;
                fromJSON(object: any): _9.QueryAccountResponse;
                toJSON(message: _9.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_9.QueryAccountResponse>): _9.QueryAccountResponse;
                fromAmino(object: _9.QueryAccountResponseAmino): _9.QueryAccountResponse;
                toAmino(message: _9.QueryAccountResponse): _9.QueryAccountResponseAmino;
                fromAminoMsg(object: _9.QueryAccountResponseAminoMsg): _9.QueryAccountResponse;
                toAminoMsg(message: _9.QueryAccountResponse): _9.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _9.QueryAccountResponseProtoMsg): _9.QueryAccountResponse;
                toProto(message: _9.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAccountResponse): _9.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _9.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryParamsRequest;
                fromJSON(_: any): _9.QueryParamsRequest;
                toJSON(_: _9.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_9.QueryParamsRequest>): _9.QueryParamsRequest;
                fromAmino(_: _9.QueryParamsRequestAmino): _9.QueryParamsRequest;
                toAmino(_: _9.QueryParamsRequest): _9.QueryParamsRequestAmino;
                fromAminoMsg(object: _9.QueryParamsRequestAminoMsg): _9.QueryParamsRequest;
                toAminoMsg(message: _9.QueryParamsRequest): _9.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryParamsRequestProtoMsg): _9.QueryParamsRequest;
                toProto(message: _9.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryParamsRequest): _9.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _9.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryParamsResponse;
                fromJSON(object: any): _9.QueryParamsResponse;
                toJSON(message: _9.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_9.QueryParamsResponse>): _9.QueryParamsResponse;
                fromAmino(object: _9.QueryParamsResponseAmino): _9.QueryParamsResponse;
                toAmino(message: _9.QueryParamsResponse): _9.QueryParamsResponseAmino;
                fromAminoMsg(object: _9.QueryParamsResponseAminoMsg): _9.QueryParamsResponse;
                toAminoMsg(message: _9.QueryParamsResponse): _9.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryParamsResponseProtoMsg): _9.QueryParamsResponse;
                toProto(message: _9.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryParamsResponse): _9.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                encode(_: _9.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryModuleAccountsRequest;
                fromJSON(_: any): _9.QueryModuleAccountsRequest;
                toJSON(_: _9.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_9.QueryModuleAccountsRequest>): _9.QueryModuleAccountsRequest;
                fromAmino(_: _9.QueryModuleAccountsRequestAmino): _9.QueryModuleAccountsRequest;
                toAmino(_: _9.QueryModuleAccountsRequest): _9.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _9.QueryModuleAccountsRequestAminoMsg): _9.QueryModuleAccountsRequest;
                toAminoMsg(message: _9.QueryModuleAccountsRequest): _9.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryModuleAccountsRequestProtoMsg): _9.QueryModuleAccountsRequest;
                toProto(message: _9.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryModuleAccountsRequest): _9.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                encode(message: _9.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryModuleAccountsResponse;
                fromJSON(object: any): _9.QueryModuleAccountsResponse;
                toJSON(message: _9.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_9.QueryModuleAccountsResponse>): _9.QueryModuleAccountsResponse;
                fromAmino(object: _9.QueryModuleAccountsResponseAmino): _9.QueryModuleAccountsResponse;
                toAmino(message: _9.QueryModuleAccountsResponse): _9.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _9.QueryModuleAccountsResponseAminoMsg): _9.QueryModuleAccountsResponse;
                toAminoMsg(message: _9.QueryModuleAccountsResponse): _9.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryModuleAccountsResponseProtoMsg): _9.QueryModuleAccountsResponse;
                toProto(message: _9.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryModuleAccountsResponse): _9.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _9.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _9.QueryModuleAccountByNameRequest;
                toJSON(message: _9.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: Partial<_9.QueryModuleAccountByNameRequest>): _9.QueryModuleAccountByNameRequest;
                fromAmino(object: _9.QueryModuleAccountByNameRequestAmino): _9.QueryModuleAccountByNameRequest;
                toAmino(message: _9.QueryModuleAccountByNameRequest): _9.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _9.QueryModuleAccountByNameRequestAminoMsg): _9.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _9.QueryModuleAccountByNameRequest): _9.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _9.QueryModuleAccountByNameRequestProtoMsg): _9.QueryModuleAccountByNameRequest;
                toProto(message: _9.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _9.QueryModuleAccountByNameRequest): _9.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _9.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _9.QueryModuleAccountByNameResponse;
                toJSON(message: _9.QueryModuleAccountByNameResponse): unknown;
                fromPartial(object: Partial<_9.QueryModuleAccountByNameResponse>): _9.QueryModuleAccountByNameResponse;
                fromAmino(object: _9.QueryModuleAccountByNameResponseAmino): _9.QueryModuleAccountByNameResponse;
                toAmino(message: _9.QueryModuleAccountByNameResponse): _9.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _9.QueryModuleAccountByNameResponseAminoMsg): _9.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _9.QueryModuleAccountByNameResponse): _9.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _9.QueryModuleAccountByNameResponseProtoMsg): _9.QueryModuleAccountByNameResponse;
                toProto(message: _9.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _9.QueryModuleAccountByNameResponse): _9.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                encode(_: _9.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Bech32PrefixRequest;
                fromJSON(_: any): _9.Bech32PrefixRequest;
                toJSON(_: _9.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_9.Bech32PrefixRequest>): _9.Bech32PrefixRequest;
                fromAmino(_: _9.Bech32PrefixRequestAmino): _9.Bech32PrefixRequest;
                toAmino(_: _9.Bech32PrefixRequest): _9.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _9.Bech32PrefixRequestAminoMsg): _9.Bech32PrefixRequest;
                toAminoMsg(message: _9.Bech32PrefixRequest): _9.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _9.Bech32PrefixRequestProtoMsg): _9.Bech32PrefixRequest;
                toProto(message: _9.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _9.Bech32PrefixRequest): _9.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                encode(message: _9.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Bech32PrefixResponse;
                fromJSON(object: any): _9.Bech32PrefixResponse;
                toJSON(message: _9.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_9.Bech32PrefixResponse>): _9.Bech32PrefixResponse;
                fromAmino(object: _9.Bech32PrefixResponseAmino): _9.Bech32PrefixResponse;
                toAmino(message: _9.Bech32PrefixResponse): _9.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _9.Bech32PrefixResponseAminoMsg): _9.Bech32PrefixResponse;
                toAminoMsg(message: _9.Bech32PrefixResponse): _9.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _9.Bech32PrefixResponseProtoMsg): _9.Bech32PrefixResponse;
                toProto(message: _9.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _9.Bech32PrefixResponse): _9.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                encode(message: _9.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AddressBytesToStringRequest;
                fromJSON(object: any): _9.AddressBytesToStringRequest;
                toJSON(message: _9.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_9.AddressBytesToStringRequest>): _9.AddressBytesToStringRequest;
                fromAmino(object: _9.AddressBytesToStringRequestAmino): _9.AddressBytesToStringRequest;
                toAmino(message: _9.AddressBytesToStringRequest): _9.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _9.AddressBytesToStringRequestAminoMsg): _9.AddressBytesToStringRequest;
                toAminoMsg(message: _9.AddressBytesToStringRequest): _9.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _9.AddressBytesToStringRequestProtoMsg): _9.AddressBytesToStringRequest;
                toProto(message: _9.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _9.AddressBytesToStringRequest): _9.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                encode(message: _9.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AddressBytesToStringResponse;
                fromJSON(object: any): _9.AddressBytesToStringResponse;
                toJSON(message: _9.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_9.AddressBytesToStringResponse>): _9.AddressBytesToStringResponse;
                fromAmino(object: _9.AddressBytesToStringResponseAmino): _9.AddressBytesToStringResponse;
                toAmino(message: _9.AddressBytesToStringResponse): _9.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _9.AddressBytesToStringResponseAminoMsg): _9.AddressBytesToStringResponse;
                toAminoMsg(message: _9.AddressBytesToStringResponse): _9.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _9.AddressBytesToStringResponseProtoMsg): _9.AddressBytesToStringResponse;
                toProto(message: _9.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _9.AddressBytesToStringResponse): _9.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                encode(message: _9.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AddressStringToBytesRequest;
                fromJSON(object: any): _9.AddressStringToBytesRequest;
                toJSON(message: _9.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_9.AddressStringToBytesRequest>): _9.AddressStringToBytesRequest;
                fromAmino(object: _9.AddressStringToBytesRequestAmino): _9.AddressStringToBytesRequest;
                toAmino(message: _9.AddressStringToBytesRequest): _9.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _9.AddressStringToBytesRequestAminoMsg): _9.AddressStringToBytesRequest;
                toAminoMsg(message: _9.AddressStringToBytesRequest): _9.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _9.AddressStringToBytesRequestProtoMsg): _9.AddressStringToBytesRequest;
                toProto(message: _9.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _9.AddressStringToBytesRequest): _9.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                encode(message: _9.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AddressStringToBytesResponse;
                fromJSON(object: any): _9.AddressStringToBytesResponse;
                toJSON(message: _9.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_9.AddressStringToBytesResponse>): _9.AddressStringToBytesResponse;
                fromAmino(object: _9.AddressStringToBytesResponseAmino): _9.AddressStringToBytesResponse;
                toAmino(message: _9.AddressStringToBytesResponse): _9.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _9.AddressStringToBytesResponseAminoMsg): _9.AddressStringToBytesResponse;
                toAminoMsg(message: _9.AddressStringToBytesResponse): _9.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _9.AddressStringToBytesResponseProtoMsg): _9.AddressStringToBytesResponse;
                toProto(message: _9.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _9.AddressStringToBytesResponse): _9.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _9.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _9.QueryAccountAddressByIDRequest;
                toJSON(message: _9.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: Partial<_9.QueryAccountAddressByIDRequest>): _9.QueryAccountAddressByIDRequest;
                fromAmino(object: _9.QueryAccountAddressByIDRequestAmino): _9.QueryAccountAddressByIDRequest;
                toAmino(message: _9.QueryAccountAddressByIDRequest): _9.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _9.QueryAccountAddressByIDRequestAminoMsg): _9.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _9.QueryAccountAddressByIDRequest): _9.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _9.QueryAccountAddressByIDRequestProtoMsg): _9.QueryAccountAddressByIDRequest;
                toProto(message: _9.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAccountAddressByIDRequest): _9.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _9.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _9.QueryAccountAddressByIDResponse;
                toJSON(message: _9.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: Partial<_9.QueryAccountAddressByIDResponse>): _9.QueryAccountAddressByIDResponse;
                fromAmino(object: _9.QueryAccountAddressByIDResponseAmino): _9.QueryAccountAddressByIDResponse;
                toAmino(message: _9.QueryAccountAddressByIDResponse): _9.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _9.QueryAccountAddressByIDResponseAminoMsg): _9.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _9.QueryAccountAddressByIDResponse): _9.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _9.QueryAccountAddressByIDResponseProtoMsg): _9.QueryAccountAddressByIDResponse;
                toProto(message: _9.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAccountAddressByIDResponse): _9.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _7.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _7.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenesisState;
                fromJSON(object: any): _8.GenesisState;
                toJSON(message: _8.GenesisState): unknown;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                toAminoMsg(message: _8.GenesisState): _8.GenesisStateAminoMsg;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            BaseAccount: {
                encode(message: _7.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.BaseAccount;
                fromJSON(object: any): _7.BaseAccount;
                toJSON(message: _7.BaseAccount): unknown;
                fromPartial(object: Partial<_7.BaseAccount>): _7.BaseAccount;
                fromAmino(object: _7.BaseAccountAmino): _7.BaseAccount;
                toAmino(message: _7.BaseAccount): _7.BaseAccountAmino;
                fromAminoMsg(object: _7.BaseAccountAminoMsg): _7.BaseAccount;
                toAminoMsg(message: _7.BaseAccount): _7.BaseAccountAminoMsg;
                fromProtoMsg(message: _7.BaseAccountProtoMsg): _7.BaseAccount;
                toProto(message: _7.BaseAccount): Uint8Array;
                toProtoMsg(message: _7.BaseAccount): _7.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                encode(message: _7.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ModuleAccount;
                fromJSON(object: any): _7.ModuleAccount;
                toJSON(message: _7.ModuleAccount): unknown;
                fromPartial(object: Partial<_7.ModuleAccount>): _7.ModuleAccount;
                fromAmino(object: _7.ModuleAccountAmino): _7.ModuleAccount;
                toAmino(message: _7.ModuleAccount): _7.ModuleAccountAmino;
                fromAminoMsg(object: _7.ModuleAccountAminoMsg): _7.ModuleAccount;
                toAminoMsg(message: _7.ModuleAccount): _7.ModuleAccountAminoMsg;
                fromProtoMsg(message: _7.ModuleAccountProtoMsg): _7.ModuleAccount;
                toProto(message: _7.ModuleAccount): Uint8Array;
                toProtoMsg(message: _7.ModuleAccount): _7.ModuleAccountProtoMsg;
            };
            Params: {
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Params;
                fromJSON(object: any): _7.Params;
                toJSON(message: _7.Params): unknown;
                fromPartial(object: Partial<_7.Params>): _7.Params;
                fromAmino(object: _7.ParamsAmino): _7.Params;
                toAmino(message: _7.Params): _7.ParamsAmino;
                fromAminoMsg(object: _7.ParamsAminoMsg): _7.Params;
                toAminoMsg(message: _7.Params): _7.ParamsAminoMsg;
                fromProtoMsg(message: _7.ParamsProtoMsg): _7.Params;
                toProto(message: _7.Params): Uint8Array;
                toProtoMsg(message: _7.Params): _7.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _165.MsgClientImpl;
            QueryClientImpl: typeof _148.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _13.QueryGrantsRequest): Promise<_13.QueryGrantsResponse>;
                granterGrants(request: _13.QueryGranterGrantsRequest): Promise<_13.QueryGranterGrantsResponse>;
                granteeGrants(request: _13.QueryGranteeGrantsRequest): Promise<_13.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _14.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _14.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _14.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _14.MsgGrant): {
                        typeUrl: string;
                        value: _14.MsgGrant;
                    };
                    exec(value: _14.MsgExec): {
                        typeUrl: string;
                        value: _14.MsgExec;
                    };
                    revoke(value: _14.MsgRevoke): {
                        typeUrl: string;
                        value: _14.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _14.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _14.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _14.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _14.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _14.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _14.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _14.MsgGrant): {
                        typeUrl: string;
                        value: _14.MsgGrant;
                    };
                    exec(value: _14.MsgExec): {
                        typeUrl: string;
                        value: _14.MsgExec;
                    };
                    revoke(value: _14.MsgRevoke): {
                        typeUrl: string;
                        value: _14.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _14.MsgGrant) => _14.MsgGrantAmino;
                    fromAmino: (object: _14.MsgGrantAmino) => _14.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _14.MsgExec) => _14.MsgExecAmino;
                    fromAmino: (object: _14.MsgExecAmino) => _14.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _14.MsgRevoke) => _14.MsgRevokeAmino;
                    fromAmino: (object: _14.MsgRevokeAmino) => _14.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _14.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgGrant;
                fromJSON(object: any): _14.MsgGrant;
                toJSON(message: _14.MsgGrant): unknown;
                fromPartial(object: Partial<_14.MsgGrant>): _14.MsgGrant;
                fromAmino(object: _14.MsgGrantAmino): _14.MsgGrant;
                toAmino(message: _14.MsgGrant): _14.MsgGrantAmino;
                fromAminoMsg(object: _14.MsgGrantAminoMsg): _14.MsgGrant;
                toAminoMsg(message: _14.MsgGrant): _14.MsgGrantAminoMsg;
                fromProtoMsg(message: _14.MsgGrantProtoMsg): _14.MsgGrant;
                toProto(message: _14.MsgGrant): Uint8Array;
                toProtoMsg(message: _14.MsgGrant): _14.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                encode(message: _14.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgExecResponse;
                fromJSON(object: any): _14.MsgExecResponse;
                toJSON(message: _14.MsgExecResponse): unknown;
                fromPartial(object: Partial<_14.MsgExecResponse>): _14.MsgExecResponse;
                fromAmino(object: _14.MsgExecResponseAmino): _14.MsgExecResponse;
                toAmino(message: _14.MsgExecResponse): _14.MsgExecResponseAmino;
                fromAminoMsg(object: _14.MsgExecResponseAminoMsg): _14.MsgExecResponse;
                toAminoMsg(message: _14.MsgExecResponse): _14.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _14.MsgExecResponseProtoMsg): _14.MsgExecResponse;
                toProto(message: _14.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _14.MsgExecResponse): _14.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _14.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgExec;
                fromJSON(object: any): _14.MsgExec;
                toJSON(message: _14.MsgExec): unknown;
                fromPartial(object: Partial<_14.MsgExec>): _14.MsgExec;
                fromAmino(object: _14.MsgExecAmino): _14.MsgExec;
                toAmino(message: _14.MsgExec): _14.MsgExecAmino;
                fromAminoMsg(object: _14.MsgExecAminoMsg): _14.MsgExec;
                toAminoMsg(message: _14.MsgExec): _14.MsgExecAminoMsg;
                fromProtoMsg(message: _14.MsgExecProtoMsg): _14.MsgExec;
                toProto(message: _14.MsgExec): Uint8Array;
                toProtoMsg(message: _14.MsgExec): _14.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                encode(_: _14.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgGrantResponse;
                fromJSON(_: any): _14.MsgGrantResponse;
                toJSON(_: _14.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_14.MsgGrantResponse>): _14.MsgGrantResponse;
                fromAmino(_: _14.MsgGrantResponseAmino): _14.MsgGrantResponse;
                toAmino(_: _14.MsgGrantResponse): _14.MsgGrantResponseAmino;
                fromAminoMsg(object: _14.MsgGrantResponseAminoMsg): _14.MsgGrantResponse;
                toAminoMsg(message: _14.MsgGrantResponse): _14.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _14.MsgGrantResponseProtoMsg): _14.MsgGrantResponse;
                toProto(message: _14.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _14.MsgGrantResponse): _14.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                encode(message: _14.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgRevoke;
                fromJSON(object: any): _14.MsgRevoke;
                toJSON(message: _14.MsgRevoke): unknown;
                fromPartial(object: Partial<_14.MsgRevoke>): _14.MsgRevoke;
                fromAmino(object: _14.MsgRevokeAmino): _14.MsgRevoke;
                toAmino(message: _14.MsgRevoke): _14.MsgRevokeAmino;
                fromAminoMsg(object: _14.MsgRevokeAminoMsg): _14.MsgRevoke;
                toAminoMsg(message: _14.MsgRevoke): _14.MsgRevokeAminoMsg;
                fromProtoMsg(message: _14.MsgRevokeProtoMsg): _14.MsgRevoke;
                toProto(message: _14.MsgRevoke): Uint8Array;
                toProtoMsg(message: _14.MsgRevoke): _14.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                encode(_: _14.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgRevokeResponse;
                fromJSON(_: any): _14.MsgRevokeResponse;
                toJSON(_: _14.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_14.MsgRevokeResponse>): _14.MsgRevokeResponse;
                fromAmino(_: _14.MsgRevokeResponseAmino): _14.MsgRevokeResponse;
                toAmino(_: _14.MsgRevokeResponse): _14.MsgRevokeResponseAmino;
                fromAminoMsg(object: _14.MsgRevokeResponseAminoMsg): _14.MsgRevokeResponse;
                toAminoMsg(message: _14.MsgRevokeResponse): _14.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _14.MsgRevokeResponseProtoMsg): _14.MsgRevokeResponse;
                toProto(message: _14.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _14.MsgRevokeResponse): _14.MsgRevokeResponseProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _15.SendAuthorization | _86.StakeAuthorization | _10.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                encode(message: _13.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryGrantsRequest;
                fromJSON(object: any): _13.QueryGrantsRequest;
                toJSON(message: _13.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_13.QueryGrantsRequest>): _13.QueryGrantsRequest;
                fromAmino(object: _13.QueryGrantsRequestAmino): _13.QueryGrantsRequest;
                toAmino(message: _13.QueryGrantsRequest): _13.QueryGrantsRequestAmino;
                fromAminoMsg(object: _13.QueryGrantsRequestAminoMsg): _13.QueryGrantsRequest;
                toAminoMsg(message: _13.QueryGrantsRequest): _13.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryGrantsRequestProtoMsg): _13.QueryGrantsRequest;
                toProto(message: _13.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryGrantsRequest): _13.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                encode(message: _13.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryGrantsResponse;
                fromJSON(object: any): _13.QueryGrantsResponse;
                toJSON(message: _13.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_13.QueryGrantsResponse>): _13.QueryGrantsResponse;
                fromAmino(object: _13.QueryGrantsResponseAmino): _13.QueryGrantsResponse;
                toAmino(message: _13.QueryGrantsResponse): _13.QueryGrantsResponseAmino;
                fromAminoMsg(object: _13.QueryGrantsResponseAminoMsg): _13.QueryGrantsResponse;
                toAminoMsg(message: _13.QueryGrantsResponse): _13.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryGrantsResponseProtoMsg): _13.QueryGrantsResponse;
                toProto(message: _13.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryGrantsResponse): _13.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                encode(message: _13.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryGranterGrantsRequest;
                fromJSON(object: any): _13.QueryGranterGrantsRequest;
                toJSON(message: _13.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_13.QueryGranterGrantsRequest>): _13.QueryGranterGrantsRequest;
                fromAmino(object: _13.QueryGranterGrantsRequestAmino): _13.QueryGranterGrantsRequest;
                toAmino(message: _13.QueryGranterGrantsRequest): _13.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _13.QueryGranterGrantsRequestAminoMsg): _13.QueryGranterGrantsRequest;
                toAminoMsg(message: _13.QueryGranterGrantsRequest): _13.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryGranterGrantsRequestProtoMsg): _13.QueryGranterGrantsRequest;
                toProto(message: _13.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryGranterGrantsRequest): _13.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                encode(message: _13.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryGranterGrantsResponse;
                fromJSON(object: any): _13.QueryGranterGrantsResponse;
                toJSON(message: _13.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_13.QueryGranterGrantsResponse>): _13.QueryGranterGrantsResponse;
                fromAmino(object: _13.QueryGranterGrantsResponseAmino): _13.QueryGranterGrantsResponse;
                toAmino(message: _13.QueryGranterGrantsResponse): _13.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _13.QueryGranterGrantsResponseAminoMsg): _13.QueryGranterGrantsResponse;
                toAminoMsg(message: _13.QueryGranterGrantsResponse): _13.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryGranterGrantsResponseProtoMsg): _13.QueryGranterGrantsResponse;
                toProto(message: _13.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryGranterGrantsResponse): _13.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _13.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryGranteeGrantsRequest;
                fromJSON(object: any): _13.QueryGranteeGrantsRequest;
                toJSON(message: _13.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_13.QueryGranteeGrantsRequest>): _13.QueryGranteeGrantsRequest;
                fromAmino(object: _13.QueryGranteeGrantsRequestAmino): _13.QueryGranteeGrantsRequest;
                toAmino(message: _13.QueryGranteeGrantsRequest): _13.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _13.QueryGranteeGrantsRequestAminoMsg): _13.QueryGranteeGrantsRequest;
                toAminoMsg(message: _13.QueryGranteeGrantsRequest): _13.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryGranteeGrantsRequestProtoMsg): _13.QueryGranteeGrantsRequest;
                toProto(message: _13.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryGranteeGrantsRequest): _13.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _13.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryGranteeGrantsResponse;
                fromJSON(object: any): _13.QueryGranteeGrantsResponse;
                toJSON(message: _13.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_13.QueryGranteeGrantsResponse>): _13.QueryGranteeGrantsResponse;
                fromAmino(object: _13.QueryGranteeGrantsResponseAmino): _13.QueryGranteeGrantsResponse;
                toAmino(message: _13.QueryGranteeGrantsResponse): _13.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _13.QueryGranteeGrantsResponseAminoMsg): _13.QueryGranteeGrantsResponse;
                toAminoMsg(message: _13.QueryGranteeGrantsResponse): _13.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryGranteeGrantsResponseProtoMsg): _13.QueryGranteeGrantsResponse;
                toProto(message: _13.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryGranteeGrantsResponse): _13.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GenesisState;
                fromJSON(object: any): _12.GenesisState;
                toJSON(message: _12.GenesisState): unknown;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
                fromAmino(object: _12.GenesisStateAmino): _12.GenesisState;
                toAmino(message: _12.GenesisState): _12.GenesisStateAmino;
                fromAminoMsg(object: _12.GenesisStateAminoMsg): _12.GenesisState;
                toAminoMsg(message: _12.GenesisState): _12.GenesisStateAminoMsg;
                fromProtoMsg(message: _12.GenesisStateProtoMsg): _12.GenesisState;
                toProto(message: _12.GenesisState): Uint8Array;
                toProtoMsg(message: _12.GenesisState): _12.GenesisStateProtoMsg;
            };
            EventGrant: {
                encode(message: _11.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.EventGrant;
                fromJSON(object: any): _11.EventGrant;
                toJSON(message: _11.EventGrant): unknown;
                fromPartial(object: Partial<_11.EventGrant>): _11.EventGrant;
                fromAmino(object: _11.EventGrantAmino): _11.EventGrant;
                toAmino(message: _11.EventGrant): _11.EventGrantAmino;
                fromAminoMsg(object: _11.EventGrantAminoMsg): _11.EventGrant;
                toAminoMsg(message: _11.EventGrant): _11.EventGrantAminoMsg;
                fromProtoMsg(message: _11.EventGrantProtoMsg): _11.EventGrant;
                toProto(message: _11.EventGrant): Uint8Array;
                toProtoMsg(message: _11.EventGrant): _11.EventGrantProtoMsg;
            };
            EventRevoke: {
                encode(message: _11.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.EventRevoke;
                fromJSON(object: any): _11.EventRevoke;
                toJSON(message: _11.EventRevoke): unknown;
                fromPartial(object: Partial<_11.EventRevoke>): _11.EventRevoke;
                fromAmino(object: _11.EventRevokeAmino): _11.EventRevoke;
                toAmino(message: _11.EventRevoke): _11.EventRevokeAmino;
                fromAminoMsg(object: _11.EventRevokeAminoMsg): _11.EventRevoke;
                toAminoMsg(message: _11.EventRevoke): _11.EventRevokeAminoMsg;
                fromProtoMsg(message: _11.EventRevokeProtoMsg): _11.EventRevoke;
                toProto(message: _11.EventRevoke): Uint8Array;
                toProtoMsg(message: _11.EventRevoke): _11.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                encode(message: _10.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenericAuthorization;
                fromJSON(object: any): _10.GenericAuthorization;
                toJSON(message: _10.GenericAuthorization): unknown;
                fromPartial(object: Partial<_10.GenericAuthorization>): _10.GenericAuthorization;
                fromAmino(object: _10.GenericAuthorizationAmino): _10.GenericAuthorization;
                toAmino(message: _10.GenericAuthorization): _10.GenericAuthorizationAmino;
                fromAminoMsg(object: _10.GenericAuthorizationAminoMsg): _10.GenericAuthorization;
                toAminoMsg(message: _10.GenericAuthorization): _10.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _10.GenericAuthorizationProtoMsg): _10.GenericAuthorization;
                toProto(message: _10.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _10.GenericAuthorization): _10.GenericAuthorizationProtoMsg;
            };
            Grant: {
                encode(message: _10.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Grant;
                fromJSON(object: any): _10.Grant;
                toJSON(message: _10.Grant): unknown;
                fromPartial(object: Partial<_10.Grant>): _10.Grant;
                fromAmino(object: _10.GrantAmino): _10.Grant;
                toAmino(message: _10.Grant): _10.GrantAmino;
                fromAminoMsg(object: _10.GrantAminoMsg): _10.Grant;
                toAminoMsg(message: _10.Grant): _10.GrantAminoMsg;
                fromProtoMsg(message: _10.GrantProtoMsg): _10.Grant;
                toProto(message: _10.Grant): Uint8Array;
                toProtoMsg(message: _10.Grant): _10.GrantProtoMsg;
            };
            GrantAuthorization: {
                encode(message: _10.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GrantAuthorization;
                fromJSON(object: any): _10.GrantAuthorization;
                toJSON(message: _10.GrantAuthorization): unknown;
                fromPartial(object: Partial<_10.GrantAuthorization>): _10.GrantAuthorization;
                fromAmino(object: _10.GrantAuthorizationAmino): _10.GrantAuthorization;
                toAmino(message: _10.GrantAuthorization): _10.GrantAuthorizationAmino;
                fromAminoMsg(object: _10.GrantAuthorizationAminoMsg): _10.GrantAuthorization;
                toAminoMsg(message: _10.GrantAuthorization): _10.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _10.GrantAuthorizationProtoMsg): _10.GrantAuthorization;
                toProto(message: _10.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _10.GrantAuthorization): _10.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                encode(message: _10.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GrantQueueItem;
                fromJSON(object: any): _10.GrantQueueItem;
                toJSON(message: _10.GrantQueueItem): unknown;
                fromPartial(object: Partial<_10.GrantQueueItem>): _10.GrantQueueItem;
                fromAmino(object: _10.GrantQueueItemAmino): _10.GrantQueueItem;
                toAmino(message: _10.GrantQueueItem): _10.GrantQueueItemAmino;
                fromAminoMsg(object: _10.GrantQueueItemAminoMsg): _10.GrantQueueItem;
                toAminoMsg(message: _10.GrantQueueItem): _10.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _10.GrantQueueItemProtoMsg): _10.GrantQueueItem;
                toProto(message: _10.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _10.GrantQueueItem): _10.GrantQueueItemProtoMsg;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _166.MsgClientImpl;
            QueryClientImpl: typeof _149.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _18.QueryBalanceRequest): Promise<_18.QueryBalanceResponse>;
                allBalances(request: _18.QueryAllBalancesRequest): Promise<_18.QueryAllBalancesResponse>;
                spendableBalances(request: _18.QuerySpendableBalancesRequest): Promise<_18.QuerySpendableBalancesResponse>;
                totalSupply(request?: _18.QueryTotalSupplyRequest): Promise<_18.QueryTotalSupplyResponse>;
                supplyOf(request: _18.QuerySupplyOfRequest): Promise<_18.QuerySupplyOfResponse>;
                params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                denomMetadata(request: _18.QueryDenomMetadataRequest): Promise<_18.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _18.QueryDenomsMetadataRequest): Promise<_18.QueryDenomsMetadataResponse>;
                denomOwners(request: _18.QueryDenomOwnersRequest): Promise<_18.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _19.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _19.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _19.MsgSend): {
                        typeUrl: string;
                        value: _19.MsgSend;
                    };
                    multiSend(value: _19.MsgMultiSend): {
                        typeUrl: string;
                        value: _19.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _19.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _19.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _19.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _19.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _19.MsgSend): {
                        typeUrl: string;
                        value: _19.MsgSend;
                    };
                    multiSend(value: _19.MsgMultiSend): {
                        typeUrl: string;
                        value: _19.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _19.MsgSend) => _19.MsgSendAmino;
                    fromAmino: (object: _19.MsgSendAmino) => _19.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _19.MsgMultiSend) => _19.MsgMultiSendAmino;
                    fromAmino: (object: _19.MsgMultiSendAmino) => _19.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _19.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgSend;
                fromJSON(object: any): _19.MsgSend;
                toJSON(message: _19.MsgSend): unknown;
                fromPartial(object: Partial<_19.MsgSend>): _19.MsgSend;
                fromAmino(object: _19.MsgSendAmino): _19.MsgSend;
                toAmino(message: _19.MsgSend): _19.MsgSendAmino;
                fromAminoMsg(object: _19.MsgSendAminoMsg): _19.MsgSend;
                toAminoMsg(message: _19.MsgSend): _19.MsgSendAminoMsg;
                fromProtoMsg(message: _19.MsgSendProtoMsg): _19.MsgSend;
                toProto(message: _19.MsgSend): Uint8Array;
                toProtoMsg(message: _19.MsgSend): _19.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _19.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgSendResponse;
                fromJSON(_: any): _19.MsgSendResponse;
                toJSON(_: _19.MsgSendResponse): unknown;
                fromPartial(_: Partial<_19.MsgSendResponse>): _19.MsgSendResponse;
                fromAmino(_: _19.MsgSendResponseAmino): _19.MsgSendResponse;
                toAmino(_: _19.MsgSendResponse): _19.MsgSendResponseAmino;
                fromAminoMsg(object: _19.MsgSendResponseAminoMsg): _19.MsgSendResponse;
                toAminoMsg(message: _19.MsgSendResponse): _19.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _19.MsgSendResponseProtoMsg): _19.MsgSendResponse;
                toProto(message: _19.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _19.MsgSendResponse): _19.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                encode(message: _19.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgMultiSend;
                fromJSON(object: any): _19.MsgMultiSend;
                toJSON(message: _19.MsgMultiSend): unknown;
                fromPartial(object: Partial<_19.MsgMultiSend>): _19.MsgMultiSend;
                fromAmino(object: _19.MsgMultiSendAmino): _19.MsgMultiSend;
                toAmino(message: _19.MsgMultiSend): _19.MsgMultiSendAmino;
                fromAminoMsg(object: _19.MsgMultiSendAminoMsg): _19.MsgMultiSend;
                toAminoMsg(message: _19.MsgMultiSend): _19.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _19.MsgMultiSendProtoMsg): _19.MsgMultiSend;
                toProto(message: _19.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _19.MsgMultiSend): _19.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                encode(_: _19.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgMultiSendResponse;
                fromJSON(_: any): _19.MsgMultiSendResponse;
                toJSON(_: _19.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_19.MsgMultiSendResponse>): _19.MsgMultiSendResponse;
                fromAmino(_: _19.MsgMultiSendResponseAmino): _19.MsgMultiSendResponse;
                toAmino(_: _19.MsgMultiSendResponse): _19.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _19.MsgMultiSendResponseAminoMsg): _19.MsgMultiSendResponse;
                toAminoMsg(message: _19.MsgMultiSendResponse): _19.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _19.MsgMultiSendResponseProtoMsg): _19.MsgMultiSendResponse;
                toProto(message: _19.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _19.MsgMultiSendResponse): _19.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _18.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryBalanceRequest;
                fromJSON(object: any): _18.QueryBalanceRequest;
                toJSON(message: _18.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_18.QueryBalanceRequest>): _18.QueryBalanceRequest;
                fromAmino(object: _18.QueryBalanceRequestAmino): _18.QueryBalanceRequest;
                toAmino(message: _18.QueryBalanceRequest): _18.QueryBalanceRequestAmino;
                fromAminoMsg(object: _18.QueryBalanceRequestAminoMsg): _18.QueryBalanceRequest;
                toAminoMsg(message: _18.QueryBalanceRequest): _18.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _18.QueryBalanceRequestProtoMsg): _18.QueryBalanceRequest;
                toProto(message: _18.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _18.QueryBalanceRequest): _18.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _18.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryBalanceResponse;
                fromJSON(object: any): _18.QueryBalanceResponse;
                toJSON(message: _18.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_18.QueryBalanceResponse>): _18.QueryBalanceResponse;
                fromAmino(object: _18.QueryBalanceResponseAmino): _18.QueryBalanceResponse;
                toAmino(message: _18.QueryBalanceResponse): _18.QueryBalanceResponseAmino;
                fromAminoMsg(object: _18.QueryBalanceResponseAminoMsg): _18.QueryBalanceResponse;
                toAminoMsg(message: _18.QueryBalanceResponse): _18.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _18.QueryBalanceResponseProtoMsg): _18.QueryBalanceResponse;
                toProto(message: _18.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _18.QueryBalanceResponse): _18.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                encode(message: _18.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAllBalancesRequest;
                fromJSON(object: any): _18.QueryAllBalancesRequest;
                toJSON(message: _18.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_18.QueryAllBalancesRequest>): _18.QueryAllBalancesRequest;
                fromAmino(object: _18.QueryAllBalancesRequestAmino): _18.QueryAllBalancesRequest;
                toAmino(message: _18.QueryAllBalancesRequest): _18.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _18.QueryAllBalancesRequestAminoMsg): _18.QueryAllBalancesRequest;
                toAminoMsg(message: _18.QueryAllBalancesRequest): _18.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _18.QueryAllBalancesRequestProtoMsg): _18.QueryAllBalancesRequest;
                toProto(message: _18.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _18.QueryAllBalancesRequest): _18.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                encode(message: _18.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAllBalancesResponse;
                fromJSON(object: any): _18.QueryAllBalancesResponse;
                toJSON(message: _18.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_18.QueryAllBalancesResponse>): _18.QueryAllBalancesResponse;
                fromAmino(object: _18.QueryAllBalancesResponseAmino): _18.QueryAllBalancesResponse;
                toAmino(message: _18.QueryAllBalancesResponse): _18.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _18.QueryAllBalancesResponseAminoMsg): _18.QueryAllBalancesResponse;
                toAminoMsg(message: _18.QueryAllBalancesResponse): _18.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _18.QueryAllBalancesResponseProtoMsg): _18.QueryAllBalancesResponse;
                toProto(message: _18.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _18.QueryAllBalancesResponse): _18.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _18.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QuerySpendableBalancesRequest;
                fromJSON(object: any): _18.QuerySpendableBalancesRequest;
                toJSON(message: _18.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_18.QuerySpendableBalancesRequest>): _18.QuerySpendableBalancesRequest;
                fromAmino(object: _18.QuerySpendableBalancesRequestAmino): _18.QuerySpendableBalancesRequest;
                toAmino(message: _18.QuerySpendableBalancesRequest): _18.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _18.QuerySpendableBalancesRequestAminoMsg): _18.QuerySpendableBalancesRequest;
                toAminoMsg(message: _18.QuerySpendableBalancesRequest): _18.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _18.QuerySpendableBalancesRequestProtoMsg): _18.QuerySpendableBalancesRequest;
                toProto(message: _18.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _18.QuerySpendableBalancesRequest): _18.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _18.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QuerySpendableBalancesResponse;
                fromJSON(object: any): _18.QuerySpendableBalancesResponse;
                toJSON(message: _18.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_18.QuerySpendableBalancesResponse>): _18.QuerySpendableBalancesResponse;
                fromAmino(object: _18.QuerySpendableBalancesResponseAmino): _18.QuerySpendableBalancesResponse;
                toAmino(message: _18.QuerySpendableBalancesResponse): _18.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _18.QuerySpendableBalancesResponseAminoMsg): _18.QuerySpendableBalancesResponse;
                toAminoMsg(message: _18.QuerySpendableBalancesResponse): _18.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _18.QuerySpendableBalancesResponseProtoMsg): _18.QuerySpendableBalancesResponse;
                toProto(message: _18.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _18.QuerySpendableBalancesResponse): _18.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                encode(message: _18.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryTotalSupplyRequest;
                fromJSON(object: any): _18.QueryTotalSupplyRequest;
                toJSON(message: _18.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_18.QueryTotalSupplyRequest>): _18.QueryTotalSupplyRequest;
                fromAmino(object: _18.QueryTotalSupplyRequestAmino): _18.QueryTotalSupplyRequest;
                toAmino(message: _18.QueryTotalSupplyRequest): _18.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _18.QueryTotalSupplyRequestAminoMsg): _18.QueryTotalSupplyRequest;
                toAminoMsg(message: _18.QueryTotalSupplyRequest): _18.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _18.QueryTotalSupplyRequestProtoMsg): _18.QueryTotalSupplyRequest;
                toProto(message: _18.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _18.QueryTotalSupplyRequest): _18.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                encode(message: _18.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryTotalSupplyResponse;
                fromJSON(object: any): _18.QueryTotalSupplyResponse;
                toJSON(message: _18.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_18.QueryTotalSupplyResponse>): _18.QueryTotalSupplyResponse;
                fromAmino(object: _18.QueryTotalSupplyResponseAmino): _18.QueryTotalSupplyResponse;
                toAmino(message: _18.QueryTotalSupplyResponse): _18.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _18.QueryTotalSupplyResponseAminoMsg): _18.QueryTotalSupplyResponse;
                toAminoMsg(message: _18.QueryTotalSupplyResponse): _18.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _18.QueryTotalSupplyResponseProtoMsg): _18.QueryTotalSupplyResponse;
                toProto(message: _18.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _18.QueryTotalSupplyResponse): _18.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                encode(message: _18.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QuerySupplyOfRequest;
                fromJSON(object: any): _18.QuerySupplyOfRequest;
                toJSON(message: _18.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_18.QuerySupplyOfRequest>): _18.QuerySupplyOfRequest;
                fromAmino(object: _18.QuerySupplyOfRequestAmino): _18.QuerySupplyOfRequest;
                toAmino(message: _18.QuerySupplyOfRequest): _18.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _18.QuerySupplyOfRequestAminoMsg): _18.QuerySupplyOfRequest;
                toAminoMsg(message: _18.QuerySupplyOfRequest): _18.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _18.QuerySupplyOfRequestProtoMsg): _18.QuerySupplyOfRequest;
                toProto(message: _18.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _18.QuerySupplyOfRequest): _18.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                encode(message: _18.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QuerySupplyOfResponse;
                fromJSON(object: any): _18.QuerySupplyOfResponse;
                toJSON(message: _18.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_18.QuerySupplyOfResponse>): _18.QuerySupplyOfResponse;
                fromAmino(object: _18.QuerySupplyOfResponseAmino): _18.QuerySupplyOfResponse;
                toAmino(message: _18.QuerySupplyOfResponse): _18.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _18.QuerySupplyOfResponseAminoMsg): _18.QuerySupplyOfResponse;
                toAminoMsg(message: _18.QuerySupplyOfResponse): _18.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _18.QuerySupplyOfResponseProtoMsg): _18.QuerySupplyOfResponse;
                toProto(message: _18.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _18.QuerySupplyOfResponse): _18.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _18.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryParamsRequest;
                fromJSON(_: any): _18.QueryParamsRequest;
                toJSON(_: _18.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_18.QueryParamsRequest>): _18.QueryParamsRequest;
                fromAmino(_: _18.QueryParamsRequestAmino): _18.QueryParamsRequest;
                toAmino(_: _18.QueryParamsRequest): _18.QueryParamsRequestAmino;
                fromAminoMsg(object: _18.QueryParamsRequestAminoMsg): _18.QueryParamsRequest;
                toAminoMsg(message: _18.QueryParamsRequest): _18.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _18.QueryParamsRequestProtoMsg): _18.QueryParamsRequest;
                toProto(message: _18.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _18.QueryParamsRequest): _18.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _18.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryParamsResponse;
                fromJSON(object: any): _18.QueryParamsResponse;
                toJSON(message: _18.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_18.QueryParamsResponse>): _18.QueryParamsResponse;
                fromAmino(object: _18.QueryParamsResponseAmino): _18.QueryParamsResponse;
                toAmino(message: _18.QueryParamsResponse): _18.QueryParamsResponseAmino;
                fromAminoMsg(object: _18.QueryParamsResponseAminoMsg): _18.QueryParamsResponse;
                toAminoMsg(message: _18.QueryParamsResponse): _18.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _18.QueryParamsResponseProtoMsg): _18.QueryParamsResponse;
                toProto(message: _18.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _18.QueryParamsResponse): _18.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _18.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDenomsMetadataRequest;
                fromJSON(object: any): _18.QueryDenomsMetadataRequest;
                toJSON(message: _18.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_18.QueryDenomsMetadataRequest>): _18.QueryDenomsMetadataRequest;
                fromAmino(object: _18.QueryDenomsMetadataRequestAmino): _18.QueryDenomsMetadataRequest;
                toAmino(message: _18.QueryDenomsMetadataRequest): _18.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _18.QueryDenomsMetadataRequestAminoMsg): _18.QueryDenomsMetadataRequest;
                toAminoMsg(message: _18.QueryDenomsMetadataRequest): _18.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _18.QueryDenomsMetadataRequestProtoMsg): _18.QueryDenomsMetadataRequest;
                toProto(message: _18.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _18.QueryDenomsMetadataRequest): _18.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _18.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDenomsMetadataResponse;
                fromJSON(object: any): _18.QueryDenomsMetadataResponse;
                toJSON(message: _18.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_18.QueryDenomsMetadataResponse>): _18.QueryDenomsMetadataResponse;
                fromAmino(object: _18.QueryDenomsMetadataResponseAmino): _18.QueryDenomsMetadataResponse;
                toAmino(message: _18.QueryDenomsMetadataResponse): _18.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _18.QueryDenomsMetadataResponseAminoMsg): _18.QueryDenomsMetadataResponse;
                toAminoMsg(message: _18.QueryDenomsMetadataResponse): _18.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _18.QueryDenomsMetadataResponseProtoMsg): _18.QueryDenomsMetadataResponse;
                toProto(message: _18.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _18.QueryDenomsMetadataResponse): _18.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                encode(message: _18.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDenomMetadataRequest;
                fromJSON(object: any): _18.QueryDenomMetadataRequest;
                toJSON(message: _18.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_18.QueryDenomMetadataRequest>): _18.QueryDenomMetadataRequest;
                fromAmino(object: _18.QueryDenomMetadataRequestAmino): _18.QueryDenomMetadataRequest;
                toAmino(message: _18.QueryDenomMetadataRequest): _18.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _18.QueryDenomMetadataRequestAminoMsg): _18.QueryDenomMetadataRequest;
                toAminoMsg(message: _18.QueryDenomMetadataRequest): _18.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _18.QueryDenomMetadataRequestProtoMsg): _18.QueryDenomMetadataRequest;
                toProto(message: _18.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _18.QueryDenomMetadataRequest): _18.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                encode(message: _18.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDenomMetadataResponse;
                fromJSON(object: any): _18.QueryDenomMetadataResponse;
                toJSON(message: _18.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_18.QueryDenomMetadataResponse>): _18.QueryDenomMetadataResponse;
                fromAmino(object: _18.QueryDenomMetadataResponseAmino): _18.QueryDenomMetadataResponse;
                toAmino(message: _18.QueryDenomMetadataResponse): _18.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _18.QueryDenomMetadataResponseAminoMsg): _18.QueryDenomMetadataResponse;
                toAminoMsg(message: _18.QueryDenomMetadataResponse): _18.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _18.QueryDenomMetadataResponseProtoMsg): _18.QueryDenomMetadataResponse;
                toProto(message: _18.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _18.QueryDenomMetadataResponse): _18.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                encode(message: _18.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDenomOwnersRequest;
                fromJSON(object: any): _18.QueryDenomOwnersRequest;
                toJSON(message: _18.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_18.QueryDenomOwnersRequest>): _18.QueryDenomOwnersRequest;
                fromAmino(object: _18.QueryDenomOwnersRequestAmino): _18.QueryDenomOwnersRequest;
                toAmino(message: _18.QueryDenomOwnersRequest): _18.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _18.QueryDenomOwnersRequestAminoMsg): _18.QueryDenomOwnersRequest;
                toAminoMsg(message: _18.QueryDenomOwnersRequest): _18.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _18.QueryDenomOwnersRequestProtoMsg): _18.QueryDenomOwnersRequest;
                toProto(message: _18.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _18.QueryDenomOwnersRequest): _18.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                encode(message: _18.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DenomOwner;
                fromJSON(object: any): _18.DenomOwner;
                toJSON(message: _18.DenomOwner): unknown;
                fromPartial(object: Partial<_18.DenomOwner>): _18.DenomOwner;
                fromAmino(object: _18.DenomOwnerAmino): _18.DenomOwner;
                toAmino(message: _18.DenomOwner): _18.DenomOwnerAmino;
                fromAminoMsg(object: _18.DenomOwnerAminoMsg): _18.DenomOwner;
                toAminoMsg(message: _18.DenomOwner): _18.DenomOwnerAminoMsg;
                fromProtoMsg(message: _18.DenomOwnerProtoMsg): _18.DenomOwner;
                toProto(message: _18.DenomOwner): Uint8Array;
                toProtoMsg(message: _18.DenomOwner): _18.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                encode(message: _18.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDenomOwnersResponse;
                fromJSON(object: any): _18.QueryDenomOwnersResponse;
                toJSON(message: _18.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_18.QueryDenomOwnersResponse>): _18.QueryDenomOwnersResponse;
                fromAmino(object: _18.QueryDenomOwnersResponseAmino): _18.QueryDenomOwnersResponse;
                toAmino(message: _18.QueryDenomOwnersResponse): _18.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _18.QueryDenomOwnersResponseAminoMsg): _18.QueryDenomOwnersResponse;
                toAminoMsg(message: _18.QueryDenomOwnersResponse): _18.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _18.QueryDenomOwnersResponseProtoMsg): _18.QueryDenomOwnersResponse;
                toProto(message: _18.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _18.QueryDenomOwnersResponse): _18.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _17.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GenesisState;
                fromJSON(object: any): _17.GenesisState;
                toJSON(message: _17.GenesisState): unknown;
                fromPartial(object: Partial<_17.GenesisState>): _17.GenesisState;
                fromAmino(object: _17.GenesisStateAmino): _17.GenesisState;
                toAmino(message: _17.GenesisState): _17.GenesisStateAmino;
                fromAminoMsg(object: _17.GenesisStateAminoMsg): _17.GenesisState;
                toAminoMsg(message: _17.GenesisState): _17.GenesisStateAminoMsg;
                fromProtoMsg(message: _17.GenesisStateProtoMsg): _17.GenesisState;
                toProto(message: _17.GenesisState): Uint8Array;
                toProtoMsg(message: _17.GenesisState): _17.GenesisStateProtoMsg;
            };
            Balance: {
                encode(message: _17.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Balance;
                fromJSON(object: any): _17.Balance;
                toJSON(message: _17.Balance): unknown;
                fromPartial(object: Partial<_17.Balance>): _17.Balance;
                fromAmino(object: _17.BalanceAmino): _17.Balance;
                toAmino(message: _17.Balance): _17.BalanceAmino;
                fromAminoMsg(object: _17.BalanceAminoMsg): _17.Balance;
                toAminoMsg(message: _17.Balance): _17.BalanceAminoMsg;
                fromProtoMsg(message: _17.BalanceProtoMsg): _17.Balance;
                toProto(message: _17.Balance): Uint8Array;
                toProtoMsg(message: _17.Balance): _17.BalanceProtoMsg;
            };
            Params: {
                encode(message: _16.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Params;
                fromJSON(object: any): _16.Params;
                toJSON(message: _16.Params): unknown;
                fromPartial(object: Partial<_16.Params>): _16.Params;
                fromAmino(object: _16.ParamsAmino): _16.Params;
                toAmino(message: _16.Params): _16.ParamsAmino;
                fromAminoMsg(object: _16.ParamsAminoMsg): _16.Params;
                toAminoMsg(message: _16.Params): _16.ParamsAminoMsg;
                fromProtoMsg(message: _16.ParamsProtoMsg): _16.Params;
                toProto(message: _16.Params): Uint8Array;
                toProtoMsg(message: _16.Params): _16.ParamsProtoMsg;
            };
            SendEnabled: {
                encode(message: _16.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.SendEnabled;
                fromJSON(object: any): _16.SendEnabled;
                toJSON(message: _16.SendEnabled): unknown;
                fromPartial(object: Partial<_16.SendEnabled>): _16.SendEnabled;
                fromAmino(object: _16.SendEnabledAmino): _16.SendEnabled;
                toAmino(message: _16.SendEnabled): _16.SendEnabledAmino;
                fromAminoMsg(object: _16.SendEnabledAminoMsg): _16.SendEnabled;
                toAminoMsg(message: _16.SendEnabled): _16.SendEnabledAminoMsg;
                fromProtoMsg(message: _16.SendEnabledProtoMsg): _16.SendEnabled;
                toProto(message: _16.SendEnabled): Uint8Array;
                toProtoMsg(message: _16.SendEnabled): _16.SendEnabledProtoMsg;
            };
            Input: {
                encode(message: _16.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Input;
                fromJSON(object: any): _16.Input;
                toJSON(message: _16.Input): unknown;
                fromPartial(object: Partial<_16.Input>): _16.Input;
                fromAmino(object: _16.InputAmino): _16.Input;
                toAmino(message: _16.Input): _16.InputAmino;
                fromAminoMsg(object: _16.InputAminoMsg): _16.Input;
                toAminoMsg(message: _16.Input): _16.InputAminoMsg;
                fromProtoMsg(message: _16.InputProtoMsg): _16.Input;
                toProto(message: _16.Input): Uint8Array;
                toProtoMsg(message: _16.Input): _16.InputProtoMsg;
            };
            Output: {
                encode(message: _16.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Output;
                fromJSON(object: any): _16.Output;
                toJSON(message: _16.Output): unknown;
                fromPartial(object: Partial<_16.Output>): _16.Output;
                fromAmino(object: _16.OutputAmino): _16.Output;
                toAmino(message: _16.Output): _16.OutputAmino;
                fromAminoMsg(object: _16.OutputAminoMsg): _16.Output;
                toAminoMsg(message: _16.Output): _16.OutputAminoMsg;
                fromProtoMsg(message: _16.OutputProtoMsg): _16.Output;
                toProto(message: _16.Output): Uint8Array;
                toProtoMsg(message: _16.Output): _16.OutputProtoMsg;
            };
            Supply: {
                encode(message: _16.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Supply;
                fromJSON(object: any): _16.Supply;
                toJSON(message: _16.Supply): unknown;
                fromPartial(object: Partial<_16.Supply>): _16.Supply;
                fromAmino(object: _16.SupplyAmino): _16.Supply;
                toAmino(message: _16.Supply): _16.SupplyAmino;
                fromAminoMsg(object: _16.SupplyAminoMsg): _16.Supply;
                toAminoMsg(message: _16.Supply): _16.SupplyAminoMsg;
                fromProtoMsg(message: _16.SupplyProtoMsg): _16.Supply;
                toProto(message: _16.Supply): Uint8Array;
                toProtoMsg(message: _16.Supply): _16.SupplyProtoMsg;
            };
            DenomUnit: {
                encode(message: _16.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DenomUnit;
                fromJSON(object: any): _16.DenomUnit;
                toJSON(message: _16.DenomUnit): unknown;
                fromPartial(object: Partial<_16.DenomUnit>): _16.DenomUnit;
                fromAmino(object: _16.DenomUnitAmino): _16.DenomUnit;
                toAmino(message: _16.DenomUnit): _16.DenomUnitAmino;
                fromAminoMsg(object: _16.DenomUnitAminoMsg): _16.DenomUnit;
                toAminoMsg(message: _16.DenomUnit): _16.DenomUnitAminoMsg;
                fromProtoMsg(message: _16.DenomUnitProtoMsg): _16.DenomUnit;
                toProto(message: _16.DenomUnit): Uint8Array;
                toProtoMsg(message: _16.DenomUnit): _16.DenomUnitProtoMsg;
            };
            Metadata: {
                encode(message: _16.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Metadata;
                fromJSON(object: any): _16.Metadata;
                toJSON(message: _16.Metadata): unknown;
                fromPartial(object: Partial<_16.Metadata>): _16.Metadata;
                fromAmino(object: _16.MetadataAmino): _16.Metadata;
                toAmino(message: _16.Metadata): _16.MetadataAmino;
                fromAminoMsg(object: _16.MetadataAminoMsg): _16.Metadata;
                toAminoMsg(message: _16.Metadata): _16.MetadataAminoMsg;
                fromProtoMsg(message: _16.MetadataProtoMsg): _16.Metadata;
                toProto(message: _16.Metadata): Uint8Array;
                toProtoMsg(message: _16.Metadata): _16.MetadataProtoMsg;
            };
            SendAuthorization: {
                encode(message: _15.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SendAuthorization;
                fromJSON(object: any): _15.SendAuthorization;
                toJSON(message: _15.SendAuthorization): unknown;
                fromPartial(object: Partial<_15.SendAuthorization>): _15.SendAuthorization;
                fromAmino(object: _15.SendAuthorizationAmino): _15.SendAuthorization;
                toAmino(message: _15.SendAuthorization): _15.SendAuthorizationAmino;
                fromAminoMsg(object: _15.SendAuthorizationAminoMsg): _15.SendAuthorization;
                toAminoMsg(message: _15.SendAuthorization): _15.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _15.SendAuthorizationProtoMsg): _15.SendAuthorization;
                toProto(message: _15.SendAuthorization): Uint8Array;
                toProtoMsg(message: _15.SendAuthorization): _15.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _20.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.TxResponse;
                    fromJSON(object: any): _20.TxResponse;
                    toJSON(message: _20.TxResponse): unknown;
                    fromPartial(object: Partial<_20.TxResponse>): _20.TxResponse;
                    fromAmino(object: _20.TxResponseAmino): _20.TxResponse;
                    toAmino(message: _20.TxResponse): _20.TxResponseAmino;
                    fromAminoMsg(object: _20.TxResponseAminoMsg): _20.TxResponse;
                    toAminoMsg(message: _20.TxResponse): _20.TxResponseAminoMsg;
                    fromProtoMsg(message: _20.TxResponseProtoMsg): _20.TxResponse;
                    toProto(message: _20.TxResponse): Uint8Array;
                    toProtoMsg(message: _20.TxResponse): _20.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    encode(message: _20.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ABCIMessageLog;
                    fromJSON(object: any): _20.ABCIMessageLog;
                    toJSON(message: _20.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_20.ABCIMessageLog>): _20.ABCIMessageLog;
                    fromAmino(object: _20.ABCIMessageLogAmino): _20.ABCIMessageLog;
                    toAmino(message: _20.ABCIMessageLog): _20.ABCIMessageLogAmino;
                    fromAminoMsg(object: _20.ABCIMessageLogAminoMsg): _20.ABCIMessageLog;
                    toAminoMsg(message: _20.ABCIMessageLog): _20.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _20.ABCIMessageLogProtoMsg): _20.ABCIMessageLog;
                    toProto(message: _20.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _20.ABCIMessageLog): _20.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    encode(message: _20.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.StringEvent;
                    fromJSON(object: any): _20.StringEvent;
                    toJSON(message: _20.StringEvent): unknown;
                    fromPartial(object: Partial<_20.StringEvent>): _20.StringEvent;
                    fromAmino(object: _20.StringEventAmino): _20.StringEvent;
                    toAmino(message: _20.StringEvent): _20.StringEventAmino;
                    fromAminoMsg(object: _20.StringEventAminoMsg): _20.StringEvent;
                    toAminoMsg(message: _20.StringEvent): _20.StringEventAminoMsg;
                    fromProtoMsg(message: _20.StringEventProtoMsg): _20.StringEvent;
                    toProto(message: _20.StringEvent): Uint8Array;
                    toProtoMsg(message: _20.StringEvent): _20.StringEventProtoMsg;
                };
                Attribute: {
                    encode(message: _20.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Attribute;
                    fromJSON(object: any): _20.Attribute;
                    toJSON(message: _20.Attribute): unknown;
                    fromPartial(object: Partial<_20.Attribute>): _20.Attribute;
                    fromAmino(object: _20.AttributeAmino): _20.Attribute;
                    toAmino(message: _20.Attribute): _20.AttributeAmino;
                    fromAminoMsg(object: _20.AttributeAminoMsg): _20.Attribute;
                    toAminoMsg(message: _20.Attribute): _20.AttributeAminoMsg;
                    fromProtoMsg(message: _20.AttributeProtoMsg): _20.Attribute;
                    toProto(message: _20.Attribute): Uint8Array;
                    toProtoMsg(message: _20.Attribute): _20.AttributeProtoMsg;
                };
                GasInfo: {
                    encode(message: _20.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.GasInfo;
                    fromJSON(object: any): _20.GasInfo;
                    toJSON(message: _20.GasInfo): unknown;
                    fromPartial(object: Partial<_20.GasInfo>): _20.GasInfo;
                    fromAmino(object: _20.GasInfoAmino): _20.GasInfo;
                    toAmino(message: _20.GasInfo): _20.GasInfoAmino;
                    fromAminoMsg(object: _20.GasInfoAminoMsg): _20.GasInfo;
                    toAminoMsg(message: _20.GasInfo): _20.GasInfoAminoMsg;
                    fromProtoMsg(message: _20.GasInfoProtoMsg): _20.GasInfo;
                    toProto(message: _20.GasInfo): Uint8Array;
                    toProtoMsg(message: _20.GasInfo): _20.GasInfoProtoMsg;
                };
                Result: {
                    encode(message: _20.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Result;
                    fromJSON(object: any): _20.Result;
                    toJSON(message: _20.Result): unknown;
                    fromPartial(object: Partial<_20.Result>): _20.Result;
                    fromAmino(object: _20.ResultAmino): _20.Result;
                    toAmino(message: _20.Result): _20.ResultAmino;
                    fromAminoMsg(object: _20.ResultAminoMsg): _20.Result;
                    toAminoMsg(message: _20.Result): _20.ResultAminoMsg;
                    fromProtoMsg(message: _20.ResultProtoMsg): _20.Result;
                    toProto(message: _20.Result): Uint8Array;
                    toProtoMsg(message: _20.Result): _20.ResultProtoMsg;
                };
                SimulationResponse: {
                    encode(message: _20.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.SimulationResponse;
                    fromJSON(object: any): _20.SimulationResponse;
                    toJSON(message: _20.SimulationResponse): unknown;
                    fromPartial(object: Partial<_20.SimulationResponse>): _20.SimulationResponse;
                    fromAmino(object: _20.SimulationResponseAmino): _20.SimulationResponse;
                    toAmino(message: _20.SimulationResponse): _20.SimulationResponseAmino;
                    fromAminoMsg(object: _20.SimulationResponseAminoMsg): _20.SimulationResponse;
                    toAminoMsg(message: _20.SimulationResponse): _20.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _20.SimulationResponseProtoMsg): _20.SimulationResponse;
                    toProto(message: _20.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _20.SimulationResponse): _20.SimulationResponseProtoMsg;
                };
                MsgData: {
                    encode(message: _20.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.MsgData;
                    fromJSON(object: any): _20.MsgData;
                    toJSON(message: _20.MsgData): unknown;
                    fromPartial(object: Partial<_20.MsgData>): _20.MsgData;
                    fromAmino(object: _20.MsgDataAmino): _20.MsgData;
                    toAmino(message: _20.MsgData): _20.MsgDataAmino;
                    fromAminoMsg(object: _20.MsgDataAminoMsg): _20.MsgData;
                    toAminoMsg(message: _20.MsgData): _20.MsgDataAminoMsg;
                    fromProtoMsg(message: _20.MsgDataProtoMsg): _20.MsgData;
                    toProto(message: _20.MsgData): Uint8Array;
                    toProtoMsg(message: _20.MsgData): _20.MsgDataProtoMsg;
                };
                TxMsgData: {
                    encode(message: _20.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.TxMsgData;
                    fromJSON(object: any): _20.TxMsgData;
                    toJSON(message: _20.TxMsgData): unknown;
                    fromPartial(object: Partial<_20.TxMsgData>): _20.TxMsgData;
                    fromAmino(object: _20.TxMsgDataAmino): _20.TxMsgData;
                    toAmino(message: _20.TxMsgData): _20.TxMsgDataAmino;
                    fromAminoMsg(object: _20.TxMsgDataAminoMsg): _20.TxMsgData;
                    toAminoMsg(message: _20.TxMsgData): _20.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _20.TxMsgDataProtoMsg): _20.TxMsgData;
                    toProto(message: _20.TxMsgData): Uint8Array;
                    toProtoMsg(message: _20.TxMsgData): _20.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    encode(message: _20.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.SearchTxsResult;
                    fromJSON(object: any): _20.SearchTxsResult;
                    toJSON(message: _20.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_20.SearchTxsResult>): _20.SearchTxsResult;
                    fromAmino(object: _20.SearchTxsResultAmino): _20.SearchTxsResult;
                    toAmino(message: _20.SearchTxsResult): _20.SearchTxsResultAmino;
                    fromAminoMsg(object: _20.SearchTxsResultAminoMsg): _20.SearchTxsResult;
                    toAminoMsg(message: _20.SearchTxsResult): _20.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _20.SearchTxsResultProtoMsg): _20.SearchTxsResult;
                    toProto(message: _20.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _20.SearchTxsResult): _20.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _21.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Pairs;
                    fromJSON(object: any): _21.Pairs;
                    toJSON(message: _21.Pairs): unknown;
                    fromPartial(object: Partial<_21.Pairs>): _21.Pairs;
                    fromAmino(object: _21.PairsAmino): _21.Pairs;
                    toAmino(message: _21.Pairs): _21.PairsAmino;
                    fromAminoMsg(object: _21.PairsAminoMsg): _21.Pairs;
                    toAminoMsg(message: _21.Pairs): _21.PairsAminoMsg;
                    fromProtoMsg(message: _21.PairsProtoMsg): _21.Pairs;
                    toProto(message: _21.Pairs): Uint8Array;
                    toProtoMsg(message: _21.Pairs): _21.PairsProtoMsg;
                };
                Pair: {
                    encode(message: _21.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Pair;
                    fromJSON(object: any): _21.Pair;
                    toJSON(message: _21.Pair): unknown;
                    fromPartial(object: Partial<_21.Pair>): _21.Pair;
                    fromAmino(object: _21.PairAmino): _21.Pair;
                    toAmino(message: _21.Pair): _21.PairAmino;
                    fromAminoMsg(object: _21.PairAminoMsg): _21.Pair;
                    toAminoMsg(message: _21.Pair): _21.PairAminoMsg;
                    fromProtoMsg(message: _21.PairProtoMsg): _21.Pair;
                    toProto(message: _21.Pair): Uint8Array;
                    toProtoMsg(message: _21.Pair): _21.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _150.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _22.ConfigRequest): Promise<_22.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _22.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ConfigRequest;
                    fromJSON(_: any): _22.ConfigRequest;
                    toJSON(_: _22.ConfigRequest): unknown;
                    fromPartial(_: Partial<_22.ConfigRequest>): _22.ConfigRequest;
                    fromAmino(_: _22.ConfigRequestAmino): _22.ConfigRequest;
                    toAmino(_: _22.ConfigRequest): _22.ConfigRequestAmino;
                    fromAminoMsg(object: _22.ConfigRequestAminoMsg): _22.ConfigRequest;
                    toAminoMsg(message: _22.ConfigRequest): _22.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _22.ConfigRequestProtoMsg): _22.ConfigRequest;
                    toProto(message: _22.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _22.ConfigRequest): _22.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    encode(message: _22.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ConfigResponse;
                    fromJSON(object: any): _22.ConfigResponse;
                    toJSON(message: _22.ConfigResponse): unknown;
                    fromPartial(object: Partial<_22.ConfigResponse>): _22.ConfigResponse;
                    fromAmino(object: _22.ConfigResponseAmino): _22.ConfigResponse;
                    toAmino(message: _22.ConfigResponse): _22.ConfigResponseAmino;
                    fromAminoMsg(object: _22.ConfigResponseAminoMsg): _22.ConfigResponse;
                    toAminoMsg(message: _22.ConfigResponse): _22.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _22.ConfigResponseProtoMsg): _22.ConfigResponse;
                    toProto(message: _22.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _22.ConfigResponse): _22.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _23.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.PageRequest;
                    fromJSON(object: any): _23.PageRequest;
                    toJSON(message: _23.PageRequest): unknown;
                    fromPartial(object: Partial<_23.PageRequest>): _23.PageRequest;
                    fromAmino(object: _23.PageRequestAmino): _23.PageRequest;
                    toAmino(message: _23.PageRequest): _23.PageRequestAmino;
                    fromAminoMsg(object: _23.PageRequestAminoMsg): _23.PageRequest;
                    toAminoMsg(message: _23.PageRequest): _23.PageRequestAminoMsg;
                    fromProtoMsg(message: _23.PageRequestProtoMsg): _23.PageRequest;
                    toProto(message: _23.PageRequest): Uint8Array;
                    toProtoMsg(message: _23.PageRequest): _23.PageRequestProtoMsg;
                };
                PageResponse: {
                    encode(message: _23.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.PageResponse;
                    fromJSON(object: any): _23.PageResponse;
                    toJSON(message: _23.PageResponse): unknown;
                    fromPartial(object: Partial<_23.PageResponse>): _23.PageResponse;
                    fromAmino(object: _23.PageResponseAmino): _23.PageResponse;
                    toAmino(message: _23.PageResponse): _23.PageResponseAmino;
                    fromAminoMsg(object: _23.PageResponseAminoMsg): _23.PageResponse;
                    toAminoMsg(message: _23.PageResponse): _23.PageResponseAminoMsg;
                    fromProtoMsg(message: _23.PageResponseProtoMsg): _23.PageResponse;
                    toProto(message: _23.PageResponse): Uint8Array;
                    toProtoMsg(message: _23.PageResponse): _23.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _24.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ListAllInterfacesRequest;
                    fromJSON(_: any): _24.ListAllInterfacesRequest;
                    toJSON(_: _24.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_24.ListAllInterfacesRequest>): _24.ListAllInterfacesRequest;
                    fromAmino(_: _24.ListAllInterfacesRequestAmino): _24.ListAllInterfacesRequest;
                    toAmino(_: _24.ListAllInterfacesRequest): _24.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _24.ListAllInterfacesRequestAminoMsg): _24.ListAllInterfacesRequest;
                    toAminoMsg(message: _24.ListAllInterfacesRequest): _24.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _24.ListAllInterfacesRequestProtoMsg): _24.ListAllInterfacesRequest;
                    toProto(message: _24.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _24.ListAllInterfacesRequest): _24.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    encode(message: _24.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ListAllInterfacesResponse;
                    fromJSON(object: any): _24.ListAllInterfacesResponse;
                    toJSON(message: _24.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_24.ListAllInterfacesResponse>): _24.ListAllInterfacesResponse;
                    fromAmino(object: _24.ListAllInterfacesResponseAmino): _24.ListAllInterfacesResponse;
                    toAmino(message: _24.ListAllInterfacesResponse): _24.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _24.ListAllInterfacesResponseAminoMsg): _24.ListAllInterfacesResponse;
                    toAminoMsg(message: _24.ListAllInterfacesResponse): _24.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _24.ListAllInterfacesResponseProtoMsg): _24.ListAllInterfacesResponse;
                    toProto(message: _24.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _24.ListAllInterfacesResponse): _24.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    encode(message: _24.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ListImplementationsRequest;
                    fromJSON(object: any): _24.ListImplementationsRequest;
                    toJSON(message: _24.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_24.ListImplementationsRequest>): _24.ListImplementationsRequest;
                    fromAmino(object: _24.ListImplementationsRequestAmino): _24.ListImplementationsRequest;
                    toAmino(message: _24.ListImplementationsRequest): _24.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _24.ListImplementationsRequestAminoMsg): _24.ListImplementationsRequest;
                    toAminoMsg(message: _24.ListImplementationsRequest): _24.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _24.ListImplementationsRequestProtoMsg): _24.ListImplementationsRequest;
                    toProto(message: _24.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _24.ListImplementationsRequest): _24.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    encode(message: _24.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ListImplementationsResponse;
                    fromJSON(object: any): _24.ListImplementationsResponse;
                    toJSON(message: _24.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_24.ListImplementationsResponse>): _24.ListImplementationsResponse;
                    fromAmino(object: _24.ListImplementationsResponseAmino): _24.ListImplementationsResponse;
                    toAmino(message: _24.ListImplementationsResponse): _24.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _24.ListImplementationsResponseAminoMsg): _24.ListImplementationsResponse;
                    toAminoMsg(message: _24.ListImplementationsResponse): _24.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _24.ListImplementationsResponseProtoMsg): _24.ListImplementationsResponse;
                    toProto(message: _24.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _24.ListImplementationsResponse): _24.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _25.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AppDescriptor;
                    fromJSON(object: any): _25.AppDescriptor;
                    toJSON(message: _25.AppDescriptor): unknown;
                    fromPartial(object: Partial<_25.AppDescriptor>): _25.AppDescriptor;
                    fromAmino(object: _25.AppDescriptorAmino): _25.AppDescriptor;
                    toAmino(message: _25.AppDescriptor): _25.AppDescriptorAmino;
                    fromAminoMsg(object: _25.AppDescriptorAminoMsg): _25.AppDescriptor;
                    toAminoMsg(message: _25.AppDescriptor): _25.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _25.AppDescriptorProtoMsg): _25.AppDescriptor;
                    toProto(message: _25.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _25.AppDescriptor): _25.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    encode(message: _25.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TxDescriptor;
                    fromJSON(object: any): _25.TxDescriptor;
                    toJSON(message: _25.TxDescriptor): unknown;
                    fromPartial(object: Partial<_25.TxDescriptor>): _25.TxDescriptor;
                    fromAmino(object: _25.TxDescriptorAmino): _25.TxDescriptor;
                    toAmino(message: _25.TxDescriptor): _25.TxDescriptorAmino;
                    fromAminoMsg(object: _25.TxDescriptorAminoMsg): _25.TxDescriptor;
                    toAminoMsg(message: _25.TxDescriptor): _25.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _25.TxDescriptorProtoMsg): _25.TxDescriptor;
                    toProto(message: _25.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _25.TxDescriptor): _25.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    encode(message: _25.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AuthnDescriptor;
                    fromJSON(object: any): _25.AuthnDescriptor;
                    toJSON(message: _25.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_25.AuthnDescriptor>): _25.AuthnDescriptor;
                    fromAmino(object: _25.AuthnDescriptorAmino): _25.AuthnDescriptor;
                    toAmino(message: _25.AuthnDescriptor): _25.AuthnDescriptorAmino;
                    fromAminoMsg(object: _25.AuthnDescriptorAminoMsg): _25.AuthnDescriptor;
                    toAminoMsg(message: _25.AuthnDescriptor): _25.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _25.AuthnDescriptorProtoMsg): _25.AuthnDescriptor;
                    toProto(message: _25.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _25.AuthnDescriptor): _25.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    encode(message: _25.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SigningModeDescriptor;
                    fromJSON(object: any): _25.SigningModeDescriptor;
                    toJSON(message: _25.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_25.SigningModeDescriptor>): _25.SigningModeDescriptor;
                    fromAmino(object: _25.SigningModeDescriptorAmino): _25.SigningModeDescriptor;
                    toAmino(message: _25.SigningModeDescriptor): _25.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _25.SigningModeDescriptorAminoMsg): _25.SigningModeDescriptor;
                    toAminoMsg(message: _25.SigningModeDescriptor): _25.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _25.SigningModeDescriptorProtoMsg): _25.SigningModeDescriptor;
                    toProto(message: _25.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _25.SigningModeDescriptor): _25.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    encode(message: _25.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ChainDescriptor;
                    fromJSON(object: any): _25.ChainDescriptor;
                    toJSON(message: _25.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_25.ChainDescriptor>): _25.ChainDescriptor;
                    fromAmino(object: _25.ChainDescriptorAmino): _25.ChainDescriptor;
                    toAmino(message: _25.ChainDescriptor): _25.ChainDescriptorAmino;
                    fromAminoMsg(object: _25.ChainDescriptorAminoMsg): _25.ChainDescriptor;
                    toAminoMsg(message: _25.ChainDescriptor): _25.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _25.ChainDescriptorProtoMsg): _25.ChainDescriptor;
                    toProto(message: _25.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _25.ChainDescriptor): _25.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    encode(message: _25.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CodecDescriptor;
                    fromJSON(object: any): _25.CodecDescriptor;
                    toJSON(message: _25.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_25.CodecDescriptor>): _25.CodecDescriptor;
                    fromAmino(object: _25.CodecDescriptorAmino): _25.CodecDescriptor;
                    toAmino(message: _25.CodecDescriptor): _25.CodecDescriptorAmino;
                    fromAminoMsg(object: _25.CodecDescriptorAminoMsg): _25.CodecDescriptor;
                    toAminoMsg(message: _25.CodecDescriptor): _25.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _25.CodecDescriptorProtoMsg): _25.CodecDescriptor;
                    toProto(message: _25.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _25.CodecDescriptor): _25.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    encode(message: _25.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.InterfaceDescriptor;
                    fromJSON(object: any): _25.InterfaceDescriptor;
                    toJSON(message: _25.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_25.InterfaceDescriptor>): _25.InterfaceDescriptor;
                    fromAmino(object: _25.InterfaceDescriptorAmino): _25.InterfaceDescriptor;
                    toAmino(message: _25.InterfaceDescriptor): _25.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _25.InterfaceDescriptorAminoMsg): _25.InterfaceDescriptor;
                    toAminoMsg(message: _25.InterfaceDescriptor): _25.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _25.InterfaceDescriptorProtoMsg): _25.InterfaceDescriptor;
                    toProto(message: _25.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _25.InterfaceDescriptor): _25.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _25.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _25.InterfaceImplementerDescriptor;
                    toJSON(message: _25.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_25.InterfaceImplementerDescriptor>): _25.InterfaceImplementerDescriptor;
                    fromAmino(object: _25.InterfaceImplementerDescriptorAmino): _25.InterfaceImplementerDescriptor;
                    toAmino(message: _25.InterfaceImplementerDescriptor): _25.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _25.InterfaceImplementerDescriptorAminoMsg): _25.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _25.InterfaceImplementerDescriptor): _25.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _25.InterfaceImplementerDescriptorProtoMsg): _25.InterfaceImplementerDescriptor;
                    toProto(message: _25.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _25.InterfaceImplementerDescriptor): _25.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _25.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _25.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _25.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_25.InterfaceAcceptingMessageDescriptor>): _25.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _25.InterfaceAcceptingMessageDescriptorAmino): _25.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _25.InterfaceAcceptingMessageDescriptor): _25.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _25.InterfaceAcceptingMessageDescriptorAminoMsg): _25.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _25.InterfaceAcceptingMessageDescriptor): _25.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _25.InterfaceAcceptingMessageDescriptorProtoMsg): _25.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _25.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _25.InterfaceAcceptingMessageDescriptor): _25.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    encode(message: _25.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ConfigurationDescriptor;
                    fromJSON(object: any): _25.ConfigurationDescriptor;
                    toJSON(message: _25.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_25.ConfigurationDescriptor>): _25.ConfigurationDescriptor;
                    fromAmino(object: _25.ConfigurationDescriptorAmino): _25.ConfigurationDescriptor;
                    toAmino(message: _25.ConfigurationDescriptor): _25.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _25.ConfigurationDescriptorAminoMsg): _25.ConfigurationDescriptor;
                    toAminoMsg(message: _25.ConfigurationDescriptor): _25.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _25.ConfigurationDescriptorProtoMsg): _25.ConfigurationDescriptor;
                    toProto(message: _25.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _25.ConfigurationDescriptor): _25.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    encode(message: _25.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgDescriptor;
                    fromJSON(object: any): _25.MsgDescriptor;
                    toJSON(message: _25.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_25.MsgDescriptor>): _25.MsgDescriptor;
                    fromAmino(object: _25.MsgDescriptorAmino): _25.MsgDescriptor;
                    toAmino(message: _25.MsgDescriptor): _25.MsgDescriptorAmino;
                    fromAminoMsg(object: _25.MsgDescriptorAminoMsg): _25.MsgDescriptor;
                    toAminoMsg(message: _25.MsgDescriptor): _25.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _25.MsgDescriptorProtoMsg): _25.MsgDescriptor;
                    toProto(message: _25.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _25.MsgDescriptor): _25.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _25.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _25.GetAuthnDescriptorRequest;
                    toJSON(_: _25.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_25.GetAuthnDescriptorRequest>): _25.GetAuthnDescriptorRequest;
                    fromAmino(_: _25.GetAuthnDescriptorRequestAmino): _25.GetAuthnDescriptorRequest;
                    toAmino(_: _25.GetAuthnDescriptorRequest): _25.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _25.GetAuthnDescriptorRequestAminoMsg): _25.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _25.GetAuthnDescriptorRequest): _25.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _25.GetAuthnDescriptorRequestProtoMsg): _25.GetAuthnDescriptorRequest;
                    toProto(message: _25.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _25.GetAuthnDescriptorRequest): _25.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _25.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _25.GetAuthnDescriptorResponse;
                    toJSON(message: _25.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_25.GetAuthnDescriptorResponse>): _25.GetAuthnDescriptorResponse;
                    fromAmino(object: _25.GetAuthnDescriptorResponseAmino): _25.GetAuthnDescriptorResponse;
                    toAmino(message: _25.GetAuthnDescriptorResponse): _25.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _25.GetAuthnDescriptorResponseAminoMsg): _25.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _25.GetAuthnDescriptorResponse): _25.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _25.GetAuthnDescriptorResponseProtoMsg): _25.GetAuthnDescriptorResponse;
                    toProto(message: _25.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _25.GetAuthnDescriptorResponse): _25.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    encode(_: _25.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetChainDescriptorRequest;
                    fromJSON(_: any): _25.GetChainDescriptorRequest;
                    toJSON(_: _25.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_25.GetChainDescriptorRequest>): _25.GetChainDescriptorRequest;
                    fromAmino(_: _25.GetChainDescriptorRequestAmino): _25.GetChainDescriptorRequest;
                    toAmino(_: _25.GetChainDescriptorRequest): _25.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _25.GetChainDescriptorRequestAminoMsg): _25.GetChainDescriptorRequest;
                    toAminoMsg(message: _25.GetChainDescriptorRequest): _25.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _25.GetChainDescriptorRequestProtoMsg): _25.GetChainDescriptorRequest;
                    toProto(message: _25.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _25.GetChainDescriptorRequest): _25.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    encode(message: _25.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetChainDescriptorResponse;
                    fromJSON(object: any): _25.GetChainDescriptorResponse;
                    toJSON(message: _25.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_25.GetChainDescriptorResponse>): _25.GetChainDescriptorResponse;
                    fromAmino(object: _25.GetChainDescriptorResponseAmino): _25.GetChainDescriptorResponse;
                    toAmino(message: _25.GetChainDescriptorResponse): _25.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _25.GetChainDescriptorResponseAminoMsg): _25.GetChainDescriptorResponse;
                    toAminoMsg(message: _25.GetChainDescriptorResponse): _25.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _25.GetChainDescriptorResponseProtoMsg): _25.GetChainDescriptorResponse;
                    toProto(message: _25.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _25.GetChainDescriptorResponse): _25.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _25.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetCodecDescriptorRequest;
                    fromJSON(_: any): _25.GetCodecDescriptorRequest;
                    toJSON(_: _25.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_25.GetCodecDescriptorRequest>): _25.GetCodecDescriptorRequest;
                    fromAmino(_: _25.GetCodecDescriptorRequestAmino): _25.GetCodecDescriptorRequest;
                    toAmino(_: _25.GetCodecDescriptorRequest): _25.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _25.GetCodecDescriptorRequestAminoMsg): _25.GetCodecDescriptorRequest;
                    toAminoMsg(message: _25.GetCodecDescriptorRequest): _25.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _25.GetCodecDescriptorRequestProtoMsg): _25.GetCodecDescriptorRequest;
                    toProto(message: _25.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _25.GetCodecDescriptorRequest): _25.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _25.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetCodecDescriptorResponse;
                    fromJSON(object: any): _25.GetCodecDescriptorResponse;
                    toJSON(message: _25.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_25.GetCodecDescriptorResponse>): _25.GetCodecDescriptorResponse;
                    fromAmino(object: _25.GetCodecDescriptorResponseAmino): _25.GetCodecDescriptorResponse;
                    toAmino(message: _25.GetCodecDescriptorResponse): _25.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _25.GetCodecDescriptorResponseAminoMsg): _25.GetCodecDescriptorResponse;
                    toAminoMsg(message: _25.GetCodecDescriptorResponse): _25.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _25.GetCodecDescriptorResponseProtoMsg): _25.GetCodecDescriptorResponse;
                    toProto(message: _25.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _25.GetCodecDescriptorResponse): _25.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _25.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _25.GetConfigurationDescriptorRequest;
                    toJSON(_: _25.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_25.GetConfigurationDescriptorRequest>): _25.GetConfigurationDescriptorRequest;
                    fromAmino(_: _25.GetConfigurationDescriptorRequestAmino): _25.GetConfigurationDescriptorRequest;
                    toAmino(_: _25.GetConfigurationDescriptorRequest): _25.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _25.GetConfigurationDescriptorRequestAminoMsg): _25.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _25.GetConfigurationDescriptorRequest): _25.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _25.GetConfigurationDescriptorRequestProtoMsg): _25.GetConfigurationDescriptorRequest;
                    toProto(message: _25.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _25.GetConfigurationDescriptorRequest): _25.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _25.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _25.GetConfigurationDescriptorResponse;
                    toJSON(message: _25.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_25.GetConfigurationDescriptorResponse>): _25.GetConfigurationDescriptorResponse;
                    fromAmino(object: _25.GetConfigurationDescriptorResponseAmino): _25.GetConfigurationDescriptorResponse;
                    toAmino(message: _25.GetConfigurationDescriptorResponse): _25.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _25.GetConfigurationDescriptorResponseAminoMsg): _25.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _25.GetConfigurationDescriptorResponse): _25.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _25.GetConfigurationDescriptorResponseProtoMsg): _25.GetConfigurationDescriptorResponse;
                    toProto(message: _25.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _25.GetConfigurationDescriptorResponse): _25.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _25.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _25.GetQueryServicesDescriptorRequest;
                    toJSON(_: _25.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_25.GetQueryServicesDescriptorRequest>): _25.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _25.GetQueryServicesDescriptorRequestAmino): _25.GetQueryServicesDescriptorRequest;
                    toAmino(_: _25.GetQueryServicesDescriptorRequest): _25.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _25.GetQueryServicesDescriptorRequestAminoMsg): _25.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _25.GetQueryServicesDescriptorRequest): _25.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _25.GetQueryServicesDescriptorRequestProtoMsg): _25.GetQueryServicesDescriptorRequest;
                    toProto(message: _25.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _25.GetQueryServicesDescriptorRequest): _25.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _25.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _25.GetQueryServicesDescriptorResponse;
                    toJSON(message: _25.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_25.GetQueryServicesDescriptorResponse>): _25.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _25.GetQueryServicesDescriptorResponseAmino): _25.GetQueryServicesDescriptorResponse;
                    toAmino(message: _25.GetQueryServicesDescriptorResponse): _25.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _25.GetQueryServicesDescriptorResponseAminoMsg): _25.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _25.GetQueryServicesDescriptorResponse): _25.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _25.GetQueryServicesDescriptorResponseProtoMsg): _25.GetQueryServicesDescriptorResponse;
                    toProto(message: _25.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _25.GetQueryServicesDescriptorResponse): _25.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    encode(_: _25.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetTxDescriptorRequest;
                    fromJSON(_: any): _25.GetTxDescriptorRequest;
                    toJSON(_: _25.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_25.GetTxDescriptorRequest>): _25.GetTxDescriptorRequest;
                    fromAmino(_: _25.GetTxDescriptorRequestAmino): _25.GetTxDescriptorRequest;
                    toAmino(_: _25.GetTxDescriptorRequest): _25.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _25.GetTxDescriptorRequestAminoMsg): _25.GetTxDescriptorRequest;
                    toAminoMsg(message: _25.GetTxDescriptorRequest): _25.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _25.GetTxDescriptorRequestProtoMsg): _25.GetTxDescriptorRequest;
                    toProto(message: _25.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _25.GetTxDescriptorRequest): _25.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    encode(message: _25.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetTxDescriptorResponse;
                    fromJSON(object: any): _25.GetTxDescriptorResponse;
                    toJSON(message: _25.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_25.GetTxDescriptorResponse>): _25.GetTxDescriptorResponse;
                    fromAmino(object: _25.GetTxDescriptorResponseAmino): _25.GetTxDescriptorResponse;
                    toAmino(message: _25.GetTxDescriptorResponse): _25.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _25.GetTxDescriptorResponseAminoMsg): _25.GetTxDescriptorResponse;
                    toAminoMsg(message: _25.GetTxDescriptorResponse): _25.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _25.GetTxDescriptorResponseProtoMsg): _25.GetTxDescriptorResponse;
                    toProto(message: _25.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _25.GetTxDescriptorResponse): _25.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    encode(message: _25.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryServicesDescriptor;
                    fromJSON(object: any): _25.QueryServicesDescriptor;
                    toJSON(message: _25.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_25.QueryServicesDescriptor>): _25.QueryServicesDescriptor;
                    fromAmino(object: _25.QueryServicesDescriptorAmino): _25.QueryServicesDescriptor;
                    toAmino(message: _25.QueryServicesDescriptor): _25.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _25.QueryServicesDescriptorAminoMsg): _25.QueryServicesDescriptor;
                    toAminoMsg(message: _25.QueryServicesDescriptor): _25.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _25.QueryServicesDescriptorProtoMsg): _25.QueryServicesDescriptor;
                    toProto(message: _25.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _25.QueryServicesDescriptor): _25.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    encode(message: _25.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryServiceDescriptor;
                    fromJSON(object: any): _25.QueryServiceDescriptor;
                    toJSON(message: _25.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_25.QueryServiceDescriptor>): _25.QueryServiceDescriptor;
                    fromAmino(object: _25.QueryServiceDescriptorAmino): _25.QueryServiceDescriptor;
                    toAmino(message: _25.QueryServiceDescriptor): _25.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _25.QueryServiceDescriptorAminoMsg): _25.QueryServiceDescriptor;
                    toAminoMsg(message: _25.QueryServiceDescriptor): _25.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _25.QueryServiceDescriptorProtoMsg): _25.QueryServiceDescriptor;
                    toProto(message: _25.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _25.QueryServiceDescriptor): _25.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    encode(message: _25.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryMethodDescriptor;
                    fromJSON(object: any): _25.QueryMethodDescriptor;
                    toJSON(message: _25.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_25.QueryMethodDescriptor>): _25.QueryMethodDescriptor;
                    fromAmino(object: _25.QueryMethodDescriptorAmino): _25.QueryMethodDescriptor;
                    toAmino(message: _25.QueryMethodDescriptor): _25.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _25.QueryMethodDescriptorAminoMsg): _25.QueryMethodDescriptor;
                    toAminoMsg(message: _25.QueryMethodDescriptor): _25.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _25.QueryMethodDescriptorProtoMsg): _25.QueryMethodDescriptor;
                    toProto(message: _25.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _25.QueryMethodDescriptor): _25.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _26.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Snapshot;
                    fromJSON(object: any): _26.Snapshot;
                    toJSON(message: _26.Snapshot): unknown;
                    fromPartial(object: Partial<_26.Snapshot>): _26.Snapshot;
                    fromAmino(object: _26.SnapshotAmino): _26.Snapshot;
                    toAmino(message: _26.Snapshot): _26.SnapshotAmino;
                    fromAminoMsg(object: _26.SnapshotAminoMsg): _26.Snapshot;
                    toAminoMsg(message: _26.Snapshot): _26.SnapshotAminoMsg;
                    fromProtoMsg(message: _26.SnapshotProtoMsg): _26.Snapshot;
                    toProto(message: _26.Snapshot): Uint8Array;
                    toProtoMsg(message: _26.Snapshot): _26.SnapshotProtoMsg;
                };
                Metadata: {
                    encode(message: _26.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Metadata;
                    fromJSON(object: any): _26.Metadata;
                    toJSON(message: _26.Metadata): unknown;
                    fromPartial(object: Partial<_26.Metadata>): _26.Metadata;
                    fromAmino(object: _26.MetadataAmino): _26.Metadata;
                    toAmino(message: _26.Metadata): _26.MetadataAmino;
                    fromAminoMsg(object: _26.MetadataAminoMsg): _26.Metadata;
                    toAminoMsg(message: _26.Metadata): _26.MetadataAminoMsg;
                    fromProtoMsg(message: _26.MetadataProtoMsg): _26.Metadata;
                    toProto(message: _26.Metadata): Uint8Array;
                    toProtoMsg(message: _26.Metadata): _26.MetadataProtoMsg;
                };
                SnapshotItem: {
                    encode(message: _26.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.SnapshotItem;
                    fromJSON(object: any): _26.SnapshotItem;
                    toJSON(message: _26.SnapshotItem): unknown;
                    fromPartial(object: Partial<_26.SnapshotItem>): _26.SnapshotItem;
                    fromAmino(object: _26.SnapshotItemAmino): _26.SnapshotItem;
                    toAmino(message: _26.SnapshotItem): _26.SnapshotItemAmino;
                    fromAminoMsg(object: _26.SnapshotItemAminoMsg): _26.SnapshotItem;
                    toAminoMsg(message: _26.SnapshotItem): _26.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _26.SnapshotItemProtoMsg): _26.SnapshotItem;
                    toProto(message: _26.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _26.SnapshotItem): _26.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    encode(message: _26.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.SnapshotStoreItem;
                    fromJSON(object: any): _26.SnapshotStoreItem;
                    toJSON(message: _26.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_26.SnapshotStoreItem>): _26.SnapshotStoreItem;
                    fromAmino(object: _26.SnapshotStoreItemAmino): _26.SnapshotStoreItem;
                    toAmino(message: _26.SnapshotStoreItem): _26.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _26.SnapshotStoreItemAminoMsg): _26.SnapshotStoreItem;
                    toAminoMsg(message: _26.SnapshotStoreItem): _26.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _26.SnapshotStoreItemProtoMsg): _26.SnapshotStoreItem;
                    toProto(message: _26.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _26.SnapshotStoreItem): _26.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    encode(message: _26.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.SnapshotIAVLItem;
                    fromJSON(object: any): _26.SnapshotIAVLItem;
                    toJSON(message: _26.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_26.SnapshotIAVLItem>): _26.SnapshotIAVLItem;
                    fromAmino(object: _26.SnapshotIAVLItemAmino): _26.SnapshotIAVLItem;
                    toAmino(message: _26.SnapshotIAVLItem): _26.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _26.SnapshotIAVLItemAminoMsg): _26.SnapshotIAVLItem;
                    toAminoMsg(message: _26.SnapshotIAVLItem): _26.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _26.SnapshotIAVLItemProtoMsg): _26.SnapshotIAVLItem;
                    toProto(message: _26.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _26.SnapshotIAVLItem): _26.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    encode(message: _26.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.SnapshotExtensionMeta;
                    fromJSON(object: any): _26.SnapshotExtensionMeta;
                    toJSON(message: _26.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_26.SnapshotExtensionMeta>): _26.SnapshotExtensionMeta;
                    fromAmino(object: _26.SnapshotExtensionMetaAmino): _26.SnapshotExtensionMeta;
                    toAmino(message: _26.SnapshotExtensionMeta): _26.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _26.SnapshotExtensionMetaAminoMsg): _26.SnapshotExtensionMeta;
                    toAminoMsg(message: _26.SnapshotExtensionMeta): _26.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _26.SnapshotExtensionMetaProtoMsg): _26.SnapshotExtensionMeta;
                    toProto(message: _26.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _26.SnapshotExtensionMeta): _26.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    encode(message: _26.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.SnapshotExtensionPayload;
                    fromJSON(object: any): _26.SnapshotExtensionPayload;
                    toJSON(message: _26.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_26.SnapshotExtensionPayload>): _26.SnapshotExtensionPayload;
                    fromAmino(object: _26.SnapshotExtensionPayloadAmino): _26.SnapshotExtensionPayload;
                    toAmino(message: _26.SnapshotExtensionPayload): _26.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _26.SnapshotExtensionPayloadAminoMsg): _26.SnapshotExtensionPayload;
                    toAminoMsg(message: _26.SnapshotExtensionPayload): _26.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _26.SnapshotExtensionPayloadProtoMsg): _26.SnapshotExtensionPayload;
                    toProto(message: _26.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _26.SnapshotExtensionPayload): _26.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    encode(message: _26.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.SnapshotKVItem;
                    fromJSON(object: any): _26.SnapshotKVItem;
                    toJSON(message: _26.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_26.SnapshotKVItem>): _26.SnapshotKVItem;
                    fromAmino(object: _26.SnapshotKVItemAmino): _26.SnapshotKVItem;
                    toAmino(message: _26.SnapshotKVItem): _26.SnapshotKVItemAmino;
                    fromAminoMsg(object: _26.SnapshotKVItemAminoMsg): _26.SnapshotKVItem;
                    toAminoMsg(message: _26.SnapshotKVItem): _26.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _26.SnapshotKVItemProtoMsg): _26.SnapshotKVItem;
                    toProto(message: _26.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _26.SnapshotKVItem): _26.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    encode(message: _26.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.SnapshotSchema;
                    fromJSON(object: any): _26.SnapshotSchema;
                    toJSON(message: _26.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_26.SnapshotSchema>): _26.SnapshotSchema;
                    fromAmino(object: _26.SnapshotSchemaAmino): _26.SnapshotSchema;
                    toAmino(message: _26.SnapshotSchema): _26.SnapshotSchemaAmino;
                    fromAminoMsg(object: _26.SnapshotSchemaAminoMsg): _26.SnapshotSchema;
                    toAminoMsg(message: _26.SnapshotSchema): _26.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _26.SnapshotSchemaProtoMsg): _26.SnapshotSchema;
                    toProto(message: _26.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _26.SnapshotSchema): _26.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _28.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.StoreKVPair;
                    fromJSON(object: any): _28.StoreKVPair;
                    toJSON(message: _28.StoreKVPair): unknown;
                    fromPartial(object: Partial<_28.StoreKVPair>): _28.StoreKVPair;
                    fromAmino(object: _28.StoreKVPairAmino): _28.StoreKVPair;
                    toAmino(message: _28.StoreKVPair): _28.StoreKVPairAmino;
                    fromAminoMsg(object: _28.StoreKVPairAminoMsg): _28.StoreKVPair;
                    toAminoMsg(message: _28.StoreKVPair): _28.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _28.StoreKVPairProtoMsg): _28.StoreKVPair;
                    toProto(message: _28.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _28.StoreKVPair): _28.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    encode(message: _27.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.CommitInfo;
                    fromJSON(object: any): _27.CommitInfo;
                    toJSON(message: _27.CommitInfo): unknown;
                    fromPartial(object: Partial<_27.CommitInfo>): _27.CommitInfo;
                    fromAmino(object: _27.CommitInfoAmino): _27.CommitInfo;
                    toAmino(message: _27.CommitInfo): _27.CommitInfoAmino;
                    fromAminoMsg(object: _27.CommitInfoAminoMsg): _27.CommitInfo;
                    toAminoMsg(message: _27.CommitInfo): _27.CommitInfoAminoMsg;
                    fromProtoMsg(message: _27.CommitInfoProtoMsg): _27.CommitInfo;
                    toProto(message: _27.CommitInfo): Uint8Array;
                    toProtoMsg(message: _27.CommitInfo): _27.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    encode(message: _27.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.StoreInfo;
                    fromJSON(object: any): _27.StoreInfo;
                    toJSON(message: _27.StoreInfo): unknown;
                    fromPartial(object: Partial<_27.StoreInfo>): _27.StoreInfo;
                    fromAmino(object: _27.StoreInfoAmino): _27.StoreInfo;
                    toAmino(message: _27.StoreInfo): _27.StoreInfoAmino;
                    fromAminoMsg(object: _27.StoreInfoAminoMsg): _27.StoreInfo;
                    toAminoMsg(message: _27.StoreInfo): _27.StoreInfoAminoMsg;
                    fromProtoMsg(message: _27.StoreInfoProtoMsg): _27.StoreInfo;
                    toProto(message: _27.StoreInfo): Uint8Array;
                    toProtoMsg(message: _27.StoreInfo): _27.StoreInfoProtoMsg;
                };
                CommitID: {
                    encode(message: _27.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.CommitID;
                    fromJSON(object: any): _27.CommitID;
                    toJSON(message: _27.CommitID): unknown;
                    fromPartial(object: Partial<_27.CommitID>): _27.CommitID;
                    fromAmino(object: _27.CommitIDAmino): _27.CommitID;
                    toAmino(message: _27.CommitID): _27.CommitIDAmino;
                    fromAminoMsg(object: _27.CommitIDAminoMsg): _27.CommitID;
                    toAminoMsg(message: _27.CommitID): _27.CommitIDAminoMsg;
                    fromProtoMsg(message: _27.CommitIDProtoMsg): _27.CommitID;
                    toProto(message: _27.CommitID): Uint8Array;
                    toProtoMsg(message: _27.CommitID): _27.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _151.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _29.GetNodeInfoRequest): Promise<_29.GetNodeInfoResponse>;
                    getSyncing(request?: _29.GetSyncingRequest): Promise<_29.GetSyncingResponse>;
                    getLatestBlock(request?: _29.GetLatestBlockRequest): Promise<_29.GetLatestBlockResponse>;
                    getBlockByHeight(request: _29.GetBlockByHeightRequest): Promise<_29.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _29.GetLatestValidatorSetRequest): Promise<_29.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _29.GetValidatorSetByHeightRequest): Promise<_29.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _29.ABCIQueryRequest): Promise<_29.ABCIQueryResponse>;
                };
                Block: {
                    encode(message: _30.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Block;
                    fromJSON(object: any): _30.Block;
                    toJSON(message: _30.Block): unknown;
                    fromPartial(object: Partial<_30.Block>): _30.Block;
                    fromAmino(object: _30.BlockAmino): _30.Block;
                    toAmino(message: _30.Block): _30.BlockAmino;
                    fromAminoMsg(object: _30.BlockAminoMsg): _30.Block;
                    toAminoMsg(message: _30.Block): _30.BlockAminoMsg;
                    fromProtoMsg(message: _30.BlockProtoMsg): _30.Block;
                    toProto(message: _30.Block): Uint8Array;
                    toProtoMsg(message: _30.Block): _30.BlockProtoMsg;
                };
                Header: {
                    encode(message: _30.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Header;
                    fromJSON(object: any): _30.Header;
                    toJSON(message: _30.Header): unknown;
                    fromPartial(object: Partial<_30.Header>): _30.Header;
                    fromAmino(object: _30.HeaderAmino): _30.Header;
                    toAmino(message: _30.Header): _30.HeaderAmino;
                    fromAminoMsg(object: _30.HeaderAminoMsg): _30.Header;
                    toAminoMsg(message: _30.Header): _30.HeaderAminoMsg;
                    fromProtoMsg(message: _30.HeaderProtoMsg): _30.Header;
                    toProto(message: _30.Header): Uint8Array;
                    toProtoMsg(message: _30.Header): _30.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _29.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _29.GetValidatorSetByHeightRequest;
                    toJSON(message: _29.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_29.GetValidatorSetByHeightRequest>): _29.GetValidatorSetByHeightRequest;
                    fromAmino(object: _29.GetValidatorSetByHeightRequestAmino): _29.GetValidatorSetByHeightRequest;
                    toAmino(message: _29.GetValidatorSetByHeightRequest): _29.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _29.GetValidatorSetByHeightRequestAminoMsg): _29.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _29.GetValidatorSetByHeightRequest): _29.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _29.GetValidatorSetByHeightRequestProtoMsg): _29.GetValidatorSetByHeightRequest;
                    toProto(message: _29.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _29.GetValidatorSetByHeightRequest): _29.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _29.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _29.GetValidatorSetByHeightResponse;
                    toJSON(message: _29.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_29.GetValidatorSetByHeightResponse>): _29.GetValidatorSetByHeightResponse;
                    fromAmino(object: _29.GetValidatorSetByHeightResponseAmino): _29.GetValidatorSetByHeightResponse;
                    toAmino(message: _29.GetValidatorSetByHeightResponse): _29.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _29.GetValidatorSetByHeightResponseAminoMsg): _29.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _29.GetValidatorSetByHeightResponse): _29.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _29.GetValidatorSetByHeightResponseProtoMsg): _29.GetValidatorSetByHeightResponse;
                    toProto(message: _29.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _29.GetValidatorSetByHeightResponse): _29.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _29.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _29.GetLatestValidatorSetRequest;
                    toJSON(message: _29.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_29.GetLatestValidatorSetRequest>): _29.GetLatestValidatorSetRequest;
                    fromAmino(object: _29.GetLatestValidatorSetRequestAmino): _29.GetLatestValidatorSetRequest;
                    toAmino(message: _29.GetLatestValidatorSetRequest): _29.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _29.GetLatestValidatorSetRequestAminoMsg): _29.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _29.GetLatestValidatorSetRequest): _29.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _29.GetLatestValidatorSetRequestProtoMsg): _29.GetLatestValidatorSetRequest;
                    toProto(message: _29.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _29.GetLatestValidatorSetRequest): _29.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _29.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _29.GetLatestValidatorSetResponse;
                    toJSON(message: _29.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_29.GetLatestValidatorSetResponse>): _29.GetLatestValidatorSetResponse;
                    fromAmino(object: _29.GetLatestValidatorSetResponseAmino): _29.GetLatestValidatorSetResponse;
                    toAmino(message: _29.GetLatestValidatorSetResponse): _29.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _29.GetLatestValidatorSetResponseAminoMsg): _29.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _29.GetLatestValidatorSetResponse): _29.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _29.GetLatestValidatorSetResponseProtoMsg): _29.GetLatestValidatorSetResponse;
                    toProto(message: _29.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _29.GetLatestValidatorSetResponse): _29.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    encode(message: _29.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Validator;
                    fromJSON(object: any): _29.Validator;
                    toJSON(message: _29.Validator): unknown;
                    fromPartial(object: Partial<_29.Validator>): _29.Validator;
                    fromAmino(object: _29.ValidatorAmino): _29.Validator;
                    toAmino(message: _29.Validator): _29.ValidatorAmino;
                    fromAminoMsg(object: _29.ValidatorAminoMsg): _29.Validator;
                    toAminoMsg(message: _29.Validator): _29.ValidatorAminoMsg;
                    fromProtoMsg(message: _29.ValidatorProtoMsg): _29.Validator;
                    toProto(message: _29.Validator): Uint8Array;
                    toProtoMsg(message: _29.Validator): _29.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    encode(message: _29.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetBlockByHeightRequest;
                    fromJSON(object: any): _29.GetBlockByHeightRequest;
                    toJSON(message: _29.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_29.GetBlockByHeightRequest>): _29.GetBlockByHeightRequest;
                    fromAmino(object: _29.GetBlockByHeightRequestAmino): _29.GetBlockByHeightRequest;
                    toAmino(message: _29.GetBlockByHeightRequest): _29.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _29.GetBlockByHeightRequestAminoMsg): _29.GetBlockByHeightRequest;
                    toAminoMsg(message: _29.GetBlockByHeightRequest): _29.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _29.GetBlockByHeightRequestProtoMsg): _29.GetBlockByHeightRequest;
                    toProto(message: _29.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _29.GetBlockByHeightRequest): _29.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    encode(message: _29.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetBlockByHeightResponse;
                    fromJSON(object: any): _29.GetBlockByHeightResponse;
                    toJSON(message: _29.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_29.GetBlockByHeightResponse>): _29.GetBlockByHeightResponse;
                    fromAmino(object: _29.GetBlockByHeightResponseAmino): _29.GetBlockByHeightResponse;
                    toAmino(message: _29.GetBlockByHeightResponse): _29.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _29.GetBlockByHeightResponseAminoMsg): _29.GetBlockByHeightResponse;
                    toAminoMsg(message: _29.GetBlockByHeightResponse): _29.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _29.GetBlockByHeightResponseProtoMsg): _29.GetBlockByHeightResponse;
                    toProto(message: _29.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _29.GetBlockByHeightResponse): _29.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    encode(_: _29.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetLatestBlockRequest;
                    fromJSON(_: any): _29.GetLatestBlockRequest;
                    toJSON(_: _29.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_29.GetLatestBlockRequest>): _29.GetLatestBlockRequest;
                    fromAmino(_: _29.GetLatestBlockRequestAmino): _29.GetLatestBlockRequest;
                    toAmino(_: _29.GetLatestBlockRequest): _29.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _29.GetLatestBlockRequestAminoMsg): _29.GetLatestBlockRequest;
                    toAminoMsg(message: _29.GetLatestBlockRequest): _29.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _29.GetLatestBlockRequestProtoMsg): _29.GetLatestBlockRequest;
                    toProto(message: _29.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _29.GetLatestBlockRequest): _29.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    encode(message: _29.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetLatestBlockResponse;
                    fromJSON(object: any): _29.GetLatestBlockResponse;
                    toJSON(message: _29.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_29.GetLatestBlockResponse>): _29.GetLatestBlockResponse;
                    fromAmino(object: _29.GetLatestBlockResponseAmino): _29.GetLatestBlockResponse;
                    toAmino(message: _29.GetLatestBlockResponse): _29.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _29.GetLatestBlockResponseAminoMsg): _29.GetLatestBlockResponse;
                    toAminoMsg(message: _29.GetLatestBlockResponse): _29.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _29.GetLatestBlockResponseProtoMsg): _29.GetLatestBlockResponse;
                    toProto(message: _29.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _29.GetLatestBlockResponse): _29.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    encode(_: _29.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetSyncingRequest;
                    fromJSON(_: any): _29.GetSyncingRequest;
                    toJSON(_: _29.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_29.GetSyncingRequest>): _29.GetSyncingRequest;
                    fromAmino(_: _29.GetSyncingRequestAmino): _29.GetSyncingRequest;
                    toAmino(_: _29.GetSyncingRequest): _29.GetSyncingRequestAmino;
                    fromAminoMsg(object: _29.GetSyncingRequestAminoMsg): _29.GetSyncingRequest;
                    toAminoMsg(message: _29.GetSyncingRequest): _29.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _29.GetSyncingRequestProtoMsg): _29.GetSyncingRequest;
                    toProto(message: _29.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _29.GetSyncingRequest): _29.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    encode(message: _29.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetSyncingResponse;
                    fromJSON(object: any): _29.GetSyncingResponse;
                    toJSON(message: _29.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_29.GetSyncingResponse>): _29.GetSyncingResponse;
                    fromAmino(object: _29.GetSyncingResponseAmino): _29.GetSyncingResponse;
                    toAmino(message: _29.GetSyncingResponse): _29.GetSyncingResponseAmino;
                    fromAminoMsg(object: _29.GetSyncingResponseAminoMsg): _29.GetSyncingResponse;
                    toAminoMsg(message: _29.GetSyncingResponse): _29.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _29.GetSyncingResponseProtoMsg): _29.GetSyncingResponse;
                    toProto(message: _29.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _29.GetSyncingResponse): _29.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    encode(_: _29.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetNodeInfoRequest;
                    fromJSON(_: any): _29.GetNodeInfoRequest;
                    toJSON(_: _29.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_29.GetNodeInfoRequest>): _29.GetNodeInfoRequest;
                    fromAmino(_: _29.GetNodeInfoRequestAmino): _29.GetNodeInfoRequest;
                    toAmino(_: _29.GetNodeInfoRequest): _29.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _29.GetNodeInfoRequestAminoMsg): _29.GetNodeInfoRequest;
                    toAminoMsg(message: _29.GetNodeInfoRequest): _29.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _29.GetNodeInfoRequestProtoMsg): _29.GetNodeInfoRequest;
                    toProto(message: _29.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _29.GetNodeInfoRequest): _29.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    encode(message: _29.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetNodeInfoResponse;
                    fromJSON(object: any): _29.GetNodeInfoResponse;
                    toJSON(message: _29.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_29.GetNodeInfoResponse>): _29.GetNodeInfoResponse;
                    fromAmino(object: _29.GetNodeInfoResponseAmino): _29.GetNodeInfoResponse;
                    toAmino(message: _29.GetNodeInfoResponse): _29.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _29.GetNodeInfoResponseAminoMsg): _29.GetNodeInfoResponse;
                    toAminoMsg(message: _29.GetNodeInfoResponse): _29.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _29.GetNodeInfoResponseProtoMsg): _29.GetNodeInfoResponse;
                    toProto(message: _29.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _29.GetNodeInfoResponse): _29.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    encode(message: _29.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.VersionInfo;
                    fromJSON(object: any): _29.VersionInfo;
                    toJSON(message: _29.VersionInfo): unknown;
                    fromPartial(object: Partial<_29.VersionInfo>): _29.VersionInfo;
                    fromAmino(object: _29.VersionInfoAmino): _29.VersionInfo;
                    toAmino(message: _29.VersionInfo): _29.VersionInfoAmino;
                    fromAminoMsg(object: _29.VersionInfoAminoMsg): _29.VersionInfo;
                    toAminoMsg(message: _29.VersionInfo): _29.VersionInfoAminoMsg;
                    fromProtoMsg(message: _29.VersionInfoProtoMsg): _29.VersionInfo;
                    toProto(message: _29.VersionInfo): Uint8Array;
                    toProtoMsg(message: _29.VersionInfo): _29.VersionInfoProtoMsg;
                };
                Module: {
                    encode(message: _29.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Module;
                    fromJSON(object: any): _29.Module;
                    toJSON(message: _29.Module): unknown;
                    fromPartial(object: Partial<_29.Module>): _29.Module;
                    fromAmino(object: _29.ModuleAmino): _29.Module;
                    toAmino(message: _29.Module): _29.ModuleAmino;
                    fromAminoMsg(object: _29.ModuleAminoMsg): _29.Module;
                    toAminoMsg(message: _29.Module): _29.ModuleAminoMsg;
                    fromProtoMsg(message: _29.ModuleProtoMsg): _29.Module;
                    toProto(message: _29.Module): Uint8Array;
                    toProtoMsg(message: _29.Module): _29.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    encode(message: _29.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ABCIQueryRequest;
                    fromJSON(object: any): _29.ABCIQueryRequest;
                    toJSON(message: _29.ABCIQueryRequest): unknown;
                    fromPartial(object: Partial<_29.ABCIQueryRequest>): _29.ABCIQueryRequest;
                    fromAmino(object: _29.ABCIQueryRequestAmino): _29.ABCIQueryRequest;
                    toAmino(message: _29.ABCIQueryRequest): _29.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _29.ABCIQueryRequestAminoMsg): _29.ABCIQueryRequest;
                    toAminoMsg(message: _29.ABCIQueryRequest): _29.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _29.ABCIQueryRequestProtoMsg): _29.ABCIQueryRequest;
                    toProto(message: _29.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _29.ABCIQueryRequest): _29.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    encode(message: _29.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ABCIQueryResponse;
                    fromJSON(object: any): _29.ABCIQueryResponse;
                    toJSON(message: _29.ABCIQueryResponse): unknown;
                    fromPartial(object: Partial<_29.ABCIQueryResponse>): _29.ABCIQueryResponse;
                    fromAmino(object: _29.ABCIQueryResponseAmino): _29.ABCIQueryResponse;
                    toAmino(message: _29.ABCIQueryResponse): _29.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _29.ABCIQueryResponseAminoMsg): _29.ABCIQueryResponse;
                    toAminoMsg(message: _29.ABCIQueryResponse): _29.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _29.ABCIQueryResponseProtoMsg): _29.ABCIQueryResponse;
                    toProto(message: _29.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _29.ABCIQueryResponse): _29.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    encode(message: _29.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ProofOp;
                    fromJSON(object: any): _29.ProofOp;
                    toJSON(message: _29.ProofOp): unknown;
                    fromPartial(object: Partial<_29.ProofOp>): _29.ProofOp;
                    fromAmino(object: _29.ProofOpAmino): _29.ProofOp;
                    toAmino(message: _29.ProofOp): _29.ProofOpAmino;
                    fromAminoMsg(object: _29.ProofOpAminoMsg): _29.ProofOp;
                    toAminoMsg(message: _29.ProofOp): _29.ProofOpAminoMsg;
                    fromProtoMsg(message: _29.ProofOpProtoMsg): _29.ProofOp;
                    toProto(message: _29.ProofOp): Uint8Array;
                    toProtoMsg(message: _29.ProofOp): _29.ProofOpProtoMsg;
                };
                ProofOps: {
                    encode(message: _29.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ProofOps;
                    fromJSON(object: any): _29.ProofOps;
                    toJSON(message: _29.ProofOps): unknown;
                    fromPartial(object: Partial<_29.ProofOps>): _29.ProofOps;
                    fromAmino(object: _29.ProofOpsAmino): _29.ProofOps;
                    toAmino(message: _29.ProofOps): _29.ProofOpsAmino;
                    fromAminoMsg(object: _29.ProofOpsAminoMsg): _29.ProofOps;
                    toAminoMsg(message: _29.ProofOps): _29.ProofOpsAminoMsg;
                    fromProtoMsg(message: _29.ProofOpsProtoMsg): _29.ProofOps;
                    toProto(message: _29.ProofOps): Uint8Array;
                    toProtoMsg(message: _29.ProofOps): _29.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _31.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Coin;
                fromJSON(object: any): _31.Coin;
                toJSON(message: _31.Coin): unknown;
                fromPartial(object: Partial<_31.Coin>): _31.Coin;
                fromAmino(object: _31.CoinAmino): _31.Coin;
                toAmino(message: _31.Coin): _31.CoinAmino;
                fromAminoMsg(object: _31.CoinAminoMsg): _31.Coin;
                toAminoMsg(message: _31.Coin): _31.CoinAminoMsg;
                fromProtoMsg(message: _31.CoinProtoMsg): _31.Coin;
                toProto(message: _31.Coin): Uint8Array;
                toProtoMsg(message: _31.Coin): _31.CoinProtoMsg;
            };
            DecCoin: {
                encode(message: _31.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DecCoin;
                fromJSON(object: any): _31.DecCoin;
                toJSON(message: _31.DecCoin): unknown;
                fromPartial(object: Partial<_31.DecCoin>): _31.DecCoin;
                fromAmino(object: _31.DecCoinAmino): _31.DecCoin;
                toAmino(message: _31.DecCoin): _31.DecCoinAmino;
                fromAminoMsg(object: _31.DecCoinAminoMsg): _31.DecCoin;
                toAminoMsg(message: _31.DecCoin): _31.DecCoinAminoMsg;
                fromProtoMsg(message: _31.DecCoinProtoMsg): _31.DecCoin;
                toProto(message: _31.DecCoin): Uint8Array;
                toProtoMsg(message: _31.DecCoin): _31.DecCoinProtoMsg;
            };
            IntProto: {
                encode(message: _31.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.IntProto;
                fromJSON(object: any): _31.IntProto;
                toJSON(message: _31.IntProto): unknown;
                fromPartial(object: Partial<_31.IntProto>): _31.IntProto;
                fromAmino(object: _31.IntProtoAmino): _31.IntProto;
                toAmino(message: _31.IntProto): _31.IntProtoAmino;
                fromAminoMsg(object: _31.IntProtoAminoMsg): _31.IntProto;
                toAminoMsg(message: _31.IntProto): _31.IntProtoAminoMsg;
                fromProtoMsg(message: _31.IntProtoProtoMsg): _31.IntProto;
                toProto(message: _31.IntProto): Uint8Array;
                toProtoMsg(message: _31.IntProto): _31.IntProtoProtoMsg;
            };
            DecProto: {
                encode(message: _31.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DecProto;
                fromJSON(object: any): _31.DecProto;
                toJSON(message: _31.DecProto): unknown;
                fromPartial(object: Partial<_31.DecProto>): _31.DecProto;
                fromAmino(object: _31.DecProtoAmino): _31.DecProto;
                toAmino(message: _31.DecProto): _31.DecProtoAmino;
                fromAminoMsg(object: _31.DecProtoAminoMsg): _31.DecProto;
                toAminoMsg(message: _31.DecProto): _31.DecProtoAminoMsg;
                fromProtoMsg(message: _31.DecProtoProtoMsg): _31.DecProto;
                toProto(message: _31.DecProto): Uint8Array;
                toProtoMsg(message: _31.DecProto): _31.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _33.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GenesisOwners;
                fromJSON(object: any): _33.GenesisOwners;
                toJSON(message: _33.GenesisOwners): unknown;
                fromPartial(object: Partial<_33.GenesisOwners>): _33.GenesisOwners;
                fromAmino(object: _33.GenesisOwnersAmino): _33.GenesisOwners;
                toAmino(message: _33.GenesisOwners): _33.GenesisOwnersAmino;
                fromAminoMsg(object: _33.GenesisOwnersAminoMsg): _33.GenesisOwners;
                toAminoMsg(message: _33.GenesisOwners): _33.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _33.GenesisOwnersProtoMsg): _33.GenesisOwners;
                toProto(message: _33.GenesisOwners): Uint8Array;
                toProtoMsg(message: _33.GenesisOwners): _33.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                encode(message: _33.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GenesisState;
                fromJSON(object: any): _33.GenesisState;
                toJSON(message: _33.GenesisState): unknown;
                fromPartial(object: Partial<_33.GenesisState>): _33.GenesisState;
                fromAmino(object: _33.GenesisStateAmino): _33.GenesisState;
                toAmino(message: _33.GenesisState): _33.GenesisStateAmino;
                fromAminoMsg(object: _33.GenesisStateAminoMsg): _33.GenesisState;
                toAminoMsg(message: _33.GenesisState): _33.GenesisStateAminoMsg;
                fromProtoMsg(message: _33.GenesisStateProtoMsg): _33.GenesisState;
                toProto(message: _33.GenesisState): Uint8Array;
                toProtoMsg(message: _33.GenesisState): _33.GenesisStateProtoMsg;
            };
            Capability: {
                encode(message: _32.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Capability;
                fromJSON(object: any): _32.Capability;
                toJSON(message: _32.Capability): unknown;
                fromPartial(object: Partial<_32.Capability>): _32.Capability;
                fromAmino(object: _32.CapabilityAmino): _32.Capability;
                toAmino(message: _32.Capability): _32.CapabilityAmino;
                fromAminoMsg(object: _32.CapabilityAminoMsg): _32.Capability;
                toAminoMsg(message: _32.Capability): _32.CapabilityAminoMsg;
                fromProtoMsg(message: _32.CapabilityProtoMsg): _32.Capability;
                toProto(message: _32.Capability): Uint8Array;
                toProtoMsg(message: _32.Capability): _32.CapabilityProtoMsg;
            };
            Owner: {
                encode(message: _32.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Owner;
                fromJSON(object: any): _32.Owner;
                toJSON(message: _32.Owner): unknown;
                fromPartial(object: Partial<_32.Owner>): _32.Owner;
                fromAmino(object: _32.OwnerAmino): _32.Owner;
                toAmino(message: _32.Owner): _32.OwnerAmino;
                fromAminoMsg(object: _32.OwnerAminoMsg): _32.Owner;
                toAminoMsg(message: _32.Owner): _32.OwnerAminoMsg;
                fromProtoMsg(message: _32.OwnerProtoMsg): _32.Owner;
                toProto(message: _32.Owner): Uint8Array;
                toProtoMsg(message: _32.Owner): _32.OwnerProtoMsg;
            };
            CapabilityOwners: {
                encode(message: _32.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.CapabilityOwners;
                fromJSON(object: any): _32.CapabilityOwners;
                toJSON(message: _32.CapabilityOwners): unknown;
                fromPartial(object: Partial<_32.CapabilityOwners>): _32.CapabilityOwners;
                fromAmino(object: _32.CapabilityOwnersAmino): _32.CapabilityOwners;
                toAmino(message: _32.CapabilityOwners): _32.CapabilityOwnersAmino;
                fromAminoMsg(object: _32.CapabilityOwnersAminoMsg): _32.CapabilityOwners;
                toAminoMsg(message: _32.CapabilityOwners): _32.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _32.CapabilityOwnersProtoMsg): _32.CapabilityOwners;
                toProto(message: _32.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _32.CapabilityOwners): _32.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _167.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _35.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _35.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _35.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _35.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _35.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _35.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _35.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _35.MsgVerifyInvariant) => _35.MsgVerifyInvariantAmino;
                    fromAmino: (object: _35.MsgVerifyInvariantAmino) => _35.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _35.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgVerifyInvariant;
                fromJSON(object: any): _35.MsgVerifyInvariant;
                toJSON(message: _35.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_35.MsgVerifyInvariant>): _35.MsgVerifyInvariant;
                fromAmino(object: _35.MsgVerifyInvariantAmino): _35.MsgVerifyInvariant;
                toAmino(message: _35.MsgVerifyInvariant): _35.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _35.MsgVerifyInvariantAminoMsg): _35.MsgVerifyInvariant;
                toAminoMsg(message: _35.MsgVerifyInvariant): _35.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _35.MsgVerifyInvariantProtoMsg): _35.MsgVerifyInvariant;
                toProto(message: _35.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _35.MsgVerifyInvariant): _35.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _35.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgVerifyInvariantResponse;
                fromJSON(_: any): _35.MsgVerifyInvariantResponse;
                toJSON(_: _35.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_35.MsgVerifyInvariantResponse>): _35.MsgVerifyInvariantResponse;
                fromAmino(_: _35.MsgVerifyInvariantResponseAmino): _35.MsgVerifyInvariantResponse;
                toAmino(_: _35.MsgVerifyInvariantResponse): _35.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _35.MsgVerifyInvariantResponseAminoMsg): _35.MsgVerifyInvariantResponse;
                toAminoMsg(message: _35.MsgVerifyInvariantResponse): _35.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _35.MsgVerifyInvariantResponseProtoMsg): _35.MsgVerifyInvariantResponse;
                toProto(message: _35.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _35.MsgVerifyInvariantResponse): _35.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
                fromJSON(object: any): _34.GenesisState;
                toJSON(message: _34.GenesisState): unknown;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
                fromAmino(object: _34.GenesisStateAmino): _34.GenesisState;
                toAmino(message: _34.GenesisState): _34.GenesisStateAmino;
                fromAminoMsg(object: _34.GenesisStateAminoMsg): _34.GenesisState;
                toAminoMsg(message: _34.GenesisState): _34.GenesisStateAminoMsg;
                fromProtoMsg(message: _34.GenesisStateProtoMsg): _34.GenesisState;
                toProto(message: _34.GenesisState): Uint8Array;
                toProtoMsg(message: _34.GenesisState): _34.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _36.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PubKey;
                fromJSON(object: any): _36.PubKey;
                toJSON(message: _36.PubKey): unknown;
                fromPartial(object: Partial<_36.PubKey>): _36.PubKey;
                fromAmino(object: _36.PubKeyAmino): _36.PubKey;
                toAmino(message: _36.PubKey): _36.PubKeyAmino;
                fromAminoMsg(object: _36.PubKeyAminoMsg): _36.PubKey;
                toAminoMsg(message: _36.PubKey): _36.PubKeyAminoMsg;
                fromProtoMsg(message: _36.PubKeyProtoMsg): _36.PubKey;
                toProto(message: _36.PubKey): Uint8Array;
                toProtoMsg(message: _36.PubKey): _36.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _36.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PrivKey;
                fromJSON(object: any): _36.PrivKey;
                toJSON(message: _36.PrivKey): unknown;
                fromPartial(object: Partial<_36.PrivKey>): _36.PrivKey;
                fromAmino(object: _36.PrivKeyAmino): _36.PrivKey;
                toAmino(message: _36.PrivKey): _36.PrivKeyAmino;
                fromAminoMsg(object: _36.PrivKeyAminoMsg): _36.PrivKey;
                toAminoMsg(message: _36.PrivKey): _36.PrivKeyAminoMsg;
                fromProtoMsg(message: _36.PrivKeyProtoMsg): _36.PrivKey;
                toProto(message: _36.PrivKey): Uint8Array;
                toProtoMsg(message: _36.PrivKey): _36.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _37.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.BIP44Params;
                    fromJSON(object: any): _37.BIP44Params;
                    toJSON(message: _37.BIP44Params): unknown;
                    fromPartial(object: Partial<_37.BIP44Params>): _37.BIP44Params;
                    fromAmino(object: _37.BIP44ParamsAmino): _37.BIP44Params;
                    toAmino(message: _37.BIP44Params): _37.BIP44ParamsAmino;
                    fromAminoMsg(object: _37.BIP44ParamsAminoMsg): _37.BIP44Params;
                    toAminoMsg(message: _37.BIP44Params): _37.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _37.BIP44ParamsProtoMsg): _37.BIP44Params;
                    toProto(message: _37.BIP44Params): Uint8Array;
                    toProtoMsg(message: _37.BIP44Params): _37.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _38.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Record;
                    fromJSON(object: any): _38.Record;
                    toJSON(message: _38.Record): unknown;
                    fromPartial(object: Partial<_38.Record>): _38.Record;
                    fromAmino(object: _38.RecordAmino): _38.Record;
                    toAmino(message: _38.Record): _38.RecordAmino;
                    fromAminoMsg(object: _38.RecordAminoMsg): _38.Record;
                    toAminoMsg(message: _38.Record): _38.RecordAminoMsg;
                    fromProtoMsg(message: _38.RecordProtoMsg): _38.Record;
                    toProto(message: _38.Record): Uint8Array;
                    toProtoMsg(message: _38.Record): _38.RecordProtoMsg;
                };
                Record_Local: {
                    encode(message: _38.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Record_Local;
                    fromJSON(object: any): _38.Record_Local;
                    toJSON(message: _38.Record_Local): unknown;
                    fromPartial(object: Partial<_38.Record_Local>): _38.Record_Local;
                    fromAmino(object: _38.Record_LocalAmino): _38.Record_Local;
                    toAmino(message: _38.Record_Local): _38.Record_LocalAmino;
                    fromAminoMsg(object: _38.Record_LocalAminoMsg): _38.Record_Local;
                    toAminoMsg(message: _38.Record_Local): _38.Record_LocalAminoMsg;
                    fromProtoMsg(message: _38.Record_LocalProtoMsg): _38.Record_Local;
                    toProto(message: _38.Record_Local): Uint8Array;
                    toProtoMsg(message: _38.Record_Local): _38.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    encode(message: _38.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Record_Ledger;
                    fromJSON(object: any): _38.Record_Ledger;
                    toJSON(message: _38.Record_Ledger): unknown;
                    fromPartial(object: Partial<_38.Record_Ledger>): _38.Record_Ledger;
                    fromAmino(object: _38.Record_LedgerAmino): _38.Record_Ledger;
                    toAmino(message: _38.Record_Ledger): _38.Record_LedgerAmino;
                    fromAminoMsg(object: _38.Record_LedgerAminoMsg): _38.Record_Ledger;
                    toAminoMsg(message: _38.Record_Ledger): _38.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _38.Record_LedgerProtoMsg): _38.Record_Ledger;
                    toProto(message: _38.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _38.Record_Ledger): _38.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    encode(_: _38.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Record_Multi;
                    fromJSON(_: any): _38.Record_Multi;
                    toJSON(_: _38.Record_Multi): unknown;
                    fromPartial(_: Partial<_38.Record_Multi>): _38.Record_Multi;
                    fromAmino(_: _38.Record_MultiAmino): _38.Record_Multi;
                    toAmino(_: _38.Record_Multi): _38.Record_MultiAmino;
                    fromAminoMsg(object: _38.Record_MultiAminoMsg): _38.Record_Multi;
                    toAminoMsg(message: _38.Record_Multi): _38.Record_MultiAminoMsg;
                    fromProtoMsg(message: _38.Record_MultiProtoMsg): _38.Record_Multi;
                    toProto(message: _38.Record_Multi): Uint8Array;
                    toProtoMsg(message: _38.Record_Multi): _38.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    encode(_: _38.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Record_Offline;
                    fromJSON(_: any): _38.Record_Offline;
                    toJSON(_: _38.Record_Offline): unknown;
                    fromPartial(_: Partial<_38.Record_Offline>): _38.Record_Offline;
                    fromAmino(_: _38.Record_OfflineAmino): _38.Record_Offline;
                    toAmino(_: _38.Record_Offline): _38.Record_OfflineAmino;
                    fromAminoMsg(object: _38.Record_OfflineAminoMsg): _38.Record_Offline;
                    toAminoMsg(message: _38.Record_Offline): _38.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _38.Record_OfflineProtoMsg): _38.Record_Offline;
                    toProto(message: _38.Record_Offline): Uint8Array;
                    toProtoMsg(message: _38.Record_Offline): _38.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _39.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.LegacyAminoPubKey;
                fromJSON(object: any): _39.LegacyAminoPubKey;
                toJSON(message: _39.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_39.LegacyAminoPubKey>): _39.LegacyAminoPubKey;
                fromAmino(object: _39.LegacyAminoPubKeyAmino): _39.LegacyAminoPubKey;
                toAmino(message: _39.LegacyAminoPubKey): _39.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _39.LegacyAminoPubKeyAminoMsg): _39.LegacyAminoPubKey;
                toAminoMsg(message: _39.LegacyAminoPubKey): _39.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _39.LegacyAminoPubKeyProtoMsg): _39.LegacyAminoPubKey;
                toProto(message: _39.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _39.LegacyAminoPubKey): _39.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _40.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.PubKey;
                fromJSON(object: any): _40.PubKey;
                toJSON(message: _40.PubKey): unknown;
                fromPartial(object: Partial<_40.PubKey>): _40.PubKey;
                fromAmino(object: _40.PubKeyAmino): _40.PubKey;
                toAmino(message: _40.PubKey): _40.PubKeyAmino;
                fromAminoMsg(object: _40.PubKeyAminoMsg): _40.PubKey;
                toAminoMsg(message: _40.PubKey): _40.PubKeyAminoMsg;
                fromProtoMsg(message: _40.PubKeyProtoMsg): _40.PubKey;
                toProto(message: _40.PubKey): Uint8Array;
                toProtoMsg(message: _40.PubKey): _40.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _40.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.PrivKey;
                fromJSON(object: any): _40.PrivKey;
                toJSON(message: _40.PrivKey): unknown;
                fromPartial(object: Partial<_40.PrivKey>): _40.PrivKey;
                fromAmino(object: _40.PrivKeyAmino): _40.PrivKey;
                toAmino(message: _40.PrivKey): _40.PrivKeyAmino;
                fromAminoMsg(object: _40.PrivKeyAminoMsg): _40.PrivKey;
                toAminoMsg(message: _40.PrivKey): _40.PrivKeyAminoMsg;
                fromProtoMsg(message: _40.PrivKeyProtoMsg): _40.PrivKey;
                toProto(message: _40.PrivKey): Uint8Array;
                toProtoMsg(message: _40.PrivKey): _40.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _41.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.PubKey;
                fromJSON(object: any): _41.PubKey;
                toJSON(message: _41.PubKey): unknown;
                fromPartial(object: Partial<_41.PubKey>): _41.PubKey;
                fromAmino(object: _41.PubKeyAmino): _41.PubKey;
                toAmino(message: _41.PubKey): _41.PubKeyAmino;
                fromAminoMsg(object: _41.PubKeyAminoMsg): _41.PubKey;
                toAminoMsg(message: _41.PubKey): _41.PubKeyAminoMsg;
                fromProtoMsg(message: _41.PubKeyProtoMsg): _41.PubKey;
                toProto(message: _41.PubKey): Uint8Array;
                toProtoMsg(message: _41.PubKey): _41.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _41.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.PrivKey;
                fromJSON(object: any): _41.PrivKey;
                toJSON(message: _41.PrivKey): unknown;
                fromPartial(object: Partial<_41.PrivKey>): _41.PrivKey;
                fromAmino(object: _41.PrivKeyAmino): _41.PrivKey;
                toAmino(message: _41.PrivKey): _41.PrivKeyAmino;
                fromAminoMsg(object: _41.PrivKeyAminoMsg): _41.PrivKey;
                toAminoMsg(message: _41.PrivKey): _41.PrivKeyAminoMsg;
                fromProtoMsg(message: _41.PrivKeyProtoMsg): _41.PrivKey;
                toProto(message: _41.PrivKey): Uint8Array;
                toProtoMsg(message: _41.PrivKey): _41.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _168.MsgClientImpl;
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
                validatorOutstandingRewards(request: _44.QueryValidatorOutstandingRewardsRequest): Promise<_44.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _44.QueryValidatorCommissionRequest): Promise<_44.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _44.QueryValidatorSlashesRequest): Promise<_44.QueryValidatorSlashesResponse>;
                delegationRewards(request: _44.QueryDelegationRewardsRequest): Promise<_44.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _44.QueryDelegationTotalRewardsRequest): Promise<_44.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _44.QueryDelegatorValidatorsRequest): Promise<_44.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _44.QueryDelegatorWithdrawAddressRequest): Promise<_44.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _44.QueryCommunityPoolRequest): Promise<_44.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _45.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _45.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _45.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _45.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _45.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _45.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _45.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _45.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _45.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _45.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _45.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _45.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _45.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _45.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _45.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _45.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _45.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _45.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _45.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _45.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _45.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _45.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _45.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _45.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _45.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _45.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _45.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _45.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _45.MsgSetWithdrawAddress) => _45.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _45.MsgSetWithdrawAddressAmino) => _45.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _45.MsgWithdrawDelegatorReward) => _45.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _45.MsgWithdrawDelegatorRewardAmino) => _45.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _45.MsgWithdrawValidatorCommission) => _45.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _45.MsgWithdrawValidatorCommissionAmino) => _45.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _45.MsgFundCommunityPool) => _45.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _45.MsgFundCommunityPoolAmino) => _45.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _45.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSetWithdrawAddress;
                fromJSON(object: any): _45.MsgSetWithdrawAddress;
                toJSON(message: _45.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_45.MsgSetWithdrawAddress>): _45.MsgSetWithdrawAddress;
                fromAmino(object: _45.MsgSetWithdrawAddressAmino): _45.MsgSetWithdrawAddress;
                toAmino(message: _45.MsgSetWithdrawAddress): _45.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _45.MsgSetWithdrawAddressAminoMsg): _45.MsgSetWithdrawAddress;
                toAminoMsg(message: _45.MsgSetWithdrawAddress): _45.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _45.MsgSetWithdrawAddressProtoMsg): _45.MsgSetWithdrawAddress;
                toProto(message: _45.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _45.MsgSetWithdrawAddress): _45.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _45.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _45.MsgSetWithdrawAddressResponse;
                toJSON(_: _45.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_45.MsgSetWithdrawAddressResponse>): _45.MsgSetWithdrawAddressResponse;
                fromAmino(_: _45.MsgSetWithdrawAddressResponseAmino): _45.MsgSetWithdrawAddressResponse;
                toAmino(_: _45.MsgSetWithdrawAddressResponse): _45.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _45.MsgSetWithdrawAddressResponseAminoMsg): _45.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _45.MsgSetWithdrawAddressResponse): _45.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _45.MsgSetWithdrawAddressResponseProtoMsg): _45.MsgSetWithdrawAddressResponse;
                toProto(message: _45.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _45.MsgSetWithdrawAddressResponse): _45.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _45.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _45.MsgWithdrawDelegatorReward;
                toJSON(message: _45.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_45.MsgWithdrawDelegatorReward>): _45.MsgWithdrawDelegatorReward;
                fromAmino(object: _45.MsgWithdrawDelegatorRewardAmino): _45.MsgWithdrawDelegatorReward;
                toAmino(message: _45.MsgWithdrawDelegatorReward): _45.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _45.MsgWithdrawDelegatorRewardAminoMsg): _45.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _45.MsgWithdrawDelegatorReward): _45.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _45.MsgWithdrawDelegatorRewardProtoMsg): _45.MsgWithdrawDelegatorReward;
                toProto(message: _45.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _45.MsgWithdrawDelegatorReward): _45.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _45.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _45.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _45.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_45.MsgWithdrawDelegatorRewardResponse>): _45.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _45.MsgWithdrawDelegatorRewardResponseAmino): _45.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _45.MsgWithdrawDelegatorRewardResponse): _45.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _45.MsgWithdrawDelegatorRewardResponseAminoMsg): _45.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _45.MsgWithdrawDelegatorRewardResponse): _45.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _45.MsgWithdrawDelegatorRewardResponseProtoMsg): _45.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _45.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _45.MsgWithdrawDelegatorRewardResponse): _45.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _45.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _45.MsgWithdrawValidatorCommission;
                toJSON(message: _45.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_45.MsgWithdrawValidatorCommission>): _45.MsgWithdrawValidatorCommission;
                fromAmino(object: _45.MsgWithdrawValidatorCommissionAmino): _45.MsgWithdrawValidatorCommission;
                toAmino(message: _45.MsgWithdrawValidatorCommission): _45.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _45.MsgWithdrawValidatorCommissionAminoMsg): _45.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _45.MsgWithdrawValidatorCommission): _45.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _45.MsgWithdrawValidatorCommissionProtoMsg): _45.MsgWithdrawValidatorCommission;
                toProto(message: _45.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _45.MsgWithdrawValidatorCommission): _45.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _45.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _45.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _45.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_45.MsgWithdrawValidatorCommissionResponse>): _45.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _45.MsgWithdrawValidatorCommissionResponseAmino): _45.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _45.MsgWithdrawValidatorCommissionResponse): _45.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _45.MsgWithdrawValidatorCommissionResponseAminoMsg): _45.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _45.MsgWithdrawValidatorCommissionResponse): _45.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _45.MsgWithdrawValidatorCommissionResponseProtoMsg): _45.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _45.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _45.MsgWithdrawValidatorCommissionResponse): _45.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                encode(message: _45.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgFundCommunityPool;
                fromJSON(object: any): _45.MsgFundCommunityPool;
                toJSON(message: _45.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_45.MsgFundCommunityPool>): _45.MsgFundCommunityPool;
                fromAmino(object: _45.MsgFundCommunityPoolAmino): _45.MsgFundCommunityPool;
                toAmino(message: _45.MsgFundCommunityPool): _45.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _45.MsgFundCommunityPoolAminoMsg): _45.MsgFundCommunityPool;
                toAminoMsg(message: _45.MsgFundCommunityPool): _45.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _45.MsgFundCommunityPoolProtoMsg): _45.MsgFundCommunityPool;
                toProto(message: _45.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _45.MsgFundCommunityPool): _45.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _45.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _45.MsgFundCommunityPoolResponse;
                toJSON(_: _45.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_45.MsgFundCommunityPoolResponse>): _45.MsgFundCommunityPoolResponse;
                fromAmino(_: _45.MsgFundCommunityPoolResponseAmino): _45.MsgFundCommunityPoolResponse;
                toAmino(_: _45.MsgFundCommunityPoolResponse): _45.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _45.MsgFundCommunityPoolResponseAminoMsg): _45.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _45.MsgFundCommunityPoolResponse): _45.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _45.MsgFundCommunityPoolResponseProtoMsg): _45.MsgFundCommunityPoolResponse;
                toProto(message: _45.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _45.MsgFundCommunityPoolResponse): _45.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _44.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryParamsRequest;
                fromJSON(_: any): _44.QueryParamsRequest;
                toJSON(_: _44.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_44.QueryParamsRequest>): _44.QueryParamsRequest;
                fromAmino(_: _44.QueryParamsRequestAmino): _44.QueryParamsRequest;
                toAmino(_: _44.QueryParamsRequest): _44.QueryParamsRequestAmino;
                fromAminoMsg(object: _44.QueryParamsRequestAminoMsg): _44.QueryParamsRequest;
                toAminoMsg(message: _44.QueryParamsRequest): _44.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryParamsRequestProtoMsg): _44.QueryParamsRequest;
                toProto(message: _44.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryParamsRequest): _44.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _44.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryParamsResponse;
                fromJSON(object: any): _44.QueryParamsResponse;
                toJSON(message: _44.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_44.QueryParamsResponse>): _44.QueryParamsResponse;
                fromAmino(object: _44.QueryParamsResponseAmino): _44.QueryParamsResponse;
                toAmino(message: _44.QueryParamsResponse): _44.QueryParamsResponseAmino;
                fromAminoMsg(object: _44.QueryParamsResponseAminoMsg): _44.QueryParamsResponse;
                toAminoMsg(message: _44.QueryParamsResponse): _44.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryParamsResponseProtoMsg): _44.QueryParamsResponse;
                toProto(message: _44.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryParamsResponse): _44.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _44.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _44.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _44.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_44.QueryValidatorOutstandingRewardsRequest>): _44.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _44.QueryValidatorOutstandingRewardsRequestAmino): _44.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _44.QueryValidatorOutstandingRewardsRequest): _44.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _44.QueryValidatorOutstandingRewardsRequestAminoMsg): _44.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _44.QueryValidatorOutstandingRewardsRequest): _44.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorOutstandingRewardsRequestProtoMsg): _44.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _44.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorOutstandingRewardsRequest): _44.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _44.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _44.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _44.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_44.QueryValidatorOutstandingRewardsResponse>): _44.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _44.QueryValidatorOutstandingRewardsResponseAmino): _44.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _44.QueryValidatorOutstandingRewardsResponse): _44.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _44.QueryValidatorOutstandingRewardsResponseAminoMsg): _44.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _44.QueryValidatorOutstandingRewardsResponse): _44.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorOutstandingRewardsResponseProtoMsg): _44.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _44.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorOutstandingRewardsResponse): _44.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _44.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorCommissionRequest;
                fromJSON(object: any): _44.QueryValidatorCommissionRequest;
                toJSON(message: _44.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_44.QueryValidatorCommissionRequest>): _44.QueryValidatorCommissionRequest;
                fromAmino(object: _44.QueryValidatorCommissionRequestAmino): _44.QueryValidatorCommissionRequest;
                toAmino(message: _44.QueryValidatorCommissionRequest): _44.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _44.QueryValidatorCommissionRequestAminoMsg): _44.QueryValidatorCommissionRequest;
                toAminoMsg(message: _44.QueryValidatorCommissionRequest): _44.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorCommissionRequestProtoMsg): _44.QueryValidatorCommissionRequest;
                toProto(message: _44.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorCommissionRequest): _44.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _44.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorCommissionResponse;
                fromJSON(object: any): _44.QueryValidatorCommissionResponse;
                toJSON(message: _44.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_44.QueryValidatorCommissionResponse>): _44.QueryValidatorCommissionResponse;
                fromAmino(object: _44.QueryValidatorCommissionResponseAmino): _44.QueryValidatorCommissionResponse;
                toAmino(message: _44.QueryValidatorCommissionResponse): _44.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _44.QueryValidatorCommissionResponseAminoMsg): _44.QueryValidatorCommissionResponse;
                toAminoMsg(message: _44.QueryValidatorCommissionResponse): _44.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorCommissionResponseProtoMsg): _44.QueryValidatorCommissionResponse;
                toProto(message: _44.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorCommissionResponse): _44.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _44.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorSlashesRequest;
                fromJSON(object: any): _44.QueryValidatorSlashesRequest;
                toJSON(message: _44.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_44.QueryValidatorSlashesRequest>): _44.QueryValidatorSlashesRequest;
                fromAmino(object: _44.QueryValidatorSlashesRequestAmino): _44.QueryValidatorSlashesRequest;
                toAmino(message: _44.QueryValidatorSlashesRequest): _44.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _44.QueryValidatorSlashesRequestAminoMsg): _44.QueryValidatorSlashesRequest;
                toAminoMsg(message: _44.QueryValidatorSlashesRequest): _44.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorSlashesRequestProtoMsg): _44.QueryValidatorSlashesRequest;
                toProto(message: _44.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorSlashesRequest): _44.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _44.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorSlashesResponse;
                fromJSON(object: any): _44.QueryValidatorSlashesResponse;
                toJSON(message: _44.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_44.QueryValidatorSlashesResponse>): _44.QueryValidatorSlashesResponse;
                fromAmino(object: _44.QueryValidatorSlashesResponseAmino): _44.QueryValidatorSlashesResponse;
                toAmino(message: _44.QueryValidatorSlashesResponse): _44.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _44.QueryValidatorSlashesResponseAminoMsg): _44.QueryValidatorSlashesResponse;
                toAminoMsg(message: _44.QueryValidatorSlashesResponse): _44.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorSlashesResponseProtoMsg): _44.QueryValidatorSlashesResponse;
                toProto(message: _44.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorSlashesResponse): _44.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _44.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegationRewardsRequest;
                fromJSON(object: any): _44.QueryDelegationRewardsRequest;
                toJSON(message: _44.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_44.QueryDelegationRewardsRequest>): _44.QueryDelegationRewardsRequest;
                fromAmino(object: _44.QueryDelegationRewardsRequestAmino): _44.QueryDelegationRewardsRequest;
                toAmino(message: _44.QueryDelegationRewardsRequest): _44.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _44.QueryDelegationRewardsRequestAminoMsg): _44.QueryDelegationRewardsRequest;
                toAminoMsg(message: _44.QueryDelegationRewardsRequest): _44.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDelegationRewardsRequestProtoMsg): _44.QueryDelegationRewardsRequest;
                toProto(message: _44.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDelegationRewardsRequest): _44.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _44.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegationRewardsResponse;
                fromJSON(object: any): _44.QueryDelegationRewardsResponse;
                toJSON(message: _44.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_44.QueryDelegationRewardsResponse>): _44.QueryDelegationRewardsResponse;
                fromAmino(object: _44.QueryDelegationRewardsResponseAmino): _44.QueryDelegationRewardsResponse;
                toAmino(message: _44.QueryDelegationRewardsResponse): _44.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _44.QueryDelegationRewardsResponseAminoMsg): _44.QueryDelegationRewardsResponse;
                toAminoMsg(message: _44.QueryDelegationRewardsResponse): _44.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDelegationRewardsResponseProtoMsg): _44.QueryDelegationRewardsResponse;
                toProto(message: _44.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDelegationRewardsResponse): _44.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _44.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _44.QueryDelegationTotalRewardsRequest;
                toJSON(message: _44.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_44.QueryDelegationTotalRewardsRequest>): _44.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _44.QueryDelegationTotalRewardsRequestAmino): _44.QueryDelegationTotalRewardsRequest;
                toAmino(message: _44.QueryDelegationTotalRewardsRequest): _44.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _44.QueryDelegationTotalRewardsRequestAminoMsg): _44.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _44.QueryDelegationTotalRewardsRequest): _44.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDelegationTotalRewardsRequestProtoMsg): _44.QueryDelegationTotalRewardsRequest;
                toProto(message: _44.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDelegationTotalRewardsRequest): _44.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _44.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _44.QueryDelegationTotalRewardsResponse;
                toJSON(message: _44.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_44.QueryDelegationTotalRewardsResponse>): _44.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _44.QueryDelegationTotalRewardsResponseAmino): _44.QueryDelegationTotalRewardsResponse;
                toAmino(message: _44.QueryDelegationTotalRewardsResponse): _44.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _44.QueryDelegationTotalRewardsResponseAminoMsg): _44.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _44.QueryDelegationTotalRewardsResponse): _44.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDelegationTotalRewardsResponseProtoMsg): _44.QueryDelegationTotalRewardsResponse;
                toProto(message: _44.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDelegationTotalRewardsResponse): _44.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _44.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _44.QueryDelegatorValidatorsRequest;
                toJSON(message: _44.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_44.QueryDelegatorValidatorsRequest>): _44.QueryDelegatorValidatorsRequest;
                fromAmino(object: _44.QueryDelegatorValidatorsRequestAmino): _44.QueryDelegatorValidatorsRequest;
                toAmino(message: _44.QueryDelegatorValidatorsRequest): _44.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _44.QueryDelegatorValidatorsRequestAminoMsg): _44.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _44.QueryDelegatorValidatorsRequest): _44.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorValidatorsRequestProtoMsg): _44.QueryDelegatorValidatorsRequest;
                toProto(message: _44.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorValidatorsRequest): _44.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _44.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _44.QueryDelegatorValidatorsResponse;
                toJSON(message: _44.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_44.QueryDelegatorValidatorsResponse>): _44.QueryDelegatorValidatorsResponse;
                fromAmino(object: _44.QueryDelegatorValidatorsResponseAmino): _44.QueryDelegatorValidatorsResponse;
                toAmino(message: _44.QueryDelegatorValidatorsResponse): _44.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _44.QueryDelegatorValidatorsResponseAminoMsg): _44.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _44.QueryDelegatorValidatorsResponse): _44.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorValidatorsResponseProtoMsg): _44.QueryDelegatorValidatorsResponse;
                toProto(message: _44.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorValidatorsResponse): _44.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _44.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _44.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _44.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_44.QueryDelegatorWithdrawAddressRequest>): _44.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _44.QueryDelegatorWithdrawAddressRequestAmino): _44.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _44.QueryDelegatorWithdrawAddressRequest): _44.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _44.QueryDelegatorWithdrawAddressRequestAminoMsg): _44.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _44.QueryDelegatorWithdrawAddressRequest): _44.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorWithdrawAddressRequestProtoMsg): _44.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _44.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorWithdrawAddressRequest): _44.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _44.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _44.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _44.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_44.QueryDelegatorWithdrawAddressResponse>): _44.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _44.QueryDelegatorWithdrawAddressResponseAmino): _44.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _44.QueryDelegatorWithdrawAddressResponse): _44.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _44.QueryDelegatorWithdrawAddressResponseAminoMsg): _44.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _44.QueryDelegatorWithdrawAddressResponse): _44.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorWithdrawAddressResponseProtoMsg): _44.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _44.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorWithdrawAddressResponse): _44.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                encode(_: _44.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryCommunityPoolRequest;
                fromJSON(_: any): _44.QueryCommunityPoolRequest;
                toJSON(_: _44.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_44.QueryCommunityPoolRequest>): _44.QueryCommunityPoolRequest;
                fromAmino(_: _44.QueryCommunityPoolRequestAmino): _44.QueryCommunityPoolRequest;
                toAmino(_: _44.QueryCommunityPoolRequest): _44.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _44.QueryCommunityPoolRequestAminoMsg): _44.QueryCommunityPoolRequest;
                toAminoMsg(message: _44.QueryCommunityPoolRequest): _44.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _44.QueryCommunityPoolRequestProtoMsg): _44.QueryCommunityPoolRequest;
                toProto(message: _44.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _44.QueryCommunityPoolRequest): _44.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                encode(message: _44.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryCommunityPoolResponse;
                fromJSON(object: any): _44.QueryCommunityPoolResponse;
                toJSON(message: _44.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_44.QueryCommunityPoolResponse>): _44.QueryCommunityPoolResponse;
                fromAmino(object: _44.QueryCommunityPoolResponseAmino): _44.QueryCommunityPoolResponse;
                toAmino(message: _44.QueryCommunityPoolResponse): _44.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _44.QueryCommunityPoolResponseAminoMsg): _44.QueryCommunityPoolResponse;
                toAminoMsg(message: _44.QueryCommunityPoolResponse): _44.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _44.QueryCommunityPoolResponseProtoMsg): _44.QueryCommunityPoolResponse;
                toProto(message: _44.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _44.QueryCommunityPoolResponse): _44.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                encode(message: _43.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.DelegatorWithdrawInfo;
                fromJSON(object: any): _43.DelegatorWithdrawInfo;
                toJSON(message: _43.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_43.DelegatorWithdrawInfo>): _43.DelegatorWithdrawInfo;
                fromAmino(object: _43.DelegatorWithdrawInfoAmino): _43.DelegatorWithdrawInfo;
                toAmino(message: _43.DelegatorWithdrawInfo): _43.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _43.DelegatorWithdrawInfoAminoMsg): _43.DelegatorWithdrawInfo;
                toAminoMsg(message: _43.DelegatorWithdrawInfo): _43.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _43.DelegatorWithdrawInfoProtoMsg): _43.DelegatorWithdrawInfo;
                toProto(message: _43.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _43.DelegatorWithdrawInfo): _43.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _43.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _43.ValidatorOutstandingRewardsRecord;
                toJSON(message: _43.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_43.ValidatorOutstandingRewardsRecord>): _43.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _43.ValidatorOutstandingRewardsRecordAmino): _43.ValidatorOutstandingRewardsRecord;
                toAmino(message: _43.ValidatorOutstandingRewardsRecord): _43.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _43.ValidatorOutstandingRewardsRecordAminoMsg): _43.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _43.ValidatorOutstandingRewardsRecord): _43.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _43.ValidatorOutstandingRewardsRecordProtoMsg): _43.ValidatorOutstandingRewardsRecord;
                toProto(message: _43.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _43.ValidatorOutstandingRewardsRecord): _43.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _43.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _43.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _43.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_43.ValidatorAccumulatedCommissionRecord>): _43.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _43.ValidatorAccumulatedCommissionRecordAmino): _43.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _43.ValidatorAccumulatedCommissionRecord): _43.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _43.ValidatorAccumulatedCommissionRecordAminoMsg): _43.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _43.ValidatorAccumulatedCommissionRecord): _43.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _43.ValidatorAccumulatedCommissionRecordProtoMsg): _43.ValidatorAccumulatedCommissionRecord;
                toProto(message: _43.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _43.ValidatorAccumulatedCommissionRecord): _43.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _43.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _43.ValidatorHistoricalRewardsRecord;
                toJSON(message: _43.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_43.ValidatorHistoricalRewardsRecord>): _43.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _43.ValidatorHistoricalRewardsRecordAmino): _43.ValidatorHistoricalRewardsRecord;
                toAmino(message: _43.ValidatorHistoricalRewardsRecord): _43.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _43.ValidatorHistoricalRewardsRecordAminoMsg): _43.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _43.ValidatorHistoricalRewardsRecord): _43.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _43.ValidatorHistoricalRewardsRecordProtoMsg): _43.ValidatorHistoricalRewardsRecord;
                toProto(message: _43.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _43.ValidatorHistoricalRewardsRecord): _43.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _43.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _43.ValidatorCurrentRewardsRecord;
                toJSON(message: _43.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_43.ValidatorCurrentRewardsRecord>): _43.ValidatorCurrentRewardsRecord;
                fromAmino(object: _43.ValidatorCurrentRewardsRecordAmino): _43.ValidatorCurrentRewardsRecord;
                toAmino(message: _43.ValidatorCurrentRewardsRecord): _43.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _43.ValidatorCurrentRewardsRecordAminoMsg): _43.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _43.ValidatorCurrentRewardsRecord): _43.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _43.ValidatorCurrentRewardsRecordProtoMsg): _43.ValidatorCurrentRewardsRecord;
                toProto(message: _43.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _43.ValidatorCurrentRewardsRecord): _43.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _43.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.DelegatorStartingInfoRecord;
                fromJSON(object: any): _43.DelegatorStartingInfoRecord;
                toJSON(message: _43.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_43.DelegatorStartingInfoRecord>): _43.DelegatorStartingInfoRecord;
                fromAmino(object: _43.DelegatorStartingInfoRecordAmino): _43.DelegatorStartingInfoRecord;
                toAmino(message: _43.DelegatorStartingInfoRecord): _43.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _43.DelegatorStartingInfoRecordAminoMsg): _43.DelegatorStartingInfoRecord;
                toAminoMsg(message: _43.DelegatorStartingInfoRecord): _43.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _43.DelegatorStartingInfoRecordProtoMsg): _43.DelegatorStartingInfoRecord;
                toProto(message: _43.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _43.DelegatorStartingInfoRecord): _43.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                encode(message: _43.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ValidatorSlashEventRecord;
                fromJSON(object: any): _43.ValidatorSlashEventRecord;
                toJSON(message: _43.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_43.ValidatorSlashEventRecord>): _43.ValidatorSlashEventRecord;
                fromAmino(object: _43.ValidatorSlashEventRecordAmino): _43.ValidatorSlashEventRecord;
                toAmino(message: _43.ValidatorSlashEventRecord): _43.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _43.ValidatorSlashEventRecordAminoMsg): _43.ValidatorSlashEventRecord;
                toAminoMsg(message: _43.ValidatorSlashEventRecord): _43.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _43.ValidatorSlashEventRecordProtoMsg): _43.ValidatorSlashEventRecord;
                toProto(message: _43.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _43.ValidatorSlashEventRecord): _43.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                encode(message: _43.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GenesisState;
                fromJSON(object: any): _43.GenesisState;
                toJSON(message: _43.GenesisState): unknown;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
                fromAmino(object: _43.GenesisStateAmino): _43.GenesisState;
                toAmino(message: _43.GenesisState): _43.GenesisStateAmino;
                fromAminoMsg(object: _43.GenesisStateAminoMsg): _43.GenesisState;
                toAminoMsg(message: _43.GenesisState): _43.GenesisStateAminoMsg;
                fromProtoMsg(message: _43.GenesisStateProtoMsg): _43.GenesisState;
                toProto(message: _43.GenesisState): Uint8Array;
                toProtoMsg(message: _43.GenesisState): _43.GenesisStateProtoMsg;
            };
            Params: {
                encode(message: _42.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Params;
                fromJSON(object: any): _42.Params;
                toJSON(message: _42.Params): unknown;
                fromPartial(object: Partial<_42.Params>): _42.Params;
                fromAmino(object: _42.ParamsAmino): _42.Params;
                toAmino(message: _42.Params): _42.ParamsAmino;
                fromAminoMsg(object: _42.ParamsAminoMsg): _42.Params;
                toAminoMsg(message: _42.Params): _42.ParamsAminoMsg;
                fromProtoMsg(message: _42.ParamsProtoMsg): _42.Params;
                toProto(message: _42.Params): Uint8Array;
                toProtoMsg(message: _42.Params): _42.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                encode(message: _42.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ValidatorHistoricalRewards;
                fromJSON(object: any): _42.ValidatorHistoricalRewards;
                toJSON(message: _42.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_42.ValidatorHistoricalRewards>): _42.ValidatorHistoricalRewards;
                fromAmino(object: _42.ValidatorHistoricalRewardsAmino): _42.ValidatorHistoricalRewards;
                toAmino(message: _42.ValidatorHistoricalRewards): _42.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _42.ValidatorHistoricalRewardsAminoMsg): _42.ValidatorHistoricalRewards;
                toAminoMsg(message: _42.ValidatorHistoricalRewards): _42.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _42.ValidatorHistoricalRewardsProtoMsg): _42.ValidatorHistoricalRewards;
                toProto(message: _42.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _42.ValidatorHistoricalRewards): _42.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                encode(message: _42.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ValidatorCurrentRewards;
                fromJSON(object: any): _42.ValidatorCurrentRewards;
                toJSON(message: _42.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_42.ValidatorCurrentRewards>): _42.ValidatorCurrentRewards;
                fromAmino(object: _42.ValidatorCurrentRewardsAmino): _42.ValidatorCurrentRewards;
                toAmino(message: _42.ValidatorCurrentRewards): _42.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _42.ValidatorCurrentRewardsAminoMsg): _42.ValidatorCurrentRewards;
                toAminoMsg(message: _42.ValidatorCurrentRewards): _42.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _42.ValidatorCurrentRewardsProtoMsg): _42.ValidatorCurrentRewards;
                toProto(message: _42.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _42.ValidatorCurrentRewards): _42.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _42.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ValidatorAccumulatedCommission;
                fromJSON(object: any): _42.ValidatorAccumulatedCommission;
                toJSON(message: _42.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_42.ValidatorAccumulatedCommission>): _42.ValidatorAccumulatedCommission;
                fromAmino(object: _42.ValidatorAccumulatedCommissionAmino): _42.ValidatorAccumulatedCommission;
                toAmino(message: _42.ValidatorAccumulatedCommission): _42.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _42.ValidatorAccumulatedCommissionAminoMsg): _42.ValidatorAccumulatedCommission;
                toAminoMsg(message: _42.ValidatorAccumulatedCommission): _42.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _42.ValidatorAccumulatedCommissionProtoMsg): _42.ValidatorAccumulatedCommission;
                toProto(message: _42.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _42.ValidatorAccumulatedCommission): _42.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                encode(message: _42.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ValidatorOutstandingRewards;
                fromJSON(object: any): _42.ValidatorOutstandingRewards;
                toJSON(message: _42.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_42.ValidatorOutstandingRewards>): _42.ValidatorOutstandingRewards;
                fromAmino(object: _42.ValidatorOutstandingRewardsAmino): _42.ValidatorOutstandingRewards;
                toAmino(message: _42.ValidatorOutstandingRewards): _42.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _42.ValidatorOutstandingRewardsAminoMsg): _42.ValidatorOutstandingRewards;
                toAminoMsg(message: _42.ValidatorOutstandingRewards): _42.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _42.ValidatorOutstandingRewardsProtoMsg): _42.ValidatorOutstandingRewards;
                toProto(message: _42.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _42.ValidatorOutstandingRewards): _42.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                encode(message: _42.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ValidatorSlashEvent;
                fromJSON(object: any): _42.ValidatorSlashEvent;
                toJSON(message: _42.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_42.ValidatorSlashEvent>): _42.ValidatorSlashEvent;
                fromAmino(object: _42.ValidatorSlashEventAmino): _42.ValidatorSlashEvent;
                toAmino(message: _42.ValidatorSlashEvent): _42.ValidatorSlashEventAmino;
                fromAminoMsg(object: _42.ValidatorSlashEventAminoMsg): _42.ValidatorSlashEvent;
                toAminoMsg(message: _42.ValidatorSlashEvent): _42.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _42.ValidatorSlashEventProtoMsg): _42.ValidatorSlashEvent;
                toProto(message: _42.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _42.ValidatorSlashEvent): _42.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                encode(message: _42.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ValidatorSlashEvents;
                fromJSON(object: any): _42.ValidatorSlashEvents;
                toJSON(message: _42.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_42.ValidatorSlashEvents>): _42.ValidatorSlashEvents;
                fromAmino(object: _42.ValidatorSlashEventsAmino): _42.ValidatorSlashEvents;
                toAmino(message: _42.ValidatorSlashEvents): _42.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _42.ValidatorSlashEventsAminoMsg): _42.ValidatorSlashEvents;
                toAminoMsg(message: _42.ValidatorSlashEvents): _42.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _42.ValidatorSlashEventsProtoMsg): _42.ValidatorSlashEvents;
                toProto(message: _42.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _42.ValidatorSlashEvents): _42.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                encode(message: _42.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.FeePool;
                fromJSON(object: any): _42.FeePool;
                toJSON(message: _42.FeePool): unknown;
                fromPartial(object: Partial<_42.FeePool>): _42.FeePool;
                fromAmino(object: _42.FeePoolAmino): _42.FeePool;
                toAmino(message: _42.FeePool): _42.FeePoolAmino;
                fromAminoMsg(object: _42.FeePoolAminoMsg): _42.FeePool;
                toAminoMsg(message: _42.FeePool): _42.FeePoolAminoMsg;
                fromProtoMsg(message: _42.FeePoolProtoMsg): _42.FeePool;
                toProto(message: _42.FeePool): Uint8Array;
                toProtoMsg(message: _42.FeePool): _42.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                encode(message: _42.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.CommunityPoolSpendProposal;
                fromJSON(object: any): _42.CommunityPoolSpendProposal;
                toJSON(message: _42.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_42.CommunityPoolSpendProposal>): _42.CommunityPoolSpendProposal;
                fromAmino(object: _42.CommunityPoolSpendProposalAmino): _42.CommunityPoolSpendProposal;
                toAmino(message: _42.CommunityPoolSpendProposal): _42.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _42.CommunityPoolSpendProposalAminoMsg): _42.CommunityPoolSpendProposal;
                toAminoMsg(message: _42.CommunityPoolSpendProposal): _42.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _42.CommunityPoolSpendProposalProtoMsg): _42.CommunityPoolSpendProposal;
                toProto(message: _42.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _42.CommunityPoolSpendProposal): _42.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                encode(message: _42.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.DelegatorStartingInfo;
                fromJSON(object: any): _42.DelegatorStartingInfo;
                toJSON(message: _42.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_42.DelegatorStartingInfo>): _42.DelegatorStartingInfo;
                fromAmino(object: _42.DelegatorStartingInfoAmino): _42.DelegatorStartingInfo;
                toAmino(message: _42.DelegatorStartingInfo): _42.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _42.DelegatorStartingInfoAminoMsg): _42.DelegatorStartingInfo;
                toAminoMsg(message: _42.DelegatorStartingInfo): _42.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _42.DelegatorStartingInfoProtoMsg): _42.DelegatorStartingInfo;
                toProto(message: _42.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _42.DelegatorStartingInfo): _42.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                encode(message: _42.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.DelegationDelegatorReward;
                fromJSON(object: any): _42.DelegationDelegatorReward;
                toJSON(message: _42.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_42.DelegationDelegatorReward>): _42.DelegationDelegatorReward;
                fromAmino(object: _42.DelegationDelegatorRewardAmino): _42.DelegationDelegatorReward;
                toAmino(message: _42.DelegationDelegatorReward): _42.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _42.DelegationDelegatorRewardAminoMsg): _42.DelegationDelegatorReward;
                toAminoMsg(message: _42.DelegationDelegatorReward): _42.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _42.DelegationDelegatorRewardProtoMsg): _42.DelegationDelegatorReward;
                toProto(message: _42.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _42.DelegationDelegatorReward): _42.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _42.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _42.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _42.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_42.CommunityPoolSpendProposalWithDeposit>): _42.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _42.CommunityPoolSpendProposalWithDepositAmino): _42.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _42.CommunityPoolSpendProposalWithDeposit): _42.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _42.CommunityPoolSpendProposalWithDepositAminoMsg): _42.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _42.CommunityPoolSpendProposalWithDeposit): _42.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _42.CommunityPoolSpendProposalWithDepositProtoMsg): _42.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _42.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _42.CommunityPoolSpendProposalWithDeposit): _42.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _169.MsgClientImpl;
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _48.QueryEvidenceRequest): Promise<_48.QueryEvidenceResponse>;
                allEvidence(request?: _48.QueryAllEvidenceRequest): Promise<_48.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _49.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _49.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _49.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _49.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _49.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _49.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _49.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _49.MsgSubmitEvidence) => _49.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _49.MsgSubmitEvidenceAmino) => _49.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _49.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgSubmitEvidence;
                fromJSON(object: any): _49.MsgSubmitEvidence;
                toJSON(message: _49.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_49.MsgSubmitEvidence>): _49.MsgSubmitEvidence;
                fromAmino(object: _49.MsgSubmitEvidenceAmino): _49.MsgSubmitEvidence;
                toAmino(message: _49.MsgSubmitEvidence): _49.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _49.MsgSubmitEvidenceAminoMsg): _49.MsgSubmitEvidence;
                toAminoMsg(message: _49.MsgSubmitEvidence): _49.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _49.MsgSubmitEvidenceProtoMsg): _49.MsgSubmitEvidence;
                toProto(message: _49.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _49.MsgSubmitEvidence): _49.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _49.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _49.MsgSubmitEvidenceResponse;
                toJSON(message: _49.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_49.MsgSubmitEvidenceResponse>): _49.MsgSubmitEvidenceResponse;
                fromAmino(object: _49.MsgSubmitEvidenceResponseAmino): _49.MsgSubmitEvidenceResponse;
                toAmino(message: _49.MsgSubmitEvidenceResponse): _49.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _49.MsgSubmitEvidenceResponseAminoMsg): _49.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _49.MsgSubmitEvidenceResponse): _49.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _49.MsgSubmitEvidenceResponseProtoMsg): _49.MsgSubmitEvidenceResponse;
                toProto(message: _49.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _49.MsgSubmitEvidenceResponse): _49.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                encode(message: _48.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryEvidenceRequest;
                fromJSON(object: any): _48.QueryEvidenceRequest;
                toJSON(message: _48.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_48.QueryEvidenceRequest>): _48.QueryEvidenceRequest;
                fromAmino(object: _48.QueryEvidenceRequestAmino): _48.QueryEvidenceRequest;
                toAmino(message: _48.QueryEvidenceRequest): _48.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _48.QueryEvidenceRequestAminoMsg): _48.QueryEvidenceRequest;
                toAminoMsg(message: _48.QueryEvidenceRequest): _48.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _48.QueryEvidenceRequestProtoMsg): _48.QueryEvidenceRequest;
                toProto(message: _48.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _48.QueryEvidenceRequest): _48.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                encode(message: _48.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryEvidenceResponse;
                fromJSON(object: any): _48.QueryEvidenceResponse;
                toJSON(message: _48.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_48.QueryEvidenceResponse>): _48.QueryEvidenceResponse;
                fromAmino(object: _48.QueryEvidenceResponseAmino): _48.QueryEvidenceResponse;
                toAmino(message: _48.QueryEvidenceResponse): _48.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _48.QueryEvidenceResponseAminoMsg): _48.QueryEvidenceResponse;
                toAminoMsg(message: _48.QueryEvidenceResponse): _48.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _48.QueryEvidenceResponseProtoMsg): _48.QueryEvidenceResponse;
                toProto(message: _48.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _48.QueryEvidenceResponse): _48.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                encode(message: _48.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllEvidenceRequest;
                fromJSON(object: any): _48.QueryAllEvidenceRequest;
                toJSON(message: _48.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_48.QueryAllEvidenceRequest>): _48.QueryAllEvidenceRequest;
                fromAmino(object: _48.QueryAllEvidenceRequestAmino): _48.QueryAllEvidenceRequest;
                toAmino(message: _48.QueryAllEvidenceRequest): _48.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _48.QueryAllEvidenceRequestAminoMsg): _48.QueryAllEvidenceRequest;
                toAminoMsg(message: _48.QueryAllEvidenceRequest): _48.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _48.QueryAllEvidenceRequestProtoMsg): _48.QueryAllEvidenceRequest;
                toProto(message: _48.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _48.QueryAllEvidenceRequest): _48.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                encode(message: _48.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllEvidenceResponse;
                fromJSON(object: any): _48.QueryAllEvidenceResponse;
                toJSON(message: _48.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_48.QueryAllEvidenceResponse>): _48.QueryAllEvidenceResponse;
                fromAmino(object: _48.QueryAllEvidenceResponseAmino): _48.QueryAllEvidenceResponse;
                toAmino(message: _48.QueryAllEvidenceResponse): _48.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _48.QueryAllEvidenceResponseAminoMsg): _48.QueryAllEvidenceResponse;
                toAminoMsg(message: _48.QueryAllEvidenceResponse): _48.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _48.QueryAllEvidenceResponseProtoMsg): _48.QueryAllEvidenceResponse;
                toProto(message: _48.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _48.QueryAllEvidenceResponse): _48.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GenesisState;
                fromJSON(object: any): _47.GenesisState;
                toJSON(message: _47.GenesisState): unknown;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
                fromAmino(object: _47.GenesisStateAmino): _47.GenesisState;
                toAmino(message: _47.GenesisState): _47.GenesisStateAmino;
                fromAminoMsg(object: _47.GenesisStateAminoMsg): _47.GenesisState;
                toAminoMsg(message: _47.GenesisState): _47.GenesisStateAminoMsg;
                fromProtoMsg(message: _47.GenesisStateProtoMsg): _47.GenesisState;
                toProto(message: _47.GenesisState): Uint8Array;
                toProtoMsg(message: _47.GenesisState): _47.GenesisStateProtoMsg;
            };
            Equivocation: {
                encode(message: _46.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Equivocation;
                fromJSON(object: any): _46.Equivocation;
                toJSON(message: _46.Equivocation): unknown;
                fromPartial(object: Partial<_46.Equivocation>): _46.Equivocation;
                fromAmino(object: _46.EquivocationAmino): _46.Equivocation;
                toAmino(message: _46.Equivocation): _46.EquivocationAmino;
                fromAminoMsg(object: _46.EquivocationAminoMsg): _46.Equivocation;
                toAminoMsg(message: _46.Equivocation): _46.EquivocationAminoMsg;
                fromProtoMsg(message: _46.EquivocationProtoMsg): _46.Equivocation;
                toProto(message: _46.Equivocation): Uint8Array;
                toProtoMsg(message: _46.Equivocation): _46.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _170.MsgClientImpl;
            QueryClientImpl: typeof _154.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _52.QueryAllowanceRequest): Promise<_52.QueryAllowanceResponse>;
                allowances(request: _52.QueryAllowancesRequest): Promise<_52.QueryAllowancesResponse>;
                allowancesByGranter(request: _52.QueryAllowancesByGranterRequest): Promise<_52.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _53.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _53.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _53.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _53.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _53.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _53.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _53.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _53.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _53.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _53.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _53.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _53.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _53.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _53.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _53.MsgGrantAllowance) => _53.MsgGrantAllowanceAmino;
                    fromAmino: (object: _53.MsgGrantAllowanceAmino) => _53.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _53.MsgRevokeAllowance) => _53.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _53.MsgRevokeAllowanceAmino) => _53.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _53.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgGrantAllowance;
                fromJSON(object: any): _53.MsgGrantAllowance;
                toJSON(message: _53.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_53.MsgGrantAllowance>): _53.MsgGrantAllowance;
                fromAmino(object: _53.MsgGrantAllowanceAmino): _53.MsgGrantAllowance;
                toAmino(message: _53.MsgGrantAllowance): _53.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _53.MsgGrantAllowanceAminoMsg): _53.MsgGrantAllowance;
                toAminoMsg(message: _53.MsgGrantAllowance): _53.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _53.MsgGrantAllowanceProtoMsg): _53.MsgGrantAllowance;
                toProto(message: _53.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _53.MsgGrantAllowance): _53.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _53.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgGrantAllowanceResponse;
                fromJSON(_: any): _53.MsgGrantAllowanceResponse;
                toJSON(_: _53.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_53.MsgGrantAllowanceResponse>): _53.MsgGrantAllowanceResponse;
                fromAmino(_: _53.MsgGrantAllowanceResponseAmino): _53.MsgGrantAllowanceResponse;
                toAmino(_: _53.MsgGrantAllowanceResponse): _53.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _53.MsgGrantAllowanceResponseAminoMsg): _53.MsgGrantAllowanceResponse;
                toAminoMsg(message: _53.MsgGrantAllowanceResponse): _53.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _53.MsgGrantAllowanceResponseProtoMsg): _53.MsgGrantAllowanceResponse;
                toProto(message: _53.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _53.MsgGrantAllowanceResponse): _53.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                encode(message: _53.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgRevokeAllowance;
                fromJSON(object: any): _53.MsgRevokeAllowance;
                toJSON(message: _53.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_53.MsgRevokeAllowance>): _53.MsgRevokeAllowance;
                fromAmino(object: _53.MsgRevokeAllowanceAmino): _53.MsgRevokeAllowance;
                toAmino(message: _53.MsgRevokeAllowance): _53.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _53.MsgRevokeAllowanceAminoMsg): _53.MsgRevokeAllowance;
                toAminoMsg(message: _53.MsgRevokeAllowance): _53.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _53.MsgRevokeAllowanceProtoMsg): _53.MsgRevokeAllowance;
                toProto(message: _53.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _53.MsgRevokeAllowance): _53.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _53.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _53.MsgRevokeAllowanceResponse;
                toJSON(_: _53.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_53.MsgRevokeAllowanceResponse>): _53.MsgRevokeAllowanceResponse;
                fromAmino(_: _53.MsgRevokeAllowanceResponseAmino): _53.MsgRevokeAllowanceResponse;
                toAmino(_: _53.MsgRevokeAllowanceResponse): _53.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _53.MsgRevokeAllowanceResponseAminoMsg): _53.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _53.MsgRevokeAllowanceResponse): _53.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _53.MsgRevokeAllowanceResponseProtoMsg): _53.MsgRevokeAllowanceResponse;
                toProto(message: _53.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _53.MsgRevokeAllowanceResponse): _53.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _50.BasicAllowance | _50.PeriodicAllowance | _50.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                encode(message: _52.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAllowanceRequest;
                fromJSON(object: any): _52.QueryAllowanceRequest;
                toJSON(message: _52.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_52.QueryAllowanceRequest>): _52.QueryAllowanceRequest;
                fromAmino(object: _52.QueryAllowanceRequestAmino): _52.QueryAllowanceRequest;
                toAmino(message: _52.QueryAllowanceRequest): _52.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _52.QueryAllowanceRequestAminoMsg): _52.QueryAllowanceRequest;
                toAminoMsg(message: _52.QueryAllowanceRequest): _52.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAllowanceRequestProtoMsg): _52.QueryAllowanceRequest;
                toProto(message: _52.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAllowanceRequest): _52.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                encode(message: _52.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAllowanceResponse;
                fromJSON(object: any): _52.QueryAllowanceResponse;
                toJSON(message: _52.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_52.QueryAllowanceResponse>): _52.QueryAllowanceResponse;
                fromAmino(object: _52.QueryAllowanceResponseAmino): _52.QueryAllowanceResponse;
                toAmino(message: _52.QueryAllowanceResponse): _52.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _52.QueryAllowanceResponseAminoMsg): _52.QueryAllowanceResponse;
                toAminoMsg(message: _52.QueryAllowanceResponse): _52.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAllowanceResponseProtoMsg): _52.QueryAllowanceResponse;
                toProto(message: _52.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAllowanceResponse): _52.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                encode(message: _52.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAllowancesRequest;
                fromJSON(object: any): _52.QueryAllowancesRequest;
                toJSON(message: _52.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_52.QueryAllowancesRequest>): _52.QueryAllowancesRequest;
                fromAmino(object: _52.QueryAllowancesRequestAmino): _52.QueryAllowancesRequest;
                toAmino(message: _52.QueryAllowancesRequest): _52.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _52.QueryAllowancesRequestAminoMsg): _52.QueryAllowancesRequest;
                toAminoMsg(message: _52.QueryAllowancesRequest): _52.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAllowancesRequestProtoMsg): _52.QueryAllowancesRequest;
                toProto(message: _52.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAllowancesRequest): _52.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                encode(message: _52.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAllowancesResponse;
                fromJSON(object: any): _52.QueryAllowancesResponse;
                toJSON(message: _52.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_52.QueryAllowancesResponse>): _52.QueryAllowancesResponse;
                fromAmino(object: _52.QueryAllowancesResponseAmino): _52.QueryAllowancesResponse;
                toAmino(message: _52.QueryAllowancesResponse): _52.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _52.QueryAllowancesResponseAminoMsg): _52.QueryAllowancesResponse;
                toAminoMsg(message: _52.QueryAllowancesResponse): _52.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAllowancesResponseProtoMsg): _52.QueryAllowancesResponse;
                toProto(message: _52.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAllowancesResponse): _52.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _52.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _52.QueryAllowancesByGranterRequest;
                toJSON(message: _52.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_52.QueryAllowancesByGranterRequest>): _52.QueryAllowancesByGranterRequest;
                fromAmino(object: _52.QueryAllowancesByGranterRequestAmino): _52.QueryAllowancesByGranterRequest;
                toAmino(message: _52.QueryAllowancesByGranterRequest): _52.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _52.QueryAllowancesByGranterRequestAminoMsg): _52.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _52.QueryAllowancesByGranterRequest): _52.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAllowancesByGranterRequestProtoMsg): _52.QueryAllowancesByGranterRequest;
                toProto(message: _52.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAllowancesByGranterRequest): _52.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _52.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _52.QueryAllowancesByGranterResponse;
                toJSON(message: _52.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_52.QueryAllowancesByGranterResponse>): _52.QueryAllowancesByGranterResponse;
                fromAmino(object: _52.QueryAllowancesByGranterResponseAmino): _52.QueryAllowancesByGranterResponse;
                toAmino(message: _52.QueryAllowancesByGranterResponse): _52.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _52.QueryAllowancesByGranterResponseAminoMsg): _52.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _52.QueryAllowancesByGranterResponse): _52.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAllowancesByGranterResponseProtoMsg): _52.QueryAllowancesByGranterResponse;
                toProto(message: _52.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAllowancesByGranterResponse): _52.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromJSON(object: any): _51.GenesisState;
                toJSON(message: _51.GenesisState): unknown;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
                fromAmino(object: _51.GenesisStateAmino): _51.GenesisState;
                toAmino(message: _51.GenesisState): _51.GenesisStateAmino;
                fromAminoMsg(object: _51.GenesisStateAminoMsg): _51.GenesisState;
                toAminoMsg(message: _51.GenesisState): _51.GenesisStateAminoMsg;
                fromProtoMsg(message: _51.GenesisStateProtoMsg): _51.GenesisState;
                toProto(message: _51.GenesisState): Uint8Array;
                toProtoMsg(message: _51.GenesisState): _51.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                encode(message: _50.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.BasicAllowance;
                fromJSON(object: any): _50.BasicAllowance;
                toJSON(message: _50.BasicAllowance): unknown;
                fromPartial(object: Partial<_50.BasicAllowance>): _50.BasicAllowance;
                fromAmino(object: _50.BasicAllowanceAmino): _50.BasicAllowance;
                toAmino(message: _50.BasicAllowance): _50.BasicAllowanceAmino;
                fromAminoMsg(object: _50.BasicAllowanceAminoMsg): _50.BasicAllowance;
                toAminoMsg(message: _50.BasicAllowance): _50.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _50.BasicAllowanceProtoMsg): _50.BasicAllowance;
                toProto(message: _50.BasicAllowance): Uint8Array;
                toProtoMsg(message: _50.BasicAllowance): _50.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                encode(message: _50.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.PeriodicAllowance;
                fromJSON(object: any): _50.PeriodicAllowance;
                toJSON(message: _50.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_50.PeriodicAllowance>): _50.PeriodicAllowance;
                fromAmino(object: _50.PeriodicAllowanceAmino): _50.PeriodicAllowance;
                toAmino(message: _50.PeriodicAllowance): _50.PeriodicAllowanceAmino;
                fromAminoMsg(object: _50.PeriodicAllowanceAminoMsg): _50.PeriodicAllowance;
                toAminoMsg(message: _50.PeriodicAllowance): _50.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _50.PeriodicAllowanceProtoMsg): _50.PeriodicAllowance;
                toProto(message: _50.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _50.PeriodicAllowance): _50.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                encode(message: _50.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AllowedMsgAllowance;
                fromJSON(object: any): _50.AllowedMsgAllowance;
                toJSON(message: _50.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_50.AllowedMsgAllowance>): _50.AllowedMsgAllowance;
                fromAmino(object: _50.AllowedMsgAllowanceAmino): _50.AllowedMsgAllowance;
                toAmino(message: _50.AllowedMsgAllowance): _50.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _50.AllowedMsgAllowanceAminoMsg): _50.AllowedMsgAllowance;
                toAminoMsg(message: _50.AllowedMsgAllowance): _50.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _50.AllowedMsgAllowanceProtoMsg): _50.AllowedMsgAllowance;
                toProto(message: _50.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _50.AllowedMsgAllowance): _50.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                encode(message: _50.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Grant;
                fromJSON(object: any): _50.Grant;
                toJSON(message: _50.Grant): unknown;
                fromPartial(object: Partial<_50.Grant>): _50.Grant;
                fromAmino(object: _50.GrantAmino): _50.Grant;
                toAmino(message: _50.Grant): _50.GrantAmino;
                fromAminoMsg(object: _50.GrantAminoMsg): _50.Grant;
                toAminoMsg(message: _50.Grant): _50.GrantAminoMsg;
                fromProtoMsg(message: _50.GrantProtoMsg): _50.Grant;
                toProto(message: _50.Grant): Uint8Array;
                toProtoMsg(message: _50.Grant): _50.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GenesisState;
                fromJSON(object: any): _54.GenesisState;
                toJSON(message: _54.GenesisState): unknown;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
                fromAmino(object: _54.GenesisStateAmino): _54.GenesisState;
                toAmino(message: _54.GenesisState): _54.GenesisStateAmino;
                fromAminoMsg(object: _54.GenesisStateAminoMsg): _54.GenesisState;
                toAminoMsg(message: _54.GenesisState): _54.GenesisStateAminoMsg;
                fromProtoMsg(message: _54.GenesisStateProtoMsg): _54.GenesisState;
                toProto(message: _54.GenesisState): Uint8Array;
                toProtoMsg(message: _54.GenesisState): _54.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _171.MsgClientImpl;
            QueryClientImpl: typeof _155.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _57.QueryProposalRequest): Promise<_57.QueryProposalResponse>;
                proposals(request: _57.QueryProposalsRequest): Promise<_57.QueryProposalsResponse>;
                vote(request: _57.QueryVoteRequest): Promise<_57.QueryVoteResponse>;
                votes(request: _57.QueryVotesRequest): Promise<_57.QueryVotesResponse>;
                params(request: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                deposit(request: _57.QueryDepositRequest): Promise<_57.QueryDepositResponse>;
                deposits(request: _57.QueryDepositsRequest): Promise<_57.QueryDepositsResponse>;
                tallyResult(request: _57.QueryTallyResultRequest): Promise<_57.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _58.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _58.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _58.MsgExecLegacyContent;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _58.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _58.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _58.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _58.MsgExecLegacyContent;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _58.MsgSubmitProposal) => _58.MsgSubmitProposalAmino;
                    fromAmino: (object: _58.MsgSubmitProposalAmino) => _58.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _58.MsgExecLegacyContent) => _58.MsgExecLegacyContentAmino;
                    fromAmino: (object: _58.MsgExecLegacyContentAmino) => _58.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _58.MsgVote) => _58.MsgVoteAmino;
                    fromAmino: (object: _58.MsgVoteAmino) => _58.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _58.MsgVoteWeighted) => _58.MsgVoteWeightedAmino;
                    fromAmino: (object: _58.MsgVoteWeightedAmino) => _58.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _58.MsgDeposit) => _58.MsgDepositAmino;
                    fromAmino: (object: _58.MsgDepositAmino) => _58.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _58.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitProposal;
                fromJSON(object: any): _58.MsgSubmitProposal;
                toJSON(message: _58.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_58.MsgSubmitProposal>): _58.MsgSubmitProposal;
                fromAmino(object: _58.MsgSubmitProposalAmino): _58.MsgSubmitProposal;
                toAmino(message: _58.MsgSubmitProposal): _58.MsgSubmitProposalAmino;
                fromAminoMsg(object: _58.MsgSubmitProposalAminoMsg): _58.MsgSubmitProposal;
                toAminoMsg(message: _58.MsgSubmitProposal): _58.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _58.MsgSubmitProposalProtoMsg): _58.MsgSubmitProposal;
                toProto(message: _58.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _58.MsgSubmitProposal): _58.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _58.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitProposalResponse;
                fromJSON(object: any): _58.MsgSubmitProposalResponse;
                toJSON(message: _58.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_58.MsgSubmitProposalResponse>): _58.MsgSubmitProposalResponse;
                fromAmino(object: _58.MsgSubmitProposalResponseAmino): _58.MsgSubmitProposalResponse;
                toAmino(message: _58.MsgSubmitProposalResponse): _58.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _58.MsgSubmitProposalResponseAminoMsg): _58.MsgSubmitProposalResponse;
                toAminoMsg(message: _58.MsgSubmitProposalResponse): _58.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _58.MsgSubmitProposalResponseProtoMsg): _58.MsgSubmitProposalResponse;
                toProto(message: _58.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _58.MsgSubmitProposalResponse): _58.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                encode(message: _58.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgExecLegacyContent;
                fromJSON(object: any): _58.MsgExecLegacyContent;
                toJSON(message: _58.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_58.MsgExecLegacyContent>): _58.MsgExecLegacyContent;
                fromAmino(object: _58.MsgExecLegacyContentAmino): _58.MsgExecLegacyContent;
                toAmino(message: _58.MsgExecLegacyContent): _58.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _58.MsgExecLegacyContentAminoMsg): _58.MsgExecLegacyContent;
                toAminoMsg(message: _58.MsgExecLegacyContent): _58.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _58.MsgExecLegacyContentProtoMsg): _58.MsgExecLegacyContent;
                toProto(message: _58.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _58.MsgExecLegacyContent): _58.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _58.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgExecLegacyContentResponse;
                fromJSON(_: any): _58.MsgExecLegacyContentResponse;
                toJSON(_: _58.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_58.MsgExecLegacyContentResponse>): _58.MsgExecLegacyContentResponse;
                fromAmino(_: _58.MsgExecLegacyContentResponseAmino): _58.MsgExecLegacyContentResponse;
                toAmino(_: _58.MsgExecLegacyContentResponse): _58.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _58.MsgExecLegacyContentResponseAminoMsg): _58.MsgExecLegacyContentResponse;
                toAminoMsg(message: _58.MsgExecLegacyContentResponse): _58.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _58.MsgExecLegacyContentResponseProtoMsg): _58.MsgExecLegacyContentResponse;
                toProto(message: _58.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _58.MsgExecLegacyContentResponse): _58.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _58.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVote;
                fromJSON(object: any): _58.MsgVote;
                toJSON(message: _58.MsgVote): unknown;
                fromPartial(object: Partial<_58.MsgVote>): _58.MsgVote;
                fromAmino(object: _58.MsgVoteAmino): _58.MsgVote;
                toAmino(message: _58.MsgVote): _58.MsgVoteAmino;
                fromAminoMsg(object: _58.MsgVoteAminoMsg): _58.MsgVote;
                toAminoMsg(message: _58.MsgVote): _58.MsgVoteAminoMsg;
                fromProtoMsg(message: _58.MsgVoteProtoMsg): _58.MsgVote;
                toProto(message: _58.MsgVote): Uint8Array;
                toProtoMsg(message: _58.MsgVote): _58.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _58.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteResponse;
                fromJSON(_: any): _58.MsgVoteResponse;
                toJSON(_: _58.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_58.MsgVoteResponse>): _58.MsgVoteResponse;
                fromAmino(_: _58.MsgVoteResponseAmino): _58.MsgVoteResponse;
                toAmino(_: _58.MsgVoteResponse): _58.MsgVoteResponseAmino;
                fromAminoMsg(object: _58.MsgVoteResponseAminoMsg): _58.MsgVoteResponse;
                toAminoMsg(message: _58.MsgVoteResponse): _58.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _58.MsgVoteResponseProtoMsg): _58.MsgVoteResponse;
                toProto(message: _58.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _58.MsgVoteResponse): _58.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _58.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteWeighted;
                fromJSON(object: any): _58.MsgVoteWeighted;
                toJSON(message: _58.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_58.MsgVoteWeighted>): _58.MsgVoteWeighted;
                fromAmino(object: _58.MsgVoteWeightedAmino): _58.MsgVoteWeighted;
                toAmino(message: _58.MsgVoteWeighted): _58.MsgVoteWeightedAmino;
                fromAminoMsg(object: _58.MsgVoteWeightedAminoMsg): _58.MsgVoteWeighted;
                toAminoMsg(message: _58.MsgVoteWeighted): _58.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _58.MsgVoteWeightedProtoMsg): _58.MsgVoteWeighted;
                toProto(message: _58.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _58.MsgVoteWeighted): _58.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _58.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteWeightedResponse;
                fromJSON(_: any): _58.MsgVoteWeightedResponse;
                toJSON(_: _58.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_58.MsgVoteWeightedResponse>): _58.MsgVoteWeightedResponse;
                fromAmino(_: _58.MsgVoteWeightedResponseAmino): _58.MsgVoteWeightedResponse;
                toAmino(_: _58.MsgVoteWeightedResponse): _58.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _58.MsgVoteWeightedResponseAminoMsg): _58.MsgVoteWeightedResponse;
                toAminoMsg(message: _58.MsgVoteWeightedResponse): _58.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _58.MsgVoteWeightedResponseProtoMsg): _58.MsgVoteWeightedResponse;
                toProto(message: _58.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _58.MsgVoteWeightedResponse): _58.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _58.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDeposit;
                fromJSON(object: any): _58.MsgDeposit;
                toJSON(message: _58.MsgDeposit): unknown;
                fromPartial(object: Partial<_58.MsgDeposit>): _58.MsgDeposit;
                fromAmino(object: _58.MsgDepositAmino): _58.MsgDeposit;
                toAmino(message: _58.MsgDeposit): _58.MsgDepositAmino;
                fromAminoMsg(object: _58.MsgDepositAminoMsg): _58.MsgDeposit;
                toAminoMsg(message: _58.MsgDeposit): _58.MsgDepositAminoMsg;
                fromProtoMsg(message: _58.MsgDepositProtoMsg): _58.MsgDeposit;
                toProto(message: _58.MsgDeposit): Uint8Array;
                toProtoMsg(message: _58.MsgDeposit): _58.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _58.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDepositResponse;
                fromJSON(_: any): _58.MsgDepositResponse;
                toJSON(_: _58.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_58.MsgDepositResponse>): _58.MsgDepositResponse;
                fromAmino(_: _58.MsgDepositResponseAmino): _58.MsgDepositResponse;
                toAmino(_: _58.MsgDepositResponse): _58.MsgDepositResponseAmino;
                fromAminoMsg(object: _58.MsgDepositResponseAminoMsg): _58.MsgDepositResponse;
                toAminoMsg(message: _58.MsgDepositResponse): _58.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _58.MsgDepositResponseProtoMsg): _58.MsgDepositResponse;
                toProto(message: _58.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _58.MsgDepositResponse): _58.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _42.CommunityPoolSpendProposal | _42.CommunityPoolSpendProposalWithDeposit | _80.ParameterChangeProposal | _96.SoftwareUpgradeProposal | _96.CancelSoftwareUpgradeProposal | _60.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                encode(message: _57.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalRequest;
                fromJSON(object: any): _57.QueryProposalRequest;
                toJSON(message: _57.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_57.QueryProposalRequest>): _57.QueryProposalRequest;
                fromAmino(object: _57.QueryProposalRequestAmino): _57.QueryProposalRequest;
                toAmino(message: _57.QueryProposalRequest): _57.QueryProposalRequestAmino;
                fromAminoMsg(object: _57.QueryProposalRequestAminoMsg): _57.QueryProposalRequest;
                toAminoMsg(message: _57.QueryProposalRequest): _57.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _57.QueryProposalRequestProtoMsg): _57.QueryProposalRequest;
                toProto(message: _57.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _57.QueryProposalRequest): _57.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _57.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalResponse;
                fromJSON(object: any): _57.QueryProposalResponse;
                toJSON(message: _57.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_57.QueryProposalResponse>): _57.QueryProposalResponse;
                fromAmino(object: _57.QueryProposalResponseAmino): _57.QueryProposalResponse;
                toAmino(message: _57.QueryProposalResponse): _57.QueryProposalResponseAmino;
                fromAminoMsg(object: _57.QueryProposalResponseAminoMsg): _57.QueryProposalResponse;
                toAminoMsg(message: _57.QueryProposalResponse): _57.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _57.QueryProposalResponseProtoMsg): _57.QueryProposalResponse;
                toProto(message: _57.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _57.QueryProposalResponse): _57.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _57.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalsRequest;
                fromJSON(object: any): _57.QueryProposalsRequest;
                toJSON(message: _57.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_57.QueryProposalsRequest>): _57.QueryProposalsRequest;
                fromAmino(object: _57.QueryProposalsRequestAmino): _57.QueryProposalsRequest;
                toAmino(message: _57.QueryProposalsRequest): _57.QueryProposalsRequestAmino;
                fromAminoMsg(object: _57.QueryProposalsRequestAminoMsg): _57.QueryProposalsRequest;
                toAminoMsg(message: _57.QueryProposalsRequest): _57.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _57.QueryProposalsRequestProtoMsg): _57.QueryProposalsRequest;
                toProto(message: _57.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryProposalsRequest): _57.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _57.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalsResponse;
                fromJSON(object: any): _57.QueryProposalsResponse;
                toJSON(message: _57.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_57.QueryProposalsResponse>): _57.QueryProposalsResponse;
                fromAmino(object: _57.QueryProposalsResponseAmino): _57.QueryProposalsResponse;
                toAmino(message: _57.QueryProposalsResponse): _57.QueryProposalsResponseAmino;
                fromAminoMsg(object: _57.QueryProposalsResponseAminoMsg): _57.QueryProposalsResponse;
                toAminoMsg(message: _57.QueryProposalsResponse): _57.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _57.QueryProposalsResponseProtoMsg): _57.QueryProposalsResponse;
                toProto(message: _57.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryProposalsResponse): _57.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _57.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVoteRequest;
                fromJSON(object: any): _57.QueryVoteRequest;
                toJSON(message: _57.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_57.QueryVoteRequest>): _57.QueryVoteRequest;
                fromAmino(object: _57.QueryVoteRequestAmino): _57.QueryVoteRequest;
                toAmino(message: _57.QueryVoteRequest): _57.QueryVoteRequestAmino;
                fromAminoMsg(object: _57.QueryVoteRequestAminoMsg): _57.QueryVoteRequest;
                toAminoMsg(message: _57.QueryVoteRequest): _57.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _57.QueryVoteRequestProtoMsg): _57.QueryVoteRequest;
                toProto(message: _57.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _57.QueryVoteRequest): _57.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _57.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVoteResponse;
                fromJSON(object: any): _57.QueryVoteResponse;
                toJSON(message: _57.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_57.QueryVoteResponse>): _57.QueryVoteResponse;
                fromAmino(object: _57.QueryVoteResponseAmino): _57.QueryVoteResponse;
                toAmino(message: _57.QueryVoteResponse): _57.QueryVoteResponseAmino;
                fromAminoMsg(object: _57.QueryVoteResponseAminoMsg): _57.QueryVoteResponse;
                toAminoMsg(message: _57.QueryVoteResponse): _57.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _57.QueryVoteResponseProtoMsg): _57.QueryVoteResponse;
                toProto(message: _57.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _57.QueryVoteResponse): _57.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _57.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVotesRequest;
                fromJSON(object: any): _57.QueryVotesRequest;
                toJSON(message: _57.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_57.QueryVotesRequest>): _57.QueryVotesRequest;
                fromAmino(object: _57.QueryVotesRequestAmino): _57.QueryVotesRequest;
                toAmino(message: _57.QueryVotesRequest): _57.QueryVotesRequestAmino;
                fromAminoMsg(object: _57.QueryVotesRequestAminoMsg): _57.QueryVotesRequest;
                toAminoMsg(message: _57.QueryVotesRequest): _57.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _57.QueryVotesRequestProtoMsg): _57.QueryVotesRequest;
                toProto(message: _57.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _57.QueryVotesRequest): _57.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _57.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVotesResponse;
                fromJSON(object: any): _57.QueryVotesResponse;
                toJSON(message: _57.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_57.QueryVotesResponse>): _57.QueryVotesResponse;
                fromAmino(object: _57.QueryVotesResponseAmino): _57.QueryVotesResponse;
                toAmino(message: _57.QueryVotesResponse): _57.QueryVotesResponseAmino;
                fromAminoMsg(object: _57.QueryVotesResponseAminoMsg): _57.QueryVotesResponse;
                toAminoMsg(message: _57.QueryVotesResponse): _57.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _57.QueryVotesResponseProtoMsg): _57.QueryVotesResponse;
                toProto(message: _57.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _57.QueryVotesResponse): _57.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsRequest;
                fromJSON(object: any): _57.QueryParamsRequest;
                toJSON(message: _57.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
                fromAmino(object: _57.QueryParamsRequestAmino): _57.QueryParamsRequest;
                toAmino(message: _57.QueryParamsRequest): _57.QueryParamsRequestAmino;
                fromAminoMsg(object: _57.QueryParamsRequestAminoMsg): _57.QueryParamsRequest;
                toAminoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _57.QueryParamsRequestProtoMsg): _57.QueryParamsRequest;
                toProto(message: _57.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsResponse;
                fromJSON(object: any): _57.QueryParamsResponse;
                toJSON(message: _57.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
                fromAmino(object: _57.QueryParamsResponseAmino): _57.QueryParamsResponse;
                toAmino(message: _57.QueryParamsResponse): _57.QueryParamsResponseAmino;
                fromAminoMsg(object: _57.QueryParamsResponseAminoMsg): _57.QueryParamsResponse;
                toAminoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _57.QueryParamsResponseProtoMsg): _57.QueryParamsResponse;
                toProto(message: _57.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _57.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositRequest;
                fromJSON(object: any): _57.QueryDepositRequest;
                toJSON(message: _57.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_57.QueryDepositRequest>): _57.QueryDepositRequest;
                fromAmino(object: _57.QueryDepositRequestAmino): _57.QueryDepositRequest;
                toAmino(message: _57.QueryDepositRequest): _57.QueryDepositRequestAmino;
                fromAminoMsg(object: _57.QueryDepositRequestAminoMsg): _57.QueryDepositRequest;
                toAminoMsg(message: _57.QueryDepositRequest): _57.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _57.QueryDepositRequestProtoMsg): _57.QueryDepositRequest;
                toProto(message: _57.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _57.QueryDepositRequest): _57.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _57.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositResponse;
                fromJSON(object: any): _57.QueryDepositResponse;
                toJSON(message: _57.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_57.QueryDepositResponse>): _57.QueryDepositResponse;
                fromAmino(object: _57.QueryDepositResponseAmino): _57.QueryDepositResponse;
                toAmino(message: _57.QueryDepositResponse): _57.QueryDepositResponseAmino;
                fromAminoMsg(object: _57.QueryDepositResponseAminoMsg): _57.QueryDepositResponse;
                toAminoMsg(message: _57.QueryDepositResponse): _57.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _57.QueryDepositResponseProtoMsg): _57.QueryDepositResponse;
                toProto(message: _57.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _57.QueryDepositResponse): _57.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _57.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositsRequest;
                fromJSON(object: any): _57.QueryDepositsRequest;
                toJSON(message: _57.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_57.QueryDepositsRequest>): _57.QueryDepositsRequest;
                fromAmino(object: _57.QueryDepositsRequestAmino): _57.QueryDepositsRequest;
                toAmino(message: _57.QueryDepositsRequest): _57.QueryDepositsRequestAmino;
                fromAminoMsg(object: _57.QueryDepositsRequestAminoMsg): _57.QueryDepositsRequest;
                toAminoMsg(message: _57.QueryDepositsRequest): _57.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _57.QueryDepositsRequestProtoMsg): _57.QueryDepositsRequest;
                toProto(message: _57.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryDepositsRequest): _57.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _57.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositsResponse;
                fromJSON(object: any): _57.QueryDepositsResponse;
                toJSON(message: _57.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_57.QueryDepositsResponse>): _57.QueryDepositsResponse;
                fromAmino(object: _57.QueryDepositsResponseAmino): _57.QueryDepositsResponse;
                toAmino(message: _57.QueryDepositsResponse): _57.QueryDepositsResponseAmino;
                fromAminoMsg(object: _57.QueryDepositsResponseAminoMsg): _57.QueryDepositsResponse;
                toAminoMsg(message: _57.QueryDepositsResponse): _57.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _57.QueryDepositsResponseProtoMsg): _57.QueryDepositsResponse;
                toProto(message: _57.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryDepositsResponse): _57.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _57.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryTallyResultRequest;
                fromJSON(object: any): _57.QueryTallyResultRequest;
                toJSON(message: _57.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_57.QueryTallyResultRequest>): _57.QueryTallyResultRequest;
                fromAmino(object: _57.QueryTallyResultRequestAmino): _57.QueryTallyResultRequest;
                toAmino(message: _57.QueryTallyResultRequest): _57.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _57.QueryTallyResultRequestAminoMsg): _57.QueryTallyResultRequest;
                toAminoMsg(message: _57.QueryTallyResultRequest): _57.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _57.QueryTallyResultRequestProtoMsg): _57.QueryTallyResultRequest;
                toProto(message: _57.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _57.QueryTallyResultRequest): _57.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _57.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryTallyResultResponse;
                fromJSON(object: any): _57.QueryTallyResultResponse;
                toJSON(message: _57.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_57.QueryTallyResultResponse>): _57.QueryTallyResultResponse;
                fromAmino(object: _57.QueryTallyResultResponseAmino): _57.QueryTallyResultResponse;
                toAmino(message: _57.QueryTallyResultResponse): _57.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _57.QueryTallyResultResponseAminoMsg): _57.QueryTallyResultResponse;
                toAminoMsg(message: _57.QueryTallyResultResponse): _57.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _57.QueryTallyResultResponseProtoMsg): _57.QueryTallyResultResponse;
                toProto(message: _57.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _57.QueryTallyResultResponse): _57.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _56.VoteOption;
            voteOptionToJSON(object: _56.VoteOption): string;
            proposalStatusFromJSON(object: any): _56.ProposalStatus;
            proposalStatusToJSON(object: _56.ProposalStatus): string;
            VoteOption: typeof _56.VoteOption;
            VoteOptionSDKType: typeof _56.VoteOption;
            VoteOptionAmino: typeof _56.VoteOption;
            ProposalStatus: typeof _56.ProposalStatus;
            ProposalStatusSDKType: typeof _56.ProposalStatus;
            ProposalStatusAmino: typeof _56.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _56.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.WeightedVoteOption;
                fromJSON(object: any): _56.WeightedVoteOption;
                toJSON(message: _56.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_56.WeightedVoteOption>): _56.WeightedVoteOption;
                fromAmino(object: _56.WeightedVoteOptionAmino): _56.WeightedVoteOption;
                toAmino(message: _56.WeightedVoteOption): _56.WeightedVoteOptionAmino;
                fromAminoMsg(object: _56.WeightedVoteOptionAminoMsg): _56.WeightedVoteOption;
                toAminoMsg(message: _56.WeightedVoteOption): _56.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _56.WeightedVoteOptionProtoMsg): _56.WeightedVoteOption;
                toProto(message: _56.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _56.WeightedVoteOption): _56.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                encode(message: _56.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Deposit;
                fromJSON(object: any): _56.Deposit;
                toJSON(message: _56.Deposit): unknown;
                fromPartial(object: Partial<_56.Deposit>): _56.Deposit;
                fromAmino(object: _56.DepositAmino): _56.Deposit;
                toAmino(message: _56.Deposit): _56.DepositAmino;
                fromAminoMsg(object: _56.DepositAminoMsg): _56.Deposit;
                toAminoMsg(message: _56.Deposit): _56.DepositAminoMsg;
                fromProtoMsg(message: _56.DepositProtoMsg): _56.Deposit;
                toProto(message: _56.Deposit): Uint8Array;
                toProtoMsg(message: _56.Deposit): _56.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _56.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Proposal;
                fromJSON(object: any): _56.Proposal;
                toJSON(message: _56.Proposal): unknown;
                fromPartial(object: Partial<_56.Proposal>): _56.Proposal;
                fromAmino(object: _56.ProposalAmino): _56.Proposal;
                toAmino(message: _56.Proposal): _56.ProposalAmino;
                fromAminoMsg(object: _56.ProposalAminoMsg): _56.Proposal;
                toAminoMsg(message: _56.Proposal): _56.ProposalAminoMsg;
                fromProtoMsg(message: _56.ProposalProtoMsg): _56.Proposal;
                toProto(message: _56.Proposal): Uint8Array;
                toProtoMsg(message: _56.Proposal): _56.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _56.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TallyResult;
                fromJSON(object: any): _56.TallyResult;
                toJSON(message: _56.TallyResult): unknown;
                fromPartial(object: Partial<_56.TallyResult>): _56.TallyResult;
                fromAmino(object: _56.TallyResultAmino): _56.TallyResult;
                toAmino(message: _56.TallyResult): _56.TallyResultAmino;
                fromAminoMsg(object: _56.TallyResultAminoMsg): _56.TallyResult;
                toAminoMsg(message: _56.TallyResult): _56.TallyResultAminoMsg;
                fromProtoMsg(message: _56.TallyResultProtoMsg): _56.TallyResult;
                toProto(message: _56.TallyResult): Uint8Array;
                toProtoMsg(message: _56.TallyResult): _56.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _56.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Vote;
                fromJSON(object: any): _56.Vote;
                toJSON(message: _56.Vote): unknown;
                fromPartial(object: Partial<_56.Vote>): _56.Vote;
                fromAmino(object: _56.VoteAmino): _56.Vote;
                toAmino(message: _56.Vote): _56.VoteAmino;
                fromAminoMsg(object: _56.VoteAminoMsg): _56.Vote;
                toAminoMsg(message: _56.Vote): _56.VoteAminoMsg;
                fromProtoMsg(message: _56.VoteProtoMsg): _56.Vote;
                toProto(message: _56.Vote): Uint8Array;
                toProtoMsg(message: _56.Vote): _56.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _56.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.DepositParams;
                fromJSON(object: any): _56.DepositParams;
                toJSON(message: _56.DepositParams): unknown;
                fromPartial(object: Partial<_56.DepositParams>): _56.DepositParams;
                fromAmino(object: _56.DepositParamsAmino): _56.DepositParams;
                toAmino(message: _56.DepositParams): _56.DepositParamsAmino;
                fromAminoMsg(object: _56.DepositParamsAminoMsg): _56.DepositParams;
                toAminoMsg(message: _56.DepositParams): _56.DepositParamsAminoMsg;
                fromProtoMsg(message: _56.DepositParamsProtoMsg): _56.DepositParams;
                toProto(message: _56.DepositParams): Uint8Array;
                toProtoMsg(message: _56.DepositParams): _56.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _56.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.VotingParams;
                fromJSON(object: any): _56.VotingParams;
                toJSON(message: _56.VotingParams): unknown;
                fromPartial(object: Partial<_56.VotingParams>): _56.VotingParams;
                fromAmino(object: _56.VotingParamsAmino): _56.VotingParams;
                toAmino(message: _56.VotingParams): _56.VotingParamsAmino;
                fromAminoMsg(object: _56.VotingParamsAminoMsg): _56.VotingParams;
                toAminoMsg(message: _56.VotingParams): _56.VotingParamsAminoMsg;
                fromProtoMsg(message: _56.VotingParamsProtoMsg): _56.VotingParams;
                toProto(message: _56.VotingParams): Uint8Array;
                toProtoMsg(message: _56.VotingParams): _56.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _56.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TallyParams;
                fromJSON(object: any): _56.TallyParams;
                toJSON(message: _56.TallyParams): unknown;
                fromPartial(object: Partial<_56.TallyParams>): _56.TallyParams;
                fromAmino(object: _56.TallyParamsAmino): _56.TallyParams;
                toAmino(message: _56.TallyParams): _56.TallyParamsAmino;
                fromAminoMsg(object: _56.TallyParamsAminoMsg): _56.TallyParams;
                toAminoMsg(message: _56.TallyParams): _56.TallyParamsAminoMsg;
                fromProtoMsg(message: _56.TallyParamsProtoMsg): _56.TallyParams;
                toProto(message: _56.TallyParams): Uint8Array;
                toProtoMsg(message: _56.TallyParams): _56.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GenesisState;
                fromJSON(object: any): _55.GenesisState;
                toJSON(message: _55.GenesisState): unknown;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
                fromAmino(object: _55.GenesisStateAmino): _55.GenesisState;
                toAmino(message: _55.GenesisState): _55.GenesisStateAmino;
                fromAminoMsg(object: _55.GenesisStateAminoMsg): _55.GenesisState;
                toAminoMsg(message: _55.GenesisState): _55.GenesisStateAminoMsg;
                fromProtoMsg(message: _55.GenesisStateProtoMsg): _55.GenesisState;
                toProto(message: _55.GenesisState): Uint8Array;
                toProtoMsg(message: _55.GenesisState): _55.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            QueryClientImpl: typeof _156.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                proposals(request: _61.QueryProposalsRequest): Promise<_61.QueryProposalsResponse>;
                vote(request: _61.QueryVoteRequest): Promise<_61.QueryVoteResponse>;
                votes(request: _61.QueryVotesRequest): Promise<_61.QueryVotesResponse>;
                params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                deposit(request: _61.QueryDepositRequest): Promise<_61.QueryDepositResponse>;
                deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
                tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _62.MsgSubmitProposal) => _62.MsgSubmitProposalAmino;
                    fromAmino: (object: _62.MsgSubmitProposalAmino) => _62.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _62.MsgVote) => _62.MsgVoteAmino;
                    fromAmino: (object: _62.MsgVoteAmino) => _62.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _62.MsgVoteWeighted) => _62.MsgVoteWeightedAmino;
                    fromAmino: (object: _62.MsgVoteWeightedAmino) => _62.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _62.MsgDeposit) => _62.MsgDepositAmino;
                    fromAmino: (object: _62.MsgDepositAmino) => _62.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _62.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSubmitProposal;
                fromJSON(object: any): _62.MsgSubmitProposal;
                toJSON(message: _62.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_62.MsgSubmitProposal>): _62.MsgSubmitProposal;
                fromAmino(object: _62.MsgSubmitProposalAmino): _62.MsgSubmitProposal;
                toAmino(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalAmino;
                fromAminoMsg(object: _62.MsgSubmitProposalAminoMsg): _62.MsgSubmitProposal;
                toAminoMsg(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _62.MsgSubmitProposalProtoMsg): _62.MsgSubmitProposal;
                toProto(message: _62.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _62.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSubmitProposalResponse;
                fromJSON(object: any): _62.MsgSubmitProposalResponse;
                toJSON(message: _62.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_62.MsgSubmitProposalResponse>): _62.MsgSubmitProposalResponse;
                fromAmino(object: _62.MsgSubmitProposalResponseAmino): _62.MsgSubmitProposalResponse;
                toAmino(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _62.MsgSubmitProposalResponseAminoMsg): _62.MsgSubmitProposalResponse;
                toAminoMsg(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _62.MsgSubmitProposalResponseProtoMsg): _62.MsgSubmitProposalResponse;
                toProto(message: _62.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _62.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVote;
                fromJSON(object: any): _62.MsgVote;
                toJSON(message: _62.MsgVote): unknown;
                fromPartial(object: Partial<_62.MsgVote>): _62.MsgVote;
                fromAmino(object: _62.MsgVoteAmino): _62.MsgVote;
                toAmino(message: _62.MsgVote): _62.MsgVoteAmino;
                fromAminoMsg(object: _62.MsgVoteAminoMsg): _62.MsgVote;
                toAminoMsg(message: _62.MsgVote): _62.MsgVoteAminoMsg;
                fromProtoMsg(message: _62.MsgVoteProtoMsg): _62.MsgVote;
                toProto(message: _62.MsgVote): Uint8Array;
                toProtoMsg(message: _62.MsgVote): _62.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _62.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVoteResponse;
                fromJSON(_: any): _62.MsgVoteResponse;
                toJSON(_: _62.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_62.MsgVoteResponse>): _62.MsgVoteResponse;
                fromAmino(_: _62.MsgVoteResponseAmino): _62.MsgVoteResponse;
                toAmino(_: _62.MsgVoteResponse): _62.MsgVoteResponseAmino;
                fromAminoMsg(object: _62.MsgVoteResponseAminoMsg): _62.MsgVoteResponse;
                toAminoMsg(message: _62.MsgVoteResponse): _62.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _62.MsgVoteResponseProtoMsg): _62.MsgVoteResponse;
                toProto(message: _62.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _62.MsgVoteResponse): _62.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _62.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVoteWeighted;
                fromJSON(object: any): _62.MsgVoteWeighted;
                toJSON(message: _62.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_62.MsgVoteWeighted>): _62.MsgVoteWeighted;
                fromAmino(object: _62.MsgVoteWeightedAmino): _62.MsgVoteWeighted;
                toAmino(message: _62.MsgVoteWeighted): _62.MsgVoteWeightedAmino;
                fromAminoMsg(object: _62.MsgVoteWeightedAminoMsg): _62.MsgVoteWeighted;
                toAminoMsg(message: _62.MsgVoteWeighted): _62.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _62.MsgVoteWeightedProtoMsg): _62.MsgVoteWeighted;
                toProto(message: _62.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _62.MsgVoteWeighted): _62.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _62.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVoteWeightedResponse;
                fromJSON(_: any): _62.MsgVoteWeightedResponse;
                toJSON(_: _62.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_62.MsgVoteWeightedResponse>): _62.MsgVoteWeightedResponse;
                fromAmino(_: _62.MsgVoteWeightedResponseAmino): _62.MsgVoteWeightedResponse;
                toAmino(_: _62.MsgVoteWeightedResponse): _62.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _62.MsgVoteWeightedResponseAminoMsg): _62.MsgVoteWeightedResponse;
                toAminoMsg(message: _62.MsgVoteWeightedResponse): _62.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _62.MsgVoteWeightedResponseProtoMsg): _62.MsgVoteWeightedResponse;
                toProto(message: _62.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _62.MsgVoteWeightedResponse): _62.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _62.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgDeposit;
                fromJSON(object: any): _62.MsgDeposit;
                toJSON(message: _62.MsgDeposit): unknown;
                fromPartial(object: Partial<_62.MsgDeposit>): _62.MsgDeposit;
                fromAmino(object: _62.MsgDepositAmino): _62.MsgDeposit;
                toAmino(message: _62.MsgDeposit): _62.MsgDepositAmino;
                fromAminoMsg(object: _62.MsgDepositAminoMsg): _62.MsgDeposit;
                toAminoMsg(message: _62.MsgDeposit): _62.MsgDepositAminoMsg;
                fromProtoMsg(message: _62.MsgDepositProtoMsg): _62.MsgDeposit;
                toProto(message: _62.MsgDeposit): Uint8Array;
                toProtoMsg(message: _62.MsgDeposit): _62.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _62.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgDepositResponse;
                fromJSON(_: any): _62.MsgDepositResponse;
                toJSON(_: _62.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_62.MsgDepositResponse>): _62.MsgDepositResponse;
                fromAmino(_: _62.MsgDepositResponseAmino): _62.MsgDepositResponse;
                toAmino(_: _62.MsgDepositResponse): _62.MsgDepositResponseAmino;
                fromAminoMsg(object: _62.MsgDepositResponseAminoMsg): _62.MsgDepositResponse;
                toAminoMsg(message: _62.MsgDepositResponse): _62.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _62.MsgDepositResponseProtoMsg): _62.MsgDepositResponse;
                toProto(message: _62.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _62.MsgDepositResponse): _62.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _42.CommunityPoolSpendProposal | _42.CommunityPoolSpendProposalWithDeposit | _80.ParameterChangeProposal | _96.SoftwareUpgradeProposal | _96.CancelSoftwareUpgradeProposal | _60.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                encode(message: _61.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalRequest;
                fromJSON(object: any): _61.QueryProposalRequest;
                toJSON(message: _61.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_61.QueryProposalRequest>): _61.QueryProposalRequest;
                fromAmino(object: _61.QueryProposalRequestAmino): _61.QueryProposalRequest;
                toAmino(message: _61.QueryProposalRequest): _61.QueryProposalRequestAmino;
                fromAminoMsg(object: _61.QueryProposalRequestAminoMsg): _61.QueryProposalRequest;
                toAminoMsg(message: _61.QueryProposalRequest): _61.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _61.QueryProposalRequestProtoMsg): _61.QueryProposalRequest;
                toProto(message: _61.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _61.QueryProposalRequest): _61.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _61.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalResponse;
                fromJSON(object: any): _61.QueryProposalResponse;
                toJSON(message: _61.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_61.QueryProposalResponse>): _61.QueryProposalResponse;
                fromAmino(object: _61.QueryProposalResponseAmino): _61.QueryProposalResponse;
                toAmino(message: _61.QueryProposalResponse): _61.QueryProposalResponseAmino;
                fromAminoMsg(object: _61.QueryProposalResponseAminoMsg): _61.QueryProposalResponse;
                toAminoMsg(message: _61.QueryProposalResponse): _61.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _61.QueryProposalResponseProtoMsg): _61.QueryProposalResponse;
                toProto(message: _61.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _61.QueryProposalResponse): _61.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _61.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalsRequest;
                fromJSON(object: any): _61.QueryProposalsRequest;
                toJSON(message: _61.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_61.QueryProposalsRequest>): _61.QueryProposalsRequest;
                fromAmino(object: _61.QueryProposalsRequestAmino): _61.QueryProposalsRequest;
                toAmino(message: _61.QueryProposalsRequest): _61.QueryProposalsRequestAmino;
                fromAminoMsg(object: _61.QueryProposalsRequestAminoMsg): _61.QueryProposalsRequest;
                toAminoMsg(message: _61.QueryProposalsRequest): _61.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryProposalsRequestProtoMsg): _61.QueryProposalsRequest;
                toProto(message: _61.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryProposalsRequest): _61.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _61.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalsResponse;
                fromJSON(object: any): _61.QueryProposalsResponse;
                toJSON(message: _61.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_61.QueryProposalsResponse>): _61.QueryProposalsResponse;
                fromAmino(object: _61.QueryProposalsResponseAmino): _61.QueryProposalsResponse;
                toAmino(message: _61.QueryProposalsResponse): _61.QueryProposalsResponseAmino;
                fromAminoMsg(object: _61.QueryProposalsResponseAminoMsg): _61.QueryProposalsResponse;
                toAminoMsg(message: _61.QueryProposalsResponse): _61.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryProposalsResponseProtoMsg): _61.QueryProposalsResponse;
                toProto(message: _61.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryProposalsResponse): _61.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _61.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVoteRequest;
                fromJSON(object: any): _61.QueryVoteRequest;
                toJSON(message: _61.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_61.QueryVoteRequest>): _61.QueryVoteRequest;
                fromAmino(object: _61.QueryVoteRequestAmino): _61.QueryVoteRequest;
                toAmino(message: _61.QueryVoteRequest): _61.QueryVoteRequestAmino;
                fromAminoMsg(object: _61.QueryVoteRequestAminoMsg): _61.QueryVoteRequest;
                toAminoMsg(message: _61.QueryVoteRequest): _61.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _61.QueryVoteRequestProtoMsg): _61.QueryVoteRequest;
                toProto(message: _61.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _61.QueryVoteRequest): _61.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _61.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVoteResponse;
                fromJSON(object: any): _61.QueryVoteResponse;
                toJSON(message: _61.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_61.QueryVoteResponse>): _61.QueryVoteResponse;
                fromAmino(object: _61.QueryVoteResponseAmino): _61.QueryVoteResponse;
                toAmino(message: _61.QueryVoteResponse): _61.QueryVoteResponseAmino;
                fromAminoMsg(object: _61.QueryVoteResponseAminoMsg): _61.QueryVoteResponse;
                toAminoMsg(message: _61.QueryVoteResponse): _61.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _61.QueryVoteResponseProtoMsg): _61.QueryVoteResponse;
                toProto(message: _61.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _61.QueryVoteResponse): _61.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _61.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesRequest;
                fromJSON(object: any): _61.QueryVotesRequest;
                toJSON(message: _61.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_61.QueryVotesRequest>): _61.QueryVotesRequest;
                fromAmino(object: _61.QueryVotesRequestAmino): _61.QueryVotesRequest;
                toAmino(message: _61.QueryVotesRequest): _61.QueryVotesRequestAmino;
                fromAminoMsg(object: _61.QueryVotesRequestAminoMsg): _61.QueryVotesRequest;
                toAminoMsg(message: _61.QueryVotesRequest): _61.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _61.QueryVotesRequestProtoMsg): _61.QueryVotesRequest;
                toProto(message: _61.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _61.QueryVotesRequest): _61.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _61.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesResponse;
                fromJSON(object: any): _61.QueryVotesResponse;
                toJSON(message: _61.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_61.QueryVotesResponse>): _61.QueryVotesResponse;
                fromAmino(object: _61.QueryVotesResponseAmino): _61.QueryVotesResponse;
                toAmino(message: _61.QueryVotesResponse): _61.QueryVotesResponseAmino;
                fromAminoMsg(object: _61.QueryVotesResponseAminoMsg): _61.QueryVotesResponse;
                toAminoMsg(message: _61.QueryVotesResponse): _61.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _61.QueryVotesResponseProtoMsg): _61.QueryVotesResponse;
                toProto(message: _61.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _61.QueryVotesResponse): _61.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsRequest;
                fromJSON(object: any): _61.QueryParamsRequest;
                toJSON(message: _61.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
                fromAmino(object: _61.QueryParamsRequestAmino): _61.QueryParamsRequest;
                toAmino(message: _61.QueryParamsRequest): _61.QueryParamsRequestAmino;
                fromAminoMsg(object: _61.QueryParamsRequestAminoMsg): _61.QueryParamsRequest;
                toAminoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryParamsRequestProtoMsg): _61.QueryParamsRequest;
                toProto(message: _61.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsResponse;
                fromJSON(object: any): _61.QueryParamsResponse;
                toJSON(message: _61.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_61.QueryParamsResponse>): _61.QueryParamsResponse;
                fromAmino(object: _61.QueryParamsResponseAmino): _61.QueryParamsResponse;
                toAmino(message: _61.QueryParamsResponse): _61.QueryParamsResponseAmino;
                fromAminoMsg(object: _61.QueryParamsResponseAminoMsg): _61.QueryParamsResponse;
                toAminoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryParamsResponseProtoMsg): _61.QueryParamsResponse;
                toProto(message: _61.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _61.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDepositRequest;
                fromJSON(object: any): _61.QueryDepositRequest;
                toJSON(message: _61.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_61.QueryDepositRequest>): _61.QueryDepositRequest;
                fromAmino(object: _61.QueryDepositRequestAmino): _61.QueryDepositRequest;
                toAmino(message: _61.QueryDepositRequest): _61.QueryDepositRequestAmino;
                fromAminoMsg(object: _61.QueryDepositRequestAminoMsg): _61.QueryDepositRequest;
                toAminoMsg(message: _61.QueryDepositRequest): _61.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDepositRequestProtoMsg): _61.QueryDepositRequest;
                toProto(message: _61.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDepositRequest): _61.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _61.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDepositResponse;
                fromJSON(object: any): _61.QueryDepositResponse;
                toJSON(message: _61.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_61.QueryDepositResponse>): _61.QueryDepositResponse;
                fromAmino(object: _61.QueryDepositResponseAmino): _61.QueryDepositResponse;
                toAmino(message: _61.QueryDepositResponse): _61.QueryDepositResponseAmino;
                fromAminoMsg(object: _61.QueryDepositResponseAminoMsg): _61.QueryDepositResponse;
                toAminoMsg(message: _61.QueryDepositResponse): _61.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDepositResponseProtoMsg): _61.QueryDepositResponse;
                toProto(message: _61.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDepositResponse): _61.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _61.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDepositsRequest;
                fromJSON(object: any): _61.QueryDepositsRequest;
                toJSON(message: _61.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_61.QueryDepositsRequest>): _61.QueryDepositsRequest;
                fromAmino(object: _61.QueryDepositsRequestAmino): _61.QueryDepositsRequest;
                toAmino(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestAmino;
                fromAminoMsg(object: _61.QueryDepositsRequestAminoMsg): _61.QueryDepositsRequest;
                toAminoMsg(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDepositsRequestProtoMsg): _61.QueryDepositsRequest;
                toProto(message: _61.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _61.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDepositsResponse;
                fromJSON(object: any): _61.QueryDepositsResponse;
                toJSON(message: _61.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_61.QueryDepositsResponse>): _61.QueryDepositsResponse;
                fromAmino(object: _61.QueryDepositsResponseAmino): _61.QueryDepositsResponse;
                toAmino(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseAmino;
                fromAminoMsg(object: _61.QueryDepositsResponseAminoMsg): _61.QueryDepositsResponse;
                toAminoMsg(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDepositsResponseProtoMsg): _61.QueryDepositsResponse;
                toProto(message: _61.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _61.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryTallyResultRequest;
                fromJSON(object: any): _61.QueryTallyResultRequest;
                toJSON(message: _61.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_61.QueryTallyResultRequest>): _61.QueryTallyResultRequest;
                fromAmino(object: _61.QueryTallyResultRequestAmino): _61.QueryTallyResultRequest;
                toAmino(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _61.QueryTallyResultRequestAminoMsg): _61.QueryTallyResultRequest;
                toAminoMsg(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _61.QueryTallyResultRequestProtoMsg): _61.QueryTallyResultRequest;
                toProto(message: _61.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _61.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryTallyResultResponse;
                fromJSON(object: any): _61.QueryTallyResultResponse;
                toJSON(message: _61.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_61.QueryTallyResultResponse>): _61.QueryTallyResultResponse;
                fromAmino(object: _61.QueryTallyResultResponseAmino): _61.QueryTallyResultResponse;
                toAmino(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _61.QueryTallyResultResponseAminoMsg): _61.QueryTallyResultResponse;
                toAminoMsg(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _61.QueryTallyResultResponseProtoMsg): _61.QueryTallyResultResponse;
                toProto(message: _61.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _60.VoteOption;
            voteOptionToJSON(object: _60.VoteOption): string;
            proposalStatusFromJSON(object: any): _60.ProposalStatus;
            proposalStatusToJSON(object: _60.ProposalStatus): string;
            VoteOption: typeof _60.VoteOption;
            VoteOptionSDKType: typeof _60.VoteOption;
            VoteOptionAmino: typeof _60.VoteOption;
            ProposalStatus: typeof _60.ProposalStatus;
            ProposalStatusSDKType: typeof _60.ProposalStatus;
            ProposalStatusAmino: typeof _60.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _60.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.WeightedVoteOption;
                fromJSON(object: any): _60.WeightedVoteOption;
                toJSON(message: _60.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_60.WeightedVoteOption>): _60.WeightedVoteOption;
                fromAmino(object: _60.WeightedVoteOptionAmino): _60.WeightedVoteOption;
                toAmino(message: _60.WeightedVoteOption): _60.WeightedVoteOptionAmino;
                fromAminoMsg(object: _60.WeightedVoteOptionAminoMsg): _60.WeightedVoteOption;
                toAminoMsg(message: _60.WeightedVoteOption): _60.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _60.WeightedVoteOptionProtoMsg): _60.WeightedVoteOption;
                toProto(message: _60.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _60.WeightedVoteOption): _60.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                encode(message: _60.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.TextProposal;
                fromJSON(object: any): _60.TextProposal;
                toJSON(message: _60.TextProposal): unknown;
                fromPartial(object: Partial<_60.TextProposal>): _60.TextProposal;
                fromAmino(object: _60.TextProposalAmino): _60.TextProposal;
                toAmino(message: _60.TextProposal): _60.TextProposalAmino;
                fromAminoMsg(object: _60.TextProposalAminoMsg): _60.TextProposal;
                toAminoMsg(message: _60.TextProposal): _60.TextProposalAminoMsg;
                fromProtoMsg(message: _60.TextProposalProtoMsg): _60.TextProposal;
                toProto(message: _60.TextProposal): Uint8Array;
                toProtoMsg(message: _60.TextProposal): _60.TextProposalProtoMsg;
            };
            Deposit: {
                encode(message: _60.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Deposit;
                fromJSON(object: any): _60.Deposit;
                toJSON(message: _60.Deposit): unknown;
                fromPartial(object: Partial<_60.Deposit>): _60.Deposit;
                fromAmino(object: _60.DepositAmino): _60.Deposit;
                toAmino(message: _60.Deposit): _60.DepositAmino;
                fromAminoMsg(object: _60.DepositAminoMsg): _60.Deposit;
                toAminoMsg(message: _60.Deposit): _60.DepositAminoMsg;
                fromProtoMsg(message: _60.DepositProtoMsg): _60.Deposit;
                toProto(message: _60.Deposit): Uint8Array;
                toProtoMsg(message: _60.Deposit): _60.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _60.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Proposal;
                fromJSON(object: any): _60.Proposal;
                toJSON(message: _60.Proposal): unknown;
                fromPartial(object: Partial<_60.Proposal>): _60.Proposal;
                fromAmino(object: _60.ProposalAmino): _60.Proposal;
                toAmino(message: _60.Proposal): _60.ProposalAmino;
                fromAminoMsg(object: _60.ProposalAminoMsg): _60.Proposal;
                toAminoMsg(message: _60.Proposal): _60.ProposalAminoMsg;
                fromProtoMsg(message: _60.ProposalProtoMsg): _60.Proposal;
                toProto(message: _60.Proposal): Uint8Array;
                toProtoMsg(message: _60.Proposal): _60.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _60.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.TallyResult;
                fromJSON(object: any): _60.TallyResult;
                toJSON(message: _60.TallyResult): unknown;
                fromPartial(object: Partial<_60.TallyResult>): _60.TallyResult;
                fromAmino(object: _60.TallyResultAmino): _60.TallyResult;
                toAmino(message: _60.TallyResult): _60.TallyResultAmino;
                fromAminoMsg(object: _60.TallyResultAminoMsg): _60.TallyResult;
                toAminoMsg(message: _60.TallyResult): _60.TallyResultAminoMsg;
                fromProtoMsg(message: _60.TallyResultProtoMsg): _60.TallyResult;
                toProto(message: _60.TallyResult): Uint8Array;
                toProtoMsg(message: _60.TallyResult): _60.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _60.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Vote;
                fromJSON(object: any): _60.Vote;
                toJSON(message: _60.Vote): unknown;
                fromPartial(object: Partial<_60.Vote>): _60.Vote;
                fromAmino(object: _60.VoteAmino): _60.Vote;
                toAmino(message: _60.Vote): _60.VoteAmino;
                fromAminoMsg(object: _60.VoteAminoMsg): _60.Vote;
                toAminoMsg(message: _60.Vote): _60.VoteAminoMsg;
                fromProtoMsg(message: _60.VoteProtoMsg): _60.Vote;
                toProto(message: _60.Vote): Uint8Array;
                toProtoMsg(message: _60.Vote): _60.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _60.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.DepositParams;
                fromJSON(object: any): _60.DepositParams;
                toJSON(message: _60.DepositParams): unknown;
                fromPartial(object: Partial<_60.DepositParams>): _60.DepositParams;
                fromAmino(object: _60.DepositParamsAmino): _60.DepositParams;
                toAmino(message: _60.DepositParams): _60.DepositParamsAmino;
                fromAminoMsg(object: _60.DepositParamsAminoMsg): _60.DepositParams;
                toAminoMsg(message: _60.DepositParams): _60.DepositParamsAminoMsg;
                fromProtoMsg(message: _60.DepositParamsProtoMsg): _60.DepositParams;
                toProto(message: _60.DepositParams): Uint8Array;
                toProtoMsg(message: _60.DepositParams): _60.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _60.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.VotingParams;
                fromJSON(object: any): _60.VotingParams;
                toJSON(message: _60.VotingParams): unknown;
                fromPartial(object: Partial<_60.VotingParams>): _60.VotingParams;
                fromAmino(object: _60.VotingParamsAmino): _60.VotingParams;
                toAmino(message: _60.VotingParams): _60.VotingParamsAmino;
                fromAminoMsg(object: _60.VotingParamsAminoMsg): _60.VotingParams;
                toAminoMsg(message: _60.VotingParams): _60.VotingParamsAminoMsg;
                fromProtoMsg(message: _60.VotingParamsProtoMsg): _60.VotingParams;
                toProto(message: _60.VotingParams): Uint8Array;
                toProtoMsg(message: _60.VotingParams): _60.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _60.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.TallyParams;
                fromJSON(object: any): _60.TallyParams;
                toJSON(message: _60.TallyParams): unknown;
                fromPartial(object: Partial<_60.TallyParams>): _60.TallyParams;
                fromAmino(object: _60.TallyParamsAmino): _60.TallyParams;
                toAmino(message: _60.TallyParams): _60.TallyParamsAmino;
                fromAminoMsg(object: _60.TallyParamsAminoMsg): _60.TallyParams;
                toAminoMsg(message: _60.TallyParams): _60.TallyParamsAminoMsg;
                fromProtoMsg(message: _60.TallyParamsProtoMsg): _60.TallyParams;
                toProto(message: _60.TallyParams): Uint8Array;
                toProtoMsg(message: _60.TallyParams): _60.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GenesisState;
                fromJSON(object: any): _59.GenesisState;
                toJSON(message: _59.GenesisState): unknown;
                fromPartial(object: Partial<_59.GenesisState>): _59.GenesisState;
                fromAmino(object: _59.GenesisStateAmino): _59.GenesisState;
                toAmino(message: _59.GenesisState): _59.GenesisStateAmino;
                fromAminoMsg(object: _59.GenesisStateAminoMsg): _59.GenesisState;
                toAminoMsg(message: _59.GenesisState): _59.GenesisStateAminoMsg;
                fromProtoMsg(message: _59.GenesisStateProtoMsg): _59.GenesisState;
                toProto(message: _59.GenesisState): Uint8Array;
                toProtoMsg(message: _59.GenesisState): _59.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _65.QueryGroupInfoRequest): Promise<_65.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _65.QueryGroupPolicyInfoRequest): Promise<_65.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _65.QueryGroupMembersRequest): Promise<_65.QueryGroupMembersResponse>;
                groupsByAdmin(request: _65.QueryGroupsByAdminRequest): Promise<_65.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _65.QueryGroupPoliciesByGroupRequest): Promise<_65.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _65.QueryGroupPoliciesByAdminRequest): Promise<_65.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _65.QueryProposalRequest): Promise<_65.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _65.QueryProposalsByGroupPolicyRequest): Promise<_65.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _65.QueryVoteByProposalVoterRequest): Promise<_65.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _65.QueryVotesByProposalRequest): Promise<_65.QueryVotesByProposalResponse>;
                votesByVoter(request: _65.QueryVotesByVoterRequest): Promise<_65.QueryVotesByVoterResponse>;
                groupsByMember(request: _65.QueryGroupsByMemberRequest): Promise<_65.QueryGroupsByMemberResponse>;
                tallyResult(request: _65.QueryTallyResultRequest): Promise<_65.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _66.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _66.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _66.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _66.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _66.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _66.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _66.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _66.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _66.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _66.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _66.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _66.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _66.MsgCreateGroup): {
                        typeUrl: string;
                        value: _66.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _66.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _66.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _66.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _66.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _66.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _66.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _66.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _66.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _66.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _66.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _66.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _66.MsgWithdrawProposal;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    exec(value: _66.MsgExec): {
                        typeUrl: string;
                        value: _66.MsgExec;
                    };
                    leaveGroup(value: _66.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _66.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _66.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _66.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _66.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _66.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _66.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _66.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _66.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _66.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _66.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _66.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _66.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _66.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _66.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _66.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _66.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _66.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _66.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _66.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _66.MsgCreateGroup): {
                        typeUrl: string;
                        value: _66.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _66.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _66.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _66.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _66.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _66.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _66.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _66.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _66.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _66.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _66.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _66.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _66.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _66.MsgWithdrawProposal;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    exec(value: _66.MsgExec): {
                        typeUrl: string;
                        value: _66.MsgExec;
                    };
                    leaveGroup(value: _66.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _66.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _66.MsgCreateGroup) => _66.MsgCreateGroupAmino;
                    fromAmino: (object: _66.MsgCreateGroupAmino) => _66.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _66.MsgUpdateGroupMembers) => _66.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _66.MsgUpdateGroupMembersAmino) => _66.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _66.MsgUpdateGroupAdmin) => _66.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _66.MsgUpdateGroupAdminAmino) => _66.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _66.MsgUpdateGroupMetadata) => _66.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _66.MsgUpdateGroupMetadataAmino) => _66.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _66.MsgCreateGroupPolicy) => _66.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _66.MsgCreateGroupPolicyAmino) => _66.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _66.MsgCreateGroupWithPolicy) => _66.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _66.MsgCreateGroupWithPolicyAmino) => _66.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _66.MsgUpdateGroupPolicyAdmin) => _66.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _66.MsgUpdateGroupPolicyAdminAmino) => _66.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _66.MsgUpdateGroupPolicyDecisionPolicy) => _66.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _66.MsgUpdateGroupPolicyDecisionPolicyAmino) => _66.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _66.MsgUpdateGroupPolicyMetadata) => _66.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _66.MsgUpdateGroupPolicyMetadataAmino) => _66.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _66.MsgSubmitProposal) => _66.MsgSubmitProposalAmino;
                    fromAmino: (object: _66.MsgSubmitProposalAmino) => _66.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _66.MsgWithdrawProposal) => _66.MsgWithdrawProposalAmino;
                    fromAmino: (object: _66.MsgWithdrawProposalAmino) => _66.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _66.MsgVote) => _66.MsgVoteAmino;
                    fromAmino: (object: _66.MsgVoteAmino) => _66.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _66.MsgExec) => _66.MsgExecAmino;
                    fromAmino: (object: _66.MsgExecAmino) => _66.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _66.MsgLeaveGroup) => _66.MsgLeaveGroupAmino;
                    fromAmino: (object: _66.MsgLeaveGroupAmino) => _66.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _67.VoteOption;
            voteOptionToJSON(object: _67.VoteOption): string;
            proposalStatusFromJSON(object: any): _67.ProposalStatus;
            proposalStatusToJSON(object: _67.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _67.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _67.ProposalExecutorResult): string;
            VoteOption: typeof _67.VoteOption;
            VoteOptionSDKType: typeof _67.VoteOption;
            VoteOptionAmino: typeof _67.VoteOption;
            ProposalStatus: typeof _67.ProposalStatus;
            ProposalStatusSDKType: typeof _67.ProposalStatus;
            ProposalStatusAmino: typeof _67.ProposalStatus;
            ProposalExecutorResult: typeof _67.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _67.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _67.ProposalExecutorResult;
            Member: {
                encode(message: _67.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Member;
                fromJSON(object: any): _67.Member;
                toJSON(message: _67.Member): unknown;
                fromPartial(object: Partial<_67.Member>): _67.Member;
                fromAmino(object: _67.MemberAmino): _67.Member;
                toAmino(message: _67.Member): _67.MemberAmino;
                fromAminoMsg(object: _67.MemberAminoMsg): _67.Member;
                toAminoMsg(message: _67.Member): _67.MemberAminoMsg;
                fromProtoMsg(message: _67.MemberProtoMsg): _67.Member;
                toProto(message: _67.Member): Uint8Array;
                toProtoMsg(message: _67.Member): _67.MemberProtoMsg;
            };
            MemberRequest: {
                encode(message: _67.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MemberRequest;
                fromJSON(object: any): _67.MemberRequest;
                toJSON(message: _67.MemberRequest): unknown;
                fromPartial(object: Partial<_67.MemberRequest>): _67.MemberRequest;
                fromAmino(object: _67.MemberRequestAmino): _67.MemberRequest;
                toAmino(message: _67.MemberRequest): _67.MemberRequestAmino;
                fromAminoMsg(object: _67.MemberRequestAminoMsg): _67.MemberRequest;
                toAminoMsg(message: _67.MemberRequest): _67.MemberRequestAminoMsg;
                fromProtoMsg(message: _67.MemberRequestProtoMsg): _67.MemberRequest;
                toProto(message: _67.MemberRequest): Uint8Array;
                toProtoMsg(message: _67.MemberRequest): _67.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                encode(message: _67.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.ThresholdDecisionPolicy;
                fromJSON(object: any): _67.ThresholdDecisionPolicy;
                toJSON(message: _67.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_67.ThresholdDecisionPolicy>): _67.ThresholdDecisionPolicy;
                fromAmino(object: _67.ThresholdDecisionPolicyAmino): _67.ThresholdDecisionPolicy;
                toAmino(message: _67.ThresholdDecisionPolicy): _67.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _67.ThresholdDecisionPolicyAminoMsg): _67.ThresholdDecisionPolicy;
                toAminoMsg(message: _67.ThresholdDecisionPolicy): _67.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _67.ThresholdDecisionPolicyProtoMsg): _67.ThresholdDecisionPolicy;
                toProto(message: _67.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _67.ThresholdDecisionPolicy): _67.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                encode(message: _67.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.PercentageDecisionPolicy;
                fromJSON(object: any): _67.PercentageDecisionPolicy;
                toJSON(message: _67.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_67.PercentageDecisionPolicy>): _67.PercentageDecisionPolicy;
                fromAmino(object: _67.PercentageDecisionPolicyAmino): _67.PercentageDecisionPolicy;
                toAmino(message: _67.PercentageDecisionPolicy): _67.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _67.PercentageDecisionPolicyAminoMsg): _67.PercentageDecisionPolicy;
                toAminoMsg(message: _67.PercentageDecisionPolicy): _67.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _67.PercentageDecisionPolicyProtoMsg): _67.PercentageDecisionPolicy;
                toProto(message: _67.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _67.PercentageDecisionPolicy): _67.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                encode(message: _67.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.DecisionPolicyWindows;
                fromJSON(object: any): _67.DecisionPolicyWindows;
                toJSON(message: _67.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_67.DecisionPolicyWindows>): _67.DecisionPolicyWindows;
                fromAmino(object: _67.DecisionPolicyWindowsAmino): _67.DecisionPolicyWindows;
                toAmino(message: _67.DecisionPolicyWindows): _67.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _67.DecisionPolicyWindowsAminoMsg): _67.DecisionPolicyWindows;
                toAminoMsg(message: _67.DecisionPolicyWindows): _67.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _67.DecisionPolicyWindowsProtoMsg): _67.DecisionPolicyWindows;
                toProto(message: _67.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _67.DecisionPolicyWindows): _67.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                encode(message: _67.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.GroupInfo;
                fromJSON(object: any): _67.GroupInfo;
                toJSON(message: _67.GroupInfo): unknown;
                fromPartial(object: Partial<_67.GroupInfo>): _67.GroupInfo;
                fromAmino(object: _67.GroupInfoAmino): _67.GroupInfo;
                toAmino(message: _67.GroupInfo): _67.GroupInfoAmino;
                fromAminoMsg(object: _67.GroupInfoAminoMsg): _67.GroupInfo;
                toAminoMsg(message: _67.GroupInfo): _67.GroupInfoAminoMsg;
                fromProtoMsg(message: _67.GroupInfoProtoMsg): _67.GroupInfo;
                toProto(message: _67.GroupInfo): Uint8Array;
                toProtoMsg(message: _67.GroupInfo): _67.GroupInfoProtoMsg;
            };
            GroupMember: {
                encode(message: _67.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.GroupMember;
                fromJSON(object: any): _67.GroupMember;
                toJSON(message: _67.GroupMember): unknown;
                fromPartial(object: Partial<_67.GroupMember>): _67.GroupMember;
                fromAmino(object: _67.GroupMemberAmino): _67.GroupMember;
                toAmino(message: _67.GroupMember): _67.GroupMemberAmino;
                fromAminoMsg(object: _67.GroupMemberAminoMsg): _67.GroupMember;
                toAminoMsg(message: _67.GroupMember): _67.GroupMemberAminoMsg;
                fromProtoMsg(message: _67.GroupMemberProtoMsg): _67.GroupMember;
                toProto(message: _67.GroupMember): Uint8Array;
                toProtoMsg(message: _67.GroupMember): _67.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                encode(message: _67.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.GroupPolicyInfo;
                fromJSON(object: any): _67.GroupPolicyInfo;
                toJSON(message: _67.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_67.GroupPolicyInfo>): _67.GroupPolicyInfo;
                fromAmino(object: _67.GroupPolicyInfoAmino): _67.GroupPolicyInfo;
                toAmino(message: _67.GroupPolicyInfo): _67.GroupPolicyInfoAmino;
                fromAminoMsg(object: _67.GroupPolicyInfoAminoMsg): _67.GroupPolicyInfo;
                toAminoMsg(message: _67.GroupPolicyInfo): _67.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _67.GroupPolicyInfoProtoMsg): _67.GroupPolicyInfo;
                toProto(message: _67.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _67.GroupPolicyInfo): _67.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                encode(message: _67.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Proposal;
                fromJSON(object: any): _67.Proposal;
                toJSON(message: _67.Proposal): unknown;
                fromPartial(object: Partial<_67.Proposal>): _67.Proposal;
                fromAmino(object: _67.ProposalAmino): _67.Proposal;
                toAmino(message: _67.Proposal): _67.ProposalAmino;
                fromAminoMsg(object: _67.ProposalAminoMsg): _67.Proposal;
                toAminoMsg(message: _67.Proposal): _67.ProposalAminoMsg;
                fromProtoMsg(message: _67.ProposalProtoMsg): _67.Proposal;
                toProto(message: _67.Proposal): Uint8Array;
                toProtoMsg(message: _67.Proposal): _67.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _67.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.TallyResult;
                fromJSON(object: any): _67.TallyResult;
                toJSON(message: _67.TallyResult): unknown;
                fromPartial(object: Partial<_67.TallyResult>): _67.TallyResult;
                fromAmino(object: _67.TallyResultAmino): _67.TallyResult;
                toAmino(message: _67.TallyResult): _67.TallyResultAmino;
                fromAminoMsg(object: _67.TallyResultAminoMsg): _67.TallyResult;
                toAminoMsg(message: _67.TallyResult): _67.TallyResultAminoMsg;
                fromProtoMsg(message: _67.TallyResultProtoMsg): _67.TallyResult;
                toProto(message: _67.TallyResult): Uint8Array;
                toProtoMsg(message: _67.TallyResult): _67.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _67.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Vote;
                fromJSON(object: any): _67.Vote;
                toJSON(message: _67.Vote): unknown;
                fromPartial(object: Partial<_67.Vote>): _67.Vote;
                fromAmino(object: _67.VoteAmino): _67.Vote;
                toAmino(message: _67.Vote): _67.VoteAmino;
                fromAminoMsg(object: _67.VoteAminoMsg): _67.Vote;
                toAminoMsg(message: _67.Vote): _67.VoteAminoMsg;
                fromProtoMsg(message: _67.VoteProtoMsg): _67.Vote;
                toProto(message: _67.Vote): Uint8Array;
                toProtoMsg(message: _67.Vote): _67.VoteProtoMsg;
            };
            DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _67.ThresholdDecisionPolicy | _67.PercentageDecisionPolicy;
            DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _66.Exec;
            execToJSON(object: _66.Exec): string;
            Exec: typeof _66.Exec;
            ExecSDKType: typeof _66.Exec;
            ExecAmino: typeof _66.Exec;
            MsgCreateGroup: {
                encode(message: _66.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgCreateGroup;
                fromJSON(object: any): _66.MsgCreateGroup;
                toJSON(message: _66.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_66.MsgCreateGroup>): _66.MsgCreateGroup;
                fromAmino(object: _66.MsgCreateGroupAmino): _66.MsgCreateGroup;
                toAmino(message: _66.MsgCreateGroup): _66.MsgCreateGroupAmino;
                fromAminoMsg(object: _66.MsgCreateGroupAminoMsg): _66.MsgCreateGroup;
                toAminoMsg(message: _66.MsgCreateGroup): _66.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _66.MsgCreateGroupProtoMsg): _66.MsgCreateGroup;
                toProto(message: _66.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _66.MsgCreateGroup): _66.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                encode(message: _66.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgCreateGroupResponse;
                fromJSON(object: any): _66.MsgCreateGroupResponse;
                toJSON(message: _66.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_66.MsgCreateGroupResponse>): _66.MsgCreateGroupResponse;
                fromAmino(object: _66.MsgCreateGroupResponseAmino): _66.MsgCreateGroupResponse;
                toAmino(message: _66.MsgCreateGroupResponse): _66.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _66.MsgCreateGroupResponseAminoMsg): _66.MsgCreateGroupResponse;
                toAminoMsg(message: _66.MsgCreateGroupResponse): _66.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _66.MsgCreateGroupResponseProtoMsg): _66.MsgCreateGroupResponse;
                toProto(message: _66.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _66.MsgCreateGroupResponse): _66.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                encode(message: _66.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgUpdateGroupMembers;
                fromJSON(object: any): _66.MsgUpdateGroupMembers;
                toJSON(message: _66.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_66.MsgUpdateGroupMembers>): _66.MsgUpdateGroupMembers;
                fromAmino(object: _66.MsgUpdateGroupMembersAmino): _66.MsgUpdateGroupMembers;
                toAmino(message: _66.MsgUpdateGroupMembers): _66.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _66.MsgUpdateGroupMembersAminoMsg): _66.MsgUpdateGroupMembers;
                toAminoMsg(message: _66.MsgUpdateGroupMembers): _66.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateGroupMembersProtoMsg): _66.MsgUpdateGroupMembers;
                toProto(message: _66.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateGroupMembers): _66.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _66.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _66.MsgUpdateGroupMembersResponse;
                toJSON(_: _66.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_66.MsgUpdateGroupMembersResponse>): _66.MsgUpdateGroupMembersResponse;
                fromAmino(_: _66.MsgUpdateGroupMembersResponseAmino): _66.MsgUpdateGroupMembersResponse;
                toAmino(_: _66.MsgUpdateGroupMembersResponse): _66.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _66.MsgUpdateGroupMembersResponseAminoMsg): _66.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _66.MsgUpdateGroupMembersResponse): _66.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateGroupMembersResponseProtoMsg): _66.MsgUpdateGroupMembersResponse;
                toProto(message: _66.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateGroupMembersResponse): _66.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _66.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgUpdateGroupAdmin;
                fromJSON(object: any): _66.MsgUpdateGroupAdmin;
                toJSON(message: _66.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_66.MsgUpdateGroupAdmin>): _66.MsgUpdateGroupAdmin;
                fromAmino(object: _66.MsgUpdateGroupAdminAmino): _66.MsgUpdateGroupAdmin;
                toAmino(message: _66.MsgUpdateGroupAdmin): _66.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _66.MsgUpdateGroupAdminAminoMsg): _66.MsgUpdateGroupAdmin;
                toAminoMsg(message: _66.MsgUpdateGroupAdmin): _66.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateGroupAdminProtoMsg): _66.MsgUpdateGroupAdmin;
                toProto(message: _66.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateGroupAdmin): _66.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _66.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _66.MsgUpdateGroupAdminResponse;
                toJSON(_: _66.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_66.MsgUpdateGroupAdminResponse>): _66.MsgUpdateGroupAdminResponse;
                fromAmino(_: _66.MsgUpdateGroupAdminResponseAmino): _66.MsgUpdateGroupAdminResponse;
                toAmino(_: _66.MsgUpdateGroupAdminResponse): _66.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _66.MsgUpdateGroupAdminResponseAminoMsg): _66.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _66.MsgUpdateGroupAdminResponse): _66.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateGroupAdminResponseProtoMsg): _66.MsgUpdateGroupAdminResponse;
                toProto(message: _66.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateGroupAdminResponse): _66.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _66.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgUpdateGroupMetadata;
                fromJSON(object: any): _66.MsgUpdateGroupMetadata;
                toJSON(message: _66.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_66.MsgUpdateGroupMetadata>): _66.MsgUpdateGroupMetadata;
                fromAmino(object: _66.MsgUpdateGroupMetadataAmino): _66.MsgUpdateGroupMetadata;
                toAmino(message: _66.MsgUpdateGroupMetadata): _66.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _66.MsgUpdateGroupMetadataAminoMsg): _66.MsgUpdateGroupMetadata;
                toAminoMsg(message: _66.MsgUpdateGroupMetadata): _66.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateGroupMetadataProtoMsg): _66.MsgUpdateGroupMetadata;
                toProto(message: _66.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateGroupMetadata): _66.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _66.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _66.MsgUpdateGroupMetadataResponse;
                toJSON(_: _66.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_66.MsgUpdateGroupMetadataResponse>): _66.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _66.MsgUpdateGroupMetadataResponseAmino): _66.MsgUpdateGroupMetadataResponse;
                toAmino(_: _66.MsgUpdateGroupMetadataResponse): _66.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _66.MsgUpdateGroupMetadataResponseAminoMsg): _66.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _66.MsgUpdateGroupMetadataResponse): _66.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateGroupMetadataResponseProtoMsg): _66.MsgUpdateGroupMetadataResponse;
                toProto(message: _66.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateGroupMetadataResponse): _66.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                encode(message: _66.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgCreateGroupPolicy;
                fromJSON(object: any): _66.MsgCreateGroupPolicy;
                toJSON(message: _66.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_66.MsgCreateGroupPolicy>): _66.MsgCreateGroupPolicy;
                fromAmino(object: _66.MsgCreateGroupPolicyAmino): _66.MsgCreateGroupPolicy;
                toAmino(message: _66.MsgCreateGroupPolicy): _66.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _66.MsgCreateGroupPolicyAminoMsg): _66.MsgCreateGroupPolicy;
                toAminoMsg(message: _66.MsgCreateGroupPolicy): _66.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _66.MsgCreateGroupPolicyProtoMsg): _66.MsgCreateGroupPolicy;
                toProto(message: _66.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _66.MsgCreateGroupPolicy): _66.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _66.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _66.MsgCreateGroupPolicyResponse;
                toJSON(message: _66.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_66.MsgCreateGroupPolicyResponse>): _66.MsgCreateGroupPolicyResponse;
                fromAmino(object: _66.MsgCreateGroupPolicyResponseAmino): _66.MsgCreateGroupPolicyResponse;
                toAmino(message: _66.MsgCreateGroupPolicyResponse): _66.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _66.MsgCreateGroupPolicyResponseAminoMsg): _66.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _66.MsgCreateGroupPolicyResponse): _66.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _66.MsgCreateGroupPolicyResponseProtoMsg): _66.MsgCreateGroupPolicyResponse;
                toProto(message: _66.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _66.MsgCreateGroupPolicyResponse): _66.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _66.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _66.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _66.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_66.MsgUpdateGroupPolicyAdmin>): _66.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _66.MsgUpdateGroupPolicyAdminAmino): _66.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _66.MsgUpdateGroupPolicyAdmin): _66.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _66.MsgUpdateGroupPolicyAdminAminoMsg): _66.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _66.MsgUpdateGroupPolicyAdmin): _66.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateGroupPolicyAdminProtoMsg): _66.MsgUpdateGroupPolicyAdmin;
                toProto(message: _66.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateGroupPolicyAdmin): _66.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _66.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _66.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _66.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_66.MsgUpdateGroupPolicyAdminResponse>): _66.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _66.MsgUpdateGroupPolicyAdminResponseAmino): _66.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _66.MsgUpdateGroupPolicyAdminResponse): _66.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _66.MsgUpdateGroupPolicyAdminResponseAminoMsg): _66.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _66.MsgUpdateGroupPolicyAdminResponse): _66.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateGroupPolicyAdminResponseProtoMsg): _66.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _66.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateGroupPolicyAdminResponse): _66.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _66.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _66.MsgCreateGroupWithPolicy;
                toJSON(message: _66.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_66.MsgCreateGroupWithPolicy>): _66.MsgCreateGroupWithPolicy;
                fromAmino(object: _66.MsgCreateGroupWithPolicyAmino): _66.MsgCreateGroupWithPolicy;
                toAmino(message: _66.MsgCreateGroupWithPolicy): _66.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _66.MsgCreateGroupWithPolicyAminoMsg): _66.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _66.MsgCreateGroupWithPolicy): _66.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _66.MsgCreateGroupWithPolicyProtoMsg): _66.MsgCreateGroupWithPolicy;
                toProto(message: _66.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _66.MsgCreateGroupWithPolicy): _66.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _66.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _66.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _66.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_66.MsgCreateGroupWithPolicyResponse>): _66.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _66.MsgCreateGroupWithPolicyResponseAmino): _66.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _66.MsgCreateGroupWithPolicyResponse): _66.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _66.MsgCreateGroupWithPolicyResponseAminoMsg): _66.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _66.MsgCreateGroupWithPolicyResponse): _66.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _66.MsgCreateGroupWithPolicyResponseProtoMsg): _66.MsgCreateGroupWithPolicyResponse;
                toProto(message: _66.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _66.MsgCreateGroupWithPolicyResponse): _66.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _66.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _66.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _66.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_66.MsgUpdateGroupPolicyDecisionPolicy>): _66.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _66.MsgUpdateGroupPolicyDecisionPolicyAmino): _66.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _66.MsgUpdateGroupPolicyDecisionPolicy): _66.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _66.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _66.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _66.MsgUpdateGroupPolicyDecisionPolicy): _66.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _66.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _66.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateGroupPolicyDecisionPolicy): _66.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _66.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _66.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _66.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_66.MsgUpdateGroupPolicyDecisionPolicyResponse>): _66.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _66.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _66.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _66.MsgUpdateGroupPolicyDecisionPolicyResponse): _66.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _66.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _66.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _66.MsgUpdateGroupPolicyDecisionPolicyResponse): _66.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _66.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _66.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateGroupPolicyDecisionPolicyResponse): _66.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _66.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _66.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _66.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_66.MsgUpdateGroupPolicyMetadata>): _66.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _66.MsgUpdateGroupPolicyMetadataAmino): _66.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _66.MsgUpdateGroupPolicyMetadata): _66.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _66.MsgUpdateGroupPolicyMetadataAminoMsg): _66.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _66.MsgUpdateGroupPolicyMetadata): _66.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateGroupPolicyMetadataProtoMsg): _66.MsgUpdateGroupPolicyMetadata;
                toProto(message: _66.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateGroupPolicyMetadata): _66.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _66.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _66.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _66.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_66.MsgUpdateGroupPolicyMetadataResponse>): _66.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _66.MsgUpdateGroupPolicyMetadataResponseAmino): _66.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _66.MsgUpdateGroupPolicyMetadataResponse): _66.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _66.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _66.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _66.MsgUpdateGroupPolicyMetadataResponse): _66.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _66.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _66.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateGroupPolicyMetadataResponse): _66.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                encode(message: _66.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgSubmitProposal;
                fromJSON(object: any): _66.MsgSubmitProposal;
                toJSON(message: _66.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_66.MsgSubmitProposal>): _66.MsgSubmitProposal;
                fromAmino(object: _66.MsgSubmitProposalAmino): _66.MsgSubmitProposal;
                toAmino(message: _66.MsgSubmitProposal): _66.MsgSubmitProposalAmino;
                fromAminoMsg(object: _66.MsgSubmitProposalAminoMsg): _66.MsgSubmitProposal;
                toAminoMsg(message: _66.MsgSubmitProposal): _66.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _66.MsgSubmitProposalProtoMsg): _66.MsgSubmitProposal;
                toProto(message: _66.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _66.MsgSubmitProposal): _66.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _66.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgSubmitProposalResponse;
                fromJSON(object: any): _66.MsgSubmitProposalResponse;
                toJSON(message: _66.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_66.MsgSubmitProposalResponse>): _66.MsgSubmitProposalResponse;
                fromAmino(object: _66.MsgSubmitProposalResponseAmino): _66.MsgSubmitProposalResponse;
                toAmino(message: _66.MsgSubmitProposalResponse): _66.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _66.MsgSubmitProposalResponseAminoMsg): _66.MsgSubmitProposalResponse;
                toAminoMsg(message: _66.MsgSubmitProposalResponse): _66.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _66.MsgSubmitProposalResponseProtoMsg): _66.MsgSubmitProposalResponse;
                toProto(message: _66.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _66.MsgSubmitProposalResponse): _66.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                encode(message: _66.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgWithdrawProposal;
                fromJSON(object: any): _66.MsgWithdrawProposal;
                toJSON(message: _66.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_66.MsgWithdrawProposal>): _66.MsgWithdrawProposal;
                fromAmino(object: _66.MsgWithdrawProposalAmino): _66.MsgWithdrawProposal;
                toAmino(message: _66.MsgWithdrawProposal): _66.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _66.MsgWithdrawProposalAminoMsg): _66.MsgWithdrawProposal;
                toAminoMsg(message: _66.MsgWithdrawProposal): _66.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _66.MsgWithdrawProposalProtoMsg): _66.MsgWithdrawProposal;
                toProto(message: _66.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _66.MsgWithdrawProposal): _66.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _66.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgWithdrawProposalResponse;
                fromJSON(_: any): _66.MsgWithdrawProposalResponse;
                toJSON(_: _66.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_66.MsgWithdrawProposalResponse>): _66.MsgWithdrawProposalResponse;
                fromAmino(_: _66.MsgWithdrawProposalResponseAmino): _66.MsgWithdrawProposalResponse;
                toAmino(_: _66.MsgWithdrawProposalResponse): _66.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _66.MsgWithdrawProposalResponseAminoMsg): _66.MsgWithdrawProposalResponse;
                toAminoMsg(message: _66.MsgWithdrawProposalResponse): _66.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _66.MsgWithdrawProposalResponseProtoMsg): _66.MsgWithdrawProposalResponse;
                toProto(message: _66.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _66.MsgWithdrawProposalResponse): _66.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _66.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgVote;
                fromJSON(object: any): _66.MsgVote;
                toJSON(message: _66.MsgVote): unknown;
                fromPartial(object: Partial<_66.MsgVote>): _66.MsgVote;
                fromAmino(object: _66.MsgVoteAmino): _66.MsgVote;
                toAmino(message: _66.MsgVote): _66.MsgVoteAmino;
                fromAminoMsg(object: _66.MsgVoteAminoMsg): _66.MsgVote;
                toAminoMsg(message: _66.MsgVote): _66.MsgVoteAminoMsg;
                fromProtoMsg(message: _66.MsgVoteProtoMsg): _66.MsgVote;
                toProto(message: _66.MsgVote): Uint8Array;
                toProtoMsg(message: _66.MsgVote): _66.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _66.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgVoteResponse;
                fromJSON(_: any): _66.MsgVoteResponse;
                toJSON(_: _66.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_66.MsgVoteResponse>): _66.MsgVoteResponse;
                fromAmino(_: _66.MsgVoteResponseAmino): _66.MsgVoteResponse;
                toAmino(_: _66.MsgVoteResponse): _66.MsgVoteResponseAmino;
                fromAminoMsg(object: _66.MsgVoteResponseAminoMsg): _66.MsgVoteResponse;
                toAminoMsg(message: _66.MsgVoteResponse): _66.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _66.MsgVoteResponseProtoMsg): _66.MsgVoteResponse;
                toProto(message: _66.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _66.MsgVoteResponse): _66.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _66.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgExec;
                fromJSON(object: any): _66.MsgExec;
                toJSON(message: _66.MsgExec): unknown;
                fromPartial(object: Partial<_66.MsgExec>): _66.MsgExec;
                fromAmino(object: _66.MsgExecAmino): _66.MsgExec;
                toAmino(message: _66.MsgExec): _66.MsgExecAmino;
                fromAminoMsg(object: _66.MsgExecAminoMsg): _66.MsgExec;
                toAminoMsg(message: _66.MsgExec): _66.MsgExecAminoMsg;
                fromProtoMsg(message: _66.MsgExecProtoMsg): _66.MsgExec;
                toProto(message: _66.MsgExec): Uint8Array;
                toProtoMsg(message: _66.MsgExec): _66.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                encode(message: _66.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgExecResponse;
                fromJSON(object: any): _66.MsgExecResponse;
                toJSON(message: _66.MsgExecResponse): unknown;
                fromPartial(object: Partial<_66.MsgExecResponse>): _66.MsgExecResponse;
                fromAmino(object: _66.MsgExecResponseAmino): _66.MsgExecResponse;
                toAmino(message: _66.MsgExecResponse): _66.MsgExecResponseAmino;
                fromAminoMsg(object: _66.MsgExecResponseAminoMsg): _66.MsgExecResponse;
                toAminoMsg(message: _66.MsgExecResponse): _66.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _66.MsgExecResponseProtoMsg): _66.MsgExecResponse;
                toProto(message: _66.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _66.MsgExecResponse): _66.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                encode(message: _66.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgLeaveGroup;
                fromJSON(object: any): _66.MsgLeaveGroup;
                toJSON(message: _66.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_66.MsgLeaveGroup>): _66.MsgLeaveGroup;
                fromAmino(object: _66.MsgLeaveGroupAmino): _66.MsgLeaveGroup;
                toAmino(message: _66.MsgLeaveGroup): _66.MsgLeaveGroupAmino;
                fromAminoMsg(object: _66.MsgLeaveGroupAminoMsg): _66.MsgLeaveGroup;
                toAminoMsg(message: _66.MsgLeaveGroup): _66.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _66.MsgLeaveGroupProtoMsg): _66.MsgLeaveGroup;
                toProto(message: _66.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _66.MsgLeaveGroup): _66.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                encode(_: _66.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgLeaveGroupResponse;
                fromJSON(_: any): _66.MsgLeaveGroupResponse;
                toJSON(_: _66.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_66.MsgLeaveGroupResponse>): _66.MsgLeaveGroupResponse;
                fromAmino(_: _66.MsgLeaveGroupResponseAmino): _66.MsgLeaveGroupResponse;
                toAmino(_: _66.MsgLeaveGroupResponse): _66.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _66.MsgLeaveGroupResponseAminoMsg): _66.MsgLeaveGroupResponse;
                toAminoMsg(message: _66.MsgLeaveGroupResponse): _66.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _66.MsgLeaveGroupResponseProtoMsg): _66.MsgLeaveGroupResponse;
                toProto(message: _66.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _66.MsgLeaveGroupResponse): _66.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                encode(message: _65.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupInfoRequest;
                fromJSON(object: any): _65.QueryGroupInfoRequest;
                toJSON(message: _65.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_65.QueryGroupInfoRequest>): _65.QueryGroupInfoRequest;
                fromAmino(object: _65.QueryGroupInfoRequestAmino): _65.QueryGroupInfoRequest;
                toAmino(message: _65.QueryGroupInfoRequest): _65.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _65.QueryGroupInfoRequestAminoMsg): _65.QueryGroupInfoRequest;
                toAminoMsg(message: _65.QueryGroupInfoRequest): _65.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _65.QueryGroupInfoRequestProtoMsg): _65.QueryGroupInfoRequest;
                toProto(message: _65.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _65.QueryGroupInfoRequest): _65.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                encode(message: _65.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupInfoResponse;
                fromJSON(object: any): _65.QueryGroupInfoResponse;
                toJSON(message: _65.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_65.QueryGroupInfoResponse>): _65.QueryGroupInfoResponse;
                fromAmino(object: _65.QueryGroupInfoResponseAmino): _65.QueryGroupInfoResponse;
                toAmino(message: _65.QueryGroupInfoResponse): _65.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _65.QueryGroupInfoResponseAminoMsg): _65.QueryGroupInfoResponse;
                toAminoMsg(message: _65.QueryGroupInfoResponse): _65.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _65.QueryGroupInfoResponseProtoMsg): _65.QueryGroupInfoResponse;
                toProto(message: _65.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _65.QueryGroupInfoResponse): _65.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _65.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _65.QueryGroupPolicyInfoRequest;
                toJSON(message: _65.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_65.QueryGroupPolicyInfoRequest>): _65.QueryGroupPolicyInfoRequest;
                fromAmino(object: _65.QueryGroupPolicyInfoRequestAmino): _65.QueryGroupPolicyInfoRequest;
                toAmino(message: _65.QueryGroupPolicyInfoRequest): _65.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _65.QueryGroupPolicyInfoRequestAminoMsg): _65.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _65.QueryGroupPolicyInfoRequest): _65.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _65.QueryGroupPolicyInfoRequestProtoMsg): _65.QueryGroupPolicyInfoRequest;
                toProto(message: _65.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _65.QueryGroupPolicyInfoRequest): _65.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _65.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _65.QueryGroupPolicyInfoResponse;
                toJSON(message: _65.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_65.QueryGroupPolicyInfoResponse>): _65.QueryGroupPolicyInfoResponse;
                fromAmino(object: _65.QueryGroupPolicyInfoResponseAmino): _65.QueryGroupPolicyInfoResponse;
                toAmino(message: _65.QueryGroupPolicyInfoResponse): _65.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _65.QueryGroupPolicyInfoResponseAminoMsg): _65.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _65.QueryGroupPolicyInfoResponse): _65.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _65.QueryGroupPolicyInfoResponseProtoMsg): _65.QueryGroupPolicyInfoResponse;
                toProto(message: _65.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _65.QueryGroupPolicyInfoResponse): _65.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                encode(message: _65.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupMembersRequest;
                fromJSON(object: any): _65.QueryGroupMembersRequest;
                toJSON(message: _65.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_65.QueryGroupMembersRequest>): _65.QueryGroupMembersRequest;
                fromAmino(object: _65.QueryGroupMembersRequestAmino): _65.QueryGroupMembersRequest;
                toAmino(message: _65.QueryGroupMembersRequest): _65.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _65.QueryGroupMembersRequestAminoMsg): _65.QueryGroupMembersRequest;
                toAminoMsg(message: _65.QueryGroupMembersRequest): _65.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _65.QueryGroupMembersRequestProtoMsg): _65.QueryGroupMembersRequest;
                toProto(message: _65.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _65.QueryGroupMembersRequest): _65.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                encode(message: _65.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupMembersResponse;
                fromJSON(object: any): _65.QueryGroupMembersResponse;
                toJSON(message: _65.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_65.QueryGroupMembersResponse>): _65.QueryGroupMembersResponse;
                fromAmino(object: _65.QueryGroupMembersResponseAmino): _65.QueryGroupMembersResponse;
                toAmino(message: _65.QueryGroupMembersResponse): _65.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _65.QueryGroupMembersResponseAminoMsg): _65.QueryGroupMembersResponse;
                toAminoMsg(message: _65.QueryGroupMembersResponse): _65.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _65.QueryGroupMembersResponseProtoMsg): _65.QueryGroupMembersResponse;
                toProto(message: _65.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _65.QueryGroupMembersResponse): _65.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _65.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupsByAdminRequest;
                fromJSON(object: any): _65.QueryGroupsByAdminRequest;
                toJSON(message: _65.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_65.QueryGroupsByAdminRequest>): _65.QueryGroupsByAdminRequest;
                fromAmino(object: _65.QueryGroupsByAdminRequestAmino): _65.QueryGroupsByAdminRequest;
                toAmino(message: _65.QueryGroupsByAdminRequest): _65.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _65.QueryGroupsByAdminRequestAminoMsg): _65.QueryGroupsByAdminRequest;
                toAminoMsg(message: _65.QueryGroupsByAdminRequest): _65.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _65.QueryGroupsByAdminRequestProtoMsg): _65.QueryGroupsByAdminRequest;
                toProto(message: _65.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _65.QueryGroupsByAdminRequest): _65.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _65.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupsByAdminResponse;
                fromJSON(object: any): _65.QueryGroupsByAdminResponse;
                toJSON(message: _65.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_65.QueryGroupsByAdminResponse>): _65.QueryGroupsByAdminResponse;
                fromAmino(object: _65.QueryGroupsByAdminResponseAmino): _65.QueryGroupsByAdminResponse;
                toAmino(message: _65.QueryGroupsByAdminResponse): _65.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _65.QueryGroupsByAdminResponseAminoMsg): _65.QueryGroupsByAdminResponse;
                toAminoMsg(message: _65.QueryGroupsByAdminResponse): _65.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _65.QueryGroupsByAdminResponseProtoMsg): _65.QueryGroupsByAdminResponse;
                toProto(message: _65.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _65.QueryGroupsByAdminResponse): _65.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _65.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _65.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _65.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_65.QueryGroupPoliciesByGroupRequest>): _65.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _65.QueryGroupPoliciesByGroupRequestAmino): _65.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _65.QueryGroupPoliciesByGroupRequest): _65.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _65.QueryGroupPoliciesByGroupRequestAminoMsg): _65.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _65.QueryGroupPoliciesByGroupRequest): _65.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _65.QueryGroupPoliciesByGroupRequestProtoMsg): _65.QueryGroupPoliciesByGroupRequest;
                toProto(message: _65.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _65.QueryGroupPoliciesByGroupRequest): _65.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _65.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _65.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _65.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_65.QueryGroupPoliciesByGroupResponse>): _65.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _65.QueryGroupPoliciesByGroupResponseAmino): _65.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _65.QueryGroupPoliciesByGroupResponse): _65.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _65.QueryGroupPoliciesByGroupResponseAminoMsg): _65.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _65.QueryGroupPoliciesByGroupResponse): _65.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _65.QueryGroupPoliciesByGroupResponseProtoMsg): _65.QueryGroupPoliciesByGroupResponse;
                toProto(message: _65.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _65.QueryGroupPoliciesByGroupResponse): _65.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _65.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _65.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _65.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_65.QueryGroupPoliciesByAdminRequest>): _65.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _65.QueryGroupPoliciesByAdminRequestAmino): _65.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _65.QueryGroupPoliciesByAdminRequest): _65.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _65.QueryGroupPoliciesByAdminRequestAminoMsg): _65.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _65.QueryGroupPoliciesByAdminRequest): _65.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _65.QueryGroupPoliciesByAdminRequestProtoMsg): _65.QueryGroupPoliciesByAdminRequest;
                toProto(message: _65.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _65.QueryGroupPoliciesByAdminRequest): _65.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _65.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _65.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _65.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_65.QueryGroupPoliciesByAdminResponse>): _65.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _65.QueryGroupPoliciesByAdminResponseAmino): _65.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _65.QueryGroupPoliciesByAdminResponse): _65.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _65.QueryGroupPoliciesByAdminResponseAminoMsg): _65.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _65.QueryGroupPoliciesByAdminResponse): _65.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _65.QueryGroupPoliciesByAdminResponseProtoMsg): _65.QueryGroupPoliciesByAdminResponse;
                toProto(message: _65.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _65.QueryGroupPoliciesByAdminResponse): _65.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _65.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryProposalRequest;
                fromJSON(object: any): _65.QueryProposalRequest;
                toJSON(message: _65.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_65.QueryProposalRequest>): _65.QueryProposalRequest;
                fromAmino(object: _65.QueryProposalRequestAmino): _65.QueryProposalRequest;
                toAmino(message: _65.QueryProposalRequest): _65.QueryProposalRequestAmino;
                fromAminoMsg(object: _65.QueryProposalRequestAminoMsg): _65.QueryProposalRequest;
                toAminoMsg(message: _65.QueryProposalRequest): _65.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _65.QueryProposalRequestProtoMsg): _65.QueryProposalRequest;
                toProto(message: _65.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _65.QueryProposalRequest): _65.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _65.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryProposalResponse;
                fromJSON(object: any): _65.QueryProposalResponse;
                toJSON(message: _65.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_65.QueryProposalResponse>): _65.QueryProposalResponse;
                fromAmino(object: _65.QueryProposalResponseAmino): _65.QueryProposalResponse;
                toAmino(message: _65.QueryProposalResponse): _65.QueryProposalResponseAmino;
                fromAminoMsg(object: _65.QueryProposalResponseAminoMsg): _65.QueryProposalResponse;
                toAminoMsg(message: _65.QueryProposalResponse): _65.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _65.QueryProposalResponseProtoMsg): _65.QueryProposalResponse;
                toProto(message: _65.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _65.QueryProposalResponse): _65.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _65.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _65.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _65.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_65.QueryProposalsByGroupPolicyRequest>): _65.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _65.QueryProposalsByGroupPolicyRequestAmino): _65.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _65.QueryProposalsByGroupPolicyRequest): _65.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _65.QueryProposalsByGroupPolicyRequestAminoMsg): _65.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _65.QueryProposalsByGroupPolicyRequest): _65.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _65.QueryProposalsByGroupPolicyRequestProtoMsg): _65.QueryProposalsByGroupPolicyRequest;
                toProto(message: _65.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _65.QueryProposalsByGroupPolicyRequest): _65.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _65.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _65.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _65.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_65.QueryProposalsByGroupPolicyResponse>): _65.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _65.QueryProposalsByGroupPolicyResponseAmino): _65.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _65.QueryProposalsByGroupPolicyResponse): _65.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _65.QueryProposalsByGroupPolicyResponseAminoMsg): _65.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _65.QueryProposalsByGroupPolicyResponse): _65.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _65.QueryProposalsByGroupPolicyResponseProtoMsg): _65.QueryProposalsByGroupPolicyResponse;
                toProto(message: _65.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _65.QueryProposalsByGroupPolicyResponse): _65.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _65.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _65.QueryVoteByProposalVoterRequest;
                toJSON(message: _65.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_65.QueryVoteByProposalVoterRequest>): _65.QueryVoteByProposalVoterRequest;
                fromAmino(object: _65.QueryVoteByProposalVoterRequestAmino): _65.QueryVoteByProposalVoterRequest;
                toAmino(message: _65.QueryVoteByProposalVoterRequest): _65.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _65.QueryVoteByProposalVoterRequestAminoMsg): _65.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _65.QueryVoteByProposalVoterRequest): _65.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _65.QueryVoteByProposalVoterRequestProtoMsg): _65.QueryVoteByProposalVoterRequest;
                toProto(message: _65.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _65.QueryVoteByProposalVoterRequest): _65.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _65.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _65.QueryVoteByProposalVoterResponse;
                toJSON(message: _65.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_65.QueryVoteByProposalVoterResponse>): _65.QueryVoteByProposalVoterResponse;
                fromAmino(object: _65.QueryVoteByProposalVoterResponseAmino): _65.QueryVoteByProposalVoterResponse;
                toAmino(message: _65.QueryVoteByProposalVoterResponse): _65.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _65.QueryVoteByProposalVoterResponseAminoMsg): _65.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _65.QueryVoteByProposalVoterResponse): _65.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _65.QueryVoteByProposalVoterResponseProtoMsg): _65.QueryVoteByProposalVoterResponse;
                toProto(message: _65.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _65.QueryVoteByProposalVoterResponse): _65.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                encode(message: _65.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryVotesByProposalRequest;
                fromJSON(object: any): _65.QueryVotesByProposalRequest;
                toJSON(message: _65.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_65.QueryVotesByProposalRequest>): _65.QueryVotesByProposalRequest;
                fromAmino(object: _65.QueryVotesByProposalRequestAmino): _65.QueryVotesByProposalRequest;
                toAmino(message: _65.QueryVotesByProposalRequest): _65.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _65.QueryVotesByProposalRequestAminoMsg): _65.QueryVotesByProposalRequest;
                toAminoMsg(message: _65.QueryVotesByProposalRequest): _65.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _65.QueryVotesByProposalRequestProtoMsg): _65.QueryVotesByProposalRequest;
                toProto(message: _65.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _65.QueryVotesByProposalRequest): _65.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                encode(message: _65.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryVotesByProposalResponse;
                fromJSON(object: any): _65.QueryVotesByProposalResponse;
                toJSON(message: _65.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_65.QueryVotesByProposalResponse>): _65.QueryVotesByProposalResponse;
                fromAmino(object: _65.QueryVotesByProposalResponseAmino): _65.QueryVotesByProposalResponse;
                toAmino(message: _65.QueryVotesByProposalResponse): _65.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _65.QueryVotesByProposalResponseAminoMsg): _65.QueryVotesByProposalResponse;
                toAminoMsg(message: _65.QueryVotesByProposalResponse): _65.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _65.QueryVotesByProposalResponseProtoMsg): _65.QueryVotesByProposalResponse;
                toProto(message: _65.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _65.QueryVotesByProposalResponse): _65.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                encode(message: _65.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryVotesByVoterRequest;
                fromJSON(object: any): _65.QueryVotesByVoterRequest;
                toJSON(message: _65.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_65.QueryVotesByVoterRequest>): _65.QueryVotesByVoterRequest;
                fromAmino(object: _65.QueryVotesByVoterRequestAmino): _65.QueryVotesByVoterRequest;
                toAmino(message: _65.QueryVotesByVoterRequest): _65.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _65.QueryVotesByVoterRequestAminoMsg): _65.QueryVotesByVoterRequest;
                toAminoMsg(message: _65.QueryVotesByVoterRequest): _65.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _65.QueryVotesByVoterRequestProtoMsg): _65.QueryVotesByVoterRequest;
                toProto(message: _65.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _65.QueryVotesByVoterRequest): _65.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                encode(message: _65.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryVotesByVoterResponse;
                fromJSON(object: any): _65.QueryVotesByVoterResponse;
                toJSON(message: _65.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_65.QueryVotesByVoterResponse>): _65.QueryVotesByVoterResponse;
                fromAmino(object: _65.QueryVotesByVoterResponseAmino): _65.QueryVotesByVoterResponse;
                toAmino(message: _65.QueryVotesByVoterResponse): _65.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _65.QueryVotesByVoterResponseAminoMsg): _65.QueryVotesByVoterResponse;
                toAminoMsg(message: _65.QueryVotesByVoterResponse): _65.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _65.QueryVotesByVoterResponseProtoMsg): _65.QueryVotesByVoterResponse;
                toProto(message: _65.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _65.QueryVotesByVoterResponse): _65.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _65.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupsByMemberRequest;
                fromJSON(object: any): _65.QueryGroupsByMemberRequest;
                toJSON(message: _65.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_65.QueryGroupsByMemberRequest>): _65.QueryGroupsByMemberRequest;
                fromAmino(object: _65.QueryGroupsByMemberRequestAmino): _65.QueryGroupsByMemberRequest;
                toAmino(message: _65.QueryGroupsByMemberRequest): _65.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _65.QueryGroupsByMemberRequestAminoMsg): _65.QueryGroupsByMemberRequest;
                toAminoMsg(message: _65.QueryGroupsByMemberRequest): _65.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _65.QueryGroupsByMemberRequestProtoMsg): _65.QueryGroupsByMemberRequest;
                toProto(message: _65.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _65.QueryGroupsByMemberRequest): _65.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _65.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryGroupsByMemberResponse;
                fromJSON(object: any): _65.QueryGroupsByMemberResponse;
                toJSON(message: _65.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_65.QueryGroupsByMemberResponse>): _65.QueryGroupsByMemberResponse;
                fromAmino(object: _65.QueryGroupsByMemberResponseAmino): _65.QueryGroupsByMemberResponse;
                toAmino(message: _65.QueryGroupsByMemberResponse): _65.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _65.QueryGroupsByMemberResponseAminoMsg): _65.QueryGroupsByMemberResponse;
                toAminoMsg(message: _65.QueryGroupsByMemberResponse): _65.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _65.QueryGroupsByMemberResponseProtoMsg): _65.QueryGroupsByMemberResponse;
                toProto(message: _65.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _65.QueryGroupsByMemberResponse): _65.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _65.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryTallyResultRequest;
                fromJSON(object: any): _65.QueryTallyResultRequest;
                toJSON(message: _65.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_65.QueryTallyResultRequest>): _65.QueryTallyResultRequest;
                fromAmino(object: _65.QueryTallyResultRequestAmino): _65.QueryTallyResultRequest;
                toAmino(message: _65.QueryTallyResultRequest): _65.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _65.QueryTallyResultRequestAminoMsg): _65.QueryTallyResultRequest;
                toAminoMsg(message: _65.QueryTallyResultRequest): _65.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _65.QueryTallyResultRequestProtoMsg): _65.QueryTallyResultRequest;
                toProto(message: _65.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _65.QueryTallyResultRequest): _65.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _65.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryTallyResultResponse;
                fromJSON(object: any): _65.QueryTallyResultResponse;
                toJSON(message: _65.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_65.QueryTallyResultResponse>): _65.QueryTallyResultResponse;
                fromAmino(object: _65.QueryTallyResultResponseAmino): _65.QueryTallyResultResponse;
                toAmino(message: _65.QueryTallyResultResponse): _65.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _65.QueryTallyResultResponseAminoMsg): _65.QueryTallyResultResponse;
                toAminoMsg(message: _65.QueryTallyResultResponse): _65.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _65.QueryTallyResultResponseProtoMsg): _65.QueryTallyResultResponse;
                toProto(message: _65.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _65.QueryTallyResultResponse): _65.QueryTallyResultResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GenesisState;
                fromJSON(object: any): _64.GenesisState;
                toJSON(message: _64.GenesisState): unknown;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
                fromAmino(object: _64.GenesisStateAmino): _64.GenesisState;
                toAmino(message: _64.GenesisState): _64.GenesisStateAmino;
                fromAminoMsg(object: _64.GenesisStateAminoMsg): _64.GenesisState;
                toAminoMsg(message: _64.GenesisState): _64.GenesisStateAminoMsg;
                fromProtoMsg(message: _64.GenesisStateProtoMsg): _64.GenesisState;
                toProto(message: _64.GenesisState): Uint8Array;
                toProtoMsg(message: _64.GenesisState): _64.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                encode(message: _63.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventCreateGroup;
                fromJSON(object: any): _63.EventCreateGroup;
                toJSON(message: _63.EventCreateGroup): unknown;
                fromPartial(object: Partial<_63.EventCreateGroup>): _63.EventCreateGroup;
                fromAmino(object: _63.EventCreateGroupAmino): _63.EventCreateGroup;
                toAmino(message: _63.EventCreateGroup): _63.EventCreateGroupAmino;
                fromAminoMsg(object: _63.EventCreateGroupAminoMsg): _63.EventCreateGroup;
                toAminoMsg(message: _63.EventCreateGroup): _63.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _63.EventCreateGroupProtoMsg): _63.EventCreateGroup;
                toProto(message: _63.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _63.EventCreateGroup): _63.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                encode(message: _63.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventUpdateGroup;
                fromJSON(object: any): _63.EventUpdateGroup;
                toJSON(message: _63.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_63.EventUpdateGroup>): _63.EventUpdateGroup;
                fromAmino(object: _63.EventUpdateGroupAmino): _63.EventUpdateGroup;
                toAmino(message: _63.EventUpdateGroup): _63.EventUpdateGroupAmino;
                fromAminoMsg(object: _63.EventUpdateGroupAminoMsg): _63.EventUpdateGroup;
                toAminoMsg(message: _63.EventUpdateGroup): _63.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _63.EventUpdateGroupProtoMsg): _63.EventUpdateGroup;
                toProto(message: _63.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _63.EventUpdateGroup): _63.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                encode(message: _63.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventCreateGroupPolicy;
                fromJSON(object: any): _63.EventCreateGroupPolicy;
                toJSON(message: _63.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_63.EventCreateGroupPolicy>): _63.EventCreateGroupPolicy;
                fromAmino(object: _63.EventCreateGroupPolicyAmino): _63.EventCreateGroupPolicy;
                toAmino(message: _63.EventCreateGroupPolicy): _63.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _63.EventCreateGroupPolicyAminoMsg): _63.EventCreateGroupPolicy;
                toAminoMsg(message: _63.EventCreateGroupPolicy): _63.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _63.EventCreateGroupPolicyProtoMsg): _63.EventCreateGroupPolicy;
                toProto(message: _63.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _63.EventCreateGroupPolicy): _63.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                encode(message: _63.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventUpdateGroupPolicy;
                fromJSON(object: any): _63.EventUpdateGroupPolicy;
                toJSON(message: _63.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_63.EventUpdateGroupPolicy>): _63.EventUpdateGroupPolicy;
                fromAmino(object: _63.EventUpdateGroupPolicyAmino): _63.EventUpdateGroupPolicy;
                toAmino(message: _63.EventUpdateGroupPolicy): _63.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _63.EventUpdateGroupPolicyAminoMsg): _63.EventUpdateGroupPolicy;
                toAminoMsg(message: _63.EventUpdateGroupPolicy): _63.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _63.EventUpdateGroupPolicyProtoMsg): _63.EventUpdateGroupPolicy;
                toProto(message: _63.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _63.EventUpdateGroupPolicy): _63.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                encode(message: _63.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventSubmitProposal;
                fromJSON(object: any): _63.EventSubmitProposal;
                toJSON(message: _63.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_63.EventSubmitProposal>): _63.EventSubmitProposal;
                fromAmino(object: _63.EventSubmitProposalAmino): _63.EventSubmitProposal;
                toAmino(message: _63.EventSubmitProposal): _63.EventSubmitProposalAmino;
                fromAminoMsg(object: _63.EventSubmitProposalAminoMsg): _63.EventSubmitProposal;
                toAminoMsg(message: _63.EventSubmitProposal): _63.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _63.EventSubmitProposalProtoMsg): _63.EventSubmitProposal;
                toProto(message: _63.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _63.EventSubmitProposal): _63.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                encode(message: _63.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventWithdrawProposal;
                fromJSON(object: any): _63.EventWithdrawProposal;
                toJSON(message: _63.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_63.EventWithdrawProposal>): _63.EventWithdrawProposal;
                fromAmino(object: _63.EventWithdrawProposalAmino): _63.EventWithdrawProposal;
                toAmino(message: _63.EventWithdrawProposal): _63.EventWithdrawProposalAmino;
                fromAminoMsg(object: _63.EventWithdrawProposalAminoMsg): _63.EventWithdrawProposal;
                toAminoMsg(message: _63.EventWithdrawProposal): _63.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _63.EventWithdrawProposalProtoMsg): _63.EventWithdrawProposal;
                toProto(message: _63.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _63.EventWithdrawProposal): _63.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                encode(message: _63.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventVote;
                fromJSON(object: any): _63.EventVote;
                toJSON(message: _63.EventVote): unknown;
                fromPartial(object: Partial<_63.EventVote>): _63.EventVote;
                fromAmino(object: _63.EventVoteAmino): _63.EventVote;
                toAmino(message: _63.EventVote): _63.EventVoteAmino;
                fromAminoMsg(object: _63.EventVoteAminoMsg): _63.EventVote;
                toAminoMsg(message: _63.EventVote): _63.EventVoteAminoMsg;
                fromProtoMsg(message: _63.EventVoteProtoMsg): _63.EventVote;
                toProto(message: _63.EventVote): Uint8Array;
                toProtoMsg(message: _63.EventVote): _63.EventVoteProtoMsg;
            };
            EventExec: {
                encode(message: _63.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventExec;
                fromJSON(object: any): _63.EventExec;
                toJSON(message: _63.EventExec): unknown;
                fromPartial(object: Partial<_63.EventExec>): _63.EventExec;
                fromAmino(object: _63.EventExecAmino): _63.EventExec;
                toAmino(message: _63.EventExec): _63.EventExecAmino;
                fromAminoMsg(object: _63.EventExecAminoMsg): _63.EventExec;
                toAminoMsg(message: _63.EventExec): _63.EventExecAminoMsg;
                fromProtoMsg(message: _63.EventExecProtoMsg): _63.EventExec;
                toProto(message: _63.EventExec): Uint8Array;
                toProtoMsg(message: _63.EventExec): _63.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                encode(message: _63.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventLeaveGroup;
                fromJSON(object: any): _63.EventLeaveGroup;
                toJSON(message: _63.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_63.EventLeaveGroup>): _63.EventLeaveGroup;
                fromAmino(object: _63.EventLeaveGroupAmino): _63.EventLeaveGroup;
                toAmino(message: _63.EventLeaveGroup): _63.EventLeaveGroupAmino;
                fromAminoMsg(object: _63.EventLeaveGroupAminoMsg): _63.EventLeaveGroup;
                toAminoMsg(message: _63.EventLeaveGroup): _63.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _63.EventLeaveGroupProtoMsg): _63.EventLeaveGroup;
                toProto(message: _63.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _63.EventLeaveGroup): _63.EventLeaveGroupProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                inflation(request?: _70.QueryInflationRequest): Promise<_70.QueryInflationResponse>;
                annualProvisions(request?: _70.QueryAnnualProvisionsRequest): Promise<_70.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _70.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryParamsRequest;
                fromJSON(_: any): _70.QueryParamsRequest;
                toJSON(_: _70.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_70.QueryParamsRequest>): _70.QueryParamsRequest;
                fromAmino(_: _70.QueryParamsRequestAmino): _70.QueryParamsRequest;
                toAmino(_: _70.QueryParamsRequest): _70.QueryParamsRequestAmino;
                fromAminoMsg(object: _70.QueryParamsRequestAminoMsg): _70.QueryParamsRequest;
                toAminoMsg(message: _70.QueryParamsRequest): _70.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _70.QueryParamsRequestProtoMsg): _70.QueryParamsRequest;
                toProto(message: _70.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _70.QueryParamsRequest): _70.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _70.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryParamsResponse;
                fromJSON(object: any): _70.QueryParamsResponse;
                toJSON(message: _70.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_70.QueryParamsResponse>): _70.QueryParamsResponse;
                fromAmino(object: _70.QueryParamsResponseAmino): _70.QueryParamsResponse;
                toAmino(message: _70.QueryParamsResponse): _70.QueryParamsResponseAmino;
                fromAminoMsg(object: _70.QueryParamsResponseAminoMsg): _70.QueryParamsResponse;
                toAminoMsg(message: _70.QueryParamsResponse): _70.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _70.QueryParamsResponseProtoMsg): _70.QueryParamsResponse;
                toProto(message: _70.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _70.QueryParamsResponse): _70.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                encode(_: _70.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryInflationRequest;
                fromJSON(_: any): _70.QueryInflationRequest;
                toJSON(_: _70.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_70.QueryInflationRequest>): _70.QueryInflationRequest;
                fromAmino(_: _70.QueryInflationRequestAmino): _70.QueryInflationRequest;
                toAmino(_: _70.QueryInflationRequest): _70.QueryInflationRequestAmino;
                fromAminoMsg(object: _70.QueryInflationRequestAminoMsg): _70.QueryInflationRequest;
                toAminoMsg(message: _70.QueryInflationRequest): _70.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _70.QueryInflationRequestProtoMsg): _70.QueryInflationRequest;
                toProto(message: _70.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _70.QueryInflationRequest): _70.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                encode(message: _70.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryInflationResponse;
                fromJSON(object: any): _70.QueryInflationResponse;
                toJSON(message: _70.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_70.QueryInflationResponse>): _70.QueryInflationResponse;
                fromAmino(object: _70.QueryInflationResponseAmino): _70.QueryInflationResponse;
                toAmino(message: _70.QueryInflationResponse): _70.QueryInflationResponseAmino;
                fromAminoMsg(object: _70.QueryInflationResponseAminoMsg): _70.QueryInflationResponse;
                toAminoMsg(message: _70.QueryInflationResponse): _70.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _70.QueryInflationResponseProtoMsg): _70.QueryInflationResponse;
                toProto(message: _70.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _70.QueryInflationResponse): _70.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _70.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _70.QueryAnnualProvisionsRequest;
                toJSON(_: _70.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_70.QueryAnnualProvisionsRequest>): _70.QueryAnnualProvisionsRequest;
                fromAmino(_: _70.QueryAnnualProvisionsRequestAmino): _70.QueryAnnualProvisionsRequest;
                toAmino(_: _70.QueryAnnualProvisionsRequest): _70.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _70.QueryAnnualProvisionsRequestAminoMsg): _70.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _70.QueryAnnualProvisionsRequest): _70.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _70.QueryAnnualProvisionsRequestProtoMsg): _70.QueryAnnualProvisionsRequest;
                toProto(message: _70.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _70.QueryAnnualProvisionsRequest): _70.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _70.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _70.QueryAnnualProvisionsResponse;
                toJSON(message: _70.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_70.QueryAnnualProvisionsResponse>): _70.QueryAnnualProvisionsResponse;
                fromAmino(object: _70.QueryAnnualProvisionsResponseAmino): _70.QueryAnnualProvisionsResponse;
                toAmino(message: _70.QueryAnnualProvisionsResponse): _70.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _70.QueryAnnualProvisionsResponseAminoMsg): _70.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _70.QueryAnnualProvisionsResponse): _70.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _70.QueryAnnualProvisionsResponseProtoMsg): _70.QueryAnnualProvisionsResponse;
                toProto(message: _70.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _70.QueryAnnualProvisionsResponse): _70.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                encode(message: _69.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Minter;
                fromJSON(object: any): _69.Minter;
                toJSON(message: _69.Minter): unknown;
                fromPartial(object: Partial<_69.Minter>): _69.Minter;
                fromAmino(object: _69.MinterAmino): _69.Minter;
                toAmino(message: _69.Minter): _69.MinterAmino;
                fromAminoMsg(object: _69.MinterAminoMsg): _69.Minter;
                toAminoMsg(message: _69.Minter): _69.MinterAminoMsg;
                fromProtoMsg(message: _69.MinterProtoMsg): _69.Minter;
                toProto(message: _69.Minter): Uint8Array;
                toProtoMsg(message: _69.Minter): _69.MinterProtoMsg;
            };
            Params: {
                encode(message: _69.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Params;
                fromJSON(object: any): _69.Params;
                toJSON(message: _69.Params): unknown;
                fromPartial(object: Partial<_69.Params>): _69.Params;
                fromAmino(object: _69.ParamsAmino): _69.Params;
                toAmino(message: _69.Params): _69.ParamsAmino;
                fromAminoMsg(object: _69.ParamsAminoMsg): _69.Params;
                toAminoMsg(message: _69.Params): _69.ParamsAminoMsg;
                fromProtoMsg(message: _69.ParamsProtoMsg): _69.Params;
                toProto(message: _69.Params): Uint8Array;
                toProtoMsg(message: _69.Params): _69.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisState;
                fromJSON(object: any): _68.GenesisState;
                toJSON(message: _68.GenesisState): unknown;
                fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
                fromAmino(object: _68.GenesisStateAmino): _68.GenesisState;
                toAmino(message: _68.GenesisState): _68.GenesisStateAmino;
                fromAminoMsg(object: _68.GenesisStateAminoMsg): _68.GenesisState;
                toAminoMsg(message: _68.GenesisState): _68.GenesisStateAminoMsg;
                fromProtoMsg(message: _68.GenesisStateProtoMsg): _68.GenesisState;
                toProto(message: _68.GenesisState): Uint8Array;
                toProtoMsg(message: _68.GenesisState): _68.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            QueryClientImpl: typeof _159.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _75.QueryBalanceRequest): Promise<_75.QueryBalanceResponse>;
                owner(request: _75.QueryOwnerRequest): Promise<_75.QueryOwnerResponse>;
                supply(request: _75.QuerySupplyRequest): Promise<_75.QuerySupplyResponse>;
                nFTs(request: _75.QueryNFTsRequest): Promise<_75.QueryNFTsResponse>;
                nFT(request: _75.QueryNFTRequest): Promise<_75.QueryNFTResponse>;
                class(request: _75.QueryClassRequest): Promise<_75.QueryClassResponse>;
                classes(request?: _75.QueryClassesRequest): Promise<_75.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _76.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _76.MsgSend): {
                        typeUrl: string;
                        value: _76.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _76.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _76.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _76.MsgSend): {
                        typeUrl: string;
                        value: _76.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _76.MsgSend) => _76.MsgSendAmino;
                    fromAmino: (object: _76.MsgSendAmino) => _76.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _76.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgSend;
                fromJSON(object: any): _76.MsgSend;
                toJSON(message: _76.MsgSend): unknown;
                fromPartial(object: Partial<_76.MsgSend>): _76.MsgSend;
                fromAmino(object: _76.MsgSendAmino): _76.MsgSend;
                toAmino(message: _76.MsgSend): _76.MsgSendAmino;
                fromAminoMsg(object: _76.MsgSendAminoMsg): _76.MsgSend;
                toAminoMsg(message: _76.MsgSend): _76.MsgSendAminoMsg;
                fromProtoMsg(message: _76.MsgSendProtoMsg): _76.MsgSend;
                toProto(message: _76.MsgSend): Uint8Array;
                toProtoMsg(message: _76.MsgSend): _76.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _76.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgSendResponse;
                fromJSON(_: any): _76.MsgSendResponse;
                toJSON(_: _76.MsgSendResponse): unknown;
                fromPartial(_: Partial<_76.MsgSendResponse>): _76.MsgSendResponse;
                fromAmino(_: _76.MsgSendResponseAmino): _76.MsgSendResponse;
                toAmino(_: _76.MsgSendResponse): _76.MsgSendResponseAmino;
                fromAminoMsg(object: _76.MsgSendResponseAminoMsg): _76.MsgSendResponse;
                toAminoMsg(message: _76.MsgSendResponse): _76.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _76.MsgSendResponseProtoMsg): _76.MsgSendResponse;
                toProto(message: _76.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _76.MsgSendResponse): _76.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _75.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryBalanceRequest;
                fromJSON(object: any): _75.QueryBalanceRequest;
                toJSON(message: _75.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_75.QueryBalanceRequest>): _75.QueryBalanceRequest;
                fromAmino(object: _75.QueryBalanceRequestAmino): _75.QueryBalanceRequest;
                toAmino(message: _75.QueryBalanceRequest): _75.QueryBalanceRequestAmino;
                fromAminoMsg(object: _75.QueryBalanceRequestAminoMsg): _75.QueryBalanceRequest;
                toAminoMsg(message: _75.QueryBalanceRequest): _75.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _75.QueryBalanceRequestProtoMsg): _75.QueryBalanceRequest;
                toProto(message: _75.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _75.QueryBalanceRequest): _75.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _75.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryBalanceResponse;
                fromJSON(object: any): _75.QueryBalanceResponse;
                toJSON(message: _75.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_75.QueryBalanceResponse>): _75.QueryBalanceResponse;
                fromAmino(object: _75.QueryBalanceResponseAmino): _75.QueryBalanceResponse;
                toAmino(message: _75.QueryBalanceResponse): _75.QueryBalanceResponseAmino;
                fromAminoMsg(object: _75.QueryBalanceResponseAminoMsg): _75.QueryBalanceResponse;
                toAminoMsg(message: _75.QueryBalanceResponse): _75.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _75.QueryBalanceResponseProtoMsg): _75.QueryBalanceResponse;
                toProto(message: _75.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _75.QueryBalanceResponse): _75.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                encode(message: _75.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryOwnerRequest;
                fromJSON(object: any): _75.QueryOwnerRequest;
                toJSON(message: _75.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_75.QueryOwnerRequest>): _75.QueryOwnerRequest;
                fromAmino(object: _75.QueryOwnerRequestAmino): _75.QueryOwnerRequest;
                toAmino(message: _75.QueryOwnerRequest): _75.QueryOwnerRequestAmino;
                fromAminoMsg(object: _75.QueryOwnerRequestAminoMsg): _75.QueryOwnerRequest;
                toAminoMsg(message: _75.QueryOwnerRequest): _75.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _75.QueryOwnerRequestProtoMsg): _75.QueryOwnerRequest;
                toProto(message: _75.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _75.QueryOwnerRequest): _75.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                encode(message: _75.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryOwnerResponse;
                fromJSON(object: any): _75.QueryOwnerResponse;
                toJSON(message: _75.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_75.QueryOwnerResponse>): _75.QueryOwnerResponse;
                fromAmino(object: _75.QueryOwnerResponseAmino): _75.QueryOwnerResponse;
                toAmino(message: _75.QueryOwnerResponse): _75.QueryOwnerResponseAmino;
                fromAminoMsg(object: _75.QueryOwnerResponseAminoMsg): _75.QueryOwnerResponse;
                toAminoMsg(message: _75.QueryOwnerResponse): _75.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _75.QueryOwnerResponseProtoMsg): _75.QueryOwnerResponse;
                toProto(message: _75.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _75.QueryOwnerResponse): _75.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                encode(message: _75.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QuerySupplyRequest;
                fromJSON(object: any): _75.QuerySupplyRequest;
                toJSON(message: _75.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_75.QuerySupplyRequest>): _75.QuerySupplyRequest;
                fromAmino(object: _75.QuerySupplyRequestAmino): _75.QuerySupplyRequest;
                toAmino(message: _75.QuerySupplyRequest): _75.QuerySupplyRequestAmino;
                fromAminoMsg(object: _75.QuerySupplyRequestAminoMsg): _75.QuerySupplyRequest;
                toAminoMsg(message: _75.QuerySupplyRequest): _75.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _75.QuerySupplyRequestProtoMsg): _75.QuerySupplyRequest;
                toProto(message: _75.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _75.QuerySupplyRequest): _75.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                encode(message: _75.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QuerySupplyResponse;
                fromJSON(object: any): _75.QuerySupplyResponse;
                toJSON(message: _75.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_75.QuerySupplyResponse>): _75.QuerySupplyResponse;
                fromAmino(object: _75.QuerySupplyResponseAmino): _75.QuerySupplyResponse;
                toAmino(message: _75.QuerySupplyResponse): _75.QuerySupplyResponseAmino;
                fromAminoMsg(object: _75.QuerySupplyResponseAminoMsg): _75.QuerySupplyResponse;
                toAminoMsg(message: _75.QuerySupplyResponse): _75.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _75.QuerySupplyResponseProtoMsg): _75.QuerySupplyResponse;
                toProto(message: _75.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _75.QuerySupplyResponse): _75.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                encode(message: _75.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryNFTsRequest;
                fromJSON(object: any): _75.QueryNFTsRequest;
                toJSON(message: _75.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_75.QueryNFTsRequest>): _75.QueryNFTsRequest;
                fromAmino(object: _75.QueryNFTsRequestAmino): _75.QueryNFTsRequest;
                toAmino(message: _75.QueryNFTsRequest): _75.QueryNFTsRequestAmino;
                fromAminoMsg(object: _75.QueryNFTsRequestAminoMsg): _75.QueryNFTsRequest;
                toAminoMsg(message: _75.QueryNFTsRequest): _75.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryNFTsRequestProtoMsg): _75.QueryNFTsRequest;
                toProto(message: _75.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryNFTsRequest): _75.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                encode(message: _75.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryNFTsResponse;
                fromJSON(object: any): _75.QueryNFTsResponse;
                toJSON(message: _75.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_75.QueryNFTsResponse>): _75.QueryNFTsResponse;
                fromAmino(object: _75.QueryNFTsResponseAmino): _75.QueryNFTsResponse;
                toAmino(message: _75.QueryNFTsResponse): _75.QueryNFTsResponseAmino;
                fromAminoMsg(object: _75.QueryNFTsResponseAminoMsg): _75.QueryNFTsResponse;
                toAminoMsg(message: _75.QueryNFTsResponse): _75.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryNFTsResponseProtoMsg): _75.QueryNFTsResponse;
                toProto(message: _75.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryNFTsResponse): _75.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                encode(message: _75.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryNFTRequest;
                fromJSON(object: any): _75.QueryNFTRequest;
                toJSON(message: _75.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_75.QueryNFTRequest>): _75.QueryNFTRequest;
                fromAmino(object: _75.QueryNFTRequestAmino): _75.QueryNFTRequest;
                toAmino(message: _75.QueryNFTRequest): _75.QueryNFTRequestAmino;
                fromAminoMsg(object: _75.QueryNFTRequestAminoMsg): _75.QueryNFTRequest;
                toAminoMsg(message: _75.QueryNFTRequest): _75.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _75.QueryNFTRequestProtoMsg): _75.QueryNFTRequest;
                toProto(message: _75.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _75.QueryNFTRequest): _75.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                encode(message: _75.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryNFTResponse;
                fromJSON(object: any): _75.QueryNFTResponse;
                toJSON(message: _75.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_75.QueryNFTResponse>): _75.QueryNFTResponse;
                fromAmino(object: _75.QueryNFTResponseAmino): _75.QueryNFTResponse;
                toAmino(message: _75.QueryNFTResponse): _75.QueryNFTResponseAmino;
                fromAminoMsg(object: _75.QueryNFTResponseAminoMsg): _75.QueryNFTResponse;
                toAminoMsg(message: _75.QueryNFTResponse): _75.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _75.QueryNFTResponseProtoMsg): _75.QueryNFTResponse;
                toProto(message: _75.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _75.QueryNFTResponse): _75.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                encode(message: _75.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryClassRequest;
                fromJSON(object: any): _75.QueryClassRequest;
                toJSON(message: _75.QueryClassRequest): unknown;
                fromPartial(object: Partial<_75.QueryClassRequest>): _75.QueryClassRequest;
                fromAmino(object: _75.QueryClassRequestAmino): _75.QueryClassRequest;
                toAmino(message: _75.QueryClassRequest): _75.QueryClassRequestAmino;
                fromAminoMsg(object: _75.QueryClassRequestAminoMsg): _75.QueryClassRequest;
                toAminoMsg(message: _75.QueryClassRequest): _75.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _75.QueryClassRequestProtoMsg): _75.QueryClassRequest;
                toProto(message: _75.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _75.QueryClassRequest): _75.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                encode(message: _75.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryClassResponse;
                fromJSON(object: any): _75.QueryClassResponse;
                toJSON(message: _75.QueryClassResponse): unknown;
                fromPartial(object: Partial<_75.QueryClassResponse>): _75.QueryClassResponse;
                fromAmino(object: _75.QueryClassResponseAmino): _75.QueryClassResponse;
                toAmino(message: _75.QueryClassResponse): _75.QueryClassResponseAmino;
                fromAminoMsg(object: _75.QueryClassResponseAminoMsg): _75.QueryClassResponse;
                toAminoMsg(message: _75.QueryClassResponse): _75.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _75.QueryClassResponseProtoMsg): _75.QueryClassResponse;
                toProto(message: _75.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _75.QueryClassResponse): _75.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                encode(message: _75.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryClassesRequest;
                fromJSON(object: any): _75.QueryClassesRequest;
                toJSON(message: _75.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_75.QueryClassesRequest>): _75.QueryClassesRequest;
                fromAmino(object: _75.QueryClassesRequestAmino): _75.QueryClassesRequest;
                toAmino(message: _75.QueryClassesRequest): _75.QueryClassesRequestAmino;
                fromAminoMsg(object: _75.QueryClassesRequestAminoMsg): _75.QueryClassesRequest;
                toAminoMsg(message: _75.QueryClassesRequest): _75.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _75.QueryClassesRequestProtoMsg): _75.QueryClassesRequest;
                toProto(message: _75.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _75.QueryClassesRequest): _75.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                encode(message: _75.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryClassesResponse;
                fromJSON(object: any): _75.QueryClassesResponse;
                toJSON(message: _75.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_75.QueryClassesResponse>): _75.QueryClassesResponse;
                fromAmino(object: _75.QueryClassesResponseAmino): _75.QueryClassesResponse;
                toAmino(message: _75.QueryClassesResponse): _75.QueryClassesResponseAmino;
                fromAminoMsg(object: _75.QueryClassesResponseAminoMsg): _75.QueryClassesResponse;
                toAminoMsg(message: _75.QueryClassesResponse): _75.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _75.QueryClassesResponseProtoMsg): _75.QueryClassesResponse;
                toProto(message: _75.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _75.QueryClassesResponse): _75.QueryClassesResponseProtoMsg;
            };
            Class: {
                encode(message: _74.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Class;
                fromJSON(object: any): _74.Class;
                toJSON(message: _74.Class): unknown;
                fromPartial(object: Partial<_74.Class>): _74.Class;
                fromAmino(object: _74.ClassAmino): _74.Class;
                toAmino(message: _74.Class): _74.ClassAmino;
                fromAminoMsg(object: _74.ClassAminoMsg): _74.Class;
                toAminoMsg(message: _74.Class): _74.ClassAminoMsg;
                fromProtoMsg(message: _74.ClassProtoMsg): _74.Class;
                toProto(message: _74.Class): Uint8Array;
                toProtoMsg(message: _74.Class): _74.ClassProtoMsg;
            };
            NFT: {
                encode(message: _74.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.NFT;
                fromJSON(object: any): _74.NFT;
                toJSON(message: _74.NFT): unknown;
                fromPartial(object: Partial<_74.NFT>): _74.NFT;
                fromAmino(object: _74.NFTAmino): _74.NFT;
                toAmino(message: _74.NFT): _74.NFTAmino;
                fromAminoMsg(object: _74.NFTAminoMsg): _74.NFT;
                toAminoMsg(message: _74.NFT): _74.NFTAminoMsg;
                fromProtoMsg(message: _74.NFTProtoMsg): _74.NFT;
                toProto(message: _74.NFT): Uint8Array;
                toProtoMsg(message: _74.NFT): _74.NFTProtoMsg;
            };
            GenesisState: {
                encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.GenesisState;
                fromJSON(object: any): _73.GenesisState;
                toJSON(message: _73.GenesisState): unknown;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
                fromAmino(object: _73.GenesisStateAmino): _73.GenesisState;
                toAmino(message: _73.GenesisState): _73.GenesisStateAmino;
                fromAminoMsg(object: _73.GenesisStateAminoMsg): _73.GenesisState;
                toAminoMsg(message: _73.GenesisState): _73.GenesisStateAminoMsg;
                fromProtoMsg(message: _73.GenesisStateProtoMsg): _73.GenesisState;
                toProto(message: _73.GenesisState): Uint8Array;
                toProtoMsg(message: _73.GenesisState): _73.GenesisStateProtoMsg;
            };
            Entry: {
                encode(message: _73.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Entry;
                fromJSON(object: any): _73.Entry;
                toJSON(message: _73.Entry): unknown;
                fromPartial(object: Partial<_73.Entry>): _73.Entry;
                fromAmino(object: _73.EntryAmino): _73.Entry;
                toAmino(message: _73.Entry): _73.EntryAmino;
                fromAminoMsg(object: _73.EntryAminoMsg): _73.Entry;
                toAminoMsg(message: _73.Entry): _73.EntryAminoMsg;
                fromProtoMsg(message: _73.EntryProtoMsg): _73.Entry;
                toProto(message: _73.Entry): Uint8Array;
                toProtoMsg(message: _73.Entry): _73.EntryProtoMsg;
            };
            EventSend: {
                encode(message: _72.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.EventSend;
                fromJSON(object: any): _72.EventSend;
                toJSON(message: _72.EventSend): unknown;
                fromPartial(object: Partial<_72.EventSend>): _72.EventSend;
                fromAmino(object: _72.EventSendAmino): _72.EventSend;
                toAmino(message: _72.EventSend): _72.EventSendAmino;
                fromAminoMsg(object: _72.EventSendAminoMsg): _72.EventSend;
                toAminoMsg(message: _72.EventSend): _72.EventSendAminoMsg;
                fromProtoMsg(message: _72.EventSendProtoMsg): _72.EventSend;
                toProto(message: _72.EventSend): Uint8Array;
                toProtoMsg(message: _72.EventSend): _72.EventSendProtoMsg;
            };
            EventMint: {
                encode(message: _72.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.EventMint;
                fromJSON(object: any): _72.EventMint;
                toJSON(message: _72.EventMint): unknown;
                fromPartial(object: Partial<_72.EventMint>): _72.EventMint;
                fromAmino(object: _72.EventMintAmino): _72.EventMint;
                toAmino(message: _72.EventMint): _72.EventMintAmino;
                fromAminoMsg(object: _72.EventMintAminoMsg): _72.EventMint;
                toAminoMsg(message: _72.EventMint): _72.EventMintAminoMsg;
                fromProtoMsg(message: _72.EventMintProtoMsg): _72.EventMint;
                toProto(message: _72.EventMint): Uint8Array;
                toProtoMsg(message: _72.EventMint): _72.EventMintProtoMsg;
            };
            EventBurn: {
                encode(message: _72.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.EventBurn;
                fromJSON(object: any): _72.EventBurn;
                toJSON(message: _72.EventBurn): unknown;
                fromPartial(object: Partial<_72.EventBurn>): _72.EventBurn;
                fromAmino(object: _72.EventBurnAmino): _72.EventBurn;
                toAmino(message: _72.EventBurn): _72.EventBurnAmino;
                fromAminoMsg(object: _72.EventBurnAminoMsg): _72.EventBurn;
                toAminoMsg(message: _72.EventBurn): _72.EventBurnAminoMsg;
                fromProtoMsg(message: _72.EventBurnProtoMsg): _72.EventBurn;
                toProto(message: _72.EventBurn): Uint8Array;
                toProtoMsg(message: _72.EventBurn): _72.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _77.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Module;
                    fromJSON(_: any): _77.Module;
                    toJSON(_: _77.Module): unknown;
                    fromPartial(_: Partial<_77.Module>): _77.Module;
                    fromAmino(_: _77.ModuleAmino): _77.Module;
                    toAmino(_: _77.Module): _77.ModuleAmino;
                    fromAminoMsg(object: _77.ModuleAminoMsg): _77.Module;
                    toAminoMsg(message: _77.Module): _77.ModuleAminoMsg;
                    fromProtoMsg(message: _77.ModuleProtoMsg): _77.Module;
                    toProto(message: _77.Module): Uint8Array;
                    toProtoMsg(message: _77.Module): _77.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _78.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.TableDescriptor;
                fromJSON(object: any): _78.TableDescriptor;
                toJSON(message: _78.TableDescriptor): unknown;
                fromPartial(object: Partial<_78.TableDescriptor>): _78.TableDescriptor;
                fromAmino(object: _78.TableDescriptorAmino): _78.TableDescriptor;
                toAmino(message: _78.TableDescriptor): _78.TableDescriptorAmino;
                fromAminoMsg(object: _78.TableDescriptorAminoMsg): _78.TableDescriptor;
                toAminoMsg(message: _78.TableDescriptor): _78.TableDescriptorAminoMsg;
                fromProtoMsg(message: _78.TableDescriptorProtoMsg): _78.TableDescriptor;
                toProto(message: _78.TableDescriptor): Uint8Array;
                toProtoMsg(message: _78.TableDescriptor): _78.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                encode(message: _78.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.PrimaryKeyDescriptor;
                fromJSON(object: any): _78.PrimaryKeyDescriptor;
                toJSON(message: _78.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_78.PrimaryKeyDescriptor>): _78.PrimaryKeyDescriptor;
                fromAmino(object: _78.PrimaryKeyDescriptorAmino): _78.PrimaryKeyDescriptor;
                toAmino(message: _78.PrimaryKeyDescriptor): _78.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _78.PrimaryKeyDescriptorAminoMsg): _78.PrimaryKeyDescriptor;
                toAminoMsg(message: _78.PrimaryKeyDescriptor): _78.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _78.PrimaryKeyDescriptorProtoMsg): _78.PrimaryKeyDescriptor;
                toProto(message: _78.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _78.PrimaryKeyDescriptor): _78.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                encode(message: _78.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.SecondaryIndexDescriptor;
                fromJSON(object: any): _78.SecondaryIndexDescriptor;
                toJSON(message: _78.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_78.SecondaryIndexDescriptor>): _78.SecondaryIndexDescriptor;
                fromAmino(object: _78.SecondaryIndexDescriptorAmino): _78.SecondaryIndexDescriptor;
                toAmino(message: _78.SecondaryIndexDescriptor): _78.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _78.SecondaryIndexDescriptorAminoMsg): _78.SecondaryIndexDescriptor;
                toAminoMsg(message: _78.SecondaryIndexDescriptor): _78.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _78.SecondaryIndexDescriptorProtoMsg): _78.SecondaryIndexDescriptor;
                toProto(message: _78.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _78.SecondaryIndexDescriptor): _78.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                encode(message: _78.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.SingletonDescriptor;
                fromJSON(object: any): _78.SingletonDescriptor;
                toJSON(message: _78.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_78.SingletonDescriptor>): _78.SingletonDescriptor;
                fromAmino(object: _78.SingletonDescriptorAmino): _78.SingletonDescriptor;
                toAmino(message: _78.SingletonDescriptor): _78.SingletonDescriptorAmino;
                fromAminoMsg(object: _78.SingletonDescriptorAminoMsg): _78.SingletonDescriptor;
                toAminoMsg(message: _78.SingletonDescriptor): _78.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _78.SingletonDescriptorProtoMsg): _78.SingletonDescriptor;
                toProto(message: _78.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _78.SingletonDescriptor): _78.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _79.StorageType;
            storageTypeToJSON(object: _79.StorageType): string;
            StorageType: typeof _79.StorageType;
            StorageTypeSDKType: typeof _79.StorageType;
            StorageTypeAmino: typeof _79.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _79.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ModuleSchemaDescriptor;
                fromJSON(object: any): _79.ModuleSchemaDescriptor;
                toJSON(message: _79.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_79.ModuleSchemaDescriptor>): _79.ModuleSchemaDescriptor;
                fromAmino(object: _79.ModuleSchemaDescriptorAmino): _79.ModuleSchemaDescriptor;
                toAmino(message: _79.ModuleSchemaDescriptor): _79.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _79.ModuleSchemaDescriptorAminoMsg): _79.ModuleSchemaDescriptor;
                toAminoMsg(message: _79.ModuleSchemaDescriptor): _79.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _79.ModuleSchemaDescriptorProtoMsg): _79.ModuleSchemaDescriptor;
                toProto(message: _79.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _79.ModuleSchemaDescriptor): _79.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _79.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _79.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _79.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_79.ModuleSchemaDescriptor_FileEntry>): _79.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _79.ModuleSchemaDescriptor_FileEntryAmino): _79.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _79.ModuleSchemaDescriptor_FileEntry): _79.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _79.ModuleSchemaDescriptor_FileEntryAminoMsg): _79.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _79.ModuleSchemaDescriptor_FileEntry): _79.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _79.ModuleSchemaDescriptor_FileEntryProtoMsg): _79.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _79.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _79.ModuleSchemaDescriptor_FileEntry): _79.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                subspaces(request?: _81.QuerySubspacesRequest): Promise<_81.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _81.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryParamsRequest;
                fromJSON(object: any): _81.QueryParamsRequest;
                toJSON(message: _81.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_81.QueryParamsRequest>): _81.QueryParamsRequest;
                fromAmino(object: _81.QueryParamsRequestAmino): _81.QueryParamsRequest;
                toAmino(message: _81.QueryParamsRequest): _81.QueryParamsRequestAmino;
                fromAminoMsg(object: _81.QueryParamsRequestAminoMsg): _81.QueryParamsRequest;
                toAminoMsg(message: _81.QueryParamsRequest): _81.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryParamsRequestProtoMsg): _81.QueryParamsRequest;
                toProto(message: _81.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryParamsRequest): _81.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _81.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryParamsResponse;
                fromJSON(object: any): _81.QueryParamsResponse;
                toJSON(message: _81.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_81.QueryParamsResponse>): _81.QueryParamsResponse;
                fromAmino(object: _81.QueryParamsResponseAmino): _81.QueryParamsResponse;
                toAmino(message: _81.QueryParamsResponse): _81.QueryParamsResponseAmino;
                fromAminoMsg(object: _81.QueryParamsResponseAminoMsg): _81.QueryParamsResponse;
                toAminoMsg(message: _81.QueryParamsResponse): _81.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryParamsResponseProtoMsg): _81.QueryParamsResponse;
                toProto(message: _81.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryParamsResponse): _81.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                encode(_: _81.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QuerySubspacesRequest;
                fromJSON(_: any): _81.QuerySubspacesRequest;
                toJSON(_: _81.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_81.QuerySubspacesRequest>): _81.QuerySubspacesRequest;
                fromAmino(_: _81.QuerySubspacesRequestAmino): _81.QuerySubspacesRequest;
                toAmino(_: _81.QuerySubspacesRequest): _81.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _81.QuerySubspacesRequestAminoMsg): _81.QuerySubspacesRequest;
                toAminoMsg(message: _81.QuerySubspacesRequest): _81.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _81.QuerySubspacesRequestProtoMsg): _81.QuerySubspacesRequest;
                toProto(message: _81.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _81.QuerySubspacesRequest): _81.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                encode(message: _81.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QuerySubspacesResponse;
                fromJSON(object: any): _81.QuerySubspacesResponse;
                toJSON(message: _81.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_81.QuerySubspacesResponse>): _81.QuerySubspacesResponse;
                fromAmino(object: _81.QuerySubspacesResponseAmino): _81.QuerySubspacesResponse;
                toAmino(message: _81.QuerySubspacesResponse): _81.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _81.QuerySubspacesResponseAminoMsg): _81.QuerySubspacesResponse;
                toAminoMsg(message: _81.QuerySubspacesResponse): _81.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _81.QuerySubspacesResponseProtoMsg): _81.QuerySubspacesResponse;
                toProto(message: _81.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _81.QuerySubspacesResponse): _81.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                encode(message: _81.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Subspace;
                fromJSON(object: any): _81.Subspace;
                toJSON(message: _81.Subspace): unknown;
                fromPartial(object: Partial<_81.Subspace>): _81.Subspace;
                fromAmino(object: _81.SubspaceAmino): _81.Subspace;
                toAmino(message: _81.Subspace): _81.SubspaceAmino;
                fromAminoMsg(object: _81.SubspaceAminoMsg): _81.Subspace;
                toAminoMsg(message: _81.Subspace): _81.SubspaceAminoMsg;
                fromProtoMsg(message: _81.SubspaceProtoMsg): _81.Subspace;
                toProto(message: _81.Subspace): Uint8Array;
                toProtoMsg(message: _81.Subspace): _81.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                encode(message: _80.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ParameterChangeProposal;
                fromJSON(object: any): _80.ParameterChangeProposal;
                toJSON(message: _80.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_80.ParameterChangeProposal>): _80.ParameterChangeProposal;
                fromAmino(object: _80.ParameterChangeProposalAmino): _80.ParameterChangeProposal;
                toAmino(message: _80.ParameterChangeProposal): _80.ParameterChangeProposalAmino;
                fromAminoMsg(object: _80.ParameterChangeProposalAminoMsg): _80.ParameterChangeProposal;
                toAminoMsg(message: _80.ParameterChangeProposal): _80.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _80.ParameterChangeProposalProtoMsg): _80.ParameterChangeProposal;
                toProto(message: _80.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _80.ParameterChangeProposal): _80.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                encode(message: _80.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ParamChange;
                fromJSON(object: any): _80.ParamChange;
                toJSON(message: _80.ParamChange): unknown;
                fromPartial(object: Partial<_80.ParamChange>): _80.ParamChange;
                fromAmino(object: _80.ParamChangeAmino): _80.ParamChange;
                toAmino(message: _80.ParamChange): _80.ParamChangeAmino;
                fromAminoMsg(object: _80.ParamChangeAminoMsg): _80.ParamChange;
                toAminoMsg(message: _80.ParamChange): _80.ParamChangeAminoMsg;
                fromProtoMsg(message: _80.ParamChangeProtoMsg): _80.ParamChange;
                toProto(message: _80.ParamChange): Uint8Array;
                toProtoMsg(message: _80.ParamChange): _80.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                signingInfo(request: _83.QuerySigningInfoRequest): Promise<_83.QuerySigningInfoResponse>;
                signingInfos(request?: _83.QuerySigningInfosRequest): Promise<_83.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _85.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _85.MsgUnjail): {
                        typeUrl: string;
                        value: _85.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _85.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _85.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _85.MsgUnjail): {
                        typeUrl: string;
                        value: _85.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _85.MsgUnjail) => _85.MsgUnjailAmino;
                    fromAmino: (object: _85.MsgUnjailAmino) => _85.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _85.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgUnjail;
                fromJSON(object: any): _85.MsgUnjail;
                toJSON(message: _85.MsgUnjail): unknown;
                fromPartial(object: Partial<_85.MsgUnjail>): _85.MsgUnjail;
                fromAmino(object: _85.MsgUnjailAmino): _85.MsgUnjail;
                toAmino(message: _85.MsgUnjail): _85.MsgUnjailAmino;
                fromAminoMsg(object: _85.MsgUnjailAminoMsg): _85.MsgUnjail;
                toAminoMsg(message: _85.MsgUnjail): _85.MsgUnjailAminoMsg;
                fromProtoMsg(message: _85.MsgUnjailProtoMsg): _85.MsgUnjail;
                toProto(message: _85.MsgUnjail): Uint8Array;
                toProtoMsg(message: _85.MsgUnjail): _85.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                encode(_: _85.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgUnjailResponse;
                fromJSON(_: any): _85.MsgUnjailResponse;
                toJSON(_: _85.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_85.MsgUnjailResponse>): _85.MsgUnjailResponse;
                fromAmino(_: _85.MsgUnjailResponseAmino): _85.MsgUnjailResponse;
                toAmino(_: _85.MsgUnjailResponse): _85.MsgUnjailResponseAmino;
                fromAminoMsg(object: _85.MsgUnjailResponseAminoMsg): _85.MsgUnjailResponse;
                toAminoMsg(message: _85.MsgUnjailResponse): _85.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _85.MsgUnjailResponseProtoMsg): _85.MsgUnjailResponse;
                toProto(message: _85.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _85.MsgUnjailResponse): _85.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                encode(message: _84.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ValidatorSigningInfo;
                fromJSON(object: any): _84.ValidatorSigningInfo;
                toJSON(message: _84.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_84.ValidatorSigningInfo>): _84.ValidatorSigningInfo;
                fromAmino(object: _84.ValidatorSigningInfoAmino): _84.ValidatorSigningInfo;
                toAmino(message: _84.ValidatorSigningInfo): _84.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _84.ValidatorSigningInfoAminoMsg): _84.ValidatorSigningInfo;
                toAminoMsg(message: _84.ValidatorSigningInfo): _84.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _84.ValidatorSigningInfoProtoMsg): _84.ValidatorSigningInfo;
                toProto(message: _84.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _84.ValidatorSigningInfo): _84.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                encode(message: _84.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Params;
                fromJSON(object: any): _84.Params;
                toJSON(message: _84.Params): unknown;
                fromPartial(object: Partial<_84.Params>): _84.Params;
                fromAmino(object: _84.ParamsAmino): _84.Params;
                toAmino(message: _84.Params): _84.ParamsAmino;
                fromAminoMsg(object: _84.ParamsAminoMsg): _84.Params;
                toAminoMsg(message: _84.Params): _84.ParamsAminoMsg;
                fromProtoMsg(message: _84.ParamsProtoMsg): _84.Params;
                toProto(message: _84.Params): Uint8Array;
                toProtoMsg(message: _84.Params): _84.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _83.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryParamsRequest;
                fromJSON(_: any): _83.QueryParamsRequest;
                toJSON(_: _83.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_83.QueryParamsRequest>): _83.QueryParamsRequest;
                fromAmino(_: _83.QueryParamsRequestAmino): _83.QueryParamsRequest;
                toAmino(_: _83.QueryParamsRequest): _83.QueryParamsRequestAmino;
                fromAminoMsg(object: _83.QueryParamsRequestAminoMsg): _83.QueryParamsRequest;
                toAminoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryParamsRequestProtoMsg): _83.QueryParamsRequest;
                toProto(message: _83.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _83.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryParamsResponse;
                fromJSON(object: any): _83.QueryParamsResponse;
                toJSON(message: _83.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_83.QueryParamsResponse>): _83.QueryParamsResponse;
                fromAmino(object: _83.QueryParamsResponseAmino): _83.QueryParamsResponse;
                toAmino(message: _83.QueryParamsResponse): _83.QueryParamsResponseAmino;
                fromAminoMsg(object: _83.QueryParamsResponseAminoMsg): _83.QueryParamsResponse;
                toAminoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryParamsResponseProtoMsg): _83.QueryParamsResponse;
                toProto(message: _83.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                encode(message: _83.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QuerySigningInfoRequest;
                fromJSON(object: any): _83.QuerySigningInfoRequest;
                toJSON(message: _83.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_83.QuerySigningInfoRequest>): _83.QuerySigningInfoRequest;
                fromAmino(object: _83.QuerySigningInfoRequestAmino): _83.QuerySigningInfoRequest;
                toAmino(message: _83.QuerySigningInfoRequest): _83.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _83.QuerySigningInfoRequestAminoMsg): _83.QuerySigningInfoRequest;
                toAminoMsg(message: _83.QuerySigningInfoRequest): _83.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _83.QuerySigningInfoRequestProtoMsg): _83.QuerySigningInfoRequest;
                toProto(message: _83.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _83.QuerySigningInfoRequest): _83.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                encode(message: _83.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QuerySigningInfoResponse;
                fromJSON(object: any): _83.QuerySigningInfoResponse;
                toJSON(message: _83.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_83.QuerySigningInfoResponse>): _83.QuerySigningInfoResponse;
                fromAmino(object: _83.QuerySigningInfoResponseAmino): _83.QuerySigningInfoResponse;
                toAmino(message: _83.QuerySigningInfoResponse): _83.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _83.QuerySigningInfoResponseAminoMsg): _83.QuerySigningInfoResponse;
                toAminoMsg(message: _83.QuerySigningInfoResponse): _83.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _83.QuerySigningInfoResponseProtoMsg): _83.QuerySigningInfoResponse;
                toProto(message: _83.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _83.QuerySigningInfoResponse): _83.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                encode(message: _83.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QuerySigningInfosRequest;
                fromJSON(object: any): _83.QuerySigningInfosRequest;
                toJSON(message: _83.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_83.QuerySigningInfosRequest>): _83.QuerySigningInfosRequest;
                fromAmino(object: _83.QuerySigningInfosRequestAmino): _83.QuerySigningInfosRequest;
                toAmino(message: _83.QuerySigningInfosRequest): _83.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _83.QuerySigningInfosRequestAminoMsg): _83.QuerySigningInfosRequest;
                toAminoMsg(message: _83.QuerySigningInfosRequest): _83.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _83.QuerySigningInfosRequestProtoMsg): _83.QuerySigningInfosRequest;
                toProto(message: _83.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _83.QuerySigningInfosRequest): _83.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                encode(message: _83.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QuerySigningInfosResponse;
                fromJSON(object: any): _83.QuerySigningInfosResponse;
                toJSON(message: _83.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_83.QuerySigningInfosResponse>): _83.QuerySigningInfosResponse;
                fromAmino(object: _83.QuerySigningInfosResponseAmino): _83.QuerySigningInfosResponse;
                toAmino(message: _83.QuerySigningInfosResponse): _83.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _83.QuerySigningInfosResponseAminoMsg): _83.QuerySigningInfosResponse;
                toAminoMsg(message: _83.QuerySigningInfosResponse): _83.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _83.QuerySigningInfosResponseProtoMsg): _83.QuerySigningInfosResponse;
                toProto(message: _83.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _83.QuerySigningInfosResponse): _83.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GenesisState;
                fromJSON(object: any): _82.GenesisState;
                toJSON(message: _82.GenesisState): unknown;
                fromPartial(object: Partial<_82.GenesisState>): _82.GenesisState;
                fromAmino(object: _82.GenesisStateAmino): _82.GenesisState;
                toAmino(message: _82.GenesisState): _82.GenesisStateAmino;
                fromAminoMsg(object: _82.GenesisStateAminoMsg): _82.GenesisState;
                toAminoMsg(message: _82.GenesisState): _82.GenesisStateAminoMsg;
                fromProtoMsg(message: _82.GenesisStateProtoMsg): _82.GenesisState;
                toProto(message: _82.GenesisState): Uint8Array;
                toProtoMsg(message: _82.GenesisState): _82.GenesisStateProtoMsg;
            };
            SigningInfo: {
                encode(message: _82.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.SigningInfo;
                fromJSON(object: any): _82.SigningInfo;
                toJSON(message: _82.SigningInfo): unknown;
                fromPartial(object: Partial<_82.SigningInfo>): _82.SigningInfo;
                fromAmino(object: _82.SigningInfoAmino): _82.SigningInfo;
                toAmino(message: _82.SigningInfo): _82.SigningInfoAmino;
                fromAminoMsg(object: _82.SigningInfoAminoMsg): _82.SigningInfo;
                toAminoMsg(message: _82.SigningInfo): _82.SigningInfoAminoMsg;
                fromProtoMsg(message: _82.SigningInfoProtoMsg): _82.SigningInfo;
                toProto(message: _82.SigningInfo): Uint8Array;
                toProtoMsg(message: _82.SigningInfo): _82.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                encode(message: _82.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ValidatorMissedBlocks;
                fromJSON(object: any): _82.ValidatorMissedBlocks;
                toJSON(message: _82.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_82.ValidatorMissedBlocks>): _82.ValidatorMissedBlocks;
                fromAmino(object: _82.ValidatorMissedBlocksAmino): _82.ValidatorMissedBlocks;
                toAmino(message: _82.ValidatorMissedBlocks): _82.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _82.ValidatorMissedBlocksAminoMsg): _82.ValidatorMissedBlocks;
                toAminoMsg(message: _82.ValidatorMissedBlocks): _82.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _82.ValidatorMissedBlocksProtoMsg): _82.ValidatorMissedBlocks;
                toProto(message: _82.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _82.ValidatorMissedBlocks): _82.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                encode(message: _82.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MissedBlock;
                fromJSON(object: any): _82.MissedBlock;
                toJSON(message: _82.MissedBlock): unknown;
                fromPartial(object: Partial<_82.MissedBlock>): _82.MissedBlock;
                fromAmino(object: _82.MissedBlockAmino): _82.MissedBlock;
                toAmino(message: _82.MissedBlock): _82.MissedBlockAmino;
                fromAminoMsg(object: _82.MissedBlockAminoMsg): _82.MissedBlock;
                toAminoMsg(message: _82.MissedBlock): _82.MissedBlockAminoMsg;
                fromProtoMsg(message: _82.MissedBlockProtoMsg): _82.MissedBlock;
                toProto(message: _82.MissedBlock): Uint8Array;
                toProtoMsg(message: _82.MissedBlock): _82.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _176.MsgClientImpl;
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _88.QueryValidatorsRequest): Promise<_88.QueryValidatorsResponse>;
                validator(request: _88.QueryValidatorRequest): Promise<_88.QueryValidatorResponse>;
                validatorDelegations(request: _88.QueryValidatorDelegationsRequest): Promise<_88.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _88.QueryValidatorUnbondingDelegationsRequest): Promise<_88.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _88.QueryDelegationRequest): Promise<_88.QueryDelegationResponse>;
                unbondingDelegation(request: _88.QueryUnbondingDelegationRequest): Promise<_88.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _88.QueryDelegatorDelegationsRequest): Promise<_88.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _88.QueryDelegatorUnbondingDelegationsRequest): Promise<_88.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _88.QueryRedelegationsRequest): Promise<_88.QueryRedelegationsResponse>;
                delegatorValidators(request: _88.QueryDelegatorValidatorsRequest): Promise<_88.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _88.QueryDelegatorValidatorRequest): Promise<_88.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _88.QueryHistoricalInfoRequest): Promise<_88.QueryHistoricalInfoResponse>;
                pool(request?: _88.QueryPoolRequest): Promise<_88.QueryPoolResponse>;
                params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _90.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _90.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _90.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _90.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _90.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _90.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _90.MsgCreateValidator): {
                        typeUrl: string;
                        value: _90.MsgCreateValidator;
                    };
                    editValidator(value: _90.MsgEditValidator): {
                        typeUrl: string;
                        value: _90.MsgEditValidator;
                    };
                    delegate(value: _90.MsgDelegate): {
                        typeUrl: string;
                        value: _90.MsgDelegate;
                    };
                    beginRedelegate(value: _90.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _90.MsgBeginRedelegate;
                    };
                    undelegate(value: _90.MsgUndelegate): {
                        typeUrl: string;
                        value: _90.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _90.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _90.MsgCancelUnbondingDelegation;
                    };
                };
                toJSON: {
                    createValidator(value: _90.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _90.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _90.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _90.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _90.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _90.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _90.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _90.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _90.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _90.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _90.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _90.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _90.MsgCreateValidator): {
                        typeUrl: string;
                        value: _90.MsgCreateValidator;
                    };
                    editValidator(value: _90.MsgEditValidator): {
                        typeUrl: string;
                        value: _90.MsgEditValidator;
                    };
                    delegate(value: _90.MsgDelegate): {
                        typeUrl: string;
                        value: _90.MsgDelegate;
                    };
                    beginRedelegate(value: _90.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _90.MsgBeginRedelegate;
                    };
                    undelegate(value: _90.MsgUndelegate): {
                        typeUrl: string;
                        value: _90.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _90.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _90.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _90.MsgCreateValidator) => _90.MsgCreateValidatorAmino;
                    fromAmino: (object: _90.MsgCreateValidatorAmino) => _90.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _90.MsgEditValidator) => _90.MsgEditValidatorAmino;
                    fromAmino: (object: _90.MsgEditValidatorAmino) => _90.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _90.MsgDelegate) => _90.MsgDelegateAmino;
                    fromAmino: (object: _90.MsgDelegateAmino) => _90.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _90.MsgBeginRedelegate) => _90.MsgBeginRedelegateAmino;
                    fromAmino: (object: _90.MsgBeginRedelegateAmino) => _90.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _90.MsgUndelegate) => _90.MsgUndelegateAmino;
                    fromAmino: (object: _90.MsgUndelegateAmino) => _90.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _90.MsgCancelUnbondingDelegation) => _90.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _90.MsgCancelUnbondingDelegationAmino) => _90.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _90.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgCreateValidator;
                fromJSON(object: any): _90.MsgCreateValidator;
                toJSON(message: _90.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_90.MsgCreateValidator>): _90.MsgCreateValidator;
                fromAmino(object: _90.MsgCreateValidatorAmino): _90.MsgCreateValidator;
                toAmino(message: _90.MsgCreateValidator): _90.MsgCreateValidatorAmino;
                fromAminoMsg(object: _90.MsgCreateValidatorAminoMsg): _90.MsgCreateValidator;
                toAminoMsg(message: _90.MsgCreateValidator): _90.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _90.MsgCreateValidatorProtoMsg): _90.MsgCreateValidator;
                toProto(message: _90.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _90.MsgCreateValidator): _90.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                encode(_: _90.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgCreateValidatorResponse;
                fromJSON(_: any): _90.MsgCreateValidatorResponse;
                toJSON(_: _90.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_90.MsgCreateValidatorResponse>): _90.MsgCreateValidatorResponse;
                fromAmino(_: _90.MsgCreateValidatorResponseAmino): _90.MsgCreateValidatorResponse;
                toAmino(_: _90.MsgCreateValidatorResponse): _90.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _90.MsgCreateValidatorResponseAminoMsg): _90.MsgCreateValidatorResponse;
                toAminoMsg(message: _90.MsgCreateValidatorResponse): _90.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _90.MsgCreateValidatorResponseProtoMsg): _90.MsgCreateValidatorResponse;
                toProto(message: _90.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _90.MsgCreateValidatorResponse): _90.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                encode(message: _90.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgEditValidator;
                fromJSON(object: any): _90.MsgEditValidator;
                toJSON(message: _90.MsgEditValidator): unknown;
                fromPartial(object: Partial<_90.MsgEditValidator>): _90.MsgEditValidator;
                fromAmino(object: _90.MsgEditValidatorAmino): _90.MsgEditValidator;
                toAmino(message: _90.MsgEditValidator): _90.MsgEditValidatorAmino;
                fromAminoMsg(object: _90.MsgEditValidatorAminoMsg): _90.MsgEditValidator;
                toAminoMsg(message: _90.MsgEditValidator): _90.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _90.MsgEditValidatorProtoMsg): _90.MsgEditValidator;
                toProto(message: _90.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _90.MsgEditValidator): _90.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                encode(_: _90.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgEditValidatorResponse;
                fromJSON(_: any): _90.MsgEditValidatorResponse;
                toJSON(_: _90.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_90.MsgEditValidatorResponse>): _90.MsgEditValidatorResponse;
                fromAmino(_: _90.MsgEditValidatorResponseAmino): _90.MsgEditValidatorResponse;
                toAmino(_: _90.MsgEditValidatorResponse): _90.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _90.MsgEditValidatorResponseAminoMsg): _90.MsgEditValidatorResponse;
                toAminoMsg(message: _90.MsgEditValidatorResponse): _90.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _90.MsgEditValidatorResponseProtoMsg): _90.MsgEditValidatorResponse;
                toProto(message: _90.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _90.MsgEditValidatorResponse): _90.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                encode(message: _90.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgDelegate;
                fromJSON(object: any): _90.MsgDelegate;
                toJSON(message: _90.MsgDelegate): unknown;
                fromPartial(object: Partial<_90.MsgDelegate>): _90.MsgDelegate;
                fromAmino(object: _90.MsgDelegateAmino): _90.MsgDelegate;
                toAmino(message: _90.MsgDelegate): _90.MsgDelegateAmino;
                fromAminoMsg(object: _90.MsgDelegateAminoMsg): _90.MsgDelegate;
                toAminoMsg(message: _90.MsgDelegate): _90.MsgDelegateAminoMsg;
                fromProtoMsg(message: _90.MsgDelegateProtoMsg): _90.MsgDelegate;
                toProto(message: _90.MsgDelegate): Uint8Array;
                toProtoMsg(message: _90.MsgDelegate): _90.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                encode(_: _90.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgDelegateResponse;
                fromJSON(_: any): _90.MsgDelegateResponse;
                toJSON(_: _90.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_90.MsgDelegateResponse>): _90.MsgDelegateResponse;
                fromAmino(_: _90.MsgDelegateResponseAmino): _90.MsgDelegateResponse;
                toAmino(_: _90.MsgDelegateResponse): _90.MsgDelegateResponseAmino;
                fromAminoMsg(object: _90.MsgDelegateResponseAminoMsg): _90.MsgDelegateResponse;
                toAminoMsg(message: _90.MsgDelegateResponse): _90.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _90.MsgDelegateResponseProtoMsg): _90.MsgDelegateResponse;
                toProto(message: _90.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _90.MsgDelegateResponse): _90.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                encode(message: _90.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgBeginRedelegate;
                fromJSON(object: any): _90.MsgBeginRedelegate;
                toJSON(message: _90.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_90.MsgBeginRedelegate>): _90.MsgBeginRedelegate;
                fromAmino(object: _90.MsgBeginRedelegateAmino): _90.MsgBeginRedelegate;
                toAmino(message: _90.MsgBeginRedelegate): _90.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _90.MsgBeginRedelegateAminoMsg): _90.MsgBeginRedelegate;
                toAminoMsg(message: _90.MsgBeginRedelegate): _90.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _90.MsgBeginRedelegateProtoMsg): _90.MsgBeginRedelegate;
                toProto(message: _90.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _90.MsgBeginRedelegate): _90.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _90.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgBeginRedelegateResponse;
                fromJSON(object: any): _90.MsgBeginRedelegateResponse;
                toJSON(message: _90.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_90.MsgBeginRedelegateResponse>): _90.MsgBeginRedelegateResponse;
                fromAmino(object: _90.MsgBeginRedelegateResponseAmino): _90.MsgBeginRedelegateResponse;
                toAmino(message: _90.MsgBeginRedelegateResponse): _90.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _90.MsgBeginRedelegateResponseAminoMsg): _90.MsgBeginRedelegateResponse;
                toAminoMsg(message: _90.MsgBeginRedelegateResponse): _90.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _90.MsgBeginRedelegateResponseProtoMsg): _90.MsgBeginRedelegateResponse;
                toProto(message: _90.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _90.MsgBeginRedelegateResponse): _90.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                encode(message: _90.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgUndelegate;
                fromJSON(object: any): _90.MsgUndelegate;
                toJSON(message: _90.MsgUndelegate): unknown;
                fromPartial(object: Partial<_90.MsgUndelegate>): _90.MsgUndelegate;
                fromAmino(object: _90.MsgUndelegateAmino): _90.MsgUndelegate;
                toAmino(message: _90.MsgUndelegate): _90.MsgUndelegateAmino;
                fromAminoMsg(object: _90.MsgUndelegateAminoMsg): _90.MsgUndelegate;
                toAminoMsg(message: _90.MsgUndelegate): _90.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _90.MsgUndelegateProtoMsg): _90.MsgUndelegate;
                toProto(message: _90.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _90.MsgUndelegate): _90.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                encode(message: _90.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgUndelegateResponse;
                fromJSON(object: any): _90.MsgUndelegateResponse;
                toJSON(message: _90.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_90.MsgUndelegateResponse>): _90.MsgUndelegateResponse;
                fromAmino(object: _90.MsgUndelegateResponseAmino): _90.MsgUndelegateResponse;
                toAmino(message: _90.MsgUndelegateResponse): _90.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _90.MsgUndelegateResponseAminoMsg): _90.MsgUndelegateResponse;
                toAminoMsg(message: _90.MsgUndelegateResponse): _90.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _90.MsgUndelegateResponseProtoMsg): _90.MsgUndelegateResponse;
                toProto(message: _90.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _90.MsgUndelegateResponse): _90.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _90.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _90.MsgCancelUnbondingDelegation;
                toJSON(message: _90.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: Partial<_90.MsgCancelUnbondingDelegation>): _90.MsgCancelUnbondingDelegation;
                fromAmino(object: _90.MsgCancelUnbondingDelegationAmino): _90.MsgCancelUnbondingDelegation;
                toAmino(message: _90.MsgCancelUnbondingDelegation): _90.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _90.MsgCancelUnbondingDelegationAminoMsg): _90.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _90.MsgCancelUnbondingDelegation): _90.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _90.MsgCancelUnbondingDelegationProtoMsg): _90.MsgCancelUnbondingDelegation;
                toProto(message: _90.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _90.MsgCancelUnbondingDelegation): _90.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _90.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _90.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _90.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: Partial<_90.MsgCancelUnbondingDelegationResponse>): _90.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _90.MsgCancelUnbondingDelegationResponseAmino): _90.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _90.MsgCancelUnbondingDelegationResponse): _90.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _90.MsgCancelUnbondingDelegationResponseAminoMsg): _90.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _90.MsgCancelUnbondingDelegationResponse): _90.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _90.MsgCancelUnbondingDelegationResponseProtoMsg): _90.MsgCancelUnbondingDelegationResponse;
                toProto(message: _90.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _90.MsgCancelUnbondingDelegationResponse): _90.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => string;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => {
                typeUrl: string;
                value: Uint8Array;
            };
            bondStatusFromJSON(object: any): _89.BondStatus;
            bondStatusToJSON(object: _89.BondStatus): string;
            BondStatus: typeof _89.BondStatus;
            BondStatusSDKType: typeof _89.BondStatus;
            BondStatusAmino: typeof _89.BondStatus;
            HistoricalInfo: {
                encode(message: _89.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.HistoricalInfo;
                fromJSON(object: any): _89.HistoricalInfo;
                toJSON(message: _89.HistoricalInfo): unknown;
                fromPartial(object: Partial<_89.HistoricalInfo>): _89.HistoricalInfo;
                fromAmino(object: _89.HistoricalInfoAmino): _89.HistoricalInfo;
                toAmino(message: _89.HistoricalInfo): _89.HistoricalInfoAmino;
                fromAminoMsg(object: _89.HistoricalInfoAminoMsg): _89.HistoricalInfo;
                toAminoMsg(message: _89.HistoricalInfo): _89.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _89.HistoricalInfoProtoMsg): _89.HistoricalInfo;
                toProto(message: _89.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _89.HistoricalInfo): _89.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                encode(message: _89.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.CommissionRates;
                fromJSON(object: any): _89.CommissionRates;
                toJSON(message: _89.CommissionRates): unknown;
                fromPartial(object: Partial<_89.CommissionRates>): _89.CommissionRates;
                fromAmino(object: _89.CommissionRatesAmino): _89.CommissionRates;
                toAmino(message: _89.CommissionRates): _89.CommissionRatesAmino;
                fromAminoMsg(object: _89.CommissionRatesAminoMsg): _89.CommissionRates;
                toAminoMsg(message: _89.CommissionRates): _89.CommissionRatesAminoMsg;
                fromProtoMsg(message: _89.CommissionRatesProtoMsg): _89.CommissionRates;
                toProto(message: _89.CommissionRates): Uint8Array;
                toProtoMsg(message: _89.CommissionRates): _89.CommissionRatesProtoMsg;
            };
            Commission: {
                encode(message: _89.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Commission;
                fromJSON(object: any): _89.Commission;
                toJSON(message: _89.Commission): unknown;
                fromPartial(object: Partial<_89.Commission>): _89.Commission;
                fromAmino(object: _89.CommissionAmino): _89.Commission;
                toAmino(message: _89.Commission): _89.CommissionAmino;
                fromAminoMsg(object: _89.CommissionAminoMsg): _89.Commission;
                toAminoMsg(message: _89.Commission): _89.CommissionAminoMsg;
                fromProtoMsg(message: _89.CommissionProtoMsg): _89.Commission;
                toProto(message: _89.Commission): Uint8Array;
                toProtoMsg(message: _89.Commission): _89.CommissionProtoMsg;
            };
            Description: {
                encode(message: _89.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Description;
                fromJSON(object: any): _89.Description;
                toJSON(message: _89.Description): unknown;
                fromPartial(object: Partial<_89.Description>): _89.Description;
                fromAmino(object: _89.DescriptionAmino): _89.Description;
                toAmino(message: _89.Description): _89.DescriptionAmino;
                fromAminoMsg(object: _89.DescriptionAminoMsg): _89.Description;
                toAminoMsg(message: _89.Description): _89.DescriptionAminoMsg;
                fromProtoMsg(message: _89.DescriptionProtoMsg): _89.Description;
                toProto(message: _89.Description): Uint8Array;
                toProtoMsg(message: _89.Description): _89.DescriptionProtoMsg;
            };
            Validator: {
                encode(message: _89.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Validator;
                fromJSON(object: any): _89.Validator;
                toJSON(message: _89.Validator): unknown;
                fromPartial(object: Partial<_89.Validator>): _89.Validator;
                fromAmino(object: _89.ValidatorAmino): _89.Validator;
                toAmino(message: _89.Validator): _89.ValidatorAmino;
                fromAminoMsg(object: _89.ValidatorAminoMsg): _89.Validator;
                toAminoMsg(message: _89.Validator): _89.ValidatorAminoMsg;
                fromProtoMsg(message: _89.ValidatorProtoMsg): _89.Validator;
                toProto(message: _89.Validator): Uint8Array;
                toProtoMsg(message: _89.Validator): _89.ValidatorProtoMsg;
            };
            ValAddresses: {
                encode(message: _89.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ValAddresses;
                fromJSON(object: any): _89.ValAddresses;
                toJSON(message: _89.ValAddresses): unknown;
                fromPartial(object: Partial<_89.ValAddresses>): _89.ValAddresses;
                fromAmino(object: _89.ValAddressesAmino): _89.ValAddresses;
                toAmino(message: _89.ValAddresses): _89.ValAddressesAmino;
                fromAminoMsg(object: _89.ValAddressesAminoMsg): _89.ValAddresses;
                toAminoMsg(message: _89.ValAddresses): _89.ValAddressesAminoMsg;
                fromProtoMsg(message: _89.ValAddressesProtoMsg): _89.ValAddresses;
                toProto(message: _89.ValAddresses): Uint8Array;
                toProtoMsg(message: _89.ValAddresses): _89.ValAddressesProtoMsg;
            };
            DVPair: {
                encode(message: _89.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.DVPair;
                fromJSON(object: any): _89.DVPair;
                toJSON(message: _89.DVPair): unknown;
                fromPartial(object: Partial<_89.DVPair>): _89.DVPair;
                fromAmino(object: _89.DVPairAmino): _89.DVPair;
                toAmino(message: _89.DVPair): _89.DVPairAmino;
                fromAminoMsg(object: _89.DVPairAminoMsg): _89.DVPair;
                toAminoMsg(message: _89.DVPair): _89.DVPairAminoMsg;
                fromProtoMsg(message: _89.DVPairProtoMsg): _89.DVPair;
                toProto(message: _89.DVPair): Uint8Array;
                toProtoMsg(message: _89.DVPair): _89.DVPairProtoMsg;
            };
            DVPairs: {
                encode(message: _89.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.DVPairs;
                fromJSON(object: any): _89.DVPairs;
                toJSON(message: _89.DVPairs): unknown;
                fromPartial(object: Partial<_89.DVPairs>): _89.DVPairs;
                fromAmino(object: _89.DVPairsAmino): _89.DVPairs;
                toAmino(message: _89.DVPairs): _89.DVPairsAmino;
                fromAminoMsg(object: _89.DVPairsAminoMsg): _89.DVPairs;
                toAminoMsg(message: _89.DVPairs): _89.DVPairsAminoMsg;
                fromProtoMsg(message: _89.DVPairsProtoMsg): _89.DVPairs;
                toProto(message: _89.DVPairs): Uint8Array;
                toProtoMsg(message: _89.DVPairs): _89.DVPairsProtoMsg;
            };
            DVVTriplet: {
                encode(message: _89.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.DVVTriplet;
                fromJSON(object: any): _89.DVVTriplet;
                toJSON(message: _89.DVVTriplet): unknown;
                fromPartial(object: Partial<_89.DVVTriplet>): _89.DVVTriplet;
                fromAmino(object: _89.DVVTripletAmino): _89.DVVTriplet;
                toAmino(message: _89.DVVTriplet): _89.DVVTripletAmino;
                fromAminoMsg(object: _89.DVVTripletAminoMsg): _89.DVVTriplet;
                toAminoMsg(message: _89.DVVTriplet): _89.DVVTripletAminoMsg;
                fromProtoMsg(message: _89.DVVTripletProtoMsg): _89.DVVTriplet;
                toProto(message: _89.DVVTriplet): Uint8Array;
                toProtoMsg(message: _89.DVVTriplet): _89.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                encode(message: _89.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.DVVTriplets;
                fromJSON(object: any): _89.DVVTriplets;
                toJSON(message: _89.DVVTriplets): unknown;
                fromPartial(object: Partial<_89.DVVTriplets>): _89.DVVTriplets;
                fromAmino(object: _89.DVVTripletsAmino): _89.DVVTriplets;
                toAmino(message: _89.DVVTriplets): _89.DVVTripletsAmino;
                fromAminoMsg(object: _89.DVVTripletsAminoMsg): _89.DVVTriplets;
                toAminoMsg(message: _89.DVVTriplets): _89.DVVTripletsAminoMsg;
                fromProtoMsg(message: _89.DVVTripletsProtoMsg): _89.DVVTriplets;
                toProto(message: _89.DVVTriplets): Uint8Array;
                toProtoMsg(message: _89.DVVTriplets): _89.DVVTripletsProtoMsg;
            };
            Delegation: {
                encode(message: _89.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Delegation;
                fromJSON(object: any): _89.Delegation;
                toJSON(message: _89.Delegation): unknown;
                fromPartial(object: Partial<_89.Delegation>): _89.Delegation;
                fromAmino(object: _89.DelegationAmino): _89.Delegation;
                toAmino(message: _89.Delegation): _89.DelegationAmino;
                fromAminoMsg(object: _89.DelegationAminoMsg): _89.Delegation;
                toAminoMsg(message: _89.Delegation): _89.DelegationAminoMsg;
                fromProtoMsg(message: _89.DelegationProtoMsg): _89.Delegation;
                toProto(message: _89.Delegation): Uint8Array;
                toProtoMsg(message: _89.Delegation): _89.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                encode(message: _89.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.UnbondingDelegation;
                fromJSON(object: any): _89.UnbondingDelegation;
                toJSON(message: _89.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_89.UnbondingDelegation>): _89.UnbondingDelegation;
                fromAmino(object: _89.UnbondingDelegationAmino): _89.UnbondingDelegation;
                toAmino(message: _89.UnbondingDelegation): _89.UnbondingDelegationAmino;
                fromAminoMsg(object: _89.UnbondingDelegationAminoMsg): _89.UnbondingDelegation;
                toAminoMsg(message: _89.UnbondingDelegation): _89.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _89.UnbondingDelegationProtoMsg): _89.UnbondingDelegation;
                toProto(message: _89.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _89.UnbondingDelegation): _89.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                encode(message: _89.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.UnbondingDelegationEntry;
                fromJSON(object: any): _89.UnbondingDelegationEntry;
                toJSON(message: _89.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_89.UnbondingDelegationEntry>): _89.UnbondingDelegationEntry;
                fromAmino(object: _89.UnbondingDelegationEntryAmino): _89.UnbondingDelegationEntry;
                toAmino(message: _89.UnbondingDelegationEntry): _89.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _89.UnbondingDelegationEntryAminoMsg): _89.UnbondingDelegationEntry;
                toAminoMsg(message: _89.UnbondingDelegationEntry): _89.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _89.UnbondingDelegationEntryProtoMsg): _89.UnbondingDelegationEntry;
                toProto(message: _89.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _89.UnbondingDelegationEntry): _89.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                encode(message: _89.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.RedelegationEntry;
                fromJSON(object: any): _89.RedelegationEntry;
                toJSON(message: _89.RedelegationEntry): unknown;
                fromPartial(object: Partial<_89.RedelegationEntry>): _89.RedelegationEntry;
                fromAmino(object: _89.RedelegationEntryAmino): _89.RedelegationEntry;
                toAmino(message: _89.RedelegationEntry): _89.RedelegationEntryAmino;
                fromAminoMsg(object: _89.RedelegationEntryAminoMsg): _89.RedelegationEntry;
                toAminoMsg(message: _89.RedelegationEntry): _89.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _89.RedelegationEntryProtoMsg): _89.RedelegationEntry;
                toProto(message: _89.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _89.RedelegationEntry): _89.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                encode(message: _89.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Redelegation;
                fromJSON(object: any): _89.Redelegation;
                toJSON(message: _89.Redelegation): unknown;
                fromPartial(object: Partial<_89.Redelegation>): _89.Redelegation;
                fromAmino(object: _89.RedelegationAmino): _89.Redelegation;
                toAmino(message: _89.Redelegation): _89.RedelegationAmino;
                fromAminoMsg(object: _89.RedelegationAminoMsg): _89.Redelegation;
                toAminoMsg(message: _89.Redelegation): _89.RedelegationAminoMsg;
                fromProtoMsg(message: _89.RedelegationProtoMsg): _89.Redelegation;
                toProto(message: _89.Redelegation): Uint8Array;
                toProtoMsg(message: _89.Redelegation): _89.RedelegationProtoMsg;
            };
            Params: {
                encode(message: _89.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Params;
                fromJSON(object: any): _89.Params;
                toJSON(message: _89.Params): unknown;
                fromPartial(object: Partial<_89.Params>): _89.Params;
                fromAmino(object: _89.ParamsAmino): _89.Params;
                toAmino(message: _89.Params): _89.ParamsAmino;
                fromAminoMsg(object: _89.ParamsAminoMsg): _89.Params;
                toAminoMsg(message: _89.Params): _89.ParamsAminoMsg;
                fromProtoMsg(message: _89.ParamsProtoMsg): _89.Params;
                toProto(message: _89.Params): Uint8Array;
                toProtoMsg(message: _89.Params): _89.ParamsProtoMsg;
            };
            DelegationResponse: {
                encode(message: _89.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.DelegationResponse;
                fromJSON(object: any): _89.DelegationResponse;
                toJSON(message: _89.DelegationResponse): unknown;
                fromPartial(object: Partial<_89.DelegationResponse>): _89.DelegationResponse;
                fromAmino(object: _89.DelegationResponseAmino): _89.DelegationResponse;
                toAmino(message: _89.DelegationResponse): _89.DelegationResponseAmino;
                fromAminoMsg(object: _89.DelegationResponseAminoMsg): _89.DelegationResponse;
                toAminoMsg(message: _89.DelegationResponse): _89.DelegationResponseAminoMsg;
                fromProtoMsg(message: _89.DelegationResponseProtoMsg): _89.DelegationResponse;
                toProto(message: _89.DelegationResponse): Uint8Array;
                toProtoMsg(message: _89.DelegationResponse): _89.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                encode(message: _89.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.RedelegationEntryResponse;
                fromJSON(object: any): _89.RedelegationEntryResponse;
                toJSON(message: _89.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_89.RedelegationEntryResponse>): _89.RedelegationEntryResponse;
                fromAmino(object: _89.RedelegationEntryResponseAmino): _89.RedelegationEntryResponse;
                toAmino(message: _89.RedelegationEntryResponse): _89.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _89.RedelegationEntryResponseAminoMsg): _89.RedelegationEntryResponse;
                toAminoMsg(message: _89.RedelegationEntryResponse): _89.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _89.RedelegationEntryResponseProtoMsg): _89.RedelegationEntryResponse;
                toProto(message: _89.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _89.RedelegationEntryResponse): _89.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                encode(message: _89.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.RedelegationResponse;
                fromJSON(object: any): _89.RedelegationResponse;
                toJSON(message: _89.RedelegationResponse): unknown;
                fromPartial(object: Partial<_89.RedelegationResponse>): _89.RedelegationResponse;
                fromAmino(object: _89.RedelegationResponseAmino): _89.RedelegationResponse;
                toAmino(message: _89.RedelegationResponse): _89.RedelegationResponseAmino;
                fromAminoMsg(object: _89.RedelegationResponseAminoMsg): _89.RedelegationResponse;
                toAminoMsg(message: _89.RedelegationResponse): _89.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _89.RedelegationResponseProtoMsg): _89.RedelegationResponse;
                toProto(message: _89.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _89.RedelegationResponse): _89.RedelegationResponseProtoMsg;
            };
            Pool: {
                encode(message: _89.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Pool;
                fromJSON(object: any): _89.Pool;
                toJSON(message: _89.Pool): unknown;
                fromPartial(object: Partial<_89.Pool>): _89.Pool;
                fromAmino(object: _89.PoolAmino): _89.Pool;
                toAmino(message: _89.Pool): _89.PoolAmino;
                fromAminoMsg(object: _89.PoolAminoMsg): _89.Pool;
                toAminoMsg(message: _89.Pool): _89.PoolAminoMsg;
                fromProtoMsg(message: _89.PoolProtoMsg): _89.Pool;
                toProto(message: _89.Pool): Uint8Array;
                toProtoMsg(message: _89.Pool): _89.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                encode(message: _88.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryValidatorsRequest;
                fromJSON(object: any): _88.QueryValidatorsRequest;
                toJSON(message: _88.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_88.QueryValidatorsRequest>): _88.QueryValidatorsRequest;
                fromAmino(object: _88.QueryValidatorsRequestAmino): _88.QueryValidatorsRequest;
                toAmino(message: _88.QueryValidatorsRequest): _88.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _88.QueryValidatorsRequestAminoMsg): _88.QueryValidatorsRequest;
                toAminoMsg(message: _88.QueryValidatorsRequest): _88.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorsRequestProtoMsg): _88.QueryValidatorsRequest;
                toProto(message: _88.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorsRequest): _88.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                encode(message: _88.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryValidatorsResponse;
                fromJSON(object: any): _88.QueryValidatorsResponse;
                toJSON(message: _88.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_88.QueryValidatorsResponse>): _88.QueryValidatorsResponse;
                fromAmino(object: _88.QueryValidatorsResponseAmino): _88.QueryValidatorsResponse;
                toAmino(message: _88.QueryValidatorsResponse): _88.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _88.QueryValidatorsResponseAminoMsg): _88.QueryValidatorsResponse;
                toAminoMsg(message: _88.QueryValidatorsResponse): _88.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorsResponseProtoMsg): _88.QueryValidatorsResponse;
                toProto(message: _88.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorsResponse): _88.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                encode(message: _88.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryValidatorRequest;
                fromJSON(object: any): _88.QueryValidatorRequest;
                toJSON(message: _88.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_88.QueryValidatorRequest>): _88.QueryValidatorRequest;
                fromAmino(object: _88.QueryValidatorRequestAmino): _88.QueryValidatorRequest;
                toAmino(message: _88.QueryValidatorRequest): _88.QueryValidatorRequestAmino;
                fromAminoMsg(object: _88.QueryValidatorRequestAminoMsg): _88.QueryValidatorRequest;
                toAminoMsg(message: _88.QueryValidatorRequest): _88.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorRequestProtoMsg): _88.QueryValidatorRequest;
                toProto(message: _88.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorRequest): _88.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                encode(message: _88.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryValidatorResponse;
                fromJSON(object: any): _88.QueryValidatorResponse;
                toJSON(message: _88.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_88.QueryValidatorResponse>): _88.QueryValidatorResponse;
                fromAmino(object: _88.QueryValidatorResponseAmino): _88.QueryValidatorResponse;
                toAmino(message: _88.QueryValidatorResponse): _88.QueryValidatorResponseAmino;
                fromAminoMsg(object: _88.QueryValidatorResponseAminoMsg): _88.QueryValidatorResponse;
                toAminoMsg(message: _88.QueryValidatorResponse): _88.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorResponseProtoMsg): _88.QueryValidatorResponse;
                toProto(message: _88.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorResponse): _88.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _88.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _88.QueryValidatorDelegationsRequest;
                toJSON(message: _88.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_88.QueryValidatorDelegationsRequest>): _88.QueryValidatorDelegationsRequest;
                fromAmino(object: _88.QueryValidatorDelegationsRequestAmino): _88.QueryValidatorDelegationsRequest;
                toAmino(message: _88.QueryValidatorDelegationsRequest): _88.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _88.QueryValidatorDelegationsRequestAminoMsg): _88.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _88.QueryValidatorDelegationsRequest): _88.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorDelegationsRequestProtoMsg): _88.QueryValidatorDelegationsRequest;
                toProto(message: _88.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorDelegationsRequest): _88.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _88.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _88.QueryValidatorDelegationsResponse;
                toJSON(message: _88.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_88.QueryValidatorDelegationsResponse>): _88.QueryValidatorDelegationsResponse;
                fromAmino(object: _88.QueryValidatorDelegationsResponseAmino): _88.QueryValidatorDelegationsResponse;
                toAmino(message: _88.QueryValidatorDelegationsResponse): _88.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _88.QueryValidatorDelegationsResponseAminoMsg): _88.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _88.QueryValidatorDelegationsResponse): _88.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorDelegationsResponseProtoMsg): _88.QueryValidatorDelegationsResponse;
                toProto(message: _88.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorDelegationsResponse): _88.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _88.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _88.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _88.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_88.QueryValidatorUnbondingDelegationsRequest>): _88.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _88.QueryValidatorUnbondingDelegationsRequestAmino): _88.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _88.QueryValidatorUnbondingDelegationsRequest): _88.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _88.QueryValidatorUnbondingDelegationsRequestAminoMsg): _88.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _88.QueryValidatorUnbondingDelegationsRequest): _88.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorUnbondingDelegationsRequestProtoMsg): _88.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _88.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorUnbondingDelegationsRequest): _88.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _88.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _88.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _88.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_88.QueryValidatorUnbondingDelegationsResponse>): _88.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _88.QueryValidatorUnbondingDelegationsResponseAmino): _88.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _88.QueryValidatorUnbondingDelegationsResponse): _88.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _88.QueryValidatorUnbondingDelegationsResponseAminoMsg): _88.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _88.QueryValidatorUnbondingDelegationsResponse): _88.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorUnbondingDelegationsResponseProtoMsg): _88.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _88.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorUnbondingDelegationsResponse): _88.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                encode(message: _88.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDelegationRequest;
                fromJSON(object: any): _88.QueryDelegationRequest;
                toJSON(message: _88.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_88.QueryDelegationRequest>): _88.QueryDelegationRequest;
                fromAmino(object: _88.QueryDelegationRequestAmino): _88.QueryDelegationRequest;
                toAmino(message: _88.QueryDelegationRequest): _88.QueryDelegationRequestAmino;
                fromAminoMsg(object: _88.QueryDelegationRequestAminoMsg): _88.QueryDelegationRequest;
                toAminoMsg(message: _88.QueryDelegationRequest): _88.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _88.QueryDelegationRequestProtoMsg): _88.QueryDelegationRequest;
                toProto(message: _88.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _88.QueryDelegationRequest): _88.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                encode(message: _88.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDelegationResponse;
                fromJSON(object: any): _88.QueryDelegationResponse;
                toJSON(message: _88.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_88.QueryDelegationResponse>): _88.QueryDelegationResponse;
                fromAmino(object: _88.QueryDelegationResponseAmino): _88.QueryDelegationResponse;
                toAmino(message: _88.QueryDelegationResponse): _88.QueryDelegationResponseAmino;
                fromAminoMsg(object: _88.QueryDelegationResponseAminoMsg): _88.QueryDelegationResponse;
                toAminoMsg(message: _88.QueryDelegationResponse): _88.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _88.QueryDelegationResponseProtoMsg): _88.QueryDelegationResponse;
                toProto(message: _88.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _88.QueryDelegationResponse): _88.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _88.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _88.QueryUnbondingDelegationRequest;
                toJSON(message: _88.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_88.QueryUnbondingDelegationRequest>): _88.QueryUnbondingDelegationRequest;
                fromAmino(object: _88.QueryUnbondingDelegationRequestAmino): _88.QueryUnbondingDelegationRequest;
                toAmino(message: _88.QueryUnbondingDelegationRequest): _88.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _88.QueryUnbondingDelegationRequestAminoMsg): _88.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _88.QueryUnbondingDelegationRequest): _88.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _88.QueryUnbondingDelegationRequestProtoMsg): _88.QueryUnbondingDelegationRequest;
                toProto(message: _88.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _88.QueryUnbondingDelegationRequest): _88.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _88.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _88.QueryUnbondingDelegationResponse;
                toJSON(message: _88.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_88.QueryUnbondingDelegationResponse>): _88.QueryUnbondingDelegationResponse;
                fromAmino(object: _88.QueryUnbondingDelegationResponseAmino): _88.QueryUnbondingDelegationResponse;
                toAmino(message: _88.QueryUnbondingDelegationResponse): _88.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _88.QueryUnbondingDelegationResponseAminoMsg): _88.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _88.QueryUnbondingDelegationResponse): _88.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _88.QueryUnbondingDelegationResponseProtoMsg): _88.QueryUnbondingDelegationResponse;
                toProto(message: _88.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _88.QueryUnbondingDelegationResponse): _88.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _88.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _88.QueryDelegatorDelegationsRequest;
                toJSON(message: _88.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_88.QueryDelegatorDelegationsRequest>): _88.QueryDelegatorDelegationsRequest;
                fromAmino(object: _88.QueryDelegatorDelegationsRequestAmino): _88.QueryDelegatorDelegationsRequest;
                toAmino(message: _88.QueryDelegatorDelegationsRequest): _88.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _88.QueryDelegatorDelegationsRequestAminoMsg): _88.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _88.QueryDelegatorDelegationsRequest): _88.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryDelegatorDelegationsRequestProtoMsg): _88.QueryDelegatorDelegationsRequest;
                toProto(message: _88.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryDelegatorDelegationsRequest): _88.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _88.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _88.QueryDelegatorDelegationsResponse;
                toJSON(message: _88.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_88.QueryDelegatorDelegationsResponse>): _88.QueryDelegatorDelegationsResponse;
                fromAmino(object: _88.QueryDelegatorDelegationsResponseAmino): _88.QueryDelegatorDelegationsResponse;
                toAmino(message: _88.QueryDelegatorDelegationsResponse): _88.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _88.QueryDelegatorDelegationsResponseAminoMsg): _88.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _88.QueryDelegatorDelegationsResponse): _88.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryDelegatorDelegationsResponseProtoMsg): _88.QueryDelegatorDelegationsResponse;
                toProto(message: _88.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryDelegatorDelegationsResponse): _88.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _88.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _88.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _88.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_88.QueryDelegatorUnbondingDelegationsRequest>): _88.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _88.QueryDelegatorUnbondingDelegationsRequestAmino): _88.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _88.QueryDelegatorUnbondingDelegationsRequest): _88.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _88.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _88.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _88.QueryDelegatorUnbondingDelegationsRequest): _88.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _88.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _88.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryDelegatorUnbondingDelegationsRequest): _88.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _88.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _88.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _88.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_88.QueryDelegatorUnbondingDelegationsResponse>): _88.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _88.QueryDelegatorUnbondingDelegationsResponseAmino): _88.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _88.QueryDelegatorUnbondingDelegationsResponse): _88.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _88.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _88.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _88.QueryDelegatorUnbondingDelegationsResponse): _88.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _88.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _88.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryDelegatorUnbondingDelegationsResponse): _88.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                encode(message: _88.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryRedelegationsRequest;
                fromJSON(object: any): _88.QueryRedelegationsRequest;
                toJSON(message: _88.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_88.QueryRedelegationsRequest>): _88.QueryRedelegationsRequest;
                fromAmino(object: _88.QueryRedelegationsRequestAmino): _88.QueryRedelegationsRequest;
                toAmino(message: _88.QueryRedelegationsRequest): _88.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _88.QueryRedelegationsRequestAminoMsg): _88.QueryRedelegationsRequest;
                toAminoMsg(message: _88.QueryRedelegationsRequest): _88.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryRedelegationsRequestProtoMsg): _88.QueryRedelegationsRequest;
                toProto(message: _88.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryRedelegationsRequest): _88.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                encode(message: _88.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryRedelegationsResponse;
                fromJSON(object: any): _88.QueryRedelegationsResponse;
                toJSON(message: _88.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_88.QueryRedelegationsResponse>): _88.QueryRedelegationsResponse;
                fromAmino(object: _88.QueryRedelegationsResponseAmino): _88.QueryRedelegationsResponse;
                toAmino(message: _88.QueryRedelegationsResponse): _88.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _88.QueryRedelegationsResponseAminoMsg): _88.QueryRedelegationsResponse;
                toAminoMsg(message: _88.QueryRedelegationsResponse): _88.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryRedelegationsResponseProtoMsg): _88.QueryRedelegationsResponse;
                toProto(message: _88.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryRedelegationsResponse): _88.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _88.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _88.QueryDelegatorValidatorsRequest;
                toJSON(message: _88.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_88.QueryDelegatorValidatorsRequest>): _88.QueryDelegatorValidatorsRequest;
                fromAmino(object: _88.QueryDelegatorValidatorsRequestAmino): _88.QueryDelegatorValidatorsRequest;
                toAmino(message: _88.QueryDelegatorValidatorsRequest): _88.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _88.QueryDelegatorValidatorsRequestAminoMsg): _88.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _88.QueryDelegatorValidatorsRequest): _88.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryDelegatorValidatorsRequestProtoMsg): _88.QueryDelegatorValidatorsRequest;
                toProto(message: _88.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryDelegatorValidatorsRequest): _88.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _88.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _88.QueryDelegatorValidatorsResponse;
                toJSON(message: _88.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_88.QueryDelegatorValidatorsResponse>): _88.QueryDelegatorValidatorsResponse;
                fromAmino(object: _88.QueryDelegatorValidatorsResponseAmino): _88.QueryDelegatorValidatorsResponse;
                toAmino(message: _88.QueryDelegatorValidatorsResponse): _88.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _88.QueryDelegatorValidatorsResponseAminoMsg): _88.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _88.QueryDelegatorValidatorsResponse): _88.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryDelegatorValidatorsResponseProtoMsg): _88.QueryDelegatorValidatorsResponse;
                toProto(message: _88.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryDelegatorValidatorsResponse): _88.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _88.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _88.QueryDelegatorValidatorRequest;
                toJSON(message: _88.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_88.QueryDelegatorValidatorRequest>): _88.QueryDelegatorValidatorRequest;
                fromAmino(object: _88.QueryDelegatorValidatorRequestAmino): _88.QueryDelegatorValidatorRequest;
                toAmino(message: _88.QueryDelegatorValidatorRequest): _88.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _88.QueryDelegatorValidatorRequestAminoMsg): _88.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _88.QueryDelegatorValidatorRequest): _88.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _88.QueryDelegatorValidatorRequestProtoMsg): _88.QueryDelegatorValidatorRequest;
                toProto(message: _88.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _88.QueryDelegatorValidatorRequest): _88.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _88.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _88.QueryDelegatorValidatorResponse;
                toJSON(message: _88.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_88.QueryDelegatorValidatorResponse>): _88.QueryDelegatorValidatorResponse;
                fromAmino(object: _88.QueryDelegatorValidatorResponseAmino): _88.QueryDelegatorValidatorResponse;
                toAmino(message: _88.QueryDelegatorValidatorResponse): _88.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _88.QueryDelegatorValidatorResponseAminoMsg): _88.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _88.QueryDelegatorValidatorResponse): _88.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _88.QueryDelegatorValidatorResponseProtoMsg): _88.QueryDelegatorValidatorResponse;
                toProto(message: _88.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _88.QueryDelegatorValidatorResponse): _88.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _88.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryHistoricalInfoRequest;
                fromJSON(object: any): _88.QueryHistoricalInfoRequest;
                toJSON(message: _88.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_88.QueryHistoricalInfoRequest>): _88.QueryHistoricalInfoRequest;
                fromAmino(object: _88.QueryHistoricalInfoRequestAmino): _88.QueryHistoricalInfoRequest;
                toAmino(message: _88.QueryHistoricalInfoRequest): _88.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _88.QueryHistoricalInfoRequestAminoMsg): _88.QueryHistoricalInfoRequest;
                toAminoMsg(message: _88.QueryHistoricalInfoRequest): _88.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _88.QueryHistoricalInfoRequestProtoMsg): _88.QueryHistoricalInfoRequest;
                toProto(message: _88.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _88.QueryHistoricalInfoRequest): _88.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _88.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryHistoricalInfoResponse;
                fromJSON(object: any): _88.QueryHistoricalInfoResponse;
                toJSON(message: _88.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_88.QueryHistoricalInfoResponse>): _88.QueryHistoricalInfoResponse;
                fromAmino(object: _88.QueryHistoricalInfoResponseAmino): _88.QueryHistoricalInfoResponse;
                toAmino(message: _88.QueryHistoricalInfoResponse): _88.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _88.QueryHistoricalInfoResponseAminoMsg): _88.QueryHistoricalInfoResponse;
                toAminoMsg(message: _88.QueryHistoricalInfoResponse): _88.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _88.QueryHistoricalInfoResponseProtoMsg): _88.QueryHistoricalInfoResponse;
                toProto(message: _88.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _88.QueryHistoricalInfoResponse): _88.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                encode(_: _88.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryPoolRequest;
                fromJSON(_: any): _88.QueryPoolRequest;
                toJSON(_: _88.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_88.QueryPoolRequest>): _88.QueryPoolRequest;
                fromAmino(_: _88.QueryPoolRequestAmino): _88.QueryPoolRequest;
                toAmino(_: _88.QueryPoolRequest): _88.QueryPoolRequestAmino;
                fromAminoMsg(object: _88.QueryPoolRequestAminoMsg): _88.QueryPoolRequest;
                toAminoMsg(message: _88.QueryPoolRequest): _88.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _88.QueryPoolRequestProtoMsg): _88.QueryPoolRequest;
                toProto(message: _88.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _88.QueryPoolRequest): _88.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                encode(message: _88.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryPoolResponse;
                fromJSON(object: any): _88.QueryPoolResponse;
                toJSON(message: _88.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_88.QueryPoolResponse>): _88.QueryPoolResponse;
                fromAmino(object: _88.QueryPoolResponseAmino): _88.QueryPoolResponse;
                toAmino(message: _88.QueryPoolResponse): _88.QueryPoolResponseAmino;
                fromAminoMsg(object: _88.QueryPoolResponseAminoMsg): _88.QueryPoolResponse;
                toAminoMsg(message: _88.QueryPoolResponse): _88.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _88.QueryPoolResponseProtoMsg): _88.QueryPoolResponse;
                toProto(message: _88.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _88.QueryPoolResponse): _88.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _88.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryParamsRequest;
                fromJSON(_: any): _88.QueryParamsRequest;
                toJSON(_: _88.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_88.QueryParamsRequest>): _88.QueryParamsRequest;
                fromAmino(_: _88.QueryParamsRequestAmino): _88.QueryParamsRequest;
                toAmino(_: _88.QueryParamsRequest): _88.QueryParamsRequestAmino;
                fromAminoMsg(object: _88.QueryParamsRequestAminoMsg): _88.QueryParamsRequest;
                toAminoMsg(message: _88.QueryParamsRequest): _88.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryParamsRequestProtoMsg): _88.QueryParamsRequest;
                toProto(message: _88.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryParamsRequest): _88.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _88.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryParamsResponse;
                fromJSON(object: any): _88.QueryParamsResponse;
                toJSON(message: _88.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_88.QueryParamsResponse>): _88.QueryParamsResponse;
                fromAmino(object: _88.QueryParamsResponseAmino): _88.QueryParamsResponse;
                toAmino(message: _88.QueryParamsResponse): _88.QueryParamsResponseAmino;
                fromAminoMsg(object: _88.QueryParamsResponseAminoMsg): _88.QueryParamsResponse;
                toAminoMsg(message: _88.QueryParamsResponse): _88.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryParamsResponseProtoMsg): _88.QueryParamsResponse;
                toProto(message: _88.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryParamsResponse): _88.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GenesisState;
                fromJSON(object: any): _87.GenesisState;
                toJSON(message: _87.GenesisState): unknown;
                fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
                fromAmino(object: _87.GenesisStateAmino): _87.GenesisState;
                toAmino(message: _87.GenesisState): _87.GenesisStateAmino;
                fromAminoMsg(object: _87.GenesisStateAminoMsg): _87.GenesisState;
                toAminoMsg(message: _87.GenesisState): _87.GenesisStateAminoMsg;
                fromProtoMsg(message: _87.GenesisStateProtoMsg): _87.GenesisState;
                toProto(message: _87.GenesisState): Uint8Array;
                toProtoMsg(message: _87.GenesisState): _87.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                encode(message: _87.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.LastValidatorPower;
                fromJSON(object: any): _87.LastValidatorPower;
                toJSON(message: _87.LastValidatorPower): unknown;
                fromPartial(object: Partial<_87.LastValidatorPower>): _87.LastValidatorPower;
                fromAmino(object: _87.LastValidatorPowerAmino): _87.LastValidatorPower;
                toAmino(message: _87.LastValidatorPower): _87.LastValidatorPowerAmino;
                fromAminoMsg(object: _87.LastValidatorPowerAminoMsg): _87.LastValidatorPower;
                toAminoMsg(message: _87.LastValidatorPower): _87.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _87.LastValidatorPowerProtoMsg): _87.LastValidatorPower;
                toProto(message: _87.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _87.LastValidatorPower): _87.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _86.AuthorizationType;
            authorizationTypeToJSON(object: _86.AuthorizationType): string;
            AuthorizationType: typeof _86.AuthorizationType;
            AuthorizationTypeSDKType: typeof _86.AuthorizationType;
            AuthorizationTypeAmino: typeof _86.AuthorizationType;
            StakeAuthorization: {
                encode(message: _86.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.StakeAuthorization;
                fromJSON(object: any): _86.StakeAuthorization;
                toJSON(message: _86.StakeAuthorization): unknown;
                fromPartial(object: Partial<_86.StakeAuthorization>): _86.StakeAuthorization;
                fromAmino(object: _86.StakeAuthorizationAmino): _86.StakeAuthorization;
                toAmino(message: _86.StakeAuthorization): _86.StakeAuthorizationAmino;
                fromAminoMsg(object: _86.StakeAuthorizationAminoMsg): _86.StakeAuthorization;
                toAminoMsg(message: _86.StakeAuthorization): _86.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _86.StakeAuthorizationProtoMsg): _86.StakeAuthorization;
                toProto(message: _86.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _86.StakeAuthorization): _86.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                encode(message: _86.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.StakeAuthorization_Validators;
                fromJSON(object: any): _86.StakeAuthorization_Validators;
                toJSON(message: _86.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_86.StakeAuthorization_Validators>): _86.StakeAuthorization_Validators;
                fromAmino(object: _86.StakeAuthorization_ValidatorsAmino): _86.StakeAuthorization_Validators;
                toAmino(message: _86.StakeAuthorization_Validators): _86.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _86.StakeAuthorization_ValidatorsAminoMsg): _86.StakeAuthorization_Validators;
                toAminoMsg(message: _86.StakeAuthorization_Validators): _86.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _86.StakeAuthorization_ValidatorsProtoMsg): _86.StakeAuthorization_Validators;
                toProto(message: _86.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _86.StakeAuthorization_Validators): _86.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _91.SignMode;
                signModeToJSON(object: _91.SignMode): string;
                SignMode: typeof _91.SignMode;
                SignModeSDKType: typeof _91.SignMode;
                SignModeAmino: typeof _91.SignMode;
                SignatureDescriptors: {
                    encode(message: _91.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SignatureDescriptors;
                    fromJSON(object: any): _91.SignatureDescriptors;
                    toJSON(message: _91.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_91.SignatureDescriptors>): _91.SignatureDescriptors;
                    fromAmino(object: _91.SignatureDescriptorsAmino): _91.SignatureDescriptors;
                    toAmino(message: _91.SignatureDescriptors): _91.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _91.SignatureDescriptorsAminoMsg): _91.SignatureDescriptors;
                    toAminoMsg(message: _91.SignatureDescriptors): _91.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _91.SignatureDescriptorsProtoMsg): _91.SignatureDescriptors;
                    toProto(message: _91.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _91.SignatureDescriptors): _91.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    encode(message: _91.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SignatureDescriptor;
                    fromJSON(object: any): _91.SignatureDescriptor;
                    toJSON(message: _91.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_91.SignatureDescriptor>): _91.SignatureDescriptor;
                    fromAmino(object: _91.SignatureDescriptorAmino): _91.SignatureDescriptor;
                    toAmino(message: _91.SignatureDescriptor): _91.SignatureDescriptorAmino;
                    fromAminoMsg(object: _91.SignatureDescriptorAminoMsg): _91.SignatureDescriptor;
                    toAminoMsg(message: _91.SignatureDescriptor): _91.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _91.SignatureDescriptorProtoMsg): _91.SignatureDescriptor;
                    toProto(message: _91.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _91.SignatureDescriptor): _91.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    encode(message: _91.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SignatureDescriptor_Data;
                    fromJSON(object: any): _91.SignatureDescriptor_Data;
                    toJSON(message: _91.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_91.SignatureDescriptor_Data>): _91.SignatureDescriptor_Data;
                    fromAmino(object: _91.SignatureDescriptor_DataAmino): _91.SignatureDescriptor_Data;
                    toAmino(message: _91.SignatureDescriptor_Data): _91.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _91.SignatureDescriptor_DataAminoMsg): _91.SignatureDescriptor_Data;
                    toAminoMsg(message: _91.SignatureDescriptor_Data): _91.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _91.SignatureDescriptor_DataProtoMsg): _91.SignatureDescriptor_Data;
                    toProto(message: _91.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _91.SignatureDescriptor_Data): _91.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _91.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _91.SignatureDescriptor_Data_Single;
                    toJSON(message: _91.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_91.SignatureDescriptor_Data_Single>): _91.SignatureDescriptor_Data_Single;
                    fromAmino(object: _91.SignatureDescriptor_Data_SingleAmino): _91.SignatureDescriptor_Data_Single;
                    toAmino(message: _91.SignatureDescriptor_Data_Single): _91.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _91.SignatureDescriptor_Data_SingleAminoMsg): _91.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _91.SignatureDescriptor_Data_Single): _91.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _91.SignatureDescriptor_Data_SingleProtoMsg): _91.SignatureDescriptor_Data_Single;
                    toProto(message: _91.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _91.SignatureDescriptor_Data_Single): _91.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _91.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _91.SignatureDescriptor_Data_Multi;
                    toJSON(message: _91.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_91.SignatureDescriptor_Data_Multi>): _91.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _91.SignatureDescriptor_Data_MultiAmino): _91.SignatureDescriptor_Data_Multi;
                    toAmino(message: _91.SignatureDescriptor_Data_Multi): _91.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _91.SignatureDescriptor_Data_MultiAminoMsg): _91.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _91.SignatureDescriptor_Data_Multi): _91.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _91.SignatureDescriptor_Data_MultiProtoMsg): _91.SignatureDescriptor_Data_Multi;
                    toProto(message: _91.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _91.SignatureDescriptor_Data_Multi): _91.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _163.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _92.SimulateRequest): Promise<_92.SimulateResponse>;
                getTx(request: _92.GetTxRequest): Promise<_92.GetTxResponse>;
                broadcastTx(request: _92.BroadcastTxRequest): Promise<_92.BroadcastTxResponse>;
                getTxsEvent(request: _92.GetTxsEventRequest): Promise<_92.GetTxsEventResponse>;
                getBlockWithTxs(request: _92.GetBlockWithTxsRequest): Promise<_92.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _93.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Tx;
                fromJSON(object: any): _93.Tx;
                toJSON(message: _93.Tx): unknown;
                fromPartial(object: Partial<_93.Tx>): _93.Tx;
                fromAmino(object: _93.TxAmino): _93.Tx;
                toAmino(message: _93.Tx): _93.TxAmino;
                fromAminoMsg(object: _93.TxAminoMsg): _93.Tx;
                toAminoMsg(message: _93.Tx): _93.TxAminoMsg;
                fromProtoMsg(message: _93.TxProtoMsg): _93.Tx;
                toProto(message: _93.Tx): Uint8Array;
                toProtoMsg(message: _93.Tx): _93.TxProtoMsg;
            };
            TxRaw: {
                encode(message: _93.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.TxRaw;
                fromJSON(object: any): _93.TxRaw;
                toJSON(message: _93.TxRaw): unknown;
                fromPartial(object: Partial<_93.TxRaw>): _93.TxRaw;
                fromAmino(object: _93.TxRawAmino): _93.TxRaw;
                toAmino(message: _93.TxRaw): _93.TxRawAmino;
                fromAminoMsg(object: _93.TxRawAminoMsg): _93.TxRaw;
                toAminoMsg(message: _93.TxRaw): _93.TxRawAminoMsg;
                fromProtoMsg(message: _93.TxRawProtoMsg): _93.TxRaw;
                toProto(message: _93.TxRaw): Uint8Array;
                toProtoMsg(message: _93.TxRaw): _93.TxRawProtoMsg;
            };
            SignDoc: {
                encode(message: _93.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.SignDoc;
                fromJSON(object: any): _93.SignDoc;
                toJSON(message: _93.SignDoc): unknown;
                fromPartial(object: Partial<_93.SignDoc>): _93.SignDoc;
                fromAmino(object: _93.SignDocAmino): _93.SignDoc;
                toAmino(message: _93.SignDoc): _93.SignDocAmino;
                fromAminoMsg(object: _93.SignDocAminoMsg): _93.SignDoc;
                toAminoMsg(message: _93.SignDoc): _93.SignDocAminoMsg;
                fromProtoMsg(message: _93.SignDocProtoMsg): _93.SignDoc;
                toProto(message: _93.SignDoc): Uint8Array;
                toProtoMsg(message: _93.SignDoc): _93.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                encode(message: _93.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.SignDocDirectAux;
                fromJSON(object: any): _93.SignDocDirectAux;
                toJSON(message: _93.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_93.SignDocDirectAux>): _93.SignDocDirectAux;
                fromAmino(object: _93.SignDocDirectAuxAmino): _93.SignDocDirectAux;
                toAmino(message: _93.SignDocDirectAux): _93.SignDocDirectAuxAmino;
                fromAminoMsg(object: _93.SignDocDirectAuxAminoMsg): _93.SignDocDirectAux;
                toAminoMsg(message: _93.SignDocDirectAux): _93.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _93.SignDocDirectAuxProtoMsg): _93.SignDocDirectAux;
                toProto(message: _93.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _93.SignDocDirectAux): _93.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                encode(message: _93.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.TxBody;
                fromJSON(object: any): _93.TxBody;
                toJSON(message: _93.TxBody): unknown;
                fromPartial(object: Partial<_93.TxBody>): _93.TxBody;
                fromAmino(object: _93.TxBodyAmino): _93.TxBody;
                toAmino(message: _93.TxBody): _93.TxBodyAmino;
                fromAminoMsg(object: _93.TxBodyAminoMsg): _93.TxBody;
                toAminoMsg(message: _93.TxBody): _93.TxBodyAminoMsg;
                fromProtoMsg(message: _93.TxBodyProtoMsg): _93.TxBody;
                toProto(message: _93.TxBody): Uint8Array;
                toProtoMsg(message: _93.TxBody): _93.TxBodyProtoMsg;
            };
            AuthInfo: {
                encode(message: _93.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.AuthInfo;
                fromJSON(object: any): _93.AuthInfo;
                toJSON(message: _93.AuthInfo): unknown;
                fromPartial(object: Partial<_93.AuthInfo>): _93.AuthInfo;
                fromAmino(object: _93.AuthInfoAmino): _93.AuthInfo;
                toAmino(message: _93.AuthInfo): _93.AuthInfoAmino;
                fromAminoMsg(object: _93.AuthInfoAminoMsg): _93.AuthInfo;
                toAminoMsg(message: _93.AuthInfo): _93.AuthInfoAminoMsg;
                fromProtoMsg(message: _93.AuthInfoProtoMsg): _93.AuthInfo;
                toProto(message: _93.AuthInfo): Uint8Array;
                toProtoMsg(message: _93.AuthInfo): _93.AuthInfoProtoMsg;
            };
            SignerInfo: {
                encode(message: _93.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.SignerInfo;
                fromJSON(object: any): _93.SignerInfo;
                toJSON(message: _93.SignerInfo): unknown;
                fromPartial(object: Partial<_93.SignerInfo>): _93.SignerInfo;
                fromAmino(object: _93.SignerInfoAmino): _93.SignerInfo;
                toAmino(message: _93.SignerInfo): _93.SignerInfoAmino;
                fromAminoMsg(object: _93.SignerInfoAminoMsg): _93.SignerInfo;
                toAminoMsg(message: _93.SignerInfo): _93.SignerInfoAminoMsg;
                fromProtoMsg(message: _93.SignerInfoProtoMsg): _93.SignerInfo;
                toProto(message: _93.SignerInfo): Uint8Array;
                toProtoMsg(message: _93.SignerInfo): _93.SignerInfoProtoMsg;
            };
            ModeInfo: {
                encode(message: _93.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ModeInfo;
                fromJSON(object: any): _93.ModeInfo;
                toJSON(message: _93.ModeInfo): unknown;
                fromPartial(object: Partial<_93.ModeInfo>): _93.ModeInfo;
                fromAmino(object: _93.ModeInfoAmino): _93.ModeInfo;
                toAmino(message: _93.ModeInfo): _93.ModeInfoAmino;
                fromAminoMsg(object: _93.ModeInfoAminoMsg): _93.ModeInfo;
                toAminoMsg(message: _93.ModeInfo): _93.ModeInfoAminoMsg;
                fromProtoMsg(message: _93.ModeInfoProtoMsg): _93.ModeInfo;
                toProto(message: _93.ModeInfo): Uint8Array;
                toProtoMsg(message: _93.ModeInfo): _93.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                encode(message: _93.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ModeInfo_Single;
                fromJSON(object: any): _93.ModeInfo_Single;
                toJSON(message: _93.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_93.ModeInfo_Single>): _93.ModeInfo_Single;
                fromAmino(object: _93.ModeInfo_SingleAmino): _93.ModeInfo_Single;
                toAmino(message: _93.ModeInfo_Single): _93.ModeInfo_SingleAmino;
                fromAminoMsg(object: _93.ModeInfo_SingleAminoMsg): _93.ModeInfo_Single;
                toAminoMsg(message: _93.ModeInfo_Single): _93.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _93.ModeInfo_SingleProtoMsg): _93.ModeInfo_Single;
                toProto(message: _93.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _93.ModeInfo_Single): _93.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                encode(message: _93.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ModeInfo_Multi;
                fromJSON(object: any): _93.ModeInfo_Multi;
                toJSON(message: _93.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_93.ModeInfo_Multi>): _93.ModeInfo_Multi;
                fromAmino(object: _93.ModeInfo_MultiAmino): _93.ModeInfo_Multi;
                toAmino(message: _93.ModeInfo_Multi): _93.ModeInfo_MultiAmino;
                fromAminoMsg(object: _93.ModeInfo_MultiAminoMsg): _93.ModeInfo_Multi;
                toAminoMsg(message: _93.ModeInfo_Multi): _93.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _93.ModeInfo_MultiProtoMsg): _93.ModeInfo_Multi;
                toProto(message: _93.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _93.ModeInfo_Multi): _93.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                encode(message: _93.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Fee;
                fromJSON(object: any): _93.Fee;
                toJSON(message: _93.Fee): unknown;
                fromPartial(object: Partial<_93.Fee>): _93.Fee;
                fromAmino(object: _93.FeeAmino): _93.Fee;
                toAmino(message: _93.Fee): _93.FeeAmino;
                fromAminoMsg(object: _93.FeeAminoMsg): _93.Fee;
                toAminoMsg(message: _93.Fee): _93.FeeAminoMsg;
                fromProtoMsg(message: _93.FeeProtoMsg): _93.Fee;
                toProto(message: _93.Fee): Uint8Array;
                toProtoMsg(message: _93.Fee): _93.FeeProtoMsg;
            };
            Tip: {
                encode(message: _93.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Tip;
                fromJSON(object: any): _93.Tip;
                toJSON(message: _93.Tip): unknown;
                fromPartial(object: Partial<_93.Tip>): _93.Tip;
                fromAmino(object: _93.TipAmino): _93.Tip;
                toAmino(message: _93.Tip): _93.TipAmino;
                fromAminoMsg(object: _93.TipAminoMsg): _93.Tip;
                toAminoMsg(message: _93.Tip): _93.TipAminoMsg;
                fromProtoMsg(message: _93.TipProtoMsg): _93.Tip;
                toProto(message: _93.Tip): Uint8Array;
                toProtoMsg(message: _93.Tip): _93.TipProtoMsg;
            };
            AuxSignerData: {
                encode(message: _93.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.AuxSignerData;
                fromJSON(object: any): _93.AuxSignerData;
                toJSON(message: _93.AuxSignerData): unknown;
                fromPartial(object: Partial<_93.AuxSignerData>): _93.AuxSignerData;
                fromAmino(object: _93.AuxSignerDataAmino): _93.AuxSignerData;
                toAmino(message: _93.AuxSignerData): _93.AuxSignerDataAmino;
                fromAminoMsg(object: _93.AuxSignerDataAminoMsg): _93.AuxSignerData;
                toAminoMsg(message: _93.AuxSignerData): _93.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _93.AuxSignerDataProtoMsg): _93.AuxSignerData;
                toProto(message: _93.AuxSignerData): Uint8Array;
                toProtoMsg(message: _93.AuxSignerData): _93.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _92.OrderBy;
            orderByToJSON(object: _92.OrderBy): string;
            broadcastModeFromJSON(object: any): _92.BroadcastMode;
            broadcastModeToJSON(object: _92.BroadcastMode): string;
            OrderBy: typeof _92.OrderBy;
            OrderBySDKType: typeof _92.OrderBy;
            OrderByAmino: typeof _92.OrderBy;
            BroadcastMode: typeof _92.BroadcastMode;
            BroadcastModeSDKType: typeof _92.BroadcastMode;
            BroadcastModeAmino: typeof _92.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _92.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetTxsEventRequest;
                fromJSON(object: any): _92.GetTxsEventRequest;
                toJSON(message: _92.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_92.GetTxsEventRequest>): _92.GetTxsEventRequest;
                fromAmino(object: _92.GetTxsEventRequestAmino): _92.GetTxsEventRequest;
                toAmino(message: _92.GetTxsEventRequest): _92.GetTxsEventRequestAmino;
                fromAminoMsg(object: _92.GetTxsEventRequestAminoMsg): _92.GetTxsEventRequest;
                toAminoMsg(message: _92.GetTxsEventRequest): _92.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _92.GetTxsEventRequestProtoMsg): _92.GetTxsEventRequest;
                toProto(message: _92.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _92.GetTxsEventRequest): _92.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                encode(message: _92.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetTxsEventResponse;
                fromJSON(object: any): _92.GetTxsEventResponse;
                toJSON(message: _92.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_92.GetTxsEventResponse>): _92.GetTxsEventResponse;
                fromAmino(object: _92.GetTxsEventResponseAmino): _92.GetTxsEventResponse;
                toAmino(message: _92.GetTxsEventResponse): _92.GetTxsEventResponseAmino;
                fromAminoMsg(object: _92.GetTxsEventResponseAminoMsg): _92.GetTxsEventResponse;
                toAminoMsg(message: _92.GetTxsEventResponse): _92.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _92.GetTxsEventResponseProtoMsg): _92.GetTxsEventResponse;
                toProto(message: _92.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _92.GetTxsEventResponse): _92.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                encode(message: _92.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.BroadcastTxRequest;
                fromJSON(object: any): _92.BroadcastTxRequest;
                toJSON(message: _92.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_92.BroadcastTxRequest>): _92.BroadcastTxRequest;
                fromAmino(object: _92.BroadcastTxRequestAmino): _92.BroadcastTxRequest;
                toAmino(message: _92.BroadcastTxRequest): _92.BroadcastTxRequestAmino;
                fromAminoMsg(object: _92.BroadcastTxRequestAminoMsg): _92.BroadcastTxRequest;
                toAminoMsg(message: _92.BroadcastTxRequest): _92.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _92.BroadcastTxRequestProtoMsg): _92.BroadcastTxRequest;
                toProto(message: _92.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _92.BroadcastTxRequest): _92.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                encode(message: _92.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.BroadcastTxResponse;
                fromJSON(object: any): _92.BroadcastTxResponse;
                toJSON(message: _92.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_92.BroadcastTxResponse>): _92.BroadcastTxResponse;
                fromAmino(object: _92.BroadcastTxResponseAmino): _92.BroadcastTxResponse;
                toAmino(message: _92.BroadcastTxResponse): _92.BroadcastTxResponseAmino;
                fromAminoMsg(object: _92.BroadcastTxResponseAminoMsg): _92.BroadcastTxResponse;
                toAminoMsg(message: _92.BroadcastTxResponse): _92.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _92.BroadcastTxResponseProtoMsg): _92.BroadcastTxResponse;
                toProto(message: _92.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _92.BroadcastTxResponse): _92.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                encode(message: _92.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SimulateRequest;
                fromJSON(object: any): _92.SimulateRequest;
                toJSON(message: _92.SimulateRequest): unknown;
                fromPartial(object: Partial<_92.SimulateRequest>): _92.SimulateRequest;
                fromAmino(object: _92.SimulateRequestAmino): _92.SimulateRequest;
                toAmino(message: _92.SimulateRequest): _92.SimulateRequestAmino;
                fromAminoMsg(object: _92.SimulateRequestAminoMsg): _92.SimulateRequest;
                toAminoMsg(message: _92.SimulateRequest): _92.SimulateRequestAminoMsg;
                fromProtoMsg(message: _92.SimulateRequestProtoMsg): _92.SimulateRequest;
                toProto(message: _92.SimulateRequest): Uint8Array;
                toProtoMsg(message: _92.SimulateRequest): _92.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                encode(message: _92.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SimulateResponse;
                fromJSON(object: any): _92.SimulateResponse;
                toJSON(message: _92.SimulateResponse): unknown;
                fromPartial(object: Partial<_92.SimulateResponse>): _92.SimulateResponse;
                fromAmino(object: _92.SimulateResponseAmino): _92.SimulateResponse;
                toAmino(message: _92.SimulateResponse): _92.SimulateResponseAmino;
                fromAminoMsg(object: _92.SimulateResponseAminoMsg): _92.SimulateResponse;
                toAminoMsg(message: _92.SimulateResponse): _92.SimulateResponseAminoMsg;
                fromProtoMsg(message: _92.SimulateResponseProtoMsg): _92.SimulateResponse;
                toProto(message: _92.SimulateResponse): Uint8Array;
                toProtoMsg(message: _92.SimulateResponse): _92.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                encode(message: _92.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetTxRequest;
                fromJSON(object: any): _92.GetTxRequest;
                toJSON(message: _92.GetTxRequest): unknown;
                fromPartial(object: Partial<_92.GetTxRequest>): _92.GetTxRequest;
                fromAmino(object: _92.GetTxRequestAmino): _92.GetTxRequest;
                toAmino(message: _92.GetTxRequest): _92.GetTxRequestAmino;
                fromAminoMsg(object: _92.GetTxRequestAminoMsg): _92.GetTxRequest;
                toAminoMsg(message: _92.GetTxRequest): _92.GetTxRequestAminoMsg;
                fromProtoMsg(message: _92.GetTxRequestProtoMsg): _92.GetTxRequest;
                toProto(message: _92.GetTxRequest): Uint8Array;
                toProtoMsg(message: _92.GetTxRequest): _92.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                encode(message: _92.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetTxResponse;
                fromJSON(object: any): _92.GetTxResponse;
                toJSON(message: _92.GetTxResponse): unknown;
                fromPartial(object: Partial<_92.GetTxResponse>): _92.GetTxResponse;
                fromAmino(object: _92.GetTxResponseAmino): _92.GetTxResponse;
                toAmino(message: _92.GetTxResponse): _92.GetTxResponseAmino;
                fromAminoMsg(object: _92.GetTxResponseAminoMsg): _92.GetTxResponse;
                toAminoMsg(message: _92.GetTxResponse): _92.GetTxResponseAminoMsg;
                fromProtoMsg(message: _92.GetTxResponseProtoMsg): _92.GetTxResponse;
                toProto(message: _92.GetTxResponse): Uint8Array;
                toProtoMsg(message: _92.GetTxResponse): _92.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                encode(message: _92.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetBlockWithTxsRequest;
                fromJSON(object: any): _92.GetBlockWithTxsRequest;
                toJSON(message: _92.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_92.GetBlockWithTxsRequest>): _92.GetBlockWithTxsRequest;
                fromAmino(object: _92.GetBlockWithTxsRequestAmino): _92.GetBlockWithTxsRequest;
                toAmino(message: _92.GetBlockWithTxsRequest): _92.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _92.GetBlockWithTxsRequestAminoMsg): _92.GetBlockWithTxsRequest;
                toAminoMsg(message: _92.GetBlockWithTxsRequest): _92.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _92.GetBlockWithTxsRequestProtoMsg): _92.GetBlockWithTxsRequest;
                toProto(message: _92.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _92.GetBlockWithTxsRequest): _92.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                encode(message: _92.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetBlockWithTxsResponse;
                fromJSON(object: any): _92.GetBlockWithTxsResponse;
                toJSON(message: _92.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_92.GetBlockWithTxsResponse>): _92.GetBlockWithTxsResponse;
                fromAmino(object: _92.GetBlockWithTxsResponseAmino): _92.GetBlockWithTxsResponse;
                toAmino(message: _92.GetBlockWithTxsResponse): _92.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _92.GetBlockWithTxsResponseAminoMsg): _92.GetBlockWithTxsResponse;
                toAminoMsg(message: _92.GetBlockWithTxsResponse): _92.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _92.GetBlockWithTxsResponseProtoMsg): _92.GetBlockWithTxsResponse;
                toProto(message: _92.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _92.GetBlockWithTxsResponse): _92.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _177.MsgClientImpl;
            QueryClientImpl: typeof _164.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _94.QueryCurrentPlanRequest): Promise<_94.QueryCurrentPlanResponse>;
                appliedPlan(request: _94.QueryAppliedPlanRequest): Promise<_94.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _94.QueryUpgradedConsensusStateRequest): Promise<_94.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _94.QueryModuleVersionsRequest): Promise<_94.QueryModuleVersionsResponse>;
                authority(request?: _94.QueryAuthorityRequest): Promise<_94.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _95.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _95.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _95.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _95.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _95.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _95.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _95.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _95.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _95.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _95.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _95.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _95.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _95.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _95.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _95.MsgSoftwareUpgrade) => _95.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _95.MsgSoftwareUpgradeAmino) => _95.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _95.MsgCancelUpgrade) => _95.MsgCancelUpgradeAmino;
                    fromAmino: (object: _95.MsgCancelUpgradeAmino) => _95.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _96.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Plan;
                fromJSON(object: any): _96.Plan;
                toJSON(message: _96.Plan): unknown;
                fromPartial(object: Partial<_96.Plan>): _96.Plan;
                fromAmino(object: _96.PlanAmino): _96.Plan;
                toAmino(message: _96.Plan): _96.PlanAmino;
                fromAminoMsg(object: _96.PlanAminoMsg): _96.Plan;
                toAminoMsg(message: _96.Plan): _96.PlanAminoMsg;
                fromProtoMsg(message: _96.PlanProtoMsg): _96.Plan;
                toProto(message: _96.Plan): Uint8Array;
                toProtoMsg(message: _96.Plan): _96.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                encode(message: _96.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.SoftwareUpgradeProposal;
                fromJSON(object: any): _96.SoftwareUpgradeProposal;
                toJSON(message: _96.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_96.SoftwareUpgradeProposal>): _96.SoftwareUpgradeProposal;
                fromAmino(object: _96.SoftwareUpgradeProposalAmino): _96.SoftwareUpgradeProposal;
                toAmino(message: _96.SoftwareUpgradeProposal): _96.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _96.SoftwareUpgradeProposalAminoMsg): _96.SoftwareUpgradeProposal;
                toAminoMsg(message: _96.SoftwareUpgradeProposal): _96.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _96.SoftwareUpgradeProposalProtoMsg): _96.SoftwareUpgradeProposal;
                toProto(message: _96.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _96.SoftwareUpgradeProposal): _96.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _96.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _96.CancelSoftwareUpgradeProposal;
                toJSON(message: _96.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_96.CancelSoftwareUpgradeProposal>): _96.CancelSoftwareUpgradeProposal;
                fromAmino(object: _96.CancelSoftwareUpgradeProposalAmino): _96.CancelSoftwareUpgradeProposal;
                toAmino(message: _96.CancelSoftwareUpgradeProposal): _96.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _96.CancelSoftwareUpgradeProposalAminoMsg): _96.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _96.CancelSoftwareUpgradeProposal): _96.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _96.CancelSoftwareUpgradeProposalProtoMsg): _96.CancelSoftwareUpgradeProposal;
                toProto(message: _96.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _96.CancelSoftwareUpgradeProposal): _96.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                encode(message: _96.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ModuleVersion;
                fromJSON(object: any): _96.ModuleVersion;
                toJSON(message: _96.ModuleVersion): unknown;
                fromPartial(object: Partial<_96.ModuleVersion>): _96.ModuleVersion;
                fromAmino(object: _96.ModuleVersionAmino): _96.ModuleVersion;
                toAmino(message: _96.ModuleVersion): _96.ModuleVersionAmino;
                fromAminoMsg(object: _96.ModuleVersionAminoMsg): _96.ModuleVersion;
                toAminoMsg(message: _96.ModuleVersion): _96.ModuleVersionAminoMsg;
                fromProtoMsg(message: _96.ModuleVersionProtoMsg): _96.ModuleVersion;
                toProto(message: _96.ModuleVersion): Uint8Array;
                toProtoMsg(message: _96.ModuleVersion): _96.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                encode(message: _95.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgSoftwareUpgrade;
                fromJSON(object: any): _95.MsgSoftwareUpgrade;
                toJSON(message: _95.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_95.MsgSoftwareUpgrade>): _95.MsgSoftwareUpgrade;
                fromAmino(object: _95.MsgSoftwareUpgradeAmino): _95.MsgSoftwareUpgrade;
                toAmino(message: _95.MsgSoftwareUpgrade): _95.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _95.MsgSoftwareUpgradeAminoMsg): _95.MsgSoftwareUpgrade;
                toAminoMsg(message: _95.MsgSoftwareUpgrade): _95.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _95.MsgSoftwareUpgradeProtoMsg): _95.MsgSoftwareUpgrade;
                toProto(message: _95.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _95.MsgSoftwareUpgrade): _95.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _95.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _95.MsgSoftwareUpgradeResponse;
                toJSON(_: _95.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_95.MsgSoftwareUpgradeResponse>): _95.MsgSoftwareUpgradeResponse;
                fromAmino(_: _95.MsgSoftwareUpgradeResponseAmino): _95.MsgSoftwareUpgradeResponse;
                toAmino(_: _95.MsgSoftwareUpgradeResponse): _95.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _95.MsgSoftwareUpgradeResponseAminoMsg): _95.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _95.MsgSoftwareUpgradeResponse): _95.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _95.MsgSoftwareUpgradeResponseProtoMsg): _95.MsgSoftwareUpgradeResponse;
                toProto(message: _95.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _95.MsgSoftwareUpgradeResponse): _95.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                encode(message: _95.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgCancelUpgrade;
                fromJSON(object: any): _95.MsgCancelUpgrade;
                toJSON(message: _95.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_95.MsgCancelUpgrade>): _95.MsgCancelUpgrade;
                fromAmino(object: _95.MsgCancelUpgradeAmino): _95.MsgCancelUpgrade;
                toAmino(message: _95.MsgCancelUpgrade): _95.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _95.MsgCancelUpgradeAminoMsg): _95.MsgCancelUpgrade;
                toAminoMsg(message: _95.MsgCancelUpgrade): _95.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _95.MsgCancelUpgradeProtoMsg): _95.MsgCancelUpgrade;
                toProto(message: _95.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _95.MsgCancelUpgrade): _95.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _95.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgCancelUpgradeResponse;
                fromJSON(_: any): _95.MsgCancelUpgradeResponse;
                toJSON(_: _95.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_95.MsgCancelUpgradeResponse>): _95.MsgCancelUpgradeResponse;
                fromAmino(_: _95.MsgCancelUpgradeResponseAmino): _95.MsgCancelUpgradeResponse;
                toAmino(_: _95.MsgCancelUpgradeResponse): _95.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _95.MsgCancelUpgradeResponseAminoMsg): _95.MsgCancelUpgradeResponse;
                toAminoMsg(message: _95.MsgCancelUpgradeResponse): _95.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _95.MsgCancelUpgradeResponseProtoMsg): _95.MsgCancelUpgradeResponse;
                toProto(message: _95.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _95.MsgCancelUpgradeResponse): _95.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                encode(_: _94.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryCurrentPlanRequest;
                fromJSON(_: any): _94.QueryCurrentPlanRequest;
                toJSON(_: _94.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_94.QueryCurrentPlanRequest>): _94.QueryCurrentPlanRequest;
                fromAmino(_: _94.QueryCurrentPlanRequestAmino): _94.QueryCurrentPlanRequest;
                toAmino(_: _94.QueryCurrentPlanRequest): _94.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _94.QueryCurrentPlanRequestAminoMsg): _94.QueryCurrentPlanRequest;
                toAminoMsg(message: _94.QueryCurrentPlanRequest): _94.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _94.QueryCurrentPlanRequestProtoMsg): _94.QueryCurrentPlanRequest;
                toProto(message: _94.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _94.QueryCurrentPlanRequest): _94.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                encode(message: _94.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryCurrentPlanResponse;
                fromJSON(object: any): _94.QueryCurrentPlanResponse;
                toJSON(message: _94.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_94.QueryCurrentPlanResponse>): _94.QueryCurrentPlanResponse;
                fromAmino(object: _94.QueryCurrentPlanResponseAmino): _94.QueryCurrentPlanResponse;
                toAmino(message: _94.QueryCurrentPlanResponse): _94.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _94.QueryCurrentPlanResponseAminoMsg): _94.QueryCurrentPlanResponse;
                toAminoMsg(message: _94.QueryCurrentPlanResponse): _94.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _94.QueryCurrentPlanResponseProtoMsg): _94.QueryCurrentPlanResponse;
                toProto(message: _94.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _94.QueryCurrentPlanResponse): _94.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                encode(message: _94.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryAppliedPlanRequest;
                fromJSON(object: any): _94.QueryAppliedPlanRequest;
                toJSON(message: _94.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_94.QueryAppliedPlanRequest>): _94.QueryAppliedPlanRequest;
                fromAmino(object: _94.QueryAppliedPlanRequestAmino): _94.QueryAppliedPlanRequest;
                toAmino(message: _94.QueryAppliedPlanRequest): _94.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _94.QueryAppliedPlanRequestAminoMsg): _94.QueryAppliedPlanRequest;
                toAminoMsg(message: _94.QueryAppliedPlanRequest): _94.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _94.QueryAppliedPlanRequestProtoMsg): _94.QueryAppliedPlanRequest;
                toProto(message: _94.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _94.QueryAppliedPlanRequest): _94.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                encode(message: _94.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryAppliedPlanResponse;
                fromJSON(object: any): _94.QueryAppliedPlanResponse;
                toJSON(message: _94.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_94.QueryAppliedPlanResponse>): _94.QueryAppliedPlanResponse;
                fromAmino(object: _94.QueryAppliedPlanResponseAmino): _94.QueryAppliedPlanResponse;
                toAmino(message: _94.QueryAppliedPlanResponse): _94.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _94.QueryAppliedPlanResponseAminoMsg): _94.QueryAppliedPlanResponse;
                toAminoMsg(message: _94.QueryAppliedPlanResponse): _94.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _94.QueryAppliedPlanResponseProtoMsg): _94.QueryAppliedPlanResponse;
                toProto(message: _94.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _94.QueryAppliedPlanResponse): _94.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _94.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _94.QueryUpgradedConsensusStateRequest;
                toJSON(message: _94.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_94.QueryUpgradedConsensusStateRequest>): _94.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _94.QueryUpgradedConsensusStateRequestAmino): _94.QueryUpgradedConsensusStateRequest;
                toAmino(message: _94.QueryUpgradedConsensusStateRequest): _94.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _94.QueryUpgradedConsensusStateRequestAminoMsg): _94.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _94.QueryUpgradedConsensusStateRequest): _94.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _94.QueryUpgradedConsensusStateRequestProtoMsg): _94.QueryUpgradedConsensusStateRequest;
                toProto(message: _94.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _94.QueryUpgradedConsensusStateRequest): _94.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _94.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _94.QueryUpgradedConsensusStateResponse;
                toJSON(message: _94.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_94.QueryUpgradedConsensusStateResponse>): _94.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _94.QueryUpgradedConsensusStateResponseAmino): _94.QueryUpgradedConsensusStateResponse;
                toAmino(message: _94.QueryUpgradedConsensusStateResponse): _94.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _94.QueryUpgradedConsensusStateResponseAminoMsg): _94.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _94.QueryUpgradedConsensusStateResponse): _94.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _94.QueryUpgradedConsensusStateResponseProtoMsg): _94.QueryUpgradedConsensusStateResponse;
                toProto(message: _94.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _94.QueryUpgradedConsensusStateResponse): _94.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                encode(message: _94.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryModuleVersionsRequest;
                fromJSON(object: any): _94.QueryModuleVersionsRequest;
                toJSON(message: _94.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_94.QueryModuleVersionsRequest>): _94.QueryModuleVersionsRequest;
                fromAmino(object: _94.QueryModuleVersionsRequestAmino): _94.QueryModuleVersionsRequest;
                toAmino(message: _94.QueryModuleVersionsRequest): _94.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _94.QueryModuleVersionsRequestAminoMsg): _94.QueryModuleVersionsRequest;
                toAminoMsg(message: _94.QueryModuleVersionsRequest): _94.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _94.QueryModuleVersionsRequestProtoMsg): _94.QueryModuleVersionsRequest;
                toProto(message: _94.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _94.QueryModuleVersionsRequest): _94.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                encode(message: _94.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryModuleVersionsResponse;
                fromJSON(object: any): _94.QueryModuleVersionsResponse;
                toJSON(message: _94.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_94.QueryModuleVersionsResponse>): _94.QueryModuleVersionsResponse;
                fromAmino(object: _94.QueryModuleVersionsResponseAmino): _94.QueryModuleVersionsResponse;
                toAmino(message: _94.QueryModuleVersionsResponse): _94.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _94.QueryModuleVersionsResponseAminoMsg): _94.QueryModuleVersionsResponse;
                toAminoMsg(message: _94.QueryModuleVersionsResponse): _94.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _94.QueryModuleVersionsResponseProtoMsg): _94.QueryModuleVersionsResponse;
                toProto(message: _94.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _94.QueryModuleVersionsResponse): _94.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                encode(_: _94.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryAuthorityRequest;
                fromJSON(_: any): _94.QueryAuthorityRequest;
                toJSON(_: _94.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_94.QueryAuthorityRequest>): _94.QueryAuthorityRequest;
                fromAmino(_: _94.QueryAuthorityRequestAmino): _94.QueryAuthorityRequest;
                toAmino(_: _94.QueryAuthorityRequest): _94.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _94.QueryAuthorityRequestAminoMsg): _94.QueryAuthorityRequest;
                toAminoMsg(message: _94.QueryAuthorityRequest): _94.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _94.QueryAuthorityRequestProtoMsg): _94.QueryAuthorityRequest;
                toProto(message: _94.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _94.QueryAuthorityRequest): _94.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                encode(message: _94.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryAuthorityResponse;
                fromJSON(object: any): _94.QueryAuthorityResponse;
                toJSON(message: _94.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_94.QueryAuthorityResponse>): _94.QueryAuthorityResponse;
                fromAmino(object: _94.QueryAuthorityResponseAmino): _94.QueryAuthorityResponse;
                toAmino(message: _94.QueryAuthorityResponse): _94.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _94.QueryAuthorityResponseAminoMsg): _94.QueryAuthorityResponse;
                toAminoMsg(message: _94.QueryAuthorityResponse): _94.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _94.QueryAuthorityResponseProtoMsg): _94.QueryAuthorityResponse;
                toProto(message: _94.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _94.QueryAuthorityResponse): _94.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _178.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _97.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _97.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _97.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _97.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _97.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _97.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _97.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _97.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _97.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _97.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _97.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _97.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _97.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _97.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _97.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _97.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _97.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _97.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _97.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _97.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _97.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _97.MsgCreateVestingAccount) => _97.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _97.MsgCreateVestingAccountAmino) => _97.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _97.MsgCreatePermanentLockedAccount) => _97.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _97.MsgCreatePermanentLockedAccountAmino) => _97.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _97.MsgCreatePeriodicVestingAccount) => _97.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _97.MsgCreatePeriodicVestingAccountAmino) => _97.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _98.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.BaseVestingAccount;
                fromJSON(object: any): _98.BaseVestingAccount;
                toJSON(message: _98.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_98.BaseVestingAccount>): _98.BaseVestingAccount;
                fromAmino(object: _98.BaseVestingAccountAmino): _98.BaseVestingAccount;
                toAmino(message: _98.BaseVestingAccount): _98.BaseVestingAccountAmino;
                fromAminoMsg(object: _98.BaseVestingAccountAminoMsg): _98.BaseVestingAccount;
                toAminoMsg(message: _98.BaseVestingAccount): _98.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _98.BaseVestingAccountProtoMsg): _98.BaseVestingAccount;
                toProto(message: _98.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _98.BaseVestingAccount): _98.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                encode(message: _98.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ContinuousVestingAccount;
                fromJSON(object: any): _98.ContinuousVestingAccount;
                toJSON(message: _98.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_98.ContinuousVestingAccount>): _98.ContinuousVestingAccount;
                fromAmino(object: _98.ContinuousVestingAccountAmino): _98.ContinuousVestingAccount;
                toAmino(message: _98.ContinuousVestingAccount): _98.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _98.ContinuousVestingAccountAminoMsg): _98.ContinuousVestingAccount;
                toAminoMsg(message: _98.ContinuousVestingAccount): _98.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _98.ContinuousVestingAccountProtoMsg): _98.ContinuousVestingAccount;
                toProto(message: _98.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _98.ContinuousVestingAccount): _98.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                encode(message: _98.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.DelayedVestingAccount;
                fromJSON(object: any): _98.DelayedVestingAccount;
                toJSON(message: _98.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_98.DelayedVestingAccount>): _98.DelayedVestingAccount;
                fromAmino(object: _98.DelayedVestingAccountAmino): _98.DelayedVestingAccount;
                toAmino(message: _98.DelayedVestingAccount): _98.DelayedVestingAccountAmino;
                fromAminoMsg(object: _98.DelayedVestingAccountAminoMsg): _98.DelayedVestingAccount;
                toAminoMsg(message: _98.DelayedVestingAccount): _98.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _98.DelayedVestingAccountProtoMsg): _98.DelayedVestingAccount;
                toProto(message: _98.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _98.DelayedVestingAccount): _98.DelayedVestingAccountProtoMsg;
            };
            Period: {
                encode(message: _98.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Period;
                fromJSON(object: any): _98.Period;
                toJSON(message: _98.Period): unknown;
                fromPartial(object: Partial<_98.Period>): _98.Period;
                fromAmino(object: _98.PeriodAmino): _98.Period;
                toAmino(message: _98.Period): _98.PeriodAmino;
                fromAminoMsg(object: _98.PeriodAminoMsg): _98.Period;
                toAminoMsg(message: _98.Period): _98.PeriodAminoMsg;
                fromProtoMsg(message: _98.PeriodProtoMsg): _98.Period;
                toProto(message: _98.Period): Uint8Array;
                toProtoMsg(message: _98.Period): _98.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                encode(message: _98.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.PeriodicVestingAccount;
                fromJSON(object: any): _98.PeriodicVestingAccount;
                toJSON(message: _98.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_98.PeriodicVestingAccount>): _98.PeriodicVestingAccount;
                fromAmino(object: _98.PeriodicVestingAccountAmino): _98.PeriodicVestingAccount;
                toAmino(message: _98.PeriodicVestingAccount): _98.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _98.PeriodicVestingAccountAminoMsg): _98.PeriodicVestingAccount;
                toAminoMsg(message: _98.PeriodicVestingAccount): _98.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _98.PeriodicVestingAccountProtoMsg): _98.PeriodicVestingAccount;
                toProto(message: _98.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _98.PeriodicVestingAccount): _98.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                encode(message: _98.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.PermanentLockedAccount;
                fromJSON(object: any): _98.PermanentLockedAccount;
                toJSON(message: _98.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_98.PermanentLockedAccount>): _98.PermanentLockedAccount;
                fromAmino(object: _98.PermanentLockedAccountAmino): _98.PermanentLockedAccount;
                toAmino(message: _98.PermanentLockedAccount): _98.PermanentLockedAccountAmino;
                fromAminoMsg(object: _98.PermanentLockedAccountAminoMsg): _98.PermanentLockedAccount;
                toAminoMsg(message: _98.PermanentLockedAccount): _98.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _98.PermanentLockedAccountProtoMsg): _98.PermanentLockedAccount;
                toProto(message: _98.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _98.PermanentLockedAccount): _98.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                encode(message: _97.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgCreateVestingAccount;
                fromJSON(object: any): _97.MsgCreateVestingAccount;
                toJSON(message: _97.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_97.MsgCreateVestingAccount>): _97.MsgCreateVestingAccount;
                fromAmino(object: _97.MsgCreateVestingAccountAmino): _97.MsgCreateVestingAccount;
                toAmino(message: _97.MsgCreateVestingAccount): _97.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _97.MsgCreateVestingAccountAminoMsg): _97.MsgCreateVestingAccount;
                toAminoMsg(message: _97.MsgCreateVestingAccount): _97.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _97.MsgCreateVestingAccountProtoMsg): _97.MsgCreateVestingAccount;
                toProto(message: _97.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _97.MsgCreateVestingAccount): _97.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _97.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _97.MsgCreateVestingAccountResponse;
                toJSON(_: _97.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_97.MsgCreateVestingAccountResponse>): _97.MsgCreateVestingAccountResponse;
                fromAmino(_: _97.MsgCreateVestingAccountResponseAmino): _97.MsgCreateVestingAccountResponse;
                toAmino(_: _97.MsgCreateVestingAccountResponse): _97.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _97.MsgCreateVestingAccountResponseAminoMsg): _97.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _97.MsgCreateVestingAccountResponse): _97.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _97.MsgCreateVestingAccountResponseProtoMsg): _97.MsgCreateVestingAccountResponse;
                toProto(message: _97.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _97.MsgCreateVestingAccountResponse): _97.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _97.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _97.MsgCreatePermanentLockedAccount;
                toJSON(message: _97.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_97.MsgCreatePermanentLockedAccount>): _97.MsgCreatePermanentLockedAccount;
                fromAmino(object: _97.MsgCreatePermanentLockedAccountAmino): _97.MsgCreatePermanentLockedAccount;
                toAmino(message: _97.MsgCreatePermanentLockedAccount): _97.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _97.MsgCreatePermanentLockedAccountAminoMsg): _97.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _97.MsgCreatePermanentLockedAccount): _97.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _97.MsgCreatePermanentLockedAccountProtoMsg): _97.MsgCreatePermanentLockedAccount;
                toProto(message: _97.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _97.MsgCreatePermanentLockedAccount): _97.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _97.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _97.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _97.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_97.MsgCreatePermanentLockedAccountResponse>): _97.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _97.MsgCreatePermanentLockedAccountResponseAmino): _97.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _97.MsgCreatePermanentLockedAccountResponse): _97.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _97.MsgCreatePermanentLockedAccountResponseAminoMsg): _97.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _97.MsgCreatePermanentLockedAccountResponse): _97.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _97.MsgCreatePermanentLockedAccountResponseProtoMsg): _97.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _97.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _97.MsgCreatePermanentLockedAccountResponse): _97.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _97.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _97.MsgCreatePeriodicVestingAccount;
                toJSON(message: _97.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_97.MsgCreatePeriodicVestingAccount>): _97.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _97.MsgCreatePeriodicVestingAccountAmino): _97.MsgCreatePeriodicVestingAccount;
                toAmino(message: _97.MsgCreatePeriodicVestingAccount): _97.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _97.MsgCreatePeriodicVestingAccountAminoMsg): _97.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _97.MsgCreatePeriodicVestingAccount): _97.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _97.MsgCreatePeriodicVestingAccountProtoMsg): _97.MsgCreatePeriodicVestingAccount;
                toProto(message: _97.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _97.MsgCreatePeriodicVestingAccount): _97.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _97.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _97.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _97.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_97.MsgCreatePeriodicVestingAccountResponse>): _97.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _97.MsgCreatePeriodicVestingAccountResponseAmino): _97.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _97.MsgCreatePeriodicVestingAccountResponse): _97.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _97.MsgCreatePeriodicVestingAccountResponseAminoMsg): _97.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _97.MsgCreatePeriodicVestingAccountResponse): _97.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _97.MsgCreatePeriodicVestingAccountResponseProtoMsg): _97.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _97.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _97.MsgCreatePeriodicVestingAccountResponse): _97.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _165.MsgClientImpl;
                };
                bank: {
                    v1beta1: _166.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _167.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _168.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _169.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _170.MsgClientImpl;
                };
                gov: {
                    v1: _171.MsgClientImpl;
                    v1beta1: _172.MsgClientImpl;
                };
                group: {
                    v1: _173.MsgClientImpl;
                };
                nft: {
                    v1beta1: _174.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _175.MsgClientImpl;
                };
                staking: {
                    v1beta1: _176.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _177.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _178.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _6.QueryConfigRequest): Promise<_6.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                        account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                        accountAddressByID(request: _9.QueryAccountAddressByIDRequest): Promise<_9.QueryAccountAddressByIDResponse>;
                        params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                        moduleAccounts(request?: _9.QueryModuleAccountsRequest): Promise<_9.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _9.Bech32PrefixRequest): Promise<_9.Bech32PrefixResponse>;
                        addressBytesToString(request: _9.AddressBytesToStringRequest): Promise<_9.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _9.AddressStringToBytesRequest): Promise<_9.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _13.QueryGrantsRequest): Promise<_13.QueryGrantsResponse>;
                        granterGrants(request: _13.QueryGranterGrantsRequest): Promise<_13.QueryGranterGrantsResponse>;
                        granteeGrants(request: _13.QueryGranteeGrantsRequest): Promise<_13.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _18.QueryBalanceRequest): Promise<_18.QueryBalanceResponse>;
                        allBalances(request: _18.QueryAllBalancesRequest): Promise<_18.QueryAllBalancesResponse>;
                        spendableBalances(request: _18.QuerySpendableBalancesRequest): Promise<_18.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _18.QueryTotalSupplyRequest): Promise<_18.QueryTotalSupplyResponse>;
                        supplyOf(request: _18.QuerySupplyOfRequest): Promise<_18.QuerySupplyOfResponse>;
                        params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                        denomMetadata(request: _18.QueryDenomMetadataRequest): Promise<_18.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _18.QueryDenomsMetadataRequest): Promise<_18.QueryDenomsMetadataResponse>;
                        denomOwners(request: _18.QueryDenomOwnersRequest): Promise<_18.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _22.ConfigRequest): Promise<_22.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _29.GetNodeInfoRequest): Promise<_29.GetNodeInfoResponse>;
                            getSyncing(request?: _29.GetSyncingRequest): Promise<_29.GetSyncingResponse>;
                            getLatestBlock(request?: _29.GetLatestBlockRequest): Promise<_29.GetLatestBlockResponse>;
                            getBlockByHeight(request: _29.GetBlockByHeightRequest): Promise<_29.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _29.GetLatestValidatorSetRequest): Promise<_29.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _29.GetValidatorSetByHeightRequest): Promise<_29.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _29.ABCIQueryRequest): Promise<_29.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _44.QueryValidatorOutstandingRewardsRequest): Promise<_44.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _44.QueryValidatorCommissionRequest): Promise<_44.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _44.QueryValidatorSlashesRequest): Promise<_44.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _44.QueryDelegationRewardsRequest): Promise<_44.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _44.QueryDelegationTotalRewardsRequest): Promise<_44.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _44.QueryDelegatorValidatorsRequest): Promise<_44.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _44.QueryDelegatorWithdrawAddressRequest): Promise<_44.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _44.QueryCommunityPoolRequest): Promise<_44.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _48.QueryEvidenceRequest): Promise<_48.QueryEvidenceResponse>;
                        allEvidence(request?: _48.QueryAllEvidenceRequest): Promise<_48.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _52.QueryAllowanceRequest): Promise<_52.QueryAllowanceResponse>;
                        allowances(request: _52.QueryAllowancesRequest): Promise<_52.QueryAllowancesResponse>;
                        allowancesByGranter(request: _52.QueryAllowancesByGranterRequest): Promise<_52.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _57.QueryProposalRequest): Promise<_57.QueryProposalResponse>;
                        proposals(request: _57.QueryProposalsRequest): Promise<_57.QueryProposalsResponse>;
                        vote(request: _57.QueryVoteRequest): Promise<_57.QueryVoteResponse>;
                        votes(request: _57.QueryVotesRequest): Promise<_57.QueryVotesResponse>;
                        params(request: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        deposit(request: _57.QueryDepositRequest): Promise<_57.QueryDepositResponse>;
                        deposits(request: _57.QueryDepositsRequest): Promise<_57.QueryDepositsResponse>;
                        tallyResult(request: _57.QueryTallyResultRequest): Promise<_57.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                        proposals(request: _61.QueryProposalsRequest): Promise<_61.QueryProposalsResponse>;
                        vote(request: _61.QueryVoteRequest): Promise<_61.QueryVoteResponse>;
                        votes(request: _61.QueryVotesRequest): Promise<_61.QueryVotesResponse>;
                        params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        deposit(request: _61.QueryDepositRequest): Promise<_61.QueryDepositResponse>;
                        deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
                        tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _65.QueryGroupInfoRequest): Promise<_65.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _65.QueryGroupPolicyInfoRequest): Promise<_65.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _65.QueryGroupMembersRequest): Promise<_65.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _65.QueryGroupsByAdminRequest): Promise<_65.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _65.QueryGroupPoliciesByGroupRequest): Promise<_65.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _65.QueryGroupPoliciesByAdminRequest): Promise<_65.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _65.QueryProposalRequest): Promise<_65.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _65.QueryProposalsByGroupPolicyRequest): Promise<_65.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _65.QueryVoteByProposalVoterRequest): Promise<_65.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _65.QueryVotesByProposalRequest): Promise<_65.QueryVotesByProposalResponse>;
                        votesByVoter(request: _65.QueryVotesByVoterRequest): Promise<_65.QueryVotesByVoterResponse>;
                        groupsByMember(request: _65.QueryGroupsByMemberRequest): Promise<_65.QueryGroupsByMemberResponse>;
                        tallyResult(request: _65.QueryTallyResultRequest): Promise<_65.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                        inflation(request?: _70.QueryInflationRequest): Promise<_70.QueryInflationResponse>;
                        annualProvisions(request?: _70.QueryAnnualProvisionsRequest): Promise<_70.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _75.QueryBalanceRequest): Promise<_75.QueryBalanceResponse>;
                        owner(request: _75.QueryOwnerRequest): Promise<_75.QueryOwnerResponse>;
                        supply(request: _75.QuerySupplyRequest): Promise<_75.QuerySupplyResponse>;
                        nFTs(request: _75.QueryNFTsRequest): Promise<_75.QueryNFTsResponse>;
                        nFT(request: _75.QueryNFTRequest): Promise<_75.QueryNFTResponse>;
                        class(request: _75.QueryClassRequest): Promise<_75.QueryClassResponse>;
                        classes(request?: _75.QueryClassesRequest): Promise<_75.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                        subspaces(request?: _81.QuerySubspacesRequest): Promise<_81.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                        signingInfo(request: _83.QuerySigningInfoRequest): Promise<_83.QuerySigningInfoResponse>;
                        signingInfos(request?: _83.QuerySigningInfosRequest): Promise<_83.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _88.QueryValidatorsRequest): Promise<_88.QueryValidatorsResponse>;
                        validator(request: _88.QueryValidatorRequest): Promise<_88.QueryValidatorResponse>;
                        validatorDelegations(request: _88.QueryValidatorDelegationsRequest): Promise<_88.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _88.QueryValidatorUnbondingDelegationsRequest): Promise<_88.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _88.QueryDelegationRequest): Promise<_88.QueryDelegationResponse>;
                        unbondingDelegation(request: _88.QueryUnbondingDelegationRequest): Promise<_88.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _88.QueryDelegatorDelegationsRequest): Promise<_88.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _88.QueryDelegatorUnbondingDelegationsRequest): Promise<_88.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _88.QueryRedelegationsRequest): Promise<_88.QueryRedelegationsResponse>;
                        delegatorValidators(request: _88.QueryDelegatorValidatorsRequest): Promise<_88.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _88.QueryDelegatorValidatorRequest): Promise<_88.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _88.QueryHistoricalInfoRequest): Promise<_88.QueryHistoricalInfoResponse>;
                        pool(request?: _88.QueryPoolRequest): Promise<_88.QueryPoolResponse>;
                        params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _92.SimulateRequest): Promise<_92.SimulateResponse>;
                        getTx(request: _92.GetTxRequest): Promise<_92.GetTxResponse>;
                        broadcastTx(request: _92.BroadcastTxRequest): Promise<_92.BroadcastTxResponse>;
                        getTxsEvent(request: _92.GetTxsEventRequest): Promise<_92.GetTxsEventResponse>;
                        getBlockWithTxs(request: _92.GetBlockWithTxsRequest): Promise<_92.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _94.QueryCurrentPlanRequest): Promise<_94.QueryCurrentPlanResponse>;
                        appliedPlan(request: _94.QueryAppliedPlanRequest): Promise<_94.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _94.QueryUpgradedConsensusStateRequest): Promise<_94.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _94.QueryModuleVersionsRequest): Promise<_94.QueryModuleVersionsResponse>;
                        authority(request?: _94.QueryAuthorityRequest): Promise<_94.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
