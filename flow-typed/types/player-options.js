// @flow

/**
 * @typedef {Object} PKPlayerOptionsObject
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [logLevel]
 * @property {PKPlaybackConfigObject} [playback]
 * @property {PKSourcesConfigObject} [sources]
 * @property {PKMetadataConfigObject} [metadata]
 * @property {PKPluginsConfigObject} [plugins]
 * @property {PKSessionConfigObject} [session]
 * @memberof Types
 */
type _PKPlayerOptionsObject = {
  id?: string,
  type?: string,
  name?: string,
  logLevel?: string,
  playback?: PKPlaybackConfigObject,
  sources?: PKSourcesConfigObject,
  metadata?: PKMetadataConfigObject,
  plugins?: PKPluginsConfigObject,
  session?: PKSessionConfigObject
};

declare type PKPlayerOptionsObject = _PKPlayerOptionsObject;
