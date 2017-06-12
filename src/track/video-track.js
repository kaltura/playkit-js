//@flow
import Track from './track'

/**
 * Video track representation of the player.
 * @classdesc
 */
export default class VideoTrack extends Track {
  /**
   * The kind of the text track:
   * subtitles/captions/metadata.
   * @member
   * @type {string}
   * @private
   */
  _bandwidth: string;

  /**
   * Getter for the kind of the text track.
   * @public
   * @returns {string} - The kind of the text track.
   */
  get bandwidth(): string {
    return this._bandwidth;
  }

  /**
   * @constructor
   * @param {Object} settings - The track settings object.
   */
  constructor(settings: Object = {}) {
    super(settings);
    this._bandwidth = settings.bandwidth;
  }
}
