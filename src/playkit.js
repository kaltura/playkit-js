// @flow
import Player from "./player";
import LoggerFactory from "./util/loggerFactory";
import PluginRegistry from './plugin/PluginRegistry';
import * as packageData from "../package.json";

// Test plugins
import NumbersPlugin from '../test/plugin/testPlugins/numbersPlugin';
import ColorsPlugin from '../test/plugin/testPlugins/colorsPlugin';

let logger = LoggerFactory.getLogger('Playkit');

LoggerFactory.getLogger().log("%c Playkit " + packageData.version, "color: yellow; font-size: large");
LoggerFactory.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

export function playkit() {
  logger.info("Player factory method called!");
  // Fake plugin configuration received by the player factory
  let fakePluginConf = {
    "plugins": {
      "numbers": {
        "size": 100,
        "lastCellValue": 15
      },
      "colors": {
        "favouriteColor": "purple"
      }
    }
  };
  return new Player(fakePluginConf);
}

export default playkit;

// Export the version
let VERSION = packageData.version;
export {VERSION};

export function registerPlugin(name: string, handler: Function) {
  PluginRegistry.register(name, handler);
}
