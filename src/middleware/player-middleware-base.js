// @flow
export default class PlayerMiddlewareBase {
  load(next: Function): Promise<*> {
    if (next) {
      return next();
    } else {
      return Promise.resolve();
    }
  }

  play(next: Function): void {
    if (next) {
      next();
    }
  }

  pause(next: Function): void {
    if (next) {
      next();
    }
  }
}
