//@flow

declare interface IAdsPluginController {
  skipAd(): void;
  playAdNow(adTagUrl: string): void;
  +active: boolean;
  +done: boolean;
}
