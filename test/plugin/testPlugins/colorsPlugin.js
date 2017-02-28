import BasePlugin from "../../../src/plugin/BasePlugin";
import Player from "../../../src/player";
import * as PlayKit from "../../../src/playkit";

const pluginName = "colors";

export default class ColorsPlugin extends BasePlugin {
  favouriteColor_: string = "";
  size_: number = 0;
  colors_: Array = [];

  constructor(name: string, player: Player) {
    super(name, player);
    this.defaultConfig = {
      "size": 3,
      "favouriteColor": "green"
    };
    this.logger.info(`in <${name}> plugin constructor.`);
  }

  configure(userConfig: Object) {
    super.configure(userConfig);
    this.size_ = this.config.size;
    this.favouriteColor_ = this.config.favouriteColor;
    this.logger.info("configure", this.config);
  }

  setup() {
    this.colors_ = [this.favouriteColor_, "blue", "pink"];
    this.logger.info("setup", this.colors_);
  }

  destroy() {
    this.colors_ = [];
    this.favouriteColor_ = "";
    this.size_ = 0;
    this.logger.info("destroy", this.colors_, this.favouriteColor_, this.size_);
  }
}

PlayKit.registerPlugin(pluginName, ColorsPlugin);
