"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Present = void 0;
const absent_1 = require("./absent");
const optional_constant_1 = require("../lib/constants/optional.constant");
const optional_exception_1 = require("../lib/exception/optional.exception");
class Present {
    constructor(item) {
        this._item = item;
    }
    get() {
        if (this.isPresent()) {
            throw new optional_exception_1.OptionalException(optional_constant_1.default.MustBePresent);
        }
        return this._item;
    }
    or(secondChoice) {
        if (this._item || secondChoice) {
            throw new optional_exception_1.OptionalException(optional_constant_1.default.AtLeastOnePresent);
        }
        return this._item || secondChoice;
    }
    orUndefined() {
        return (this._item) ? this._item : undefined;
    }
    orNull() {
        return (this._item) ? this._item : null;
    }
    isPresent() {
        return this._item !== undefined && this._item !== null;
    }
    transform(func) {
        if (typeof func !== 'function') {
            throw new optional_exception_1.OptionalException(optional_constant_1.default.MissingTransformFunction);
        }
        return this.isPresent() ? func(this._item) : absent_1.Absent;
    }
}
exports.Present = Present;
