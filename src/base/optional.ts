import {Absent} from "./absent";
import {Present} from "./present";

/**
 * @author ghostxbh
 * @version 1.0.0
 * @description Optional is used for immutable objects that contain non-empty objects.
 * Optional object for null if no value exists.
 * This class has various useful methods to make it easy for code to handle as available or unavailable,
 * rather than checking for null values.
 */
export class Optional {

  /**
   * Get the Absent static instance.
   *
   * @returns {Absent} - Absent static instance.
   */
  public static absent(): Absent {
    return Absent.withType();
  }

  /**
   * Get a Present instance with the given item that may or may not be defined.
   *
   * @param {Object} item - A value that may or may not be defined.
   * @returns {Present} - Instance of the Present class.
   */
  public static of(item) {
    return new Present(item);
  }

  /**
   * Synonym for fromNullable.
   *
   * @param {Object} item - A value that may or may not be defined.
   * @returns {Absent|Present}
   */
  public static fromUndefinedable(item) {
    return Optional.fromNullable(item);
  }

  /**
   * Returns the Absent static instance if the given value is not defined otherwise returns a Present instance.
   *
   * @param {Object} item - A value that may or may not be defined.
   * @returns {Absent|Present}
   */
  public static fromNullable(item) {
    return (!item) ? Optional.absent() : Optional.of(item);
  }
}
