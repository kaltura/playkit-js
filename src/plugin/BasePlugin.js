//@flow
import Player from "../player";
import loggerFactory from "../util/loggerFactory";
import {merge} from "../util/util";

export default class BasePlugin implements IPlugin {
  /**
   * the runtime configuration of the plugin
   */
  _config: Object;
  /**
   * the default configuration of the plugin
   */
  _defaultConfig: Object;
  /**
   * the name of the plugin
   */
  _name: string;
  /**
   * the logger of the plugin
   */
  _logger: any;
  /**
   * reference to the actual player
   */
  _player: Player;

  /**
   * factory method to create the actual plugin
   * @param name - plugin name
   * @param player - player reference
   * @returns {BasePlugin}
   */
  static createPlugin(name: string, player: Player): BasePlugin {
    return new this(name, player);
  }

  /**
   * returns under what conditions the plugin is valid
   * default implementation is to always return true
   * @returns {boolean}
   */
  static isValid(): boolean {
    return true;
  }

  /**
   * constructor
   * @param name - name of the plugin
   * @param player - player reference
   * @param defaultConfig - default config for the plugin
   */
  constructor(name: string, player: Player, defaultConfig?: Object) {
    this._name = name;
    this._player = player;
    this._logger = loggerFactory.getLogger(this._name);
    this._defaultConfig = defaultConfig || {};
    this._config = this._defaultConfig;
  }

  /**
   * runs the config handling logic of the plugin
   * the default implementation is to merge the default config and the user config
   * will be call before setup()
   * @param config
   */
  configure(config: Object): void {
    this._config = merge(this._defaultConfig, config);
  }

  /**
   * runs the setup logic of the plugin
   * plugin must implement this method
   */
  setup(): void {
    throw new NotImplementedException('Plugin must implement setup() method');
  }

  /**
   * returns the config of the plugin
   * if attribute is provided, returns its value
   * @param attr
   * @returns {*}
   */
  getConfig(attr?: string): any {
    if (attr) {
      return this._config[attr];
    }
    return this._config;
  }

  /**
   * updates the config of the plugin
   * @param update
   */
  updateConfig(update: Object): void {
    this._config = merge(this._config, update);
  }

  /**
   * runs the destroy logic of the plugin
   * plugin must implement this method
   */
  destroy(): void {
    throw new NotImplementedException('Plugin must implement destroy() method');
  }

  /**
   * getter for the plugin name
   * @returns {string}
   */
  getName(): string {
    return this._name;
  }

  /**
   * getter for the player reference
   * @returns {Player}
   */
  getPlayer(): Player {
    return this._player;
  }

  /**
   * getter for the plugin logger
   * @returns {any}
   */
  getLogger(): any {
    return this._logger;
  }

  /**
   * getter for the default configuration
   * @returns {Object}
   */
  getDefaultConfig(): Object {
    return this._defaultConfig;
  }
}

function NotImplementedException(message: string) {
  return {
    message: message,
    name: 'NotImplementedPluginMethodException'
  }
}

