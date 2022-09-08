export declare class Present {
    private readonly _item;
    constructor(item: object);
    get(): object;
    or(secondChoice: any): any;
    orNull(): object;
    isPresent(): boolean;
    transform(func: any): any;
}
