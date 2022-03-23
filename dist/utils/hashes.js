"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class Hashes {
    static hashBuffer(o, options) {
        try {
            const str = typeof o === "object" ? JSON.stringify(o) : o;
            return this.hash(str, options);
        }
        catch (e) {
            console.error('hashBuffer error: ', e);
            return new Buffer('');
        }
    }
    static hashString(o, options) {
        if (!options || !options.encoding) {
            options = !options ? Object.create(null) : options;
            const opt = { encoding: 'hex' };
            Object.assign(options, opt);
        }
        try {
            const str = typeof o === "object" ? JSON.stringify(o) : o;
            return this.hash(str, options);
        }
        catch (e) {
            console.error('hashString error: ', e);
            return '';
        }
    }
    static hashCode(a) {
        if (a === null || a === undefined)
            return 0;
        let result = 1;
        if (Array.isArray(a)) {
            for (let element of a)
                result = 31 * result + this.nativeHashCode(element);
        }
        else
            result = 31 * result + this.nativeHashCode(a);
        if (result > Number.MAX_VALUE) {
            throw new RangeError('Hashes#hashCode over the limit');
        }
        return result;
    }
    static nativeHashCode(o) {
        if (o === null || o === undefined)
            return 0;
        try {
            const str = typeof o === "object" ? JSON.stringify(o) : o;
            const hash = this.hashString(str);
            const value = str.split('').map(s => s.charCodeAt(0));
            let code = 0;
            if (code === 0 && value.length > 0) {
                value.forEach((v, index) => code = 31 * code + value[index]);
            }
            return code;
        }
        catch (e) {
            console.error('nativeHashCode error: ', e);
            return 0;
        }
    }
    static hash(data, opt) {
        const { algorithm = DefaultHashOptions.algorithm, inputEncoding = DefaultHashOptions.inputEncoding, encoding } = opt;
        return encoding ?
            crypto_1.createHash(algorithm).update(data, inputEncoding).digest(encoding) :
            crypto_1.createHash(algorithm).update(data, inputEncoding).digest();
    }
}
exports.Hashes = Hashes;
const DefaultHashOptions = {
    algorithm: 'MD5',
    inputEncoding: 'binary',
    encoding: 'hex',
};
//# sourceMappingURL=hashes.js.map