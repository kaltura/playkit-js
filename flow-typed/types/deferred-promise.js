// @flow

/**
 * @typedef {DeferredPromise}
 * @memberof Types
 * @extends {Promise}
 */
export type DeferredPromise = Promise<*> & { resolve: Function, reject: Function };


