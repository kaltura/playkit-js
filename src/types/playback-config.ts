import {PKAutoPlayTypes} from './auto-play-types';
import {PKStreamPriorityObject} from './stream-priority';
import {PKPreferNativeConfigObject} from './prefer-native-config';

export type PKPlaybackConfigObject = {
  audioLanguage: string,
  textLanguage: string,
  captionsDisplay: boolean,
  additionalAudioLanguage: string | [string],
  additionalTextLanguage: string | [string],
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
  screenLockOrientionMode: string
};
