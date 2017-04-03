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
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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

var _jsLogger = __webpack_require__(16);

var JsLogger = _interopRequireWildcard(_jsLogger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var loggerFactory = new LoggerFactory({ defaultLevel: JsLogger.DEBUG });
var LOG_LEVEL = {
  "DEBUG": JsLogger.DEBUG,
  "INFO": JsLogger.INFO,
  "TIME": JsLogger.TIME,
  "WARN": JsLogger.WARN,
  "ERROR": JsLogger.ERROR,
  "OFF": JsLogger.OFF
};

exports.default = loggerFactory;
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
 *
 * @param {string} type
 * @param {Object=} opt_dict
 * @constructor
 * @extends {Event}
 */
var FakeEvent = function () {

  /**
   * Non-standard property read by FakeEventTarget to stop processing listeners.
   * @type {boolean}
   */


  /** @type {EventTarget} */


  /** @const {string} */


  /** @const {boolean} */

  /** @const {boolean} */
  function FakeEvent(type, payload) {
    _classCallCheck(this, FakeEvent);

    // These Properties below cannot be set by dict.  They are all provided for
    // compatibility with native events.

    /** @const {boolean} */
    this.bubbles = false;

    /** @const {boolean} */
    this.cancelable = false;

    /** @const {boolean} */
    this.defaultPrevented = false;

    /**
     * According to MDN, Chrome uses high-res timers instead of epoch time.
     * Follow suit so that timeStamps on FakeEvents use the same base as
     * on native Events.
     * @const {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp
     */
    this.timeStamp = window.performance ? window.performance.now() : Date.now();

    /** @const {string} */
    this.type = type;

    /** @const {boolean} */
    this.isTrusted = false;

    /** @type {EventTarget} */
    this.currentTarget = null;

    /** @type {EventTarget} */
    this.target = null;

    /**
     * Non-standard property read by FakeEventTarget to stop processing listeners.
     * @type {boolean}
     */
    this.stopped = false;

    this.payload = payload;
  }

  /**
   * Does nothing, since FakeEvents have no default.  Provided for compatibility
   * with native Events.
   * @override
   */


  /** @type {EventTarget} */


  /** @const {boolean} */


  /**
   * According to MDN, Chrome uses high-res timers instead of epoch time.
   * Follow suit so that timeStamps on FakeEvents use the same base as
   * on native Events.
   * @const {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp
   */


  /** @const {boolean} */


  _createClass(FakeEvent, [{
    key: "preventDefault",
    value: function preventDefault() {}

    /**
     * Stops processing event listeners for this event.  Provided for compatibility
     * with native Events.
     * @override
     */

  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this.stopped = true;
    }

    /**
     * Does nothing, since FakeEvents do not bubble.  Provided for compatibility
     * with native Events.
     * @override
     */

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

var _loggerFactory = __webpack_require__(0);

var _loggerFactory2 = _interopRequireDefault(_loggerFactory);

var _PlayerError = __webpack_require__(5);

var _PlayerError2 = _interopRequireDefault(_PlayerError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base of media source adapters
 * @classdesc
 */
var BaseMediaSourceAdapter = function () {
  _createClass(BaseMediaSourceAdapter, null, [{
    key: 'isSupported',


    /**
     * Checks if the media source adapter is supported
     * @function isSupported
     * @returns {boolean}
     * @static
     */

    /**
     * The player wrapper of the media source adapter
     * @member {any} _msPlayer
     * @private
     */

    /**
     * The logger of the media source adapter
     * @member {ILogger} _logger
     * @static
     * @private
     */
    value: function isSupported() {
      return true;
    }

    /**
     * Checks if the media source adapter can play a given mime type
     * @function canPlayType
     * @param {string} mimeType
     * @returns {boolean}
     * @static
     */

    /**
     * The source URL
     * @member {string} _source
     * @private
     */

    /**
     * The name of the media source adapter
     * @member {string} _name
     * @static
     * @private
     */

    /**
     * The supported mime types by the media source adapter
     * @member {Array} _mimeTypes
     * @static
     * @private
     */

  }, {
    key: 'canPlayType',
    value: function canPlayType(mimeType) {
      return !!(this._mimeTypes && this._mimeTypes.includes(mimeType));
    }

    /**
     * Factory method to create media source adapter
     * @function createAdapter
     * @param {HTMLVideoElement} videoElement - The video element which bind to the media source adapter
     * @param {string} source - The source URL
     * @param {Object} config - The media source adapter configuration
     * @returns {BaseMediaSourceAdapter}
     * @static
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(videoElement, source, config) {
      return new this(videoElement, source, config);
    }

    /**
     * Error handler
     * @function onError
     * @param {Object} error
     * @static
     */

  }, {
    key: 'onError',
    value: function onError(error) {
      this._logger.error(error);
    }

    /**
     * @constructor
     * @param {string} name - The name of the media source adapter
     */

  }]);

  function BaseMediaSourceAdapter(name) {
    _classCallCheck(this, BaseMediaSourceAdapter);

    this._logger = _loggerFactory2.default.getLogger(name);
  }

  /**
   * Load the video source
   * @function load
   * @abstract
   */


  _createClass(BaseMediaSourceAdapter, [{
    key: 'load',
    value: function load() {
      throw new _PlayerError2.default(_PlayerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'load').getError();
    }

    /**
     * Destroying the _msPlayer
     * @function destroy
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      // should do nothing. implemented by the inheritor if necessary.
    }
  }]);

  return BaseMediaSourceAdapter;
}();

exports.default = BaseMediaSourceAdapter;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _fakeEventTarget = __webpack_require__(10);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _fakeEvent = __webpack_require__(1);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _events = __webpack_require__(9);

var _events2 = _interopRequireDefault(_events);

var _util = __webpack_require__(12);

var _stringUtils = __webpack_require__(15);

var _loggerFactory = __webpack_require__(0);

var _loggerFactory2 = _interopRequireDefault(_loggerFactory);

var _html = __webpack_require__(14);

var _html2 = _interopRequireDefault(_html);

var _PluginManager = __webpack_require__(8);

var _PluginManager2 = _interopRequireDefault(_PluginManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = _loggerFactory2.default.getLogger('Player');

var Player = function (_FakeEventTarget) {
  _inherits(Player, _FakeEventTarget);

  function Player(config) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

    _this.pluginManager_ = new _PluginManager2.default();
    _this.eventManager_ = new _eventManager2.default();
    _this.engineEventHandlers_ = new Map();
    _events2.default.forEach(function (event) {
      _this.engineEventHandlers_.set('onEngine' + (0, _stringUtils.capitlize)(event) + '_', function (event) {
        return _this.dispatchEvent(event);
      });
    });
    _this.config_ = config || Player.defaultConfig_();
    _this.loadPlugins(_this.config_);
    _this.selectEngine(_this.config_);
    _this.attachMedia();
    logger.info('player is ready!');
    return _this;
  }

  _createClass(Player, [{
    key: 'destroy',
    value: function destroy() {
      this.engine_.destroy();
      this.eventManager_.destroy();
      this.pluginManager_.destroy();
      // this.engine_ = null;
      // this.eventManager_ = null;
      this.config_ = null;
    }
  }, {
    key: 'loadPlugins',
    value: function loadPlugins(config) {
      var plugins = config.plugins;
      for (var name in plugins) {
        if (plugins.hasOwnProperty(name)) {
          this.pluginManager_.load(name, this, plugins[name]);
        }
      }
    }
  }, {
    key: 'selectEngine',
    value: function selectEngine(config) {
      if (config && config.sources) {
        var sources = config.sources;
        for (var i = 0; i < sources.length; i++) {
          if (_html2.default.canPlayType(sources[i].mimetype)) {
            this.loadEngine(sources[i], config);
          }
        }
      }
    }
  }, {
    key: 'loadEngine',
    value: function loadEngine(source, config) {
      this.engine_ = new _html2.default(source, config);
      if (config.preload === "auto") {
        this.load();
      }
    }
  }, {
    key: 'attachMedia',
    value: function attachMedia() {
      var _this2 = this;

      // Listen to all HTML5-defined events and trigger them on the player
      _events2.default.forEach(function (event) {
        var handler = _this2.engineEventHandlers_.get('onEngine' + (0, _stringUtils.capitlize)(event) + '_');
        if (handler) {
          _this2.eventManager_.listen(_this2.engine_, event, handler);
        }
      });
    }

    //  <editor-fold desc="playback interface">
    /**
     * Start/resume playback
     * @returns {Player}
     */

  }, {
    key: 'play',
    value: function play() {
      return this.engine_.play();
    }

    /**
     * Pause playback
     * @returns {Player}
     */

  }, {
    key: 'pause',
    value: function pause() {
      return this.engine_.pause();
    }

    /**
     * Load media
     */

  }, {
    key: 'load',
    value: function load() {
      this.engine_.load();
    }

    /**
     * Set the current time in seconds
     * @param to {Number}
     */

  }, {
    key: 'ready',


    // </editor-fold>

    // <editor-fold desc="State">
    value: function ready() {}

    /**
     * Get paused state
     * @returns {boolean}
     */

  }, {
    key: 'buffered',
    value: function buffered() {}

    /**
     * Set player muted state
     * @param mute {boolean}
     */

  }, {
    key: 'currentTime',
    set: function set(to) {
      if ((0, _util.isNumber)(to)) {
        var boundedTo = to;
        if (to < 0) {
          boundedTo = 0;
        }
        if (boundedTo > this.engine_.duration) {
          boundedTo = this.engine_.duration;
        }
        this.engine_.currentTime = boundedTo;
      }
    }

    /**
     * Get the current time in seconds
     * @returns {Number}
     */
    ,
    get: function get() {
      return this.engine_.currentTime;
    }

    /**
     * /**
     * Get the duration in seconds
     * @returns {Number}
     */

  }, {
    key: 'duration',
    get: function get() {
      return this.engine_.duration;
    }

    /**
     * Set playback volume
     * @param vol {Number}
     */

  }, {
    key: 'volume',
    set: function set(vol) {
      if ((0, _util.isFloat)(vol)) {
        var boundedVol = vol;
        if (boundedVol < 0) {
          boundedVol = 0;
        }
        if (boundedVol > 1) {
          boundedVol = 1;
        }
        this.engine_.volume = boundedVol;
      }
    }

    /**
     * Get playback volume
     * @returns {Number}
     */
    ,
    get: function get() {
      return this.engine_.volume;
    }
  }, {
    key: 'paused',
    get: function get() {
      return this.engine_.paused;
    }

    /**
     *
     * @returns {boolean}
     */

  }, {
    key: 'seeking',
    get: function get() {
      return this.engine_.seeking;
    }
  }, {
    key: 'muted',
    set: function set(mute) {
      this.engine_.muted = mute;
    }

    /**
     * Get player muted state
     * @returns {boolean}
     */
    ,
    get: function get() {
      return this.engine_.muted;
    }

    // </editor-fold>

  }], [{
    key: 'defaultConfig_',
    value: function defaultConfig_() {
      return {};
    }
  }]);

  return Player;
}(_fakeEventTarget2.default);

exports.default = Player;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiMap = __webpack_require__(11);

var _multiMap2 = _interopRequireDefault(_multiMap);

var _fakeEvent = __webpack_require__(1);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates a new EventManager. An EventManager maintains a collection of "event
 * bindings" between event targets and event listeners.
 *
 * @struct
 * @constructor
 * @implements {IDestroyable}
 */
var EventManager = function () {
  function EventManager() {
    _classCallCheck(this, EventManager);

    /**
     * Maps an event type to an array of event bindings.
     * @private {MultiMap.<!EventManager.Binding_>}
     */
    this.bindingMap_ = new _multiMap2.default();
  }

  /**
   * Detaches all event listeners.
   * @override
   */


  _createClass(EventManager, [{
    key: "destroy",
    value: function destroy() {
      this.removeAll();
      this.bindingMap_ = null;
      return Promise.resolve();
    }

    /**
     * Attaches an event listener to an event target.
     * @param {EventTarget} target The event target.
     * @param {string} type The event type.
     * @param {EventManager.ListenerType} listener The event listener.
     */

  }, {
    key: "listen",
    value: function listen(target, type, listener) {
      var binding = new Binding_(target, type, listener);
      if (this.bindingMap_) {
        this.bindingMap_.push(type, binding);
      }
    }

    /**
     * Detaches an event listener from an event target.
     * @param {EventTarget} target The event target.
     * @param {string} type The event type.
     */

  }, {
    key: "unlisten",
    value: function unlisten(target, type) {
      if (this.bindingMap_) {
        var list = this.bindingMap_.get(type);

        for (var i = 0; i < list.length; ++i) {
          var binding = list[i];

          if (binding.target == target) {
            binding.unlisten();
            if (this.bindingMap_) {
              this.bindingMap_.remove(type, binding);
            }
          }
        }
      }
    }

    /**
     * Detaches all event listeners from all targets.
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      if (this.bindingMap_) {
        var listeners = this.bindingMap_.getAll();

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

        if (this.bindingMap_) {
          this.bindingMap_.clear();
        }
      }
    }
  }]);

  return EventManager;
}();

/**
 * @typedef {function(!Event)}
 */


/**
 * Creates a new Binding_ and attaches the event listener to the event target.
 * @param {EventTarget} target The event target.
 * @param {string} type The event type.
 * @param {EventManager.ListenerType} listener The event listener.
 * @constructor
 * @private
 */
var Binding_ = function () {
  function Binding_(target, type, listener) {
    _classCallCheck(this, Binding_);

    /** @type {EventTarget} */
    this.target = target;

    /** @type {string} */
    this.type = type;

    /** @type {?EventManager.ListenerType} */
    this.listener = listener;

    this.target.addEventListener(type, listener, false);
  }

  /**
   * Detaches the event listener from the event target. This does nothing if the
   * event listener is already detached.
   */


  _createClass(Binding_, [{
    key: "unlisten",
    value: function unlisten() {
      if (!this.target) return;

      this.target.removeEventListener(this.type, this.listener, false);

      this.target = null;
      this.listener = null;
    }
  }]);

  return Binding_;
}();

exports.default = EventManager;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerAdapter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseMediaSourceAdapter = __webpack_require__(2);

var _BaseMediaSourceAdapter2 = _interopRequireDefault(_BaseMediaSourceAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Media source adapter manager
 * @classdesc
 */
var MediaSourceAdapterManager = function () {
  function MediaSourceAdapterManager() {
    _classCallCheck(this, MediaSourceAdapterManager);
  }

  _createClass(MediaSourceAdapterManager, null, [{
    key: 'register',


    /**
     * Add a media source adapter to the registry
     * @function register
     * @param {BaseMediaSourceAdapter} adapter
     * @static
     */
    value: function register(adapter) {
      if (adapter && !MediaSourceAdapterManager._mediaSourceAdapters.includes(adapter)) {
        MediaSourceAdapterManager._mediaSourceAdapters.push(adapter);
      }
    }

    /**
     * Remove a media source adapter from the registry
     * @function unregister
     * @param {BaseMediaSourceAdapter} adapter
     * @static
     */

    /**
     * The media source adapter registry
     * @member {Array<BaseMediaSourceAdapter>} _mediaSourceAdapters
     * @static
     * @private
     */

  }, {
    key: 'unregister',
    value: function unregister(adapter) {
      var index = MediaSourceAdapterManager._mediaSourceAdapters.indexOf(adapter);
      if (index > -1) {
        MediaSourceAdapterManager._mediaSourceAdapters.splice(index, 1);
      }
    }

    /**
     * Checks if one of the registered media source adapters can play a given mime type
     * @function canPlayType
     * @param {string} mimeType - The mime type to check
     * @returns {boolean}
     * @static
     */

  }, {
    key: 'canPlayType',
    value: function canPlayType(mimeType) {
      var adapters = MediaSourceAdapterManager._mediaSourceAdapters;
      for (var i = 0; i < adapters.length; i++) {
        if (adapters[i].canPlayType(mimeType)) {
          return true;
        }
      }
      return false;
    }

    /**
     * Get the appropriate media source adapter to the video source
     * @function getMediaSourceAdapter
     * @param {HTMLVideoElement} videoElement - The video element which will bind to the media source adapter
     * @param {Object} source - The video source
     * @param {Object} config - The player configuration
     * @returns {BaseMediaSourceAdapter|null}
     * @static
     */

  }, {
    key: 'getMediaSourceAdapter',
    value: function getMediaSourceAdapter(videoElement, source, config) {
      if (videoElement && source && config) {
        var adapters = MediaSourceAdapterManager._mediaSourceAdapters;
        for (var i = 0; i < adapters.length; i++) {
          if (adapters[i].canPlayType(source.mimetype)) return adapters[i].createAdapter(videoElement, source.src, config.engines);
        }
      }
      return null;
    }
  }]);

  return MediaSourceAdapterManager;
}();

MediaSourceAdapterManager._mediaSourceAdapters = [];
exports.default = MediaSourceAdapterManager;


var registerAdapter = MediaSourceAdapterManager.register;
exports.registerAdapter = registerAdapter;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(3);

var _player2 = _interopRequireDefault(_player);

var _loggerFactory = __webpack_require__(0);

var _loggerFactory2 = _interopRequireDefault(_loggerFactory);

var _util = __webpack_require__(12);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _PlayerError = __webpack_require__(5);

var _PlayerError2 = _interopRequireDefault(_PlayerError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasePlugin = function () {
  _createClass(BasePlugin, null, [{
    key: "createPlugin",


    /**
     * Factory method to create the actual plugin.
     * @param name
     * @param player
     * @param config
     * @returns {BasePlugin}
     */

    /**
     * The event manager of the plugin.
     */

    /**
     * The logger of the plugin.
     */

    /**
     * The runtime configuration of the plugin.
     */
    value: function createPlugin(name, player) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return new this(name, player, config);
    }

    /**
     * Returns under what conditions the plugin is valid.
     * Plugin must implement this method.
     * @returns {boolean}
     */

    /**
     * The default configuration of the plugin.
     * Inherited plugins should override this property.
     * @type {{}}
     */

    /**
     * Reference to the actual player.
     */

    /**
     * The name of the plugin.
     */

  }, {
    key: "isValid",
    value: function isValid() {
      throw new _PlayerError2.default(_PlayerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'isValid()').getError();
    }

    /**
     * constructor
     * @param name
     * @param player
     * @param config
     */

  }]);

  function BasePlugin(name, player, config) {
    _classCallCheck(this, BasePlugin);

    this.name = name;
    this.player = player;
    this.eventManager = new _eventManager2.default();
    this.logger = _loggerFactory2.default.getLogger(this.name);
    this.config = (0, _util.merge)(this.constructor.defaultConfig, config);
  }

  /**
   * Returns the config of the plugin.
   * If attribute is provided, returns its value.
   * @param attr
   * @returns {*}
   */


  _createClass(BasePlugin, [{
    key: "getConfig",
    value: function getConfig(attr) {
      if (attr) {
        return this.config[attr];
      }
      return this.config;
    }

    /**
     * Updates the config of the plugin.
     * @param update
     */

  }, {
    key: "updateConfig",
    value: function updateConfig(update) {
      this.config = (0, _util.merge)(this.config, update);
    }

    /**
     * Runs the destroy logic of the plugin.
     * plugin must implement this method.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      throw new _PlayerError2.default(_PlayerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'destroy()').getError();
    }

    /**
     * Getter for the plugin's name.
     * @returns {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);

  return BasePlugin;
}();

BasePlugin.defaultConfig = {};
exports.default = BasePlugin;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerPlugin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePlugin = __webpack_require__(7);

var _BasePlugin2 = _interopRequireDefault(_BasePlugin);

var _PlayerError = __webpack_require__(5);

var _PlayerError2 = _interopRequireDefault(_PlayerError);

var _player = __webpack_require__(3);

var _player2 = _interopRequireDefault(_player);

var _loggerFactory = __webpack_require__(0);

var _loggerFactory2 = _interopRequireDefault(_loggerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = _loggerFactory2.default.getLogger("PluginManager");

var PluginManager = function () {
  function PluginManager() {
    _classCallCheck(this, PluginManager);

    this._plugins = new Map();
  }
  /**
   * The registry of the plugins.
   * Maps plugin's name to his class.
   * @type {Map}
   * @private
   */

  /**
   * The active plugins in the player.
   * Maps plugin's name to his instance.
   * @type {Map}
   * @private
   */


  _createClass(PluginManager, [{
    key: "load",


    /**
     * Creates a new instance of the plugin in case isValid() of the plugin returns true.
     * @param name
     * @param player
     * @param config
     * @returns {boolean}
     */
    value: function load(name, player) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!PluginManager._registry.has(name)) {
        throw new _PlayerError2.default(_PlayerError2.default.TYPE.NOT_REGISTERED_PLUGIN, name).getError();
      }
      var pluginClass = PluginManager._registry.get(name);
      if (pluginClass != null && pluginClass.isValid()) {
        this._plugins.set(name, pluginClass.createPlugin(name, player, config));
        logger.info("Plugin <" + name + "> has been loaded.");
        return true;
      }
      logger.info("Plugin <" + name + "> isn't loaded, isValid()=false.");
      return false;
    }

    /**
     * Iterates over all the plugins and calls private _destroy.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._plugins.forEach(this._destroy.bind(this));
    }

    /**
     * Calls destroy() method of the plugin's impl.
     * @param plugin
     * @param name
     * @private
     */

  }, {
    key: "_destroy",
    value: function _destroy(plugin, name) {
      plugin.destroy();
      this._plugins.delete(name);
    }

    /**
     * Returns the plugin's instance.
     * @param name
     * @returns {BasePlugin}
     */

  }, {
    key: "get",
    value: function get(name) {
      return this._plugins.get(name);
    }
  }], [{
    key: "register",


    /**
     * Writes the plugin in the registry.
     * @param name
     * @param handler
     * @returns {boolean}
     */
    value: function register(name, handler) {
      if (typeof handler !== 'function' || handler.prototype instanceof _BasePlugin2.default === false) {
        throw new _PlayerError2.default(_PlayerError2.default.TYPE.NOT_VALID_HANDLER).getError();
      }
      if (!PluginManager._registry.has(name)) {
        PluginManager._registry.set(name, handler);
        logger.info("Plugin <" + name + "> has been registered successfully.");
        return true;
      }
      logger.info("Plugin <" + name + "> is already registered, do not register again.");
      return false;
    }

    /**
     * Removes the plugin from the registry.
     * @param name
     */

  }, {
    key: "unRegister",
    value: function unRegister(name) {
      if (PluginManager._registry.has(name)) {
        PluginManager._registry.delete(name);
        logger.info("Unregistered <" + name + "> plugin.");
      }
    }
  }]);

  return PluginManager;
}();

PluginManager._registry = new Map();
exports.default = PluginManager;


var registerPlugin = PluginManager.register;
exports.registerPlugin = registerPlugin;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PLAYER_EVENTS = ['play', 'pause',
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
'texttrackchange'];
exports.default = PLAYER_EVENTS;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEvent = __webpack_require__(1);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _multiMap = __webpack_require__(11);

var _multiMap2 = _interopRequireDefault(_multiMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A work-alike for EventTarget.  Only DOM elements may be true EventTargets,
 * but this can be used as a base class to provide event dispatch to non-DOM
 * classes.  Only FakeEvents should be dispatched.
 *
 * @struct
 * @constructor
 * @implements {EventTarget}
 * @export
 */
var FakeEventTarget = function () {
  function FakeEventTarget() {
    _classCallCheck(this, FakeEventTarget);

    /**
     * @private {!MultiMap.<FakeEventTarget.ListenerType>}
     */
    this.listeners_ = new _multiMap2.default();

    /**
     * The target of all dispatched events.  Defaults to |this|.
     * @type {EventTarget}
     */
    this.dispatchTarget = this;
  }

  /**
   * Add an event listener to this object.
   *
   * @param {string} type The event type to listen for.
   * @param {FakeEventTarget.ListenerType} listener The callback or
   *   listener object to invoke.
   * @param {boolean=} opt_capturing Ignored.  FakeEventTargets do not have
   *   parents, so events neither capture nor bubble.
   * @override
   * @export
   */


  _createClass(FakeEventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      this.listeners_.push(type, listener);
    }

    /**
     * Remove an event listener from this object.
     *
     * @param {string} type The event type for which you wish to remove a listener.
     * @param {FakeEventTarget.ListenerType} listener The callback or
     *   listener object to remove.
     * @param {boolean=} opt_capturing Ignored.  FakeEventTargets do not have
     *   parents, so events neither capture nor bubble.
     * @override
     * @export
     */

  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      this.listeners_.remove(type, listener);
    }

    /**
     * Dispatch an event from this object.
     *
     * @param {!Event} event The event to be dispatched from this object.
     * @return {boolean} True if the default action was prevented.
     * @override
     * @export
     */

  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      // In many browsers, it is complex to overwrite properties of actual Events.
      // Here we expect only to dispatch FakeEvents, which are simpler.
      //goog.asserts.assert(event instanceof FakeEvent,
      //    'FakeEventTarget can only dispatch FakeEvents!');

      var list = this.listeners_.get(event.type) || [];

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
/**
 * These are the listener types defined in the closure extern for EventTarget.
 * @typedef {EventListener|function(!Event):(boolean|undefined)}
 */
// FakeEventTarge.ListenerType;


exports.default = FakeEventTarget;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A simple multimap template.
 * @constructor
 * @struct
 * @template T
 */
var MultiMap = function () {
  function MultiMap() {
    _classCallCheck(this, MultiMap);

    /** @private {!Object.<string, !Array.<T>>} */
    this.map_ = new Map();
  }

  /**
   * Add a key, value pair to the map.
   * @param {string} key
   * @param {T} value
   */


  _createClass(MultiMap, [{
    key: "push",
    value: function push(key, value) {
      if (this.map_.has(key)) {
        var list = this.map_.get(key);
        if (Array.isArray(list)) {
          list.push(value);
          this.map_.set(key, list);
        }
      } else {
        this.map_.set(key, [value]);
      }
    }

    /**
     * Set an array of values for the key, overwriting any previous data.
     * @param {string} key
     * @param {!Array.<T>} values
     */

  }, {
    key: "set",
    value: function set(key, values) {
      this.map_.set(key, values);
    }

    /**
     * Check for a key.
     * @param {string} key
     * @return {boolean} true if the key exists.
     */

  }, {
    key: "has",
    value: function has(key) {
      return this.map_.has(key);
    }

    /**
     * Get a list of values by key.
     * @param {string} key
     * @return {Array.<T>} or null if no suZch key exists.
     */

  }, {
    key: "get",
    value: function get(key) {
      var list = this.map_.get(key);
      // slice() clones the list so that it and the map can each be modified
      // without affecting the other.
      return list ? list.slice() : [];
    }

    /**
     * Get a list of all values.
     * @return {!Array.<T>}
     */

  }, {
    key: "getAll",
    value: function getAll() {
      var list = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.map_.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
     * @param {T} value
     */

  }, {
    key: "remove",
    value: function remove(key, value) {
      if (!this.map_.has(key)) return;
      var list = this.map_.get(key);
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
     * @return {!Array.<string>}
     */
    // eslint-disable-next-line no-undef

  }, {
    key: "keys",
    value: function keys() {
      return this.map_.keys();
    }

    /**
     * Clear all keys and values from the multimap.
     */

  }, {
    key: "clear",
    value: function clear() {
      this.map_.clear();
    }
  }]);

  return MultiMap;
}();

exports.default = MultiMap;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function isNumber(n) {
  return Number(n) === n;
}

function isInt(n) {
  return isNumber(n) && n % 1 === 0;
}

function isFloat(n) {
  return isNumber(n) && n % 1 !== 0;
}

function merge(obj1, obj2) {
  if (!obj1 && !obj2) return {};
  if (!obj1) return obj2;
  if (!obj2) return obj1;
  return Object.assign(obj1, obj2);
}

exports.isNumber = isNumber;
exports.isInt = isInt;
exports.isFloat = isFloat;
exports.merge = merge;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
	"name": "playkit-js",
	"version": "0.0.1",
	"main": "dist/playkit.js",
	"scripts": {
		"clean": "rm -rf ./dist",
		"prebuild": "npm run clean",
		"build": "webpack",
		"dev": "webpack --progress --colors --watch",
		"test": "./node_modules/.bin/karma start --single-run",
		"test:watch": "./node_modules/.bin/karma start --auto-watch",
		"start": "webpack-dev-server",
		"release": "npm run build && standard-version"
	},
	"devDependencies": {
		"babel-cli": "^6.18.0",
		"babel-core": "^6.18.2",
		"babel-eslint": "^7.1.1",
		"babel-loader": "^6.2.7",
		"babel-plugin-istanbul": "^4.0.0",
		"babel-plugin-transform-class-properties": "^6.22.0",
		"babel-plugin-transform-flow-strip-types": "^6.22.0",
		"babel-preset-es2015": "^6.18.0",
		"babel-register": "^6.23.0",
		"chai": "^3.5.0",
		"cross-env": "^3.1.4",
		"eslint": "^3.10.0",
		"eslint-loader": "^1.6.1",
		"eslint-plugin-flowtype": "^2.30.0",
		"eslint-plugin-import": "^2.2.0",
		"flow-bin": "^0.38.0",
		"istanbul": "^0.4.5",
		"karma": "^1.5.0",
		"karma-chai": "^0.1.0",
		"karma-chrome-launcher": "^2.0.0",
		"karma-cli": "^1.0.1",
		"karma-coverage": "^1.1.1",
		"karma-mocha": "^1.3.0",
		"karma-sourcemap-loader": "^0.3.7",
		"karma-webpack": "^2.0.2",
		"mocha": "^3.2.0",
		"mocha-cli": "^1.0.1",
		"nyc": "^10.1.2",
		"sinon": "^2.0.0",
		"sinon-chai": "^2.8.0",
		"standard-version": "^4.0.0",
		"webpack": "latest",
		"webpack-dev-server": "latest"
	},
	"repository": {
		"type": "git",
		"url": "https://github.com/kaltura/playkit-js"
	},
	"keywords": [
		"kaltura",
		"player",
		"html5 player"
	],
	"license": "AGPLV3",
	"bugs": {
		"url": "https://github.com/kaltura/playkit-js/issues"
	},
	"homepage": "https://github.com/kaltura/playkit-js",
	"dependencies": {
		"js-logger": "^1.3.0"
	}
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEventTarget = __webpack_require__(10);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _fakeEvent = __webpack_require__(1);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _events = __webpack_require__(9);

var _events2 = _interopRequireDefault(_events);

var _mediaSourceAdapterManager = __webpack_require__(6);

var _mediaSourceAdapterManager2 = _interopRequireDefault(_mediaSourceAdapterManager);

var _BaseMediaSourceAdapter = __webpack_require__(2);

var _BaseMediaSourceAdapter2 = _interopRequireDefault(_BaseMediaSourceAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Html5 = function (_FakeEventTarget) {
  _inherits(Html5, _FakeEventTarget);

  _createClass(Html5, null, [{
    key: 'canPlayType',
    value: function canPlayType(mimeType) {
      return _mediaSourceAdapterManager2.default.canPlayType(mimeType);
    }
  }]);

  function Html5(source, config) {
    _classCallCheck(this, Html5);

    var _this = _possibleConstructorReturn(this, (Html5.__proto__ || Object.getPrototypeOf(Html5)).call(this));

    _this.createVideoElement();
    _this.eventManager_ = new _eventManager2.default();
    _this.setSource(source, config);
    _this.attach();
    return _this;
  }

  _createClass(Html5, [{
    key: 'destroy',
    value: function destroy() {
      this.deattach();
      if (this.mediaSourceAdapter_) {
        this.mediaSourceAdapter_.destroy();
      }
      if (this.el_) {
        this.pause();
        this.el_.removeAttribute('src');
        if (this.el_.parentNode) {
          this.el_.parentNode.removeChild(this.el_);
        }
      }
    }
  }, {
    key: 'attach',
    value: function attach() {
      var _this2 = this;

      _events2.default.forEach(function (event) {
        _this2.eventManager_.listen(_this2.el_, event, function () {
          _this2.dispatchEvent(new _fakeEvent2.default(event));
        });
      });
    }
  }, {
    key: 'deattach',
    value: function deattach() {
      var _this3 = this;

      _events2.default.forEach(function (event) {
        _this3.eventManager_.unlisten(_this3.el_, event);
      });
    }
  }, {
    key: 'createVideoElement',
    value: function createVideoElement() {
      this.el_ = document.createElement("video");
      //Set attributes
      this.el_.style.width = "640px";
      this.el_.style.height = "360px";
      this.el_.style.backgroundColor = "black";
      this.el_.controls = true;
      if (document && document.body) {
        document.body.appendChild(this.el_);
      }
    }
  }, {
    key: 'setSource',
    value: function setSource(source, config) {
      this.loadMediaSourceAdapter(source, config);
    }
  }, {
    key: 'loadMediaSourceAdapter',
    value: function loadMediaSourceAdapter(source, config) {
      this.mediaSourceAdapter_ = _mediaSourceAdapterManager2.default.getMediaSourceAdapter(this.el_, source, config);
    }
  }, {
    key: 'play',


    //playback interface
    /**
     * Start/resume playback
     */
    value: function play() {
      return this.el_.play();
    }

    /**
     * Pause playback
     */

  }, {
    key: 'pause',
    value: function pause() {
      return this.el_.pause();
    }

    /**
     * Load media
     */

  }, {
    key: 'load',
    value: function load() {
      if (this.mediaSourceAdapter_) {
        this.mediaSourceAdapter_.load();
      }
    }

    /**
     * Get the current time in seconds
     * @returns {Number}
     */

  }, {
    key: 'ready',


    //state
    value: function ready() {}

    /**
     * Get paused state
     * @returns {boolean}
     */

  }, {
    key: 'src',
    set: function set(source) {
      //Set source
      this.el_.src = source;
    },
    get: function get() {
      return this.el_.src;
    }
  }, {
    key: 'currentTime',
    get: function get() {
      return this.el_.currentTime;
    }

    /**
     * Set the current time in seconds
     * @param to {Number}
     */
    ,
    set: function set(to) {
      this.el_.currentTime = to;
    }

    /**
     * Get the duration in seconds
     * @returns {Number}
     */

  }, {
    key: 'duration',
    get: function get() {
      return this.el_.duration;
    }

    /**
     * Set playback volume
     * @param vol {Number}
     */

  }, {
    key: 'volume',
    set: function set(vol) {
      this.el_.volume = vol;
    }

    /**
     * Get playback volume
     * @returns {Number}
     */
    ,
    get: function get() {
      return this.el_.volume;
    }
  }, {
    key: 'paused',
    get: function get() {
      return this.el_.paused;
    }

    /**
     * Get seeking state
     * @returns {boolean}
     */

  }, {
    key: 'seeking',
    get: function get() {
      return this.el_.seeking;
    }
  }, {
    key: 'seekable',
    get: function get() {
      return this.el_.seekable;
    }
  }, {
    key: 'played',
    get: function get() {
      return this.el_.played;
    }
  }, {
    key: 'buffered',
    get: function get() {
      return this.el_.buffered;
    }

    /**
     * Set player muted state
     * @param mute {boolean}
     */

  }, {
    key: 'muted',
    set: function set(mute) {
      this.el_.muted = mute;
    }

    /**
     * Get player muted state
     * @returns {boolean}
     */
    ,
    get: function get() {
      return this.el_.muted;
    }
  }, {
    key: 'defaultMuted',
    get: function get() {
      return this.el_.defaultMuted;
    }
  }, {
    key: 'poster',
    set: function set(poster) {
      this.el_.poster = poster;
    },
    get: function get() {
      return this.el_.poster;
    }
  }, {
    key: 'preload',
    set: function set(preload) {
      this.el_.preload = preload;
    },
    get: function get() {
      return this.el_.preload;
    }
  }, {
    key: 'autoplay',
    set: function set(autoplay) {
      this.el_.autoplay = autoplay;
    },
    get: function get() {
      return this.el_.autoplay;
    }
  }, {
    key: 'loop',
    set: function set(loop) {
      this.el_.loop = loop;
    },
    get: function get() {
      return this.el_.loop;
    }
  }, {
    key: 'controls',
    set: function set(controls) {
      this.el_.controls = controls;
    },
    get: function get() {
      return this.el_.controls;
    }
  }, {
    key: 'playbackRate',
    set: function set(playbackRate) {
      this.el_.playbackRate = playbackRate;
    },
    get: function get() {
      return this.el_.playbackRate;
    }
  }, {
    key: 'defaultPlaybackRate',
    set: function set(defaultPlaybackRate) {
      this.el_.defaultPlaybackRate = defaultPlaybackRate;
    },
    get: function get() {
      return this.el_.defaultPlaybackRate;
    }
  }, {
    key: 'ended',
    get: function get() {
      return this.el_.ended;
    }
  }, {
    key: 'error',
    get: function get() {
      return this.el_.error;
    }
  }, {
    key: 'networkState',
    get: function get() {
      return this.el_.networkState;
    }
  }, {
    key: 'readyState',
    get: function get() {
      return this.el_.readyState;
    }
  }, {
    key: 'videoHeight',
    get: function get() {
      return this.el_.videoHeight;
    }
  }, {
    key: 'videoWidth',
    get: function get() {
      return this.el_.videoWidth;
    }
  }], [{
    key: 'isSupported',
    value: function isSupported() {
      try {
        Html5.TEST_VID = document.createElement('video');
        Html5.TEST_VID.volume = 0.5;
      } catch (e) {
        return false;
      }

      return !!Html5.TEST_VID.canPlayType;
    }
  }]);

  return Html5;
}(_fakeEventTarget2.default);

//Engine.register("html5", Html5);


Html5.EngineName = "html5";
exports.default = Html5;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file to-title-case.js
 *
 * Uppercase the first letter of a string
 *
 * @param  {String} string String to be uppercased
 * @return {String}
 * @private
 * @method toTitleCase
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
function capitlize(string) {
  if (typeof string !== 'string') {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function endsWith(string, searchString) {
  if (typeof string !== 'string') {
    return false;
  }
  if (typeof searchString !== 'string') {
    return false;
  }

  return string.indexOf(searchString, string.length - searchString.length) != -1;
}

exports.capitlize = capitlize;
exports.endsWith = endsWith;

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERSION = exports.BasePlugin = exports.registerPlugin = exports.BaseMediaSourceAdapter = exports.registerAdapter = undefined;
exports.playkit = playkit;

var _player = __webpack_require__(3);

var _player2 = _interopRequireDefault(_player);

var _loggerFactory = __webpack_require__(0);

var _loggerFactory2 = _interopRequireDefault(_loggerFactory);

var _package = __webpack_require__(13);

var packageData = _interopRequireWildcard(_package);

var _mediaSourceAdapterManager = __webpack_require__(6);

var _BaseMediaSourceAdapter = __webpack_require__(2);

var _BaseMediaSourceAdapter2 = _interopRequireDefault(_BaseMediaSourceAdapter);

var _PluginManager = __webpack_require__(8);

var _BasePlugin = __webpack_require__(7);

var _BasePlugin2 = _interopRequireDefault(_BasePlugin);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// playkit version
var VERSION = packageData.version;


_loggerFactory2.default.getLogger().log("%c Playkit " + VERSION, "color: yellow; font-size: large");
_loggerFactory2.default.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

function playkit() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new _player2.default(config);
}

// Registration for media source adapter
exports.registerAdapter = _mediaSourceAdapterManager.registerAdapter;
exports.BaseMediaSourceAdapter = _BaseMediaSourceAdapter2.default;

// Export the plugin framework

exports.registerPlugin = _PluginManager.registerPlugin;
exports.BasePlugin = _BasePlugin2.default;

//export version

exports.VERSION = VERSION;
exports.default = playkit;

/***/ })
/******/ ]);
});
//# sourceMappingURL=playkit.js.map