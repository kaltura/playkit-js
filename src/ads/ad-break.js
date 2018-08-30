// @flow
class AdBreak {
  _type: ?string;
  _position: ?number;
  _numAds: ?number;

  get type(): string {
    return this._type;
  }

  set type(value: string): void {
    this._type = value;
  }

  get position(): number {
    return this._position;
  }

  set position(value: number): void {
    this._position = value;
  }

  get numAds(): number {
    return this._numAds;
  }

  set numAds(value: number): void {
    this._numAds = value;
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
