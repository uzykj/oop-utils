"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preconditions = void 0;
const preconditions_constant_1 = require("../lib/constants/preconditions.constant");
const null_exception_1 = require("../lib/exception/null.exception");
const index_exception_1 = require("../lib/exception/index.exception");
const illegal_exception_1 = require("../lib/exception/illegal.exception");
class Preconditions {
    static checkArgument(b, errorMessage, ...errorMessageArgs) {
        if (!b) {
            throw new illegal_exception_1.IllegalArgumentException(this.format(errorMessage, errorMessageArgs));
        }
    }
    static checkState(b, errorMessage, ...errorMessageArgs) {
        if (!b) {
            throw new illegal_exception_1.IllegalStateException(this.format(errorMessage, errorMessageArgs));
        }
    }
    static checkNotNull(reference, errorMessage, ...errorMessageArgs) {
        if (!reference) {
            throw new null_exception_1.NullPointerException(this.format(errorMessage, errorMessageArgs));
        }
        return reference;
    }
    static checkElementIndex(index, size, desc = 'index') {
        if (index >= 0 && index < size) {
            return index;
        }
        else {
            throw new index_exception_1.IndexOutOfBoundsException(this.badElementIndex(index, size, desc));
        }
    }
    static checkPositionIndex(index, size, desc = 'index') {
        if (index >= 0 && index <= size) {
            return index;
        }
        else {
            throw new index_exception_1.IndexOutOfBoundsException(this.badPositionIndex(index, size, desc));
        }
    }
    static checkPositionIndexes(start, end, size) {
        if (start < 0 || end < start || end > size) {
            throw new index_exception_1.IndexOutOfBoundsException(this.badPositionIndexes(start, end, size));
        }
    }
    static format(template, ...args) {
        if (!template || !args) {
            return null;
        }
        if (template.includes('%s')) {
            let str = template.toString();
            for (let i = 0; i < args.length; i++) {
                str = str.replace('%s', args[i]);
            }
            return str;
        }
        let str = template.toString() + '(';
        const value = [];
        for (const key in args) {
            const item = args[key];
            const type = typeof item;
            switch (type) {
                case "number":
                case "string":
                case "boolean":
                case "undefined":
                case "symbol":
                    value.push(item);
                    break;
                case "function":
                    value.push('Function');
                    break;
                case "object":
                    const stringify = JSON.stringify(item);
                    value.push(stringify);
                    break;
            }
        }
        str += value.join(',') + ')';
        return str;
    }
    static badElementIndex(index, size, desc) {
        if (index < 0) {
            return this.format(preconditions_constant_1.default.MustNotBeNegative, desc, index);
        }
        else if (size < 0) {
            throw new illegal_exception_1.IllegalArgumentException("negative size: " + size);
        }
        else {
            return this.format(preconditions_constant_1.default.MustBeLessThanSize, desc, index, size);
        }
    }
    static badPositionIndex(index, size, desc) {
        if (index < 0) {
            return this.format(preconditions_constant_1.default.MustNotBeNegative, desc, index);
        }
        else if (size < 0) {
            throw new illegal_exception_1.IllegalArgumentException("negative size: " + size);
        }
        else {
            return this.format(preconditions_constant_1.default.MustBeLessThanSize, desc, index, size);
        }
    }
    static badPositionIndexes(start, end, size) {
        if (start >= 0 && start <= size) {
            return end >= 0 && end <= size ? this.format(preconditions_constant_1.default.MustNotBeLessThanStartSize, end, start) : this.badPositionIndex(end, size, "end index");
        }
        else {
            return this.badPositionIndex(start, size, "start index");
        }
    }
}
exports.Preconditions = Preconditions;
