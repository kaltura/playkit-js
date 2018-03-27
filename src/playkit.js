//@flow
import Player from './player'
import BaseMediaSourceAdapter from './engines/html5/media-source/base-media-source-adapter'
import {registerMediaSourceAdapter} from './engines/html5/media-source/media-source-provider'
import {registerPlugin} from './plugin/plugin-manager'
import BaseDrmProtocol from './drm/base-drm-protocol'
import BaseMiddleware from './middleware/base-middleware'
import BasePlugin from './plugin/base-plugin'
import Track from './track/track'
import VideoTrack from './track/video-track'
import AudioTrack from './track/audio-track'
import TextTrack from './track/text-track'
import TextStyle from './track/text-style'
import Env from './utils/env'
import * as Utils from './utils/util'
import Error from './error/error'
import FakeEvent from './event/fake-event'
import FakeEventTarget from './event/fake-event-target'
import EventManager from './event/event-manager'
import {StateType} from './state/state-type'
import {TrackType} from './track/track-type'
import {StreamType} from './engines/stream-type'
import {EngineType} from './engines/engine-type'
import {MediaType} from './media-type'
import {EventType} from './event/event-type'
import {AbrMode} from './track/abr-mode-type'
import {LogLevelType} from './utils/logger'

Player.runCapabilities();

declare var __VERSION__: string;
declare var __NAME__: string;

/**
 * @param {Object} config - The configuration of the player
 * @returns {Player} - The player instance
 */
export function loadPlayer(config: ?Object) {
  return new Player(config || {});
}

// Export the media source adapters necessary utils
export {registerMediaSourceAdapter, BaseMediaSourceAdapter};

// Export the plugin framework
export {registerPlugin, BasePlugin, BaseMiddleware};

// Export the tracks classes
export {Track, VideoTrack, AudioTrack, TextTrack, TextStyle};

// Export utils library
export {Utils};

// Export Error class
export {Error};

// Export Event system
export {FakeEvent, FakeEventTarget, EventManager}

// Export version
export {__VERSION__ as VERSION};

// Export player name
export {__NAME__ as PLAYER_NAME};

// Export environment data
export {Env};

// Export base DRM protocol
export {BaseDrmProtocol};

// Export the player capabilities
const getCapabilities = Player.getCapabilities;
const setCapabilities = Player.setCapabilities;
export {getCapabilities, setCapabilities};

// Export enums
export {EventType, StateType, TrackType, EngineType, MediaType, StreamType, AbrMode, LogLevelType};

export default loadPlayer;
