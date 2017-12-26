// @flow
export type PluginsConfigObject = { [plugin: string]: Object };

export default class PluginsConfig {
  _map: Map<string, Object>;

  get map(): Map<string, Object> {
    return this._map;
  }

  set map(value: Map<string, Object> | PluginsConfigObject): void {
    if (value instanceof Map) {
      this._map = value;
    } else if (value instanceof Object) {
      this._map.clear();
      Object.keys(value).forEach(key => this._map.set(key, value[key]));
    }
  }

  constructor(config?: PluginsConfigObject) {
    this._map = new Map();
    if (config) {
      this.map = config;
    }
  }

  toJSON(): PluginsConfigObject {
    const response = {};
    this._map.forEach((value, key) => response[key] = value);
    return response;
  }
}
