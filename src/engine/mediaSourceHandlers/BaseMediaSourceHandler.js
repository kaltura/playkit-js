//@flow
import LoggerFactory from '../../util/loggerFactory';

export default class BaseMediaSourceHandler {

  static _mimeTypes: Array<string>;
  static _logger: ILogger;
  static _name: string;

  _msPlayer: any;

  static isSupported(): boolean {
    return true;
  }

  static canPlayType(mimeType: string): boolean {
    return this._mimeTypes.includes(mimeType);
  }

  constructor(name: string){
    this._logger = LoggerFactory.getLogger(name);
  }

  static createHandler(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler {
    return new this(videoElement, config);
  }

  static onError(error: Object){
    this._logger.error(error);
  }

  load(source: string) {
  }
}
