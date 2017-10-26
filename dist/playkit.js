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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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

var _jsLogger = __webpack_require__(30);

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _Number = {
  /**
   * @param {number} n - A certain number
   * @returns {boolean} - If the input is a number
   */
  isNumber: function isNumber(n) {
    return Number(n) === n;
  },

  /**
   * @param {number} n - A certain number
   * @returns {boolean} - If the input is an integer
   */
  isInt: function isInt(n) {
    return this.isNumber(n) && n % 1 === 0;
  },

  /**
   * @param {number} n - A certain number
   * @returns {boolean} - If the input is a float
   */
  isFloat: function isFloat(n) {
    return this.isNumber(n) && n % 1 !== 0;
  }
};

var _String = {
  /**
   * Uppercase the first letter of a string
   * @param  {String} string - String to be uppercased
   * @return {String} - The uppercased string
   * @public
   * @method toTitleCase
   */
  capitlize: function capitlize(string) {
    if (typeof string !== 'string') {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  /**
   * @param {string} string - Certain string
   * @param {string} searchString - Certain string
   * @returns {boolean} - Whether the string: string is ending with string: searchString
   */
  endsWith: function endsWith(string, searchString) {
    if (typeof string !== 'string' || typeof searchString !== 'string') {
      return false;
    }
    return string.indexOf(searchString, string.length - searchString.length) != -1;
  }
};

var _Object = {
  /**
   * @param {Array<Object>} objects - The objects to merge
   * @returns {Object} - The merged object.
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
   * @param {any} item - The item to check.
   * @returns {boolean} - Whether the item is an object.
   */
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item);
  },

  /**
   * @param {any} target - The target object.
   * @param {any} sources - The objects to merge.
   * @returns {Object} - The merged object.
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
   * @param {any} data - The data to copy.
   * @returns {any} - The copied data.
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
   * Checks if an object is an empy object.
   * @param {Object} obj - The object to check
   * @returns {boolean} - Whether the object is empty.
   */
  isEmptyObject: function isEmptyObject(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  },

  /**
   * Checks for nested object properties.
   * @param {Object} obj - The object to check.
   * @param {string} propertyPath - The path to check.
   * @returns {boolean} - The value in this path.
   */
  getPropertyPath: function getPropertyPath(obj, propertyPath) {
    return propertyPath.split(".").reduce(function (o, x) {
      return typeof o === "undefined" || o === null ? o : o[x];
    }, obj);
  },

  /**
   * Checks for nested object properties.
   * @param {Object} obj - The object to check.
   * @param {string} propertyPath - The path to check.
   * @returns {boolean} - Whether the path exists in the object.
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
   * @returns {DeferredPromise} - The promise with resolve and reject props.
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
   */
  bind: function bind(thisObj, fn) {
    return function () {
      fn.apply(thisObj, arguments);
    };
  }
};

var _Generator = {
  /**
   * Generates unique id.
   * @param {number} length - The length of the id.
   * @returns {string} - The generated id.
   */
  uniqueId: function uniqueId(length) {
    var from = 2;
    var to = from + (!length || length < 0 ? 0 : length - 2);
    return '_' + Math.random().toString(36).substr(from, to);
  },

  /**
   * Generates GUID.
   * @return {string} - GUID
   * @private
   */
  guid: function guid() {
    var S4 = function S4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
  }
};

var _Dom = {
  /**
   * Adds class name to an element
   * @param {Element} element - an HTML element
   * @param {string} className - a class name
   * @returns {void}
   */
  addClassName: function addClassName(element, className) {
    if (element.classList) {
      element.classList.add(className);
    } else {
      if (!_Dom.hasClassName(element, className)) {
        element.className += className;
      }
    }
  },


  /**
   * Removes class name from an element
   * @param {Element} element - an HTML element
   * @param {string} className - a class name
   * @returns {void}
   */
  removeClassName: function removeClassName(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else {
      if (_Dom.hasClassName(element, className)) {
        element.className = element.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
      }
    }
  },

  /**
   * Checks if an element has a class name
   * @param {Element} element - an HTML element
   * @param {string} className - a class name
   * @returns {boolean} - weather an element contains a class name
   */
  hasClassName: function hasClassName(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
  },

  /**
   * Add element attribute
   * @param {Element} element - an HTML element
   * @param {string} name - attribute name
   * @param {string} value - attribute value
   * @returns {void}
   */
  setAttribute: function setAttribute(element, name, value) {
    element.setAttribute(name, value);
  },

  /**
   * Remove element attribute
   * @param {Element} element - an HTML element
   * @param {string} name - attribute name
   * @returns {void}
   */
  removeAttribute: function removeAttribute(element, name) {
    element.removeAttribute(name);
  },

  /**
   * Set element style
   * @param {Element} element - an HTML element
   * @param {string} name - style name
   * @param {string} value - style value
   * @returns {void}
   */
  setStyle: function setStyle(element, name, value) {
    if (element.style.getPropertyValue(name) !== undefined) {
      element.style.setProperty(name, value);
    }
  },

  /**
   * Adds a node to the end of the list of children of a specified parent node.
   * @param {Element} parent - The parent node.
   * @param {Element} child - The child node.
   * @returns {void}
   */
  appendChild: function appendChild(parent, child) {
    if (parent && child && parent.appendChild) {
      parent.appendChild(child);
    }
  },

  /**
   * Removes an element from his parent node.
   * @param {Element} parent - The parent node.
   * @param {Element} child - The child node.
   * @returns {void}
   */
  removeChild: function removeChild(parent, child) {
    if (parent && child && parent.removeChild) {
      parent.removeChild(child);
    }
  },

  /**
   * Prepend HTML element
   * @param {HTMLElement} child - the child to prepend
   * @param {HTMLElement} parent - the parent to preprend to
   * @returns {void}
   */
  prependTo: function prependTo(child, parent) {
    if (parent.firstChild) {
      parent.insertBefore(child, parent.firstChild);
    } else {
      parent.appendChild(child);
    }
  },

  /**
   * Returns a reference to the element by its ID.
   * @param {string} id - The desired id.
   * @returns {Element} - The element with the desired id.
   */
  getElementById: function getElementById(id) {
    return document.getElementById(id);
  },

  /**
   * Creates the HTML element specified by tagName.
   * @param {string} tagName - The tag name.
   * @returns {Element} - The element just created.
   */
  createElement: function createElement(tagName) {
    return document.createElement(tagName);
  },

  /**
   * Loads script asynchronously.
   * @param {string} url - The url to load.
   * @return {Promise} - The loading promise.
   * @public
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

var _Http = {
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
    get: function get() {
      return this._id;
    }

    /**
     * Getter for the active mode of the track.
     * @public
     * @returns {boolean} - The active mode of the track.
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

  }], [{
    key: "langComparer",

    /**
     * Comparing language strings.
     * @param {string} inputLang - The configured language.
     * @param {string} trackLang - The default track language.
     * @returns {boolean} - Whether the strings are equal or starts with the same substring.
     */
    value: function langComparer(inputLang, trackLang) {
      try {
        inputLang = inputLang.toLowerCase();
        trackLang = trackLang.toLowerCase();
        return inputLang.startsWith(trackLang) || trackLang.startsWith(inputLang);
      } catch (e) {
        return false;
      }
    }

    /**
     * The id of the track.
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

    /**
     * The label of the track.
     * @member
     * @type {string}
     * @private
     */

    /**
     * The language of the track.
     * @member
     * @type {string}
     * @private
     */

    /**
     * The index of the track.
     * @member
     * @type {number}
     * @private
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiMap = __webpack_require__(12);

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
     * Attaches an event listener to an event target for only one time.
     * @param {EventTarget} target - The event target.
     * @param {string} type - The event type.
     * @param {EventManager.ListenerType} listener - The event listener.
     * @returns {void}
     */

  }, {
    key: 'listenOnce',
    value: function listenOnce(target, type, listener) {
      var _this = this;

      var oneListener = function oneListener(event) {
        _this.unlisten(target, type, oneListener);
        listener.call(_this, event);
      };
      this.listen(target, type, oneListener);
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
     * @param {EventManager.ListenerType} [listener] The event listener to detach. If no given, detaches all event listeners of the target and type.
     * @returns {void}
     */

  }, {
    key: 'unlisten',
    value: function unlisten(target, type, listener) {
      if (this._bindingMap) {
        var list = this._bindingMap.get(type);

        for (var i = 0; i < list.length; ++i) {
          var binding = list[i];

          if (binding.target === target && (binding.listener === listener || !listener)) {
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CUSTOM_EVENTS = exports.HTML5_EVENTS = exports.PLAYER_EVENTS = undefined;

var _util = __webpack_require__(1);

var Utils = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
   * Fires when browser fails to autoplay with sound
   */
  AUTOPLAY_FAILED: 'autoplayfailed',
  /**
   * Fires when browser fails to autoplay with sound but start muted autoplay instead
   */
  FALLBACK_TO_MUTED_AUTOPLAY: 'fallbacktomutedautoplay',
  /**
   * Fires when change source flow started
   */
  CHANGE_SOURCE_STARTED: 'changesourcestarted',
  /**
   * Fires when change source flow ended
   */
  CHANGE_SOURCE_ENDED: 'changesourceended',
  /**
   * Fires when the volume has been muted/unmute
   */
  MUTE_CHANGE: 'mutechange',
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
   * Fires when the active text track cue has changed
   */
  TEXT_CUE_CHANGED: 'textcuechanged',
  /**
   * Fires when the player tracks have been changed
   */
  TRACKS_CHANGED: 'trackschanged',
  /**
   * Fires when the abr mode change from 'auto' to 'manual' or vice versa
   */
  ABR_MODE_CHANGED: 'abrmodechanged',
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
  SOURCE_SELECTED: 'sourceselected',
  /**
   * Fires when the text track style has changed
   */
  TEXT_STYLE_CHANGED: 'textstylechanged',
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
  AD_PROGRESS: 'adprogress'
};

var PLAYER_EVENTS = Utils.Object.merge([HTML5_EVENTS, CUSTOM_EVENTS]);

exports.PLAYER_EVENTS = PLAYER_EVENTS;
exports.HTML5_EVENTS = HTML5_EVENTS;
exports.CUSTOM_EVENTS = CUSTOM_EVENTS;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _track = __webpack_require__(3);

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
     * @public
     * @returns {number} - The bandwidth of the video track
     */


    /**
     * @member {number} _width - The width of the video track
     * @type {number}
     * @private
     */
    get: function get() {
      return this._bandwidth;
    }

    /**
     * @public
     * @returns {number} - The width of the video track
     */


    /**
     * @member {number} _height - The height of the video track
     * @type {number}
     * @private
     */

    /**
     * @member {number} _bandwidth - The bandwidth of the video track
     * @type {number}
     * @private
     */

  }, {
    key: 'width',
    get: function get() {
      return this._width;
    }

    /**
     * @public
     * @returns {number} - The height of the video track
     */

  }, {
    key: 'height',
    get: function get() {
      return this._height;
    }

    /**
     * @constructor
     * @param {Object} settings - The track settings object
     */

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

var _track = __webpack_require__(3);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextTrack = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _track = __webpack_require__(3);

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
exports.TextTrack = TextTrack;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _env = __webpack_require__(10);

var _env2 = _interopRequireDefault(_env);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _posterManager = __webpack_require__(28);

var _posterManager2 = _interopRequireDefault(_posterManager);

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _fakeEventTarget = __webpack_require__(13);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _events = __webpack_require__(5);

var _stateTypes = __webpack_require__(16);

var _stateTypes2 = _interopRequireDefault(_stateTypes);

var _util = __webpack_require__(1);

var Utils = _interopRequireWildcard(_util);

var _locale = __webpack_require__(29);

var _locale2 = _interopRequireDefault(_locale);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _html = __webpack_require__(31);

var _html2 = _interopRequireDefault(_html);

var _pluginManager = __webpack_require__(23);

var _pluginManager2 = _interopRequireDefault(_pluginManager);

var _basePlugin = __webpack_require__(14);

var _basePlugin2 = _interopRequireDefault(_basePlugin);

var _stateManager = __webpack_require__(39);

var _stateManager2 = _interopRequireDefault(_stateManager);

var _trackTypes = __webpack_require__(41);

var _trackTypes2 = _interopRequireDefault(_trackTypes);

var _track = __webpack_require__(3);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(6);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(7);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(8);

var _textTrack2 = _interopRequireDefault(_textTrack);

var _textStyle = __webpack_require__(24);

var _textStyle2 = _interopRequireDefault(_textStyle);

var _vttCue = __webpack_require__(21);

var _textTrackDisplay = __webpack_require__(22);

var _playbackMiddleware = __webpack_require__(42);

var _playbackMiddleware2 = _interopRequireDefault(_playbackMiddleware);

var _playerConfig = __webpack_require__(44);

var _playerConfig2 = _interopRequireDefault(_playerConfig);

__webpack_require__(45);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
 /**
 * The player poster class name.
 * @type {string}
 * @const
 */
var POSTER_CLASS_NAME = 'playkit-poster';

/**
 * The engine class name.
 * @type {string}
 * @const
 */
var ENGINE_CLASS_NAME = 'playkit-engine';

/**
 * The text style id.
 * @type {string}
 * @const
 */
var SUBTITLES_STYLE_ID_NAME = 'playkit-subtitles-style';

/**
 * The subtitles class name.
 * @type {string}
 * @const
 */
var SUBTITLES_CLASS_NAME = 'playkit-subtitles';

/**
 * The live string.
 * @type {string}
 * @const
 */
var LIVE = 'Live';

/**
 *  The auto string, for captions
 *  @type {string}
 *  @const
 */
var AUTO = 'auto';

/**
 *  The off string, for captions
 *  @type {string}
 *  @const
 */
var OFF = 'off';

/**
 *  The duration offset, for seeking to duration safety.
 *  @type {number}
 *  @const
 */
var DURATION_OFFSET = 0.1;

/**
 * The HTML5 player class.
 * @classdesc
 */

var Player = function (_FakeEventTarget) {
  _inherits(Player, _FakeEventTarget);

  _createClass(Player, null, [{
    key: 'runCapabilities',


    /**
     * Runs the engines capabilities tests.
     * @returns {void}
     * @public
     * @static
     */

    /**
     * The player capabilities result object.
     * @type {Object}
     * @private
     * @static
     */

    /**
     * The player class logger.
     * @type {any}
     * @static
     * @private
     */
    value: function runCapabilities() {
      Player._logger.debug("Running player capabilities");
      Player._engines.forEach(function (Engine) {
        return Engine.runCapabilities();
      });
    }

    /**
     * Gets the engines capabilities.
     * @param {?string} engineType - The engine type.
     * @return {Promise<Object>} - The engines capabilities object.
     * @public
     * @static
     */

    /**
     * The available engines of the player.
     * @type {Array<typeof IEngine>}
     * @private
     * @static
     */

  }, {
    key: 'getCapabilities',
    value: function getCapabilities(engineType) {
      Player._logger.debug("Get player capabilities", engineType);
      if (Player._playerCapabilities) {
        return engineType ? Promise.resolve(Player._playerCapabilities[engineType]) : Promise.resolve(Player._playerCapabilities);
      }
      var promises = [];
      Player._engines.forEach(function (Engine) {
        return promises.push(Engine.getCapabilities());
      });
      return Promise.all(promises).then(function (arrayOfResults) {
        Player._playerCapabilities = {};
        arrayOfResults.forEach(function (res) {
          return Object.assign(Player._playerCapabilities, res);
        });
        return engineType ? Promise.resolve(Player._playerCapabilities[engineType]) : Promise.resolve(Player._playerCapabilities);
      });
    }

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
     * The poster manager of the player.
     * @type {PosterManager}
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
     * @type {HTMLDivElement}
     * @private
     */

    /**
     * The player text DOM element container.
     * @type {HTMLDivElement}
     * @private
     */

    /**
     * The player DOM id.
     * @type {string}
     * @private
     */

    /**
     * The player last updated text cues list
     * @type {Array<any>}
     * @private
     */

    /**
     * The player text disaply settings
     * @type {Object}
     * @private
     */

    /**
     * The current playback attributes state
     * @type {Object}
     * @private
     */

    /**
     * The player text style settings
     * @type {TextStyle}
     * @private
     */

    /**
     * The playback middleware of the player.
     * @type {PlaybackMiddleware}
     * @private
     */

    /**
     * The environment(os,device,browser) object of the player.
     * @type {Object}
     * @private
     */

    /**
     * The currently selected engine type
     * @type {string}
     * @private
     */

    /**
     * The currently selected stream type
     * @type {string}
     * @private
     */

    /**
     * Flag to indicate whether is the first play in the current session.
     * @type {boolean}
     * @private
     */

  }]);

  /**
   * @param {Object} config - The configuration for the player instance.
   * @constructor
   */
  function Player() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

    _this._activeTextCues = [];
    _this._textDisplaySettings = {};
    _this._playbackAttributesState = {
      muted: undefined,
      volume: undefined,
      rate: undefined,
      audioLanguage: "",
      textLanguage: ""
    };

    _this._env = _env2.default;
    _this._tracks = [];
    _this._firstPlay = true;
    _this._firstPlayInCurrentSession = true;
    _this._config = Player._defaultConfig;
    _this._eventManager = new _eventManager2.default();
    _this._posterManager = new _posterManager2.default();
    _this._stateManager = new _stateManager2.default(_this);
    _this._pluginManager = new _pluginManager2.default();
    _this._playbackMiddleware = new _playbackMiddleware2.default();
    _this._textStyle = new _textStyle2.default();
    _this._createReadyPromise();
    _this._createPlayerContainer();
    _this._appendPosterEl();
    _this.configure(config);
    return _this;
  }

  // <editor-fold desc="Public API">

  // <editor-fold desc="Playback API">

  /**
   * Configures the player according to a given configuration.
   * @param {Object} config - The configuration for the player instance.
   * @returns {void}
   */


  _createClass(Player, [{
    key: 'configure',
    value: function configure(config) {
      Utils.Object.mergeDeep(this._config, config);
      this._configureOrLoadPlugins(config.plugins);
      if (!Utils.Object.isEmptyObject(config.sources)) {
        var receivedSourcesWhenHasEngine = !!this._engine;
        if (receivedSourcesWhenHasEngine) {
          this._reset();
          Player._logger.debug('Change source started');
          this.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.CHANGE_SOURCE_STARTED));
        }
        if (this._selectEngineByPriority()) {
          this._appendEngineEl();
          this._posterManager.setSrc(this._config.metadata.poster);
          this._posterManager.show();
          this._attachMedia();
          this._handlePlaybackOptions();
          this._handleAutoPlay();
          if (receivedSourcesWhenHasEngine) {
            Player._logger.debug('Change source ended');
            this.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.CHANGE_SOURCE_ENDED));
          }
        }
      }
    }

    /**
     * The player readiness
     * @public
     * @returns {Promise<*>} - The ready promise
     */

  }, {
    key: 'ready',
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
      var _this2 = this;

      if (this._engine) {
        var startTime = this._config.playback.startTime;
        this._engine.load(startTime).then(function (data) {
          _this2._tracks = data.tracks;
          _this2._addTextTrackOffOption();
          _this2._setDefaultTracks();
          _this2.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.TRACKS_CHANGED, { tracks: _this2._tracks }));
        }).catch(function (error) {
          _this2.dispatchEvent(new _fakeEvent2.default(_events.HTML5_EVENTS.ERROR, error));
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
      if (this._engine) {
        this._playbackMiddleware.play(this._play.bind(this));
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
        this._playbackMiddleware.pause(this._pause.bind(this));
      }
    }

    /**
     * Gets the view of the player (i.e the dom container object).
     * @return {HTMLElement} - The dom container.
     * @public
     */

  }, {
    key: 'getView',
    value: function getView() {
      return this._el;
    }

    /**
     * @returns {HTMLVideoElement} - The video element.
     * @public
     */

  }, {
    key: 'getVideoElement',
    value: function getVideoElement() {
      if (this._engine) {
        return this._engine.getVideoElement();
      }
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
      this._posterManager.destroy();
      this._eventManager.destroy();
      this._pluginManager.destroy();
      this._stateManager.destroy();
      this._activeTextCues = [];
      this._textDisplaySettings = {};
      this._config = {};
      this._tracks = [];
      this._engineType = '';
      this._streamType = '';
      this._readyPromise = null;
      this._firstPlay = true;
      this._playbackAttributesState = {};
      if (this._el) {
        Utils.Dom.removeChild(this._el.parentNode, this._el);
      }
    }
  }, {
    key: 'buffered',
    value: function buffered() {}

    /**
     * Set the current time in seconds.
     * @param {Number} to - The number to set in seconds.
     * @public
     */

  }, {
    key: 'isLive',


    // </editor-fold>

    // <editor-fold desc="Live API">

    /**
     * Checking if the current playback is live.
     * @function isLive
     * @returns {boolean} - Whether playback is live.
     * @public
     */
    value: function isLive() {
      return !!(this._config.type === LIVE || this._engine && this._engine.isLive());
    }

    /**
     * Checking if the current live playback has DVR window.
     * @function isDvr
     * @returns {boolean} - Whether live playback has DVR window.
     * @public
     */

  }, {
    key: 'isDvr',
    value: function isDvr() {
      return this.isLive() && this._config.dvr;
    }

    /**
     * Seeking to live edge.
     * @function seekToLiveEdge
     * @returns {void}
     * @public
     */

  }, {
    key: 'seekToLiveEdge',
    value: function seekToLiveEdge() {
      if (this._engine && this.isLive()) {
        this._engine.seekToLiveEdge();
      }
    }

    // </editor-fold>

    // <editor-fold desc="Tracks API">

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
     * Get an object includes the active video/audio/text tracks
     * @return {{video: VideoTrack, audio: AudioTrack, text: TextTrack}} - The active tracks object
     */

  }, {
    key: 'getActiveTracks',
    value: function getActiveTracks() {
      return {
        video: this._getTracksByType(_trackTypes2.default.VIDEO).find(function (track) {
          return track.active;
        }),
        audio: this._getTracksByType(_trackTypes2.default.AUDIO).find(function (track) {
          return track.active;
        }),
        text: this._getTracksByType(_trackTypes2.default.TEXT).find(function (track) {
          return track.active;
        })
      };
    }

    /**
     * Select a track
     * @function selectTrack
     * @param {?Track} track - the track to select
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
          if (track.language === OFF) {
            this.hideTextTrack();
            this._playbackAttributesState.textLanguage = OFF;
          } else {
            this._engine.selectTextTrack(track);
          }
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
        this._updateTextDisplay([]);
        var textTracks = this._getTracksByType(_trackTypes2.default.TEXT);
        textTracks.map(function (track) {
          return track.active = false;
        });
        var textTrack = textTracks.find(function (track) {
          return track.language === OFF;
        });
        if (textTrack) {
          textTrack.active = true;
          this.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.TEXT_TRACK_CHANGED, { selectedTextTrack: textTrack }));
        }
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
     * Checking if adaptive bitrate switching is enabled.
     * @function isAdaptiveBitrateEnabled
     * @returns {boolean} - Whether adaptive bitrate is enabled.
     * @public
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
     * update the text display settings
     * @param {Object} settings - text cue display settings
     * @public
     * @returns {void}
     */

  }, {
    key: 'setTextDisplaySettings',
    value: function setTextDisplaySettings(settings) {
      this._textDisplaySettings = settings;
      this._updateCueDisplaySettings();
      for (var i = 0; i < this._activeTextCues.length; i++) {
        this._activeTextCues[i].hasBeenReset = true;
      }
      this._updateTextDisplay(this._activeTextCues);
    }

    /**
     * Sets style attributes for text tracks.
     * @param {TextStyle} style - text styling settings
     * @returns {void}
     */

  }, {
    key: 'skipAd',


    // </editor-fold>

    // <editor-fold desc="Ads API">

    /**
     * Skip on an ad.
     * @public
     * @returns {void}
     */
    value: function skipAd() {
      var adsPlugin = this._pluginManager.get('ima');
      if (adsPlugin && typeof adsPlugin.skipAd === 'function') {
        adsPlugin.skipAd();
      }
    }

    /**
     * Start to play ad on demand.
     * @param {string} adTagUrl - The ad tag url to play.
     * @public
     * @returns {void}
     */

  }, {
    key: 'playAdNow',
    value: function playAdNow(adTagUrl) {
      var adsPlugin = this._pluginManager.get('ima');
      if (adsPlugin && typeof adsPlugin.playAdNow === 'function') {
        adsPlugin.playAdNow(adTagUrl);
      }
    }

    // </editor-fold>

    // </editor-fold>

    // <editor-fold desc="Private Methods">

    // <editor-fold desc="Playback">

    /**
     * Creates the player container.
     * @private
     * @returns {void}
     */

  }, {
    key: '_createPlayerContainer',
    value: function _createPlayerContainer() {
      var el = this._el = Utils.Dom.createElement("div");
      Utils.Dom.addClassName(el, CONTAINER_CLASS_NAME);
      this._playerId = Utils.Generator.uniqueId(5);
      Utils.Dom.setAttribute(el, "id", this._playerId);
      Utils.Dom.setAttribute(el, "tabindex", '-1');
    }

    /**
     * Appends the poster element to the player's div container.
     * @private
     * @returns {void}
     */

  }, {
    key: '_appendPosterEl',
    value: function _appendPosterEl() {
      if (this._el) {
        var el = this._posterManager.getElement();
        Utils.Dom.addClassName(el, POSTER_CLASS_NAME);
        Utils.Dom.appendChild(this._el, el);
      }
    }

    /**
     * Appends the engine's video element to the player's div container.
     * @private
     * @returns {void}
     */

  }, {
    key: '_appendEngineEl',
    value: function _appendEngineEl() {
      if (this._el && this._engine) {
        var engineEl = this._engine.getVideoElement();
        var classname = '' + ENGINE_CLASS_NAME;
        Utils.Dom.addClassName(engineEl, classname);
        var classnameWithId = ENGINE_CLASS_NAME + '-' + this._engine.id;
        Utils.Dom.addClassName(engineEl, classnameWithId);
        Utils.Dom.prependTo(engineEl, this._el);
      }
    }

    /**
     * Configures or load the plugins defined in the configuration.
     * @param {Object} plugins - The new received plugins configuration.
     * @private
     * @returns {void}
     */

  }, {
    key: '_configureOrLoadPlugins',
    value: function _configureOrLoadPlugins() {
      var _this3 = this;

      var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (plugins) {
        Object.keys(plugins).forEach(function (name) {
          // If the plugin is already exists in the registry we are updating his config
          var plugin = _this3._pluginManager.get(name);
          if (plugin) {
            plugin.updateConfig(plugins[name]);
            _this3._config.plugins[name] = plugin.getConfig();
          } else {
            // We allow to load plugins as long as the player has no engine
            if (!_this3._engine) {
              _this3._pluginManager.load(name, _this3, plugins[name]);
              var _plugin = _this3._pluginManager.get(name);
              if (_plugin) {
                _this3._config.plugins[name] = _plugin.getConfig();
                if (typeof _plugin.getMiddlewareImpl === "function") {
                  _this3._playbackMiddleware.use(_plugin.getMiddlewareImpl());
                }
              }
            } else {
              delete _this3._config.plugins[name];
            }
          }
        });
      }
    }

    /**
     * Creates the ready promise.
     * @private
     * @returns {void}
     */

  }, {
    key: '_createReadyPromise',
    value: function _createReadyPromise() {
      var _this4 = this;

      this._readyPromise = new Promise(function (resolve, reject) {
        _this4._eventManager.listen(_this4, _events.CUSTOM_EVENTS.TRACKS_CHANGED, resolve);
        _this4._eventManager.listen(_this4, _events.HTML5_EVENTS.ERROR, reject);
      });
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
      var _this5 = this;

      var streamPriority = this._config.playback.streamPriority;
      var preferNative = this._config.playback.preferNative;
      var sources = this._config.sources;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var priority = _step.value;

          var engineId = typeof priority.engine === 'string' ? priority.engine.toLowerCase() : '';
          var format = typeof priority.format === 'string' ? priority.format.toLowerCase() : '';
          var Engine = Player._engines.find(function (Engine) {
            return Engine.id === engineId;
          });
          if (Engine) {
            var formatSources = sources[format];
            if (formatSources && formatSources.length > 0) {
              var source = formatSources[0];
              if (Engine.canPlaySource(source, preferNative[format])) {
                Player._logger.debug('Source selected: ', formatSources);
                _this5._loadEngine(Engine, source);
                _this5._engineType = engineId;
                _this5._streamType = format;
                _this5.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.SOURCE_SELECTED, { selectedSource: formatSources }));
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
     * @param {IEngine} Engine - The selected engine.
     * @param {Source} source - The selected source object.
     * @private
     * @returns {void}
     */

  }, {
    key: '_loadEngine',
    value: function _loadEngine(Engine, source) {
      if (this._engine) {
        if (this._engine.id === Engine.id) {
          this._engine.restore(source, this._config);
        } else {
          this._engine.destroy();
          this._engine = Engine.createEngine(source, this._config);
        }
      } else {
        this._engine = Engine.createEngine(source, this._config);
      }
    }

    /**
     * Listen to all HTML5 defined events and trigger them on the player
     * @private
     * @returns {void}
     */

  }, {
    key: '_attachMedia',
    value: function _attachMedia() {
      var _this6 = this;

      if (this._engine) {
        Object.keys(_events.HTML5_EVENTS).forEach(function (html5Event) {
          _this6._eventManager.listen(_this6._engine, _events.HTML5_EVENTS[html5Event], function (event) {
            return _this6.dispatchEvent(event);
          });
        });
        this._eventManager.listen(this._engine, _events.HTML5_EVENTS.SEEKED, function () {
          var browser = _this6._env.browser.name;
          if (browser === 'Edge' || browser === 'IE') {
            _this6._removeTextCuePatch();
          }
        });
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.VIDEO_TRACK_CHANGED, function (event) {
          _this6._markActiveTrack(event.payload.selectedVideoTrack);
          return _this6.dispatchEvent(event);
        });
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.AUDIO_TRACK_CHANGED, function (event) {
          _this6._playbackAttributesState.audioLanguage = event.payload.selectedAudioTrack.language;
          _this6._markActiveTrack(event.payload.selectedAudioTrack);
          return _this6.dispatchEvent(event);
        });
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.TEXT_TRACK_CHANGED, function (event) {
          _this6._playbackAttributesState.textLanguage = event.payload.selectedTextTrack.language;
          _this6._markActiveTrack(event.payload.selectedTextTrack);
          return _this6.dispatchEvent(event);
        });
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.TEXT_CUE_CHANGED, function (event) {
          return _this6._onCueChange(event);
        });
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.ABR_MODE_CHANGED, function (event) {
          return _this6.dispatchEvent(event);
        });
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.AUTOPLAY_FAILED, function (event) {
          _this6.pause();
          _this6.dispatchEvent(event);
        });
        this._eventManager.listen(this, _events.HTML5_EVENTS.PLAY, this._onPlay.bind(this));
        this._eventManager.listen(this, _events.HTML5_EVENTS.ENDED, this._onEnded.bind(this));
        this._eventManager.listen(this, _events.CUSTOM_EVENTS.MUTE_CHANGE, function () {
          _this6._playbackAttributesState.muted = _this6.muted;
        });
        this._eventManager.listen(this, _events.HTML5_EVENTS.VOLUME_CHANGE, function () {
          _this6._playbackAttributesState.volume = _this6.volume;
        });
        this._eventManager.listen(this, _events.HTML5_EVENTS.RATE_CHANGE, function () {
          _this6._playbackAttributesState.rate = _this6.playbackRate;
        });
      }
    }

    /**
     * Handles the cue text removal issue, when seeking to a time without captions in IE \ edge the previous captions
     * are not removed
     * @returns {void}
     * @private
     */

  }, {
    key: '_removeTextCuePatch',
    value: function _removeTextCuePatch() {
      var _this7 = this;

      var filteredActiveTextCues = this._activeTextCues.filter(function (textCue) {
        var cueEndTime = textCue._endTime;
        var cueStartTime = textCue._startTime;
        var currTime = _this7.currentTime;
        if (currTime < cueEndTime && currTime > cueStartTime) {
          return textCue;
        }
      });
      this._updateTextDisplay(filteredActiveTextCues);
    }

    /**
     * Handles the playback options, from current state or config.
     * @returns {void}
     * @private
     */

  }, {
    key: '_handlePlaybackOptions',
    value: function _handlePlaybackOptions() {
      this._config.playback = this._config.playback || {};
      if (typeof this._playbackAttributesState.muted === 'boolean') {
        this.muted = this._playbackAttributesState.muted;
      } else if (typeof this._config.playback.muted === 'boolean') {
        this.muted = this._config.playback.muted;
      }
      if (typeof this._playbackAttributesState.volume === 'number') {
        this.volume = this._playbackAttributesState.volume;
      } else if (typeof this._config.playback.volume === 'number') {
        this.volume = this._config.playback.volume;
      }
      if (typeof this._config.playback.playsinline === 'boolean') {
        this.playsinline = this._config.playback.playsinline;
      }
      if (this._canPreload()) {
        this.load();
      }
    }

    /**
     * If ads plugin enabled it's his responsibility to preload the content player.
     * So to avoid loading the player twice which can cause errors on MSEs we are not
     * calling load from the player.
     * TODO: Change it to check the ads configuration when we will develop the ads manager.
     * @returns {boolean} - Whether the player should perform preload.
     * @private
     */

  }, {
    key: '_canPreload',
    value: function _canPreload() {
      return !this._config.playback.autoplay && this._config.playback.preload === "auto" && !this._config.plugins.ima;
    }

    /**
     * Handles auto play.
     * @returns {void}
     * @private
     */

  }, {
    key: '_handleAutoPlay',
    value: function _handleAutoPlay() {
      var _this8 = this;

      if (this._config.playback.autoplay === true) {
        if (this.muted || !this._firstPlayInCurrentSession) {
          this.play();
        } else {
          var allowMutedAutoPlay = this._config.playback.allowMutedAutoPlay;
          Player.getCapabilities(this.engineType).then(function (capabilities) {
            if (capabilities.autoplay) {
              Player._logger.debug("Start autoplay");
              _this8.play();
            } else {
              if (allowMutedAutoPlay) {
                Player._logger.debug("Fallback to muted autoplay");
                _this8.muted = true;
                _this8.play();
                _this8.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.FALLBACK_TO_MUTED_AUTOPLAY));
              } else {
                Player._logger.warn("Autoplay failed, pause player");
                _this8.load();
                _this8.ready().then(function () {
                  return _this8.pause();
                });
                _this8.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.AUTOPLAY_FAILED));
              }
            }
          });
        }
      }
    }

    /**
     * Start/resume the engine playback.
     * @private
     * @returns {void}
     */

  }, {
    key: '_play',
    value: function _play() {
      var _this9 = this;

      if (this._engine.src) {
        if (this.isLive() && !this.isDvr()) {
          this.seekToLiveEdge();
        }
        this._engine.play();
      } else {
        this.load();
        this.ready().then(function () {
          _this9._engine.play();
        });
      }
    }

    /**
     * Starts the engine pause.
     * @private
     * @returns {void}
     */

  }, {
    key: '_pause',
    value: function _pause() {
      this._engine.pause();
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
        this._posterManager.hide();
        if (typeof this._playbackAttributesState.rate === 'number') {
          this.playbackRate = this._playbackAttributesState.rate;
        }
      }
    }

    /**
     * @function _onEnded
     * @return {void}
     * @private
     */

  }, {
    key: '_onEnded',
    value: function _onEnded() {
      if (!this.paused) {
        this._pause();
      }
    }

    /**
     * Resets the necessary components before change media.
     * @private
     * @returns {void}
     */

  }, {
    key: '_reset',
    value: function _reset() {
      this.pause();
      this._posterManager.reset();
      this._stateManager.reset();
      this._pluginManager.reset();
      this._eventManager.removeAll();
      this._activeTextCues = [];
      this._tracks = [];
      this._firstPlay = true;
      this._firstPlayInCurrentSession = false;
      this._engineType = '';
      this._streamType = '';
      this._createReadyPromise();
    }

    /**
     * @returns {Object} - The default configuration of the player.
     * @private
     * @static
     */

  }, {
    key: '_getTracksByType',


    // </editor-fold>

    // <editor-fold desc="Tracks">

    /**
     * Returns the tracks according to the filter. if no filter given returns the all tracks.
     * @function _getTracksByType
     * @param {string} [type] - a tracks filter, should be 'video', 'audio' or 'text'.
     * @returns {Array<Track>} - The parsed tracks.
     * @private
     */
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
     * handle text cue change
     * @param {FakeEvent} event - the cue change event payload
     * @private
     * @returns {void}
     */

  }, {
    key: '_onCueChange',
    value: function _onCueChange(event) {
      Player._logger.debug('Text cue changed', event.payload.cues);
      this._activeTextCues = event.payload.cues;
      this._updateCueDisplaySettings();
      this._updateTextDisplay(this._activeTextCues);
    }

    /**
     * update the text cue display settings
     * @private
     * @returns {void}
     */

  }, {
    key: '_updateCueDisplaySettings',
    value: function _updateCueDisplaySettings() {
      var activeCues = this._activeTextCues;
      var settings = this._textDisplaySettings;
      for (var i = 0; i < activeCues.length; i++) {
        var cue = activeCues[i];
        for (var name in settings) {
          cue[name] = settings[name];
        }
      }
    }

    /**
     * update the text display
     * @param {Array<Cue>} cues - list of cues
     * @private
     * @returns {void}
     */

  }, {
    key: '_updateTextDisplay',
    value: function _updateTextDisplay(cues) {
      if (this._textDisplayEl === undefined) {
        this._textDisplayEl = Utils.Dom.createElement("div");
        Utils.Dom.addClassName(this._textDisplayEl, SUBTITLES_CLASS_NAME);
        Utils.Dom.appendChild(this._el, this._textDisplayEl);
      }
      (0, _textTrackDisplay.processCues)(window, cues, this._textDisplayEl);
    }

    /**
     * Add off text track if there are actual text tracks associated with media
     * setting this track is the same as calling Player's hideTextTrack
     * @private
     * @returns {void}
     */

  }, {
    key: '_addTextTrackOffOption',
    value: function _addTextTrackOffOption() {
      var textTracks = this.getTracks(_trackTypes2.default.TEXT);
      if (textTracks && textTracks.length) {
        this._tracks.push(new _textTrack2.default({
          active: false,
          index: textTracks.length,
          kind: "subtitles",
          label: "Off",
          language: OFF
        }));
      }
    }

    /**
     * Sets the default tracks defined in the player config.
     * @returns {void}
     * @private
     */

  }, {
    key: '_setDefaultTracks',
    value: function _setDefaultTracks() {
      var activeTracks = this.getActiveTracks();
      var playbackConfig = this.config.playback;
      var offTextTrack = this._getTracksByType(_trackTypes2.default.TEXT).find(function (track) {
        return _textTrack2.default.langComparer(OFF, track.language);
      });

      this.hideTextTrack();

      var currentOrConfiguredTextLang = this._playbackAttributesState.textLanguage || this._getLanguage(playbackConfig.textLanguage, activeTracks.text, _trackTypes2.default.TEXT);
      var currentOrConfiguredAudioLang = this._playbackAttributesState.audioLanguage || playbackConfig.audioLanguage;
      this._setDefaultTrack(_trackTypes2.default.TEXT, currentOrConfiguredTextLang, offTextTrack);
      this._setDefaultTrack(_trackTypes2.default.AUDIO, currentOrConfiguredAudioLang, activeTracks.audio);
    }

    /**
     * Gets the track language that should be set by default.
     * @param {string} configuredLanguage - The configured language (can be also "auto").
     * @param {Track} defaultTrack - The default track.
     * @param {string} type - The track type.
     * @private
     * @returns {string} - The track language to set by default.
     */

  }, {
    key: '_getLanguage',
    value: function _getLanguage(configuredLanguage, defaultTrack, type) {
      var language = configuredLanguage;
      if (language === AUTO) {
        var tracks = this._getTracksByType(type);
        var localeTrack = tracks.find(function (track) {
          return _track2.default.langComparer(_locale2.default.language, track.language);
        });
        if (localeTrack) {
          language = localeTrack.language;
        } else if (defaultTrack && defaultTrack.language !== OFF) {
          language = defaultTrack.language;
        } else if (tracks && tracks.length > 0) {
          language = tracks[0].language;
        }
      }
      return language;
    }

    /**
     * Sets a specific default track.
     * @param {string} type - The track type.
     * @param {string} language - The track language.
     * @param {?Track} defaultTrack - The default track to set in case there is no language configured.
     * @returns {void}
     * @private
     */

  }, {
    key: '_setDefaultTrack',
    value: function _setDefaultTrack(type, language, defaultTrack) {
      var track = this._getTracksByType(type).find(function (track) {
        return _track2.default.langComparer(language, track.language);
      });
      if (track) {
        this.selectTrack(track);
      } else {
        this.selectTrack(defaultTrack);
      }
    }

    // </editor-fold>

    // </editor-fold>

    // <editor-fold desc="Enums">

    /**
     * Get the player events.
     * @returns {Object} - The events of the player.
     * @public
     */

  }, {
    key: 'currentTime',
    set: function set(to) {
      if (this._engine) {
        if (Utils.Number.isNumber(to)) {
          var boundedTo = to;
          if (to < 0) {
            boundedTo = 0;
          }
          if (boundedTo > this._engine.duration - DURATION_OFFSET) {
            boundedTo = this._engine.duration - DURATION_OFFSET;
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
        if (Utils.Number.isFloat(vol) || vol === 0 || vol === 1) {
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

    /**
     * Set playsinline attribute.
     * Relevant for iOS 10 and up:
     * Elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins.
     * @param {boolean} playsinline - Whether the video should plays in line.
     */

  }, {
    key: 'playsinline',
    set: function set(playsinline) {
      if (this._engine) {
        this._engine.playsinline = playsinline;
      }
    }

    /**
     * Get playsinline attribute.
     * Relevant for iOS 10 and up:
     * Elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins.
     * @returns {boolean} - Whether the video plays in line.
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.playsinline;
      }
    }

    /**
     * Set player muted state.
     * @param {boolean} mute - The mute value.
     * @returns {void}
     * @public
     */

  }, {
    key: 'muted',
    set: function set(mute) {
      if (this._engine) {
        this._engine.muted = mute;
        this.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.MUTE_CHANGE, { mute: mute }));
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
     * Get the dimensions of the player.
     * @returns {{width: number, height: number}} - The dimensions of the player.
     * @public
     */

  }, {
    key: 'dimensions',
    get: function get() {
      return {
        width: this._el.clientWidth,
        height: this._el.clientHeight
      };
    }

    /**
     * Get the poster source URL
     * @returns {string} - the poster image URL
     */

  }, {
    key: 'poster',
    get: function get() {
      return this._posterManager.src;
    }

    /**
     * Sets the playbackRate property.
     * @param {number} rate - The playback speed of the video.
     */

  }, {
    key: 'playbackRate',
    set: function set(rate) {
      if (this._engine) {
        this._engine.playbackRate = rate;
      }
    }

    /**
     * Gets the current playback speed of the video.
     * @returns {number} - The current playback speed of the video.
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.playbackRate;
      }
    }

    /**
     * get the engine type
     * @returns {string} - html5
     */

  }, {
    key: 'engineType',
    get: function get() {
      return this._engineType;
    }

    /**
     * get the stream type
     * @returns {string} - hls|dash|progressive
     */

  }, {
    key: 'streamType',
    get: function get() {
      return this._streamType;
    }

    /**
     * Getter for the environment of the player instance.
     * @return {Object} - The current environment object.
     * @public
     */

  }, {
    key: 'env',
    get: function get() {
      return this._env;
    }

    /**
     * Get the player config.
     * @returns {Object} - A copy of the player configuration.
     * @public
     */

  }, {
    key: 'config',
    get: function get() {
      return Utils.Object.mergeDeep({}, this._config);
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
    key: 'textStyle',
    set: function set(style) {
      if (!(style instanceof _textStyle2.default)) {
        throw new Error("Style must be instance of TextStyle");
      }
      var element = Utils.Dom.getElementById(SUBTITLES_STYLE_ID_NAME);
      if (!element) {
        element = Utils.Dom.createElement('style');
        Utils.Dom.setAttribute(element, 'id', SUBTITLES_STYLE_ID_NAME);
        Utils.Dom.appendChild(document.head, element);
      }
      var sheet = element.sheet;

      while (sheet.cssRules.length) {
        sheet.deleteRule(0);
      }

      try {
        if (this._config.playback.useNativeTextTrack) {
          sheet.insertRule('video.' + ENGINE_CLASS_NAME + '::cue { ' + style.toCSS() + ' }', 0);
        } else {
          sheet.insertRule('#' + this._playerId + ' .' + SUBTITLES_CLASS_NAME + ' > div > div > div { ' + style.toCSS() + ' }', 0);
        }
        this._textStyle = style;
        this.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.TEXT_STYLE_CHANGED));
      } catch (e) {
        Player._logger.error(e.message);
      }
    }

    /**
     * Gets style attributes for text tracks.
     * @returns {?TextStyle} - the current style attribute
     */
    ,
    get: function get() {
      return this._textStyle.clone();
    }
  }, {
    key: 'Event',
    get: function get() {
      return _events.PLAYER_EVENTS;
    }

    /**
     * Get the player TextStyle.
     * @returns {TextStyle} - The TextStyle class
     * @public
     */

  }, {
    key: 'TextStyle',
    get: function get() {
      return _textStyle2.default;
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
      return Utils.Object.copyDeep(_playerConfig2.default);
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

var _uaParserJs = __webpack_require__(26);

var _uaParserJs2 = _interopRequireDefault(_uaParserJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Env = new _uaParserJs2.default().getResult();
exports.default = Env;

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _multiMap = __webpack_require__(12);

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
/* 14 */
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

var _util = __webpack_require__(1);

var Utils = _interopRequireWildcard(_util);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _playerError = __webpack_require__(11);

var _playerError2 = _interopRequireDefault(_playerError);

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
    this.logger = _logger2.default.getLogger(Utils.String.capitlize(this.name));
    this.config = {};
    Utils.Object.mergeDeep(this.config, this.constructor.defaultConfig, config);
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
        return Utils.Object.copyDeep(this.config[attr]);
      }
      return Utils.Object.copyDeep(this.config);
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
      Utils.Object.mergeDeep(this.config, update);
    }

    /**
     * Runs the destroy logic of the plugin.
     * plugin must implement this method.
     * @public
     * @virtual
     * @returns {void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {}

    /**
     * Runs the reset logic of the plugin.
     * plugin must implement this method.
     * @public
     * @virtual
     * @returns {void}
     */

  }, {
    key: 'reset',
    value: function reset() {}

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

    /**
     * Dispatch an event via the plugin.
     * @param {string} name - The event name.
     * @param {any} payload - The event payload.
     * @returns {void}
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base middleware.
 * @classdesc
 */
var BaseMiddleware = function () {
  function BaseMiddleware() {
    _classCallCheck(this, BaseMiddleware);
  }

  _createClass(BaseMiddleware, [{
    key: "callNext",


    /**
     * Calls the next handler in the middleware chain.
     * @param {Function} next - The next handler in the middleware chain.
     * @returns {void}
     */
    value: function callNext(next) {
      if (next) {
        next();
      }
    }
    /**
     * Id of the middleware instance.
     * @public
     */

  }]);

  return BaseMiddleware;
}();

exports.default = BaseMiddleware;

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
exports.registerMediaSourceAdapter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nativeAdapter = __webpack_require__(32);

var _nativeAdapter2 = _interopRequireDefault(_nativeAdapter);

var _logger = __webpack_require__(0);

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
     * Checks if the a media source adapter can play a given source.
     * @param {Source} source - The source object to check.
     *  @param {boolean} [preferNative=true] - prefer native flag
     * @returns {boolean} - Whether a media source adapter can play the source.
     * @public
     * @static
     */

  }, {
    key: 'canPlaySource',
    value: function canPlaySource(source) {
      var preferNative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      MediaSourceProvider._orderMediaSourceAdapters(preferNative);
      var mediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters;
      if (source && source.mimetype) {
        for (var i = 0; i < mediaSourceAdapters.length; i++) {
          if (mediaSourceAdapters[i].canPlayType(source.mimetype) && (!source.drmData || mediaSourceAdapters[i].canPlayDrm(source.drmData))) {
            MediaSourceProvider._selectedAdapter = mediaSourceAdapters[i];
            MediaSourceProvider._logger.debug('Selected adapter is <' + MediaSourceProvider._selectedAdapter.id + '>');
            return true;
          }
        }
      }
      return false;
    }

    /**
     * Orders the media source adapters array according to the preferNative value.
     * @param {boolean} preferNative - Whether to prefer native playback.
     * @private
     * @returns {void}
     */

  }, {
    key: '_orderMediaSourceAdapters',
    value: function _orderMediaSourceAdapters(preferNative) {
      MediaSourceProvider._mediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters.filter(function (mse) {
        return mse.id !== 'NativeAdapter';
      });
      if (preferNative) {
        MediaSourceProvider._mediaSourceAdapters.unshift(_nativeAdapter2.default);
      } else {
        MediaSourceProvider._mediaSourceAdapters.push(_nativeAdapter2.default);
      }
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
          MediaSourceProvider.canPlaySource(source, true);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _fakeEventTarget = __webpack_require__(13);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _playerError = __webpack_require__(11);

var _playerError2 = _interopRequireDefault(_playerError);

var _events = __webpack_require__(5);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _track = __webpack_require__(3);

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
     * @constructor
     * @param {HTMLVideoElement} videoElement - The video element which bind to media source adapter.
     * @param {Source} source - The source object.
     * @param {Object} config - The media source adapter configuration.
     */


    /**
     * Passing the getLogger function to the actual media source adapter.
     * @type {Function}
     * @static
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
      return Promise.resolve();
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
    key: 'isAdaptiveBitrateEnabled',
    value: function isAdaptiveBitrateEnabled() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'isAdaptiveBitrateEnabled').getError();
    }
  }, {
    key: 'seekToLiveEdge',
    value: function seekToLiveEdge() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'seekToLiveEdge').getError();
    }
  }, {
    key: 'isLive',
    value: function isLive() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'isLive').getError();
    }
  }, {
    key: 'src',
    get: function get() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'get src').getError();
    }

    /**
     * Get the current time in seconds.
     * @returns {Number} - The current playback time.
     * @public
     */

  }, {
    key: 'currentTime',
    get: function get() {
      return this._videoElement.currentTime;
    }

    /**
     * Set the current time in seconds.
     * @param {Number} to - The number to set in seconds.
     * @public
     * @returns {void}
     */
    ,
    set: function set(to) {
      this._videoElement.currentTime = to;
    }

    /**
     * Get the duration in seconds.
     * @returns {Number} - The playback duration.
     * @public
     */

  }, {
    key: 'duration',
    get: function get() {
      return this._videoElement.duration;
    }
  }], [{
    key: 'canPlayType',
    value: function canPlayType(mimeType, preferNative) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'static canPlayType').getError();
    }
  }]);

  return BaseMediaSourceAdapter;
}(_fakeEventTarget2.default);

BaseMediaSourceAdapter.CustomEvents = _events.CUSTOM_EVENTS;
BaseMediaSourceAdapter.getLogger = _logger2.default.getLogger;
exports.default = BaseMediaSourceAdapter;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/* eslint-disable no-unused-vars */


var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _playerError = __webpack_require__(11);

var _playerError2 = _interopRequireDefault(_playerError);

var _drmSupport = __webpack_require__(35);

var _drmSupport2 = _interopRequireDefault(_drmSupport);

var _drmScheme = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseDrmProtocol = function () {
  function BaseDrmProtocol() {
    _classCallCheck(this, BaseDrmProtocol);
  }

  _createClass(BaseDrmProtocol, null, [{
    key: 'canPlayDrm',
    value: function canPlayDrm(drmData) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'static canPlayDrm').getError();
    }
  }, {
    key: 'setDrmPlayback',
    value: function setDrmPlayback() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'static setDrmPlayback').getError();
    }
  }, {
    key: 'destroy',
    value: function destroy() {}
  }]);

  return BaseDrmProtocol;
}();

BaseDrmProtocol.getLogger = _logger2.default.getLogger;
BaseDrmProtocol.DrmSupport = _drmSupport2.default;
BaseDrmProtocol.DrmScheme = _drmScheme.DrmScheme;
exports.default = BaseDrmProtocol;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DrmScheme = exports.DrmScheme = {
  WIDEVINE: 'com.widevine.alpha',
  PLAYREADY: 'com.microsoft.playready',
  FAIRPLAY: 'com.apple.fairplay'
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cue = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textTrackDisplay = __webpack_require__(22);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var autoKeyword = "auto";
var directionSetting = {
  "": true,
  "lr": true,
  "rl": true
};
var alignSetting = {
  "start": true,
  "middle": true,
  "end": true,
  "left": true,
  "right": true
};

/**
 * helper
 * @param {string} value - the string to find
 * @returns {string | boolean} - the aligned sting if found
 */
function findDirectionSetting(value) {
  if (typeof value !== "string") {
    return false;
  }
  var dir = directionSetting[value.toLowerCase()];
  return dir ? value.toLowerCase() : false;
}

/**
 * helper
 * @param {string} value - the string
 * @returns {string | boolean} - the aligned sting if found
 */
function findAlignSetting(value) {
  if (typeof value !== "string") {
    return false;
  }
  var align = alignSetting[value.toLowerCase()];
  return align ? value.toLowerCase() : false;
}

/**
 * VTTCue model
 * @class
 * @classdesc VTT Cue model to represent VTT cues internally
 */

var VTTCue = function () {
  /**
   * A number giving the size of the cue box, to be interpreted as a percentage of the video, as defined
   * by the writing direction.
   * @type {number}
   * @private
   */

  /**
   * The position defines the indent of the cue box in the direction defined by the writing direction
   * @type {number}
   * @private
   */

  /**
   * The line defines positioning of the cue box.
   * @type {string | number}
   * @private
   */

  /**
   * configures the cue to use vertical text layout rather than horizontal text layout.
   * Vertical text layout is sometimes used in Japanese, for example. The default is horizontal layout
   * @type {string}
   * @private
   */

  /**
   * A boolean indicating whether playback of the media resource is to pause when the end of the
   * range to which the cue applies is reached.
   * @type {boolean}
   * @private
   */


  /**
   * This is used as part of the rendering model, to keep cues in a consistent position.
   * http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
   * @type {undefined}
   */
  function VTTCue(startTime, endTime, text) {
    _classCallCheck(this, VTTCue);

    this.hasBeenReset = false;
    this.displayState = undefined;
    this._id = "";
    this._pauseOnExit = false;
    this._region = null;
    this._vertical = "";
    this._snapToLines = true;
    this._line = "auto";
    this._lineAlign = "start";
    this._position = 50;
    this._positionAlign = "middle";
    this._size = 50;
    this._align = "middle";

    this._startTime = startTime;
    this._endTime = endTime;
    this._text = text;
    /**
     * Other <track> spec defined properties
     */
  }
  /**
   * An alignment for all lines of text within the cue box, in the dimension of the writing direction
   * @type {string}
   * @private
   */

  /**
   * An alignment for the cue box in the dimension of the writing direction, describing what the position
   * is anchored to
   * @type {string}
   * @private
   */

  /**
   * An alignment for the cue box’s line, one of start/center/end alignment
   * @type {string}
   * @private
   */

  /**
   * A boolean indicating whether the line is an integer number of lines (using the line dimensions of
   * the first line of the cue), or whether it is a percentage of the dimension of the video.
   * The flag is set to true when lines are counted, and false otherwise.
   * @type {boolean}
   * @private
   */

  /**
   * An optional WebVTT region to which a cue belongs.
   * By default, the region is set to null.
   * @type {null}
   * @private
   */

  /**
   * The time, in seconds and fractions of a second, that describes the beginning of the range of
   * the media data to which the cue applies.
   * @type {number}
   * @private
   */

  /**
   * The time, in seconds and fractions of a second, that describes the end of the range of
   * the media data to which the cue applies.
   * @type {number}
   * @private
   */

  /**
   * The raw text of the cue, and rules for its interpretation, allowing the text to be
   * rendered and converted to a DOM fragment.
   * @type {string}
   * @private
   */

  /**
   * VTTCue and TextTrackCue properties
   * http://dev.w3.org/html5/webvtt/#vttcue-interface
   */
  /**
   * An arbitrary string.
   * @type {string}
   * @private
   */


  /**
   * // Lets us know when the VTTCue's data has changed in such a way that we need
   * to recompute its display state. This lets us compute its display state lazily.
   * @type {boolean}
   */


  _createClass(VTTCue, [{
    key: "resetCue",
    value: function resetCue() {
      this.hasBeenReset = true;
    }
  }, {
    key: "getCueAsHTML",
    value: function getCueAsHTML() {
      return (0, _textTrackDisplay.convertCueToDOMTree)(window, this.text);
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = "" + value;
    }
  }, {
    key: "pauseOnExit",
    get: function get() {
      return this._pauseOnExit;
    },
    set: function set(value) {
      this._pauseOnExit = value;
    }
  }, {
    key: "startTime",
    get: function get() {
      return this._endTime;
    },
    set: function set(value) {
      if (typeof value !== "number") {
        throw new TypeError("Start time must be set to a number.");
      }
      this._endTime = value;
      this.resetCue();
    }
  }, {
    key: "endTime",
    get: function get() {
      return this._endTime;
    },
    set: function set(value) {
      if (typeof value !== "number") {
        throw new TypeError("End time must be set to a number.");
      }
      this._endTime = value;
      this.resetCue();
    }
  }, {
    key: "text",
    get: function get() {
      return this._text;
    },
    set: function set(value) {
      this._text = "" + value;
      this.resetCue();
    }
  }, {
    key: "region",
    get: function get() {
      return this._region;
    },
    set: function set(value) {
      this._region = value;
      this.resetCue();
    }
  }, {
    key: "vertical",
    get: function get() {
      return this._vertical;
    },
    set: function set(value) {
      var setting = findDirectionSetting(value);
      // Have to check for false because the setting an be an empty string.
      if (setting === false) {
        throw new SyntaxError("An invalid or illegal string was specified.");
      } else if (typeof setting === "string") {
        this._vertical = setting;
        this.resetCue();
      }
    }
  }, {
    key: "snapToLines",
    get: function get() {
      return this._snapToLines;
    },
    set: function set(value) {
      this._snapToLines = value;
      this.resetCue();
    }
  }, {
    key: "line",
    get: function get() {
      return this._line;
    },
    set: function set(value) {
      if (typeof value !== "number" && value !== autoKeyword) {
        throw new SyntaxError("An invalid number or illegal string was specified.");
      }
      this._line = value;
      this.resetCue();
    }
  }, {
    key: "lineAlign",
    get: function get() {
      return this._lineAlign;
    },
    set: function set(value) {
      var setting = findAlignSetting(value);
      if (!setting) {
        throw new SyntaxError("An invalid or illegal string was specified.");
      } else if (typeof setting === "string") {
        this._lineAlign = setting;
        this.resetCue();
      }
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(value) {
      if (value < 0 || value > 100) {
        throw new Error("Position must be between 0 and 100.");
      }
      this._position = value;
      this.resetCue();
    }
  }, {
    key: "positionAlign",
    get: function get() {
      return this._positionAlign;
    },
    set: function set(value) {
      var setting = findAlignSetting(value);
      if (!setting) {
        throw new SyntaxError("An invalid or illegal string was specified.");
      } else if (typeof setting === "string") {
        this._positionAlign = setting;
        this.resetCue();
      }
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(value) {
      if (value < 0 || value > 100) {
        throw new Error("Size must be between 0 and 100.");
      }
      this._size = value;
      this.resetCue();
    }
  }, {
    key: "align",
    get: function get() {
      return this._align;
    },
    set: function set(value) {
      var setting = findAlignSetting(value);
      if (!setting) {
        throw new SyntaxError("An invalid or illegal string was specified.");
      } else if (typeof setting === "string") {
        this._align = setting;
        this.resetCue();
      }
    }
  }]);

  return VTTCue;
}();

var Cue = void 0;
if (typeof window !== 'undefined' && window.VTTCue) {
  exports.Cue = Cue = window.VTTCue;
} else {
  exports.Cue = Cue = VTTCue;
}

exports.Cue = Cue;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable */
/**
 * Copyright 2013 vtt.js Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

var fontScale = 1;

// Try to parse input as a time stamp.
function parseTimeStamp(input) {

  function computeSeconds(h, m, s, f) {
    return (h | 0) * 3600 + (m | 0) * 60 + (s | 0) + (f | 0) / 1000;
  }

  var m = input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
  if (!m) {
    return null;
  }

  if (m[3]) {
    // Timestamp takes the form of [hours]:[minutes]:[seconds].[milliseconds]
    return computeSeconds(m[1], m[2], m[3].replace(":", ""), m[4]);
  } else if (m[1] > 59) {
    // Timestamp takes the form of [hours]:[minutes].[milliseconds]
    // First position is hours as it's over 59.
    return computeSeconds(m[1], m[2], 0, m[4]);
  } else {
    // Timestamp takes the form of [minutes]:[seconds].[milliseconds]
    return computeSeconds(0, m[1], m[2], m[4]);
  }
}

var ESCAPE = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&lrm;": "\u200E",
  "&rlm;": "\u200F",
  "&nbsp;": "\xA0"
};

var TAG_NAME = {
  c: "span",
  i: "i",
  b: "b",
  u: "u",
  ruby: "ruby",
  rt: "rt",
  v: "span",
  lang: "span"
};

var TAG_ANNOTATION = {
  v: "title",
  lang: "lang"
};

var NEEDS_PARENT = {
  rt: "ruby"
};

// Parse content into a document fragment.
function parseContent(window, input) {
  function nextToken() {
    // Check for end-of-string.
    if (!input) {
      return null;
    }

    // Consume 'n' characters from the input.
    function consume(result) {
      input = input.substr(result.length);
      return result;
    }

    var m = input.match(/^([^<]*)(<[^>]+>?)?/);
    // If there is some text before the next tag, return it, otherwise return
    // the tag.
    return consume(m[1] ? m[1] : m[2]);
  }

  // Unescape a string 's'.
  function unescape1(e) {
    return ESCAPE[e];
  }

  function unescape(s) {
    var m = void 0;
    while (m = s.match(/&(amp|lt|gt|lrm|rlm|nbsp);/)) {
      s = s.replace(m[0], unescape1);
    }
    return s;
  }

  function shouldAdd(current, element) {
    return !NEEDS_PARENT[element.localName] || NEEDS_PARENT[element.localName] === current.localName;
  }

  // Create an element for this tag.
  function createElement(type, annotation) {
    var tagName = TAG_NAME[type];
    if (!tagName) {
      return null;
    }
    var element = window.document.createElement(tagName);
    element.localName = tagName;
    var name = TAG_ANNOTATION[type];
    if (name && annotation) {
      element[name] = annotation.trim();
    }
    return element;
  }

  var rootDiv = window.document.createElement("div"),
      current = rootDiv,
      t = void 0,
      tagStack = [];

  while ((t = nextToken()) !== null) {
    if (t[0] === '<') {
      if (t[1] === "/") {
        // If the closing tag matches, move back up to the parent node.
        if (tagStack.length && tagStack[tagStack.length - 1] === t.substr(2).replace(">", "")) {
          tagStack.pop();
          current = current.parentNode;
        }
        // Otherwise just ignore the end tag.
        continue;
      }
      var ts = parseTimeStamp(t.substr(1, t.length - 2));
      var node = void 0;
      if (ts) {
        // Timestamps are lead nodes as well.
        node = window.document.createProcessingInstruction("timestamp", ts);
        current.appendChild(node);
        continue;
      }
      var m = t.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
      // If we can't parse the tag, skip to the next tag.
      if (!m) {
        continue;
      }
      // Try to construct an element, and ignore the tag if we couldn't.
      node = createElement(m[1], m[3]);
      if (!node) {
        continue;
      }
      // Determine if the tag should be added based on the context of where it
      // is placed in the cuetext.
      if (!shouldAdd(current, node)) {
        continue;
      }
      // Set the class list (as a list of classes, separated by space).
      if (m[2]) {
        node.className = m[2].substr(1).replace('.', ' ');
      }
      // Append the node to the current node, and enter the scope of the new
      // node.
      tagStack.push(m[1]);
      current.appendChild(node);
      current = node;
      continue;
    }

    // Text nodes are leaf nodes.
    current.appendChild(window.document.createTextNode(unescape(t)));
  }

  return rootDiv;
}

// This is a list of all the Unicode characters that have a strong
// right-to-left category. What this means is that these characters are
// written right-to-left for sure. It was generated by pulling all the strong
// right-to-left characters out of the Unicode data table. That table can
// found at: http://www.unicode.org/Public/UNIDATA/UnicodeData.txt
var strongRTLRanges = [[0x5be, 0x5be], [0x5c0, 0x5c0], [0x5c3, 0x5c3], [0x5c6, 0x5c6], [0x5d0, 0x5ea], [0x5f0, 0x5f4], [0x608, 0x608], [0x60b, 0x60b], [0x60d, 0x60d], [0x61b, 0x61b], [0x61e, 0x64a], [0x66d, 0x66f], [0x671, 0x6d5], [0x6e5, 0x6e6], [0x6ee, 0x6ef], [0x6fa, 0x70d], [0x70f, 0x710], [0x712, 0x72f], [0x74d, 0x7a5], [0x7b1, 0x7b1], [0x7c0, 0x7ea], [0x7f4, 0x7f5], [0x7fa, 0x7fa], [0x800, 0x815], [0x81a, 0x81a], [0x824, 0x824], [0x828, 0x828], [0x830, 0x83e], [0x840, 0x858], [0x85e, 0x85e], [0x8a0, 0x8a0], [0x8a2, 0x8ac], [0x200f, 0x200f], [0xfb1d, 0xfb1d], [0xfb1f, 0xfb28], [0xfb2a, 0xfb36], [0xfb38, 0xfb3c], [0xfb3e, 0xfb3e], [0xfb40, 0xfb41], [0xfb43, 0xfb44], [0xfb46, 0xfbc1], [0xfbd3, 0xfd3d], [0xfd50, 0xfd8f], [0xfd92, 0xfdc7], [0xfdf0, 0xfdfc], [0xfe70, 0xfe74], [0xfe76, 0xfefc], [0x10800, 0x10805], [0x10808, 0x10808], [0x1080a, 0x10835], [0x10837, 0x10838], [0x1083c, 0x1083c], [0x1083f, 0x10855], [0x10857, 0x1085f], [0x10900, 0x1091b], [0x10920, 0x10939], [0x1093f, 0x1093f], [0x10980, 0x109b7], [0x109be, 0x109bf], [0x10a00, 0x10a00], [0x10a10, 0x10a13], [0x10a15, 0x10a17], [0x10a19, 0x10a33], [0x10a40, 0x10a47], [0x10a50, 0x10a58], [0x10a60, 0x10a7f], [0x10b00, 0x10b35], [0x10b40, 0x10b55], [0x10b58, 0x10b72], [0x10b78, 0x10b7f], [0x10c00, 0x10c48], [0x1ee00, 0x1ee03], [0x1ee05, 0x1ee1f], [0x1ee21, 0x1ee22], [0x1ee24, 0x1ee24], [0x1ee27, 0x1ee27], [0x1ee29, 0x1ee32], [0x1ee34, 0x1ee37], [0x1ee39, 0x1ee39], [0x1ee3b, 0x1ee3b], [0x1ee42, 0x1ee42], [0x1ee47, 0x1ee47], [0x1ee49, 0x1ee49], [0x1ee4b, 0x1ee4b], [0x1ee4d, 0x1ee4f], [0x1ee51, 0x1ee52], [0x1ee54, 0x1ee54], [0x1ee57, 0x1ee57], [0x1ee59, 0x1ee59], [0x1ee5b, 0x1ee5b], [0x1ee5d, 0x1ee5d], [0x1ee5f, 0x1ee5f], [0x1ee61, 0x1ee62], [0x1ee64, 0x1ee64], [0x1ee67, 0x1ee6a], [0x1ee6c, 0x1ee72], [0x1ee74, 0x1ee77], [0x1ee79, 0x1ee7c], [0x1ee7e, 0x1ee7e], [0x1ee80, 0x1ee89], [0x1ee8b, 0x1ee9b], [0x1eea1, 0x1eea3], [0x1eea5, 0x1eea9], [0x1eeab, 0x1eebb], [0x10fffd, 0x10fffd]];

function isStrongRTLChar(charCode) {
  for (var i = 0; i < strongRTLRanges.length; i++) {
    var currentRange = strongRTLRanges[i];
    if (charCode >= currentRange[0] && charCode <= currentRange[1]) {
      return true;
    }
  }

  return false;
}

function determineBidi(cueDiv) {
  var nodeStack = [],
      text = "",
      charCode = void 0;

  if (!cueDiv || !cueDiv.childNodes) {
    return "ltr";
  }

  function pushNodes(nodeStack, node) {
    for (var i = node.childNodes.length - 1; i >= 0; i--) {
      nodeStack.push(node.childNodes[i]);
    }
  }

  function nextTextNode(nodeStack) {
    if (!nodeStack || !nodeStack.length) {
      return null;
    }

    var node = nodeStack.pop(),
        text = node.textContent || node.innerText;
    if (text) {
      // TODO: This should match all unicode type B characters (paragraph
      // separator characters). See issue #115.
      var m = text.match(/^.*(\n|\r)/);
      if (m) {
        nodeStack.length = 0;
        return m[0];
      }
      return text;
    }
    if (node.tagName === "ruby") {
      return nextTextNode(nodeStack);
    }
    if (node.childNodes) {
      pushNodes(nodeStack, node);
      return nextTextNode(nodeStack);
    }
  }

  pushNodes(nodeStack, cueDiv);
  while (text = nextTextNode(nodeStack)) {
    for (var i = 0; i < text.length; i++) {
      charCode = text.charCodeAt(i);
      if (isStrongRTLChar(charCode)) {
        return "rtl";
      }
    }
  }
  return "ltr";
}

function computeLinePos(cue) {
  if (typeof cue.line === "number" && (cue.snapToLines || cue.line >= 0 && cue.line <= 100)) {
    return cue.line;
  }
  if (!cue.track || !cue.track.textTrackList || !cue.track.textTrackList.mediaElement) {
    return -1;
  }
  var track = cue.track;
  var trackList = track.textTrackList;
  var count = 0;
  for (var i = 0; i < trackList.length && trackList[i] !== track; i++) {
    if (trackList[i].mode === "showing") {
      count++;
    }
  }
  return ++count * -1;
}

var StyleBox = function () {
  function StyleBox() {
    _classCallCheck(this, StyleBox);
  }

  // Apply styles to a div. If there is no div passed then it defaults to the
  // div on 'this'.


  _createClass(StyleBox, [{
    key: "applyStyles",
    value: function applyStyles(styles, div) {
      div = div || this.div;
      for (var prop in styles) {
        if (styles.hasOwnProperty(prop)) {
          div.style[prop] = styles[prop];
        }
      }
    }
  }, {
    key: "formatStyle",
    value: function formatStyle(val, unit) {
      return val === 0 ? 0 : val + unit;
    }
  }]);

  return StyleBox;
}();

// Constructs the computed display state of the cue (a div). Places the div
// into the overlay which should be a block level element (usually a div).


var CueStyleBox = function (_StyleBox) {
  _inherits(CueStyleBox, _StyleBox);

  function CueStyleBox(window, cue, styleOptions) {
    _classCallCheck(this, CueStyleBox);

    var _this = _possibleConstructorReturn(this, (CueStyleBox.__proto__ || Object.getPrototypeOf(CueStyleBox)).call(this));

    var isIE8 = typeof navigator !== "undefined" && /MSIE\s8\.0/.test(navigator.userAgent);
    var color = "rgba(255, 255, 255, 1)";
    var backgroundColor = "rgba(0, 0, 0, 0.8)";
    var textShadow = "";

    if (typeof WebVTTSet !== "undefined") {
      color = WebVTTSet.fontSet;
      backgroundColor = WebVTTSet.backgroundSet;
      textShadow = WebVTTSet.edgeSet;
    }

    if (isIE8) {
      color = "rgb(255, 255, 255)";
      backgroundColor = "rgb(0, 0, 0)";
    }

    _this.cue = cue;

    // Parse our cue's text into a DOM tree rooted at 'cueDiv'. This div will
    // have inline positioning and will function as the cue background box.
    _this.cueDiv = parseContent(window, cue.text);
    var styles = {
      color: color,
      backgroundColor: backgroundColor,
      textShadow: textShadow,
      position: "relative",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "inline"
    };

    if (!isIE8) {
      styles.writingMode = cue.vertical === "" ? "horizontal-tb" : cue.vertical === "lr" ? "vertical-lr" : "vertical-rl";
      styles.unicodeBidi = "plaintext";
    }
    _this.applyStyles(styles, _this.cueDiv);

    // Create an absolutely positioned div that will be used to position the cue
    // div. Note, all WebVTT cue-setting alignments are equivalent to the CSS
    // mirrors of them except "middle" which is "center" in CSS.
    _this.div = window.document.createElement("div");
    styles = {
      textAlign: cue.align === "middle" ? "center" : cue.align,
      font: styleOptions.font,
      whiteSpace: "pre-line",
      position: "absolute"
    };

    if (!isIE8) {
      styles.direction = determineBidi(_this.cueDiv);
      styles.writingMode = cue.vertical === "" ? "horizontal-tb" : cue.vertical === "lr" ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext";
    }

    _this.applyStyles(styles);

    _this.div.appendChild(_this.cueDiv);

    // Calculate the distance from the reference edge of the viewport to the text
    // position of the cue box. The reference edge will be resolved later when
    // the box orientation styles are applied.
    var textPos = 0;
    switch (cue.positionAlign) {
      case "start":
        textPos = cue.position;
        break;
      case "middle":
        textPos = cue.position - cue.size / 2;
        break;
      case "end":
        textPos = cue.position - cue.size;
        break;
    }

    // Horizontal box orientation; textPos is the distance from the left edge of the
    // area to the left edge of the box and cue.size is the distance extending to
    // the right from there.
    if (cue.vertical === "") {
      _this.applyStyles({
        left: _this.formatStyle(textPos, "%"),
        width: _this.formatStyle(cue.size, "%")
      });
      // Vertical box orientation; textPos is the distance from the top edge of the
      // area to the top edge of the box and cue.size is the height extending
      // downwards from there.
    } else {
      _this.applyStyles({
        top: _this.formatStyle(textPos, "%"),
        height: _this.formatStyle(cue.size, "%")
      });
    }

    _this.move = function (box) {
      this.applyStyles({
        top: this.formatStyle(box.top, "px"),
        bottom: this.formatStyle(box.bottom, "px"),
        left: this.formatStyle(box.left, "px"),
        right: this.formatStyle(box.right, "px"),
        height: this.formatStyle(box.height, "px"),
        width: this.formatStyle(box.width, "px")
      });
    };
    return _this;
  }

  return CueStyleBox;
}(StyleBox);

// Represents the co-ordinates of an Element in a way that we can easily
// compute things with such as if it overlaps or intersects with another Element.
// Can initialize it with either a StyleBox or another BoxPosition.


var BoxPosition = function () {
  function BoxPosition(obj) {
    _classCallCheck(this, BoxPosition);

    this.overlaps = function (b2) {
      return this.left < b2.right && this.right > b2.left && this.top < b2.bottom && this.bottom > b2.top;
    };

    var isIE8 = typeof navigator !== "undefined" && /MSIE\s8\.0/.test(navigator.userAgent);

    // Either a BoxPosition was passed in and we need to copy it, or a StyleBox
    // was passed in and we need to copy the results of 'getBoundingClientRect'
    // as the object returned is readonly. All co-ordinate values are in reference
    // to the viewport origin (top left).
    var lh = void 0,
        height = void 0,
        width = void 0,
        top = void 0;
    if (obj.div) {
      height = obj.div.offsetHeight;
      width = obj.div.offsetWidth;
      top = obj.div.offsetTop;

      var rects = (rects = obj.div.childNodes) && (rects = rects[0]) && rects.getClientRects && rects.getClientRects();
      obj = obj.div.getBoundingClientRect();
      // In certain cases the outter div will be slightly larger then the sum of
      // the inner div's lines. This could be due to bold text, etc, on some platforms.
      // In this case we should get the average line height and use that. This will
      // result in the desired behaviour.
      lh = rects ? Math.max(rects[0] && rects[0].height || 0, obj.height / rects.length) : 0;
    }
    this.left = obj.left;
    this.right = obj.right;
    this.top = obj.top || top;
    this.height = obj.height || height;
    this.bottom = obj.bottom || top + (obj.height || height);
    this.width = obj.width || width;
    this.lineHeight = lh !== undefined ? lh : obj.lineHeight;

    if (isIE8 && !this.lineHeight) {
      this.lineHeight = 13;
    }
  }

  // Move the box along a particular axis. Optionally pass in an amount to move
  // the box. If no amount is passed then the default is the line height of the
  // box.


  _createClass(BoxPosition, [{
    key: "move",
    value: function move(axis, toMove) {
      toMove = toMove !== undefined ? toMove : this.lineHeight;
      switch (axis) {
        case "+x":
          this.left += toMove;
          this.right += toMove;
          break;
        case "-x":
          this.left -= toMove;
          this.right -= toMove;
          break;
        case "+y":
          this.top += toMove;
          this.bottom += toMove;
          break;
        case "-y":
          this.top -= toMove;
          this.bottom -= toMove;
          break;
      }
    }

    // Check if this box overlaps another box, b2.

  }, {
    key: "overlapsAny",


    // Check if this box overlaps any other boxes in boxes.
    value: function overlapsAny(boxes) {
      for (var i = 0; i < boxes.length; i++) {
        if (this.overlaps(boxes[i])) {
          return true;
        }
      }
      return false;
    }

    // Check if this box is within another box.

  }, {
    key: "within",
    value: function within(container) {
      return this.top >= container.top && this.bottom <= container.bottom && this.left >= container.left && this.right <= container.right;
    }

    // Check if this box is entirely within the container or it is overlapping
    // on the edge opposite of the axis direction passed. For example, if "+x" is
    // passed and the box is overlapping on the left edge of the container, then
    // return true.

  }, {
    key: "overlapsOppositeAxis",
    value: function overlapsOppositeAxis(container, axis) {
      switch (axis) {
        case "+x":
          return this.left < container.left;
        case "-x":
          return this.right > container.right;
        case "+y":
          return this.top < container.top;
        case "-y":
          return this.bottom > container.bottom;
      }
    }

    // Find the percentage of the area that this box is overlapping with another
    // box.

  }, {
    key: "intersectPercentage",
    value: function intersectPercentage(b2) {
      var x = Math.max(0, Math.min(this.right, b2.right) - Math.max(this.left, b2.left)),
          y = Math.max(0, Math.min(this.bottom, b2.bottom) - Math.max(this.top, b2.top)),
          intersectArea = x * y;
      return intersectArea / (this.height * this.width);
    }

    // Convert the positions from this box to CSS compatible positions using
    // the reference container's positions. This has to be done because this
    // box's positions are in reference to the viewport origin, whereas, CSS
    // values are in referecne to their respective edges.

  }, {
    key: "toCSSCompatValues",
    value: function toCSSCompatValues(reference) {
      return {
        top: this.top - reference.top,
        bottom: reference.bottom - this.bottom,
        left: this.left - reference.left,
        right: reference.right - this.right,
        height: this.height,
        width: this.width
      };
    }

    // Get an object that represents the box's position without anything extra.
    // Can pass a StyleBox, HTMLElement, or another BoxPositon.

  }], [{
    key: "getSimpleBoxPosition",
    value: function getSimpleBoxPosition(obj) {
      var height = obj.div ? obj.div.offsetHeight : obj.tagName ? obj.offsetHeight : 0;
      var width = obj.div ? obj.div.offsetWidth : obj.tagName ? obj.offsetWidth : 0;
      var top = obj.div ? obj.div.offsetTop : obj.tagName ? obj.offsetTop : 0;

      obj = obj.div ? obj.div.getBoundingClientRect() : obj.tagName ? obj.getBoundingClientRect() : obj;
      return {
        left: obj.left,
        right: obj.right,
        top: obj.top || top,
        height: obj.height || height,
        bottom: obj.bottom || top + (obj.height || height),
        width: obj.width || width
      };
    }
  }]);

  return BoxPosition;
}();

// Move a StyleBox to its specified, or next best, position. The containerBox
// is the box that contains the StyleBox, such as a div. boxPositions are
// a list of other boxes that the styleBox can't overlap with.


function moveBoxToLinePosition(styleBox, containerBox, boxPositions) {

  // Find the best position for a cue box, b, on the video. The axis parameter
  // is a list of axis, the order of which, it will move the box along. For example:
  // Passing ["+x", "-x"] will move the box first along the x axis in the positive
  // direction. If it doesn't find a good position for it there it will then move
  // it along the x axis in the negative direction.
  function findBestPosition(b, axis) {
    var bestPosition = void 0,
        specifiedPosition = new BoxPosition(b),
        percentage = 1; // Highest possible so the first thing we get is better.

    for (var i = 0; i < axis.length; i++) {
      while (b.overlapsOppositeAxis(containerBox, axis[i]) || b.within(containerBox) && b.overlapsAny(boxPositions)) {
        b.move(axis[i]);
      }
      // We found a spot where we aren't overlapping anything. This is our
      // best position.
      if (b.within(containerBox)) {
        return b;
      }
      var p = b.intersectPercentage(containerBox);
      // If we're outside the container box less then we were on our last try
      // then remember this position as the best position.
      if (percentage > p) {
        bestPosition = new BoxPosition(b);
        percentage = p;
      }
      // Reset the box position to the specified position.
      b = new BoxPosition(specifiedPosition);
    }
    return bestPosition || specifiedPosition;
  }

  var boxPosition = new BoxPosition(styleBox),
      cue = styleBox.cue,
      linePos = computeLinePos(cue),
      axis = [];

  // If we have a line number to align the cue to.
  if (cue.snapToLines) {
    var size = void 0;
    switch (cue.vertical) {
      case "":
        axis = ["+y", "-y"];
        size = "height";
        break;
      case "rl":
        axis = ["+x", "-x"];
        size = "width";
        break;
      case "lr":
        axis = ["-x", "+x"];
        size = "width";
        break;
    }

    var step = boxPosition.lineHeight,
        position = step * Math.round(linePos),
        maxPosition = containerBox[size] + step,
        initialAxis = axis[0];

    // If the specified intial position is greater then the max position then
    // clamp the box to the amount of steps it would take for the box to
    // reach the max position.
    if (Math.abs(position) > maxPosition) {
      position = position < 0 ? -1 : 1;
      position *= Math.ceil(maxPosition / step) * step;
    }

    // If computed line position returns negative then line numbers are
    // relative to the bottom of the video instead of the top. Therefore, we
    // need to increase our initial position by the length or width of the
    // video, depending on the writing direction, and reverse our axis directions.
    if (linePos < 0) {
      position += cue.vertical === "" ? containerBox.height : containerBox.width;
      axis = axis.reverse();
    }

    // Move the box to the specified position. This may not be its best
    // position.
    boxPosition.move(initialAxis, position);
  } else {
    // If we have a percentage line value for the cue.
    var calculatedPercentage = boxPosition.lineHeight / containerBox.height * 100;

    switch (cue.lineAlign) {
      case "middle":
        linePos -= calculatedPercentage / 2;
        break;
      case "end":
        linePos -= calculatedPercentage;
        break;
    }

    // Apply initial line position to the cue box.
    switch (cue.vertical) {
      case "":
        styleBox.applyStyles({
          top: styleBox.formatStyle(linePos, "%")
        });
        break;
      case "rl":
        styleBox.applyStyles({
          left: styleBox.formatStyle(linePos, "%")
        });
        break;
      case "lr":
        styleBox.applyStyles({
          right: styleBox.formatStyle(linePos, "%")
        });
        break;
    }

    axis = ["+y", "-x", "+x", "-y"];

    // Get the box position again after we've applied the specified positioning
    // to it.
    boxPosition = new BoxPosition(styleBox);
  }

  var bestPosition = findBestPosition(boxPosition, axis);
  styleBox.move(bestPosition.toCSSCompatValues(containerBox));
}

function convertCueToDOMTree(window, cuetext) {
  if (!window || !cuetext) {
    return null;
  }
  return parseContent(window, cuetext);
}

var FONT_SIZE_PERCENT = 0.05;
var FONT_STYLE = "sans-serif";
var CUE_BACKGROUND_PADDING = "1.5%";

// Runs the processing model over the cues and regions passed to it.
// @param overlay A block level element (usually a div) that the computed cues
//                and regions will be placed into.
function processCues(window, cues, overlay) {
  if (!window || !cues || !overlay) {
    return null;
  }

  // Remove all previous children.
  while (overlay.firstChild) {
    overlay.removeChild(overlay.firstChild);
  }

  var paddedOverlay = window.document.createElement("div");
  paddedOverlay.style.position = "absolute";
  paddedOverlay.style.left = "0";
  paddedOverlay.style.right = "0";
  paddedOverlay.style.top = "0";
  paddedOverlay.style.bottom = "0";
  paddedOverlay.style.margin = CUE_BACKGROUND_PADDING;
  overlay.appendChild(paddedOverlay);

  // Determine if we need to compute the display states of the cues. This could
  // be the case if a cue's state has been changed since the last computation or
  // if it has not been computed yet.
  function shouldCompute(cues) {
    for (var i = 0; i < cues.length; i++) {
      if (cues[i].hasBeenReset || !cues[i].displayState) {
        return true;
      }
    }
    return false;
  }

  // We don't need to recompute the cues' display states. Just reuse them.
  if (!shouldCompute(cues)) {
    for (var i = 0; i < cues.length; i++) {
      paddedOverlay.appendChild(cues[i].displayState);
    }
    return;
  }

  var boxPositions = [],
      containerBox = BoxPosition.getSimpleBoxPosition(paddedOverlay),
      fontSize = Math.round(containerBox.height * FONT_SIZE_PERCENT * 100) / 100;
  var styleOptions = {
    font: fontSize * fontScale + "px " + FONT_STYLE
  };

  (function () {
    var styleBox = void 0,
        cue = void 0;

    for (var _i = 0; _i < cues.length; _i++) {
      cue = cues[_i];

      // Compute the intial position and styles of the cue div.
      styleBox = new CueStyleBox(window, cue, styleOptions);
      paddedOverlay.appendChild(styleBox.div);

      // Move the cue div to it's correct line position.
      moveBoxToLinePosition(styleBox, containerBox, boxPositions);

      // Remember the computed div so that we don't have to recompute it later
      // if we don't have too.
      cue.displayState = styleBox.div;

      boxPositions.push(BoxPosition.getSimpleBoxPosition(styleBox));
    }
  })();
};

exports.processCues = processCues;
exports.convertCueToDOMTree = convertCueToDOMTree;

/***/ }),
/* 23 */
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

var _logger = __webpack_require__(0);

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
      if (pluginClass && pluginClass.isValid()) {
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
     * Iterates over all the plugins and calls reset() method of the plugin's impl.
     * @public
     * @returns {void}
     */

  }, {
    key: 'reset',
    value: function reset() {
      this._plugins.forEach(function (plugin) {
        plugin.reset();
      });
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates a TextStyle object.
 *
 * <p><i>
 * Note that although this API is based on FCC guidelines, we cannot guarantee
 * that your application is in compliance with this or any other guideline.
 * </i></p>
 *
 * @constructor
 * @struct
 * @export
 */
var TextStyle = function () {
  function TextStyle() {
    _classCallCheck(this, TextStyle);

    this.fontSize = '100%';
    this.fontFamily = TextStyle.FontFamily.SANS_SERIF;
    this.fontColor = TextStyle.StandardColors.WHITE;
    this.fontOpacity = TextStyle.StandardOpacities.OPAQUE;
    this.backgroundColor = TextStyle.StandardColors.BLACK;
    this.backgroundOpacity = TextStyle.StandardOpacities.OPAQUE;
    this.fontEdge = TextStyle.EdgeStyles.NONE;
  }

  /**
   * Defined set of font families
   * @enum {Object.<string, string>}}
   * @export
   */


  /**
   * Defined in {@link https://goo.gl/ZcqOOM FCC 12-9}, paragraph 111, footnote
   * 448.  Each value is an array of the three RGB values for that color.
   * @enum {Object.<string, Array.<number>>}}
   * @export
   */


  /**
   * Defined in {@link https://goo.gl/ZcqOOM FCC 12-9}, paragraph 111.
   * @enum {Object.<string, number>}}
   * @export
   */


  /**
   * Defined in {@link https://goo.gl/ZcqOOM FCC 12-9}, paragraph 111.
   * The styles to achieve these effects are not specified anywhere.
   *
   * Each inner array represents a shadow, and is composed of RGB values for the
   * shadow color, followed by pixel values for x-offset, y-offset, and blur.
   *
   * @enum {!Array.<!Array.<number>>}
   * @export
   */


  _createClass(TextStyle, [{
    key: "toCSS",


    /**
     * Compute the CSS text necessary to represent this TextStyle.
     * Output does not contain any selectors.
     *
     * @return {string} - ::CUE CSS string
     */
    value: function toCSS() {
      var attributes = [];

      attributes.push('font-family: ' + this.fontFamily);
      attributes.push('font-size: ' + this.fontSize);
      attributes.push('color: ' + TextStyle._toRGBA(this.fontColor, this.fontOpacity));
      attributes.push('background-color: ' + TextStyle._toRGBA(this.backgroundColor, this.backgroundOpacity));

      // A given edge effect may be implemented with multiple shadows.
      // Collect them all into an array, then combine into one attribute.
      var shadows = [];
      for (var i = 0; i < this.fontEdge.length; i++) {
        // shaka.asserts.assert(this.fontEdge[i].length == 6);
        var color = this.fontEdge[i].slice(0, 3);
        var shadow = this.fontEdge[i].slice(3, 6);
        shadows.push(TextStyle._toRGBA(color, this.fontOpacity) + ' ' + shadow.join('px ') + 'px');
      }
      attributes.push('text-shadow: ' + shadows.join(','));

      return attributes.join('!important; ');
    }

    /**
     * clones the textStyle object
     * @returns {TextStyle} the cloned textStyle object
     */

  }, {
    key: "clone",
    value: function clone() {
      var clonedTextStyle = new TextStyle();
      clonedTextStyle.fontEdge = this.fontEdge;
      clonedTextStyle.fontSize = this.fontSize;
      clonedTextStyle.fontColor = this.fontColor;
      clonedTextStyle.fontOpacity = this.fontOpacity;
      clonedTextStyle.backgroundColor = this.backgroundColor;
      clonedTextStyle.backgroundOpacity = this.backgroundOpacity;
      return clonedTextStyle;
    }
  }], [{
    key: "_toRGBA",


    /**
     * Creates a CSS RGBA sctring for a given color and opacity values
     * @param {TextStyle.StandardColors} color - color value in RGB
     * @param {TextStyle.StandardOpacities} opacity - opacity value
     * @return {string} - CSS rgba string
     * @private
     */
    value: function _toRGBA(color, opacity) {
      // shaka.asserts.assert(color.length == 3);
      return 'rgba(' + color.concat(opacity).join(',') + ')';
    }

    /**
     * Font size, such as 50%, 75%, 100%, 200%, or 300%.
     * @type {string}
     */


    /**
     * @type {TextStyle.FontFamily}
     */


    /**
     * @type {TextStyle.StandardColors}
     */


    /**
     * @type {TextStyle.StandardOpacities}
     * @expose
     */


    /**
     * @type {TextStyle.StandardColors}
     */


    /**
     * @type {TextStyle.StandardOpacities}
     */


    /**
     * @type {TextStyle.EdgeStyles}
     * @expose
     */

  }]);

  return TextStyle;
}();

TextStyle.FontFamily = {
  "ARIAL": "Arial",
  "HELVETICA": "Helvetica",
  "VERDANA": "Verdana",
  "SANS_SERIF": "sans-serif"
};
TextStyle.StandardColors = {
  'WHITE': [255, 255, 255],
  'BLACK': [0, 0, 0],
  'RED': [255, 0, 0],
  'GREEN': [0, 255, 0],
  'BLUE': [0, 0, 255],
  'YELLOW': [255, 255, 0],
  'MAGENTA': [255, 0, 255],
  'CYAN': [0, 255, 255]
};
TextStyle.StandardOpacities = {
  'OPAQUE': 1,
  'SEMI_HIGH': 0.75,
  'SEMI_LOW': 0.25,
  'TRANSPARENT': 0
};
TextStyle.EdgeStyles = {
  'NONE': [],
  'RAISED': [[34, 34, 34, 1, 1, 0], [34, 34, 34, 2, 2, 0], [34, 34, 34, 3, 3, 0]],
  'DEPRESSED': [[204, 204, 204, 1, 1, 0], [204, 204, 204, 0, 1, 0], [34, 34, 34, -1, -1, 0], [34, 34, 34, 0, -1, 0]],
  'UNIFORM': [[34, 34, 34, 0, 0, 4], [34, 34, 34, 0, 0, 4], [34, 34, 34, 0, 0, 4], [34, 34, 34, 0, 0, 4]],
  'DROP': [[34, 34, 34, 2, 2, 3], [34, 34, 34, 2, 2, 4], [34, 34, 34, 2, 2, 5]]
};
TextStyle.FontSizes = ["50%", "75%", "100%", "200%", "300%", "400%"];
exports.default = TextStyle;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCapabilities = exports.BaseDrmProtocol = exports.Env = exports.PLAYER_NAME = exports.VERSION = exports.Utils = exports.TextStyle = exports.TextTrack = exports.AudioTrack = exports.VideoTrack = exports.Track = exports.BaseMiddleware = exports.BasePlugin = exports.registerPlugin = exports.BaseMediaSourceAdapter = exports.registerMediaSourceAdapter = undefined;
exports.loadPlayer = loadPlayer;

var _player = __webpack_require__(9);

var _player2 = _interopRequireDefault(_player);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _baseMediaSourceAdapter = __webpack_require__(18);

var _baseMediaSourceAdapter2 = _interopRequireDefault(_baseMediaSourceAdapter);

var _mediaSourceProvider = __webpack_require__(17);

var _pluginManager = __webpack_require__(23);

var _baseDrmProtocol = __webpack_require__(19);

var _baseDrmProtocol2 = _interopRequireDefault(_baseDrmProtocol);

var _baseMiddleware = __webpack_require__(15);

var _baseMiddleware2 = _interopRequireDefault(_baseMiddleware);

var _basePlugin = __webpack_require__(14);

var _basePlugin2 = _interopRequireDefault(_basePlugin);

var _track = __webpack_require__(3);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(6);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(7);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(8);

var _textTrack2 = _interopRequireDefault(_textTrack);

var _textStyle = __webpack_require__(24);

var _textStyle2 = _interopRequireDefault(_textStyle);

var _env = __webpack_require__(10);

var _env2 = _interopRequireDefault(_env);

var _util = __webpack_require__(1);

var Utils = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_player2.default.runCapabilities();


_logger2.default.getLogger().log('%c ' + "playkit-js" + ' ' + "0.14.1", "color: #98ff98;  font-size: large");
_logger2.default.getLogger().log('%c For more details see ' + "https://github.com/kaltura/playkit-js", "color: #98ff98;");

/**
 * @param {Object} config - The configuration of the player
 * @returns {Player} - The player instance
 */
function loadPlayer(config) {
  return new _player2.default(config || {});
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
exports.TextStyle = _textStyle2.default;

// Export utils library

exports.Utils = Utils;

// Export version

exports.VERSION = "0.14.1";

// Export player name

exports.PLAYER_NAME = "playkit-js";

// Export environment data

exports.Env = _env2.default;

// Export base DRM protocol

exports.BaseDrmProtocol = _baseDrmProtocol2.default;

// Export the player capabilities

var getCapabilities = _player2.default.getCapabilities;
exports.getCapabilities = getCapabilities;
exports.default = loadPlayer;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * UAParser.js v0.7.13
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


    var LIBVERSION  = '0.7.13',
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

            /(uc\s?browser)[\/\s]?([\w\.]+)/i,
            /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,
            /juc.+(ucweb)[\/\s]?([\w\.]+)/i,
            /(ucbrowser)\/([\w\.]+)/i
                                                                                // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

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

            /android.+samsungbrowser\/([\w\.]+)/i,
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
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
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
            /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [

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
            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                                                                                // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /(nexus\s6p)/i                                                      // Huawei Nexus 6P
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

            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w+)*/i
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

            /android.+a000(1)\s+build/i                                         // OnePlus
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /\s(tablet)[;\/]/i,                                                 // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL]

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

            /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i              // iOS
            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

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
        if ("function" === FUNC_TYPE && __webpack_require__(27)) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return UAParser;
            }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window.jQuery || window.Zepto;
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
/* 27 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(1);

var Utils = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PosterManager = function () {
  /**
   * Poster image URL
   * @type {string}
   * @private
   */
  function PosterManager() {
    _classCallCheck(this, PosterManager);

    this._createEl();
  }

  /**
   * Set the poster source URL
   * @param {string} posterUrl - the poster image URL
   * @public
   * @returns {void}
   */

  /**
   * The poster HTML Div element.
   * @type {HTMLDivElement}
   * @private
   */


  _createClass(PosterManager, [{
    key: "setSrc",
    value: function setSrc(posterUrl) {
      if (posterUrl) {
        this._posterUrl = posterUrl;
        Utils.Dom.setStyle(this._el, "background-image", "url(\"" + this._posterUrl + "\")");
      }
    }

    /**
     * Get the poster source URL
     * @public
     * @returns {string} - the poster image URL
     */

  }, {
    key: "getElement",


    /**
     * Get the poster HTML Div element
     * @public
     * @returns {HTMLDivElement} - Poster HTML Dom element
     */
    value: function getElement() {
      return this._el;
    }

    /**
     * Create the HTML Div element of the poster
     * @private
     * @returns {void}
     */

  }, {
    key: "_createEl",
    value: function _createEl() {
      if (!this._el) {
        var el = this._el = Utils.Dom.createElement("div");
        Utils.Dom.setAttribute(el, "id", Utils.Generator.uniqueId(5));
        Utils.Dom.setAttribute(el, "tabindex", '-1');
      }
    }

    /**
     * Removes the poster element from the dom
     * @private
     * @returns {void}
     */

  }, {
    key: "_removeEl",
    value: function _removeEl() {
      if (this._el) {
        Utils.Dom.removeChild(this._el.parentNode, this._el);
      }
    }

    /**
     * Show the poster image
     * @public
     * @private
     * @returns {void}
     */

  }, {
    key: "show",
    value: function show() {
      Utils.Dom.setStyle(this._el, "display", "");
    }

    /**
     * Hide the poster image
     * @public
     * @returns {void}
     */

  }, {
    key: "hide",
    value: function hide() {
      Utils.Dom.setStyle(this._el, "display", "none");
    }

    /**
     * Resets the poster url and the background image
     * @public
     * @returns {void}
     */

  }, {
    key: "reset",
    value: function reset() {
      this._posterUrl = '';
      Utils.Dom.setStyle(this._el, "background-image", '');
    }

    /**
     * Destroys the poster element
     * @public
     * @returns {void}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.reset();
      this._removeEl();
    }
  }, {
    key: "src",
    get: function get() {
      return this._posterUrl;
    }
  }]);

  return PosterManager;
}();

exports.default = PosterManager;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Locale class
 * @class
 *
 */
var Locale = function () {
  function Locale() {
    _classCallCheck(this, Locale);
  }

  _createClass(Locale, null, [{
    key: "language",


    /**
     * tries to return the locale language in IOS-693-1 format(two-letter codes, one per language for)
     * @returns {string} - the IOS-693-1 language string
     * @static
     */
    get: function get() {
      var lang = void 0;

      if (navigator.languages && navigator.languages.length) {
        // latest versions of Chrome and Firefox set this correctly
        lang = navigator.languages[0];
      } else if (navigator.userLanguage) {
        // IE only
        //$FlowFixMe - userLanguage is IE specific and flow doesn't have it in definitions
        lang = navigator.userLanguage;
      } else {
        // latest versions of Chrome, Firefox, and Safari set this correctly
        lang = navigator.language;
      }

      if (lang && lang.match("-")) {
        lang = lang.split("-")[0];
      }

      return lang;
    }
  }]);

  return Locale;
}();

exports.default = Locale;

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEventTarget = __webpack_require__(13);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _events = __webpack_require__(5);

var _mediaSourceProvider = __webpack_require__(17);

var _mediaSourceProvider2 = _interopRequireDefault(_mediaSourceProvider);

var _videoTrack = __webpack_require__(6);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(7);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(8);

var _vttCue = __webpack_require__(21);

var _util = __webpack_require__(1);

var Utils = _interopRequireWildcard(_util);

var _html5Autoplay = __webpack_require__(36);

var _html5Autoplay2 = _interopRequireDefault(_html5Autoplay);

var _html5IsSupported = __webpack_require__(38);

var _html5IsSupported2 = _interopRequireDefault(_html5IsSupported);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
     * The html5 capabilities handlers.
     * @private
     * @static
     */

    /**
     * Promise to indicate when a media source adapter can be loaded.
     * @type {Promise<*>}
     * @private
     */

    /**
     * The player config object.
     * @type {Object}
     * @private
     */

    /**
     * The event manager of the engine.
     * @type {EventManager}
     * @private
     */
    value: function createEngine(source, config) {
      return new this(source, config);
    }

    /**
     * Checks if the engine can play a given source.
     * @param {Source} source - The source object to check.
     * @param {boolean} preferNative - prefer native flag
     * @returns {boolean} - Whether the engine can play the source.
     * @public
     * @static
     */


    /**
     * @type {string} - The engine id.
     * @public
     * @static
     */

    /**
     * Flag to indicate first time text track cue change.
     * @type {Object<number, boolean>}
     * @private
     */

    /**
     * The selected media source adapter of the engine.
     * @type {?IMediaSourceAdapter}
     * @private
     */

    /**
     * The video element.
     * @type {HTMLVideoElement}
     * @private
     */

  }, {
    key: 'canPlaySource',
    value: function canPlaySource(source, preferNative) {
      return _mediaSourceProvider2.default.canPlaySource(source, preferNative);
    }

    /**
     * Runs the html5 capabilities tests.
     * @returns {void}
     * @public
     * @static
     */

  }, {
    key: 'runCapabilities',
    value: function runCapabilities() {
      Html5._capabilities.forEach(function (capability) {
        return capability.runCapability();
      });
    }

    /**
     * Gets the html5 capabilities.
     * @return {Promise<Object>} - The html5 capabilities object.
     * @public
     * @static
     */

  }, {
    key: 'getCapabilities',
    value: function getCapabilities() {
      var promises = [];
      Html5._capabilities.forEach(function (capability) {
        return promises.push(capability.getCapability());
      });
      return Promise.all(promises).then(function (arrayOfResults) {
        var mergedResults = {};
        arrayOfResults.forEach(function (res) {
          return Object.assign(mergedResults, res);
        });
        return _defineProperty({}, Html5.id, mergedResults);
      });
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

    _this._showTextTrackFirstTime = {};

    _this._eventManager = new _eventManager2.default();
    _this._createVideoElement();
    _this._init(source, config);
    return _this;
  }

  /**
   * Restores the engine.
   * @param {Source} source - The selected source object.
   * @param {Object} config - The player configuration.
   * @returns {void}
   */


  _createClass(Html5, [{
    key: 'restore',
    value: function restore(source, config) {
      this.detach();
      this._eventManager.removeAll();
      if (this._el) {
        Utils.Dom.removeAttribute(this._el, 'src');
      }
      this._init(source, config);
    }

    /**
     * Destroys the engine.
     * @public
     * @returns {void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.detach();
      if (this._el) {
        this.pause();
        Utils.Dom.removeAttribute(this._el, 'src');
        Utils.Dom.removeChild(this._el.parentNode, this._el);
      }
      this._showTextTrackFirstTime = {};
      this._eventManager.destroy();
      _mediaSourceProvider2.default.destroy();
      this._mediaSourceAdapter = null;
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

      Object.keys(_events.HTML5_EVENTS).forEach(function (html5Event) {
        _this2._eventManager.listen(_this2._el, _events.HTML5_EVENTS[html5Event], function () {
          _this2.dispatchEvent(new _fakeEvent2.default(_events.HTML5_EVENTS[html5Event]));
        });
      });
      if (this._mediaSourceAdapter) {
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.VIDEO_TRACK_CHANGED, function (event) {
          return _this2.dispatchEvent(event);
        });
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.AUDIO_TRACK_CHANGED, function (event) {
          return _this2.dispatchEvent(event);
        });
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.TEXT_TRACK_CHANGED, function (event) {
          return _this2.dispatchEvent(event);
        });
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.ABR_MODE_CHANGED, function (event) {
          return _this2.dispatchEvent(event);
        });
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.TEXT_CUE_CHANGED, function (event) {
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
      var _this3 = this;

      Object.keys(_events.HTML5_EVENTS).forEach(function (html5Event) {
        _this3._eventManager.unlisten(_this3._el, _events.HTML5_EVENTS[html5Event]);
      });
      if (this._mediaSourceAdapter) {
        this._eventManager.unlisten(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.VIDEO_TRACK_CHANGED);
        this._eventManager.unlisten(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.AUDIO_TRACK_CHANGED);
        this._eventManager.unlisten(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.TEXT_TRACK_CHANGED);
        this._eventManager.unlisten(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.TEXT_CUE_CHANGED);
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
     * @param {PKTextTrack} textTrack - The playkit text track object to set.
     * @returns {void}
     */

  }, {
    key: 'selectTextTrack',
    value: function selectTextTrack(textTrack) {
      this._removeCueChangeListener();
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.selectTextTrack(textTrack);
      }
      this._addCueChangeListener(textTrack);
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
      this._removeCueChangeListener();
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
     * Checking if adaptive bitrate switching is enabled.
     * @function isAdaptiveBitrateEnabled
     * @returns {boolean} - Whether adaptive bitrate is enabled.
     * @public
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
     * Seeking to live edge.
     * @function seekToLiveEdge
     * @returns {void}
     * @public
     */

  }, {
    key: 'seekToLiveEdge',
    value: function seekToLiveEdge() {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.seekToLiveEdge();
      }
    }

    /**
     * Checking if the current playback is live.
     * @function isLive
     * @returns {boolean} - Whether playback is live.
     * @public
     */

  }, {
    key: 'isLive',
    value: function isLive() {
      return this._mediaSourceAdapter ? this._mediaSourceAdapter.isLive() : false;
    }

    /**
     * Start/resume playback.
     * @public
     * @returns {void}
     */

  }, {
    key: 'play',
    value: function play() {
      var _this4 = this;

      var playPromise = this._el.play();
      if (playPromise) {
        playPromise.catch(function () {
          return _this4.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.AUTOPLAY_FAILED));
        });
      }
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
     * @param {number} startTime - Optional time to start the video from.
     * @public
     * @returns {Promise<Object>} - The loaded data
     */

  }, {
    key: 'load',
    value: function load(startTime) {
      var _this5 = this;

      this._el.load();
      return this._canLoadMediaSourceAdapterPromise.then(function () {
        if (_this5._mediaSourceAdapter) {
          return _this5._mediaSourceAdapter.load(startTime);
        }
        return Promise.resolve({});
      });
    }

    /**
     * Set a source.
     * @param {string} source - Source to set.
     * @public
     * @returns {void}
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
    key: '_init',


    /**
     * Initializes the engine.
     * @param {Source} source - The selected source object.
     * @param {Object} config - The player configuration.
     * @private
     * @returns {void}
     */
    value: function _init(source, config) {
      this._config = config;
      this._canLoadMediaSourceAdapterPromise = this._mediaSourceAdapter ? this._mediaSourceAdapter.destroy() : Promise.resolve();
      this._mediaSourceAdapter = null;
      this._loadMediaSourceAdapter(source);
      this.attach();
    }

    /**
     * Creates a video element dom object.
     * @private
     * @returns {void}
     */

  }, {
    key: '_createVideoElement',
    value: function _createVideoElement() {
      this._el = Utils.Dom.createElement("video");
      this._el.id = Utils.Generator.uniqueId(5);
      this._el.controls = false;
    }

    /**
     * Loads the appropriate media source extension adapter.
     * @param {Source} source - The selected source object.
     * @private
     * @returns {void}
     */

  }, {
    key: '_loadMediaSourceAdapter',
    value: function _loadMediaSourceAdapter(source) {
      this._mediaSourceAdapter = _mediaSourceProvider2.default.getMediaSourceAdapter(this.getVideoElement(), source, this._config);
    }

    /**
     * Add cuechange listener to active textTrack.
     * @param {PKTextTrack} textTrack - The playkit text track object to set.
     * @returns {void}
     * @private
     */

  }, {
    key: '_addCueChangeListener',
    value: function _addCueChangeListener(textTrack) {
      var _this6 = this;

      var textTrackEl = this._getSelectedTextTrackElement();
      if (textTrackEl) {
        /*
         There's a quirk in TextTrackAPI that a text track added to video element will not fire cuechange event if it
         didn't have it's mode set to showing for at least until a single cue has been change.
         After first time it seems there's time tracking which allows the cuechange to fire even though the track mode
         is set to hidden
         This is not the case with a track DOM element added to a video element where cuechange will be fired even if
         track mode is set only to hidden and was never set to showing
         */
        if (this._config.playback.useNativeTextTrack) {
          textTrackEl.mode = "showing";
        } else {
          textTrackEl.mode = this._showTextTrackFirstTime[textTrack.index] ? "hidden" : "showing";
          this._showTextTrackFirstTime[textTrack.index] = true;
          textTrackEl.oncuechange = function (e) {
            return _this6._onCueChange(e);
          };
        }
      }
    }

    /**
     * Remove cuechange listener to active textTrack
     * @returns {void}
     * @private
     */

  }, {
    key: '_removeCueChangeListener',
    value: function _removeCueChangeListener() {
      var textTrackEl = this._getSelectedTextTrackElement();
      if (textTrackEl) {
        textTrackEl.oncuechange = null;
      }
    }

    /**
     * oncuechange event handler.
     * @param {FakeEvent} e - The event arg.
     * @returns {void}
     * @private
     */

  }, {
    key: '_onCueChange',
    value: function _onCueChange(e) {
      var textTrack = e.currentTarget;
      var activeCues = [];
      textTrack.mode = 'hidden';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = textTrack.activeCues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var cue = _step.value;

          //Normalize cues to be of type of VTT model
          if (window.VTTCue && cue instanceof window.VTTCue) {
            activeCues.push(cue);
          } else if (window.TextTrackCue && cue instanceof window.TextTrackCue) {
            activeCues.push(new _vttCue.Cue(cue.startTime, cue.endTime, cue.text));
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

      this.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.TEXT_CUE_CHANGED, { cues: activeCues }));
    }

    /**
     * Get currently selected text track
     * @returns {?TextTrack} - returns the active text track element if available
     * @private
     */

  }, {
    key: '_getSelectedTextTrackElement',
    value: function _getSelectedTextTrackElement() {
      var textTracks = this._el.textTracks;
      for (var track in textTracks) {
        if (textTracks.hasOwnProperty(track)) {
          var textTrack = textTracks[parseInt(track)];
          if (textTrack && textTrack.mode !== "disabled") {
            return textTrack;
          }
        }
      }
      return null;
    }
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

    /**
     * Get the current time in seconds.
     * @returns {Number} - The current playback time.
     * @public
     */

  }, {
    key: 'currentTime',
    get: function get() {
      return this._mediaSourceAdapter ? this._mediaSourceAdapter.currentTime : 0;
    }

    /**
     * Set the current time in seconds.
     * @param {Number} to - The number to set in seconds.
     * @public
     * @returns {void}
     */
    ,
    set: function set(to) {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.currentTime = to;
      }
    }

    /**
     * Get the duration in seconds.
     * @returns {Number} - The playback duration.
     * @public
     */

  }, {
    key: 'duration',
    get: function get() {
      return this._mediaSourceAdapter ? this._mediaSourceAdapter.duration : NaN;
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
     * @param {boolean} playsinline - Whether to set on the video tag the playsinline attribute.
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
     * @returns {boolean} - Whether the video tag has an attribute of playsinline.
     */
    ,
    get: function get() {
      return this._el.getAttribute('playsinline') === '';
    }
  }]);

  return Html5;
}(_fakeEventTarget2.default);

Html5._capabilities = [_html5Autoplay2.default, _html5IsSupported2.default];
Html5.id = "html5";
exports.default = Html5;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _events = __webpack_require__(5);

var _track = __webpack_require__(3);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(6);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(7);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(8);

var _baseMediaSourceAdapter = __webpack_require__(18);

var _baseMediaSourceAdapter2 = _interopRequireDefault(_baseMediaSourceAdapter);

var _resolution = __webpack_require__(33);

var _util = __webpack_require__(1);

var Utils = _interopRequireWildcard(_util);

var _fairplay = __webpack_require__(34);

var _fairplay2 = _interopRequireDefault(_fairplay);

var _env = __webpack_require__(10);

var _env2 = _interopRequireDefault(_env);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
     * The original progressive sources
     * @member {Array<Object>} - _progressiveSources
     * @private
     */

    /**
     * The DRM protocols implementations for native adapter.
     * @type {Array<Function>}
     * @private
     * @static
     */


    /**
     * The adapter logger
     * @member {any} _logger
     * @private
     * @static
     */
    value: function canPlayType(mimeType) {
      var canPlayType = false;
      if (typeof mimeType === 'string') {
        canPlayType = !!NativeAdapter.TEST_VIDEO.canPlayType(mimeType.toLowerCase());
      }
      NativeAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canPlayType.toString());
      return canPlayType;
    }

    /**
     * Checks if NativeAdapter can play a given drm data.
     * @function canPlayDrm
     * @param {Array<Object>} drmData - The drm data to check.
     * @returns {boolean} - Whether the native adapter can play a specific drm data.
     * @static
     */

    /**
     * The DRM protocol for the current playback.
     * @type {?Function}
     * @private
     * @static
     */

    /**
     * static video element for canPlayType testing
     * @member {} TEST_VIDEO
     * @type {HTMLVideoElement}
     * @static
     */

    /**
     * The id of the Adapter
     * @member {string} id
     * @static
     * @public
     */

  }, {
    key: 'canPlayDrm',
    value: function canPlayDrm(drmData) {
      var canPlayDrm = false;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = NativeAdapter._drmProtocols[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var drmProtocol = _step.value;

          if (drmProtocol.canPlayDrm(drmData)) {
            NativeAdapter._drmProtocol = drmProtocol;
            canPlayDrm = true;
            break;
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

      NativeAdapter._logger.debug('canPlayDrm result is ' + canPlayDrm.toString(), drmData);
      return canPlayDrm;
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

  }, {
    key: 'createAdapter',
    value: function createAdapter(videoElement, source, config) {
      return new this(videoElement, source, config);
    }

    /**
     * @constructor
     * @param {HTMLVideoElement} videoElement - The video element which bind to NativeAdapter
     * @param {Source} source - The source object
     * @param {Object} config - The player configuration
     */

  }]);

  function NativeAdapter(videoElement, source, config) {
    _classCallCheck(this, NativeAdapter);

    NativeAdapter._logger.debug('Creating adapter');

    var _this = _possibleConstructorReturn(this, (NativeAdapter.__proto__ || Object.getPrototypeOf(NativeAdapter)).call(this, videoElement, source));

    _this._maybeSetDrmPlayback();
    _this._eventManager = new _eventManager2.default();
    _this._progressiveSources = config.sources.progressive;
    return _this;
  }

  /**
   * Sets the DRM playback in case such needed.
   * @private
   * @returns {void}
   */


  _createClass(NativeAdapter, [{
    key: '_maybeSetDrmPlayback',
    value: function _maybeSetDrmPlayback() {
      if (NativeAdapter._drmProtocol && this._sourceObj && this._sourceObj.drmData) {
        NativeAdapter._drmProtocol.setDrmPlayback(this._videoElement, this._sourceObj.drmData);
      }
    }

    /**
     * Set the suitable progressive source according the current resolution
     * @function _setProgressiveSource
     * @returns {void}
     * @private
     */

  }, {
    key: '_setProgressiveSource',
    value: function _setProgressiveSource() {
      var suitableTrack = (0, _resolution.getSuitableSourceForResolution)(this._progressiveSources, this._videoElement.offsetWidth, this._videoElement.offsetHeight);
      if (suitableTrack) {
        this._sourceObj = suitableTrack;
      }
    }

    /**
     * Checks if the playback source is progressive
     * @function _isProgressivePlayback
     * @returns {boolean} - is progressive source
     * @private
     */

  }, {
    key: '_isProgressivePlayback',
    value: function _isProgressivePlayback() {
      return this._sourceObj ? this._sourceObj.mimetype === 'video/mp4' : false;
    }

    /**
     * Load the video source
     * @param {number} startTime - Optional time to start the video from.
     * @function load
     * @returns {Promise<Object>} - The loaded data
     */

  }, {
    key: 'load',
    value: function load(startTime) {
      var _this2 = this;

      if (!this._loadPromise) {
        this._loadPromise = new Promise(function (resolve, reject) {
          // We're using 'loadeddata' event for native hls (on 'loadedmetadata' native hls doesn't have tracks yet).
          _this2._eventManager.listenOnce(_this2._videoElement, _events.HTML5_EVENTS.LOADED_DATA, function () {
            var data = { tracks: _this2._getParsedTracks() };
            NativeAdapter._logger.debug('The source has been loaded successfully');
            resolve(data);
          });
          _this2._eventManager.listenOnce(_this2._videoElement, _events.HTML5_EVENTS.ERROR, function (error) {
            NativeAdapter._logger.error(error);
            reject(error);
          });
          if (_this2._isProgressivePlayback()) {
            _this2._setProgressiveSource();
          }
          if (_this2._sourceObj && _this2._sourceObj.url) {
            _this2._videoElement.src = _this2._sourceObj.url;
            _this2._trigger(_baseMediaSourceAdapter2.default.CustomEvents.ABR_MODE_CHANGED, { mode: _this2._isProgressivePlayback() ? 'manual' : 'auto' });
          }
          if (startTime) {
            _this2._videoElement.currentTime = startTime;
          }
          _this2._videoElement.load();
        });
      }
      return this._loadPromise;
    }

    /**
     * Destroys the native adapter.
     * @function destroy
     * @returns {Promise<*>} - The destroy promise.
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      NativeAdapter._logger.debug('destroy');
      return _get(NativeAdapter.prototype.__proto__ || Object.getPrototypeOf(NativeAdapter.prototype), 'destroy', this).call(this).then(function () {
        _this3._eventManager.destroy();
        _this3._progressiveSources = [];
        _this3._loadPromise = null;
        if (NativeAdapter._drmProtocol) {
          NativeAdapter._drmProtocol.destroy();
          NativeAdapter._drmProtocol = null;
        }
      });
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
      if (this._isProgressivePlayback()) {
        return this._getParsedProgressiveVideoTracks();
      } else {
        return this._getParsedAdaptiveVideoTracks();
      }
    }

    /**
     * Get the parsed progressive video tracks
     * @function _getParsedProgressiveVideoTracks
     * @returns {Array<Track>} - The parsed progressive video tracks
     * @private
     */

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

    /**
     * Get the parsed adaptive video tracks
     * @function _getParsedAdaptiveVideoTracks
     * @returns {Array<Track>} - The parsed adaptive video tracks
     * @private
     */

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
      var textTracks = this._filterVideoElementTextTracks();
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
          parsedTracks.push(new _textTrack.TextTrack(settings));
        }
      }
      return parsedTracks;
    }

    /**
     * Filtered empty text tracks from the video element.
     * @returns {Array} - The filtered text tracks array.
     * @private
     */

  }, {
    key: '_filterVideoElementTextTracks',
    value: function _filterVideoElementTextTracks() {
      var textTracks = [];
      for (var i = 0; i < this._videoElement.textTracks.length; i++) {
        var vidTextTrack = this._videoElement.textTracks[i];
        if (vidTextTrack.language || vidTextTrack.label) {
          textTracks.push(vidTextTrack);
        }
      }
      return textTracks;
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
      if (this._isProgressivePlayback()) {
        this._selectProgressiveVideoTrack(videoTrack);
      } else {
        this.selectAdaptiveVideoTrack(videoTrack);
      }
    }

    /**
     * Select a progressive video track
     * @function _selectProgressiveVideoTrack
     * @param {VideoTrack} videoTrack - the track to select
     * @returns {void}
     * @public
     */

  }, {
    key: '_selectProgressiveVideoTrack',
    value: function _selectProgressiveVideoTrack(videoTrack) {
      var _this4 = this;

      var videoTracks = this._progressiveSources;
      if (videoTrack instanceof _videoTrack2.default && videoTracks && videoTracks[videoTrack.index]) {
        var currentTime = this._videoElement.currentTime;
        var paused = this._videoElement.paused;
        this._sourceObj = videoTracks[videoTrack.index];
        this._eventManager.listenOnce(this._videoElement, _events.HTML5_EVENTS.LOADED_DATA, function () {
          if (_env2.default.browser.name === 'Android Browser') {
            // In android browser we have to seek only after some playback.
            _this4._eventManager.listenOnce(_this4._videoElement, _events.HTML5_EVENTS.DURATION_CHANGE, function () {
              _this4._videoElement.currentTime = currentTime;
            });
            _this4._eventManager.listenOnce(_this4._videoElement, _events.HTML5_EVENTS.SEEKED, function () {
              _this4._onTrackChanged(videoTrack);
              if (paused) {
                _this4._videoElement.pause();
              }
            });
            _this4._videoElement.play();
          } else {
            _this4._eventManager.listenOnce(_this4._videoElement, _events.HTML5_EVENTS.SEEKED, function () {
              _this4._onTrackChanged(videoTrack);
            });
            _this4._videoElement.currentTime = currentTime;
            if (!paused) {
              _this4._videoElement.play();
            }
          }
        });
        this._videoElement.src = this._sourceObj ? this._sourceObj.url : "";
      }
    }

    /**
     * Select a native video track
     * @function selectAdaptiveVideoTrack
     * @param {VideoTrack} videoTrack - the track to select
     * @returns {void}
     * @public
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
     * @param {PKTextTrack} textTrack - The playkit text track
     * @returns {void}
     * @public
     */

  }, {
    key: 'selectTextTrack',
    value: function selectTextTrack(textTrack) {
      var textTracks = this._videoElement.textTracks;
      if (textTrack instanceof _textTrack.TextTrack && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions') && textTracks && textTracks[textTrack.index]) {
        this._disableTextTracks();
        textTracks[textTrack.index].mode = 'hidden';
        NativeAdapter._logger.debug('Text track changed', textTrack);
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
      NativeAdapter._logger.warn('Enabling adaptive bitrate is not supported for native playback');
    }

    /**
     * Checking if adaptive bitrate switching is enabled.
     * For progressive playback will always returns false.
     * For adaptive playback will always returns true.
     * @function isAdaptiveBitrateEnabled
     * @returns {boolean} - Whether adaptive bitrate is enabled.
     * @public
     */

  }, {
    key: 'isAdaptiveBitrateEnabled',
    value: function isAdaptiveBitrateEnabled() {
      return !this._isProgressivePlayback();
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
     * Returns the live edge
     * @returns {number} - live edge
     * @private
     */

  }, {
    key: '_getLiveEdge',
    value: function _getLiveEdge() {
      if (this._videoElement.seekable.length) {
        return this._videoElement.seekable.end(this._videoElement.seekable.length - 1);
      } else if (this._videoElement.buffered.length) {
        return this._videoElement.buffered.end(this._videoElement.buffered.length - 1);
      } else {
        return this._videoElement.duration;
      }
    }

    /**
     * Seeking to live edge.
     * @function seekToLiveEdge
     * @returns {void}
     * @public
     */

  }, {
    key: 'seekToLiveEdge',
    value: function seekToLiveEdge() {
      try {
        this._videoElement.currentTime = this._getLiveEdge();
      } catch (e) {
        return;
      }
    }

    /**
     * Checking if the current playback is live.
     * @function isLive
     * @returns {boolean} - Whether playback is live.
     * @public
     */

  }, {
    key: 'isLive',
    value: function isLive() {
      return this._videoElement.duration === Infinity;
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

    /**
     * Get the duration in seconds.
     * @returns {Number} - The playback duration.
     * @public
     */

  }, {
    key: 'duration',
    get: function get() {
      if (this.isLive()) {
        return this._getLiveEdge();
      } else {
        return _get(NativeAdapter.prototype.__proto__ || Object.getPrototypeOf(NativeAdapter.prototype), 'duration', this);
      }
    }
  }]);

  return NativeAdapter;
}(_baseMediaSourceAdapter2.default);

NativeAdapter.id = 'NativeAdapter';
NativeAdapter._logger = _baseMediaSourceAdapter2.default.getLogger(NativeAdapter.id);
NativeAdapter.TEST_VIDEO = Utils.Dom.createElement("video");
NativeAdapter._drmProtocols = [_fairplay2.default];
NativeAdapter._drmProtocol = null;
exports.default = NativeAdapter;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Calculates the most suitable source to the container size
 * @function getSuitableSourceForResolution
 * @param {Array<Object>} tracks - The tracks
 * @param {number} width - The width to calculate with
 * @param {number} height - The height to calculate with
 * @returns {Object} - The most suitable source to the container size
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseDrmProtocol = __webpack_require__(19);

var _baseDrmProtocol2 = _interopRequireDefault(_baseDrmProtocol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FairPlay = function (_BaseDrmProtocol) {
  _inherits(FairPlay, _BaseDrmProtocol);

  function FairPlay() {
    _classCallCheck(this, FairPlay);

    return _possibleConstructorReturn(this, (FairPlay.__proto__ || Object.getPrototypeOf(FairPlay)).apply(this, arguments));
  }

  _createClass(FairPlay, null, [{
    key: 'canPlayDrm',


    /**
     * FairPlay playback supports in case 2 conditions are met:
     * 1. The environment supports FairPlay playback.
     * 2. The drm data of the source object contains entry with FairPlay scheme.
     * @param {Array<Object>} drmData - The drm data to check.
     * @return {boolean} - Whether FairPlay can be play on the current environment.
     */
    value: function canPlayDrm(drmData) {
      FairPlay._logger.debug("Can play DRM scheme of: " + _baseDrmProtocol2.default.DrmScheme.FAIRPLAY);
      return _baseDrmProtocol2.default.DrmSupport.isProtocolSupported(_baseDrmProtocol2.default.DrmScheme.FAIRPLAY, drmData);
    }

    /**
     * Sets the FairPlay playback.
     * @param {HTMLVideoElement} videoElement - The video element to manipulate.
     * @param {Array<Object>} drmData - The drm data.
     * @returns {void}
     */

  }, {
    key: 'setDrmPlayback',
    value: function setDrmPlayback(videoElement) {
      var drmData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      FairPlay._logger.debug("Sets DRM playback");
      videoElement.addEventListener(FairPlay._WebkitEvents.NEED_KEY, FairPlay._onWebkitNeedKey.bind(null, drmData), false);
    }
  }, {
    key: '_onWebkitNeedKey',
    value: function _onWebkitNeedKey(drmData, event) {
      FairPlay._logger.debug("Webkit need key triggered");
      var fpDrmData = drmData.find(function (drmEntry) {
        return drmEntry.scheme === _baseDrmProtocol2.default.DrmScheme.FAIRPLAY;
      });
      if (!fpDrmData || FairPlay._keySession) {
        return;
      }

      var fpCertificate = fpDrmData.certificate;
      var videoElement = event.target;
      var initData = event.initData;
      var contentId = FairPlay._extractContentId(initData);
      var aCertificate = FairPlay._base64DecodeUint8Array(fpCertificate);

      initData = FairPlay._concatInitDataIdAndCertificate(initData, contentId, aCertificate);

      if (!videoElement.webkitKeys) {
        var keySystem = FairPlay._selectKeySystem();
        FairPlay._logger.debug("Sets media keys");
        videoElement.webkitSetMediaKeys(new window.WebKitMediaKeys(keySystem));
      }
      if (!videoElement.webkitKeys) {
        throw new Error("Could not create MediaKeys");
      }
      FairPlay._logger.debug("Creates session");
      FairPlay._keySession = videoElement.webkitKeys.createSession('video/mp4', initData);
      if (!FairPlay._keySession) {
        throw new Error("Could not create key session");
      }
      FairPlay._keySession.contentId = contentId;
      FairPlay._keySession.addEventListener(FairPlay._WebkitEvents.KEY_MESSAGE, FairPlay._onWebkitKeyMessage.bind(null, fpDrmData), false);
      FairPlay._keySession.addEventListener(FairPlay._WebkitEvents.KEY_ADDED, FairPlay._onWebkitKeyAdded, false);
      FairPlay._keySession.addEventListener(FairPlay._WebkitEvents.KEY_ERROR, FairPlay._onWebkitKeyError, false);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      FairPlay._keySession = null;
    }
  }, {
    key: '_onWebkitKeyMessage',
    value: function _onWebkitKeyMessage(drmData, event) {
      FairPlay._logger.debug("Webkit key message triggered");
      var message = event.message;
      var request = new XMLHttpRequest();
      request.responseType = "text";
      request.addEventListener("load", FairPlay._licenseRequestLoaded, false);
      request.addEventListener("error", FairPlay._licenseRequestFailed, false);
      var params = FairPlay._base64EncodeUint8Array(message);
      request.open('POST', drmData.licenseUrl, true);
      request.setRequestHeader("Content-type", "application/json");
      FairPlay._logger.debug("Ready for license request");
      request.send(params);
    }
  }, {
    key: '_onWebkitKeyAdded',
    value: function _onWebkitKeyAdded() {
      FairPlay._logger.debug("Decryption key was added to session");
    }
  }, {
    key: '_onWebkitKeyError',
    value: function _onWebkitKeyError() {
      FairPlay._logger.error("A decryption key error was encountered");
    }
  }, {
    key: '_licenseRequestLoaded',
    value: function _licenseRequestLoaded(event) {
      FairPlay._logger.debug("License request loaded");
      var request = event.target;
      var keyText = request.responseText.trim();
      var responseObj = {};
      try {
        responseObj = JSON.parse(keyText);
      } catch (error) {
        FairPlay._licenseRequestFailed();
      }
      var isValidResponse = FairPlay._validateResponse(responseObj);
      if (isValidResponse.valid) {
        var key = FairPlay._base64DecodeUint8Array(responseObj.ckc);
        FairPlay._keySession.update(key);
      } else {
        FairPlay._licenseRequestFailed();
      }
    }
  }, {
    key: '_validateResponse',
    value: function _validateResponse(responseObj) {
      if (responseObj.message && responseObj.message.indexOf("error") > 0 || responseObj.reference === null || responseObj.status_code === 500) {
        return { //todo: create & edit an error object
          valid: false,
          details: "internal server error" // would be ERROR.INTERNAL or something like that
        };
      } else if (responseObj.ckc === "") {
        return {
          valid: false,
          details: "ckc is missing" // would be ERROR.MISSING_CKC or something like that
        };
      } else {
        return {
          valid: true
        };
      }
    }
  }, {
    key: '_licenseRequestFailed',
    value: function _licenseRequestFailed() {
      throw new Error("License request failed");
    }
  }, {
    key: '_extractContentId',
    value: function _extractContentId(initData) {
      var link = document.createElement('a');
      link.href = FairPlay._arrayToString(initData);
      return link.hostname;
    }
  }, {
    key: '_selectKeySystem',
    value: function _selectKeySystem() {
      var keySystem = null;
      if (window.WebKitMediaKeys.isTypeSupported(FairPlay._KeySystem, "video/mp4")) {
        keySystem = FairPlay._KeySystem;
      } else {
        FairPlay._logger.warn("Key System not supported");
      }
      return keySystem;
    }
  }, {
    key: '_arrayToString',
    value: function _arrayToString(array) {
      return String.fromCharCode.apply(null, new Uint16Array(array.buffer));
    }
  }, {
    key: '_base64DecodeUint8Array',
    value: function _base64DecodeUint8Array(input) {
      var raw = window.atob(input);
      var rawLength = raw.length;
      var array = new Uint8Array(new ArrayBuffer(rawLength));
      for (var i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
      }
      return array;
    }
  }, {
    key: '_concatInitDataIdAndCertificate',
    value: function _concatInitDataIdAndCertificate(initData, id, cert) {
      if (typeof id === "string") {
        id = FairPlay._stringToArray(id);
      }
      var offset = 0;
      var buffer = new ArrayBuffer(initData.byteLength + 4 + id.byteLength + 4 + cert.byteLength);
      var dataView = new DataView(buffer);

      var initDataArray = new Uint8Array(buffer, offset, initData.byteLength);
      initDataArray.set(initData);
      offset += initData.byteLength;

      dataView.setUint32(offset, id.byteLength, true);
      offset += 4;

      var idArray = new Uint8Array(buffer, offset, id.byteLength);
      idArray.set(id);
      offset += idArray.byteLength;

      dataView.setUint32(offset, cert.byteLength, true);
      offset += 4;

      var certArray = new Uint8Array(buffer, offset, cert.byteLength);
      certArray.set(cert);

      return new Uint8Array(buffer, 0, buffer.byteLength);
    }
  }, {
    key: '_stringToArray',
    value: function _stringToArray(string) {
      var buffer = new ArrayBuffer(string.length * 2);
      var array = new Uint16Array(buffer);
      for (var i = 0, strLen = string.length; i < strLen; i++) {
        array[i] = string.charCodeAt(i);
      }
      return array;
    }
  }, {
    key: '_base64EncodeUint8Array',
    value: function _base64EncodeUint8Array(input) {
      var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var output = "";
      var chr1 = void 0,
          chr2 = void 0,
          chr3 = void 0,
          enc1 = void 0,
          enc2 = void 0,
          enc3 = void 0,
          enc4 = void 0;
      var i = 0;
      while (i < input.length) {
        chr1 = input[i++];
        chr2 = i < input.length ? input[i++] : Number.NaN;
        chr3 = i < input.length ? input[i++] : Number.NaN;

        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
      }
      return output;
    }
  }]);

  return FairPlay;
}(_baseDrmProtocol2.default);

FairPlay._logger = _baseDrmProtocol2.default.getLogger('FairPlay');
FairPlay._KeySystem = "com.apple.fps.1_0";
FairPlay._WebkitEvents = {
  NEED_KEY: 'webkitneedkey',
  KEY_MESSAGE: 'webkitkeymessage',
  KEY_ADDED: 'webkitkeyadded',
  KEY_ERROR: 'webkitkeyerror'
};
exports.default = FairPlay;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _env = __webpack_require__(10);

var _env2 = _interopRequireDefault(_env);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _drmScheme = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NOT_SUPPORTED = 'not_supported_drm_playback';

var DrmSupport = function () {
  function DrmSupport() {
    _classCallCheck(this, DrmSupport);
  }

  _createClass(DrmSupport, null, [{
    key: 'isProtocolSupported',


    /**
     * Checks if a certain DRM scheme is supported in the current environment.
     * @param {string} scheme - The drm scheme.
     * @param {Array<Object>} drmData - The drm data to check.
     * @return {boolean} - Whether scheme can be play on the current environment.
     */
    value: function isProtocolSupported(scheme, drmData) {
      var browser = _env2.default.browser.name;
      if (typeof DrmSupport._Browsers[browser] === 'function') {
        var drmScheme = DrmSupport._Browsers[browser]();
        DrmSupport._logger.debug("Supported DRM scheme for current environment is: " + drmScheme);
        return drmScheme === scheme && !!drmData.find(function (drmEntry) {
          return drmEntry.scheme === scheme;
        });
      }
      return false;
    }
  }]);

  return DrmSupport;
}();

DrmSupport._logger = _logger2.default.getLogger('DrmSupport');
DrmSupport._Browsers = {
  Safari: function Safari() {
    var device = _env2.default.device.type;
    var os = _env2.default.os.name;
    if (!device && os === 'Mac OS') {
      return _drmScheme.DrmScheme.FAIRPLAY;
    }
    return NOT_SUPPORTED;
  },
  Chrome: function Chrome() {
    var device = _env2.default.device.type;
    var os = _env2.default.os.name;
    if (!device || os === 'Android') {
      return _drmScheme.DrmScheme.WIDEVINE;
    }
    return NOT_SUPPORTED;
  },
  Firefox: function Firefox() {
    var device = _env2.default.device.type;
    if (!device) {
      return _drmScheme.DrmScheme.WIDEVINE;
    }
    return NOT_SUPPORTED;
  },
  Edge: function Edge() {
    var device = _env2.default.device.type;
    if (!device) {
      return _drmScheme.DrmScheme.PLAYREADY;
    }
    return NOT_SUPPORTED;
  },
  IE: function IE() {
    var device = _env2.default.device.type;
    var os = _env2.default.os.name;
    var osVersion = _env2.default.os.version;
    if (!device && os === 'Windows' && Number.parseFloat(osVersion) >= 8.1) {
      return _drmScheme.DrmScheme.PLAYREADY;
    }
    return NOT_SUPPORTED;
  }
};
exports.default = DrmSupport;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(1);

var Utils = _interopRequireWildcard(_util);

var _encodingSources = __webpack_require__(37);

var EncodingSources = _interopRequireWildcard(_encodingSources);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Html5AutoPlayCapability = function () {
  function Html5AutoPlayCapability() {
    _classCallCheck(this, Html5AutoPlayCapability);
  }

  _createClass(Html5AutoPlayCapability, null, [{
    key: 'runCapability',


    /***
     * Runs the test for autoplay capability.
     * @public
     * @static
     * @returns {void}
     */
    value: function runCapability() {
      try {
        Html5AutoPlayCapability._vid.src = EncodingSources.Base64Mp4Source;
        Html5AutoPlayCapability._promise = Html5AutoPlayCapability._vid.play() || Promise.resolve();
      } catch (e) {
        Html5AutoPlayCapability._promise = Promise.reject();
      }
    }

    /**
     * Gets the test result for autoplay capability.
     * @returns {Promise<CapabilityResult>} - The result object for autoplay capability.
     * @static
     * @public
     */

  }, {
    key: 'getCapability',
    value: function getCapability() {
      return Html5AutoPlayCapability._promise.then(function () {
        return { autoplay: true };
      }).catch(function () {
        return { autoplay: false };
      });
    }
  }]);

  return Html5AutoPlayCapability;
}();

Html5AutoPlayCapability._vid = Utils.Dom.createElement('video');
exports.default = Html5AutoPlayCapability;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {
	"Base64Mp4Source": "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAABPptZGF0AAACrQYF//+p3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjcyMSA3MmQ1M2FiIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNiAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD00IHRocmVhZHM9MSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MiBrZXlpbnQ9MjUwIGtleWludF9taW49MjUgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIzLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAAQZYiEADf//vaH+BTZWBP/gd4CAExhdmM1Ny42NC4xMDAAQiAIwRg4AAAACEGaJGxDf/7gAAAACEGeQniFf8SBIRAEYIwcAAAACAGeYXRCf8eAIRAEYIwcAAAACAGeY2pCf8eBIRAEYIwcAAAADkGaaEmoQWiZTAhv//7hAAAACkGehkURLCv/xIEhEARgjBwAAAAIAZ6ldEJ/x4EhEARgjBwAAAAIAZ6nakJ/x4AhEARgjBwAAAAOQZqsSahBbJlMCG///uAAAAAKQZ7KRRUsK//EgSEQBGCMHAAAAAgBnul0Qn/HgCEQBGCMHAAAAAgBnutqQn/HgAAAAA5BmvBJqEFsmUwIb//+4SEQBGCMHAAAAApBnw5FFSwr/8SBIRAEYIwcAAAACAGfLXRCf8eBIRAEYIwcAAAACAGfL2pCf8eAAAAADkGbNEmoQWyZTAhv//7gIRAEYIwcAAAACkGfUkUVLCv/xIEhEARgjBwAAAAIAZ9xdEJ/x4AAAAAIAZ9zakJ/x4AhEARgjBwAAAAOQZt4SahBbJlMCGf//uEhEARgjBwAAAAKQZ+WRRUsK//EgCEQBGCMHAAAAAgBn7V0Qn/HgQAAAAgBn7dqQn/HgSEQBGCMHAAAAA5Bm7xJqEFsmUwIV//+wCEQBGCMHAAAAApBn9pFFSwr/8SBAAAACAGf+XRCf8eAIRAEYIwcAAAACAGf+2pCf8eBIRAEYIwcAAAADkGb/UmoQWyZTAhP//7BIRAEYIwcIRAEYIwcAAAIOG1vb3YAAABsbXZoZAAAAAAAAAAAAAAAAAAAA+gAAAQXAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAS3dHJhawAAAFx0a2hkAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAPoAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAIAAAACAAAAAAAJGVkdHMAAAAcZWxzdAAAAAAAAAABAAAD6AAABAAAAQAAAAAEL21kaWEAAAAgbWRoZAAAAAAAAAAAAAAAAAAAPAAAADwAVcQAAAAAAC1oZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAVmlkZW9IYW5kbGVyAAAAA9ptaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAOac3RibAAAAJZzdHNkAAAAAAAAAAEAAACGYXZjMQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAIAAgASAAAAEgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj//wAAADBhdmNDAfQACv/hABdn9AAKkZsr8TEwgAAAAwCAAAAeB4kSywEABmjr48RIRAAAABhzdHRzAAAAAAAAAAEAAAAeAAACAAAAABRzdHNzAAAAAAAAAAEAAAABAAABAGN0dHMAAAAAAAAAHgAAAAEAAAQAAAAAAQAACgAAAAABAAAEAAAAAAEAAAAAAAAAAQAAAgAAAAABAAAKAAAAAAEAAAQAAAAAAQAAAAAAAAABAAACAAAAAAEAAAoAAAAAAQAABAAAAAABAAAAAAAAAAEAAAIAAAAAAQAACgAAAAABAAAEAAAAAAEAAAAAAAAAAQAAAgAAAAABAAAKAAAAAAEAAAQAAAAAAQAAAAAAAAABAAACAAAAAAEAAAoAAAAAAQAABAAAAAABAAAAAAAAAAEAAAIAAAAAAQAACgAAAAABAAAEAAAAAAEAAAAAAAAAAQAAAgAAAAABAAAEAAAAANxzdHNjAAAAAAAAABEAAAABAAAAAQAAAAEAAAACAAAAAgAAAAEAAAADAAAAAQAAAAEAAAAFAAAAAgAAAAEAAAAGAAAAAQAAAAEAAAAIAAAAAgAAAAEAAAAJAAAAAQAAAAEAAAAKAAAAAgAAAAEAAAALAAAAAQAAAAEAAAANAAAAAgAAAAEAAAAOAAAAAQAAAAEAAAAPAAAAAgAAAAEAAAAQAAAAAQAAAAEAAAASAAAAAgAAAAEAAAATAAAAAQAAAAEAAAAUAAAAAgAAAAEAAAAVAAAAAQAAAAEAAACMc3RzegAAAAAAAAAAAAAAHgAAAsUAAAAMAAAADAAAAAwAAAAMAAAAEgAAAA4AAAAMAAAADAAAABIAAAAOAAAADAAAAAwAAAASAAAADgAAAAwAAAAMAAAAEgAAAA4AAAAMAAAADAAAABIAAAAOAAAADAAAAAwAAAASAAAADgAAAAwAAAAMAAAAEgAAAGhzdGNvAAAAAAAAABYAAAAwAAADDAAAAyoAAAM8AAADTgAAA3QAAAOGAAADmAAAA74AAAPQAAAD9AAABAgAAAQaAAAEPgAABFIAAARwAAAEiAAABJwAAAS6AAAE0gAABPIAAAUEAAACq3RyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAEFwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAA+gAAAQAAAEAAAAAAiNtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAFYiAABaIlXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAHObWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAGSc3RibAAAAGpzdHNkAAAAAAAAAAEAAABabXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAFYiAAAAAAA2ZXNkcwAAAAADgICAJQACAASAgIAXQBUAAAAAAfQAAAAEoAWAgIAFE5BW5QAGgICAAQIAAAAgc3R0cwAAAAAAAAACAAAAFgAABAAAAAABAAACIgAAAChzdHNjAAAAAAAAAAIAAAABAAAAAQAAAAEAAAAWAAAAAgAAAAEAAABwc3RzegAAAAAAAAAAAAAAFwAAABcAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAAaHN0Y28AAAAAAAAAFgAAAvUAAAMkAAADNgAAA0gAAANuAAADgAAAA5IAAAO4AAADygAAA+4AAAQCAAAEFAAABDgAAARMAAAEagAABIIAAASWAAAEtAAABMwAAATsAAAE/gAABRYAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU3LjU2LjEwMA=="
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(1);

var Utils = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Html5IsSupportedCapability = function () {
  function Html5IsSupportedCapability() {
    _classCallCheck(this, Html5IsSupportedCapability);
  }

  _createClass(Html5IsSupportedCapability, null, [{
    key: 'runCapability',


    /***
     * Runs the test for isSupported capability.
     * @public
     * @static
     * @returns {void}
     */
    value: function runCapability() {
      try {
        Html5IsSupportedCapability._vid.volume = 0.5;
        Html5IsSupportedCapability._result = !!Html5IsSupportedCapability._vid.canPlayType;
      } catch (e) {
        Html5IsSupportedCapability._result = false;
      }
    }

    /**
     * Gets the test result for isSupported capability.
     * @returns {Promise<CapabilityResult>} - The result object for isSupported capability.
     * @static
     * @public
     */

  }, {
    key: 'getCapability',
    value: function getCapability() {
      return Promise.resolve({ isSupported: Html5IsSupportedCapability._result });
    }
  }]);

  return Html5IsSupportedCapability;
}();

Html5IsSupportedCapability._vid = Utils.Dom.createElement('video');
exports.default = Html5IsSupportedCapability;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(9);

var _player2 = _interopRequireDefault(_player);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _state = __webpack_require__(40);

var _state2 = _interopRequireDefault(_state);

var _stateTypes = __webpack_require__(16);

var _stateTypes2 = _interopRequireDefault(_stateTypes);

var _events = __webpack_require__(5);

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class responsible to manage all the state machine of the player.
 * @classdesc
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
      _this._updateState(_stateTypes2.default.PAUSED);
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
    }), _defineProperty(_PlayerStates$BUFFERI, _events.HTML5_EVENTS.SEEKED, function () {
      if (_this._prevState && _this._prevState.type === _stateTypes2.default.PLAYING) {
        _this._updateState(_stateTypes2.default.PLAYING);
        _this._dispatchEvent();
      }
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
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.SEEKED, this._doTransition.bind(this));
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
      this._logger.debug('Do transition request', event.type);
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
     * Resets the state manager.
     * @public
     * @returns {void}
     */

  }, {
    key: 'reset',
    value: function reset() {
      this._history = [];
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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _middleware = __webpack_require__(43);

var _middleware2 = _interopRequireDefault(_middleware);

var _baseMiddleware = __webpack_require__(15);

var _baseMiddleware2 = _interopRequireDefault(_baseMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The playback middleware.
 */
var PlaybackMiddleware = function () {

  /**
   * @constructor
   */

  /**
   * The middleware implementation.
   * @private
   * @member
   */
  function PlaybackMiddleware() {
    _classCallCheck(this, PlaybackMiddleware);

    this._middleware = new _middleware2.default(PlaybackMiddleware.Actions);
  }

  /**
   * Registers a playback middleware instance to the middleware chain.
   * @param {BaseMiddleware} middlewareInstance - The middleware instance.
   * @public
   * @returns {void}
   */

  /**
   * The actions of the playback middleware.
   * @static
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
  PLAY: 'play',
  PAUSE: 'pause'
};
exports.default = PlaybackMiddleware;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiMap = __webpack_require__(12);

var _multiMap2 = _interopRequireDefault(_multiMap);

var _baseMiddleware = __webpack_require__(15);

var _baseMiddleware2 = _interopRequireDefault(_baseMiddleware);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Generic middleware implementation.
 */
var Middleware = function () {

  /**
   * @constructor
   * @param {Object} actions - The actions for the middleware.
   */

  /**
   * The actions supported by the middleware.
   * @private
   * @member
   */
  function Middleware(actions) {
    _classCallCheck(this, Middleware);

    this._actions = actions;
    this._middlewares = new _multiMap2.default();
    this._logger = _logger2.default.getLogger("Middleware");
  }

  /**
   * Registers a middleware instance to the middleware chain.
   * @param {BaseMiddleware} middlewareInstance - The middleware instance.
   * @public
   * @returns {void}
   */

  /**
   * The logger of the middleware.
   * @private
   * @member
   */

  /**
   * The registered middlewares.
   * @private
   * @member
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
     * @returns {void}
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

    /**
     * Executes all the middlewares one by one.
     * @param {Array<Function>} middlewares - The middlewares for a specific action.
     * @param {Function} callback - The callback function.
     * @private
     * @returns {void}
     */

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
/* 44 */
/***/ (function(module, exports) {

module.exports = {
	"sources": {},
	"plugins": {},
	"metadata": {
		"poster": ""
	},
	"playback": {
		"audioLanguage": "",
		"textLanguage": "",
		"useNativeTextTrack": false,
		"volume": 1,
		"playsinline": true,
		"preload": "none",
		"autoplay": false,
		"allowMutedAutoPlay": true,
		"muted": false,
		"options": {
			"html5": {
				"hls": {},
				"dash": {}
			}
		},
		"preferNative": {
			"hls": false,
			"dash": false
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

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(48)(content, options);
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(undefined);
// imports


// module
exports.push([module.i, ".playkit-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  outline: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.playkit-engine {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  object-fit: contain;\n}\n\n.playkit-engine video::-webkit-media-controls-panel,\n.playkit-engine video::-webkit-media-controls-panel-container,\n.playkit-engine video::-webkit-media-controls-start-playback-button,\n.playkit-engine video::-webkit-media-controls-play-button {\n  display: none;\n  -webkit-appearance: none\n}\n\n.playkit-poster {\n  position: absolute;\n  display: block;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.playkit-subtitles {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n\n", ""]);

// exports


/***/ }),
/* 47 */
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
/* 48 */
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

var	fixUrls = __webpack_require__(49);

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
/* 49 */
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


/***/ })
/******/ ]);
});
//# sourceMappingURL=playkit.js.map