//@flow
import Track from '../../src/track/track'

declare interface IMediaSourceAdapter {
  load(): Promise<Object>;
  destroy(): void;
  selectTrack(track: Track): boolean;
  static name: string;
  static isSupported(): boolean;
  static canPlayType(mimeType: string): boolean;
  static createAdapter(engine: IEngine, source: Object, config: Object): IMediaSourceAdapter;
}
