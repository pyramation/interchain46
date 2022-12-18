import * as _1 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _1.HashOp;
    hashOpToJSON(object: _1.HashOp): string;
    lengthOpFromJSON(object: any): _1.LengthOp;
    lengthOpToJSON(object: _1.LengthOp): string;
    HashOp: typeof _1.HashOp;
    HashOpSDKType: typeof _1.HashOp;
    HashOpAmino: typeof _1.HashOp;
    LengthOp: typeof _1.LengthOp;
    LengthOpSDKType: typeof _1.LengthOp;
    LengthOpAmino: typeof _1.LengthOp;
    ExistenceProof: {
        encode(message: _1.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ExistenceProof;
        fromJSON(object: any): _1.ExistenceProof;
        toJSON(message: _1.ExistenceProof): unknown;
        fromPartial(object: Partial<_1.ExistenceProof>): _1.ExistenceProof;
        fromAmino(object: _1.ExistenceProofAmino): _1.ExistenceProof;
        toAmino(message: _1.ExistenceProof): _1.ExistenceProofAmino;
    };
    NonExistenceProof: {
        encode(message: _1.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.NonExistenceProof;
        fromJSON(object: any): _1.NonExistenceProof;
        toJSON(message: _1.NonExistenceProof): unknown;
        fromPartial(object: Partial<_1.NonExistenceProof>): _1.NonExistenceProof;
        fromAmino(object: _1.NonExistenceProofAmino): _1.NonExistenceProof;
        toAmino(message: _1.NonExistenceProof): _1.NonExistenceProofAmino;
    };
    CommitmentProof: {
        encode(message: _1.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.CommitmentProof;
        fromJSON(object: any): _1.CommitmentProof;
        toJSON(message: _1.CommitmentProof): unknown;
        fromPartial(object: Partial<_1.CommitmentProof>): _1.CommitmentProof;
        fromAmino(object: _1.CommitmentProofAmino): _1.CommitmentProof;
        toAmino(message: _1.CommitmentProof): _1.CommitmentProofAmino;
    };
    LeafOp: {
        encode(message: _1.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.LeafOp;
        fromJSON(object: any): _1.LeafOp;
        toJSON(message: _1.LeafOp): unknown;
        fromPartial(object: Partial<_1.LeafOp>): _1.LeafOp;
        fromAmino(object: _1.LeafOpAmino): _1.LeafOp;
        toAmino(message: _1.LeafOp): _1.LeafOpAmino;
    };
    InnerOp: {
        encode(message: _1.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.InnerOp;
        fromJSON(object: any): _1.InnerOp;
        toJSON(message: _1.InnerOp): unknown;
        fromPartial(object: Partial<_1.InnerOp>): _1.InnerOp;
        fromAmino(object: _1.InnerOpAmino): _1.InnerOp;
        toAmino(message: _1.InnerOp): _1.InnerOpAmino;
    };
    ProofSpec: {
        encode(message: _1.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ProofSpec;
        fromJSON(object: any): _1.ProofSpec;
        toJSON(message: _1.ProofSpec): unknown;
        fromPartial(object: Partial<_1.ProofSpec>): _1.ProofSpec;
        fromAmino(object: _1.ProofSpecAmino): _1.ProofSpec;
        toAmino(message: _1.ProofSpec): _1.ProofSpecAmino;
    };
    InnerSpec: {
        encode(message: _1.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.InnerSpec;
        fromJSON(object: any): _1.InnerSpec;
        toJSON(message: _1.InnerSpec): unknown;
        fromPartial(object: Partial<_1.InnerSpec>): _1.InnerSpec;
        fromAmino(object: _1.InnerSpecAmino): _1.InnerSpec;
        toAmino(message: _1.InnerSpec): _1.InnerSpecAmino;
    };
    BatchProof: {
        encode(message: _1.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BatchProof;
        fromJSON(object: any): _1.BatchProof;
        toJSON(message: _1.BatchProof): unknown;
        fromPartial(object: Partial<_1.BatchProof>): _1.BatchProof;
        fromAmino(object: _1.BatchProofAmino): _1.BatchProof;
        toAmino(message: _1.BatchProof): _1.BatchProofAmino;
    };
    BatchEntry: {
        encode(message: _1.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BatchEntry;
        fromJSON(object: any): _1.BatchEntry;
        toJSON(message: _1.BatchEntry): unknown;
        fromPartial(object: Partial<_1.BatchEntry>): _1.BatchEntry;
        fromAmino(object: _1.BatchEntryAmino): _1.BatchEntry;
        toAmino(message: _1.BatchEntry): _1.BatchEntryAmino;
    };
    CompressedBatchProof: {
        encode(message: _1.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.CompressedBatchProof;
        fromJSON(object: any): _1.CompressedBatchProof;
        toJSON(message: _1.CompressedBatchProof): unknown;
        fromPartial(object: Partial<_1.CompressedBatchProof>): _1.CompressedBatchProof;
        fromAmino(object: _1.CompressedBatchProofAmino): _1.CompressedBatchProof;
        toAmino(message: _1.CompressedBatchProof): _1.CompressedBatchProofAmino;
    };
    CompressedBatchEntry: {
        encode(message: _1.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.CompressedBatchEntry;
        fromJSON(object: any): _1.CompressedBatchEntry;
        toJSON(message: _1.CompressedBatchEntry): unknown;
        fromPartial(object: Partial<_1.CompressedBatchEntry>): _1.CompressedBatchEntry;
        fromAmino(object: _1.CompressedBatchEntryAmino): _1.CompressedBatchEntry;
        toAmino(message: _1.CompressedBatchEntry): _1.CompressedBatchEntryAmino;
    };
    CompressedExistenceProof: {
        encode(message: _1.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.CompressedExistenceProof;
        fromJSON(object: any): _1.CompressedExistenceProof;
        toJSON(message: _1.CompressedExistenceProof): unknown;
        fromPartial(object: Partial<_1.CompressedExistenceProof>): _1.CompressedExistenceProof;
        fromAmino(object: _1.CompressedExistenceProofAmino): _1.CompressedExistenceProof;
        toAmino(message: _1.CompressedExistenceProof): _1.CompressedExistenceProofAmino;
    };
    CompressedNonExistenceProof: {
        encode(message: _1.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.CompressedNonExistenceProof;
        fromJSON(object: any): _1.CompressedNonExistenceProof;
        toJSON(message: _1.CompressedNonExistenceProof): unknown;
        fromPartial(object: Partial<_1.CompressedNonExistenceProof>): _1.CompressedNonExistenceProof;
        fromAmino(object: _1.CompressedNonExistenceProofAmino): _1.CompressedNonExistenceProof;
        toAmino(message: _1.CompressedNonExistenceProof): _1.CompressedNonExistenceProofAmino;
    };
};
