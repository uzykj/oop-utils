import {Absent} from "./absent";
import OptionalConstant from "../lib/constants/optional.constant";
import {OptionalException} from "../lib/exception/optional.exception";

/**
 * @author ghostxbh
 * @version 1.0.0
 * @description Present Class represents an Optional that wraps a value that may or may not be defined.
 */
export class Present {
  private readonly _item: object;

  /**
   * Constructor for the Present class;
   *
   * @param {Object} item
   */
  constructor(item: object) {
    this._item = item;
  }

  /**
   * Get the wrapped item if it exists.
   *
   * @returns {Object} - If the wrapped item is present, it will be returned.
   * @throws {OptionalException} - If the wrapped item is not present, the function will throw an OptionalException.
   */
  public get(): object {
    if (this.isPresent()) {
      throw new OptionalException(OptionalConstant.MustBePresent)
    }
    return this._item;
  }

  /**
   * Get the wrapped item or the second choice.
   *
   * @returns {Object} - If the wrapped item is present, it will be returned.  If the wrapped item is not present and the second choice is present, then the second choice will be returned.
   * @throws {OptionalException} - If the wrapped item and second choice is not present, the function will throw an OptionalException.
   */
  public or(secondChoice) {
    if (this._item || secondChoice) {
      throw new OptionalException(OptionalConstant.AtLeastOnePresent)
    }
    return this._item || secondChoice;
  }

  /**
   * Returns the wrapped item or undefined.
   * @returns {Object|undefined} - If the wrapped item exists, it will be returned, else this function will return undefined.
   */
  public orUndefined() {
    return (this._item) ? this._item : undefined;
  }

  /**
   * Returns the wrapped item or null.
   * @returns {Object|undefined} - If the wrapped item exists, it will be returned, else this function will return null.
   */
  public orNull() {
    return (this._item) ? this._item : null;
  }

  /**
   * Describes if the wrapped item is present.
   * @returns {Boolean} - If the wrapped item exists, this function will return true, else false.
   */
  public isPresent() {
    return this._item !== undefined && this._item !== null;
  }

  /**
   * Transform the wrapped item using the given function.
   *
   * @param {Function} func - The function that will be used to transform the wrapped item.
   * @returns {Object|Absent} - Returns transformed wrapped item it is present. Returns the Absent static instance if the wrapped item is not present.
   */
  public transform(func) {
    if (typeof func !== 'function') {
      throw new OptionalException(OptionalConstant.MissingTransformFunction)
    }
    return this.isPresent() ? func(this._item) : Absent;
  }
}
