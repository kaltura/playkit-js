// @flow
import Player from "./player";
import LoggerFactory from "./util/loggerFactory";
import PluginManager from './plugin/PluginManager';
import * as packageData from "../package.json";
import MSHProvider from './engine/mediaSourceHandlers/mediaSourceHandlerProvider';
import BaseMediaSourceHandler from './engine/mediaSourceHandlers/BaseMediaSourceHandler';

// playkit version
let VERSION = packageData.version;

let logger = LoggerFactory.getLogger('Playkit');

LoggerFactory.getLogger().log("%c Playkit " + VERSION, "color: yellow; font-size: large");
LoggerFactory.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

export function playkit(config: Object = {}) {
  return new Player(config);
}

// Registration for media source handler
function registerMediaSourceHandler(handler: BaseMediaSourceHandler){
  MSHProvider.registerHandler(handler);
}

// Registration for plugin
function registerPlugin(name: string, handler: Function) {
  PluginManager.register(name, handler);
}

//exports
export {registerMediaSourceHandler, BaseMediaSourceHandler ,registerPlugin, VERSION};
export default playkit;


