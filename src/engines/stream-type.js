// @flow
export type StreamTypes = {[stream: string]: string};

const StreamType: StreamTypes = {
  DASH: 'dash',
  HLS: 'hls',
  PROGRESSIVE: 'progressive'
};

export {StreamType};
