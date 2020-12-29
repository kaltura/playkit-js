// @flow
import {TextStyle} from '../../src/track/text-style';

declare type PKTextConfigObject = {
  enableCEA708Captions: boolean,
  useNativeTextTrack: boolean,
  textTrackDisplaySetting: Object,
  textStyle: TextStyle | PKTextStyleObject,
  forceCenter: boolean,
  captionsTextTrack1Label: string,
  captionsTextTrack1LanguageCode: string,
  captionsTextTrack2Label: string,
  captionsTextTrack2LanguageCode: string
};
