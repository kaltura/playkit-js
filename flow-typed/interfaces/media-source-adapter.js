//@flow
declare interface IMediaSourceAdapter {
  load(): void;
  destroy(): void;
  static name: string;
  static isSupported(): boolean;
  static canPlayType(mimeType: string): boolean;
  static createAdapter(videoElement: HTMLVideoElement, source: Source, config: Object): IMediaSourceAdapter;
}
