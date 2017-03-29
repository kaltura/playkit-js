// @flow
import Player from "./player";
import LoggerFactory from "./util/loggerFactory";
import * as packageData from "../package.json";
import {registerAdapter} from './engine/mediaSourceAdapters/mediaSourceAdapterManager';
import BaseMediaSourceAdapter from './engine/mediaSourceAdapters/BaseMediaSourceAdapter';
import {registerPlugin} from './plugin/PluginManager';
import BasePlugin from './plugin/BasePlugin';

// playkit version
let VERSION = packageData.version;

LoggerFactory.getLogger().log("%c Playkit " + VERSION, "color: yellow; font-size: large");
LoggerFactory.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

export function playkit(config: Object = {}) {
  return new Player(config);
}

// Registration for media source adapter
export {registerAdapter, BaseMediaSourceAdapter};

// Export the plugin framework
export {registerPlugin, BasePlugin};

//export version
export {VERSION};
export default playkit;
