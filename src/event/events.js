//@flow
import * as Utils from '../utils/util'

/**
 * @namespace Event
 * @memberof PlayKitJS
 */

const HTML5_EVENTS: { [event: string]: string } = {
  /**
   * Fires when the loading of an audio/video is aborted
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  ABORT: 'abort',
  /**
   * Fires when the browser can start playing the audio/video
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  CAN_PLAY: 'canplay',
  /**
   * Fires when the browser can play through the audio/video without stopping for buffering
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  CAN_PLAY_THROUGH: 'canplaythrough',
  /**
   * Fires when the duration of the audio/video is changed
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  DURATION_CHANGE: 'durationchange',
  /**
   * Fires when the current playlist is empty
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  EMPTIED: 'emptied',
  /**
   * Fires when the current playlist is ended
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  ENDED: 'ended',
  /**
   * Fires when an error occurred during the loading of an audio/video
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  ERROR: 'error',
  /**
   * Fires when the browser has loaded the current frame of the audio/video
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  LOADED_DATA: 'loadeddata',
  /**
   * Fires when the browser has loaded meta data for the audio/video
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  LOADED_METADATA: 'loadedmetadata',
  /**
   * Fires when the browser starts looking for the audio/video
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  LOAD_START: 'loadstart',
  /**
   * Fires when the audio/video has been paused
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  PAUSE: 'pause',
  /**
   * Fires when the audio/video has been started or is no longer paused
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  PLAY: 'play',
  /**
   * Fires when the audio/video is playing after having been paused or stopped for buffering
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  PLAYING: 'playing',
  /**
   * Fires when the browser is downloading the audio/video
   */
  PROGRESS: 'progress',
  /**
   * Fires when the playing speed of the audio/video is changed
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  RATE_CHANGE: 'ratechange',
  /**
   * Fires when the user is finished moving/skipping to a new position in the audio/video
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  SEEKED: 'seeked',
  /**
   * Fires when the user starts moving/skipping to a new position in the audio/video
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  SEEKING: 'seeking',
  /**
   * Fires when the browser is trying to get media data, but data is not available
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  STALLED: 'stalled',
  /**
   * Fires when the browser is intentionally not getting media data
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  SUSPEND: 'suspend',
  /**
   * Fires when the current playback position has changed
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  TIME_UPDATE: 'timeupdate',
  /**
   * Fires when the volume has been changed
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  VOLUME_CHANGE: 'volumechange',
  /**
   * Fires when the video stops because it needs to buffer the next frame
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  WAITING: 'waiting',
};

const CUSTOM_EVENTS: { [event: string]: string } = {
  /**
   * Fires when the active video track has been changed
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  VIDEO_TRACK_CHANGED: 'videotrackchanged',
  /**
   * Fires when the active audio track has been changed
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AUDIO_TRACK_CHANGED: 'audiotrackchanged',
  /**
   * Fires when the active text track has been changed
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  TEXT_TRACK_CHANGED: 'texttrackchanged',
  /**
   * Fires when the player tracks have been changed
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  TRACKS_CHANGED: 'trackschanged',
  /**
   * Fires when the abr mode change from 'auto' to 'manual' or vice versa
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  ABR_MODE_CHANGED: 'abrmodechanged',
  /**
   * Fires when the player state has been changed
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  PLAYER_STATE_CHANGED: 'playerstatechanged',
  /**
   * Fires on the first play
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  FIRST_PLAY: 'firstplay',
  /**
   * Fires when the player has selected the source to play
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  SOURCE_SELECTED: 'sourceselected',
  /**
   * Fired when ad data is available.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_LOADED: 'adloaded',
  /**
   * Fired when the ad starts playing.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_STARTED: 'adstarted',
  /**
   * Fired when the ad is resumed.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_RESUMED: 'adresumed',
  /**
   * Fired when the ad is paused.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_PAUSED: 'adpaused',
  /**
   * Fired when the ad is clicked.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_CLICKED: 'adclicked',
  /**
   * Fired when the ad is skipped by the user.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_SKIPPED: 'adskipped',
  /**
   * Fired when the ad completes playing.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_COMPLETED: 'adcompleted',
  /**
   * Fired when an error occurred while the ad was loading or playing.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_ERROR: 'aderror',
  /**
   * Fired when the ads manager is done playing all the ads.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  ALL_ADS_COMPLETED: 'alladscompleted',
  /**
   * Fired when content should be paused. This usually happens right before an ad is about to cover the content.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_BREAK_START: 'adbreakstart',
  /**
   * Fired when content should be resumed. This usually happens when an ad finishes or collapses.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_BREAK_END: 'adbreakend',
  /**
   * Fired when the ad playhead crosses first quartile.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_FIRST_QUARTILE: 'adfirstquartile',
  /**
   * Fired when the ad playhead crosses midpoint.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_MIDPOINT: 'admidpoint',
  /**
   * Fired when the ad playhead crosses third quartile.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_THIRD_QUARTILE: 'adthirdquartile',
  /**
   * Fired when the ad is closed by the user.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  USER_CLOSED_AD: 'userclosedad',
  /**
   * Fired when the ad volume has changed.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_VOLUME_CHANGED: 'advolumechanged',
  /**
   * Fired when the ad volume has been muted.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_MUTED: 'admuted',
  /**
   * Fired on ad time progress.
   * @enum
   * @memberof PlayKitJS.Event
   * @public
   */
  AD_PROGRESS: 'adprogress'
};

const PLAYER_EVENTS: { [event: string]: string } = Utils.Object.merge([HTML5_EVENTS, CUSTOM_EVENTS]);

export {PLAYER_EVENTS, HTML5_EVENTS, CUSTOM_EVENTS};
