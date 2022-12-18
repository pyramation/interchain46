import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface App {
    protocol: Long;
    software: string;
}
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface AppAmino {
    protocol: string;
    software: string;
}
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface AppSDKType {
    protocol: Long;
    software: string;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface Consensus {
    block: Long;
    app: Long;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface ConsensusAmino {
    block: string;
    app: string;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface ConsensusSDKType {
    block: Long;
    app: Long;
}
export declare const App: {
    encode(message: App, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): App;
    fromJSON(object: any): App;
    toJSON(message: App): unknown;
    fromPartial(object: Partial<App>): App;
    fromAmino(object: AppAmino): App;
    toAmino(message: App): AppAmino;
};
export declare const Consensus: {
    encode(message: Consensus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Consensus;
    fromJSON(object: any): Consensus;
    toJSON(message: Consensus): unknown;
    fromPartial(object: Partial<Consensus>): Consensus;
    fromAmino(object: ConsensusAmino): Consensus;
    toAmino(message: Consensus): ConsensusAmino;
};
