// @flow
"use strict";

function isNumber(n: number): boolean {
  return Number(n) === n;
}

function isInt(n: number): boolean {
  return isNumber(n) && n % 1 === 0;
}

function isFloat(n: number): boolean {
  return isNumber(n) && n % 1 !== 0;
}

function merge(obj1: Object, obj2: Object): Object {
  if (!obj1 && !obj2) return {};
  if (!obj1) return obj2;
  if (!obj2) return obj1;
  return Object.assign(obj1, obj2);
}

export {isNumber, isInt, isFloat, merge};
