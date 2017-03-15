// @flow
import Player from "./player";
import LoggerFactory from "./util/loggerFactory";
import PluginManager from './plugin/PluginManager';
import * as packageData from "../package.json";

let logger = LoggerFactory.getLogger('Playkit');

LoggerFactory.getLogger().log("%c Playkit " + packageData.version, "color: yellow; font-size: large");
LoggerFactory.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

export function playkit(config: Object = {}) {
  return new Player(config);
}

export default playkit;

// Export registration for plugins
export function registerPlugin(name: string, handler: Function) {
  PluginManager.register(name, handler);
}

// Export the version
let VERSION = packageData.version;
export {VERSION};


