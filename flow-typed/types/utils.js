// @flow
declare type DeferredPromise = Promise<*> & { resolve: Function, reject: Function };

declare type LogLevel = { value: number, name: string };
