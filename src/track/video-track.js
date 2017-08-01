//@flow
import Track from './track'

/**
 * @namespace VideoTrack
 * @memberof Classes
 * @extends Track
 * @class VideoTrack
 */
export default class VideoTrack extends Track {
  _bandwidth: number;
  _width: number;
  _height: number;

  /**
   * The bandwidth of the video track.
   * @public
   * @returns {number} - The bandwidth of the video track.
   * @memberof Classes.VideoTrack
   * @instance
   */
  get bandwidth(): number {
    return this._bandwidth;
  }

  /**
   * The width of the video track
   * @public
   * @returns {number} - The width of the video track.
   * @memberof Classes.VideoTrack
   * @instance
   */
  get width(): number {
    return this._width;
  }

  /**
   * The height of the video track.
   * @public
   * @returns {number} - The height of the video track.
   * @memberof Classes.VideoTrack
   * @instance
   */
  get height(): number {
    return this._height;
  }

  constructor(settings: Object = {}) {
    super(settings);
    this._bandwidth = settings.bandwidth;
    this._width = settings.width;
    this._height = settings.height;
  }
}
