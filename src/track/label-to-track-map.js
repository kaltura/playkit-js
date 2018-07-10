// @flow
import {TrackType} from './track-type'
import {LabelOptions} from './label-options'

const LabelToTrackMap = {
  [LabelOptions.AUDIO]: TrackType.AUDIO,
  [LabelOptions.CAPTIONS]: TrackType.TEXT,
  [LabelOptions.QUALITIES]: TrackType.VIDEO
};

export {LabelToTrackMap};
