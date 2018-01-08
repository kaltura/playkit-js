// @flow
export type PreferNativeConfigObject = {
  hls: boolean,
  dash: boolean
};

export const defaultPreferNativeObject: PreferNativeConfigObject = {
  hls: false,
  dash: false
};

export default class PreferNativeConfig {
  _hls: boolean;
  _dash: boolean;

  get hls(): boolean {
    return this._hls;
  }

  set hls(value: boolean): void {
    if (typeof value !== 'boolean') return;
    this._hls = value;
  }

  get dash(): boolean {
    return this._dash;
  }

  set dash(value: boolean): void {
    if (typeof value !== 'boolean') return;
    this._dash = value;
  }

  constructor(config: PreferNativeConfigObject = defaultPreferNativeObject) {
    this.hls = (config.hls === undefined) ? defaultPreferNativeObject.hls : config.hls;
    this.dash = (config.dash === undefined) ? defaultPreferNativeObject.dash : config.dash;
  }

  toJSON(): PreferNativeConfigObject {
    return {
      hls: this.hls,
      dash: this.dash
    };
  }
}
