export declare class NodeOpenssl {
    static openssl(options?: NodeOpensslOptions): Promise<any>;
    static getAlgorithms(): string[];
}
export interface NodeOpensslOptions {
    verb: string;
    flags: string;
    tail: string | number;
}
