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
