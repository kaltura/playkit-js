//@flow
import Player from './player'
import BaseMediaSourceAdapter from './engines/html5/media-source/base-media-source-adapter'
import {registerMediaSourceAdapter} from './engines/html5/media-source/media-source-provider'
import {registerPlugin} from './plugin/plugin-manager'
import BaseDrmProtocol from './drm/base-drm-protocol'
import BaseMiddleware from './middleware/base-middleware'
import BasePlugin from './plugin/base-plugin'
import State from './state/state'
import Event from './event/fake-event'
import * as CustomEvent from './event/custom-events/index'
import Track from './track/track'
import VideoTrack from './track/video-track'
import AudioTrack from './track/audio-track'
import TextTrack from './track/text-track'
import TextStyle from './track/text-style'
import * as Utils from './utils/index'

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

// Export the track classes
export {Track, VideoTrack, AudioTrack, TextTrack, TextStyle};

// Export state class
export {State};

// Export event classes
export {Event, CustomEvent}

// Export utils library
export {Utils};

// Export version
export {__VERSION__ as VERSION};

// Export player name
export {__NAME__ as PLAYER_NAME};

// Export base DRM protocol
export {BaseDrmProtocol};

// Export the player capabilities
const getCapabilities = Player.getCapabilities;
export {getCapabilities};

export default loadPlayer;
