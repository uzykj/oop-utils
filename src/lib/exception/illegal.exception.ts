/**
 * @author ghostxbh
 * @version 1.0.0
 * @description Thrown to indicate that a method has been passed an illegal or
 * inappropriate argument.
 */
export class IllegalArgumentException extends Error {
  constructor(msg: string = 'IllegalArgumentException') {
    super(msg);
    this.name = 'IllegalArgumentException';
  }
}

export class IllegalStateException extends Error {
  constructor(msg: string = 'IllegalStateException') {
    super(msg);
    this.name = 'IllegalStateException';
  }
}
