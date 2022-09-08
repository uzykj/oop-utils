"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Absent = void 0;
const objects_1 = require("./objects");
const optional_constant_1 = require("../lib/constants/optional.constant");
const optional_exception_1 = require("../lib/exception/optional.exception");
class Absent {
    static withType() {
        return this.INSTANCE;
    }
    static get() {
        if (Absent.isPresent()) {
            throw new optional_exception_1.OptionalException(optional_constant_1.default.MustBePresent);
        }
    }
    static or(secondChoice) {
        if (secondChoice === void 0) {
            throw new optional_exception_1.OptionalException(optional_constant_1.default.AtLeastOnePresent);
        }
        return secondChoice;
    }
    static orNull() {
        return null;
    }
    static isPresent() {
        return false;
    }
    static transform() {
        return Absent;
    }
    static equals(var1) {
        return objects_1.Objects.equals(var1, this.INSTANCE);
    }
    static hashCode() {
        return objects_1.Objects.hashCode(this.INSTANCE);
    }
    static toString() {
        return "Optional.absent()";
    }
}
exports.Absent = Absent;
Absent.INSTANCE = Absent;
