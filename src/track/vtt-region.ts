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
const scrollSetting = {
  '': true,
  up: true
};

/**
 * find scroll setting
 * @param {string} value - a string
 * @returns {*} the settings
 */
function findScrollSetting(value): string | boolean {
  if (typeof value !== 'string') {
    return false;
  }
  const scroll = scrollSetting[value.toLowerCase()];
  return scroll ? value.toLowerCase() : false;
}

/**
 * check percentage validation
 * @param {number} value - percentage
 * @returns {boolean} - boolean
 */
function isValidPercentValue(value): boolean {
  return typeof value === 'number' && value >= 0 && value <= 100;
}

// VTTRegion shim http://dev.w3.org/html5/webvtt/#vttregion-interface
class VTTRegion {
  private _width: number = 100;
  private _lines: number = 3;
  private _regionAnchorX: number = 0;
  private _regionAnchorY: number = 100;
  private _viewportAnchorX: number = 0;
  private _viewportAnchorY: number = 100;
  private _scroll: string = '';

  constructor() {}

  public get width(): number {
    return this._width;
  }

  public set width(value: number) {
    if (!isValidPercentValue(value)) {
      throw new Error('Width must be between 0 and 100.');
    }
    this._width = value;
  }

  public get scroll(): string {
    return this._scroll;
  }

  public set scroll(value: number) {
    const setting = findScrollSetting(value);
    // Have to check for false as an empty string is a legal value.
    if (setting === false) {
      throw new SyntaxError('An invalid or illegal string was specified.');
    }
    this._scroll = setting as string;
  }

  public get viewportAnchorY(): number {
    return this._viewportAnchorY;
  }

  public set viewportAnchorY(value: number) {
    if (!isValidPercentValue(value)) {
      throw new Error('ViewportAnchorY must be between 0 and 100.');
    }
    this._viewportAnchorY = value;
  }

  public get viewportAnchorX(): number {
    return this._viewportAnchorX;
  }

  public set viewportAnchorX(value: number) {
    if (!isValidPercentValue(value)) {
      throw new Error('ViewportAnchorX must be between 0 and 100.');
    }
    this._viewportAnchorX = value;
  }

  public get regionAnchorX(): number {
    return this._regionAnchorX;
  }

  public set regionAnchorX(value: number) {
    if (!isValidPercentValue(value)) {
      throw new Error('RegionAnchorY must be between 0 and 100.');
    }
    this._regionAnchorX = value;
  }

  public get lines(): number {
    return this._lines;
  }

  public set lines(value: number) {
    if (typeof value !== 'number') {
      throw new TypeError('Lines must be set to a number.');
    }
    this._lines = value;
  }

  public get regionAnchorY(): number {
    return this._regionAnchorY;
  }

  public set regionAnchorY(value: number) {
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
