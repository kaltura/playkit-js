//@flow
import Track from './track'

/**
 * Text track representation of the player.
 * @classdesc
 */
export default class TextTrack extends Track {
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
   * cues array (for external text track)
   * @member
   * @type {Array<any>}
   * @private
   */
  _cues: Array<any>;
  /**
   * the url of the external text track
   * @member
   * @type {string}
   * @private
   */
  _url: string;
  /**
   * type of the external text track
   * @member
   * @type {string}
   * @private
   */
  _type: string;

  /**
   * Getter for the kind of the text track.
   * @public
   * @returns {string} - The kind of the text track.
   */
  get kind(): string {
    return this._kind;
  }
  /**
   * Getter for the type of the text track.
   * @public
   * @returns {string} - The kind of the text track.
   */
  get type(): string{
    return this._type;
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
   * Getter for the cues of the text track.
   * @public
   * @returns {Array<any>} - The cues of the text track.
   */
  get cues(): Array<any> {
    return this._cues;
  }

  /**
   * setter for the cues of the text track
   * @param {Array<any>} value - cues to set
   */
  set cues(value: Array<any>) {
    this._cues = value;
  }
  /**
   * Getter for the cues of the text track.
   * @public
   * @returns {string} - The kind of the text track.
   */
  get url(): string {
    return this._url;
  }

  /**
   * @constructor
   * @param {Object} settings - The track settings object.
   */
  constructor(settings: Object = {}) {
    super(settings);
    this._kind = settings.kind;
    this._external = settings.external;
    this._cues = settings.cues;
    this._url = settings.url;
    this._type = settings.type;
  }
}

export {TextTrack};
