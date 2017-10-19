// @flow
import FakeEvent from '../fake-event'
import {Cue} from '../../track/vtt-cue'

export default class TextCueChangedEvent extends FakeEvent {
  payload: TextCueChangedEventPayload;

  constructor(cues: Array<Cue>) {
    super(FakeEvent.Type.TEXT_CUE_CHANGED);
    this.payload = {
      cues: cues
    };
  }
}
