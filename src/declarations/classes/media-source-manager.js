declare class MediaSourceManager {
  static isSupported(): boolean;
  static canPlayType(mimeType: string): boolean;
  static createFetcher(engine: IEngine, source: Object, config: Object): IMediaSourceFetcher;
}
