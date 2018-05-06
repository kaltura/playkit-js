// @flow
declare type PKPlayerOptionsObject = {
  id?: string,
  type?: string,
  name?: string,
  logLevel?: string,
  playback?: PKPlaybackConfigObject,
  sources?: PKSourcesConfigObject,
  metadata?: PKMetadataConfigObject,
  plugins?: PKPluginsConfigObject,
  session?: PKSessionConfigObject,
  customLabels?: PKCustomLabelsConfigObject
};
