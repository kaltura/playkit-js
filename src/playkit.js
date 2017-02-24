// @flow
import Player from "./player";
import * as packageData from "../package.json";
import testPlugin from "plugins/test-plugin/testPlugin";


export function playkit() {
  let plugins = [new testPlugin()];
  let controller = null;
  //TODO : support more than one plugin with decorator
  for ( let plugin of plugins ) {
   if ( typeof plugin.getPlayerDecorator == "function" ) {
     controller = plugin.getPlayerDecorator();
   }
  }
  if (controller) {
    controller.setPlayer( new Player() );
  } else {
    controller = new Player();
  }
  return controller;
}

export default playkit;

// Export the version
let VERSION = packageData.version;
export {VERSION};
