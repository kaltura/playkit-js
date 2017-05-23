//@flow
import Track from '../classes/track/track'

declare interface IMediaSourceAdapter {
  load(): Promise<*>;
  destroy(): void;
  getTracks(type?: string): Array<Track>;
  selectTrack(track: Track): void;
  static name: string;
  static isSupported(): boolean;
  static canPlayType(mimeType: string): boolean;
  static createAdapter(engine: IEngine, source: Object, config: Object): IMediaSourceAdapter;
}
