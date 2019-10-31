// @flow
const AdEventType: PKEventTypes = {
  /**
   * Fired when the ad can be skip by the user.
   */
  AD_CAN_SKIP: 'adcanskip',
  /**
   * Fired when the ad manifest has been loaded.
   */
  AD_MANIFEST_LOADED: 'admanifestloaded',
  /**
   * Fired when ad data is available.
   */
  AD_LOADED: 'adloaded',
  /**
   * Fired when the ad starts playing.
   */
  AD_STARTED: 'adstarted',
  /**
   * Fired when the ad is resumed.
   */
  AD_RESUMED: 'adresumed',
  /**
   * Fired when the ad is paused.
   */
  AD_PAUSED: 'adpaused',
  /**
   * Fired when the ad is clicked.
   */
  AD_CLICKED: 'adclicked',
  /**
   * Fired when the ad is skipped by the user.
   */
  AD_SKIPPED: 'adskipped',
  /**
   * Fired when the ad completes playing.
   */
  AD_COMPLETED: 'adcompleted',
  /**
   * Fired when an error occurred while the ad was loading or playing.
   */
  AD_ERROR: 'aderror',
  /**
   * Fired when the ads plugin is done playing all own ads.
   */
  ADS_COMPLETED: 'adscompleted',
  /**
   * Fired when the ads manager is done playing all the ads.
   */
  ALL_ADS_COMPLETED: 'alladscompleted',
  /**
   * Fired when content should be paused. This usually happens right before an ad is about to cover the content.
   */
  AD_BREAK_START: 'adbreakstart',
  /**
   * Fired when content should be resumed. This usually happens when an ad finishes or collapses.
   */
  AD_BREAK_END: 'adbreakend',
  /**
   * Fired when the ad playhead crosses first quartile.
   */
  AD_FIRST_QUARTILE: 'adfirstquartile',
  /**
   * Fired when the ad playhead crosses midpoint.
   */
  AD_MIDPOINT: 'admidpoint',
  /**
   * Fired when the ad playhead crosses third quartile.
   */
  AD_THIRD_QUARTILE: 'adthirdquartile',
  /**
   * Fired when the ad is closed by the user.
   */
  USER_CLOSED_AD: 'userclosedad',
  /**
   * Fired when the ad volume has changed.
   */
  AD_VOLUME_CHANGED: 'advolumechanged',
  /**
   * Fired when the ad volume has been muted.
   */
  AD_MUTED: 'admuted',
  /**
   * Fired on ad time progress.
   */
  AD_PROGRESS: 'adprogress',
  /**
   * Fired when the ad has stalled playback to buffer.
   */
  AD_BUFFERING: 'adbuffering',
  /**
   * Fired when an ad waterfalling occurred
   */
  AD_WATERFALLING: 'adwaterfalling',
  /**
   * Fired when an ad waterfalling failed
   */
  AD_WATERFALLING_FAILED: 'adwaterfallingfailed'
};

export {AdEventType};
