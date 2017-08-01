(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Playkit", [], factory);
	else if(typeof exports === 'object')
		exports["Playkit"] = factory();
	else
		root["Playkit"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOG_LEVEL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsLogger = __webpack_require__(20);

var JsLogger = _interopRequireWildcard(_jsLogger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LOG_LEVEL = {
  "DEBUG": JsLogger.DEBUG,
  "INFO": JsLogger.INFO,
  "TIME": JsLogger.TIME,
  "WARN": JsLogger.WARN,
  "ERROR": JsLogger.ERROR,
  "OFF": JsLogger.OFF
};

var LoggerFactory = function () {
  function LoggerFactory(options) {
    _classCallCheck(this, LoggerFactory);

    JsLogger.useDefaults(options || {});
  }

  _createClass(LoggerFactory, [{
    key: "getLogger",
    value: function getLogger(name) {
      if (!name) {
        return JsLogger;
      }
      return JsLogger.get(name);
    }
  }]);

  return LoggerFactory;
}();

var lf = new LoggerFactory({ defaultLevel: JsLogger.DEBUG });

exports.default = lf;
exports.LOG_LEVEL = LOG_LEVEL;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Create an Event work-alike object based on the dictionary.
 * The event should contain all of the same properties from the dict.
 * @namespace FakeEvent
 * @memberof Classes
 * @class FakeEvent
 */
var FakeEvent = function () {
  /**
   * Non-standard property read by FakeEventTarget to stop processing listeners.
   * @type {boolean}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/

  /**
   * @type {EventTarget}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/

  /**
   * @const {string}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/

  /**
   * @const {boolean}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/

  /**
   * @const {boolean}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/
  function FakeEvent(type, payload) {
    _classCallCheck(this, FakeEvent);

    this.bubbles = false;
    this.cancelable = false;
    this.defaultPrevented = false;
    this.timeStamp = window.performance ? window.performance.now() : Date.now();
    this.type = type;
    this.isTrusted = false;
    this.currentTarget = null;
    this.target = null;
    this.stopped = false;
    this.payload = payload;
  }

  /**
   * Does nothing, since FakeEvents have no default.  Provided for compatibility
   * with native Events.
   * @override
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/

  /**
   * @type {any}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/

  /**
   * @type {EventTarget}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/

  /**
   * @const {boolean}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/

  /**
   * @const {number}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/

  /**
   * @const {boolean}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/


  _createClass(FakeEvent, [{
    key: "preventDefault",
    value: function preventDefault() {}

    /**
     * Stops processing event listeners for this event.  Provided for compatibility
     * with native Events.
     * @override
     * @public
     * @instance
     * @memberof Classes.FakeEvent
     **/

  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this.stopped = true;
    }

    /**
     * Does nothing, since FakeEvents do not bubble.  Provided for compatibility
     * with native Events.
     * @override
     * @public
     * @instance
     * @memberof Classes.FakeEvent
     **/

  }, {
    key: "stopPropagation",
    value: function stopPropagation() {}
  }]);

  return FakeEvent;
}();

exports.default = FakeEvent;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @namespace Track
 * @abstract Track
 * @memberof Classes
 */
var Track = function () {
  _createClass(Track, [{
    key: "id",


    /**
     * The id of the track.
     * @public
     * @returns {?string} - The track id.
     * @memberof Classes.Track
     * @instance
     */
    get: function get() {
      return this._id;
    }

    /**
     * The active mode of the track.
     * @public
     * @returns {boolean} - The active mode of the track.
     * @memberof Classes.Track
     * @instance
     */

  }, {
    key: "active",
    get: function get() {
      return this._active;
    }

    /**
     * @public
     * @param {boolean} value - Whether the track is active or not.
     * @memberof Classes.Track
     * @instance
     */
    ,
    set: function set(value) {
      this._active = value;
    }

    /**
     * The label of the track.
     * @public
     * @returns {string} - The label of the track.
     * @memberof Classes.Track
     * @instance
     */

  }, {
    key: "label",
    get: function get() {
      return this._label;
    }

    /**
     * The language of the track.
     * @public
     * @returns {string} - The language of the track.
     * @memberof Classes.Track
     * @instance
     */

  }, {
    key: "language",
    get: function get() {
      return this._language;
    }

    /**
     * The index of the track.
     * @public
     * @returns {number} - The index of the track.
     * @memberof Classes.Track
     * @instance
     */

  }, {
    key: "index",
    get: function get() {
      return this._index;
    }
  }]);

  function Track() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Track);

    this._id = settings.id;
    this._active = settings.active;
    this._label = settings.label;
    this._language = settings.language;
    this._index = settings.index;
  }

  return Track;
}();

exports.default = Track;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiMap = __webpack_require__(10);

var _multiMap2 = _interopRequireDefault(_multiMap);

var _fakeEvent = __webpack_require__(1);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates a new EventManager.
 * An EventManager maintains a collection of "event bindings" between event targets and event listeners.
 * @namespace EventManager
 * @memberof Classes
 * @class EventManager
 **/
var EventManager = function () {
  function EventManager() {
    _classCallCheck(this, EventManager);

    this._bindingMap = new _multiMap2.default();
  }

  /**
   * Detaches all event listeners.
   * @public
   * @instance
   * @memberof Classes.EventManager
   * @returns {Promise<*>}
   */


  _createClass(EventManager, [{
    key: 'destroy',
    value: function destroy() {
      this.removeAll();
      this._bindingMap = null;
      return Promise.resolve();
    }

    /**
     * Attaches an event listener to an event target.
     * @param {EventTarget} target - The event target.
     * @param {string} type - The event type.
     * @param {EventManager.ListenerType} listener - The event listener.
     * @returns {void}
     * @public
     * @instance
     * @memberof Classes.EventManager
     */

  }, {
    key: 'listen',
    value: function listen(target, type, listener) {
      var binding = new Binding(target, type, listener);
      if (this._bindingMap) {
        this._bindingMap.push(type, binding);
      }
    }

    /**
     * Detaches an event listener from an event target.
     * @param {EventTarget} target - The event target.
     * @param {string} type - The event type.
     * @returns {void}
     * @public
     * @instance
     * @memberof Classes.EventManager
     */

  }, {
    key: 'unlisten',
    value: function unlisten(target, type) {
      if (this._bindingMap) {
        var list = this._bindingMap.get(type);

        for (var i = 0; i < list.length; ++i) {
          var binding = list[i];

          if (binding.target == target) {
            binding.unlisten();
            if (this._bindingMap) {
              this._bindingMap.remove(type, binding);
            }
          }
        }
      }
    }

    /**
     * Detaches all event listeners from all targets.
     * @returns {void}
     * @public
     * @instance
     * @memberof Classes.EventManager
     */

  }, {
    key: 'removeAll',
    value: function removeAll() {
      if (this._bindingMap) {
        var listeners = this._bindingMap.getAll();

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var listener = _step.value;

            listener.unlisten();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (this._bindingMap) {
          this._bindingMap.clear();
        }
      }
    }
  }]);

  return EventManager;
}();

var Binding = function () {
  function Binding(target, type, listener) {
    _classCallCheck(this, Binding);

    this.target = target;
    this.type = type;
    this.listener = listener;
    this.target.addEventListener(type, listener, false);
  }

  _createClass(Binding, [{
    key: 'unlisten',
    value: function unlisten() {
      if (!this.target) {
        return;
      }
      this.target.removeEventListener(this.type, this.listener, false);
      this.target = null;
      this.listener = null;
    }
  }]);

  return Binding;
}();

exports.default = EventManager;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * @namespace EventType
 * @memberof Enums
 * @typedef {EventType}
 */
var EventType = exports.EventType = {
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @namespace Number
 * @memberof Utils
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _Number = {
  /**
   * @param {number} n - A certain number.
   * @returns {boolean} - Whether the input is a number.
   * @public
   * @memberof Utils.Number
   */
  isNumber: function isNumber(n) {
    return Number(n) === n;
  },
  /**
   * @param {number} n - A certain number.
   * @returns {boolean} - Whether the input is an integer.
   * @public
   * @memberof Utils.Number
   */
  isInt: function isInt(n) {
    return this.isNumber(n) && n % 1 === 0;
  },
  /**
   * @param {number} n - A certain number.
   * @returns {boolean} - Whether the input is a float.
   * @public
   * @memberof Utils.Number
   */
  isFloat: function isFloat(n) {
    return this.isNumber(n) && n % 1 !== 0;
  }
};
/**
 * @namespace String
 * @memberof Utils
 */
var _String = {
  /**
   * Uppercase the first letter of a string.
   * @param  {String} string - String to be uppercased.
   * @return {String} - The uppercased string.
   * @public
   * @memberof Utils.String
   */
  capitlize: function capitlize(string) {
    if (typeof string !== 'string') {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  /**
   * Checks if string a ends with string b.
   * @param {string} string - Certain string.
   * @param {string} searchString - Certain string.
   * @returns {boolean} - Whether the string: string is ending with string: searchString.
   * @public
   * @memberof Utils.String
   */
  endsWith: function endsWith(string, searchString) {
    if (typeof string !== 'string' || typeof searchString !== 'string') {
      return false;
    }
    return string.indexOf(searchString, string.length - searchString.length) != -1;
  }
};
/**
 * @namespace Object
 * @memberof Utils
 */
var _Object = {
  /**
   * Merged (not deep) one or more objects.
   * @param {Array<Object>} objects - The objects to merge.
   * @returns {Object} - The merged object.
   * @public
   * @memberof Utils.Object
   */
  merge: function merge(objects) {
    var target = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = objects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var obj = _step.value;

        Object.assign(target, obj);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return target;
  },
  /**
   * Checks if a certain item is an object.
   * @param {any} item - The item to check.
   * @returns {boolean} - Whether the item is an object.
   * @public
   * @memberof Utils.Object
   */
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item);
  },
  /**
   * Merged deep one ore more objects.
   * @param {any} target - The target object.
   * @param {any} sources - The objects to merge.
   * @returns {Object} - The merged object.
   * @public
   * @memberof Utils.Object
   */
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) {
      return target;
    }
    var source = sources.shift();
    if (this.isObject(target) && this.isObject(source)) {
      for (var key in source) {
        if (this.isObject(source[key])) {
          if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
          this.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return this.mergeDeep.apply(this, [target].concat(_toConsumableArray(sources)));
  },
  /**
   * Copy deep a data object.
   * @param {any} data - The data to copy.
   * @returns {any} - The cloned data.
   * @public
   * @memberof Utils.Object
   */
  copyDeep: function copyDeep(data) {
    var _this = this;

    var node = void 0;
    if (Array.isArray(data)) {
      node = data.length > 0 ? data.slice(0) : [];
      node.forEach(function (e, i) {
        if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) === "object" && e !== {} || Array.isArray(e) && e.length > 0) {
          node[i] = _this.copyDeep(e);
        }
      });
    } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === "object") {
      node = Object.assign({}, data);
      Object.keys(node).forEach(function (key) {
        if (_typeof(node[key]) === "object" && node[key] !== {} || Array.isArray(node[key]) && node[key].length > 0) {
          node[key] = _this.copyDeep(node[key]);
        }
      });
    } else {
      node = data;
    }
    return node;
  },
  /**
   * Checks if an object is an empty object.
   * @param {Object} obj - The object to check
   * @returns {boolean} - Whether the object is empty.
   * @public
   * @memberof Utils.Object
   */isEmptyObject: function isEmptyObject(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  },
  /**
   * Gets the value of a nested object property.
   * @param {Object} obj - The object to check.
   * @param {string} propertyPath - The path to check.
   * @returns {boolean} - The value in this path.
   * @public
   * @memberof Utils.Object
   */
  getPropertyPath: function getPropertyPath(obj, propertyPath) {
    return propertyPath.split(".").reduce(function (o, x) {
      return typeof o === "undefined" || o === null ? o : o[x];
    }, obj);
  },
  /**
   * Checks if an object has nested property.
   * @param {Object} obj - The object to check.
   * @param {string} propertyPath - The path to check.
   * @returns {boolean} - Whether the property exists in the given path.
   * @public
   * @memberof Utils.Object
   */
  hasPropertyPath: function hasPropertyPath(obj, propertyPath) {
    if (!propertyPath) {
      return false;
    }
    var properties = propertyPath.split('.');
    for (var i = 0; i < properties.length; i++) {
      var prop = properties[i];
      if (!obj || !obj.hasOwnProperty(prop)) {
        return false;
      } else {
        obj = obj[prop];
      }
    }
    return true;
  },
  /**
   * Creates deferred promise which can resolved/rejected outside the promise scope.
   * @returns {DeferredPromise} - The extended promise with resolve and reject properties.
   * @public
   * @memberof Utils.Object
   */
  defer: function defer() {
    var res = void 0,
        rej = void 0;
    // $FlowFixMe
    var promise = new Promise(function (resolve, reject) {
      res = resolve;
      rej = reject;
    });
    // $FlowFixMe
    promise.resolve = res;
    // $FlowFixMe
    promise.reject = rej;
    return promise;
  },
  /**
   * Binds an handler to a desired context.
   * @param {any} thisObj - The handler context.
   * @param {Function} fn - The handler.
   * @returns {Function} - The new bound function.
   * @public
   * @memberof Utils.Object
   */
  bind: function bind(thisObj, fn) {
    return function () {
      fn.apply(thisObj, arguments);
    };
  }
};
/**
 * @namespace Generator
 * @memberof Utils
 */
var _Generator = {
  /**
   * Generates unique id.
   * @param {number} length - The wanted length of the id.
   * @returns {string} - The generated id.
   * @public
   * @memberof Utils.Generator
   */
  uniqueId: function uniqueId(length) {
    var from = 2;
    var to = from + (!length || length < 0 ? 0 : length - 2);
    return '_' + Math.random().toString(36).substr(from, to);
  },
  /**
   * Generates GUID.
   * @return {string} - The generated GUID.
   * @private
   * @public
   * @memberof Utils.Generator
   */
  guid: function guid() {
    var S4 = function S4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
  }
};
/**
 * @namespace Dom
 * @memberof Utils
 */
var _Dom = {
  /**
   * Apends a node as the last child of a node.
   * @param {Element} parent - The parent node.
   * @param {Element} child - The child node.
   * @returns {void}
   * @public
   * @memberof Utils.Dom
   */
  appendChild: function appendChild(parent, child) {
    if (parent && child && parent.appendChild) {
      parent.appendChild(child);
    }
  },

  /**
   * Returns a reference to an element by its id.
   * @param {string} id - The desired id.
   * @returns {Element} - The element with the desired id.
   * @public
   * @memberof Utils.Dom
   */
  getElementById: function getElementById(id) {
    return document.getElementById(id);
  },

  /**
   * Creates the HTML element specified by tag name.
   * @param {string} tagName - The tag name.
   * @returns {Element} - The created element.
   * @public
   * @memberof Utils.Dom
   */
  createElement: function createElement(tagName) {
    return document.createElement(tagName);
  },

  /**
   * Loads script asynchronously.
   * @param {string} url - The url to load.
   * @return {Promise} - The loading promise.
   * @public
   * @memberof Utils.Dom
   */
  loadScriptAsync: function loadScriptAsync(url) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      var r = false,
          t = document.getElementsByTagName("script")[0],
          s = _this2.createElement("script");
      s.type = "text/javascript";
      s.src = url;
      s.async = true;
      s.onload = s.onreadystatechange = function () {
        if (!r && (!this.readyState || this.readyState === "complete")) {
          r = true;
          resolve(this);
        }
      };
      s.onerror = s.onabort = reject;
      if (t && t.parentNode) {
        t.parentNode.insertBefore(s, t);
      }
    });
  }
};
/**
 * @namespace Http
 * @memberof Utils
 */
var _Http = {
  /**
   * Execute xhr request.
   * @param {string} url - The url.
   * @param {any} params - Custom params.
   * @param {string} method - The method.
   * @param {Map<string, string>} headers - Custom headers.
   * @returns {Promise} - The request promise.
   * @public
   * @memberof Utils.Http
   */
  execute: function execute(url, params) {
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "POST";
    var headers = arguments[3];

    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            var jsonResponse = JSON.parse(request.responseText);
            resolve(jsonResponse);
          } else {
            reject(request.responseText);
          }
        }
      };
      request.open(method, url);
      if (headers) {
        headers.forEach(function (value, key) {
          request.setRequestHeader(key, value);
        });
      }
      request.send(params);
    });
  }
};

exports.Number = _Number;
exports.String = _String;
exports.Object = _Object;
exports.Generator = _Generator;
exports.Dom = _Dom;
exports.Http = _Http;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _track = __webpack_require__(2);

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @namespace VideoTrack
 * @memberof Classes
 * @extends Track
 * @class VideoTrack
 */
var VideoTrack = function (_Track) {
  _inherits(VideoTrack, _Track);

  _createClass(VideoTrack, [{
    key: 'bandwidth',


    /**
     * The bandwidth of the video track.
     * @public
     * @returns {number} - The bandwidth of the video track.
     * @memberof Classes.VideoTrack
     * @instance
     */
    get: function get() {
      return this._bandwidth;
    }

    /**
     * The width of the video track
     * @public
     * @returns {number} - The width of the video track.
     * @memberof Classes.VideoTrack
     * @instance
     */

  }, {
    key: 'width',
    get: function get() {
      return this._width;
    }

    /**
     * The height of the video track.
     * @public
     * @returns {number} - The height of the video track.
     * @memberof Classes.VideoTrack
     * @instance
     */

  }, {
    key: 'height',
    get: function get() {
      return this._height;
    }
  }]);

  function VideoTrack() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, VideoTrack);

    var _this = _possibleConstructorReturn(this, (VideoTrack.__proto__ || Object.getPrototypeOf(VideoTrack)).call(this, settings));

    _this._bandwidth = settings.bandwidth;
    _this._width = settings.width;
    _this._height = settings.height;
    return _this;
  }

  return VideoTrack;
}(_track2.default);

exports.default = VideoTrack;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _track = __webpack_require__(2);

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @namespace AudioTrack
 * @memberof Classes
 * @extends {Track}
 * @param {Object} settings
 * @class AudioTrack
 */
var AudioTrack = function (_Track) {
  _inherits(AudioTrack, _Track);

  function AudioTrack() {
    _classCallCheck(this, AudioTrack);

    return _possibleConstructorReturn(this, (AudioTrack.__proto__ || Object.getPrototypeOf(AudioTrack)).apply(this, arguments));
  }

  return AudioTrack;
}(_track2.default);

exports.default = AudioTrack;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _track = __webpack_require__(2);

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @namespace TextTrack
 * @memberof Classes
 * @extends Track
 * @class TextTrack
 */
var TextTrack = function (_Track) {
  _inherits(TextTrack, _Track);

  _createClass(TextTrack, [{
    key: 'kind',


    /**
     * The kind of the text track: subtitles, captions or metadata.
     * @public
     * @returns {string} - The kind of the text track.
     * @memberof Classes.TextTrack
     * @instance
     */
    get: function get() {
      return this._kind;
    }
  }]);

  function TextTrack() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TextTrack);

    var _this = _possibleConstructorReturn(this, (TextTrack.__proto__ || Object.getPrototypeOf(TextTrack)).call(this, settings));

    _this._kind = settings.kind;
    return _this;
  }

  return TextTrack;
}(_track2.default);

exports.default = TextTrack;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventManager = __webpack_require__(3);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _fakeEvent = __webpack_require__(1);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _fakeEventTarget = __webpack_require__(11);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _eventType = __webpack_require__(4);

var _stateType = __webpack_require__(15);

var _util = __webpack_require__(5);

var Utils = _interopRequireWildcard(_util);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _html = __webpack_require__(21);

var _html2 = _interopRequireDefault(_html);

var _pluginManager = __webpack_require__(18);

var _pluginManager2 = _interopRequireDefault(_pluginManager);

var _basePlugin = __webpack_require__(13);

var _basePlugin2 = _interopRequireDefault(_basePlugin);

var _stateManager = __webpack_require__(24);

var _stateManager2 = _interopRequireDefault(_stateManager);

var _trackType = __webpack_require__(26);

var _track = __webpack_require__(2);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(6);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(7);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(8);

var _textTrack2 = _interopRequireDefault(_textTrack);

var _playbackMiddleware = __webpack_require__(27);

var _playbackMiddleware2 = _interopRequireDefault(_playbackMiddleware);

var _playerConfig = __webpack_require__(29);

var _playerConfig2 = _interopRequireDefault(_playerConfig);

var _uaParserJs = __webpack_require__(30);

var _uaParserJs2 = _interopRequireDefault(_uaParserJs);

__webpack_require__(32);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @namespace Player
 * @class Player
 * @memberof Classes
 */
var Player = function (_FakeEventTarget) {
  _inherits(Player, _FakeEventTarget);

  function Player(targetId, config) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

    _this._tracks = [];
    _this._config = {};
    _this._firstPlay = true;
    _this._stateManager = new _stateManager2.default(_this);
    _this._pluginManager = new _pluginManager2.default();
    _this._eventManager = new _eventManager2.default();
    _this._playbackMiddleware = new _playbackMiddleware2.default();
    _this._env = new _uaParserJs2.default().getResult();
    _this._createReadyPromise();
    _this._appendPlayerContainer(targetId);
    _this.configure(config);
    return _this;
  }

  /**
   * @param {Object} config
   * @returns {void}
   * @memberof Classes.Player
   * @instance
   * @public
   */


  _createClass(Player, [{
    key: 'configure',
    value: function configure(config) {
      var engine = this._engine;
      this._maybeResetPlayer(config);
      this._config = Utils.Object.mergeDeep(Utils.Object.isEmptyObject(this._config) ? Player._defaultConfig : this._config, config);
      if (this._selectEngine()) {
        this._appendEngineEl();
        this._attachMedia();
        this._maybeLoadPlugins(engine);
        this._handlePlaybackConfig();
      }
    }

    /**
     * @returns {void}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      if (this._engine) {
        this._engine.destroy();
      }
      this._eventManager.destroy();
      this._pluginManager.destroy();
      this._stateManager.destroy();
      this._config = {};
      this._tracks = [];
      this._readyPromise = null;
      this._firstPlay = true;
    }

    /**
     * @return {HTMLElement}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'getView',
    value: function getView() {
      return this._el;
    }

    /**
     * @function getTracks
     * @param {string | null} type
     * @returns {Array<Track>}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'getTracks',
    value: function getTracks(type) {
      return this._getTracksByType(type);
    }

    /**
     * @function getActiveTracks
     * @return {Object}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'getActiveTracks',
    value: function getActiveTracks() {
      return {
        video: this._getTracksByType(_trackType.TrackType.VIDEO).find(function (track) {
          return track.active;
        }),
        audio: this._getTracksByType(_trackType.TrackType.AUDIO).find(function (track) {
          return track.active;
        }),
        text: this._getTracksByType(_trackType.TrackType.TEXT).find(function (track) {
          return track.active;
        })
      };
    }

    /**
     * @function selectTrack
     * @param {Track} track
     * @returns {void}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'selectTrack',
    value: function selectTrack(track) {
      if (this._engine) {
        if (track instanceof _videoTrack2.default) {
          this._engine.selectVideoTrack(track);
        } else if (track instanceof _audioTrack2.default) {
          this._engine.selectAudioTrack(track);
        } else if (track instanceof _textTrack2.default) {
          this._engine.selectTextTrack(track);
        }
      }
    }

    /**
     * @function hideTextTrack
     * @returns {void}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'hideTextTrack',
    value: function hideTextTrack() {
      if (this._engine) {
        this._engine.hideTextTrack();
        this._getTracksByType(_trackType.TrackType.TEXT).map(function (track) {
          return track.active = false;
        });
      }
    }

    /**
     * @function enableAdaptiveBitrate
     * @returns {void}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      if (this._engine) {
        this._engine.enableAdaptiveBitrate();
      }
    }

    /**
     * @function isAdaptiveBitrateEnabled
     * @returns {boolean}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'isAdaptiveBitrateEnabled',
    value: function isAdaptiveBitrateEnabled() {
      if (this._engine) {
        return this._engine.isAdaptiveBitrateEnabled();
      }
      return false;
    }

    /**
     * @function getVideoElement
     * @returns {HTMLVideoElement}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'getVideoElement',
    value: function getVideoElement() {
      if (this._engine) {
        return this._engine.getVideoElement();
      }
    }

    /**
     * @function skipAd
     * @returns {void}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'skipAd',
    value: function skipAd() {
      var adsPlugin = this._pluginManager.get('ima');
      if (adsPlugin && typeof adsPlugin.skipAd === 'function') {
        adsPlugin.skipAd();
      }
    }

    /**
     * @function playAdNow
     * @param {string} adTagUrl
     * @returns {void}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'playAdNow',
    value: function playAdNow(adTagUrl) {
      var adsPlugin = this._pluginManager.get('ima');
      if (adsPlugin && typeof adsPlugin.playAdNow === 'function') {
        adsPlugin.playAdNow(adTagUrl);
      }
    }

    /**
     * @returns {Object}
     * @public
     * @readonly
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'ready',


    //  <editor-fold desc="Playback Interface">
    /**
     * @returns {Promise<*>}
     * @function ready
     * @memberof Classes.Player
     * @public
     * @instance
     */
    value: function ready() {
      return this._readyPromise ? this._readyPromise : Promise.resolve();
    }

    /**
     * @function load
     * @returns {void}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'load',
    value: function load() {
      var _this2 = this;

      if (this._engine) {
        var startTime = this._config.playback.startTime;
        this._engine.load(startTime).then(function (data) {
          _this2._tracks = data.tracks;
          _this2.dispatchEvent(new _fakeEvent2.default(_eventType.EventType.Player.TRACKS_CHANGED, { tracks: _this2._tracks }));
        }).catch(function (error) {
          _this2.dispatchEvent(new _fakeEvent2.default(_eventType.EventType.Html5.ERROR, error));
        });
      }
    }

    /**
     * @function play
     * @returns {void}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'play',
    value: function play() {
      if (this._engine) {
        this._playbackMiddleware.play(this._play.bind(this));
      }
    }

    /**
     * @function pause
     * @returns {void}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'pause',
    value: function pause() {
      if (this._engine) {
        this._playbackMiddleware.pause(this._pause.bind(this));
      }
    }

    /**
     * @param {number} to
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: '_play',
    value: function _play() {
      var _this3 = this;

      if (this._engine.src) {
        this._engine.play();
      } else {
        this.load();
        this.ready().then(function () {
          _this3._engine.play();
        });
      }
    }
  }, {
    key: '_pause',
    value: function _pause() {
      this._engine.pause();
    }
  }, {
    key: '_loadPlugins',
    value: function _loadPlugins() {
      var plugins = this._config.plugins;
      for (var name in plugins) {
        this._pluginManager.load(name, this, plugins[name]);
        var plugin = this._pluginManager.get(name);
        if (plugin && typeof plugin.getMiddlewareImpl === "function") {
          this._playbackMiddleware.use(plugin.getMiddlewareImpl());
        }
      }
    }
  }, {
    key: '_selectEngine',
    value: function _selectEngine() {
      if (this._config.sources && this._config.playback && this._config.playback.streamPriority) {
        return this._selectEngineByPriority();
      }
      return false;
    }
  }, {
    key: '_selectEngineByPriority',
    value: function _selectEngineByPriority() {
      var _this4 = this;

      var streamPriority = this._config.playback.streamPriority;
      var sources = this._config.sources;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var priority = _step.value;

          var engineId = typeof priority.engine === 'string' ? priority.engine.toLowerCase() : '';
          var format = typeof priority.format === 'string' ? priority.format.toLowerCase() : '';
          var engine = Player._engines.find(function (engine) {
            return engine.id === engineId;
          });
          if (engine) {
            var formatSources = sources[format];
            if (formatSources && formatSources.length > 0) {
              var source = formatSources[0];
              if (engine.canPlayType(source.mimetype)) {
                Player._logger.debug('Source selected: ', formatSources);
                _this4._loadEngine(engine, source);
                _this4.dispatchEvent(new _fakeEvent2.default(_eventType.EventType.Player.SOURCE_SELECTED, { selectedSource: formatSources }));
                return {
                  v: true
                };
              }
            }
          }
        };

        for (var _iterator = streamPriority[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ret = _loop();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      Player._logger.warn("No playable engines was found to play the given sources");
      return false;
    }
  }, {
    key: '_loadEngine',
    value: function _loadEngine(engine, source) {
      this._engine = engine.createEngine(source, this._config);
    }
  }, {
    key: '_attachMedia',
    value: function _attachMedia() {
      var _this5 = this;

      if (this._engine) {
        for (var html5Event in _eventType.EventType.Html5) {
          this._eventManager.listen(this._engine, _eventType.EventType.Html5[html5Event], function (event) {
            return _this5.dispatchEvent(event);
          });
        }
        this._eventManager.listen(this._engine, _eventType.EventType.Player.VIDEO_TRACK_CHANGED, function (event) {
          _this5._markActiveTrack(event.payload.selectedVideoTrack);
          return _this5.dispatchEvent(event);
        });
        this._eventManager.listen(this._engine, _eventType.EventType.Player.AUDIO_TRACK_CHANGED, function (event) {
          _this5._markActiveTrack(event.payload.selectedAudioTrack);
          return _this5.dispatchEvent(event);
        });
        this._eventManager.listen(this._engine, _eventType.EventType.Player.TEXT_TRACK_CHANGED, function (event) {
          _this5._markActiveTrack(event.payload.selectedTextTrack);
          return _this5.dispatchEvent(event);
        });
        this._eventManager.listen(this._engine, _eventType.EventType.Player.ABR_MODE_CHANGED, function (event) {
          return _this5.dispatchEvent(event);
        });
        this._eventManager.listen(this, _eventType.EventType.Html5.PLAY, this._onPlay.bind(this));
      }
    }
  }, {
    key: '_handlePlaybackConfig',
    value: function _handlePlaybackConfig() {
      if (this._config.playback) {
        if (this._config.playback.muted) {
          this.muted = true;
        }
        if (this._config.playback.playsinline) {
          this.playsinline = true;
        }
        if (this._config.playback.preload === "auto") {
          this.load();
        }
        if (this._canAutoPlay()) {
          this.play();
        }
      }
    }
  }, {
    key: '_canAutoPlay',
    value: function _canAutoPlay() {
      if (!this._config.playback.autoplay) {
        return false;
      }
      var device = this._env.device.type;
      var os = this._env.os.name;
      if (device === 'mobile' || device === 'tablet') {
        return os === 'iOS' ? this.muted && this.playsinline : this.muted;
      }
      return true;
    }
  }, {
    key: '_appendPlayerContainer',
    value: function _appendPlayerContainer(targetId) {
      if (targetId) {
        if (this._el === undefined) {
          this._createPlayerContainer();
          var parentNode = Utils.Dom.getElementById(targetId);
          Utils.Dom.appendChild(parentNode, this._el);
        }
      } else {
        throw new Error("targetId is not found, it must be pass on initialization");
      }
    }
  }, {
    key: '_createPlayerContainer',
    value: function _createPlayerContainer() {
      this._el = Utils.Dom.createElement("div");
      this._el.id = Utils.Generator.uniqueId(5);
      this._el.className = Player.CONTAINER_CLASS_NAME;
      this._el.setAttribute('tabindex', '-1');
    }
  }, {
    key: '_appendEngineEl',
    value: function _appendEngineEl() {
      if (this._el != null && this._engine != null) {
        Utils.Dom.appendChild(this._el, this._engine.getVideoElement());
      }
    }
  }, {
    key: '_getTracksByType',
    value: function _getTracksByType(type) {
      return !type ? this._tracks : this._tracks.filter(function (track) {
        if (type === _trackType.TrackType.VIDEO) {
          return track instanceof _videoTrack2.default;
        } else if (type === _trackType.TrackType.AUDIO) {
          return track instanceof _audioTrack2.default;
        } else if (type === _trackType.TrackType.TEXT) {
          return track instanceof _textTrack2.default;
        } else {
          return true;
        }
      });
    }
  }, {
    key: '_markActiveTrack',
    value: function _markActiveTrack(track) {
      var type = void 0;
      if (track instanceof _videoTrack2.default) {
        type = _trackType.TrackType.VIDEO;
      } else if (track instanceof _audioTrack2.default) {
        type = _trackType.TrackType.AUDIO;
      } else if (track instanceof _textTrack2.default) {
        type = _trackType.TrackType.TEXT;
      }
      if (type) {
        var tracks = this.getTracks(type);
        for (var i = 0; i < tracks.length; i++) {
          tracks[i].active = track.index === i;
        }
      }
    }
  }, {
    key: '_onPlay',
    value: function _onPlay() {
      if (this._firstPlay) {
        this._firstPlay = false;
        this.dispatchEvent(new _fakeEvent2.default(_eventType.EventType.Player.FIRST_PLAY));
      }
    }
  }, {
    key: '_maybeResetPlayer',
    value: function _maybeResetPlayer(config) {
      if (this._engine && config.sources) {
        Player._logger.debug('New sources on existing engine: reset engine to change media');
        this._reset();
      }
    }
  }, {
    key: '_maybeLoadPlugins',
    value: function _maybeLoadPlugins(engine) {
      if (this._engine && !engine) {
        Player._logger.debug('Engine created for the first time: load plugins');
        this._loadPlugins();
      }
    }
  }, {
    key: '_reset',
    value: function _reset() {
      if (this._engine) {
        this._engine.destroy();
      }
      this._tracks = [];
      this._firstPlay = true;
      this._eventManager.removeAll();
      this._createReadyPromise();
    }
  }, {
    key: '_createReadyPromise',
    value: function _createReadyPromise() {
      var _this6 = this;

      this._readyPromise = new Promise(function (resolve, reject) {
        _this6._eventManager.listen(_this6, _eventType.EventType.Player.TRACKS_CHANGED, function () {
          resolve();
        });
        _this6._eventManager.listen(_this6, _eventType.EventType.Html5.ERROR, reject);
      });
    }
  }, {
    key: 'env',
    get: function get() {
      return this._env;
    }

    /**
     * @returns {Object}
     * @readonly
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'config',
    get: function get() {
      return Utils.Object.mergeDeep({}, this._config);
    }

    /**
     * @param {string} sessionId
     * @returns {void}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'sessionId',
    set: function set(sessionId) {
      this._config.session = this._config.session || {};
      this._config.session.id = sessionId;
    }
  }, {
    key: 'currentTime',
    set: function set(to) {
      if (this._engine) {
        if (Utils.Number.isNumber(to)) {
          var boundedTo = to;
          if (to < 0) {
            boundedTo = 0;
          }
          if (boundedTo > this._engine.duration) {
            boundedTo = this._engine.duration;
          }
          this._engine.currentTime = boundedTo;
        }
      }
    }

    /**
     * @returns {number | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.currentTime;
      }
    }

    /**
     * @returns {number | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'duration',
    get: function get() {
      if (this._engine) {
        return this._engine.duration;
      }
    }

    /**
     * @param {number} vol
     * @returns {void}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'volume',
    set: function set(vol) {
      if (this._engine) {
        if (Utils.Number.isFloat(vol)) {
          var boundedVol = vol;
          if (boundedVol < 0) {
            boundedVol = 0;
          }
          if (boundedVol > 1) {
            boundedVol = 1;
          }
          this._engine.volume = boundedVol;
        }
      }
    }

    /**
     * @returns {number | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.volume;
      }
    }

    /**
     * @param {number} rate
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'playbackRate',
    set: function set(rate) {
      if (this._engine) {
        this._engine.playbackRate = rate;
      }
    }

    /**
     * @returns {number | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.playbackRate;
      }
    }

    /**
     * @returns {TimeRanges | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'seekable',
    get: function get() {
      if (this._engine) {
        return this._engine.seekable;
      }
    }

    /**
     * @returns {TimeRanges | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'buffered',
    get: function get() {
      if (this._engine) {
        return this._engine.buffered;
      }
    }

    /**
     * @returns {boolean | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'defaultMuted',
    get: function get() {
      if (this._engine) {
        return this._engine.defaultMuted;
      }
    }

    /**
     * @param {string} poster
     * @returns {void}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'poster',
    set: function set(poster) {
      if (this._engine) {
        this._engine.poster = poster;
      }
    }

    /**
     * @returns {poster | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.poster;
      }
    }

    /**
     * @param {boolean} loop
     * @memberof Classes.Player
     * @public
     * @instance
     * @returns {void}
     */

  }, {
    key: 'loop',
    set: function set(loop) {
      if (this._engine) {
        this._engine.loop = loop;
      }
    }

    /**
     * @returns {boolean | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.loop;
      }
    }

    /**
     * @param {boolean} controls
     * @memberof Classes.Player
     * @public
     * @instance
     * @returns {void}
     */

  }, {
    key: 'controls',
    set: function set(controls) {
      if (this._engine) {
        this._engine.controls = controls;
      }
    }

    /**
     * @returns {boolean | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.controls;
      }
    }

    /**
     * @param {number} defaultPlaybackRate
     * @memberof Classes.Player
     * @public
     * @instance
     * @returns {void}
     */

  }, {
    key: 'defaultPlaybackRate',
    set: function set(defaultPlaybackRate) {
      if (this._engine) {
        this._engine.defaultPlaybackRate = defaultPlaybackRate;
      }
    }

    /**
     * @returns {number | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.defaultPlaybackRate;
      }
    }

    /**
     * @returns {MediaError | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'error',
    get: function get() {
      if (this._engine) {
        return this._engine.error;
      }
    }

    /**
     * @returns {number | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'videoHeight',
    get: function get() {
      if (this._engine) {
        return this._engine.videoHeight;
      }
    }

    /**
     * @returns {number | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'videoWidth',
    get: function get() {
      if (this._engine) {
        return this._engine.videoWidth;
      }
    }

    /**
     * @returns {void}
     * @param {boolean} playsinline
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'playsinline',
    set: function set(playsinline) {
      if (this._engine) {
        this._engine.playsinline = playsinline;
      }
    }

    /**
     * @returns {boolean | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.playsinline;
      }
    }

    // </editor-fold>

    // <editor-fold desc="State">
    /**
     * @returns {boolean | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'paused',
    get: function get() {
      if (this._engine) {
        return this._engine.paused;
      }
    }

    /**
     * @returns {boolean | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'ended',
    get: function get() {
      if (this._engine) {
        return this._engine.ended;
      }
    }

    /**
     * @returns {TimeRanges | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'played',
    get: function get() {
      if (this._engine) {
        return this._engine.played;
      }
    }

    /**
     * @returns {boolean | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'seeking',
    get: function get() {
      if (this._engine) {
        return this._engine.seeking;
      }
    }

    /**
     * @returns {number | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'networkState',
    get: function get() {
      if (this._engine) {
        return this._engine.networkState;
      }
    }

    /**
     * @returns {number | null} - The current ready state of the audio/video.
     * 0 = HAVE_NOTHING - no information whether or not the audio/video is ready.
     * 1 = HAVE_METADATA - metadata for the audio/video is ready.
     * 2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond.
     * 3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available.
     * 4 = HAVE_ENOUGH_DATA - enough data available to start playing.
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'readyState',
    get: function get() {
      if (this._engine) {
        return this._engine.readyState;
      }
    }

    /**
     * @param {boolean} mute
     * @returns {void}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'muted',
    set: function set(mute) {
      if (this._engine) {
        this._engine.muted = mute;
      }
    }

    /**
     * @returns {boolean | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.muted;
      }
    }

    // </editor-fold>

    /**
     * @returns {string | null}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'src',
    get: function get() {
      if (this._engine) {
        return this._engine.src;
      }
    }

    /**
     * @returns {Object}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'Event',
    get: function get() {
      return _eventType.EventType;
    }

    /**
     * @returns {Object}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'State',
    get: function get() {
      return _stateType.StateType;
    }

    /**
     * @returns {Object}
     * @memberof Classes.Player
     * @public
     * @instance
     */

  }, {
    key: 'Track',
    get: function get() {
      return _trackType.TrackType;
    }
  }], [{
    key: '_defaultConfig',
    get: function get() {
      return Utils.Object.copyDeep(_playerConfig2.default);
    }
  }]);

  return Player;
}(_fakeEventTarget2.default);

Player.CONTAINER_CLASS_NAME = 'playkit-container';
Player._logger = _logger2.default.getLogger('Player');
Player._engines = [_html2.default];
exports.default = Player;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @namespace MultiMap
 * @memberof Utils
 * @class MultiMap
 * @template T
 */
var MultiMap = function () {
  function MultiMap() {
    _classCallCheck(this, MultiMap);

    this._map = new Map();
  }

  /**
   * Add a key, value pair to the map.
   * @param {string} key
   * @param {any} value
   * @returns {void}
   * @public
   * @instance
   * @memberof Utils.MultiMap
   */


  _createClass(MultiMap, [{
    key: "push",
    value: function push(key, value) {
      if (this._map.has(key)) {
        var list = this._map.get(key);
        if (Array.isArray(list)) {
          list.push(value);
          this._map.set(key, list);
        }
      } else {
        this._map.set(key, [value]);
      }
    }

    /**
     * Set an array of values for the key, overwriting any previous data.
     * @param {string} key
     * @param {Array<any>} values
     * @returns {void}
     * @public
     * @instance
     * @memberof Utils.MultiMap
     */

  }, {
    key: "set",
    value: function set(key, values) {
      this._map.set(key, values);
    }

    /**
     * Check for a key.
     * @param {string} key
     * @return {boolean}
     * @public
     * @instance
     * @memberof Utils.MultiMap
     */

  }, {
    key: "has",
    value: function has(key) {
      return this._map.has(key);
    }

    /**
     * Get a list of values by key.
     * @param {string} key
     * @return {Array<any>}
     * @public
     * @instance
     * @memberof Utils.MultiMap
     */

  }, {
    key: "get",
    value: function get(key) {
      var list = this._map.get(key);
      return list ? list.slice() : [];
    }

    /**
     * Get a list of all values.
     * @returns {Array<any>}
     * @public
     * @instance
     * @memberof Utils.MultiMap
     */

  }, {
    key: "getAll",
    value: function getAll() {
      var list = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._map.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;

          list = list.concat(value);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return list;
    }

    /**
     * Remove a specific value, if it exists.
     * @param {string} key
     * @param {any} value
     * @returns {void}
     * @public
     * @instance
     * @memberof Utils.MultiMap
     */

  }, {
    key: "remove",
    value: function remove(key, value) {
      if (!this._map.has(key)) return;
      var list = this._map.get(key);
      if (Array.isArray(list)) {
        for (var i = 0; i < list.length; ++i) {
          if (list[i] == value) {
            list.splice(i, 1);
            --i;
          }
        }
      }
    }

    /**
     * Get all keys from the multimap.
     * @return {Array<string>}
     * @public
     * @instance
     * @memberof Utils.MultiMap
     */

  }, {
    key: "keys",
    value: function keys() {
      return this._map.keys();
    }

    /**
     * Clear all keys and values from the multimap.
     * @returns {void}
     * @public
     * @instance
     * @memberof Utils.MultiMap
     */

  }, {
    key: "clear",
    value: function clear() {
      this._map.clear();
    }
  }]);

  return MultiMap;
}();

exports.default = MultiMap;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEvent = __webpack_require__(1);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _multiMap = __webpack_require__(10);

var _multiMap2 = _interopRequireDefault(_multiMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A work-alike for EventTarget. Only DOM elements may be true EventTargets,
 * but this can be used as a base class to provide event dispatch to non-DOM
 * classes.  Only FakeEvents should be dispatched.
 * @namespace FakeEventTarget
 * @memberof Classes
 * @class FakeEventTarget
 */


/**
 * These are the listener types defined in the closure extern for EventTarget.
 * @typedef {EventListener|function(!Event):(boolean|undefined)}
 * @memberof Classes.FakeEventTarget
 */
var FakeEventTarget = function () {
  function FakeEventTarget() {
    _classCallCheck(this, FakeEventTarget);

    this._listeners = new _multiMap2.default();
    this.dispatchTarget = this;
  }

  /**
   * Add an event listener to this object.
   * @param {string} type - The event type to listen for.
   * @param {FakeEventTarget.ListenerType} listener - The callback or listener object to invoke.
   * @override
   * @memberof Classes.FakeEventTarget
   * @public
   * @instance
   */

  /**
   * The target of all dispatched events.  Defaults to |this|.
   * @type {EventTarget}
   * @memberof Classes.FakeEventTarget
   * @public
   * @instance
   */


  _createClass(FakeEventTarget, [{
    key: 'addEventListener',
    value: function addEventListener(type, listener) {
      this._listeners.push(type, listener);
    }

    /**
     * Remove an event listener from this object.
     * @param {string} type - The event type for which you wish to remove a listener.
     * @param {FakeEventTarget.ListenerType} listener - The callback or listener object to remove.
     * @override
     * @memberof Classes.FakeEventTarget
     * @public
     * @instance
     */

  }, {
    key: 'removeEventListener',
    value: function removeEventListener(type, listener) {
      this._listeners.remove(type, listener);
    }

    /**
     * Dispatch an event from this object.
     * @param {!Event} event - The event to be dispatched from this object.
     * @return {boolean} - True if the default action was prevented.
     * @override
     * @memberof Classes.FakeEventTarget
     * @public
     * @instance
     */

  }, {
    key: 'dispatchEvent',
    value: function dispatchEvent(event) {
      var list = this._listeners.get(event.type) || [];
      for (var i = 0; i < list.length; ++i) {
        // Do this every time, since events can be re-dispatched from handlers.
        event.target = this.dispatchTarget;
        event.currentTarget = this.dispatchTarget;
        var listener = list[i];
        try {
          if (listener.handleEvent) {
            listener.handleEvent(event);
          } else {
            listener.call(this, event);
          }
        } catch (exception) {
          // Exceptions during event handlers should not affect the caller,
          // but should appear on the console as uncaught, according to MDN:
          // http://goo.gl/N6Ff27
          // TODO: add log
        }
        if (event.stopped) {
          break;
        }
      }
      return event.defaultPrevented;
    }
  }]);

  return FakeEventTarget;
}();

exports.default = FakeEventTarget;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerError = function () {
  function PlayerError(error, param) {
    _classCallCheck(this, PlayerError);

    this.name = error.name;
    this.message = error.message(param);
  }

  _createClass(PlayerError, [{
    key: "getError",
    value: function getError() {
      return {
        name: this.name,
        message: this.message
      };
    }
  }]);

  return PlayerError;
}();

PlayerError.TYPE = {
  NOT_REGISTERED_PLUGIN: {
    name: "PluginNotRegisteredException",
    message: function message(name) {
      return "Cannot load " + name + " plugin. Name not found in the registry";
    }
  },
  NOT_VALID_HANDLER: {
    name: "PluginHandlerIsNotValidException",
    message: function message() {
      return "To activate plugin you must provide a class derived from BasePlugin";
    }
  },
  NOT_IMPLEMENTED_METHOD: {
    name: "NotImplementedException",
    message: function message(method) {
      return method + " method not implemented";
    }
  }
};
exports.default = PlayerError;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(9);

var _player2 = _interopRequireDefault(_player);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _util = __webpack_require__(5);

var Utils = _interopRequireWildcard(_util);

var _eventManager = __webpack_require__(3);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _playerError = __webpack_require__(12);

var _playerError2 = _interopRequireDefault(_playerError);

var _fakeEvent = __webpack_require__(1);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @namespace BasePlugin
 * @memberof Classes
 * @virtual BasePlugin
 * @implements {IPlugin}
 * @typedef {BasePlugin}
 */
var BasePlugin = function () {
  _createClass(BasePlugin, null, [{
    key: 'createPlugin',


    /**
     * Factory method to create a plugin.
     * @param {string} name - The plugin name.
     * @param {Player} player - The player reference.
     * @param {Object} config - The plugin configuration.
     * @returns {BasePlugin} - New plugin instance.
     * @static
     * @memberof Classes.BasePlugin
     * @public
     */

    /**
     * The event manager of the plugin.
     * @type {EventManager}
     * @memberof Classes.BasePlugin
     * @instance
     * @public
     */

    /**
     * The logger of the plugin.
     * @type {any}
     * @memberof Classes.BasePlugin
     * @instance
     * @public
     */

    /**
     * The runtime configuration of the plugin.
     * @type {Object}
     * @memberof Classes.BasePlugin
     * @instance
     * @public
     */
    value: function createPlugin(name, player) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return new this(name, player, config);
    }

    /**
     * Returns under what conditions the plugin is valid.
     * Plugin must implement this method.
     * @returns {boolean} - Whether the plugin is valid and can be initiated.
     * @static
     * @public
     * @memberof Classes.BasePlugin
     * @abstract
     */

    /**
     * The default configuration of the plugin.
     * Inherited plugins should override this property.
     * @type {Object}
     * @memberof Classes.BasePlugin
     * @static
     * @public
     */

    /**
     * Reference to the player.
     * @type {Player}
     * @memberof Classes.BasePlugin
     * @instance
     * @public
     */

    /**
     * The name of the plugin.
     * @type {string}
     * @memberof Classes.BasePlugin
     * @instance
     * @public
     */

  }, {
    key: 'isValid',
    value: function isValid() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'isValid()').getError();
    }
  }]);

  function BasePlugin(name, player, config) {
    _classCallCheck(this, BasePlugin);

    this.name = name;
    this.player = player;
    this.eventManager = new _eventManager2.default();
    this.logger = _logger2.default.getLogger(this.name);
    this.config = {};
    Utils.Object.mergeDeep(this.config, this.constructor.defaultConfig, config);
  }

  /**
   * Get the plugin configuration.
   * @param {string} attr - The key in the plugin configuration (optional).
   * @returns {any} - If attr is provided, returns its value. Else, Returns the whole config of the plugin.
   * @memberof Classes.BasePlugin
   * @instance
   * @public
   * @virtual
   */


  _createClass(BasePlugin, [{
    key: 'getConfig',
    value: function getConfig(attr) {
      if (attr) {
        return this.config[attr];
      }
      return this.config;
    }

    /**
     * Updates the config of the plugin.
     * @param {Object} update - The updated configuration.
     * @returns {void}
     * @memberof Classes.BasePlugin
     * @instance
     * @public
     * @virtual
     */

  }, {
    key: 'updateConfig',
    value: function updateConfig(update) {
      this.config = Utils.Object.mergeDeep(this.config, update);
    }

    /**
     * Destroys the plugin.
     * plugin must implement this method.
     * @abstract
     * @returns {void}
     * @memberof Classes.BasePlugin
     * @instance
     * @public
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'destroy()').getError();
    }

    /**
     * Get the plugin name.
     * @returns {string} - The name of the plugin.
     * @memberof Classes.BasePlugin
     * @instance
     * @public
     * @virtual
     */

  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }

    /**
     * Dispatch an event from the plugin.
     * @param {string} name - The event name.
     * @param {any} payload - The event payload.
     * @returns {void}
     * @memberof Classes.BasePlugin
     * @instance
     * @public
     * @virtual
     */

  }, {
    key: 'dispatchEvent',
    value: function dispatchEvent(name, payload) {
      this.logger.debug("Fire event: " + name, payload);
      this.player.dispatchEvent(new _fakeEvent2.default(name, payload));
    }
  }]);

  return BasePlugin;
}();

BasePlugin.defaultConfig = {};
exports.default = BasePlugin;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @virtual BaseMiddleware
 * @namespace BaseMiddleware
 * @memberof Classes
 * @typedef {BaseMiddleware}
 */
var BaseMiddleware = function () {
  function BaseMiddleware() {
    _classCallCheck(this, BaseMiddleware);
  }

  _createClass(BaseMiddleware, [{
    key: "callNext",


    /**
     * @param {Function} next - The next handler in the middleware chain.
     * @returns {void}
     * @virtual callNext
     * @public
     * @memberof Classes.BaseMiddleware
     */
    value: function callNext(next) {
      if (next) {
        next();
      }
    }
    /**
     * The id of the middleware instance.
     * @public
     * @abstract id
     * @public
     * @memberof Classes.BaseMiddleware
     */

  }]);

  return BaseMiddleware;
}();

exports.default = BaseMiddleware;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * @namespace StateType
 * @memberof Enums
 * @typedef {StateType}
 */
var StateType = exports.StateType = {
  /**
   * @enum
   * @memberof Enums.StateType
   * @public
   */
  IDLE: "idle",
  /**
   * @enum
   * @memberof Enums.StateType
   * @public
   */
  LOADING: "loading",
  /**
   * @enum
   * @memberof Enums.StateType
   * @public
   */
  PLAYING: "playing",
  /**
   * @enum
   * @memberof Enums.StateType
   * @public
   */
  PAUSED: "paused",
  /**
   * @enum
   * @memberof Enums.StateType
   * @public
   */
  BUFFERING: "buffering"
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerMediaSourceAdapter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nativeAdapter = __webpack_require__(22);

var _nativeAdapter2 = _interopRequireDefault(_nativeAdapter);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @namespace MediaSourceProvider
 * @memberof Classes.MediaSource
 */
var MediaSourceProvider = function () {
  function MediaSourceProvider() {
    _classCallCheck(this, MediaSourceProvider);
  }

  _createClass(MediaSourceProvider, null, [{
    key: 'register',


    /**
     * @function register
     * @param {IMediaSourceAdapter} mediaSourceAdapter
     * @static
     * @public
     * @memberof Classes.MediaSource.MediaSourceProvider
     * @returns {void}
     */
    value: function register(mediaSourceAdapter) {
      if (mediaSourceAdapter) {
        if (!MediaSourceProvider._mediaSourceAdapters.includes(mediaSourceAdapter)) {
          MediaSourceProvider._logger.debug('Adapter <' + mediaSourceAdapter.id + '> has been registered successfully');
          MediaSourceProvider._mediaSourceAdapters.push(mediaSourceAdapter);
        } else {
          MediaSourceProvider._logger.debug('Adapter <' + mediaSourceAdapter.id + '> is already registered, do not register again');
        }
      }
    }

    /**
     * @function unRegister
     * @param {IMediaSourceAdapter} mediaSourceAdapter
     * @static
     * @public
     * @memberof Classes.MediaSource.MediaSourceProvider
     * @returns {void}
     */

  }, {
    key: 'unRegister',
    value: function unRegister(mediaSourceAdapter) {
      var index = MediaSourceProvider._mediaSourceAdapters.indexOf(mediaSourceAdapter);
      if (index > -1) {
        MediaSourceProvider._logger.debug('Unregistered <' + mediaSourceAdapter.id + '> adapter');
        MediaSourceProvider._mediaSourceAdapters.splice(index, 1);
      }
    }

    /**
     * @function canPlayType
     * @param {string} mimeType
     * @static
     * @public
     * @memberof Classes.MediaSource.MediaSourceProvider
     * @returns {boolean}
     */

  }, {
    key: 'canPlayType',
    value: function canPlayType(mimeType) {
      var mediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters;
      for (var i = 0; i < mediaSourceAdapters.length; i++) {
        if (mediaSourceAdapters[i].canPlayType(mimeType)) {
          MediaSourceProvider._selectedAdapter = mediaSourceAdapters[i];
          MediaSourceProvider._logger.debug('Selected adapter is <' + MediaSourceProvider._selectedAdapter.id + '>');
          return true;
        }
      }
      return false;
    }

    /**
     * @function getMediaSourceAdapter
     * @param {HTMLVideoElement} videoElement
     * @param {Source} source
     * @param {Object} config
     * @returns {IMediaSourceAdapter | null}
     * @static
     * @public
     * @memberof Classes.MediaSource.MediaSourceProvider
     */

  }, {
    key: 'getMediaSourceAdapter',
    value: function getMediaSourceAdapter(videoElement, source, config) {
      if (videoElement && source && config) {
        if (!MediaSourceProvider._selectedAdapter) {
          MediaSourceProvider.canPlayType(source.mimetype);
        }
        return MediaSourceProvider._selectedAdapter ? MediaSourceProvider._selectedAdapter.createAdapter(videoElement, source, config) : null;
      }
      return null;
    }

    /**
     * @static
     * @returns {void}
     * @public
     * @memberof Classes.MediaSource.MediaSourceProvider
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      MediaSourceProvider._selectedAdapter = null;
    }
  }]);

  return MediaSourceProvider;
}();

MediaSourceProvider._logger = _logger2.default.getLogger('MediaSourceProvider');
MediaSourceProvider._mediaSourceAdapters = [_nativeAdapter2.default];
MediaSourceProvider._selectedAdapter = null;
exports.default = MediaSourceProvider;


var registerMediaSourceAdapter = MediaSourceProvider.register;
exports.registerMediaSourceAdapter = registerMediaSourceAdapter;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEvent = __webpack_require__(1);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _fakeEventTarget = __webpack_require__(11);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _playerError = __webpack_require__(12);

var _playerError2 = _interopRequireDefault(_playerError);

var _eventType = __webpack_require__(4);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _track = __webpack_require__(2);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(6);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(7);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(8);

var _textTrack2 = _interopRequireDefault(_textTrack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable no-unused-vars */


/**
 * @virtual BaseMediaSourceAdapter
 * @typedef {BaseMediaSourceAdapter}
 * @namespace BaseMediaSourceAdapter
 * @memberof Classes.MediaSource
 * @extends {FakeEventTarget}
 */
var BaseMediaSourceAdapter = function (_FakeEventTarget) {
  _inherits(BaseMediaSourceAdapter, _FakeEventTarget);

  _createClass(BaseMediaSourceAdapter, [{
    key: 'load',


    /**
     * Must be implemented by derived adapter.
     * @public
     * @abstract
     * @memberof Classes.MediaSource.BaseMediaSourceAdapter
     * @returns {Promise<Object>}
     * @instance
     */
    value: function load() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'load').getError();
    }

    /**
     * Must be implemented by derived adapter.
     * @param {VideoTrack} videoTrack
     * @public
     * @abstract
     * @memberof Classes.MediaSource.BaseMediaSourceAdapter
     * @returns {void}
     * @instance
     */

  }, {
    key: 'selectVideoTrack',
    value: function selectVideoTrack(videoTrack) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'selectVideoTrack').getError();
    }

    /**
     * Must be implemented by derived adapter.
     * @param {AudioTrack} audioTrack
     * @public
     * @abstract
     * @memberof Classes.MediaSource.BaseMediaSourceAdapter
     * @returns {void}
     * @instance
     */

  }, {
    key: 'selectAudioTrack',
    value: function selectAudioTrack(audioTrack) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'selectAudioTrack').getError();
    }

    /**
     * Must be implemented by derived adapter.
     * @param {TextTrack} textTrack
     * @public
     * @abstract
     * @memberof Classes.MediaSource.BaseMediaSourceAdapter
     * @returns {void}
     * @instance
     */

  }, {
    key: 'selectTextTrack',
    value: function selectTextTrack(textTrack) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'selectTextTrack').getError();
    }

    /**
     * Must be implemented by derived adapter.
     * @public
     * @abstract
     * @memberof Classes.MediaSource.BaseMediaSourceAdapter
     * @returns {void}
     * @instance
     */

  }, {
    key: 'hideTextTrack',
    value: function hideTextTrack() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'hideTextTrack').getError();
    }

    /**
     * Must be implemented by derived adapter.
     * @public
     * @abstract
     * @memberof Classes.MediaSource.BaseMediaSourceAdapter
     * @returns {void}
     * @instance
     */

  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'enableAdaptiveBitrate').getError();
    }

    /**
     * Must be implemented by derived adapter.
     * @public
     * @abstract
     * @memberof Classes.MediaSource.BaseMediaSourceAdapter
     * @returns {boolean}
     * @instance
     */

  }, {
    key: 'isAdaptiveBitrateEnabled',
    value: function isAdaptiveBitrateEnabled() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'isAdaptiveBitrateEnabled').getError();
    }

    /**
     * Must be implemented by derived adapter.
     * @public
     * @abstract
     * @memberof Classes.MediaSource.BaseMediaSourceAdapter
     * @instance
     */

  }, {
    key: 'src',
    get: function get() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'get src').getError();
    }
  }], [{
    key: 'isSupported',


    /**
     * By default returns true.
     * @function isSupported
     * @returns {boolean}
     * @static
     * @virtual isSupported
     * @public
     * @memberof Classes.MediaSource.BaseMediaSourceAdapter
     */
    value: function isSupported() {
      return true;
    }

    /**
     * Must be implemented by derived adapter.
     * @param {string} mimeType
     * @static
     * @abstract
     * @public
     * @memberof Classes.MediaSource.BaseMediaSourceAdapter
     * @returns {boolean}
     */

  }, {
    key: 'canPlayType',
    value: function canPlayType(mimeType) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'static canPlayType').getError();
    }
  }]);

  function BaseMediaSourceAdapter(videoElement, source) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, BaseMediaSourceAdapter);

    var _this = _possibleConstructorReturn(this, (BaseMediaSourceAdapter.__proto__ || Object.getPrototypeOf(BaseMediaSourceAdapter)).call(this));

    _this._videoElement = videoElement;
    _this._sourceObj = source;
    _this._config = config;
    return _this;
  }

  /**
   * Must be implemented by derived adapter.
   * @function destroy
   * @returns {void}
   * @public
   * @virtual
   * @memberof Classes.MediaSource.BaseMediaSourceAdapter
   * @instance
   */


  _createClass(BaseMediaSourceAdapter, [{
    key: 'destroy',
    value: function destroy() {
      this._sourceObj = null;
      this._config = null;
    }
  }, {
    key: '_onTrackChanged',
    value: function _onTrackChanged(track) {
      if (track instanceof _videoTrack2.default) {
        this._trigger(BaseMediaSourceAdapter.EventType.Player.VIDEO_TRACK_CHANGED, { selectedVideoTrack: track });
      } else if (track instanceof _audioTrack2.default) {
        this._trigger(BaseMediaSourceAdapter.EventType.Player.AUDIO_TRACK_CHANGED, { selectedAudioTrack: track });
      } else if (track instanceof _textTrack2.default) {
        this._trigger(BaseMediaSourceAdapter.EventType.Player.TEXT_TRACK_CHANGED, { selectedTextTrack: track });
      }
    }
  }, {
    key: '_trigger',
    value: function _trigger(name, payload) {
      this.dispatchEvent(new _fakeEvent2.default(name, payload));
    }
  }]);

  return BaseMediaSourceAdapter;
}(_fakeEventTarget2.default);

BaseMediaSourceAdapter.EventType = _eventType.EventType;
BaseMediaSourceAdapter.getLogger = _logger2.default.getLogger;
exports.default = BaseMediaSourceAdapter;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerPlugin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basePlugin = __webpack_require__(13);

var _basePlugin2 = _interopRequireDefault(_basePlugin);

var _playerError = __webpack_require__(12);

var _playerError2 = _interopRequireDefault(_playerError);

var _player = __webpack_require__(9);

var _player2 = _interopRequireDefault(_player);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @namespace PluginManager
 * @class PluginManager
 * @memberof Classes
 */
var PluginManager = function () {
  function PluginManager() {
    _classCallCheck(this, PluginManager);

    this._plugins = new Map();
  }

  _createClass(PluginManager, [{
    key: 'load',


    /**
     * Creates and store new instance of the plugin in case isValid() of the plugin returns true.
     * @param {string} name - The plugin name.
     * @param {Player} player - The player reference.
     * @param {Object} config - The plugin configuration.
     * @returns {boolean} - Whether the plugin load succeeded.
     * @public
     * @instance
     * @memberof Classes.PluginManager
     */
    value: function load(name, player) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!PluginManager._registry.has(name)) {
        throw new _playerError2.default(_playerError2.default.TYPE.NOT_REGISTERED_PLUGIN, name).getError();
      }
      var pluginClass = PluginManager._registry.get(name);
      if (pluginClass != null && pluginClass.isValid()) {
        this._plugins.set(name, pluginClass.createPlugin(name, player, config));
        PluginManager._logger.debug('Plugin <' + name + '> has been loaded');
        return true;
      }
      PluginManager._logger.debug('Plugin <' + name + '> isn\'t loaded, isValid()=false');
      return false;
    }

    /**
     * Iterates over all the plugins, destroys them and remove them from the registry.
     * @public
     * @returns {void}
     * @instance
     * @memberof Classes.PluginManager
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._plugins.forEach(this._destroy.bind(this));
    }

    /**
     * Returns the plugin instance.
     * @param {string} name - The plugin name.
     * @returns {BasePlugin} - The plugin instance.
     * @public
     * @instance
     * @memberof Classes.PluginManager
     */

  }, {
    key: 'get',
    value: function get(name) {
      return this._plugins.get(name);
    }
  }, {
    key: '_destroy',
    value: function _destroy(plugin, name) {
      plugin.destroy();
      this._plugins.delete(name);
    }
  }], [{
    key: 'register',


    /**
     * Writes the plugin in the registry.
     * Maps: plugin name => plugin class.
     * @param {string} name - The plugin name.
     * @param {Function} handler - The plugin class.
     * @returns {boolean} - If the registration request succeeded.
     * @static
     * @public
     * @memberof Classes.PluginManager
     */
    value: function register(name, handler) {
      if (typeof handler !== 'function' || handler.prototype instanceof _basePlugin2.default === false) {
        throw new _playerError2.default(_playerError2.default.TYPE.NOT_VALID_HANDLER).getError();
      }
      if (!PluginManager._registry.has(name)) {
        PluginManager._registry.set(name, handler);
        PluginManager._logger.debug('Plugin <' + name + '> has been registered successfully');
        return true;
      }
      PluginManager._logger.debug('Plugin <' + name + '> is already registered, do not register again');
      return false;
    }

    /**
     * Removes the plugin from the registry.
     * @param {string} name - The plugin name.
     * @static
     * @public
     * @returns {void}
     * @memberof Classes.PluginManager
     */

  }, {
    key: 'unRegister',
    value: function unRegister(name) {
      if (PluginManager._registry.has(name)) {
        PluginManager._registry.delete(name);
        PluginManager._logger.debug('Unregistered <' + name + '> plugin.');
      }
    }
  }]);

  return PluginManager;
}();

PluginManager._registry = new Map();
PluginManager._logger = _logger2.default.getLogger("PluginManager");
exports.default = PluginManager;


var registerPlugin = PluginManager.register;
exports.registerPlugin = registerPlugin;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLAYER_NAME = exports.VERSION = exports.Utils = exports.TextTrack = exports.AudioTrack = exports.VideoTrack = exports.Track = exports.BaseMiddleware = exports.BasePlugin = exports.registerPlugin = exports.BaseMediaSourceAdapter = exports.registerMediaSourceAdapter = undefined;
exports.loadPlayer = loadPlayer;

var _player = __webpack_require__(9);

var _player2 = _interopRequireDefault(_player);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _package = __webpack_require__(37);

var packageData = _interopRequireWildcard(_package);

var _baseMediaSourceAdapter = __webpack_require__(17);

var _baseMediaSourceAdapter2 = _interopRequireDefault(_baseMediaSourceAdapter);

var _mediaSourceProvider = __webpack_require__(16);

var _pluginManager = __webpack_require__(18);

var _baseMiddleware = __webpack_require__(14);

var _baseMiddleware2 = _interopRequireDefault(_baseMiddleware);

var _basePlugin = __webpack_require__(13);

var _basePlugin2 = _interopRequireDefault(_basePlugin);

var _track = __webpack_require__(2);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(6);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(7);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(8);

var _textTrack2 = _interopRequireDefault(_textTrack);

var _util = __webpack_require__(5);

var Utils = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Playkit version
var VERSION = packageData.version;

// Playkit name
/**
 * @namespace Interfaces
 */

/**
 * @namespace Types
 */

/**
 * @namespace Enums
 */

/**
 * @namespace Utils
 */

/**
 * @namespace Classes
 */

/**
 * @namespace Engines
 * @memberof Classes
 */

/**
 * @namespace MediaSource
 * @memberof Classes
 */

var PLAYER_NAME = 'kaltura-playkit-js';

_logger2.default.getLogger().log("%c Playkit " + VERSION, "color: blue; font-size: large");
_logger2.default.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

/**
 * Factory to create a player instance.
 * @param {string} targetId - The DOM target id.
 * @param {Object} config - The player configuration.
 * @returns {Player} - The player instance.
 * @public
 * @namespace loadPlayer
 * @function loadPlayer
 * @memberof loadPlayer
 */
function loadPlayer(targetId, config) {
  return new _player2.default(targetId, config || {});
}

// Export the media source adapters necessary utils
exports.registerMediaSourceAdapter = _mediaSourceProvider.registerMediaSourceAdapter;
exports.BaseMediaSourceAdapter = _baseMediaSourceAdapter2.default;

// Export the plugin framework

exports.registerPlugin = _pluginManager.registerPlugin;
exports.BasePlugin = _basePlugin2.default;
exports.BaseMiddleware = _baseMiddleware2.default;

// Export the tracks classes

exports.Track = _track2.default;
exports.VideoTrack = _videoTrack2.default;
exports.AudioTrack = _audioTrack2.default;
exports.TextTrack = _textTrack2.default;

// Export utils library

exports.Utils = Utils;

// Export version

exports.VERSION = VERSION;

// Export player name

exports.PLAYER_NAME = PLAYER_NAME;
exports.default = loadPlayer;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
(function (global) {
	"use strict";

	// Top level module for the global, static logger instance.
	var Logger = { };

	// For those that are at home that are keeping score.
	Logger.VERSION = "1.3.0";

	// Function which handles all incoming log messages.
	var logHandler;

	// Map of ContextualLogger instances by name; used by Logger.get() to return the same named instance.
	var contextualLoggersByNameMap = {};

	// Polyfill for ES5's Function.bind.
	var bind = function(scope, func) {
		return function() {
			return func.apply(scope, arguments);
		};
	};

	// Super exciting object merger-matron 9000 adding another 100 bytes to your download.
	var merge = function () {
		var args = arguments, target = args[0], key, i;
		for (i = 1; i < args.length; i++) {
			for (key in args[i]) {
				if (!(key in target) && args[i].hasOwnProperty(key)) {
					target[key] = args[i][key];
				}
			}
		}
		return target;
	};

	// Helper to define a logging level object; helps with optimisation.
	var defineLogLevel = function(value, name) {
		return { value: value, name: name };
	};

	// Predefined logging levels.
	Logger.DEBUG = defineLogLevel(1, 'DEBUG');
	Logger.INFO = defineLogLevel(2, 'INFO');
	Logger.TIME = defineLogLevel(3, 'TIME');
	Logger.WARN = defineLogLevel(4, 'WARN');
	Logger.ERROR = defineLogLevel(8, 'ERROR');
	Logger.OFF = defineLogLevel(99, 'OFF');

	// Inner class which performs the bulk of the work; ContextualLogger instances can be configured independently
	// of each other.
	var ContextualLogger = function(defaultContext) {
		this.context = defaultContext;
		this.setLevel(defaultContext.filterLevel);
		this.log = this.info;  // Convenience alias.
	};

	ContextualLogger.prototype = {
		// Changes the current logging level for the logging instance.
		setLevel: function (newLevel) {
			// Ensure the supplied Level object looks valid.
			if (newLevel && "value" in newLevel) {
				this.context.filterLevel = newLevel;
			}
		},

		// Is the logger configured to output messages at the supplied level?
		enabledFor: function (lvl) {
			var filterLevel = this.context.filterLevel;
			return lvl.value >= filterLevel.value;
		},

		debug: function () {
			this.invoke(Logger.DEBUG, arguments);
		},

		info: function () {
			this.invoke(Logger.INFO, arguments);
		},

		warn: function () {
			this.invoke(Logger.WARN, arguments);
		},

		error: function () {
			this.invoke(Logger.ERROR, arguments);
		},

		time: function (label) {
			if (typeof label === 'string' && label.length > 0) {
				this.invoke(Logger.TIME, [ label, 'start' ]);
			}
		},

		timeEnd: function (label) {
			if (typeof label === 'string' && label.length > 0) {
				this.invoke(Logger.TIME, [ label, 'end' ]);
			}
		},

		// Invokes the logger callback if it's not being filtered.
		invoke: function (level, msgArgs) {
			if (logHandler && this.enabledFor(level)) {
				logHandler(msgArgs, merge({ level: level }, this.context));
			}
		}
	};

	// Protected instance which all calls to the to level `Logger` module will be routed through.
	var globalLogger = new ContextualLogger({ filterLevel: Logger.OFF });

	// Configure the global Logger instance.
	(function() {
		// Shortcut for optimisers.
		var L = Logger;

		L.enabledFor = bind(globalLogger, globalLogger.enabledFor);
		L.debug = bind(globalLogger, globalLogger.debug);
		L.time = bind(globalLogger, globalLogger.time);
		L.timeEnd = bind(globalLogger, globalLogger.timeEnd);
		L.info = bind(globalLogger, globalLogger.info);
		L.warn = bind(globalLogger, globalLogger.warn);
		L.error = bind(globalLogger, globalLogger.error);

		// Don't forget the convenience alias!
		L.log = L.info;
	}());

	// Set the global logging handler.  The supplied function should expect two arguments, the first being an arguments
	// object with the supplied log messages and the second being a context object which contains a hash of stateful
	// parameters which the logging function can consume.
	Logger.setHandler = function (func) {
		logHandler = func;
	};

	// Sets the global logging filter level which applies to *all* previously registered, and future Logger instances.
	// (note that named loggers (retrieved via `Logger.get`) can be configured independently if required).
	Logger.setLevel = function(level) {
		// Set the globalLogger's level.
		globalLogger.setLevel(level);

		// Apply this level to all registered contextual loggers.
		for (var key in contextualLoggersByNameMap) {
			if (contextualLoggersByNameMap.hasOwnProperty(key)) {
				contextualLoggersByNameMap[key].setLevel(level);
			}
		}
	};

	// Retrieve a ContextualLogger instance.  Note that named loggers automatically inherit the global logger's level,
	// default context and log handler.
	Logger.get = function (name) {
		// All logger instances are cached so they can be configured ahead of use.
		return contextualLoggersByNameMap[name] ||
			(contextualLoggersByNameMap[name] = new ContextualLogger(merge({ name: name }, globalLogger.context)));
	};

	// CreateDefaultHandler returns a handler function which can be passed to `Logger.setHandler()` which will
	// write to the window's console object (if present); the optional options object can be used to customise the
	// formatter used to format each log message.
	Logger.createDefaultHandler = function (options) {
		options = options || {};

		options.formatter = options.formatter || function defaultMessageFormatter(messages, context) {
			// Prepend the logger's name to the log message for easy identification.
			if (context.name) {
				messages.unshift("[" + context.name + "]");
			}
		};

		// Map of timestamps by timer labels used to track `#time` and `#timeEnd()` invocations in environments
		// that don't offer a native console method.
		var timerStartTimeByLabelMap = {};

		// Support for IE8+ (and other, slightly more sane environments)
		var invokeConsoleMethod = function (hdlr, messages) {
			Function.prototype.apply.call(hdlr, console, messages);
		};

		// Check for the presence of a logger.
		if (typeof console === "undefined") {
			return function () { /* no console */ };
		}

		return function(messages, context) {
			// Convert arguments object to Array.
			messages = Array.prototype.slice.call(messages);

			var hdlr = console.log;
			var timerLabel;

			if (context.level === Logger.TIME) {
				timerLabel = (context.name ? '[' + context.name + '] ' : '') + messages[0];

				if (messages[1] === 'start') {
					if (console.time) {
						console.time(timerLabel);
					}
					else {
						timerStartTimeByLabelMap[timerLabel] = new Date().getTime();
					}
				}
				else {
					if (console.timeEnd) {
						console.timeEnd(timerLabel);
					}
					else {
						invokeConsoleMethod(hdlr, [ timerLabel + ': ' +
							(new Date().getTime() - timerStartTimeByLabelMap[timerLabel]) + 'ms' ]);
					}
				}
			}
			else {
				// Delegate through to custom warn/error loggers if present on the console.
				if (context.level === Logger.WARN && console.warn) {
					hdlr = console.warn;
				} else if (context.level === Logger.ERROR && console.error) {
					hdlr = console.error;
				} else if (context.level === Logger.INFO && console.info) {
					hdlr = console.info;
				}

				options.formatter(messages, context);
				invokeConsoleMethod(hdlr, messages);
			}
		};
	};

	// Configure and example a Default implementation which writes to the `window.console` (if present).  The
	// `options` hash can be used to configure the default logLevel and provide a custom message formatter.
	Logger.useDefaults = function(options) {
		Logger.setLevel(options && options.defaultLevel || Logger.DEBUG);
		Logger.setHandler(Logger.createDefaultHandler(options));
	};

	// Export to popular environments boilerplate.
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (Logger),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else if (typeof module !== 'undefined' && module.exports) {
		module.exports = Logger;
	}
	else {
		Logger._prevLogger = global.Logger;

		Logger.noConflict = function () {
			global.Logger = Logger._prevLogger;
			return Logger;
		};

		global.Logger = Logger;
	}
}(this));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEventTarget = __webpack_require__(11);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _fakeEvent = __webpack_require__(1);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _eventManager = __webpack_require__(3);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _eventType = __webpack_require__(4);

var _mediaSourceProvider = __webpack_require__(16);

var _mediaSourceProvider2 = _interopRequireDefault(_mediaSourceProvider);

var _videoTrack = __webpack_require__(6);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(7);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(8);

var _textTrack2 = _interopRequireDefault(_textTrack);

var _util = __webpack_require__(5);

var Utils = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @namespace Html5
 * @memberof Classes.Engines
 * @class Html5
 * @extends {FakeEventTarget}
 * @implements {IEngine}
 */
var Html5 = function (_FakeEventTarget) {
  _inherits(Html5, _FakeEventTarget);

  _createClass(Html5, null, [{
    key: 'createEngine',


    /**
     * @param {Source} source
     * @param {Object} config
     * @returns {IEngine}
     * @memberof Classes.Engines.Html5
     * @public
     * @static
     */
    value: function createEngine(source, config) {
      return new this(source, config);
    }

    /**
     * @param {string} mimeType
     * @returns {boolean}
     * @memberof Classes.Engines.Html5
     * @public
     * @static
     */


    /**
     * @type {string}
     * @memberof Classes.Engines.Html5
     * @public
     * @static
     */

  }, {
    key: 'canPlayType',
    value: function canPlayType(mimeType) {
      return _mediaSourceProvider2.default.canPlayType(mimeType);
    }

    /**
     * @returns {boolean}
     * @static
     * @memberof Classes.Engines.Html5
     * @public
     */

  }, {
    key: 'isSupported',
    value: function isSupported() {
      try {
        Html5.TEST_VID = Utils.Dom.createElement('video');
        Html5.TEST_VID.volume = 0.5;
      } catch (e) {
        return false;
      }
      return !!Html5.TEST_VID.canPlayType;
    }
  }]);

  function Html5(source, config) {
    _classCallCheck(this, Html5);

    var _this = _possibleConstructorReturn(this, (Html5.__proto__ || Object.getPrototypeOf(Html5)).call(this));

    _this._eventManager = new _eventManager2.default();
    _this._createVideoElement();
    _this._loadMediaSourceAdapter(source, config);
    _this._attach();
    return _this;
  }

  /**
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {void}
   */


  _createClass(Html5, [{
    key: 'destroy',
    value: function destroy() {
      this._detach();
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.destroy();
        _mediaSourceProvider2.default.destroy();
      }
      if (this._el) {
        this.pause();
        this._el.removeAttribute('src');
        if (this._el.parentNode) {
          this._el.parentNode.removeChild(this._el);
        }
      }
      this._eventManager.destroy();
    }

    /**
     * @returns {HTMLVideoElement}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'getVideoElement',
    value: function getVideoElement() {
      return this._el;
    }

    /**
     * @param {VideoTrack} videoTrack
     * @returns {void}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'selectVideoTrack',
    value: function selectVideoTrack(videoTrack) {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.selectVideoTrack(videoTrack);
      }
    }

    /**
     * @param {AudioTrack} audioTrack
     * @returns {void}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'selectAudioTrack',
    value: function selectAudioTrack(audioTrack) {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.selectAudioTrack(audioTrack);
      }
    }

    /**
     * @param {TextTrack} textTrack
     * @returns {void}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'selectTextTrack',
    value: function selectTextTrack(textTrack) {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.selectTextTrack(textTrack);
      }
    }

    /**
     * @returns {void}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'hideTextTrack',
    value: function hideTextTrack() {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.hideTextTrack();
      }
    }

    /**
     * @returns {void}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.enableAdaptiveBitrate();
      }
    }

    /**
     * @returns {boolean}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'isAdaptiveBitrateEnabled',
    value: function isAdaptiveBitrateEnabled() {
      if (this._mediaSourceAdapter) {
        return this._mediaSourceAdapter.isAdaptiveBitrateEnabled();
      }
      return false;
    }

    /**
     * @returns {void}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'play',
    value: function play() {
      return this._el.play();
    }

    /**
     * @returns {void}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'pause',
    value: function pause() {
      return this._el.pause();
    }

    /**
     * @param {number} startTime
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     * @returns {Promise<Object>}
     */

  }, {
    key: 'load',
    value: function load(startTime) {
      return this._mediaSourceAdapter ? this._mediaSourceAdapter.load(startTime) : Promise.resolve({});
    }

    /**
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     * @returns {string}
     */

  }, {
    key: '_attach',
    value: function _attach() {
      var _this2 = this;

      var _loop = function _loop(html5Event) {
        _this2._eventManager.listen(_this2._el, _eventType.EventType.Html5[html5Event], function () {
          _this2.dispatchEvent(new _fakeEvent2.default(_eventType.EventType.Html5[html5Event]));
        });
      };

      for (var html5Event in _eventType.EventType.Html5) {
        _loop(html5Event);
      }
      if (this._mediaSourceAdapter) {
        this._eventManager.listen(this._mediaSourceAdapter, _eventType.EventType.Player.VIDEO_TRACK_CHANGED, function (event) {
          return _this2.dispatchEvent(event);
        });
        this._eventManager.listen(this._mediaSourceAdapter, _eventType.EventType.Player.AUDIO_TRACK_CHANGED, function (event) {
          return _this2.dispatchEvent(event);
        });
        this._eventManager.listen(this._mediaSourceAdapter, _eventType.EventType.Player.TEXT_TRACK_CHANGED, function (event) {
          return _this2.dispatchEvent(event);
        });
        this._eventManager.listen(this._mediaSourceAdapter, _eventType.EventType.Player.ABR_MODE_CHANGED, function (event) {
          return _this2.dispatchEvent(event);
        });
      }
    }
  }, {
    key: '_detach',
    value: function _detach() {
      for (var html5Event in _eventType.EventType.Html5) {
        this._eventManager.unlisten(this._el, _eventType.EventType.Html5[html5Event]);
      }
      if (this._mediaSourceAdapter) {
        this._eventManager.unlisten(this._mediaSourceAdapter, _eventType.EventType.Player.VIDEO_TRACK_CHANGED);
        this._eventManager.unlisten(this._mediaSourceAdapter, _eventType.EventType.Player.AUDIO_TRACK_CHANGED);
        this._eventManager.unlisten(this._mediaSourceAdapter, _eventType.EventType.Player.TEXT_TRACK_CHANGED);
      }
    }
  }, {
    key: '_createVideoElement',
    value: function _createVideoElement() {
      this._el = Utils.Dom.createElement("video");
      this._el.id = Utils.Generator.uniqueId(5);
      this._el.className = Html5.VIDEO_ELEMENT_CLASS_NAME;
      this._el.controls = false;
    }
  }, {
    key: '_loadMediaSourceAdapter',
    value: function _loadMediaSourceAdapter(source, config) {
      this._mediaSourceAdapter = _mediaSourceProvider2.default.getMediaSourceAdapter(this.getVideoElement(), source, config);
    }
  }, {
    key: 'id',
    get: function get() {
      return Html5.id;
    }

    /**
     * @param {string} source
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     * @returns {void}
     */

  }, {
    key: 'src',
    set: function set(source) {
      this._el.src = source;
    }

    /**
     * @returns {string}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */
    ,
    get: function get() {
      if (this._mediaSourceAdapter) {
        return this._mediaSourceAdapter.src;
      }
      return "";
    }

    /**
     * @returns {number}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'currentTime',
    get: function get() {
      return this._el.currentTime;
    }

    /**
     * @param {number} to
     * @returns {void}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */
    ,
    set: function set(to) {
      this._el.currentTime = to;
    }

    /**
     * @returns {number}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'duration',
    get: function get() {
      return this._el.duration;
    }

    /**
     * @param {number} vol
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     * @returns {void}
     */

  }, {
    key: 'volume',
    set: function set(vol) {
      this._el.volume = vol;
    }

    /**
     * @returns {number}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */
    ,
    get: function get() {
      return this._el.volume;
    }

    /**
     * @returns {boolean}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'paused',
    get: function get() {
      return this._el.paused;
    }

    /**
     * @returns {boolean}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'seeking',
    get: function get() {
      return this._el.seeking;
    }

    /**
     * @returns {TimeRanges}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'seekable',
    get: function get() {
      return this._el.seekable;
    }

    /**
     * @returns {TimeRanges}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'played',
    get: function get() {
      return this._el.played;
    }

    /**
     * @returns {TimeRanges}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'buffered',
    get: function get() {
      return this._el.buffered;
    }

    /**
     * @param {boolean} mute
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     * @returns {void}
     */

  }, {
    key: 'muted',
    set: function set(mute) {
      this._el.muted = mute;
    }

    /**
     * @returns {boolean}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */
    ,
    get: function get() {
      return this._el.muted;
    }

    /**
     * @returns {boolean}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'defaultMuted',
    get: function get() {
      return this._el.defaultMuted;
    }

    /**
     * @param {string} poster
     * @returns {void}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'poster',
    set: function set(poster) {
      this._el.poster = poster;
    }

    /**
     * @returns {poster}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */
    ,
    get: function get() {
      return this._el.poster;
    }

    /**
     * @param {string} preload
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     * @returns {void}
     */

  }, {
    key: 'preload',
    set: function set(preload) {
      this._el.preload = preload;
    }

    /**
     * @returns {string}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */
    ,
    get: function get() {
      return this._el.preload;
    }

    /**
     * @param {boolean} autoplay
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     * @returns {void}
     */

  }, {
    key: 'autoplay',
    set: function set(autoplay) {
      this._el.autoplay = autoplay;
    }

    /**
     * @returns {boolean}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */
    ,
    get: function get() {
      return this._el.autoplay;
    }

    /**
     * @param {boolean} loop
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     * @returns {void}
     */

  }, {
    key: 'loop',
    set: function set(loop) {
      this._el.loop = loop;
    }

    /**
     * @returns {boolean}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */
    ,
    get: function get() {
      return this._el.loop;
    }

    /**
     * @param {boolean} controls
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     * @returns {void}
     */

  }, {
    key: 'controls',
    set: function set(controls) {
      this._el.controls = controls;
    }

    /**
     * @returns {boolean}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */
    ,
    get: function get() {
      return this._el.controls;
    }

    /**
     * @param {number} playbackRate
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     * @returns {void}
     */

  }, {
    key: 'playbackRate',
    set: function set(playbackRate) {
      this._el.playbackRate = playbackRate;
    }

    /**
     * @returns {number}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */
    ,
    get: function get() {
      return this._el.playbackRate;
    }

    /**
     * @param {number} defaultPlaybackRate
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     * @returns {void}
     */

  }, {
    key: 'defaultPlaybackRate',
    set: function set(defaultPlaybackRate) {
      this._el.defaultPlaybackRate = defaultPlaybackRate;
    }

    /**
     * @returns {number}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */
    ,
    get: function get() {
      return this._el.defaultPlaybackRate;
    }

    /**
     * @returns {boolean}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'ended',
    get: function get() {
      return this._el.ended;
    }

    /**
     * @returns {MediaError | null}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'error',
    get: function get() {
      return this._el.error;
    }

    /**
     * @returns {number}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'networkState',
    get: function get() {
      return this._el.networkState;
    }

    /**
     * @returns {number} - The current ready state of the audio/video.
     * 0 = HAVE_NOTHING - no information whether or not the audio/video is ready.
     * 1 = HAVE_METADATA - metadata for the audio/video is ready.
     * 2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond.
     * 3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available.
     * 4 = HAVE_ENOUGH_DATA - enough data available to start playing.
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'readyState',
    get: function get() {
      return this._el.readyState;
    }

    /**
     * @returns {number}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'videoHeight',
    get: function get() {
      return this._el.videoHeight;
    }

    /**
     * @returns {number}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */

  }, {
    key: 'videoWidth',
    get: function get() {
      return this._el.videoWidth;
    }

    /**
     * @param {boolean} playsinline
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     * @returns {void}
     */

  }, {
    key: 'playsinline',
    set: function set(playsinline) {
      if (playsinline) {
        this._el.setAttribute('playsinline', '');
      } else {
        this._el.removeAttribute('playsinline');
      }
    }

    /**
     * @returns {boolean}
     * @memberof Classes.Engines.Html5
     * @public
     * @instance
     */
    ,
    get: function get() {
      return this._el.getAttribute('playsinline') === '';
    }
  }]);

  return Html5;
}(_fakeEventTarget2.default);

Html5.VIDEO_ELEMENT_CLASS_NAME = 'playkit-engine-html5';
Html5.id = "html5";
exports.default = Html5;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventManager = __webpack_require__(3);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _eventType = __webpack_require__(4);

var _track = __webpack_require__(2);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(6);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(7);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(8);

var _textTrack2 = _interopRequireDefault(_textTrack);

var _baseMediaSourceAdapter = __webpack_require__(17);

var _baseMediaSourceAdapter2 = _interopRequireDefault(_baseMediaSourceAdapter);

var _resolution = __webpack_require__(23);

var _util = __webpack_require__(5);

var Utils = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @namespace NativeAdapter
 * @memberof Classes.MediaSource
 * @class NativeAdapter
 * @extends {BaseMediaSourceAdapter}
 */
var NativeAdapter = function (_BaseMediaSourceAdapt) {
  _inherits(NativeAdapter, _BaseMediaSourceAdapt);

  _createClass(NativeAdapter, null, [{
    key: 'canPlayType',


    /**
     * @function canPlayType
     * @param {string} mimeType
     * @returns {boolean}
     * @static
     * @public
     * @memberof Classes.MediaSource.NativeAdapter
     */
    value: function canPlayType(mimeType) {
      var canPlayType = typeof mimeType === 'string' ? !!Utils.Dom.createElement("video").canPlayType(mimeType.toLowerCase()) : false;
      NativeAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canPlayType.toString());
      return canPlayType;
    }

    /**
     * @function createAdapter
     * @param {HTMLVideoElement} videoElement
     * @param {Object} source
     * @param {Object} config
     * @returns {IMediaSourceAdapter}
     * @static
     * @public
     * @memberof Classes.MediaSource.NativeAdapter
     */

    /**
     * @member {string}
     * @static
     * @public
     * @memberof Classes.MediaSource.NativeAdapter
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(videoElement, source, config) {
      return new this(videoElement, source, config);
    }
  }]);

  function NativeAdapter(videoElement, source, config) {
    _classCallCheck(this, NativeAdapter);

    NativeAdapter._logger.debug('Creating adapter');

    var _this = _possibleConstructorReturn(this, (NativeAdapter.__proto__ || Object.getPrototypeOf(NativeAdapter)).call(this, videoElement, source));

    _this._eventManager = new _eventManager2.default();
    _this._progressiveSources = config.sources.progressive;
    return _this;
  }

  /**
   * @param {number} startTime
   * @function load
   * @returns {Promise<Object>}
   * @public
   * @memberof Classes.MediaSource.NativeAdapter
   * @instance
   */


  _createClass(NativeAdapter, [{
    key: 'load',
    value: function load(startTime) {
      var _this2 = this;

      if (!this._loadPromise) {
        this._loadPromise = new Promise(function (resolve, reject) {
          // We're using 'loadeddata' event for native hls (on 'loadedmetadata' native hls doesn't have tracks yet).
          _this2._eventManager.listen(_this2._videoElement, _eventType.EventType.Html5.LOADED_DATA, function () {
            _this2._eventManager.unlisten(_this2._videoElement, _eventType.EventType.Html5.LOADED_DATA);
            var data = { tracks: _this2._getParsedTracks() };
            NativeAdapter._logger.debug('The source has been loaded successfully');
            resolve(data);
          });
          _this2._eventManager.listen(_this2._videoElement, _eventType.EventType.Html5.ERROR, function (error) {
            _this2._eventManager.unlisten(_this2._videoElement, _eventType.EventType.Html5.ERROR);
            NativeAdapter._logger.error(error);
            reject(error);
          });
          if (_this2._isProgressivePlayback()) {
            _this2._setProgressiveSource();
          }
          if (_this2._sourceObj && _this2._sourceObj.url) {
            _this2._videoElement.src = _this2._sourceObj.url;
            _this2._trigger(_baseMediaSourceAdapter2.default.EventType.Player.ABR_MODE_CHANGED, { mode: _this2._isProgressivePlayback() ? 'manual' : 'auto' });
          }
          if (startTime) {
            _this2._videoElement.currentTime = startTime;
          }
        });
      }
      return this._loadPromise;
    }

    /**
     * @function destroy
     * @returns {void}
     * @public
     * @memberof Classes.MediaSource.NativeAdapter
     * @instance
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      NativeAdapter._logger.debug('destroy');
      _get(NativeAdapter.prototype.__proto__ || Object.getPrototypeOf(NativeAdapter.prototype), 'destroy', this).call(this);
      this._eventManager.destroy();
      this._loadPromise = null;
      this._progressiveSources = [];
    }

    /**
     * @function selectVideoTrack
     * @param {VideoTrack} videoTrack
     * @returns {void}
     * @public
     * @memberof Classes.MediaSource.NativeAdapter
     * @instance
     */

  }, {
    key: 'selectVideoTrack',
    value: function selectVideoTrack(videoTrack) {
      if (this._isProgressivePlayback()) {
        this._selectProgressiveVideoTrack(videoTrack);
      } else {
        this.selectAdaptiveVideoTrack(videoTrack);
      }
    }

    /**
     * @function selectAdaptiveVideoTrack
     * @param {VideoTrack} videoTrack
     * @returns {void}
     * @public
     * @memberof Classes.MediaSource.NativeAdapter
     * @instance
     */

  }, {
    key: 'selectAdaptiveVideoTrack',
    value: function selectAdaptiveVideoTrack(videoTrack) {
      var videoTracks = this._videoElement.videoTracks;
      if (videoTrack instanceof _videoTrack2.default && videoTracks && videoTracks[videoTrack.index]) {
        this._disableVideoTracks();
        videoTracks[videoTrack.index].selected = true;
        this._onTrackChanged(videoTrack);
      }
    }

    /**
     * @function selectAudioTrack
     * @param {AudioTrack} audioTrack
     * @returns {void}
     * @public
     * @memberof Classes.MediaSource.NativeAdapter
     * @instance
     */

  }, {
    key: 'selectAudioTrack',
    value: function selectAudioTrack(audioTrack) {
      var audioTracks = this._videoElement.audioTracks;
      if (audioTrack instanceof _audioTrack2.default && audioTracks && audioTracks[audioTrack.index]) {
        this._disableAudioTracks();
        audioTracks[audioTrack.index].enabled = true;
        this._onTrackChanged(audioTrack);
      }
    }

    /**
     * @function selectTextTrack
     * @param {TextTrack} textTrack
     * @returns {void}
     * @public
     * @memberof Classes.MediaSource.NativeAdapter
     * @instance
     */

  }, {
    key: 'selectTextTrack',
    value: function selectTextTrack(textTrack) {
      var textTracks = this._videoElement.textTracks;
      if (textTrack instanceof _textTrack2.default && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions') && textTracks && textTracks[textTrack.index]) {
        this._disableTextTracks();
        textTracks[textTrack.index].mode = 'showing';
        this._onTrackChanged(textTrack);
      }
    }

    /**
     * @function hideTextTrack
     * @returns {void}
     * @public
     * @memberof Classes.MediaSource.NativeAdapter
     * @instance
     */

  }, {
    key: 'hideTextTrack',
    value: function hideTextTrack() {
      this._disableTextTracks();
    }

    /**
     * Enables adaptive bitrate
     * @function enableAdaptiveBitrate
     * @returns {void}
     * @public
     * @memberof Classes.MediaSource.NativeAdapter
     * @instance
     */

  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      NativeAdapter._logger.warn('Enabling adaptive bitrate is not supported for native playback');
    }

    /**
     * @function isAdaptiveBitrateEnabled
     * @returns {boolean}
     * @public
     * @memberof Classes.MediaSource.NativeAdapter
     * @instance
     */

  }, {
    key: 'isAdaptiveBitrateEnabled',
    value: function isAdaptiveBitrateEnabled() {
      return !this._isProgressivePlayback();
    }

    /**
     * @public
     * @memberof Classes.MediaSource.NativeAdapter
     * @instance
     * @returns {string}
     */

  }, {
    key: '_setProgressiveSource',
    value: function _setProgressiveSource() {
      var suitableTrack = (0, _resolution.getSuitableSourceForResolution)(this._progressiveSources, this._videoElement.offsetWidth, this._videoElement.offsetHeight);
      if (suitableTrack) {
        this._sourceObj = suitableTrack;
      }
    }
  }, {
    key: '_isProgressivePlayback',
    value: function _isProgressivePlayback() {
      return this._sourceObj ? this._sourceObj.mimetype === 'video/mp4' : false;
    }
  }, {
    key: '_getParsedTracks',
    value: function _getParsedTracks() {
      var videoTracks = this._getParsedVideoTracks();
      var audioTracks = this._getParsedAudioTracks();
      var textTracks = this._getParsedTextTracks();
      return videoTracks.concat(audioTracks).concat(textTracks);
    }
  }, {
    key: '_getParsedVideoTracks',
    value: function _getParsedVideoTracks() {
      if (this._isProgressivePlayback()) {
        return this._getParsedProgressiveVideoTracks();
      } else {
        return this._getParsedAdaptiveVideoTracks();
      }
    }
  }, {
    key: '_getParsedProgressiveVideoTracks',
    value: function _getParsedProgressiveVideoTracks() {
      var videoTracks = this._progressiveSources;
      var parsedTracks = [];
      if (videoTracks) {
        for (var i = 0; i < videoTracks.length; i++) {
          var settings = {
            id: videoTracks[i].id,
            bandwidth: videoTracks[i].bandwidth,
            width: videoTracks[i].width,
            height: videoTracks[i].height,
            active: this._sourceObj ? videoTracks[i].id === this._sourceObj.id : false,
            index: i
          };
          parsedTracks.push(new _videoTrack2.default(settings));
        }
      }
      return parsedTracks;
    }
  }, {
    key: '_getParsedAdaptiveVideoTracks',
    value: function _getParsedAdaptiveVideoTracks() {
      //TODO check adaptation in safari hls
      var videoTracks = this._videoElement.videoTracks;
      var parsedTracks = [];
      if (videoTracks) {
        for (var i = 0; i < videoTracks.length; i++) {
          var settings = {
            //TODO calculate width/height/bandwidth
            id: videoTracks[i].id,
            active: videoTracks[i].selected,
            label: videoTracks[i].label,
            language: videoTracks[i].language,
            index: i
          };
          parsedTracks.push(new _videoTrack2.default(settings));
        }
      }
      return parsedTracks;
    }
  }, {
    key: '_getParsedAudioTracks',
    value: function _getParsedAudioTracks() {
      var audioTracks = this._videoElement.audioTracks;
      var parsedTracks = [];
      if (audioTracks) {
        for (var i = 0; i < audioTracks.length; i++) {
          var settings = {
            id: audioTracks[i].id,
            active: audioTracks[i].enabled,
            label: audioTracks[i].label,
            language: audioTracks[i].language,
            index: i
          };
          parsedTracks.push(new _audioTrack2.default(settings));
        }
      }
      return parsedTracks;
    }
  }, {
    key: '_getParsedTextTracks',
    value: function _getParsedTextTracks() {
      var textTracks = this._videoElement.textTracks;
      var parsedTracks = [];
      if (textTracks) {
        for (var i = 0; i < textTracks.length; i++) {
          var settings = {
            kind: textTracks[i].kind,
            active: textTracks[i].mode === 'showing',
            label: textTracks[i].label,
            language: textTracks[i].language,
            index: i
          };
          parsedTracks.push(new _textTrack2.default(settings));
        }
      }
      return parsedTracks;
    }
  }, {
    key: '_disableVideoTracks',
    value: function _disableVideoTracks() {
      var videoTracks = this._videoElement.videoTracks;
      if (videoTracks) {
        for (var i = 0; i < videoTracks.length; i++) {
          videoTracks[i].selected = false;
        }
      }
    }
  }, {
    key: '_disableAudioTracks',
    value: function _disableAudioTracks() {
      var audioTracks = this._videoElement.audioTracks;
      if (audioTracks) {
        for (var i = 0; i < audioTracks.length; i++) {
          audioTracks[i].enabled = false;
        }
      }
    }
  }, {
    key: '_disableTextTracks',
    value: function _disableTextTracks() {
      var textTracks = this._videoElement.textTracks;
      if (textTracks) {
        for (var i = 0; i < textTracks.length; i++) {
          textTracks[i].mode = 'disabled';
        }
      }
    }
  }, {
    key: '_selectProgressiveVideoTrack',
    value: function _selectProgressiveVideoTrack(videoTrack) {
      var _this3 = this;

      var videoTracks = this._progressiveSources;
      if (videoTrack instanceof _videoTrack2.default && videoTracks && videoTracks[videoTrack.index]) {
        var currentTime = this._videoElement.currentTime;
        var paused = this._videoElement.paused;
        this._sourceObj = videoTracks[videoTrack.index];
        this._eventManager.listen(this._videoElement, _eventType.EventType.Html5.LOADED_DATA, function () {
          _this3._eventManager.unlisten(_this3._videoElement, _eventType.EventType.Html5.LOADED_DATA);
          _this3._eventManager.listen(_this3._videoElement, _eventType.EventType.Html5.SEEKED, function () {
            _this3._eventManager.unlisten(_this3._videoElement, _eventType.EventType.Html5.SEEKED);
            _this3._onTrackChanged(videoTrack);
          });
          _this3._videoElement.currentTime = currentTime;
        });
        this._videoElement.src = this._sourceObj ? this._sourceObj.url : "";
        paused ? this._videoElement.load() : this._videoElement.play();
      }
    }
  }, {
    key: 'src',
    get: function get() {
      return this._videoElement.src;
    }
  }]);

  return NativeAdapter;
}(_baseMediaSourceAdapter2.default);

NativeAdapter._logger = _baseMediaSourceAdapter2.default.getLogger(NativeAdapter.id);
NativeAdapter.id = 'NativeAdapter';
exports.default = NativeAdapter;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Calculates the most suitable source in addition to container size.
 * @param {Array<Object>} tracks - The tracks
 * @param {number} width - The width to calculate with
 * @param {number} height - The height to calculate with
 * @returns {Object} - The most suitable source to the container size
 * @namespace getSuitableSourceForResolution
 * @memberof Utils
 */
function getSuitableSourceForResolution(tracks, width, height) {
  var mostSuitableWidth = null;
  if (height && tracks) {
    var mostSuitableWidthTracks = [];
    var minWidthDiff = Infinity;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = tracks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var track = _step.value;
        // first filter the most width suitable
        var widthDiff = Math.abs(track.width - width);
        if (widthDiff < minWidthDiff) {
          minWidthDiff = widthDiff;
          mostSuitableWidthTracks = [track];
        } else if (widthDiff === minWidthDiff) {
          mostSuitableWidthTracks.push(track);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var videoRatio = width / height;
    var mostSuitableWidthAndRatioTracks = mostSuitableWidthTracks;
    var minRatioDiff = Infinity;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = mostSuitableWidthTracks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _track = _step2.value;
        // filter the most ratio suitable from the width filter results
        if (_track.height) {
          var ratioDiff = Math.abs(_track.width / _track.height - videoRatio);
          if (ratioDiff < minRatioDiff) {
            minRatioDiff = ratioDiff;
            mostSuitableWidthAndRatioTracks = [_track];
          } else if (ratioDiff === minRatioDiff) {
            mostSuitableWidthAndRatioTracks.push(_track);
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var maxBandwidth = 0;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = mostSuitableWidthAndRatioTracks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _track2 = _step3.value;
        // select the top bitrate from the ratio filter results
        if (_track2.bandwidth > maxBandwidth || !_track2.bandwidth) {
          maxBandwidth = _track2.bandwidth || maxBandwidth;
          mostSuitableWidth = _track2;
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }
  return mostSuitableWidth;
}

exports.getSuitableSourceForResolution = getSuitableSourceForResolution;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(9);

var _player2 = _interopRequireDefault(_player);

var _eventManager = __webpack_require__(3);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _state = __webpack_require__(25);

var _state2 = _interopRequireDefault(_state);

var _stateType = __webpack_require__(15);

var _eventType = __webpack_require__(4);

var _fakeEvent = __webpack_require__(1);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @namespace StateManager
 * @class StateManager
 * @memberof Classes
 */
var StateManager = function () {
  function StateManager(player) {
    var _this = this,
        _StateType$IDLE,
        _StateType$LOADING,
        _StateType$PAUSED,
        _StateType$PLAYING,
        _StateType$BUFFERING,
        _transitions;

    _classCallCheck(this, StateManager);

    this._transitions = (_transitions = {}, _defineProperty(_transitions, _stateType.StateType.IDLE, (_StateType$IDLE = {}, _defineProperty(_StateType$IDLE, _eventType.EventType.Html5.LOAD_START, function () {
      _this._updateState(_stateType.StateType.LOADING);
      _this._dispatchEvent();
    }), _defineProperty(_StateType$IDLE, _eventType.EventType.Html5.PLAY, function () {
      _this._updateState(_stateType.StateType.BUFFERING);
      _this._dispatchEvent();
    }), _StateType$IDLE)), _defineProperty(_transitions, _stateType.StateType.LOADING, (_StateType$LOADING = {}, _defineProperty(_StateType$LOADING, _eventType.EventType.Html5.LOADED_METADATA, function () {
      if (_this._player.config.playback.autoplay) {
        _this._updateState(_stateType.StateType.PLAYING);
      } else {
        _this._updateState(_stateType.StateType.PAUSED);
      }
      _this._dispatchEvent();
    }), _defineProperty(_StateType$LOADING, _eventType.EventType.Html5.ERROR, function () {
      _this._updateState(_stateType.StateType.IDLE);
      _this._dispatchEvent();
    }), _StateType$LOADING)), _defineProperty(_transitions, _stateType.StateType.PAUSED, (_StateType$PAUSED = {}, _defineProperty(_StateType$PAUSED, _eventType.EventType.Html5.PLAY, function () {
      _this._updateState(_stateType.StateType.PLAYING);
      _this._dispatchEvent();
    }), _defineProperty(_StateType$PAUSED, _eventType.EventType.Html5.PLAYING, function () {
      _this._updateState(_stateType.StateType.PLAYING);
      _this._dispatchEvent();
    }), _defineProperty(_StateType$PAUSED, _eventType.EventType.Html5.ENDED, function () {
      _this._updateState(_stateType.StateType.IDLE);
      _this._dispatchEvent();
    }), _StateType$PAUSED)), _defineProperty(_transitions, _stateType.StateType.PLAYING, (_StateType$PLAYING = {}, _defineProperty(_StateType$PLAYING, _eventType.EventType.Html5.PAUSE, function () {
      _this._updateState(_stateType.StateType.PAUSED);
      _this._dispatchEvent();
    }), _defineProperty(_StateType$PLAYING, _eventType.EventType.Html5.WAITING, function () {
      _this._updateState(_stateType.StateType.BUFFERING);
      _this._dispatchEvent();
    }), _defineProperty(_StateType$PLAYING, _eventType.EventType.Html5.ENDED, function () {
      _this._updateState(_stateType.StateType.IDLE);
      _this._dispatchEvent();
    }), _defineProperty(_StateType$PLAYING, _eventType.EventType.Html5.ERROR, function () {
      _this._updateState(_stateType.StateType.IDLE);
      _this._dispatchEvent();
    }), _StateType$PLAYING)), _defineProperty(_transitions, _stateType.StateType.BUFFERING, (_StateType$BUFFERING = {}, _defineProperty(_StateType$BUFFERING, _eventType.EventType.Html5.PLAYING, function () {
      _this._updateState(_stateType.StateType.PLAYING);
      _this._dispatchEvent();
    }), _defineProperty(_StateType$BUFFERING, _eventType.EventType.Html5.PAUSE, function () {
      _this._updateState(_stateType.StateType.PAUSED);
      _this._dispatchEvent();
    }), _StateType$BUFFERING)), _transitions);

    this._player = player;
    this._logger = _logger2.default.getLogger("StateManager");
    this._eventManager = new _eventManager2.default();
    this._history = [];
    this._prevState = null;
    this._curState = new _state2.default(_stateType.StateType.IDLE);
    this._attachListeners();
  }

  /**
   * Get the current state of the player.
   * @public
   * @returns {State} - The current state of the player.
   * @instance
   * @readonly
   * @memberof Classes.StateManager
   */


  _createClass(StateManager, [{
    key: 'destroy',


    /**
     * Destroys the state manager.
     * @public
     * @returns {void}
     * @instance
     * @memberof Classes.StateManager
     */
    value: function destroy() {
      this._history = [];
      this._eventManager.destroy();
    }
  }, {
    key: '_attachListeners',
    value: function _attachListeners() {
      this._eventManager.listen(this._player, _eventType.EventType.Html5.ERROR, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _eventType.EventType.Html5.ENDED, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _eventType.EventType.Html5.PLAY, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _eventType.EventType.Html5.LOAD_START, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _eventType.EventType.Html5.PLAYING, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _eventType.EventType.Html5.LOADED_METADATA, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _eventType.EventType.Html5.PAUSE, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _eventType.EventType.Html5.WAITING, this._doTransition.bind(this));
    }
  }, {
    key: '_doTransition',
    value: function _doTransition(event) {
      this._logger.debug('Do transition request', event);
      var transition = this._transitions[this._curState.type];
      if (typeof transition[event.type] === 'function') {
        transition[event.type]();
      }
    }
  }, {
    key: '_updateState',
    value: function _updateState(type) {
      if (this._curState.type !== type) {
        this._curState.duration = Date.now() / 1000;
        this._history.push(this._curState);
        this._prevState = this._curState;
        this._curState = new _state2.default(type);
        this._logger.debug('Switch player state: from ' + this._prevState.type + ' to ' + this._curState.type);
      }
    }
  }, {
    key: '_dispatchEvent',
    value: function _dispatchEvent() {
      var event = new _fakeEvent2.default(_eventType.EventType.Player.PLAYER_STATE_CHANGED, {
        'oldState': this._prevState,
        'newState': this._curState
      });
      this._player.dispatchEvent(event);
    }
  }, {
    key: 'currentState',
    get: function get() {
      return this._curState;
    }

    /**
     * Get the previous state of the player.
     * @public
     * @returns {State|null} - The previous state of the player (null if no state was before).
     * @instance
     * @readonly
     * @memberof Classes.StateManager
     */

  }, {
    key: 'previousState',
    get: function get() {
      return this._prevState;
    }

    /**
     * Get the state history of the player.
     * @public
     * @returns {Array<State>} - The state history of the player.
     * @instance
     * @readonly
     * @memberof Classes.StateManager
     */

  }, {
    key: 'history',
    get: function get() {
      return this._history;
    }
  }]);

  return StateManager;
}();

exports.default = StateManager;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @namespace State
 * @class State
 * @memberof Classes
 */
var State = function () {
  function State(type) {
    _classCallCheck(this, State);

    this.type = type;
    this._duration = 0;
    this._timestamp = Date.now() / 1000;
  }

  /**
   * @returns {number}
   * @public
   * @instance
   * @memberof Classes.State
   */

  /**
   * @type {string}
   * @public
   * @instance
   * @memberof Classes.State
   */


  _createClass(State, [{
    key: "duration",
    get: function get() {
      return this._duration;
    }

    /**
     * @param {number} endTime
     * @public
     * @instance
     * @memberof Classes.State
     */
    ,
    set: function set(endTime) {
      this._duration = endTime - this._timestamp;
    }
  }]);

  return State;
}();

exports.default = State;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * @namespace TrackType
 * @memberof Enums
 * @typedef {TrackType}
 */
var TrackType = exports.TrackType = {
  /**
   * @enum
   * @memberof Enums.TrackType
   * @public
   */
  VIDEO: "video",
  /**
   * @enum
   * @memberof Enums.TrackType
   * @public
   */
  AUDIO: "audio",
  /**
   * @enum
   * @memberof Enums.TrackType
   * @public
   */
  TEXT: "text"
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _middleware = __webpack_require__(28);

var _middleware2 = _interopRequireDefault(_middleware);

var _baseMiddleware = __webpack_require__(14);

var _baseMiddleware2 = _interopRequireDefault(_baseMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @namespace PlaybackMiddleware
 * @class PlaybackMiddleware
 * @memberof Classes
 */
var PlaybackMiddleware = function () {
  function PlaybackMiddleware() {
    _classCallCheck(this, PlaybackMiddleware);

    this._middleware = new _middleware2.default(PlaybackMiddleware.Actions);
  }

  /**
   * Registers a base middleware instance to the middleware chain.
   * @param {BaseMiddleware} middlewareInstance - The base middleware instance.
   * @public
   * @returns {void}
   * @instance
   * @memberof Classes.PlaybackMiddleware
   */


  /**
   * The possible actions of the playback middleware.
   * @static
   * @namespace Actions
   * @memberof Classes.PlaybackMiddleware
   */


  _createClass(PlaybackMiddleware, [{
    key: 'use',
    value: function use(middlewareInstance) {
      this._middleware.use(middlewareInstance);
    }

    /**
     * Runs a play chain.
     * @param {Function} callback - The last play handler in the chain.
     * @public
     * @returns {void}
     * @instance
     * @memberof Classes.PlaybackMiddleware
     */

  }, {
    key: 'play',
    value: function play(callback) {
      this._middleware.run(PlaybackMiddleware.Actions.PLAY, callback);
    }

    /**
     * Runs a pause chain.
     * @param {Function} callback - The last pause handler in the chain.
     * @public
     * @returns {void}
     * @instance
     * @memberof Classes.PlaybackMiddleware
     */

  }, {
    key: 'pause',
    value: function pause(callback) {
      this._middleware.run(PlaybackMiddleware.Actions.PAUSE, callback);
    }
  }]);

  return PlaybackMiddleware;
}();

PlaybackMiddleware.Actions = {
  /**
   * @memberof Classes.PlaybackMiddleware.Actions
   */
  PLAY: 'play',
  /**
   * @memberof Classes.PlaybackMiddleware.Actions
   */
  PAUSE: 'pause'
};
exports.default = PlaybackMiddleware;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiMap = __webpack_require__(10);

var _multiMap2 = _interopRequireDefault(_multiMap);

var _baseMiddleware = __webpack_require__(14);

var _baseMiddleware2 = _interopRequireDefault(_baseMiddleware);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @namespace Middleware
 * @class Middleware
 * @memberof Classes
 */
var Middleware = function () {
  function Middleware(actions) {
    _classCallCheck(this, Middleware);

    this._actions = actions;
    this._middlewares = new _multiMap2.default();
    this._logger = _logger2.default.getLogger("Middleware");
  }

  /**
   * Registers a base middleware instance to the middleware chain.
   * @param {BaseMiddleware} middlewareInstance - The base middleware instance.
   * @public
   * @returns {void}
   * @instance
   * @memberof Classes.Middleware
   */


  _createClass(Middleware, [{
    key: 'use',
    value: function use(middlewareInstance) {
      for (var _action in this._actions) {
        var apiAction = this._actions[_action];
        // $FlowFixMe
        if (typeof middlewareInstance[apiAction] === 'function') {
          this._logger.debug('Register <' + middlewareInstance.id + '> for action ' + apiAction);
          // $FlowFixMe
          this._middlewares.push(apiAction, middlewareInstance[apiAction].bind(middlewareInstance));
        }
      }
    }

    /**
     * Runs a middleware chain for a specific action.
     * @param {string} action - The action to run.
     * @param {Function} callback - The callback function.
     * @public
     * @instance
     * @returns {void}
     * @memberof Classes.Middleware
     */

  }, {
    key: 'run',
    value: function run(action, callback) {
      var _this = this;

      this._logger.debug("Start middleware chain for action " + action);
      var middlewares = this._middlewares.get(action);
      this._executeMiddleware(middlewares, function () {
        _this._logger.debug("Finish middleware chain for action " + action);
        callback();
      });
    }
  }, {
    key: '_executeMiddleware',
    value: function _executeMiddleware(middlewares, callback) {
      // eslint-disable-next-line no-unused-vars
      var composition = middlewares.reduceRight(function (next, fn) {
        return function (v) {
          fn(next);
        };
      }, callback);
      composition();
    }
  }]);

  return Middleware;
}();

exports.default = Middleware;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {"playback":{"playsinline":false,"preload":"none","autoplay":false,"muted":false,"options":{"html5":{"hls":{},"dash":{}}},"streamPriority":[{"engine":"html5","format":"hls"},{"engine":"html5","format":"dash"},{"engine":"html5","format":"progressive"}]}}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * UAParser.js v0.7.14
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.14',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var margedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    margedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    margedRegexes[i] = regexes[i];
                }
            }
            return margedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function (ua, arrays) {

            //var result = {},
            var i = 0, j, k, p, q, matches, match;//, args = arguments;

            /*// construct object barebones
            for (p = 0; p < args[1].length; p++) {
                q = args[1][p];
                result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
            }*/

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
            //console.log(this);
            //return this;
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

            // Trident based
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser/Baidu
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
            ], [NAME, VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
            ], [NAME, VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(puffin)\/([\w\.]+)/i                                              // Puffin
            ], [[NAME, 'Puffin'], VERSION], [

            /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i
                                                                                // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
            ], [NAME, VERSION], [

            /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
            ], [NAME, VERSION], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
            ], [VERSION, [NAME, 'Facebook']], [

            /(headlesschrome) ([\w\.]+)/i                                       // Chrome Headless
            ], [VERSION, [NAME, 'Chrome Headless']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /((?:oculus|samsung)browser)\/([\w\.]+)/i
            ], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser

            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /(coast)\/([\w\.]+)/i                                               // Opera Coast
            ], [[NAME, 'Opera Coast'], VERSION], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]

            /* /////////////////////
            // Media players BEGIN
            ////////////////////////

            , [

            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
            /(coremedia) v((\d+)[\w\._]+)/i
            ], [NAME, VERSION], [

            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
            ], [NAME, VERSION], [

            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
            ], [NAME, VERSION], [

            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
            ], [NAME, VERSION], [
            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
            ], [NAME, VERSION], [

            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
            ], [[NAME, 'Flip Player'], VERSION], [

            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
            ], [NAME], [

            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                // Gstreamer
            ], [NAME, VERSION], [

            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                // Java/urllib/requests/wget/cURL
            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
            ], [NAME, VERSION], [

            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
            ], [[NAME, /_/g, ' '], VERSION], [

            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                // MPlayer SVN
            ], [NAME, VERSION], [

            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
            ], [NAME, VERSION], [

            /(mplayer)/i,                                                       // MPlayer (no other info)
            /(yourmuze)/i,                                                      // YourMuze
            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
            ], [NAME], [

            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
            ], [NAME, VERSION], [

            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
            ], [NAME, VERSION], [

            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
            ], [NAME, VERSION], [

            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
            /(winamp)\s((\d+)[\w\.-]+)/i,
            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
            ], [NAME, VERSION], [

            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                // inlight radio
            ], [NAME], [

            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                // SoundTap/Totem/Stagefright/Streamium
            ], [NAME, VERSION], [

            /(smp)((\d+)[\d\.]+)/i                                              // SMP
            ], [NAME, VERSION], [

            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
            /(vlc)\/((\d+)[\w\.-]+)/i,
            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
            ], [NAME, VERSION], [

            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
            /(windows-media-player)\/((\d+)[\w\.-]+)/i
            ], [[NAME, /-/g, ' '], VERSION], [

            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                // Windows Media Server
            ], [VERSION, [NAME, 'Windows']], [

            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
            ], [NAME, VERSION], [

            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
            ], [[NAME, 'rad.io'], VERSION]

            //////////////////////
            // Media players END
            ////////////////////*/

        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
            /(zte)-(\w+)*/i,                                                    // ZTE
            /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                                                                                // Alcatel/GeeksPhone/Lenovo/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /d\/huawei([\w\s-]+)[;\)]/i,
            /(nexus\s6p)/i                                                      // Huawei
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w+)*/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /smart-tv.+(samsung)/i
            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w+)*/i                                                       // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]+)*/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w+)*/i,
            /android.+lg(\-?[\d\w]+)\s+build/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+;\s(pixel c)\s/i                                          // Google Pixel C
            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

            /android.+;\s(pixel xl|pixel)\s/i                                   // Google Pixel
            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

            /android.+(\w+)\s+build\/hm\1/i,                                    // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [

            /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu Tablet
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, TABLET]], [

            /android.+a000(1)\s+build/i                                         // OnePlus
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Venue[\d\s]*)\s+build/i                          // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [

            /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
            ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i                        // ZTE K Series Tablet
            ], [[VENDOR, 'ZTE'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [

            /(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,
            /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i          // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(NS-?.+)\s+build/i                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((NX|Next)-?.+)\s+build/i                         // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones

            /android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i                     // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [

            /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i             // Le Pan Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i                         // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [

            /android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [

            /android.+(Gigaset)[\s\-]+(Q.+)\s+build/i                           // Gigaset Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL], [

            /(android.+)[;\/].+build/i                                          // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]


        /*//////////////////////////
            // TODO: move to string map
            ////////////////////////////

            /(C6603)/i                                                          // Sony Xperia Z C6603
            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
            /(C6903)/i                                                          // Sony Xperia Z 1
            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

            /(T3C)/i                                                            // Advan Vandroid T3C
            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

            /(V972M)/i                                                          // ZTE V972M
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [

            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

            /////////////
            // END TODO
            ///////////*/

        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,                  // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
            /linux;.+(sailfish);/i                                              // Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
            /(gnu)\s?([\w\.]+)*/i                                               // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                  // Haiku
            ], [NAME, VERSION],[

            /cfnetwork\/.+darwin/i,
            /ip[honead]+(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i                // iOS
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [

            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
            /(unix)\s?([\w\.]+)*/i                                              // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////

    var Browser = function (name, version) {
        this[NAME] = name;
        this[VERSION] = version;
    };
    var CPU = function (arch) {
        this[ARCHITECTURE] = arch;
    };
    var Device = function (vendor, model, type) {
        this[VENDOR] = vendor;
        this[MODEL] = model;
        this[TYPE] = type;
    };
    var Engine = Browser;
    var OS = Browser;

    var UAParser = function (uastring, extensions) {

        if (typeof uastring === 'object') {
            extensions = uastring;
            uastring = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
        var browser = new Browser();
        var cpu = new CPU();
        var device = new Device();
        var engine = new Engine();
        var os = new OS();

        this.getBrowser = function () {
            mapper.rgx.call(browser, ua, rgxmap.browser);
            browser.major = util.major(browser.version); // deprecated
            return browser;
        };
        this.getCPU = function () {
            mapper.rgx.call(cpu, ua, rgxmap.cpu);
            return cpu;
        };
        this.getDevice = function () {
            mapper.rgx.call(device, ua, rgxmap.device);
            return device;
        };
        this.getEngine = function () {
            mapper.rgx.call(engine, ua, rgxmap.engine);
            return engine;
        };
        this.getOS = function () {
            mapper.rgx.call(os, ua, rgxmap.os);
            return os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            browser = new Browser();
            cpu = new CPU();
            device = new Device();
            engine = new Engine();
            os = new OS();
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };
    //UAParser.Utils = util;

    ///////////
    // Export
    //////////


    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if ("function" === FUNC_TYPE && __webpack_require__(31)) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return UAParser;
            }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (window) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window && (window.jQuery || window.Zepto);
    if (typeof $ !== UNDEF_TYPE) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(35)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(undefined);
// imports


// module
exports.push([module.i, ".playkit-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  outline: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n*[class^=\"playkit-engine-\"] {\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(36);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 36 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {"name":"playkit-js","version":"0.3.0","main":"dist/playkit.js","scripts":{"clean":"rm -rf ./dist","prebuild":"npm run clean","build:prod":"NODE_ENV=production webpack","build":"webpack","dev":"webpack --progress --colors --watch","test":"NODE_ENV=test karma start --color","test:chrome":"NODE_ENV=test karma start --color --browsers Chrome","test:chrome:dots":"NODE_ENV=test karma start --color --browsers Chrome --reporters dots","test:firefox":"NODE_ENV=test karma start --color --browsers Firefox","test:safari":"NODE_ENV=test karma start --color --browsers Safari","test:watch":"NODE_ENV=test karma start --color --auto-watch","start":"webpack-dev-server","release":"npm run build:prod && npm run commit:dist && standard-version","publish":"git push --follow-tags --no-verify origin develop","eslint":"eslint . --color","flow":"flow check","eslint:flow:test":"npm run eslint && npm run flow && npm run test","commit:dist":"git add --all dist && (git commit -m 'chore: update dist' || exit 0)","prepush-msg:build":"echo '\nRunning build before push...\n' && exit 0","prepush-msg:dist":"echo '\nAdding dist files to a seperate commit...\n' && exit 0","prepush-msg:done":"echo '\nPre push tasks are done.\n' && exit 0","docs:generate":"documentation build flow-typed src -f html -o docs","docs:serve":"documentation serve flow-typed src","docs:watch":"documentation serve --watch flow-typed src"},"pre-push":["prepush-msg:build","prebuild","build","build:prod","prepush-msg:dist","commit:dist","prepush-msg:done"],"devDependencies":{"babel-cli":"^6.18.0","babel-core":"^6.18.2","babel-eslint":"^7.1.1","babel-loader":"^6.2.7","babel-plugin-istanbul":"^4.0.0","babel-plugin-transform-class-properties":"^6.22.0","babel-plugin-transform-flow-strip-types":"^6.22.0","babel-preset-es2015":"^6.18.0","babel-register":"^6.23.0","chai":"^3.5.0","cross-env":"^3.1.4","css-loader":"^0.28.4","documentation":"^5.1.0","eslint":"^3.10.0","eslint-loader":"^1.6.1","eslint-plugin-flowtype":"^2.30.0","eslint-plugin-import":"^2.2.0","eslint-plugin-mocha-no-only":"^0.0.5","flow-bin":"latest","istanbul":"^0.4.5","karma":"^1.5.0","karma-chai":"^0.1.0","karma-chrome-launcher":"^2.0.0","karma-cli":"^1.0.1","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.0.1","karma-ie-launcher":"^1.0.0","karma-mocha":"^1.3.0","karma-safari-launcher":"^1.0.0","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^2.0.2","mocha":"^3.2.0","mocha-cli":"^1.0.1","pre-push":"^0.1.1","sinon":"^2.0.0","sinon-chai":"^2.8.0","standard-version":"^4.0.0","style-loader":"^0.18.2","uglifyjs-webpack-plugin":"^0.4.3","webpack":"latest","webpack-dev-server":"latest"},"repository":{"type":"git","url":"https://github.com/kaltura/playkit-js"},"keywords":["kaltura","player","html5 player"],"license":"AGPLV3","bugs":{"url":"https://github.com/kaltura/playkit-js/issues"},"homepage":"https://github.com/kaltura/playkit-js","dependencies":{"js-logger":"^1.3.0","ua-parser-js":"^0.7.13"}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=playkit.js.map