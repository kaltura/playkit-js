//@flow
import Player from "../player";
import loggerFactory from "../util/loggerFactory";
import {merge} from "../util/util";
import EventManager from '../events/eventManager';
import FakeEventTarget from '../events/fakeEventTarget';

export default class BasePlugin extends FakeEventTarget implements IPlugin {
  /**
   * The runtime configuration of the plugin.
   */
  _config: Object;
  /**
   * The default configuration of the plugin.
   */
  _defaultConfig: Object;
  /**
   * The name of the plugin.
   */
  _name: string;
  /**
   * The logger of the plugin.
   */
  _logger: any;
  /**
   * Reference to the actual player.
   */
  _player: Player;
  /**
   * The event manager of the plugin.
   */
  _eventManager: EventManager;

  /**
   * factory method to create the actual plugin.
   * @param name - plugin name
   * @param player - player reference
   * @returns {BasePlugin}
   */
  static createPlugin(name: string, player: Player): BasePlugin {
    return new this(name, player);
  }

  /**
   * Returns under what conditions the plugin is valid.
   * Default implementation is to always return true.
   * @returns {boolean}
   */
  static isValid(): boolean {
    throw new NotImplementedException('Plugin must implement isValid() method');
  }

  /**
   * constructor
   * @param name - name of the plugin
   * @param player - player reference
   * @param defaultConfig - default config for the plugin
   */
  constructor(name: string, player: Player, defaultConfig: Object = {}) {
    super();
    this._name = name;
    this._player = player;
    this._eventManager = new EventManager();
    this._logger = loggerFactory.getLogger(this._name);
    this._config = this._defaultConfig = defaultConfig;
  }

  /**
   * Runs the config handling logic of the plugin.
   * The default implementation is to merge the default config and the user config.
   * Will be call before setup().
   * @param config
   */
  configure(config: Object): void {
    this._config = merge(this._defaultConfig, config);
  }

  /**
   * Runs the setup logic of the plugin.
   * Plugin must implement this method.
   */
  setup(): void {
    throw new NotImplementedException('Plugin must implement setup() method');
  }

  /**
   * Returns the config of the plugin.
   * If attribute is provided, returns its value.
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
   * Updates the config of the plugin.
   * @param update
   */
  updateConfig(update: Object): void {
    this._config = merge(this._config, update);
  }

  /**
   * Runs the destroy logic of the plugin.
   * plugin must implement this method.
   */
  destroy(): void {
    throw new NotImplementedException('Plugin must implement destroy() method');
  }

  /**
   * Getter for the plugin's name.
   * @returns {string}
   */
  getName(): string {
    return this._name;
  }
}

function NotImplementedException(message: string) {
  return {
    message: message,
    name: 'NotImplementedPluginMethodException'
  }
}

