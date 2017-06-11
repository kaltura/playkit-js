//@flow
import Player from './player'
import LoggerFactory from './utils/logger'
import * as packageData from '../package.json'
import BaseMediaSourceAdapter from './engines/html5/media-source/base-media-source-adapter'
import {registerMediaSourceAdapter} from './engines/html5/media-source/media-source-provider'
import {registerPlugin} from './plugin/plugin-manager'
import BasePlugin from './plugin/base-plugin'
import Track from './track/track'
import VideoTrack from './track/video-track'
import AudioTrack from './track/audio-track'
import TextTrack from './track/text-track'

// Playkit version
let VERSION = packageData.version;

LoggerFactory.getLogger().log("%c Playkit " + VERSION, "color: yellow; font-size: large");
LoggerFactory.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

/**
 * @param {Object} config - The configuration of the player
 * @returns {Player} - The player instance
 */
export function playkit(config: Object = {}) {
  return new Player(config);
}

// Export the media source adapters necessary utils
export {registerMediaSourceAdapter, BaseMediaSourceAdapter};

// Export the plugin framework
export {registerPlugin, BasePlugin};

// Export the tracks classes
export {Track, VideoTrack, AudioTrack, TextTrack};

//export version
export {VERSION};
export default playkit;
