//@flow
"use strict";

/**
 * Uppercase the first letter of a string
 * @param  {String} string - String to be uppercased
 * @return {String} - The uppercased string
 * @private
 * @method toTitleCase
 */
function capitlize(string: string): string {
  if (typeof string !== 'string') {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * @param {string} string - Certain string
 * @param {string} searchString - Certain string
 * @returns {boolean} - Whether the string: string is ending with string: searchString
 */
function endsWith(string: string, searchString: string): boolean {
  if (typeof string !== 'string' || typeof searchString !== 'string') {
    return false;
  }
  return string.indexOf(searchString, string.length - searchString.length) != -1;
}

export {capitlize, endsWith};
