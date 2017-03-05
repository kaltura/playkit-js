import BasePlugin from "../../../src/plugin/BasePlugin";
import Player from "../../../src/player";
import * as Playkit from "../../../src/playkit";

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
    this.getLogger().info(`in <${name}> plugin constructor.`);
  }

  static isValid(): boolean {
    return true;
  }

  configure(userConfig: Object) {
    super.configure(userConfig);
    this._size = this.getConfig().size;
    this._favouriteColor = this.getConfig().favouriteColor;
    this.getLogger().info("configure", this.getConfig());
  }

  setup() {
    this._colors = [this._favouriteColor, "blue", "pink"];
    this.getLogger().info("setup", this._colors);
  }

  destroy() {
    this._colors = [];
    this._favouriteColor = "";
    this._size = 0;
    this.getLogger().info("destroy", this._colors, this._favouriteColor, this._size);
  }
}

Playkit.registerPlugin(pluginName, ColorsPlugin);
