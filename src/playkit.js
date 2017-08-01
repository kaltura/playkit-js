/**
 * @namespace Interfaces
 */

/**
 * @namespace Types
 */

/**
 * @namespace Enums
 */

/**
 * @namespace Utils
 */

/**
 * @namespace Classes
 */

/**
 * @namespace Engines
 * @memberof Classes
 */

/**
 * @namespace MediaSource
 * @memberof Classes
 */

//@flow
import Player from './player'
import LoggerFactory from './utils/logger'
import * as packageData from '../package.json'
import BaseMediaSourceAdapter from './engines/html5/media-source/base-media-source-adapter'
import {registerMediaSourceAdapter} from './engines/html5/media-source/media-source-provider'
import {registerPlugin} from './plugin/plugin-manager'
import BaseMiddleware from './middleware/base-middleware'
import BasePlugin from './plugin/base-plugin'
import Track from './track/track'
import VideoTrack from './track/video-track'
import AudioTrack from './track/audio-track'
import TextTrack from './track/text-track'
import * as Utils from './utils/util'

// Playkit version
let VERSION = packageData.version;

// Playkit name
let PLAYER_NAME = 'kaltura-playkit-js';

LoggerFactory.getLogger().log("%c Playkit " + VERSION, "color: blue; font-size: large");
LoggerFactory.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

/**
 * Factory to create a player instance.
 * @param {string} targetId - The DOM target id.
 * @param {Object} config - The player configuration.
 * @returns {Player} - The player instance.
 * @public
 * @namespace loadPlayer
 * @function loadPlayer
 * @memberof loadPlayer
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

export default loadPlayer;
