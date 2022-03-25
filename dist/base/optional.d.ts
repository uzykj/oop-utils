import { Absent } from "./absent";
import { Present } from "./present";
export declare class Optional {
    static absent(): Absent;
    static of(item: any): Present;
    static fromUndefinedable(item: any): Absent | Present;
    static fromNullable(item: any): Absent | Present;
}
