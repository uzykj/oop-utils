export declare class Absent {
    static INSTANCE: typeof Absent;
    static withType(): Absent;
    static get(): void;
    static or(secondChoice: any): any;
    static orUndefined(): undefined;
    static orNull(): null;
    static isPresent(): boolean;
    static transform(): Absent;
    static equals(var1: any): boolean;
    static hashCode(): number;
    static toString(): string;
}
