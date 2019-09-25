//@flow

declare interface IAdsPluginController {
  skipAd(): void;
  playAdNow(adPod: PKAdPod): void;
  onPlaybackEnded(): Promise<void>;
  +active: boolean;
  +done: boolean;
  +name: string;
}
