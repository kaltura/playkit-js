//@flow
declare interface IMediaSourceAdapter {
  load(): void;
  destroy(): void;
  static name: string;
  static isSupported(): boolean;
  static canPlayType(mimeType: string): boolean;
  static createAdapter(engine: IEngine, source: Object, config: Object): IMediaSourceAdapter;
}
