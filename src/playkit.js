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
import PlayerOptions from './player-options/player-options'
import type {PlayerOptionsObject} from './player-options/player-options'

Player.runCapabilities();

declare var __VERSION__: string;
declare var __NAME__: string;

/**
 * @param {PlayerOptions} options - The player options.
 * @returns {Player} - The player instance
 */
export function loadPlayer(options?: PlayerOptions | PlayerOptionsObject) {
  if (options) {
    if (options instanceof PlayerOptions) {
      return new Player(options.toJSON())
    } else {
      return new Player(new PlayerOptions(options).toJSON());
    }
  } else {
    return new Player();
  }
}

// Export player options
export {PlayerOptions};

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

// Export FakeEvent Class
export {FakeEvent}

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
export {getCapabilities};

export default loadPlayer;
