// @flow
declare type PKPlaybackConfigObject = {
  audioLanguage: string,
  textLanguage: string,
  captionsDisplay: boolean,
  additionalAudioLanguage: string,
  additionalTextLanguage: string,
  volume: number,
  playsinline: boolean,
  crossOrigin: string,
  preload: string,
  autoplay: PKAutoPlayTypes,
  allowMutedAutoPlay: boolean,
  updateAudioDescriptionLabels: boolean,
  muted: boolean,
  pictureInPicture: boolean,
  streamPriority: Array<PKStreamPriorityObject>,
  preferNative: PKPreferNativeConfigObject,
  inBrowserFullscreen: boolean,
  playAdsWithMSE: boolean,
  screenLockOrientionMode: string,
  playbackRate: number
};
