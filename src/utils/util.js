//@flow
"use strict";

/**
 * @namespace Number
 * @memberof Utils
 */
const _Number = {
  /**
   * @param {number} n - A certain number.
   * @returns {boolean} - Whether the input is a number.
   * @public
   * @memberof Utils.Number
   */
  isNumber: function (n: number): boolean {
    return Number(n) === n;
  },
  /**
   * @param {number} n - A certain number.
   * @returns {boolean} - Whether the input is an integer.
   * @public
   * @memberof Utils.Number
   */
  isInt: function (n: number): boolean {
    return this.isNumber(n) && n % 1 === 0;
  },
  /**
   * @param {number} n - A certain number.
   * @returns {boolean} - Whether the input is a float.
   * @public
   * @memberof Utils.Number
   */
  isFloat: function (n: number): boolean {
    return this.isNumber(n) && n % 1 !== 0;
  }
};
/**
 * @namespace String
 * @memberof Utils
 */
const _String = {
  /**
   * Uppercase the first letter of a string.
   * @param  {String} string - String to be uppercased.
   * @return {String} - The uppercased string.
   * @public
   * @memberof Utils.String
   */
  capitlize: function (string: string): string {
    if (typeof string !== 'string') {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  /**
   * Checks if string a ends with string b.
   * @param {string} string - Certain string.
   * @param {string} searchString - Certain string.
   * @returns {boolean} - Whether the string: string is ending with string: searchString.
   * @public
   * @memberof Utils.String
   */
  endsWith: function (string: string, searchString: string): boolean {
    if (typeof string !== 'string' || typeof searchString !== 'string') {
      return false;
    }
    return string.indexOf(searchString, string.length - searchString.length) != -1;
  }
};
/**
 * @namespace Object
 * @memberof Utils
 */
const _Object = {
  /**
   * Merged (not deep) one or more objects.
   * @param {Array<Object>} objects - The objects to merge.
   * @returns {Object} - The merged object.
   * @public
   * @memberof Utils.Object
   */
  merge: function (objects: Array<Object>): Object {
    let target = {};
    for (let obj of objects) {
      Object.assign(target, obj);
    }
    return target;
  },
  /**
   * Checks if a certain item is an object.
   * @param {any} item - The item to check.
   * @returns {boolean} - Whether the item is an object.
   * @public
   * @memberof Utils.Object
   */
  isObject: function (item: any) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  },
  /**
   * Merged deep one ore more objects.
   * @param {any} target - The target object.
   * @param {any} sources - The objects to merge.
   * @returns {Object} - The merged object.
   * @public
   * @memberof Utils.Object
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
   * Copy deep a data object.
   * @param {any} data - The data to copy.
   * @returns {any} - The cloned data.
   * @public
   * @memberof Utils.Object
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
   * Checks if an object is an empty object.
   * @param {Object} obj - The object to check
   * @returns {boolean} - Whether the object is empty.
   * @public
   * @memberof Utils.Object
   */  isEmptyObject: function (obj: Object): boolean {
    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  },
  /**
   * Gets the value of a nested object property.
   * @param {Object} obj - The object to check.
   * @param {string} propertyPath - The path to check.
   * @returns {boolean} - The value in this path.
   * @public
   * @memberof Utils.Object
   */
  getPropertyPath: function (obj: Object, propertyPath: string): any {
    return propertyPath.split(".").reduce(function (o, x) {
      return (typeof o === "undefined" || o === null) ? o : o[x];
    }, obj);
  },
  /**
   * Checks if an object has nested property.
   * @param {Object} obj - The object to check.
   * @param {string} propertyPath - The path to check.
   * @returns {boolean} - Whether the property exists in the given path.
   * @public
   * @memberof Utils.Object
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
   * @returns {DeferredPromise} - The extended promise with resolve and reject properties.
   * @public
   * @memberof Utils.Object
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
   * @public
   * @memberof Utils.Object
   */
  bind: function (thisObj: any, fn: Function): Function {
    return function () {
      fn.apply(thisObj, arguments);
    };
  }
};
/**
 * @namespace Generator
 * @memberof Utils
 */
const _Generator = {
  /**
   * Generates unique id.
   * @param {number} length - The wanted length of the id.
   * @returns {string} - The generated id.
   * @public
   * @memberof Utils.Generator
   */
  uniqueId: function (length: ?number) {
    let from = 2;
    let to = from + ((!length || length < 0) ? 0 : length - 2);
    return '_' + Math.random().toString(36).substr(from, to);
  },
  /**
   * Generates GUID.
   * @return {string} - The generated GUID.
   * @private
   * @public
   * @memberof Utils.Generator
   */
  guid: function (): string {
    let S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  }
};
/**
 * @namespace Dom
 * @memberof Utils
 */
const _Dom = {
  /**
   * Apends a node as the last child of a node.
   * @param {Element} parent - The parent node.
   * @param {Element} child - The child node.
   * @returns {void}
   * @public
   * @memberof Utils.Dom
   */
  appendChild(parent: ?Element, child: ?Element): void {
    if (parent && child && parent.appendChild) {
      parent.appendChild(child);
    }
  },
  /**
   * Returns a reference to an element by its id.
   * @param {string} id - The desired id.
   * @returns {Element} - The element with the desired id.
   * @public
   * @memberof Utils.Dom
   */
  getElementById(id: string): any {
    return document.getElementById(id);
  },
  /**
   * Creates the HTML element specified by tag name.
   * @param {string} tagName - The tag name.
   * @returns {Element} - The created element.
   * @public
   * @memberof Utils.Dom
   */
  createElement(tagName: string): any {
    return document.createElement(tagName);
  },
  /**
   * Loads script asynchronously.
   * @param {string} url - The url to load.
   * @return {Promise} - The loading promise.
   * @public
   * @memberof Utils.Dom
   */
  loadScriptAsync(url: string): Promise<*> {
    return new Promise((resolve, reject) => {
      let r = false,
        t = document.getElementsByTagName("script")[0],
        s = this.createElement("script");
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
/**
 * @namespace Http
 * @memberof Utils
 */
const _Http = {
  /**
   * Execute xhr request.
   * @param {string} url - The url.
   * @param {any} params - Custom params.
   * @param {string} method - The method.
   * @param {Map<string, string>} headers - Custom headers.
   * @returns {Promise} - The request promise.
   * @public
   * @memberof Utils.Http
   */
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

export {
  _Number as Number,
  _String as String,
  _Object as Object,
  _Generator as Generator,
  _Dom as Dom,
  _Http as Http
};
