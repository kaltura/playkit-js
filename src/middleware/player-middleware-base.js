// @flow
export default class PlayerMiddlewareBase {
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
