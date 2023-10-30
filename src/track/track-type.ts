const TrackType: {[type: string]: TrackTypes} = Object.freeze({
  VIDEO: 'video',
  AUDIO: 'audio',
  TEXT: 'text',
  IMAGE: 'image'
});

export {TrackType};

export type TrackTypes = 'video' | 'audio' | 'text' | 'image'
