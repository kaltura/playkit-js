import { FakeEventTarget } from '../event/fake-event-target';
import getLogger from '../utils/logger';
import {CustomEventType} from '../event/event-type';
import { EventManager } from '../event/event-manager';
import { FakeEvent } from '../event/fake-event';
import {IMediaSourceAdapter} from '../types';
import {PKAbrConfigObject} from '../types';

const NOT_SUPPORTED: number = -1;

class DroppedFramesWatcher extends FakeEventTarget {
  private _droppedFramesInterval: number | null = null;
  private _lastDroppedFrames: number = 0;
  private _lastDecodedFrames: number = 0;
  private _lastTime: number = 0;
  private _mediaSourceAdapter: IMediaSourceAdapter;
  private _config: PKAbrConfigObject;
  private _videoElement: HTMLVideoElement;
  private _currentBitrate: number = 0;
  private _eventManager: EventManager;
  private static _logger: any = getLogger('droppedFramesWatcher');

  constructor(mediaSourceAdapter: IMediaSourceAdapter, config: PKAbrConfigObject, videoElement: HTMLVideoElement) {
    super();
    this._eventManager = new EventManager();
    this._mediaSourceAdapter = mediaSourceAdapter;
    this._config = config;
    this._videoElement = videoElement;
    if (this._mediaSourceAdapter.capabilities.fpsControl) {
      this._eventManager.listen(this._mediaSourceAdapter, CustomEventType.FPS_DROP, (event: FakeEvent) => this._triggerFPSDrop(event.payload.data));
      return;
    }
    if (this._getDroppedAndDecodedFrames()[0] === NOT_SUPPORTED) {
      DroppedFramesWatcher._logger.debug('Dropped frame watcher is not supported');
    } else if (this._config.capLevelOnFPSDrop) {
      DroppedFramesWatcher._logger.debug('Initialized capLevelOnFPSDrop = true');
      this._init();
    } else {
      DroppedFramesWatcher._logger.debug('Not Initialized');
    }
  }

  private _init(): void {
    this._eventManager.listen(
      this._mediaSourceAdapter,
      CustomEventType.VIDEO_TRACK_CHANGED,
      (event: FakeEvent) => (this._currentBitrate = event.payload.selectedVideoTrack.bandwidth)
    );
    this._droppedFramesInterval = setInterval(() => this._checkFPS(), this._config.fpsDroppedFramesInterval);
  }

  private _triggerFPSDrop(data: any): void {
    this.dispatchEvent(new FakeEvent(CustomEventType.FPS_DROP, data));
  }

  private _getDroppedAndDecodedFrames(): [number, number] {
    if (typeof this._videoElement.getVideoPlaybackQuality === 'function') {
      const videoPlaybackQuality = this._videoElement.getVideoPlaybackQuality();
      return [videoPlaybackQuality.droppedVideoFrames, videoPlaybackQuality.totalVideoFrames];
      // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } else if (typeof this._videoElement.webkitDroppedFrameCount === 'number' && typeof this._videoElement.webkitDecodedFrameCount === 'number') {
      // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return [this._videoElement.webkitDroppedFrameCount, this._videoElement.webkitDecodedFrameCount];
    } else {
      return [NOT_SUPPORTED, NOT_SUPPORTED];
    }
  }

  private _checkFPS(): void {
    const [droppedFrames, decodedFrames] = this._getDroppedAndDecodedFrames();
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

  public destroy(): void {
    if (this._droppedFramesInterval) {
      clearInterval(this._droppedFramesInterval);
    }
    this._droppedFramesInterval = null;
    this._eventManager.destroy();
  }
}

export {DroppedFramesWatcher};
