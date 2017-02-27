//@flow
import PluginComponentHelper from "./PluginComponentHelper";
import lf from "../util/loggerFactory";

let logger = lf.getLogger('PluginRegistry');

class PluginRegistry extends PluginComponentHelper {
  register(name: string, handler: Function): void {
    if (!this.has(name)) {
      logger.info(`Plugin <${name}> is registered.`);
      this.set(name, handler);
    } else {
      logger.info(`Plugin <${name}> is already registered, do not register again.`);
    }
  }

  get registry(): Map<string,Function> {
    return this.map;
  }
}

let pluginRegistry = new PluginRegistry();
export default pluginRegistry;

