//@flow
import Player from "../player";
import lf from "../util/loggerFactory";
import {merge} from "../util/util";

export default class BasePlugin implements IPlugin {
  config: Object = {};
  defaultConfig: Object = {};
  name: string;
  logger: any;
  player: Player;

  static createPlugin(name: string, player: Player): BasePlugin {
    return new this(name, player);
  }

  static isValid(): boolean {
    return true;
  }

  constructor(name: string, player: Player) {
    this.name = name;
    this.player = player;
    this.logger = lf.getLogger(this.name);
  }

  configure(config: Object): void {
    this.config = merge(this.defaultConfig, config);
  }

  getConfig(attr?: string): Object {
    if (attr) {
      return this.config[attr];
    }
    return this.config;
  }

  updateConfig(update: Object): void {
    this.config = merge(this.config, update);
  }

  getName(): string {
    return this.name;
  }

  setup(): void {
    throw new NotImplementedException('Plugin must implement setup() method');
  }

  destroy(): void {
    throw new NotImplementedException('Plugin must implement destroy() method');
  }
}

function NotImplementedException(message: string) {
  return {
    message: message,
    name: 'NotImplementedPluginMethodException'
  }
}

