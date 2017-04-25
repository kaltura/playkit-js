//@flow
import NativeManager from './native/native-manger'

export default class MediaSourceProvider {

  static _mediaSourceManagers: Array<typeof MediaSourceManager> = [NativeManager];

  static _selectedManager: ?(typeof MediaSourceManager) = null;

  static register(mediaSourceManger: typeof MediaSourceManager): void {
    if (mediaSourceManger && !MediaSourceProvider._mediaSourceManagers.includes(mediaSourceManger)) {
      MediaSourceProvider._mediaSourceManagers.push(mediaSourceManger);
    }
  }

  static unRegister(mediaSourceManger: typeof MediaSourceManager): void {
    let index = MediaSourceProvider._mediaSourceManagers.indexOf(mediaSourceManger);
    if (index > -1) {
      MediaSourceProvider._mediaSourceManagers.splice(index, 1);
    }
  }

  static canPlayType(mimeType: string): boolean {
    let mediaSourceManagers = MediaSourceProvider._mediaSourceManagers;
    for (let i = 0; i < mediaSourceManagers.length; i++) {
      if (mediaSourceManagers[i].canPlayType(mimeType)) {
        MediaSourceProvider._selectedManager = mediaSourceManagers[i];
        return true;
      }
    }
    return false;
  }

  static getMediaSourceFetcher(engine: IEngine, source: Object, config: Object): ?IMediaSourceFetcher {
    if (engine && source && config && MediaSourceProvider._selectedManager) {
      return MediaSourceProvider._selectedManager.createFetcher(engine, source, config.engines);
    }
    return null;
  }
}

const registerMediaSourceManager = MediaSourceProvider.register;
export {registerMediaSourceManager};

