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
export {capitlize};
