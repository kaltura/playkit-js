//@flow
import Track from './track';

/**
 * Text track representation of the player.
 * @classdesc
 */
const TextTrack: TextTrack = class TextTrack extends Track {
  /**
   * The kind of the text track:
   * subtitles/captions/metadata.
   * @member
   * @type {string}
   * @private
   */
  _kind: string;
  /**
   * flag to know if it's external or not
   * @member
   * @type {boolean}
   * @private
   */
  _external: boolean;
  /**
   * flag to know if it's non language track or not
   * @member
   * @type {boolean}
   * @private
   */
  _emptyLanguage: boolean;
  /**
   * Getter for the kind of the text track.
   * @public
   * @returns {string} - The kind of the text track.
   */
  get kind(): string {
    return this._kind;
  }

  /**
   * Getter for the external of the text track.
   * @public
   * @returns {boolean} - The kind of the text track.
   */
  get external(): boolean {
    return this._external;
  }

  /**
   * Getter for the CEA of the text track.
   * @public
   * @returns {boolean} - The kind of the text track.
   */
  get emptyLanguage(): boolean {
    return this._emptyLanguage;
  }

  /**
   * @constructor
   * @param {Object} settings - The track settings object.
   */
  constructor(settings: Object = {}) {
    super(settings);
    // use language tag if no display label is available
    this._label = this.label || this.language;
    this._kind = settings.kind;
    this._external = settings.external;
    this._emptyLanguage = settings.emptyLanguage;
  }
};

export default TextTrack;
