// @flow
export type PreferNativeConfigObject = {
  hls: boolean,
  dash: boolean
};

export default class PreferNativeConfig {
  constructor() {
    this._hls = false;
    this._dash = false;
  }

  _hls: boolean;

  get hls(): boolean {
    return this._hls;
  }

  set hls(value: boolean): void {
    if (typeof value === 'boolean') {
      this._hls = value;
    }
  }

  _dash: boolean;

  get dash(): boolean {
    return this._dash;
  }

  set dash(value: boolean): void {
    if (typeof value === 'boolean') {
      this._dash = value;
    }
  }

  toJSON(): PreferNativeConfigObject {
    return {
      hls: this.hls,
      dash: this.dash
    };
  }
}
