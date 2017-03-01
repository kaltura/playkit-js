//@flow
declare interface IPlugin {
  configure(config: Object):void;
  getConfig(attr?: string):Object;
  updateConfig(update: Object):void;
  setup():void;
  destroy():void;
  static isValid():boolean;
}
