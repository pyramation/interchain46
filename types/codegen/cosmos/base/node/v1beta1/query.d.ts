import * as _m0 from "protobufjs/minimal";
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequestAmino {
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequestSDKType {
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
    minimumGasPrice: string;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseAmino {
    minimum_gas_price: string;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseSDKType {
    minimum_gas_price: string;
}
export declare const ConfigRequest: {
    encode(_: ConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest;
    fromJSON(_: any): ConfigRequest;
    toJSON(_: ConfigRequest): unknown;
    fromPartial(_: Partial<ConfigRequest>): ConfigRequest;
    fromAmino(_: ConfigRequestAmino): ConfigRequest;
    toAmino(_: ConfigRequest): ConfigRequestAmino;
};
export declare const ConfigResponse: {
    encode(message: ConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigResponse;
    fromJSON(object: any): ConfigResponse;
    toJSON(message: ConfigResponse): unknown;
    fromPartial(object: Partial<ConfigResponse>): ConfigResponse;
    fromAmino(object: ConfigResponseAmino): ConfigResponse;
    toAmino(message: ConfigResponse): ConfigResponseAmino;
};
