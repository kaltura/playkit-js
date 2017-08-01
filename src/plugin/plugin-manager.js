//@flow
import BasePlugin from './base-plugin'
import PlayerError from '../utils/player-error'
import Player from '../player'
import LoggerFactory from '../utils/logger'

/**
 * @namespace PluginManager
 * @class PluginManager
 * @memberof Classes
 */
export default class PluginManager {
  static _registry: Map<string, Function> = new Map();
  static _logger = LoggerFactory.getLogger("PluginManager");
  _plugins: Map<string, BasePlugin> = new Map();

  /**
   * Writes the plugin in the registry.
   * Maps: plugin name => plugin class.
   * @param {string} name - The plugin name.
   * @param {Function} handler - The plugin class.
   * @returns {boolean} - If the registration request succeeded.
   * @static
   * @public
   * @memberof Classes.PluginManager
   */
  static register(name: string, handler: Function): boolean {
    if (typeof handler !== 'function' || handler.prototype instanceof BasePlugin === false) {
      throw new PlayerError(PlayerError.TYPE.NOT_VALID_HANDLER).getError();
    }
    if (!PluginManager._registry.has(name)) {
      PluginManager._registry.set(name, handler);
      PluginManager._logger.debug(`Plugin <${name}> has been registered successfully`);
      return true;
    }
    PluginManager._logger.debug(`Plugin <${name}> is already registered, do not register again`);
    return false;
  }

  /**
   * Removes the plugin from the registry.
   * @param {string} name - The plugin name.
   * @static
   * @public
   * @returns {void}
   * @memberof Classes.PluginManager
   */
  static unRegister(name: string): void {
    if (PluginManager._registry.has(name)) {
      PluginManager._registry.delete(name);
      PluginManager._logger.debug(`Unregistered <${name}> plugin.`);
    }
  }

  /**
   * Creates and store new instance of the plugin in case isValid() of the plugin returns true.
   * @param {string} name - The plugin name.
   * @param {Player} player - The player reference.
   * @param {Object} config - The plugin configuration.
   * @returns {boolean} - Whether the plugin load succeeded.
   * @public
   * @instance
   * @memberof Classes.PluginManager
   */
  load(name: string, player: Player, config: Object = {}): boolean {
    if (!PluginManager._registry.has(name)) {
      throw new PlayerError(PlayerError.TYPE.NOT_REGISTERED_PLUGIN, name).getError();
    }
    let pluginClass = PluginManager._registry.get(name);
    if (pluginClass != null && pluginClass.isValid()) {
      this._plugins.set(name, pluginClass.createPlugin(name, player, config));
      PluginManager._logger.debug(`Plugin <${name}> has been loaded`);
      return true;
    }
    PluginManager._logger.debug(`Plugin <${name}> isn\'t loaded, isValid()=false`);
    return false;
  }

  /**
   * Iterates over all the plugins, destroys them and remove them from the registry.
   * @public
   * @returns {void}
   * @instance
   * @memberof Classes.PluginManager
   */
  destroy(): void {
    this._plugins.forEach(this._destroy.bind(this));
  }

  /**
   * Returns the plugin instance.
   * @param {string} name - The plugin name.
   * @returns {BasePlugin} - The plugin instance.
   * @public
   * @instance
   * @memberof Classes.PluginManager
   */
  get(name: string): ?BasePlugin {
    return this._plugins.get(name);
  }

  _destroy(plugin: BasePlugin, name: string): void {
    plugin.destroy();
    this._plugins.delete(name);
  }
}

const registerPlugin = PluginManager.register;
export {registerPlugin};
