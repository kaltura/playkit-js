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

export {isNumber, isInt, isFloat, merge};
