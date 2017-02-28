//@flow
import lf from "../util/loggerFactory";
import Player from "../player";
import PluginComponentHelper from "./PluginComponentHelper";

let logger = lf.getLogger('PluginManager');

export default class PluginManager extends PluginComponentHelper {

  load(name: string, handler: Function, config: Object, player: Player): boolean {
    logger.info(`Load <${name}> plugin start.`);
    if (handler.isValid()) {
      this.set(name, handler.createPlugin(name, player));
      this.get(name).configure(config);
      this.get(name).setup();
      logger.info(`Load <${name}> plugin succeeded. Total plugin count: ${this.size}`);
      return true;
    }
    logger.info(`Load <${name}> plugin failed - plugin is not available.`);
    return false;
  }

  destroy(name: string): void {
    this.get(name).destroy();
    this.remove(name);
    logger.info(`Destroy <${name}> plugin.`);
  }

  destroyAll(): void {
    let name, names, done;
    names = this.plugins.keys();
    done = false;
    while (!done) {
      name = names.next().value;
      if (name) {
        this.destroy(name);
      } else {
        done = true;
      }
    }
  }

  get plugins(): Map<string,IPlugin> {
    return this.map;
  }
}
