// @flow
import {MultiMap} from '../utils/multi-map';
import BaseMiddleware from './base-middleware';
import getLogger from '../utils/logger';

/**
 * Generic middleware implementation.
 */
export default class Middleware {
  /**
   * The registered middlewares.
   * @private
   * @member
   */
  _middlewares: MultiMap<string, *>;
  /**
   * The actions supported by the middleware.
   * @private
   * @member
   */
  _actions: {[action: string]: string};
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
  constructor(actions: {[action: string]: string}) {
    this._actions = actions;
    this._middlewares = new MultiMap();
    this._logger = getLogger('Middleware');
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
   * @param {Array<any>} params - The action params.
   * @public
   * @returns {void}
   */
  run(action: string, callback: Function, ...params: Array<any>): void {
    this._logger.debug('Start middleware chain for action ' + action);
    let middlewares = this._middlewares.get(action);
    this._executeMiddleware(
      middlewares,
      (...params) => {
        this._logger.debug('Finish middleware chain for action ' + action);
        callback(...params);
      },
      params
    );
  }

  /**
   * Executes all the middlewares one by one.
   * @param {Array<Function>} middlewares - The middlewares for a specific action.
   * @param {Function} callback - The callback function.
   * @param {Array<any>} origParams - The original action params.
   * @private
   * @returns {void}
   */
  _executeMiddleware(middlewares: Array<Function>, callback: Function, origParams: Array<any>): void {
    let params = origParams;
    const applyFunc = (fn, prevParams, next) => {
      if (prevParams?.length) {
        params = prevParams;
      }
      params?.length ? fn(...params, next) : fn(next);
    };
    const composition = middlewares.reduceRight(
      (next, fn) => (...prevParams) => {
        applyFunc(fn, prevParams, next);
      },
      (...prevParams) => {
        applyFunc(callback, prevParams);
      }
    );
    composition();
  }
}
