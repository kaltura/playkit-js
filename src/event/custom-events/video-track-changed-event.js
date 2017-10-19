// @flow
import FakeEvent from '../fake-event'
import VideoTrack from '../../track/video-track'

export default class VideoTrackChangedEvent extends FakeEvent {
  payload: VideoTrackChangedEventPayload;

  constructor(videoTrack: VideoTrack) {
    super(FakeEvent.Type.VIDEO_TRACK_CHANGED);
    this.payload = {
      selectedVideoTrack: videoTrack
    };
  }
}
