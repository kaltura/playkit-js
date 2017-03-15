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
   * The default configuration of the plugin.
   * Inherited plugins should override this property.
   * @type {{}}
   */
  static defaultConfig: Object = {};

  /**
   * Factory method to create the actual plugin.
   * @param name
   * @param player
   * @param config
   * @returns {BasePlugin}
   */
  static createPlugin(name: string, player: Player, config: Object = {}): BasePlugin {
    return new this(name, player, config);
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
   * @param config
   */
  constructor(name: string, player: Player, config: Object) {
    this.name = name;
    this.player = player;
    this.eventManager = new EventManager();
    this.logger = loggerFactory.getLogger(this.name);
    this.config = merge(this.constructor.defaultConfig, config);
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
