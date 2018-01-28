// @flow
declare type PKPlaybackConfigObject = {
  audioLanguage: string,
  textLanguage: string,
  useNativeTextTrack: boolean,
  volume: number,
  playsinline: boolean,
  preload: string,
  autoplay: boolean,
  allowMutedAutoPlay: boolean,
  muted: boolean,
  streamPriority: Array<PKStreamPriorityObject>,
  preferNative: PKPreferNativeConfigObject
};
