//@flow
import Player from "../player";
import loggerFactory from "../util/loggerFactory";
import {merge} from "../util/util";
import EventManager from "../events/eventManager";
import PluginError from "./PluginError";

export default class BasePlugin implements IPlugin {
  /**
   * The runtime configuration of the plugin.
   */
  config: Object;
  /**
   * The name of the plugin.
   */
  name: string;
  /**
   * The logger of the plugin.
   */
  logger: any;
  /**
   * Reference to the actual player.
   */
  player: Player;
  /**
   * The event manager of the plugin.
   */
  eventManager: EventManager;

  /**
   * Factory method to create the actual plugin.
   * @param name
   * @param player
   * @returns {BasePlugin}
   */
  static createPlugin(name: string, player: Player): BasePlugin {
    return new this(name, player);
  }

  /**
   * Returns under what conditions the plugin is valid.
   * Plugin must implement this method.
   * @returns {boolean}
   */
  static isValid(): boolean {
    throw new PluginError(PluginError.TYPE.NOT_IMPLEMENTED_METHOD, 'isValid()').getError();
  }

  /**
   * constructor
   * @param name
   * @param player
   */
  constructor(name: string, player: Player) {
    this.name = name;
    this.player = player;
    this.eventManager = new EventManager();
    this.logger = loggerFactory.getLogger(this.name);
  }

  /**
   * Runs the config handling logic of the plugin.
   * The default implementation is to merge the default config and the user config.
   * Will be call before setup().
   * @param config
   */
  configure(config: Object): void {
    if (this.defaultConfig != null && typeof this.defaultConfig === 'object') {
      this.config = merge(this.defaultConfig, config);
    } else {
      this.config = merge(this.config, config);
    }
  }

  /**
   * Runs the setup logic of the plugin.
   * Plugin must implement this method.
   */
  setup(): void {
    throw new PluginError(PluginError.TYPE.NOT_IMPLEMENTED_METHOD, 'setup()').getError();
  }

  /**
   * Returns the config of the plugin.
   * If attribute is provided, returns its value.
   * @param attr
   * @returns {*}
   */
  getConfig(attr?: string): any {
    if (attr) {
      return this.config[attr];
    }
    return this.config;
  }

  /**
   * Updates the config of the plugin.
   * @param update
   */
  updateConfig(update: Object): void {
    this.config = merge(this.config, update);
  }

  /**
   * Runs the destroy logic of the plugin.
   * plugin must implement this method.
   */
  destroy(): void {
    throw new PluginError(PluginError.TYPE.NOT_IMPLEMENTED_METHOD, 'destroy()').getError();
  }

  /**
   * Getter for the plugin's name.
   * @returns {string}
   */
  getName(): string {
    return this.name;
  }
}
