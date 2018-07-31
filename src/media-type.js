// @flow
export type MediaTypes = {[media: string]: string};

const MediaType: MediaTypes = {
  VOD: 'Vod',
  LIVE: 'Live',
  AUDIO: 'Audio',
  UNKNOWN: 'Unknown'
};

export {MediaType};
