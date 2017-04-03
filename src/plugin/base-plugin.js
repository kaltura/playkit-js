//@flow
import Player from '../player'
import LoggerFactory from '../utils/logger'
import {merge} from '../utils/util'
import EventManager from '../event/event-manager'
import PlayerError from '../utils/player-error'

/** The BasePlugin responsible to implement the plugin interface.
 * Contains several default implementations.
 * Other plugins should extend this class.
 * @classdesc
 */
export default class BasePlugin implements IPlugin {
  /**
   * The runtime configuration of the plugin.
   * @member
   */
  config: Object;
  /**
   * The name of the plugin.
   * @member
   */
  name: string;
  /**
   * The logger of the plugin.
   * @member
   */
  logger: any;
  /**
   * Reference to the actual player.
   * @member
   */
  player: Player;
  /**
   * The event manager of the plugin.
   * @member
   */
  eventManager: EventManager;
  /**
   * The default configuration of the plugin.
   * Inherited plugins should override this property.
   * @type {Object}
   * @static
   * @member
   */
  static defaultConfig: Object = {};

  /**
   * Factory method to create the actual plugin.
   * @param name - The plugin name
   * @param player - The player reference
   * @param config - The plugin configuration
   * @returns {BasePlugin}
   * @static
   * @public
   */
  static createPlugin(name: string, player: Player, config: Object = {}): BasePlugin {
    return new this(name, player, config);
  }

  /**
   * Returns under what conditions the plugin is valid.
   * Plugin must implement this method.
   * @returns {boolean}
   * @static
   * @public
   * @abstract
   */
  static isValid(): boolean {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'isValid()').getError();
  }

  /**
   * constructor
   * @param name - The plugin name
   * @param player - The player reference
   * @param config - The plugin configuration
   * @constructor
   * @private
   */
  constructor(name: string, player: Player, config: Object) {
    this.name = name;
    this.player = player;
    this.eventManager = new EventManager();
    this.logger = LoggerFactory.getLogger(this.name);
    this.config = merge(this.constructor.defaultConfig, config);
  }

  /**
   * Returns the config of the plugin.
   * If attribute is provided, returns its value.
   * @param attr - The key in the plugin configuration.
   * @returns {*}
   * @public
   */
  getConfig(attr?: string): any {
    if (attr) {
      return this.config[attr];
    }
    return this.config;
  }

  /**
   * Updates the config of the plugin.
   * @param update - The updated configuration.
   * @public
   */
  updateConfig(update: Object): void {
    this.config = merge(this.config, update);
  }

  /**
   * Runs the destroy logic of the plugin.
   * plugin must implement this method.
   * @public
   * @abstract
   */
  destroy(): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'destroy()').getError();
  }

  /**
   * Getter for the plugin's name.
   * @returns {string}
   * @public
   */
  getName(): string {
    return this.name;
  }
}
