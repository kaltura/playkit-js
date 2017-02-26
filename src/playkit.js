// @flow
import PluginManager from "plugin/framework/PluginManager";
import LoggerFactory from "util/loggerFactory";
import Player from "./player";
import * as packageData from "../package.json";

// All plugins should be bundled
import NumbersPlugin from "plugin/plugins/numbers/numbers";

let logger = LoggerFactory.getLogger( 'Playkit' );

export function playkit() {
  logger.info( "Player factory method called!" );

  // Fake plugin received by the player factory
  let fakePluginConf = {
    "plugins": {
      "numbers": {
        "size": 100
      }
    }
  };

  for ( let pluginName in fakePluginConf.plugins ) {
    if ( fakePluginConf.plugins.hasOwnProperty( pluginName ) ) {
      if ( PluginManager.has( pluginName ) ) {
        let pluginConf = fakePluginConf.plugins[ pluginName ];
        PluginManager.load( pluginName, pluginConf );
      }
    }
  }

  return new Player();
}

export default playkit;

// Export the version
let VERSION = packageData.version;
export {VERSION};

export function registerPlugin( name, handler ) {
  PluginManager.register( name, handler );
}
