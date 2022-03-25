"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arrays = void 0;
class Arrays extends Array {
    static str2arr2str(str) {
        if (typeof str !== 'string' || !this.isArray(str)) {
            return '';
        }
        if (!str || this.isArray(str) && str.length <= 0) {
            return '';
        }
        const isInteger = function (param) {
            return param % 1 === 0;
        };
        let result;
        if (str) {
            if (typeof str === 'string' && str.includes(',')) {
                const split = str.split(',');
                result = [];
                split.forEach(s => {
                    if (typeof s === 'number') {
                        result.push(isInteger(s) ? parseInt(s) : parseFloat(s));
                    }
                });
            }
            else if (this.isArray(str)) {
                result = str.join(',');
            }
        }
        return result;
    }
}
exports.Arrays = Arrays;
