// @flow
import FakeEventTarget from '../event/fake-event-target';
import FakeEvent from '../event/fake-event';
import {CustomEventType} from '../event/event-type';
import getLogger from '../utils/logger';
import MediaSourceProvider from './html5/media-source/media-source-provider';

export default class droppedFramesWatcher extends FakeEventTarget {
  _droppedFramesInterval: ?number = null;
  _lastDroppedFrames: number = 0;
  _lastDecodedFrames: number = 0;
  _mediaSourceAdapter: ?Object = null;
  _config: Object = {};
  _videoElement: ?HTMLVideoElement = null;
  static _logger: any = getLogger('droppedFramesWatcher');

  constructor(mediaSourceAdapter: MediaSourceProvider, config: Object, videoElement: HTMLVideoElement) {
    super();
    this._mediaSourceAdapter = mediaSourceAdapter;
    this._config = config;
    this._videoElement = videoElement;
  }

  init(): void {
    this._droppedFramesInterval = setInterval(() => this._maybeAdjustBitrateQuality(), this._config.fpsDroppedFramesInterval);
  }

  _maybeAdjustBitrateQuality(): void {
    const isGetVideoPbQualityExist = typeof this._videoElement.getVideoPlaybackQuality === 'function';
    const droppedFrames = isGetVideoPbQualityExist
      ? this._videoElement.getVideoPlaybackQuality().droppedVideoFrames
      : this._videoElement.webkitDroppedFrameCount;
    const totalFrames = isGetVideoPbQualityExist
      ? this._videoElement.getVideoPlaybackQuality().totalVideoFrames
      : this._videoElement.webkitDecodedFrameCount;
    this._checkFPS(droppedFrames, totalFrames);
  }

  _checkFPS(droppedFrames, decodedFrames): void {
    try {
      const currentTime = performance.now();
      if (decodedFrames) {
        if (this._lastTime) {
          const currentPeriod = currentTime - this._lastTime,
            currentDropped = droppedFrames - this._lastDroppedFrames,
            currentDecoded = decodedFrames - this._lastDecodedFrames,
            droppedFPS = (1000 * currentDropped) / currentPeriod;
          if (droppedFPS > 0) {
            this._logger.debug('checkFPS : droppedFPS/decodedFPS:' + droppedFPS / ((1000 * currentDecoded) / currentPeriod));
            if (currentDropped > this._config.fpsDroppedMonitoringThreshold * currentDecoded) {
              const currentBandwidth = this._mediaSourceAdapter.getCurrentQuality();
              this._logger.debug('drop FPS ratio greater than max allowed value for current birate: ' + currentBandwidth);
              if (currentBandwidth > 0) {
                this.dispatchEvent(new FakeEvent(CustomEventType.EXCEEDED_MAX_FRAME_DROP, {bandwidth: currentBandwidth}));
              }
            }
          }
        }
        this._lastTime = currentTime;
        this._lastDroppedFrames = droppedFrames;
        this._lastDecodedFrames = decodedFrames;
      }
    } catch (error) {
      this._logger.error('Error occur while trying to check dropFrames: ', error);
    }
  }

  destroy(): void {
    if (this._droppedFramesInterval) {
      clearInterval(this._droppedFramesInterval);
    }
    this._droppedFramesInterval = null;
  }
}
