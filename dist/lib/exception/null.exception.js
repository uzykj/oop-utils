"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullPointerException = void 0;
class NullPointerException extends Error {
    constructor(msg = 'NullPointerException') {
        super(msg);
        this.name = 'NullPointerException';
    }
}
exports.NullPointerException = NullPointerException;
