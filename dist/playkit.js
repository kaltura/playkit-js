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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * General track representation of the player.
 * @classdesc
 */
var Track = function () {
  _createClass(Track, [{
    key: "id",


    /**
     * Getter for the track id.
     * @public
     * @returns {?string} - The track id.
     */

    /**
     * The language of the track.
     * @member
     * @type {string}
     * @private
     */

    /**
     * The active mode of the track.
     * @member
     * @type {boolean}
     * @private
     */
    get: function get() {
      return this._id;
    }

    /**
     * Getter for the active mode of the track.
     * @public
     * @returns {boolean} - The active mode of the track.
     */

    /**
     * The index of the track.
     * @member
     * @type {number}
     * @private
     */

    /**
     * The label of the track.
     * @member
     * @type {string}
     * @private
     */

    /**
     * The id of the track.
     * @member
     * @type {string}
     * @private
     */

  }, {
    key: "active",
    get: function get() {
      return this._active;
    }

    /**
     * Setter for the active mode of the track.
     * @public
     * @param {boolean} value - Whether the track is active or not.
     */
    ,
    set: function set(value) {
      this._active = value;
    }

    /**
     * Getter for the label of the track.
     * @public
     * @returns {string} - The label of the track.
     */

  }, {
    key: "label",
    get: function get() {
      return this._label;
    }

    /**
     * Getter for the language of the track.
     * @public
     * @returns {string} - The language of the track.
     */

  }, {
    key: "language",
    get: function get() {
      return this._language;
    }

    /**
     * Getter for the index of the track.
     * @public
     * @returns {number} - The index of the track.
     */

  }, {
    key: "index",
    get: function get() {
      return this._index;
    }

    /**
     * @constructor
     * @param {Object} settings - The track settings object.
     */

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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOG_LEVEL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsLogger = __webpack_require__(27);

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
/* 2 */
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
 * @param {string} type -
 * @param {Object=} opt_dict -
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Audio track representation of the player.
 * @classdesc
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Text track representation of the player.
 * @classdesc
 */
var TextTrack = function (_Track) {
  _inherits(TextTrack, _Track);

  _createClass(TextTrack, [{
    key: 'kind',


    /**
     * Getter for the kind of the text track.
     * @public
     * @returns {string} - The kind of the text track.
     */
    get: function get() {
      return this._kind;
    }

    /**
     * @constructor
     * @param {Object} settings - The track settings object.
     */

    /**
     * The kind of the text track:
     * subtitles/captions/metadata.
     * @member
     * @type {string}
     * @private
     */

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Video track representation of the player.
 * @classdesc
 */
var VideoTrack = function (_Track) {
  _inherits(VideoTrack, _Track);

  _createClass(VideoTrack, [{
    key: 'bandwidth',


    /**
     * Getter for the kind of the text track.
     * @public
     * @returns {string} - The kind of the text track.
     */
    get: function get() {
      return this._bandwidth;
    }

    /**
     * @constructor
     * @param {Object} settings - The track settings object.
     */

    /**
     * The kind of the text track:
     * subtitles/captions/metadata.
     * @member
     * @type {string}
     * @private
     */

  }]);

  function VideoTrack() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, VideoTrack);

    var _this = _possibleConstructorReturn(this, (VideoTrack.__proto__ || Object.getPrototypeOf(VideoTrack)).call(this, settings));

    _this._bandwidth = settings.bandwidth;
    return _this;
  }

  return VideoTrack;
}(_track2.default);

exports.default = VideoTrack;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @param {number} n - A certain number
 * @returns {boolean} - If the input is a number
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isNumber(n) {
  return Number(n) === n;
}

/**
 * @param {number} n - A certain number
 * @returns {boolean} - If the input is an integer
 */
function isInt(n) {
  return isNumber(n) && n % 1 === 0;
}

/**
 * @param {number} n - A certain number
 * @returns {boolean} - If the input is a float
 */
function isFloat(n) {
  return isNumber(n) && n % 1 !== 0;
}

/**
 * @param {Array<Object>} objects - The objects to merge
 * @returns {Object} - The merged object.
 */
function merge(objects) {
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
}

/**
 * @param {any} item - The item to check.
 * @returns {boolean} - Whether the item is an object.
 */
function isObject(item) {
  return item && (typeof item === "undefined" ? "undefined" : _typeof(item)) === 'object' && !Array.isArray(item);
}

/**
 * @param {any} target - The target object.
 * @param {any} sources - The objects to merge.
 * @returns {Object} - The merged object.
 */
function mergeDeep(target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) {
    return target;
  }
  var source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    }
  }
  return mergeDeep.apply(undefined, [target].concat(_toConsumableArray(sources)));
}

/**
 * @param {any} data - The data to copy.
 * @returns {any} - The copied data.
 */
function copyDeep(data) {
  var node = void 0;
  if (Array.isArray(data)) {
    node = data.length > 0 ? data.slice(0) : [];
    node.forEach(function (e, i) {
      if ((typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" && e !== {} || Array.isArray(e) && e.length > 0) {
        node[i] = copyDeep(e);
      }
    });
  } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
    node = Object.assign({}, data);
    Object.keys(node).forEach(function (key) {
      if (_typeof(node[key]) === "object" && node[key] !== {} || Array.isArray(node[key]) && node[key].length > 0) {
        node[key] = copyDeep(node[key]);
      }
    });
  } else {
    node = data;
  }
  return node;
}

/**
 * Generates unique id.
 * @param {number} length - The length of the id.
 * @returns {string} - The generated id.
 */
function uniqueId(length) {
  var from = 2;
  var to = from + (!length || length < 0 ? 0 : length - 2);
  return '_' + Math.random().toString(36).substr(from, to);
}

/**
 * Checks if an object is an empy object.
 * @param {Object} obj - The object to check
 * @returns {boolean} - Whether the object is empty.
 */
function isEmptyObject(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

/**
 * Checks for nested object properties.
 * @param {Object} obj - The object to check.
 * @param {string} propertyPath - The path to check.
 * @returns {boolean} - The value in this path.
 */
function getPropertyPath(obj, propertyPath) {
  return propertyPath.split(".").reduce(function (o, x) {
    return typeof o === "undefined" || o === null ? o : o[x];
  }, obj);
}

/**
 * Checks for nested object properties.
 * @param {Object} obj - The object to check.
 * @param {string} propertyPath - The path to check.
 * @returns {boolean} - Whether the path exists in the object.
 */
function hasPropertyPath(obj, propertyPath) {
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
}

exports.isNumber = isNumber;
exports.isInt = isInt;
exports.isFloat = isFloat;
exports.isObject = isObject;
exports.merge = merge;
exports.mergeDeep = mergeDeep;
exports.copyDeep = copyDeep;
exports.uniqueId = uniqueId;
exports.isEmptyObject = isEmptyObject;
exports.getPropertyPath = getPropertyPath;
exports.hasPropertyPath = hasPropertyPath;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiMap = __webpack_require__(17);

var _multiMap2 = _interopRequireDefault(_multiMap);

var _fakeEvent = __webpack_require__(2);

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
    this._bindingMap = new _multiMap2.default();
  }

  /**
   * Detaches all event listeners.
   * @override
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
     * @param {EventTarget} target The event target.
     * @param {string} type The event type.
     * @param {EventManager.ListenerType} listener The event listener.
     * @returns {void}
     */

  }, {
    key: 'listen',
    value: function listen(target, type, listener) {
      var binding = new Binding_(target, type, listener);
      if (this._bindingMap) {
        this._bindingMap.push(type, binding);
      }
    }

    /**
     * Detaches an event listener from an event target.
     * @param {EventTarget} target The event target.
     * @param {string} type The event type.
     * @returns {void}
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
   * @returns {void}
   */


  _createClass(Binding_, [{
    key: 'unlisten',
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CUSTOM_EVENTS = exports.HTML5_EVENTS = exports.PLAYER_EVENTS = undefined;

var _util = __webpack_require__(6);

var HTML5_EVENTS = {
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
  WAITING: 'waiting'
};


var CUSTOM_EVENTS = {
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

var PLAYER_EVENTS = (0, _util.merge)([HTML5_EVENTS, CUSTOM_EVENTS]);

exports.PLAYER_EVENTS = PLAYER_EVENTS;
exports.HTML5_EVENTS = HTML5_EVENTS;
exports.CUSTOM_EVENTS = CUSTOM_EVENTS;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventManager = __webpack_require__(7);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _fakeEventTarget = __webpack_require__(10);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _events = __webpack_require__(8);

var _stateTypes = __webpack_require__(16);

var _stateTypes2 = _interopRequireDefault(_stateTypes);

var _util = __webpack_require__(6);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _html = __webpack_require__(19);

var _html2 = _interopRequireDefault(_html);

var _pluginManager = __webpack_require__(15);

var _pluginManager2 = _interopRequireDefault(_pluginManager);

var _stateManager = __webpack_require__(22);

var _stateManager2 = _interopRequireDefault(_stateManager);

var _trackTypes = __webpack_require__(24);

var _trackTypes2 = _interopRequireDefault(_trackTypes);

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(5);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(3);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(4);

var _textTrack2 = _interopRequireDefault(_textTrack);

var _playerConfig = __webpack_require__(31);

var _playerConfig2 = _interopRequireDefault(_playerConfig);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The player container class name.
 * @type {string}
 * @const
 */
var CONTAINER_CLASS_NAME = 'playkit-container';

/**
 * The HTML5 player class.
 * @classdesc
 */

var Player = function (_FakeEventTarget) {
  _inherits(Player, _FakeEventTarget);

  /**
   * @param {string} targetId - The target div id to append the player.
   * @param {Object} config - The configuration for the player instance.
   * @constructor
   */

  /**
   * The plugin manager of the player.
   * @type {PluginManager}
   * @private
   */

  /**
   * The event manager of the player.
   * @type {EventManager}
   * @private
   */

  /**
   * The runtime configuration of the player.
   * @type {Object}
   * @private
   */

  /**
   * The playback engine.
   * @type {IEngine}
   * @private
   */

  /**
   * The state manager of the player.
   * @type {StateManager}
   * @private
   */

  /**
   * The tracks of the player.
   * @type {Array<Track>}
   * @private
   */

  /**
   * The player ready promise
   * @type {Promise<*>}
   * @private
   */

  /**
   * Whether the play is the first or not
   * @type {boolean}
   * @private
   */

  /**
   * The player DOM element container.
   * @type {HTMLElement}
   * @private
   */

  /**
   * The player class logger.
   * @type {any}
   * @static
   * @private
   */
  function Player(targetId, config) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

    _this._tracks = [];
    _this._config = {};
    _this._firstPlay = true;
    _this._stateManager = new _stateManager2.default(_this);
    _this._pluginManager = new _pluginManager2.default();
    _this._eventManager = new _eventManager2.default();
    _this._createReadyPromise();
    _this._appendPlayerContainer(targetId);
    _this.configure(config);
    return _this;
  }

  /**
   * Configures the player according to a given configuration.
   * @param {Object} config - The configuration for the player instance.
   * @returns {void}
   */

  /**
   * The available engines of the player.
   * @type {Array<typeof IEngine>}
   * @private
   * @static
   */


  _createClass(Player, [{
    key: 'configure',
    value: function configure(config) {
      var engine = this._engine;
      this._maybeResetPlayer(config);
      this._config = (0, _util.mergeDeep)((0, _util.isEmptyObject)(this._config) ? Player._defaultConfig : this._config, config);
      if (this._selectEngine()) {
        this._appendEngineEl();
        this._attachMedia();
        this._maybeLoadPlugins(engine);
        this._handlePlaybackConfig();
      }
    }

    /**
     * Resets the player in case of new sources with existing engine.
     * @param {Object} config - The player configuration.
     * @private
     * @returns {void}
     */

  }, {
    key: '_maybeResetPlayer',
    value: function _maybeResetPlayer(config) {
      if (this._engine && config.sources) {
        Player._logger.debug('New sources on existing engine: reset engine to change media');
        this._reset();
      }
    }

    /**
     * Loads the plugins in case engine created for the first time.
     * @param {?IEngine} engine - The engine before the enter to configure method.
     * @private
     * @returns {void}
     */

  }, {
    key: '_maybeLoadPlugins',
    value: function _maybeLoadPlugins(engine) {
      if (this._engine && !engine) {
        Player._logger.debug('Engine created for the first time: load plugins');
        this._loadPlugins();
      }
    }

    /**
     * Reset the necessary components before change media.
     * @private
     * @returns {void}
     */

  }, {
    key: '_reset',
    value: function _reset() {
      if (this._engine) {
        this._engine.destroy();
      }
      this._config = {};
      this._tracks = [];
      this._firstPlay = true;
      this._eventManager.removeAll();
      this._createReadyPromise();
    }

    /**
     * Creates the ready promise.
     * @private
     * @returns {void}
     */

  }, {
    key: '_createReadyPromise',
    value: function _createReadyPromise() {
      var _this2 = this;

      this._readyPromise = new Promise(function (resolve, reject) {
        _this2._eventManager.listen(_this2, _events.CUSTOM_EVENTS.TRACKS_CHANGED, function () {
          resolve();
        });
        _this2._eventManager.listen(_this2, _events.HTML5_EVENTS.ERROR, reject);
      });
    }

    /**
     * Destroys the player.
     * @returns {void}
     * @public
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
     * @returns {Object} - The default configuration of the player.
     * @private
     * @static
     */

  }, {
    key: '_loadPlugins',


    /**
     * Loads the configured plugins.
     * @private
     * @returns {void}
     */
    value: function _loadPlugins() {
      var plugins = this._config.plugins;
      for (var name in plugins) {
        this._pluginManager.load(name, this, plugins[name]);
      }
    }

    /**
     * Selects the engine to create based on a given configuration.
     * @private
     * @returns {boolean} - Whether a proper engine was found.
     */

  }, {
    key: '_selectEngine',
    value: function _selectEngine() {
      if (this._config.sources && this._config.playback && this._config.playback.streamPriority) {
        return this._selectEngineByPriority();
      }
      return false;
    }

    /**
     * Selects an engine to play a source according to a given stream priority.
     * @return {boolean} - Whether a proper engine was found to play the given sources
     * according to the priority.
     * @private
     */

  }, {
    key: '_selectEngineByPriority',
    value: function _selectEngineByPriority() {
      var _this3 = this;

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
                _this3._loadEngine(engine, source);
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

    /**
     * Loads the selected engine.
     * @param {IEngine} engine - The selected engine.
     * @param {Source} source - The selected source object.
     * @private
     * @returns {void}
     */

  }, {
    key: '_loadEngine',
    value: function _loadEngine(engine, source) {
      this.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.SOURCE_SELECTED, { selectedSource: source }));
      this._engine = engine.createEngine(source, this._config);
    }

    /**
     * Listen to all HTML5 defined events and trigger them on the player
     * @private
     * @returns {void}
     */

  }, {
    key: '_attachMedia',
    value: function _attachMedia() {
      var _this4 = this;

      if (this._engine) {
        for (var playerEvent in _events.HTML5_EVENTS) {
          this._eventManager.listen(this._engine, _events.HTML5_EVENTS[playerEvent], function (event) {
            return _this4.dispatchEvent(event);
          });
        }
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.VIDEO_TRACK_CHANGED, function (event) {
          _this4._markActiveTrack(event.payload.selectedVideoTrack);
          return _this4.dispatchEvent(event);
        });
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.AUDIO_TRACK_CHANGED, function (event) {
          _this4._markActiveTrack(event.payload.selectedAudioTrack);
          return _this4.dispatchEvent(event);
        });
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.TEXT_TRACK_CHANGED, function (event) {
          _this4._markActiveTrack(event.payload.selectedTextTrack);
          return _this4.dispatchEvent(event);
        });
        this._eventManager.listen(this, _events.HTML5_EVENTS.PLAY, this._onPlay.bind(this));
      }
    }
  }, {
    key: '_handlePlaybackConfig',
    value: function _handlePlaybackConfig() {
      if (this._config.playback) {
        if (this._config.playback.muted) {
          this.muted = true;
        }
        if (this._config.playback.preload === "auto") {
          this.load();
        }
        if (this._config.playback.autoplay) {
          this.play();
        }
      }
    }

    /**
     * Creates the player container
     * @param {string} targetId - The target div id to append the player.
     * @private
     * @returns {void}
     */

  }, {
    key: '_appendPlayerContainer',
    value: function _appendPlayerContainer(targetId) {
      if (targetId) {
        if (this._el === undefined) {
          this._createPlayerContainer();
          var parentNode = document.getElementById(targetId);
          if (parentNode != null && this._el != null) {
            parentNode.appendChild(this._el);
          }
        }
      } else {
        throw new Error("targetId is not found, it must be pass on initialization");
      }
    }

    /**
     * Creates the player container.
     * @private
     * @returns {void}
     */

  }, {
    key: '_createPlayerContainer',
    value: function _createPlayerContainer() {
      this._el = document.createElement("div");
      this._el.id = (0, _util.uniqueId)(5);
      this._el.className = CONTAINER_CLASS_NAME;
      this._el.setAttribute('tabindex', '-1');
    }

    /**
     * Appends the engine's video element to the player's div container.
     * @private
     * @returns {void}
     */

  }, {
    key: '_appendEngineEl',
    value: function _appendEngineEl() {
      if (this._el != null && this._engine != null) {
        this._el.appendChild(this._engine.getVideoElement());
      }
    }

    /**
     * Returns the tracks according to the filter. if no filter given returns the all tracks.
     * @function getTracks
     * @param {string} [type] - a tracks filter, should be 'video', 'audio' or 'text'.
     * @returns {Array<Track>} - The parsed tracks.
     * @public
     */

  }, {
    key: 'getTracks',
    value: function getTracks(type) {
      return this._getTracksByType(type);
    }

    /**
     * Returns the tracks according to the filter. if no filter given returns the all tracks.
     * @function _getTracksByType
     * @param {string} [type] - a tracks filter, should be 'video', 'audio' or 'text'.
     * @returns {Array<Track>} - The parsed tracks.
     * @private
     */

  }, {
    key: '_getTracksByType',
    value: function _getTracksByType(type) {
      return !type ? this._tracks : this._tracks.filter(function (track) {
        if (type === _trackTypes2.default.VIDEO) {
          return track instanceof _videoTrack2.default;
        } else if (type === _trackTypes2.default.AUDIO) {
          return track instanceof _audioTrack2.default;
        } else if (type === _trackTypes2.default.TEXT) {
          return track instanceof _textTrack2.default;
        } else {
          return true;
        }
      });
    }

    /**
     * Select a track
     * @function selectTrack
     * @param {Track} track - the track to select
     * @returns {void}
     * @public
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
     * Hide the text track
     * @function hideTextTrack
     * @returns {void}
     * @public
     */

  }, {
    key: 'hideTextTrack',
    value: function hideTextTrack() {
      if (this._engine) {
        this._engine.hideTextTrack();
        this._getTracksByType(_trackTypes2.default.TEXT).map(function (track) {
          return track.active = false;
        });
      }
    }

    /**
     * Enables adaptive bitrate switching.
     * @function enableAdaptiveBitrate
     * @returns {void}
     * @public
     */

  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      if (this._engine) {
        this._engine.enableAdaptiveBitrate();
      }
    }

    /**
     * Mark the selected track as active
     * @function _markActiveTrack
     * @param {Track} track - the track to mark
     * @returns {void}
     * @private
     */

  }, {
    key: '_markActiveTrack',
    value: function _markActiveTrack(track) {
      var type = void 0;
      if (track instanceof _videoTrack2.default) {
        type = _trackTypes2.default.VIDEO;
      } else if (track instanceof _audioTrack2.default) {
        type = _trackTypes2.default.AUDIO;
      } else if (track instanceof _textTrack2.default) {
        type = _trackTypes2.default.TEXT;
      }
      if (type) {
        var tracks = this.getTracks(type);
        for (var i = 0; i < tracks.length; i++) {
          tracks[i].active = track.index === i;
        }
      }
    }

    /**
     * @function _onPlay
     * @return {void}
     * @private
     */

  }, {
    key: '_onPlay',
    value: function _onPlay() {
      if (this._firstPlay) {
        this._firstPlay = false;
        this.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.FIRST_PLAY));
      }
    }

    /**
     * Get the player config.
     * @returns {Object} - The player configuration.
     * @public
     */

  }, {
    key: 'ready',


    //  <editor-fold desc="Playback Interface">
    /**
     * The player readiness
     * @public
     * @returns {Promise<*>} - The ready promise
     */
    value: function ready() {
      return this._readyPromise ? this._readyPromise : Promise.resolve();
    }

    /**
     * Load media
     * @public
     * @returns {void}
     */

  }, {
    key: 'load',
    value: function load() {
      var _this5 = this;

      if (this._engine) {
        this._engine.load().then(function (data) {
          _this5._tracks = data.tracks;
          _this5.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.TRACKS_CHANGED, { tracks: _this5._tracks }));
        }).catch(function (error) {
          _this5.dispatchEvent(new _fakeEvent2.default(_events.HTML5_EVENTS.ERROR, error));
        });
      }
    }

    /**
     * Start/resume playback.
     * @returns {void}
     * @public
     */

  }, {
    key: 'play',
    value: function play() {
      var _this6 = this;

      if (this._engine) {
        if (this._engine.src) {
          this._engine.play();
        } else {
          this.load();
          this.ready().then(function () {
            _this6._engine.play();
          });
        }
      }
    }

    /**
     * Pause playback.
     * @returns {void}
     * @public
     */

  }, {
    key: 'pause',
    value: function pause() {
      if (this._engine) {
        return this._engine.pause();
      }
    }

    /**
     * Set the current time in seconds.
     * @param {Number} to - The number to set in seconds.
     * @public
     */

  }, {
    key: 'buffered',
    value: function buffered() {}

    /**
     * Set player muted state.
     * @param {boolean} mute - The mute value.
     * @returns {void}
     * @public
     */

  }, {
    key: 'config',
    get: function get() {
      return this._config;
    }

    /**
     * Set player session id
     * @param {string} sessionId - the player session id to set
     * @returns {void}
     * @public
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
        if ((0, _util.isNumber)(to)) {
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
     * Get the current time in seconds.
     * @returns {?Number} - The playback current time.
     * @public
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.currentTime;
      }
    }

    /**
     * Get the duration in seconds.
     * @returns {?Number} - The playback duration.
     * @public
     */

  }, {
    key: 'duration',
    get: function get() {
      if (this._engine) {
        return this._engine.duration;
      }
    }

    /**
     * Set playback volume.
     * @param {Number} vol - The volume to set.
     * @returns {void}
     * @public
     */

  }, {
    key: 'volume',
    set: function set(vol) {
      if (this._engine) {
        if ((0, _util.isFloat)(vol)) {
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
     * Get playback volume.
     * @returns {?Number} - The playback volume.
     * @public
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.volume;
      }
    }

    // </editor-fold>

    // <editor-fold desc="State">
    /**
     * Get paused state.
     * @returns {?boolean} - Whether the video is paused or not.
     * @public
     */

  }, {
    key: 'paused',
    get: function get() {
      if (this._engine) {
        return this._engine.paused;
      }
    }

    /**
     * Get seeking state.
     * @returns {?boolean} - Whether the video is seeking or not.
     * @public
     */

  }, {
    key: 'seeking',
    get: function get() {
      if (this._engine) {
        return this._engine.seeking;
      }
    }
  }, {
    key: 'muted',
    set: function set(mute) {
      if (this._engine) {
        this._engine.muted = mute;
      }
    }

    /**
     * Get player muted state.
     * @returns {?boolean} - Whether the video is muted or not.
     * @public
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.muted;
      }
    }

    /**
     * Get the player source.
     * @returns {?string} - The current source of the player.
     * @public
     */

  }, {
    key: 'src',
    get: function get() {
      if (this._engine) {
        return this._engine.src;
      }
    }

    /**
     * Get the player events.
     * @returns {Object} - The events of the player.
     * @public
     */

  }, {
    key: 'Event',
    get: function get() {
      return _events.PLAYER_EVENTS;
    }

    /**
     * Get the player states.
     * @returns {Object} - The states of the player.
     * @public
     */

  }, {
    key: 'State',
    get: function get() {
      return _stateTypes2.default;
    }

    /**
     * Get the player tracks types.
     * @returns {Object} - The tracks types of the player.
     * @public
     */

  }, {
    key: 'Track',
    get: function get() {
      return _trackTypes2.default;
    }

    // </editor-fold>

  }], [{
    key: '_defaultConfig',
    get: function get() {
      return (0, _util.copyDeep)(_playerConfig2.default);
    }
  }]);

  return Player;
}(_fakeEventTarget2.default);

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

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _multiMap = __webpack_require__(17);

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
    this._listeners = new _multiMap2.default();

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
    key: 'addEventListener',
    value: function addEventListener(type, listener) {
      this._listeners.push(type, listener);
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
    key: 'removeEventListener',
    value: function removeEventListener(type, listener) {
      this._listeners.remove(type, listener);
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
    key: 'dispatchEvent',
    value: function dispatchEvent(event) {
      // In many browsers, it is complex to overwrite properties of actual Events.
      // Here we expect only to dispatch FakeEvents, which are simpler.
      //goog.asserts.assert(event instanceof FakeEvent,
      //    'FakeEventTarget can only dispatch FakeEvents!');

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

/**
 * These are the listener types defined in the closure extern for EventTarget.
 * @typedef {EventListener|function(!Event):(boolean|undefined)}
 */


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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _fakeEventTarget = __webpack_require__(10);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _playerError = __webpack_require__(11);

var _playerError2 = _interopRequireDefault(_playerError);

var _events = __webpack_require__(8);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(5);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(3);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(4);

var _textTrack2 = _interopRequireDefault(_textTrack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable no-unused-vars */


var BaseMediaSourceAdapter = function (_FakeEventTarget) {
  _inherits(BaseMediaSourceAdapter, _FakeEventTarget);

  _createClass(BaseMediaSourceAdapter, null, [{
    key: 'isSupported',


    /**
     * Checks if the media source adapter is supported.
     * @function isSupported
     * @returns {boolean} - Whether the media source adapter is supported.
     * @static
     */


    /**
     * The adapter config.
     * @member {Object} _config
     * @private
     */


    /**
     * The source object.
     * @member {Source} _sourceObj
     * @private
     */


    /**
     * The dom video element.
     * @member {HTMLVideoElement} _videoElement
     * @private
     */

    /**
     * Passing the custom events to the actual media source adapter.
     * @static
     */
    value: function isSupported() {
      return true;
    }

    /**
     * Factory method to create media source adapter.
     * @function createAdapter
     * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with.
     * @param {Object} source - The source Object.
     * @param {Object} config - The player configuration.
     * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter.
     * @static
     */


    /**
     * Passing the getLogger function to the actual media source adapter.
     * @type {Function}
     * @static
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(videoElement, source, config) {
      return new this(videoElement, source, config);
    }

    /**
     * @constructor
     * @param {HTMLVideoElement} videoElement - The video element which bind to media source adapter.
     * @param {Source} source - The source object.
     * @param {Object} config - The media source adapter configuration.
     */

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
   * Destroys the media source adapter.
   * @function destroy
   * @returns {void}
   */


  _createClass(BaseMediaSourceAdapter, [{
    key: 'destroy',
    value: function destroy() {
      this._sourceObj = null;
      this._config = null;
    }

    /**
     * Triggers the appropriate track changed event.
     * @param {Track} track - The selected track.
     * @private
     * @returns {void}
     */

  }, {
    key: '_onTrackChanged',
    value: function _onTrackChanged(track) {
      if (track instanceof _videoTrack2.default) {
        this._trigger(BaseMediaSourceAdapter.CustomEvents.VIDEO_TRACK_CHANGED, { selectedVideoTrack: track });
      } else if (track instanceof _audioTrack2.default) {
        this._trigger(BaseMediaSourceAdapter.CustomEvents.AUDIO_TRACK_CHANGED, { selectedAudioTrack: track });
      } else if (track instanceof _textTrack2.default) {
        this._trigger(BaseMediaSourceAdapter.CustomEvents.TEXT_TRACK_CHANGED, { selectedTextTrack: track });
      }
    }

    /**
     * Dispatch an adapter event forward.
     * @param {string} name - The name of the event.
     * @param {Object} payload - The event payload.
     * @returns {void}
     */

  }, {
    key: '_trigger',
    value: function _trigger(name, payload) {
      this.dispatchEvent(new _fakeEvent2.default(name, payload));
    }

    /** Must implemented methods by the derived media source adapter **/

  }, {
    key: 'load',
    value: function load() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'load').getError();
    }
  }, {
    key: 'selectVideoTrack',
    value: function selectVideoTrack(videoTrack) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'selectVideoTrack').getError();
    }
  }, {
    key: 'selectAudioTrack',
    value: function selectAudioTrack(audioTrack) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'selectAudioTrack').getError();
    }
  }, {
    key: 'selectTextTrack',
    value: function selectTextTrack(textTrack) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'selectTextTrack').getError();
    }
  }, {
    key: 'hideTextTrack',
    value: function hideTextTrack() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'hideTextTrack').getError();
    }
  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'enableAdaptiveBitrate').getError();
    }
  }, {
    key: 'src',
    get: function get() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'get src').getError();
    }
  }], [{
    key: 'canPlayType',
    value: function canPlayType(mimeType) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'static canPlayType').getError();
    }
  }]);

  return BaseMediaSourceAdapter;
}(_fakeEventTarget2.default);

BaseMediaSourceAdapter.CustomEvents = _events.CUSTOM_EVENTS;
BaseMediaSourceAdapter.getLogger = _logger2.default.getLogger;
exports.default = BaseMediaSourceAdapter;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerMediaSourceAdapter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nativeAdapter = __webpack_require__(20);

var _nativeAdapter2 = _interopRequireDefault(_nativeAdapter);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Media source provider
 * @classdesc
 */
var MediaSourceProvider = function () {
  function MediaSourceProvider() {
    _classCallCheck(this, MediaSourceProvider);
  }

  _createClass(MediaSourceProvider, null, [{
    key: 'register',


    /**
     * Add a media source adapter to the registry.
     * @function register
     * @param {IMediaSourceAdapter} mediaSourceAdapter - The media source adapter to register.
     * @static
     * @returns {void}
     */

    /**
     * The media source adapter registry.
     * @member {Array<IMediaSourceAdapter>} _mediaSourceAdapters
     * @static
     * @private
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
     * Remove a media source adapter from the registry.
     * @function unRegister
     * @param {IMediaSourceAdapter} mediaSourceAdapter - The media source adapter to unRegister.
     * @static
     * @returns {void}
     */

    /**
     * The selected adapter for playback.
     * @type {null|IMediaSourceAdapter}
     * @static
     * @private
     */

    /**
     * The logger of the media source provider.
     * @member {any} _logger
     * @static
     * @private
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
     * Checks if one of the registered media source adapters can play a given mime type.
     * @function canPlayType
     * @param {string} mimeType - The mime type to check.
     * @static
     * @returns {boolean} - If one of the adapters can play the specific mime type.
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
     * Get the appropriate media source adapter to the video source.
     * @function getMediaSourceAdapter
     * @param {HTMLVideoElement} videoElement - The video element which requires adapter for a given mimeType.
     * @param {Source} source - The selected source object.
     * @param {Object} config - The player configuration.
     * @returns {IMediaSourceAdapter|null} - The selected media source adapter, or null if such doesn't exists.
     * @static
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
     * Destroys the media source adapter provider necessary props.
     * @static
     * @returns {void}
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(9);

var _player2 = _interopRequireDefault(_player);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _util = __webpack_require__(6);

var _eventManager = __webpack_require__(7);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _playerError = __webpack_require__(11);

var _playerError2 = _interopRequireDefault(_playerError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** The BasePlugin responsible to implement the plugin interface.
 * Contains several default implementations.
 * Other plugins should extend this class.
 * @classdesc
 */
var BasePlugin = function () {
  _createClass(BasePlugin, null, [{
    key: 'createPlugin',


    /**
     * Factory method to create the actual plugin.
     * @param {string} name - The plugin name
     * @param {Player} player - The player reference
     * @param {Object} config - The plugin configuration
     * @returns {BasePlugin} - New runtime plugin instance
     * @static
     * @public
     */

    /**
     * The event manager of the plugin.
     * @member
     */

    /**
     * The logger of the plugin.
     * @member
     */

    /**
     * The runtime configuration of the plugin.
     * @member
     */
    value: function createPlugin(name, player) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return new this(name, player, config);
    }

    /**
     * Returns under what conditions the plugin is valid.
     * Plugin must implement this method.
     * @returns {boolean} - Whether the plugin is valid and can be initiated. Default implementation is true
     * @static
     * @public
     * @abstract
     */

    /**
     * The default configuration of the plugin.
     * Inherited plugins should override this property.
     * @type {Object}
     * @static
     * @member
     */

    /**
     * Reference to the actual player.
     * @member
     */

    /**
     * The name of the plugin.
     * @member
     */

  }, {
    key: 'isValid',
    value: function isValid() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'isValid()').getError();
    }

    /**
     * constructor
     * @param {string} name - The plugin name
     * @param {Player} player - The player reference
     * @param {Object} config - The plugin configuration
     * @constructor
     * @private
     */

  }]);

  function BasePlugin(name, player, config) {
    _classCallCheck(this, BasePlugin);

    this.name = name;
    this.player = player;
    this.eventManager = new _eventManager2.default();
    this.logger = _logger2.default.getLogger(this.name);
    this.config = (0, _util.merge)([this.constructor.defaultConfig, config]);
  }

  /**
   * Getter for the configuration of the plugin.
   * @param {string} attr - The key in the plugin configuration (optional).
   * @returns {*} - If attribute is provided, returns its value. Else, Returns the config of the plugin.
   * @public
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
     * @public
     * @returns {void}
     */

  }, {
    key: 'updateConfig',
    value: function updateConfig(update) {
      this.config = (0, _util.merge)([this.config, update]);
    }

    /**
     * Runs the destroy logic of the plugin.
     * plugin must implement this method.
     * @public
     * @abstract
     * @returns {void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'destroy()').getError();
    }

    /**
     * Getter for the plugin's name.
     * @returns {string} - The name of the plugin.
     * @public
     */

  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }]);

  return BasePlugin;
}();

BasePlugin.defaultConfig = {};
exports.default = BasePlugin;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerPlugin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basePlugin = __webpack_require__(14);

var _basePlugin2 = _interopRequireDefault(_basePlugin);

var _playerError = __webpack_require__(11);

var _playerError2 = _interopRequireDefault(_playerError);

var _player = __webpack_require__(9);

var _player2 = _interopRequireDefault(_player);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The logger of the PluginManager class.
 * @private
 * @const
 */
var logger = _logger2.default.getLogger("PluginManager");

/** The PluginManager responsible for register plugins definitions and store plugins instances.
 * @classdesc
 */

var PluginManager = function () {
  function PluginManager() {
    _classCallCheck(this, PluginManager);

    this._plugins = new Map();
  }
  /**
   * The registry of the plugins.
   * Maps plugin's name to his class.
   * @type {Map}
   * @static
   * @private
   */

  /**
   * The active plugins in the player.
   * Maps plugin's name to his instance.
   * @type {Map}
   * @private
   */


  _createClass(PluginManager, [{
    key: 'load',


    /**
     * Creates and store new instance of the plugin in case isValid() of the plugin returns true.
     * @param {string} name - The plugin name
     * @param {Player} player - The player reference
     * @param {Object} [config={}] - The plugin configuration
     * @returns {boolean} - Whether the plugin load was successful
     * @public
     */
    value: function load(name, player) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!PluginManager._registry.has(name)) {
        throw new _playerError2.default(_playerError2.default.TYPE.NOT_REGISTERED_PLUGIN, name).getError();
      }
      var pluginClass = PluginManager._registry.get(name);
      if (pluginClass != null && pluginClass.isValid()) {
        this._plugins.set(name, pluginClass.createPlugin(name, player, config));
        logger.debug('Plugin <' + name + '> has been loaded');
        return true;
      }
      logger.debug('Plugin <' + name + '> isn\'t loaded, isValid()=false');
      return false;
    }

    /**
     * Iterates over all the plugins and calls private _destroy.
     * @public
     * @returns {void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._plugins.forEach(this._destroy.bind(this));
    }

    /**
     * Calls destroy() method of the plugin's impl.
     * @param {BasePlugin} plugin - The plugin instance
     * @param {string} name - The plugin name
     * @private
     * @returns {void}
     */

  }, {
    key: '_destroy',
    value: function _destroy(plugin, name) {
      plugin.destroy();
      this._plugins.delete(name);
    }

    /**
     * Returns the plugin's instance.
     * @param {string} name - The plugin name
     * @returns {BasePlugin} - The plugin instance
     * @public
     */

  }, {
    key: 'get',
    value: function get(name) {
      return this._plugins.get(name);
    }
  }], [{
    key: 'register',


    /**
     * Writes the plugin in the registry.
     * Maps: plugin name -> plugin class.
     * @param {string} name - The plugin name
     * @param {Function} handler - The plugin class
     * @returns {boolean} - If the registration request succeeded
     * @static
     * @public
     */
    value: function register(name, handler) {
      if (typeof handler !== 'function' || handler.prototype instanceof _basePlugin2.default === false) {
        throw new _playerError2.default(_playerError2.default.TYPE.NOT_VALID_HANDLER).getError();
      }
      if (!PluginManager._registry.has(name)) {
        PluginManager._registry.set(name, handler);
        logger.debug('Plugin <' + name + '> has been registered successfully');
        return true;
      }
      logger.debug('Plugin <' + name + '> is already registered, do not register again');
      return false;
    }

    /**
     * Removes the plugin from the registry.
     * @param {string} name - The plugin name
     * @static
     * @public
     * @returns {void}
     */

  }, {
    key: 'unRegister',
    value: function unRegister(name) {
      if (PluginManager._registry.has(name)) {
        PluginManager._registry.delete(name);
        logger.debug('Unregistered <' + name + '> plugin.');
      }
    }
  }]);

  return PluginManager;
}();

/**
 * Export the register method.
 * @type {function}
 * @constant
 */


PluginManager._registry = new Map();
exports.default = PluginManager;
var registerPlugin = PluginManager.register;
exports.registerPlugin = registerPlugin;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PLAYER_STATE_TYPES = {
  IDLE: "idle",
  LOADING: "loading",
  PLAYING: "playing",
  PAUSED: "paused",
  BUFFERING: "buffering"
};

exports.default = PLAYER_STATE_TYPES;

/***/ }),
/* 17 */
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
    this._map = new Map();
  }

  /**
   * Add a key, value pair to the map.
   * @param {string} key -
   * @param {T} value  -
   * @returns {void}
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
     * @param {string} key -
     * @param {!Array.<T>} values -
     * @returns {void}
     */

  }, {
    key: "set",
    value: function set(key, values) {
      this._map.set(key, values);
    }

    /**
     * Check for a key.
     * @param {string} key -
     * @return {boolean} true if the key exists.
     */

  }, {
    key: "has",
    value: function has(key) {
      return this._map.has(key);
    }

    /**
     * Get a list of values by key.
     * @param {string} key -
     * @return {Array.<T>} or null if no suZch key exists.
     */

  }, {
    key: "get",
    value: function get(key) {
      var list = this._map.get(key);
      // slice() clones the list so that it and the map can each be modified
      // without affecting the other.
      return list ? list.slice() : [];
    }

    /**
     * Get a list of all values.
     * @returns {!Array.<T>} -
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
     * @param {string} key -
     * @param {T} value -
     * @returns {void}
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
     * @return {!Array.<string>}
     */
    // eslint-disable-next-line no-undef

  }, {
    key: "keys",
    value: function keys() {
      return this._map.keys();
    }

    /**
     * Clear all keys and values from the multimap.
     * @returns {void}
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
/* 18 */
/***/ (function(module, exports) {

module.exports = {
	"name": "playkit-js",
	"version": "0.2.0",
	"main": "dist/playkit.js",
	"scripts": {
		"clean": "rm -rf ./dist",
		"prebuild": "npm run clean",
		"build:prod": "NODE_ENV=production webpack",
		"build": "webpack",
		"dev": "webpack --progress --colors --watch",
		"test": "NODE_ENV=test karma start --color",
		"test:chrome": "NODE_ENV=test karma start --color --browsers Chrome",
		"test:chrome:dots": "NODE_ENV=test karma start --color --browsers Chrome --reporters dots",
		"test:firefox": "NODE_ENV=test karma start --color --browsers Firefox",
		"test:safari": "NODE_ENV=test karma start --color --browsers Safari",
		"test:watch": "NODE_ENV=test karma start --color --auto-watch",
		"start": "webpack-dev-server",
		"release": "npm run build:prod && npm run commit:dist && standard-version",
		"publish": "git push --follow-tags --no-verify origin develop",
		"eslint": "eslint . --color",
		"flow": "flow check",
		"eslint:flow:test": "npm run eslint && npm run flow && npm run test",
		"commit:dist": "git add --all dist && (git commit -m 'chore: update dist' || exit 0)",
		"prepush-msg:build": "echo '\nRunning build before push...\n' && exit 0",
		"prepush-msg:dist": "echo '\nAdding dist files to a seperate commit...\n' && exit 0",
		"prepush-msg:done": "echo '\nPre push tasks are done.\n' && exit 0"
	},
	"pre-push": [
		"prepush-msg:build",
		"prebuild",
		"build",
		"build:prod",
		"prepush-msg:dist",
		"commit:dist",
		"prepush-msg:done"
	],
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
		"css-loader": "^0.28.4",
		"eslint": "^3.10.0",
		"eslint-loader": "^1.6.1",
		"eslint-plugin-flowtype": "^2.30.0",
		"eslint-plugin-import": "^2.2.0",
		"eslint-plugin-mocha-no-only": "^0.0.5",
		"flow-bin": "latest",
		"istanbul": "^0.4.5",
		"karma": "^1.5.0",
		"karma-chai": "^0.1.0",
		"karma-chrome-launcher": "^2.0.0",
		"karma-cli": "^1.0.1",
		"karma-coverage": "^1.1.1",
		"karma-firefox-launcher": "^1.0.1",
		"karma-ie-launcher": "^1.0.0",
		"karma-mocha": "^1.3.0",
		"karma-safari-launcher": "^1.0.0",
		"karma-sourcemap-loader": "^0.3.7",
		"karma-webpack": "^2.0.2",
		"mocha": "^3.2.0",
		"mocha-cli": "^1.0.1",
		"pre-push": "^0.1.1",
		"sinon": "^2.0.0",
		"sinon-chai": "^2.8.0",
		"standard-version": "^4.0.0",
		"style-loader": "^0.18.2",
		"uglifyjs-webpack-plugin": "^0.4.3",
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEventTarget = __webpack_require__(10);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _eventManager = __webpack_require__(7);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _events = __webpack_require__(8);

var _mediaSourceProvider = __webpack_require__(13);

var _mediaSourceProvider2 = _interopRequireDefault(_mediaSourceProvider);

var _videoTrack = __webpack_require__(5);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(3);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(4);

var _textTrack2 = _interopRequireDefault(_textTrack);

var _util = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The engine video element class name.
 * @type {string}
 * @const
 */
var VIDEO_ELEMENT_CLASS_NAME = 'playkit-engine-html5';

/**
 * Html5 engine for playback.
 * @classdesc
 */

var Html5 = function (_FakeEventTarget) {
  _inherits(Html5, _FakeEventTarget);

  _createClass(Html5, null, [{
    key: 'createEngine',


    /**
     * Factory method to create an engine.
     * @param {Source} source - The selected source object.
     * @param {Object} config - The player configuration.
     * @returns {IEngine} - New instance of the run time engine.
     * @public
     * @static
     */

    /**
     * The selected media source adapter of the engine.
     * @type {IMediaSourceAdapter}
     * @private
     */

    /**
     * The video element.
     * @type {HTMLVideoElement}
     * @private
     */
    value: function createEngine(source, config) {
      return new this(source, config);
    }

    /**
     * Checks if the engine can play a given mime type.
     * @param {string} mimeType - The mime type to check.
     * @returns {boolean} - Whether the engine can play the mime type.
     * @public
     * @static
     */


    /**
     * @type {string} - The engine id.
     */

    /**
     * The event manager of the engine.
     * @type {EventManager}
     * @private
     */

  }, {
    key: 'canPlayType',
    value: function canPlayType(mimeType) {
      return _mediaSourceProvider2.default.canPlayType(mimeType);
    }

    /**
     * @constructor
     * @param {Source} source - The selected source object.
     * @param {Object} config - The player configuration.
     */

  }]);

  function Html5(source, config) {
    _classCallCheck(this, Html5);

    var _this = _possibleConstructorReturn(this, (Html5.__proto__ || Object.getPrototypeOf(Html5)).call(this));

    _this._eventManager = new _eventManager2.default();
    _this._createVideoElement();
    _this._loadMediaSourceAdapter(source, config);
    _this.attach();
    return _this;
  }

  /**
   * Destroys the engine.
   * @public
   * @returns {void}
   */


  _createClass(Html5, [{
    key: 'destroy',
    value: function destroy() {
      this.detach();
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
     * Get the engine's id
     * @public
     * @returns {string} the engine's id
     */

  }, {
    key: 'attach',


    /**
     * Listen to the video element events and triggers them from the engine.
     * @public
     * @returns {void}
     */
    value: function attach() {
      var _this2 = this;

      var _loop = function _loop(playerEvent) {
        _this2._eventManager.listen(_this2._el, _events.HTML5_EVENTS[playerEvent], function () {
          _this2.dispatchEvent(new _fakeEvent2.default(_events.HTML5_EVENTS[playerEvent]));
        });
      };

      for (var playerEvent in _events.HTML5_EVENTS) {
        _loop(playerEvent);
      }
      if (this._mediaSourceAdapter) {
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.VIDEO_TRACK_CHANGED, function (event) {
          _this2.dispatchEvent(event);
        });
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.AUDIO_TRACK_CHANGED, function (event) {
          return _this2.dispatchEvent(event);
        });
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.TEXT_TRACK_CHANGED, function (event) {
          return _this2.dispatchEvent(event);
        });
      }
    }

    /**
     * Remove the listeners of the video element events.
     * @public
     * @returns {void}
     */

  }, {
    key: 'detach',
    value: function detach() {
      for (var playerEvent in _events.HTML5_EVENTS) {
        this._eventManager.unlisten(this._el, _events.HTML5_EVENTS[playerEvent]);
      }
      if (this._mediaSourceAdapter) {
        // unlisten to adaptive bitrate changed
        this._eventManager.unlisten(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.VIDEO_TRACK_CHANGED);
        this._eventManager.unlisten(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.AUDIO_TRACK_CHANGED);
        this._eventManager.unlisten(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.TEXT_TRACK_CHANGED);
      }
    }

    /**
     * @returns {HTMLVideoElement} - The video element.
     * @public
     */

  }, {
    key: 'getVideoElement',
    value: function getVideoElement() {
      return this._el;
    }

    /**
     * Creates a video element dom object.
     * @private
     * @returns {void}
     */

  }, {
    key: '_createVideoElement',
    value: function _createVideoElement() {
      this._el = document.createElement("video");
      this._el.id = (0, _util.uniqueId)(5);
      this._el.className = VIDEO_ELEMENT_CLASS_NAME;
      this._el.controls = false;
    }

    /**
     * Loads the appropriate media source extension adapter.
     * @param {Source} source - The selected source object.
     * @param {Object} config - The media source extension configuration.
     * @private
     * @returns {void}
     */

  }, {
    key: '_loadMediaSourceAdapter',
    value: function _loadMediaSourceAdapter(source, config) {
      this._mediaSourceAdapter = _mediaSourceProvider2.default.getMediaSourceAdapter(this.getVideoElement(), source, config);
    }

    /**
     * Select a new video track.
     * @param {VideoTrack} videoTrack - The video track object to set.
     * @returns {void}
     */

  }, {
    key: 'selectVideoTrack',
    value: function selectVideoTrack(videoTrack) {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.selectVideoTrack(videoTrack);
      }
    }

    /**
     * Select a new audio track.
     * @param {AudioTrack} audioTrack - The video track object to set.
     * @returns {void}
     */

  }, {
    key: 'selectAudioTrack',
    value: function selectAudioTrack(audioTrack) {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.selectAudioTrack(audioTrack);
      }
    }

    /**
     * Select a new text track.
     * @param {TextTrack} textTrack - The text track object to set.
     * @returns {void}
     */

  }, {
    key: 'selectTextTrack',
    value: function selectTextTrack(textTrack) {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.selectTextTrack(textTrack);
      }
    }

    /**
     * Hide the text track
     * @function hideTextTrack
     * @returns {void}
     * @public
     */

  }, {
    key: 'hideTextTrack',
    value: function hideTextTrack() {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.hideTextTrack();
      }
    }

    /**
     * Enables adaptive bitrate switching according to the media source extension logic.
     * @function enableAdaptiveBitrate
     * @returns {void}
     * @public
     */

  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.enableAdaptiveBitrate();
      }
    }

    /**
     * Set a source.
     * @param {string} source - Source to set.
     * @public
     * @returns {void}
     */

  }, {
    key: 'play',


    //playback interface
    /**
     * Start/resume playback.
     * @public
     * @returns {void}
     */
    value: function play() {
      return this._el.play();
    }

    /**
     * Pause playback.
     * @public
     * @returns {void}
     */

  }, {
    key: 'pause',
    value: function pause() {
      return this._el.pause();
    }

    /**
     * Load media.
     * @public
     * @returns {Promise<Object>} - The loaded data
     */

  }, {
    key: 'load',
    value: function load() {
      return this._mediaSourceAdapter ? this._mediaSourceAdapter.load() : Promise.resolve({});
    }

    /**
     * Get the current time in seconds.
     * @returns {Number} - The current playback time.
     * @public
     */

  }, {
    key: 'ready',
    value: function ready() {}

    /**
     * Get paused state.
     * @returns {boolean} - The paused value of the video element.
     * @public
     */

  }, {
    key: 'id',
    get: function get() {
      return Html5.id;
    }
  }, {
    key: 'src',
    set: function set(source) {
      this._el.src = source;
    }

    /**
     * Get the source url.
     * @returns {string} - The source url.
     * @public
     */
    ,
    get: function get() {
      if (this._mediaSourceAdapter) {
        return this._mediaSourceAdapter.src;
      }
      return "";
    }
  }, {
    key: 'currentTime',
    get: function get() {
      return this._el.currentTime;
    }

    /**
     * Set the current time in seconds.
     * @param {Number} to - The number to set in seconds.
     * @public
     * @returns {void}
     */
    ,
    set: function set(to) {
      this._el.currentTime = to;
    }

    /**
     * Get the duration in seconds.
     * @returns {Number} - The playback duration.
     * @public
     */

  }, {
    key: 'duration',
    get: function get() {
      return this._el.duration;
    }

    /**
     * Set playback volume.
     * @param {Number} vol - The volume to set.
     * @public
     * @returns {void}
     */

  }, {
    key: 'volume',
    set: function set(vol) {
      this._el.volume = vol;
    }

    /**
     * Get playback volume.
     * @returns {Number} - The volume value of the video element.
     * @public
     */
    ,
    get: function get() {
      return this._el.volume;
    }
  }, {
    key: 'paused',
    get: function get() {
      return this._el.paused;
    }

    /**
     * Get seeking state.
     * @returns {boolean} - The seeking value of the video element.
     * @public
     */

  }, {
    key: 'seeking',
    get: function get() {
      return this._el.seeking;
    }

    /**
     * Get the first seekable range (part) of the video in seconds.
     * @returns {TimeRanges} - First seekable range (part) of the video in seconds.
     * @public
     */

  }, {
    key: 'seekable',
    get: function get() {
      return this._el.seekable;
    }

    /**
     * Get the first played range (part) of the video in seconds.
     * @returns {TimeRanges} - First played range (part) of the video in seconds.
     * @public
     */

  }, {
    key: 'played',
    get: function get() {
      return this._el.played;
    }

    /**
     * Get the first buffered range (part) of the video in seconds.
     * @returns {TimeRanges} - First buffered range (part) of the video in seconds.
     * @public
     */

  }, {
    key: 'buffered',
    get: function get() {
      return this._el.buffered;
    }

    /**
     * Set player muted state.
     * @param {boolean} mute - The new mute value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'muted',
    set: function set(mute) {
      this._el.muted = mute;
    }

    /**
     * Get player muted state.
     * @returns {boolean} - The muted value of the video element.
     * @public
     */
    ,
    get: function get() {
      return this._el.muted;
    }

    /**
     * Get the default mute value.
     * @returns {boolean} - The defaultMuted of the video element.
     * @public
     */

  }, {
    key: 'defaultMuted',
    get: function get() {
      return this._el.defaultMuted;
    }

    /**
     * Sets an image to be shown while the video is downloading, or until the user hits the play button.
     * @param {string} poster - The image url to be shown.
     * @returns {void}
     * @public
     */

  }, {
    key: 'poster',
    set: function set(poster) {
      this._el.poster = poster;
    }

    /**
     * Gets an image to be shown while the video is downloading, or until the user hits the play button.
     * @returns {poster} - The image url.
     * @public
     */
    ,
    get: function get() {
      return this._el.poster;
    }

    /**
     * Specifies if and how the author thinks that the video should be loaded when the page loads.
     * @param {string} preload - The preload value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'preload',
    set: function set(preload) {
      this._el.preload = preload;
    }

    /**
     * Gets the preload value of the video element.
     * @returns {string} - The preload value.
     * @public
     */
    ,
    get: function get() {
      return this._el.preload;
    }

    /**
     * Set if the video will automatically start playing as soon as it can do so without stopping.
     * @param {boolean} autoplay - The autoplay value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'autoplay',
    set: function set(autoplay) {
      this._el.autoplay = autoplay;
    }

    /**
     * Gets the autoplay value of the video element.
     * @returns {boolean} - The autoplay value.
     * @public
     */
    ,
    get: function get() {
      return this._el.autoplay;
    }

    /**
     * Set to specifies that the video will start over again, every time it is finished.
     * @param {boolean} loop - the loop value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'loop',
    set: function set(loop) {
      this._el.loop = loop;
    }

    /**
     * Gets the loop value of the video element.
     * @returns {boolean} - The loop value.
     * @public
     */
    ,
    get: function get() {
      return this._el.loop;
    }

    /**
     * Set to specifies that video controls should be displayed.
     * @param {boolean} controls - the controls value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'controls',
    set: function set(controls) {
      this._el.controls = controls;
    }

    /**
     * Gets the controls value of the video element.
     * @returns {boolean} - The controls value.
     * @public
     */
    ,
    get: function get() {
      return this._el.controls;
    }

    /**
     * Sets the current playback speed of the audio/video.
     * @param {Number} playbackRate - The playback speed value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'playbackRate',
    set: function set(playbackRate) {
      this._el.playbackRate = playbackRate;
    }

    /**
     * Gets the current playback speed of the audio/video.
     * @returns {Number} - The current playback speed value.
     * @public
     */
    ,
    get: function get() {
      return this._el.playbackRate;
    }

    /**
     * Sets the default playback speed of the audio/video.
     * @param {Number} defaultPlaybackRate - The default playback speed value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'defaultPlaybackRate',
    set: function set(defaultPlaybackRate) {
      this._el.defaultPlaybackRate = defaultPlaybackRate;
    }

    /**
     * Gets the default playback speed of the audio/video.
     * @returns {Number} - The default playback speed value.
     * @public
     */
    ,
    get: function get() {
      return this._el.defaultPlaybackRate;
    }

    /**
     * The ended property returns whether the playback of the audio/video has ended.
     * @returns {boolean} - The ended value.
     * @public
     */

  }, {
    key: 'ended',
    get: function get() {
      return this._el.ended;
    }

    /**
     * The error property returns a MediaError object.
     * @returns {MediaError} - The MediaError object has a code property containing the error state of the audio/video.
     * @public
     */

  }, {
    key: 'error',
    get: function get() {
      return this._el.error;
    }

    /**
     * @returns {Number} - The current network state (activity) of the audio/video.
     * @public
     */

  }, {
    key: 'networkState',
    get: function get() {
      return this._el.networkState;
    }

    /**
     * Indicates if the audio/video is ready to play or not.
     * @returns {Number} - The current ready state of the audio/video.
     * 0 = HAVE_NOTHING - no information whether or not the audio/video is ready.
     * 1 = HAVE_METADATA - metadata for the audio/video is ready.
     * 2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond.
     * 3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available.
     * 4 = HAVE_ENOUGH_DATA - enough data available to start playing.
     */

  }, {
    key: 'readyState',
    get: function get() {
      return this._el.readyState;
    }

    /**
     * @returns {Number} - The height of the video player, in pixels.
     * @public
     */

  }, {
    key: 'videoHeight',
    get: function get() {
      return this._el.videoHeight;
    }

    /**
     * @returns {Number} - The width of the video player, in pixels.
     * @public
     */

  }, {
    key: 'videoWidth',
    get: function get() {
      return this._el.videoWidth;
    }

    /**
     * Test video element to check if html5 engine is supported.
     */

  }], [{
    key: 'isSupported',


    /**
     * Checks if the html5 engine is supported.
     * @returns {boolean} - The isSupported result.
     * @static
     * @public
     */
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

Html5.id = "html5";
exports.default = Html5;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventManager = __webpack_require__(7);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _events = __webpack_require__(8);

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(5);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(3);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(4);

var _textTrack2 = _interopRequireDefault(_textTrack);

var _baseMediaSourceAdapter = __webpack_require__(12);

var _baseMediaSourceAdapter2 = _interopRequireDefault(_baseMediaSourceAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * An illustration of media source extension for progressive download
 * @classdesc
 * @implements {IMediaSourceAdapter}
 */
var NativeAdapter = function (_BaseMediaSourceAdapt) {
  _inherits(NativeAdapter, _BaseMediaSourceAdapt);

  _createClass(NativeAdapter, null, [{
    key: 'canPlayType',


    /**
     * Checks if NativeAdapter can play a given mime type.
     * @function canPlayType
     * @param {string} mimeType - The mime type to check
     * @returns {boolean} - Whether the native adapter can play a specific mime type
     * @static
     */

    /**
     * The event manager of the class.
     * @member {EventManager} - _eventManager
     * @type {EventManager}
     * @private
     */

    /**
     * The load promise
     * @member {Promise<Object>} - _loadPromise
     * @type {Promise<Object>}
     * @private
     */

    /**
     * The id of the Adapter
     * @member {string} id
     * @static
     * @public
     */
    value: function canPlayType(mimeType) {
      var canPlayType = typeof mimeType === 'string' ? !!document.createElement("video").canPlayType(mimeType.toLowerCase()) : false;
      NativeAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canPlayType.toString());
      return canPlayType;
    }

    /**
     * @constructor
     * @param {HTMLVideoElement} videoElement - The video element which bind to NativeAdapter
     * @param {Source} source - The source object
     */


    /**
     * The adapter logger
     * @member {any} _logger
     * @private
     * @static
     */

  }]);

  function NativeAdapter(videoElement, source) {
    _classCallCheck(this, NativeAdapter);

    NativeAdapter._logger.debug('Creating adapter');

    var _this = _possibleConstructorReturn(this, (NativeAdapter.__proto__ || Object.getPrototypeOf(NativeAdapter)).call(this, videoElement, source));

    _this._eventManager = new _eventManager2.default();
    return _this;
  }

  /**
   * Load the video source
   * @function load
   * @returns {Promise<Object>} - The loaded data
   */


  _createClass(NativeAdapter, [{
    key: 'load',
    value: function load() {
      var _this2 = this;

      if (!this._loadPromise) {
        this._loadPromise = new Promise(function (resolve, reject) {
          // We're using 'loadeddata' event for native hls (on 'loadedmetadata' native hls doesn't have tracks yet).
          _this2._eventManager.listen(_this2._videoElement, _events.HTML5_EVENTS.LOADED_DATA, function () {
            _this2._eventManager.unlisten(_this2._videoElement, _events.HTML5_EVENTS.LOADED_DATA);
            var data = { tracks: _this2._getParsedTracks() };
            NativeAdapter._logger.debug('The source has been loaded successfully');
            resolve(data);
          });
          _this2._eventManager.listen(_this2._videoElement, _events.HTML5_EVENTS.ERROR, function (error) {
            _this2._eventManager.unlisten(_this2._videoElement, _events.HTML5_EVENTS.ERROR);
            NativeAdapter._logger.error(error);
            reject(error);
          });
          if (_this2._sourceObj && _this2._sourceObj.url) {
            _this2._videoElement.src = _this2._sourceObj.url;
          }
        });
      }
      return this._loadPromise;
    }

    /**
     * Destroys the native adapter.
     * @function destroy
     * @returns {void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      NativeAdapter._logger.debug('destroy');
      _get(NativeAdapter.prototype.__proto__ || Object.getPrototypeOf(NativeAdapter.prototype), 'destroy', this).call(this);
      this._eventManager.destroy();
      this._loadPromise = null;
    }

    /**
     * Get the parsed tracks
     * @function _getParsedTracks
     * @returns {Array<Track>} - The parsed tracks
     * @private
     */

  }, {
    key: '_getParsedTracks',
    value: function _getParsedTracks() {
      var videoTracks = this._getParsedVideoTracks();
      var audioTracks = this._getParsedAudioTracks();
      var textTracks = this._getParsedTextTracks();
      return videoTracks.concat(audioTracks).concat(textTracks);
    }

    /**
     * Get the parsed video tracks
     * @function _getParsedVideoTracks
     * @returns {Array<Track>} - The parsed video tracks
     * @private
     */

  }, {
    key: '_getParsedVideoTracks',
    value: function _getParsedVideoTracks() {
      var videoTracks = this._videoElement.videoTracks;
      var parsedTracks = [];
      if (videoTracks) {
        for (var i = 0; i < videoTracks.length; i++) {
          var settings = {
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

    /**
     * Get the parsed audio tracks
     * @function _getParsedAudioTracks
     * @returns {Array<Track>} - The parsed audio tracks
     * @private
     */

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

    /**
     * Get the parsed text tracks
     * @function _getParsedTextTracks
     * @returns {Array<Track>} - The parsed text tracks
     * @private
     */

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

    /**
     * Select a video track
     * @function selectVideoTrack
     * @param {VideoTrack} videoTrack - the track to select
     * @returns {void}
     * @public
     */

  }, {
    key: 'selectVideoTrack',
    value: function selectVideoTrack(videoTrack) {
      var videoTracks = this._videoElement.videoTracks;
      if (videoTrack instanceof _videoTrack2.default && videoTracks && videoTracks[videoTrack.index]) {
        this._disableVideoTracks();
        videoTracks[videoTrack.index].selected = true;
        this._onTrackChanged(videoTrack);
      }
    }

    /**
     * Select an audio track
     * @function selectAudioTrack
     * @param {AudioTrack} audioTrack - the  audio track to select
     * @returns {void}
     * @public
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
     * Select a text track
     * @function selectTextTrack
     * @param {TextTrack} textTrack - the track to select
     * @returns {void}
     * @public
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
     * Hide the text track
     * @function hideTextTrack
     * @returns {void}
     * @public
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
     */

  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      NativeAdapter._logger.debug('Enabling adaptive bitrate not supported');
    }

    /**
     * Disables all the existing video tracks.
     * @private
     * @returns {void}
     */

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

    /**
     * Disables all the existing audio tracks.
     * @private
     * @returns {void}
     */

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

    /**
     * Disables all the existing text tracks.
     * @private
     * @returns {void}
     */

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

    /**
     * Getter for the src that the adapter plays on the video element.
     * @public
     * @returns {string} - The src url.
     */

  }, {
    key: 'src',
    get: function get() {
      return this._videoElement.src;
    }
  }]);

  return NativeAdapter;
}(_baseMediaSourceAdapter2.default);

NativeAdapter.id = 'NativeAdapter';
NativeAdapter._logger = _baseMediaSourceAdapter2.default.getLogger(NativeAdapter.id);
exports.default = NativeAdapter;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERSION = exports.Utils = exports.TextTrack = exports.AudioTrack = exports.VideoTrack = exports.Track = exports.BasePlugin = exports.registerPlugin = exports.BaseMediaSourceAdapter = exports.registerMediaSourceAdapter = undefined;
exports.loadPlayer = loadPlayer;

var _player = __webpack_require__(9);

var _player2 = _interopRequireDefault(_player);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _package = __webpack_require__(18);

var packageData = _interopRequireWildcard(_package);

var _baseMediaSourceAdapter = __webpack_require__(12);

var _baseMediaSourceAdapter2 = _interopRequireDefault(_baseMediaSourceAdapter);

var _mediaSourceProvider = __webpack_require__(13);

var _pluginManager = __webpack_require__(15);

var _basePlugin = __webpack_require__(14);

var _basePlugin2 = _interopRequireDefault(_basePlugin);

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(5);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(3);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(4);

var _textTrack2 = _interopRequireDefault(_textTrack);

var _util = __webpack_require__(6);

var Utils = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Playkit version
var VERSION = packageData.version;

_logger2.default.getLogger().log("%c Playkit " + VERSION, "color: yellow; font-size: large");
_logger2.default.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

/**
 * @param {string} targetId - The target div id to append the player.
 * @param {Object} config - The configuration of the player
 * @returns {Player} - The player instance
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

// Export the tracks classes

exports.Track = _track2.default;
exports.VideoTrack = _videoTrack2.default;
exports.AudioTrack = _audioTrack2.default;
exports.TextTrack = _textTrack2.default;

// Export utils library

exports.Utils = Utils;

//export version

exports.VERSION = VERSION;
exports.default = loadPlayer;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(9);

var _player2 = _interopRequireDefault(_player);

var _eventManager = __webpack_require__(7);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _state = __webpack_require__(23);

var _state2 = _interopRequireDefault(_state);

var _stateTypes = __webpack_require__(16);

var _stateTypes2 = _interopRequireDefault(_stateTypes);

var _events = __webpack_require__(8);

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class responsible to manage all the state machine of the player.
 * @classdesc
 */


/**
 * Define a transition object.
 */
var StateManager = function () {

  /**
   * @constructor
   * @param {Player} player - Reference to the player.
   */

  /**
   * Holds the state history of the player.
   * @member
   * @type {Array<State>}
   * @private
   */

  /**
   * Holds the current state of the player.
   * @member
   * @type {State}
   * @private
   */

  /**
   * Reference to the actual player.
   * @member
   * @type {Player}
   * @private
   */
  function StateManager(player) {
    var _this = this,
        _PlayerStates$IDLE,
        _PlayerStates$LOADING,
        _PlayerStates$PAUSED,
        _PlayerStates$PLAYING,
        _PlayerStates$BUFFERI,
        _transitions;

    _classCallCheck(this, StateManager);

    this._transitions = (_transitions = {}, _defineProperty(_transitions, _stateTypes2.default.IDLE, (_PlayerStates$IDLE = {}, _defineProperty(_PlayerStates$IDLE, _events.HTML5_EVENTS.LOAD_START, function () {
      _this._updateState(_stateTypes2.default.LOADING);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$IDLE, _events.HTML5_EVENTS.PLAY, function () {
      _this._updateState(_stateTypes2.default.BUFFERING);
      _this._dispatchEvent();
    }), _PlayerStates$IDLE)), _defineProperty(_transitions, _stateTypes2.default.LOADING, (_PlayerStates$LOADING = {}, _defineProperty(_PlayerStates$LOADING, _events.HTML5_EVENTS.LOADED_METADATA, function () {
      if (_this._player.config.playback.autoplay) {
        _this._updateState(_stateTypes2.default.PLAYING);
      } else {
        _this._updateState(_stateTypes2.default.PAUSED);
      }
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$LOADING, _events.HTML5_EVENTS.ERROR, function () {
      _this._updateState(_stateTypes2.default.IDLE);
      _this._dispatchEvent();
    }), _PlayerStates$LOADING)), _defineProperty(_transitions, _stateTypes2.default.PAUSED, (_PlayerStates$PAUSED = {}, _defineProperty(_PlayerStates$PAUSED, _events.HTML5_EVENTS.PLAY, function () {
      _this._updateState(_stateTypes2.default.PLAYING);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PAUSED, _events.HTML5_EVENTS.PLAYING, function () {
      _this._updateState(_stateTypes2.default.PLAYING);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PAUSED, _events.HTML5_EVENTS.ENDED, function () {
      _this._updateState(_stateTypes2.default.IDLE);
      _this._dispatchEvent();
    }), _PlayerStates$PAUSED)), _defineProperty(_transitions, _stateTypes2.default.PLAYING, (_PlayerStates$PLAYING = {}, _defineProperty(_PlayerStates$PLAYING, _events.HTML5_EVENTS.PAUSE, function () {
      _this._updateState(_stateTypes2.default.PAUSED);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PLAYING, _events.HTML5_EVENTS.WAITING, function () {
      _this._updateState(_stateTypes2.default.BUFFERING);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PLAYING, _events.HTML5_EVENTS.ENDED, function () {
      _this._updateState(_stateTypes2.default.IDLE);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PLAYING, _events.HTML5_EVENTS.ERROR, function () {
      _this._updateState(_stateTypes2.default.IDLE);
      _this._dispatchEvent();
    }), _PlayerStates$PLAYING)), _defineProperty(_transitions, _stateTypes2.default.BUFFERING, (_PlayerStates$BUFFERI = {}, _defineProperty(_PlayerStates$BUFFERI, _events.HTML5_EVENTS.PLAYING, function () {
      _this._updateState(_stateTypes2.default.PLAYING);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$BUFFERI, _events.HTML5_EVENTS.PAUSE, function () {
      _this._updateState(_stateTypes2.default.PAUSED);
      _this._dispatchEvent();
    }), _PlayerStates$BUFFERI)), _transitions);

    this._player = player;
    this._logger = _logger2.default.getLogger("StateManager");
    this._eventManager = new _eventManager2.default();
    this._history = [];
    this._prevState = null;
    this._curState = new _state2.default(_stateTypes2.default.IDLE);
    this._attachListeners();
  }

  /**
   * Register to all necessary events which impacts on the player state.
   * @private
   * @returns {void}
   */

  /**
   * The possible transitions from one state to another.
   * @type {Array<Transition>}
   * @private
   */

  /**
   * Holds the previous state of the player.
   * @member
   * @type {State | null}
   * @private
   */

  /**
   * The event manager of the class.
   * @member
   * @type {EventManager}
   * @private
   */

  /**
   * The logger of the class.
   * @member
   * @type {any}
   * @private
   */


  _createClass(StateManager, [{
    key: '_attachListeners',
    value: function _attachListeners() {
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.ERROR, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.ENDED, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.PLAY, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.LOAD_START, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.PLAYING, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.LOADED_METADATA, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.PAUSE, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.WAITING, this._doTransition.bind(this));
    }

    /**
     * Performs a state transition depends on the event which occurs in the player system.
     * @param {FakeEvent} event - The event occurs in the player system.
     * @private
     * @returns {void}
     */

  }, {
    key: '_doTransition',
    value: function _doTransition(event) {
      this._logger.debug('Do transition request', event);
      var transition = this._transitions[this._curState.type];
      if (typeof transition[event.type] === 'function') {
        transition[event.type]();
      }
    }

    /**
     * Updates the player's state.
     * @param {string} type - The type of the new state.
     * @private
     * @returns {void}
     */

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

    /**
     * Fires the playerStateChanged event after state has been changed.
     * @private
     * @returns {void}
     */

  }, {
    key: '_dispatchEvent',
    value: function _dispatchEvent() {
      var event = new _fakeEvent2.default(_events.CUSTOM_EVENTS.PLAYER_STATE_CHANGED, {
        'oldState': this._prevState,
        'newState': this._curState
      });
      this._player.dispatchEvent(event);
    }

    /**
     * Destroys the state manager.
     * @public
     * @returns {void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._history = [];
      this._eventManager.destroy();
    }

    /**
     * Getter to the current state of the player.
     * @public
     * @returns {State} - The current state object
     */

  }, {
    key: 'currentState',
    get: function get() {
      return this._curState;
    }

    /**
     * Getter to the previous state of the player.
     * @public
     * @returns {State|null} - The previous state object, or null if such doesn't exists
     */

  }, {
    key: 'previousState',
    get: function get() {
      return this._prevState;
    }

    /**
     * Getter to the state history of the player.
     * @public
     * @returns {Array.<State>} - The full states history objects
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class describes a player state.
 * @classdesc
 */
var State = function () {

  /**
   * @constructor
   * @param {string} type - The type of the state.
   */

  /**
   * The duration that the player was in this state.
   * @member
   * @type {number}
   * @private
   */
  function State(type) {
    _classCallCheck(this, State);

    this.type = type;
    this._duration = 0;
    this._timestamp = Date.now() / 1000;
  }

  /**
   * Getter for the duration of the state.
   * @returns {number} - The duration of the state
   */

  /**
   * The timestamp that this state started.
   * @member
   * @type {number}
   * @private
   */

  /**
   * The type of the state.
   * Can be one of those describes in states.js
   * @member
   * @type {string}
   * @public
   */


  _createClass(State, [{
    key: "duration",
    get: function get() {
      return this._duration;
    }

    /**
     * Setter for the duration of the state.
     * @param {number} endTime - The timestamp of the next state.
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TRACK_TYPES = {
  VIDEO: "video",
  AUDIO: "audio",
  TEXT: "text"
};

exports.default = TRACK_TYPES;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(undefined);
// imports


// module
exports.push([module.i, ".playkit-container {\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  color: #fff;\n  outline: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n*[class^=\"playkit-engine-\"] {\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n}\n", ""]);

// exports


/***/ }),
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(29)(content, options);
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
/* 29 */
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

var	fixUrls = __webpack_require__(30);

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
/* 30 */
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
/* 31 */
/***/ (function(module, exports) {

module.exports = {
	"playback": {
		"preload": "none",
		"autoplay": false,
		"muted": false,
		"options": {
			"html5": {
				"hls": {},
				"dash": {}
			}
		},
		"streamPriority": [
			{
				"engine": "html5",
				"format": "hls"
			},
			{
				"engine": "html5",
				"format": "dash"
			},
			{
				"engine": "html5",
				"format": "progressive"
			}
		]
	}
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=playkit.js.map