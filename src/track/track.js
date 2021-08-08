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
   * @param {boolean} equal - Optional flag to check for matching languages.
   * @returns {boolean} - Whether the strings are equal or starts with the same substring.
   */
  static langComparer(inputLang: string, trackLang: string, equal: ?boolean): boolean {
    try {
      inputLang = inputLang.toLowerCase();
      trackLang = trackLang.toLowerCase();
      if (equal) {
        return inputLang ? inputLang === trackLang : false;
      } else {
        return inputLang ? inputLang.startsWith(trackLang) || trackLang.startsWith(inputLang) : false;
      }
    } catch (e) {
      return false;
    }
  }

  static clone<T>(track: any): T {
    return (Object.assign(Object.create(Object.getPrototypeOf(track)), track): T);
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
  _label: ?string;
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
   * Indicator if track available or not.
   * @member
   * @type {boolean}
   * @private
   */
  _available: boolean;
  /**
   * The clone function reference.
   * @member
   * @type {Function}
   * @public
   */
  clone: Function;

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
  get label(): ?string {
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
   * Getter for the available indicator
   * @public
   * @returns {boolean} - The indicator if track available or not.
   */
  get available(): boolean {
    return this._available;
  }

  /**
   * Setter for the index of the track.
   * @public
   * @param {number} value - The index of the track.
   * @returns {void}
   */
  set index(value: number): void {
    this._index = value;
  }

  /**
   * Setter for the label of the track.
   * @public
   * @param {string} value - The label of the track.
   */
  set label(value: string) {
    this._label = value;
  }

  /**
   * Setter for the available indicator
   * @public
   * @param {boolean} isAvailable - The indicator if track available or not
   */
  set available(isAvailable: boolean) {
    this._available = isAvailable;
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
    this._available = typeof settings.available === 'boolean' ? settings.available : true;
    this.clone = Track.clone.bind(null, this);
  }
}
