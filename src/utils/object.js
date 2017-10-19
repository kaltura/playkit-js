// @flow
export default class Object {
  /**
   * @param {Array<Object>} objects - The objects to merge
   * @returns {Object} - The merged object.
   */
  static merge(objects: Array<Object>): Object {
    let target = {};
    for (let obj of objects) {
      window.Object.assign(target, obj);
    }
    return target;
  }

  /**
   * @param {any} item - The item to check.
   * @returns {boolean} - Whether the item is an object.
   */
  static isObject(item: any) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }

  /**
   * @param {any} target - The target object.
   * @param {any} sources - The objects to merge.
   * @returns {Object} - The merged object.
   */
  static mergeDeep(target: any, ...sources: any): Object {
    if (!sources.length) {
      return target;
    }
    const source = sources.shift();
    if (Object.isObject(target) && Object.isObject(source)) {
      for (const key in source) {
        if (Object.isObject(source[key])) {
          if (!target[key]) window.Object.assign(target, {[key]: {}});
          Object.mergeDeep(target[key], source[key]);
        } else {
          window.Object.assign(target, {[key]: source[key]});
        }
      }
    }
    return Object.mergeDeep(target, ...sources);
  }

  /**
   * @param {any} data - The data to copy.
   * @returns {any} - The copied data.
   */
  static copyDeep(data: any): any {
    let node;
    if (Array.isArray(data)) {
      node = data.length > 0 ? data.slice(0) : [];
      node.forEach((e, i) => {
        if ((typeof e === "object" && e !== {}) ||
          (Array.isArray(e) && e.length > 0)) {
          node[i] = Object.copyDeep(e);
        }
      });
    } else if (typeof data === "object") {
      node = window.Object.assign({}, data);
      window.Object.keys(node).forEach((key) => {
        if ((typeof node[key] === "object" && node[key] !== {}) ||
          (Array.isArray(node[key]) && node[key].length > 0)) {
          node[key] = Object.copyDeep(node[key]);
        }
      });
    } else {
      node = data;
    }
    return node;
  }

  /**
   * Checks if an object is an empty object.
   * @param {Object} obj - The object to check
   * @returns {boolean} - Whether the object is empty.
   */
  static isEmptyObject(obj: Object): boolean {
    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  /**
   * Checks for nested object properties.
   * @param {Object} obj - The object to check.
   * @param {string} propertyPath - The path to check.
   * @returns {boolean} - The value in this path.
   */
  static getPropertyPath(obj: Object, propertyPath: string): any {
    return propertyPath.split(".").reduce(function (o, x) {
      return (typeof o === "undefined" || o === null) ? o : o[x];
    }, obj);
  }

  /**
   * Checks for nested object properties.
   * @param {Object} obj - The object to check.
   * @param {string} propertyPath - The path to check.
   * @returns {boolean} - Whether the path exists in the object.
   */
  static hasPropertyPath(obj: Object, propertyPath: string): boolean {
    if (!propertyPath) {
      return false;
    }
    let properties = propertyPath.split('.');
    for (let i = 0; i < properties.length; i++) {
      let prop = properties[i];
      if (!obj || !obj.hasOwnProperty(prop)) {
        return false;
      } else {
        obj = obj[prop];
      }
    }
    return true;
  }

  /**
   * Creates deferred promise which can resolved/rejected outside the promise scope.
   * @returns {DeferredPromise} - The promise with resolve and reject props.
   */
  static defer(): DeferredPromise {
    let res, rej;
    // $FlowFixMe
    let promise = new Promise((resolve, reject) => {
      res = resolve;
      rej = reject;
    });
    // $FlowFixMe
    promise.resolve = res;
    // $FlowFixMe
    promise.reject = rej;
    return promise;
  }

  /**
   * Binds an handler to a desired context.
   * @param {any} thisObj - The handler context.
   * @param {Function} fn - The handler.
   * @returns {Function} - The new bound function.
   * @public
   */
  bind(thisObj: any, fn: Function): Function {
    return function () {
      fn.apply(thisObj, arguments);
    };
  }
}
