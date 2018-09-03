// @flow
class AdBreak {
  _type: ?string;
  _position: ?number;
  _numAds: ?number;

  constructor(options: PKAdBreakOptions) {
    this._type = options.type;
    this._position = options.position;
    this._numAds = options.numAds;
  }

  get type(): ?string {
    return this._type;
  }

  get position(): ?number {
    return this._position;
  }

  get numAds(): ?number {
    return this._numAds;
  }

  toJSON(): Object {
    return {
      type: this.type,
      position: this.position,
      numAds: this.numAds
    };
  }
}

export {AdBreak};
