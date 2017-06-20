//@flow
import {merge} from '../utils/util'

const HTML5_EVENTS: { [event: string]: string } = {
  /**
   * Fires when the loading of an audio/video is aborted
   */
  ABORT: 'abort',
  /**
   * Fires when the browser can start playing the audio/video
   */
  CAN_PLAY: 'canplay',
  /**
   * Fires when the browser can play through the audio/video without stopping for buffering
   */
  CAN_PLAY_THROUGH: 'canplaythrough',
  /**
   * Fires when the duration of the audio/video is changed
   */
  DURATION_CHANGE: 'durationchange',
  /**
   * Fires when the current playlist is empty
   */
  EMPTIED: 'emptied',
  /**
   * Fires when the current playlist is ended
   */
  ENDED: 'ended',
  /**
   * Fires when an error occurred during the loading of an audio/video
   */
  ERROR: 'error',
  /**
   * Fires when the browser has loaded the current frame of the audio/video
   */
  LOADED_DATA: 'loadeddata',
  /**
   * Fires when the browser has loaded meta data for the audio/video
   */
  LOADED_METADATA: 'loadedmetadata',
  /**
   * Fires when the browser starts looking for the audio/video
   */
  LOAD_START: 'loadstart',
  /**
   * Fires when the audio/video has been paused
   */
  PAUSE: 'pause',
  /**
   * Fires when the audio/video has been started or is no longer paused
   */
  PLAY: 'play',
  /**
   * Fires when the audio/video is playing after having been paused or stopped for buffering
   */
  PLAYING: 'playing',
  /**
   * Fires when the browser is downloading the audio/video
   */
  PROGRESS: 'progress',
  /**
   * Fires when the playing speed of the audio/video is changed
   */
  RATE_CHANGE: 'ratechange',
  /**
   * Fires when the user is finished moving/skipping to a new position in the audio/video
   */
  SEEKED: 'seeked',
  /**
   * Fires when the user starts moving/skipping to a new position in the audio/video
   */
  SEEKING: 'seeking',
  /**
   * Fires when the browser is trying to get media data, but data is not available
   */
  STALLED: 'stalled',
  /**
   * Fires when the browser is intentionally not getting media data
   */
  SUSPEND: 'suspend',
  /**
   * Fires when the current playback position has changed
   */
  TIME_UPDATE: 'timeupdate',
  /**
   * Fires when the volume has been changed
   */
  VOLUME_CHANGE: 'volumechange',
  /**
   * Fires when the video stops because it needs to buffer the next frame
   */
  WAITING: 'waiting',
};

const CUSTOM_EVENTS: { [event: string]: string } = {
  /**
   * Fires when the active video track has been changed
   */
  VIDEO_TRACK_CHANGED: 'videotrackchanged',
  /**
   * Fires when the active audio track has been changed
   */
  AUDIO_TRACK_CHANGED: 'audiotrackchanged',
  /**
   * Fires when the active text track has been changed
   */
  TEXT_TRACK_CHANGED: 'texttrackchanged',
  /**
   * Fires when the player tracks have been changed
   */
  TRACKS_CHANGED: 'trackschanged',
  /**
   * Fires when the player state has been changed
   */
  PLAYER_STATE_CHANGED: 'playerstatechanged',
  /**
   * Fires on the first play
   */
  FIRST_PLAY: 'firstplay',
  /**
   * Fires when the player has selected the source to play
   */
  SOURCE_SELECTED: 'sourceselected'
};

const PLAYER_EVENTS: { [event: string]: string } = merge([HTML5_EVENTS, CUSTOM_EVENTS]);

export {PLAYER_EVENTS, HTML5_EVENTS, CUSTOM_EVENTS};
