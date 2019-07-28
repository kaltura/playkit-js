//@flow
import {convertCueToDOMTree} from './text-track-display';

const autoKeyword: string = 'auto';
const directionSetting: {[string]: boolean} = {
  '': true,
  lr: true,
  rl: true
};
const alignSetting: {[string]: boolean} = {
  start: true,
  center: true,
  end: true,
  left: true,
  right: true
};

/**
 * helper
 * @param {string} value - the string to find
 * @returns {string | boolean} - the aligned sting if found
 */
function findDirectionSetting(value): string | boolean {
  if (typeof value !== 'string') {
    return false;
  }
  const dir = directionSetting[value.toLowerCase()];
  return dir ? value.toLowerCase() : false;
}

/**
 * helper
 * @param {string} value - the string
 * @returns {string | boolean} - the aligned sting if found
 */
function findAlignSetting(value: string): string | boolean {
  if (typeof value !== 'string') {
    return false;
  }
  const align = alignSetting[value.toLowerCase()];
  return align ? value.toLowerCase() : false;
}

/**
 * VTTCue model
 * @class
 * @classdesc VTT Cue model to represent VTT cues internally
 */
class VTTCue {
  /**
   * // Lets us know when the VTTCue's data has changed in such a way that we need
   * to recompute its display state. This lets us compute its display state lazily.
   * @type {boolean}
   */
  hasBeenReset: boolean = false;

  /**
   * This is used as part of the rendering model, to keep cues in a consistent position.
   * http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
   * @type {undefined}
   */
  displayState: any = undefined;
  /**
   * VTTCue and TextTrackCue properties
   * http://dev.w3.org/html5/webvtt/#vttcue-interface
   */
  /**
   * An arbitrary string.
   * @type {string}
   * @private
   */
  _id: string = '';
  /**
   * A boolean indicating whether playback of the media resource is to pause when the end of the
   * range to which the cue applies is reached.
   * @type {boolean}
   * @private
   */
  _pauseOnExit: boolean = false;
  /**
   * The time, in seconds and fractions of a second, that describes the beginning of the range of
   * the media data to which the cue applies.
   * @type {number}
   * @private
   */
  _startTime: number;
  /**
   * The time, in seconds and fractions of a second, that describes the end of the range of
   * the media data to which the cue applies.
   * @type {number}
   * @private
   */
  _endTime: number;
  /**
   * The raw text of the cue, and rules for its interpretation, allowing the text to be
   * rendered and converted to a DOM fragment.
   * @type {string}
   * @private
   */
  _text: string;
  /**
   * An optional WebVTT region to which a cue belongs.
   * By default, the region is set to null.
   * @type {null}
   * @private
   */
  _region: ?string = null;
  /**
   * configures the cue to use vertical text layout rather than horizontal text layout.
   * Vertical text layout is sometimes used in Japanese, for example. The default is horizontal layout
   * @type {string}
   * @private
   */
  _vertical: string = '';
  /**
   * A boolean indicating whether the line is an integer number of lines (using the line dimensions of
   * the first line of the cue), or whether it is a percentage of the dimension of the video.
   * The flag is set to true when lines are counted, and false otherwise.
   * @type {boolean}
   * @private
   */
  _snapToLines: boolean = true;
  /**
   * The line defines positioning of the cue box.
   * @type {string | number}
   * @private
   */
  _line: string | number = 'auto';
  /**
   * An alignment for the cue box’s line, one of start/center/end alignment
   * @type {string}
   * @private
   */
  _lineAlign: string = 'start';
  /**
   * The position defines the indent of the cue box in the direction defined by the writing direction
   * @type {number}
   * @private
   */
  _position: number = 50;
  /**
   * An alignment for the cue box in the dimension of the writing direction, describing what the position
   * is anchored to
   * @type {string}
   * @private
   */
  _positionAlign: string = 'center';
  /**
   * A number giving the size of the cue box, to be interpreted as a percentage of the video, as defined
   * by the writing direction.
   * @type {number}
   * @private
   */
  _size: number = 50;
  /**
   * An alignment for all lines of text within the cue box, in the dimension of the writing direction
   * @type {string}
   * @private
   */
  _align: string = 'center';

  constructor(startTime: number, endTime: number, text: string) {
    this._startTime = startTime;
    this._endTime = endTime;
    this._text = text;
    /**
     * Other <track> spec defined properties
     */
  }

  resetCue(): void {
    this.hasBeenReset = true;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = '' + value;
  }

  get pauseOnExit(): boolean {
    return this._pauseOnExit;
  }

  set pauseOnExit(value: boolean) {
    this._pauseOnExit = value;
  }

  get startTime(): number {
    return this._startTime;
  }

  set startTime(value: number) {
    if (typeof value !== 'number') {
      throw new TypeError('Start time must be set to a number.');
    }
    this._startTime = value;
    this.resetCue();
  }

  get endTime(): number {
    return this._endTime;
  }

  set endTime(value: number) {
    if (typeof value !== 'number') {
      throw new TypeError('End time must be set to a number.');
    }
    this._endTime = value;
    this.resetCue();
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = '' + value;
    this.resetCue();
  }

  get region(): ?string {
    return this._region;
  }

  set region(value: string) {
    this._region = value;
    this.resetCue();
  }

  get vertical(): string {
    return this._vertical;
  }

  set vertical(value: string) {
    const setting = findDirectionSetting(value);
    // Have to check for false because the setting an be an empty string.
    if (setting === false) {
      throw new SyntaxError('An invalid or illegal string was specified.');
    } else if (typeof setting === 'string') {
      this._vertical = setting;
      this.resetCue();
    }
  }

  get snapToLines(): boolean {
    return this._snapToLines;
  }

  set snapToLines(value: boolean) {
    this._snapToLines = value;
    this.resetCue();
  }

  get line(): string | number {
    return this._line;
  }

  set line(value: string | number) {
    if (typeof value !== 'number' && value !== autoKeyword) {
      throw new SyntaxError('An invalid number or illegal string was specified.');
    }
    this._line = value;
    this.resetCue();
  }

  get lineAlign(): string {
    return this._lineAlign;
  }

  set lineAlign(value: string) {
    const setting = findAlignSetting(value);
    if (!setting) {
      throw new SyntaxError('An invalid or illegal string was specified.');
    } else if (typeof setting === 'string') {
      this._lineAlign = setting;
      this.resetCue();
    }
  }

  get position(): number {
    return this._position;
  }

  set position(value: number) {
    if (value < 0 || value > 100) {
      throw new Error('Position must be between 0 and 100.');
    }
    this._position = value;
    this.resetCue();
  }

  get positionAlign(): string {
    return this._positionAlign;
  }

  set positionAlign(value: string) {
    const setting = findAlignSetting(value);
    if (!setting) {
      throw new SyntaxError('An invalid or illegal string was specified.');
    } else if (typeof setting === 'string') {
      this._positionAlign = setting;
      this.resetCue();
    }
  }

  get size(): number | boolean {
    return this._size;
  }

  set size(value: number): void {
    if (value < 0 || value > 100) {
      throw new Error('Size must be between 0 and 100.');
    }
    this._size = value;
    this.resetCue();
  }

  get align(): string {
    return this._align;
  }

  set align(value: string): void {
    const setting = findAlignSetting(value);
    if (!setting) {
      throw new SyntaxError('An invalid or illegal string was specified.');
    } else if (typeof setting === 'string') {
      this._align = (setting: string);
      this.resetCue();
    }
  }

  getCueAsHTML() {
    return convertCueToDOMTree(window, this.text);
  }
}

let Cue;
if (typeof window !== 'undefined' && window.VTTCue) {
  Cue = window.VTTCue;
} else {
  Cue = VTTCue;
}

export {Cue};
