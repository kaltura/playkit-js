//@flow
import NativeFetcher from './native-fetcher'
import LoggerFactory from '../../../../utils/logger'

export default class NativeManager implements IMediaSourceManager {
  static _name = "NativeManager";
  static _logger = LoggerFactory.getLogger(NativeManager._name);

  static createFetcher(engine: IEngine, source: Object, config: Object): IMediaSourceFetcher {
    NativeManager._logger.debug('Creating fetcher');
    return new NativeFetcher(engine, source, config);
  }

  static canPlayType(mimeType: string): boolean {
    let canPlayType = !!(document.createElement("video").canPlayType(mimeType));
    NativeManager._logger.debug('canPlayType result for mimeType:' + mimeType + 'is ' + canPlayType.toString());
    return canPlayType;
  }

  static isSupported(): boolean {
    NativeManager._logger.debug('isSupported:true');
    return true;
  }
}
