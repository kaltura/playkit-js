//@flow

/**
 * General track representation of the player.
 * @classdesc
 */
export default class Track {
  /**
   * Comparing language strings.
   * @param {string} inputLang - The configured language.
   * @param {string} trackLang - The default track language.
   * @returns {boolean} - Whether the strings are equal or starts with the same substring.
   */
  static langComparer(inputLang: string, trackLang: string): boolean {
    try {
      inputLang = inputLang.toLowerCase();
      trackLang = trackLang.toLowerCase();
      return inputLang ? (inputLang.startsWith(trackLang) || trackLang.startsWith(inputLang)) : false;
    } catch (e) {
      return false;
    }
  }

  /**
   * The id of the track.
   * @member
   * @type {string}
   * @private
   */
  _id: ?string;
  /**
   * The active mode of the track.
   * @member
   * @type {boolean}
   * @private
   */
  _active: boolean;
  /**
   * The label of the track.
   * @member
   * @type {string}
   * @private
   */
  _label: string;
  /**
   * The language of the track.
   * @member
   * @type {string}
   * @private
   */
  _language: string;
  /**
   * The index of the track.
   * @member
   * @type {number}
   * @private
   */
  _index: number;

  /**
   * Getter for the track id.
   * @public
   * @returns {?string} - The track id.
   */
  get id(): ?string {
    return this._id;
  }

  /**
   * Getter for the active mode of the track.
   * @public
   * @returns {boolean} - The active mode of the track.
   */
  get active(): boolean {
    return this._active;
  }

  /**
   * Setter for the active mode of the track.
   * @public
   * @param {boolean} value - Whether the track is active or not.
   */
  set active(value: boolean) {
    this._active = value;
  }

  /**
   * Getter for the label of the track.
   * @public
   * @returns {string} - The label of the track.
   */
  get label(): string {
    return this._label;
  }

  /**
   * Getter for the language of the track.
   * @public
   * @returns {string} - The language of the track.
   */
  get language(): string {
    return this._language;
  }

  /**
   * Getter for the index of the track.
   * @public
   * @returns {number} - The index of the track.
   */
  get index(): number {
    return this._index;
  }

  /**
   * @constructor
   * @param {Object} settings - The track settings object.
   */
  constructor(settings: Object = {}) {
    this._id = settings.id;
    this._active = settings.active;
    this._label = settings.label;
    this._language = settings.language;
    this._index = settings.index;
  }
}
