//@flow
import NativeManager from './native/native-manger'

export default class MediaSourceProvider {

  static _mediaSourceManagers: Array<typeof IMediaSourceManager> = [NativeManager];

  static _selectedManager: ?(typeof IMediaSourceManager) = null;

  static register(mediaSourceManager: typeof IMediaSourceManager): void {
    if (mediaSourceManager && !MediaSourceProvider._mediaSourceManagers.includes(mediaSourceManager)) {
      MediaSourceProvider._mediaSourceManagers.push(mediaSourceManager);
    }
  }

  static unRegister(mediaSourceManager: typeof IMediaSourceManager): void {
    let index = MediaSourceProvider._mediaSourceManagers.indexOf(mediaSourceManager);
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

