// @flow
declare type PKPlaybackConfigObject = {
  audioLanguage: string,
  textLanguage: string,
  additionalAudioLanguage: string,
  additionalTextLanguage: string,
  volume: number,
  playsinline: boolean,
  crossOrigin: string,
  preload: string,
  autoplay: PKAutoPlayTypes,
  allowMutedAutoPlay: boolean,
  muted: boolean,
  pictureInPicture: boolean,
  streamPriority: Array<PKStreamPriorityObject>,
  preferNative: PKPreferNativeConfigObject,
  inBrowserFullscreen: boolean,
  playAdsWithMSE: boolean,
  screenLockOrientionMode: string
};
