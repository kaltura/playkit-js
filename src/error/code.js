//@flow
type CodeType = { [code: string]: number };

const Code: CodeType = {
  /**
   * A network request was made using an unsupported URI scheme.
   */
  'UNSUPPORTED_SCHEME': 1000,

  /**
   * An HTTP network request returned an HTTP status that indicated a failure.
   */
  'BAD_HTTP_STATUS': 1001,

  /**
   * An HTTP network request failed with an error, but not from the server.
   */
  'HTTP_ERROR': 1002,

  /**
   * A network request timed out.
   */
  'TIMEOUT': 1003,

  /**
   * A network request was made with a malformed data URI.
   */
  'MALFORMED_DATA_URI': 1004,

  /**
   * A network request was made with a data URI using an unknown encoding.
   */
  'UNKNOWN_DATA_URI_ENCODING': 1005,

  /**
   * A request filter threw an error.
   */
  'REQUEST_FILTER_ERROR': 1006,

  /**
   * A response filter threw an error.
   */
  'RESPONSE_FILTER_ERROR': 1007,

  /** The text parser failed to parse a text stream due to an invalid header. */
  'INVALID_TEXT_HEADER': 2000,

  /** The text parser failed to parse a text stream due to an invalid cue. */
  'INVALID_TEXT_CUE': 2001,

  /**
   * Was unable to detect the encoding of the response text.  Suggest adding
   * byte-order-markings to the response data.
   */
  'UNABLE_TO_DETECT_ENCODING': 2003,

  /** The response data contains invalid Unicode character encoding. */
  'BAD_ENCODING': 2004,

  /**
   * The XML parser failed to parse an xml stream, or the XML lacks mandatory
   * elements for TTML.
   * in the data is the URI associated with the XML.
   */
  'INVALID_XML': 2005,

  /**
   * MP4 segment does not contain TTML.
   */
  'INVALID_MP4_TTML': 2007,

  /**
   * MP4 segment does not contain VTT.
   */
  'INVALID_MP4_VTT': 2008,

  /**
   *  VTT module issue, see the date for more details
   */
  "UNABLE_TO_CREATE_TEXT_CUE": 2009,
  /**
   * error parsing the dash adapter error (for instance, could not parse an error shaka raised)
   */
  "DASH_ADAPTER_ERROR_PARSE_ISSUE": 2010,


  /**
   * Some component tried to read past the end of a buffer.  The segment index,
   * init segment, or PSSH may be malformed.
   */
  'BUFFER_READ_OUT_OF_BOUNDS': 3000,

  /**
   * Some component tried to parse an integer that was too large to fit in a
   * JavaScript number without rounding error.  JavaScript can only natively
   * represent integers up to 53 bits.
   */
  'JS_INTEGER_OVERFLOW': 3001,

  /**
   * The EBML parser used to parse the WebM container encountered an integer,
   * ID, or other field larger than the maximum supported by the parser.
   */
  'EBML_OVERFLOW': 3002,

  /**
   * The EBML parser used to parse the WebM container encountered a floating-
   * point field of a size not supported by the parser.
   */
  'EBML_BAD_FLOATING_POINT_SIZE': 3003,

  /**
   * The MP4 SIDX parser found the wrong box type.
   * Either the segment index range is incorrect or the data is corrupt.
   */
  'MP4_SIDX_WRONG_BOX_TYPE': 3004,

  /**
   * The MP4 SIDX parser encountered an invalid timescale.
   * The segment index data may be corrupt.
   */
  'MP4_SIDX_INVALID_TIMESCALE': 3005,

  /** The MP4 SIDX parser encountered a type of SIDX that is not supported. */
  'MP4_SIDX_TYPE_NOT_SUPPORTED': 3006,

  /**
   * The WebM Cues parser was unable to locate the Cues element.
   * The segment index data may be corrupt.
   */
  'WEBM_CUES_ELEMENT_MISSING': 3007,

  /**
   * The WebM header parser was unable to locate the Ebml element.
   * The init segment data may be corrupt.
   */
  'WEBM_EBML_HEADER_ELEMENT_MISSING': 3008,

  /**
   * The WebM header parser was unable to locate the Segment element.
   * The init segment data may be corrupt.
   */
  'WEBM_SEGMENT_ELEMENT_MISSING': 3009,

  /**
   * The WebM header parser was unable to locate the Info element.
   * The init segment data may be corrupt.
   */
  'WEBM_INFO_ELEMENT_MISSING': 3010,

  /**
   * The WebM header parser was unable to locate the Duration element.
   * The init segment data may be corrupt or may have been incorrectly encoded.
   * Shaka requires a duration in WebM DASH content.
   */
  'WEBM_DURATION_ELEMENT_MISSING': 3011,

  /**
   * The WebM Cues parser was unable to locate the Cue Track Positions element.
   * The segment index data may be corrupt.
   */
  'WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING': 3012,

  /**
   * The WebM Cues parser was unable to locate the Cue Time element.
   * The segment index data may be corrupt.
   */
  'WEBM_CUE_TIME_ELEMENT_MISSING': 3013,

  /**
   * A MediaSource operation failed.
   * a MediaError code from the video element.
   */
  'MEDIA_SOURCE_OPERATION_FAILED': 3014,

  /**
   * A MediaSource operation threw an exception.
   */
  'MEDIA_SOURCE_OPERATION_THREW': 3015,

  /**
   * The video element reported an error.
   * - error.data[0] is a MediaError code.js from the video element.
   * - On Edge & IE, error.data[1] is a Microsoft extended error code.js in hex.
   * - On Chrome, error.data[2] is a string with details on the error.
   */
  'VIDEO_ERROR': 3016,

  /**
   * A MediaSource operation threw QuotaExceededError and recovery failed. The
   * content cannot be played correctly because the segments are too large for
   * the browser/platform. This may occur when attempting to play very high
   * quality, very high bitrate content on low-end devices.
   */
  'QUOTA_EXCEEDED_ERROR': 3017,

  /**
   * a media error from hlsjs adapter
   */
  'HLS_FATAL_MEDIA_ERROR': 3018,

  /**
   * HLSJS fragment parsing issue
   */
  'HLS_FRAG_PARSING_ERROR': 3019,

  /**
   * HLSJS buffer append issue
   */
  'HLS_BUFFER_APPEND_ISSUE': 3020,
  /**
   * HLSJS buffer appending error
   */
  'HLS_BUFFER_APPENDING_ISSUE': 3021,
  /**
   * Native adapter error, more info in the data part
   */
  'NATIVE_ADAPTER_LOAD_FAILED': 3022,
  /**
   * HLSjs buffer stalled issue
   */
  'HLS_BUFFER_STALLED_ERROR': 3023,
  /**
   * The Player was unable to guess the manifest type based on file extension
   * or MIME type.  To fix, try one of the following:
   * Rename the manifest so that the URI ends in a well-known extension.
   * Configure the server to send a recognizable Content-Type header.
   * Configure the server to accept a HEAD request for the manifest.
   */
  'UNABLE_TO_GUESS_MANIFEST_TYPE': 4000,

  /** The DASH Manifest contained invalid XML markup. */
  'DASH_INVALID_XML': 4001,

  /**
   * The DASH Manifest contained a Representation with insufficient segment
   * information.
   */
  'DASH_NO_SEGMENT_INFO': 4002,

  /** The DASH Manifest contained an AdaptationSet with no Representations. */
  'DASH_EMPTY_ADAPTATION_SET': 4003,

  /** The DASH Manifest contained an Period with no AdaptationSets. */
  'DASH_EMPTY_PERIOD': 4004,

  /**
   * The DASH Manifest does not specify an init segment with a WebM container.
   */
  'DASH_WEBM_MISSING_INIT': 4005,

  /** The DASH Manifest contained an unsupported container format. */
  'DASH_UNSUPPORTED_CONTAINER': 4006,

  /** The embedded PSSH data has invalid encoding. */
  'DASH_PSSH_BAD_ENCODING': 4007,

  /**
   * There is an AdaptationSet whose Representations do not have any common
   * key-systems.
   */
  'DASH_NO_COMMON_KEY_SYSTEM': 4008,

  /** Having multiple key IDs per Representation is not supported. */
  'DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED': 4009,

  /** The DASH Manifest specifies conflicting key IDs. */
  'DASH_CONFLICTING_KEY_IDS': 4010,

  /**
   * The manifest contains a period with no playable streams.
   * Either the period was originally empty, or the streams within cannot be
   * played on this browser or platform.
   */
  'UNPLAYABLE_PERIOD': 4011,

  /**
   * There exist some streams that could be decoded, but restrictions imposed
   * by the application or the key system prevent us from playing.  This may
   * happen under the following conditions:
   * The application has given restrictions to the Player that restrict
   * at least one content type completely (e.g. no playable audio),
   * The key system has imposed output restrictions that cannot be met
   * (such as HDCP) and there are no unrestricted alternatives.
   */
  'RESTRICTIONS_CANNOT_BE_MET': 4012,

  /**
   * No valid periods were found in the manifest.  Please check that your
   * manifest is correct and free of typos.
   */
  'NO_PERIODS': 4014,

  /**
   * HLS playlist doesn't start with a mandory #EXTM3U tag.
   */
  'HLS_PLAYLIST_HEADER_MISSING': 4015,

  /**
   * HLS tag has an invalid name that doesn't start with '#EXT'
   */
  'INVALID_HLS_TAG': 4016,

  /**
   * HLS playlist has both Master and Media/Segment tags.
   */
  'HLS_INVALID_PLAYLIST_HIERARCHY': 4017,

  /**
   * A Representation has an id that is the same as another Representation in
   * the same Period.  This makes manifest updates impossible since we cannot
   * map the updated Representation to the old one.
   */
  'DASH_DUPLICATE_REPRESENTATION_ID': 4018,

  /**
   * HLS manifest has several #EXT-X-MAP tags. We can only
   * support one at the moment.
   */
  'HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND': 4020,

  /**
   * HLS parser was unable to guess mime type of a stream.
   */
  'HLS_COULD_NOT_GUESS_MIME_TYPE': 4021,

  /**
   * No Master Playlist has been provided. Master playlist provides
   * vital information about the streams (like codecs) that is
   * required for MediaSource. We don't support directly providing
   * a Media Playlist.
   */
  'HLS_MASTER_PLAYLIST_NOT_PROVIDED': 4022,

  /**
   * One of the required attributes was not provided.
   * HLS manifest is invalid.
   */
  'HLS_REQUIRED_ATTRIBUTE_MISSING': 4023,

  /**
   * One of the required tags was not provided.
   * HLS manifest is invalid.
   */
  'HLS_REQUIRED_TAG_MISSING': 4024,

  /**
   * HLS parser was unable to guess codecs of a stream.
   */
  'HLS_COULD_NOT_GUESS_CODECS': 4025,

  /**
   * HLS parser has encountered encrypted content with unsupported
   * KEYFORMAT attributes.
   */
  'HLS_KEYFORMATS_NOT_SUPPORTED': 4026,

  /**
   * The manifest parser only supports xlink links with
   * xlink:actuate="onLoad".
   */
  'DASH_UNSUPPORTED_XLINK_ACTUATE': 4027,

  /**
   * The manifest parser has hit its depth limit on
   * xlink link chains.
   */
  'DASH_XLINK_DEPTH_LIMIT': 4028,

  /**
   * HLS parser encountered a live playlist.
   */
  'HLS_LIVE_CONTENT_NOT_SUPPORTED': 4029,

  /**
   * HLSJS cannot parse error
   */
  'HLSJS_CANNOT_PARSE': 4030,

  /**
   * The StreamingEngine called onChooseStreams() but the callback receiver
   * did not return the correct number or type of Streams.
   *
   * This can happen when there is multi-Period content where one Period is
   * video+audio and another is video-only or audio-only.  We don't support this
   * case because it is incompatible with MSE.  When the browser reaches the
   * transition, it will pause, waiting for the audio stream.
   */
  'INVALID_STREAMS_CHOSEN': 5005,


  /**
   * The manifest indicated protected content, but the manifest parser was
   * unable to determine what key systems should be used.
   */
  'NO_RECOGNIZED_KEY_SYSTEMS': 6000,

  /**
   * None of the requested key system configurations are available.  This may
   * happen under the following conditions:
   *  The key system is not supported,
   *  The key system does not support the features requested (e.g.
   *        persistent state),
   *  A user prompt was shown and the user denied access,
   *   The key system is not available from unsecure contexts. (ie.
   * requires HTTPS) See https://goo.gl/EEhZqT.
   */
  'REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE': 6001,

  /**
   * The browser found one of the requested key systems, but it failed to
   * create an instance of the CDM for some unknown reason.
   */
  'FAILED_TO_CREATE_CDM': 6002,

  /**
   * The browser found one of the requested key systems and created an instance
   * of the CDM, but it failed to attach the CDM to the video for some unknown
   * reason.
   */
  'FAILED_TO_ATTACH_TO_VIDEO': 6003,

  /**
   * The CDM rejected the server certificate supplied by the application.
   * The certificate may be malformed or in an unsupported format.
   */
  'INVALID_SERVER_CERTIFICATE': 6004,

  /**
   * The CDM refused to create a session for some unknown reason.
   */
  'FAILED_TO_CREATE_SESSION': 6005,

  /**
   * The CDM was unable to generate a license request for the init data it was
   * given.  The init data may be malformed or in an unsupported format.
   */
  'FAILED_TO_GENERATE_LICENSE_REQUEST': 6006,

  /**
   * The license request failed.  This could be a timeout, a network failure, or
   * a rejection by the server.
   */
  'LICENSE_REQUEST_FAILED': 6007,

  /**
   * The license response was rejected by the CDM.  The server's response may be
   * invalid or malformed for this CDM.
   */
  'LICENSE_RESPONSE_REJECTED': 6008,

  /**
   * The manifest does not specify any DRM info, but the content is encrypted.
   * Either the manifest or the manifest parser are broken.
   */
  'ENCRYPTED_CONTENT_WITHOUT_DRM_INFO': 6010,

  /**
   * No license server was given for the key system signaled by the manifest.
   * A license server URI is required for every key system.
   */
  'NO_LICENSE_SERVER_GIVEN': 6012,

  /**
   * A required offline session was removed.  The content is not playable.
   */
  'OFFLINE_SESSION_REMOVED': 6013,

  /**
   * The license has expired.  This is triggered when playback is stalled on a
   * 'waitingforkeys' event and there are any expired keys in the key status map
   * of any active session.
   */
  'EXPIRED': 6014,
  /**
   * DRM
   */
  "BAD_FAIRPLAY_RESPONSE": 6015,
  /**
   * DRM
   */
  "COULD_NOT_CREATE_MEDIA_KEYS": 6016,
  /**
   * DRM
   */
  "COULD_NOT_CREATE_KEY_SESSION": 6017,

  /**
   * The call to Player.load() was interrupted by a call to Player.unload()
   * or another call to Player.load().
   */
  'LOAD_INTERRUPTED': 7000,
  /**
   * HLSJS levelSwitchError - bitrate switch issue
   */
  'BITRATE_SWITCH_ISSUE': 7001,
  /**
   * The call to Player.load() failed. see other data for more details.
   */
  'LOAD_FAILED': 7002,
  /**
   * Build error. unregistered plugin
   */
  'RUNTIME_ERROR_NOT_REGISTERED_PLUGIN': 7003,
  /**
   * Build error. Unimplemnted method
   */
  'RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED': 7004,
  /**
   * Build error. not a valid handler
   */
  'RUNTIME_ERROR_NOT_VALID_HANDLER': 7005,
  /**
   * When the play API called without any source
   */
  'NO_SOURCE_PROVIDED': 7006,

  /**
   * The Cast API is unavailable.  This may be because of one of the following:
   * - The browser may not have Cast support
   * - The browser may be missing a necessary Cast extension
   * - The Cast sender library may not be loaded in your app
   */
  'CAST_API_UNAVAILABLE': 8000,

  /**
   * No cast receivers are available at this time.
   */
  'NO_CAST_RECEIVERS': 8001,

  /**
   * The library is already casting.
   */
  'ALREADY_CASTING': 8002,

  /**
   * A Cast SDK error that we did not explicitly plan for has occurred.
   * Check data[0] and refer to the Cast SDK documentation for details.
   */
  'UNEXPECTED_CAST_ERROR': 8003,

  /**
   * The cast operation was canceled by the user.
   */
  'CAST_CANCELED_BY_USER': 8004,

  /**
   * The cast connection timed out.
   */
  'CAST_CONNECTION_TIMED_OUT': 8005,

  /**
   * The requested receiver app ID does not exist or is unavailable.
   * Check the requested app ID for typos.
   */
  'CAST_RECEIVER_APP_UNAVAILABLE': 8006,


  /**
   * Offline storage is not supported on this browser; it is required for
   * offline support.
   */
  'STORAGE_NOT_SUPPORTED': 9000,

  /**
   * An unknown error occurred in the IndexedDB.
   * On Firefox, one common source for UnknownError calls is reverting
   * Firefox to an old version. This makes the indexedDB storage inaccessible
   * for older versions. The only way to fix this is to delete the storage
   * data in your profile. See https://goo.gl/eKVPPe.
   */
  'INDEXED_DB_ERROR': 9001,

  /**
   * The operation was aborted.  For example, by a call to destroy().
   */
  'OPERATION_ABORTED': 9002,

  /**
   * The specified item was not found in the IndexedDB.
   */
  'REQUESTED_ITEM_NOT_FOUND': 9003,

  /**
   * A network request was made with a malformed offline URI.
   */
  'MALFORMED_OFFLINE_URI': 9004,

  /**
   * The specified content is live or in-progress.
   */
  'CANNOT_STORE_LIVE_OFFLINE': 9005,

  /**
   * There is already a store operation in-progress, wait until it completes
   * before starting another.
   */
  'STORE_ALREADY_IN_PROGRESS': 9006,

  /**
   * The specified manifest is encrypted but does not specify any init data.
   * Without init data specified in the manifest, the content will not be
   * playable offline.
   */
  'NO_INIT_DATA_FOR_OFFLINE': 9007,

  /**
   * shaka.offline.Storage was constructed with a Player proxy instead of a
   * local player instance.  To fix this, use Player directly with Storage
   * instead of the results of CastProxy.prototype.getPlayer().
   */
  'LOCAL_PLAYER_INSTANCE_REQUIRED': 9008,

  /**
   * When the manifest contains no period playable streams, it means the
   * manifest is unsupported by the browser.
   */
  'CONTENT_UNSUPPORTED_BY_BROWSER': 9009,

  /**
   * VR plugin is not supported.
   */
  'VR_NOT_SUPPORTED': 11000

};

export {Code}
export type {CodeType}
