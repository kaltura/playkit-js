//@flow
"use strict";

/**
 * @param {number} n - A certain number
 * @returns {boolean} - If the input is a number
 */
function isNumber(n: number): boolean {
  return Number(n) === n;
}

/**
 * @param {number} n - A certain number
 * @returns {boolean} - If the input is an integer
 */
function isInt(n: number): boolean {
  return isNumber(n) && n % 1 === 0;
}

/**
 * @param {number} n - A certain number
 * @returns {boolean} - If the input is a float
 */
function isFloat(n: number): boolean {
  return isNumber(n) && n % 1 !== 0;
}

/**
 * @param {Array<Object>} objects - The objects to merge
 * @returns {Object} - The merged object.
 */
function merge(objects: Array<Object>): Object {
  let target = {};
  for (let obj of objects) {
    Object.assign(target, obj);
  }
  return target;
}

/**
 * @param {any} item - The item to check.
 * @returns {boolean} - Whether the item is an object.
 */
function isObject(item: any) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * @param {any} target - The target object.
 * @param {any} sources - The objects to merge.
 * @returns {Object} - The merged object.
 */
function mergeDeep(target: any, ...sources: any): Object {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {[key]: {}});
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {[key]: source[key]});
      }
    }
  }
  return mergeDeep(target, ...sources);
}

/**
 * @param {any} data - The data to copy.
 * @returns {any} - The copied data.
 */
function copyDeep(data: any): any {
  let node;
  if (Array.isArray(data)) {
    node = data.length > 0 ? data.slice(0) : [];
    node.forEach((e, i) => {
      if (
        (typeof e === "object" && e !== {}) ||
        (Array.isArray(e) && e.length > 0)
      ) {
        node[i] = copyDeep(e);
      }
    });
  } else if (typeof data === "object") {
    node = Object.assign({}, data);
    Object.keys(node).forEach((key) => {
      if (
        (typeof node[key] === "object" && node[key] !== {}) ||
        (Array.isArray(node[key]) && node[key].length > 0)
      ) {
        node[key] = copyDeep(node[key]);
      }
    });
  } else {
    node = data;
  }
  return node;
}

/**
 * Generates unique id.
 * @param {number} length - The length of the id.
 * @returns {string} - The generated id.
 */
function uniqueId(length: ?number) {
  let from = 2;
  let to = from + ((!length || length < 0) ? 0 : length - 2);
  return '_' + Math.random().toString(36).substr(from, to);
}

/**
 * Checks if an object is an empy object.
 * @param {Object} obj - The object to check
 * @returns {boolean} - Whether the object is empty.
 */
function isEmptyObject(obj: Object): boolean {
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
function getPropertyPath(obj: Object, propertyPath: string): any {
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
function hasPropertyPath(obj: Object, propertyPath: string): boolean {
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

export {
  isNumber,
  isInt,
  isFloat,
  isObject,
  merge,
  mergeDeep,
  copyDeep,
  uniqueId,
  isEmptyObject,
  getPropertyPath,
  hasPropertyPath
};
