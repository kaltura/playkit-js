// @flow
import {Cue} from '../../src/track/vtt-cue';

declare type PKPlaybackConfigObject = {
  audioLanguage: string,
  textLanguage: string,
  useNativeTextTrack: boolean,
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
  textTrackDisplaySetting: Object
};
