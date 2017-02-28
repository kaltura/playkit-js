// @flow
import Player from "./player";
import LoggerFactory from "./util/loggerFactory";
import * as packageData from "../package.json";

let logger = LoggerFactory.getLogger('Playkit');

LoggerFactory.getLogger().log("%c Playkit " + packageData.version, "color: yellow; font-size: large");
LoggerFactory.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

export function playkit() {
  logger.info("playkit called!");
  return new Player();
}

export default playkit;

// Export the version
let VERSION = packageData.version;
export {VERSION};
