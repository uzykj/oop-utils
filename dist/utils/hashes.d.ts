/// <reference types="node" />
/// <reference types="node" />
import { Encoding, BinaryToTextEncoding } from "crypto";
export declare class Hashes {
    static hashBuffer(o: any, options?: HashOptions): Buffer;
    static hashString(o: any, options?: HashOptions): string;
    static hashCode(a: any): number;
    private static nativeHashCode;
    private static hash;
}
export declare type OpensslAlgorithm = 'SHA' | 'SHA256' | 'SHA512' | 'MD4' | 'MD5' | 'MD5-SHA1' | 'DSA' | 'DSA-SHA';
export interface HashOptions {
    algorithm: OpensslAlgorithm;
    inputEncoding?: Encoding;
    encoding?: BinaryToTextEncoding;
}
