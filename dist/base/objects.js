"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objects = void 0;
const hashes_1 = require("../utils/hashes");
class Objects extends Object {
    static equals(a, b) {
        if (a === b)
            return true;
        if (typeof a === 'object' && typeof b === 'object' || typeof a === 'function' && typeof b === 'function') {
            const aPropertyNames = typeof a === 'object' ? this.getOwnPropertyNames(a.__proto__) : this.getOwnPropertyNames(a.prototype);
            const bPropertyNames = typeof b === 'object' ? this.getOwnPropertyNames(b.__proto__) : this.getOwnPropertyNames(b.prototype);
            if (aPropertyNames.includes('equals')) {
                return a.equals(b);
            }
            else if (bPropertyNames.includes('equals')) {
                return b.equals(a);
            }
            else {
                const bool = [];
                for (const key in a) {
                    bool.push(this.equals(a[key], b[key]));
                }
                return !bool.includes(false);
            }
        }
        return false;
    }
    static hashCode(...o) {
        return hashes_1.Hashes.hashCode(o);
    }
}
exports.Objects = Objects;
