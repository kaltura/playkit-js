// @flow
import {BaseEngineDecorator} from './base-engine-decorator';
import {EventType} from '../event/event-type';

/**
 * Engine decorator for ad plugin.
 * @class AdEngineDecorator
 * @param {IEngine} engine - The engine to decorate.
 */
class AdEngineDecorator extends BaseEngineDecorator {
  _pluginDecorators;

  static getDecorator(engine: IEngine, plugins: Array<BasePlugin>): ?BaseEngineDecorator {
    const pluginDecorators = plugins.filter(plugin => plugin.getEngineDecorator).map(plugin => plugin.getEngineDecorator(engine));
    return pluginDecorators.length ? new this(engine, pluginDecorators) : null;
  }

  constructor(engine: IEngine, pluginDecorators) {
    super(engine);
    this._pluginDecorators = pluginDecorators;
    const events: Array<string> = (Object.values(EventType): any);
    events.forEach(event => this._eventManager.listen(this._engine, event, e => this.dispatchEvent(e)));
  }

  dispatchEvent(event: FakeEvent): boolean {
    const activeDecorator = this._pluginDecorators.find(decorator => decorator.active);
    return activeDecorator ? activeDecorator.dispatchEvent(event) : super.dispatchEvent(event);
  }

  /**
   * Get paused state.
   * @returns {boolean} - The paused value of the engine.
   * @public
   * @override
   * @instance
   * @memberof AdEngineDecorator
   */
  get paused(): boolean {
    const activeDecorator = this._pluginDecorators.find(decorator => decorator.active);
    return activeDecorator ? activeDecorator.paused : super.paused;
  }
  /**
   * Get the duration in seconds.
   * @returns {number} - The playback duration.
   * @public
   * @override
   * @instance
   * @memberof AdEngineDecorator
   */
  get duration(): ?number {
    const activeDecorator = this._pluginDecorators.find(decorator => decorator.active);
    return activeDecorator ? activeDecorator.duration : super.duration;
  }
  /**
   * Get the current time in seconds.
   * @returns {number} - The current playback time.
   * @public
   * @override
   * @instance
   * @memberof AdEngineDecorator
   */
  get currentTime(): number {
    const activeDecorator = this._pluginDecorators.find(decorator => decorator.active);
    return activeDecorator ? activeDecorator.currentTime : super.currentTime;
  }
  /**
   * Set the current time in seconds.
   * @param {number} to - The number to set in seconds.
   * @public
   * @returns {void}
   */
  set currentTime(to: number): void {
    const activeDecorator = this._pluginDecorators.find(decorator => decorator.active);
    activeDecorator ? (activeDecorator.currentTime = to) : (super.currentTime = to);
  }
}

export {AdEngineDecorator};
