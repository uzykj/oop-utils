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
      
  /**
   * <h3>CN: 字符串转数值数组，数组转字符串。</h3>
   * <h3>EN: String to Numeric Array, Array to String.</h3>
   * @param {string|number[]} str
   */
  static transferStrAndArray<T extends string | number[]>(str: string | number[]): T {
    if (!str) {
      return <T>[];
    }

    const isInteger = function (param) {
      return param % 1 === 0;
    };

    let result;
    if (str) {
      if (typeof str === 'string' && str.includes(',')) {
        const split = str.split(',');
        result = [];
        split.forEach((s) => {
          if (!isNaN(Number(s))) {
            result.push(isInteger(s) ? parseInt(s) : parseFloat(s));
          }
        });
      } else if (Array.isArray(str)) {
        result = str.join(',');
      }
    }
    return result;
  }
      
  /**
   * <h3>CN: 字符串解析数组。</h3>
   * <h3>EN: String parsing array.</h3>
   * @param {string} value
   */
  static parseArray(value: string): any {
    if (!value) return;

    //判断是否存在数组的字符
    if (value.includes('[') && value.includes(']')) {
      //只替换第一个数组字符
      value = value.replace(/\[/, '');
    }

    //判断数组中括号的结尾符
    const lastIndexOf = value.lastIndexOf(']');
    if (lastIndexOf > -1) {
      value = value.substring(0, lastIndexOf);
    }

    //暂时处理不了多维数组
    if (value.includes('[') || value.includes(']')) {
      throw new Error('Parse error, cannot parse multidimensional array.');
    }

    let result = [];
    const array = value.split(',');
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (item === 'true' || item === 'false') {
        result.push(item === 'true');
      } else if (!isNaN(Number(item))) {
        result.push(parseFloat(item));
      } else {
        result = array;
        break;
      }
    }
    return result;
  }
  
  /**
   * <h3>CN: 重新调整数组大小。如果大于新的长度，直接根据新长度下标截取原数组。如果小于新长度，则添加指定的新元素。</h3>
   * <h3>EN: Resize the array. If it is greater than the new length, the array is directly truncated according to the new length subscript. If less than the new length, add the specified new element.</h3>
   * @param {any[]} metaData
   * @param {number} newSize
   * @param {*} newItem
   */
  static resize(metaData: any[], newSize: number, newItem?: any): any[] {
    const len = metaData.length;
    if (len > newSize) {
      metaData.splice(newSize, len - newSize);
    } else if (len < newSize) {
      const dis = newSize - len;
      const items = [];
      for (let i = 0; i < dis; i++) {
        items.push(newItem);
      }
      metaData = metaData.concat(items);
    }
    return metaData;
  }
      
  /**
   * <h3>CN: 判断2个数组是否包含相同的元素及顺序。</h3>
   * <h3>EN: Determines whether two arrays contain the same elements and in the same order.</h3>
   * @param {any[]} a1
   * @param {any[]} a2
   */
  static equals(a1: any[], a2: any[]): boolean {
    // if the other array is a falsy value, return
    if (!a1 || !a2) return false;
    // compare lengths - can save a lot of time
    if (a1.length != a2.length) return false;
    for (var i = 0, l = a1.length; i < l; i++) {
      // Check if we have nested arrays
      if (a1[i] instanceof Array && a2[i] instanceof Array) {
        // recurse into the nested arrays
        if (!a1[i].equals(a2[i])) return false;
      } else if (a1[i] != a2[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        return false;
      }
    }
    return true;
  }
}
