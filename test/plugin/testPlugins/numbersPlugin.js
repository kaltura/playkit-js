import BasePlugin from "../../../src/plugin/BasePlugin";
import Player from "../../../src/player";
import * as PlayKit from "../../../src/playkit";

const pluginName = "numbers";

export default class NumbersPlugin extends BasePlugin {
  firstCellValue_: number = 0;
  lastCellValue_: number = 0;
  size_: number = 0;
  numbers_: Array = [];

  constructor(name: string, player: Player) {
    super(name, player);
    this.defaultConfig = {
      "size": 10,
      "firstCellValue": 4,
      "lastCellValue": 6
    };
    this.logger.info(`in <${name}> plugin constructor.`);
  }

  configure(userConfig: Object) {
    super.configure(userConfig);
    this.size_ = this.config.size;
    this.firstCellValue_ = this.config.firstCellValue;
    this.lastCellValue_ = this.config.lastCellValue;
    this.logger.info("configure", this.config);
  }

  setup() {
    this.numbers_[0] = this.firstCellValue_;
    for (let i = 1; i < this.size_ - 1; i++) {
      this.numbers_[i] = (i * i) / 2;
    }
    this.numbers_[this.size_ - 1] = this.lastCellValue_;
    this.logger.info("setup", this.numbers_);
  }

  destroy() {
    this.numbers_ = [];
    this.firstCellValue_ = 0;
    this.lastCellValue_ = 0;
    this.size_ = 0;
    this.logger.info("destroy", this.numbers_, this.firstCellValue_, this.lastCellValue_, this.size_);
  }
}

PlayKit.registerPlugin(pluginName, NumbersPlugin);
