// @flow
import Player from "./player";
import LoggerFactory from "./util/loggerFactory";
import * as packageData from "../package.json";
import {registerPlugin} from './plugin/PluginManager';
import BasePlugin from './plugin/BasePlugin';
import IPlayerDecoratorProvider from './declarations/interfaces/IPlayerDecoratorProvider';
import PlayerDecoratorBase from './player/PlayerDecoratorBase';
import PLAYER_EVENTS from './events/events';


let logger = LoggerFactory.getLogger();

logger.log("%c Playkit " + packageData.version, "color: yellow; font-size: large");
logger.log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");



export function playkit(config: Object = {}) {
  return new Player(config);
}

export default playkit;

// Export the plugin framework
export {registerPlugin, BasePlugin, IPlayerDecoratorProvider, PlayerDecoratorBase , PLAYER_EVENTS, Player};

// Export the version
let VERSION = packageData.version;
export {VERSION};
