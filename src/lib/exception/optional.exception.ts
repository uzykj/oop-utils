/**
 * @author ghostxbh
 * @version 1.0.0
 * @description Exception message thrown for Optional operation
 */
export class OptionalException extends Error {
  constructor(msg: string = 'OptionalException') {
    super(msg);
    this.name = 'OptionalException';
  }
}
