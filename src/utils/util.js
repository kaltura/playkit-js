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
 * @param {Object} obj1 - Certain object
 * @param {Object} obj2 - Certain object
 * @returns {*} - The merged object.
 */
function merge(obj1: Object, obj2: Object): Object {
  if (!obj1 && !obj2) return {};
  if (!obj1) return obj2;
  if (!obj2) return obj1;
  return Object.assign(obj1, obj2);
}

export {isNumber, isInt, isFloat, merge};
