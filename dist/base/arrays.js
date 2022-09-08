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
    static pagination(pageNo = 1, pageSize = 10, array = []) {
        const offset = (pageNo - 1) * pageSize;
        return array && array.length > 0
            ? offset + pageSize >= array.length
                ? array.slice(offset, array.length)
                : array.slice(offset, offset + pageSize)
            : [];
    }
    static to2dArray(array = [], width) {
        const list = [];
        for (let i = 0; i < array.length; i++) {
            const index = width > array.length ? array.length : width;
            const tmpArray = array.splice(0, index);
            list.push(tmpArray);
        }
        return list;
    }
}
exports.Arrays = Arrays;
