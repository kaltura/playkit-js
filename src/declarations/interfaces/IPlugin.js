//@flow
declare interface IPlugin {
  configure( config?: Object ):void;
  setup():void;
  destroy():void;
  static isAvailable():boolean;
  static +name:string;
  static +description:string;
}
