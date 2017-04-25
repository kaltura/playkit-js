//@flow
import LoggerFactory from '../../../../utils/logger'

export default class NativeFetcher implements IMediaSourceFetcher {

  static _name = 'NativeFetcher';

  _config: Object;
  _engine: IEngine;
  _videoElement: HTMLVideoElement;
  _source: string;
  _logger: any;

  constructor(engine: IEngine, source: Object, config: Object) {
    this._logger = LoggerFactory.getLogger(NativeFetcher._name);
    this._engine = engine;
    this._config = config;
    this._videoElement = engine.getVideoElement();
    this._source = source.url;
    if (source) {
      this._videoElement.src = source.url;
    }
  }

  load(): void {
    this._logger.debug('load');
    this._videoElement.load();
  }

  destroy(): void {
    this._logger.debug('destroy');
    this._videoElement.src = "";
  }
}
