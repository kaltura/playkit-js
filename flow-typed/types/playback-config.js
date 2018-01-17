// @flow

/**
 * @typedef {Object} PKPlaybackConfigObject
 * @property {string} audioLanguage
 * @property {string} textLanguage
 * @property {boolean} useNativeTextTrack
 * @property {number} volume
 * @property {boolean} playsinline
 * @property {string} preload
 * @property {boolean} autoplay
 * @property {boolean} allowMutedAutoPlay
 * @property {boolean} muted
 * @property {Array<PKStreamPriorityObject>} streamPriority
 * @property {PKPreferNativeConfigObject} preferNative
 * @memberof Types
 */
type _PKPlaybackConfigObject = {
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

declare type PKPlaybackConfigObject = _PKPlaybackConfigObject;
