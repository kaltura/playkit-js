import events from '../../../src/event/events'

describe('events', () => {
  it('should equals player events', () => {
    events.should.deep.equals({
      PLAY: 'play',
      PAUSE: 'pause',
      PLAYING: 'playing',
      PROGRESS: 'progress',
      ABORT: 'abort',
      ERROR: 'error',
      SUSPEND: 'suspend',
      EMPTIED: 'emptied',
      ENDED: 'ended',
      WAITING: 'waiting',
      STALLED: 'stalled',
      LOAD_START: 'loadstart',
      LOADED_METADATA: 'loadedmetadata',
      LOADED_DATA: 'loadeddata',
      TIME_UPDATE: 'timeupdate',
      RATE_CHANGE: 'ratechange',
      VOLUME_CHANGE: 'volumechange',
      TEXT_TRACK_CHANGE: 'texttrackchange',
      PLAYER_STATE_CHANGED: 'playerStateChanged',
      SEEKED: 'seeked',
      SEEKING: 'seeking'
    });
  });
});
