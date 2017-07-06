// @flow
import MultiMap from '../utils/multi-map'
import BaseMiddleware from './base-middleware'
import LoggerFactory from '../utils/logger'

/**
 * Generic middleware implementation.
 */
export default class Middleware {
  /**
   * The registered middlewares.
   * @private
   * @member
   */
  _middlewares: MultiMap<*>;
  /**
   * The actions supported by the middleware.
   * @private
   * @member
   */
  _actions: { [action: string]: string };
  /**
   * The logger of the middleware.
   * @private
   * @member
   */
  _logger: any;

  /**
   * @constructor
   * @param {Object} actions - The actions for the middleware.
   */
  constructor(actions: { [action: string]: string }) {
    this._actions = actions;
    this._middlewares = new MultiMap();
    this._logger = LoggerFactory.getLogger("Middleware");
  }

  /**
   * Registers a middleware instance to the middleware chain.
   * @param {BaseMiddleware} middlewareInstance - The middleware instance.
   * @public
   * @returns {void}
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
   * @returns {void}
   */
  run(action: string, callback: Function): void {
    this._logger.debug("Start middleware chain for action " + action);
    let middlewares = this._middlewares.get(action);
    this._executeMiddleware(middlewares, () => {
      this._logger.debug("Finish middleware chain for action " + action);
      callback();
    });
  }

  /**
   * Executes all the middlewares one by one.
   * @param {Array<Function>} middlewares - The middlewares for a specific action.
   * @param {Function} callback - The callback function.
   * @private
   * @returns {void}
   */
  _executeMiddleware(middlewares: Array<Function>, callback: Function): void {
    // eslint-disable-next-line no-unused-vars
    const composition = middlewares.reduceRight((next, fn) => v => {
      fn(next);
    }, callback);
    composition();
  }
}
