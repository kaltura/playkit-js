// @flow
import Player from "./player";
import LoggerFactory from "./util/loggerFactory";
import * as packageData from "../package.json";
import DemoPlayerDecoratorPlugin1 from "../test/src/plugin/testPlugins/decorator1";
import DemoPlayerDecoratorPlugin2 from "../test/src/plugin/testPlugins/decorator2";

let logger = LoggerFactory.getLogger('Playkit');

LoggerFactory.getLogger().log("%c Playkit " + packageData.version, "color: yellow; font-size: large");
LoggerFactory.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

export function playkit(config: Object = {}) {
  let plugins = [new DemoPlayerDecoratorPlugin1(), new DemoPlayerDecoratorPlugin2()];
  let player = new Player(config);
  let controller = null;
  for (let plugin of plugins) {
    if (typeof plugin.getPlayerDecorator == "function") {
      let decorator = plugin.getPlayerDecorator();
      decorator.setPlayer(controller ? controller : player);
      controller = decorator;
    }
  }
  if (controller) {
    return controller;
  }
  return player;
}

export default playkit;

// Export the version
let VERSION = packageData.version;
export {VERSION};
