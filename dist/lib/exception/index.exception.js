"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexOutOfBoundsException = void 0;
class IndexOutOfBoundsException extends Error {
    constructor(msg = 'IndexOutOfBoundsException') {
        super(msg);
        this.name = 'IndexOutOfBoundsException';
    }
}
exports.IndexOutOfBoundsException = IndexOutOfBoundsException;
