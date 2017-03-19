// @flow
import Player from "./player";
import LoggerFactory from "./util/loggerFactory";
import * as packageData from "../package.json";
import {registerHandler} from './engine/mediaSourceHandlers/mediaSourceHandlerProvider';
import BaseMediaSourceHandler from './engine/mediaSourceHandlers/BaseMediaSourceHandler';
import {registerPlugin} from './plugin/PluginManager';
import BasePlugin from './plugin/BasePlugin';

// playkit version
let VERSION = packageData.version;

let logger = LoggerFactory.getLogger();

LoggerFactory.getLogger().log("%c Playkit " + VERSION, "color: yellow; font-size: large");
LoggerFactory.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

export function playkit(config: Object = {}) {
  return new Player(config);
}

// Registration for media source handler
export {registerHandler, BaseMediaSourceHandler};

// Export the plugin framework
export {registerPlugin, BasePlugin};

//export version
export {VERSION};
export default playkit;
