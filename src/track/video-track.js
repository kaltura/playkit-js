//@flow
import Track from './track'

/**
 * Video track representation of the player.
 * @classdesc
 */
export default class VideoTrack extends Track {
  static DefaultVideoTrackSettings: VideoTrackSettings = {
    active: false,
    index: -1,
    id: undefined,
    label: undefined,
    language: undefined,
    bandwidth: undefined,
    height: undefined,
    width: undefined
  };

  /**
   * Calculates the most suitable source to the container size
   * @static
   * @param {Array<Object>} tracks - The tracks
   * @param {number} width - The width to calculate with
   * @param {number} height - The height to calculate with
   * @returns {Object} - The most suitable source to the container size
   */
  static getSuitableSourceForResolution(tracks: Array<Source>, width: number, height: number): ?Object {
    let mostSuitableWidth = null;
    if (height && tracks) {
      let mostSuitableWidthTracks = [];
      let minWidthDiff = Infinity;
      for (let track of tracks) { // first filter the most width suitable
        if (typeof track.width === 'number') {
          let widthDiff = Math.abs(track.width - width);
          if (widthDiff < minWidthDiff) {
            minWidthDiff = widthDiff;
            mostSuitableWidthTracks = [track];
          } else if (widthDiff === minWidthDiff) {
            mostSuitableWidthTracks.push(track);
          }
        }
      }
      let videoRatio = width / height;
      let mostSuitableWidthAndRatioTracks = mostSuitableWidthTracks;
      let minRatioDiff = Infinity;
      for (let track of mostSuitableWidthTracks) {  // filter the most ratio suitable from the width filter results
        let ratioDiff;
        if (typeof track.width === 'number' && typeof track.height === 'number') {
          ratioDiff = Math.abs(track.width / track.height - videoRatio);
        } else {
          ratioDiff = NaN;
        }
        if (ratioDiff < minRatioDiff) {
          minRatioDiff = ratioDiff;
          mostSuitableWidthAndRatioTracks = [track];
        } else if (ratioDiff === minRatioDiff) {
          mostSuitableWidthAndRatioTracks.push(track);
        }

      }
      let maxBandwidth = 0;
      for (let track of mostSuitableWidthAndRatioTracks) { // select the top bitrate from the ratio filter results
        if (!track.bandwidth || track.bandwidth > maxBandwidth) {
          maxBandwidth = track.bandwidth || maxBandwidth;
          mostSuitableWidth = track;
        }
      }
    }
    return mostSuitableWidth;
  }

  /**
   * @member {?number} _bandwidth - The bandwidth of the video track
   * @type {?number}
   * @private
   */
  _bandwidth: ?number;

  /**
   * @member {?number} _width - The width of the video track
   * @type {?number}
   * @private
   */
  _width: ?number;

  /**
   * @member {?number} _height - The height of the video track
   * @type {?number}
   * @private
   */
  _height: ?number;

  /**
   * @public
   * @returns {?number} - The bandwidth of the video track
   */
  get bandwidth(): ?number {
    return this._bandwidth;
  }

  /**
   * @public
   * @returns {?number} - The width of the video track
   */
  get width(): ?number {
    return this._width;
  }

  /**
   * @public
   * @returns {?number} - The height of the video track
   */
  get height(): ?number {
    return this._height;
  }

  /**
   * @constructor
   * @param {VideoTrackSettings} settings - The track settings object
   */
  constructor(settings: VideoTrackSettings = VideoTrack.DefaultVideoTrackSettings) {
    super(settings);
    this._bandwidth = settings.bandwidth;
    this._width = settings.width;
    this._height = settings.height;
  }
}
