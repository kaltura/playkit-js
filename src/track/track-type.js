//@flow
export type TrackTypes = {[track: string]: string};

const TrackType: TrackTypes = {
  VIDEO: 'video',
  AUDIO: 'audio',
  TEXT: 'text'
};

export {TrackType};
