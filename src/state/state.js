//@flow
export default class State {
  type: string;
  _duration: number;
  _timestamp: number;

  constructor(type: string) {
    this.type = type;
    this._duration = 0;
    this._timestamp = Date.now() / 1000;
  }

  get duration(): number {
    return this._duration;
  }

  set duration(now: number): void {
    this._duration = now - this._timestamp;
  }
}
