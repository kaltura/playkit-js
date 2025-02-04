/**
 * General track representation of the player.
 * @classdesc
 */
export default class Track {
  /**
   * Comparing language strings.
   * @param {string} inputLang - The configured language.
   * @param {string} trackLang - The default track language.
   * @param {string} additionalLanguage -  Additional configured language.
   * @param {boolean} equal - Optional flag to check for matching languages.
   * @returns {boolean} - Whether the strings are equal or starts with the same substring.
   */
  public static langComparer(inputLang: string, trackLang: string, additionalLanguage?: string | string [], equal?: boolean): boolean {
    try {
      //merge arrays
      let languages;
      if(Array.isArray(additionalLanguage)) {
        languages = [inputLang, ...additionalLanguage];
      }
      else {
        languages = [inputLang, additionalLanguage];
      }
      return Track._langComparer(languages,trackLang, equal);
    } catch (e) {
      return false;
    }
  }

  private static _langComparer(inputLanguages: [string, (string | undefined)], trackLang: string, equal?: boolean): boolean {
    //first check is there is a complete match
    for(const language of inputLanguages) {
      if(language?.trim() !== '') {
        if (equal) {
          if(this._isLangEqual(language, trackLang))
            return true;
        }
        else if(this._isLangPrefixEqual(language, trackLang)) {
          return true;
        }
      }
    }
    return false;
  }

  private static _isLangEqual(src,dst) : boolean {
    return src.toLowerCase() === dst.toLowerCase();
  }
  private static _isLangPrefixEqual(src,dst) : boolean {
    return src.toLowerCase().startsWith(dst.toLowerCase()) || dst.toLowerCase().startsWith(src.toLowerCase());
  }



  public static clone<T>(track: any): T {
    return (Object.assign(Object.create(Object.getPrototypeOf(track)), track) as T);
  }

  /**
   * The id of the track.
   * @member
   * @type {string}
   * @private
   */
  private _id: number;
  /**
   * The active mode of the track.
   * @member
   * @type {boolean}
   * @private
   */
  private _active: boolean;
  /**
   * The label of the track.
   * @member
   * @type {string}
   * @private
   */
  protected _label: string | undefined;
  /**
   * The language of the track.
   * @member
   * @type {string}
   * @private
   */
  private _language: string;
  /**
   * The index of the track.
   * @member
   * @type {number}
   * @private
   */
  protected _index: number;
  /**
   * Indicator if track available or not.
   * @member
   * @type {boolean}
   * @private
   */
  private _available: boolean;
  /**
   * The clone function reference.
   * @member
   * @type {Function}
   * @public
   */
  public clone: (...args: any[]) => any;

  /**
   * Getter for the track id.
   * @public
   * @returns {?string} - The track id.
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter for the active mode of the track.
   * @public
   * @returns {boolean} - The active mode of the track.
   */
  public get active(): boolean {
    return this._active;
  }

  /**
   * Setter for the active mode of the track.
   * @public
   * @param {boolean} value - Whether the track is active or not.
   */
  public set active(value: boolean) {
    this._active = value;
  }

  /**
   * Getter for the label of the track.
   * @public
   * @returns {string} - The label of the track.
   */
  public get label(): string | undefined {
    return this._label;
  }

  /**
   * Getter for the language of the track.
   * @public
   * @returns {string} - The language of the track.
   */
  public get language(): string {
    return this._language;
  }

  /**
   * Getter for the index of the track.
   * @public
   * @returns {number} - The index of the track.
   */
  public get index(): number {
    return this._index;
  }

  /**
   * Getter for the available indicator
   * @public
   * @returns {boolean} - The indicator if track available or not.
   */
  public get available(): boolean {
    return this._available;
  }

  /**
   * Setter for the index of the track.
   * @public
   * @param {number} value - The index of the track.
   * @returns {void}
   */
  public set index(value: number) {
    this._index = value;
  }

  /**
   * Setter for the label of the track.
   * @public
   * @param {string} value - The label of the track.
   */
  public set label(value: string) {
    this._label = value;
  }

  /**
   * Setter for the available indicator
   * @public
   * @param {boolean} isAvailable - The indicator if track available or not
   */
  public set available(isAvailable: boolean) {
    this._available = isAvailable;
  }

  /**
   * Setter for the language of the track.
   * @public
   * @param {string} value - The language of the track.
   */
  public set language(value: string) {
    this._language = value;
  }

  /**
   * @constructor
   * @param {Object} settings - The track settings object.
   */
  constructor(settings: any = {}) {
    this._id = settings.id;
    this._active = settings.active;
    this._label = settings.label;
    this._language = settings.language;
    this._index = settings.index;
    this._available = typeof settings.available === 'boolean' ? settings.available : true;
    this.clone = Track.clone.bind(null, this);
  }
}
