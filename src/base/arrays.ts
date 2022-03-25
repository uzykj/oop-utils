/**
 * @author ghostxbh
 * @version 1.0.0
 * @description Arrays
 */
export class Arrays extends Array {

  /**
   * String to Numeric Array.
   * Array to String.
   *
   * @since 1.0.0
   * @param {string|string[]} str
   * @return {string|string[]}
   */
  public static str2arr2str(str: string | string[]): string | string[] {
    if (typeof str !== 'string' || !this.isArray(str)) {
      return '';
    }
    if (!str || this.isArray(str) && str.length <= 0) {
      return '';
    }

    const isInteger = function (param: number): boolean {
      return param % 1 === 0;
    }

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
      } else if (this.isArray(str)) {
        result = str.join(',')
      }
    }
    return result;
  }
}
