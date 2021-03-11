//@flow
import {jsonp} from './jsonp';

('use strict');

const _Number = {
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

const _String = {
  /**
   * Uppercase the first letter of a string
   * @param  {String} string - String to be uppercased
   * @return {String} - The uppercased string
   * @public
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

const _Object = {
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
    return item && typeof item === 'object' && !Array.isArray(item);
  },

  /**
   * @param {any} item - The item to check if it's class
   * @returns {boolean} - Whether the item is a class
   */
  isClassInstance: function (item: any) {
    return item && item.constructor && item.constructor.name && item.constructor.name !== 'Object';
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
        if (this.isObject(source[key]) && !this.isClassInstance(source[key])) {
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
        if ((typeof e === 'object' && e !== {}) || (Array.isArray(e) && e.length > 0)) {
          node[i] = this.copyDeep(e);
        }
      });
    } else if (data !== null && typeof data === 'object') {
      if (data.clone && typeof data.clone === 'function') {
        node = data.clone();
      } else {
        node = Object.assign({__proto__: data.__proto__}, data);
        Object.keys(node).forEach(key => {
          if ((typeof node[key] === 'object' && node[key] !== {}) || (Array.isArray(node[key]) && node[key].length > 0)) {
            node[key] = this.copyDeep(node[key]);
          }
        });
      }
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
      if (window.Object.prototype.hasOwnProperty.call(obj, key)) return false;
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
    return propertyPath.split('.').reduce(function (o, x) {
      return typeof o === 'undefined' || o === null ? o : o[x];
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
      if (!obj || !window.Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      } else {
        obj = obj[prop];
      }
    }
    return true;
  },

  /**
   * Create an object with a given property path.
   * @param {Object} obj - The object to create on.
   * @param {string} path - The path to create in the object.
   * @param {any} value - The value to set in the path.
   * @returns {Object} - The result object.
   */
  createPropertyPath: function (obj: Object, path: string, value: any = null): Object {
    let pathArray = path.split('.');
    let current = obj;
    while (pathArray.length > 1) {
      const [head, ...tail] = pathArray;
      pathArray = tail;
      if (current[head] === undefined) {
        current[head] = {};
      }
      current = current[head];
    }
    current[pathArray[0]] = value;
    return obj;
  },

  /**
   * Deleted a property path from an object.
   * @param {Object} obj - The object to delete the property path from.
   * @param {string} path - The path to delete in the object.
   * @returns {void}
   */
  deletePropertyPath: function (obj: Object, path: string): void {
    if (!obj || !path) {
      return;
    }
    let pathArray = path.split('.');
    for (let i = 0; i < pathArray.length - 1; i++) {
      obj = obj[pathArray[i]];
      if (typeof obj === 'undefined') {
        return;
      }
    }
    delete obj[pathArray.pop()];
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
    // $FlowFixMe
    return promise;
  },

  /**
   * Binds an handler to a desired context.
   * @param {any} thisObj - The handler context.
   * @param {Function} fn - The handler.
   * @returns {Function} - The new bound function.
   * @public
   */
  bind: function (thisObj: any, fn: Function): Function {
    return function () {
      fn.apply(thisObj, arguments);
    };
  }
};

const _Generator = {
  /**
   * Generates unique id.
   * @param {number} length - The length of the id.
   * @returns {string} - The generated id.
   */
  uniqueId: function (length: ?number) {
    let from = 2;
    let to = from + (!length || length < 0 ? 0 : length - 2);
    return '_' + Math.random().toString(36).substr(from, to);
  },

  /**
   * Generates GUID.
   * @return {string} - GUID
   * @private
   */
  guid: function (): string {
    let S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
  }
};

const _Dom = {
  /**
   * Adds class name to an element
   * @param {Element} element - an HTML element
   * @param {string} className - a class name
   * @returns {void}
   */
  addClassName(element: HTMLElement, className: string): void {
    if (element.classList) {
      element.classList.add(className);
    } else {
      if (!_Dom.hasClassName(element, className)) {
        element.className += className;
      }
    }
  },

  /**
   * Removes class name from an element
   * @param {Element} element - an HTML element
   * @param {string} className - a class name
   * @returns {void}
   */
  removeClassName(element: HTMLElement, className: string): void {
    if (element.classList) {
      element.classList.remove(className);
    } else {
      if (_Dom.hasClassName(element, className)) {
        element.className = element.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
      }
    }
  },
  /**
   * Checks if an element has a class name
   * @param {Element} element - an HTML element
   * @param {string} className - a class name
   * @returns {boolean} - weather an element contains a class name
   */
  hasClassName(element: HTMLElement, className: string) {
    return element.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(element.className);
  },
  /**
   * Add element attribute
   * @param {Element} element - an HTML element
   * @param {string} name - attribute name
   * @param {string} value - attribute value
   * @returns {void}
   */
  setAttribute(element: HTMLElement, name: string, value: string): void {
    element.setAttribute(name, value);
  },
  /**
   * Remove element attribute
   * @param {Element} element - an HTML element
   * @param {string} name - attribute name
   * @returns {void}
   */
  removeAttribute(element: HTMLElement, name: string): void {
    element.removeAttribute(name);
  },
  /**
   * Set element style
   * @param {Element} element - an HTML element
   * @param {string} name - style name
   * @param {string} value - style value
   * @returns {void}
   */
  setStyle(element: HTMLElement, name: string, value: string): void {
    if (element.style.getPropertyValue(name) !== undefined) {
      element.style.setProperty(name, value);
    }
  },
  /**
   * Adds a node to the end of the list of children of a specified parent node.
   * @param {Element} parent - The parent node.
   * @param {Element} child - The child node.
   * @returns {void}
   */
  appendChild(parent: ?Element, child: ?Element): void {
    if (parent && child && parent.appendChild) {
      parent.appendChild(child);
    }
  },
  /**
   * Removes an element from his parent node.
   * @param {Element} parent - The parent node.
   * @param {Element} child - The child node.
   * @returns {void}
   */
  removeChild(parent: ?Node, child: ?Element): void {
    if (parent && child && parent.removeChild) {
      parent.removeChild(child);
    }
  },
  /**
   * Prepend HTML element
   * @param {HTMLElement} child - the child to prepend
   * @param {HTMLElement} parent - the parent to preprend to
   * @returns {void}
   */
  prependTo(child: HTMLElement, parent: HTMLElement): void {
    if (parent.firstChild) {
      parent.insertBefore(child, parent.firstChild);
    } else {
      parent.appendChild(child);
    }
  },
  /**
   * Returns a reference to the element by its ID.
   * @param {string} id - The desired id.
   * @returns {Element} - The element with the desired id.
   */
  getElementById(id: string): any {
    return document.getElementById(id);
  },
  /**
   * Returns a live HTMLCollection of elements with the given tag name.
   * @param {string} tagName - The desired tag name.
   * @returns {Element} - The elements with the desired tag name.
   */
  getElementsByTagName(tagName: string): any {
    return document.getElementsByTagName(tagName);
  },
  /**
   * Creates the HTML element specified by tagName.
   * @param {string} tagName - The tag name.
   * @returns {Element} - The element just created.
   */
  createElement(tagName: string): any {
    return document.createElement(tagName);
  },
  /**
   * Loads an external style sheet asynchronously.
   * @param {string} url - The css url to load.
   * @return {Promise} - The loading promise.
   * @public
   */
  loadStyleSheetAsync(url: string): Promise<HTMLLinkElement> {
    return new Promise((resolve, reject) => {
      let resolved = false,
        cssLinkElement = this.createElement('link');
      cssLinkElement.type = 'text/css';
      cssLinkElement.rel = 'stylesheet';
      cssLinkElement.href = url;
      cssLinkElement.async = true;
      cssLinkElement.onload = cssLinkElement.onreadystatechange = function () {
        if (!resolved && (!this.readyState || this.readyState === 'complete')) {
          resolved = true;
          resolve(this);
        }
      };
      cssLinkElement.onerror = cssLinkElement.onabort = reject;
      _Dom.appendChild(document.head, cssLinkElement);
    });
  },
  /**
   * Loads script asynchronously.
   * @param {string} url - The url to load.
   * @return {Promise} - The loading promise.
   * @public
   */
  loadScriptAsync(url: string): Promise<*> {
    return new Promise((resolve, reject) => {
      let r = false,
        t = document.getElementsByTagName('script')[0],
        s = this.createElement('script');
      s.type = 'text/javascript';
      s.src = url;
      s.async = true;
      s.onload = s.onreadystatechange = function () {
        if (!r && (!this.readyState || this.readyState === 'complete')) {
          r = true;
          resolve(this);
        }
      };
      s.onerror = s.onabort = reject;
      if (t && t.parentNode) {
        t.parentNode.insertBefore(s, t);
      }
    });
  },
  /**
   * Returns the first element that matches a specified CSS selector(s) in the document.
   * @param {string} selector - One or more CSS selectors to match the element.
   * @returns {Element} - The first element that matches a specified CSS selector(s) in the document.
   */
  getElementBySelector(selector: string): any {
    try {
      return document.querySelector(selector);
    } catch (e) {
      return;
    }
  },
  /**
   * Inserts a node as a child, right before an existing child.
   * @param {HTMLElement} parent -  The parent node object.
   * @param {HTMLElement} newChild -  The node object to insert.
   * @param {?HTMLElement} existingChild - The child node to insert the new node before. If set to null, the insertBefore method will insert the newChild at the end.
   * @returns {Element} - The first element that matches a specified CSS selector(s) in the document.
   */
  insertBefore(parent: HTMLElement, newChild: HTMLElement, existingChild: ?HTMLElement): ?HTMLElement {
    try {
      return parent.insertBefore(newChild, existingChild);
    } catch (e) {
      return null;
    }
  }
};

const _Http = {
  protocol: /^(https?:)/i.test(document.location.protocol) ? document.location.protocol : 'https:',
  execute: function (url: string, params: any, method: string = 'POST', headers?: Map<string, string>): Promise<any> {
    let request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            try {
              let jsonResponse = JSON.parse(request.responseText);
              resolve(jsonResponse);
            } catch (e) {
              resolve(request.responseText);
            }
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
  },
  jsonp: jsonp,
  convertHeadersToDictionary: function (headerRow: string): {[header: string]: string} {
    let headerMap = {};
    try {
      // Convert the header string into an array of individual headers
      const arr = headerRow.trim().split(/[\r\n]+/);

      // Create a map of header names to values
      arr.forEach(function (line) {
        const parts = line.split(': ');
        const header = parts.shift().toLowerCase();
        const value = parts.join(': ');
        headerMap[header] = value;
      });
    } catch (e) {
      // do nothing
    }
    return headerMap;
  }
};

const _VERSION = {
  /**
   * Compares two software version numbers (e.g. "1.7.1" or "1.2b").
   *
   * @param {string} v1 The first version to be compared.
   * @param {string} v2 The second version to be compared.
   * @param {object} [options] Optional flags that affect comparison behavior:
   * lexicographical: (true/[false]) compares each part of the version strings lexicographically instead of naturally;
   *                  this allows suffixes such as "b" or "dev" but will cause "1.10" to be considered smaller than "1.2".
   * zeroExtend: ([true]/false) changes the result if one version string has less parts than the other. In
   *             this case the shorter string will be padded with "zero" parts instead of being considered smaller.
   *
   * @returns {number|NaN}
   * - 0 if the versions are equal
   * - a negative integer iff v1 < v2
   * - a positive integer iff v1 > v2
   * - NaN if either version string is in the wrong format
   */

  compare: function (v1: string, v2: string, options: Object = {}) {
    options = _Object.merge([{lexicographical: false, zeroExtend: true}, options]);
    const lexicographical = options.lexicographical;
    const zeroExtend = options.zeroExtend;
    let v1parts = (v1 || '0').split('.');
    let v2parts = (v2 || '0').split('.');

    const isValidPart = x => {
      return (lexicographical ? /^\d+[A-Za-zαß]*$/ : /^\d+[A-Za-zαß]?$/).test(x);
    };

    const mapParts = (parts: Array<string>) => {
      return parts.map(x => {
        const match = /[A-Za-zαß]/.exec(x);
        return Number(match ? x.replace(match[0], '.' + x.charCodeAt(match.index)) : x);
      });
    };

    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
      return NaN;
    }

    if (zeroExtend) {
      while (v1parts.length < v2parts.length) v1parts.push('0');
      while (v2parts.length < v1parts.length) v2parts.push('0');
    }

    if (!lexicographical) {
      v1parts = mapParts(v1parts);
      v2parts = mapParts(v2parts);
    }

    for (let i = 0; i < v1parts.length; ++i) {
      if (v2parts.length === i) {
        return 1;
      }

      if (v1parts[i] === v2parts[i]) {
        continue;
      }
      // $FlowFixMe
      else if (v1parts[i] > v2parts[i]) {
        return 1;
      } else {
        return -1;
      }
    }

    if (v1parts.length !== v2parts.length) {
      return -1;
    }

    return 0;
  }
};

export {_Number as Number, _String as String, _Object as Object, _Generator as Generator, _Dom as Dom, _Http as Http, _VERSION as VERSION};
