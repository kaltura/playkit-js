// @flow

/**
 * @typedef {Object} PKSourcesConfigObject
 * @property {Array<PKMediaSourceObject>} hls
 * @property {Array<PKMediaSourceObject>} dash
 * @property {Array<PKMediaSourceObject>} progressive
 * @memberof Types
 */
type _PKSourcesConfigObject = {
  hls: Array<PKMediaSourceObject>,
  dash: Array<PKMediaSourceObject>,
  progressive: Array<PKMediaSourceObject>
};

declare type PKSourcesConfigObject = _PKSourcesConfigObject;
