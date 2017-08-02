//@flow
import Player from '../player'
import LoggerFactory from '../utils/logger'
import * as Utils from '../utils/util'
import EventManager from '../event/event-manager'
import PlayerError from '../utils/player-error'
import FakeEvent from '../event/fake-event'

/**
 * @namespace BasePlugin
 * @memberof Classes
 * @implements IPlugin
 */
export default class BasePlugin implements IPlugin {
  /**
   * The runtime configuration of the plugin.
   * @type {Object}
   * @memberof Classes.BasePlugin
   * @instance
   * @public
   */
  config: Object;
  /**
   * The name of the plugin.
   * @type {string}
   * @memberof Classes.BasePlugin
   * @instance
   * @public
   */
  name: string;
  /**
   * The logger of the plugin.
   * @type {any}
   * @memberof Classes.BasePlugin
   * @instance
   * @public
   */
  logger: any;
  /**
   * Reference to the player.
   * @type {Player}
   * @memberof Classes.BasePlugin
   * @instance
   * @public
   */
  player: Player;
  /**
   * The event manager of the plugin.
   * @type {EventManager}
   * @memberof Classes.BasePlugin
   * @instance
   * @public
   */
  eventManager: EventManager;
  /**
   * The default configuration of the plugin.
   * Inherited plugins should override this property.
   * @type {Object}
   * @memberof Classes.BasePlugin
   * @static
   * @public
   */
  static defaultConfig: Object = {};

  /**
   * Factory method to create a plugin.
   * @param {string} name - The plugin name.
   * @param {Player} player - The player reference.
   * @param {Object} config - The plugin configuration.
   * @returns {BasePlugin} - New plugin instance.
   * @static
   * @memberof Classes.BasePlugin
   * @public
   */
  static createPlugin(name: string, player: Player, config: Object = {}): BasePlugin {
    return new this(name, player, config);
  }

  /**
   * Returns under what conditions the plugin is valid.
   * Plugin must implement this method.
   * @returns {boolean} - Whether the plugin is valid and can be initiated.
   * @static
   * @public
   * @memberof Classes.BasePlugin
   * @abstract
   */
  static isValid(): boolean {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'isValid()').getError();
  }

  constructor(name: string, player: Player, config: Object) {
    this.name = name;
    this.player = player;
    this.eventManager = new EventManager();
    this.logger = LoggerFactory.getLogger(this.name);
    this.config = {};
    Utils.Object.mergeDeep(this.config, this.constructor.defaultConfig, config);
  }

  /**
   * Get the plugin configuration.
   * @param {string} attr - The key in the plugin configuration (optional).
   * @returns {any} - If attr is provided, returns its value. Else, Returns the whole config of the plugin.
   * @memberof Classes.BasePlugin
   * @instance
   * @public
   * @virtual
   */
  getConfig(attr?: string): any {
    if (attr) {
      return this.config[attr];
    }
    return this.config;
  }

  /**
   * Updates the config of the plugin.
   * @param {Object} update - The updated configuration.
   * @returns {void}
   * @memberof Classes.BasePlugin
   * @instance
   * @public
   * @virtual
   */
  updateConfig(update: Object): void {
    this.config = Utils.Object.mergeDeep(this.config, update);
  }

  /**
   * Destroys the plugin.
   * plugin must implement this method.
   * @abstract
   * @returns {void}
   * @memberof Classes.BasePlugin
   * @instance
   * @public
   */
  destroy(): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'destroy()').getError();
  }

  /**
   * Get the plugin name.
   * @returns {string} - The name of the plugin.
   * @memberof Classes.BasePlugin
   * @instance
   * @public
   * @virtual
   */
  getName(): string {
    return this.name;
  }

  /**
   * Dispatch an event from the plugin.
   * @param {string} name - The event name.
   * @param {any} payload - The event payload.
   * @returns {void}
   * @memberof Classes.BasePlugin
   * @instance
   * @public
   * @virtual
   */
  dispatchEvent(name: string, payload: any): void {
    this.logger.debug("Fire event: " + name, payload);
    this.player.dispatchEvent(new FakeEvent(name, payload));
  }
}
