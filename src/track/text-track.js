//@flow
import Track from './track'

/**
 * Text track representation of the player.
 * @classdesc
 */
export default class TextTrack extends Track {
  /**
   * Comparing language strings according to their length.
   * @param {string} inputLang - The configured language.
   * @param {string} trackLang - The default track language.
   * @returns {boolean} - Whether the strings are equal or starts with the same substring.
   */
  static langComparer(inputLang: string, trackLang: string): boolean {
    const inputLangLength = inputLang.length;
    const trackLangLength = trackLang.length;
    if (inputLangLength === trackLangLength) {
      return inputLang === trackLang;
    }
    return (inputLangLength > trackLangLength ? inputLang.startsWith(trackLang) : trackLang.startsWith(inputLang));
  }

  /**
   * The kind of the text track:
   * subtitles/captions/metadata.
   * @member
   * @type {string}
   * @private
   */
  _kind: string;

  /**
   * Getter for the kind of the text track.
   * @public
   * @returns {string} - The kind of the text track.
   */
  get kind(): string {
    return this._kind;
  }

  /**
   * @constructor
   * @param {Object} settings - The track settings object.
   */
  constructor(settings: Object = {}) {
    super(settings);
    this._kind = settings.kind;
  }
}

export {TextTrack};
