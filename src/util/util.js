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

export {isNumber, isInt, isFloat};
