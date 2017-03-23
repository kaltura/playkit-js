// @flow
"use strict";
/**
 * @file to-title-case.js
 *
 * Uppercase the first letter of a string
 *
 * @param  {String} string String to be uppercased
 * @return {String}
 * @private
 * @method toTitleCase
 */
function capitlize(string: string): string {
  if (typeof string !== 'string') {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function endsWith(string: string, searchString: string): boolean {
  if (typeof string !== 'string') {
    return false;
  }
  if (typeof searchString !== 'string') {
    return false;
  }

  return string.indexOf(searchString, string.length - searchString.length) != -1;
}

export {capitlize, endsWith};
