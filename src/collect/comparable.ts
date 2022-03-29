/**
 * @author ghostxbh
 * @version 1.0.0
 * @description
 * This class imposes a total ordering on the objects of each class that
 * implements it.  This ordering is referred to as the class's <i>natural
 * ordering</i>, and the class's <tt>compareTo</tt> method is referred to as
 * its <i>natural comparison method</i>.<p>
 */
export class Comparable {

  /**
   * Compares this object with the specified object for order.  Returns a
   * negative integer, zero, or a positive integer as this object is less
   * than, equal to, or greater than the specified object.
   * @param {*} o
   * @param {Function} func
   * @return {number}
   */
  public static compareTo(o: any, func?: Function): boolean {
    if (func)
      return func(o);
  };
}