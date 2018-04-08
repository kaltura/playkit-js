// @flow
import {TrackType} from './track-type'

const LabelToTrackMap = {
  "audio": TrackType.AUDIO,
  "captions": TrackType.TEXT,
  "qualities": TrackType.VIDEO
};

export {LabelToTrackMap};
