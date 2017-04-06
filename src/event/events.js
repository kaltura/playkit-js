//@flow
const PLAYER_EVENTS = {
  PLAY: 'play',
  PAUSE: 'pause',
  /**
   * Fired when the media begins to play (either for the first time, after having been paused, or after ending and then restarting)
   */
  PLAYING: 'playing',
  /**
   * Fired while the user agent is downloading media data
   */
  PROGRESS: 'progress',
  /**
   * Fires when the loading of an audio/video is aborted
   */
  ABORT: 'abort',
  /**
   * Fires when an error occurs.  The element's error attribute contains more information
   */
  ERROR: 'error',
  /**
   * Fires when the browser is intentionally not getting media data
   */
  SUSPEND: 'suspend',
  /**
   * Fires when the current playlist is empty
   */
  EMPTIED: 'emptied',
  /**
   * Fires when playback completes
   */
  ENDED: 'ended',
  /**
   * Fires when the requested operation (such as playback) is delayed pending the completion of another operation (such as a seek)
   */
  WAITING: 'waiting',
  /**
   * Fires when the browser is trying to get media data, but data is not available
   */
  STALLED: 'stalled',
  /**
   * Fires when the video is starting to load
   */
  LOAD_START: 'loadstart',
  /**
   * Fires when the browser has loaded meta data for the audio/video
   */
  LOADED_METADATA: 'loadedmetadata',
  /**
   * Fires when the browser has loaded the current frame of the audio/video
   */
  LOADED_DATA: 'loadeddata',
  /**
   * Fires when the current playback position has changed
   */
  TIME_UPDATE: 'timeupdate',
  /**
   * Fires when the playing speed of the audio/video is changed
   */
  RATE_CHANGE: 'ratechange',
  /**
   * Fires when the volume has been changed
   */
  VOLUME_CHANGE: 'volumechange',
  /**
   * Fires when the text track has been changed
   */
  TEXT_TRACK_CHANGE: 'texttrackchange',
  /**
   * Fires when the player state has been changed
   */
  PLAYER_STATE_CHANGED: 'playerStateChanged'
};

export default PLAYER_EVENTS;

