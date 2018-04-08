//@flow
import Track from './track'

/**
 * Video track representation of the player.
 * @classdesc
 */
export default class VideoTrack extends Track {
  /**
   * @member {number} _bandwidth - The bandwidth of the video track
   * @type {number}
   * @private
   */
  _bandwidth: number;

  /**
   * @member {number} _width - The width of the video track
   * @type {number}
   * @private
   */
  _width: number;

  /**
   * @member {number} _height - The height of the video track
   * @type {number}
   * @private
   */
  _height: number;

  /**
   * @member {string} _qualityLabel - The _qualityLabel of the video track
   * @type {string}
   * @private
   */
  _qualityLabel: string;

  /**
   * @public
   * @returns {number} - The bandwidth of the video track
   */
  get bandwidth(): number {
    return this._bandwidth;
  }

  /**
   * @public
   * @returns {number} - The width of the video track
   */
  get width(): number {
    return this._width;
  }

  /**
   * @public
   * @returns {number} - The height of the video track
   */
  get height(): number {
    return this._height;
  }

  /**
   * Setter for the qualityLabel of the track.
   * @public
   * @param {string} value - The qualityLabel of the track.
   */
  set qualityLabel(value: string) {
    this._qualityLabel = value;
  }

  /**
   * Getter for the qualityLabel of the track.
   * @public
   * @returns {string} - The qualityLabel of the track.
   */
  get qualityLabel(): string {
    return this._qualityLabel;
  }

  /**
   * @constructor
   * @param {Object} settings - The track settings object
   */
  constructor(settings: Object = {}) {
    super(settings);
    this._bandwidth = settings.bandwidth;
    this._width = settings.width;
    this._height = settings.height;
    this._qualityLabel = settings.qualityLabel;
  }
}
