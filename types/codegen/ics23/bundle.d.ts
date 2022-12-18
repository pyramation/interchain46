import * as _0 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _0.HashOp;
    hashOpToJSON(object: _0.HashOp): string;
    lengthOpFromJSON(object: any): _0.LengthOp;
    lengthOpToJSON(object: _0.LengthOp): string;
    HashOp: typeof _0.HashOp;
    HashOpSDKType: typeof _0.HashOp;
    HashOpAmino: typeof _0.HashOp;
    LengthOp: typeof _0.LengthOp;
    LengthOpSDKType: typeof _0.LengthOp;
    LengthOpAmino: typeof _0.LengthOp;
    ExistenceProof: {
        encode(message: _0.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ExistenceProof;
        fromJSON(object: any): _0.ExistenceProof;
        toJSON(message: _0.ExistenceProof): unknown;
        fromPartial(object: Partial<_0.ExistenceProof>): _0.ExistenceProof;
        fromAmino(object: _0.ExistenceProofAmino): _0.ExistenceProof;
        toAmino(message: _0.ExistenceProof): _0.ExistenceProofAmino;
    };
    NonExistenceProof: {
        encode(message: _0.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.NonExistenceProof;
        fromJSON(object: any): _0.NonExistenceProof;
        toJSON(message: _0.NonExistenceProof): unknown;
        fromPartial(object: Partial<_0.NonExistenceProof>): _0.NonExistenceProof;
        fromAmino(object: _0.NonExistenceProofAmino): _0.NonExistenceProof;
        toAmino(message: _0.NonExistenceProof): _0.NonExistenceProofAmino;
    };
    CommitmentProof: {
        encode(message: _0.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CommitmentProof;
        fromJSON(object: any): _0.CommitmentProof;
        toJSON(message: _0.CommitmentProof): unknown;
        fromPartial(object: Partial<_0.CommitmentProof>): _0.CommitmentProof;
        fromAmino(object: _0.CommitmentProofAmino): _0.CommitmentProof;
        toAmino(message: _0.CommitmentProof): _0.CommitmentProofAmino;
    };
    LeafOp: {
        encode(message: _0.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.LeafOp;
        fromJSON(object: any): _0.LeafOp;
        toJSON(message: _0.LeafOp): unknown;
        fromPartial(object: Partial<_0.LeafOp>): _0.LeafOp;
        fromAmino(object: _0.LeafOpAmino): _0.LeafOp;
        toAmino(message: _0.LeafOp): _0.LeafOpAmino;
    };
    InnerOp: {
        encode(message: _0.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InnerOp;
        fromJSON(object: any): _0.InnerOp;
        toJSON(message: _0.InnerOp): unknown;
        fromPartial(object: Partial<_0.InnerOp>): _0.InnerOp;
        fromAmino(object: _0.InnerOpAmino): _0.InnerOp;
        toAmino(message: _0.InnerOp): _0.InnerOpAmino;
    };
    ProofSpec: {
        encode(message: _0.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ProofSpec;
        fromJSON(object: any): _0.ProofSpec;
        toJSON(message: _0.ProofSpec): unknown;
        fromPartial(object: Partial<_0.ProofSpec>): _0.ProofSpec;
        fromAmino(object: _0.ProofSpecAmino): _0.ProofSpec;
        toAmino(message: _0.ProofSpec): _0.ProofSpecAmino;
    };
    InnerSpec: {
        encode(message: _0.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InnerSpec;
        fromJSON(object: any): _0.InnerSpec;
        toJSON(message: _0.InnerSpec): unknown;
        fromPartial(object: Partial<_0.InnerSpec>): _0.InnerSpec;
        fromAmino(object: _0.InnerSpecAmino): _0.InnerSpec;
        toAmino(message: _0.InnerSpec): _0.InnerSpecAmino;
    };
    BatchProof: {
        encode(message: _0.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BatchProof;
        fromJSON(object: any): _0.BatchProof;
        toJSON(message: _0.BatchProof): unknown;
        fromPartial(object: Partial<_0.BatchProof>): _0.BatchProof;
        fromAmino(object: _0.BatchProofAmino): _0.BatchProof;
        toAmino(message: _0.BatchProof): _0.BatchProofAmino;
    };
    BatchEntry: {
        encode(message: _0.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BatchEntry;
        fromJSON(object: any): _0.BatchEntry;
        toJSON(message: _0.BatchEntry): unknown;
        fromPartial(object: Partial<_0.BatchEntry>): _0.BatchEntry;
        fromAmino(object: _0.BatchEntryAmino): _0.BatchEntry;
        toAmino(message: _0.BatchEntry): _0.BatchEntryAmino;
    };
    CompressedBatchProof: {
        encode(message: _0.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedBatchProof;
        fromJSON(object: any): _0.CompressedBatchProof;
        toJSON(message: _0.CompressedBatchProof): unknown;
        fromPartial(object: Partial<_0.CompressedBatchProof>): _0.CompressedBatchProof;
        fromAmino(object: _0.CompressedBatchProofAmino): _0.CompressedBatchProof;
        toAmino(message: _0.CompressedBatchProof): _0.CompressedBatchProofAmino;
    };
    CompressedBatchEntry: {
        encode(message: _0.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedBatchEntry;
        fromJSON(object: any): _0.CompressedBatchEntry;
        toJSON(message: _0.CompressedBatchEntry): unknown;
        fromPartial(object: Partial<_0.CompressedBatchEntry>): _0.CompressedBatchEntry;
        fromAmino(object: _0.CompressedBatchEntryAmino): _0.CompressedBatchEntry;
        toAmino(message: _0.CompressedBatchEntry): _0.CompressedBatchEntryAmino;
    };
    CompressedExistenceProof: {
        encode(message: _0.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedExistenceProof;
        fromJSON(object: any): _0.CompressedExistenceProof;
        toJSON(message: _0.CompressedExistenceProof): unknown;
        fromPartial(object: Partial<_0.CompressedExistenceProof>): _0.CompressedExistenceProof;
        fromAmino(object: _0.CompressedExistenceProofAmino): _0.CompressedExistenceProof;
        toAmino(message: _0.CompressedExistenceProof): _0.CompressedExistenceProofAmino;
    };
    CompressedNonExistenceProof: {
        encode(message: _0.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedNonExistenceProof;
        fromJSON(object: any): _0.CompressedNonExistenceProof;
        toJSON(message: _0.CompressedNonExistenceProof): unknown;
        fromPartial(object: Partial<_0.CompressedNonExistenceProof>): _0.CompressedNonExistenceProof;
        fromAmino(object: _0.CompressedNonExistenceProofAmino): _0.CompressedNonExistenceProof;
        toAmino(message: _0.CompressedNonExistenceProof): _0.CompressedNonExistenceProofAmino;
    };
};
