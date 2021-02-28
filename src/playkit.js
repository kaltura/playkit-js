//@flow
import Player from './player';
import BaseMediaSourceAdapter from './engines/html5/media-source/base-media-source-adapter';
import {registerMediaSourceAdapter} from './engines/html5/media-source/media-source-provider';
import {EngineDecoratorProvider} from './engines/engine-decorator-provider';
import {registerEngine, unRegisterEngine} from './engines/engine-provider';
import BaseMiddleware from './middleware/base-middleware';
import State from './state/state';
import Track from './track/track';
import ImageTrack from './track/image-track';
import VideoTrack from './track/video-track';
import AudioTrack from './track/audio-track';
import TextTrack from './track/text-track';
import TextStyle from './track/text-style';
import Env from './utils/env';
import * as Utils from './utils';
import Error from './error/error';
import FakeEvent from './event/fake-event';
import FakeEventTarget from './event/fake-event-target';
import EventManager from './event/event-manager';
import {StateType} from './state/state-type';
import {TrackType} from './track/track-type';
import {StreamType} from './engines/stream-type';
import {EngineType} from './engines/engine-type';
import {MediaType} from './enums/media-type';
import {CustomEventType, EventType, Html5EventType} from './event/event-type';
import {AbrMode} from './track/abr-mode-type';
import getLogger, {getLogLevel, LogLevel, LogLevelType, setLogLevel} from './utils/logger';
import {CorsType} from './engines/html5/cors-types';
import {DrmScheme} from './drm/drm-scheme';
import {MimeType} from './enums/mime-type';
import {RequestType} from './enums/request-type';
import {AdBreakType} from './ads/ad-break-type';
import {AdTagType} from './ads/ad-tag-type';
import {AdEventType} from './ads/ad-event-type';
import {ScreenOrientationType} from './enums/screen-orientation-type';
import {AutoPlayType} from './enums/auto-play-type';
import {ThumbnailInfo} from './thumbnail/thumbnail-info';

declare var __VERSION__: string;
declare var __NAME__: string;

const VERSION = __VERSION__;
const NAME = __NAME__;

/**
 * @param {Object} config - The configuration of the player
 * @returns {Player} - The player instance
 */
export function loadPlayer(config: ?Object) {
  return new Player(config || {});
}

// Export the media source adapters necessary utils
export {registerMediaSourceAdapter, BaseMediaSourceAdapter};

// Export the middleware framework
export {BaseMiddleware};

// Export the tracks classes
export {Track, VideoTrack, AudioTrack, TextTrack, ImageTrack, TextStyle};

// Export utils library
export {Utils};

export {Utils as utils};

// Export Error class
export {Error};

// Export Event system
export {FakeEvent, FakeEventTarget, EventManager};

// Export version and player name
export {VERSION, NAME};

// Export environment data
export {Env};

// Export State class
export {State};

// Export the player capabilities
const getCapabilities = Player.getCapabilities;
const setCapabilities = Player.setCapabilities;

// Export capabilities utils
export {getCapabilities, setCapabilities};

// Export engineDecoratorProvider
export {EngineDecoratorProvider};

// Export engine framework
export {registerEngine, unRegisterEngine};

// Export ads framework
export {AdBreakType, AdTagType, AdEventType};

// Export enums
export {
  Html5EventType,
  CustomEventType,
  EventType,
  StateType,
  TrackType,
  EngineType,
  MediaType,
  StreamType,
  AbrMode,
  LogLevelType,
  CorsType,
  DrmScheme,
  MimeType,
  RequestType,
  ScreenOrientationType,
  AutoPlayType
};

export {ThumbnailInfo};

// Export logger utils
export {getLogger, LogLevel, getLogLevel, setLogLevel};

export default loadPlayer;
