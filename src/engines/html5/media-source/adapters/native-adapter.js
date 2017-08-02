//@flow
import EventManager from '../../../../event/event-manager'
import {EventType} from '../../../../event/event-type'
import Track from '../../../../track/track'
import VideoTrack from '../../../../track/video-track'
import AudioTrack from '../../../../track/audio-track'
import TextTrack from '../../../../track/text-track'
import BaseMediaSourceAdapter from '../base-media-source-adapter'
import * as Utils from '../../../../utils/util'

/**
 * @memberof Classes
 * @class NativeAdapter
 * @extends BaseMediaSourceAdapter
 */
export default class NativeAdapter extends BaseMediaSourceAdapter {
  _eventManager: EventManager;
  _loadPromise: ?Promise<Object>;
  _progressiveSources: Array<Source>;
  static _logger = BaseMediaSourceAdapter.getLogger(NativeAdapter.id);
  /**
   * @member {string}
   * @static
   * @public
   * @memberof Classes.NativeAdapter
   */
  static id: string = 'NativeAdapter';

  /**
   * @param {string} mimeType
   * @returns {boolean}
   * @static
   * @public
   * @memberof Classes.NativeAdapter
   */
  static canPlayType(mimeType: string): boolean {
    let canPlayType = (typeof mimeType === 'string') ? !!(Utils.Dom.createElement("video").canPlayType(mimeType.toLowerCase())) : false;
    NativeAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canPlayType.toString());
    return canPlayType;
  }

  /**
   * @param {HTMLVideoElement} videoElement
   * @param {Object} source
   * @param {Object} config
   * @returns {IMediaSourceAdapter}
   * @static
   * @public
   * @memberof Classes.NativeAdapter
   */
  static createAdapter(videoElement: HTMLVideoElement, source: Source, config: Object): IMediaSourceAdapter {
    return new this(videoElement, source, config);
  }

  constructor(videoElement: HTMLVideoElement, source: Source, config: Object) {
    NativeAdapter._logger.debug('Creating adapter');
    super(videoElement, source);
    this._eventManager = new EventManager();
    this._progressiveSources = config.sources.progressive;
  }

  /**
   * @param {number} startTime
   * @returns {Promise<Object>}
   * @public
   * @memberof Classes.NativeAdapter
   * @instance
   */
  load(startTime: ?number): Promise<Object> {
    if (!this._loadPromise) {
      this._loadPromise = new Promise((resolve, reject) => {
        // We're using 'loadeddata' event for native hls (on 'loadedmetadata' native hls doesn't have tracks yet).
        this._eventManager.listen(this._videoElement, EventType.Html5.LOADED_DATA, () => {
          this._eventManager.unlisten(this._videoElement, EventType.Html5.LOADED_DATA);
          let data = {tracks: this._getParsedTracks()};
          NativeAdapter._logger.debug('The source has been loaded successfully');
          resolve(data);
        });
        this._eventManager.listen(this._videoElement, EventType.Html5.ERROR, (error) => {
          this._eventManager.unlisten(this._videoElement, EventType.Html5.ERROR);
          NativeAdapter._logger.error(error);
          reject(error);
        });
        if (this._isProgressivePlayback()) {
          this._setProgressiveSource();
        }
        if (this._sourceObj && this._sourceObj.url) {
          this._videoElement.src = this._sourceObj.url;
          this._trigger(BaseMediaSourceAdapter.EventType.Player.ABR_MODE_CHANGED, {mode: this._isProgressivePlayback() ? 'manual' : 'auto'});
        }
        if (startTime) {
          this._videoElement.currentTime = startTime;
        }
      });
    }
    return this._loadPromise;
  }

  /**
   * @returns {void}
   * @public
   * @memberof Classes.NativeAdapter
   * @instance
   */
  destroy(): void {
    NativeAdapter._logger.debug('destroy');
    super.destroy();
    this._eventManager.destroy();
    this._loadPromise = null;
    this._progressiveSources = [];
  }

  /**
   * @param {VideoTrack} videoTrack
   * @returns {void}
   * @public
   * @memberof Classes.NativeAdapter
   * @instance
   */
  selectVideoTrack(videoTrack: VideoTrack): void {
    if (this._isProgressivePlayback()) {
      this._selectProgressiveVideoTrack(videoTrack);
    } else {
      this.selectAdaptiveVideoTrack(videoTrack);
    }
  }

  /**
   * @param {VideoTrack} videoTrack
   * @returns {void}
   * @public
   * @memberof Classes.NativeAdapter
   * @instance
   */
  selectAdaptiveVideoTrack(videoTrack: VideoTrack): void {
    let videoTracks = this._videoElement.videoTracks;
    if ((videoTrack instanceof VideoTrack) && videoTracks && videoTracks[videoTrack.index]) {
      this._disableVideoTracks();
      videoTracks[videoTrack.index].selected = true;
      this._onTrackChanged(videoTrack);
    }
  }

  /**
   * @param {AudioTrack} audioTrack
   * @returns {void}
   * @public
   * @memberof Classes.NativeAdapter
   * @instance
   */
  selectAudioTrack(audioTrack: AudioTrack): void {
    let audioTracks = this._videoElement.audioTracks;
    if ((audioTrack instanceof AudioTrack) && audioTracks && audioTracks[audioTrack.index]) {
      this._disableAudioTracks();
      audioTracks[audioTrack.index].enabled = true;
      this._onTrackChanged(audioTrack);
    }
  }

  /**
   * @function selectTextTrack
   * @param {TextTrack} textTrack
   * @returns {void}
   * @public
   * @memberof Classes.NativeAdapter
   * @instance
   */
  selectTextTrack(textTrack: TextTrack): void {
    let textTracks = this._videoElement.textTracks;
    if ((textTrack instanceof TextTrack) && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions') && textTracks && textTracks[textTrack.index]) {
      this._disableTextTracks();
      textTracks[textTrack.index].mode = 'showing';
      this._onTrackChanged(textTrack);
    }
  }

  /**
   * @function hideTextTrack
   * @returns {void}
   * @public
   * @memberof Classes.NativeAdapter
   * @instance
   */
  hideTextTrack(): void {
    this._disableTextTracks();
  }

  /**
   * Enables adaptive bitrate
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   * @memberof Classes.NativeAdapter
   * @instance
   */
  enableAdaptiveBitrate(): void {
    NativeAdapter._logger.warn('Enabling adaptive bitrate is not supported for native playback');
  }

  /**
   * @function isAdaptiveBitrateEnabled
   * @returns {boolean}
   * @public
   * @memberof Classes.NativeAdapter
   * @instance
   */
  isAdaptiveBitrateEnabled(): boolean {
    return !this._isProgressivePlayback();
  }

  /**
   * @public
   * @memberof Classes.NativeAdapter
   * @instance
   * @returns {string}
   */
  get src(): string {
    return this._videoElement.src;
  }

  _setProgressiveSource(): void {
    let suitableTrack = this._getSuitableSourceForResolution(this._progressiveSources, this._videoElement.offsetWidth, this._videoElement.offsetHeight);
    if (suitableTrack) {
      this._sourceObj = suitableTrack;
    }
  }

  _isProgressivePlayback(): boolean {
    return this._sourceObj ? this._sourceObj.mimetype === 'video/mp4' : false;
  }

  _getParsedTracks(): Array<Track> {
    let videoTracks = this._getParsedVideoTracks();
    let audioTracks = this._getParsedAudioTracks();
    let textTracks = this._getParsedTextTracks();
    return videoTracks.concat(audioTracks).concat(textTracks);
  }

  _getParsedVideoTracks(): Array<Track> {
    if (this._isProgressivePlayback()) {
      return this._getParsedProgressiveVideoTracks();
    } else {
      return this._getParsedAdaptiveVideoTracks();
    }
  }

  _getParsedProgressiveVideoTracks(): Array<Track> {
    let videoTracks = this._progressiveSources;
    let parsedTracks = [];
    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
        let settings = {
          id: videoTracks[i].id,
          bandwidth: videoTracks[i].bandwidth,
          width: videoTracks[i].width,
          height: videoTracks[i].height,
          active: this._sourceObj ? videoTracks[i].id === this._sourceObj.id : false,
          index: i
        };
        parsedTracks.push(new VideoTrack(settings));
      }
    }
    return parsedTracks;
  }

  _getParsedAdaptiveVideoTracks(): Array<Track> {
    //TODO check adaptation in safari hls
    let videoTracks = this._videoElement.videoTracks;
    let parsedTracks = [];
    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
        let settings = {
          //TODO calculate width/height/bandwidth
          id: videoTracks[i].id,
          active: videoTracks[i].selected,
          label: videoTracks[i].label,
          language: videoTracks[i].language,
          index: i
        };
        parsedTracks.push(new VideoTrack(settings));
      }
    }
    return parsedTracks;
  }

  _getParsedAudioTracks(): Array<Track> {
    let audioTracks = this._videoElement.audioTracks;
    let parsedTracks = [];
    if (audioTracks) {
      for (let i = 0; i < audioTracks.length; i++) {
        let settings = {
          id: audioTracks[i].id,
          active: audioTracks[i].enabled,
          label: audioTracks[i].label,
          language: audioTracks[i].language,
          index: i
        };
        parsedTracks.push(new AudioTrack(settings));
      }
    }
    return parsedTracks;
  }

  _getParsedTextTracks(): Array<Track> {
    let textTracks = this._videoElement.textTracks;
    let parsedTracks = [];
    if (textTracks) {
      for (let i = 0; i < textTracks.length; i++) {
        let settings = {
          kind: textTracks[i].kind,
          active: textTracks[i].mode === 'showing',
          label: textTracks[i].label,
          language: textTracks[i].language,
          index: i
        };
        parsedTracks.push(new TextTrack(settings));
      }
    }
    return parsedTracks;
  }

  _disableVideoTracks(): void {
    let videoTracks = this._videoElement.videoTracks;
    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
        videoTracks[i].selected = false;
      }
    }
  }

  _disableAudioTracks(): void {
    let audioTracks = this._videoElement.audioTracks;
    if (audioTracks) {
      for (let i = 0; i < audioTracks.length; i++) {
        audioTracks[i].enabled = false;
      }
    }
  }

  _disableTextTracks(): void {
    let textTracks = this._videoElement.textTracks;
    if (textTracks) {
      for (let i = 0; i < textTracks.length; i++) {
        textTracks[i].mode = 'disabled';
      }
    }
  }

  _selectProgressiveVideoTrack(videoTrack: VideoTrack): void {
    let videoTracks = this._progressiveSources;
    if ((videoTrack instanceof VideoTrack) && videoTracks && videoTracks[videoTrack.index]) {
      let currentTime = this._videoElement.currentTime;
      let paused = this._videoElement.paused;
      this._sourceObj = videoTracks[videoTrack.index];
      this._eventManager.listen(this._videoElement, EventType.Html5.LOADED_DATA, () => {
        this._eventManager.unlisten(this._videoElement, EventType.Html5.LOADED_DATA);
        this._eventManager.listen(this._videoElement, EventType.Html5.SEEKED, () => {
          this._eventManager.unlisten(this._videoElement, EventType.Html5.SEEKED);
          this._onTrackChanged(videoTrack);
        });
        this._videoElement.currentTime = currentTime;
      });
      this._videoElement.src = this._sourceObj ? this._sourceObj.url : "";
      paused ? this._videoElement.load() : this._videoElement.play();
    }
  }

  _getSuitableSourceForResolution(tracks: Array<Object>, width: number, height: number): ?Object {
    let mostSuitableWidth = null;
    if (height && tracks) {
      let mostSuitableWidthTracks = [];
      let minWidthDiff = Infinity;
      for (let track of tracks) { // first filter the most width suitable
        let widthDiff = Math.abs(track.width - width);
        if (widthDiff < minWidthDiff) {
          minWidthDiff = widthDiff;
          mostSuitableWidthTracks = [track];
        } else if (widthDiff === minWidthDiff) {
          mostSuitableWidthTracks.push(track);
        }
      }
      let videoRatio = width / height;
      let mostSuitableWidthAndRatioTracks = mostSuitableWidthTracks;
      let minRatioDiff = Infinity;
      for (let track of mostSuitableWidthTracks) {  // filter the most ratio suitable from the width filter results
        if (track.height) {
          let ratioDiff = Math.abs(track.width / track.height - videoRatio);
          if (ratioDiff < minRatioDiff) {
            minRatioDiff = ratioDiff;
            mostSuitableWidthAndRatioTracks = [track];
          } else if (ratioDiff === minRatioDiff) {
            mostSuitableWidthAndRatioTracks.push(track);
          }
        }
      }
      let maxBandwidth = 0;
      for (let track of mostSuitableWidthAndRatioTracks) { // select the top bitrate from the ratio filter results
        if (track.bandwidth > maxBandwidth || !track.bandwidth) {
          maxBandwidth = track.bandwidth || maxBandwidth;
          mostSuitableWidth = track;
        }
      }
    }
    return mostSuitableWidth;
  }
}
