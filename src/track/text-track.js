//@flow
import Track from './track';

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
   * @constructor
   * @param {Object} settings - The track settings object.
   */
  constructor(settings: Object = {}) {
    super(settings);
    this._kind = settings.kind;
    this._external = settings.external;
  }
}

export {TextTrack};
