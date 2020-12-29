// @flow
declare type PKPlaybackConfigObject = {
  audioLanguage: string,
  textLanguage: string,
  volume: number,
  playsinline: boolean,
  crossOrigin: string,
  preload: string,
  autoplay: boolean,
  allowMutedAutoPlay: boolean,
  muted: boolean,
  pictureInPicture: boolean,
  streamPriority: Array<PKStreamPriorityObject>,
  preferNative: PKPreferNativeConfigObject,
  inBrowserFullscreen: boolean,
  playAdsWithMSE: boolean,
  screenLockOrientionMode: string
};
