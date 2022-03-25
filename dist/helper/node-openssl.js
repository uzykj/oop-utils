"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeOpenssl = void 0;
const fs = require("fs");
const child_process_1 = require("child_process");
class NodeOpenssl {
    static openssl(options) {
        console.log(`Options: ${options ? options : ''}`);
        let { verb, flags, tail } = options;
        return new Promise((resolve, reject) => {
            if (typeof flags !== 'string' || Array.isArray(flags)) {
                reject(new Error(`'flags' option must be an array or string of openssl ${verb} command flags.`));
            }
            if (Array.isArray(flags)) {
                flags = flags.join(' ');
            }
            if (typeof tail !== 'undefined' &&
                typeof tail !== 'string' &&
                typeof tail !== 'number') {
                reject(new Error(`'tail' option must be a string or number argument.`));
                if (typeof tail === 'number') {
                    tail = tail + '';
                }
            }
            let stdout = '', stderr = '';
            const command = `openssl ${verb} ${flags} ${tail}`;
            console.log(`Executing: ${command}`);
            const cp = (0, child_process_1.exec)(command);
            cp.stdout.on('data', (data) => {
                stdout += data;
            });
            cp.stderr.on('data', (data) => {
                stderr += data;
            });
            cp.on('close', (code) => {
                resolve({ cwd: process.cwd(), stdout, stderr });
            });
            cp.on('error', (err) => {
                reject(err);
            });
        });
    }
    static getAlgorithms() {
        const algorithms = fs.readFileSync('./data/algorithms.json', 'utf8');
        return null;
    }
}
exports.NodeOpenssl = NodeOpenssl;
