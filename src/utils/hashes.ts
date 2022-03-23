import {Encoding, createHash, BinaryToTextEncoding} from "crypto";

/**
 * @author ghostxbh
 * @version 1.0.0
 * @description Hashes
 */
export class Hashes {
  /**
   * Get Object hash buffer, Mainly by encrypting strings using crypto
   *
   * @since 1.0.0
   * @param {*} o
   * @param {HashOptions} options
   * @return {Buffer}
   */
  public static hashBuffer(o: any, options?: HashOptions): Buffer {
    try {
      const str = typeof o === "object" ? JSON.stringify(o) : o;
      return <Buffer>this.hash(str, options);
    } catch (e) {
      console.error('hashBuffer error: ', e);
      return new Buffer('');
    }
  }

  /**
   * Returns a hash code for this string.
   * Used hash md5 get hex
   *
   * @since 1.0.0
   * @param {*} o
   * @param {HashOptions} options
   * @return {string}
   */
  public static hashString(o: any, options?: HashOptions): string {
    if (!options || !options.encoding) {
      options = !options ? Object.create(null) : options;
      const opt = {encoding: 'hex'};
      Object.assign(options, opt);
    }
    try {
      const str = typeof o === "object" ? JSON.stringify(o) : o;
      return <string>this.hash(str, options);
    } catch (e) {
      console.error('hashString error: ', e);
      return '';
    }
  }

  /**
   * Returns a hash code for this number.
   * Used hash md5 get hex
   *
   * @since 1.0.0
   * @param {*} a
   * @return {string}
   */
  public static hashCode(a: any): number {
    if (a === null || a === undefined)
      return 0;

    let result = 1;

    if (Array.isArray(a)) {
      for (let element of a)
        result = 31 * result + this.nativeHashCode(element);
    } else
      result = 31 * result + this.nativeHashCode(a);

    if (result > Number.MAX_VALUE) {
      throw new RangeError('Hashes#hashCode over the limit')
    }

    return result;
  }

  private static nativeHashCode(o: any): number {
    if (o === null || o === undefined)
      return 0;
    try {
      const str = typeof o === "object" ? JSON.stringify(o) : o;
      const hash = this.hashString(str);
      const value = str.split('').map(s => s.charCodeAt(0));
      let code = 0;
      if (code === 0 && value.length > 0) {
        value.forEach((v, index) => code = 31 * code + value[index])
      }
      return code;
    } catch (e) {
      console.error('nativeHashCode error: ', e);
      return 0;
    }
  }

  private static hash(data: string, opt: HashOptions): Buffer | string {
    const {algorithm = DefaultHashOptions.algorithm, inputEncoding = DefaultHashOptions.inputEncoding, encoding} = opt;
    return encoding ?
      createHash(algorithm).update(data, inputEncoding).digest(encoding) :
      createHash(algorithm).update(data, inputEncoding).digest();
  }
}


export type OpensslAlgorithm = 'SHA' | 'SHA256' | 'SHA512' | 'MD4' | 'MD5' | 'MD5-SHA1' | 'DSA' | 'DSA-SHA';

export interface HashOptions {
  algorithm: OpensslAlgorithm;
  inputEncoding?: Encoding;
  encoding?: BinaryToTextEncoding;
}

const DefaultHashOptions: HashOptions = {
  algorithm: 'MD5',
  inputEncoding: 'binary',
  encoding: 'hex',
}


