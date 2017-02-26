import BasePlugin from "../../../plugin/framework/BasePlugin";
import LoggerFactory from "../../../util/loggerFactory";
import * as Playkit from "../../../playkit";
import * as pluginData from "./numbers.json";

let logger = LoggerFactory.getLogger( 'numbers' );

class NumbersPlugin extends BasePlugin {
  size_: number = 0;
  numbers_: Array = [];

  constructor() {
    super();
    logger.info( "in constructor" );
  }

  configure( config: Object ) {
    this.size_ = config.size_ || 10;
    logger.info( "config", this.size_ );
  }

  setup() {
    for ( let i = 0; i < this.size_; i++ ) {
      this.numbers_[ i ] = (i * i) / 2;
    }
    logger.info( "setup", this.numbers_ );
  }

  static get description(): string {
    return pluginData.description;
  }

  static get name(): string {
    return pluginData.name;
  }

  destroy() {
    this.numbers_ = [];
    this.size_ = 0;
    logger.info( "destroy", this.numbers_, this.size_ );
  }

  static isAvailable() {
    return true;
  }
}

Playkit.registerPlugin( NumbersPlugin.name, NumbersPlugin );
