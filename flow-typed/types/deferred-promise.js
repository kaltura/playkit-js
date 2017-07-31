// @flow
declare type DeferredPromise = Promise<*> & { resolve: Function, reject: Function };
