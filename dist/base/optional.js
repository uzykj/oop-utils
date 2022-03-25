"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Optional = void 0;
const absent_1 = require("./absent");
const present_1 = require("./present");
class Optional {
    static absent() {
        return absent_1.Absent.withType();
    }
    static of(item) {
        return new present_1.Present(item);
    }
    static fromUndefinedable(item) {
        return Optional.fromNullable(item);
    }
    static fromNullable(item) {
        return (!item) ? Optional.absent() : Optional.of(item);
    }
}
exports.Optional = Optional;
