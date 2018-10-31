// @flow
import FakeEventTarget from '../event/fake-event-target';
import getLogger from '../utils/logger';
import {CustomEventType} from '../event/event-type';
import EventManager from '../event/event-manager';
import FakeEvent from '../event/fake-event';

class DroppedFramesWatcher extends FakeEventTarget {
  _droppedFramesInterval: ?number = null;
  _lastDroppedFrames: number = 0;
  _lastDecodedFrames: number = 0;
  _lastTime: number = 0;
  _mediaSourceAdapter: IMediaSourceAdapter;
  _config: Object = {};
  _videoElement: HTMLVideoElement;
  _currentBitrate: number = 0;
  _eventManager: EventManager;
  static _logger: any = getLogger('droppedFramesWatcher');

  constructor(mediaSourceAdapter: IMediaSourceAdapter, config: Object, videoElement: HTMLVideoElement) {
    super();
    this._eventManager = new EventManager();
    this._mediaSourceAdapter = mediaSourceAdapter;
    this._config = config;
    this._videoElement = videoElement;
    if (this._mediaSourceAdapter.capabilities.fpsControl) {
      this._eventManager.listen(this._mediaSourceAdapter, CustomEventType.FPS_DROP, event => this._triggerFPSDrop(event.payload.data));
      return;
    }
    this._init();
  }

  _init(): void {
    this._eventManager.listen(
      this._mediaSourceAdapter,
      CustomEventType.VIDEO_TRACK_CHANGED,
      event => (this._currentBitrate = event.payload.selectedVideoTrack.bandwidth)
    );
    this._droppedFramesInterval = setInterval(() => this._checkBitrateQuality(), this._config.fpsDroppedFramesInterval);
  }

  _triggerFPSDrop(data: Object): void {
    this.dispatchEvent(new FakeEvent(CustomEventType.FPS_DROP, data));
  }

  _checkBitrateQuality(): void {
    if (typeof this._videoElement.getVideoPlaybackQuality === 'function') {
      const videoPlaybackQuality = this._videoElement.getVideoPlaybackQuality();
      this._checkFPS(videoPlaybackQuality.droppedVideoFrames, videoPlaybackQuality.totalVideoFrames);
    } else {
      // $FlowFixMe
      this._checkFPS(this._videoElement.webkitDroppedFrameCount, this._videoElement.webkitDecodedFrameCount);
    }
  }

  _checkFPS(droppedFrames: number, decodedFrames: number): void {
    try {
      const currentTime = performance.now();
      if (decodedFrames) {
        if (this._lastTime) {
          const currentPeriod = currentTime - this._lastTime,
            currentDropped = droppedFrames - this._lastDroppedFrames,
            currentDecoded = decodedFrames - this._lastDecodedFrames,
            droppedFPS = (1000 * currentDropped) / currentPeriod;
          if (droppedFPS > 0) {
            DroppedFramesWatcher._logger.debug('checkFPS : droppedFPS/decodedFPS:' + droppedFPS / ((1000 * currentDecoded) / currentPeriod));
            if (currentDropped > this._config.fpsDroppedMonitoringThreshold * currentDecoded) {
              this._mediaSourceAdapter.setMaxBitrate(this._currentBitrate - 1);
              this._triggerFPSDrop({
                currentDropped: currentDropped,
                currentDecoded: currentDecoded,
                totalDroppedFrames: droppedFPS
              });
            }
          }
        }
        this._lastTime = currentTime;
        this._lastDroppedFrames = droppedFrames;
        this._lastDecodedFrames = decodedFrames;
      }
    } catch (error) {
      DroppedFramesWatcher._logger.error('Error occur while trying to check dropFrames: ', error);
    }
  }

  destroy(): void {
    if (this._droppedFramesInterval) {
      clearInterval(this._droppedFramesInterval);
    }
    this._droppedFramesInterval = null;
  }
}

export {DroppedFramesWatcher};
