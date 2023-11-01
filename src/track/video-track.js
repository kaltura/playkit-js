//@flow
import Track from './track';

/**
 * Video track representation of the player.
 * @classdesc
 */
const VideoTrack: VideoTrack = class VideoTrack extends Track {
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
   * @constructor
   * @param {Object} settings - The track settings object
   */
  constructor(settings: Object = {}) {
    super(settings);
    this._bandwidth = settings.bandwidth;
    this._width = settings.width;
    this._height = settings.height;
    this._label = settings.label ? settings.label : this._height ? this._height + 'p' : undefined;
  }
};

export default VideoTrack;
