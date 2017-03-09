import BasePlugin from "../../../../src/plugin/BasePlugin";
import Player from "../../../../src/player";
import * as Playkit from "../../../../src/playkit";

const pluginName = "numbers";

export default class NumbersPlugin extends BasePlugin {
  _firstCellValue: number = 0;
  _lastCellValue: number = 0;
  _size: number = 0;
  _numbers: Array = [];

  constructor(name: string, player: Player) {
    super(name, player, {
      "size": 10,
      "firstCellValue": 4,
      "lastCellValue": 6
    });
    this._logger.info(`in <${name}> plugin constructor.`);
  }

  static isValid(): boolean {
    return true;
  }

  configure(userConfig: Object) {
    super.configure(userConfig);
    this._size = this._config.size;
    this._firstCellValue = this._config.firstCellValue;
    this._lastCellValue = this._config.lastCellValue;
    this._logger.info("configure", this._config);
  }

  setup() {
    this._numbers[0] = this._firstCellValue;
    for (let i = 1; i < this._size - 1; i++) {
      this._numbers[i] = (i * i) / 2;
    }
    this._numbers[this._size - 1] = this._lastCellValue;
    this._logger.info("setup", this._numbers);
  }

  destroy() {
    this._numbers = [];
    this._firstCellValue = 0;
    this._lastCellValue = 0;
    this._size = 0;
    this._logger.info("destroy", this._numbers, this._firstCellValue, this._lastCellValue, this._size);
  }
}

Playkit.registerPlugin(pluginName, NumbersPlugin);
