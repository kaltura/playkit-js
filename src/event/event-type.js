//@flow
import * as Utils from '../utils/util';
import {AdEventType} from '../ads/ad-event-type';

const Html5EventType: PKEventTypes = {
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
  /**
   * Fires when the engine enters picture in picture
   */
  ENTER_PICTURE_IN_PICTURE: 'enterpictureinpicture',
  /**
   * Fires when the engine exits picture in picture
   */
  LEAVE_PICTURE_IN_PICTURE: 'leavepictureinpicture',
  /**
   * Fires when the engine changes presentation mode on safari webkitpresentationmodechanged
   */
  PRESENTATION_MODE_CHANGED: 'webkitpresentationmodechanged'
};

const CustomEventType: PKEventTypes = {
  /**
   * Fires when the media is loaded.
   */
  MEDIA_LOADED: 'medialoaded',
  /**
   * Fires when the player ends reset operation.
   */
  PLAYER_RESET: 'playerreset',
  /**
   * Fires when the player ends destroy operation.
   */
  PLAYER_DESTROY: 'playerdestroy',
  /**
   * Fires when the player enters fullscreen.
   */
  ENTER_FULLSCREEN: 'enterfullscreen',
  /**
   * Fires when the player exits fullscreen.
   */
  EXIT_FULLSCREEN: 'exitfullscreen',
  /**
   * Fires when browser fails to autoplay with sound.
   */
  AUTOPLAY_FAILED: 'autoplayfailed',
  /**
   * Fires when browser fails to autoplay with sound but start muted autoplay instead.
   */
  FALLBACK_TO_MUTED_AUTOPLAY: 'fallbacktomutedautoplay',
  /**
   * Fires when change source flow started.
   */
  CHANGE_SOURCE_STARTED: 'changesourcestarted',
  /**
   * Fires when change source flow ended.
   */
  CHANGE_SOURCE_ENDED: 'changesourceended',
  /**
   * Fires when the volume has been muted/unmute.
   */
  MUTE_CHANGE: 'mutechange',
  /**
   * Fires when the active video track has been changed.
   */
  VIDEO_TRACK_CHANGED: 'videotrackchanged',
  /**
   * Fires when the active audio track has been changed.
   */
  AUDIO_TRACK_CHANGED: 'audiotrackchanged',
  /**
   * Fires when the active text track has been changed.
   */
  TEXT_TRACK_CHANGED: 'texttrackchanged',
  /**
   * Fires when the active text track cue has changed.
   */
  TEXT_CUE_CHANGED: 'textcuechanged',
  /**
   * Fires when the player tracks have been changed.
   */
  TRACKS_CHANGED: 'trackschanged',
  /**
   * Fires when the abr mode change from 'auto' to 'manual' or vice versa.
   */
  ABR_MODE_CHANGED: 'abrmodechanged',
  /**
   * Fires when the player state has been changed.
   */
  PLAYER_STATE_CHANGED: 'playerstatechanged',
  /**
   * Fires when playback start requested.
   */
  PLAYBACK_START: 'playbackstart',
  /**
   * Fires on the first 'play' event.
   */
  FIRST_PLAY: 'firstplay',
  /**
   * Fires on the first 'playing' event.
   */
  FIRST_PLAYING: 'firstplaying',
  /**
   * Fires when the playback (includes postrolls) is ended.
   */
  PLAYBACK_ENDED: 'playbackended',
  /**
   * Fires when the player has selected the source to play.
   */
  SOURCE_SELECTED: 'sourceselected',
  /**
   * Fires when the text track style has changed.
   */
  TEXT_STYLE_CHANGED: 'textstylechanged',
  /**
   * Fired when the adapter recovered from a media error
   */
  MEDIA_RECOVERED: 'mediarecovered',
  /**
   * Fired when the vr stereo mode changed
   */
  VR_STEREO_MODE_CHANGED: 'vrstereomodechanged',
  /**
   * Fired when the frames drop are exceeds the allowed (configured) threshold
   */
  FPS_DROP: 'fpsdrop',
  /**
   * Fired when the a bookmark service returns an error
   * This event will be removed once plugins will have a way to expose their event enums
   */
  BOOKMARK_ERROR: 'bookmarkerror',
  /**
   * Fired when the a bookmark service returns a concurrency limit error
   * This event will be removed once plugins will have a way to expose their event enums
   */
  CONCURRENCY_LIMIT: 'concurrencylimit',
  /**
   * Fired when the player container changes it's dimensions
   */
  RESIZE: 'resize',
  /**
   * Fired when the timed metadata triggered
   */
  TIMED_METADATA: 'timedmetadata',
  /**
   * Fired when a fragment or segment is done loading successfully
   */
  FRAG_LOADED: 'fragloaded',
  /**
   * Fired when a manifest is done loading successfully
   */
  MANIFEST_LOADED: 'manifestloaded',
  /**
   * Fired when the user interact with the player ui
   */
  USER_GESTURE: 'usergesture'
};

const EventType: PKEventTypes = Utils.Object.merge([Html5EventType, CustomEventType, AdEventType]);

export {EventType, Html5EventType, CustomEventType};
