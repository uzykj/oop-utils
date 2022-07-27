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

  /**
   * <h3>CN: 数据分页，物理分页</h3>
   * <h3>EN: Data paging, physical paging</h3>
   * @param {number} pageNo 页码
   * @param {number} pageSize 条数
   * @param {any} array 被分页数组
   */
  public static pagination(
    pageNo = 1,
    pageSize = 10,
    array: Array<any> = [],
  ): Array<any> {
    const offset: number = (pageNo - 1) * pageSize;
    return array && array.length > 0
      ? offset + pageSize >= array.length
        ? array.slice(offset, array.length)
        : array.slice(offset, offset + pageSize)
      : [];
  }

  /**
   * <h3>CN: 数组拆分为二维数组</h3>
   * <h3>EN: Split the array into two-dimensional arrays</h3>
   * @param {any} array 原数组
   * @param {number} width 拆分宽度
   */
  public static to2dArray(array: Array<any> = [], width: number): Array<Array<any>> {
    const list = [];
    for (let i = 0; i < array.length; i++) {
      const index = width > array.length ? array.length : width;
      const tmpArray = array.splice(0, index);
      list.push(tmpArray);
    }
    return list;
  }
}
