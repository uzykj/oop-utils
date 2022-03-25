import * as fs from 'fs';
import {exec} from 'child_process';

/**
 * @author ghostxbh
 * @version 1.0.0
 * @description NodeOpenssl
 * @deprecated
 */
export class NodeOpenssl {
  public static openssl(options?: NodeOpensslOptions): Promise<any> {
    console.log(`Options: ${options ? options : ''}`);
    let {verb, flags, tail} = options;
    return new Promise((resolve, reject) => {
      if (typeof flags !== 'string' || Array.isArray(flags)) {
        reject(new Error(`'flags' option must be an array or string of openssl ${verb} command flags.`));
      }

      if (Array.isArray(flags)) {
        flags = flags.join(' ');
      }

      if (
        typeof tail !== 'undefined' &&
        typeof tail !== 'string' &&
        typeof tail !== 'number'
      ) {
        reject(new Error(`'tail' option must be a string or number argument.`));
        if (typeof tail === 'number') {
          tail = tail + '';
        }
      }

      let stdout = '', stderr = '';
      const command = `openssl ${verb} ${flags} ${tail}`;
      console.log(`Executing: ${command}`);
      const cp = exec(command);
      cp.stdout.on('data', (data) => {
        stdout += data;
      });

      cp.stderr.on('data', (data) => {
        stderr += data;
      });

      cp.on('close', (code) => {
        resolve({cwd: process.cwd(), stdout, stderr});
      });
      cp.on('error', (err) => {
        reject(err);
      });
    });
  }

  public static getAlgorithms(): string[] {
    const algorithms = fs.readFileSync('./data/algorithms.json', 'utf8');
    return null;
  }
}

export interface NodeOpensslOptions {
  verb: string;
  flags: string;
  tail: string | number;
}
