const AdErrorCode: {[code: string]: number} = {
  /**
   * VAST supplied in adm is not a valid XML document.
   * URL supplied in nurl does not resolve to a valid XML document.
   * Nurl only: Server did not respond with VAST, or at all when player called the nurl.
   * Perhaps a CORS issue
   * Ensure VAST XML is properly formatted per IAB spec
   */
  XML_PARSING_ERROR: 8100,
  /**
   * The VAST validates as XML, but does not validate per the VAST schema (i.e. there are missing mandatory elements or attributes, or combinations of elements/attributes that are not permissible).
   */
  VAST_SCHEMA_VALIDATION_ERROR: 8101,
  /**
   * idder did not respect the VAST version(s) listed in the bid request.
   * Exchange is sending wrong VAST version(s) in bid request.
   * VAST does not contain version (this could also be considered a schema validation issue)
   */
  VAST_RESPONSE_VERSION_NOT_SUPPORTED: 8102,
  /**
   * Player wanted Skippable Linear, but got back Linear.
   * Player wanted Linear, but got back Skippable Linear.
   * For Skippable Linear, skipoffset doesn’t meet publisher expectations.
   * Bidder did not respect the skippability/skipoffset in the bid request.
   * Exchange is sending wrong skippability/skipoffset in the bid request.
   * Potentially any of the reasons in 201-203
   * Make sure proper ad types are being sent and skippable attributes are being respected
   */
  TRAFFICKING_ERROR: 8200,
  /**
   * Bidder did not respect the linearity in the bid request.
   * Exchange is sending wrong linearity in the bid request
   * Ensure linearity requested is being respected
   */
  VAST_UNEXPECTED_LINEARITY: 8201,
  /**
   * Bidder did not respect the duration in the bid request.
   * Exchange is sending wrong duration in the bid request
   * Ensure duration requested is being respected
   */
  VAST_UNEXPECTED_DURATION_ERROR: 8202,
  /**
   * No MediaFile is available with dimensions that are matching for the device (i.e. mobile devices that cannot play full HD).
   * No MediaFile is available with an acceptable bitrate.
   * Bidder did not respect maxbitrate
   * Exchange is not sending maxbitrate
   * High bitrate creatives attempting to serve on mobile devices
   * Ensure multiple mediafiles options to cover different devices and environments
   */
  VAST_UNEXPECTED_SIZE_ERROR: 8203,
  /**
   * Check that all VAST URIs are reachable and not timing out
   * Ensure wrapper limit is not reached
   */
  VAST_WRAPPER_ERROR: 8300,
  /**
   * Check that the VAST URI is valid and reachable.
   * This could be due to poor internet connection or non-optimized page and therefore request times out. Check whether this occurs more on mobile devices (may not be reproducible due to network limits).
   * Check timeout limit of your player to ensure this isn't being reached
   * This can be caused by HTTP serving to HTTPS.
   */
  VAST_URI_ERROR: 8301,
  /**
   * This can be caused by a circular loop of daisy chaining (one network bouncing to another and another).
   * Too many wrappers
   * Look into increasing the wrapper limit of your player to accommodate these creatives
   */
  VAST_TOO_MANY_REDIRECTS: 8302,
  /**
   * No Ad element in VAST doc (after following wrappers).
   * When working with third-party networks, the fill-rate can be less than 100%. If so, this is an expected error. For example, if the third-party expects to fill 60% of the time, you should expect 40% errors. You can check to ensure that the error rate is in line with the fill-rate of the third-party network.
   * Ensure the bids being returned do not have empty VAST
   */
  NO_ADS_VAST_RESPONSE: 8303,
  /**
   * Check that the MediaFile a valid video file of the specified format in the request
   * Make sure the URL returns a valid video asset
   * Check for browser restrictions such as autoplay blocking, auto-mute, etc
   * See also possible causes for 401-405
   */
  GENERAL_LINEAR_ERROR: 8400,
  /**
   * Ensure that all MediaFiles in the response return a valid video asset
   */
  FILE_NOT_FOUND: 8401,
  /**
   * Issue with CDN server.
   * Timeout (in milliseconds) when loading a video ad media file. If loading takes longer than this timeout, the ad playback is canceled.
   * Can be caused by low bandwidth, or poor website implementation with competing requests that delay loading of the media file.
   * Can occur when a video auto-plays in a mobile environment, since it should be click-to-play (there are some exceptions).
   * Increase the timeout limit of your player
   */
  VAST_MEDIA_LOAD_TIMEOUT: 8402,
  /**
   * Bidder did not respect mime types in bid request.
   * Exchange did not send correct mime types.
   * This may indicate that the wrong creative type attempted to play. For example, a Flash creative attempted to play on a mobile device or WebM on iOS.
   * This error type is more common on mobile.
   * Ad is inline but no compatible media file found. Generally, if the player reaches a point where it sees no MediaFiles in the array of mediafiles considered eligible
   */
  MEDIA_FILE_NOT_FOUND: 8403,
  /**
   * CORS issue for CDN server.
   * Unsupported Codecs.
   * Mismatch between MIME type and video file type.
   * Unsupported delivery method
   */
  MEDIA_FILE_DISPLAY_ERROR: 8405,
  /**
   * Ensure that there is a mezzanine file included in the response
   */
  MEZZANINE_FILE_NOT_PROVIDED: 8406,
  /**
   * This is an expected error while the video is being transcoded. This error will stop once transcoding is complete and available.
   */
  MEZZANINE_DOWNLOADED_FOR_THE_FIRST_TIME: 8407,
  /**
   * The ad returned in the VAST response was rejected.
   */
  VAST_RESPONSE_AD_REJECTED: 8408,
  /**
   * The interactive creative defined in the InteractiveCreativeFile node was not executed.
   */
  CREATIVE_WAS_NOT_EXECUTED: 8409,
  /**
   * The code referenced in the Verification node was not executed.
   */
  CODE_REFERENCED_NOT_EXECUTED: 8410,
  /**
   * General NonLinearAds error.
   */
  GENERAL_NON_LINEAR_AD_ERROR: 8500,
  /**
   * Unable to display non-linear ad because creative dimensions do not align with creative display area (in other words, the creative dimension was too large).
   */
  NON_LINEAR_CREATIVE_DIMENSIONS_NOT_ALIGN_ERROR: 8501,
  /**
   * Unable to fetch NonLinearAds/NonLinear resource.
   */
  NON_LINEAR_FETCH_ERROR: 8502,
  /**
   * Could not find NonLinear resource with supported type.
   */
  NON_LINEAR_RESOURCE_NOT_FOUND: 8503,
  /**
   * General CompanionAds error.
   */
  GENERAL_COMPANION_ADS_ERROR: 8600,
  /**
   * Unable to display companion because creative dimensions do not fit within the companion display area (in other words, space was not available).
   */
  COMPANION_DIMENSIONS_NOT_FIT: 8601,
  /**
   * Unable to display Required Companion.
   */
  COMPANION_CANNOT_BE_DISPLAY: 8602,
  /**
   * Unable to fetch CompanionAds/Companion resource.
   */
  COMPANION_CANNOT_BE_FETCHED: 8603,
  /**
   * Could not find Companion resource with supported type.
   */
  COMPANION_TYPE_NOT_FOUND: 8604,
  /**
   * This error is usually fired when the error does not match the criteria of any of the other errors.
   */
  AD_UNDEFINED_ERROR: 8900,
  /**
   * General VPAID error.
   */
  GENERAL_VPAID_ERROR: 8901
};

export {AdErrorCode};
