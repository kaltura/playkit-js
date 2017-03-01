import BasePlugin from "../../../src/plugin/BasePlugin";
import Player from "../../../src/player";
import * as PlayKit from "../../../src/playkit";

const pluginName = "colors";

export default class ColorsPlugin extends BasePlugin {
  _favouriteColor: string = "";
  _size: number = 0;
  _colors: Array = [];

  defaultConfig = {
    "size": 3,
    "favouriteColor": "green"
  };

  constructor(name: string, player: Player) {
    super(name, player);
    this.logger.info(`in <${name}> plugin constructor.`);
  }

  configure(userConfig: Object) {
    super.configure(userConfig);
    this._size = this.config.size;
    this._favouriteColor = this.config.favouriteColor;
    this.logger.info("configure", this.config);
  }

  setup() {
    this._colors = [this._favouriteColor, "blue", "pink"];
    this.logger.info("setup", this._colors);
  }

  destroy() {
    this._colors = [];
    this._favouriteColor = "";
    this._size = 0;
    this.logger.info("destroy", this._colors, this._favouriteColor, this._size);
  }
}

PlayKit.registerPlugin(pluginName, ColorsPlugin);
