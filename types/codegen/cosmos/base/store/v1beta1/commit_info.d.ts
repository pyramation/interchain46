import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfo {
    version: Long;
    storeInfos: StoreInfo[];
}
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfoAmino {
    version: string;
    store_infos: StoreInfoAmino[];
}
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfoSDKType {
    version: Long;
    store_infos: StoreInfoSDKType[];
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfo {
    name: string;
    commitId?: CommitID;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfoAmino {
    name: string;
    commit_id?: CommitIDAmino;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfoSDKType {
    name: string;
    commit_id?: CommitIDSDKType;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitID {
    version: Long;
    hash: Uint8Array;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitIDAmino {
    version: string;
    hash: Uint8Array;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitIDSDKType {
    version: Long;
    hash: Uint8Array;
}
export declare const CommitInfo: {
    encode(message: CommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo;
    fromJSON(object: any): CommitInfo;
    toJSON(message: CommitInfo): unknown;
    fromPartial(object: Partial<CommitInfo>): CommitInfo;
    fromAmino(object: CommitInfoAmino): CommitInfo;
    toAmino(message: CommitInfo): CommitInfoAmino;
};
export declare const StoreInfo: {
    encode(message: StoreInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreInfo;
    fromJSON(object: any): StoreInfo;
    toJSON(message: StoreInfo): unknown;
    fromPartial(object: Partial<StoreInfo>): StoreInfo;
    fromAmino(object: StoreInfoAmino): StoreInfo;
    toAmino(message: StoreInfo): StoreInfoAmino;
};
export declare const CommitID: {
    encode(message: CommitID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitID;
    fromJSON(object: any): CommitID;
    toJSON(message: CommitID): unknown;
    fromPartial(object: Partial<CommitID>): CommitID;
    fromAmino(object: CommitIDAmino): CommitID;
    toAmino(message: CommitID): CommitIDAmino;
};
