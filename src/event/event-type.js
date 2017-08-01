//@flow

/**
 * @namespace EventType
 * @memberof Enums
 * @typedef {EventType}
 */
export const EventType = {
  /**
   * @namespace Html5
   * @memberof Enums.EventType
   */
  Html5: {
    /**
     * Fires when the loading of an audio/video is aborted.
     * @enum
     * @memberof Enums.EventType.Html5
     * @type {EventType}
     * @public
     */
    ABORT: 'abort',
    /**
     * Fires when the browser can start playing the audio/video.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    CAN_PLAY: 'canplay',
    /**
     * Fires when the browser can play through the audio/video without stopping for buffering.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    CAN_PLAY_THROUGH: 'canplaythrough',
    /**
     * Fires when the duration of the audio/video is changed.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    DURATION_CHANGE: 'durationchange',
    /**
     * Fires when the current playlist is empty.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    EMPTIED: 'emptied',
    /**
     * Fires when the current playlist is ended.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    ENDED: 'ended',
    /**
     * Fires when an error occurred during the loading of an audio/video.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    ERROR: 'error',
    /**
     * Fires when the browser has loaded the current frame of the audio/video.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    LOADED_DATA: 'loadeddata',
    /**
     * Fires when the browser has loaded meta data for the audio/video.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    LOADED_METADATA: 'loadedmetadata',
    /**
     * Fires when the browser starts looking for the audio/video.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    LOAD_START: 'loadstart',
    /**
     * Fires when the audio/video has been paused.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    PAUSE: 'pause',
    /**
     * Fires when the audio/video has been started or is no longer paused.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    PLAY: 'play',
    /**
     * Fires when the audio/video is playing after having been paused or stopped for buffering.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    PLAYING: 'playing',
    /**
     * Fires when the browser is downloading the audio/video.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    PROGRESS: 'progress',
    /**
     * Fires when the playing speed of the audio/video is changed.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    RATE_CHANGE: 'ratechange',
    /**
     * Fires when the user is finished moving/skipping to a new position in the audio/video.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    SEEKED: 'seeked',
    /**
     * Fires when the user starts moving/skipping to a new position in the audio/video.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    SEEKING: 'seeking',
    /**
     * Fires when the browser is trying to get media data, but data is not available.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    STALLED: 'stalled',
    /**
     * Fires when the browser is intentionally not getting media data.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    SUSPEND: 'suspend',
    /**
     * Fires when the current playback position has changed.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    TIME_UPDATE: 'timeupdate',
    /**
     * Fires when the volume has been changed.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    VOLUME_CHANGE: 'volumechange',
    /**
     * Fires when the video stops because it needs to buffer the next frame.
     * @enum
     * @memberof Enums.EventType.Html5
     * @public
     */
    WAITING: 'waiting'
  },
  /**
   * @namespace Ads
   * @memberof Enums.EventType
   */
  Ads: {
    /**
     * Fired when ad data is available.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_LOADED: 'adloaded',
    /**
     * Fired when the ad starts playing.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_STARTED: 'adstarted',
    /**
     * Fired when the ad is resumed.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_RESUMED: 'adresumed',
    /**
     * Fired when the ad is paused.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_PAUSED: 'adpaused',
    /**
     * Fired when the ad is clicked.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_CLICKED: 'adclicked',
    /**
     * Fired when the ad is skipped by the user.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_SKIPPED: 'adskipped',
    /**
     * Fired when the ad completes playing.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_COMPLETED: 'adcompleted',
    /**
     * Fired when an error occurred while the ad was loading or playing.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_ERROR: 'aderror',
    /**
     * Fired when the ads manager is done playing all the ads.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    ALL_ADS_COMPLETED: 'alladscompleted',
    /**
     * Fired when content should be paused. This usually happens right before an ad is about to cover the content.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_BREAK_START: 'adbreakstart',
    /**
     * Fired when content should be resumed. This usually happens when an ad finishes or collapses.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_BREAK_END: 'adbreakend',
    /**
     * Fired when the ad playhead crosses first quartile.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_FIRST_QUARTILE: 'adfirstquartile',
    /**
     * Fired when the ad playhead crosses midpoint.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_MIDPOINT: 'admidpoint',
    /**
     * Fired when the ad playhead crosses third quartile.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_THIRD_QUARTILE: 'adthirdquartile',
    /**
     * Fired when the ad is closed by the user.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    USER_CLOSED_AD: 'userclosedad',
    /**
     * Fired when the ad volume has changed.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_VOLUME_CHANGED: 'advolumechanged',
    /**
     * Fired when the ad volume has been muted.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_MUTED: 'admuted',
    /**
     * Fired on ad time progress.
     * @enum
     * @memberof Enums.EventType.Ads
     * @public
     */
    AD_PROGRESS: 'adprogress'
  },
  /**
   * @namespace Player
   * @memberof Enums.EventType
   */
  Player: {
    /**
     * Fires when the active video track has been changed.
     * @enum
     * @memberof Enums.EventType.Player
     * @public
     */
    VIDEO_TRACK_CHANGED: 'videotrackchanged',
    /**
     * Fires when the active audio track has been changed.
     * @enum
     * @memberof Enums.EventType.Player
     * @public
     */
    AUDIO_TRACK_CHANGED: 'audiotrackchanged',
    /**
     * Fires when the active text track has been changed.
     * @enum
     * @memberof Enums.EventType.Player
     * @public
     */
    TEXT_TRACK_CHANGED: 'texttrackchanged',
    /**
     * Fires when the player tracks have been changed.
     * @enum
     * @memberof Enums.EventType.Player
     * @public
     */
    TRACKS_CHANGED: 'trackschanged',
    /**
     * Fires when the abr mode change from 'auto' to 'manual' or vice versa.
     * @enum
     * @memberof Enums.EventType.Player
     * @public
     */
    ABR_MODE_CHANGED: 'abrmodechanged',
    /**
     * Fires when the player state has been changed.
     * @enum
     * @memberof Enums.EventType.Player
     * @public
     */
    PLAYER_STATE_CHANGED: 'playerstatechanged',
    /**
     * Fires on the each first playback play.
     * @enum
     * @memberof Enums.EventType.Player
     * @public
     */
    FIRST_PLAY: 'firstplay',
    /**
     * Fires when the player has selected the source to play.
     * @enum
     * @memberof Enums.EventType.Player
     * @public
     */
    SOURCE_SELECTED: 'sourceselected'
  }
};
