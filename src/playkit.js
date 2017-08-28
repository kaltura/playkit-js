//@flow
import Player from './player'
import LoggerFactory from './utils/logger'
import * as packageData from '../package.json'
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

// Playkit version
const VERSION = packageData.version;

// Playkit name
const PLAYER_NAME = 'kaltura-playkit-js';

LoggerFactory.getLogger().log("%c Playkit " + VERSION, "color: #3399ff; font-size: large");
LoggerFactory.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: #3399ff;");

/**
 * @param {string} targetId - The target div id to append the player.
 * @param {Object} config - The configuration of the player
 * @returns {Player} - The player instance
 */
export function loadPlayer(targetId: string, config: ?Object) {
  return new Player(targetId, config || {});
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
export {VERSION};

// Export player name
export {PLAYER_NAME};

// Export environment data
export {Env};

// Export base DRM protocol
export {BaseDrmProtocol};

export default loadPlayer;
