//@flow
import Player from './player'
import LoggerFactory from './utils/logger'
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
import Env from './utils/env'
import * as Utils from './utils/util'

declare var __VERSION__:string;
declare var __NAME__:string;
declare var __PACKAGE_URL__:string;

LoggerFactory.getLogger().log(`%c ${__NAME__} ${__VERSION__}`, "color: #98ff98;  font-size: large");
LoggerFactory.getLogger().log(`%c For more details see ${__PACKAGE_URL__}`, "color: #98ff98;");

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
export {Track, VideoTrack, AudioTrack, TextTrack};

// Export utils library
export {Utils};

// Export version
export {__VERSION__ as VERSION};

// Export player name
export {__NAME__ as PLAYER_NAME};

// Export environment data
export {Env};

// Export base DRM protocol
export {BaseDrmProtocol};

export default loadPlayer;
