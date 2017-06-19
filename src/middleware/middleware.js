// @flow
import MultiMap from '../utils/multi-map'

export default class Middleware {
  _middlewares: MultiMap<*>;
  _actions: { [action: string]: string };

  constructor(actions: { [action: string]: string }) {
    this._actions = actions;
    this._middlewares = new MultiMap();
  }

  use(playerMiddleware: Object): void {
    for (let action in this._actions) {
      if (typeof playerMiddleware[this._actions[action]] === 'function') {
        this._middlewares.push(this._actions[action], playerMiddleware[this._actions[action]].bind(playerMiddleware));
      }
    }
  }

  run(action: string, callback: Function): void {
    let middlewares = this._middlewares.get(action);
    if (middlewares && middlewares.length > 0) {
      this._executeMiddleware(middlewares, () => {
        if (callback) {
          callback();
        }
      });
    }
  }

  _executeMiddleware(middlewares: Array<Function>, callback: Function): void {
    /* eslint-disable no-unused-vars */
    const composition = middlewares.reduceRight((next, fn) => v => {
      fn(next);
    }, callback);
    composition();
  }
}
