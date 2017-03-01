//@flow
import Player from "../player";
import lf from "../util/loggerFactory";
import {merge} from "../util/util";

export default class BasePlugin implements IPlugin {
  _config: Object = {};
  _defaultConfig: Object = {};
  _name: string;
  _logger: any;
  _player: Player;

  static createPlugin(name: string, player: Player): BasePlugin {
    return new this(name, player);
  }

  static isValid(): boolean {
    return true;
  }

  constructor(name: string, player: Player) {
    this._name = name;
    this._player = player;
    this._logger = lf.getLogger(this._name);
  }

  configure(config: Object): void {
    this._config = merge(this._defaultConfig, config);
  }

  getConfig(attr?: string): Object {
    if (attr) {
      return this._config[attr];
    }
    return this._config;
  }

  updateConfig(update: Object): void {
    this._config = merge(this._config, update);
  }

  setup(): void {
    throw new NotImplementedException('Plugin must implement setup() method');
  }

  destroy(): void {
    throw new NotImplementedException('Plugin must implement destroy() method');
  }

  get defaultConfig(): Object {
    return this._defaultConfig;
  }

  set defaultConfig(value: Object) {
    this._defaultConfig = value;
  }

  get player(): Player {
    return this._player;
  }

  get logger() {
    return this._logger;
  }

  get config(): Object {
    return this._config;
  }

  get name(): string {
    return this._name;
  }
}

function NotImplementedException(message: string) {
  return {
    message: message,
    name: 'NotImplementedPluginMethodException'
  }
}

