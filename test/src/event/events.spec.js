import * as events from '../../../src/event/events'
import {merge} from '../../../src/utils/util'

describe('events', () => {
  it('should equals player events', () => {
    events.HTML5_EVENTS.should.deep.equals({
      ABORT: 'abort',
      CAN_PLAY: 'canplay',
      CAN_PLAY_THROUGH: 'canplaythrough',
      DURATION_CHANGE: 'durationchange',
      EMPTIED: 'emptied',
      ENDED: 'ended',
      ERROR: 'error',
      LOADED_DATA: 'loadeddata',
      LOADED_METADATA: 'loadedmetadata',
      LOAD_START: 'loadstart',
      PAUSE: 'pause',
      PLAY: 'play',
      PLAYING: 'playing',
      PROGRESS: 'progress',
      RATE_CHANGE: 'ratechange',
      SEEKED: 'seeked',
      SEEKING: 'seeking',
      STALLED: 'stalled',
      SUSPEND: 'suspend',
      TIME_UPDATE: 'timeupdate',
      VOLUME_CHANGE: 'volumechange',
      WAITING: 'waiting',
    });
    events.CUSTOM_EVENTS.should.deep.equals({
      VIDEO_TRACK_CHANGED: 'videotrackchanged',
      AUDIO_TRACK_CHANGED: 'audiotrackchanged',
      TEXT_TRACK_CHANGED: 'texttrackchanged',
      PLAYER_STATE_CHANGED: 'playerstatechanged'
    });
    events.PLAYER_EVENTS.should.deep.equals(merge([events.HTML5_EVENTS, events.CUSTOM_EVENTS]));
  });
});
