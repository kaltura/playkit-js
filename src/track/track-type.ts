export const TrackType = {
  VIDEO: 'video',
  AUDIO: 'audio',
  TEXT: 'text',
  IMAGE: 'image'
} as const;

export type TrackTypes = 'video' | 'audio' | 'text' | 'image'
