/**
 * Copyright 2013 vtt.js Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var scrollSetting = {
  '': true,
  up: true
};

/**
 * find scroll setting
 * @param {string} value - a string
 * @returns {*} the settings
 */
function findScrollSetting(value) {
  if (typeof value !== 'string') {
    return false;
  }
  var scroll = scrollSetting[value.toLowerCase()];
  return scroll ? value.toLowerCase() : false;
}

/**
 * check percentage validation
 * @param {number} value - percentage
 * @returns {boolean} - boolean
 */
function isValidPercentValue(value) {
  return typeof value === 'number' && (value >= 0 && value <= 100);
}

// VTTRegion shim http://dev.w3.org/html5/webvtt/#vttregion-interface
class VTTRegion {
  _width: number = 100;
  _lines: number = 3;
  _regionAnchorX: number = 0;
  _regionAnchorY: number = 100;
  _viewportAnchorX: number = 0;
  _viewportAnchorY: number = 100;
  _scroll: number = '';

  constructor() {}

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    if (!isValidPercentValue(value)) {
      throw new Error('Width must be between 0 and 100.');
    }
    this._width = value;
  }

  get scroll(): number {
    return this._scroll;
  }

  set scroll(value: number) {
    var setting = findScrollSetting(value);
    // Have to check for false as an empty string is a legal value.
    if (setting === false) {
      throw new SyntaxError('An invalid or illegal string was specified.');
    }
    this._scroll = setting;
  }

  get viewportAnchorY(): number {
    return this._viewportAnchorY;
  }

  set viewportAnchorY(value: number) {
    if (!isValidPercentValue(value)) {
      throw new Error('ViewportAnchorY must be between 0 and 100.');
    }
    this._viewportAnchorY = value;
  }

  get viewportAnchorX(): number {
    return this._viewportAnchorX;
  }

  set viewportAnchorX(value: number) {
    if (!isValidPercentValue(value)) {
      throw new Error('ViewportAnchorX must be between 0 and 100.');
    }
    this._viewportAnchorX = value;
  }

  get regionAnchorX(): number {
    return this._regionAnchorX;
  }

  set regionAnchorX(value: number) {
    if (!isValidPercentValue(value)) {
      throw new Error('RegionAnchorY must be between 0 and 100.');
    }
    this._regionAnchorX = value;
  }

  get lines(): number {
    return this._lines;
  }

  set lines(value: number) {
    if (typeof value !== 'number') {
      throw new TypeError('Lines must be set to a number.');
    }
    this._lines = value;
  }

  get regionAnchorY(): number {
    return this._regionAnchorY;
  }

  set regionAnchorY(value: number) {
    if (!isValidPercentValue(value)) {
      throw new Error('RegionAnchorX must be between 0 and 100.');
    }
    this._regionAnchorY = value;
  }
}

let Region;
if (typeof window !== 'undefined' && window.VTTRegion) {
  Region = window.VTTRegion;
} else {
  Region = VTTRegion;
}

export {Region};
