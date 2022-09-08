"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comparable = void 0;
class Comparable {
    static compareTo(o, func) {
        if (func)
            return func(o);
    }
    ;
}
exports.Comparable = Comparable;
