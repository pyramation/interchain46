import * as _2 from "./app/module/v1alpha1/module";
import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/query";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/v1beta1/authz";
import * as _15 from "./bank/v1beta1/bank";
import * as _16 from "./bank/v1beta1/genesis";
import * as _17 from "./bank/v1beta1/query";
import * as _18 from "./bank/v1beta1/tx";
import * as _19 from "./base/abci/v1beta1/abci";
import * as _20 from "./base/kv/v1beta1/kv";
import * as _21 from "./base/node/v1beta1/query";
import * as _22 from "./base/query/v1beta1/pagination";
import * as _23 from "./base/reflection/v1beta1/reflection";
import * as _24 from "./base/reflection/v2alpha1/reflection";
import * as _25 from "./base/snapshots/v1beta1/snapshot";
import * as _26 from "./base/store/v1beta1/commit_info";
import * as _27 from "./base/store/v1beta1/listening";
import * as _28 from "./base/tendermint/v1beta1/query";
import * as _29 from "./base/tendermint/v1beta1/types";
import * as _30 from "./base/v1beta1/coin";
import * as _31 from "./capability/v1beta1/capability";
import * as _32 from "./capability/v1beta1/genesis";
import * as _33 from "./crisis/v1beta1/genesis";
import * as _34 from "./crisis/v1beta1/tx";
import * as _35 from "./crypto/ed25519/keys";
import * as _36 from "./crypto/hd/v1/hd";
import * as _37 from "./crypto/keyring/v1/record";
import * as _38 from "./crypto/multisig/keys";
import * as _39 from "./crypto/secp256k1/keys";
import * as _40 from "./crypto/secp256r1/keys";
import * as _41 from "./distribution/v1beta1/distribution";
import * as _42 from "./distribution/v1beta1/genesis";
import * as _43 from "./distribution/v1beta1/query";
import * as _44 from "./distribution/v1beta1/tx";
import * as _45 from "./evidence/v1beta1/evidence";
import * as _46 from "./evidence/v1beta1/genesis";
import * as _47 from "./evidence/v1beta1/query";
import * as _48 from "./evidence/v1beta1/tx";
import * as _49 from "./feegrant/v1beta1/feegrant";
import * as _50 from "./feegrant/v1beta1/genesis";
import * as _51 from "./feegrant/v1beta1/query";
import * as _52 from "./feegrant/v1beta1/tx";
import * as _53 from "./genutil/v1beta1/genesis";
import * as _54 from "./gov/v1/genesis";
import * as _55 from "./gov/v1/gov";
import * as _56 from "./gov/v1/query";
import * as _57 from "./gov/v1/tx";
import * as _58 from "./gov/v1beta1/genesis";
import * as _59 from "./gov/v1beta1/gov";
import * as _60 from "./gov/v1beta1/query";
import * as _61 from "./gov/v1beta1/tx";
import * as _62 from "./group/v1/events";
import * as _63 from "./group/v1/genesis";
import * as _64 from "./group/v1/query";
import * as _65 from "./group/v1/tx";
import * as _66 from "./group/v1/types";
import * as _67 from "./mint/v1beta1/genesis";
import * as _68 from "./mint/v1beta1/mint";
import * as _69 from "./mint/v1beta1/query";
import * as _71 from "./nft/v1beta1/event";
import * as _72 from "./nft/v1beta1/genesis";
import * as _73 from "./nft/v1beta1/nft";
import * as _74 from "./nft/v1beta1/query";
import * as _75 from "./nft/v1beta1/tx";
import * as _76 from "./orm/module/v1alpha1/module";
import * as _77 from "./orm/v1/orm";
import * as _78 from "./orm/v1alpha1/schema";
import * as _79 from "./params/v1beta1/params";
import * as _80 from "./params/v1beta1/query";
import * as _81 from "./slashing/v1beta1/genesis";
import * as _82 from "./slashing/v1beta1/query";
import * as _83 from "./slashing/v1beta1/slashing";
import * as _84 from "./slashing/v1beta1/tx";
import * as _85 from "./staking/v1beta1/authz";
import * as _86 from "./staking/v1beta1/genesis";
import * as _87 from "./staking/v1beta1/query";
import * as _88 from "./staking/v1beta1/staking";
import * as _89 from "./staking/v1beta1/tx";
import * as _90 from "./tx/signing/v1beta1/signing";
import * as _91 from "./tx/v1beta1/service";
import * as _92 from "./tx/v1beta1/tx";
import * as _93 from "./upgrade/v1beta1/query";
import * as _94 from "./upgrade/v1beta1/tx";
import * as _95 from "./upgrade/v1beta1/upgrade";
import * as _96 from "./vesting/v1beta1/tx";
import * as _97 from "./vesting/v1beta1/vesting";
import * as _145 from "./app/v1alpha1/query.rpc.Query";
import * as _146 from "./auth/v1beta1/query.rpc.Query";
import * as _147 from "./authz/v1beta1/query.rpc.Query";
import * as _148 from "./bank/v1beta1/query.rpc.Query";
import * as _149 from "./base/node/v1beta1/query.rpc.Service";
import * as _150 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _151 from "./distribution/v1beta1/query.rpc.Query";
import * as _152 from "./evidence/v1beta1/query.rpc.Query";
import * as _153 from "./feegrant/v1beta1/query.rpc.Query";
import * as _154 from "./gov/v1/query.rpc.Query";
import * as _155 from "./gov/v1beta1/query.rpc.Query";
import * as _156 from "./group/v1/query.rpc.Query";
import * as _157 from "./mint/v1beta1/query.rpc.Query";
import * as _158 from "./nft/v1beta1/query.rpc.Query";
import * as _159 from "./params/v1beta1/query.rpc.Query";
import * as _160 from "./slashing/v1beta1/query.rpc.Query";
import * as _161 from "./staking/v1beta1/query.rpc.Query";
import * as _162 from "./tx/v1beta1/service.rpc.Service";
import * as _163 from "./upgrade/v1beta1/query.rpc.Query";
import * as _164 from "./authz/v1beta1/tx.rpc.msg";
import * as _165 from "./bank/v1beta1/tx.rpc.msg";
import * as _166 from "./crisis/v1beta1/tx.rpc.msg";
import * as _167 from "./distribution/v1beta1/tx.rpc.msg";
import * as _168 from "./evidence/v1beta1/tx.rpc.msg";
import * as _169 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _170 from "./gov/v1/tx.rpc.msg";
import * as _171 from "./gov/v1beta1/tx.rpc.msg";
import * as _172 from "./group/v1/tx.rpc.msg";
import * as _173 from "./nft/v1beta1/tx.rpc.msg";
import * as _174 from "./slashing/v1beta1/tx.rpc.msg";
import * as _175 from "./staking/v1beta1/tx.rpc.msg";
import * as _176 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _177 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _2.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Module;
                    fromJSON(_: any): _2.Module;
                    toJSON(_: _2.Module): unknown;
                    fromPartial(_: Partial<_2.Module>): _2.Module;
                    fromAmino(_: _2.ModuleAmino): _2.Module;
                    toAmino(_: _2.Module): _2.ModuleAmino;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _145.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _5.QueryConfigRequest): Promise<_5.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _5.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryConfigRequest;
                fromJSON(_: any): _5.QueryConfigRequest;
                toJSON(_: _5.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_5.QueryConfigRequest>): _5.QueryConfigRequest;
                fromAmino(_: _5.QueryConfigRequestAmino): _5.QueryConfigRequest;
                toAmino(_: _5.QueryConfigRequest): _5.QueryConfigRequestAmino;
            };
            QueryConfigResponse: {
                encode(message: _5.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryConfigResponse;
                fromJSON(object: any): _5.QueryConfigResponse;
                toJSON(message: _5.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_5.QueryConfigResponse>): _5.QueryConfigResponse;
                fromAmino(object: _5.QueryConfigResponseAmino): _5.QueryConfigResponse;
                toAmino(message: _5.QueryConfigResponse): _5.QueryConfigResponseAmino;
            };
            ModuleDescriptor: {
                encode(message: _4.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.ModuleDescriptor;
                fromJSON(object: any): _4.ModuleDescriptor;
                toJSON(message: _4.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_4.ModuleDescriptor>): _4.ModuleDescriptor;
                fromAmino(object: _4.ModuleDescriptorAmino): _4.ModuleDescriptor;
                toAmino(message: _4.ModuleDescriptor): _4.ModuleDescriptorAmino;
            };
            PackageReference: {
                encode(message: _4.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.PackageReference;
                fromJSON(object: any): _4.PackageReference;
                toJSON(message: _4.PackageReference): unknown;
                fromPartial(object: Partial<_4.PackageReference>): _4.PackageReference;
                fromAmino(object: _4.PackageReferenceAmino): _4.PackageReference;
                toAmino(message: _4.PackageReference): _4.PackageReferenceAmino;
            };
            MigrateFromInfo: {
                encode(message: _4.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MigrateFromInfo;
                fromJSON(object: any): _4.MigrateFromInfo;
                toJSON(message: _4.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_4.MigrateFromInfo>): _4.MigrateFromInfo;
                fromAmino(object: _4.MigrateFromInfoAmino): _4.MigrateFromInfo;
                toAmino(message: _4.MigrateFromInfo): _4.MigrateFromInfoAmino;
            };
            Config: {
                encode(message: _3.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Config;
                fromJSON(object: any): _3.Config;
                toJSON(message: _3.Config): unknown;
                fromPartial(object: Partial<_3.Config>): _3.Config;
                fromAmino(object: _3.ConfigAmino): _3.Config;
                toAmino(message: _3.Config): _3.ConfigAmino;
            };
            ModuleConfig: {
                encode(message: _3.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ModuleConfig;
                fromJSON(object: any): _3.ModuleConfig;
                toJSON(message: _3.ModuleConfig): unknown;
                fromPartial(object: Partial<_3.ModuleConfig>): _3.ModuleConfig;
                fromAmino(object: _3.ModuleConfigAmino): _3.ModuleConfig;
                toAmino(message: _3.ModuleConfig): _3.ModuleConfigAmino;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _146.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _8.QueryAccountsRequest): Promise<_8.QueryAccountsResponse>;
                account(request: _8.QueryAccountRequest): Promise<_8.QueryAccountResponse>;
                accountAddressByID(request: _8.QueryAccountAddressByIDRequest): Promise<_8.QueryAccountAddressByIDResponse>;
                params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                moduleAccounts(request?: _8.QueryModuleAccountsRequest): Promise<_8.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _8.QueryModuleAccountByNameRequest): Promise<_8.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _8.Bech32PrefixRequest): Promise<_8.Bech32PrefixResponse>;
                addressBytesToString(request: _8.AddressBytesToStringRequest): Promise<_8.AddressBytesToStringResponse>;
                addressStringToBytes(request: _8.AddressStringToBytesRequest): Promise<_8.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _8.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountsRequest;
                fromJSON(object: any): _8.QueryAccountsRequest;
                toJSON(message: _8.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_8.QueryAccountsRequest>): _8.QueryAccountsRequest;
                fromAmino(object: _8.QueryAccountsRequestAmino): _8.QueryAccountsRequest;
                toAmino(message: _8.QueryAccountsRequest): _8.QueryAccountsRequestAmino;
            };
            QueryAccountsResponse: {
                encode(message: _8.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountsResponse;
                fromJSON(object: any): _8.QueryAccountsResponse;
                toJSON(message: _8.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_8.QueryAccountsResponse>): _8.QueryAccountsResponse;
                fromAmino(object: _8.QueryAccountsResponseAmino): _8.QueryAccountsResponse;
                toAmino(message: _8.QueryAccountsResponse): _8.QueryAccountsResponseAmino;
            };
            QueryAccountRequest: {
                encode(message: _8.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountRequest;
                fromJSON(object: any): _8.QueryAccountRequest;
                toJSON(message: _8.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_8.QueryAccountRequest>): _8.QueryAccountRequest;
                fromAmino(object: _8.QueryAccountRequestAmino): _8.QueryAccountRequest;
                toAmino(message: _8.QueryAccountRequest): _8.QueryAccountRequestAmino;
            };
            QueryAccountResponse: {
                encode(message: _8.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountResponse;
                fromJSON(object: any): _8.QueryAccountResponse;
                toJSON(message: _8.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_8.QueryAccountResponse>): _8.QueryAccountResponse;
                fromAmino(object: _8.QueryAccountResponseAmino): _8.QueryAccountResponse;
                toAmino(message: _8.QueryAccountResponse): _8.QueryAccountResponseAmino;
            };
            QueryParamsRequest: {
                encode(_: _8.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryParamsRequest;
                fromJSON(_: any): _8.QueryParamsRequest;
                toJSON(_: _8.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_8.QueryParamsRequest>): _8.QueryParamsRequest;
                fromAmino(_: _8.QueryParamsRequestAmino): _8.QueryParamsRequest;
                toAmino(_: _8.QueryParamsRequest): _8.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _8.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryParamsResponse;
                fromJSON(object: any): _8.QueryParamsResponse;
                toJSON(message: _8.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_8.QueryParamsResponse>): _8.QueryParamsResponse;
                fromAmino(object: _8.QueryParamsResponseAmino): _8.QueryParamsResponse;
                toAmino(message: _8.QueryParamsResponse): _8.QueryParamsResponseAmino;
            };
            QueryModuleAccountsRequest: {
                encode(_: _8.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryModuleAccountsRequest;
                fromJSON(_: any): _8.QueryModuleAccountsRequest;
                toJSON(_: _8.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_8.QueryModuleAccountsRequest>): _8.QueryModuleAccountsRequest;
                fromAmino(_: _8.QueryModuleAccountsRequestAmino): _8.QueryModuleAccountsRequest;
                toAmino(_: _8.QueryModuleAccountsRequest): _8.QueryModuleAccountsRequestAmino;
            };
            QueryModuleAccountsResponse: {
                encode(message: _8.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryModuleAccountsResponse;
                fromJSON(object: any): _8.QueryModuleAccountsResponse;
                toJSON(message: _8.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_8.QueryModuleAccountsResponse>): _8.QueryModuleAccountsResponse;
                fromAmino(object: _8.QueryModuleAccountsResponseAmino): _8.QueryModuleAccountsResponse;
                toAmino(message: _8.QueryModuleAccountsResponse): _8.QueryModuleAccountsResponseAmino;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _8.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _8.QueryModuleAccountByNameRequest;
                toJSON(message: _8.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: Partial<_8.QueryModuleAccountByNameRequest>): _8.QueryModuleAccountByNameRequest;
                fromAmino(object: _8.QueryModuleAccountByNameRequestAmino): _8.QueryModuleAccountByNameRequest;
                toAmino(message: _8.QueryModuleAccountByNameRequest): _8.QueryModuleAccountByNameRequestAmino;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _8.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _8.QueryModuleAccountByNameResponse;
                toJSON(message: _8.QueryModuleAccountByNameResponse): unknown;
                fromPartial(object: Partial<_8.QueryModuleAccountByNameResponse>): _8.QueryModuleAccountByNameResponse;
                fromAmino(object: _8.QueryModuleAccountByNameResponseAmino): _8.QueryModuleAccountByNameResponse;
                toAmino(message: _8.QueryModuleAccountByNameResponse): _8.QueryModuleAccountByNameResponseAmino;
            };
            Bech32PrefixRequest: {
                encode(_: _8.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Bech32PrefixRequest;
                fromJSON(_: any): _8.Bech32PrefixRequest;
                toJSON(_: _8.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_8.Bech32PrefixRequest>): _8.Bech32PrefixRequest;
                fromAmino(_: _8.Bech32PrefixRequestAmino): _8.Bech32PrefixRequest;
                toAmino(_: _8.Bech32PrefixRequest): _8.Bech32PrefixRequestAmino;
            };
            Bech32PrefixResponse: {
                encode(message: _8.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Bech32PrefixResponse;
                fromJSON(object: any): _8.Bech32PrefixResponse;
                toJSON(message: _8.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_8.Bech32PrefixResponse>): _8.Bech32PrefixResponse;
                fromAmino(object: _8.Bech32PrefixResponseAmino): _8.Bech32PrefixResponse;
                toAmino(message: _8.Bech32PrefixResponse): _8.Bech32PrefixResponseAmino;
            };
            AddressBytesToStringRequest: {
                encode(message: _8.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AddressBytesToStringRequest;
                fromJSON(object: any): _8.AddressBytesToStringRequest;
                toJSON(message: _8.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_8.AddressBytesToStringRequest>): _8.AddressBytesToStringRequest;
                fromAmino(object: _8.AddressBytesToStringRequestAmino): _8.AddressBytesToStringRequest;
                toAmino(message: _8.AddressBytesToStringRequest): _8.AddressBytesToStringRequestAmino;
            };
            AddressBytesToStringResponse: {
                encode(message: _8.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AddressBytesToStringResponse;
                fromJSON(object: any): _8.AddressBytesToStringResponse;
                toJSON(message: _8.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_8.AddressBytesToStringResponse>): _8.AddressBytesToStringResponse;
                fromAmino(object: _8.AddressBytesToStringResponseAmino): _8.AddressBytesToStringResponse;
                toAmino(message: _8.AddressBytesToStringResponse): _8.AddressBytesToStringResponseAmino;
            };
            AddressStringToBytesRequest: {
                encode(message: _8.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AddressStringToBytesRequest;
                fromJSON(object: any): _8.AddressStringToBytesRequest;
                toJSON(message: _8.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_8.AddressStringToBytesRequest>): _8.AddressStringToBytesRequest;
                fromAmino(object: _8.AddressStringToBytesRequestAmino): _8.AddressStringToBytesRequest;
                toAmino(message: _8.AddressStringToBytesRequest): _8.AddressStringToBytesRequestAmino;
            };
            AddressStringToBytesResponse: {
                encode(message: _8.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AddressStringToBytesResponse;
                fromJSON(object: any): _8.AddressStringToBytesResponse;
                toJSON(message: _8.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_8.AddressStringToBytesResponse>): _8.AddressStringToBytesResponse;
                fromAmino(object: _8.AddressStringToBytesResponseAmino): _8.AddressStringToBytesResponse;
                toAmino(message: _8.AddressStringToBytesResponse): _8.AddressStringToBytesResponseAmino;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _8.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _8.QueryAccountAddressByIDRequest;
                toJSON(message: _8.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: Partial<_8.QueryAccountAddressByIDRequest>): _8.QueryAccountAddressByIDRequest;
                fromAmino(object: _8.QueryAccountAddressByIDRequestAmino): _8.QueryAccountAddressByIDRequest;
                toAmino(message: _8.QueryAccountAddressByIDRequest): _8.QueryAccountAddressByIDRequestAmino;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _8.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _8.QueryAccountAddressByIDResponse;
                toJSON(message: _8.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: Partial<_8.QueryAccountAddressByIDResponse>): _8.QueryAccountAddressByIDResponse;
                fromAmino(object: _8.QueryAccountAddressByIDResponseAmino): _8.QueryAccountAddressByIDResponse;
                toAmino(message: _8.QueryAccountAddressByIDResponse): _8.QueryAccountAddressByIDResponseAmino;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _6.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino | {
                type: string;
                value: _6.BaseAccountAmino;
            };
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _6.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino | {
                type: string;
                value: _6.ModuleAccountAmino;
            };
            GenesisState: {
                encode(message: _7.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.GenesisState;
                fromJSON(object: any): _7.GenesisState;
                toJSON(message: _7.GenesisState): unknown;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
                fromAmino(object: _7.GenesisStateAmino): _7.GenesisState;
                toAmino(message: _7.GenesisState): _7.GenesisStateAmino;
            };
            BaseAccount: {
                encode(message: _6.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.BaseAccount;
                fromJSON(object: any): _6.BaseAccount;
                toJSON(message: _6.BaseAccount): unknown;
                fromPartial(object: Partial<_6.BaseAccount>): _6.BaseAccount;
                fromAmino(object: _6.BaseAccountAmino): _6.BaseAccount;
                toAmino(message: _6.BaseAccount): _6.BaseAccountAmino;
            };
            ModuleAccount: {
                encode(message: _6.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.ModuleAccount;
                fromJSON(object: any): _6.ModuleAccount;
                toJSON(message: _6.ModuleAccount): unknown;
                fromPartial(object: Partial<_6.ModuleAccount>): _6.ModuleAccount;
                fromAmino(object: _6.ModuleAccountAmino): _6.ModuleAccount;
                toAmino(message: _6.ModuleAccount): _6.ModuleAccountAmino;
            };
            Params: {
                encode(message: _6.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Params;
                fromJSON(object: any): _6.Params;
                toJSON(message: _6.Params): unknown;
                fromPartial(object: Partial<_6.Params>): _6.Params;
                fromAmino(object: _6.ParamsAmino): _6.Params;
                toAmino(message: _6.Params): _6.ParamsAmino;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _164.MsgClientImpl;
            QueryClientImpl: typeof _147.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _12.QueryGrantsRequest): Promise<_12.QueryGrantsResponse>;
                granterGrants(request: _12.QueryGranterGrantsRequest): Promise<_12.QueryGranterGrantsResponse>;
                granteeGrants(request: _12.QueryGranteeGrantsRequest): Promise<_12.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: _13.MsgGrant;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: _13.MsgExec;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: _13.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _13.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _13.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _13.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: _13.MsgGrant;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: _13.MsgExec;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: _13.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _13.MsgGrant) => _13.MsgGrantAmino;
                    fromAmino: (object: _13.MsgGrantAmino) => _13.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _13.MsgExec) => _13.MsgExecAmino;
                    fromAmino: (object: _13.MsgExecAmino) => _13.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _13.MsgRevoke) => _13.MsgRevokeAmino;
                    fromAmino: (object: _13.MsgRevokeAmino) => _13.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _13.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgGrant;
                fromJSON(object: any): _13.MsgGrant;
                toJSON(message: _13.MsgGrant): unknown;
                fromPartial(object: Partial<_13.MsgGrant>): _13.MsgGrant;
                fromAmino(object: _13.MsgGrantAmino): _13.MsgGrant;
                toAmino(message: _13.MsgGrant): _13.MsgGrantAmino;
            };
            MsgExecResponse: {
                encode(message: _13.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgExecResponse;
                fromJSON(object: any): _13.MsgExecResponse;
                toJSON(message: _13.MsgExecResponse): unknown;
                fromPartial(object: Partial<_13.MsgExecResponse>): _13.MsgExecResponse;
                fromAmino(object: _13.MsgExecResponseAmino): _13.MsgExecResponse;
                toAmino(message: _13.MsgExecResponse): _13.MsgExecResponseAmino;
            };
            MsgExec: {
                encode(message: _13.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgExec;
                fromJSON(object: any): _13.MsgExec;
                toJSON(message: _13.MsgExec): unknown;
                fromPartial(object: Partial<_13.MsgExec>): _13.MsgExec;
                fromAmino(object: _13.MsgExecAmino): _13.MsgExec;
                toAmino(message: _13.MsgExec): _13.MsgExecAmino;
            };
            MsgGrantResponse: {
                encode(_: _13.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgGrantResponse;
                fromJSON(_: any): _13.MsgGrantResponse;
                toJSON(_: _13.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_13.MsgGrantResponse>): _13.MsgGrantResponse;
                fromAmino(_: _13.MsgGrantResponseAmino): _13.MsgGrantResponse;
                toAmino(_: _13.MsgGrantResponse): _13.MsgGrantResponseAmino;
            };
            MsgRevoke: {
                encode(message: _13.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgRevoke;
                fromJSON(object: any): _13.MsgRevoke;
                toJSON(message: _13.MsgRevoke): unknown;
                fromPartial(object: Partial<_13.MsgRevoke>): _13.MsgRevoke;
                fromAmino(object: _13.MsgRevokeAmino): _13.MsgRevoke;
                toAmino(message: _13.MsgRevoke): _13.MsgRevokeAmino;
            };
            MsgRevokeResponse: {
                encode(_: _13.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgRevokeResponse;
                fromJSON(_: any): _13.MsgRevokeResponse;
                toJSON(_: _13.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_13.MsgRevokeResponse>): _13.MsgRevokeResponse;
                fromAmino(_: _13.MsgRevokeResponseAmino): _13.MsgRevokeResponse;
                toAmino(_: _13.MsgRevokeResponse): _13.MsgRevokeResponseAmino;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _14.SendAuthorization | _85.StakeAuthorization | _9.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino | {
                type: string;
                value: _9.GenericAuthorizationAmino;
            } | {
                type: string;
                value: _14.SendAuthorizationAmino;
            } | {
                type: string;
                value: _85.StakeAuthorizationAmino;
            };
            QueryGrantsRequest: {
                encode(message: _12.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGrantsRequest;
                fromJSON(object: any): _12.QueryGrantsRequest;
                toJSON(message: _12.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_12.QueryGrantsRequest>): _12.QueryGrantsRequest;
                fromAmino(object: _12.QueryGrantsRequestAmino): _12.QueryGrantsRequest;
                toAmino(message: _12.QueryGrantsRequest): _12.QueryGrantsRequestAmino;
            };
            QueryGrantsResponse: {
                encode(message: _12.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGrantsResponse;
                fromJSON(object: any): _12.QueryGrantsResponse;
                toJSON(message: _12.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_12.QueryGrantsResponse>): _12.QueryGrantsResponse;
                fromAmino(object: _12.QueryGrantsResponseAmino): _12.QueryGrantsResponse;
                toAmino(message: _12.QueryGrantsResponse): _12.QueryGrantsResponseAmino;
            };
            QueryGranterGrantsRequest: {
                encode(message: _12.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGranterGrantsRequest;
                fromJSON(object: any): _12.QueryGranterGrantsRequest;
                toJSON(message: _12.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_12.QueryGranterGrantsRequest>): _12.QueryGranterGrantsRequest;
                fromAmino(object: _12.QueryGranterGrantsRequestAmino): _12.QueryGranterGrantsRequest;
                toAmino(message: _12.QueryGranterGrantsRequest): _12.QueryGranterGrantsRequestAmino;
            };
            QueryGranterGrantsResponse: {
                encode(message: _12.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGranterGrantsResponse;
                fromJSON(object: any): _12.QueryGranterGrantsResponse;
                toJSON(message: _12.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_12.QueryGranterGrantsResponse>): _12.QueryGranterGrantsResponse;
                fromAmino(object: _12.QueryGranterGrantsResponseAmino): _12.QueryGranterGrantsResponse;
                toAmino(message: _12.QueryGranterGrantsResponse): _12.QueryGranterGrantsResponseAmino;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _12.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGranteeGrantsRequest;
                fromJSON(object: any): _12.QueryGranteeGrantsRequest;
                toJSON(message: _12.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_12.QueryGranteeGrantsRequest>): _12.QueryGranteeGrantsRequest;
                fromAmino(object: _12.QueryGranteeGrantsRequestAmino): _12.QueryGranteeGrantsRequest;
                toAmino(message: _12.QueryGranteeGrantsRequest): _12.QueryGranteeGrantsRequestAmino;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _12.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGranteeGrantsResponse;
                fromJSON(object: any): _12.QueryGranteeGrantsResponse;
                toJSON(message: _12.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_12.QueryGranteeGrantsResponse>): _12.QueryGranteeGrantsResponse;
                fromAmino(object: _12.QueryGranteeGrantsResponseAmino): _12.QueryGranteeGrantsResponse;
                toAmino(message: _12.QueryGranteeGrantsResponse): _12.QueryGranteeGrantsResponseAmino;
            };
            GenesisState: {
                encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GenesisState;
                fromJSON(object: any): _11.GenesisState;
                toJSON(message: _11.GenesisState): unknown;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
                fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
                toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
            };
            EventGrant: {
                encode(message: _10.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.EventGrant;
                fromJSON(object: any): _10.EventGrant;
                toJSON(message: _10.EventGrant): unknown;
                fromPartial(object: Partial<_10.EventGrant>): _10.EventGrant;
                fromAmino(object: _10.EventGrantAmino): _10.EventGrant;
                toAmino(message: _10.EventGrant): _10.EventGrantAmino;
            };
            EventRevoke: {
                encode(message: _10.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.EventRevoke;
                fromJSON(object: any): _10.EventRevoke;
                toJSON(message: _10.EventRevoke): unknown;
                fromPartial(object: Partial<_10.EventRevoke>): _10.EventRevoke;
                fromAmino(object: _10.EventRevokeAmino): _10.EventRevoke;
                toAmino(message: _10.EventRevoke): _10.EventRevokeAmino;
            };
            GenericAuthorization: {
                encode(message: _9.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GenericAuthorization;
                fromJSON(object: any): _9.GenericAuthorization;
                toJSON(message: _9.GenericAuthorization): unknown;
                fromPartial(object: Partial<_9.GenericAuthorization>): _9.GenericAuthorization;
                fromAmino(object: _9.GenericAuthorizationAmino): _9.GenericAuthorization;
                toAmino(message: _9.GenericAuthorization): _9.GenericAuthorizationAmino;
            };
            Grant: {
                encode(message: _9.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Grant;
                fromJSON(object: any): _9.Grant;
                toJSON(message: _9.Grant): unknown;
                fromPartial(object: Partial<_9.Grant>): _9.Grant;
                fromAmino(object: _9.GrantAmino): _9.Grant;
                toAmino(message: _9.Grant): _9.GrantAmino;
            };
            GrantAuthorization: {
                encode(message: _9.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GrantAuthorization;
                fromJSON(object: any): _9.GrantAuthorization;
                toJSON(message: _9.GrantAuthorization): unknown;
                fromPartial(object: Partial<_9.GrantAuthorization>): _9.GrantAuthorization;
                fromAmino(object: _9.GrantAuthorizationAmino): _9.GrantAuthorization;
                toAmino(message: _9.GrantAuthorization): _9.GrantAuthorizationAmino;
            };
            GrantQueueItem: {
                encode(message: _9.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GrantQueueItem;
                fromJSON(object: any): _9.GrantQueueItem;
                toJSON(message: _9.GrantQueueItem): unknown;
                fromPartial(object: Partial<_9.GrantQueueItem>): _9.GrantQueueItem;
                fromAmino(object: _9.GrantQueueItemAmino): _9.GrantQueueItem;
                toAmino(message: _9.GrantQueueItem): _9.GrantQueueItemAmino;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _165.MsgClientImpl;
            QueryClientImpl: typeof _148.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _17.QueryBalanceRequest): Promise<_17.QueryBalanceResponse>;
                allBalances(request: _17.QueryAllBalancesRequest): Promise<_17.QueryAllBalancesResponse>;
                spendableBalances(request: _17.QuerySpendableBalancesRequest): Promise<_17.QuerySpendableBalancesResponse>;
                totalSupply(request?: _17.QueryTotalSupplyRequest): Promise<_17.QueryTotalSupplyResponse>;
                supplyOf(request: _17.QuerySupplyOfRequest): Promise<_17.QuerySupplyOfResponse>;
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                denomMetadata(request: _17.QueryDenomMetadataRequest): Promise<_17.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _17.QueryDenomsMetadataRequest): Promise<_17.QueryDenomsMetadataResponse>;
                denomOwners(request: _17.QueryDenomOwnersRequest): Promise<_17.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: _18.MsgSend;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: _18.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _18.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _18.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: _18.MsgSend;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: _18.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _18.MsgSend) => _18.MsgSendAmino;
                    fromAmino: (object: _18.MsgSendAmino) => _18.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _18.MsgMultiSend) => _18.MsgMultiSendAmino;
                    fromAmino: (object: _18.MsgMultiSendAmino) => _18.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _18.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgSend;
                fromJSON(object: any): _18.MsgSend;
                toJSON(message: _18.MsgSend): unknown;
                fromPartial(object: Partial<_18.MsgSend>): _18.MsgSend;
                fromAmino(object: _18.MsgSendAmino): _18.MsgSend;
                toAmino(message: _18.MsgSend): _18.MsgSendAmino;
            };
            MsgSendResponse: {
                encode(_: _18.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgSendResponse;
                fromJSON(_: any): _18.MsgSendResponse;
                toJSON(_: _18.MsgSendResponse): unknown;
                fromPartial(_: Partial<_18.MsgSendResponse>): _18.MsgSendResponse;
                fromAmino(_: _18.MsgSendResponseAmino): _18.MsgSendResponse;
                toAmino(_: _18.MsgSendResponse): _18.MsgSendResponseAmino;
            };
            MsgMultiSend: {
                encode(message: _18.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgMultiSend;
                fromJSON(object: any): _18.MsgMultiSend;
                toJSON(message: _18.MsgMultiSend): unknown;
                fromPartial(object: Partial<_18.MsgMultiSend>): _18.MsgMultiSend;
                fromAmino(object: _18.MsgMultiSendAmino): _18.MsgMultiSend;
                toAmino(message: _18.MsgMultiSend): _18.MsgMultiSendAmino;
            };
            MsgMultiSendResponse: {
                encode(_: _18.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgMultiSendResponse;
                fromJSON(_: any): _18.MsgMultiSendResponse;
                toJSON(_: _18.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_18.MsgMultiSendResponse>): _18.MsgMultiSendResponse;
                fromAmino(_: _18.MsgMultiSendResponseAmino): _18.MsgMultiSendResponse;
                toAmino(_: _18.MsgMultiSendResponse): _18.MsgMultiSendResponseAmino;
            };
            QueryBalanceRequest: {
                encode(message: _17.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryBalanceRequest;
                fromJSON(object: any): _17.QueryBalanceRequest;
                toJSON(message: _17.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_17.QueryBalanceRequest>): _17.QueryBalanceRequest;
                fromAmino(object: _17.QueryBalanceRequestAmino): _17.QueryBalanceRequest;
                toAmino(message: _17.QueryBalanceRequest): _17.QueryBalanceRequestAmino;
            };
            QueryBalanceResponse: {
                encode(message: _17.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryBalanceResponse;
                fromJSON(object: any): _17.QueryBalanceResponse;
                toJSON(message: _17.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_17.QueryBalanceResponse>): _17.QueryBalanceResponse;
                fromAmino(object: _17.QueryBalanceResponseAmino): _17.QueryBalanceResponse;
                toAmino(message: _17.QueryBalanceResponse): _17.QueryBalanceResponseAmino;
            };
            QueryAllBalancesRequest: {
                encode(message: _17.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAllBalancesRequest;
                fromJSON(object: any): _17.QueryAllBalancesRequest;
                toJSON(message: _17.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_17.QueryAllBalancesRequest>): _17.QueryAllBalancesRequest;
                fromAmino(object: _17.QueryAllBalancesRequestAmino): _17.QueryAllBalancesRequest;
                toAmino(message: _17.QueryAllBalancesRequest): _17.QueryAllBalancesRequestAmino;
            };
            QueryAllBalancesResponse: {
                encode(message: _17.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAllBalancesResponse;
                fromJSON(object: any): _17.QueryAllBalancesResponse;
                toJSON(message: _17.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_17.QueryAllBalancesResponse>): _17.QueryAllBalancesResponse;
                fromAmino(object: _17.QueryAllBalancesResponseAmino): _17.QueryAllBalancesResponse;
                toAmino(message: _17.QueryAllBalancesResponse): _17.QueryAllBalancesResponseAmino;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _17.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QuerySpendableBalancesRequest;
                fromJSON(object: any): _17.QuerySpendableBalancesRequest;
                toJSON(message: _17.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_17.QuerySpendableBalancesRequest>): _17.QuerySpendableBalancesRequest;
                fromAmino(object: _17.QuerySpendableBalancesRequestAmino): _17.QuerySpendableBalancesRequest;
                toAmino(message: _17.QuerySpendableBalancesRequest): _17.QuerySpendableBalancesRequestAmino;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _17.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QuerySpendableBalancesResponse;
                fromJSON(object: any): _17.QuerySpendableBalancesResponse;
                toJSON(message: _17.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_17.QuerySpendableBalancesResponse>): _17.QuerySpendableBalancesResponse;
                fromAmino(object: _17.QuerySpendableBalancesResponseAmino): _17.QuerySpendableBalancesResponse;
                toAmino(message: _17.QuerySpendableBalancesResponse): _17.QuerySpendableBalancesResponseAmino;
            };
            QueryTotalSupplyRequest: {
                encode(message: _17.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryTotalSupplyRequest;
                fromJSON(object: any): _17.QueryTotalSupplyRequest;
                toJSON(message: _17.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_17.QueryTotalSupplyRequest>): _17.QueryTotalSupplyRequest;
                fromAmino(object: _17.QueryTotalSupplyRequestAmino): _17.QueryTotalSupplyRequest;
                toAmino(message: _17.QueryTotalSupplyRequest): _17.QueryTotalSupplyRequestAmino;
            };
            QueryTotalSupplyResponse: {
                encode(message: _17.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryTotalSupplyResponse;
                fromJSON(object: any): _17.QueryTotalSupplyResponse;
                toJSON(message: _17.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_17.QueryTotalSupplyResponse>): _17.QueryTotalSupplyResponse;
                fromAmino(object: _17.QueryTotalSupplyResponseAmino): _17.QueryTotalSupplyResponse;
                toAmino(message: _17.QueryTotalSupplyResponse): _17.QueryTotalSupplyResponseAmino;
            };
            QuerySupplyOfRequest: {
                encode(message: _17.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QuerySupplyOfRequest;
                fromJSON(object: any): _17.QuerySupplyOfRequest;
                toJSON(message: _17.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_17.QuerySupplyOfRequest>): _17.QuerySupplyOfRequest;
                fromAmino(object: _17.QuerySupplyOfRequestAmino): _17.QuerySupplyOfRequest;
                toAmino(message: _17.QuerySupplyOfRequest): _17.QuerySupplyOfRequestAmino;
            };
            QuerySupplyOfResponse: {
                encode(message: _17.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QuerySupplyOfResponse;
                fromJSON(object: any): _17.QuerySupplyOfResponse;
                toJSON(message: _17.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_17.QuerySupplyOfResponse>): _17.QuerySupplyOfResponse;
                fromAmino(object: _17.QuerySupplyOfResponseAmino): _17.QuerySupplyOfResponse;
                toAmino(message: _17.QuerySupplyOfResponse): _17.QuerySupplyOfResponseAmino;
            };
            QueryParamsRequest: {
                encode(_: _17.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryParamsRequest;
                fromJSON(_: any): _17.QueryParamsRequest;
                toJSON(_: _17.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
                fromAmino(_: _17.QueryParamsRequestAmino): _17.QueryParamsRequest;
                toAmino(_: _17.QueryParamsRequest): _17.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _17.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryParamsResponse;
                fromJSON(object: any): _17.QueryParamsResponse;
                toJSON(message: _17.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
                fromAmino(object: _17.QueryParamsResponseAmino): _17.QueryParamsResponse;
                toAmino(message: _17.QueryParamsResponse): _17.QueryParamsResponseAmino;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _17.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomsMetadataRequest;
                fromJSON(object: any): _17.QueryDenomsMetadataRequest;
                toJSON(message: _17.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_17.QueryDenomsMetadataRequest>): _17.QueryDenomsMetadataRequest;
                fromAmino(object: _17.QueryDenomsMetadataRequestAmino): _17.QueryDenomsMetadataRequest;
                toAmino(message: _17.QueryDenomsMetadataRequest): _17.QueryDenomsMetadataRequestAmino;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _17.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomsMetadataResponse;
                fromJSON(object: any): _17.QueryDenomsMetadataResponse;
                toJSON(message: _17.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_17.QueryDenomsMetadataResponse>): _17.QueryDenomsMetadataResponse;
                fromAmino(object: _17.QueryDenomsMetadataResponseAmino): _17.QueryDenomsMetadataResponse;
                toAmino(message: _17.QueryDenomsMetadataResponse): _17.QueryDenomsMetadataResponseAmino;
            };
            QueryDenomMetadataRequest: {
                encode(message: _17.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomMetadataRequest;
                fromJSON(object: any): _17.QueryDenomMetadataRequest;
                toJSON(message: _17.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_17.QueryDenomMetadataRequest>): _17.QueryDenomMetadataRequest;
                fromAmino(object: _17.QueryDenomMetadataRequestAmino): _17.QueryDenomMetadataRequest;
                toAmino(message: _17.QueryDenomMetadataRequest): _17.QueryDenomMetadataRequestAmino;
            };
            QueryDenomMetadataResponse: {
                encode(message: _17.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomMetadataResponse;
                fromJSON(object: any): _17.QueryDenomMetadataResponse;
                toJSON(message: _17.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_17.QueryDenomMetadataResponse>): _17.QueryDenomMetadataResponse;
                fromAmino(object: _17.QueryDenomMetadataResponseAmino): _17.QueryDenomMetadataResponse;
                toAmino(message: _17.QueryDenomMetadataResponse): _17.QueryDenomMetadataResponseAmino;
            };
            QueryDenomOwnersRequest: {
                encode(message: _17.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomOwnersRequest;
                fromJSON(object: any): _17.QueryDenomOwnersRequest;
                toJSON(message: _17.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_17.QueryDenomOwnersRequest>): _17.QueryDenomOwnersRequest;
                fromAmino(object: _17.QueryDenomOwnersRequestAmino): _17.QueryDenomOwnersRequest;
                toAmino(message: _17.QueryDenomOwnersRequest): _17.QueryDenomOwnersRequestAmino;
            };
            DenomOwner: {
                encode(message: _17.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.DenomOwner;
                fromJSON(object: any): _17.DenomOwner;
                toJSON(message: _17.DenomOwner): unknown;
                fromPartial(object: Partial<_17.DenomOwner>): _17.DenomOwner;
                fromAmino(object: _17.DenomOwnerAmino): _17.DenomOwner;
                toAmino(message: _17.DenomOwner): _17.DenomOwnerAmino;
            };
            QueryDenomOwnersResponse: {
                encode(message: _17.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomOwnersResponse;
                fromJSON(object: any): _17.QueryDenomOwnersResponse;
                toJSON(message: _17.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_17.QueryDenomOwnersResponse>): _17.QueryDenomOwnersResponse;
                fromAmino(object: _17.QueryDenomOwnersResponseAmino): _17.QueryDenomOwnersResponse;
                toAmino(message: _17.QueryDenomOwnersResponse): _17.QueryDenomOwnersResponseAmino;
            };
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.GenesisState;
                fromJSON(object: any): _16.GenesisState;
                toJSON(message: _16.GenesisState): unknown;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
                fromAmino(object: _16.GenesisStateAmino): _16.GenesisState;
                toAmino(message: _16.GenesisState): _16.GenesisStateAmino;
            };
            Balance: {
                encode(message: _16.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Balance;
                fromJSON(object: any): _16.Balance;
                toJSON(message: _16.Balance): unknown;
                fromPartial(object: Partial<_16.Balance>): _16.Balance;
                fromAmino(object: _16.BalanceAmino): _16.Balance;
                toAmino(message: _16.Balance): _16.BalanceAmino;
            };
            Params: {
                encode(message: _15.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Params;
                fromJSON(object: any): _15.Params;
                toJSON(message: _15.Params): unknown;
                fromPartial(object: Partial<_15.Params>): _15.Params;
                fromAmino(object: _15.ParamsAmino): _15.Params;
                toAmino(message: _15.Params): _15.ParamsAmino;
            };
            SendEnabled: {
                encode(message: _15.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SendEnabled;
                fromJSON(object: any): _15.SendEnabled;
                toJSON(message: _15.SendEnabled): unknown;
                fromPartial(object: Partial<_15.SendEnabled>): _15.SendEnabled;
                fromAmino(object: _15.SendEnabledAmino): _15.SendEnabled;
                toAmino(message: _15.SendEnabled): _15.SendEnabledAmino;
            };
            Input: {
                encode(message: _15.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Input;
                fromJSON(object: any): _15.Input;
                toJSON(message: _15.Input): unknown;
                fromPartial(object: Partial<_15.Input>): _15.Input;
                fromAmino(object: _15.InputAmino): _15.Input;
                toAmino(message: _15.Input): _15.InputAmino;
            };
            Output: {
                encode(message: _15.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Output;
                fromJSON(object: any): _15.Output;
                toJSON(message: _15.Output): unknown;
                fromPartial(object: Partial<_15.Output>): _15.Output;
                fromAmino(object: _15.OutputAmino): _15.Output;
                toAmino(message: _15.Output): _15.OutputAmino;
            };
            Supply: {
                encode(message: _15.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Supply;
                fromJSON(object: any): _15.Supply;
                toJSON(message: _15.Supply): unknown;
                fromPartial(object: Partial<_15.Supply>): _15.Supply;
                fromAmino(object: _15.SupplyAmino): _15.Supply;
                toAmino(message: _15.Supply): _15.SupplyAmino;
            };
            DenomUnit: {
                encode(message: _15.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DenomUnit;
                fromJSON(object: any): _15.DenomUnit;
                toJSON(message: _15.DenomUnit): unknown;
                fromPartial(object: Partial<_15.DenomUnit>): _15.DenomUnit;
                fromAmino(object: _15.DenomUnitAmino): _15.DenomUnit;
                toAmino(message: _15.DenomUnit): _15.DenomUnitAmino;
            };
            Metadata: {
                encode(message: _15.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Metadata;
                fromJSON(object: any): _15.Metadata;
                toJSON(message: _15.Metadata): unknown;
                fromPartial(object: Partial<_15.Metadata>): _15.Metadata;
                fromAmino(object: _15.MetadataAmino): _15.Metadata;
                toAmino(message: _15.Metadata): _15.MetadataAmino;
            };
            SendAuthorization: {
                encode(message: _14.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SendAuthorization;
                fromJSON(object: any): _14.SendAuthorization;
                toJSON(message: _14.SendAuthorization): unknown;
                fromPartial(object: Partial<_14.SendAuthorization>): _14.SendAuthorization;
                fromAmino(object: _14.SendAuthorizationAmino): _14.SendAuthorization;
                toAmino(message: _14.SendAuthorization): _14.SendAuthorizationAmino;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _19.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.TxResponse;
                    fromJSON(object: any): _19.TxResponse;
                    toJSON(message: _19.TxResponse): unknown;
                    fromPartial(object: Partial<_19.TxResponse>): _19.TxResponse;
                    fromAmino(object: _19.TxResponseAmino): _19.TxResponse;
                    toAmino(message: _19.TxResponse): _19.TxResponseAmino;
                };
                ABCIMessageLog: {
                    encode(message: _19.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ABCIMessageLog;
                    fromJSON(object: any): _19.ABCIMessageLog;
                    toJSON(message: _19.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_19.ABCIMessageLog>): _19.ABCIMessageLog;
                    fromAmino(object: _19.ABCIMessageLogAmino): _19.ABCIMessageLog;
                    toAmino(message: _19.ABCIMessageLog): _19.ABCIMessageLogAmino;
                };
                StringEvent: {
                    encode(message: _19.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.StringEvent;
                    fromJSON(object: any): _19.StringEvent;
                    toJSON(message: _19.StringEvent): unknown;
                    fromPartial(object: Partial<_19.StringEvent>): _19.StringEvent;
                    fromAmino(object: _19.StringEventAmino): _19.StringEvent;
                    toAmino(message: _19.StringEvent): _19.StringEventAmino;
                };
                Attribute: {
                    encode(message: _19.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Attribute;
                    fromJSON(object: any): _19.Attribute;
                    toJSON(message: _19.Attribute): unknown;
                    fromPartial(object: Partial<_19.Attribute>): _19.Attribute;
                    fromAmino(object: _19.AttributeAmino): _19.Attribute;
                    toAmino(message: _19.Attribute): _19.AttributeAmino;
                };
                GasInfo: {
                    encode(message: _19.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GasInfo;
                    fromJSON(object: any): _19.GasInfo;
                    toJSON(message: _19.GasInfo): unknown;
                    fromPartial(object: Partial<_19.GasInfo>): _19.GasInfo;
                    fromAmino(object: _19.GasInfoAmino): _19.GasInfo;
                    toAmino(message: _19.GasInfo): _19.GasInfoAmino;
                };
                Result: {
                    encode(message: _19.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Result;
                    fromJSON(object: any): _19.Result;
                    toJSON(message: _19.Result): unknown;
                    fromPartial(object: Partial<_19.Result>): _19.Result;
                    fromAmino(object: _19.ResultAmino): _19.Result;
                    toAmino(message: _19.Result): _19.ResultAmino;
                };
                SimulationResponse: {
                    encode(message: _19.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SimulationResponse;
                    fromJSON(object: any): _19.SimulationResponse;
                    toJSON(message: _19.SimulationResponse): unknown;
                    fromPartial(object: Partial<_19.SimulationResponse>): _19.SimulationResponse;
                    fromAmino(object: _19.SimulationResponseAmino): _19.SimulationResponse;
                    toAmino(message: _19.SimulationResponse): _19.SimulationResponseAmino;
                };
                MsgData: {
                    encode(message: _19.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgData;
                    fromJSON(object: any): _19.MsgData;
                    toJSON(message: _19.MsgData): unknown;
                    fromPartial(object: Partial<_19.MsgData>): _19.MsgData;
                    fromAmino(object: _19.MsgDataAmino): _19.MsgData;
                    toAmino(message: _19.MsgData): _19.MsgDataAmino;
                };
                TxMsgData: {
                    encode(message: _19.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.TxMsgData;
                    fromJSON(object: any): _19.TxMsgData;
                    toJSON(message: _19.TxMsgData): unknown;
                    fromPartial(object: Partial<_19.TxMsgData>): _19.TxMsgData;
                    fromAmino(object: _19.TxMsgDataAmino): _19.TxMsgData;
                    toAmino(message: _19.TxMsgData): _19.TxMsgDataAmino;
                };
                SearchTxsResult: {
                    encode(message: _19.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SearchTxsResult;
                    fromJSON(object: any): _19.SearchTxsResult;
                    toJSON(message: _19.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_19.SearchTxsResult>): _19.SearchTxsResult;
                    fromAmino(object: _19.SearchTxsResultAmino): _19.SearchTxsResult;
                    toAmino(message: _19.SearchTxsResult): _19.SearchTxsResultAmino;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _20.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Pairs;
                    fromJSON(object: any): _20.Pairs;
                    toJSON(message: _20.Pairs): unknown;
                    fromPartial(object: Partial<_20.Pairs>): _20.Pairs;
                    fromAmino(object: _20.PairsAmino): _20.Pairs;
                    toAmino(message: _20.Pairs): _20.PairsAmino;
                };
                Pair: {
                    encode(message: _20.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Pair;
                    fromJSON(object: any): _20.Pair;
                    toJSON(message: _20.Pair): unknown;
                    fromPartial(object: Partial<_20.Pair>): _20.Pair;
                    fromAmino(object: _20.PairAmino): _20.Pair;
                    toAmino(message: _20.Pair): _20.PairAmino;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _149.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _21.ConfigRequest): Promise<_21.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _21.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ConfigRequest;
                    fromJSON(_: any): _21.ConfigRequest;
                    toJSON(_: _21.ConfigRequest): unknown;
                    fromPartial(_: Partial<_21.ConfigRequest>): _21.ConfigRequest;
                    fromAmino(_: _21.ConfigRequestAmino): _21.ConfigRequest;
                    toAmino(_: _21.ConfigRequest): _21.ConfigRequestAmino;
                };
                ConfigResponse: {
                    encode(message: _21.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ConfigResponse;
                    fromJSON(object: any): _21.ConfigResponse;
                    toJSON(message: _21.ConfigResponse): unknown;
                    fromPartial(object: Partial<_21.ConfigResponse>): _21.ConfigResponse;
                    fromAmino(object: _21.ConfigResponseAmino): _21.ConfigResponse;
                    toAmino(message: _21.ConfigResponse): _21.ConfigResponseAmino;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _22.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.PageRequest;
                    fromJSON(object: any): _22.PageRequest;
                    toJSON(message: _22.PageRequest): unknown;
                    fromPartial(object: Partial<_22.PageRequest>): _22.PageRequest;
                    fromAmino(object: _22.PageRequestAmino): _22.PageRequest;
                    toAmino(message: _22.PageRequest): _22.PageRequestAmino;
                };
                PageResponse: {
                    encode(message: _22.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.PageResponse;
                    fromJSON(object: any): _22.PageResponse;
                    toJSON(message: _22.PageResponse): unknown;
                    fromPartial(object: Partial<_22.PageResponse>): _22.PageResponse;
                    fromAmino(object: _22.PageResponseAmino): _22.PageResponse;
                    toAmino(message: _22.PageResponse): _22.PageResponseAmino;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _23.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ListAllInterfacesRequest;
                    fromJSON(_: any): _23.ListAllInterfacesRequest;
                    toJSON(_: _23.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_23.ListAllInterfacesRequest>): _23.ListAllInterfacesRequest;
                    fromAmino(_: _23.ListAllInterfacesRequestAmino): _23.ListAllInterfacesRequest;
                    toAmino(_: _23.ListAllInterfacesRequest): _23.ListAllInterfacesRequestAmino;
                };
                ListAllInterfacesResponse: {
                    encode(message: _23.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ListAllInterfacesResponse;
                    fromJSON(object: any): _23.ListAllInterfacesResponse;
                    toJSON(message: _23.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_23.ListAllInterfacesResponse>): _23.ListAllInterfacesResponse;
                    fromAmino(object: _23.ListAllInterfacesResponseAmino): _23.ListAllInterfacesResponse;
                    toAmino(message: _23.ListAllInterfacesResponse): _23.ListAllInterfacesResponseAmino;
                };
                ListImplementationsRequest: {
                    encode(message: _23.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ListImplementationsRequest;
                    fromJSON(object: any): _23.ListImplementationsRequest;
                    toJSON(message: _23.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_23.ListImplementationsRequest>): _23.ListImplementationsRequest;
                    fromAmino(object: _23.ListImplementationsRequestAmino): _23.ListImplementationsRequest;
                    toAmino(message: _23.ListImplementationsRequest): _23.ListImplementationsRequestAmino;
                };
                ListImplementationsResponse: {
                    encode(message: _23.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ListImplementationsResponse;
                    fromJSON(object: any): _23.ListImplementationsResponse;
                    toJSON(message: _23.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_23.ListImplementationsResponse>): _23.ListImplementationsResponse;
                    fromAmino(object: _23.ListImplementationsResponseAmino): _23.ListImplementationsResponse;
                    toAmino(message: _23.ListImplementationsResponse): _23.ListImplementationsResponseAmino;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _24.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.AppDescriptor;
                    fromJSON(object: any): _24.AppDescriptor;
                    toJSON(message: _24.AppDescriptor): unknown;
                    fromPartial(object: Partial<_24.AppDescriptor>): _24.AppDescriptor;
                    fromAmino(object: _24.AppDescriptorAmino): _24.AppDescriptor;
                    toAmino(message: _24.AppDescriptor): _24.AppDescriptorAmino;
                };
                TxDescriptor: {
                    encode(message: _24.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.TxDescriptor;
                    fromJSON(object: any): _24.TxDescriptor;
                    toJSON(message: _24.TxDescriptor): unknown;
                    fromPartial(object: Partial<_24.TxDescriptor>): _24.TxDescriptor;
                    fromAmino(object: _24.TxDescriptorAmino): _24.TxDescriptor;
                    toAmino(message: _24.TxDescriptor): _24.TxDescriptorAmino;
                };
                AuthnDescriptor: {
                    encode(message: _24.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.AuthnDescriptor;
                    fromJSON(object: any): _24.AuthnDescriptor;
                    toJSON(message: _24.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_24.AuthnDescriptor>): _24.AuthnDescriptor;
                    fromAmino(object: _24.AuthnDescriptorAmino): _24.AuthnDescriptor;
                    toAmino(message: _24.AuthnDescriptor): _24.AuthnDescriptorAmino;
                };
                SigningModeDescriptor: {
                    encode(message: _24.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SigningModeDescriptor;
                    fromJSON(object: any): _24.SigningModeDescriptor;
                    toJSON(message: _24.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_24.SigningModeDescriptor>): _24.SigningModeDescriptor;
                    fromAmino(object: _24.SigningModeDescriptorAmino): _24.SigningModeDescriptor;
                    toAmino(message: _24.SigningModeDescriptor): _24.SigningModeDescriptorAmino;
                };
                ChainDescriptor: {
                    encode(message: _24.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ChainDescriptor;
                    fromJSON(object: any): _24.ChainDescriptor;
                    toJSON(message: _24.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_24.ChainDescriptor>): _24.ChainDescriptor;
                    fromAmino(object: _24.ChainDescriptorAmino): _24.ChainDescriptor;
                    toAmino(message: _24.ChainDescriptor): _24.ChainDescriptorAmino;
                };
                CodecDescriptor: {
                    encode(message: _24.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CodecDescriptor;
                    fromJSON(object: any): _24.CodecDescriptor;
                    toJSON(message: _24.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_24.CodecDescriptor>): _24.CodecDescriptor;
                    fromAmino(object: _24.CodecDescriptorAmino): _24.CodecDescriptor;
                    toAmino(message: _24.CodecDescriptor): _24.CodecDescriptorAmino;
                };
                InterfaceDescriptor: {
                    encode(message: _24.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.InterfaceDescriptor;
                    fromJSON(object: any): _24.InterfaceDescriptor;
                    toJSON(message: _24.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_24.InterfaceDescriptor>): _24.InterfaceDescriptor;
                    fromAmino(object: _24.InterfaceDescriptorAmino): _24.InterfaceDescriptor;
                    toAmino(message: _24.InterfaceDescriptor): _24.InterfaceDescriptorAmino;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _24.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _24.InterfaceImplementerDescriptor;
                    toJSON(message: _24.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_24.InterfaceImplementerDescriptor>): _24.InterfaceImplementerDescriptor;
                    fromAmino(object: _24.InterfaceImplementerDescriptorAmino): _24.InterfaceImplementerDescriptor;
                    toAmino(message: _24.InterfaceImplementerDescriptor): _24.InterfaceImplementerDescriptorAmino;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _24.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _24.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _24.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_24.InterfaceAcceptingMessageDescriptor>): _24.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _24.InterfaceAcceptingMessageDescriptorAmino): _24.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _24.InterfaceAcceptingMessageDescriptor): _24.InterfaceAcceptingMessageDescriptorAmino;
                };
                ConfigurationDescriptor: {
                    encode(message: _24.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ConfigurationDescriptor;
                    fromJSON(object: any): _24.ConfigurationDescriptor;
                    toJSON(message: _24.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_24.ConfigurationDescriptor>): _24.ConfigurationDescriptor;
                    fromAmino(object: _24.ConfigurationDescriptorAmino): _24.ConfigurationDescriptor;
                    toAmino(message: _24.ConfigurationDescriptor): _24.ConfigurationDescriptorAmino;
                };
                MsgDescriptor: {
                    encode(message: _24.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgDescriptor;
                    fromJSON(object: any): _24.MsgDescriptor;
                    toJSON(message: _24.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_24.MsgDescriptor>): _24.MsgDescriptor;
                    fromAmino(object: _24.MsgDescriptorAmino): _24.MsgDescriptor;
                    toAmino(message: _24.MsgDescriptor): _24.MsgDescriptorAmino;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _24.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _24.GetAuthnDescriptorRequest;
                    toJSON(_: _24.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetAuthnDescriptorRequest>): _24.GetAuthnDescriptorRequest;
                    fromAmino(_: _24.GetAuthnDescriptorRequestAmino): _24.GetAuthnDescriptorRequest;
                    toAmino(_: _24.GetAuthnDescriptorRequest): _24.GetAuthnDescriptorRequestAmino;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _24.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _24.GetAuthnDescriptorResponse;
                    toJSON(message: _24.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetAuthnDescriptorResponse>): _24.GetAuthnDescriptorResponse;
                    fromAmino(object: _24.GetAuthnDescriptorResponseAmino): _24.GetAuthnDescriptorResponse;
                    toAmino(message: _24.GetAuthnDescriptorResponse): _24.GetAuthnDescriptorResponseAmino;
                };
                GetChainDescriptorRequest: {
                    encode(_: _24.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetChainDescriptorRequest;
                    fromJSON(_: any): _24.GetChainDescriptorRequest;
                    toJSON(_: _24.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetChainDescriptorRequest>): _24.GetChainDescriptorRequest;
                    fromAmino(_: _24.GetChainDescriptorRequestAmino): _24.GetChainDescriptorRequest;
                    toAmino(_: _24.GetChainDescriptorRequest): _24.GetChainDescriptorRequestAmino;
                };
                GetChainDescriptorResponse: {
                    encode(message: _24.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetChainDescriptorResponse;
                    fromJSON(object: any): _24.GetChainDescriptorResponse;
                    toJSON(message: _24.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetChainDescriptorResponse>): _24.GetChainDescriptorResponse;
                    fromAmino(object: _24.GetChainDescriptorResponseAmino): _24.GetChainDescriptorResponse;
                    toAmino(message: _24.GetChainDescriptorResponse): _24.GetChainDescriptorResponseAmino;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _24.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetCodecDescriptorRequest;
                    fromJSON(_: any): _24.GetCodecDescriptorRequest;
                    toJSON(_: _24.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetCodecDescriptorRequest>): _24.GetCodecDescriptorRequest;
                    fromAmino(_: _24.GetCodecDescriptorRequestAmino): _24.GetCodecDescriptorRequest;
                    toAmino(_: _24.GetCodecDescriptorRequest): _24.GetCodecDescriptorRequestAmino;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _24.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetCodecDescriptorResponse;
                    fromJSON(object: any): _24.GetCodecDescriptorResponse;
                    toJSON(message: _24.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetCodecDescriptorResponse>): _24.GetCodecDescriptorResponse;
                    fromAmino(object: _24.GetCodecDescriptorResponseAmino): _24.GetCodecDescriptorResponse;
                    toAmino(message: _24.GetCodecDescriptorResponse): _24.GetCodecDescriptorResponseAmino;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _24.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _24.GetConfigurationDescriptorRequest;
                    toJSON(_: _24.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetConfigurationDescriptorRequest>): _24.GetConfigurationDescriptorRequest;
                    fromAmino(_: _24.GetConfigurationDescriptorRequestAmino): _24.GetConfigurationDescriptorRequest;
                    toAmino(_: _24.GetConfigurationDescriptorRequest): _24.GetConfigurationDescriptorRequestAmino;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _24.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _24.GetConfigurationDescriptorResponse;
                    toJSON(message: _24.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetConfigurationDescriptorResponse>): _24.GetConfigurationDescriptorResponse;
                    fromAmino(object: _24.GetConfigurationDescriptorResponseAmino): _24.GetConfigurationDescriptorResponse;
                    toAmino(message: _24.GetConfigurationDescriptorResponse): _24.GetConfigurationDescriptorResponseAmino;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _24.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _24.GetQueryServicesDescriptorRequest;
                    toJSON(_: _24.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetQueryServicesDescriptorRequest>): _24.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _24.GetQueryServicesDescriptorRequestAmino): _24.GetQueryServicesDescriptorRequest;
                    toAmino(_: _24.GetQueryServicesDescriptorRequest): _24.GetQueryServicesDescriptorRequestAmino;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _24.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _24.GetQueryServicesDescriptorResponse;
                    toJSON(message: _24.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetQueryServicesDescriptorResponse>): _24.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _24.GetQueryServicesDescriptorResponseAmino): _24.GetQueryServicesDescriptorResponse;
                    toAmino(message: _24.GetQueryServicesDescriptorResponse): _24.GetQueryServicesDescriptorResponseAmino;
                };
                GetTxDescriptorRequest: {
                    encode(_: _24.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetTxDescriptorRequest;
                    fromJSON(_: any): _24.GetTxDescriptorRequest;
                    toJSON(_: _24.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetTxDescriptorRequest>): _24.GetTxDescriptorRequest;
                    fromAmino(_: _24.GetTxDescriptorRequestAmino): _24.GetTxDescriptorRequest;
                    toAmino(_: _24.GetTxDescriptorRequest): _24.GetTxDescriptorRequestAmino;
                };
                GetTxDescriptorResponse: {
                    encode(message: _24.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetTxDescriptorResponse;
                    fromJSON(object: any): _24.GetTxDescriptorResponse;
                    toJSON(message: _24.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetTxDescriptorResponse>): _24.GetTxDescriptorResponse;
                    fromAmino(object: _24.GetTxDescriptorResponseAmino): _24.GetTxDescriptorResponse;
                    toAmino(message: _24.GetTxDescriptorResponse): _24.GetTxDescriptorResponseAmino;
                };
                QueryServicesDescriptor: {
                    encode(message: _24.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryServicesDescriptor;
                    fromJSON(object: any): _24.QueryServicesDescriptor;
                    toJSON(message: _24.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_24.QueryServicesDescriptor>): _24.QueryServicesDescriptor;
                    fromAmino(object: _24.QueryServicesDescriptorAmino): _24.QueryServicesDescriptor;
                    toAmino(message: _24.QueryServicesDescriptor): _24.QueryServicesDescriptorAmino;
                };
                QueryServiceDescriptor: {
                    encode(message: _24.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryServiceDescriptor;
                    fromJSON(object: any): _24.QueryServiceDescriptor;
                    toJSON(message: _24.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_24.QueryServiceDescriptor>): _24.QueryServiceDescriptor;
                    fromAmino(object: _24.QueryServiceDescriptorAmino): _24.QueryServiceDescriptor;
                    toAmino(message: _24.QueryServiceDescriptor): _24.QueryServiceDescriptorAmino;
                };
                QueryMethodDescriptor: {
                    encode(message: _24.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryMethodDescriptor;
                    fromJSON(object: any): _24.QueryMethodDescriptor;
                    toJSON(message: _24.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_24.QueryMethodDescriptor>): _24.QueryMethodDescriptor;
                    fromAmino(object: _24.QueryMethodDescriptorAmino): _24.QueryMethodDescriptor;
                    toAmino(message: _24.QueryMethodDescriptor): _24.QueryMethodDescriptorAmino;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _25.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Snapshot;
                    fromJSON(object: any): _25.Snapshot;
                    toJSON(message: _25.Snapshot): unknown;
                    fromPartial(object: Partial<_25.Snapshot>): _25.Snapshot;
                    fromAmino(object: _25.SnapshotAmino): _25.Snapshot;
                    toAmino(message: _25.Snapshot): _25.SnapshotAmino;
                };
                Metadata: {
                    encode(message: _25.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Metadata;
                    fromJSON(object: any): _25.Metadata;
                    toJSON(message: _25.Metadata): unknown;
                    fromPartial(object: Partial<_25.Metadata>): _25.Metadata;
                    fromAmino(object: _25.MetadataAmino): _25.Metadata;
                    toAmino(message: _25.Metadata): _25.MetadataAmino;
                };
                SnapshotItem: {
                    encode(message: _25.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SnapshotItem;
                    fromJSON(object: any): _25.SnapshotItem;
                    toJSON(message: _25.SnapshotItem): unknown;
                    fromPartial(object: Partial<_25.SnapshotItem>): _25.SnapshotItem;
                    fromAmino(object: _25.SnapshotItemAmino): _25.SnapshotItem;
                    toAmino(message: _25.SnapshotItem): _25.SnapshotItemAmino;
                };
                SnapshotStoreItem: {
                    encode(message: _25.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SnapshotStoreItem;
                    fromJSON(object: any): _25.SnapshotStoreItem;
                    toJSON(message: _25.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_25.SnapshotStoreItem>): _25.SnapshotStoreItem;
                    fromAmino(object: _25.SnapshotStoreItemAmino): _25.SnapshotStoreItem;
                    toAmino(message: _25.SnapshotStoreItem): _25.SnapshotStoreItemAmino;
                };
                SnapshotIAVLItem: {
                    encode(message: _25.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SnapshotIAVLItem;
                    fromJSON(object: any): _25.SnapshotIAVLItem;
                    toJSON(message: _25.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_25.SnapshotIAVLItem>): _25.SnapshotIAVLItem;
                    fromAmino(object: _25.SnapshotIAVLItemAmino): _25.SnapshotIAVLItem;
                    toAmino(message: _25.SnapshotIAVLItem): _25.SnapshotIAVLItemAmino;
                };
                SnapshotExtensionMeta: {
                    encode(message: _25.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SnapshotExtensionMeta;
                    fromJSON(object: any): _25.SnapshotExtensionMeta;
                    toJSON(message: _25.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_25.SnapshotExtensionMeta>): _25.SnapshotExtensionMeta;
                    fromAmino(object: _25.SnapshotExtensionMetaAmino): _25.SnapshotExtensionMeta;
                    toAmino(message: _25.SnapshotExtensionMeta): _25.SnapshotExtensionMetaAmino;
                };
                SnapshotExtensionPayload: {
                    encode(message: _25.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SnapshotExtensionPayload;
                    fromJSON(object: any): _25.SnapshotExtensionPayload;
                    toJSON(message: _25.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_25.SnapshotExtensionPayload>): _25.SnapshotExtensionPayload;
                    fromAmino(object: _25.SnapshotExtensionPayloadAmino): _25.SnapshotExtensionPayload;
                    toAmino(message: _25.SnapshotExtensionPayload): _25.SnapshotExtensionPayloadAmino;
                };
                SnapshotKVItem: {
                    encode(message: _25.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SnapshotKVItem;
                    fromJSON(object: any): _25.SnapshotKVItem;
                    toJSON(message: _25.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_25.SnapshotKVItem>): _25.SnapshotKVItem;
                    fromAmino(object: _25.SnapshotKVItemAmino): _25.SnapshotKVItem;
                    toAmino(message: _25.SnapshotKVItem): _25.SnapshotKVItemAmino;
                };
                SnapshotSchema: {
                    encode(message: _25.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SnapshotSchema;
                    fromJSON(object: any): _25.SnapshotSchema;
                    toJSON(message: _25.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_25.SnapshotSchema>): _25.SnapshotSchema;
                    fromAmino(object: _25.SnapshotSchemaAmino): _25.SnapshotSchema;
                    toAmino(message: _25.SnapshotSchema): _25.SnapshotSchemaAmino;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _27.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.StoreKVPair;
                    fromJSON(object: any): _27.StoreKVPair;
                    toJSON(message: _27.StoreKVPair): unknown;
                    fromPartial(object: Partial<_27.StoreKVPair>): _27.StoreKVPair;
                    fromAmino(object: _27.StoreKVPairAmino): _27.StoreKVPair;
                    toAmino(message: _27.StoreKVPair): _27.StoreKVPairAmino;
                };
                CommitInfo: {
                    encode(message: _26.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.CommitInfo;
                    fromJSON(object: any): _26.CommitInfo;
                    toJSON(message: _26.CommitInfo): unknown;
                    fromPartial(object: Partial<_26.CommitInfo>): _26.CommitInfo;
                    fromAmino(object: _26.CommitInfoAmino): _26.CommitInfo;
                    toAmino(message: _26.CommitInfo): _26.CommitInfoAmino;
                };
                StoreInfo: {
                    encode(message: _26.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.StoreInfo;
                    fromJSON(object: any): _26.StoreInfo;
                    toJSON(message: _26.StoreInfo): unknown;
                    fromPartial(object: Partial<_26.StoreInfo>): _26.StoreInfo;
                    fromAmino(object: _26.StoreInfoAmino): _26.StoreInfo;
                    toAmino(message: _26.StoreInfo): _26.StoreInfoAmino;
                };
                CommitID: {
                    encode(message: _26.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.CommitID;
                    fromJSON(object: any): _26.CommitID;
                    toJSON(message: _26.CommitID): unknown;
                    fromPartial(object: Partial<_26.CommitID>): _26.CommitID;
                    fromAmino(object: _26.CommitIDAmino): _26.CommitID;
                    toAmino(message: _26.CommitID): _26.CommitIDAmino;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _150.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _28.GetNodeInfoRequest): Promise<_28.GetNodeInfoResponse>;
                    getSyncing(request?: _28.GetSyncingRequest): Promise<_28.GetSyncingResponse>;
                    getLatestBlock(request?: _28.GetLatestBlockRequest): Promise<_28.GetLatestBlockResponse>;
                    getBlockByHeight(request: _28.GetBlockByHeightRequest): Promise<_28.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _28.GetLatestValidatorSetRequest): Promise<_28.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _28.GetValidatorSetByHeightRequest): Promise<_28.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _28.ABCIQueryRequest): Promise<_28.ABCIQueryResponse>;
                };
                Block: {
                    encode(message: _29.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Block;
                    fromJSON(object: any): _29.Block;
                    toJSON(message: _29.Block): unknown;
                    fromPartial(object: Partial<_29.Block>): _29.Block;
                    fromAmino(object: _29.BlockAmino): _29.Block;
                    toAmino(message: _29.Block): _29.BlockAmino;
                };
                Header: {
                    encode(message: _29.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Header;
                    fromJSON(object: any): _29.Header;
                    toJSON(message: _29.Header): unknown;
                    fromPartial(object: Partial<_29.Header>): _29.Header;
                    fromAmino(object: _29.HeaderAmino): _29.Header;
                    toAmino(message: _29.Header): _29.HeaderAmino;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _28.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _28.GetValidatorSetByHeightRequest;
                    toJSON(message: _28.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_28.GetValidatorSetByHeightRequest>): _28.GetValidatorSetByHeightRequest;
                    fromAmino(object: _28.GetValidatorSetByHeightRequestAmino): _28.GetValidatorSetByHeightRequest;
                    toAmino(message: _28.GetValidatorSetByHeightRequest): _28.GetValidatorSetByHeightRequestAmino;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _28.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _28.GetValidatorSetByHeightResponse;
                    toJSON(message: _28.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_28.GetValidatorSetByHeightResponse>): _28.GetValidatorSetByHeightResponse;
                    fromAmino(object: _28.GetValidatorSetByHeightResponseAmino): _28.GetValidatorSetByHeightResponse;
                    toAmino(message: _28.GetValidatorSetByHeightResponse): _28.GetValidatorSetByHeightResponseAmino;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _28.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _28.GetLatestValidatorSetRequest;
                    toJSON(message: _28.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_28.GetLatestValidatorSetRequest>): _28.GetLatestValidatorSetRequest;
                    fromAmino(object: _28.GetLatestValidatorSetRequestAmino): _28.GetLatestValidatorSetRequest;
                    toAmino(message: _28.GetLatestValidatorSetRequest): _28.GetLatestValidatorSetRequestAmino;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _28.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _28.GetLatestValidatorSetResponse;
                    toJSON(message: _28.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_28.GetLatestValidatorSetResponse>): _28.GetLatestValidatorSetResponse;
                    fromAmino(object: _28.GetLatestValidatorSetResponseAmino): _28.GetLatestValidatorSetResponse;
                    toAmino(message: _28.GetLatestValidatorSetResponse): _28.GetLatestValidatorSetResponseAmino;
                };
                Validator: {
                    encode(message: _28.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Validator;
                    fromJSON(object: any): _28.Validator;
                    toJSON(message: _28.Validator): unknown;
                    fromPartial(object: Partial<_28.Validator>): _28.Validator;
                    fromAmino(object: _28.ValidatorAmino): _28.Validator;
                    toAmino(message: _28.Validator): _28.ValidatorAmino;
                };
                GetBlockByHeightRequest: {
                    encode(message: _28.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetBlockByHeightRequest;
                    fromJSON(object: any): _28.GetBlockByHeightRequest;
                    toJSON(message: _28.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_28.GetBlockByHeightRequest>): _28.GetBlockByHeightRequest;
                    fromAmino(object: _28.GetBlockByHeightRequestAmino): _28.GetBlockByHeightRequest;
                    toAmino(message: _28.GetBlockByHeightRequest): _28.GetBlockByHeightRequestAmino;
                };
                GetBlockByHeightResponse: {
                    encode(message: _28.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetBlockByHeightResponse;
                    fromJSON(object: any): _28.GetBlockByHeightResponse;
                    toJSON(message: _28.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_28.GetBlockByHeightResponse>): _28.GetBlockByHeightResponse;
                    fromAmino(object: _28.GetBlockByHeightResponseAmino): _28.GetBlockByHeightResponse;
                    toAmino(message: _28.GetBlockByHeightResponse): _28.GetBlockByHeightResponseAmino;
                };
                GetLatestBlockRequest: {
                    encode(_: _28.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetLatestBlockRequest;
                    fromJSON(_: any): _28.GetLatestBlockRequest;
                    toJSON(_: _28.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_28.GetLatestBlockRequest>): _28.GetLatestBlockRequest;
                    fromAmino(_: _28.GetLatestBlockRequestAmino): _28.GetLatestBlockRequest;
                    toAmino(_: _28.GetLatestBlockRequest): _28.GetLatestBlockRequestAmino;
                };
                GetLatestBlockResponse: {
                    encode(message: _28.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetLatestBlockResponse;
                    fromJSON(object: any): _28.GetLatestBlockResponse;
                    toJSON(message: _28.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_28.GetLatestBlockResponse>): _28.GetLatestBlockResponse;
                    fromAmino(object: _28.GetLatestBlockResponseAmino): _28.GetLatestBlockResponse;
                    toAmino(message: _28.GetLatestBlockResponse): _28.GetLatestBlockResponseAmino;
                };
                GetSyncingRequest: {
                    encode(_: _28.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetSyncingRequest;
                    fromJSON(_: any): _28.GetSyncingRequest;
                    toJSON(_: _28.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_28.GetSyncingRequest>): _28.GetSyncingRequest;
                    fromAmino(_: _28.GetSyncingRequestAmino): _28.GetSyncingRequest;
                    toAmino(_: _28.GetSyncingRequest): _28.GetSyncingRequestAmino;
                };
                GetSyncingResponse: {
                    encode(message: _28.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetSyncingResponse;
                    fromJSON(object: any): _28.GetSyncingResponse;
                    toJSON(message: _28.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_28.GetSyncingResponse>): _28.GetSyncingResponse;
                    fromAmino(object: _28.GetSyncingResponseAmino): _28.GetSyncingResponse;
                    toAmino(message: _28.GetSyncingResponse): _28.GetSyncingResponseAmino;
                };
                GetNodeInfoRequest: {
                    encode(_: _28.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetNodeInfoRequest;
                    fromJSON(_: any): _28.GetNodeInfoRequest;
                    toJSON(_: _28.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_28.GetNodeInfoRequest>): _28.GetNodeInfoRequest;
                    fromAmino(_: _28.GetNodeInfoRequestAmino): _28.GetNodeInfoRequest;
                    toAmino(_: _28.GetNodeInfoRequest): _28.GetNodeInfoRequestAmino;
                };
                GetNodeInfoResponse: {
                    encode(message: _28.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetNodeInfoResponse;
                    fromJSON(object: any): _28.GetNodeInfoResponse;
                    toJSON(message: _28.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_28.GetNodeInfoResponse>): _28.GetNodeInfoResponse;
                    fromAmino(object: _28.GetNodeInfoResponseAmino): _28.GetNodeInfoResponse;
                    toAmino(message: _28.GetNodeInfoResponse): _28.GetNodeInfoResponseAmino;
                };
                VersionInfo: {
                    encode(message: _28.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.VersionInfo;
                    fromJSON(object: any): _28.VersionInfo;
                    toJSON(message: _28.VersionInfo): unknown;
                    fromPartial(object: Partial<_28.VersionInfo>): _28.VersionInfo;
                    fromAmino(object: _28.VersionInfoAmino): _28.VersionInfo;
                    toAmino(message: _28.VersionInfo): _28.VersionInfoAmino;
                };
                Module: {
                    encode(message: _28.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Module;
                    fromJSON(object: any): _28.Module;
                    toJSON(message: _28.Module): unknown;
                    fromPartial(object: Partial<_28.Module>): _28.Module;
                    fromAmino(object: _28.ModuleAmino): _28.Module;
                    toAmino(message: _28.Module): _28.ModuleAmino;
                };
                ABCIQueryRequest: {
                    encode(message: _28.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ABCIQueryRequest;
                    fromJSON(object: any): _28.ABCIQueryRequest;
                    toJSON(message: _28.ABCIQueryRequest): unknown;
                    fromPartial(object: Partial<_28.ABCIQueryRequest>): _28.ABCIQueryRequest;
                    fromAmino(object: _28.ABCIQueryRequestAmino): _28.ABCIQueryRequest;
                    toAmino(message: _28.ABCIQueryRequest): _28.ABCIQueryRequestAmino;
                };
                ABCIQueryResponse: {
                    encode(message: _28.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ABCIQueryResponse;
                    fromJSON(object: any): _28.ABCIQueryResponse;
                    toJSON(message: _28.ABCIQueryResponse): unknown;
                    fromPartial(object: Partial<_28.ABCIQueryResponse>): _28.ABCIQueryResponse;
                    fromAmino(object: _28.ABCIQueryResponseAmino): _28.ABCIQueryResponse;
                    toAmino(message: _28.ABCIQueryResponse): _28.ABCIQueryResponseAmino;
                };
                ProofOp: {
                    encode(message: _28.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ProofOp;
                    fromJSON(object: any): _28.ProofOp;
                    toJSON(message: _28.ProofOp): unknown;
                    fromPartial(object: Partial<_28.ProofOp>): _28.ProofOp;
                    fromAmino(object: _28.ProofOpAmino): _28.ProofOp;
                    toAmino(message: _28.ProofOp): _28.ProofOpAmino;
                };
                ProofOps: {
                    encode(message: _28.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ProofOps;
                    fromJSON(object: any): _28.ProofOps;
                    toJSON(message: _28.ProofOps): unknown;
                    fromPartial(object: Partial<_28.ProofOps>): _28.ProofOps;
                    fromAmino(object: _28.ProofOpsAmino): _28.ProofOps;
                    toAmino(message: _28.ProofOps): _28.ProofOpsAmino;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _30.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Coin;
                fromJSON(object: any): _30.Coin;
                toJSON(message: _30.Coin): unknown;
                fromPartial(object: Partial<_30.Coin>): _30.Coin;
                fromAmino(object: _30.CoinAmino): _30.Coin;
                toAmino(message: _30.Coin): _30.CoinAmino;
            };
            DecCoin: {
                encode(message: _30.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.DecCoin;
                fromJSON(object: any): _30.DecCoin;
                toJSON(message: _30.DecCoin): unknown;
                fromPartial(object: Partial<_30.DecCoin>): _30.DecCoin;
                fromAmino(object: _30.DecCoinAmino): _30.DecCoin;
                toAmino(message: _30.DecCoin): _30.DecCoinAmino;
            };
            IntProto: {
                encode(message: _30.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.IntProto;
                fromJSON(object: any): _30.IntProto;
                toJSON(message: _30.IntProto): unknown;
                fromPartial(object: Partial<_30.IntProto>): _30.IntProto;
                fromAmino(object: _30.IntProtoAmino): _30.IntProto;
                toAmino(message: _30.IntProto): _30.IntProtoAmino;
            };
            DecProto: {
                encode(message: _30.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.DecProto;
                fromJSON(object: any): _30.DecProto;
                toJSON(message: _30.DecProto): unknown;
                fromPartial(object: Partial<_30.DecProto>): _30.DecProto;
                fromAmino(object: _30.DecProtoAmino): _30.DecProto;
                toAmino(message: _30.DecProto): _30.DecProtoAmino;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _32.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GenesisOwners;
                fromJSON(object: any): _32.GenesisOwners;
                toJSON(message: _32.GenesisOwners): unknown;
                fromPartial(object: Partial<_32.GenesisOwners>): _32.GenesisOwners;
                fromAmino(object: _32.GenesisOwnersAmino): _32.GenesisOwners;
                toAmino(message: _32.GenesisOwners): _32.GenesisOwnersAmino;
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GenesisState;
                fromJSON(object: any): _32.GenesisState;
                toJSON(message: _32.GenesisState): unknown;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
            };
            Capability: {
                encode(message: _31.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Capability;
                fromJSON(object: any): _31.Capability;
                toJSON(message: _31.Capability): unknown;
                fromPartial(object: Partial<_31.Capability>): _31.Capability;
                fromAmino(object: _31.CapabilityAmino): _31.Capability;
                toAmino(message: _31.Capability): _31.CapabilityAmino;
            };
            Owner: {
                encode(message: _31.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Owner;
                fromJSON(object: any): _31.Owner;
                toJSON(message: _31.Owner): unknown;
                fromPartial(object: Partial<_31.Owner>): _31.Owner;
                fromAmino(object: _31.OwnerAmino): _31.Owner;
                toAmino(message: _31.Owner): _31.OwnerAmino;
            };
            CapabilityOwners: {
                encode(message: _31.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.CapabilityOwners;
                fromJSON(object: any): _31.CapabilityOwners;
                toJSON(message: _31.CapabilityOwners): unknown;
                fromPartial(object: Partial<_31.CapabilityOwners>): _31.CapabilityOwners;
                fromAmino(object: _31.CapabilityOwnersAmino): _31.CapabilityOwners;
                toAmino(message: _31.CapabilityOwners): _31.CapabilityOwnersAmino;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _166.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _34.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _34.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _34.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _34.MsgVerifyInvariant) => _34.MsgVerifyInvariantAmino;
                    fromAmino: (object: _34.MsgVerifyInvariantAmino) => _34.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _34.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgVerifyInvariant;
                fromJSON(object: any): _34.MsgVerifyInvariant;
                toJSON(message: _34.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_34.MsgVerifyInvariant>): _34.MsgVerifyInvariant;
                fromAmino(object: _34.MsgVerifyInvariantAmino): _34.MsgVerifyInvariant;
                toAmino(message: _34.MsgVerifyInvariant): _34.MsgVerifyInvariantAmino;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _34.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgVerifyInvariantResponse;
                fromJSON(_: any): _34.MsgVerifyInvariantResponse;
                toJSON(_: _34.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_34.MsgVerifyInvariantResponse>): _34.MsgVerifyInvariantResponse;
                fromAmino(_: _34.MsgVerifyInvariantResponseAmino): _34.MsgVerifyInvariantResponse;
                toAmino(_: _34.MsgVerifyInvariantResponse): _34.MsgVerifyInvariantResponseAmino;
            };
            GenesisState: {
                encode(message: _33.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GenesisState;
                fromJSON(object: any): _33.GenesisState;
                toJSON(message: _33.GenesisState): unknown;
                fromPartial(object: Partial<_33.GenesisState>): _33.GenesisState;
                fromAmino(object: _33.GenesisStateAmino): _33.GenesisState;
                toAmino(message: _33.GenesisState): _33.GenesisStateAmino;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _35.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.PubKey;
                fromJSON(object: any): _35.PubKey;
                toJSON(message: _35.PubKey): unknown;
                fromPartial(object: Partial<_35.PubKey>): _35.PubKey;
                fromAmino(object: _35.PubKeyAmino): _35.PubKey;
                toAmino(message: _35.PubKey): _35.PubKeyAmino;
            };
            PrivKey: {
                encode(message: _35.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.PrivKey;
                fromJSON(object: any): _35.PrivKey;
                toJSON(message: _35.PrivKey): unknown;
                fromPartial(object: Partial<_35.PrivKey>): _35.PrivKey;
                fromAmino(object: _35.PrivKeyAmino): _35.PrivKey;
                toAmino(message: _35.PrivKey): _35.PrivKeyAmino;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _36.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.BIP44Params;
                    fromJSON(object: any): _36.BIP44Params;
                    toJSON(message: _36.BIP44Params): unknown;
                    fromPartial(object: Partial<_36.BIP44Params>): _36.BIP44Params;
                    fromAmino(object: _36.BIP44ParamsAmino): _36.BIP44Params;
                    toAmino(message: _36.BIP44Params): _36.BIP44ParamsAmino;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _37.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Record;
                    fromJSON(object: any): _37.Record;
                    toJSON(message: _37.Record): unknown;
                    fromPartial(object: Partial<_37.Record>): _37.Record;
                    fromAmino(object: _37.RecordAmino): _37.Record;
                    toAmino(message: _37.Record): _37.RecordAmino;
                };
                Record_Local: {
                    encode(message: _37.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Record_Local;
                    fromJSON(object: any): _37.Record_Local;
                    toJSON(message: _37.Record_Local): unknown;
                    fromPartial(object: Partial<_37.Record_Local>): _37.Record_Local;
                    fromAmino(object: _37.Record_LocalAmino): _37.Record_Local;
                    toAmino(message: _37.Record_Local): _37.Record_LocalAmino;
                };
                Record_Ledger: {
                    encode(message: _37.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Record_Ledger;
                    fromJSON(object: any): _37.Record_Ledger;
                    toJSON(message: _37.Record_Ledger): unknown;
                    fromPartial(object: Partial<_37.Record_Ledger>): _37.Record_Ledger;
                    fromAmino(object: _37.Record_LedgerAmino): _37.Record_Ledger;
                    toAmino(message: _37.Record_Ledger): _37.Record_LedgerAmino;
                };
                Record_Multi: {
                    encode(_: _37.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Record_Multi;
                    fromJSON(_: any): _37.Record_Multi;
                    toJSON(_: _37.Record_Multi): unknown;
                    fromPartial(_: Partial<_37.Record_Multi>): _37.Record_Multi;
                    fromAmino(_: _37.Record_MultiAmino): _37.Record_Multi;
                    toAmino(_: _37.Record_Multi): _37.Record_MultiAmino;
                };
                Record_Offline: {
                    encode(_: _37.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Record_Offline;
                    fromJSON(_: any): _37.Record_Offline;
                    toJSON(_: _37.Record_Offline): unknown;
                    fromPartial(_: Partial<_37.Record_Offline>): _37.Record_Offline;
                    fromAmino(_: _37.Record_OfflineAmino): _37.Record_Offline;
                    toAmino(_: _37.Record_Offline): _37.Record_OfflineAmino;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _38.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.LegacyAminoPubKey;
                fromJSON(object: any): _38.LegacyAminoPubKey;
                toJSON(message: _38.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_38.LegacyAminoPubKey>): _38.LegacyAminoPubKey;
                fromAmino(object: _38.LegacyAminoPubKeyAmino): _38.LegacyAminoPubKey;
                toAmino(message: _38.LegacyAminoPubKey): _38.LegacyAminoPubKeyAmino;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _39.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.PubKey;
                fromJSON(object: any): _39.PubKey;
                toJSON(message: _39.PubKey): unknown;
                fromPartial(object: Partial<_39.PubKey>): _39.PubKey;
                fromAmino(object: _39.PubKeyAmino): _39.PubKey;
                toAmino(message: _39.PubKey): _39.PubKeyAmino;
            };
            PrivKey: {
                encode(message: _39.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.PrivKey;
                fromJSON(object: any): _39.PrivKey;
                toJSON(message: _39.PrivKey): unknown;
                fromPartial(object: Partial<_39.PrivKey>): _39.PrivKey;
                fromAmino(object: _39.PrivKeyAmino): _39.PrivKey;
                toAmino(message: _39.PrivKey): _39.PrivKeyAmino;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _40.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.PubKey;
                fromJSON(object: any): _40.PubKey;
                toJSON(message: _40.PubKey): unknown;
                fromPartial(object: Partial<_40.PubKey>): _40.PubKey;
                fromAmino(object: _40.PubKeyAmino): _40.PubKey;
                toAmino(message: _40.PubKey): _40.PubKeyAmino;
            };
            PrivKey: {
                encode(message: _40.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.PrivKey;
                fromJSON(object: any): _40.PrivKey;
                toJSON(message: _40.PrivKey): unknown;
                fromPartial(object: Partial<_40.PrivKey>): _40.PrivKey;
                fromAmino(object: _40.PrivKeyAmino): _40.PrivKey;
                toAmino(message: _40.PrivKey): _40.PrivKeyAmino;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _167.MsgClientImpl;
            QueryClientImpl: typeof _151.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                validatorOutstandingRewards(request: _43.QueryValidatorOutstandingRewardsRequest): Promise<_43.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _43.QueryValidatorCommissionRequest): Promise<_43.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _43.QueryValidatorSlashesRequest): Promise<_43.QueryValidatorSlashesResponse>;
                delegationRewards(request: _43.QueryDelegationRewardsRequest): Promise<_43.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _43.QueryDelegationTotalRewardsRequest): Promise<_43.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _43.QueryDelegatorValidatorsRequest): Promise<_43.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _43.QueryDelegatorWithdrawAddressRequest): Promise<_43.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _43.QueryCommunityPoolRequest): Promise<_43.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _44.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _44.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _44.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _44.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _44.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _44.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _44.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _44.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _44.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _44.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _44.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _44.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _44.MsgSetWithdrawAddress) => _44.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _44.MsgSetWithdrawAddressAmino) => _44.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _44.MsgWithdrawDelegatorReward) => _44.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _44.MsgWithdrawDelegatorRewardAmino) => _44.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _44.MsgWithdrawValidatorCommission) => _44.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _44.MsgWithdrawValidatorCommissionAmino) => _44.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _44.MsgFundCommunityPool) => _44.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _44.MsgFundCommunityPoolAmino) => _44.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _44.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetWithdrawAddress;
                fromJSON(object: any): _44.MsgSetWithdrawAddress;
                toJSON(message: _44.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_44.MsgSetWithdrawAddress>): _44.MsgSetWithdrawAddress;
                fromAmino(object: _44.MsgSetWithdrawAddressAmino): _44.MsgSetWithdrawAddress;
                toAmino(message: _44.MsgSetWithdrawAddress): _44.MsgSetWithdrawAddressAmino;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _44.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _44.MsgSetWithdrawAddressResponse;
                toJSON(_: _44.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_44.MsgSetWithdrawAddressResponse>): _44.MsgSetWithdrawAddressResponse;
                fromAmino(_: _44.MsgSetWithdrawAddressResponseAmino): _44.MsgSetWithdrawAddressResponse;
                toAmino(_: _44.MsgSetWithdrawAddressResponse): _44.MsgSetWithdrawAddressResponseAmino;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _44.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _44.MsgWithdrawDelegatorReward;
                toJSON(message: _44.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_44.MsgWithdrawDelegatorReward>): _44.MsgWithdrawDelegatorReward;
                fromAmino(object: _44.MsgWithdrawDelegatorRewardAmino): _44.MsgWithdrawDelegatorReward;
                toAmino(message: _44.MsgWithdrawDelegatorReward): _44.MsgWithdrawDelegatorRewardAmino;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _44.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _44.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _44.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_44.MsgWithdrawDelegatorRewardResponse>): _44.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _44.MsgWithdrawDelegatorRewardResponseAmino): _44.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _44.MsgWithdrawDelegatorRewardResponse): _44.MsgWithdrawDelegatorRewardResponseAmino;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _44.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _44.MsgWithdrawValidatorCommission;
                toJSON(message: _44.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_44.MsgWithdrawValidatorCommission>): _44.MsgWithdrawValidatorCommission;
                fromAmino(object: _44.MsgWithdrawValidatorCommissionAmino): _44.MsgWithdrawValidatorCommission;
                toAmino(message: _44.MsgWithdrawValidatorCommission): _44.MsgWithdrawValidatorCommissionAmino;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _44.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _44.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _44.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_44.MsgWithdrawValidatorCommissionResponse>): _44.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _44.MsgWithdrawValidatorCommissionResponseAmino): _44.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _44.MsgWithdrawValidatorCommissionResponse): _44.MsgWithdrawValidatorCommissionResponseAmino;
            };
            MsgFundCommunityPool: {
                encode(message: _44.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgFundCommunityPool;
                fromJSON(object: any): _44.MsgFundCommunityPool;
                toJSON(message: _44.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_44.MsgFundCommunityPool>): _44.MsgFundCommunityPool;
                fromAmino(object: _44.MsgFundCommunityPoolAmino): _44.MsgFundCommunityPool;
                toAmino(message: _44.MsgFundCommunityPool): _44.MsgFundCommunityPoolAmino;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _44.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _44.MsgFundCommunityPoolResponse;
                toJSON(_: _44.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_44.MsgFundCommunityPoolResponse>): _44.MsgFundCommunityPoolResponse;
                fromAmino(_: _44.MsgFundCommunityPoolResponseAmino): _44.MsgFundCommunityPoolResponse;
                toAmino(_: _44.MsgFundCommunityPoolResponse): _44.MsgFundCommunityPoolResponseAmino;
            };
            QueryParamsRequest: {
                encode(_: _43.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryParamsRequest;
                fromJSON(_: any): _43.QueryParamsRequest;
                toJSON(_: _43.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_43.QueryParamsRequest>): _43.QueryParamsRequest;
                fromAmino(_: _43.QueryParamsRequestAmino): _43.QueryParamsRequest;
                toAmino(_: _43.QueryParamsRequest): _43.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _43.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryParamsResponse;
                fromJSON(object: any): _43.QueryParamsResponse;
                toJSON(message: _43.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_43.QueryParamsResponse>): _43.QueryParamsResponse;
                fromAmino(object: _43.QueryParamsResponseAmino): _43.QueryParamsResponse;
                toAmino(message: _43.QueryParamsResponse): _43.QueryParamsResponseAmino;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _43.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _43.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _43.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_43.QueryValidatorOutstandingRewardsRequest>): _43.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _43.QueryValidatorOutstandingRewardsRequestAmino): _43.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _43.QueryValidatorOutstandingRewardsRequest): _43.QueryValidatorOutstandingRewardsRequestAmino;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _43.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _43.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _43.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_43.QueryValidatorOutstandingRewardsResponse>): _43.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _43.QueryValidatorOutstandingRewardsResponseAmino): _43.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _43.QueryValidatorOutstandingRewardsResponse): _43.QueryValidatorOutstandingRewardsResponseAmino;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _43.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorCommissionRequest;
                fromJSON(object: any): _43.QueryValidatorCommissionRequest;
                toJSON(message: _43.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_43.QueryValidatorCommissionRequest>): _43.QueryValidatorCommissionRequest;
                fromAmino(object: _43.QueryValidatorCommissionRequestAmino): _43.QueryValidatorCommissionRequest;
                toAmino(message: _43.QueryValidatorCommissionRequest): _43.QueryValidatorCommissionRequestAmino;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _43.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorCommissionResponse;
                fromJSON(object: any): _43.QueryValidatorCommissionResponse;
                toJSON(message: _43.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_43.QueryValidatorCommissionResponse>): _43.QueryValidatorCommissionResponse;
                fromAmino(object: _43.QueryValidatorCommissionResponseAmino): _43.QueryValidatorCommissionResponse;
                toAmino(message: _43.QueryValidatorCommissionResponse): _43.QueryValidatorCommissionResponseAmino;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _43.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorSlashesRequest;
                fromJSON(object: any): _43.QueryValidatorSlashesRequest;
                toJSON(message: _43.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_43.QueryValidatorSlashesRequest>): _43.QueryValidatorSlashesRequest;
                fromAmino(object: _43.QueryValidatorSlashesRequestAmino): _43.QueryValidatorSlashesRequest;
                toAmino(message: _43.QueryValidatorSlashesRequest): _43.QueryValidatorSlashesRequestAmino;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _43.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorSlashesResponse;
                fromJSON(object: any): _43.QueryValidatorSlashesResponse;
                toJSON(message: _43.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_43.QueryValidatorSlashesResponse>): _43.QueryValidatorSlashesResponse;
                fromAmino(object: _43.QueryValidatorSlashesResponseAmino): _43.QueryValidatorSlashesResponse;
                toAmino(message: _43.QueryValidatorSlashesResponse): _43.QueryValidatorSlashesResponseAmino;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _43.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegationRewardsRequest;
                fromJSON(object: any): _43.QueryDelegationRewardsRequest;
                toJSON(message: _43.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_43.QueryDelegationRewardsRequest>): _43.QueryDelegationRewardsRequest;
                fromAmino(object: _43.QueryDelegationRewardsRequestAmino): _43.QueryDelegationRewardsRequest;
                toAmino(message: _43.QueryDelegationRewardsRequest): _43.QueryDelegationRewardsRequestAmino;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _43.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegationRewardsResponse;
                fromJSON(object: any): _43.QueryDelegationRewardsResponse;
                toJSON(message: _43.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_43.QueryDelegationRewardsResponse>): _43.QueryDelegationRewardsResponse;
                fromAmino(object: _43.QueryDelegationRewardsResponseAmino): _43.QueryDelegationRewardsResponse;
                toAmino(message: _43.QueryDelegationRewardsResponse): _43.QueryDelegationRewardsResponseAmino;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _43.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _43.QueryDelegationTotalRewardsRequest;
                toJSON(message: _43.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_43.QueryDelegationTotalRewardsRequest>): _43.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _43.QueryDelegationTotalRewardsRequestAmino): _43.QueryDelegationTotalRewardsRequest;
                toAmino(message: _43.QueryDelegationTotalRewardsRequest): _43.QueryDelegationTotalRewardsRequestAmino;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _43.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _43.QueryDelegationTotalRewardsResponse;
                toJSON(message: _43.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_43.QueryDelegationTotalRewardsResponse>): _43.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _43.QueryDelegationTotalRewardsResponseAmino): _43.QueryDelegationTotalRewardsResponse;
                toAmino(message: _43.QueryDelegationTotalRewardsResponse): _43.QueryDelegationTotalRewardsResponseAmino;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _43.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _43.QueryDelegatorValidatorsRequest;
                toJSON(message: _43.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_43.QueryDelegatorValidatorsRequest>): _43.QueryDelegatorValidatorsRequest;
                fromAmino(object: _43.QueryDelegatorValidatorsRequestAmino): _43.QueryDelegatorValidatorsRequest;
                toAmino(message: _43.QueryDelegatorValidatorsRequest): _43.QueryDelegatorValidatorsRequestAmino;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _43.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _43.QueryDelegatorValidatorsResponse;
                toJSON(message: _43.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_43.QueryDelegatorValidatorsResponse>): _43.QueryDelegatorValidatorsResponse;
                fromAmino(object: _43.QueryDelegatorValidatorsResponseAmino): _43.QueryDelegatorValidatorsResponse;
                toAmino(message: _43.QueryDelegatorValidatorsResponse): _43.QueryDelegatorValidatorsResponseAmino;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _43.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _43.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _43.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_43.QueryDelegatorWithdrawAddressRequest>): _43.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _43.QueryDelegatorWithdrawAddressRequestAmino): _43.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _43.QueryDelegatorWithdrawAddressRequest): _43.QueryDelegatorWithdrawAddressRequestAmino;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _43.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _43.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _43.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_43.QueryDelegatorWithdrawAddressResponse>): _43.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _43.QueryDelegatorWithdrawAddressResponseAmino): _43.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _43.QueryDelegatorWithdrawAddressResponse): _43.QueryDelegatorWithdrawAddressResponseAmino;
            };
            QueryCommunityPoolRequest: {
                encode(_: _43.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryCommunityPoolRequest;
                fromJSON(_: any): _43.QueryCommunityPoolRequest;
                toJSON(_: _43.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_43.QueryCommunityPoolRequest>): _43.QueryCommunityPoolRequest;
                fromAmino(_: _43.QueryCommunityPoolRequestAmino): _43.QueryCommunityPoolRequest;
                toAmino(_: _43.QueryCommunityPoolRequest): _43.QueryCommunityPoolRequestAmino;
            };
            QueryCommunityPoolResponse: {
                encode(message: _43.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryCommunityPoolResponse;
                fromJSON(object: any): _43.QueryCommunityPoolResponse;
                toJSON(message: _43.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_43.QueryCommunityPoolResponse>): _43.QueryCommunityPoolResponse;
                fromAmino(object: _43.QueryCommunityPoolResponseAmino): _43.QueryCommunityPoolResponse;
                toAmino(message: _43.QueryCommunityPoolResponse): _43.QueryCommunityPoolResponseAmino;
            };
            DelegatorWithdrawInfo: {
                encode(message: _42.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.DelegatorWithdrawInfo;
                fromJSON(object: any): _42.DelegatorWithdrawInfo;
                toJSON(message: _42.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_42.DelegatorWithdrawInfo>): _42.DelegatorWithdrawInfo;
                fromAmino(object: _42.DelegatorWithdrawInfoAmino): _42.DelegatorWithdrawInfo;
                toAmino(message: _42.DelegatorWithdrawInfo): _42.DelegatorWithdrawInfoAmino;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _42.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _42.ValidatorOutstandingRewardsRecord;
                toJSON(message: _42.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorOutstandingRewardsRecord>): _42.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _42.ValidatorOutstandingRewardsRecordAmino): _42.ValidatorOutstandingRewardsRecord;
                toAmino(message: _42.ValidatorOutstandingRewardsRecord): _42.ValidatorOutstandingRewardsRecordAmino;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _42.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _42.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _42.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorAccumulatedCommissionRecord>): _42.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _42.ValidatorAccumulatedCommissionRecordAmino): _42.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _42.ValidatorAccumulatedCommissionRecord): _42.ValidatorAccumulatedCommissionRecordAmino;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _42.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _42.ValidatorHistoricalRewardsRecord;
                toJSON(message: _42.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorHistoricalRewardsRecord>): _42.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _42.ValidatorHistoricalRewardsRecordAmino): _42.ValidatorHistoricalRewardsRecord;
                toAmino(message: _42.ValidatorHistoricalRewardsRecord): _42.ValidatorHistoricalRewardsRecordAmino;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _42.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _42.ValidatorCurrentRewardsRecord;
                toJSON(message: _42.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorCurrentRewardsRecord>): _42.ValidatorCurrentRewardsRecord;
                fromAmino(object: _42.ValidatorCurrentRewardsRecordAmino): _42.ValidatorCurrentRewardsRecord;
                toAmino(message: _42.ValidatorCurrentRewardsRecord): _42.ValidatorCurrentRewardsRecordAmino;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _42.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.DelegatorStartingInfoRecord;
                fromJSON(object: any): _42.DelegatorStartingInfoRecord;
                toJSON(message: _42.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_42.DelegatorStartingInfoRecord>): _42.DelegatorStartingInfoRecord;
                fromAmino(object: _42.DelegatorStartingInfoRecordAmino): _42.DelegatorStartingInfoRecord;
                toAmino(message: _42.DelegatorStartingInfoRecord): _42.DelegatorStartingInfoRecordAmino;
            };
            ValidatorSlashEventRecord: {
                encode(message: _42.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ValidatorSlashEventRecord;
                fromJSON(object: any): _42.ValidatorSlashEventRecord;
                toJSON(message: _42.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorSlashEventRecord>): _42.ValidatorSlashEventRecord;
                fromAmino(object: _42.ValidatorSlashEventRecordAmino): _42.ValidatorSlashEventRecord;
                toAmino(message: _42.ValidatorSlashEventRecord): _42.ValidatorSlashEventRecordAmino;
            };
            GenesisState: {
                encode(message: _42.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GenesisState;
                fromJSON(object: any): _42.GenesisState;
                toJSON(message: _42.GenesisState): unknown;
                fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
                fromAmino(object: _42.GenesisStateAmino): _42.GenesisState;
                toAmino(message: _42.GenesisState): _42.GenesisStateAmino;
            };
            Params: {
                encode(message: _41.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Params;
                fromJSON(object: any): _41.Params;
                toJSON(message: _41.Params): unknown;
                fromPartial(object: Partial<_41.Params>): _41.Params;
                fromAmino(object: _41.ParamsAmino): _41.Params;
                toAmino(message: _41.Params): _41.ParamsAmino;
            };
            ValidatorHistoricalRewards: {
                encode(message: _41.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorHistoricalRewards;
                fromJSON(object: any): _41.ValidatorHistoricalRewards;
                toJSON(message: _41.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_41.ValidatorHistoricalRewards>): _41.ValidatorHistoricalRewards;
                fromAmino(object: _41.ValidatorHistoricalRewardsAmino): _41.ValidatorHistoricalRewards;
                toAmino(message: _41.ValidatorHistoricalRewards): _41.ValidatorHistoricalRewardsAmino;
            };
            ValidatorCurrentRewards: {
                encode(message: _41.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorCurrentRewards;
                fromJSON(object: any): _41.ValidatorCurrentRewards;
                toJSON(message: _41.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_41.ValidatorCurrentRewards>): _41.ValidatorCurrentRewards;
                fromAmino(object: _41.ValidatorCurrentRewardsAmino): _41.ValidatorCurrentRewards;
                toAmino(message: _41.ValidatorCurrentRewards): _41.ValidatorCurrentRewardsAmino;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _41.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorAccumulatedCommission;
                fromJSON(object: any): _41.ValidatorAccumulatedCommission;
                toJSON(message: _41.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_41.ValidatorAccumulatedCommission>): _41.ValidatorAccumulatedCommission;
                fromAmino(object: _41.ValidatorAccumulatedCommissionAmino): _41.ValidatorAccumulatedCommission;
                toAmino(message: _41.ValidatorAccumulatedCommission): _41.ValidatorAccumulatedCommissionAmino;
            };
            ValidatorOutstandingRewards: {
                encode(message: _41.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorOutstandingRewards;
                fromJSON(object: any): _41.ValidatorOutstandingRewards;
                toJSON(message: _41.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_41.ValidatorOutstandingRewards>): _41.ValidatorOutstandingRewards;
                fromAmino(object: _41.ValidatorOutstandingRewardsAmino): _41.ValidatorOutstandingRewards;
                toAmino(message: _41.ValidatorOutstandingRewards): _41.ValidatorOutstandingRewardsAmino;
            };
            ValidatorSlashEvent: {
                encode(message: _41.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorSlashEvent;
                fromJSON(object: any): _41.ValidatorSlashEvent;
                toJSON(message: _41.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_41.ValidatorSlashEvent>): _41.ValidatorSlashEvent;
                fromAmino(object: _41.ValidatorSlashEventAmino): _41.ValidatorSlashEvent;
                toAmino(message: _41.ValidatorSlashEvent): _41.ValidatorSlashEventAmino;
            };
            ValidatorSlashEvents: {
                encode(message: _41.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorSlashEvents;
                fromJSON(object: any): _41.ValidatorSlashEvents;
                toJSON(message: _41.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_41.ValidatorSlashEvents>): _41.ValidatorSlashEvents;
                fromAmino(object: _41.ValidatorSlashEventsAmino): _41.ValidatorSlashEvents;
                toAmino(message: _41.ValidatorSlashEvents): _41.ValidatorSlashEventsAmino;
            };
            FeePool: {
                encode(message: _41.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.FeePool;
                fromJSON(object: any): _41.FeePool;
                toJSON(message: _41.FeePool): unknown;
                fromPartial(object: Partial<_41.FeePool>): _41.FeePool;
                fromAmino(object: _41.FeePoolAmino): _41.FeePool;
                toAmino(message: _41.FeePool): _41.FeePoolAmino;
            };
            CommunityPoolSpendProposal: {
                encode(message: _41.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.CommunityPoolSpendProposal;
                fromJSON(object: any): _41.CommunityPoolSpendProposal;
                toJSON(message: _41.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_41.CommunityPoolSpendProposal>): _41.CommunityPoolSpendProposal;
                fromAmino(object: _41.CommunityPoolSpendProposalAmino): _41.CommunityPoolSpendProposal;
                toAmino(message: _41.CommunityPoolSpendProposal): _41.CommunityPoolSpendProposalAmino;
            };
            DelegatorStartingInfo: {
                encode(message: _41.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DelegatorStartingInfo;
                fromJSON(object: any): _41.DelegatorStartingInfo;
                toJSON(message: _41.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_41.DelegatorStartingInfo>): _41.DelegatorStartingInfo;
                fromAmino(object: _41.DelegatorStartingInfoAmino): _41.DelegatorStartingInfo;
                toAmino(message: _41.DelegatorStartingInfo): _41.DelegatorStartingInfoAmino;
            };
            DelegationDelegatorReward: {
                encode(message: _41.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DelegationDelegatorReward;
                fromJSON(object: any): _41.DelegationDelegatorReward;
                toJSON(message: _41.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_41.DelegationDelegatorReward>): _41.DelegationDelegatorReward;
                fromAmino(object: _41.DelegationDelegatorRewardAmino): _41.DelegationDelegatorReward;
                toAmino(message: _41.DelegationDelegatorReward): _41.DelegationDelegatorRewardAmino;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _41.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _41.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _41.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_41.CommunityPoolSpendProposalWithDeposit>): _41.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _41.CommunityPoolSpendProposalWithDepositAmino): _41.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _41.CommunityPoolSpendProposalWithDeposit): _41.CommunityPoolSpendProposalWithDepositAmino;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _168.MsgClientImpl;
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _47.QueryEvidenceRequest): Promise<_47.QueryEvidenceResponse>;
                allEvidence(request?: _47.QueryAllEvidenceRequest): Promise<_47.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _48.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _48.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _48.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _48.MsgSubmitEvidence) => _48.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _48.MsgSubmitEvidenceAmino) => _48.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _48.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgSubmitEvidence;
                fromJSON(object: any): _48.MsgSubmitEvidence;
                toJSON(message: _48.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_48.MsgSubmitEvidence>): _48.MsgSubmitEvidence;
                fromAmino(object: _48.MsgSubmitEvidenceAmino): _48.MsgSubmitEvidence;
                toAmino(message: _48.MsgSubmitEvidence): _48.MsgSubmitEvidenceAmino;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _48.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _48.MsgSubmitEvidenceResponse;
                toJSON(message: _48.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_48.MsgSubmitEvidenceResponse>): _48.MsgSubmitEvidenceResponse;
                fromAmino(object: _48.MsgSubmitEvidenceResponseAmino): _48.MsgSubmitEvidenceResponse;
                toAmino(message: _48.MsgSubmitEvidenceResponse): _48.MsgSubmitEvidenceResponseAmino;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                encode(message: _47.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryEvidenceRequest;
                fromJSON(object: any): _47.QueryEvidenceRequest;
                toJSON(message: _47.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_47.QueryEvidenceRequest>): _47.QueryEvidenceRequest;
                fromAmino(object: _47.QueryEvidenceRequestAmino): _47.QueryEvidenceRequest;
                toAmino(message: _47.QueryEvidenceRequest): _47.QueryEvidenceRequestAmino;
            };
            QueryEvidenceResponse: {
                encode(message: _47.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryEvidenceResponse;
                fromJSON(object: any): _47.QueryEvidenceResponse;
                toJSON(message: _47.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_47.QueryEvidenceResponse>): _47.QueryEvidenceResponse;
                fromAmino(object: _47.QueryEvidenceResponseAmino): _47.QueryEvidenceResponse;
                toAmino(message: _47.QueryEvidenceResponse): _47.QueryEvidenceResponseAmino;
            };
            QueryAllEvidenceRequest: {
                encode(message: _47.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllEvidenceRequest;
                fromJSON(object: any): _47.QueryAllEvidenceRequest;
                toJSON(message: _47.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_47.QueryAllEvidenceRequest>): _47.QueryAllEvidenceRequest;
                fromAmino(object: _47.QueryAllEvidenceRequestAmino): _47.QueryAllEvidenceRequest;
                toAmino(message: _47.QueryAllEvidenceRequest): _47.QueryAllEvidenceRequestAmino;
            };
            QueryAllEvidenceResponse: {
                encode(message: _47.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllEvidenceResponse;
                fromJSON(object: any): _47.QueryAllEvidenceResponse;
                toJSON(message: _47.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_47.QueryAllEvidenceResponse>): _47.QueryAllEvidenceResponse;
                fromAmino(object: _47.QueryAllEvidenceResponseAmino): _47.QueryAllEvidenceResponse;
                toAmino(message: _47.QueryAllEvidenceResponse): _47.QueryAllEvidenceResponseAmino;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
                fromJSON(object: any): _46.GenesisState;
                toJSON(message: _46.GenesisState): unknown;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
                fromAmino(object: _46.GenesisStateAmino): _46.GenesisState;
                toAmino(message: _46.GenesisState): _46.GenesisStateAmino;
            };
            Equivocation: {
                encode(message: _45.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Equivocation;
                fromJSON(object: any): _45.Equivocation;
                toJSON(message: _45.Equivocation): unknown;
                fromPartial(object: Partial<_45.Equivocation>): _45.Equivocation;
                fromAmino(object: _45.EquivocationAmino): _45.Equivocation;
                toAmino(message: _45.Equivocation): _45.EquivocationAmino;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _169.MsgClientImpl;
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _51.QueryAllowanceRequest): Promise<_51.QueryAllowanceResponse>;
                allowances(request: _51.QueryAllowancesRequest): Promise<_51.QueryAllowancesResponse>;
                allowancesByGranter(request: _51.QueryAllowancesByGranterRequest): Promise<_51.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _52.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _52.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _52.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _52.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _52.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _52.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _52.MsgGrantAllowance) => _52.MsgGrantAllowanceAmino;
                    fromAmino: (object: _52.MsgGrantAllowanceAmino) => _52.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _52.MsgRevokeAllowance) => _52.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _52.MsgRevokeAllowanceAmino) => _52.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _52.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgGrantAllowance;
                fromJSON(object: any): _52.MsgGrantAllowance;
                toJSON(message: _52.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_52.MsgGrantAllowance>): _52.MsgGrantAllowance;
                fromAmino(object: _52.MsgGrantAllowanceAmino): _52.MsgGrantAllowance;
                toAmino(message: _52.MsgGrantAllowance): _52.MsgGrantAllowanceAmino;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _52.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgGrantAllowanceResponse;
                fromJSON(_: any): _52.MsgGrantAllowanceResponse;
                toJSON(_: _52.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_52.MsgGrantAllowanceResponse>): _52.MsgGrantAllowanceResponse;
                fromAmino(_: _52.MsgGrantAllowanceResponseAmino): _52.MsgGrantAllowanceResponse;
                toAmino(_: _52.MsgGrantAllowanceResponse): _52.MsgGrantAllowanceResponseAmino;
            };
            MsgRevokeAllowance: {
                encode(message: _52.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgRevokeAllowance;
                fromJSON(object: any): _52.MsgRevokeAllowance;
                toJSON(message: _52.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_52.MsgRevokeAllowance>): _52.MsgRevokeAllowance;
                fromAmino(object: _52.MsgRevokeAllowanceAmino): _52.MsgRevokeAllowance;
                toAmino(message: _52.MsgRevokeAllowance): _52.MsgRevokeAllowanceAmino;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _52.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _52.MsgRevokeAllowanceResponse;
                toJSON(_: _52.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_52.MsgRevokeAllowanceResponse>): _52.MsgRevokeAllowanceResponse;
                fromAmino(_: _52.MsgRevokeAllowanceResponseAmino): _52.MsgRevokeAllowanceResponse;
                toAmino(_: _52.MsgRevokeAllowanceResponse): _52.MsgRevokeAllowanceResponseAmino;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _49.BasicAllowance | _49.PeriodicAllowance | _49.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino | {
                type: string;
                value: _49.BasicAllowanceAmino;
            } | {
                type: string;
                value: _49.PeriodicAllowanceAmino;
            } | {
                type: string;
                value: _49.AllowedMsgAllowanceAmino;
            };
            QueryAllowanceRequest: {
                encode(message: _51.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAllowanceRequest;
                fromJSON(object: any): _51.QueryAllowanceRequest;
                toJSON(message: _51.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_51.QueryAllowanceRequest>): _51.QueryAllowanceRequest;
                fromAmino(object: _51.QueryAllowanceRequestAmino): _51.QueryAllowanceRequest;
                toAmino(message: _51.QueryAllowanceRequest): _51.QueryAllowanceRequestAmino;
            };
            QueryAllowanceResponse: {
                encode(message: _51.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAllowanceResponse;
                fromJSON(object: any): _51.QueryAllowanceResponse;
                toJSON(message: _51.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_51.QueryAllowanceResponse>): _51.QueryAllowanceResponse;
                fromAmino(object: _51.QueryAllowanceResponseAmino): _51.QueryAllowanceResponse;
                toAmino(message: _51.QueryAllowanceResponse): _51.QueryAllowanceResponseAmino;
            };
            QueryAllowancesRequest: {
                encode(message: _51.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAllowancesRequest;
                fromJSON(object: any): _51.QueryAllowancesRequest;
                toJSON(message: _51.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_51.QueryAllowancesRequest>): _51.QueryAllowancesRequest;
                fromAmino(object: _51.QueryAllowancesRequestAmino): _51.QueryAllowancesRequest;
                toAmino(message: _51.QueryAllowancesRequest): _51.QueryAllowancesRequestAmino;
            };
            QueryAllowancesResponse: {
                encode(message: _51.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAllowancesResponse;
                fromJSON(object: any): _51.QueryAllowancesResponse;
                toJSON(message: _51.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_51.QueryAllowancesResponse>): _51.QueryAllowancesResponse;
                fromAmino(object: _51.QueryAllowancesResponseAmino): _51.QueryAllowancesResponse;
                toAmino(message: _51.QueryAllowancesResponse): _51.QueryAllowancesResponseAmino;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _51.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _51.QueryAllowancesByGranterRequest;
                toJSON(message: _51.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_51.QueryAllowancesByGranterRequest>): _51.QueryAllowancesByGranterRequest;
                fromAmino(object: _51.QueryAllowancesByGranterRequestAmino): _51.QueryAllowancesByGranterRequest;
                toAmino(message: _51.QueryAllowancesByGranterRequest): _51.QueryAllowancesByGranterRequestAmino;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _51.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _51.QueryAllowancesByGranterResponse;
                toJSON(message: _51.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_51.QueryAllowancesByGranterResponse>): _51.QueryAllowancesByGranterResponse;
                fromAmino(object: _51.QueryAllowancesByGranterResponseAmino): _51.QueryAllowancesByGranterResponse;
                toAmino(message: _51.QueryAllowancesByGranterResponse): _51.QueryAllowancesByGranterResponseAmino;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
                fromAmino(object: _50.GenesisStateAmino): _50.GenesisState;
                toAmino(message: _50.GenesisState): _50.GenesisStateAmino;
            };
            BasicAllowance: {
                encode(message: _49.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.BasicAllowance;
                fromJSON(object: any): _49.BasicAllowance;
                toJSON(message: _49.BasicAllowance): unknown;
                fromPartial(object: Partial<_49.BasicAllowance>): _49.BasicAllowance;
                fromAmino(object: _49.BasicAllowanceAmino): _49.BasicAllowance;
                toAmino(message: _49.BasicAllowance): _49.BasicAllowanceAmino;
            };
            PeriodicAllowance: {
                encode(message: _49.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.PeriodicAllowance;
                fromJSON(object: any): _49.PeriodicAllowance;
                toJSON(message: _49.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_49.PeriodicAllowance>): _49.PeriodicAllowance;
                fromAmino(object: _49.PeriodicAllowanceAmino): _49.PeriodicAllowance;
                toAmino(message: _49.PeriodicAllowance): _49.PeriodicAllowanceAmino;
            };
            AllowedMsgAllowance: {
                encode(message: _49.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.AllowedMsgAllowance;
                fromJSON(object: any): _49.AllowedMsgAllowance;
                toJSON(message: _49.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_49.AllowedMsgAllowance>): _49.AllowedMsgAllowance;
                fromAmino(object: _49.AllowedMsgAllowanceAmino): _49.AllowedMsgAllowance;
                toAmino(message: _49.AllowedMsgAllowance): _49.AllowedMsgAllowanceAmino;
            };
            Grant: {
                encode(message: _49.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Grant;
                fromJSON(object: any): _49.Grant;
                toJSON(message: _49.Grant): unknown;
                fromPartial(object: Partial<_49.Grant>): _49.Grant;
                fromAmino(object: _49.GrantAmino): _49.Grant;
                toAmino(message: _49.Grant): _49.GrantAmino;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _53.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GenesisState;
                fromJSON(object: any): _53.GenesisState;
                toJSON(message: _53.GenesisState): unknown;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
                fromAmino(object: _53.GenesisStateAmino): _53.GenesisState;
                toAmino(message: _53.GenesisState): _53.GenesisStateAmino;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _170.MsgClientImpl;
            QueryClientImpl: typeof _154.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _56.QueryProposalRequest): Promise<_56.QueryProposalResponse>;
                proposals(request: _56.QueryProposalsRequest): Promise<_56.QueryProposalsResponse>;
                vote(request: _56.QueryVoteRequest): Promise<_56.QueryVoteResponse>;
                votes(request: _56.QueryVotesRequest): Promise<_56.QueryVotesResponse>;
                params(request: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                deposit(request: _56.QueryDepositRequest): Promise<_56.QueryDepositResponse>;
                deposits(request: _56.QueryDepositsRequest): Promise<_56.QueryDepositsResponse>;
                tallyResult(request: _56.QueryTallyResultRequest): Promise<_56.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _57.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _57.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _57.MsgExecLegacyContent;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _57.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _57.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _57.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _57.MsgExecLegacyContent;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _57.MsgSubmitProposal) => _57.MsgSubmitProposalAmino;
                    fromAmino: (object: _57.MsgSubmitProposalAmino) => _57.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _57.MsgExecLegacyContent) => _57.MsgExecLegacyContentAmino;
                    fromAmino: (object: _57.MsgExecLegacyContentAmino) => _57.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _57.MsgVote) => _57.MsgVoteAmino;
                    fromAmino: (object: _57.MsgVoteAmino) => _57.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _57.MsgVoteWeighted) => _57.MsgVoteWeightedAmino;
                    fromAmino: (object: _57.MsgVoteWeightedAmino) => _57.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _57.MsgDeposit) => _57.MsgDepositAmino;
                    fromAmino: (object: _57.MsgDepositAmino) => _57.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _57.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgSubmitProposal;
                fromJSON(object: any): _57.MsgSubmitProposal;
                toJSON(message: _57.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_57.MsgSubmitProposal>): _57.MsgSubmitProposal;
                fromAmino(object: _57.MsgSubmitProposalAmino): _57.MsgSubmitProposal;
                toAmino(message: _57.MsgSubmitProposal): _57.MsgSubmitProposalAmino;
            };
            MsgSubmitProposalResponse: {
                encode(message: _57.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgSubmitProposalResponse;
                fromJSON(object: any): _57.MsgSubmitProposalResponse;
                toJSON(message: _57.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_57.MsgSubmitProposalResponse>): _57.MsgSubmitProposalResponse;
                fromAmino(object: _57.MsgSubmitProposalResponseAmino): _57.MsgSubmitProposalResponse;
                toAmino(message: _57.MsgSubmitProposalResponse): _57.MsgSubmitProposalResponseAmino;
            };
            MsgExecLegacyContent: {
                encode(message: _57.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgExecLegacyContent;
                fromJSON(object: any): _57.MsgExecLegacyContent;
                toJSON(message: _57.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_57.MsgExecLegacyContent>): _57.MsgExecLegacyContent;
                fromAmino(object: _57.MsgExecLegacyContentAmino): _57.MsgExecLegacyContent;
                toAmino(message: _57.MsgExecLegacyContent): _57.MsgExecLegacyContentAmino;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _57.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgExecLegacyContentResponse;
                fromJSON(_: any): _57.MsgExecLegacyContentResponse;
                toJSON(_: _57.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_57.MsgExecLegacyContentResponse>): _57.MsgExecLegacyContentResponse;
                fromAmino(_: _57.MsgExecLegacyContentResponseAmino): _57.MsgExecLegacyContentResponse;
                toAmino(_: _57.MsgExecLegacyContentResponse): _57.MsgExecLegacyContentResponseAmino;
            };
            MsgVote: {
                encode(message: _57.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgVote;
                fromJSON(object: any): _57.MsgVote;
                toJSON(message: _57.MsgVote): unknown;
                fromPartial(object: Partial<_57.MsgVote>): _57.MsgVote;
                fromAmino(object: _57.MsgVoteAmino): _57.MsgVote;
                toAmino(message: _57.MsgVote): _57.MsgVoteAmino;
            };
            MsgVoteResponse: {
                encode(_: _57.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgVoteResponse;
                fromJSON(_: any): _57.MsgVoteResponse;
                toJSON(_: _57.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_57.MsgVoteResponse>): _57.MsgVoteResponse;
                fromAmino(_: _57.MsgVoteResponseAmino): _57.MsgVoteResponse;
                toAmino(_: _57.MsgVoteResponse): _57.MsgVoteResponseAmino;
            };
            MsgVoteWeighted: {
                encode(message: _57.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgVoteWeighted;
                fromJSON(object: any): _57.MsgVoteWeighted;
                toJSON(message: _57.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_57.MsgVoteWeighted>): _57.MsgVoteWeighted;
                fromAmino(object: _57.MsgVoteWeightedAmino): _57.MsgVoteWeighted;
                toAmino(message: _57.MsgVoteWeighted): _57.MsgVoteWeightedAmino;
            };
            MsgVoteWeightedResponse: {
                encode(_: _57.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgVoteWeightedResponse;
                fromJSON(_: any): _57.MsgVoteWeightedResponse;
                toJSON(_: _57.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_57.MsgVoteWeightedResponse>): _57.MsgVoteWeightedResponse;
                fromAmino(_: _57.MsgVoteWeightedResponseAmino): _57.MsgVoteWeightedResponse;
                toAmino(_: _57.MsgVoteWeightedResponse): _57.MsgVoteWeightedResponseAmino;
            };
            MsgDeposit: {
                encode(message: _57.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgDeposit;
                fromJSON(object: any): _57.MsgDeposit;
                toJSON(message: _57.MsgDeposit): unknown;
                fromPartial(object: Partial<_57.MsgDeposit>): _57.MsgDeposit;
                fromAmino(object: _57.MsgDepositAmino): _57.MsgDeposit;
                toAmino(message: _57.MsgDeposit): _57.MsgDepositAmino;
            };
            MsgDepositResponse: {
                encode(_: _57.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgDepositResponse;
                fromJSON(_: any): _57.MsgDepositResponse;
                toJSON(_: _57.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_57.MsgDepositResponse>): _57.MsgDepositResponse;
                fromAmino(_: _57.MsgDepositResponseAmino): _57.MsgDepositResponse;
                toAmino(_: _57.MsgDepositResponse): _57.MsgDepositResponseAmino;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _41.CommunityPoolSpendProposal | _41.CommunityPoolSpendProposalWithDeposit | _79.ParameterChangeProposal | _95.SoftwareUpgradeProposal | _95.CancelSoftwareUpgradeProposal | _59.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino | {
                type: string;
                value: _59.TextProposalAmino;
            };
            QueryProposalRequest: {
                encode(message: _56.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryProposalRequest;
                fromJSON(object: any): _56.QueryProposalRequest;
                toJSON(message: _56.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_56.QueryProposalRequest>): _56.QueryProposalRequest;
                fromAmino(object: _56.QueryProposalRequestAmino): _56.QueryProposalRequest;
                toAmino(message: _56.QueryProposalRequest): _56.QueryProposalRequestAmino;
            };
            QueryProposalResponse: {
                encode(message: _56.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryProposalResponse;
                fromJSON(object: any): _56.QueryProposalResponse;
                toJSON(message: _56.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_56.QueryProposalResponse>): _56.QueryProposalResponse;
                fromAmino(object: _56.QueryProposalResponseAmino): _56.QueryProposalResponse;
                toAmino(message: _56.QueryProposalResponse): _56.QueryProposalResponseAmino;
            };
            QueryProposalsRequest: {
                encode(message: _56.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryProposalsRequest;
                fromJSON(object: any): _56.QueryProposalsRequest;
                toJSON(message: _56.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_56.QueryProposalsRequest>): _56.QueryProposalsRequest;
                fromAmino(object: _56.QueryProposalsRequestAmino): _56.QueryProposalsRequest;
                toAmino(message: _56.QueryProposalsRequest): _56.QueryProposalsRequestAmino;
            };
            QueryProposalsResponse: {
                encode(message: _56.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryProposalsResponse;
                fromJSON(object: any): _56.QueryProposalsResponse;
                toJSON(message: _56.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_56.QueryProposalsResponse>): _56.QueryProposalsResponse;
                fromAmino(object: _56.QueryProposalsResponseAmino): _56.QueryProposalsResponse;
                toAmino(message: _56.QueryProposalsResponse): _56.QueryProposalsResponseAmino;
            };
            QueryVoteRequest: {
                encode(message: _56.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryVoteRequest;
                fromJSON(object: any): _56.QueryVoteRequest;
                toJSON(message: _56.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_56.QueryVoteRequest>): _56.QueryVoteRequest;
                fromAmino(object: _56.QueryVoteRequestAmino): _56.QueryVoteRequest;
                toAmino(message: _56.QueryVoteRequest): _56.QueryVoteRequestAmino;
            };
            QueryVoteResponse: {
                encode(message: _56.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryVoteResponse;
                fromJSON(object: any): _56.QueryVoteResponse;
                toJSON(message: _56.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_56.QueryVoteResponse>): _56.QueryVoteResponse;
                fromAmino(object: _56.QueryVoteResponseAmino): _56.QueryVoteResponse;
                toAmino(message: _56.QueryVoteResponse): _56.QueryVoteResponseAmino;
            };
            QueryVotesRequest: {
                encode(message: _56.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryVotesRequest;
                fromJSON(object: any): _56.QueryVotesRequest;
                toJSON(message: _56.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_56.QueryVotesRequest>): _56.QueryVotesRequest;
                fromAmino(object: _56.QueryVotesRequestAmino): _56.QueryVotesRequest;
                toAmino(message: _56.QueryVotesRequest): _56.QueryVotesRequestAmino;
            };
            QueryVotesResponse: {
                encode(message: _56.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryVotesResponse;
                fromJSON(object: any): _56.QueryVotesResponse;
                toJSON(message: _56.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_56.QueryVotesResponse>): _56.QueryVotesResponse;
                fromAmino(object: _56.QueryVotesResponseAmino): _56.QueryVotesResponse;
                toAmino(message: _56.QueryVotesResponse): _56.QueryVotesResponseAmino;
            };
            QueryParamsRequest: {
                encode(message: _56.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsRequest;
                fromJSON(object: any): _56.QueryParamsRequest;
                toJSON(message: _56.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
                fromAmino(object: _56.QueryParamsRequestAmino): _56.QueryParamsRequest;
                toAmino(message: _56.QueryParamsRequest): _56.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _56.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsResponse;
                fromJSON(object: any): _56.QueryParamsResponse;
                toJSON(message: _56.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_56.QueryParamsResponse>): _56.QueryParamsResponse;
                fromAmino(object: _56.QueryParamsResponseAmino): _56.QueryParamsResponse;
                toAmino(message: _56.QueryParamsResponse): _56.QueryParamsResponseAmino;
            };
            QueryDepositRequest: {
                encode(message: _56.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDepositRequest;
                fromJSON(object: any): _56.QueryDepositRequest;
                toJSON(message: _56.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_56.QueryDepositRequest>): _56.QueryDepositRequest;
                fromAmino(object: _56.QueryDepositRequestAmino): _56.QueryDepositRequest;
                toAmino(message: _56.QueryDepositRequest): _56.QueryDepositRequestAmino;
            };
            QueryDepositResponse: {
                encode(message: _56.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDepositResponse;
                fromJSON(object: any): _56.QueryDepositResponse;
                toJSON(message: _56.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_56.QueryDepositResponse>): _56.QueryDepositResponse;
                fromAmino(object: _56.QueryDepositResponseAmino): _56.QueryDepositResponse;
                toAmino(message: _56.QueryDepositResponse): _56.QueryDepositResponseAmino;
            };
            QueryDepositsRequest: {
                encode(message: _56.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDepositsRequest;
                fromJSON(object: any): _56.QueryDepositsRequest;
                toJSON(message: _56.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_56.QueryDepositsRequest>): _56.QueryDepositsRequest;
                fromAmino(object: _56.QueryDepositsRequestAmino): _56.QueryDepositsRequest;
                toAmino(message: _56.QueryDepositsRequest): _56.QueryDepositsRequestAmino;
            };
            QueryDepositsResponse: {
                encode(message: _56.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDepositsResponse;
                fromJSON(object: any): _56.QueryDepositsResponse;
                toJSON(message: _56.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_56.QueryDepositsResponse>): _56.QueryDepositsResponse;
                fromAmino(object: _56.QueryDepositsResponseAmino): _56.QueryDepositsResponse;
                toAmino(message: _56.QueryDepositsResponse): _56.QueryDepositsResponseAmino;
            };
            QueryTallyResultRequest: {
                encode(message: _56.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryTallyResultRequest;
                fromJSON(object: any): _56.QueryTallyResultRequest;
                toJSON(message: _56.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_56.QueryTallyResultRequest>): _56.QueryTallyResultRequest;
                fromAmino(object: _56.QueryTallyResultRequestAmino): _56.QueryTallyResultRequest;
                toAmino(message: _56.QueryTallyResultRequest): _56.QueryTallyResultRequestAmino;
            };
            QueryTallyResultResponse: {
                encode(message: _56.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryTallyResultResponse;
                fromJSON(object: any): _56.QueryTallyResultResponse;
                toJSON(message: _56.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_56.QueryTallyResultResponse>): _56.QueryTallyResultResponse;
                fromAmino(object: _56.QueryTallyResultResponseAmino): _56.QueryTallyResultResponse;
                toAmino(message: _56.QueryTallyResultResponse): _56.QueryTallyResultResponseAmino;
            };
            voteOptionFromJSON(object: any): _55.VoteOption;
            voteOptionToJSON(object: _55.VoteOption): string;
            proposalStatusFromJSON(object: any): _55.ProposalStatus;
            proposalStatusToJSON(object: _55.ProposalStatus): string;
            VoteOption: typeof _55.VoteOption;
            VoteOptionSDKType: typeof _55.VoteOption;
            VoteOptionAmino: typeof _55.VoteOption;
            ProposalStatus: typeof _55.ProposalStatus;
            ProposalStatusSDKType: typeof _55.ProposalStatus;
            ProposalStatusAmino: typeof _55.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _55.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.WeightedVoteOption;
                fromJSON(object: any): _55.WeightedVoteOption;
                toJSON(message: _55.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_55.WeightedVoteOption>): _55.WeightedVoteOption;
                fromAmino(object: _55.WeightedVoteOptionAmino): _55.WeightedVoteOption;
                toAmino(message: _55.WeightedVoteOption): _55.WeightedVoteOptionAmino;
            };
            Deposit: {
                encode(message: _55.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Deposit;
                fromJSON(object: any): _55.Deposit;
                toJSON(message: _55.Deposit): unknown;
                fromPartial(object: Partial<_55.Deposit>): _55.Deposit;
                fromAmino(object: _55.DepositAmino): _55.Deposit;
                toAmino(message: _55.Deposit): _55.DepositAmino;
            };
            Proposal: {
                encode(message: _55.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Proposal;
                fromJSON(object: any): _55.Proposal;
                toJSON(message: _55.Proposal): unknown;
                fromPartial(object: Partial<_55.Proposal>): _55.Proposal;
                fromAmino(object: _55.ProposalAmino): _55.Proposal;
                toAmino(message: _55.Proposal): _55.ProposalAmino;
            };
            TallyResult: {
                encode(message: _55.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.TallyResult;
                fromJSON(object: any): _55.TallyResult;
                toJSON(message: _55.TallyResult): unknown;
                fromPartial(object: Partial<_55.TallyResult>): _55.TallyResult;
                fromAmino(object: _55.TallyResultAmino): _55.TallyResult;
                toAmino(message: _55.TallyResult): _55.TallyResultAmino;
            };
            Vote: {
                encode(message: _55.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Vote;
                fromJSON(object: any): _55.Vote;
                toJSON(message: _55.Vote): unknown;
                fromPartial(object: Partial<_55.Vote>): _55.Vote;
                fromAmino(object: _55.VoteAmino): _55.Vote;
                toAmino(message: _55.Vote): _55.VoteAmino;
            };
            DepositParams: {
                encode(message: _55.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.DepositParams;
                fromJSON(object: any): _55.DepositParams;
                toJSON(message: _55.DepositParams): unknown;
                fromPartial(object: Partial<_55.DepositParams>): _55.DepositParams;
                fromAmino(object: _55.DepositParamsAmino): _55.DepositParams;
                toAmino(message: _55.DepositParams): _55.DepositParamsAmino;
            };
            VotingParams: {
                encode(message: _55.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.VotingParams;
                fromJSON(object: any): _55.VotingParams;
                toJSON(message: _55.VotingParams): unknown;
                fromPartial(object: Partial<_55.VotingParams>): _55.VotingParams;
                fromAmino(object: _55.VotingParamsAmino): _55.VotingParams;
                toAmino(message: _55.VotingParams): _55.VotingParamsAmino;
            };
            TallyParams: {
                encode(message: _55.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.TallyParams;
                fromJSON(object: any): _55.TallyParams;
                toJSON(message: _55.TallyParams): unknown;
                fromPartial(object: Partial<_55.TallyParams>): _55.TallyParams;
                fromAmino(object: _55.TallyParamsAmino): _55.TallyParams;
                toAmino(message: _55.TallyParams): _55.TallyParamsAmino;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GenesisState;
                fromJSON(object: any): _54.GenesisState;
                toJSON(message: _54.GenesisState): unknown;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
                fromAmino(object: _54.GenesisStateAmino): _54.GenesisState;
                toAmino(message: _54.GenesisState): _54.GenesisStateAmino;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _171.MsgClientImpl;
            QueryClientImpl: typeof _155.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _60.QueryProposalRequest): Promise<_60.QueryProposalResponse>;
                proposals(request: _60.QueryProposalsRequest): Promise<_60.QueryProposalsResponse>;
                vote(request: _60.QueryVoteRequest): Promise<_60.QueryVoteResponse>;
                votes(request: _60.QueryVotesRequest): Promise<_60.QueryVotesResponse>;
                params(request: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                deposit(request: _60.QueryDepositRequest): Promise<_60.QueryDepositResponse>;
                deposits(request: _60.QueryDepositsRequest): Promise<_60.QueryDepositsResponse>;
                tallyResult(request: _60.QueryTallyResultRequest): Promise<_60.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _61.MsgVoteWeighted;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: _61.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _61.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _61.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _61.MsgVoteWeighted;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: _61.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _61.MsgSubmitProposal) => _61.MsgSubmitProposalAmino;
                    fromAmino: (object: _61.MsgSubmitProposalAmino) => _61.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _61.MsgVote) => _61.MsgVoteAmino;
                    fromAmino: (object: _61.MsgVoteAmino) => _61.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _61.MsgVoteWeighted) => _61.MsgVoteWeightedAmino;
                    fromAmino: (object: _61.MsgVoteWeightedAmino) => _61.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _61.MsgDeposit) => _61.MsgDepositAmino;
                    fromAmino: (object: _61.MsgDepositAmino) => _61.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _61.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgSubmitProposal;
                fromJSON(object: any): _61.MsgSubmitProposal;
                toJSON(message: _61.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_61.MsgSubmitProposal>): _61.MsgSubmitProposal;
                fromAmino(object: _61.MsgSubmitProposalAmino): _61.MsgSubmitProposal;
                toAmino(message: _61.MsgSubmitProposal): _61.MsgSubmitProposalAmino;
            };
            MsgSubmitProposalResponse: {
                encode(message: _61.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgSubmitProposalResponse;
                fromJSON(object: any): _61.MsgSubmitProposalResponse;
                toJSON(message: _61.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_61.MsgSubmitProposalResponse>): _61.MsgSubmitProposalResponse;
                fromAmino(object: _61.MsgSubmitProposalResponseAmino): _61.MsgSubmitProposalResponse;
                toAmino(message: _61.MsgSubmitProposalResponse): _61.MsgSubmitProposalResponseAmino;
            };
            MsgVote: {
                encode(message: _61.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgVote;
                fromJSON(object: any): _61.MsgVote;
                toJSON(message: _61.MsgVote): unknown;
                fromPartial(object: Partial<_61.MsgVote>): _61.MsgVote;
                fromAmino(object: _61.MsgVoteAmino): _61.MsgVote;
                toAmino(message: _61.MsgVote): _61.MsgVoteAmino;
            };
            MsgVoteResponse: {
                encode(_: _61.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgVoteResponse;
                fromJSON(_: any): _61.MsgVoteResponse;
                toJSON(_: _61.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_61.MsgVoteResponse>): _61.MsgVoteResponse;
                fromAmino(_: _61.MsgVoteResponseAmino): _61.MsgVoteResponse;
                toAmino(_: _61.MsgVoteResponse): _61.MsgVoteResponseAmino;
            };
            MsgVoteWeighted: {
                encode(message: _61.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgVoteWeighted;
                fromJSON(object: any): _61.MsgVoteWeighted;
                toJSON(message: _61.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_61.MsgVoteWeighted>): _61.MsgVoteWeighted;
                fromAmino(object: _61.MsgVoteWeightedAmino): _61.MsgVoteWeighted;
                toAmino(message: _61.MsgVoteWeighted): _61.MsgVoteWeightedAmino;
            };
            MsgVoteWeightedResponse: {
                encode(_: _61.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgVoteWeightedResponse;
                fromJSON(_: any): _61.MsgVoteWeightedResponse;
                toJSON(_: _61.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_61.MsgVoteWeightedResponse>): _61.MsgVoteWeightedResponse;
                fromAmino(_: _61.MsgVoteWeightedResponseAmino): _61.MsgVoteWeightedResponse;
                toAmino(_: _61.MsgVoteWeightedResponse): _61.MsgVoteWeightedResponseAmino;
            };
            MsgDeposit: {
                encode(message: _61.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgDeposit;
                fromJSON(object: any): _61.MsgDeposit;
                toJSON(message: _61.MsgDeposit): unknown;
                fromPartial(object: Partial<_61.MsgDeposit>): _61.MsgDeposit;
                fromAmino(object: _61.MsgDepositAmino): _61.MsgDeposit;
                toAmino(message: _61.MsgDeposit): _61.MsgDepositAmino;
            };
            MsgDepositResponse: {
                encode(_: _61.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgDepositResponse;
                fromJSON(_: any): _61.MsgDepositResponse;
                toJSON(_: _61.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_61.MsgDepositResponse>): _61.MsgDepositResponse;
                fromAmino(_: _61.MsgDepositResponseAmino): _61.MsgDepositResponse;
                toAmino(_: _61.MsgDepositResponse): _61.MsgDepositResponseAmino;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _41.CommunityPoolSpendProposal | _41.CommunityPoolSpendProposalWithDeposit | _79.ParameterChangeProposal | _95.SoftwareUpgradeProposal | _95.CancelSoftwareUpgradeProposal | _59.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino | {
                type: string;
                value: _59.TextProposalAmino;
            };
            QueryProposalRequest: {
                encode(message: _60.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalRequest;
                fromJSON(object: any): _60.QueryProposalRequest;
                toJSON(message: _60.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_60.QueryProposalRequest>): _60.QueryProposalRequest;
                fromAmino(object: _60.QueryProposalRequestAmino): _60.QueryProposalRequest;
                toAmino(message: _60.QueryProposalRequest): _60.QueryProposalRequestAmino;
            };
            QueryProposalResponse: {
                encode(message: _60.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalResponse;
                fromJSON(object: any): _60.QueryProposalResponse;
                toJSON(message: _60.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_60.QueryProposalResponse>): _60.QueryProposalResponse;
                fromAmino(object: _60.QueryProposalResponseAmino): _60.QueryProposalResponse;
                toAmino(message: _60.QueryProposalResponse): _60.QueryProposalResponseAmino;
            };
            QueryProposalsRequest: {
                encode(message: _60.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalsRequest;
                fromJSON(object: any): _60.QueryProposalsRequest;
                toJSON(message: _60.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_60.QueryProposalsRequest>): _60.QueryProposalsRequest;
                fromAmino(object: _60.QueryProposalsRequestAmino): _60.QueryProposalsRequest;
                toAmino(message: _60.QueryProposalsRequest): _60.QueryProposalsRequestAmino;
            };
            QueryProposalsResponse: {
                encode(message: _60.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalsResponse;
                fromJSON(object: any): _60.QueryProposalsResponse;
                toJSON(message: _60.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_60.QueryProposalsResponse>): _60.QueryProposalsResponse;
                fromAmino(object: _60.QueryProposalsResponseAmino): _60.QueryProposalsResponse;
                toAmino(message: _60.QueryProposalsResponse): _60.QueryProposalsResponseAmino;
            };
            QueryVoteRequest: {
                encode(message: _60.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVoteRequest;
                fromJSON(object: any): _60.QueryVoteRequest;
                toJSON(message: _60.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_60.QueryVoteRequest>): _60.QueryVoteRequest;
                fromAmino(object: _60.QueryVoteRequestAmino): _60.QueryVoteRequest;
                toAmino(message: _60.QueryVoteRequest): _60.QueryVoteRequestAmino;
            };
            QueryVoteResponse: {
                encode(message: _60.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVoteResponse;
                fromJSON(object: any): _60.QueryVoteResponse;
                toJSON(message: _60.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_60.QueryVoteResponse>): _60.QueryVoteResponse;
                fromAmino(object: _60.QueryVoteResponseAmino): _60.QueryVoteResponse;
                toAmino(message: _60.QueryVoteResponse): _60.QueryVoteResponseAmino;
            };
            QueryVotesRequest: {
                encode(message: _60.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVotesRequest;
                fromJSON(object: any): _60.QueryVotesRequest;
                toJSON(message: _60.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_60.QueryVotesRequest>): _60.QueryVotesRequest;
                fromAmino(object: _60.QueryVotesRequestAmino): _60.QueryVotesRequest;
                toAmino(message: _60.QueryVotesRequest): _60.QueryVotesRequestAmino;
            };
            QueryVotesResponse: {
                encode(message: _60.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVotesResponse;
                fromJSON(object: any): _60.QueryVotesResponse;
                toJSON(message: _60.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_60.QueryVotesResponse>): _60.QueryVotesResponse;
                fromAmino(object: _60.QueryVotesResponseAmino): _60.QueryVotesResponse;
                toAmino(message: _60.QueryVotesResponse): _60.QueryVotesResponseAmino;
            };
            QueryParamsRequest: {
                encode(message: _60.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryParamsRequest;
                fromJSON(object: any): _60.QueryParamsRequest;
                toJSON(message: _60.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_60.QueryParamsRequest>): _60.QueryParamsRequest;
                fromAmino(object: _60.QueryParamsRequestAmino): _60.QueryParamsRequest;
                toAmino(message: _60.QueryParamsRequest): _60.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _60.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryParamsResponse;
                fromJSON(object: any): _60.QueryParamsResponse;
                toJSON(message: _60.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_60.QueryParamsResponse>): _60.QueryParamsResponse;
                fromAmino(object: _60.QueryParamsResponseAmino): _60.QueryParamsResponse;
                toAmino(message: _60.QueryParamsResponse): _60.QueryParamsResponseAmino;
            };
            QueryDepositRequest: {
                encode(message: _60.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDepositRequest;
                fromJSON(object: any): _60.QueryDepositRequest;
                toJSON(message: _60.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_60.QueryDepositRequest>): _60.QueryDepositRequest;
                fromAmino(object: _60.QueryDepositRequestAmino): _60.QueryDepositRequest;
                toAmino(message: _60.QueryDepositRequest): _60.QueryDepositRequestAmino;
            };
            QueryDepositResponse: {
                encode(message: _60.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDepositResponse;
                fromJSON(object: any): _60.QueryDepositResponse;
                toJSON(message: _60.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_60.QueryDepositResponse>): _60.QueryDepositResponse;
                fromAmino(object: _60.QueryDepositResponseAmino): _60.QueryDepositResponse;
                toAmino(message: _60.QueryDepositResponse): _60.QueryDepositResponseAmino;
            };
            QueryDepositsRequest: {
                encode(message: _60.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDepositsRequest;
                fromJSON(object: any): _60.QueryDepositsRequest;
                toJSON(message: _60.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_60.QueryDepositsRequest>): _60.QueryDepositsRequest;
                fromAmino(object: _60.QueryDepositsRequestAmino): _60.QueryDepositsRequest;
                toAmino(message: _60.QueryDepositsRequest): _60.QueryDepositsRequestAmino;
            };
            QueryDepositsResponse: {
                encode(message: _60.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDepositsResponse;
                fromJSON(object: any): _60.QueryDepositsResponse;
                toJSON(message: _60.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_60.QueryDepositsResponse>): _60.QueryDepositsResponse;
                fromAmino(object: _60.QueryDepositsResponseAmino): _60.QueryDepositsResponse;
                toAmino(message: _60.QueryDepositsResponse): _60.QueryDepositsResponseAmino;
            };
            QueryTallyResultRequest: {
                encode(message: _60.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryTallyResultRequest;
                fromJSON(object: any): _60.QueryTallyResultRequest;
                toJSON(message: _60.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_60.QueryTallyResultRequest>): _60.QueryTallyResultRequest;
                fromAmino(object: _60.QueryTallyResultRequestAmino): _60.QueryTallyResultRequest;
                toAmino(message: _60.QueryTallyResultRequest): _60.QueryTallyResultRequestAmino;
            };
            QueryTallyResultResponse: {
                encode(message: _60.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryTallyResultResponse;
                fromJSON(object: any): _60.QueryTallyResultResponse;
                toJSON(message: _60.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_60.QueryTallyResultResponse>): _60.QueryTallyResultResponse;
                fromAmino(object: _60.QueryTallyResultResponseAmino): _60.QueryTallyResultResponse;
                toAmino(message: _60.QueryTallyResultResponse): _60.QueryTallyResultResponseAmino;
            };
            voteOptionFromJSON(object: any): _59.VoteOption;
            voteOptionToJSON(object: _59.VoteOption): string;
            proposalStatusFromJSON(object: any): _59.ProposalStatus;
            proposalStatusToJSON(object: _59.ProposalStatus): string;
            VoteOption: typeof _59.VoteOption;
            VoteOptionSDKType: typeof _59.VoteOption;
            VoteOptionAmino: typeof _59.VoteOption;
            ProposalStatus: typeof _59.ProposalStatus;
            ProposalStatusSDKType: typeof _59.ProposalStatus;
            ProposalStatusAmino: typeof _59.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _59.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.WeightedVoteOption;
                fromJSON(object: any): _59.WeightedVoteOption;
                toJSON(message: _59.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_59.WeightedVoteOption>): _59.WeightedVoteOption;
                fromAmino(object: _59.WeightedVoteOptionAmino): _59.WeightedVoteOption;
                toAmino(message: _59.WeightedVoteOption): _59.WeightedVoteOptionAmino;
            };
            TextProposal: {
                encode(message: _59.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.TextProposal;
                fromJSON(object: any): _59.TextProposal;
                toJSON(message: _59.TextProposal): unknown;
                fromPartial(object: Partial<_59.TextProposal>): _59.TextProposal;
                fromAmino(object: _59.TextProposalAmino): _59.TextProposal;
                toAmino(message: _59.TextProposal): _59.TextProposalAmino;
            };
            Deposit: {
                encode(message: _59.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Deposit;
                fromJSON(object: any): _59.Deposit;
                toJSON(message: _59.Deposit): unknown;
                fromPartial(object: Partial<_59.Deposit>): _59.Deposit;
                fromAmino(object: _59.DepositAmino): _59.Deposit;
                toAmino(message: _59.Deposit): _59.DepositAmino;
            };
            Proposal: {
                encode(message: _59.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Proposal;
                fromJSON(object: any): _59.Proposal;
                toJSON(message: _59.Proposal): unknown;
                fromPartial(object: Partial<_59.Proposal>): _59.Proposal;
                fromAmino(object: _59.ProposalAmino): _59.Proposal;
                toAmino(message: _59.Proposal): _59.ProposalAmino;
            };
            TallyResult: {
                encode(message: _59.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.TallyResult;
                fromJSON(object: any): _59.TallyResult;
                toJSON(message: _59.TallyResult): unknown;
                fromPartial(object: Partial<_59.TallyResult>): _59.TallyResult;
                fromAmino(object: _59.TallyResultAmino): _59.TallyResult;
                toAmino(message: _59.TallyResult): _59.TallyResultAmino;
            };
            Vote: {
                encode(message: _59.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Vote;
                fromJSON(object: any): _59.Vote;
                toJSON(message: _59.Vote): unknown;
                fromPartial(object: Partial<_59.Vote>): _59.Vote;
                fromAmino(object: _59.VoteAmino): _59.Vote;
                toAmino(message: _59.Vote): _59.VoteAmino;
            };
            DepositParams: {
                encode(message: _59.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.DepositParams;
                fromJSON(object: any): _59.DepositParams;
                toJSON(message: _59.DepositParams): unknown;
                fromPartial(object: Partial<_59.DepositParams>): _59.DepositParams;
                fromAmino(object: _59.DepositParamsAmino): _59.DepositParams;
                toAmino(message: _59.DepositParams): _59.DepositParamsAmino;
            };
            VotingParams: {
                encode(message: _59.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.VotingParams;
                fromJSON(object: any): _59.VotingParams;
                toJSON(message: _59.VotingParams): unknown;
                fromPartial(object: Partial<_59.VotingParams>): _59.VotingParams;
                fromAmino(object: _59.VotingParamsAmino): _59.VotingParams;
                toAmino(message: _59.VotingParams): _59.VotingParamsAmino;
            };
            TallyParams: {
                encode(message: _59.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.TallyParams;
                fromJSON(object: any): _59.TallyParams;
                toJSON(message: _59.TallyParams): unknown;
                fromPartial(object: Partial<_59.TallyParams>): _59.TallyParams;
                fromAmino(object: _59.TallyParamsAmino): _59.TallyParams;
                toAmino(message: _59.TallyParams): _59.TallyParamsAmino;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GenesisState;
                fromJSON(object: any): _58.GenesisState;
                toJSON(message: _58.GenesisState): unknown;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
                fromAmino(object: _58.GenesisStateAmino): _58.GenesisState;
                toAmino(message: _58.GenesisState): _58.GenesisStateAmino;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            QueryClientImpl: typeof _156.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _64.QueryGroupInfoRequest): Promise<_64.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _64.QueryGroupPolicyInfoRequest): Promise<_64.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _64.QueryGroupMembersRequest): Promise<_64.QueryGroupMembersResponse>;
                groupsByAdmin(request: _64.QueryGroupsByAdminRequest): Promise<_64.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _64.QueryGroupPoliciesByGroupRequest): Promise<_64.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _64.QueryGroupPoliciesByAdminRequest): Promise<_64.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _64.QueryProposalRequest): Promise<_64.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _64.QueryProposalsByGroupPolicyRequest): Promise<_64.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _64.QueryVoteByProposalVoterRequest): Promise<_64.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _64.QueryVotesByProposalRequest): Promise<_64.QueryVotesByProposalResponse>;
                votesByVoter(request: _64.QueryVotesByVoterRequest): Promise<_64.QueryVotesByVoterResponse>;
                groupsByMember(request: _64.QueryGroupsByMemberRequest): Promise<_64.QueryGroupsByMemberResponse>;
                tallyResult(request: _64.QueryTallyResultRequest): Promise<_64.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _65.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _65.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _65.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _65.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _65.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _65.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _65.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _65.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _65.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _65.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _65.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _65.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _65.MsgCreateGroup): {
                        typeUrl: string;
                        value: _65.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _65.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _65.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _65.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _65.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _65.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _65.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _65.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _65.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _65.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _65.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _65.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _65.MsgWithdrawProposal;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    exec(value: _65.MsgExec): {
                        typeUrl: string;
                        value: _65.MsgExec;
                    };
                    leaveGroup(value: _65.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _65.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _65.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _65.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _65.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _65.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _65.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _65.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _65.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _65.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _65.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _65.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _65.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _65.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _65.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _65.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _65.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _65.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _65.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _65.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _65.MsgCreateGroup): {
                        typeUrl: string;
                        value: _65.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _65.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _65.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _65.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _65.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _65.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _65.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _65.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _65.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _65.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _65.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _65.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _65.MsgWithdrawProposal;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    exec(value: _65.MsgExec): {
                        typeUrl: string;
                        value: _65.MsgExec;
                    };
                    leaveGroup(value: _65.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _65.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _65.MsgCreateGroup) => _65.MsgCreateGroupAmino;
                    fromAmino: (object: _65.MsgCreateGroupAmino) => _65.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _65.MsgUpdateGroupMembers) => _65.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _65.MsgUpdateGroupMembersAmino) => _65.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _65.MsgUpdateGroupAdmin) => _65.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _65.MsgUpdateGroupAdminAmino) => _65.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _65.MsgUpdateGroupMetadata) => _65.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _65.MsgUpdateGroupMetadataAmino) => _65.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _65.MsgCreateGroupPolicy) => _65.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _65.MsgCreateGroupPolicyAmino) => _65.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _65.MsgCreateGroupWithPolicy) => _65.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _65.MsgCreateGroupWithPolicyAmino) => _65.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _65.MsgUpdateGroupPolicyAdmin) => _65.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _65.MsgUpdateGroupPolicyAdminAmino) => _65.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _65.MsgUpdateGroupPolicyDecisionPolicy) => _65.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _65.MsgUpdateGroupPolicyDecisionPolicyAmino) => _65.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _65.MsgUpdateGroupPolicyMetadata) => _65.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _65.MsgUpdateGroupPolicyMetadataAmino) => _65.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSubmitProposal) => _65.MsgSubmitProposalAmino;
                    fromAmino: (object: _65.MsgSubmitProposalAmino) => _65.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _65.MsgWithdrawProposal) => _65.MsgWithdrawProposalAmino;
                    fromAmino: (object: _65.MsgWithdrawProposalAmino) => _65.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _65.MsgVote) => _65.MsgVoteAmino;
                    fromAmino: (object: _65.MsgVoteAmino) => _65.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _65.MsgExec) => _65.MsgExecAmino;
                    fromAmino: (object: _65.MsgExecAmino) => _65.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _65.MsgLeaveGroup) => _65.MsgLeaveGroupAmino;
                    fromAmino: (object: _65.MsgLeaveGroupAmino) => _65.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _66.VoteOption;
            voteOptionToJSON(object: _66.VoteOption): string;
            proposalStatusFromJSON(object: any): _66.ProposalStatus;
            proposalStatusToJSON(object: _66.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _66.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _66.ProposalExecutorResult): string;
            VoteOption: typeof _66.VoteOption;
            VoteOptionSDKType: typeof _66.VoteOption;
            VoteOptionAmino: typeof _66.VoteOption;
            ProposalStatus: typeof _66.ProposalStatus;
            ProposalStatusSDKType: typeof _66.ProposalStatus;
            ProposalStatusAmino: typeof _66.ProposalStatus;
            ProposalExecutorResult: typeof _66.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _66.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _66.ProposalExecutorResult;
            Member: {
                encode(message: _66.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Member;
                fromJSON(object: any): _66.Member;
                toJSON(message: _66.Member): unknown;
                fromPartial(object: Partial<_66.Member>): _66.Member;
                fromAmino(object: _66.MemberAmino): _66.Member;
                toAmino(message: _66.Member): _66.MemberAmino;
            };
            MemberRequest: {
                encode(message: _66.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MemberRequest;
                fromJSON(object: any): _66.MemberRequest;
                toJSON(message: _66.MemberRequest): unknown;
                fromPartial(object: Partial<_66.MemberRequest>): _66.MemberRequest;
                fromAmino(object: _66.MemberRequestAmino): _66.MemberRequest;
                toAmino(message: _66.MemberRequest): _66.MemberRequestAmino;
            };
            ThresholdDecisionPolicy: {
                encode(message: _66.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ThresholdDecisionPolicy;
                fromJSON(object: any): _66.ThresholdDecisionPolicy;
                toJSON(message: _66.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_66.ThresholdDecisionPolicy>): _66.ThresholdDecisionPolicy;
                fromAmino(object: _66.ThresholdDecisionPolicyAmino): _66.ThresholdDecisionPolicy;
                toAmino(message: _66.ThresholdDecisionPolicy): _66.ThresholdDecisionPolicyAmino;
            };
            PercentageDecisionPolicy: {
                encode(message: _66.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.PercentageDecisionPolicy;
                fromJSON(object: any): _66.PercentageDecisionPolicy;
                toJSON(message: _66.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_66.PercentageDecisionPolicy>): _66.PercentageDecisionPolicy;
                fromAmino(object: _66.PercentageDecisionPolicyAmino): _66.PercentageDecisionPolicy;
                toAmino(message: _66.PercentageDecisionPolicy): _66.PercentageDecisionPolicyAmino;
            };
            DecisionPolicyWindows: {
                encode(message: _66.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.DecisionPolicyWindows;
                fromJSON(object: any): _66.DecisionPolicyWindows;
                toJSON(message: _66.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_66.DecisionPolicyWindows>): _66.DecisionPolicyWindows;
                fromAmino(object: _66.DecisionPolicyWindowsAmino): _66.DecisionPolicyWindows;
                toAmino(message: _66.DecisionPolicyWindows): _66.DecisionPolicyWindowsAmino;
            };
            GroupInfo: {
                encode(message: _66.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GroupInfo;
                fromJSON(object: any): _66.GroupInfo;
                toJSON(message: _66.GroupInfo): unknown;
                fromPartial(object: Partial<_66.GroupInfo>): _66.GroupInfo;
                fromAmino(object: _66.GroupInfoAmino): _66.GroupInfo;
                toAmino(message: _66.GroupInfo): _66.GroupInfoAmino;
            };
            GroupMember: {
                encode(message: _66.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GroupMember;
                fromJSON(object: any): _66.GroupMember;
                toJSON(message: _66.GroupMember): unknown;
                fromPartial(object: Partial<_66.GroupMember>): _66.GroupMember;
                fromAmino(object: _66.GroupMemberAmino): _66.GroupMember;
                toAmino(message: _66.GroupMember): _66.GroupMemberAmino;
            };
            GroupPolicyInfo: {
                encode(message: _66.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GroupPolicyInfo;
                fromJSON(object: any): _66.GroupPolicyInfo;
                toJSON(message: _66.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_66.GroupPolicyInfo>): _66.GroupPolicyInfo;
                fromAmino(object: _66.GroupPolicyInfoAmino): _66.GroupPolicyInfo;
                toAmino(message: _66.GroupPolicyInfo): _66.GroupPolicyInfoAmino;
            };
            Proposal: {
                encode(message: _66.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Proposal;
                fromJSON(object: any): _66.Proposal;
                toJSON(message: _66.Proposal): unknown;
                fromPartial(object: Partial<_66.Proposal>): _66.Proposal;
                fromAmino(object: _66.ProposalAmino): _66.Proposal;
                toAmino(message: _66.Proposal): _66.ProposalAmino;
            };
            TallyResult: {
                encode(message: _66.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.TallyResult;
                fromJSON(object: any): _66.TallyResult;
                toJSON(message: _66.TallyResult): unknown;
                fromPartial(object: Partial<_66.TallyResult>): _66.TallyResult;
                fromAmino(object: _66.TallyResultAmino): _66.TallyResult;
                toAmino(message: _66.TallyResult): _66.TallyResultAmino;
            };
            Vote: {
                encode(message: _66.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Vote;
                fromJSON(object: any): _66.Vote;
                toJSON(message: _66.Vote): unknown;
                fromPartial(object: Partial<_66.Vote>): _66.Vote;
                fromAmino(object: _66.VoteAmino): _66.Vote;
                toAmino(message: _66.Vote): _66.VoteAmino;
            };
            DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _66.ThresholdDecisionPolicy | _66.PercentageDecisionPolicy;
            DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino | {
                type: string;
                value: _66.ThresholdDecisionPolicyAmino;
            } | {
                type: string;
                value: _66.PercentageDecisionPolicyAmino;
            };
            execFromJSON(object: any): _65.Exec;
            execToJSON(object: _65.Exec): string;
            Exec: typeof _65.Exec;
            ExecSDKType: typeof _65.Exec;
            ExecAmino: typeof _65.Exec;
            MsgCreateGroup: {
                encode(message: _65.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgCreateGroup;
                fromJSON(object: any): _65.MsgCreateGroup;
                toJSON(message: _65.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroup>): _65.MsgCreateGroup;
                fromAmino(object: _65.MsgCreateGroupAmino): _65.MsgCreateGroup;
                toAmino(message: _65.MsgCreateGroup): _65.MsgCreateGroupAmino;
            };
            MsgCreateGroupResponse: {
                encode(message: _65.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgCreateGroupResponse;
                fromJSON(object: any): _65.MsgCreateGroupResponse;
                toJSON(message: _65.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupResponse>): _65.MsgCreateGroupResponse;
                fromAmino(object: _65.MsgCreateGroupResponseAmino): _65.MsgCreateGroupResponse;
                toAmino(message: _65.MsgCreateGroupResponse): _65.MsgCreateGroupResponseAmino;
            };
            MsgUpdateGroupMembers: {
                encode(message: _65.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateGroupMembers;
                fromJSON(object: any): _65.MsgUpdateGroupMembers;
                toJSON(message: _65.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupMembers>): _65.MsgUpdateGroupMembers;
                fromAmino(object: _65.MsgUpdateGroupMembersAmino): _65.MsgUpdateGroupMembers;
                toAmino(message: _65.MsgUpdateGroupMembers): _65.MsgUpdateGroupMembersAmino;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _65.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _65.MsgUpdateGroupMembersResponse;
                toJSON(_: _65.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupMembersResponse>): _65.MsgUpdateGroupMembersResponse;
                fromAmino(_: _65.MsgUpdateGroupMembersResponseAmino): _65.MsgUpdateGroupMembersResponse;
                toAmino(_: _65.MsgUpdateGroupMembersResponse): _65.MsgUpdateGroupMembersResponseAmino;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _65.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateGroupAdmin;
                fromJSON(object: any): _65.MsgUpdateGroupAdmin;
                toJSON(message: _65.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupAdmin>): _65.MsgUpdateGroupAdmin;
                fromAmino(object: _65.MsgUpdateGroupAdminAmino): _65.MsgUpdateGroupAdmin;
                toAmino(message: _65.MsgUpdateGroupAdmin): _65.MsgUpdateGroupAdminAmino;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _65.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _65.MsgUpdateGroupAdminResponse;
                toJSON(_: _65.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupAdminResponse>): _65.MsgUpdateGroupAdminResponse;
                fromAmino(_: _65.MsgUpdateGroupAdminResponseAmino): _65.MsgUpdateGroupAdminResponse;
                toAmino(_: _65.MsgUpdateGroupAdminResponse): _65.MsgUpdateGroupAdminResponseAmino;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _65.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateGroupMetadata;
                fromJSON(object: any): _65.MsgUpdateGroupMetadata;
                toJSON(message: _65.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupMetadata>): _65.MsgUpdateGroupMetadata;
                fromAmino(object: _65.MsgUpdateGroupMetadataAmino): _65.MsgUpdateGroupMetadata;
                toAmino(message: _65.MsgUpdateGroupMetadata): _65.MsgUpdateGroupMetadataAmino;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _65.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _65.MsgUpdateGroupMetadataResponse;
                toJSON(_: _65.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupMetadataResponse>): _65.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _65.MsgUpdateGroupMetadataResponseAmino): _65.MsgUpdateGroupMetadataResponse;
                toAmino(_: _65.MsgUpdateGroupMetadataResponse): _65.MsgUpdateGroupMetadataResponseAmino;
            };
            MsgCreateGroupPolicy: {
                encode(message: _65.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgCreateGroupPolicy;
                fromJSON(object: any): _65.MsgCreateGroupPolicy;
                toJSON(message: _65.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupPolicy>): _65.MsgCreateGroupPolicy;
                fromAmino(object: _65.MsgCreateGroupPolicyAmino): _65.MsgCreateGroupPolicy;
                toAmino(message: _65.MsgCreateGroupPolicy): _65.MsgCreateGroupPolicyAmino;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _65.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _65.MsgCreateGroupPolicyResponse;
                toJSON(message: _65.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupPolicyResponse>): _65.MsgCreateGroupPolicyResponse;
                fromAmino(object: _65.MsgCreateGroupPolicyResponseAmino): _65.MsgCreateGroupPolicyResponse;
                toAmino(message: _65.MsgCreateGroupPolicyResponse): _65.MsgCreateGroupPolicyResponseAmino;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _65.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _65.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _65.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupPolicyAdmin>): _65.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _65.MsgUpdateGroupPolicyAdminAmino): _65.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _65.MsgUpdateGroupPolicyAdmin): _65.MsgUpdateGroupPolicyAdminAmino;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _65.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _65.MsgCreateGroupWithPolicy;
                toJSON(message: _65.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupWithPolicy>): _65.MsgCreateGroupWithPolicy;
                fromAmino(object: _65.MsgCreateGroupWithPolicyAmino): _65.MsgCreateGroupWithPolicy;
                toAmino(message: _65.MsgCreateGroupWithPolicy): _65.MsgCreateGroupWithPolicyAmino;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _65.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _65.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _65.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupWithPolicyResponse>): _65.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _65.MsgCreateGroupWithPolicyResponseAmino): _65.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _65.MsgCreateGroupWithPolicyResponse): _65.MsgCreateGroupWithPolicyResponseAmino;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _65.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _65.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _65.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupPolicyAdminResponse>): _65.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _65.MsgUpdateGroupPolicyAdminResponseAmino): _65.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _65.MsgUpdateGroupPolicyAdminResponse): _65.MsgUpdateGroupPolicyAdminResponseAmino;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _65.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _65.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _65.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupPolicyDecisionPolicy>): _65.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _65.MsgUpdateGroupPolicyDecisionPolicyAmino): _65.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _65.MsgUpdateGroupPolicyDecisionPolicy): _65.MsgUpdateGroupPolicyDecisionPolicyAmino;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _65.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _65.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _65.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupPolicyDecisionPolicyResponse>): _65.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _65.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _65.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _65.MsgUpdateGroupPolicyDecisionPolicyResponse): _65.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _65.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _65.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _65.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupPolicyMetadata>): _65.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _65.MsgUpdateGroupPolicyMetadataAmino): _65.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _65.MsgUpdateGroupPolicyMetadata): _65.MsgUpdateGroupPolicyMetadataAmino;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _65.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _65.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _65.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupPolicyMetadataResponse>): _65.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _65.MsgUpdateGroupPolicyMetadataResponseAmino): _65.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _65.MsgUpdateGroupPolicyMetadataResponse): _65.MsgUpdateGroupPolicyMetadataResponseAmino;
            };
            MsgSubmitProposal: {
                encode(message: _65.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgSubmitProposal;
                fromJSON(object: any): _65.MsgSubmitProposal;
                toJSON(message: _65.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_65.MsgSubmitProposal>): _65.MsgSubmitProposal;
                fromAmino(object: _65.MsgSubmitProposalAmino): _65.MsgSubmitProposal;
                toAmino(message: _65.MsgSubmitProposal): _65.MsgSubmitProposalAmino;
            };
            MsgSubmitProposalResponse: {
                encode(message: _65.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgSubmitProposalResponse;
                fromJSON(object: any): _65.MsgSubmitProposalResponse;
                toJSON(message: _65.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_65.MsgSubmitProposalResponse>): _65.MsgSubmitProposalResponse;
                fromAmino(object: _65.MsgSubmitProposalResponseAmino): _65.MsgSubmitProposalResponse;
                toAmino(message: _65.MsgSubmitProposalResponse): _65.MsgSubmitProposalResponseAmino;
            };
            MsgWithdrawProposal: {
                encode(message: _65.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgWithdrawProposal;
                fromJSON(object: any): _65.MsgWithdrawProposal;
                toJSON(message: _65.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_65.MsgWithdrawProposal>): _65.MsgWithdrawProposal;
                fromAmino(object: _65.MsgWithdrawProposalAmino): _65.MsgWithdrawProposal;
                toAmino(message: _65.MsgWithdrawProposal): _65.MsgWithdrawProposalAmino;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _65.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgWithdrawProposalResponse;
                fromJSON(_: any): _65.MsgWithdrawProposalResponse;
                toJSON(_: _65.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_65.MsgWithdrawProposalResponse>): _65.MsgWithdrawProposalResponse;
                fromAmino(_: _65.MsgWithdrawProposalResponseAmino): _65.MsgWithdrawProposalResponse;
                toAmino(_: _65.MsgWithdrawProposalResponse): _65.MsgWithdrawProposalResponseAmino;
            };
            MsgVote: {
                encode(message: _65.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgVote;
                fromJSON(object: any): _65.MsgVote;
                toJSON(message: _65.MsgVote): unknown;
                fromPartial(object: Partial<_65.MsgVote>): _65.MsgVote;
                fromAmino(object: _65.MsgVoteAmino): _65.MsgVote;
                toAmino(message: _65.MsgVote): _65.MsgVoteAmino;
            };
            MsgVoteResponse: {
                encode(_: _65.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgVoteResponse;
                fromJSON(_: any): _65.MsgVoteResponse;
                toJSON(_: _65.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_65.MsgVoteResponse>): _65.MsgVoteResponse;
                fromAmino(_: _65.MsgVoteResponseAmino): _65.MsgVoteResponse;
                toAmino(_: _65.MsgVoteResponse): _65.MsgVoteResponseAmino;
            };
            MsgExec: {
                encode(message: _65.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgExec;
                fromJSON(object: any): _65.MsgExec;
                toJSON(message: _65.MsgExec): unknown;
                fromPartial(object: Partial<_65.MsgExec>): _65.MsgExec;
                fromAmino(object: _65.MsgExecAmino): _65.MsgExec;
                toAmino(message: _65.MsgExec): _65.MsgExecAmino;
            };
            MsgExecResponse: {
                encode(message: _65.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgExecResponse;
                fromJSON(object: any): _65.MsgExecResponse;
                toJSON(message: _65.MsgExecResponse): unknown;
                fromPartial(object: Partial<_65.MsgExecResponse>): _65.MsgExecResponse;
                fromAmino(object: _65.MsgExecResponseAmino): _65.MsgExecResponse;
                toAmino(message: _65.MsgExecResponse): _65.MsgExecResponseAmino;
            };
            MsgLeaveGroup: {
                encode(message: _65.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgLeaveGroup;
                fromJSON(object: any): _65.MsgLeaveGroup;
                toJSON(message: _65.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_65.MsgLeaveGroup>): _65.MsgLeaveGroup;
                fromAmino(object: _65.MsgLeaveGroupAmino): _65.MsgLeaveGroup;
                toAmino(message: _65.MsgLeaveGroup): _65.MsgLeaveGroupAmino;
            };
            MsgLeaveGroupResponse: {
                encode(_: _65.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgLeaveGroupResponse;
                fromJSON(_: any): _65.MsgLeaveGroupResponse;
                toJSON(_: _65.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_65.MsgLeaveGroupResponse>): _65.MsgLeaveGroupResponse;
                fromAmino(_: _65.MsgLeaveGroupResponseAmino): _65.MsgLeaveGroupResponse;
                toAmino(_: _65.MsgLeaveGroupResponse): _65.MsgLeaveGroupResponseAmino;
            };
            QueryGroupInfoRequest: {
                encode(message: _64.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupInfoRequest;
                fromJSON(object: any): _64.QueryGroupInfoRequest;
                toJSON(message: _64.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupInfoRequest>): _64.QueryGroupInfoRequest;
                fromAmino(object: _64.QueryGroupInfoRequestAmino): _64.QueryGroupInfoRequest;
                toAmino(message: _64.QueryGroupInfoRequest): _64.QueryGroupInfoRequestAmino;
            };
            QueryGroupInfoResponse: {
                encode(message: _64.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupInfoResponse;
                fromJSON(object: any): _64.QueryGroupInfoResponse;
                toJSON(message: _64.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupInfoResponse>): _64.QueryGroupInfoResponse;
                fromAmino(object: _64.QueryGroupInfoResponseAmino): _64.QueryGroupInfoResponse;
                toAmino(message: _64.QueryGroupInfoResponse): _64.QueryGroupInfoResponseAmino;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _64.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _64.QueryGroupPolicyInfoRequest;
                toJSON(message: _64.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupPolicyInfoRequest>): _64.QueryGroupPolicyInfoRequest;
                fromAmino(object: _64.QueryGroupPolicyInfoRequestAmino): _64.QueryGroupPolicyInfoRequest;
                toAmino(message: _64.QueryGroupPolicyInfoRequest): _64.QueryGroupPolicyInfoRequestAmino;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _64.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _64.QueryGroupPolicyInfoResponse;
                toJSON(message: _64.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupPolicyInfoResponse>): _64.QueryGroupPolicyInfoResponse;
                fromAmino(object: _64.QueryGroupPolicyInfoResponseAmino): _64.QueryGroupPolicyInfoResponse;
                toAmino(message: _64.QueryGroupPolicyInfoResponse): _64.QueryGroupPolicyInfoResponseAmino;
            };
            QueryGroupMembersRequest: {
                encode(message: _64.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupMembersRequest;
                fromJSON(object: any): _64.QueryGroupMembersRequest;
                toJSON(message: _64.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupMembersRequest>): _64.QueryGroupMembersRequest;
                fromAmino(object: _64.QueryGroupMembersRequestAmino): _64.QueryGroupMembersRequest;
                toAmino(message: _64.QueryGroupMembersRequest): _64.QueryGroupMembersRequestAmino;
            };
            QueryGroupMembersResponse: {
                encode(message: _64.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupMembersResponse;
                fromJSON(object: any): _64.QueryGroupMembersResponse;
                toJSON(message: _64.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupMembersResponse>): _64.QueryGroupMembersResponse;
                fromAmino(object: _64.QueryGroupMembersResponseAmino): _64.QueryGroupMembersResponse;
                toAmino(message: _64.QueryGroupMembersResponse): _64.QueryGroupMembersResponseAmino;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _64.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupsByAdminRequest;
                fromJSON(object: any): _64.QueryGroupsByAdminRequest;
                toJSON(message: _64.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupsByAdminRequest>): _64.QueryGroupsByAdminRequest;
                fromAmino(object: _64.QueryGroupsByAdminRequestAmino): _64.QueryGroupsByAdminRequest;
                toAmino(message: _64.QueryGroupsByAdminRequest): _64.QueryGroupsByAdminRequestAmino;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _64.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupsByAdminResponse;
                fromJSON(object: any): _64.QueryGroupsByAdminResponse;
                toJSON(message: _64.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupsByAdminResponse>): _64.QueryGroupsByAdminResponse;
                fromAmino(object: _64.QueryGroupsByAdminResponseAmino): _64.QueryGroupsByAdminResponse;
                toAmino(message: _64.QueryGroupsByAdminResponse): _64.QueryGroupsByAdminResponseAmino;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _64.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _64.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _64.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupPoliciesByGroupRequest>): _64.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _64.QueryGroupPoliciesByGroupRequestAmino): _64.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _64.QueryGroupPoliciesByGroupRequest): _64.QueryGroupPoliciesByGroupRequestAmino;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _64.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _64.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _64.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupPoliciesByGroupResponse>): _64.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _64.QueryGroupPoliciesByGroupResponseAmino): _64.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _64.QueryGroupPoliciesByGroupResponse): _64.QueryGroupPoliciesByGroupResponseAmino;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _64.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _64.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _64.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupPoliciesByAdminRequest>): _64.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _64.QueryGroupPoliciesByAdminRequestAmino): _64.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _64.QueryGroupPoliciesByAdminRequest): _64.QueryGroupPoliciesByAdminRequestAmino;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _64.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _64.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _64.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupPoliciesByAdminResponse>): _64.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _64.QueryGroupPoliciesByAdminResponseAmino): _64.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _64.QueryGroupPoliciesByAdminResponse): _64.QueryGroupPoliciesByAdminResponseAmino;
            };
            QueryProposalRequest: {
                encode(message: _64.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryProposalRequest;
                fromJSON(object: any): _64.QueryProposalRequest;
                toJSON(message: _64.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_64.QueryProposalRequest>): _64.QueryProposalRequest;
                fromAmino(object: _64.QueryProposalRequestAmino): _64.QueryProposalRequest;
                toAmino(message: _64.QueryProposalRequest): _64.QueryProposalRequestAmino;
            };
            QueryProposalResponse: {
                encode(message: _64.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryProposalResponse;
                fromJSON(object: any): _64.QueryProposalResponse;
                toJSON(message: _64.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_64.QueryProposalResponse>): _64.QueryProposalResponse;
                fromAmino(object: _64.QueryProposalResponseAmino): _64.QueryProposalResponse;
                toAmino(message: _64.QueryProposalResponse): _64.QueryProposalResponseAmino;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _64.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _64.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _64.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_64.QueryProposalsByGroupPolicyRequest>): _64.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _64.QueryProposalsByGroupPolicyRequestAmino): _64.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _64.QueryProposalsByGroupPolicyRequest): _64.QueryProposalsByGroupPolicyRequestAmino;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _64.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _64.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _64.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_64.QueryProposalsByGroupPolicyResponse>): _64.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _64.QueryProposalsByGroupPolicyResponseAmino): _64.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _64.QueryProposalsByGroupPolicyResponse): _64.QueryProposalsByGroupPolicyResponseAmino;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _64.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _64.QueryVoteByProposalVoterRequest;
                toJSON(message: _64.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_64.QueryVoteByProposalVoterRequest>): _64.QueryVoteByProposalVoterRequest;
                fromAmino(object: _64.QueryVoteByProposalVoterRequestAmino): _64.QueryVoteByProposalVoterRequest;
                toAmino(message: _64.QueryVoteByProposalVoterRequest): _64.QueryVoteByProposalVoterRequestAmino;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _64.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _64.QueryVoteByProposalVoterResponse;
                toJSON(message: _64.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_64.QueryVoteByProposalVoterResponse>): _64.QueryVoteByProposalVoterResponse;
                fromAmino(object: _64.QueryVoteByProposalVoterResponseAmino): _64.QueryVoteByProposalVoterResponse;
                toAmino(message: _64.QueryVoteByProposalVoterResponse): _64.QueryVoteByProposalVoterResponseAmino;
            };
            QueryVotesByProposalRequest: {
                encode(message: _64.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVotesByProposalRequest;
                fromJSON(object: any): _64.QueryVotesByProposalRequest;
                toJSON(message: _64.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_64.QueryVotesByProposalRequest>): _64.QueryVotesByProposalRequest;
                fromAmino(object: _64.QueryVotesByProposalRequestAmino): _64.QueryVotesByProposalRequest;
                toAmino(message: _64.QueryVotesByProposalRequest): _64.QueryVotesByProposalRequestAmino;
            };
            QueryVotesByProposalResponse: {
                encode(message: _64.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVotesByProposalResponse;
                fromJSON(object: any): _64.QueryVotesByProposalResponse;
                toJSON(message: _64.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_64.QueryVotesByProposalResponse>): _64.QueryVotesByProposalResponse;
                fromAmino(object: _64.QueryVotesByProposalResponseAmino): _64.QueryVotesByProposalResponse;
                toAmino(message: _64.QueryVotesByProposalResponse): _64.QueryVotesByProposalResponseAmino;
            };
            QueryVotesByVoterRequest: {
                encode(message: _64.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVotesByVoterRequest;
                fromJSON(object: any): _64.QueryVotesByVoterRequest;
                toJSON(message: _64.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_64.QueryVotesByVoterRequest>): _64.QueryVotesByVoterRequest;
                fromAmino(object: _64.QueryVotesByVoterRequestAmino): _64.QueryVotesByVoterRequest;
                toAmino(message: _64.QueryVotesByVoterRequest): _64.QueryVotesByVoterRequestAmino;
            };
            QueryVotesByVoterResponse: {
                encode(message: _64.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVotesByVoterResponse;
                fromJSON(object: any): _64.QueryVotesByVoterResponse;
                toJSON(message: _64.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_64.QueryVotesByVoterResponse>): _64.QueryVotesByVoterResponse;
                fromAmino(object: _64.QueryVotesByVoterResponseAmino): _64.QueryVotesByVoterResponse;
                toAmino(message: _64.QueryVotesByVoterResponse): _64.QueryVotesByVoterResponseAmino;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _64.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupsByMemberRequest;
                fromJSON(object: any): _64.QueryGroupsByMemberRequest;
                toJSON(message: _64.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupsByMemberRequest>): _64.QueryGroupsByMemberRequest;
                fromAmino(object: _64.QueryGroupsByMemberRequestAmino): _64.QueryGroupsByMemberRequest;
                toAmino(message: _64.QueryGroupsByMemberRequest): _64.QueryGroupsByMemberRequestAmino;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _64.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGroupsByMemberResponse;
                fromJSON(object: any): _64.QueryGroupsByMemberResponse;
                toJSON(message: _64.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupsByMemberResponse>): _64.QueryGroupsByMemberResponse;
                fromAmino(object: _64.QueryGroupsByMemberResponseAmino): _64.QueryGroupsByMemberResponse;
                toAmino(message: _64.QueryGroupsByMemberResponse): _64.QueryGroupsByMemberResponseAmino;
            };
            QueryTallyResultRequest: {
                encode(message: _64.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryTallyResultRequest;
                fromJSON(object: any): _64.QueryTallyResultRequest;
                toJSON(message: _64.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_64.QueryTallyResultRequest>): _64.QueryTallyResultRequest;
                fromAmino(object: _64.QueryTallyResultRequestAmino): _64.QueryTallyResultRequest;
                toAmino(message: _64.QueryTallyResultRequest): _64.QueryTallyResultRequestAmino;
            };
            QueryTallyResultResponse: {
                encode(message: _64.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryTallyResultResponse;
                fromJSON(object: any): _64.QueryTallyResultResponse;
                toJSON(message: _64.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_64.QueryTallyResultResponse>): _64.QueryTallyResultResponse;
                fromAmino(object: _64.QueryTallyResultResponseAmino): _64.QueryTallyResultResponse;
                toAmino(message: _64.QueryTallyResultResponse): _64.QueryTallyResultResponseAmino;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GenesisState;
                fromJSON(object: any): _63.GenesisState;
                toJSON(message: _63.GenesisState): unknown;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
                fromAmino(object: _63.GenesisStateAmino): _63.GenesisState;
                toAmino(message: _63.GenesisState): _63.GenesisStateAmino;
            };
            EventCreateGroup: {
                encode(message: _62.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.EventCreateGroup;
                fromJSON(object: any): _62.EventCreateGroup;
                toJSON(message: _62.EventCreateGroup): unknown;
                fromPartial(object: Partial<_62.EventCreateGroup>): _62.EventCreateGroup;
                fromAmino(object: _62.EventCreateGroupAmino): _62.EventCreateGroup;
                toAmino(message: _62.EventCreateGroup): _62.EventCreateGroupAmino;
            };
            EventUpdateGroup: {
                encode(message: _62.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.EventUpdateGroup;
                fromJSON(object: any): _62.EventUpdateGroup;
                toJSON(message: _62.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_62.EventUpdateGroup>): _62.EventUpdateGroup;
                fromAmino(object: _62.EventUpdateGroupAmino): _62.EventUpdateGroup;
                toAmino(message: _62.EventUpdateGroup): _62.EventUpdateGroupAmino;
            };
            EventCreateGroupPolicy: {
                encode(message: _62.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.EventCreateGroupPolicy;
                fromJSON(object: any): _62.EventCreateGroupPolicy;
                toJSON(message: _62.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_62.EventCreateGroupPolicy>): _62.EventCreateGroupPolicy;
                fromAmino(object: _62.EventCreateGroupPolicyAmino): _62.EventCreateGroupPolicy;
                toAmino(message: _62.EventCreateGroupPolicy): _62.EventCreateGroupPolicyAmino;
            };
            EventUpdateGroupPolicy: {
                encode(message: _62.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.EventUpdateGroupPolicy;
                fromJSON(object: any): _62.EventUpdateGroupPolicy;
                toJSON(message: _62.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_62.EventUpdateGroupPolicy>): _62.EventUpdateGroupPolicy;
                fromAmino(object: _62.EventUpdateGroupPolicyAmino): _62.EventUpdateGroupPolicy;
                toAmino(message: _62.EventUpdateGroupPolicy): _62.EventUpdateGroupPolicyAmino;
            };
            EventSubmitProposal: {
                encode(message: _62.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.EventSubmitProposal;
                fromJSON(object: any): _62.EventSubmitProposal;
                toJSON(message: _62.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_62.EventSubmitProposal>): _62.EventSubmitProposal;
                fromAmino(object: _62.EventSubmitProposalAmino): _62.EventSubmitProposal;
                toAmino(message: _62.EventSubmitProposal): _62.EventSubmitProposalAmino;
            };
            EventWithdrawProposal: {
                encode(message: _62.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.EventWithdrawProposal;
                fromJSON(object: any): _62.EventWithdrawProposal;
                toJSON(message: _62.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_62.EventWithdrawProposal>): _62.EventWithdrawProposal;
                fromAmino(object: _62.EventWithdrawProposalAmino): _62.EventWithdrawProposal;
                toAmino(message: _62.EventWithdrawProposal): _62.EventWithdrawProposalAmino;
            };
            EventVote: {
                encode(message: _62.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.EventVote;
                fromJSON(object: any): _62.EventVote;
                toJSON(message: _62.EventVote): unknown;
                fromPartial(object: Partial<_62.EventVote>): _62.EventVote;
                fromAmino(object: _62.EventVoteAmino): _62.EventVote;
                toAmino(message: _62.EventVote): _62.EventVoteAmino;
            };
            EventExec: {
                encode(message: _62.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.EventExec;
                fromJSON(object: any): _62.EventExec;
                toJSON(message: _62.EventExec): unknown;
                fromPartial(object: Partial<_62.EventExec>): _62.EventExec;
                fromAmino(object: _62.EventExecAmino): _62.EventExec;
                toAmino(message: _62.EventExec): _62.EventExecAmino;
            };
            EventLeaveGroup: {
                encode(message: _62.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.EventLeaveGroup;
                fromJSON(object: any): _62.EventLeaveGroup;
                toJSON(message: _62.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_62.EventLeaveGroup>): _62.EventLeaveGroup;
                fromAmino(object: _62.EventLeaveGroupAmino): _62.EventLeaveGroup;
                toAmino(message: _62.EventLeaveGroup): _62.EventLeaveGroupAmino;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                inflation(request?: _69.QueryInflationRequest): Promise<_69.QueryInflationResponse>;
                annualProvisions(request?: _69.QueryAnnualProvisionsRequest): Promise<_69.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _69.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryParamsRequest;
                fromJSON(_: any): _69.QueryParamsRequest;
                toJSON(_: _69.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_69.QueryParamsRequest>): _69.QueryParamsRequest;
                fromAmino(_: _69.QueryParamsRequestAmino): _69.QueryParamsRequest;
                toAmino(_: _69.QueryParamsRequest): _69.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _69.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryParamsResponse;
                fromJSON(object: any): _69.QueryParamsResponse;
                toJSON(message: _69.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_69.QueryParamsResponse>): _69.QueryParamsResponse;
                fromAmino(object: _69.QueryParamsResponseAmino): _69.QueryParamsResponse;
                toAmino(message: _69.QueryParamsResponse): _69.QueryParamsResponseAmino;
            };
            QueryInflationRequest: {
                encode(_: _69.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryInflationRequest;
                fromJSON(_: any): _69.QueryInflationRequest;
                toJSON(_: _69.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_69.QueryInflationRequest>): _69.QueryInflationRequest;
                fromAmino(_: _69.QueryInflationRequestAmino): _69.QueryInflationRequest;
                toAmino(_: _69.QueryInflationRequest): _69.QueryInflationRequestAmino;
            };
            QueryInflationResponse: {
                encode(message: _69.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryInflationResponse;
                fromJSON(object: any): _69.QueryInflationResponse;
                toJSON(message: _69.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_69.QueryInflationResponse>): _69.QueryInflationResponse;
                fromAmino(object: _69.QueryInflationResponseAmino): _69.QueryInflationResponse;
                toAmino(message: _69.QueryInflationResponse): _69.QueryInflationResponseAmino;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _69.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _69.QueryAnnualProvisionsRequest;
                toJSON(_: _69.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_69.QueryAnnualProvisionsRequest>): _69.QueryAnnualProvisionsRequest;
                fromAmino(_: _69.QueryAnnualProvisionsRequestAmino): _69.QueryAnnualProvisionsRequest;
                toAmino(_: _69.QueryAnnualProvisionsRequest): _69.QueryAnnualProvisionsRequestAmino;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _69.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _69.QueryAnnualProvisionsResponse;
                toJSON(message: _69.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_69.QueryAnnualProvisionsResponse>): _69.QueryAnnualProvisionsResponse;
                fromAmino(object: _69.QueryAnnualProvisionsResponseAmino): _69.QueryAnnualProvisionsResponse;
                toAmino(message: _69.QueryAnnualProvisionsResponse): _69.QueryAnnualProvisionsResponseAmino;
            };
            Minter: {
                encode(message: _68.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Minter;
                fromJSON(object: any): _68.Minter;
                toJSON(message: _68.Minter): unknown;
                fromPartial(object: Partial<_68.Minter>): _68.Minter;
                fromAmino(object: _68.MinterAmino): _68.Minter;
                toAmino(message: _68.Minter): _68.MinterAmino;
            };
            Params: {
                encode(message: _68.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Params;
                fromJSON(object: any): _68.Params;
                toJSON(message: _68.Params): unknown;
                fromPartial(object: Partial<_68.Params>): _68.Params;
                fromAmino(object: _68.ParamsAmino): _68.Params;
                toAmino(message: _68.Params): _68.ParamsAmino;
            };
            GenesisState: {
                encode(message: _67.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.GenesisState;
                fromJSON(object: any): _67.GenesisState;
                toJSON(message: _67.GenesisState): unknown;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
                fromAmino(object: _67.GenesisStateAmino): _67.GenesisState;
                toAmino(message: _67.GenesisState): _67.GenesisStateAmino;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _74.QueryBalanceRequest): Promise<_74.QueryBalanceResponse>;
                owner(request: _74.QueryOwnerRequest): Promise<_74.QueryOwnerResponse>;
                supply(request: _74.QuerySupplyRequest): Promise<_74.QuerySupplyResponse>;
                nFTs(request: _74.QueryNFTsRequest): Promise<_74.QueryNFTsResponse>;
                nFT(request: _74.QueryNFTRequest): Promise<_74.QueryNFTResponse>;
                class(request: _74.QueryClassRequest): Promise<_74.QueryClassResponse>;
                classes(request?: _74.QueryClassesRequest): Promise<_74.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _75.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _75.MsgSend): {
                        typeUrl: string;
                        value: _75.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _75.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _75.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _75.MsgSend): {
                        typeUrl: string;
                        value: _75.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _75.MsgSend) => _75.MsgSendAmino;
                    fromAmino: (object: _75.MsgSendAmino) => _75.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _75.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSend;
                fromJSON(object: any): _75.MsgSend;
                toJSON(message: _75.MsgSend): unknown;
                fromPartial(object: Partial<_75.MsgSend>): _75.MsgSend;
                fromAmino(object: _75.MsgSendAmino): _75.MsgSend;
                toAmino(message: _75.MsgSend): _75.MsgSendAmino;
            };
            MsgSendResponse: {
                encode(_: _75.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSendResponse;
                fromJSON(_: any): _75.MsgSendResponse;
                toJSON(_: _75.MsgSendResponse): unknown;
                fromPartial(_: Partial<_75.MsgSendResponse>): _75.MsgSendResponse;
                fromAmino(_: _75.MsgSendResponseAmino): _75.MsgSendResponse;
                toAmino(_: _75.MsgSendResponse): _75.MsgSendResponseAmino;
            };
            QueryBalanceRequest: {
                encode(message: _74.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryBalanceRequest;
                fromJSON(object: any): _74.QueryBalanceRequest;
                toJSON(message: _74.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_74.QueryBalanceRequest>): _74.QueryBalanceRequest;
                fromAmino(object: _74.QueryBalanceRequestAmino): _74.QueryBalanceRequest;
                toAmino(message: _74.QueryBalanceRequest): _74.QueryBalanceRequestAmino;
            };
            QueryBalanceResponse: {
                encode(message: _74.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryBalanceResponse;
                fromJSON(object: any): _74.QueryBalanceResponse;
                toJSON(message: _74.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_74.QueryBalanceResponse>): _74.QueryBalanceResponse;
                fromAmino(object: _74.QueryBalanceResponseAmino): _74.QueryBalanceResponse;
                toAmino(message: _74.QueryBalanceResponse): _74.QueryBalanceResponseAmino;
            };
            QueryOwnerRequest: {
                encode(message: _74.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryOwnerRequest;
                fromJSON(object: any): _74.QueryOwnerRequest;
                toJSON(message: _74.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_74.QueryOwnerRequest>): _74.QueryOwnerRequest;
                fromAmino(object: _74.QueryOwnerRequestAmino): _74.QueryOwnerRequest;
                toAmino(message: _74.QueryOwnerRequest): _74.QueryOwnerRequestAmino;
            };
            QueryOwnerResponse: {
                encode(message: _74.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryOwnerResponse;
                fromJSON(object: any): _74.QueryOwnerResponse;
                toJSON(message: _74.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_74.QueryOwnerResponse>): _74.QueryOwnerResponse;
                fromAmino(object: _74.QueryOwnerResponseAmino): _74.QueryOwnerResponse;
                toAmino(message: _74.QueryOwnerResponse): _74.QueryOwnerResponseAmino;
            };
            QuerySupplyRequest: {
                encode(message: _74.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QuerySupplyRequest;
                fromJSON(object: any): _74.QuerySupplyRequest;
                toJSON(message: _74.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_74.QuerySupplyRequest>): _74.QuerySupplyRequest;
                fromAmino(object: _74.QuerySupplyRequestAmino): _74.QuerySupplyRequest;
                toAmino(message: _74.QuerySupplyRequest): _74.QuerySupplyRequestAmino;
            };
            QuerySupplyResponse: {
                encode(message: _74.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QuerySupplyResponse;
                fromJSON(object: any): _74.QuerySupplyResponse;
                toJSON(message: _74.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_74.QuerySupplyResponse>): _74.QuerySupplyResponse;
                fromAmino(object: _74.QuerySupplyResponseAmino): _74.QuerySupplyResponse;
                toAmino(message: _74.QuerySupplyResponse): _74.QuerySupplyResponseAmino;
            };
            QueryNFTsRequest: {
                encode(message: _74.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryNFTsRequest;
                fromJSON(object: any): _74.QueryNFTsRequest;
                toJSON(message: _74.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_74.QueryNFTsRequest>): _74.QueryNFTsRequest;
                fromAmino(object: _74.QueryNFTsRequestAmino): _74.QueryNFTsRequest;
                toAmino(message: _74.QueryNFTsRequest): _74.QueryNFTsRequestAmino;
            };
            QueryNFTsResponse: {
                encode(message: _74.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryNFTsResponse;
                fromJSON(object: any): _74.QueryNFTsResponse;
                toJSON(message: _74.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_74.QueryNFTsResponse>): _74.QueryNFTsResponse;
                fromAmino(object: _74.QueryNFTsResponseAmino): _74.QueryNFTsResponse;
                toAmino(message: _74.QueryNFTsResponse): _74.QueryNFTsResponseAmino;
            };
            QueryNFTRequest: {
                encode(message: _74.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryNFTRequest;
                fromJSON(object: any): _74.QueryNFTRequest;
                toJSON(message: _74.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_74.QueryNFTRequest>): _74.QueryNFTRequest;
                fromAmino(object: _74.QueryNFTRequestAmino): _74.QueryNFTRequest;
                toAmino(message: _74.QueryNFTRequest): _74.QueryNFTRequestAmino;
            };
            QueryNFTResponse: {
                encode(message: _74.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryNFTResponse;
                fromJSON(object: any): _74.QueryNFTResponse;
                toJSON(message: _74.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_74.QueryNFTResponse>): _74.QueryNFTResponse;
                fromAmino(object: _74.QueryNFTResponseAmino): _74.QueryNFTResponse;
                toAmino(message: _74.QueryNFTResponse): _74.QueryNFTResponseAmino;
            };
            QueryClassRequest: {
                encode(message: _74.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClassRequest;
                fromJSON(object: any): _74.QueryClassRequest;
                toJSON(message: _74.QueryClassRequest): unknown;
                fromPartial(object: Partial<_74.QueryClassRequest>): _74.QueryClassRequest;
                fromAmino(object: _74.QueryClassRequestAmino): _74.QueryClassRequest;
                toAmino(message: _74.QueryClassRequest): _74.QueryClassRequestAmino;
            };
            QueryClassResponse: {
                encode(message: _74.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClassResponse;
                fromJSON(object: any): _74.QueryClassResponse;
                toJSON(message: _74.QueryClassResponse): unknown;
                fromPartial(object: Partial<_74.QueryClassResponse>): _74.QueryClassResponse;
                fromAmino(object: _74.QueryClassResponseAmino): _74.QueryClassResponse;
                toAmino(message: _74.QueryClassResponse): _74.QueryClassResponseAmino;
            };
            QueryClassesRequest: {
                encode(message: _74.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClassesRequest;
                fromJSON(object: any): _74.QueryClassesRequest;
                toJSON(message: _74.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_74.QueryClassesRequest>): _74.QueryClassesRequest;
                fromAmino(object: _74.QueryClassesRequestAmino): _74.QueryClassesRequest;
                toAmino(message: _74.QueryClassesRequest): _74.QueryClassesRequestAmino;
            };
            QueryClassesResponse: {
                encode(message: _74.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClassesResponse;
                fromJSON(object: any): _74.QueryClassesResponse;
                toJSON(message: _74.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_74.QueryClassesResponse>): _74.QueryClassesResponse;
                fromAmino(object: _74.QueryClassesResponseAmino): _74.QueryClassesResponse;
                toAmino(message: _74.QueryClassesResponse): _74.QueryClassesResponseAmino;
            };
            Class: {
                encode(message: _73.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Class;
                fromJSON(object: any): _73.Class;
                toJSON(message: _73.Class): unknown;
                fromPartial(object: Partial<_73.Class>): _73.Class;
                fromAmino(object: _73.ClassAmino): _73.Class;
                toAmino(message: _73.Class): _73.ClassAmino;
            };
            NFT: {
                encode(message: _73.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.NFT;
                fromJSON(object: any): _73.NFT;
                toJSON(message: _73.NFT): unknown;
                fromPartial(object: Partial<_73.NFT>): _73.NFT;
                fromAmino(object: _73.NFTAmino): _73.NFT;
                toAmino(message: _73.NFT): _73.NFTAmino;
            };
            GenesisState: {
                encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GenesisState;
                fromJSON(object: any): _72.GenesisState;
                toJSON(message: _72.GenesisState): unknown;
                fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
                fromAmino(object: _72.GenesisStateAmino): _72.GenesisState;
                toAmino(message: _72.GenesisState): _72.GenesisStateAmino;
            };
            Entry: {
                encode(message: _72.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Entry;
                fromJSON(object: any): _72.Entry;
                toJSON(message: _72.Entry): unknown;
                fromPartial(object: Partial<_72.Entry>): _72.Entry;
                fromAmino(object: _72.EntryAmino): _72.Entry;
                toAmino(message: _72.Entry): _72.EntryAmino;
            };
            EventSend: {
                encode(message: _71.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.EventSend;
                fromJSON(object: any): _71.EventSend;
                toJSON(message: _71.EventSend): unknown;
                fromPartial(object: Partial<_71.EventSend>): _71.EventSend;
                fromAmino(object: _71.EventSendAmino): _71.EventSend;
                toAmino(message: _71.EventSend): _71.EventSendAmino;
            };
            EventMint: {
                encode(message: _71.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.EventMint;
                fromJSON(object: any): _71.EventMint;
                toJSON(message: _71.EventMint): unknown;
                fromPartial(object: Partial<_71.EventMint>): _71.EventMint;
                fromAmino(object: _71.EventMintAmino): _71.EventMint;
                toAmino(message: _71.EventMint): _71.EventMintAmino;
            };
            EventBurn: {
                encode(message: _71.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.EventBurn;
                fromJSON(object: any): _71.EventBurn;
                toJSON(message: _71.EventBurn): unknown;
                fromPartial(object: Partial<_71.EventBurn>): _71.EventBurn;
                fromAmino(object: _71.EventBurnAmino): _71.EventBurn;
                toAmino(message: _71.EventBurn): _71.EventBurnAmino;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _76.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Module;
                    fromJSON(_: any): _76.Module;
                    toJSON(_: _76.Module): unknown;
                    fromPartial(_: Partial<_76.Module>): _76.Module;
                    fromAmino(_: _76.ModuleAmino): _76.Module;
                    toAmino(_: _76.Module): _76.ModuleAmino;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _77.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.TableDescriptor;
                fromJSON(object: any): _77.TableDescriptor;
                toJSON(message: _77.TableDescriptor): unknown;
                fromPartial(object: Partial<_77.TableDescriptor>): _77.TableDescriptor;
                fromAmino(object: _77.TableDescriptorAmino): _77.TableDescriptor;
                toAmino(message: _77.TableDescriptor): _77.TableDescriptorAmino;
            };
            PrimaryKeyDescriptor: {
                encode(message: _77.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.PrimaryKeyDescriptor;
                fromJSON(object: any): _77.PrimaryKeyDescriptor;
                toJSON(message: _77.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_77.PrimaryKeyDescriptor>): _77.PrimaryKeyDescriptor;
                fromAmino(object: _77.PrimaryKeyDescriptorAmino): _77.PrimaryKeyDescriptor;
                toAmino(message: _77.PrimaryKeyDescriptor): _77.PrimaryKeyDescriptorAmino;
            };
            SecondaryIndexDescriptor: {
                encode(message: _77.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.SecondaryIndexDescriptor;
                fromJSON(object: any): _77.SecondaryIndexDescriptor;
                toJSON(message: _77.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_77.SecondaryIndexDescriptor>): _77.SecondaryIndexDescriptor;
                fromAmino(object: _77.SecondaryIndexDescriptorAmino): _77.SecondaryIndexDescriptor;
                toAmino(message: _77.SecondaryIndexDescriptor): _77.SecondaryIndexDescriptorAmino;
            };
            SingletonDescriptor: {
                encode(message: _77.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.SingletonDescriptor;
                fromJSON(object: any): _77.SingletonDescriptor;
                toJSON(message: _77.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_77.SingletonDescriptor>): _77.SingletonDescriptor;
                fromAmino(object: _77.SingletonDescriptorAmino): _77.SingletonDescriptor;
                toAmino(message: _77.SingletonDescriptor): _77.SingletonDescriptorAmino;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _78.StorageType;
            storageTypeToJSON(object: _78.StorageType): string;
            StorageType: typeof _78.StorageType;
            StorageTypeSDKType: typeof _78.StorageType;
            StorageTypeAmino: typeof _78.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _78.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ModuleSchemaDescriptor;
                fromJSON(object: any): _78.ModuleSchemaDescriptor;
                toJSON(message: _78.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_78.ModuleSchemaDescriptor>): _78.ModuleSchemaDescriptor;
                fromAmino(object: _78.ModuleSchemaDescriptorAmino): _78.ModuleSchemaDescriptor;
                toAmino(message: _78.ModuleSchemaDescriptor): _78.ModuleSchemaDescriptorAmino;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _78.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _78.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _78.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_78.ModuleSchemaDescriptor_FileEntry>): _78.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _78.ModuleSchemaDescriptor_FileEntryAmino): _78.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _78.ModuleSchemaDescriptor_FileEntry): _78.ModuleSchemaDescriptor_FileEntryAmino;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _159.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                subspaces(request?: _80.QuerySubspacesRequest): Promise<_80.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _80.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryParamsRequest;
                fromJSON(object: any): _80.QueryParamsRequest;
                toJSON(message: _80.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_80.QueryParamsRequest>): _80.QueryParamsRequest;
                fromAmino(object: _80.QueryParamsRequestAmino): _80.QueryParamsRequest;
                toAmino(message: _80.QueryParamsRequest): _80.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _80.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryParamsResponse;
                fromJSON(object: any): _80.QueryParamsResponse;
                toJSON(message: _80.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_80.QueryParamsResponse>): _80.QueryParamsResponse;
                fromAmino(object: _80.QueryParamsResponseAmino): _80.QueryParamsResponse;
                toAmino(message: _80.QueryParamsResponse): _80.QueryParamsResponseAmino;
            };
            QuerySubspacesRequest: {
                encode(_: _80.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QuerySubspacesRequest;
                fromJSON(_: any): _80.QuerySubspacesRequest;
                toJSON(_: _80.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_80.QuerySubspacesRequest>): _80.QuerySubspacesRequest;
                fromAmino(_: _80.QuerySubspacesRequestAmino): _80.QuerySubspacesRequest;
                toAmino(_: _80.QuerySubspacesRequest): _80.QuerySubspacesRequestAmino;
            };
            QuerySubspacesResponse: {
                encode(message: _80.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QuerySubspacesResponse;
                fromJSON(object: any): _80.QuerySubspacesResponse;
                toJSON(message: _80.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_80.QuerySubspacesResponse>): _80.QuerySubspacesResponse;
                fromAmino(object: _80.QuerySubspacesResponseAmino): _80.QuerySubspacesResponse;
                toAmino(message: _80.QuerySubspacesResponse): _80.QuerySubspacesResponseAmino;
            };
            Subspace: {
                encode(message: _80.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Subspace;
                fromJSON(object: any): _80.Subspace;
                toJSON(message: _80.Subspace): unknown;
                fromPartial(object: Partial<_80.Subspace>): _80.Subspace;
                fromAmino(object: _80.SubspaceAmino): _80.Subspace;
                toAmino(message: _80.Subspace): _80.SubspaceAmino;
            };
            ParameterChangeProposal: {
                encode(message: _79.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ParameterChangeProposal;
                fromJSON(object: any): _79.ParameterChangeProposal;
                toJSON(message: _79.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_79.ParameterChangeProposal>): _79.ParameterChangeProposal;
                fromAmino(object: _79.ParameterChangeProposalAmino): _79.ParameterChangeProposal;
                toAmino(message: _79.ParameterChangeProposal): _79.ParameterChangeProposalAmino;
            };
            ParamChange: {
                encode(message: _79.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ParamChange;
                fromJSON(object: any): _79.ParamChange;
                toJSON(message: _79.ParamChange): unknown;
                fromPartial(object: Partial<_79.ParamChange>): _79.ParamChange;
                fromAmino(object: _79.ParamChangeAmino): _79.ParamChange;
                toAmino(message: _79.ParamChange): _79.ParamChangeAmino;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                signingInfo(request: _82.QuerySigningInfoRequest): Promise<_82.QuerySigningInfoResponse>;
                signingInfos(request?: _82.QuerySigningInfosRequest): Promise<_82.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _84.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _84.MsgUnjail): {
                        typeUrl: string;
                        value: _84.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _84.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _84.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _84.MsgUnjail): {
                        typeUrl: string;
                        value: _84.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _84.MsgUnjail) => _84.MsgUnjailAmino;
                    fromAmino: (object: _84.MsgUnjailAmino) => _84.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _84.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgUnjail;
                fromJSON(object: any): _84.MsgUnjail;
                toJSON(message: _84.MsgUnjail): unknown;
                fromPartial(object: Partial<_84.MsgUnjail>): _84.MsgUnjail;
                fromAmino(object: _84.MsgUnjailAmino): _84.MsgUnjail;
                toAmino(message: _84.MsgUnjail): _84.MsgUnjailAmino;
            };
            MsgUnjailResponse: {
                encode(_: _84.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgUnjailResponse;
                fromJSON(_: any): _84.MsgUnjailResponse;
                toJSON(_: _84.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_84.MsgUnjailResponse>): _84.MsgUnjailResponse;
                fromAmino(_: _84.MsgUnjailResponseAmino): _84.MsgUnjailResponse;
                toAmino(_: _84.MsgUnjailResponse): _84.MsgUnjailResponseAmino;
            };
            ValidatorSigningInfo: {
                encode(message: _83.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ValidatorSigningInfo;
                fromJSON(object: any): _83.ValidatorSigningInfo;
                toJSON(message: _83.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_83.ValidatorSigningInfo>): _83.ValidatorSigningInfo;
                fromAmino(object: _83.ValidatorSigningInfoAmino): _83.ValidatorSigningInfo;
                toAmino(message: _83.ValidatorSigningInfo): _83.ValidatorSigningInfoAmino;
            };
            Params: {
                encode(message: _83.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Params;
                fromJSON(object: any): _83.Params;
                toJSON(message: _83.Params): unknown;
                fromPartial(object: Partial<_83.Params>): _83.Params;
                fromAmino(object: _83.ParamsAmino): _83.Params;
                toAmino(message: _83.Params): _83.ParamsAmino;
            };
            QueryParamsRequest: {
                encode(_: _82.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryParamsRequest;
                fromJSON(_: any): _82.QueryParamsRequest;
                toJSON(_: _82.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_82.QueryParamsRequest>): _82.QueryParamsRequest;
                fromAmino(_: _82.QueryParamsRequestAmino): _82.QueryParamsRequest;
                toAmino(_: _82.QueryParamsRequest): _82.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _82.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryParamsResponse;
                fromJSON(object: any): _82.QueryParamsResponse;
                toJSON(message: _82.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_82.QueryParamsResponse>): _82.QueryParamsResponse;
                fromAmino(object: _82.QueryParamsResponseAmino): _82.QueryParamsResponse;
                toAmino(message: _82.QueryParamsResponse): _82.QueryParamsResponseAmino;
            };
            QuerySigningInfoRequest: {
                encode(message: _82.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QuerySigningInfoRequest;
                fromJSON(object: any): _82.QuerySigningInfoRequest;
                toJSON(message: _82.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_82.QuerySigningInfoRequest>): _82.QuerySigningInfoRequest;
                fromAmino(object: _82.QuerySigningInfoRequestAmino): _82.QuerySigningInfoRequest;
                toAmino(message: _82.QuerySigningInfoRequest): _82.QuerySigningInfoRequestAmino;
            };
            QuerySigningInfoResponse: {
                encode(message: _82.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QuerySigningInfoResponse;
                fromJSON(object: any): _82.QuerySigningInfoResponse;
                toJSON(message: _82.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_82.QuerySigningInfoResponse>): _82.QuerySigningInfoResponse;
                fromAmino(object: _82.QuerySigningInfoResponseAmino): _82.QuerySigningInfoResponse;
                toAmino(message: _82.QuerySigningInfoResponse): _82.QuerySigningInfoResponseAmino;
            };
            QuerySigningInfosRequest: {
                encode(message: _82.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QuerySigningInfosRequest;
                fromJSON(object: any): _82.QuerySigningInfosRequest;
                toJSON(message: _82.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_82.QuerySigningInfosRequest>): _82.QuerySigningInfosRequest;
                fromAmino(object: _82.QuerySigningInfosRequestAmino): _82.QuerySigningInfosRequest;
                toAmino(message: _82.QuerySigningInfosRequest): _82.QuerySigningInfosRequestAmino;
            };
            QuerySigningInfosResponse: {
                encode(message: _82.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QuerySigningInfosResponse;
                fromJSON(object: any): _82.QuerySigningInfosResponse;
                toJSON(message: _82.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_82.QuerySigningInfosResponse>): _82.QuerySigningInfosResponse;
                fromAmino(object: _82.QuerySigningInfosResponseAmino): _82.QuerySigningInfosResponse;
                toAmino(message: _82.QuerySigningInfosResponse): _82.QuerySigningInfosResponseAmino;
            };
            GenesisState: {
                encode(message: _81.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.GenesisState;
                fromJSON(object: any): _81.GenesisState;
                toJSON(message: _81.GenesisState): unknown;
                fromPartial(object: Partial<_81.GenesisState>): _81.GenesisState;
                fromAmino(object: _81.GenesisStateAmino): _81.GenesisState;
                toAmino(message: _81.GenesisState): _81.GenesisStateAmino;
            };
            SigningInfo: {
                encode(message: _81.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.SigningInfo;
                fromJSON(object: any): _81.SigningInfo;
                toJSON(message: _81.SigningInfo): unknown;
                fromPartial(object: Partial<_81.SigningInfo>): _81.SigningInfo;
                fromAmino(object: _81.SigningInfoAmino): _81.SigningInfo;
                toAmino(message: _81.SigningInfo): _81.SigningInfoAmino;
            };
            ValidatorMissedBlocks: {
                encode(message: _81.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ValidatorMissedBlocks;
                fromJSON(object: any): _81.ValidatorMissedBlocks;
                toJSON(message: _81.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_81.ValidatorMissedBlocks>): _81.ValidatorMissedBlocks;
                fromAmino(object: _81.ValidatorMissedBlocksAmino): _81.ValidatorMissedBlocks;
                toAmino(message: _81.ValidatorMissedBlocks): _81.ValidatorMissedBlocksAmino;
            };
            MissedBlock: {
                encode(message: _81.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MissedBlock;
                fromJSON(object: any): _81.MissedBlock;
                toJSON(message: _81.MissedBlock): unknown;
                fromPartial(object: Partial<_81.MissedBlock>): _81.MissedBlock;
                fromAmino(object: _81.MissedBlockAmino): _81.MissedBlock;
                toAmino(message: _81.MissedBlock): _81.MissedBlockAmino;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _87.QueryValidatorsRequest): Promise<_87.QueryValidatorsResponse>;
                validator(request: _87.QueryValidatorRequest): Promise<_87.QueryValidatorResponse>;
                validatorDelegations(request: _87.QueryValidatorDelegationsRequest): Promise<_87.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _87.QueryValidatorUnbondingDelegationsRequest): Promise<_87.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _87.QueryDelegationRequest): Promise<_87.QueryDelegationResponse>;
                unbondingDelegation(request: _87.QueryUnbondingDelegationRequest): Promise<_87.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _87.QueryDelegatorDelegationsRequest): Promise<_87.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _87.QueryDelegatorUnbondingDelegationsRequest): Promise<_87.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _87.QueryRedelegationsRequest): Promise<_87.QueryRedelegationsResponse>;
                delegatorValidators(request: _87.QueryDelegatorValidatorsRequest): Promise<_87.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _87.QueryDelegatorValidatorRequest): Promise<_87.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _87.QueryHistoricalInfoRequest): Promise<_87.QueryHistoricalInfoResponse>;
                pool(request?: _87.QueryPoolRequest): Promise<_87.QueryPoolResponse>;
                params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _89.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _89.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _89.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _89.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _89.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _89.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _89.MsgCreateValidator): {
                        typeUrl: string;
                        value: _89.MsgCreateValidator;
                    };
                    editValidator(value: _89.MsgEditValidator): {
                        typeUrl: string;
                        value: _89.MsgEditValidator;
                    };
                    delegate(value: _89.MsgDelegate): {
                        typeUrl: string;
                        value: _89.MsgDelegate;
                    };
                    beginRedelegate(value: _89.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _89.MsgBeginRedelegate;
                    };
                    undelegate(value: _89.MsgUndelegate): {
                        typeUrl: string;
                        value: _89.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _89.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _89.MsgCancelUnbondingDelegation;
                    };
                };
                toJSON: {
                    createValidator(value: _89.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _89.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _89.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _89.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _89.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _89.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _89.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _89.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _89.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _89.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _89.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _89.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _89.MsgCreateValidator): {
                        typeUrl: string;
                        value: _89.MsgCreateValidator;
                    };
                    editValidator(value: _89.MsgEditValidator): {
                        typeUrl: string;
                        value: _89.MsgEditValidator;
                    };
                    delegate(value: _89.MsgDelegate): {
                        typeUrl: string;
                        value: _89.MsgDelegate;
                    };
                    beginRedelegate(value: _89.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _89.MsgBeginRedelegate;
                    };
                    undelegate(value: _89.MsgUndelegate): {
                        typeUrl: string;
                        value: _89.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _89.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _89.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _89.MsgCreateValidator) => _89.MsgCreateValidatorAmino;
                    fromAmino: (object: _89.MsgCreateValidatorAmino) => _89.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _89.MsgEditValidator) => _89.MsgEditValidatorAmino;
                    fromAmino: (object: _89.MsgEditValidatorAmino) => _89.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _89.MsgDelegate) => _89.MsgDelegateAmino;
                    fromAmino: (object: _89.MsgDelegateAmino) => _89.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _89.MsgBeginRedelegate) => _89.MsgBeginRedelegateAmino;
                    fromAmino: (object: _89.MsgBeginRedelegateAmino) => _89.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUndelegate) => _89.MsgUndelegateAmino;
                    fromAmino: (object: _89.MsgUndelegateAmino) => _89.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _89.MsgCancelUnbondingDelegation) => _89.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _89.MsgCancelUnbondingDelegationAmino) => _89.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _89.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgCreateValidator;
                fromJSON(object: any): _89.MsgCreateValidator;
                toJSON(message: _89.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_89.MsgCreateValidator>): _89.MsgCreateValidator;
                fromAmino(object: _89.MsgCreateValidatorAmino): _89.MsgCreateValidator;
                toAmino(message: _89.MsgCreateValidator): _89.MsgCreateValidatorAmino;
            };
            MsgCreateValidatorResponse: {
                encode(_: _89.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgCreateValidatorResponse;
                fromJSON(_: any): _89.MsgCreateValidatorResponse;
                toJSON(_: _89.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_89.MsgCreateValidatorResponse>): _89.MsgCreateValidatorResponse;
                fromAmino(_: _89.MsgCreateValidatorResponseAmino): _89.MsgCreateValidatorResponse;
                toAmino(_: _89.MsgCreateValidatorResponse): _89.MsgCreateValidatorResponseAmino;
            };
            MsgEditValidator: {
                encode(message: _89.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgEditValidator;
                fromJSON(object: any): _89.MsgEditValidator;
                toJSON(message: _89.MsgEditValidator): unknown;
                fromPartial(object: Partial<_89.MsgEditValidator>): _89.MsgEditValidator;
                fromAmino(object: _89.MsgEditValidatorAmino): _89.MsgEditValidator;
                toAmino(message: _89.MsgEditValidator): _89.MsgEditValidatorAmino;
            };
            MsgEditValidatorResponse: {
                encode(_: _89.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgEditValidatorResponse;
                fromJSON(_: any): _89.MsgEditValidatorResponse;
                toJSON(_: _89.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_89.MsgEditValidatorResponse>): _89.MsgEditValidatorResponse;
                fromAmino(_: _89.MsgEditValidatorResponseAmino): _89.MsgEditValidatorResponse;
                toAmino(_: _89.MsgEditValidatorResponse): _89.MsgEditValidatorResponseAmino;
            };
            MsgDelegate: {
                encode(message: _89.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgDelegate;
                fromJSON(object: any): _89.MsgDelegate;
                toJSON(message: _89.MsgDelegate): unknown;
                fromPartial(object: Partial<_89.MsgDelegate>): _89.MsgDelegate;
                fromAmino(object: _89.MsgDelegateAmino): _89.MsgDelegate;
                toAmino(message: _89.MsgDelegate): _89.MsgDelegateAmino;
            };
            MsgDelegateResponse: {
                encode(_: _89.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgDelegateResponse;
                fromJSON(_: any): _89.MsgDelegateResponse;
                toJSON(_: _89.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_89.MsgDelegateResponse>): _89.MsgDelegateResponse;
                fromAmino(_: _89.MsgDelegateResponseAmino): _89.MsgDelegateResponse;
                toAmino(_: _89.MsgDelegateResponse): _89.MsgDelegateResponseAmino;
            };
            MsgBeginRedelegate: {
                encode(message: _89.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgBeginRedelegate;
                fromJSON(object: any): _89.MsgBeginRedelegate;
                toJSON(message: _89.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_89.MsgBeginRedelegate>): _89.MsgBeginRedelegate;
                fromAmino(object: _89.MsgBeginRedelegateAmino): _89.MsgBeginRedelegate;
                toAmino(message: _89.MsgBeginRedelegate): _89.MsgBeginRedelegateAmino;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _89.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgBeginRedelegateResponse;
                fromJSON(object: any): _89.MsgBeginRedelegateResponse;
                toJSON(message: _89.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_89.MsgBeginRedelegateResponse>): _89.MsgBeginRedelegateResponse;
                fromAmino(object: _89.MsgBeginRedelegateResponseAmino): _89.MsgBeginRedelegateResponse;
                toAmino(message: _89.MsgBeginRedelegateResponse): _89.MsgBeginRedelegateResponseAmino;
            };
            MsgUndelegate: {
                encode(message: _89.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgUndelegate;
                fromJSON(object: any): _89.MsgUndelegate;
                toJSON(message: _89.MsgUndelegate): unknown;
                fromPartial(object: Partial<_89.MsgUndelegate>): _89.MsgUndelegate;
                fromAmino(object: _89.MsgUndelegateAmino): _89.MsgUndelegate;
                toAmino(message: _89.MsgUndelegate): _89.MsgUndelegateAmino;
            };
            MsgUndelegateResponse: {
                encode(message: _89.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgUndelegateResponse;
                fromJSON(object: any): _89.MsgUndelegateResponse;
                toJSON(message: _89.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_89.MsgUndelegateResponse>): _89.MsgUndelegateResponse;
                fromAmino(object: _89.MsgUndelegateResponseAmino): _89.MsgUndelegateResponse;
                toAmino(message: _89.MsgUndelegateResponse): _89.MsgUndelegateResponseAmino;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _89.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _89.MsgCancelUnbondingDelegation;
                toJSON(message: _89.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: Partial<_89.MsgCancelUnbondingDelegation>): _89.MsgCancelUnbondingDelegation;
                fromAmino(object: _89.MsgCancelUnbondingDelegationAmino): _89.MsgCancelUnbondingDelegation;
                toAmino(message: _89.MsgCancelUnbondingDelegation): _89.MsgCancelUnbondingDelegationAmino;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _89.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _89.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _89.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: Partial<_89.MsgCancelUnbondingDelegationResponse>): _89.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _89.MsgCancelUnbondingDelegationResponseAmino): _89.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _89.MsgCancelUnbondingDelegationResponse): _89.MsgCancelUnbondingDelegationResponseAmino;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            bondStatusFromJSON(object: any): _88.BondStatus;
            bondStatusToJSON(object: _88.BondStatus): string;
            BondStatus: typeof _88.BondStatus;
            BondStatusSDKType: typeof _88.BondStatus;
            BondStatusAmino: typeof _88.BondStatus;
            HistoricalInfo: {
                encode(message: _88.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.HistoricalInfo;
                fromJSON(object: any): _88.HistoricalInfo;
                toJSON(message: _88.HistoricalInfo): unknown;
                fromPartial(object: Partial<_88.HistoricalInfo>): _88.HistoricalInfo;
                fromAmino(object: _88.HistoricalInfoAmino): _88.HistoricalInfo;
                toAmino(message: _88.HistoricalInfo): _88.HistoricalInfoAmino;
            };
            CommissionRates: {
                encode(message: _88.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.CommissionRates;
                fromJSON(object: any): _88.CommissionRates;
                toJSON(message: _88.CommissionRates): unknown;
                fromPartial(object: Partial<_88.CommissionRates>): _88.CommissionRates;
                fromAmino(object: _88.CommissionRatesAmino): _88.CommissionRates;
                toAmino(message: _88.CommissionRates): _88.CommissionRatesAmino;
            };
            Commission: {
                encode(message: _88.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Commission;
                fromJSON(object: any): _88.Commission;
                toJSON(message: _88.Commission): unknown;
                fromPartial(object: Partial<_88.Commission>): _88.Commission;
                fromAmino(object: _88.CommissionAmino): _88.Commission;
                toAmino(message: _88.Commission): _88.CommissionAmino;
            };
            Description: {
                encode(message: _88.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Description;
                fromJSON(object: any): _88.Description;
                toJSON(message: _88.Description): unknown;
                fromPartial(object: Partial<_88.Description>): _88.Description;
                fromAmino(object: _88.DescriptionAmino): _88.Description;
                toAmino(message: _88.Description): _88.DescriptionAmino;
            };
            Validator: {
                encode(message: _88.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Validator;
                fromJSON(object: any): _88.Validator;
                toJSON(message: _88.Validator): unknown;
                fromPartial(object: Partial<_88.Validator>): _88.Validator;
                fromAmino(object: _88.ValidatorAmino): _88.Validator;
                toAmino(message: _88.Validator): _88.ValidatorAmino;
            };
            ValAddresses: {
                encode(message: _88.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ValAddresses;
                fromJSON(object: any): _88.ValAddresses;
                toJSON(message: _88.ValAddresses): unknown;
                fromPartial(object: Partial<_88.ValAddresses>): _88.ValAddresses;
                fromAmino(object: _88.ValAddressesAmino): _88.ValAddresses;
                toAmino(message: _88.ValAddresses): _88.ValAddressesAmino;
            };
            DVPair: {
                encode(message: _88.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DVPair;
                fromJSON(object: any): _88.DVPair;
                toJSON(message: _88.DVPair): unknown;
                fromPartial(object: Partial<_88.DVPair>): _88.DVPair;
                fromAmino(object: _88.DVPairAmino): _88.DVPair;
                toAmino(message: _88.DVPair): _88.DVPairAmino;
            };
            DVPairs: {
                encode(message: _88.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DVPairs;
                fromJSON(object: any): _88.DVPairs;
                toJSON(message: _88.DVPairs): unknown;
                fromPartial(object: Partial<_88.DVPairs>): _88.DVPairs;
                fromAmino(object: _88.DVPairsAmino): _88.DVPairs;
                toAmino(message: _88.DVPairs): _88.DVPairsAmino;
            };
            DVVTriplet: {
                encode(message: _88.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DVVTriplet;
                fromJSON(object: any): _88.DVVTriplet;
                toJSON(message: _88.DVVTriplet): unknown;
                fromPartial(object: Partial<_88.DVVTriplet>): _88.DVVTriplet;
                fromAmino(object: _88.DVVTripletAmino): _88.DVVTriplet;
                toAmino(message: _88.DVVTriplet): _88.DVVTripletAmino;
            };
            DVVTriplets: {
                encode(message: _88.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DVVTriplets;
                fromJSON(object: any): _88.DVVTriplets;
                toJSON(message: _88.DVVTriplets): unknown;
                fromPartial(object: Partial<_88.DVVTriplets>): _88.DVVTriplets;
                fromAmino(object: _88.DVVTripletsAmino): _88.DVVTriplets;
                toAmino(message: _88.DVVTriplets): _88.DVVTripletsAmino;
            };
            Delegation: {
                encode(message: _88.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Delegation;
                fromJSON(object: any): _88.Delegation;
                toJSON(message: _88.Delegation): unknown;
                fromPartial(object: Partial<_88.Delegation>): _88.Delegation;
                fromAmino(object: _88.DelegationAmino): _88.Delegation;
                toAmino(message: _88.Delegation): _88.DelegationAmino;
            };
            UnbondingDelegation: {
                encode(message: _88.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.UnbondingDelegation;
                fromJSON(object: any): _88.UnbondingDelegation;
                toJSON(message: _88.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_88.UnbondingDelegation>): _88.UnbondingDelegation;
                fromAmino(object: _88.UnbondingDelegationAmino): _88.UnbondingDelegation;
                toAmino(message: _88.UnbondingDelegation): _88.UnbondingDelegationAmino;
            };
            UnbondingDelegationEntry: {
                encode(message: _88.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.UnbondingDelegationEntry;
                fromJSON(object: any): _88.UnbondingDelegationEntry;
                toJSON(message: _88.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_88.UnbondingDelegationEntry>): _88.UnbondingDelegationEntry;
                fromAmino(object: _88.UnbondingDelegationEntryAmino): _88.UnbondingDelegationEntry;
                toAmino(message: _88.UnbondingDelegationEntry): _88.UnbondingDelegationEntryAmino;
            };
            RedelegationEntry: {
                encode(message: _88.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.RedelegationEntry;
                fromJSON(object: any): _88.RedelegationEntry;
                toJSON(message: _88.RedelegationEntry): unknown;
                fromPartial(object: Partial<_88.RedelegationEntry>): _88.RedelegationEntry;
                fromAmino(object: _88.RedelegationEntryAmino): _88.RedelegationEntry;
                toAmino(message: _88.RedelegationEntry): _88.RedelegationEntryAmino;
            };
            Redelegation: {
                encode(message: _88.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Redelegation;
                fromJSON(object: any): _88.Redelegation;
                toJSON(message: _88.Redelegation): unknown;
                fromPartial(object: Partial<_88.Redelegation>): _88.Redelegation;
                fromAmino(object: _88.RedelegationAmino): _88.Redelegation;
                toAmino(message: _88.Redelegation): _88.RedelegationAmino;
            };
            Params: {
                encode(message: _88.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Params;
                fromJSON(object: any): _88.Params;
                toJSON(message: _88.Params): unknown;
                fromPartial(object: Partial<_88.Params>): _88.Params;
                fromAmino(object: _88.ParamsAmino): _88.Params;
                toAmino(message: _88.Params): _88.ParamsAmino;
            };
            DelegationResponse: {
                encode(message: _88.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DelegationResponse;
                fromJSON(object: any): _88.DelegationResponse;
                toJSON(message: _88.DelegationResponse): unknown;
                fromPartial(object: Partial<_88.DelegationResponse>): _88.DelegationResponse;
                fromAmino(object: _88.DelegationResponseAmino): _88.DelegationResponse;
                toAmino(message: _88.DelegationResponse): _88.DelegationResponseAmino;
            };
            RedelegationEntryResponse: {
                encode(message: _88.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.RedelegationEntryResponse;
                fromJSON(object: any): _88.RedelegationEntryResponse;
                toJSON(message: _88.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_88.RedelegationEntryResponse>): _88.RedelegationEntryResponse;
                fromAmino(object: _88.RedelegationEntryResponseAmino): _88.RedelegationEntryResponse;
                toAmino(message: _88.RedelegationEntryResponse): _88.RedelegationEntryResponseAmino;
            };
            RedelegationResponse: {
                encode(message: _88.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.RedelegationResponse;
                fromJSON(object: any): _88.RedelegationResponse;
                toJSON(message: _88.RedelegationResponse): unknown;
                fromPartial(object: Partial<_88.RedelegationResponse>): _88.RedelegationResponse;
                fromAmino(object: _88.RedelegationResponseAmino): _88.RedelegationResponse;
                toAmino(message: _88.RedelegationResponse): _88.RedelegationResponseAmino;
            };
            Pool: {
                encode(message: _88.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Pool;
                fromJSON(object: any): _88.Pool;
                toJSON(message: _88.Pool): unknown;
                fromPartial(object: Partial<_88.Pool>): _88.Pool;
                fromAmino(object: _88.PoolAmino): _88.Pool;
                toAmino(message: _88.Pool): _88.PoolAmino;
            };
            QueryValidatorsRequest: {
                encode(message: _87.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorsRequest;
                fromJSON(object: any): _87.QueryValidatorsRequest;
                toJSON(message: _87.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorsRequest>): _87.QueryValidatorsRequest;
                fromAmino(object: _87.QueryValidatorsRequestAmino): _87.QueryValidatorsRequest;
                toAmino(message: _87.QueryValidatorsRequest): _87.QueryValidatorsRequestAmino;
            };
            QueryValidatorsResponse: {
                encode(message: _87.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorsResponse;
                fromJSON(object: any): _87.QueryValidatorsResponse;
                toJSON(message: _87.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorsResponse>): _87.QueryValidatorsResponse;
                fromAmino(object: _87.QueryValidatorsResponseAmino): _87.QueryValidatorsResponse;
                toAmino(message: _87.QueryValidatorsResponse): _87.QueryValidatorsResponseAmino;
            };
            QueryValidatorRequest: {
                encode(message: _87.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorRequest;
                fromJSON(object: any): _87.QueryValidatorRequest;
                toJSON(message: _87.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorRequest>): _87.QueryValidatorRequest;
                fromAmino(object: _87.QueryValidatorRequestAmino): _87.QueryValidatorRequest;
                toAmino(message: _87.QueryValidatorRequest): _87.QueryValidatorRequestAmino;
            };
            QueryValidatorResponse: {
                encode(message: _87.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorResponse;
                fromJSON(object: any): _87.QueryValidatorResponse;
                toJSON(message: _87.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorResponse>): _87.QueryValidatorResponse;
                fromAmino(object: _87.QueryValidatorResponseAmino): _87.QueryValidatorResponse;
                toAmino(message: _87.QueryValidatorResponse): _87.QueryValidatorResponseAmino;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _87.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _87.QueryValidatorDelegationsRequest;
                toJSON(message: _87.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorDelegationsRequest>): _87.QueryValidatorDelegationsRequest;
                fromAmino(object: _87.QueryValidatorDelegationsRequestAmino): _87.QueryValidatorDelegationsRequest;
                toAmino(message: _87.QueryValidatorDelegationsRequest): _87.QueryValidatorDelegationsRequestAmino;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _87.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _87.QueryValidatorDelegationsResponse;
                toJSON(message: _87.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorDelegationsResponse>): _87.QueryValidatorDelegationsResponse;
                fromAmino(object: _87.QueryValidatorDelegationsResponseAmino): _87.QueryValidatorDelegationsResponse;
                toAmino(message: _87.QueryValidatorDelegationsResponse): _87.QueryValidatorDelegationsResponseAmino;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _87.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _87.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _87.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorUnbondingDelegationsRequest>): _87.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _87.QueryValidatorUnbondingDelegationsRequestAmino): _87.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _87.QueryValidatorUnbondingDelegationsRequest): _87.QueryValidatorUnbondingDelegationsRequestAmino;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _87.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _87.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _87.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorUnbondingDelegationsResponse>): _87.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _87.QueryValidatorUnbondingDelegationsResponseAmino): _87.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _87.QueryValidatorUnbondingDelegationsResponse): _87.QueryValidatorUnbondingDelegationsResponseAmino;
            };
            QueryDelegationRequest: {
                encode(message: _87.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegationRequest;
                fromJSON(object: any): _87.QueryDelegationRequest;
                toJSON(message: _87.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegationRequest>): _87.QueryDelegationRequest;
                fromAmino(object: _87.QueryDelegationRequestAmino): _87.QueryDelegationRequest;
                toAmino(message: _87.QueryDelegationRequest): _87.QueryDelegationRequestAmino;
            };
            QueryDelegationResponse: {
                encode(message: _87.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegationResponse;
                fromJSON(object: any): _87.QueryDelegationResponse;
                toJSON(message: _87.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegationResponse>): _87.QueryDelegationResponse;
                fromAmino(object: _87.QueryDelegationResponseAmino): _87.QueryDelegationResponse;
                toAmino(message: _87.QueryDelegationResponse): _87.QueryDelegationResponseAmino;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _87.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _87.QueryUnbondingDelegationRequest;
                toJSON(message: _87.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_87.QueryUnbondingDelegationRequest>): _87.QueryUnbondingDelegationRequest;
                fromAmino(object: _87.QueryUnbondingDelegationRequestAmino): _87.QueryUnbondingDelegationRequest;
                toAmino(message: _87.QueryUnbondingDelegationRequest): _87.QueryUnbondingDelegationRequestAmino;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _87.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _87.QueryUnbondingDelegationResponse;
                toJSON(message: _87.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_87.QueryUnbondingDelegationResponse>): _87.QueryUnbondingDelegationResponse;
                fromAmino(object: _87.QueryUnbondingDelegationResponseAmino): _87.QueryUnbondingDelegationResponse;
                toAmino(message: _87.QueryUnbondingDelegationResponse): _87.QueryUnbondingDelegationResponseAmino;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _87.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _87.QueryDelegatorDelegationsRequest;
                toJSON(message: _87.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorDelegationsRequest>): _87.QueryDelegatorDelegationsRequest;
                fromAmino(object: _87.QueryDelegatorDelegationsRequestAmino): _87.QueryDelegatorDelegationsRequest;
                toAmino(message: _87.QueryDelegatorDelegationsRequest): _87.QueryDelegatorDelegationsRequestAmino;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _87.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _87.QueryDelegatorDelegationsResponse;
                toJSON(message: _87.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorDelegationsResponse>): _87.QueryDelegatorDelegationsResponse;
                fromAmino(object: _87.QueryDelegatorDelegationsResponseAmino): _87.QueryDelegatorDelegationsResponse;
                toAmino(message: _87.QueryDelegatorDelegationsResponse): _87.QueryDelegatorDelegationsResponseAmino;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _87.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _87.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _87.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorUnbondingDelegationsRequest>): _87.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _87.QueryDelegatorUnbondingDelegationsRequestAmino): _87.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _87.QueryDelegatorUnbondingDelegationsRequest): _87.QueryDelegatorUnbondingDelegationsRequestAmino;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _87.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _87.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _87.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorUnbondingDelegationsResponse>): _87.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _87.QueryDelegatorUnbondingDelegationsResponseAmino): _87.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _87.QueryDelegatorUnbondingDelegationsResponse): _87.QueryDelegatorUnbondingDelegationsResponseAmino;
            };
            QueryRedelegationsRequest: {
                encode(message: _87.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryRedelegationsRequest;
                fromJSON(object: any): _87.QueryRedelegationsRequest;
                toJSON(message: _87.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryRedelegationsRequest>): _87.QueryRedelegationsRequest;
                fromAmino(object: _87.QueryRedelegationsRequestAmino): _87.QueryRedelegationsRequest;
                toAmino(message: _87.QueryRedelegationsRequest): _87.QueryRedelegationsRequestAmino;
            };
            QueryRedelegationsResponse: {
                encode(message: _87.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryRedelegationsResponse;
                fromJSON(object: any): _87.QueryRedelegationsResponse;
                toJSON(message: _87.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryRedelegationsResponse>): _87.QueryRedelegationsResponse;
                fromAmino(object: _87.QueryRedelegationsResponseAmino): _87.QueryRedelegationsResponse;
                toAmino(message: _87.QueryRedelegationsResponse): _87.QueryRedelegationsResponseAmino;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _87.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _87.QueryDelegatorValidatorsRequest;
                toJSON(message: _87.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorsRequest>): _87.QueryDelegatorValidatorsRequest;
                fromAmino(object: _87.QueryDelegatorValidatorsRequestAmino): _87.QueryDelegatorValidatorsRequest;
                toAmino(message: _87.QueryDelegatorValidatorsRequest): _87.QueryDelegatorValidatorsRequestAmino;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _87.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _87.QueryDelegatorValidatorsResponse;
                toJSON(message: _87.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorsResponse>): _87.QueryDelegatorValidatorsResponse;
                fromAmino(object: _87.QueryDelegatorValidatorsResponseAmino): _87.QueryDelegatorValidatorsResponse;
                toAmino(message: _87.QueryDelegatorValidatorsResponse): _87.QueryDelegatorValidatorsResponseAmino;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _87.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _87.QueryDelegatorValidatorRequest;
                toJSON(message: _87.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorRequest>): _87.QueryDelegatorValidatorRequest;
                fromAmino(object: _87.QueryDelegatorValidatorRequestAmino): _87.QueryDelegatorValidatorRequest;
                toAmino(message: _87.QueryDelegatorValidatorRequest): _87.QueryDelegatorValidatorRequestAmino;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _87.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _87.QueryDelegatorValidatorResponse;
                toJSON(message: _87.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorResponse>): _87.QueryDelegatorValidatorResponse;
                fromAmino(object: _87.QueryDelegatorValidatorResponseAmino): _87.QueryDelegatorValidatorResponse;
                toAmino(message: _87.QueryDelegatorValidatorResponse): _87.QueryDelegatorValidatorResponseAmino;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _87.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryHistoricalInfoRequest;
                fromJSON(object: any): _87.QueryHistoricalInfoRequest;
                toJSON(message: _87.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_87.QueryHistoricalInfoRequest>): _87.QueryHistoricalInfoRequest;
                fromAmino(object: _87.QueryHistoricalInfoRequestAmino): _87.QueryHistoricalInfoRequest;
                toAmino(message: _87.QueryHistoricalInfoRequest): _87.QueryHistoricalInfoRequestAmino;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _87.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryHistoricalInfoResponse;
                fromJSON(object: any): _87.QueryHistoricalInfoResponse;
                toJSON(message: _87.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_87.QueryHistoricalInfoResponse>): _87.QueryHistoricalInfoResponse;
                fromAmino(object: _87.QueryHistoricalInfoResponseAmino): _87.QueryHistoricalInfoResponse;
                toAmino(message: _87.QueryHistoricalInfoResponse): _87.QueryHistoricalInfoResponseAmino;
            };
            QueryPoolRequest: {
                encode(_: _87.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryPoolRequest;
                fromJSON(_: any): _87.QueryPoolRequest;
                toJSON(_: _87.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_87.QueryPoolRequest>): _87.QueryPoolRequest;
                fromAmino(_: _87.QueryPoolRequestAmino): _87.QueryPoolRequest;
                toAmino(_: _87.QueryPoolRequest): _87.QueryPoolRequestAmino;
            };
            QueryPoolResponse: {
                encode(message: _87.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryPoolResponse;
                fromJSON(object: any): _87.QueryPoolResponse;
                toJSON(message: _87.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_87.QueryPoolResponse>): _87.QueryPoolResponse;
                fromAmino(object: _87.QueryPoolResponseAmino): _87.QueryPoolResponse;
                toAmino(message: _87.QueryPoolResponse): _87.QueryPoolResponseAmino;
            };
            QueryParamsRequest: {
                encode(_: _87.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsRequest;
                fromJSON(_: any): _87.QueryParamsRequest;
                toJSON(_: _87.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
                fromAmino(_: _87.QueryParamsRequestAmino): _87.QueryParamsRequest;
                toAmino(_: _87.QueryParamsRequest): _87.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _87.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsResponse;
                fromJSON(object: any): _87.QueryParamsResponse;
                toJSON(message: _87.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
                fromAmino(object: _87.QueryParamsResponseAmino): _87.QueryParamsResponse;
                toAmino(message: _87.QueryParamsResponse): _87.QueryParamsResponseAmino;
            };
            GenesisState: {
                encode(message: _86.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GenesisState;
                fromJSON(object: any): _86.GenesisState;
                toJSON(message: _86.GenesisState): unknown;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
                fromAmino(object: _86.GenesisStateAmino): _86.GenesisState;
                toAmino(message: _86.GenesisState): _86.GenesisStateAmino;
            };
            LastValidatorPower: {
                encode(message: _86.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.LastValidatorPower;
                fromJSON(object: any): _86.LastValidatorPower;
                toJSON(message: _86.LastValidatorPower): unknown;
                fromPartial(object: Partial<_86.LastValidatorPower>): _86.LastValidatorPower;
                fromAmino(object: _86.LastValidatorPowerAmino): _86.LastValidatorPower;
                toAmino(message: _86.LastValidatorPower): _86.LastValidatorPowerAmino;
            };
            authorizationTypeFromJSON(object: any): _85.AuthorizationType;
            authorizationTypeToJSON(object: _85.AuthorizationType): string;
            AuthorizationType: typeof _85.AuthorizationType;
            AuthorizationTypeSDKType: typeof _85.AuthorizationType;
            AuthorizationTypeAmino: typeof _85.AuthorizationType;
            StakeAuthorization: {
                encode(message: _85.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.StakeAuthorization;
                fromJSON(object: any): _85.StakeAuthorization;
                toJSON(message: _85.StakeAuthorization): unknown;
                fromPartial(object: Partial<_85.StakeAuthorization>): _85.StakeAuthorization;
                fromAmino(object: _85.StakeAuthorizationAmino): _85.StakeAuthorization;
                toAmino(message: _85.StakeAuthorization): _85.StakeAuthorizationAmino;
            };
            StakeAuthorization_Validators: {
                encode(message: _85.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.StakeAuthorization_Validators;
                fromJSON(object: any): _85.StakeAuthorization_Validators;
                toJSON(message: _85.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_85.StakeAuthorization_Validators>): _85.StakeAuthorization_Validators;
                fromAmino(object: _85.StakeAuthorization_ValidatorsAmino): _85.StakeAuthorization_Validators;
                toAmino(message: _85.StakeAuthorization_Validators): _85.StakeAuthorization_ValidatorsAmino;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _90.SignMode;
                signModeToJSON(object: _90.SignMode): string;
                SignMode: typeof _90.SignMode;
                SignModeSDKType: typeof _90.SignMode;
                SignModeAmino: typeof _90.SignMode;
                SignatureDescriptors: {
                    encode(message: _90.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SignatureDescriptors;
                    fromJSON(object: any): _90.SignatureDescriptors;
                    toJSON(message: _90.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptors>): _90.SignatureDescriptors;
                    fromAmino(object: _90.SignatureDescriptorsAmino): _90.SignatureDescriptors;
                    toAmino(message: _90.SignatureDescriptors): _90.SignatureDescriptorsAmino;
                };
                SignatureDescriptor: {
                    encode(message: _90.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SignatureDescriptor;
                    fromJSON(object: any): _90.SignatureDescriptor;
                    toJSON(message: _90.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptor>): _90.SignatureDescriptor;
                    fromAmino(object: _90.SignatureDescriptorAmino): _90.SignatureDescriptor;
                    toAmino(message: _90.SignatureDescriptor): _90.SignatureDescriptorAmino;
                };
                SignatureDescriptor_Data: {
                    encode(message: _90.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SignatureDescriptor_Data;
                    fromJSON(object: any): _90.SignatureDescriptor_Data;
                    toJSON(message: _90.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptor_Data>): _90.SignatureDescriptor_Data;
                    fromAmino(object: _90.SignatureDescriptor_DataAmino): _90.SignatureDescriptor_Data;
                    toAmino(message: _90.SignatureDescriptor_Data): _90.SignatureDescriptor_DataAmino;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _90.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _90.SignatureDescriptor_Data_Single;
                    toJSON(message: _90.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptor_Data_Single>): _90.SignatureDescriptor_Data_Single;
                    fromAmino(object: _90.SignatureDescriptor_Data_SingleAmino): _90.SignatureDescriptor_Data_Single;
                    toAmino(message: _90.SignatureDescriptor_Data_Single): _90.SignatureDescriptor_Data_SingleAmino;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _90.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _90.SignatureDescriptor_Data_Multi;
                    toJSON(message: _90.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptor_Data_Multi>): _90.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _90.SignatureDescriptor_Data_MultiAmino): _90.SignatureDescriptor_Data_Multi;
                    toAmino(message: _90.SignatureDescriptor_Data_Multi): _90.SignatureDescriptor_Data_MultiAmino;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _162.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _91.SimulateRequest): Promise<_91.SimulateResponse>;
                getTx(request: _91.GetTxRequest): Promise<_91.GetTxResponse>;
                broadcastTx(request: _91.BroadcastTxRequest): Promise<_91.BroadcastTxResponse>;
                getTxsEvent(request: _91.GetTxsEventRequest): Promise<_91.GetTxsEventResponse>;
                getBlockWithTxs(request: _91.GetBlockWithTxsRequest): Promise<_91.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _92.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Tx;
                fromJSON(object: any): _92.Tx;
                toJSON(message: _92.Tx): unknown;
                fromPartial(object: Partial<_92.Tx>): _92.Tx;
                fromAmino(object: _92.TxAmino): _92.Tx;
                toAmino(message: _92.Tx): _92.TxAmino;
            };
            TxRaw: {
                encode(message: _92.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.TxRaw;
                fromJSON(object: any): _92.TxRaw;
                toJSON(message: _92.TxRaw): unknown;
                fromPartial(object: Partial<_92.TxRaw>): _92.TxRaw;
                fromAmino(object: _92.TxRawAmino): _92.TxRaw;
                toAmino(message: _92.TxRaw): _92.TxRawAmino;
            };
            SignDoc: {
                encode(message: _92.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SignDoc;
                fromJSON(object: any): _92.SignDoc;
                toJSON(message: _92.SignDoc): unknown;
                fromPartial(object: Partial<_92.SignDoc>): _92.SignDoc;
                fromAmino(object: _92.SignDocAmino): _92.SignDoc;
                toAmino(message: _92.SignDoc): _92.SignDocAmino;
            };
            SignDocDirectAux: {
                encode(message: _92.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SignDocDirectAux;
                fromJSON(object: any): _92.SignDocDirectAux;
                toJSON(message: _92.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_92.SignDocDirectAux>): _92.SignDocDirectAux;
                fromAmino(object: _92.SignDocDirectAuxAmino): _92.SignDocDirectAux;
                toAmino(message: _92.SignDocDirectAux): _92.SignDocDirectAuxAmino;
            };
            TxBody: {
                encode(message: _92.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.TxBody;
                fromJSON(object: any): _92.TxBody;
                toJSON(message: _92.TxBody): unknown;
                fromPartial(object: Partial<_92.TxBody>): _92.TxBody;
                fromAmino(object: _92.TxBodyAmino): _92.TxBody;
                toAmino(message: _92.TxBody): _92.TxBodyAmino;
            };
            AuthInfo: {
                encode(message: _92.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.AuthInfo;
                fromJSON(object: any): _92.AuthInfo;
                toJSON(message: _92.AuthInfo): unknown;
                fromPartial(object: Partial<_92.AuthInfo>): _92.AuthInfo;
                fromAmino(object: _92.AuthInfoAmino): _92.AuthInfo;
                toAmino(message: _92.AuthInfo): _92.AuthInfoAmino;
            };
            SignerInfo: {
                encode(message: _92.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SignerInfo;
                fromJSON(object: any): _92.SignerInfo;
                toJSON(message: _92.SignerInfo): unknown;
                fromPartial(object: Partial<_92.SignerInfo>): _92.SignerInfo;
                fromAmino(object: _92.SignerInfoAmino): _92.SignerInfo;
                toAmino(message: _92.SignerInfo): _92.SignerInfoAmino;
            };
            ModeInfo: {
                encode(message: _92.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ModeInfo;
                fromJSON(object: any): _92.ModeInfo;
                toJSON(message: _92.ModeInfo): unknown;
                fromPartial(object: Partial<_92.ModeInfo>): _92.ModeInfo;
                fromAmino(object: _92.ModeInfoAmino): _92.ModeInfo;
                toAmino(message: _92.ModeInfo): _92.ModeInfoAmino;
            };
            ModeInfo_Single: {
                encode(message: _92.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ModeInfo_Single;
                fromJSON(object: any): _92.ModeInfo_Single;
                toJSON(message: _92.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_92.ModeInfo_Single>): _92.ModeInfo_Single;
                fromAmino(object: _92.ModeInfo_SingleAmino): _92.ModeInfo_Single;
                toAmino(message: _92.ModeInfo_Single): _92.ModeInfo_SingleAmino;
            };
            ModeInfo_Multi: {
                encode(message: _92.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ModeInfo_Multi;
                fromJSON(object: any): _92.ModeInfo_Multi;
                toJSON(message: _92.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_92.ModeInfo_Multi>): _92.ModeInfo_Multi;
                fromAmino(object: _92.ModeInfo_MultiAmino): _92.ModeInfo_Multi;
                toAmino(message: _92.ModeInfo_Multi): _92.ModeInfo_MultiAmino;
            };
            Fee: {
                encode(message: _92.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Fee;
                fromJSON(object: any): _92.Fee;
                toJSON(message: _92.Fee): unknown;
                fromPartial(object: Partial<_92.Fee>): _92.Fee;
                fromAmino(object: _92.FeeAmino): _92.Fee;
                toAmino(message: _92.Fee): _92.FeeAmino;
            };
            Tip: {
                encode(message: _92.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Tip;
                fromJSON(object: any): _92.Tip;
                toJSON(message: _92.Tip): unknown;
                fromPartial(object: Partial<_92.Tip>): _92.Tip;
                fromAmino(object: _92.TipAmino): _92.Tip;
                toAmino(message: _92.Tip): _92.TipAmino;
            };
            AuxSignerData: {
                encode(message: _92.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.AuxSignerData;
                fromJSON(object: any): _92.AuxSignerData;
                toJSON(message: _92.AuxSignerData): unknown;
                fromPartial(object: Partial<_92.AuxSignerData>): _92.AuxSignerData;
                fromAmino(object: _92.AuxSignerDataAmino): _92.AuxSignerData;
                toAmino(message: _92.AuxSignerData): _92.AuxSignerDataAmino;
            };
            orderByFromJSON(object: any): _91.OrderBy;
            orderByToJSON(object: _91.OrderBy): string;
            broadcastModeFromJSON(object: any): _91.BroadcastMode;
            broadcastModeToJSON(object: _91.BroadcastMode): string;
            OrderBy: typeof _91.OrderBy;
            OrderBySDKType: typeof _91.OrderBy;
            OrderByAmino: typeof _91.OrderBy;
            BroadcastMode: typeof _91.BroadcastMode;
            BroadcastModeSDKType: typeof _91.BroadcastMode;
            BroadcastModeAmino: typeof _91.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _91.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GetTxsEventRequest;
                fromJSON(object: any): _91.GetTxsEventRequest;
                toJSON(message: _91.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_91.GetTxsEventRequest>): _91.GetTxsEventRequest;
                fromAmino(object: _91.GetTxsEventRequestAmino): _91.GetTxsEventRequest;
                toAmino(message: _91.GetTxsEventRequest): _91.GetTxsEventRequestAmino;
            };
            GetTxsEventResponse: {
                encode(message: _91.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GetTxsEventResponse;
                fromJSON(object: any): _91.GetTxsEventResponse;
                toJSON(message: _91.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_91.GetTxsEventResponse>): _91.GetTxsEventResponse;
                fromAmino(object: _91.GetTxsEventResponseAmino): _91.GetTxsEventResponse;
                toAmino(message: _91.GetTxsEventResponse): _91.GetTxsEventResponseAmino;
            };
            BroadcastTxRequest: {
                encode(message: _91.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.BroadcastTxRequest;
                fromJSON(object: any): _91.BroadcastTxRequest;
                toJSON(message: _91.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_91.BroadcastTxRequest>): _91.BroadcastTxRequest;
                fromAmino(object: _91.BroadcastTxRequestAmino): _91.BroadcastTxRequest;
                toAmino(message: _91.BroadcastTxRequest): _91.BroadcastTxRequestAmino;
            };
            BroadcastTxResponse: {
                encode(message: _91.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.BroadcastTxResponse;
                fromJSON(object: any): _91.BroadcastTxResponse;
                toJSON(message: _91.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_91.BroadcastTxResponse>): _91.BroadcastTxResponse;
                fromAmino(object: _91.BroadcastTxResponseAmino): _91.BroadcastTxResponse;
                toAmino(message: _91.BroadcastTxResponse): _91.BroadcastTxResponseAmino;
            };
            SimulateRequest: {
                encode(message: _91.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SimulateRequest;
                fromJSON(object: any): _91.SimulateRequest;
                toJSON(message: _91.SimulateRequest): unknown;
                fromPartial(object: Partial<_91.SimulateRequest>): _91.SimulateRequest;
                fromAmino(object: _91.SimulateRequestAmino): _91.SimulateRequest;
                toAmino(message: _91.SimulateRequest): _91.SimulateRequestAmino;
            };
            SimulateResponse: {
                encode(message: _91.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SimulateResponse;
                fromJSON(object: any): _91.SimulateResponse;
                toJSON(message: _91.SimulateResponse): unknown;
                fromPartial(object: Partial<_91.SimulateResponse>): _91.SimulateResponse;
                fromAmino(object: _91.SimulateResponseAmino): _91.SimulateResponse;
                toAmino(message: _91.SimulateResponse): _91.SimulateResponseAmino;
            };
            GetTxRequest: {
                encode(message: _91.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GetTxRequest;
                fromJSON(object: any): _91.GetTxRequest;
                toJSON(message: _91.GetTxRequest): unknown;
                fromPartial(object: Partial<_91.GetTxRequest>): _91.GetTxRequest;
                fromAmino(object: _91.GetTxRequestAmino): _91.GetTxRequest;
                toAmino(message: _91.GetTxRequest): _91.GetTxRequestAmino;
            };
            GetTxResponse: {
                encode(message: _91.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GetTxResponse;
                fromJSON(object: any): _91.GetTxResponse;
                toJSON(message: _91.GetTxResponse): unknown;
                fromPartial(object: Partial<_91.GetTxResponse>): _91.GetTxResponse;
                fromAmino(object: _91.GetTxResponseAmino): _91.GetTxResponse;
                toAmino(message: _91.GetTxResponse): _91.GetTxResponseAmino;
            };
            GetBlockWithTxsRequest: {
                encode(message: _91.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GetBlockWithTxsRequest;
                fromJSON(object: any): _91.GetBlockWithTxsRequest;
                toJSON(message: _91.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_91.GetBlockWithTxsRequest>): _91.GetBlockWithTxsRequest;
                fromAmino(object: _91.GetBlockWithTxsRequestAmino): _91.GetBlockWithTxsRequest;
                toAmino(message: _91.GetBlockWithTxsRequest): _91.GetBlockWithTxsRequestAmino;
            };
            GetBlockWithTxsResponse: {
                encode(message: _91.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GetBlockWithTxsResponse;
                fromJSON(object: any): _91.GetBlockWithTxsResponse;
                toJSON(message: _91.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_91.GetBlockWithTxsResponse>): _91.GetBlockWithTxsResponse;
                fromAmino(object: _91.GetBlockWithTxsResponseAmino): _91.GetBlockWithTxsResponse;
                toAmino(message: _91.GetBlockWithTxsResponse): _91.GetBlockWithTxsResponseAmino;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _176.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _93.QueryCurrentPlanRequest): Promise<_93.QueryCurrentPlanResponse>;
                appliedPlan(request: _93.QueryAppliedPlanRequest): Promise<_93.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _93.QueryUpgradedConsensusStateRequest): Promise<_93.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _93.QueryModuleVersionsRequest): Promise<_93.QueryModuleVersionsResponse>;
                authority(request?: _93.QueryAuthorityRequest): Promise<_93.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _94.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _94.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _94.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _94.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _94.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _94.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _94.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _94.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _94.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _94.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _94.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _94.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _94.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _94.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _94.MsgSoftwareUpgrade) => _94.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _94.MsgSoftwareUpgradeAmino) => _94.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCancelUpgrade) => _94.MsgCancelUpgradeAmino;
                    fromAmino: (object: _94.MsgCancelUpgradeAmino) => _94.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _95.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Plan;
                fromJSON(object: any): _95.Plan;
                toJSON(message: _95.Plan): unknown;
                fromPartial(object: Partial<_95.Plan>): _95.Plan;
                fromAmino(object: _95.PlanAmino): _95.Plan;
                toAmino(message: _95.Plan): _95.PlanAmino;
            };
            SoftwareUpgradeProposal: {
                encode(message: _95.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SoftwareUpgradeProposal;
                fromJSON(object: any): _95.SoftwareUpgradeProposal;
                toJSON(message: _95.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_95.SoftwareUpgradeProposal>): _95.SoftwareUpgradeProposal;
                fromAmino(object: _95.SoftwareUpgradeProposalAmino): _95.SoftwareUpgradeProposal;
                toAmino(message: _95.SoftwareUpgradeProposal): _95.SoftwareUpgradeProposalAmino;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _95.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _95.CancelSoftwareUpgradeProposal;
                toJSON(message: _95.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_95.CancelSoftwareUpgradeProposal>): _95.CancelSoftwareUpgradeProposal;
                fromAmino(object: _95.CancelSoftwareUpgradeProposalAmino): _95.CancelSoftwareUpgradeProposal;
                toAmino(message: _95.CancelSoftwareUpgradeProposal): _95.CancelSoftwareUpgradeProposalAmino;
            };
            ModuleVersion: {
                encode(message: _95.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ModuleVersion;
                fromJSON(object: any): _95.ModuleVersion;
                toJSON(message: _95.ModuleVersion): unknown;
                fromPartial(object: Partial<_95.ModuleVersion>): _95.ModuleVersion;
                fromAmino(object: _95.ModuleVersionAmino): _95.ModuleVersion;
                toAmino(message: _95.ModuleVersion): _95.ModuleVersionAmino;
            };
            MsgSoftwareUpgrade: {
                encode(message: _94.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgSoftwareUpgrade;
                fromJSON(object: any): _94.MsgSoftwareUpgrade;
                toJSON(message: _94.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_94.MsgSoftwareUpgrade>): _94.MsgSoftwareUpgrade;
                fromAmino(object: _94.MsgSoftwareUpgradeAmino): _94.MsgSoftwareUpgrade;
                toAmino(message: _94.MsgSoftwareUpgrade): _94.MsgSoftwareUpgradeAmino;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _94.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _94.MsgSoftwareUpgradeResponse;
                toJSON(_: _94.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_94.MsgSoftwareUpgradeResponse>): _94.MsgSoftwareUpgradeResponse;
                fromAmino(_: _94.MsgSoftwareUpgradeResponseAmino): _94.MsgSoftwareUpgradeResponse;
                toAmino(_: _94.MsgSoftwareUpgradeResponse): _94.MsgSoftwareUpgradeResponseAmino;
            };
            MsgCancelUpgrade: {
                encode(message: _94.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCancelUpgrade;
                fromJSON(object: any): _94.MsgCancelUpgrade;
                toJSON(message: _94.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_94.MsgCancelUpgrade>): _94.MsgCancelUpgrade;
                fromAmino(object: _94.MsgCancelUpgradeAmino): _94.MsgCancelUpgrade;
                toAmino(message: _94.MsgCancelUpgrade): _94.MsgCancelUpgradeAmino;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _94.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCancelUpgradeResponse;
                fromJSON(_: any): _94.MsgCancelUpgradeResponse;
                toJSON(_: _94.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_94.MsgCancelUpgradeResponse>): _94.MsgCancelUpgradeResponse;
                fromAmino(_: _94.MsgCancelUpgradeResponseAmino): _94.MsgCancelUpgradeResponse;
                toAmino(_: _94.MsgCancelUpgradeResponse): _94.MsgCancelUpgradeResponseAmino;
            };
            QueryCurrentPlanRequest: {
                encode(_: _93.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryCurrentPlanRequest;
                fromJSON(_: any): _93.QueryCurrentPlanRequest;
                toJSON(_: _93.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_93.QueryCurrentPlanRequest>): _93.QueryCurrentPlanRequest;
                fromAmino(_: _93.QueryCurrentPlanRequestAmino): _93.QueryCurrentPlanRequest;
                toAmino(_: _93.QueryCurrentPlanRequest): _93.QueryCurrentPlanRequestAmino;
            };
            QueryCurrentPlanResponse: {
                encode(message: _93.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryCurrentPlanResponse;
                fromJSON(object: any): _93.QueryCurrentPlanResponse;
                toJSON(message: _93.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_93.QueryCurrentPlanResponse>): _93.QueryCurrentPlanResponse;
                fromAmino(object: _93.QueryCurrentPlanResponseAmino): _93.QueryCurrentPlanResponse;
                toAmino(message: _93.QueryCurrentPlanResponse): _93.QueryCurrentPlanResponseAmino;
            };
            QueryAppliedPlanRequest: {
                encode(message: _93.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryAppliedPlanRequest;
                fromJSON(object: any): _93.QueryAppliedPlanRequest;
                toJSON(message: _93.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_93.QueryAppliedPlanRequest>): _93.QueryAppliedPlanRequest;
                fromAmino(object: _93.QueryAppliedPlanRequestAmino): _93.QueryAppliedPlanRequest;
                toAmino(message: _93.QueryAppliedPlanRequest): _93.QueryAppliedPlanRequestAmino;
            };
            QueryAppliedPlanResponse: {
                encode(message: _93.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryAppliedPlanResponse;
                fromJSON(object: any): _93.QueryAppliedPlanResponse;
                toJSON(message: _93.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_93.QueryAppliedPlanResponse>): _93.QueryAppliedPlanResponse;
                fromAmino(object: _93.QueryAppliedPlanResponseAmino): _93.QueryAppliedPlanResponse;
                toAmino(message: _93.QueryAppliedPlanResponse): _93.QueryAppliedPlanResponseAmino;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _93.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _93.QueryUpgradedConsensusStateRequest;
                toJSON(message: _93.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_93.QueryUpgradedConsensusStateRequest>): _93.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _93.QueryUpgradedConsensusStateRequestAmino): _93.QueryUpgradedConsensusStateRequest;
                toAmino(message: _93.QueryUpgradedConsensusStateRequest): _93.QueryUpgradedConsensusStateRequestAmino;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _93.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _93.QueryUpgradedConsensusStateResponse;
                toJSON(message: _93.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_93.QueryUpgradedConsensusStateResponse>): _93.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _93.QueryUpgradedConsensusStateResponseAmino): _93.QueryUpgradedConsensusStateResponse;
                toAmino(message: _93.QueryUpgradedConsensusStateResponse): _93.QueryUpgradedConsensusStateResponseAmino;
            };
            QueryModuleVersionsRequest: {
                encode(message: _93.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryModuleVersionsRequest;
                fromJSON(object: any): _93.QueryModuleVersionsRequest;
                toJSON(message: _93.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_93.QueryModuleVersionsRequest>): _93.QueryModuleVersionsRequest;
                fromAmino(object: _93.QueryModuleVersionsRequestAmino): _93.QueryModuleVersionsRequest;
                toAmino(message: _93.QueryModuleVersionsRequest): _93.QueryModuleVersionsRequestAmino;
            };
            QueryModuleVersionsResponse: {
                encode(message: _93.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryModuleVersionsResponse;
                fromJSON(object: any): _93.QueryModuleVersionsResponse;
                toJSON(message: _93.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_93.QueryModuleVersionsResponse>): _93.QueryModuleVersionsResponse;
                fromAmino(object: _93.QueryModuleVersionsResponseAmino): _93.QueryModuleVersionsResponse;
                toAmino(message: _93.QueryModuleVersionsResponse): _93.QueryModuleVersionsResponseAmino;
            };
            QueryAuthorityRequest: {
                encode(_: _93.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryAuthorityRequest;
                fromJSON(_: any): _93.QueryAuthorityRequest;
                toJSON(_: _93.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_93.QueryAuthorityRequest>): _93.QueryAuthorityRequest;
                fromAmino(_: _93.QueryAuthorityRequestAmino): _93.QueryAuthorityRequest;
                toAmino(_: _93.QueryAuthorityRequest): _93.QueryAuthorityRequestAmino;
            };
            QueryAuthorityResponse: {
                encode(message: _93.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryAuthorityResponse;
                fromJSON(object: any): _93.QueryAuthorityResponse;
                toJSON(message: _93.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_93.QueryAuthorityResponse>): _93.QueryAuthorityResponse;
                fromAmino(object: _93.QueryAuthorityResponseAmino): _93.QueryAuthorityResponse;
                toAmino(message: _93.QueryAuthorityResponse): _93.QueryAuthorityResponseAmino;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _177.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _96.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _96.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _96.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _96.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _96.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _96.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _96.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _96.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _96.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _96.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _96.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _96.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _96.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _96.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _96.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _96.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _96.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _96.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _96.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _96.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _96.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _96.MsgCreateVestingAccount) => _96.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _96.MsgCreateVestingAccountAmino) => _96.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _96.MsgCreatePermanentLockedAccount) => _96.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _96.MsgCreatePermanentLockedAccountAmino) => _96.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _96.MsgCreatePeriodicVestingAccount) => _96.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _96.MsgCreatePeriodicVestingAccountAmino) => _96.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _97.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.BaseVestingAccount;
                fromJSON(object: any): _97.BaseVestingAccount;
                toJSON(message: _97.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_97.BaseVestingAccount>): _97.BaseVestingAccount;
                fromAmino(object: _97.BaseVestingAccountAmino): _97.BaseVestingAccount;
                toAmino(message: _97.BaseVestingAccount): _97.BaseVestingAccountAmino;
            };
            ContinuousVestingAccount: {
                encode(message: _97.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ContinuousVestingAccount;
                fromJSON(object: any): _97.ContinuousVestingAccount;
                toJSON(message: _97.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_97.ContinuousVestingAccount>): _97.ContinuousVestingAccount;
                fromAmino(object: _97.ContinuousVestingAccountAmino): _97.ContinuousVestingAccount;
                toAmino(message: _97.ContinuousVestingAccount): _97.ContinuousVestingAccountAmino;
            };
            DelayedVestingAccount: {
                encode(message: _97.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.DelayedVestingAccount;
                fromJSON(object: any): _97.DelayedVestingAccount;
                toJSON(message: _97.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_97.DelayedVestingAccount>): _97.DelayedVestingAccount;
                fromAmino(object: _97.DelayedVestingAccountAmino): _97.DelayedVestingAccount;
                toAmino(message: _97.DelayedVestingAccount): _97.DelayedVestingAccountAmino;
            };
            Period: {
                encode(message: _97.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Period;
                fromJSON(object: any): _97.Period;
                toJSON(message: _97.Period): unknown;
                fromPartial(object: Partial<_97.Period>): _97.Period;
                fromAmino(object: _97.PeriodAmino): _97.Period;
                toAmino(message: _97.Period): _97.PeriodAmino;
            };
            PeriodicVestingAccount: {
                encode(message: _97.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.PeriodicVestingAccount;
                fromJSON(object: any): _97.PeriodicVestingAccount;
                toJSON(message: _97.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_97.PeriodicVestingAccount>): _97.PeriodicVestingAccount;
                fromAmino(object: _97.PeriodicVestingAccountAmino): _97.PeriodicVestingAccount;
                toAmino(message: _97.PeriodicVestingAccount): _97.PeriodicVestingAccountAmino;
            };
            PermanentLockedAccount: {
                encode(message: _97.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.PermanentLockedAccount;
                fromJSON(object: any): _97.PermanentLockedAccount;
                toJSON(message: _97.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_97.PermanentLockedAccount>): _97.PermanentLockedAccount;
                fromAmino(object: _97.PermanentLockedAccountAmino): _97.PermanentLockedAccount;
                toAmino(message: _97.PermanentLockedAccount): _97.PermanentLockedAccountAmino;
            };
            MsgCreateVestingAccount: {
                encode(message: _96.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCreateVestingAccount;
                fromJSON(object: any): _96.MsgCreateVestingAccount;
                toJSON(message: _96.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_96.MsgCreateVestingAccount>): _96.MsgCreateVestingAccount;
                fromAmino(object: _96.MsgCreateVestingAccountAmino): _96.MsgCreateVestingAccount;
                toAmino(message: _96.MsgCreateVestingAccount): _96.MsgCreateVestingAccountAmino;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _96.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _96.MsgCreateVestingAccountResponse;
                toJSON(_: _96.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_96.MsgCreateVestingAccountResponse>): _96.MsgCreateVestingAccountResponse;
                fromAmino(_: _96.MsgCreateVestingAccountResponseAmino): _96.MsgCreateVestingAccountResponse;
                toAmino(_: _96.MsgCreateVestingAccountResponse): _96.MsgCreateVestingAccountResponseAmino;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _96.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _96.MsgCreatePermanentLockedAccount;
                toJSON(message: _96.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_96.MsgCreatePermanentLockedAccount>): _96.MsgCreatePermanentLockedAccount;
                fromAmino(object: _96.MsgCreatePermanentLockedAccountAmino): _96.MsgCreatePermanentLockedAccount;
                toAmino(message: _96.MsgCreatePermanentLockedAccount): _96.MsgCreatePermanentLockedAccountAmino;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _96.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _96.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _96.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_96.MsgCreatePermanentLockedAccountResponse>): _96.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _96.MsgCreatePermanentLockedAccountResponseAmino): _96.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _96.MsgCreatePermanentLockedAccountResponse): _96.MsgCreatePermanentLockedAccountResponseAmino;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _96.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _96.MsgCreatePeriodicVestingAccount;
                toJSON(message: _96.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_96.MsgCreatePeriodicVestingAccount>): _96.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _96.MsgCreatePeriodicVestingAccountAmino): _96.MsgCreatePeriodicVestingAccount;
                toAmino(message: _96.MsgCreatePeriodicVestingAccount): _96.MsgCreatePeriodicVestingAccountAmino;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _96.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _96.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _96.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_96.MsgCreatePeriodicVestingAccountResponse>): _96.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _96.MsgCreatePeriodicVestingAccountResponseAmino): _96.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _96.MsgCreatePeriodicVestingAccountResponse): _96.MsgCreatePeriodicVestingAccountResponseAmino;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _164.MsgClientImpl;
                };
                bank: {
                    v1beta1: _165.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _166.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _167.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _168.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _169.MsgClientImpl;
                };
                gov: {
                    v1: _170.MsgClientImpl;
                    v1beta1: _171.MsgClientImpl;
                };
                group: {
                    v1: _172.MsgClientImpl;
                };
                nft: {
                    v1beta1: _173.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _174.MsgClientImpl;
                };
                staking: {
                    v1beta1: _175.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _176.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _177.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _5.QueryConfigRequest): Promise<_5.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _8.QueryAccountsRequest): Promise<_8.QueryAccountsResponse>;
                        account(request: _8.QueryAccountRequest): Promise<_8.QueryAccountResponse>;
                        accountAddressByID(request: _8.QueryAccountAddressByIDRequest): Promise<_8.QueryAccountAddressByIDResponse>;
                        params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                        moduleAccounts(request?: _8.QueryModuleAccountsRequest): Promise<_8.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _8.QueryModuleAccountByNameRequest): Promise<_8.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _8.Bech32PrefixRequest): Promise<_8.Bech32PrefixResponse>;
                        addressBytesToString(request: _8.AddressBytesToStringRequest): Promise<_8.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _8.AddressStringToBytesRequest): Promise<_8.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _12.QueryGrantsRequest): Promise<_12.QueryGrantsResponse>;
                        granterGrants(request: _12.QueryGranterGrantsRequest): Promise<_12.QueryGranterGrantsResponse>;
                        granteeGrants(request: _12.QueryGranteeGrantsRequest): Promise<_12.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _17.QueryBalanceRequest): Promise<_17.QueryBalanceResponse>;
                        allBalances(request: _17.QueryAllBalancesRequest): Promise<_17.QueryAllBalancesResponse>;
                        spendableBalances(request: _17.QuerySpendableBalancesRequest): Promise<_17.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _17.QueryTotalSupplyRequest): Promise<_17.QueryTotalSupplyResponse>;
                        supplyOf(request: _17.QuerySupplyOfRequest): Promise<_17.QuerySupplyOfResponse>;
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        denomMetadata(request: _17.QueryDenomMetadataRequest): Promise<_17.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _17.QueryDenomsMetadataRequest): Promise<_17.QueryDenomsMetadataResponse>;
                        denomOwners(request: _17.QueryDenomOwnersRequest): Promise<_17.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _21.ConfigRequest): Promise<_21.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _28.GetNodeInfoRequest): Promise<_28.GetNodeInfoResponse>;
                            getSyncing(request?: _28.GetSyncingRequest): Promise<_28.GetSyncingResponse>;
                            getLatestBlock(request?: _28.GetLatestBlockRequest): Promise<_28.GetLatestBlockResponse>;
                            getBlockByHeight(request: _28.GetBlockByHeightRequest): Promise<_28.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _28.GetLatestValidatorSetRequest): Promise<_28.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _28.GetValidatorSetByHeightRequest): Promise<_28.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _28.ABCIQueryRequest): Promise<_28.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _43.QueryValidatorOutstandingRewardsRequest): Promise<_43.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _43.QueryValidatorCommissionRequest): Promise<_43.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _43.QueryValidatorSlashesRequest): Promise<_43.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _43.QueryDelegationRewardsRequest): Promise<_43.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _43.QueryDelegationTotalRewardsRequest): Promise<_43.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _43.QueryDelegatorValidatorsRequest): Promise<_43.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _43.QueryDelegatorWithdrawAddressRequest): Promise<_43.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _43.QueryCommunityPoolRequest): Promise<_43.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _47.QueryEvidenceRequest): Promise<_47.QueryEvidenceResponse>;
                        allEvidence(request?: _47.QueryAllEvidenceRequest): Promise<_47.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _51.QueryAllowanceRequest): Promise<_51.QueryAllowanceResponse>;
                        allowances(request: _51.QueryAllowancesRequest): Promise<_51.QueryAllowancesResponse>;
                        allowancesByGranter(request: _51.QueryAllowancesByGranterRequest): Promise<_51.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _56.QueryProposalRequest): Promise<_56.QueryProposalResponse>;
                        proposals(request: _56.QueryProposalsRequest): Promise<_56.QueryProposalsResponse>;
                        vote(request: _56.QueryVoteRequest): Promise<_56.QueryVoteResponse>;
                        votes(request: _56.QueryVotesRequest): Promise<_56.QueryVotesResponse>;
                        params(request: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                        deposit(request: _56.QueryDepositRequest): Promise<_56.QueryDepositResponse>;
                        deposits(request: _56.QueryDepositsRequest): Promise<_56.QueryDepositsResponse>;
                        tallyResult(request: _56.QueryTallyResultRequest): Promise<_56.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _60.QueryProposalRequest): Promise<_60.QueryProposalResponse>;
                        proposals(request: _60.QueryProposalsRequest): Promise<_60.QueryProposalsResponse>;
                        vote(request: _60.QueryVoteRequest): Promise<_60.QueryVoteResponse>;
                        votes(request: _60.QueryVotesRequest): Promise<_60.QueryVotesResponse>;
                        params(request: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                        deposit(request: _60.QueryDepositRequest): Promise<_60.QueryDepositResponse>;
                        deposits(request: _60.QueryDepositsRequest): Promise<_60.QueryDepositsResponse>;
                        tallyResult(request: _60.QueryTallyResultRequest): Promise<_60.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _64.QueryGroupInfoRequest): Promise<_64.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _64.QueryGroupPolicyInfoRequest): Promise<_64.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _64.QueryGroupMembersRequest): Promise<_64.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _64.QueryGroupsByAdminRequest): Promise<_64.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _64.QueryGroupPoliciesByGroupRequest): Promise<_64.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _64.QueryGroupPoliciesByAdminRequest): Promise<_64.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _64.QueryProposalRequest): Promise<_64.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _64.QueryProposalsByGroupPolicyRequest): Promise<_64.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _64.QueryVoteByProposalVoterRequest): Promise<_64.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _64.QueryVotesByProposalRequest): Promise<_64.QueryVotesByProposalResponse>;
                        votesByVoter(request: _64.QueryVotesByVoterRequest): Promise<_64.QueryVotesByVoterResponse>;
                        groupsByMember(request: _64.QueryGroupsByMemberRequest): Promise<_64.QueryGroupsByMemberResponse>;
                        tallyResult(request: _64.QueryTallyResultRequest): Promise<_64.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                        inflation(request?: _69.QueryInflationRequest): Promise<_69.QueryInflationResponse>;
                        annualProvisions(request?: _69.QueryAnnualProvisionsRequest): Promise<_69.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _74.QueryBalanceRequest): Promise<_74.QueryBalanceResponse>;
                        owner(request: _74.QueryOwnerRequest): Promise<_74.QueryOwnerResponse>;
                        supply(request: _74.QuerySupplyRequest): Promise<_74.QuerySupplyResponse>;
                        nFTs(request: _74.QueryNFTsRequest): Promise<_74.QueryNFTsResponse>;
                        nFT(request: _74.QueryNFTRequest): Promise<_74.QueryNFTResponse>;
                        class(request: _74.QueryClassRequest): Promise<_74.QueryClassResponse>;
                        classes(request?: _74.QueryClassesRequest): Promise<_74.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                        subspaces(request?: _80.QuerySubspacesRequest): Promise<_80.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                        signingInfo(request: _82.QuerySigningInfoRequest): Promise<_82.QuerySigningInfoResponse>;
                        signingInfos(request?: _82.QuerySigningInfosRequest): Promise<_82.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _87.QueryValidatorsRequest): Promise<_87.QueryValidatorsResponse>;
                        validator(request: _87.QueryValidatorRequest): Promise<_87.QueryValidatorResponse>;
                        validatorDelegations(request: _87.QueryValidatorDelegationsRequest): Promise<_87.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _87.QueryValidatorUnbondingDelegationsRequest): Promise<_87.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _87.QueryDelegationRequest): Promise<_87.QueryDelegationResponse>;
                        unbondingDelegation(request: _87.QueryUnbondingDelegationRequest): Promise<_87.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _87.QueryDelegatorDelegationsRequest): Promise<_87.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _87.QueryDelegatorUnbondingDelegationsRequest): Promise<_87.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _87.QueryRedelegationsRequest): Promise<_87.QueryRedelegationsResponse>;
                        delegatorValidators(request: _87.QueryDelegatorValidatorsRequest): Promise<_87.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _87.QueryDelegatorValidatorRequest): Promise<_87.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _87.QueryHistoricalInfoRequest): Promise<_87.QueryHistoricalInfoResponse>;
                        pool(request?: _87.QueryPoolRequest): Promise<_87.QueryPoolResponse>;
                        params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _91.SimulateRequest): Promise<_91.SimulateResponse>;
                        getTx(request: _91.GetTxRequest): Promise<_91.GetTxResponse>;
                        broadcastTx(request: _91.BroadcastTxRequest): Promise<_91.BroadcastTxResponse>;
                        getTxsEvent(request: _91.GetTxsEventRequest): Promise<_91.GetTxsEventResponse>;
                        getBlockWithTxs(request: _91.GetBlockWithTxsRequest): Promise<_91.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _93.QueryCurrentPlanRequest): Promise<_93.QueryCurrentPlanResponse>;
                        appliedPlan(request: _93.QueryAppliedPlanRequest): Promise<_93.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _93.QueryUpgradedConsensusStateRequest): Promise<_93.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _93.QueryModuleVersionsRequest): Promise<_93.QueryModuleVersionsResponse>;
                        authority(request?: _93.QueryAuthorityRequest): Promise<_93.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
