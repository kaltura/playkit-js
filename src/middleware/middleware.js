// @flow
import MultiMap from '../utils/multi-map'
import BaseMiddleware from './base-middleware'
import LoggerFactory from '../utils/logger'

/**
 * @class Middleware
 * @memberof Classes
 */
export default class Middleware {
  _middlewares: MultiMap<*>;
  _actions: { [action: string]: string };
  _logger: any;

  constructor(actions: Object) {
    this._actions = actions;
    this._middlewares = new MultiMap();
    this._logger = LoggerFactory.getLogger("Middleware");
  }

  /**
   * Registers a base middleware instance to the middleware chain.
   * @param {BaseMiddleware} middlewareInstance - The base middleware instance.
   * @public
   * @returns {void}
   * @instance
   * @memberof Classes.Middleware
   */
  use(middlewareInstance: BaseMiddleware): void {
    for (let action in this._actions) {
      let apiAction = this._actions[action];
      // $FlowFixMe
      if (typeof middlewareInstance[apiAction] === 'function') {
        this._logger.debug(`Register <${middlewareInstance.id}> for action ${apiAction}`);
        // $FlowFixMe
        this._middlewares.push(apiAction, middlewareInstance[apiAction].bind(middlewareInstance));
      }
    }
  }

  /**
   * Runs a middleware chain for a specific action.
   * @param {string} action - The action to run.
   * @param {Function} callback - The callback function.
   * @public
   * @instance
   * @returns {void}
   * @memberof Classes.Middleware
   */
  run(action: string, callback: Function): void {
    this._logger.debug("Start middleware chain for action " + action);
    let middlewares = this._middlewares.get(action);
    this._executeMiddleware(middlewares, () => {
      this._logger.debug("Finish middleware chain for action " + action);
      callback();
    });
  }

  _executeMiddleware(middlewares: Array<Function>, callback: Function): void {
    // eslint-disable-next-line no-unused-vars
    const composition = middlewares.reduceRight((next, fn) => v => {
      fn(next);
    }, callback);
    composition();
  }
}
