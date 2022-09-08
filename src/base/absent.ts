import {Objects} from "./objects";
import OptionalConstant from "../lib/constants/optional.constant";
import { OptionalException } from "../lib/exception/optional.exception";


/**
 * @author ghostxbh
 * @version 1.0.0
 * @description Absent
 */
export class Absent {
  static INSTANCE = Absent;

  public static withType(): Absent {
    return this.INSTANCE;
  }

  /**
   * Always throws an OptionalException because the the value is Absent.
   * @throws {OptionalException}
   */
  public static get(): void {
    if (Absent.isPresent()) {
      throw new OptionalException(OptionalConstant.MustBePresent);
    }
  }

  /**
   * If secondChoice is defined, then it will be returned.  If secondChoice is undefined or null, then the function will throw.
   * @param {Object} secondChoice
   * @returns {Object} - The secondChoice passed into the 'or' function.
   * @throws {OptionalException} - Throw when secondChoice is undefined or null.
   */
  public static or(secondChoice: any): any {
    if (secondChoice === void 0) {
      throw new OptionalException(OptionalConstant.AtLeastOnePresent)
    }
    return secondChoice;
  }

  /**
   * Always returns null because the Absent object has no value.
   * @returns {null}
   */
  public static orNull(): null {
    return null;
  }

  /**
   * Always returns false because the Absent object represents a non present Optional.
   * @returns {boolean}
   */
  public static isPresent(): boolean {
    return false;
  }

  /**
   * Always returns the Absent static instance because the Absent object has no value to transform.
   * @returns {undefined}
   */
  public static transform(): Absent {
    return Absent;
  }

  /**
   * Returns the Absent Compared with static instance and var1.
   * @param {*} var1
   * @return {boolean}
   */
  public static equals(var1: any): boolean {
    return Objects.equals(var1, this.INSTANCE);
  }

  /**
   * Returns the Absent static instance's hashCode.
   * @return {number}
   */
  public static hashCode(): number {
    return Objects.hashCode(this.INSTANCE);
  }

  /**
   * Returns the Absent to string.
   * @return {string}
   */
  public static toString(): string {
    return "Optional.absent()";
  }
}
