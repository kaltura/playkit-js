//@flow
import Player from '../player'
import {PlayerError, getLogger, Obj, Str} from '../utils/index'
import EventManager from '../event/event-manager'
import FakeEvent from '../event/fake-event'

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
   * @param {string} name - The plugin name
   * @param {Player} player - The player reference
   * @param {Object} config - The plugin configuration
   * @returns {BasePlugin} - New runtime plugin instance
   * @static
   * @public
   */
  static createPlugin(name: string, player: Player, config: Object = {}): BasePlugin {
    return new this(name, player, config);
  }

  /**
   * Returns under what conditions the plugin is valid.
   * Plugin must implement this method.
   * @returns {boolean} - Whether the plugin is valid and can be initiated. Default implementation is true
   * @static
   * @public
   * @abstract
   */
  static isValid(): boolean {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'isValid()').getError();
  }

  /**
   * constructor
   * @param {string} name - The plugin name
   * @param {Player} player - The player reference
   * @param {Object} config - The plugin configuration
   * @constructor
   * @private
   */
  constructor(name: string, player: Player, config: Object) {
    this.name = name;
    this.player = player;
    this.eventManager = new EventManager();
    this.logger = getLogger(Str.capitlize(this.name));
    this.config = {};
    Obj.mergeDeep(this.config, this.constructor.defaultConfig, config);
  }

  /**
   * Getter for the configuration of the plugin.
   * @param {string} attr - The key in the plugin configuration (optional).
   * @returns {*} - If attribute is provided, returns its value. Else, Returns the config of the plugin.
   * @public
   */
  getConfig(attr?: string): any {
    if (attr) {
      return Obj.copyDeep(this.config[attr]);
    }
    return Obj.copyDeep(this.config);
  }

  /**
   * Updates the config of the plugin.
   * @param {Object} update - The updated configuration.
   * @public
   * @returns {void}
   */
  updateConfig(update: Object): void {
    Obj.mergeDeep(this.config, update);
  }

  /**
   * Runs the destroy logic of the plugin.
   * plugin must implement this method.
   * @public
   * @virtual
   * @returns {void}
   */
  destroy(): void {
  }

  /**
   * Runs the reset logic of the plugin.
   * plugin must implement this method.
   * @public
   * @virtual
   * @returns {void}
   */
  reset(): void {
  }

  /**
   * Getter for the plugin's name.
   * @returns {string} - The name of the plugin.
   * @public
   */
  getName(): string {
    return this.name;
  }

  /**
   * Dispatch an event via the plugin.
   * @param {string} name - The event name.
   * @param {any} payload - The event payload.
   * @returns {void}
   */
  dispatchEvent(name: string, payload: any): void {
    this.logger.debug("Fire event: " + name, payload);
    this.player.dispatchEvent(new FakeEvent(name, payload));
  }
}
