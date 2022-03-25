export declare class Preconditions {
    static checkArgument(b: boolean, errorMessage?: string | any, ...errorMessageArgs: any): void;
    static checkState(b: boolean, errorMessage?: string | any, ...errorMessageArgs: any): void;
    static checkNotNull(reference: any, errorMessage?: string | any, ...errorMessageArgs: any): any;
    static checkElementIndex(index: number, size: number, desc?: string): number;
    static checkPositionIndex(index: number, size: number, desc?: string): number;
    static checkPositionIndexes(start: number, end: number, size: number): void;
    private static format;
    private static badElementIndex;
    private static badPositionIndex;
    private static badPositionIndexes;
}
