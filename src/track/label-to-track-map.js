// @flow
import {TrackType} from './track-type'
import {LabelOptions} from './label-options'

const LabelToTrackMap = {};
LabelToTrackMap[LabelOptions.AUDIO] = TrackType.AUDIO;
LabelToTrackMap[LabelOptions.CAPTIONS] = TrackType.TEXT;
LabelToTrackMap[LabelOptions.QUALITIES] = TrackType.VIDEO;

export {LabelToTrackMap};
