//@flow

declare interface IAdsController {
  skipAd(): void;
  playAdNow(adTagUrl: string): void;
  prepareAd(config: Object): void;
}
