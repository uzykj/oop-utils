import {Hashes} from "../utils/hashes";

/**
 * @author ghostxbh
 * @version 1.0.0
 * @description Objects
 */
export class Objects extends Object {
  /**
   * Returns {@code true} if the arguments are equal to each other and {@code false} otherwise.
   *
   * Consequently, if both arguments are {@code null}, {@code true}
   * is returned and if exactly one argument is {@code null}, {@code false} is returned.
   *
   * Otherwise, equality is determined by using the {@link Object#equals equals} method of the first argument.
   *
   * Or compare all element attributes under the object.
   *
   * @since 1.0.0
   * @param {*} a an object
   * @param {*} b an object to be compared with {@code a} for equality
   * @return {boolean} {@code true} if the arguments are equal to each other and {@code false} otherwise
   * @see Objects#equals(a, b)
   */
  public static equals(a: any, b: any): boolean {
    if (a === b) return true;
    if (typeof a === 'object' && typeof b === 'object' || typeof a === 'function' && typeof b === 'function') {
      const aPropertyNames = typeof a === 'object' ? this.getOwnPropertyNames(a.__proto__) : this.getOwnPropertyNames(a.prototype);
      const bPropertyNames = typeof b === 'object' ? this.getOwnPropertyNames(b.__proto__) : this.getOwnPropertyNames(b.prototype);
      if (aPropertyNames.includes('equals')) {
        return a.equals(b);
      } else if (bPropertyNames.includes('equals')) {
        return b.equals(a);
      } else {
        const bool: boolean[] = [];
        for (const key in a) {
          bool.push(this.equals(a[key], b[key]));
        }
        return !bool.includes(false);
      }
    }
    return false;
  }

  /**
   * Returns the hash code of a non {@code null} argument and 0 for a {@code null} argument.
   *
   * @since 1.0.0
   * @param {*} o an object
   * @return {number} the hash code of a non {@code null} argument and 0 for a {@code null} argument
   * @see Object#hashCode
   */
  public static hashCode(...o: any): number {
    return Hashes.hashCode(o);
  }
}
