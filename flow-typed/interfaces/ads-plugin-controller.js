//@flow

declare interface IAdsPluginController {
  prepare(): void;
  skipAd(): void;
  playAdNow(adTagUrl: string): void;
  onPlaybackEnded(): Promise<void>;
  +preload: boolean;
  +active: boolean;
  +done: boolean;
  +name: string;
}
