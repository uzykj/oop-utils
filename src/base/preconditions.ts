import PreconditionsConstant from "../lib/constants/preconditions.constant";
import {NullPointerException} from "../lib/exception/null.exception";
import {IndexOutOfBoundsException} from "../lib/exception/index.exception";
import {IllegalArgumentException, IllegalStateException} from "../lib/exception/illegal.exception";

/**
 * @author ghostxbh
 * @version 1.0.0
 * @description Preconditions provide static methods to
 * check whether a method or constructor is being called with the appropriate parameters.
 * It checks the prerequisites.
 * Its method fails to throw IllegalArgumentException
 */
export class Preconditions {
  /**
   * Make sure one or more parameters are involved to call the truth of the method expression.
   * @param {boolean} b expression
   * @param {string|object} errorMessage error message template
   * @param {*} errorMessageArgs error message args
   */
  public static checkArgument(b: boolean, errorMessage?: string | any, ...errorMessageArgs: any): void {
    if (!b) {
      throw new IllegalArgumentException(this.format(errorMessage, errorMessageArgs));
    }
  }

  /**
   * Be sure to involve the state of the calling instance,
   * but not any arguments to invoke the truth of the method expression.
   * @param {boolean} b expression
   * @param {string|object} errorMessage error message template
   * @param {*} errorMessageArgs error message args
   */
  public static checkState(b: boolean, errorMessage?: string | any, ...errorMessageArgs: any): void {
    if (!b) {
      throw new IllegalStateException(this.format(errorMessage, errorMessageArgs));
    }
  }

  /**
   * Ensure that the object reference passed as an argument to the calling method is not null.
   * @param {*} reference reference
   * @param {string|object} errorMessage error message template
   * @param {*} errorMessageArgs error message args
   */
  public static checkNotNull(reference: any, errorMessage?: string | any, ...errorMessageArgs: any): any {
    if (!reference) {
      throw new NullPointerException(this.format(errorMessage, errorMessageArgs));
    }
    return reference;
  }

  /**
   * Make sure the index specifies a valid element of an array, list or size of string.
   * @param {number} index
   * @param {number} size
   * @param {string} desc default: 'index'
   * @return {number}
   * @ignore
   */
  public static checkElementIndex(index: number, size: number, desc: string = 'index'): number {
    if (index >= 0 && index < size) {
      return index;
    } else {
      throw new IndexOutOfBoundsException(this.badElementIndex(index, size, desc));
    }
  }

  /**
   * Make sure the index specifies a valid location for an array, list, or dimensioning string.
   * @param {number} index
   * @param {number} size
   * @param {string} desc default: 'index'
   * @return {number}
   * @ignore
   */
  public static checkPositionIndex(index: number, size: number, desc: string = 'index'): number {
    if (index >= 0 && index <= size) {
      return index;
    } else {
      throw new IndexOutOfBoundsException(this.badPositionIndex(index, size, desc));
    }
  }

  /**
   * Ensure that the start and end of an array, list, or string size is specified at valid locations, and in order.
   * @param {number} start
   * @param {number} end
   * @param {number} size
   * @ignore
   */
  public static checkPositionIndexes(start: number, end: number, size: number): void {
    if (start < 0 || end < start || end > size) {
      throw new IndexOutOfBoundsException(this.badPositionIndexes(start, end, size));
    }
  }

  /**
   * Format characters according to the given string template.
   * @param {string} template
   * @param {*} args
   * @private
   */
  private static format(template: string, ...args: any): string {
    if (!template || !args) {
      return null;
    }

    if (template.includes('%s')) {
      let str = template.toString();
      for (let i = 0; i < args.length; i++) {
        str = str.replace('%s', args[i])
      }
      return str;
    }

    let str = template.toString() + '(';
    const value = [];
    for (const key in args) {
      const item = args[key];
      const type = typeof item;
      switch (type) {
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "symbol":
          value.push(item);
          break;
        case "function":
          value.push('Function');
          break;
        case "object":
          const stringify = JSON.stringify(item);
          value.push(stringify);
          break;
      }
    }
    str += value.join(',') + ')';
    return str;
  }

  /**
   * Format bad element index to string
   * @param {number} index
   * @param {number} size
   * @param {string} desc
   * @return {string}
   * @private
   */
  private static badElementIndex(index: number, size: number, desc: string): string {
    if (index < 0) {
      return this.format(PreconditionsConstant.MustNotBeNegative, desc, index);
    } else if (size < 0) {
      throw new IllegalArgumentException("negative size: " + size);
    } else {
      return this.format(PreconditionsConstant.MustBeLessThanSize, desc, index, size);
    }
  }

  /**
   * Format bad position index to string
   * @param {number} index
   * @param {number} size
   * @param {string} desc
   * @return {string}
   * @private
   */
  private static badPositionIndex(index: number, size: number, desc: string): string {
    if (index < 0) {
      return this.format(PreconditionsConstant.MustNotBeNegative, desc, index);
    } else if (size < 0) {
      throw new IllegalArgumentException("negative size: " + size);
    } else {
      return this.format(PreconditionsConstant.MustBeLessThanSize, desc, index, size);
    }
  }

  /**
   * Format bad position indexes to string
   * @param {number} start
   * @param {number} end
   * @param {number} size
   * @return {string}
   * @private
   */
  private static badPositionIndexes(start: number, end: number, size: number): string {
    if (start >= 0 && start <= size) {
      return end >= 0 && end <= size ? this.format(PreconditionsConstant.MustNotBeLessThanStartSize, end, start) : this.badPositionIndex(end, size, "end index");
    } else {
      return this.badPositionIndex(start, size, "start index");
    }
  }
}
