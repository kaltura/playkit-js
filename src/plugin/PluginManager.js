//@flow
import BasePlugin from "./BasePlugin";
import Player from "../player";
import loggerFactory from "../util/loggerFactory";

let logger = loggerFactory.getLogger("PluginManager");

export default class PluginManager {
  /**
   *
   * @type {Map}
   * @private
   */
  static _registry: Map<string,Function> = new Map();
  /**
   *
   * @type {Map}
   * @private
   */
  _plugins: Map<string,BasePlugin> = new Map();

  /**
   *
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
   *
   * @param name
   */
  static unRegister(name: string): void {
    if (this._registry.has(name)) {
      this._registry.delete(name);
      logger.info(`Unregistered <${name}> plugin.`);
    }
  }

  /**
   *
   * @param name
   * @param player
   * @returns {boolean}
   */
  load(name: string, player: Player): boolean {
    if (!PluginManager._registry.has(name)) {
      throw new Error(`Cannot load <${name}> - plugin isn't registered.`);
    }
    if (PluginManager._registry.get(name).isValid()) {
      this._plugins.set(name, PluginManager._registry.get(name).createPlugin(name, player));
      logger.info(`Plugin <${name}> has been loaded.`);
      return true;
    }
    logger.info(`Plugin <${name}> isn\'t loaded, isValid()=false.`);
    return false;
  }

  /**
   *
   * @param name
   * @param config
   */
  configure(name: string, config: Object): void {
    if (this._plugins.has(name) && this._plugins.get(name).configure) {
      this._plugins.get(name).configure(config);
    }
  }

  /**
   *
   * @param name
   */
  setup(name: string): void {
    if (this._plugins.has(name)) {
      this._plugins.get(name).setup();
    }
  }

  /**
   *
   * @param name
   */
  destroy(name: string): void {
    if (this._plugins.has(name)) {
      this._plugins.get(name).destroy();
    }
  }

  /**
   *
   * @param name
   * @returns {BasePlugin}
   */
  get(name: string): BasePlugin {
    return this._plugins.get(name);
  }

  /**
   *
   * @param name
   */
  remove(name: string): void {
    if (this._plugins.has(name)) {
      this._plugins.delete(name);
    }
  }
}
