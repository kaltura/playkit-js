//@flow
import BasePlugin from './base-plugin';
import Error from '../error/error';
import Player from '../player';
import getLogger from '../utils/logger';

/**
 * The logger of the PluginManager class.
 * @private
 * @const
 */
const logger = getLogger('PluginManager');

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
   * Is disabled plugin map.
   * Maps plugin's name to a boolean.
   * false means the plugin is disable. true or plugin name doesn't exist in the map means the plugin is not disable.
   * @type {Map}
   * @private
   */
  _isDisabledPluginMap: Map<string, boolean> = new Map();

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
      logger.error(`Plugin <${name}> registration failed, either plugin is not an instance of BasePlugin or plugin handler is not a function`);
      return false;
    }
    if (!PluginManager._registry.has(name)) {
      PluginManager._registry.set(name, handler);
      logger.debug(`Plugin <${name}> has been registered successfully`);
      return true;
    }
    logger.debug(`Plugin <${name}> is already registered, do not register again`);
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
      logger.warn(`Plugin <${name}> loading failed, plugin is not registered`);
      throw new Error(Error.Severity.RECOVERABLE, Error.Category.PLAYER, Error.Code.RUNTIME_ERROR_NOT_REGISTERED_PLUGIN, name);
    }
    let pluginClass = PluginManager._registry.get(name);
    if (typeof config.disable === 'boolean') {
      this._isDisabledPluginMap.set(name, config.disable);
    }
    const isDisablePlugin = !!this._isDisabledPluginMap.get(name);
    const isValidPlugin = pluginClass ? pluginClass.isValid() : false;
    if (pluginClass && isValidPlugin && !isDisablePlugin) {
      this._plugins.set(name, pluginClass.createPlugin(name, player, config));
      this._isDisabledPluginMap.set(name, false);
      logger.debug(`Plugin <${name}> has been loaded`);
      return true;
    }
    logger.debug(`Plugin <${name}> isn\'t loaded, isValid()=${isValidPlugin.toString()}, disabled=${isDisablePlugin.toString()}`);
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
   * Iterates over all the plugins and calls reset() method of the plugin's impl.
   * @public
   * @returns {void}
   */
  reset(): void {
    this._plugins.forEach((plugin: BasePlugin) => {
      plugin.reset();
    });
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
