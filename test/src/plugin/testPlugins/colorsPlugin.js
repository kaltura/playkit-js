import BasePlugin from "../../../../src/plugin/BasePlugin";
import Player from "../../../../src/player";
import * as Playkit from "../../../../src/playkit";

const pluginName = "colors";

export default class ColorsPlugin extends BasePlugin {
  _favouriteColor: string = "";
  _size: number = 0;
  _colors: Array = [];

  constructor(name: string, player: Player) {
    super(name, player, {
      "size": 3,
      "favouriteColor": "green"
    });
    this._logger.info(`in <${name}> plugin constructor.`);
  }

  static isValid(): boolean {
    return true;
  }

  configure(userConfig: Object) {
    super.configure(userConfig);
    this._size = this._config.size;
    this._favouriteColor = this._config.favouriteColor;
    this._logger.info("configure", this._config);
  }

  setup() {
    this._colors = [this._favouriteColor, "blue", "pink"];
    this._logger.info("setup", this._colors);
  }

  destroy() {
    this._colors = [];
    this._favouriteColor = "";
    this._size = 0;
    this._logger.info("destroy", this._colors, this._favouriteColor, this._size);
  }
}

Playkit.registerPlugin(pluginName, ColorsPlugin);
