import * as events from '../../../src/event/events'
import {Object as ObjectUtils} from '../../../src/utils/util'

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
      TRACKS_CHANGED: 'trackschanged',
      ABR_MODE_CHANGED: 'abrmodechanged',
      PLAYER_STATE_CHANGED: 'playerstatechanged',
      FIRST_PLAY: 'firstplay',
      SOURCE_SELECTED: 'sourceselected',
      AD_LOADED: 'adloaded',
      AD_STARTED: 'adstarted',
      AD_RESUMED: 'adresumed',
      AD_PAUSED: 'adpaused',
      AD_CLICKED: 'adclicked',
      AD_SKIPPED: 'adskipped',
      AD_COMPLETED: 'adcompleted',
      AD_ERROR: 'aderror',
      ALL_ADS_COMPLETED: 'alladscompleted',
      AD_BREAK_START: 'adbreakstart',
      AD_BREAK_END: 'adbreakend',
      AD_FIRST_QUARTILE: 'adfirstquartile',
      AD_MIDPOINT: 'admidpoint',
      AD_THIRD_QUARTILE: 'adthirdquartile',
      USER_CLOSED_AD: 'userclosedad',
      AD_VOLUME_CHANGED: 'advolumechanged',
      AD_MUTED: 'admuted',
      AD_PROGRESS: 'adprogress'
    });
    events.PLAYER_EVENTS.should.deep.equals(ObjectUtils.merge([events.HTML5_EVENTS, events.CUSTOM_EVENTS]));
  });
});
