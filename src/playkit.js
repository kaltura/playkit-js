// @flow
import LoggerFactory from "./util/loggerFactory";
import Player from "./player";
import * as packageData from "../package.json";
import PluginRegistry from './plugin/PluginRegistry';

// Test plugins
// import NumbersPlugin from '../test/plugin/testPlugins/numbersPlugin';
// import ColorsPlugin from '../test/plugin/testPlugins/colorsPlugin';

let logger = LoggerFactory.getLogger('PlayKit');

export function playkit() {
  logger.info("Player factory method called!");
  // Fake plugin configuration received by the player factory
  let fakePluginConf = {
    "plugins": {
      "numbers": {
        "size": 100,
        "lastCellValue": 15
      },
      "colors": {}
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
