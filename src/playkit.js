// @flow
import Player from "./player";
import * as packageData from "../package.json";

export function playkit() {
  return new Player();
}

export default playkit;

// Export the version
let VERSION = packageData.version;
export {VERSION};
