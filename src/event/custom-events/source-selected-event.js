// @flow
import FakeEvent from '../fake-event'

export default class SourceSelectedEvent extends FakeEvent {
  payload: SourceSelectedEventPayload;

  constructor(selectedSource: Array<Source>) {
    super(FakeEvent.Type.SOURCE_SELECTED);
    this.payload = {
      selectedSource: selectedSource
    };
  }
}
