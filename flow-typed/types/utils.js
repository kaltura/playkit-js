// @flow
declare type DeferredPromise = Promise<*> & { resolve: Function, reject: Function };

declare type LogLevel = { [level: string]: { value: number, name: string } };

