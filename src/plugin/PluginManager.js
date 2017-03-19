//@flow
import BasePlugin from "./BasePlugin";
import PluginError from "./PluginError";
import Player from "../player";
import loggerFactory from "../util/loggerFactory";

const logger = loggerFactory.getLogger("PluginManager");

export default class PluginManager {
  /**
   * The registry of the plugins.
   * Maps plugin's name to his class.
   * @type {Map}
   * @private
   */
  static _registry: Map<string,Function> = new Map();
  /**
   * The active plugins in the player.
   * Maps plugin's name to his instance.
   * @type {Map}
   * @private
   */
  _plugins: Map<string,BasePlugin> = new Map();

  /**
   * Writes the plugin in the registry.
   * @param name
   * @param handler
   * @returns {boolean}
   */
  static register(name: string, handler: Function): boolean {
    if (typeof handler !== 'function' || handler.prototype instanceof BasePlugin === false) {
      throw new PluginError(PluginError.TYPE.NOT_VALID_HANDLER).getError();
    }
    if (!PluginManager._registry.has(name)) {
      PluginManager._registry.set(name, handler);
      logger.info(`Plugin <${name}> has been registered successfully.`);
      return true;
    }
    logger.info(`Plugin <${name}> is already registered, do not register again.`);
    return false;
  }

  /**
   * Removes the plugin from the registry.
   * @param name
   */
  static unRegister(name: string): void {
    if (PluginManager._registry.has(name)) {
      PluginManager._registry.delete(name);
      logger.info(`Unregistered <${name}> plugin.`);
    }
  }

  /**
   * Creates a new instance of the plugin in case isValid() of the plugin returns true.
   * @param name
   * @param player
   * @param config
   * @returns {boolean}
   */
  load(name: string, player: Player, config: Object = {}): boolean {
    if (!PluginManager._registry.has(name)) {
      throw new PluginError(PluginError.TYPE.NOT_REGISTERED_PLUGIN, name).getError();
    }
    let pluginClass = PluginManager._registry.get(name);
    if (pluginClass != null && pluginClass.isValid()) {
      this._plugins.set(name, pluginClass.createPlugin(name, player, config));
      logger.info(`Plugin <${name}> has been loaded.`);
      return true;
    }
    logger.info(`Plugin <${name}> isn\'t loaded, isValid()=false.`);
    return false;
  }

  /**
   * Iterates over all the plugins and calls private _destroy.
   */
  destroy(): void {
    this._plugins.forEach(this._destroy.bind(this));
  }

  /**
   * Calls destroy() method of the plugin's impl.
   * @param plugin
   * @param name
   * @private
   */
  _destroy(plugin: BasePlugin, name: string): void {
    plugin.destroy();
    this._plugins.delete(name);
  }

  /**
   * Returns the plugin's instance.
   * @param name
   * @returns {BasePlugin}
   */
  get(name: string): ?BasePlugin {
    return this._plugins.get(name);
  }
}

const registerPlugin = PluginManager.register;
export {registerPlugin};
