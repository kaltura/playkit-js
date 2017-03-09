//@flow
import BasePlugin from "./BasePlugin";
import Player from "../player";
import loggerFactory from "../util/loggerFactory";

let logger = loggerFactory.getLogger("PluginManager");

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
    if (!this._registry.has(name)) {
      this._registry.set(name, handler);
      logger.info(`Register <${name}> plugin.`);
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
    if (this._registry.has(name)) {
      this._registry.delete(name);
      logger.info(`Unregistered <${name}> plugin.`);
    }
  }

  /**
   * Creates a new instance of the plugin in case isValid() of the plugin returns true.
   * @param name
   * @param player
   * @returns {boolean}
   */
  load(name: string, player: Player): boolean {
    if (!PluginManager._registry.has(name)) {
      throw new Error(`Cannot load <${name}> - plugin isn't registered.`);
    }
    let pluginClass = PluginManager._registry.get(name);
    if (pluginClass != null && pluginClass.isValid()) {
      this._plugins.set(name, pluginClass.createPlugin(name, player));
      logger.info(`Plugin <${name}> has been loaded.`);
      return true;
    }
    logger.info(`Plugin <${name}> isn\'t loaded, isValid()=false.`);
    return false;
  }

  /**
   * Calls configure() method of the plugin's impl.
   * @param name
   * @param config
   */
  configure(name: string, config: Object): void {
    if (this._plugins.has(name)) {
      let plugin = this._plugins.get(name);
      if (plugin != null) {
        plugin.configure(config)
      }
    }
  }

  /**
   * Calls setup() method of the plugin's impl.
   * @param name
   */
  setup(name: string): void {
    if (this._plugins.has(name)) {
      let plugin = this._plugins.get(name);
      if (plugin != null) {
        plugin.setup();
      }
    }
  }

  /**
   * Iterates over all the plugins and calls private _destroy.
   */
  destroy(): void {
    this._plugins.forEach(this._destroy);
  }

  /**
   * Calls destroy() method of the plugin's impl.
   * @param plugin
   * @private
   */
  _destroy(plugin: BasePlugin): void {
    plugin.destroy();
  }

  /**
   * Returns the plugin's instance.
   * @param name
   * @returns {BasePlugin}
   */
  get(name: string): ?BasePlugin {
    return this._plugins.get(name);
  }

  /**
   * Removes the plugin's instance.
   * @param name
   */
  remove(name: string): void {
    if (this._plugins.has(name)) {
      this._plugins.delete(name);
    }
  }
}
