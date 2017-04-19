//@flow
import BasePlugin from './base-plugin'
import PlayerError from '../utils/player-error'
import Player from '../player'
import LoggerFactory from '../utils/logger'

/**
 * The logger of the PluginManager class.
 * @private
 * @const
 */
const logger = LoggerFactory.getLogger("PluginManager");

/** The PluginManager responsible for register plugins definitions and store plugins instances.
 * @classdesc
 */
export default class PluginManager {
  /**
   * The registry of the plugins.
   * Maps plugin's name to his class.
   * @type {Map}
   * @static
   * @private
   */
  static _registry: Map<string, Function> = new Map();
  /**
   * The active plugins in the player.
   * Maps plugin's name to his instance.
   * @type {Map}
   * @private
   */
  _plugins: Map<string, BasePlugin> = new Map();

  /**
   * Writes the plugin in the registry.
   * Maps: plugin name -> plugin class.
   * @param {string} name - The plugin name
   * @param {Function} handler - The plugin class
   * @returns {boolean} - If the registration request succeeded
   * @static
   * @public
   */
  static register(name: string, handler: Function): boolean {
    if (typeof handler !== 'function' || handler.prototype instanceof BasePlugin === false) {
      throw new PlayerError(PlayerError.TYPE.NOT_VALID_HANDLER).getError();
    }
    if (!PluginManager._registry.has(name)) {
      PluginManager._registry.set(name, handler);
      logger.debug(`Plugin <${name}> has been registered successfully.`);
      return true;
    }
    logger.debug(`Plugin <${name}> is already registered, do not register again.`);
    return false;
  }

  /**
   * Removes the plugin from the registry.
   * @param {string} name - The plugin name
   * @static
   * @public
   * @returns {void}
   */
  static unRegister(name: string): void {
    if (PluginManager._registry.has(name)) {
      PluginManager._registry.delete(name);
      logger.debug(`Unregistered <${name}> plugin.`);
    }
  }

  /**
   * Creates and store new instance of the plugin in case isValid() of the plugin returns true.
   * @param {string} name - The plugin name
   * @param {Player} player - The player reference
   * @param {Object} [config={}] - The plugin configuration
   * @returns {boolean} - Whether the plugin load was successful
   * @public
   */
  load(name: string, player: Player, config: Object = {}): boolean {
    if (!PluginManager._registry.has(name)) {
      throw new PlayerError(PlayerError.TYPE.NOT_REGISTERED_PLUGIN, name).getError();
    }
    let pluginClass = PluginManager._registry.get(name);
    if (pluginClass != null && pluginClass.isValid()) {
      this._plugins.set(name, pluginClass.createPlugin(name, player, config));
      logger.debug(`Plugin <${name}> has been loaded.`);
      return true;
    }
    logger.debug(`Plugin <${name}> isn\'t loaded, isValid()=false.`);
    return false;
  }

  /**
   * Iterates over all the plugins and calls private _destroy.
   * @public
   * @returns {void}
   */
  destroy(): void {
    this._plugins.forEach(this._destroy.bind(this));
  }

  /**
   * Calls destroy() method of the plugin's impl.
   * @param {BasePlugin} plugin - The plugin instance
   * @param {string} name - The plugin name
   * @private
   * @returns {void}
   */
  _destroy(plugin: BasePlugin, name: string): void {
    plugin.destroy();
    this._plugins.delete(name);
  }

  /**
   * Returns the plugin's instance.
   * @param {string} name - The plugin name
   * @returns {BasePlugin} - The plugin instance
   * @public
   */
  get(name: string): ?BasePlugin {
    return this._plugins.get(name);
  }
}

/**
 * Export the register method.
 * @type {function}
 * @constant
 */
const registerPlugin = PluginManager.register;
export {registerPlugin};
