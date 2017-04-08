//@flow
const PLAYER_EVENTS = [
  'play',
  'pause',
  /**
   * Fired while the user agent is downloading media data
   */
  'progress',
  /**
   * Fires when the loading of an audio/video is aborted
   */
  'abort',
  /**
   * Fires when the browser is intentionally not getting media data
   */
  'suspend',
  /**
   * Fires when the current playlist is empty
   */
  'emptied',
  /**
   * Fires when the browser is trying to get media data, but data is not available
   */
  'stalled',
  /**
   * Fires when the browser has loaded meta data for the audio/video
   */
  'loadedmetadata',
  /**
   * Fires when the browser has loaded the current frame of the audio/video
   */
  'loadeddata',
  /**
   * Fires when the current playback position has changed
   */
  'timeupdate',
  /**
   * Fires when the playing speed of the audio/video is changed
   */
  'ratechange',
  /**
   * Fires when the volume has been changed
   */
  'volumechange',
  /**
   * Fires when the text track has been changed
   */
  'texttrackchange'
];

export default PLAYER_EVENTS;
