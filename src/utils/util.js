//@flow
"use strict";

const numbers = {
  /**
   * @param {number} n - A certain number
   * @returns {boolean} - If the input is a number
   */
  isNumber: function (n: number): boolean {
    return Number(n) === n;
  },

  /**
   * @param {number} n - A certain number
   * @returns {boolean} - If the input is an integer
   */
  isInt: function (n: number): boolean {
    return this.isNumber(n) && n % 1 === 0;
  },

  /**
   * @param {number} n - A certain number
   * @returns {boolean} - If the input is a float
   */
  isFloat: function (n: number): boolean {
    return this.isNumber(n) && n % 1 !== 0;
  }
};

const strings = {
  /**
   * Uppercase the first letter of a string
   * @param  {String} string - String to be uppercased
   * @return {String} - The uppercased string
   * @private
   * @method toTitleCase
   */
  capitlize: function (string: string): string {
    if (typeof string !== 'string') {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  /**
   * @param {string} string - Certain string
   * @param {string} searchString - Certain string
   * @returns {boolean} - Whether the string: string is ending with string: searchString
   */
  endsWith: function (string: string, searchString: string): boolean {
    if (typeof string !== 'string' || typeof searchString !== 'string') {
      return false;
    }
    return string.indexOf(searchString, string.length - searchString.length) != -1;
  }
};

const objects = {
  /**
   * @param {Array<Object>} objects - The objects to merge
   * @returns {Object} - The merged object.
   */
  merge: function (objects: Array<Object>): Object {
    let target = {};
    for (let obj of objects) {
      Object.assign(target, obj);
    }
    return target;
  },

  /**
   * @param {any} item - The item to check.
   * @returns {boolean} - Whether the item is an object.
   */
  isObject: function (item: any) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  },

  /**
   * @param {any} target - The target object.
   * @param {any} sources - The objects to merge.
   * @returns {Object} - The merged object.
   */
  mergeDeep: function (target: any, ...sources: any): Object {
    if (!sources.length) {
      return target;
    }
    const source = sources.shift();
    if (this.isObject(target) && this.isObject(source)) {
      for (const key in source) {
        if (this.isObject(source[key])) {
          if (!target[key]) Object.assign(target, {[key]: {}});
          this.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, {[key]: source[key]});
        }
      }
    }
    return this.mergeDeep(target, ...sources);
  },

  /**
   * @param {any} data - The data to copy.
   * @returns {any} - The copied data.
   */
  copyDeep: function (data: any): any {
    let node;
    if (Array.isArray(data)) {
      node = data.length > 0 ? data.slice(0) : [];
      node.forEach((e, i) => {
        if (
          (typeof e === "object" && e !== {}) ||
          (Array.isArray(e) && e.length > 0)
        ) {
          node[i] = this.copyDeep(e);
        }
      });
    } else if (typeof data === "object") {
      node = Object.assign({}, data);
      Object.keys(node).forEach((key) => {
        if (
          (typeof node[key] === "object" && node[key] !== {}) ||
          (Array.isArray(node[key]) && node[key].length > 0)
        ) {
          node[key] = this.copyDeep(node[key]);
        }
      });
    } else {
      node = data;
    }
    return node;
  },

  /**
   * Checks if an object is an empy object.
   * @param {Object} obj - The object to check
   * @returns {boolean} - Whether the object is empty.
   */
  isEmptyObject: function (obj: Object): boolean {
    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  },

  /**
   * Checks for nested object properties.
   * @param {Object} obj - The object to check.
   * @param {string} propertyPath - The path to check.
   * @returns {boolean} - The value in this path.
   */
  getPropertyPath: function (obj: Object, propertyPath: string): any {
    return propertyPath.split(".").reduce(function (o, x) {
      return (typeof o === "undefined" || o === null) ? o : o[x];
    }, obj);
  },

  /**
   * Checks for nested object properties.
   * @param {Object} obj - The object to check.
   * @param {string} propertyPath - The path to check.
   * @returns {boolean} - Whether the path exists in the object.
   */
  hasPropertyPath: function (obj: Object, propertyPath: string): boolean {
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
  },

  /**
   * Creates deferred promise which can resolved/rejected outside the promise scope.
   * @returns {DeferredPromise} - The promise with resolve and reject props.
   */
  defer: function (): DeferredPromise {
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
  },

  /**
   * Binds an handler to a desired context.
   * @param {any} thisObj - The handler context.
   * @param {Function} fn - The handler.
   * @returns {Function} - The new bound function.
   * @private
   */
  bind: function (thisObj: any, fn: Function): Function {
    return function () {
      fn.apply(thisObj, arguments);
    };
  }
};

const generators = {
  /**
   * Generates unique id.
   * @param {number} length - The length of the id.
   * @returns {string} - The generated id.
   */
  uniqueId: function (length: ?number) {
    let from = 2;
    let to = from + ((!length || length < 0) ? 0 : length - 2);
    return '_' + Math.random().toString(36).substr(from, to);
  }
};

const dom = {
  /**
   * Loads script asynchronously.
   * @param {string} url - The url to load.
   * @return {Promise} - The loading promise.
   * @private
   */
  loadScriptAsync(url: string): Promise<*> {
    return new Promise((resolve, reject) => {
      let r = false,
        t = document.getElementsByTagName("script")[0],
        s = document.createElement("script");
      s.type = "text/javascript";
      s.src = url;
      s.async = true;
      s.onload = s.onreadystatechange = function () {
        if (!r && (!this.readyState || this.readyState === "complete")) {
          r = true;
          resolve(this);
        }
      };
      s.onerror = s.onabort = reject;
      if (t && t.parentNode) {
        t.parentNode.insertBefore(s, t);
      }
    });
  }
};

const http = {
  execute: function (url: string, params: any, method: string = "POST", headers?: Map<string, string>): Promise<any> {
    let request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            let jsonResponse = JSON.parse(request.responseText);
            resolve(jsonResponse);
          } else {
            reject(request.responseText);
          }
        }
      };
      request.open(method, url);
      if (headers) {
        headers.forEach((value, key) => {
          request.setRequestHeader(key, value);
        });
      }
      request.send(params);
    });
  }
};

export {numbers, strings, objects, generators, dom, http};
