"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalException = void 0;
class OptionalException extends Error {
    constructor(msg = 'OptionalException') {
        super(msg);
        this.name = 'OptionalException';
    }
}
exports.OptionalException = OptionalException;
