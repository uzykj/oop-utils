"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IllegalStateException = exports.IllegalArgumentException = void 0;
class IllegalArgumentException extends Error {
    constructor(msg = 'IllegalArgumentException') {
        super(msg);
        this.name = 'IllegalArgumentException';
    }
}
exports.IllegalArgumentException = IllegalArgumentException;
class IllegalStateException extends Error {
    constructor(msg = 'IllegalStateException') {
        super(msg);
        this.name = 'IllegalStateException';
    }
}
exports.IllegalStateException = IllegalStateException;
