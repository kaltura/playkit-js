//@flow
declare interface IPlugin {
  configure(config: Object):void;
  setup():void;
  getConfig(attr?: string):any;
  updateConfig(update: Object):void;
  destroy():void;
}
