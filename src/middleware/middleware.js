// @flow
import MultiMap from '../utils/multi-map'
import LoggerFactory from '../utils/logger'

export default class Middleware {
  _middlewares: MultiMap<*>;
  _actions: { [action: string]: string };
  _logger: any;

  constructor(actions: { [action: string]: string }) {
    this._actions = actions;
    this._middlewares = new MultiMap();
    this._logger = LoggerFactory.getLogger("Middleware");
  }

  use(playerMiddleware: Object): void {
    for (let action in this._actions) {
      if (typeof playerMiddleware[this._actions[action]] === 'function') {
        this._logger.debug("Register middleware for action " + this._actions[action], playerMiddleware);
        this._middlewares.push(this._actions[action], playerMiddleware[this._actions[action]].bind(playerMiddleware));
      }
    }
  }

  run(action: string, callback: Function): void {
    this._logger.debug("Start middleware chain for action " + action);
    let middlewares = this._middlewares.get(action);
    if (middlewares && middlewares.length > 0) {
      return this._executeMiddleware(middlewares, () => {
        this._logger.debug("Finish middleware chain for action " + action);
        if (callback) {
          return callback();
        }
      });
    }
  }

  _executeMiddleware(middlewares: Array<Function>, callback: Function): void {
    // eslint-disable-next-line no-unused-vars
    const composition = middlewares.reduceRight((next, fn) => v => {
      return fn(next);
    }, callback);
    return composition();
  }
}
