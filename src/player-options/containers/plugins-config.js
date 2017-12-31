// @flow
export type PluginsConfigObject = { [plugin: string]: Object };

export const defaultPluginsConfigObject: PluginsConfigObject = {};

export default class PluginsConfig {
  _map: Map<string, Object> = new Map();

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

  constructor(config: PluginsConfigObject = defaultPluginsConfigObject) {
    this.map = config;
  }

  toJSON(): PluginsConfigObject {
    const response = {};
    this._map.forEach((value, key) => response[key] = value);
    return response;
  }
}
