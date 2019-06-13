//@flow

declare interface IAdsPluginController {
  skipAd(): void;
  playAdNow(adTagUrl: string): void;
  onPlaybackEnded(): Promise<void>;
  +active: boolean;
  +done: boolean;
}
