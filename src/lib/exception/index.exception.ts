/**
 * @author ghostxbh
 * @version 1.0.0
 * @description
 * Thrown to indicate that an index of some sort (such as to an array, to a
 * string, or to a vector) is out of range.
 * <p>
 * Applications can subclass this class to indicate similar exceptions.
 */
export class IndexOutOfBoundsException extends Error {
  constructor(msg: string = 'IndexOutOfBoundsException') {
    super(msg);
    this.name = 'IndexOutOfBoundsException';
  }
}
