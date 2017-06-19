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

var cov_1cwksiggh8 = function () {
  var path = "/Users/dan.ziv/WebstormProjects/playkit-js/src/track/track.js",
      hash = "6dc46309d967c997a49d2065f6f047fa393af1d5",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/dan.ziv/WebstormProjects/playkit-js/src/track/track.js",
    statementMap: {
      "0": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 20
        }
      },
      "1": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 24
        }
      },
      "2": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 25
        }
      },
      "3": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 23
        }
      },
      "4": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 26
        }
      },
      "5": {
        start: {
          line: 95,
          column: 4
        },
        end: {
          line: 95,
          column: 23
        }
      },
      "6": {
        start: {
          line: 103,
          column: 4
        },
        end: {
          line: 103,
          column: 27
        }
      },
      "7": {
        start: {
          line: 104,
          column: 4
        },
        end: {
          line: 104,
          column: 35
        }
      },
      "8": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 33
        }
      },
      "9": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 106,
          column: 39
        }
      },
      "10": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 49,
            column: 3
          }
        },
        loc: {
          start: {
            line: 49,
            column: 20
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 49
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        loc: {
          start: {
            line: 58,
            column: 24
          },
          end: {
            line: 60,
            column: 3
          }
        },
        line: 58
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 67,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        },
        loc: {
          start: {
            line: 67,
            column: 29
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 67
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 76,
            column: 3
          }
        },
        loc: {
          start: {
            line: 76,
            column: 22
          },
          end: {
            line: 78,
            column: 3
          }
        },
        line: 76
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 85,
            column: 2
          },
          end: {
            line: 85,
            column: 3
          }
        },
        loc: {
          start: {
            line: 85,
            column: 25
          },
          end: {
            line: 87,
            column: 3
          }
        },
        line: 85
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 94,
            column: 2
          },
          end: {
            line: 94,
            column: 3
          }
        },
        loc: {
          start: {
            line: 94,
            column: 22
          },
          end: {
            line: 96,
            column: 3
          }
        },
        line: 94
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 102,
            column: 2
          },
          end: {
            line: 102,
            column: 3
          }
        },
        loc: {
          start: {
            line: 102,
            column: 37
          },
          end: {
            line: 108,
            column: 3
          }
        },
        line: 102
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 102,
            column: 14
          },
          end: {
            line: 102,
            column: 35
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 102,
            column: 33
          },
          end: {
            line: 102,
            column: 35
          }
        }],
        line: 102
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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
      ++cov_1cwksiggh8.f[0];
      ++cov_1cwksiggh8.s[0];

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
      ++cov_1cwksiggh8.f[1];
      ++cov_1cwksiggh8.s[1];

      return this._active;
    }

    /**
     * Setter for the active mode of the track.
     * @public
     * @param {boolean} value - Whether the track is active or not.
     */
    ,
    set: function set(value) {
      ++cov_1cwksiggh8.f[2];
      ++cov_1cwksiggh8.s[2];

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
      ++cov_1cwksiggh8.f[3];
      ++cov_1cwksiggh8.s[3];

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
      ++cov_1cwksiggh8.f[4];
      ++cov_1cwksiggh8.s[4];

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
      ++cov_1cwksiggh8.f[5];
      ++cov_1cwksiggh8.s[5];

      return this._index;
    }

    /**
     * @constructor
     * @param {Object} settings - The track settings object.
     */

  }]);

  function Track() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (++cov_1cwksiggh8.b[0][0], {});

    _classCallCheck(this, Track);

    ++cov_1cwksiggh8.f[6];
    ++cov_1cwksiggh8.s[6];

    this._id = settings.id;
    ++cov_1cwksiggh8.s[7];
    this._active = settings.active;
    ++cov_1cwksiggh8.s[8];
    this._label = settings.label;
    ++cov_1cwksiggh8.s[9];
    this._language = settings.language;
    ++cov_1cwksiggh8.s[10];
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

var cov_1wsa0jyoh5 = function () {
  var path = "/Users/dan.ziv/WebstormProjects/playkit-js/src/utils/logger.js",
      hash = "745a4e8c13b0a5a71e29c84209897bddfd5a3c13",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/dan.ziv/WebstormProjects/playkit-js/src/utils/logger.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 47
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 40
        }
      },
      "2": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "3": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 22
        }
      },
      "4": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 30
        }
      },
      "5": {
        start: {
          line: 26,
          column: 11
        },
        end: {
          line: 26,
          column: 60
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 32
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 27
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 18
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 25
          },
          end: {
            line: 15,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 15,
            column: 25
          },
          end: {
            line: 15,
            column: 32
          }
        }, {
          start: {
            line: 15,
            column: 36
          },
          end: {
            line: 15,
            column: 38
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        }, {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        }],
        line: 19
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsLogger = __webpack_require__(25);

var JsLogger = _interopRequireWildcard(_jsLogger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LOG_LEVEL = (++cov_1wsa0jyoh5.s[0], {
  "DEBUG": JsLogger.DEBUG,
  "INFO": JsLogger.INFO,
  "TIME": JsLogger.TIME,
  "WARN": JsLogger.WARN,
  "ERROR": JsLogger.ERROR,
  "OFF": JsLogger.OFF
});

var LoggerFactory = function () {
  function LoggerFactory(options) {
    _classCallCheck(this, LoggerFactory);

    ++cov_1wsa0jyoh5.f[0];
    ++cov_1wsa0jyoh5.s[1];

    JsLogger.useDefaults((++cov_1wsa0jyoh5.b[0][0], options) || (++cov_1wsa0jyoh5.b[0][1], {}));
  }

  _createClass(LoggerFactory, [{
    key: "getLogger",
    value: function getLogger(name) {
      ++cov_1wsa0jyoh5.f[1];
      ++cov_1wsa0jyoh5.s[2];

      if (!name) {
        ++cov_1wsa0jyoh5.b[1][0];
        ++cov_1wsa0jyoh5.s[3];

        return JsLogger;
      } else {
        ++cov_1wsa0jyoh5.b[1][1];
      }
      ++cov_1wsa0jyoh5.s[4];
      return JsLogger.get(name);
    }
  }]);

  return LoggerFactory;
}();

var lf = (++cov_1wsa0jyoh5.s[5], new LoggerFactory({ defaultLevel: JsLogger.DEBUG }));

exports.default = lf;
exports.LOG_LEVEL = LOG_LEVEL;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1za3vvb0b6 = function () {
  var path = "/Users/dan.ziv/WebstormProjects/playkit-js/src/event/fake-event.js",
      hash = "90642d66c4e95ff117bad138330fe141e881dbb0",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/dan.ziv/WebstormProjects/playkit-js/src/event/fake-event.js",
    statementMap: {
      "0": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 54,
          column: 25
        }
      },
      "1": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 28
        }
      },
      "2": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 34
        }
      },
      "3": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 80
        }
      },
      "4": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 21
        }
      },
      "5": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 27
        }
      },
      "6": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 30
        }
      },
      "7": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 23
        }
      },
      "8": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 25
        }
      },
      "9": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 27
        }
      },
      "10": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 49,
            column: 3
          }
        },
        loc: {
          start: {
            line: 49,
            column: 42
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 49
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 98,
            column: 2
          },
          end: {
            line: 98,
            column: 3
          }
        },
        loc: {
          start: {
            line: 98,
            column: 19
          },
          end: {
            line: 99,
            column: 3
          }
        },
        line: 98
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 106,
            column: 2
          },
          end: {
            line: 106,
            column: 3
          }
        },
        loc: {
          start: {
            line: 106,
            column: 29
          },
          end: {
            line: 108,
            column: 3
          }
        },
        line: 106
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 115,
            column: 2
          },
          end: {
            line: 115,
            column: 3
          }
        },
        loc: {
          start: {
            line: 115,
            column: 20
          },
          end: {
            line: 116,
            column: 3
          }
        },
        line: 115
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 69,
            column: 21
          },
          end: {
            line: 69,
            column: 79
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 69,
            column: 42
          },
          end: {
            line: 69,
            column: 66
          }
        }, {
          start: {
            line: 69,
            column: 69
          },
          end: {
            line: 69,
            column: 79
          }
        }],
        line: 69
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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

    ++cov_1za3vvb0b6.f[0];
    ++cov_1za3vvb0b6.s[0];

    // These Properties below cannot be set by dict.  They are all provided for
    // compatibility with native events.

    /** @const {boolean} */
    this.bubbles = false;

    /** @const {boolean} */
    ++cov_1za3vvb0b6.s[1];
    this.cancelable = false;

    /** @const {boolean} */
    ++cov_1za3vvb0b6.s[2];
    this.defaultPrevented = false;

    /**
     * According to MDN, Chrome uses high-res timers instead of epoch time.
     * Follow suit so that timeStamps on FakeEvents use the same base as
     * on native Events.
     * @const {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp
     */
    ++cov_1za3vvb0b6.s[3];
    this.timeStamp = window.performance ? (++cov_1za3vvb0b6.b[0][0], window.performance.now()) : (++cov_1za3vvb0b6.b[0][1], Date.now());

    /** @const {string} */
    ++cov_1za3vvb0b6.s[4];
    this.type = type;

    /** @const {boolean} */
    ++cov_1za3vvb0b6.s[5];
    this.isTrusted = false;

    /** @type {EventTarget} */
    ++cov_1za3vvb0b6.s[6];
    this.currentTarget = null;

    /** @type {EventTarget} */
    ++cov_1za3vvb0b6.s[7];
    this.target = null;

    /**
     * Non-standard property read by FakeEventTarget to stop processing listeners.
     * @type {boolean}
     */
    ++cov_1za3vvb0b6.s[8];
    this.stopped = false;

    ++cov_1za3vvb0b6.s[9];
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
    value: function preventDefault() {
      ++cov_1za3vvb0b6.f[1];
    }

    /**
     * Stops processing event listeners for this event.  Provided for compatibility
     * with native Events.
     * @override
     */

  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      ++cov_1za3vvb0b6.f[2];
      ++cov_1za3vvb0b6.s[10];

      this.stopped = true;
    }

    /**
     * Does nothing, since FakeEvents do not bubble.  Provided for compatibility
     * with native Events.
     * @override
     */

  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      ++cov_1za3vvb0b6.f[3];
    }
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

var cov_1u2dfg434a = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/track/audio-track.js',
      hash = 'cb94d9c60e0745536a2f23d3c520691d5a021a9d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/track/audio-track.js',
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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

var cov_bifclksei = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/track/text-track.js',
      hash = 'a7e1c9292cee70801bb96c9ab3bae6098bbb8269',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/track/text-track.js',
    statementMap: {
      '0': {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 22
        }
      },
      '1': {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 20
        }
      },
      '2': {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 31
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 21
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 23
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        loc: {
          start: {
            line: 31,
            column: 37
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 31
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 31,
            column: 14
          },
          end: {
            line: 31,
            column: 35
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 31,
            column: 33
          },
          end: {
            line: 31,
            column: 35
          }
        }],
        line: 31
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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
      ++cov_bifclksei.f[0];
      ++cov_bifclksei.s[0];

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
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (++cov_bifclksei.b[0][0], {});

    _classCallCheck(this, TextTrack);

    ++cov_bifclksei.f[1];
    ++cov_bifclksei.s[1];

    var _this = _possibleConstructorReturn(this, (TextTrack.__proto__ || Object.getPrototypeOf(TextTrack)).call(this, settings));

    ++cov_bifclksei.s[2];

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

var cov_1rlnzx43jq = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/track/video-track.js',
      hash = '3141e08af88d354f73d1271474e9ae5be991bb6a',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/track/video-track.js',
    statementMap: {
      '0': {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 27
        }
      },
      '1': {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 20
        }
      },
      '2': {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 41
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 26
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 23
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        loc: {
          start: {
            line: 31,
            column: 37
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 31
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 31,
            column: 14
          },
          end: {
            line: 31,
            column: 35
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 31,
            column: 33
          },
          end: {
            line: 31,
            column: 35
          }
        }],
        line: 31
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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
      ++cov_1rlnzx43jq.f[0];
      ++cov_1rlnzx43jq.s[0];

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
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (++cov_1rlnzx43jq.b[0][0], {});

    _classCallCheck(this, VideoTrack);

    ++cov_1rlnzx43jq.f[1];
    ++cov_1rlnzx43jq.s[1];

    var _this = _possibleConstructorReturn(this, (VideoTrack.__proto__ || Object.getPrototypeOf(VideoTrack)).call(this, settings));

    ++cov_1rlnzx43jq.s[2];

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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1sq2747ikp = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/event/event-manager.js',
      hash = '7e867cecd4773fdf3dac54a2fa1cf8bc73b3ec6b',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/event/event-manager.js',
    statementMap: {
      '0': {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 38
        }
      },
      '1': {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 21
        }
      },
      '2': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 28
        }
      },
      '3': {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 29
        }
      },
      '4': {
        start: {
          line: 43,
          column: 18
        },
        end: {
          line: 43,
          column: 54
        }
      },
      '5': {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 46,
          column: 5
        }
      },
      '6': {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 45,
          column: 43
        }
      },
      '7': {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 70,
          column: 5
        }
      },
      '8': {
        start: {
          line: 58,
          column: 17
        },
        end: {
          line: 58,
          column: 43
        }
      },
      '9': {
        start: {
          line: 60,
          column: 6
        },
        end: {
          line: 69,
          column: 7
        }
      },
      '10': {
        start: {
          line: 61,
          column: 22
        },
        end: {
          line: 61,
          column: 29
        }
      },
      '11': {
        start: {
          line: 63,
          column: 8
        },
        end: {
          line: 68,
          column: 9
        }
      },
      '12': {
        start: {
          line: 64,
          column: 10
        },
        end: {
          line: 64,
          column: 29
        }
      },
      '13': {
        start: {
          line: 65,
          column: 10
        },
        end: {
          line: 67,
          column: 11
        }
      },
      '14': {
        start: {
          line: 66,
          column: 12
        },
        end: {
          line: 66,
          column: 51
        }
      },
      '15': {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 87,
          column: 5
        }
      },
      '16': {
        start: {
          line: 79,
          column: 22
        },
        end: {
          line: 79,
          column: 47
        }
      },
      '17': {
        start: {
          line: 81,
          column: 6
        },
        end: {
          line: 83,
          column: 7
        }
      },
      '18': {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 82,
          column: 28
        }
      },
      '19': {
        start: {
          line: 84,
          column: 6
        },
        end: {
          line: 86,
          column: 7
        }
      },
      '20': {
        start: {
          line: 85,
          column: 8
        },
        end: {
          line: 85,
          column: 33
        }
      },
      '21': {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 111,
          column: 25
        }
      },
      '22': {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 114,
          column: 21
        }
      },
      '23': {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 117,
          column: 29
        }
      },
      '24': {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 119,
          column: 56
        }
      },
      '25': {
        start: {
          line: 129,
          column: 4
        },
        end: {
          line: 130,
          column: 13
        }
      },
      '26': {
        start: {
          line: 130,
          column: 6
        },
        end: {
          line: 130,
          column: 13
        }
      },
      '27': {
        start: {
          line: 132,
          column: 4
        },
        end: {
          line: 132,
          column: 69
        }
      },
      '28': {
        start: {
          line: 134,
          column: 4
        },
        end: {
          line: 134,
          column: 23
        }
      },
      '29': {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 135,
          column: 25
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 16
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        loc: {
          start: {
            line: 28,
            column: 12
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 28
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        },
        loc: {
          start: {
            line: 42,
            column: 66
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 42
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 56,
            column: 3
          }
        },
        loc: {
          start: {
            line: 56,
            column: 44
          },
          end: {
            line: 71,
            column: 3
          }
        },
        line: 56
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        loc: {
          start: {
            line: 77,
            column: 20
          },
          end: {
            line: 88,
            column: 3
          }
        },
        line: 77
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 109,
            column: 2
          },
          end: {
            line: 109,
            column: 3
          }
        },
        loc: {
          start: {
            line: 109,
            column: 38
          },
          end: {
            line: 120,
            column: 3
          }
        },
        line: 109
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 128,
            column: 2
          },
          end: {
            line: 128,
            column: 3
          }
        },
        loc: {
          start: {
            line: 128,
            column: 19
          },
          end: {
            line: 136,
            column: 3
          }
        },
        line: 128
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        }, {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        }],
        line: 44
      },
      '1': {
        loc: {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        }, {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        }],
        line: 57
      },
      '2': {
        loc: {
          start: {
            line: 63,
            column: 8
          },
          end: {
            line: 68,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 63,
            column: 8
          },
          end: {
            line: 68,
            column: 9
          }
        }, {
          start: {
            line: 63,
            column: 8
          },
          end: {
            line: 68,
            column: 9
          }
        }],
        line: 63
      },
      '3': {
        loc: {
          start: {
            line: 65,
            column: 10
          },
          end: {
            line: 67,
            column: 11
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 65,
            column: 10
          },
          end: {
            line: 67,
            column: 11
          }
        }, {
          start: {
            line: 65,
            column: 10
          },
          end: {
            line: 67,
            column: 11
          }
        }],
        line: 65
      },
      '4': {
        loc: {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        }, {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        }],
        line: 78
      },
      '5': {
        loc: {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        }, {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        }],
        line: 84
      },
      '6': {
        loc: {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 130,
            column: 13
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 130,
            column: 13
          }
        }, {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 130,
            column: 13
          }
        }],
        line: 129
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0,
      '28': 0,
      '29': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0],
      '6': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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

    ++cov_1sq2747ikp.f[0];
    ++cov_1sq2747ikp.s[0];

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
      ++cov_1sq2747ikp.f[1];
      ++cov_1sq2747ikp.s[1];

      this.removeAll();
      ++cov_1sq2747ikp.s[2];
      this._bindingMap = null;
      ++cov_1sq2747ikp.s[3];
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
      ++cov_1sq2747ikp.f[2];

      var binding = (++cov_1sq2747ikp.s[4], new Binding_(target, type, listener));
      ++cov_1sq2747ikp.s[5];
      if (this._bindingMap) {
        ++cov_1sq2747ikp.b[0][0];
        ++cov_1sq2747ikp.s[6];

        this._bindingMap.push(type, binding);
      } else {
        ++cov_1sq2747ikp.b[0][1];
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
      ++cov_1sq2747ikp.f[3];
      ++cov_1sq2747ikp.s[7];

      if (this._bindingMap) {
        ++cov_1sq2747ikp.b[1][0];

        var list = (++cov_1sq2747ikp.s[8], this._bindingMap.get(type));

        ++cov_1sq2747ikp.s[9];
        for (var i = 0; i < list.length; ++i) {
          var binding = (++cov_1sq2747ikp.s[10], list[i]);

          ++cov_1sq2747ikp.s[11];
          if (binding.target == target) {
            ++cov_1sq2747ikp.b[2][0];
            ++cov_1sq2747ikp.s[12];

            binding.unlisten();
            ++cov_1sq2747ikp.s[13];
            if (this._bindingMap) {
              ++cov_1sq2747ikp.b[3][0];
              ++cov_1sq2747ikp.s[14];

              this._bindingMap.remove(type, binding);
            } else {
              ++cov_1sq2747ikp.b[3][1];
            }
          } else {
            ++cov_1sq2747ikp.b[2][1];
          }
        }
      } else {
        ++cov_1sq2747ikp.b[1][1];
      }
    }

    /**
     * Detaches all event listeners from all targets.
     * @returns {void}
     */

  }, {
    key: 'removeAll',
    value: function removeAll() {
      ++cov_1sq2747ikp.f[4];
      ++cov_1sq2747ikp.s[15];

      if (this._bindingMap) {
        ++cov_1sq2747ikp.b[4][0];

        var listeners = (++cov_1sq2747ikp.s[16], this._bindingMap.getAll());

        ++cov_1sq2747ikp.s[17];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var listener = _step.value;
            ++cov_1sq2747ikp.s[18];

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

        ++cov_1sq2747ikp.s[19];
        if (this._bindingMap) {
          ++cov_1sq2747ikp.b[5][0];
          ++cov_1sq2747ikp.s[20];

          this._bindingMap.clear();
        } else {
          ++cov_1sq2747ikp.b[5][1];
        }
      } else {
        ++cov_1sq2747ikp.b[4][1];
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

    ++cov_1sq2747ikp.f[5];
    ++cov_1sq2747ikp.s[21];

    /** @type {EventTarget} */
    this.target = target;

    /** @type {string} */
    ++cov_1sq2747ikp.s[22];
    this.type = type;

    /** @type {?EventManager.ListenerType} */
    ++cov_1sq2747ikp.s[23];
    this.listener = listener;

    ++cov_1sq2747ikp.s[24];
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
      ++cov_1sq2747ikp.f[6];
      ++cov_1sq2747ikp.s[25];

      if (!this.target) {
          ++cov_1sq2747ikp.b[6][0];
          ++cov_1sq2747ikp.s[26];

          return;
        } else {
        ++cov_1sq2747ikp.b[6][1];
      }++cov_1sq2747ikp.s[27];
      this.target.removeEventListener(this.type, this.listener, false);

      ++cov_1sq2747ikp.s[28];
      this.target = null;
      ++cov_1sq2747ikp.s[29];
      this.listener = null;
    }
  }]);

  return Binding_;
}();

exports.default = EventManager;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CUSTOM_EVENTS = exports.HTML5_EVENTS = exports.PLAYER_EVENTS = undefined;

var cov_8bz2gle5l = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/event/events.js',
      hash = 'f701d63cb929e8fc2ca1075fb31ebc4add21e170',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/event/events.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 50
        },
        end: {
          line: 93,
          column: 1
        }
      },
      '1': {
        start: {
          line: 95,
          column: 51
        },
        end: {
          line: 116,
          column: 1
        }
      },
      '2': {
        start: {
          line: 118,
          column: 51
        },
        end: {
          line: 118,
          column: 87
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _util = __webpack_require__(11);

var HTML5_EVENTS = (++cov_8bz2gle5l.s[0], {
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
});

var CUSTOM_EVENTS = (++cov_8bz2gle5l.s[1], {
  /**
   * Fires when the video track has been changed
   */
  VIDEO_TRACK_CHANGED: 'videotrackchanged',
  /**
   * Fires when the audio track has been changed
   */
  AUDIO_TRACK_CHANGED: 'audiotrackchanged',
  /**
   * Fires when the text track has been changed
   */
  TEXT_TRACK_CHANGED: 'texttrackchanged',
  /**
   * Fires when the player state has been changed
   */
  PLAYER_STATE_CHANGED: 'playerstatechanged',
  /**
   * Fires on the first play
   */
  FIRST_PLAY: 'firstplay'
});

var PLAYER_EVENTS = (++cov_8bz2gle5l.s[2], (0, _util.merge)([HTML5_EVENTS, CUSTOM_EVENTS]));

exports.PLAYER_EVENTS = PLAYER_EVENTS;
exports.HTML5_EVENTS = HTML5_EVENTS;
exports.CUSTOM_EVENTS = CUSTOM_EVENTS;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_4x54fj3w8 = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/player.js',
      hash = '0ad8c0307a8bbdac1ca2ff33dc35175f0829d22d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/player.js',
    statementMap: {
      '0': {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 12
        }
      },
      '1': {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 22
        }
      },
      '2': {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 79,
          column: 27
        }
      },
      '3': {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 53
        }
      },
      '4': {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 48
        }
      },
      '5': {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 46
        }
      },
      '6': {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 44
        }
      },
      '7': {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 84,
          column: 27
        }
      },
      '8': {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 93,
          column: 76
        }
      },
      '9': {
        start: {
          line: 94,
          column: 4
        },
        end: {
          line: 94,
          column: 36
        }
      },
      '10': {
        start: {
          line: 95,
          column: 4
        },
        end: {
          line: 95,
          column: 37
        }
      },
      '11': {
        start: {
          line: 96,
          column: 4
        },
        end: {
          line: 96,
          column: 24
        }
      },
      '12': {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 27
        }
      },
      '13': {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 106,
          column: 33
        }
      },
      '14': {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 34
        }
      },
      '15': {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 108,
          column: 33
        }
      },
      '16': {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 109,
          column: 22
        }
      },
      '17': {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 22
        }
      },
      '18': {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 111,
          column: 27
        }
      },
      '19': {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 120,
          column: 14
        }
      },
      '20': {
        start: {
          line: 130,
          column: 18
        },
        end: {
          line: 130,
          column: 32
        }
      },
      '21': {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 133,
          column: 5
        }
      },
      '22': {
        start: {
          line: 132,
          column: 6
        },
        end: {
          line: 132,
          column: 58
        }
      },
      '23': {
        start: {
          line: 143,
          column: 4
        },
        end: {
          line: 151,
          column: 5
        }
      },
      '24': {
        start: {
          line: 144,
          column: 20
        },
        end: {
          line: 144,
          column: 34
        }
      },
      '25': {
        start: {
          line: 145,
          column: 6
        },
        end: {
          line: 150,
          column: 7
        }
      },
      '26': {
        start: {
          line: 146,
          column: 8
        },
        end: {
          line: 149,
          column: 9
        }
      },
      '27': {
        start: {
          line: 147,
          column: 10
        },
        end: {
          line: 147,
          column: 47
        }
      },
      '28': {
        start: {
          line: 148,
          column: 10
        },
        end: {
          line: 148,
          column: 16
        }
      },
      '29': {
        start: {
          line: 162,
          column: 4
        },
        end: {
          line: 162,
          column: 45
        }
      },
      '30': {
        start: {
          line: 163,
          column: 4
        },
        end: {
          line: 165,
          column: 5
        }
      },
      '31': {
        start: {
          line: 164,
          column: 6
        },
        end: {
          line: 164,
          column: 18
        }
      },
      '32': {
        start: {
          line: 174,
          column: 4
        },
        end: {
          line: 193,
          column: 5
        }
      },
      '33': {
        start: {
          line: 175,
          column: 6
        },
        end: {
          line: 179,
          column: 7
        }
      },
      '34': {
        start: {
          line: 176,
          column: 8
        },
        end: {
          line: 178,
          column: 11
        }
      },
      '35': {
        start: {
          line: 177,
          column: 10
        },
        end: {
          line: 177,
          column: 43
        }
      },
      '36': {
        start: {
          line: 180,
          column: 6
        },
        end: {
          line: 183,
          column: 9
        }
      },
      '37': {
        start: {
          line: 181,
          column: 8
        },
        end: {
          line: 181,
          column: 64
        }
      },
      '38': {
        start: {
          line: 182,
          column: 8
        },
        end: {
          line: 182,
          column: 41
        }
      },
      '39': {
        start: {
          line: 184,
          column: 6
        },
        end: {
          line: 187,
          column: 9
        }
      },
      '40': {
        start: {
          line: 185,
          column: 8
        },
        end: {
          line: 185,
          column: 64
        }
      },
      '41': {
        start: {
          line: 186,
          column: 8
        },
        end: {
          line: 186,
          column: 41
        }
      },
      '42': {
        start: {
          line: 188,
          column: 6
        },
        end: {
          line: 191,
          column: 9
        }
      },
      '43': {
        start: {
          line: 189,
          column: 8
        },
        end: {
          line: 189,
          column: 63
        }
      },
      '44': {
        start: {
          line: 190,
          column: 8
        },
        end: {
          line: 190,
          column: 41
        }
      },
      '45': {
        start: {
          line: 192,
          column: 6
        },
        end: {
          line: 192,
          column: 81
        }
      },
      '46': {
        start: {
          line: 204,
          column: 4
        },
        end: {
          line: 204,
          column: 39
        }
      },
      '47': {
        start: {
          line: 215,
          column: 4
        },
        end: {
          line: 225,
          column: 7
        }
      },
      '48': {
        start: {
          line: 216,
          column: 6
        },
        end: {
          line: 224,
          column: 7
        }
      },
      '49': {
        start: {
          line: 217,
          column: 8
        },
        end: {
          line: 217,
          column: 43
        }
      },
      '50': {
        start: {
          line: 218,
          column: 13
        },
        end: {
          line: 224,
          column: 7
        }
      },
      '51': {
        start: {
          line: 219,
          column: 8
        },
        end: {
          line: 219,
          column: 43
        }
      },
      '52': {
        start: {
          line: 220,
          column: 13
        },
        end: {
          line: 224,
          column: 7
        }
      },
      '53': {
        start: {
          line: 221,
          column: 8
        },
        end: {
          line: 221,
          column: 42
        }
      },
      '54': {
        start: {
          line: 223,
          column: 8
        },
        end: {
          line: 223,
          column: 20
        }
      },
      '55': {
        start: {
          line: 236,
          column: 4
        },
        end: {
          line: 244,
          column: 5
        }
      },
      '56': {
        start: {
          line: 237,
          column: 6
        },
        end: {
          line: 243,
          column: 7
        }
      },
      '57': {
        start: {
          line: 238,
          column: 8
        },
        end: {
          line: 238,
          column: 45
        }
      },
      '58': {
        start: {
          line: 239,
          column: 13
        },
        end: {
          line: 243,
          column: 7
        }
      },
      '59': {
        start: {
          line: 240,
          column: 8
        },
        end: {
          line: 240,
          column: 45
        }
      },
      '60': {
        start: {
          line: 241,
          column: 13
        },
        end: {
          line: 243,
          column: 7
        }
      },
      '61': {
        start: {
          line: 242,
          column: 8
        },
        end: {
          line: 242,
          column: 44
        }
      },
      '62': {
        start: {
          line: 254,
          column: 4
        },
        end: {
          line: 256,
          column: 5
        }
      },
      '63': {
        start: {
          line: 255,
          column: 6
        },
        end: {
          line: 255,
          column: 43
        }
      },
      '64': {
        start: {
          line: 268,
          column: 4
        },
        end: {
          line: 274,
          column: 5
        }
      },
      '65': {
        start: {
          line: 269,
          column: 6
        },
        end: {
          line: 269,
          column: 30
        }
      },
      '66': {
        start: {
          line: 270,
          column: 11
        },
        end: {
          line: 274,
          column: 5
        }
      },
      '67': {
        start: {
          line: 271,
          column: 6
        },
        end: {
          line: 271,
          column: 30
        }
      },
      '68': {
        start: {
          line: 272,
          column: 11
        },
        end: {
          line: 274,
          column: 5
        }
      },
      '69': {
        start: {
          line: 273,
          column: 6
        },
        end: {
          line: 273,
          column: 29
        }
      },
      '70': {
        start: {
          line: 275,
          column: 4
        },
        end: {
          line: 280,
          column: 5
        }
      },
      '71': {
        start: {
          line: 276,
          column: 19
        },
        end: {
          line: 276,
          column: 39
        }
      },
      '72': {
        start: {
          line: 277,
          column: 6
        },
        end: {
          line: 279,
          column: 7
        }
      },
      '73': {
        start: {
          line: 278,
          column: 8
        },
        end: {
          line: 278,
          column: 45
        }
      },
      '74': {
        start: {
          line: 289,
          column: 4
        },
        end: {
          line: 292,
          column: 5
        }
      },
      '75': {
        start: {
          line: 290,
          column: 6
        },
        end: {
          line: 290,
          column: 30
        }
      },
      '76': {
        start: {
          line: 291,
          column: 6
        },
        end: {
          line: 291,
          column: 65
        }
      },
      '77': {
        start: {
          line: 301,
          column: 4
        },
        end: {
          line: 301,
          column: 24
        }
      },
      '78': {
        start: {
          line: 311,
          column: 4
        },
        end: {
          line: 319,
          column: 5
        }
      },
      '79': {
        start: {
          line: 312,
          column: 6
        },
        end: {
          line: 318,
          column: 7
        }
      },
      '80': {
        start: {
          line: 313,
          column: 8
        },
        end: {
          line: 313,
          column: 28
        }
      },
      '81': {
        start: {
          line: 315,
          column: 8
        },
        end: {
          line: 317,
          column: 11
        }
      },
      '82': {
        start: {
          line: 316,
          column: 10
        },
        end: {
          line: 316,
          column: 30
        }
      },
      '83': {
        start: {
          line: 328,
          column: 4
        },
        end: {
          line: 330,
          column: 5
        }
      },
      '84': {
        start: {
          line: 329,
          column: 6
        },
        end: {
          line: 329,
          column: 34
        }
      },
      '85': {
        start: {
          line: 339,
          column: 4
        },
        end: {
          line: 345,
          column: 5
        }
      },
      '86': {
        start: {
          line: 340,
          column: 6
        },
        end: {
          line: 342,
          column: 9
        }
      },
      '87': {
        start: {
          line: 341,
          column: 8
        },
        end: {
          line: 341,
          column: 35
        }
      },
      '88': {
        start: {
          line: 344,
          column: 6
        },
        end: {
          line: 344,
          column: 31
        }
      },
      '89': {
        start: {
          line: 354,
          column: 4
        },
        end: {
          line: 365,
          column: 5
        }
      },
      '90': {
        start: {
          line: 355,
          column: 6
        },
        end: {
          line: 364,
          column: 7
        }
      },
      '91': {
        start: {
          line: 356,
          column: 24
        },
        end: {
          line: 356,
          column: 26
        }
      },
      '92': {
        start: {
          line: 357,
          column: 8
        },
        end: {
          line: 359,
          column: 9
        }
      },
      '93': {
        start: {
          line: 358,
          column: 10
        },
        end: {
          line: 358,
          column: 24
        }
      },
      '94': {
        start: {
          line: 360,
          column: 8
        },
        end: {
          line: 362,
          column: 9
        }
      },
      '95': {
        start: {
          line: 361,
          column: 10
        },
        end: {
          line: 361,
          column: 44
        }
      },
      '96': {
        start: {
          line: 363,
          column: 8
        },
        end: {
          line: 363,
          column: 45
        }
      },
      '97': {
        start: {
          line: 374,
          column: 4
        },
        end: {
          line: 376,
          column: 5
        }
      },
      '98': {
        start: {
          line: 375,
          column: 6
        },
        end: {
          line: 375,
          column: 38
        }
      },
      '99': {
        start: {
          line: 385,
          column: 4
        },
        end: {
          line: 387,
          column: 5
        }
      },
      '100': {
        start: {
          line: 386,
          column: 6
        },
        end: {
          line: 386,
          column: 35
        }
      },
      '101': {
        start: {
          line: 397,
          column: 4
        },
        end: {
          line: 408,
          column: 5
        }
      },
      '102': {
        start: {
          line: 398,
          column: 6
        },
        end: {
          line: 407,
          column: 7
        }
      },
      '103': {
        start: {
          line: 399,
          column: 25
        },
        end: {
          line: 399,
          column: 28
        }
      },
      '104': {
        start: {
          line: 400,
          column: 8
        },
        end: {
          line: 402,
          column: 9
        }
      },
      '105': {
        start: {
          line: 401,
          column: 10
        },
        end: {
          line: 401,
          column: 25
        }
      },
      '106': {
        start: {
          line: 403,
          column: 8
        },
        end: {
          line: 405,
          column: 9
        }
      },
      '107': {
        start: {
          line: 404,
          column: 10
        },
        end: {
          line: 404,
          column: 25
        }
      },
      '108': {
        start: {
          line: 406,
          column: 8
        },
        end: {
          line: 406,
          column: 41
        }
      },
      '109': {
        start: {
          line: 417,
          column: 4
        },
        end: {
          line: 419,
          column: 5
        }
      },
      '110': {
        start: {
          line: 418,
          column: 6
        },
        end: {
          line: 418,
          column: 33
        }
      },
      '111': {
        start: {
          line: 434,
          column: 4
        },
        end: {
          line: 436,
          column: 5
        }
      },
      '112': {
        start: {
          line: 435,
          column: 6
        },
        end: {
          line: 435,
          column: 33
        }
      },
      '113': {
        start: {
          line: 445,
          column: 4
        },
        end: {
          line: 447,
          column: 5
        }
      },
      '114': {
        start: {
          line: 446,
          column: 6
        },
        end: {
          line: 446,
          column: 34
        }
      },
      '115': {
        start: {
          line: 460,
          column: 4
        },
        end: {
          line: 462,
          column: 5
        }
      },
      '116': {
        start: {
          line: 461,
          column: 6
        },
        end: {
          line: 461,
          column: 32
        }
      },
      '117': {
        start: {
          line: 471,
          column: 4
        },
        end: {
          line: 473,
          column: 5
        }
      },
      '118': {
        start: {
          line: 472,
          column: 6
        },
        end: {
          line: 472,
          column: 32
        }
      },
      '119': {
        start: {
          line: 482,
          column: 4
        },
        end: {
          line: 484,
          column: 5
        }
      },
      '120': {
        start: {
          line: 483,
          column: 6
        },
        end: {
          line: 483,
          column: 30
        }
      },
      '121': {
        start: {
          line: 493,
          column: 4
        },
        end: {
          line: 493,
          column: 24
        }
      },
      '122': {
        start: {
          line: 502,
          column: 4
        },
        end: {
          line: 502,
          column: 24
        }
      },
      '123': {
        start: {
          line: 511,
          column: 4
        },
        end: {
          line: 511,
          column: 22
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 76,
            column: 3
          }
        },
        loc: {
          start: {
            line: 76,
            column: 30
          },
          end: {
            line: 85,
            column: 3
          }
        },
        line: 76
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 92,
            column: 2
          },
          end: {
            line: 92,
            column: 3
          }
        },
        loc: {
          start: {
            line: 92,
            column: 34
          },
          end: {
            line: 97,
            column: 3
          }
        },
        line: 92
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 104,
            column: 3
          }
        },
        loc: {
          start: {
            line: 104,
            column: 18
          },
          end: {
            line: 112,
            column: 3
          }
        },
        line: 104
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 119,
            column: 2
          },
          end: {
            line: 119,
            column: 3
          }
        },
        loc: {
          start: {
            line: 119,
            column: 34
          },
          end: {
            line: 121,
            column: 3
          }
        },
        line: 119
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 129,
            column: 2
          },
          end: {
            line: 129,
            column: 3
          }
        },
        loc: {
          start: {
            line: 129,
            column: 37
          },
          end: {
            line: 134,
            column: 3
          }
        },
        line: 129
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 142,
            column: 2
          },
          end: {
            line: 142,
            column: 3
          }
        },
        loc: {
          start: {
            line: 142,
            column: 38
          },
          end: {
            line: 152,
            column: 3
          }
        },
        line: 142
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 161,
            column: 2
          },
          end: {
            line: 161,
            column: 3
          }
        },
        loc: {
          start: {
            line: 161,
            column: 52
          },
          end: {
            line: 166,
            column: 3
          }
        },
        line: 161
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 173,
            column: 2
          },
          end: {
            line: 173,
            column: 3
          }
        },
        loc: {
          start: {
            line: 173,
            column: 23
          },
          end: {
            line: 194,
            column: 3
          }
        },
        line: 173
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 176,
            column: 74
          },
          end: {
            line: 176,
            column: 75
          }
        },
        loc: {
          start: {
            line: 176,
            column: 96
          },
          end: {
            line: 178,
            column: 9
          }
        },
        line: 176
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 180,
            column: 80
          },
          end: {
            line: 180,
            column: 81
          }
        },
        loc: {
          start: {
            line: 180,
            column: 102
          },
          end: {
            line: 183,
            column: 7
          }
        },
        line: 180
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 184,
            column: 80
          },
          end: {
            line: 184,
            column: 81
          }
        },
        loc: {
          start: {
            line: 184,
            column: 102
          },
          end: {
            line: 187,
            column: 7
          }
        },
        line: 184
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 188,
            column: 79
          },
          end: {
            line: 188,
            column: 80
          }
        },
        loc: {
          start: {
            line: 188,
            column: 101
          },
          end: {
            line: 191,
            column: 7
          }
        },
        line: 188
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 203,
            column: 2
          },
          end: {
            line: 203,
            column: 3
          }
        },
        loc: {
          start: {
            line: 203,
            column: 41
          },
          end: {
            line: 205,
            column: 3
          }
        },
        line: 203
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 214,
            column: 2
          },
          end: {
            line: 214,
            column: 3
          }
        },
        loc: {
          start: {
            line: 214,
            column: 48
          },
          end: {
            line: 226,
            column: 3
          }
        },
        line: 214
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 215,
            column: 54
          },
          end: {
            line: 215,
            column: 55
          }
        },
        loc: {
          start: {
            line: 215,
            column: 72
          },
          end: {
            line: 225,
            column: 5
          }
        },
        line: 215
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 235,
            column: 2
          },
          end: {
            line: 235,
            column: 3
          }
        },
        loc: {
          start: {
            line: 235,
            column: 34
          },
          end: {
            line: 245,
            column: 3
          }
        },
        line: 235
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 253,
            column: 2
          },
          end: {
            line: 253,
            column: 3
          }
        },
        loc: {
          start: {
            line: 253,
            column: 32
          },
          end: {
            line: 257,
            column: 3
          }
        },
        line: 253
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 266,
            column: 2
          },
          end: {
            line: 266,
            column: 3
          }
        },
        loc: {
          start: {
            line: 266,
            column: 33
          },
          end: {
            line: 281,
            column: 3
          }
        },
        line: 266
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 288,
            column: 2
          },
          end: {
            line: 288,
            column: 3
          }
        },
        loc: {
          start: {
            line: 288,
            column: 18
          },
          end: {
            line: 293,
            column: 3
          }
        },
        line: 288
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 300,
            column: 2
          },
          end: {
            line: 300,
            column: 3
          }
        },
        loc: {
          start: {
            line: 300,
            column: 23
          },
          end: {
            line: 302,
            column: 3
          }
        },
        line: 300
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 310,
            column: 2
          },
          end: {
            line: 310,
            column: 3
          }
        },
        loc: {
          start: {
            line: 310,
            column: 15
          },
          end: {
            line: 320,
            column: 3
          }
        },
        line: 310
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 315,
            column: 25
          },
          end: {
            line: 315,
            column: 26
          }
        },
        loc: {
          start: {
            line: 315,
            column: 31
          },
          end: {
            line: 317,
            column: 9
          }
        },
        line: 315
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 327,
            column: 2
          },
          end: {
            line: 327,
            column: 3
          }
        },
        loc: {
          start: {
            line: 327,
            column: 16
          },
          end: {
            line: 331,
            column: 3
          }
        },
        line: 327
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 338,
            column: 2
          },
          end: {
            line: 338,
            column: 3
          }
        },
        loc: {
          start: {
            line: 338,
            column: 21
          },
          end: {
            line: 346,
            column: 3
          }
        },
        line: 338
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 340,
            column: 38
          },
          end: {
            line: 340,
            column: 39
          }
        },
        loc: {
          start: {
            line: 340,
            column: 48
          },
          end: {
            line: 342,
            column: 7
          }
        },
        line: 340
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 353,
            column: 2
          },
          end: {
            line: 353,
            column: 3
          }
        },
        loc: {
          start: {
            line: 353,
            column: 36
          },
          end: {
            line: 366,
            column: 3
          }
        },
        line: 353
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 373,
            column: 2
          },
          end: {
            line: 373,
            column: 3
          }
        },
        loc: {
          start: {
            line: 373,
            column: 29
          },
          end: {
            line: 377,
            column: 3
          }
        },
        line: 373
      },
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 384,
            column: 2
          },
          end: {
            line: 384,
            column: 3
          }
        },
        loc: {
          start: {
            line: 384,
            column: 26
          },
          end: {
            line: 388,
            column: 3
          }
        },
        line: 384
      },
      '28': {
        name: '(anonymous_28)',
        decl: {
          start: {
            line: 396,
            column: 2
          },
          end: {
            line: 396,
            column: 3
          }
        },
        loc: {
          start: {
            line: 396,
            column: 32
          },
          end: {
            line: 409,
            column: 3
          }
        },
        line: 396
      },
      '29': {
        name: '(anonymous_29)',
        decl: {
          start: {
            line: 416,
            column: 2
          },
          end: {
            line: 416,
            column: 3
          }
        },
        loc: {
          start: {
            line: 416,
            column: 24
          },
          end: {
            line: 420,
            column: 3
          }
        },
        line: 416
      },
      '30': {
        name: '(anonymous_30)',
        decl: {
          start: {
            line: 425,
            column: 2
          },
          end: {
            line: 425,
            column: 3
          }
        },
        loc: {
          start: {
            line: 425,
            column: 10
          },
          end: {
            line: 426,
            column: 3
          }
        },
        line: 425
      },
      '31': {
        name: '(anonymous_31)',
        decl: {
          start: {
            line: 433,
            column: 2
          },
          end: {
            line: 433,
            column: 3
          }
        },
        loc: {
          start: {
            line: 433,
            column: 25
          },
          end: {
            line: 437,
            column: 3
          }
        },
        line: 433
      },
      '32': {
        name: '(anonymous_32)',
        decl: {
          start: {
            line: 444,
            column: 2
          },
          end: {
            line: 444,
            column: 3
          }
        },
        loc: {
          start: {
            line: 444,
            column: 26
          },
          end: {
            line: 448,
            column: 3
          }
        },
        line: 444
      },
      '33': {
        name: '(anonymous_33)',
        decl: {
          start: {
            line: 450,
            column: 2
          },
          end: {
            line: 450,
            column: 3
          }
        },
        loc: {
          start: {
            line: 450,
            column: 13
          },
          end: {
            line: 451,
            column: 3
          }
        },
        line: 450
      },
      '34': {
        name: '(anonymous_34)',
        decl: {
          start: {
            line: 459,
            column: 2
          },
          end: {
            line: 459,
            column: 3
          }
        },
        loc: {
          start: {
            line: 459,
            column: 33
          },
          end: {
            line: 463,
            column: 3
          }
        },
        line: 459
      },
      '35': {
        name: '(anonymous_35)',
        decl: {
          start: {
            line: 470,
            column: 2
          },
          end: {
            line: 470,
            column: 3
          }
        },
        loc: {
          start: {
            line: 470,
            column: 24
          },
          end: {
            line: 474,
            column: 3
          }
        },
        line: 470
      },
      '36': {
        name: '(anonymous_36)',
        decl: {
          start: {
            line: 481,
            column: 2
          },
          end: {
            line: 481,
            column: 3
          }
        },
        loc: {
          start: {
            line: 481,
            column: 21
          },
          end: {
            line: 485,
            column: 3
          }
        },
        line: 481
      },
      '37': {
        name: '(anonymous_37)',
        decl: {
          start: {
            line: 492,
            column: 2
          },
          end: {
            line: 492,
            column: 3
          }
        },
        loc: {
          start: {
            line: 492,
            column: 43
          },
          end: {
            line: 494,
            column: 3
          }
        },
        line: 492
      },
      '38': {
        name: '(anonymous_38)',
        decl: {
          start: {
            line: 501,
            column: 2
          },
          end: {
            line: 501,
            column: 3
          }
        },
        loc: {
          start: {
            line: 501,
            column: 43
          },
          end: {
            line: 503,
            column: 3
          }
        },
        line: 501
      },
      '39': {
        name: '(anonymous_39)',
        decl: {
          start: {
            line: 510,
            column: 2
          },
          end: {
            line: 510,
            column: 3
          }
        },
        loc: {
          start: {
            line: 510,
            column: 43
          },
          end: {
            line: 512,
            column: 3
          }
        },
        line: 510
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 93,
            column: 40
          },
          end: {
            line: 93,
            column: 73
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 93,
            column: 40
          },
          end: {
            line: 93,
            column: 46
          }
        }, {
          start: {
            line: 93,
            column: 50
          },
          end: {
            line: 93,
            column: 73
          }
        }],
        line: 93
      },
      '1': {
        loc: {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 151,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 151,
            column: 5
          }
        }, {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 151,
            column: 5
          }
        }],
        line: 143
      },
      '2': {
        loc: {
          start: {
            line: 143,
            column: 8
          },
          end: {
            line: 143,
            column: 32
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 143,
            column: 8
          },
          end: {
            line: 143,
            column: 14
          }
        }, {
          start: {
            line: 143,
            column: 18
          },
          end: {
            line: 143,
            column: 32
          }
        }],
        line: 143
      },
      '3': {
        loc: {
          start: {
            line: 146,
            column: 8
          },
          end: {
            line: 149,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 146,
            column: 8
          },
          end: {
            line: 149,
            column: 9
          }
        }, {
          start: {
            line: 146,
            column: 8
          },
          end: {
            line: 149,
            column: 9
          }
        }],
        line: 146
      },
      '4': {
        loc: {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 165,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 165,
            column: 5
          }
        }, {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 165,
            column: 5
          }
        }],
        line: 163
      },
      '5': {
        loc: {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 193,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 193,
            column: 5
          }
        }, {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 193,
            column: 5
          }
        }],
        line: 174
      },
      '6': {
        loc: {
          start: {
            line: 215,
            column: 11
          },
          end: {
            line: 225,
            column: 6
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 215,
            column: 19
          },
          end: {
            line: 215,
            column: 31
          }
        }, {
          start: {
            line: 215,
            column: 34
          },
          end: {
            line: 225,
            column: 6
          }
        }],
        line: 215
      },
      '7': {
        loc: {
          start: {
            line: 216,
            column: 6
          },
          end: {
            line: 224,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 216,
            column: 6
          },
          end: {
            line: 224,
            column: 7
          }
        }, {
          start: {
            line: 216,
            column: 6
          },
          end: {
            line: 224,
            column: 7
          }
        }],
        line: 216
      },
      '8': {
        loc: {
          start: {
            line: 218,
            column: 13
          },
          end: {
            line: 224,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 218,
            column: 13
          },
          end: {
            line: 224,
            column: 7
          }
        }, {
          start: {
            line: 218,
            column: 13
          },
          end: {
            line: 224,
            column: 7
          }
        }],
        line: 218
      },
      '9': {
        loc: {
          start: {
            line: 220,
            column: 13
          },
          end: {
            line: 224,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 220,
            column: 13
          },
          end: {
            line: 224,
            column: 7
          }
        }, {
          start: {
            line: 220,
            column: 13
          },
          end: {
            line: 224,
            column: 7
          }
        }],
        line: 220
      },
      '10': {
        loc: {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 244,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 244,
            column: 5
          }
        }, {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 244,
            column: 5
          }
        }],
        line: 236
      },
      '11': {
        loc: {
          start: {
            line: 237,
            column: 6
          },
          end: {
            line: 243,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 237,
            column: 6
          },
          end: {
            line: 243,
            column: 7
          }
        }, {
          start: {
            line: 237,
            column: 6
          },
          end: {
            line: 243,
            column: 7
          }
        }],
        line: 237
      },
      '12': {
        loc: {
          start: {
            line: 239,
            column: 13
          },
          end: {
            line: 243,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 239,
            column: 13
          },
          end: {
            line: 243,
            column: 7
          }
        }, {
          start: {
            line: 239,
            column: 13
          },
          end: {
            line: 243,
            column: 7
          }
        }],
        line: 239
      },
      '13': {
        loc: {
          start: {
            line: 241,
            column: 13
          },
          end: {
            line: 243,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 241,
            column: 13
          },
          end: {
            line: 243,
            column: 7
          }
        }, {
          start: {
            line: 241,
            column: 13
          },
          end: {
            line: 243,
            column: 7
          }
        }],
        line: 241
      },
      '14': {
        loc: {
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 256,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 256,
            column: 5
          }
        }, {
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 256,
            column: 5
          }
        }],
        line: 254
      },
      '15': {
        loc: {
          start: {
            line: 268,
            column: 4
          },
          end: {
            line: 274,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 268,
            column: 4
          },
          end: {
            line: 274,
            column: 5
          }
        }, {
          start: {
            line: 268,
            column: 4
          },
          end: {
            line: 274,
            column: 5
          }
        }],
        line: 268
      },
      '16': {
        loc: {
          start: {
            line: 270,
            column: 11
          },
          end: {
            line: 274,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 270,
            column: 11
          },
          end: {
            line: 274,
            column: 5
          }
        }, {
          start: {
            line: 270,
            column: 11
          },
          end: {
            line: 274,
            column: 5
          }
        }],
        line: 270
      },
      '17': {
        loc: {
          start: {
            line: 272,
            column: 11
          },
          end: {
            line: 274,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 272,
            column: 11
          },
          end: {
            line: 274,
            column: 5
          }
        }, {
          start: {
            line: 272,
            column: 11
          },
          end: {
            line: 274,
            column: 5
          }
        }],
        line: 272
      },
      '18': {
        loc: {
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 280,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 280,
            column: 5
          }
        }, {
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 280,
            column: 5
          }
        }],
        line: 275
      },
      '19': {
        loc: {
          start: {
            line: 289,
            column: 4
          },
          end: {
            line: 292,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 289,
            column: 4
          },
          end: {
            line: 292,
            column: 5
          }
        }, {
          start: {
            line: 289,
            column: 4
          },
          end: {
            line: 292,
            column: 5
          }
        }],
        line: 289
      },
      '20': {
        loc: {
          start: {
            line: 311,
            column: 4
          },
          end: {
            line: 319,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 311,
            column: 4
          },
          end: {
            line: 319,
            column: 5
          }
        }, {
          start: {
            line: 311,
            column: 4
          },
          end: {
            line: 319,
            column: 5
          }
        }],
        line: 311
      },
      '21': {
        loc: {
          start: {
            line: 312,
            column: 6
          },
          end: {
            line: 318,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 312,
            column: 6
          },
          end: {
            line: 318,
            column: 7
          }
        }, {
          start: {
            line: 312,
            column: 6
          },
          end: {
            line: 318,
            column: 7
          }
        }],
        line: 312
      },
      '22': {
        loc: {
          start: {
            line: 328,
            column: 4
          },
          end: {
            line: 330,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 328,
            column: 4
          },
          end: {
            line: 330,
            column: 5
          }
        }, {
          start: {
            line: 328,
            column: 4
          },
          end: {
            line: 330,
            column: 5
          }
        }],
        line: 328
      },
      '23': {
        loc: {
          start: {
            line: 339,
            column: 4
          },
          end: {
            line: 345,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 339,
            column: 4
          },
          end: {
            line: 345,
            column: 5
          }
        }, {
          start: {
            line: 339,
            column: 4
          },
          end: {
            line: 345,
            column: 5
          }
        }],
        line: 339
      },
      '24': {
        loc: {
          start: {
            line: 354,
            column: 4
          },
          end: {
            line: 365,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 354,
            column: 4
          },
          end: {
            line: 365,
            column: 5
          }
        }, {
          start: {
            line: 354,
            column: 4
          },
          end: {
            line: 365,
            column: 5
          }
        }],
        line: 354
      },
      '25': {
        loc: {
          start: {
            line: 355,
            column: 6
          },
          end: {
            line: 364,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 355,
            column: 6
          },
          end: {
            line: 364,
            column: 7
          }
        }, {
          start: {
            line: 355,
            column: 6
          },
          end: {
            line: 364,
            column: 7
          }
        }],
        line: 355
      },
      '26': {
        loc: {
          start: {
            line: 357,
            column: 8
          },
          end: {
            line: 359,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 357,
            column: 8
          },
          end: {
            line: 359,
            column: 9
          }
        }, {
          start: {
            line: 357,
            column: 8
          },
          end: {
            line: 359,
            column: 9
          }
        }],
        line: 357
      },
      '27': {
        loc: {
          start: {
            line: 360,
            column: 8
          },
          end: {
            line: 362,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 360,
            column: 8
          },
          end: {
            line: 362,
            column: 9
          }
        }, {
          start: {
            line: 360,
            column: 8
          },
          end: {
            line: 362,
            column: 9
          }
        }],
        line: 360
      },
      '28': {
        loc: {
          start: {
            line: 374,
            column: 4
          },
          end: {
            line: 376,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 374,
            column: 4
          },
          end: {
            line: 376,
            column: 5
          }
        }, {
          start: {
            line: 374,
            column: 4
          },
          end: {
            line: 376,
            column: 5
          }
        }],
        line: 374
      },
      '29': {
        loc: {
          start: {
            line: 385,
            column: 4
          },
          end: {
            line: 387,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 385,
            column: 4
          },
          end: {
            line: 387,
            column: 5
          }
        }, {
          start: {
            line: 385,
            column: 4
          },
          end: {
            line: 387,
            column: 5
          }
        }],
        line: 385
      },
      '30': {
        loc: {
          start: {
            line: 397,
            column: 4
          },
          end: {
            line: 408,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 397,
            column: 4
          },
          end: {
            line: 408,
            column: 5
          }
        }, {
          start: {
            line: 397,
            column: 4
          },
          end: {
            line: 408,
            column: 5
          }
        }],
        line: 397
      },
      '31': {
        loc: {
          start: {
            line: 398,
            column: 6
          },
          end: {
            line: 407,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 398,
            column: 6
          },
          end: {
            line: 407,
            column: 7
          }
        }, {
          start: {
            line: 398,
            column: 6
          },
          end: {
            line: 407,
            column: 7
          }
        }],
        line: 398
      },
      '32': {
        loc: {
          start: {
            line: 400,
            column: 8
          },
          end: {
            line: 402,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 400,
            column: 8
          },
          end: {
            line: 402,
            column: 9
          }
        }, {
          start: {
            line: 400,
            column: 8
          },
          end: {
            line: 402,
            column: 9
          }
        }],
        line: 400
      },
      '33': {
        loc: {
          start: {
            line: 403,
            column: 8
          },
          end: {
            line: 405,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 403,
            column: 8
          },
          end: {
            line: 405,
            column: 9
          }
        }, {
          start: {
            line: 403,
            column: 8
          },
          end: {
            line: 405,
            column: 9
          }
        }],
        line: 403
      },
      '34': {
        loc: {
          start: {
            line: 417,
            column: 4
          },
          end: {
            line: 419,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 417,
            column: 4
          },
          end: {
            line: 419,
            column: 5
          }
        }, {
          start: {
            line: 417,
            column: 4
          },
          end: {
            line: 419,
            column: 5
          }
        }],
        line: 417
      },
      '35': {
        loc: {
          start: {
            line: 434,
            column: 4
          },
          end: {
            line: 436,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 434,
            column: 4
          },
          end: {
            line: 436,
            column: 5
          }
        }, {
          start: {
            line: 434,
            column: 4
          },
          end: {
            line: 436,
            column: 5
          }
        }],
        line: 434
      },
      '36': {
        loc: {
          start: {
            line: 445,
            column: 4
          },
          end: {
            line: 447,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 445,
            column: 4
          },
          end: {
            line: 447,
            column: 5
          }
        }, {
          start: {
            line: 445,
            column: 4
          },
          end: {
            line: 447,
            column: 5
          }
        }],
        line: 445
      },
      '37': {
        loc: {
          start: {
            line: 460,
            column: 4
          },
          end: {
            line: 462,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 460,
            column: 4
          },
          end: {
            line: 462,
            column: 5
          }
        }, {
          start: {
            line: 460,
            column: 4
          },
          end: {
            line: 462,
            column: 5
          }
        }],
        line: 460
      },
      '38': {
        loc: {
          start: {
            line: 471,
            column: 4
          },
          end: {
            line: 473,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 471,
            column: 4
          },
          end: {
            line: 473,
            column: 5
          }
        }, {
          start: {
            line: 471,
            column: 4
          },
          end: {
            line: 473,
            column: 5
          }
        }],
        line: 471
      },
      '39': {
        loc: {
          start: {
            line: 482,
            column: 4
          },
          end: {
            line: 484,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 482,
            column: 4
          },
          end: {
            line: 484,
            column: 5
          }
        }, {
          start: {
            line: 482,
            column: 4
          },
          end: {
            line: 484,
            column: 5
          }
        }],
        line: 482
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0,
      '28': 0,
      '29': 0,
      '30': 0,
      '31': 0,
      '32': 0,
      '33': 0,
      '34': 0,
      '35': 0,
      '36': 0,
      '37': 0,
      '38': 0,
      '39': 0,
      '40': 0,
      '41': 0,
      '42': 0,
      '43': 0,
      '44': 0,
      '45': 0,
      '46': 0,
      '47': 0,
      '48': 0,
      '49': 0,
      '50': 0,
      '51': 0,
      '52': 0,
      '53': 0,
      '54': 0,
      '55': 0,
      '56': 0,
      '57': 0,
      '58': 0,
      '59': 0,
      '60': 0,
      '61': 0,
      '62': 0,
      '63': 0,
      '64': 0,
      '65': 0,
      '66': 0,
      '67': 0,
      '68': 0,
      '69': 0,
      '70': 0,
      '71': 0,
      '72': 0,
      '73': 0,
      '74': 0,
      '75': 0,
      '76': 0,
      '77': 0,
      '78': 0,
      '79': 0,
      '80': 0,
      '81': 0,
      '82': 0,
      '83': 0,
      '84': 0,
      '85': 0,
      '86': 0,
      '87': 0,
      '88': 0,
      '89': 0,
      '90': 0,
      '91': 0,
      '92': 0,
      '93': 0,
      '94': 0,
      '95': 0,
      '96': 0,
      '97': 0,
      '98': 0,
      '99': 0,
      '100': 0,
      '101': 0,
      '102': 0,
      '103': 0,
      '104': 0,
      '105': 0,
      '106': 0,
      '107': 0,
      '108': 0,
      '109': 0,
      '110': 0,
      '111': 0,
      '112': 0,
      '113': 0,
      '114': 0,
      '115': 0,
      '116': 0,
      '117': 0,
      '118': 0,
      '119': 0,
      '120': 0,
      '121': 0,
      '122': 0,
      '123': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0,
      '28': 0,
      '29': 0,
      '30': 0,
      '31': 0,
      '32': 0,
      '33': 0,
      '34': 0,
      '35': 0,
      '36': 0,
      '37': 0,
      '38': 0,
      '39': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0],
      '6': [0, 0],
      '7': [0, 0],
      '8': [0, 0],
      '9': [0, 0],
      '10': [0, 0],
      '11': [0, 0],
      '12': [0, 0],
      '13': [0, 0],
      '14': [0, 0],
      '15': [0, 0],
      '16': [0, 0],
      '17': [0, 0],
      '18': [0, 0],
      '19': [0, 0],
      '20': [0, 0],
      '21': [0, 0],
      '22': [0, 0],
      '23': [0, 0],
      '24': [0, 0],
      '25': [0, 0],
      '26': [0, 0],
      '27': [0, 0],
      '28': [0, 0],
      '29': [0, 0],
      '30': [0, 0],
      '31': [0, 0],
      '32': [0, 0],
      '33': [0, 0],
      '34': [0, 0],
      '35': [0, 0],
      '36': [0, 0],
      '37': [0, 0],
      '38': [0, 0],
      '39': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventManager = __webpack_require__(6);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _fakeEventTarget = __webpack_require__(9);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _events = __webpack_require__(7);

var _stateTypes = __webpack_require__(16);

var _stateTypes2 = _interopRequireDefault(_stateTypes);

var _util = __webpack_require__(11);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The HTML5 player class.
 * @classdesc
 */
var Player = function (_FakeEventTarget) {
  _inherits(Player, _FakeEventTarget);

  /**
   * @param {Object} config - The configuration for the player instance.
   * @constructor
   */

  /**
   * The tracks of the player.
   * @type {Array<Track>}
   * @private
   */

  /**
   * The playback engine.
   * @type {IEngine}
   * @private
   */

  /**
   * The event manager of the player.
   * @type {EventManager}
   * @private
   */

  /**
   * The player class logger.
   * @type {any}
   * @private
   */
  function Player(config) {
    _classCallCheck(this, Player);

    ++cov_4x54fj3w8.f[0];
    ++cov_4x54fj3w8.s[0];

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

    ++cov_4x54fj3w8.s[1];

    _this._tracks = [];
    ++cov_4x54fj3w8.s[2];
    _this._firstPlay = true;
    ++cov_4x54fj3w8.s[3];
    _this._logger = _logger2.default.getLogger('Player');
    ++cov_4x54fj3w8.s[4];
    _this._stateManager = new _stateManager2.default(_this);
    ++cov_4x54fj3w8.s[5];
    _this._pluginManager = new _pluginManager2.default();
    ++cov_4x54fj3w8.s[6];
    _this._eventManager = new _eventManager2.default();
    ++cov_4x54fj3w8.s[7];
    _this.configure(config);
    return _this;
  }

  /**
   * Configures the player according to given configuration.
   * @param {Object} config - The configuration for the player instance.
   * @returns {void}
   */

  /**
   * Whether the play is the first or not
   * @type {boolean}
   * @private
   */

  /**
   * The state manager of the player.
   * @type {StateManager}
   * @private
   */

  /**
   * The runtime configuration of the player.
   * @type {Object}
   * @private
   */

  /**
   * The plugin manager of the player.
   * @type {PluginManager}
   * @private
   */


  _createClass(Player, [{
    key: 'configure',
    value: function configure(config) {
      ++cov_4x54fj3w8.f[1];
      ++cov_4x54fj3w8.s[8];

      this._config = (0, _util.merge)([this._config, (++cov_4x54fj3w8.b[0][0], config) || (++cov_4x54fj3w8.b[0][1], Player._defaultConfig())]);
      ++cov_4x54fj3w8.s[9];
      this._loadPlugins(this._config);
      ++cov_4x54fj3w8.s[10];
      this._selectEngine(this._config);
      ++cov_4x54fj3w8.s[11];
      this._attachMedia();
    }

    /**
     * Destroys the player.
     * @returns {void}
     * @public
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      ++cov_4x54fj3w8.f[2];
      ++cov_4x54fj3w8.s[12];

      this._engine.destroy();
      ++cov_4x54fj3w8.s[13];
      this._eventManager.destroy();
      ++cov_4x54fj3w8.s[14];
      this._pluginManager.destroy();
      ++cov_4x54fj3w8.s[15];
      this._stateManager.destroy();
      ++cov_4x54fj3w8.s[16];
      this._config = {};
      ++cov_4x54fj3w8.s[17];
      this._tracks = [];
      ++cov_4x54fj3w8.s[18];
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
     *
     * @param {Object} config - The configuration of the player instance.
     * @private
     * @returns {void}
     */
    value: function _loadPlugins(config) {
      ++cov_4x54fj3w8.f[4];

      var plugins = (++cov_4x54fj3w8.s[20], config.plugins);
      ++cov_4x54fj3w8.s[21];
      for (var name in plugins) {
        ++cov_4x54fj3w8.s[22];

        this._pluginManager.load(name, this, plugins[name]);
      }
    }

    /**
     * Select the engine to create based on the given configured sources.
     * @param {Object} config - The configuration of the player instance.
     * @private
     * @returns {void}
     */

  }, {
    key: '_selectEngine',
    value: function _selectEngine(config) {
      ++cov_4x54fj3w8.f[5];
      ++cov_4x54fj3w8.s[23];

      if ((++cov_4x54fj3w8.b[2][0], config) && (++cov_4x54fj3w8.b[2][1], config.sources)) {
        ++cov_4x54fj3w8.b[1][0];

        var sources = (++cov_4x54fj3w8.s[24], config.sources);
        ++cov_4x54fj3w8.s[25];
        for (var i = 0; i < sources.length; i++) {
          ++cov_4x54fj3w8.s[26];

          if (_html2.default.canPlayType(sources[i].mimetype)) {
            ++cov_4x54fj3w8.b[3][0];
            ++cov_4x54fj3w8.s[27];

            this._loadEngine(sources[i], config);
            ++cov_4x54fj3w8.s[28];
            break;
          } else {
            ++cov_4x54fj3w8.b[3][1];
          }
        }
      } else {
        ++cov_4x54fj3w8.b[1][1];
      }
    }

    /**
     * Loads the selected engine.
     * @param {Source} source - The selected source object.
     * @param {Object} config - The configuration of the player instance.
     * @private
     * @returns {void}
     */

  }, {
    key: '_loadEngine',
    value: function _loadEngine(source, config) {
      ++cov_4x54fj3w8.f[6];
      ++cov_4x54fj3w8.s[29];

      this._engine = new _html2.default(source, config);
      ++cov_4x54fj3w8.s[30];
      if (config.preload === "auto") {
        ++cov_4x54fj3w8.b[4][0];
        ++cov_4x54fj3w8.s[31];

        this.load();
      } else {
        ++cov_4x54fj3w8.b[4][1];
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
      var _this2 = this;

      ++cov_4x54fj3w8.f[7];
      ++cov_4x54fj3w8.s[32];

      if (this._engine) {
        ++cov_4x54fj3w8.b[5][0];
        ++cov_4x54fj3w8.s[33];

        for (var playerEvent in _events.HTML5_EVENTS) {
          ++cov_4x54fj3w8.s[34];

          this._eventManager.listen(this._engine, _events.HTML5_EVENTS[playerEvent], function (event) {
            ++cov_4x54fj3w8.f[8];
            ++cov_4x54fj3w8.s[35];

            return _this2.dispatchEvent(event);
          });
        }
        ++cov_4x54fj3w8.s[36];
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.VIDEO_TRACK_CHANGED, function (event) {
          ++cov_4x54fj3w8.f[9];
          ++cov_4x54fj3w8.s[37];

          _this2._markActiveTrack(event.payload.selectedVideoTrack);
          ++cov_4x54fj3w8.s[38];
          return _this2.dispatchEvent(event);
        });
        ++cov_4x54fj3w8.s[39];
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.AUDIO_TRACK_CHANGED, function (event) {
          ++cov_4x54fj3w8.f[10];
          ++cov_4x54fj3w8.s[40];

          _this2._markActiveTrack(event.payload.selectedAudioTrack);
          ++cov_4x54fj3w8.s[41];
          return _this2.dispatchEvent(event);
        });
        ++cov_4x54fj3w8.s[42];
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.TEXT_TRACK_CHANGED, function (event) {
          ++cov_4x54fj3w8.f[11];
          ++cov_4x54fj3w8.s[43];

          _this2._markActiveTrack(event.payload.selectedTextTrack);
          ++cov_4x54fj3w8.s[44];
          return _this2.dispatchEvent(event);
        });
        ++cov_4x54fj3w8.s[45];
        this._eventManager.listen(this, _events.HTML5_EVENTS.PLAY, this._onPlay.bind(this));
      } else {
        ++cov_4x54fj3w8.b[5][1];
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
      ++cov_4x54fj3w8.f[12];
      ++cov_4x54fj3w8.s[46];

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
      ++cov_4x54fj3w8.f[13];
      ++cov_4x54fj3w8.s[47];

      return !type ? (++cov_4x54fj3w8.b[6][0], this._tracks) : (++cov_4x54fj3w8.b[6][1], this._tracks.filter(function (track) {
        ++cov_4x54fj3w8.f[14];
        ++cov_4x54fj3w8.s[48];

        if (type === _trackTypes2.default.VIDEO) {
          ++cov_4x54fj3w8.b[7][0];
          ++cov_4x54fj3w8.s[49];

          return track instanceof _videoTrack2.default;
        } else {
            ++cov_4x54fj3w8.b[7][1];
            ++cov_4x54fj3w8.s[50];
            if (type === _trackTypes2.default.AUDIO) {
              ++cov_4x54fj3w8.b[8][0];
              ++cov_4x54fj3w8.s[51];

              return track instanceof _audioTrack2.default;
            } else {
                ++cov_4x54fj3w8.b[8][1];
                ++cov_4x54fj3w8.s[52];
                if (type === _trackTypes2.default.TEXT) {
                  ++cov_4x54fj3w8.b[9][0];
                  ++cov_4x54fj3w8.s[53];

                  return track instanceof _textTrack2.default;
                } else {
                  ++cov_4x54fj3w8.b[9][1];
                  ++cov_4x54fj3w8.s[54];

                  return true;
                }
              }
          }
      }));
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
      ++cov_4x54fj3w8.f[15];
      ++cov_4x54fj3w8.s[55];

      if (this._engine) {
        ++cov_4x54fj3w8.b[10][0];
        ++cov_4x54fj3w8.s[56];

        if (track instanceof _videoTrack2.default) {
          ++cov_4x54fj3w8.b[11][0];
          ++cov_4x54fj3w8.s[57];

          this._engine.selectVideoTrack(track);
        } else {
            ++cov_4x54fj3w8.b[11][1];
            ++cov_4x54fj3w8.s[58];
            if (track instanceof _audioTrack2.default) {
              ++cov_4x54fj3w8.b[12][0];
              ++cov_4x54fj3w8.s[59];

              this._engine.selectAudioTrack(track);
            } else {
                ++cov_4x54fj3w8.b[12][1];
                ++cov_4x54fj3w8.s[60];
                if (track instanceof _textTrack2.default) {
                  ++cov_4x54fj3w8.b[13][0];
                  ++cov_4x54fj3w8.s[61];

                  this._engine.selectTextTrack(track);
                } else {
                  ++cov_4x54fj3w8.b[13][1];
                }
              }
          }
      } else {
        ++cov_4x54fj3w8.b[10][1];
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
      ++cov_4x54fj3w8.f[16];
      ++cov_4x54fj3w8.s[62];

      if (this._engine) {
        ++cov_4x54fj3w8.b[14][0];
        ++cov_4x54fj3w8.s[63];

        this._engine.enableAdaptiveBitrate();
      } else {
        ++cov_4x54fj3w8.b[14][1];
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
      ++cov_4x54fj3w8.f[17];

      var type = void 0;
      ++cov_4x54fj3w8.s[64];
      if (track instanceof _videoTrack2.default) {
        ++cov_4x54fj3w8.b[15][0];
        ++cov_4x54fj3w8.s[65];

        type = _trackTypes2.default.VIDEO;
      } else {
          ++cov_4x54fj3w8.b[15][1];
          ++cov_4x54fj3w8.s[66];
          if (track instanceof _audioTrack2.default) {
            ++cov_4x54fj3w8.b[16][0];
            ++cov_4x54fj3w8.s[67];

            type = _trackTypes2.default.AUDIO;
          } else {
              ++cov_4x54fj3w8.b[16][1];
              ++cov_4x54fj3w8.s[68];
              if (track instanceof _textTrack2.default) {
                ++cov_4x54fj3w8.b[17][0];
                ++cov_4x54fj3w8.s[69];

                type = _trackTypes2.default.TEXT;
              } else {
                ++cov_4x54fj3w8.b[17][1];
              }
            }
        }++cov_4x54fj3w8.s[70];
      if (type) {
        ++cov_4x54fj3w8.b[18][0];

        var tracks = (++cov_4x54fj3w8.s[71], this.getTracks(type));
        ++cov_4x54fj3w8.s[72];
        for (var i = 0; i < tracks.length; i++) {
          ++cov_4x54fj3w8.s[73];

          tracks[i].active = track.index === i;
        }
      } else {
        ++cov_4x54fj3w8.b[18][1];
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
      ++cov_4x54fj3w8.f[18];
      ++cov_4x54fj3w8.s[74];

      if (this._firstPlay) {
        ++cov_4x54fj3w8.b[19][0];
        ++cov_4x54fj3w8.s[75];

        this._firstPlay = false;
        ++cov_4x54fj3w8.s[76];
        this.dispatchEvent(new _fakeEvent2.default(_events.CUSTOM_EVENTS.FIRST_PLAY));
      } else {
        ++cov_4x54fj3w8.b[19][1];
      }
    }

    /**
     * Get the player config.
     * @returns {Object} - The player configuration.
     * @public
     */

  }, {
    key: 'play',


    //  <editor-fold desc="Playback Interface">
    /**
     * Start/resume playback.
     * @returns {void}
     * @public
     */
    value: function play() {
      var _this3 = this;

      ++cov_4x54fj3w8.f[20];
      ++cov_4x54fj3w8.s[78];

      if (this._engine) {
        ++cov_4x54fj3w8.b[20][0];
        ++cov_4x54fj3w8.s[79];

        if (this._engine.src) {
          ++cov_4x54fj3w8.b[21][0];
          ++cov_4x54fj3w8.s[80];

          this._engine.play();
        } else {
          ++cov_4x54fj3w8.b[21][1];
          ++cov_4x54fj3w8.s[81];

          this.load().then(function () {
            ++cov_4x54fj3w8.f[21];
            ++cov_4x54fj3w8.s[82];

            _this3._engine.play();
          });
        }
      } else {
        ++cov_4x54fj3w8.b[20][1];
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
      ++cov_4x54fj3w8.f[22];
      ++cov_4x54fj3w8.s[83];

      if (this._engine) {
        ++cov_4x54fj3w8.b[22][0];
        ++cov_4x54fj3w8.s[84];

        return this._engine.pause();
      } else {
        ++cov_4x54fj3w8.b[22][1];
      }
    }

    /**
     * Load media.
     * @public
     * @returns {Promise<*>} - The load promise.
     */

  }, {
    key: 'load',
    value: function load() {
      var _this4 = this;

      ++cov_4x54fj3w8.f[23];
      ++cov_4x54fj3w8.s[85];

      if (this._engine) {
        ++cov_4x54fj3w8.b[23][0];
        ++cov_4x54fj3w8.s[86];

        return this._engine.load().then(function (data) {
          ++cov_4x54fj3w8.f[24];
          ++cov_4x54fj3w8.s[87];

          _this4._tracks = data.tracks;
        });
      } else {
        ++cov_4x54fj3w8.b[23][1];
        ++cov_4x54fj3w8.s[88];

        return Promise.resolve();
      }
    }

    /**
     * Set the current time in seconds.
     * @param {Number} to - The number to set in seconds.
     * @public
     */

  }, {
    key: 'ready',


    // </editor-fold>

    // <editor-fold desc="State">
    value: function ready() {
      ++cov_4x54fj3w8.f[30];
    }

    /**
     * Get paused state.
     * @returns {?boolean} - Whether the video is paused or not.
     * @public
     */

  }, {
    key: 'buffered',
    value: function buffered() {
      ++cov_4x54fj3w8.f[33];
    }

    /**
     * Set player muted state.
     * @param {boolean} mute - The mute value.
     * @returns {void}
     * @public
     */

  }, {
    key: 'config',
    get: function get() {
      ++cov_4x54fj3w8.f[19];
      ++cov_4x54fj3w8.s[77];

      return this._config;
    }
  }, {
    key: 'currentTime',
    set: function set(to) {
      ++cov_4x54fj3w8.f[25];
      ++cov_4x54fj3w8.s[89];

      if (this._engine) {
        ++cov_4x54fj3w8.b[24][0];
        ++cov_4x54fj3w8.s[90];

        if ((0, _util.isNumber)(to)) {
          ++cov_4x54fj3w8.b[25][0];

          var boundedTo = (++cov_4x54fj3w8.s[91], to);
          ++cov_4x54fj3w8.s[92];
          if (to < 0) {
            ++cov_4x54fj3w8.b[26][0];
            ++cov_4x54fj3w8.s[93];

            boundedTo = 0;
          } else {
            ++cov_4x54fj3w8.b[26][1];
          }
          ++cov_4x54fj3w8.s[94];
          if (boundedTo > this._engine.duration) {
            ++cov_4x54fj3w8.b[27][0];
            ++cov_4x54fj3w8.s[95];

            boundedTo = this._engine.duration;
          } else {
            ++cov_4x54fj3w8.b[27][1];
          }
          ++cov_4x54fj3w8.s[96];
          this._engine.currentTime = boundedTo;
        } else {
          ++cov_4x54fj3w8.b[25][1];
        }
      } else {
        ++cov_4x54fj3w8.b[24][1];
      }
    }

    /**
     * Get the current time in seconds.
     * @returns {?Number} - The playback current time.
     * @public
     */
    ,
    get: function get() {
      ++cov_4x54fj3w8.f[26];
      ++cov_4x54fj3w8.s[97];

      if (this._engine) {
        ++cov_4x54fj3w8.b[28][0];
        ++cov_4x54fj3w8.s[98];

        return this._engine.currentTime;
      } else {
        ++cov_4x54fj3w8.b[28][1];
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
      ++cov_4x54fj3w8.f[27];
      ++cov_4x54fj3w8.s[99];

      if (this._engine) {
        ++cov_4x54fj3w8.b[29][0];
        ++cov_4x54fj3w8.s[100];

        return this._engine.duration;
      } else {
        ++cov_4x54fj3w8.b[29][1];
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
      ++cov_4x54fj3w8.f[28];
      ++cov_4x54fj3w8.s[101];

      if (this._engine) {
        ++cov_4x54fj3w8.b[30][0];
        ++cov_4x54fj3w8.s[102];

        if ((0, _util.isFloat)(vol)) {
          ++cov_4x54fj3w8.b[31][0];

          var boundedVol = (++cov_4x54fj3w8.s[103], vol);
          ++cov_4x54fj3w8.s[104];
          if (boundedVol < 0) {
            ++cov_4x54fj3w8.b[32][0];
            ++cov_4x54fj3w8.s[105];

            boundedVol = 0;
          } else {
            ++cov_4x54fj3w8.b[32][1];
          }
          ++cov_4x54fj3w8.s[106];
          if (boundedVol > 1) {
            ++cov_4x54fj3w8.b[33][0];
            ++cov_4x54fj3w8.s[107];

            boundedVol = 1;
          } else {
            ++cov_4x54fj3w8.b[33][1];
          }
          ++cov_4x54fj3w8.s[108];
          this._engine.volume = boundedVol;
        } else {
          ++cov_4x54fj3w8.b[31][1];
        }
      } else {
        ++cov_4x54fj3w8.b[30][1];
      }
    }

    /**
     * Get playback volume.
     * @returns {?Number} - The playback volume.
     * @public
     */
    ,
    get: function get() {
      ++cov_4x54fj3w8.f[29];
      ++cov_4x54fj3w8.s[109];

      if (this._engine) {
        ++cov_4x54fj3w8.b[34][0];
        ++cov_4x54fj3w8.s[110];

        return this._engine.volume;
      } else {
        ++cov_4x54fj3w8.b[34][1];
      }
    }
  }, {
    key: 'paused',
    get: function get() {
      ++cov_4x54fj3w8.f[31];
      ++cov_4x54fj3w8.s[111];

      if (this._engine) {
        ++cov_4x54fj3w8.b[35][0];
        ++cov_4x54fj3w8.s[112];

        return this._engine.paused;
      } else {
        ++cov_4x54fj3w8.b[35][1];
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
      ++cov_4x54fj3w8.f[32];
      ++cov_4x54fj3w8.s[113];

      if (this._engine) {
        ++cov_4x54fj3w8.b[36][0];
        ++cov_4x54fj3w8.s[114];

        return this._engine.seeking;
      } else {
        ++cov_4x54fj3w8.b[36][1];
      }
    }
  }, {
    key: 'muted',
    set: function set(mute) {
      ++cov_4x54fj3w8.f[34];
      ++cov_4x54fj3w8.s[115];

      if (this._engine) {
        ++cov_4x54fj3w8.b[37][0];
        ++cov_4x54fj3w8.s[116];

        this._engine.muted = mute;
      } else {
        ++cov_4x54fj3w8.b[37][1];
      }
    }

    /**
     * Get player muted state.
     * @returns {?boolean} - Whether the video is muted or not.
     * @public
     */
    ,
    get: function get() {
      ++cov_4x54fj3w8.f[35];
      ++cov_4x54fj3w8.s[117];

      if (this._engine) {
        ++cov_4x54fj3w8.b[38][0];
        ++cov_4x54fj3w8.s[118];

        return this._engine.muted;
      } else {
        ++cov_4x54fj3w8.b[38][1];
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
      ++cov_4x54fj3w8.f[36];
      ++cov_4x54fj3w8.s[119];

      if (this._engine) {
        ++cov_4x54fj3w8.b[39][0];
        ++cov_4x54fj3w8.s[120];

        return this._engine.src;
      } else {
        ++cov_4x54fj3w8.b[39][1];
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
      ++cov_4x54fj3w8.f[37];
      ++cov_4x54fj3w8.s[121];

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
      ++cov_4x54fj3w8.f[38];
      ++cov_4x54fj3w8.s[122];

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
      ++cov_4x54fj3w8.f[39];
      ++cov_4x54fj3w8.s[123];

      return _trackTypes2.default;
    }

    // </editor-fold>

  }], [{
    key: '_defaultConfig',
    value: function _defaultConfig() {
      ++cov_4x54fj3w8.f[3];
      ++cov_4x54fj3w8.s[19];

      return {};
    }
  }]);

  return Player;
}(_fakeEventTarget2.default);

exports.default = Player;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1n1jsxoboj = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/event/fake-event-target.js',
      hash = '453d089f44ea2ec3652230de20b5912879d1f705',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/event/fake-event-target.js',
    statementMap: {
      '0': {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 37
        }
      },
      '1': {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 31
        }
      },
      '2': {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 41
        }
      },
      '3': {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 43
        }
      },
      '4': {
        start: {
          line: 76,
          column: 15
        },
        end: {
          line: 76,
          column: 52
        }
      },
      '5': {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 100,
          column: 5
        }
      },
      '6': {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 80,
          column: 41
        }
      },
      '7': {
        start: {
          line: 81,
          column: 6
        },
        end: {
          line: 81,
          column: 48
        }
      },
      '8': {
        start: {
          line: 83,
          column: 21
        },
        end: {
          line: 83,
          column: 28
        }
      },
      '9': {
        start: {
          line: 84,
          column: 6
        },
        end: {
          line: 95,
          column: 7
        }
      },
      '10': {
        start: {
          line: 85,
          column: 8
        },
        end: {
          line: 89,
          column: 9
        }
      },
      '11': {
        start: {
          line: 86,
          column: 10
        },
        end: {
          line: 86,
          column: 38
        }
      },
      '12': {
        start: {
          line: 88,
          column: 10
        },
        end: {
          line: 88,
          column: 37
        }
      },
      '13': {
        start: {
          line: 97,
          column: 6
        },
        end: {
          line: 99,
          column: 7
        }
      },
      '14': {
        start: {
          line: 98,
          column: 8
        },
        end: {
          line: 98,
          column: 14
        }
      },
      '15': {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 102,
          column: 34
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 19
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 43,
            column: 3
          }
        },
        loc: {
          start: {
            line: 43,
            column: 57
          },
          end: {
            line: 45,
            column: 3
          }
        },
        line: 43
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        loc: {
          start: {
            line: 58,
            column: 60
          },
          end: {
            line: 60,
            column: 3
          }
        },
        line: 58
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 70,
            column: 2
          },
          end: {
            line: 70,
            column: 3
          }
        },
        loc: {
          start: {
            line: 70,
            column: 34
          },
          end: {
            line: 103,
            column: 3
          }
        },
        line: 70
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 76,
            column: 15
          },
          end: {
            line: 76,
            column: 52
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 76,
            column: 15
          },
          end: {
            line: 76,
            column: 46
          }
        }, {
          start: {
            line: 76,
            column: 50
          },
          end: {
            line: 76,
            column: 52
          }
        }],
        line: 76
      },
      '1': {
        loc: {
          start: {
            line: 85,
            column: 8
          },
          end: {
            line: 89,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 85,
            column: 8
          },
          end: {
            line: 89,
            column: 9
          }
        }, {
          start: {
            line: 85,
            column: 8
          },
          end: {
            line: 89,
            column: 9
          }
        }],
        line: 85
      },
      '2': {
        loc: {
          start: {
            line: 97,
            column: 6
          },
          end: {
            line: 99,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 97,
            column: 6
          },
          end: {
            line: 99,
            column: 7
          }
        }, {
          start: {
            line: 97,
            column: 6
          },
          end: {
            line: 99,
            column: 7
          }
        }],
        line: 97
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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

    ++cov_1n1jsxoboj.f[0];
    ++cov_1n1jsxoboj.s[0];

    /**
     * @private {!MultiMap.<FakeEventTarget.ListenerType>}
     */
    this._listeners = new _multiMap2.default();

    /**
     * The target of all dispatched events.  Defaults to |this|.
     * @type {EventTarget}
     */
    ++cov_1n1jsxoboj.s[1];
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
      ++cov_1n1jsxoboj.f[1];
      ++cov_1n1jsxoboj.s[2];

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
      ++cov_1n1jsxoboj.f[2];
      ++cov_1n1jsxoboj.s[3];

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
      ++cov_1n1jsxoboj.f[3];

      // In many browsers, it is complex to overwrite properties of actual Events.
      // Here we expect only to dispatch FakeEvents, which are simpler.
      //goog.asserts.assert(event instanceof FakeEvent,
      //    'FakeEventTarget can only dispatch FakeEvents!');

      var list = (++cov_1n1jsxoboj.s[4], (++cov_1n1jsxoboj.b[0][0], this._listeners.get(event.type)) || (++cov_1n1jsxoboj.b[0][1], []));

      ++cov_1n1jsxoboj.s[5];
      for (var i = 0; i < list.length; ++i) {
        ++cov_1n1jsxoboj.s[6];

        // Do this every time, since events can be re-dispatched from handlers.
        event.target = this.dispatchTarget;
        ++cov_1n1jsxoboj.s[7];
        event.currentTarget = this.dispatchTarget;

        var listener = (++cov_1n1jsxoboj.s[8], list[i]);
        ++cov_1n1jsxoboj.s[9];
        try {
          ++cov_1n1jsxoboj.s[10];

          if (listener.handleEvent) {
            ++cov_1n1jsxoboj.b[1][0];
            ++cov_1n1jsxoboj.s[11];

            listener.handleEvent(event);
          } else {
            ++cov_1n1jsxoboj.b[1][1];
            ++cov_1n1jsxoboj.s[12];

            listener.call(this, event);
          }
        } catch (exception) {
          // Exceptions during event handlers should not affect the caller,
          // but should appear on the console as uncaught, according to MDN:
          // http://goo.gl/N6Ff27
          // TODO: add log
        }

        ++cov_1n1jsxoboj.s[13];
        if (event.stopped) {
          ++cov_1n1jsxoboj.b[2][0];
          ++cov_1n1jsxoboj.s[14];

          break;
        } else {
          ++cov_1n1jsxoboj.b[2][1];
        }
      }

      ++cov_1n1jsxoboj.s[15];
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_zk60s9pil = function () {
  var path = "/Users/dan.ziv/WebstormProjects/playkit-js/src/utils/player-error.js",
      hash = "f6b9424ead904442c692b1e5698a6302398a47dd",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/dan.ziv/WebstormProjects/playkit-js/src/utils/player-error.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 7,
          column: 76
        }
      },
      "1": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 85
        }
      },
      "2": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 50
        }
      },
      "3": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 27
        }
      },
      "4": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 40
        }
      },
      "5": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 36,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 15
          },
          end: {
            line: 6,
            column: 16
          }
        },
        loc: {
          start: {
            line: 6,
            column: 31
          },
          end: {
            line: 8,
            column: 7
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 15
          },
          end: {
            line: 12,
            column: 16
          }
        },
        loc: {
          start: {
            line: 12,
            column: 27
          },
          end: {
            line: 14,
            column: 7
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 18,
            column: 15
          },
          end: {
            line: 18,
            column: 16
          }
        },
        loc: {
          start: {
            line: 18,
            column: 33
          },
          end: {
            line: 20,
            column: 7
          }
        },
        line: 18
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        loc: {
          start: {
            line: 27,
            column: 42
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 27
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        loc: {
          start: {
            line: 32,
            column: 13
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 32
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerError = function () {
  function PlayerError(error, param) {
    _classCallCheck(this, PlayerError);

    ++cov_zk60s9pil.f[3];
    ++cov_zk60s9pil.s[3];

    this.name = error.name;
    ++cov_zk60s9pil.s[4];
    this.message = error.message(param);
  }

  _createClass(PlayerError, [{
    key: "getError",
    value: function getError() {
      ++cov_zk60s9pil.f[4];
      ++cov_zk60s9pil.s[5];

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
      ++cov_zk60s9pil.f[0];
      ++cov_zk60s9pil.s[0];

      return "Cannot load " + name + " plugin. Name not found in the registry";
    }
  },
  NOT_VALID_HANDLER: {
    name: "PluginHandlerIsNotValidException",
    message: function message() {
      ++cov_zk60s9pil.f[1];
      ++cov_zk60s9pil.s[1];

      return "To activate plugin you must provide a class derived from BasePlugin";
    }
  },
  NOT_IMPLEMENTED_METHOD: {
    name: "NotImplementedException",
    message: function message(method) {
      ++cov_zk60s9pil.f[2];
      ++cov_zk60s9pil.s[2];

      return method + " method not implemented";
    }
  }
};
exports.default = PlayerError;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @param {number} n - A certain number
 * @returns {boolean} - If the input is a number
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1e2a9y1nho = function () {
  var path = "/Users/dan.ziv/WebstormProjects/playkit-js/src/utils/util.js",
      hash = "6c569da676227dcfcd4197182982081ccde0f483",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/dan.ziv/WebstormProjects/playkit-js/src/utils/util.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 25
        }
      },
      "1": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 36
        }
      },
      "2": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 36
        }
      },
      "3": {
        start: {
          line: 33,
          column: 15
        },
        end: {
          line: 33,
          column: 17
        }
      },
      "4": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 36,
          column: 3
        }
      },
      "5": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 31
        }
      },
      "6": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "isNumber",
        decl: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 17
          }
        },
        loc: {
          start: {
            line: 8,
            column: 38
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "isInt",
        decl: {
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 16,
            column: 14
          }
        },
        loc: {
          start: {
            line: 16,
            column: 35
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 16
      },
      "2": {
        name: "isFloat",
        decl: {
          start: {
            line: 24,
            column: 9
          },
          end: {
            line: 24,
            column: 16
          }
        },
        loc: {
          start: {
            line: 24,
            column: 37
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 24
      },
      "3": {
        name: "merge",
        decl: {
          start: {
            line: 32,
            column: 9
          },
          end: {
            line: 32,
            column: 14
          }
        },
        loc: {
          start: {
            line: 32,
            column: 47
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 32
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 9
          },
          end: {
            line: 17,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 17,
            column: 9
          },
          end: {
            line: 17,
            column: 20
          }
        }, {
          start: {
            line: 17,
            column: 24
          },
          end: {
            line: 17,
            column: 35
          }
        }],
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 25,
            column: 9
          },
          end: {
            line: 25,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 25,
            column: 9
          },
          end: {
            line: 25,
            column: 20
          }
        }, {
          start: {
            line: 25,
            column: 24
          },
          end: {
            line: 25,
            column: 35
          }
        }],
        line: 25
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function isNumber(n) {
  ++cov_1e2a9y1nho.f[0];
  ++cov_1e2a9y1nho.s[0];

  return Number(n) === n;
}

/**
 * @param {number} n - A certain number
 * @returns {boolean} - If the input is an integer
 */
function isInt(n) {
  ++cov_1e2a9y1nho.f[1];
  ++cov_1e2a9y1nho.s[1];

  return (++cov_1e2a9y1nho.b[0][0], isNumber(n)) && (++cov_1e2a9y1nho.b[0][1], n % 1 === 0);
}

/**
 * @param {number} n - A certain number
 * @returns {boolean} - If the input is a float
 */
function isFloat(n) {
  ++cov_1e2a9y1nho.f[2];
  ++cov_1e2a9y1nho.s[2];

  return (++cov_1e2a9y1nho.b[1][0], isNumber(n)) && (++cov_1e2a9y1nho.b[1][1], n % 1 !== 0);
}

/**
 * @param {Array<Object>} objects - The objects to merge
 * @returns {Object} - The merged object.
 */
function merge(objects) {
  ++cov_1e2a9y1nho.f[3];

  var target = (++cov_1e2a9y1nho.s[3], {});
  ++cov_1e2a9y1nho.s[4];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = objects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var obj = _step.value;
      ++cov_1e2a9y1nho.s[5];

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

  ++cov_1e2a9y1nho.s[6];
  return target;
}

exports.isNumber = isNumber;
exports.isInt = isInt;
exports.isFloat = isFloat;
exports.merge = merge;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1q473uea5y = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/engines/html5/media-source/base-media-source-adapter.js',
      hash = 'c1c48cb7926e91e07b807e5d968e747461704844',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/engines/html5/media-source/base-media-source-adapter.js',
    statementMap: {
      '0': {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 16
        }
      },
      '1': {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 50
        }
      },
      '2': {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 12
        }
      },
      '3': {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 79,
          column: 38
        }
      },
      '4': {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 29
        }
      },
      '5': {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 26
        }
      },
      '6': {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 27
        }
      },
      '7': {
        start: {
          line: 91,
          column: 4
        },
        end: {
          line: 91,
          column: 24
        }
      },
      '8': {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 107,
          column: 5
        }
      },
      '9': {
        start: {
          line: 102,
          column: 6
        },
        end: {
          line: 102,
          column: 106
        }
      },
      '10': {
        start: {
          line: 103,
          column: 11
        },
        end: {
          line: 107,
          column: 5
        }
      },
      '11': {
        start: {
          line: 104,
          column: 6
        },
        end: {
          line: 104,
          column: 106
        }
      },
      '12': {
        start: {
          line: 105,
          column: 11
        },
        end: {
          line: 107,
          column: 5
        }
      },
      '13': {
        start: {
          line: 106,
          column: 6
        },
        end: {
          line: 106,
          column: 104
        }
      },
      '14': {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 117,
          column: 53
        }
      },
      '15': {
        start: {
          line: 123,
          column: 4
        },
        end: {
          line: 123,
          column: 100
        }
      },
      '16': {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 127,
          column: 86
        }
      },
      '17': {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 131,
          column: 98
        }
      },
      '18': {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 135,
          column: 98
        }
      },
      '19': {
        start: {
          line: 139,
          column: 4
        },
        end: {
          line: 139,
          column: 97
        }
      },
      '20': {
        start: {
          line: 143,
          column: 4
        },
        end: {
          line: 143,
          column: 103
        }
      },
      '21': {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 147,
          column: 89
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        },
        loc: {
          start: {
            line: 54,
            column: 32
          },
          end: {
            line: 56,
            column: 3
          }
        },
        line: 54
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 67,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        },
        loc: {
          start: {
            line: 67,
            column: 108
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 67
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        loc: {
          start: {
            line: 77,
            column: 78
          },
          end: {
            line: 82,
            column: 3
          }
        },
        line: 77
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 89,
            column: 3
          }
        },
        loc: {
          start: {
            line: 89,
            column: 18
          },
          end: {
            line: 92,
            column: 3
          }
        },
        line: 89
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 100,
            column: 2
          },
          end: {
            line: 100,
            column: 3
          }
        },
        loc: {
          start: {
            line: 100,
            column: 38
          },
          end: {
            line: 108,
            column: 3
          }
        },
        line: 100
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 116,
            column: 2
          },
          end: {
            line: 116,
            column: 3
          }
        },
        loc: {
          start: {
            line: 116,
            column: 48
          },
          end: {
            line: 118,
            column: 3
          }
        },
        line: 116
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 122,
            column: 2
          },
          end: {
            line: 122,
            column: 3
          }
        },
        loc: {
          start: {
            line: 122,
            column: 48
          },
          end: {
            line: 124,
            column: 3
          }
        },
        line: 122
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 126,
            column: 2
          },
          end: {
            line: 126,
            column: 3
          }
        },
        loc: {
          start: {
            line: 126,
            column: 26
          },
          end: {
            line: 128,
            column: 3
          }
        },
        line: 126
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 130,
            column: 2
          },
          end: {
            line: 130,
            column: 3
          }
        },
        loc: {
          start: {
            line: 130,
            column: 49
          },
          end: {
            line: 132,
            column: 3
          }
        },
        line: 130
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 134,
            column: 2
          },
          end: {
            line: 134,
            column: 3
          }
        },
        loc: {
          start: {
            line: 134,
            column: 49
          },
          end: {
            line: 136,
            column: 3
          }
        },
        line: 134
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 138,
            column: 2
          },
          end: {
            line: 138,
            column: 3
          }
        },
        loc: {
          start: {
            line: 138,
            column: 46
          },
          end: {
            line: 140,
            column: 3
          }
        },
        line: 138
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 142,
            column: 2
          },
          end: {
            line: 142,
            column: 3
          }
        },
        loc: {
          start: {
            line: 142,
            column: 32
          },
          end: {
            line: 144,
            column: 3
          }
        },
        line: 142
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 146,
            column: 2
          },
          end: {
            line: 146,
            column: 3
          }
        },
        loc: {
          start: {
            line: 146,
            column: 20
          },
          end: {
            line: 148,
            column: 3
          }
        },
        line: 146
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 107,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 107,
            column: 5
          }
        }, {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 107,
            column: 5
          }
        }],
        line: 101
      },
      '1': {
        loc: {
          start: {
            line: 103,
            column: 11
          },
          end: {
            line: 107,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 103,
            column: 11
          },
          end: {
            line: 107,
            column: 5
          }
        }, {
          start: {
            line: 103,
            column: 11
          },
          end: {
            line: 107,
            column: 5
          }
        }],
        line: 103
      },
      '2': {
        loc: {
          start: {
            line: 105,
            column: 11
          },
          end: {
            line: 107,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 105,
            column: 11
          },
          end: {
            line: 107,
            column: 5
          }
        }, {
          start: {
            line: 105,
            column: 11
          },
          end: {
            line: 107,
            column: 5
          }
        }],
        line: 105
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _fakeEventTarget = __webpack_require__(9);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _playerError = __webpack_require__(10);

var _playerError2 = _interopRequireDefault(_playerError);

var _events = __webpack_require__(7);

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
      ++cov_1q473uea5y.f[0];
      ++cov_1q473uea5y.s[0];

      return true;
    }

    /**
     * Factory method to create media source adapter.
     * @function createAdapter
     * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with.
     * @param {Object} source - The source Object.
     * @param {Object} config - The media source adapter configuration.
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
      ++cov_1q473uea5y.f[1];
      ++cov_1q473uea5y.s[1];

      return new this(videoElement, source, config);
    }

    /**
     * @constructor
     * @param {HTMLVideoElement} videoElement - The video element which bind to media source adapter.
     * @param {Source} source - The source object.
     * @param {Object} config - The media source adapter configuration.
     */

  }]);

  function BaseMediaSourceAdapter(videoElement, source, config) {
    _classCallCheck(this, BaseMediaSourceAdapter);

    ++cov_1q473uea5y.f[2];
    ++cov_1q473uea5y.s[2];

    var _this = _possibleConstructorReturn(this, (BaseMediaSourceAdapter.__proto__ || Object.getPrototypeOf(BaseMediaSourceAdapter)).call(this));

    ++cov_1q473uea5y.s[3];

    _this._videoElement = videoElement;
    ++cov_1q473uea5y.s[4];
    _this._sourceObj = source;
    ++cov_1q473uea5y.s[5];
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
      ++cov_1q473uea5y.f[3];
      ++cov_1q473uea5y.s[6];

      this._sourceObj = null;
      ++cov_1q473uea5y.s[7];
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
      ++cov_1q473uea5y.f[4];
      ++cov_1q473uea5y.s[8];

      if (track instanceof _videoTrack2.default) {
        ++cov_1q473uea5y.b[0][0];
        ++cov_1q473uea5y.s[9];

        this._trigger(BaseMediaSourceAdapter.CustomEvents.VIDEO_TRACK_CHANGED, { selectedVideoTrack: track });
      } else {
          ++cov_1q473uea5y.b[0][1];
          ++cov_1q473uea5y.s[10];
          if (track instanceof _audioTrack2.default) {
            ++cov_1q473uea5y.b[1][0];
            ++cov_1q473uea5y.s[11];

            this._trigger(BaseMediaSourceAdapter.CustomEvents.AUDIO_TRACK_CHANGED, { selectedAudioTrack: track });
          } else {
              ++cov_1q473uea5y.b[1][1];
              ++cov_1q473uea5y.s[12];
              if (track instanceof _textTrack2.default) {
                ++cov_1q473uea5y.b[2][0];
                ++cov_1q473uea5y.s[13];

                this._trigger(BaseMediaSourceAdapter.CustomEvents.TEXT_TRACK_CHANGED, { selectedTextTrack: track });
              } else {
                ++cov_1q473uea5y.b[2][1];
              }
            }
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
      ++cov_1q473uea5y.f[5];
      ++cov_1q473uea5y.s[14];

      this.dispatchEvent(new _fakeEvent2.default(name, payload));
    }

    /** Must implemented methods by the derived media source adapter **/

  }, {
    key: 'load',
    value: function load() {
      ++cov_1q473uea5y.f[7];
      ++cov_1q473uea5y.s[16];

      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'load').getError();
    }
  }, {
    key: 'selectVideoTrack',
    value: function selectVideoTrack(videoTrack) {
      ++cov_1q473uea5y.f[8];
      ++cov_1q473uea5y.s[17];

      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'selectVideoTrack').getError();
    }
  }, {
    key: 'selectAudioTrack',
    value: function selectAudioTrack(audioTrack) {
      ++cov_1q473uea5y.f[9];
      ++cov_1q473uea5y.s[18];

      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'selectAudioTrack').getError();
    }
  }, {
    key: 'selectTextTrack',
    value: function selectTextTrack(textTrack) {
      ++cov_1q473uea5y.f[10];
      ++cov_1q473uea5y.s[19];

      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'selectTextTrack').getError();
    }
  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      ++cov_1q473uea5y.f[11];
      ++cov_1q473uea5y.s[20];

      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'enableAdaptiveBitrate').getError();
    }
  }, {
    key: 'src',
    get: function get() {
      ++cov_1q473uea5y.f[12];
      ++cov_1q473uea5y.s[21];

      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'get src').getError();
    }
  }], [{
    key: 'canPlayType',
    value: function canPlayType(mimeType) {
      ++cov_1q473uea5y.f[6];
      ++cov_1q473uea5y.s[15];

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

var cov_jkjoyzlgj = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/engines/html5/media-source/media-source-provider.js',
      hash = 'd4a182c1235cb47b6fa9b921f21591b0d396c64b',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/engines/html5/media-source/media-source-provider.js',
    statementMap: {
      '0': {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 47,
          column: 5
        }
      },
      '1': {
        start: {
          line: 41,
          column: 6
        },
        end: {
          line: 46,
          column: 7
        }
      },
      '2': {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 42,
          column: 113
        }
      },
      '3': {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 74
        }
      },
      '4': {
        start: {
          line: 45,
          column: 8
        },
        end: {
          line: 45,
          column: 125
        }
      },
      '5': {
        start: {
          line: 58,
          column: 16
        },
        end: {
          line: 58,
          column: 84
        }
      },
      '6': {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 62,
          column: 5
        }
      },
      '7': {
        start: {
          line: 60,
          column: 6
        },
        end: {
          line: 60,
          column: 91
        }
      },
      '8': {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 61,
          column: 64
        }
      },
      '9': {
        start: {
          line: 73,
          column: 30
        },
        end: {
          line: 73,
          column: 70
        }
      },
      '10': {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 80,
          column: 5
        }
      },
      '11': {
        start: {
          line: 75,
          column: 6
        },
        end: {
          line: 79,
          column: 7
        }
      },
      '12': {
        start: {
          line: 76,
          column: 8
        },
        end: {
          line: 76,
          column: 70
        }
      },
      '13': {
        start: {
          line: 77,
          column: 8
        },
        end: {
          line: 77,
          column: 110
        }
      },
      '14': {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 78,
          column: 20
        }
      },
      '15': {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 17
        }
      },
      '16': {
        start: {
          line: 94,
          column: 4
        },
        end: {
          line: 99,
          column: 5
        }
      },
      '17': {
        start: {
          line: 95,
          column: 6
        },
        end: {
          line: 97,
          column: 7
        }
      },
      '18': {
        start: {
          line: 96,
          column: 8
        },
        end: {
          line: 96,
          column: 57
        }
      },
      '19': {
        start: {
          line: 98,
          column: 6
        },
        end: {
          line: 98,
          column: 148
        }
      },
      '20': {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 100,
          column: 16
        }
      },
      '21': {
        start: {
          line: 104,
          column: 35
        },
        end: {
          line: 104,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        loc: {
          start: {
            line: 39,
            column: 72
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 39
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 57,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        },
        loc: {
          start: {
            line: 57,
            column: 74
          },
          end: {
            line: 63,
            column: 3
          }
        },
        line: 57
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 72,
            column: 2
          },
          end: {
            line: 72,
            column: 3
          }
        },
        loc: {
          start: {
            line: 72,
            column: 48
          },
          end: {
            line: 82,
            column: 3
          }
        },
        line: 72
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 93,
            column: 2
          },
          end: {
            line: 93,
            column: 3
          }
        },
        loc: {
          start: {
            line: 93,
            column: 117
          },
          end: {
            line: 101,
            column: 3
          }
        },
        line: 93
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        }, {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        }],
        line: 40
      },
      '1': {
        loc: {
          start: {
            line: 41,
            column: 6
          },
          end: {
            line: 46,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 41,
            column: 6
          },
          end: {
            line: 46,
            column: 7
          }
        }, {
          start: {
            line: 41,
            column: 6
          },
          end: {
            line: 46,
            column: 7
          }
        }],
        line: 41
      },
      '2': {
        loc: {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 62,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 62,
            column: 5
          }
        }, {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 62,
            column: 5
          }
        }],
        line: 59
      },
      '3': {
        loc: {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 79,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 79,
            column: 7
          }
        }, {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 79,
            column: 7
          }
        }],
        line: 75
      },
      '4': {
        loc: {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 99,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 99,
            column: 5
          }
        }, {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 99,
            column: 5
          }
        }],
        line: 94
      },
      '5': {
        loc: {
          start: {
            line: 94,
            column: 8
          },
          end: {
            line: 94,
            column: 40
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 94,
            column: 8
          },
          end: {
            line: 94,
            column: 20
          }
        }, {
          start: {
            line: 94,
            column: 24
          },
          end: {
            line: 94,
            column: 30
          }
        }, {
          start: {
            line: 94,
            column: 34
          },
          end: {
            line: 94,
            column: 40
          }
        }],
        line: 94
      },
      '6': {
        loc: {
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 97,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 97,
            column: 7
          }
        }, {
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 97,
            column: 7
          }
        }],
        line: 95
      },
      '7': {
        loc: {
          start: {
            line: 98,
            column: 13
          },
          end: {
            line: 98,
            column: 147
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 98,
            column: 52
          },
          end: {
            line: 98,
            column: 140
          }
        }, {
          start: {
            line: 98,
            column: 143
          },
          end: {
            line: 98,
            column: 147
          }
        }],
        line: 98
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0, 0],
      '6': [0, 0],
      '7': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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
     * Add a media source adapter to the registry
     * @function register
     * @param {IMediaSourceAdapter} mediaSourceAdapter - The media source adapter to register
     * @static
     * @returns {void}
     */

    /**
     * The media source adapter registry
     * @member {Array<IMediaSourceAdapter>} _mediaSourceAdapters
     * @static
     * @private
     */
    value: function register(mediaSourceAdapter) {
      ++cov_jkjoyzlgj.f[0];
      ++cov_jkjoyzlgj.s[0];

      if (mediaSourceAdapter) {
        ++cov_jkjoyzlgj.b[0][0];
        ++cov_jkjoyzlgj.s[1];

        if (!MediaSourceProvider._mediaSourceAdapters.includes(mediaSourceAdapter)) {
          ++cov_jkjoyzlgj.b[1][0];
          ++cov_jkjoyzlgj.s[2];

          MediaSourceProvider._logger.debug('Adapter <' + mediaSourceAdapter.id + '> has been registered successfully');
          ++cov_jkjoyzlgj.s[3];
          MediaSourceProvider._mediaSourceAdapters.push(mediaSourceAdapter);
        } else {
          ++cov_jkjoyzlgj.b[1][1];
          ++cov_jkjoyzlgj.s[4];

          MediaSourceProvider._logger.debug('Adapter <' + mediaSourceAdapter.id + '> is already registered, do not register again');
        }
      } else {
        ++cov_jkjoyzlgj.b[0][1];
      }
    }

    /**
     * Remove a media source adapter from the registry
     * @function unRegister
     * @param {IMediaSourceAdapter} mediaSourceAdapter - The media source adapter to unRegister
     * @static
     * @returns {void}
     */

    /**
     * The selected adapter for playback
     * @type {null|IMediaSourceAdapter}
     * @static
     * @private
     */

    /**
     * The logger of the media source provider
     * @member {any} _logger
     * @static
     * @private
     */

  }, {
    key: 'unRegister',
    value: function unRegister(mediaSourceAdapter) {
      ++cov_jkjoyzlgj.f[1];

      var index = (++cov_jkjoyzlgj.s[5], MediaSourceProvider._mediaSourceAdapters.indexOf(mediaSourceAdapter));
      ++cov_jkjoyzlgj.s[6];
      if (index > -1) {
        ++cov_jkjoyzlgj.b[2][0];
        ++cov_jkjoyzlgj.s[7];

        MediaSourceProvider._logger.debug('Unregistered <' + mediaSourceAdapter.id + '> adapter');
        ++cov_jkjoyzlgj.s[8];
        MediaSourceProvider._mediaSourceAdapters.splice(index, 1);
      } else {
        ++cov_jkjoyzlgj.b[2][1];
      }
    }

    /**
     * Checks if one of the registered media source adapters can play a given mime type
     * @function canPlayType
     * @param {string} mimeType - The mime type to check
     * @static
     * @returns {boolean} - If one of the adapters can play the specific mime type
     */

  }, {
    key: 'canPlayType',
    value: function canPlayType(mimeType) {
      ++cov_jkjoyzlgj.f[2];

      var mediaSourceAdapters = (++cov_jkjoyzlgj.s[9], MediaSourceProvider._mediaSourceAdapters);
      ++cov_jkjoyzlgj.s[10];
      for (var i = 0; i < mediaSourceAdapters.length; i++) {
        ++cov_jkjoyzlgj.s[11];

        if (mediaSourceAdapters[i].canPlayType(mimeType)) {
          ++cov_jkjoyzlgj.b[3][0];
          ++cov_jkjoyzlgj.s[12];

          MediaSourceProvider._selectedAdapter = mediaSourceAdapters[i];
          ++cov_jkjoyzlgj.s[13];
          MediaSourceProvider._logger.debug('Selected adapter is <' + MediaSourceProvider._selectedAdapter.id + '>');
          ++cov_jkjoyzlgj.s[14];
          return true;
        } else {
          ++cov_jkjoyzlgj.b[3][1];
        }
      }
      ++cov_jkjoyzlgj.s[15];
      return false;
    }

    /**
     * Get the appropriate media source adapter to the video source
     * @function getMediaSourceAdapter
     * @param {HTMLVideoElement} videoElement - The video element which requires adapter for a given mimeType
     * @param {Source} source - The selected source object
     * @param {Object} config - The player configuration
     * @returns {IMediaSourceAdapter|null} - The selected media source adapter, or null if such doesn't exists
     * @static
     */

  }, {
    key: 'getMediaSourceAdapter',
    value: function getMediaSourceAdapter(videoElement, source, config) {
      ++cov_jkjoyzlgj.f[3];
      ++cov_jkjoyzlgj.s[16];

      if ((++cov_jkjoyzlgj.b[5][0], videoElement) && (++cov_jkjoyzlgj.b[5][1], source) && (++cov_jkjoyzlgj.b[5][2], config)) {
        ++cov_jkjoyzlgj.b[4][0];
        ++cov_jkjoyzlgj.s[17];

        if (!MediaSourceProvider._selectedAdapter) {
          ++cov_jkjoyzlgj.b[6][0];
          ++cov_jkjoyzlgj.s[18];

          MediaSourceProvider.canPlayType(source.mimetype);
        } else {
          ++cov_jkjoyzlgj.b[6][1];
        }
        ++cov_jkjoyzlgj.s[19];
        return MediaSourceProvider._selectedAdapter ? (++cov_jkjoyzlgj.b[7][0], MediaSourceProvider._selectedAdapter.createAdapter(videoElement, source, config.engines)) : (++cov_jkjoyzlgj.b[7][1], null);
      } else {
        ++cov_jkjoyzlgj.b[4][1];
      }
      ++cov_jkjoyzlgj.s[20];
      return null;
    }
  }]);

  return MediaSourceProvider;
}();

MediaSourceProvider._logger = _logger2.default.getLogger('MediaSourceProvider');
MediaSourceProvider._mediaSourceAdapters = [_nativeAdapter2.default];
MediaSourceProvider._selectedAdapter = null;
exports.default = MediaSourceProvider;


var registerMediaSourceAdapter = (++cov_jkjoyzlgj.s[21], MediaSourceProvider.register);
exports.registerMediaSourceAdapter = registerMediaSourceAdapter;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_cf3lk8xb7 = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/plugin/base-plugin.js',
      hash = '779a262c90febbaa75c8b894f8d5e112253ed3f0',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/plugin/base-plugin.js',
    statementMap: {
      '0': {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 42
        }
      },
      '1': {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 91
        }
      },
      '2': {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 21
        }
      },
      '3': {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 25
        }
      },
      '4': {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 84,
          column: 43
        }
      },
      '5': {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 85,
          column: 53
        }
      },
      '6': {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 66
        }
      },
      '7': {
        start: {
          line: 96,
          column: 4
        },
        end: {
          line: 98,
          column: 5
        }
      },
      '8': {
        start: {
          line: 97,
          column: 6
        },
        end: {
          line: 97,
          column: 31
        }
      },
      '9': {
        start: {
          line: 99,
          column: 4
        },
        end: {
          line: 99,
          column: 23
        }
      },
      '10': {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 109,
          column: 47
        }
      },
      '11': {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 120,
          column: 91
        }
      },
      '12': {
        start: {
          line: 129,
          column: 4
        },
        end: {
          line: 129,
          column: 21
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 57,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        },
        loc: {
          start: {
            line: 57,
            column: 85
          },
          end: {
            line: 59,
            column: 3
          }
        },
        line: 57
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 69,
            column: 3
          }
        },
        loc: {
          start: {
            line: 69,
            column: 28
          },
          end: {
            line: 71,
            column: 3
          }
        },
        line: 69
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 81,
            column: 3
          }
        },
        loc: {
          start: {
            line: 81,
            column: 60
          },
          end: {
            line: 87,
            column: 3
          }
        },
        line: 81
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 95,
            column: 2
          },
          end: {
            line: 95,
            column: 3
          }
        },
        loc: {
          start: {
            line: 95,
            column: 32
          },
          end: {
            line: 100,
            column: 3
          }
        },
        line: 95
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 108,
            column: 2
          },
          end: {
            line: 108,
            column: 3
          }
        },
        loc: {
          start: {
            line: 108,
            column: 37
          },
          end: {
            line: 110,
            column: 3
          }
        },
        line: 108
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 119,
            column: 2
          },
          end: {
            line: 119,
            column: 3
          }
        },
        loc: {
          start: {
            line: 119,
            column: 18
          },
          end: {
            line: 121,
            column: 3
          }
        },
        line: 119
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 128,
            column: 2
          },
          end: {
            line: 128,
            column: 3
          }
        },
        loc: {
          start: {
            line: 128,
            column: 20
          },
          end: {
            line: 130,
            column: 3
          }
        },
        line: 128
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 57,
            column: 52
          },
          end: {
            line: 57,
            column: 71
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 57,
            column: 69
          },
          end: {
            line: 57,
            column: 71
          }
        }],
        line: 57
      },
      '1': {
        loc: {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 98,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 98,
            column: 5
          }
        }, {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 98,
            column: 5
          }
        }],
        line: 96
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    b: {
      '0': [0],
      '1': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(8);

var _player2 = _interopRequireDefault(_player);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _util = __webpack_require__(11);

var _eventManager = __webpack_require__(6);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _playerError = __webpack_require__(10);

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
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (++cov_cf3lk8xb7.b[0][0], {});
      ++cov_cf3lk8xb7.f[0];
      ++cov_cf3lk8xb7.s[0];

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
      ++cov_cf3lk8xb7.f[1];
      ++cov_cf3lk8xb7.s[1];

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

    ++cov_cf3lk8xb7.f[2];
    ++cov_cf3lk8xb7.s[2];

    this.name = name;
    ++cov_cf3lk8xb7.s[3];
    this.player = player;
    ++cov_cf3lk8xb7.s[4];
    this.eventManager = new _eventManager2.default();
    ++cov_cf3lk8xb7.s[5];
    this.logger = _logger2.default.getLogger(this.name);
    ++cov_cf3lk8xb7.s[6];
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
      ++cov_cf3lk8xb7.f[3];
      ++cov_cf3lk8xb7.s[7];

      if (attr) {
        ++cov_cf3lk8xb7.b[1][0];
        ++cov_cf3lk8xb7.s[8];

        return this.config[attr];
      } else {
        ++cov_cf3lk8xb7.b[1][1];
      }
      ++cov_cf3lk8xb7.s[9];
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
      ++cov_cf3lk8xb7.f[4];
      ++cov_cf3lk8xb7.s[10];

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
      ++cov_cf3lk8xb7.f[5];
      ++cov_cf3lk8xb7.s[11];

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
      ++cov_cf3lk8xb7.f[6];
      ++cov_cf3lk8xb7.s[12];

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

var cov_2hprl18w1l = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/plugin/plugin-manager.js',
      hash = '9d7db08f43ce1c9f9a27b2ee3e0b5d344e02b586',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/plugin/plugin-manager.js',
    statementMap: {
      '0': {
        start: {
          line: 12,
          column: 15
        },
        end: {
          line: 12,
          column: 55
        }
      },
      '1': {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 46,
          column: 5
        }
      },
      '2': {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 45,
          column: 75
        }
      },
      '3': {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 51,
          column: 5
        }
      },
      '4': {
        start: {
          line: 48,
          column: 6
        },
        end: {
          line: 48,
          column: 49
        }
      },
      '5': {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 49,
          column: 72
        }
      },
      '6': {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 50,
          column: 18
        }
      },
      '7': {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 82
        }
      },
      '8': {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 17
        }
      },
      '9': {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 67,
          column: 5
        }
      },
      '10': {
        start: {
          line: 65,
          column: 6
        },
        end: {
          line: 65,
          column: 43
        }
      },
      '11': {
        start: {
          line: 66,
          column: 6
        },
        end: {
          line: 66,
          column: 53
        }
      },
      '12': {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 81,
          column: 5
        }
      },
      '13': {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 80,
          column: 85
        }
      },
      '14': {
        start: {
          line: 82,
          column: 22
        },
        end: {
          line: 82,
          column: 55
        }
      },
      '15': {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 87,
          column: 5
        }
      },
      '16': {
        start: {
          line: 84,
          column: 6
        },
        end: {
          line: 84,
          column: 78
        }
      },
      '17': {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 85,
          column: 55
        }
      },
      '18': {
        start: {
          line: 86,
          column: 6
        },
        end: {
          line: 86,
          column: 18
        }
      },
      '19': {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 68
        }
      },
      '20': {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 89,
          column: 17
        }
      },
      '21': {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 98,
          column: 52
        }
      },
      '22': {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 109,
          column: 21
        }
      },
      '23': {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 31
        }
      },
      '24': {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 120,
          column: 35
        }
      },
      '25': {
        start: {
          line: 129,
          column: 23
        },
        end: {
          line: 129,
          column: 45
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 43,
            column: 3
          }
        },
        loc: {
          start: {
            line: 43,
            column: 60
          },
          end: {
            line: 54,
            column: 3
          }
        },
        line: 43
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 63,
            column: 3
          }
        },
        loc: {
          start: {
            line: 63,
            column: 40
          },
          end: {
            line: 68,
            column: 3
          }
        },
        line: 63
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 78,
            column: 3
          }
        },
        loc: {
          start: {
            line: 78,
            column: 67
          },
          end: {
            line: 90,
            column: 3
          }
        },
        line: 78
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 97,
            column: 2
          },
          end: {
            line: 97,
            column: 3
          }
        },
        loc: {
          start: {
            line: 97,
            column: 18
          },
          end: {
            line: 99,
            column: 3
          }
        },
        line: 97
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 108,
            column: 2
          },
          end: {
            line: 108,
            column: 3
          }
        },
        loc: {
          start: {
            line: 108,
            column: 51
          },
          end: {
            line: 111,
            column: 3
          }
        },
        line: 108
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 119,
            column: 2
          },
          end: {
            line: 119,
            column: 3
          }
        },
        loc: {
          start: {
            line: 119,
            column: 33
          },
          end: {
            line: 121,
            column: 3
          }
        },
        line: 119
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        }, {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        }],
        line: 44
      },
      '1': {
        loc: {
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 44,
            column: 90
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 44,
            column: 37
          }
        }, {
          start: {
            line: 44,
            column: 41
          },
          end: {
            line: 44,
            column: 90
          }
        }],
        line: 44
      },
      '2': {
        loc: {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        }, {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        }],
        line: 47
      },
      '3': {
        loc: {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        }, {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        }],
        line: 64
      },
      '4': {
        loc: {
          start: {
            line: 78,
            column: 37
          },
          end: {
            line: 78,
            column: 56
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 78,
            column: 54
          },
          end: {
            line: 78,
            column: 56
          }
        }],
        line: 78
      },
      '5': {
        loc: {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        }, {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        }],
        line: 79
      },
      '6': {
        loc: {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        }, {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        }],
        line: 83
      },
      '7': {
        loc: {
          start: {
            line: 83,
            column: 8
          },
          end: {
            line: 83,
            column: 52
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 83,
            column: 8
          },
          end: {
            line: 83,
            column: 27
          }
        }, {
          start: {
            line: 83,
            column: 31
          },
          end: {
            line: 83,
            column: 52
          }
        }],
        line: 83
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0],
      '5': [0, 0],
      '6': [0, 0],
      '7': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basePlugin = __webpack_require__(14);

var _basePlugin2 = _interopRequireDefault(_basePlugin);

var _playerError = __webpack_require__(10);

var _playerError2 = _interopRequireDefault(_playerError);

var _player = __webpack_require__(8);

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
var logger = (++cov_2hprl18w1l.s[0], _logger2.default.getLogger("PluginManager"));

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
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (++cov_2hprl18w1l.b[4][0], {});
      ++cov_2hprl18w1l.f[2];
      ++cov_2hprl18w1l.s[12];

      if (!PluginManager._registry.has(name)) {
        ++cov_2hprl18w1l.b[5][0];
        ++cov_2hprl18w1l.s[13];

        throw new _playerError2.default(_playerError2.default.TYPE.NOT_REGISTERED_PLUGIN, name).getError();
      } else {
        ++cov_2hprl18w1l.b[5][1];
      }
      var pluginClass = (++cov_2hprl18w1l.s[14], PluginManager._registry.get(name));
      ++cov_2hprl18w1l.s[15];
      if ((++cov_2hprl18w1l.b[7][0], pluginClass != null) && (++cov_2hprl18w1l.b[7][1], pluginClass.isValid())) {
        ++cov_2hprl18w1l.b[6][0];
        ++cov_2hprl18w1l.s[16];

        this._plugins.set(name, pluginClass.createPlugin(name, player, config));
        ++cov_2hprl18w1l.s[17];
        logger.debug('Plugin <' + name + '> has been loaded');
        ++cov_2hprl18w1l.s[18];
        return true;
      } else {
        ++cov_2hprl18w1l.b[6][1];
      }
      ++cov_2hprl18w1l.s[19];
      logger.debug('Plugin <' + name + '> isn\'t loaded, isValid()=false');
      ++cov_2hprl18w1l.s[20];
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
      ++cov_2hprl18w1l.f[3];
      ++cov_2hprl18w1l.s[21];

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
      ++cov_2hprl18w1l.f[4];
      ++cov_2hprl18w1l.s[22];

      plugin.destroy();
      ++cov_2hprl18w1l.s[23];
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
      ++cov_2hprl18w1l.f[5];
      ++cov_2hprl18w1l.s[24];

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
      ++cov_2hprl18w1l.f[0];
      ++cov_2hprl18w1l.s[1];

      if ((++cov_2hprl18w1l.b[1][0], typeof handler !== 'function') || (++cov_2hprl18w1l.b[1][1], handler.prototype instanceof _basePlugin2.default === false)) {
        ++cov_2hprl18w1l.b[0][0];
        ++cov_2hprl18w1l.s[2];

        throw new _playerError2.default(_playerError2.default.TYPE.NOT_VALID_HANDLER).getError();
      } else {
        ++cov_2hprl18w1l.b[0][1];
      }
      ++cov_2hprl18w1l.s[3];
      if (!PluginManager._registry.has(name)) {
        ++cov_2hprl18w1l.b[2][0];
        ++cov_2hprl18w1l.s[4];

        PluginManager._registry.set(name, handler);
        ++cov_2hprl18w1l.s[5];
        logger.debug('Plugin <' + name + '> has been registered successfully');
        ++cov_2hprl18w1l.s[6];
        return true;
      } else {
        ++cov_2hprl18w1l.b[2][1];
      }
      ++cov_2hprl18w1l.s[7];
      logger.debug('Plugin <' + name + '> is already registered, do not register again');
      ++cov_2hprl18w1l.s[8];
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
      ++cov_2hprl18w1l.f[1];
      ++cov_2hprl18w1l.s[9];

      if (PluginManager._registry.has(name)) {
        ++cov_2hprl18w1l.b[3][0];
        ++cov_2hprl18w1l.s[10];

        PluginManager._registry.delete(name);
        ++cov_2hprl18w1l.s[11];
        logger.debug('Unregistered <' + name + '> plugin.');
      } else {
        ++cov_2hprl18w1l.b[3][1];
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
var registerPlugin = (++cov_2hprl18w1l.s[25], PluginManager.register);
exports.registerPlugin = registerPlugin;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2ash98nnh4 = function () {
  var path = "/Users/dan.ziv/WebstormProjects/playkit-js/src/state/state-types.js",
      hash = "565a43305310077205f08574714177c5d8e1d96c",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/dan.ziv/WebstormProjects/playkit-js/src/state/state-types.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 56
        },
        end: {
          line: 14,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var PLAYER_STATE_TYPES = (++cov_2ash98nnh4.s[0], {
  IDLE: "idle",
  LOADING: "loading",
  PLAYING: "playing",
  PAUSED: "paused",
  BUFFERING: "buffering"
});

exports.default = PLAYER_STATE_TYPES;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_pg7voulsz = function () {
  var path = "/Users/dan.ziv/WebstormProjects/playkit-js/src/utils/multi-map.js",
      hash = "388b4881ee702c40fa3c29e18d2cef3d8e867bdd",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/dan.ziv/WebstormProjects/playkit-js/src/utils/multi-map.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 26
        }
      },
      "1": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 32,
          column: 5
        }
      },
      "2": {
        start: {
          line: 25,
          column: 17
        },
        end: {
          line: 25,
          column: 35
        }
      },
      "3": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 29,
          column: 7
        }
      },
      "4": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 25
        }
      },
      "5": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 33
        }
      },
      "6": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 34
        }
      },
      "7": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 31
        }
      },
      "8": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 30
        }
      },
      "9": {
        start: {
          line: 60,
          column: 15
        },
        end: {
          line: 60,
          column: 33
        }
      },
      "10": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 36
        }
      },
      "11": {
        start: {
          line: 71,
          column: 20
        },
        end: {
          line: 71,
          column: 22
        }
      },
      "12": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 74,
          column: 5
        }
      },
      "13": {
        start: {
          line: 73,
          column: 6
        },
        end: {
          line: 73,
          column: 32
        }
      },
      "14": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 16
        }
      },
      "15": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 85,
          column: 36
        }
      },
      "16": {
        start: {
          line: 85,
          column: 29
        },
        end: {
          line: 85,
          column: 36
        }
      },
      "17": {
        start: {
          line: 86,
          column: 15
        },
        end: {
          line: 86,
          column: 33
        }
      },
      "18": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 94,
          column: 5
        }
      },
      "19": {
        start: {
          line: 88,
          column: 6
        },
        end: {
          line: 93,
          column: 7
        }
      },
      "20": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 92,
          column: 9
        }
      },
      "21": {
        start: {
          line: 90,
          column: 10
        },
        end: {
          line: 90,
          column: 28
        }
      },
      "22": {
        start: {
          line: 91,
          column: 10
        },
        end: {
          line: 91,
          column: 14
        }
      },
      "23": {
        start: {
          line: 103,
          column: 4
        },
        end: {
          line: 103,
          column: 28
        }
      },
      "24": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 112,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 36
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 23
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        loc: {
          start: {
            line: 41,
            column: 38
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 41
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 50,
            column: 3
          }
        },
        loc: {
          start: {
            line: 50,
            column: 28
          },
          end: {
            line: 52,
            column: 3
          }
        },
        line: 50
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 59,
            column: 3
          }
        },
        loc: {
          start: {
            line: 59,
            column: 29
          },
          end: {
            line: 64,
            column: 3
          }
        },
        line: 59
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 70,
            column: 2
          },
          end: {
            line: 70,
            column: 3
          }
        },
        loc: {
          start: {
            line: 70,
            column: 16
          },
          end: {
            line: 76,
            column: 3
          }
        },
        line: 70
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 84,
            column: 2
          },
          end: {
            line: 84,
            column: 3
          }
        },
        loc: {
          start: {
            line: 84,
            column: 38
          },
          end: {
            line: 95,
            column: 3
          }
        },
        line: 84
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 102,
            column: 2
          },
          end: {
            line: 102,
            column: 3
          }
        },
        loc: {
          start: {
            line: 102,
            column: 27
          },
          end: {
            line: 104,
            column: 3
          }
        },
        line: 102
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 111,
            column: 2
          },
          end: {
            line: 111,
            column: 3
          }
        },
        loc: {
          start: {
            line: 111,
            column: 16
          },
          end: {
            line: 113,
            column: 3
          }
        },
        line: 111
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        }, {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        }],
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 29,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 29,
            column: 7
          }
        }, {
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 29,
            column: 7
          }
        }],
        line: 26
      },
      "2": {
        loc: {
          start: {
            line: 63,
            column: 11
          },
          end: {
            line: 63,
            column: 35
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 63,
            column: 18
          },
          end: {
            line: 63,
            column: 30
          }
        }, {
          start: {
            line: 63,
            column: 33
          },
          end: {
            line: 63,
            column: 35
          }
        }],
        line: 63
      },
      "3": {
        loc: {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 85,
            column: 36
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 85,
            column: 36
          }
        }, {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 85,
            column: 36
          }
        }],
        line: 85
      },
      "4": {
        loc: {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        }, {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        }],
        line: 87
      },
      "5": {
        loc: {
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 92,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 92,
            column: 9
          }
        }, {
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 92,
            column: 9
          }
        }],
        line: 89
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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

    ++cov_pg7voulsz.f[0];
    ++cov_pg7voulsz.s[0];

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
      ++cov_pg7voulsz.f[1];
      ++cov_pg7voulsz.s[1];

      if (this._map.has(key)) {
        ++cov_pg7voulsz.b[0][0];

        var list = (++cov_pg7voulsz.s[2], this._map.get(key));
        ++cov_pg7voulsz.s[3];
        if (Array.isArray(list)) {
          ++cov_pg7voulsz.b[1][0];
          ++cov_pg7voulsz.s[4];

          list.push(value);
          ++cov_pg7voulsz.s[5];
          this._map.set(key, list);
        } else {
          ++cov_pg7voulsz.b[1][1];
        }
      } else {
        ++cov_pg7voulsz.b[0][1];
        ++cov_pg7voulsz.s[6];

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
      ++cov_pg7voulsz.f[2];
      ++cov_pg7voulsz.s[7];

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
      ++cov_pg7voulsz.f[3];
      ++cov_pg7voulsz.s[8];

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
      ++cov_pg7voulsz.f[4];

      var list = (++cov_pg7voulsz.s[9], this._map.get(key));
      // slice() clones the list so that it and the map can each be modified
      // without affecting the other.
      ++cov_pg7voulsz.s[10];
      return list ? (++cov_pg7voulsz.b[2][0], list.slice()) : (++cov_pg7voulsz.b[2][1], []);
    }

    /**
     * Get a list of all values.
     * @returns {!Array.<T>} -
     */

  }, {
    key: "getAll",
    value: function getAll() {
      ++cov_pg7voulsz.f[5];

      var list = (++cov_pg7voulsz.s[11], []);
      ++cov_pg7voulsz.s[12];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._map.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;
          ++cov_pg7voulsz.s[13];

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

      ++cov_pg7voulsz.s[14];
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
      ++cov_pg7voulsz.f[6];
      ++cov_pg7voulsz.s[15];

      if (!this._map.has(key)) {
          ++cov_pg7voulsz.b[3][0];
          ++cov_pg7voulsz.s[16];
          return;
        } else {
        ++cov_pg7voulsz.b[3][1];
      }var list = (++cov_pg7voulsz.s[17], this._map.get(key));
      ++cov_pg7voulsz.s[18];
      if (Array.isArray(list)) {
        ++cov_pg7voulsz.b[4][0];
        ++cov_pg7voulsz.s[19];

        for (var i = 0; i < list.length; ++i) {
          ++cov_pg7voulsz.s[20];

          if (list[i] == value) {
            ++cov_pg7voulsz.b[5][0];
            ++cov_pg7voulsz.s[21];

            list.splice(i, 1);
            ++cov_pg7voulsz.s[22];
            --i;
          } else {
            ++cov_pg7voulsz.b[5][1];
          }
        }
      } else {
        ++cov_pg7voulsz.b[4][1];
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
      ++cov_pg7voulsz.f[7];
      ++cov_pg7voulsz.s[23];

      return this._map.keys();
    }

    /**
     * Clear all keys and values from the multimap.
     * @returns {void}
     */

  }, {
    key: "clear",
    value: function clear() {
      ++cov_pg7voulsz.f[8];
      ++cov_pg7voulsz.s[24];

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
		"build:test": "NODE_ENV=test webpack",
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
		"build:test",
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
		"nyc": "^10.1.2",
		"pre-push": "^0.1.1",
		"sinon": "^2.0.0",
		"sinon-chai": "^2.8.0",
		"standard-version": "^4.0.0",
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

var cov_22t8x5qbf1 = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/engines/html5/html5.js',
      hash = '9f5ab6a43d9275c1b55b20f561638d3285a3cb2e',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/engines/html5/html5.js',
    statementMap: {
      '0': {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 53
        }
      },
      '1': {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 12
        }
      },
      '2': {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 31
        }
      },
      '3': {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 44
        }
      },
      '4': {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 54,
          column: 49
        }
      },
      '5': {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 18
        }
      },
      '6': {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 18
        }
      },
      '7': {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 67,
          column: 5
        }
      },
      '8': {
        start: {
          line: 66,
          column: 6
        },
        end: {
          line: 66,
          column: 41
        }
      },
      '9': {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 74,
          column: 5
        }
      },
      '10': {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 19
        }
      },
      '11': {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 70,
          column: 38
        }
      },
      '12': {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 73,
          column: 7
        }
      },
      '13': {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 72,
          column: 50
        }
      },
      '14': {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 33
        }
      },
      '15': {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 88,
          column: 5
        }
      },
      '16': {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 87,
          column: 9
        }
      },
      '17': {
        start: {
          line: 86,
          column: 8
        },
        end: {
          line: 86,
          column: 68
        }
      },
      '18': {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 99,
          column: 5
        }
      },
      '19': {
        start: {
          line: 90,
          column: 6
        },
        end: {
          line: 92,
          column: 9
        }
      },
      '20': {
        start: {
          line: 91,
          column: 8
        },
        end: {
          line: 91,
          column: 34
        }
      },
      '21': {
        start: {
          line: 93,
          column: 6
        },
        end: {
          line: 95,
          column: 9
        }
      },
      '22': {
        start: {
          line: 94,
          column: 8
        },
        end: {
          line: 94,
          column: 41
        }
      },
      '23': {
        start: {
          line: 96,
          column: 6
        },
        end: {
          line: 98,
          column: 9
        }
      },
      '24': {
        start: {
          line: 97,
          column: 8
        },
        end: {
          line: 97,
          column: 41
        }
      },
      '25': {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 110,
          column: 5
        }
      },
      '26': {
        start: {
          line: 109,
          column: 6
        },
        end: {
          line: 109,
          column: 70
        }
      },
      '27': {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 115,
          column: 5
        }
      },
      '28': {
        start: {
          line: 112,
          column: 6
        },
        end: {
          line: 112,
          column: 94
        }
      },
      '29': {
        start: {
          line: 113,
          column: 6
        },
        end: {
          line: 113,
          column: 94
        }
      },
      '30': {
        start: {
          line: 114,
          column: 6
        },
        end: {
          line: 114,
          column: 93
        }
      },
      '31': {
        start: {
          line: 123,
          column: 4
        },
        end: {
          line: 123,
          column: 20
        }
      },
      '32': {
        start: {
          line: 132,
          column: 4
        },
        end: {
          line: 132,
          column: 47
        }
      },
      '33': {
        start: {
          line: 134,
          column: 4
        },
        end: {
          line: 134,
          column: 35
        }
      },
      '34': {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 135,
          column: 36
        }
      },
      '35': {
        start: {
          line: 136,
          column: 4
        },
        end: {
          line: 136,
          column: 45
        }
      },
      '36': {
        start: {
          line: 137,
          column: 4
        },
        end: {
          line: 137,
          column: 29
        }
      },
      '37': {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 140,
          column: 5
        }
      },
      '38': {
        start: {
          line: 139,
          column: 6
        },
        end: {
          line: 139,
          column: 42
        }
      },
      '39': {
        start: {
          line: 151,
          column: 4
        },
        end: {
          line: 151,
          column: 113
        }
      },
      '40': {
        start: {
          line: 160,
          column: 4
        },
        end: {
          line: 162,
          column: 5
        }
      },
      '41': {
        start: {
          line: 161,
          column: 6
        },
        end: {
          line: 161,
          column: 60
        }
      },
      '42': {
        start: {
          line: 171,
          column: 4
        },
        end: {
          line: 173,
          column: 5
        }
      },
      '43': {
        start: {
          line: 172,
          column: 6
        },
        end: {
          line: 172,
          column: 60
        }
      },
      '44': {
        start: {
          line: 182,
          column: 4
        },
        end: {
          line: 184,
          column: 5
        }
      },
      '45': {
        start: {
          line: 183,
          column: 6
        },
        end: {
          line: 183,
          column: 58
        }
      },
      '46': {
        start: {
          line: 194,
          column: 4
        },
        end: {
          line: 196,
          column: 5
        }
      },
      '47': {
        start: {
          line: 195,
          column: 6
        },
        end: {
          line: 195,
          column: 55
        }
      },
      '48': {
        start: {
          line: 206,
          column: 4
        },
        end: {
          line: 206,
          column: 26
        }
      },
      '49': {
        start: {
          line: 215,
          column: 4
        },
        end: {
          line: 217,
          column: 5
        }
      },
      '50': {
        start: {
          line: 216,
          column: 6
        },
        end: {
          line: 216,
          column: 42
        }
      },
      '51': {
        start: {
          line: 218,
          column: 4
        },
        end: {
          line: 218,
          column: 14
        }
      },
      '52': {
        start: {
          line: 228,
          column: 4
        },
        end: {
          line: 228,
          column: 27
        }
      },
      '53': {
        start: {
          line: 237,
          column: 4
        },
        end: {
          line: 237,
          column: 28
        }
      },
      '54': {
        start: {
          line: 246,
          column: 4
        },
        end: {
          line: 246,
          column: 92
        }
      },
      '55': {
        start: {
          line: 255,
          column: 4
        },
        end: {
          line: 255,
          column: 32
        }
      },
      '56': {
        start: {
          line: 265,
          column: 4
        },
        end: {
          line: 265,
          column: 30
        }
      },
      '57': {
        start: {
          line: 274,
          column: 4
        },
        end: {
          line: 274,
          column: 29
        }
      },
      '58': {
        start: {
          line: 284,
          column: 4
        },
        end: {
          line: 284,
          column: 26
        }
      },
      '59': {
        start: {
          line: 293,
          column: 4
        },
        end: {
          line: 293,
          column: 27
        }
      },
      '60': {
        start: {
          line: 305,
          column: 4
        },
        end: {
          line: 305,
          column: 27
        }
      },
      '61': {
        start: {
          line: 314,
          column: 4
        },
        end: {
          line: 314,
          column: 28
        }
      },
      '62': {
        start: {
          line: 323,
          column: 4
        },
        end: {
          line: 323,
          column: 29
        }
      },
      '63': {
        start: {
          line: 332,
          column: 4
        },
        end: {
          line: 332,
          column: 27
        }
      },
      '64': {
        start: {
          line: 341,
          column: 4
        },
        end: {
          line: 341,
          column: 29
        }
      },
      '65': {
        start: {
          line: 351,
          column: 4
        },
        end: {
          line: 351,
          column: 26
        }
      },
      '66': {
        start: {
          line: 360,
          column: 4
        },
        end: {
          line: 360,
          column: 26
        }
      },
      '67': {
        start: {
          line: 369,
          column: 4
        },
        end: {
          line: 369,
          column: 33
        }
      },
      '68': {
        start: {
          line: 379,
          column: 4
        },
        end: {
          line: 379,
          column: 29
        }
      },
      '69': {
        start: {
          line: 388,
          column: 4
        },
        end: {
          line: 388,
          column: 27
        }
      },
      '70': {
        start: {
          line: 398,
          column: 4
        },
        end: {
          line: 398,
          column: 31
        }
      },
      '71': {
        start: {
          line: 407,
          column: 4
        },
        end: {
          line: 407,
          column: 28
        }
      },
      '72': {
        start: {
          line: 417,
          column: 4
        },
        end: {
          line: 417,
          column: 33
        }
      },
      '73': {
        start: {
          line: 426,
          column: 4
        },
        end: {
          line: 426,
          column: 29
        }
      },
      '74': {
        start: {
          line: 436,
          column: 4
        },
        end: {
          line: 436,
          column: 25
        }
      },
      '75': {
        start: {
          line: 445,
          column: 4
        },
        end: {
          line: 445,
          column: 25
        }
      },
      '76': {
        start: {
          line: 455,
          column: 4
        },
        end: {
          line: 455,
          column: 33
        }
      },
      '77': {
        start: {
          line: 464,
          column: 4
        },
        end: {
          line: 464,
          column: 29
        }
      },
      '78': {
        start: {
          line: 474,
          column: 4
        },
        end: {
          line: 474,
          column: 41
        }
      },
      '79': {
        start: {
          line: 483,
          column: 4
        },
        end: {
          line: 483,
          column: 33
        }
      },
      '80': {
        start: {
          line: 493,
          column: 4
        },
        end: {
          line: 493,
          column: 55
        }
      },
      '81': {
        start: {
          line: 502,
          column: 4
        },
        end: {
          line: 502,
          column: 40
        }
      },
      '82': {
        start: {
          line: 511,
          column: 4
        },
        end: {
          line: 511,
          column: 26
        }
      },
      '83': {
        start: {
          line: 520,
          column: 4
        },
        end: {
          line: 520,
          column: 26
        }
      },
      '84': {
        start: {
          line: 528,
          column: 4
        },
        end: {
          line: 528,
          column: 33
        }
      },
      '85': {
        start: {
          line: 541,
          column: 4
        },
        end: {
          line: 541,
          column: 31
        }
      },
      '86': {
        start: {
          line: 549,
          column: 4
        },
        end: {
          line: 549,
          column: 32
        }
      },
      '87': {
        start: {
          line: 557,
          column: 4
        },
        end: {
          line: 557,
          column: 31
        }
      },
      '88': {
        start: {
          line: 572,
          column: 4
        },
        end: {
          line: 577,
          column: 5
        }
      },
      '89': {
        start: {
          line: 573,
          column: 6
        },
        end: {
          line: 573,
          column: 55
        }
      },
      '90': {
        start: {
          line: 574,
          column: 6
        },
        end: {
          line: 574,
          column: 34
        }
      },
      '91': {
        start: {
          line: 576,
          column: 6
        },
        end: {
          line: 576,
          column: 19
        }
      },
      '92': {
        start: {
          line: 578,
          column: 4
        },
        end: {
          line: 578,
          column: 40
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        loc: {
          start: {
            line: 41,
            column: 31
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 41
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 50,
            column: 3
          }
        },
        loc: {
          start: {
            line: 50,
            column: 46
          },
          end: {
            line: 56,
            column: 3
          }
        },
        line: 50
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 63,
            column: 3
          }
        },
        loc: {
          start: {
            line: 63,
            column: 18
          },
          end: {
            line: 76,
            column: 3
          }
        },
        line: 63
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 83,
            column: 2
          },
          end: {
            line: 83,
            column: 3
          }
        },
        loc: {
          start: {
            line: 83,
            column: 17
          },
          end: {
            line: 100,
            column: 3
          }
        },
        line: 83
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 85,
            column: 68
          },
          end: {
            line: 85,
            column: 69
          }
        },
        loc: {
          start: {
            line: 85,
            column: 74
          },
          end: {
            line: 87,
            column: 7
          }
        },
        line: 85
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 90,
            column: 92
          },
          end: {
            line: 90,
            column: 93
          }
        },
        loc: {
          start: {
            line: 90,
            column: 114
          },
          end: {
            line: 92,
            column: 7
          }
        },
        line: 90
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 93,
            column: 92
          },
          end: {
            line: 93,
            column: 93
          }
        },
        loc: {
          start: {
            line: 93,
            column: 114
          },
          end: {
            line: 95,
            column: 7
          }
        },
        line: 93
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 96,
            column: 91
          },
          end: {
            line: 96,
            column: 92
          }
        },
        loc: {
          start: {
            line: 96,
            column: 113
          },
          end: {
            line: 98,
            column: 7
          }
        },
        line: 96
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 107,
            column: 2
          },
          end: {
            line: 107,
            column: 3
          }
        },
        loc: {
          start: {
            line: 107,
            column: 17
          },
          end: {
            line: 116,
            column: 3
          }
        },
        line: 107
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 122,
            column: 2
          },
          end: {
            line: 122,
            column: 3
          }
        },
        loc: {
          start: {
            line: 122,
            column: 38
          },
          end: {
            line: 124,
            column: 3
          }
        },
        line: 122
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 131,
            column: 2
          },
          end: {
            line: 131,
            column: 3
          }
        },
        loc: {
          start: {
            line: 131,
            column: 30
          },
          end: {
            line: 141,
            column: 3
          }
        },
        line: 131
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 150,
            column: 2
          },
          end: {
            line: 150,
            column: 3
          }
        },
        loc: {
          start: {
            line: 150,
            column: 64
          },
          end: {
            line: 152,
            column: 3
          }
        },
        line: 150
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 159,
            column: 2
          },
          end: {
            line: 159,
            column: 3
          }
        },
        loc: {
          start: {
            line: 159,
            column: 49
          },
          end: {
            line: 163,
            column: 3
          }
        },
        line: 159
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 170,
            column: 2
          },
          end: {
            line: 170,
            column: 3
          }
        },
        loc: {
          start: {
            line: 170,
            column: 49
          },
          end: {
            line: 174,
            column: 3
          }
        },
        line: 170
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 181,
            column: 2
          },
          end: {
            line: 181,
            column: 3
          }
        },
        loc: {
          start: {
            line: 181,
            column: 46
          },
          end: {
            line: 185,
            column: 3
          }
        },
        line: 181
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 193,
            column: 2
          },
          end: {
            line: 193,
            column: 3
          }
        },
        loc: {
          start: {
            line: 193,
            column: 32
          },
          end: {
            line: 197,
            column: 3
          }
        },
        line: 193
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 205,
            column: 2
          },
          end: {
            line: 205,
            column: 3
          }
        },
        loc: {
          start: {
            line: 205,
            column: 32
          },
          end: {
            line: 207,
            column: 3
          }
        },
        line: 205
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 214,
            column: 2
          },
          end: {
            line: 214,
            column: 3
          }
        },
        loc: {
          start: {
            line: 214,
            column: 20
          },
          end: {
            line: 219,
            column: 3
          }
        },
        line: 214
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 227,
            column: 2
          },
          end: {
            line: 227,
            column: 3
          }
        },
        loc: {
          start: {
            line: 227,
            column: 15
          },
          end: {
            line: 229,
            column: 3
          }
        },
        line: 227
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 236,
            column: 2
          },
          end: {
            line: 236,
            column: 3
          }
        },
        loc: {
          start: {
            line: 236,
            column: 16
          },
          end: {
            line: 238,
            column: 3
          }
        },
        line: 236
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 245,
            column: 2
          },
          end: {
            line: 245,
            column: 3
          }
        },
        loc: {
          start: {
            line: 245,
            column: 26
          },
          end: {
            line: 247,
            column: 3
          }
        },
        line: 245
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 254,
            column: 2
          },
          end: {
            line: 254,
            column: 3
          }
        },
        loc: {
          start: {
            line: 254,
            column: 28
          },
          end: {
            line: 256,
            column: 3
          }
        },
        line: 254
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 264,
            column: 2
          },
          end: {
            line: 264,
            column: 3
          }
        },
        loc: {
          start: {
            line: 264,
            column: 36
          },
          end: {
            line: 266,
            column: 3
          }
        },
        line: 264
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 273,
            column: 2
          },
          end: {
            line: 273,
            column: 3
          }
        },
        loc: {
          start: {
            line: 273,
            column: 25
          },
          end: {
            line: 275,
            column: 3
          }
        },
        line: 273
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 283,
            column: 2
          },
          end: {
            line: 283,
            column: 3
          }
        },
        loc: {
          start: {
            line: 283,
            column: 32
          },
          end: {
            line: 285,
            column: 3
          }
        },
        line: 283
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 292,
            column: 2
          },
          end: {
            line: 292,
            column: 3
          }
        },
        loc: {
          start: {
            line: 292,
            column: 23
          },
          end: {
            line: 294,
            column: 3
          }
        },
        line: 292
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 296,
            column: 2
          },
          end: {
            line: 296,
            column: 3
          }
        },
        loc: {
          start: {
            line: 296,
            column: 10
          },
          end: {
            line: 297,
            column: 3
          }
        },
        line: 296
      },
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 304,
            column: 2
          },
          end: {
            line: 304,
            column: 3
          }
        },
        loc: {
          start: {
            line: 304,
            column: 24
          },
          end: {
            line: 306,
            column: 3
          }
        },
        line: 304
      },
      '28': {
        name: '(anonymous_28)',
        decl: {
          start: {
            line: 313,
            column: 2
          },
          end: {
            line: 313,
            column: 3
          }
        },
        loc: {
          start: {
            line: 313,
            column: 25
          },
          end: {
            line: 315,
            column: 3
          }
        },
        line: 313
      },
      '29': {
        name: '(anonymous_29)',
        decl: {
          start: {
            line: 322,
            column: 2
          },
          end: {
            line: 322,
            column: 3
          }
        },
        loc: {
          start: {
            line: 322,
            column: 29
          },
          end: {
            line: 324,
            column: 3
          }
        },
        line: 322
      },
      '30': {
        name: '(anonymous_30)',
        decl: {
          start: {
            line: 331,
            column: 2
          },
          end: {
            line: 331,
            column: 3
          }
        },
        loc: {
          start: {
            line: 331,
            column: 27
          },
          end: {
            line: 333,
            column: 3
          }
        },
        line: 331
      },
      '31': {
        name: '(anonymous_31)',
        decl: {
          start: {
            line: 340,
            column: 2
          },
          end: {
            line: 340,
            column: 3
          }
        },
        loc: {
          start: {
            line: 340,
            column: 29
          },
          end: {
            line: 342,
            column: 3
          }
        },
        line: 340
      },
      '32': {
        name: '(anonymous_32)',
        decl: {
          start: {
            line: 350,
            column: 2
          },
          end: {
            line: 350,
            column: 3
          }
        },
        loc: {
          start: {
            line: 350,
            column: 33
          },
          end: {
            line: 352,
            column: 3
          }
        },
        line: 350
      },
      '33': {
        name: '(anonymous_33)',
        decl: {
          start: {
            line: 359,
            column: 2
          },
          end: {
            line: 359,
            column: 3
          }
        },
        loc: {
          start: {
            line: 359,
            column: 23
          },
          end: {
            line: 361,
            column: 3
          }
        },
        line: 359
      },
      '34': {
        name: '(anonymous_34)',
        decl: {
          start: {
            line: 368,
            column: 2
          },
          end: {
            line: 368,
            column: 3
          }
        },
        loc: {
          start: {
            line: 368,
            column: 30
          },
          end: {
            line: 370,
            column: 3
          }
        },
        line: 368
      },
      '35': {
        name: '(anonymous_35)',
        decl: {
          start: {
            line: 378,
            column: 2
          },
          end: {
            line: 378,
            column: 3
          }
        },
        loc: {
          start: {
            line: 378,
            column: 35
          },
          end: {
            line: 380,
            column: 3
          }
        },
        line: 378
      },
      '36': {
        name: '(anonymous_36)',
        decl: {
          start: {
            line: 387,
            column: 2
          },
          end: {
            line: 387,
            column: 3
          }
        },
        loc: {
          start: {
            line: 387,
            column: 23
          },
          end: {
            line: 389,
            column: 3
          }
        },
        line: 387
      },
      '37': {
        name: '(anonymous_37)',
        decl: {
          start: {
            line: 397,
            column: 2
          },
          end: {
            line: 397,
            column: 3
          }
        },
        loc: {
          start: {
            line: 397,
            column: 37
          },
          end: {
            line: 399,
            column: 3
          }
        },
        line: 397
      },
      '38': {
        name: '(anonymous_38)',
        decl: {
          start: {
            line: 406,
            column: 2
          },
          end: {
            line: 406,
            column: 3
          }
        },
        loc: {
          start: {
            line: 406,
            column: 24
          },
          end: {
            line: 408,
            column: 3
          }
        },
        line: 406
      },
      '39': {
        name: '(anonymous_39)',
        decl: {
          start: {
            line: 416,
            column: 2
          },
          end: {
            line: 416,
            column: 3
          }
        },
        loc: {
          start: {
            line: 416,
            column: 40
          },
          end: {
            line: 418,
            column: 3
          }
        },
        line: 416
      },
      '40': {
        name: '(anonymous_40)',
        decl: {
          start: {
            line: 425,
            column: 2
          },
          end: {
            line: 425,
            column: 3
          }
        },
        loc: {
          start: {
            line: 425,
            column: 26
          },
          end: {
            line: 427,
            column: 3
          }
        },
        line: 425
      },
      '41': {
        name: '(anonymous_41)',
        decl: {
          start: {
            line: 435,
            column: 2
          },
          end: {
            line: 435,
            column: 3
          }
        },
        loc: {
          start: {
            line: 435,
            column: 26
          },
          end: {
            line: 437,
            column: 3
          }
        },
        line: 435
      },
      '42': {
        name: '(anonymous_42)',
        decl: {
          start: {
            line: 444,
            column: 2
          },
          end: {
            line: 444,
            column: 3
          }
        },
        loc: {
          start: {
            line: 444,
            column: 22
          },
          end: {
            line: 446,
            column: 3
          }
        },
        line: 444
      },
      '43': {
        name: '(anonymous_43)',
        decl: {
          start: {
            line: 454,
            column: 2
          },
          end: {
            line: 454,
            column: 3
          }
        },
        loc: {
          start: {
            line: 454,
            column: 40
          },
          end: {
            line: 456,
            column: 3
          }
        },
        line: 454
      },
      '44': {
        name: '(anonymous_44)',
        decl: {
          start: {
            line: 463,
            column: 2
          },
          end: {
            line: 463,
            column: 3
          }
        },
        loc: {
          start: {
            line: 463,
            column: 26
          },
          end: {
            line: 465,
            column: 3
          }
        },
        line: 463
      },
      '45': {
        name: '(anonymous_45)',
        decl: {
          start: {
            line: 473,
            column: 2
          },
          end: {
            line: 473,
            column: 3
          }
        },
        loc: {
          start: {
            line: 473,
            column: 47
          },
          end: {
            line: 475,
            column: 3
          }
        },
        line: 473
      },
      '46': {
        name: '(anonymous_46)',
        decl: {
          start: {
            line: 482,
            column: 2
          },
          end: {
            line: 482,
            column: 3
          }
        },
        loc: {
          start: {
            line: 482,
            column: 29
          },
          end: {
            line: 484,
            column: 3
          }
        },
        line: 482
      },
      '47': {
        name: '(anonymous_47)',
        decl: {
          start: {
            line: 492,
            column: 2
          },
          end: {
            line: 492,
            column: 3
          }
        },
        loc: {
          start: {
            line: 492,
            column: 55
          },
          end: {
            line: 494,
            column: 3
          }
        },
        line: 492
      },
      '48': {
        name: '(anonymous_48)',
        decl: {
          start: {
            line: 501,
            column: 2
          },
          end: {
            line: 501,
            column: 3
          }
        },
        loc: {
          start: {
            line: 501,
            column: 36
          },
          end: {
            line: 503,
            column: 3
          }
        },
        line: 501
      },
      '49': {
        name: '(anonymous_49)',
        decl: {
          start: {
            line: 510,
            column: 2
          },
          end: {
            line: 510,
            column: 3
          }
        },
        loc: {
          start: {
            line: 510,
            column: 23
          },
          end: {
            line: 512,
            column: 3
          }
        },
        line: 510
      },
      '50': {
        name: '(anonymous_50)',
        decl: {
          start: {
            line: 519,
            column: 2
          },
          end: {
            line: 519,
            column: 3
          }
        },
        loc: {
          start: {
            line: 519,
            column: 27
          },
          end: {
            line: 521,
            column: 3
          }
        },
        line: 519
      },
      '51': {
        name: '(anonymous_51)',
        decl: {
          start: {
            line: 527,
            column: 2
          },
          end: {
            line: 527,
            column: 3
          }
        },
        loc: {
          start: {
            line: 527,
            column: 29
          },
          end: {
            line: 529,
            column: 3
          }
        },
        line: 527
      },
      '52': {
        name: '(anonymous_52)',
        decl: {
          start: {
            line: 540,
            column: 2
          },
          end: {
            line: 540,
            column: 3
          }
        },
        loc: {
          start: {
            line: 540,
            column: 27
          },
          end: {
            line: 542,
            column: 3
          }
        },
        line: 540
      },
      '53': {
        name: '(anonymous_53)',
        decl: {
          start: {
            line: 548,
            column: 2
          },
          end: {
            line: 548,
            column: 3
          }
        },
        loc: {
          start: {
            line: 548,
            column: 28
          },
          end: {
            line: 550,
            column: 3
          }
        },
        line: 548
      },
      '54': {
        name: '(anonymous_54)',
        decl: {
          start: {
            line: 556,
            column: 2
          },
          end: {
            line: 556,
            column: 3
          }
        },
        loc: {
          start: {
            line: 556,
            column: 27
          },
          end: {
            line: 558,
            column: 3
          }
        },
        line: 556
      },
      '55': {
        name: '(anonymous_55)',
        decl: {
          start: {
            line: 571,
            column: 2
          },
          end: {
            line: 571,
            column: 3
          }
        },
        loc: {
          start: {
            line: 571,
            column: 23
          },
          end: {
            line: 579,
            column: 3
          }
        },
        line: 571
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        }, {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        }],
        line: 65
      },
      '1': {
        loc: {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        }, {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        }],
        line: 68
      },
      '2': {
        loc: {
          start: {
            line: 71,
            column: 6
          },
          end: {
            line: 73,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 71,
            column: 6
          },
          end: {
            line: 73,
            column: 7
          }
        }, {
          start: {
            line: 71,
            column: 6
          },
          end: {
            line: 73,
            column: 7
          }
        }],
        line: 71
      },
      '3': {
        loc: {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 99,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 99,
            column: 5
          }
        }, {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 99,
            column: 5
          }
        }],
        line: 89
      },
      '4': {
        loc: {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        }, {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        }],
        line: 111
      },
      '5': {
        loc: {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 140,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 140,
            column: 5
          }
        }, {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 140,
            column: 5
          }
        }],
        line: 138
      },
      '6': {
        loc: {
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 138,
            column: 33
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 138,
            column: 16
          }
        }, {
          start: {
            line: 138,
            column: 20
          },
          end: {
            line: 138,
            column: 33
          }
        }],
        line: 138
      },
      '7': {
        loc: {
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 162,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 162,
            column: 5
          }
        }, {
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 162,
            column: 5
          }
        }],
        line: 160
      },
      '8': {
        loc: {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 173,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 173,
            column: 5
          }
        }, {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 173,
            column: 5
          }
        }],
        line: 171
      },
      '9': {
        loc: {
          start: {
            line: 182,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 182,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        }, {
          start: {
            line: 182,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        }],
        line: 182
      },
      '10': {
        loc: {
          start: {
            line: 194,
            column: 4
          },
          end: {
            line: 196,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 194,
            column: 4
          },
          end: {
            line: 196,
            column: 5
          }
        }, {
          start: {
            line: 194,
            column: 4
          },
          end: {
            line: 196,
            column: 5
          }
        }],
        line: 194
      },
      '11': {
        loc: {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 217,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 217,
            column: 5
          }
        }, {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 217,
            column: 5
          }
        }],
        line: 215
      },
      '12': {
        loc: {
          start: {
            line: 246,
            column: 11
          },
          end: {
            line: 246,
            column: 91
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 246,
            column: 38
          },
          end: {
            line: 246,
            column: 69
          }
        }, {
          start: {
            line: 246,
            column: 72
          },
          end: {
            line: 246,
            column: 91
          }
        }],
        line: 246
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0,
      '28': 0,
      '29': 0,
      '30': 0,
      '31': 0,
      '32': 0,
      '33': 0,
      '34': 0,
      '35': 0,
      '36': 0,
      '37': 0,
      '38': 0,
      '39': 0,
      '40': 0,
      '41': 0,
      '42': 0,
      '43': 0,
      '44': 0,
      '45': 0,
      '46': 0,
      '47': 0,
      '48': 0,
      '49': 0,
      '50': 0,
      '51': 0,
      '52': 0,
      '53': 0,
      '54': 0,
      '55': 0,
      '56': 0,
      '57': 0,
      '58': 0,
      '59': 0,
      '60': 0,
      '61': 0,
      '62': 0,
      '63': 0,
      '64': 0,
      '65': 0,
      '66': 0,
      '67': 0,
      '68': 0,
      '69': 0,
      '70': 0,
      '71': 0,
      '72': 0,
      '73': 0,
      '74': 0,
      '75': 0,
      '76': 0,
      '77': 0,
      '78': 0,
      '79': 0,
      '80': 0,
      '81': 0,
      '82': 0,
      '83': 0,
      '84': 0,
      '85': 0,
      '86': 0,
      '87': 0,
      '88': 0,
      '89': 0,
      '90': 0,
      '91': 0,
      '92': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0,
      '28': 0,
      '29': 0,
      '30': 0,
      '31': 0,
      '32': 0,
      '33': 0,
      '34': 0,
      '35': 0,
      '36': 0,
      '37': 0,
      '38': 0,
      '39': 0,
      '40': 0,
      '41': 0,
      '42': 0,
      '43': 0,
      '44': 0,
      '45': 0,
      '46': 0,
      '47': 0,
      '48': 0,
      '49': 0,
      '50': 0,
      '51': 0,
      '52': 0,
      '53': 0,
      '54': 0,
      '55': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0],
      '6': [0, 0],
      '7': [0, 0],
      '8': [0, 0],
      '9': [0, 0],
      '10': [0, 0],
      '11': [0, 0],
      '12': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEventTarget = __webpack_require__(9);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _eventManager = __webpack_require__(6);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _events = __webpack_require__(7);

var _mediaSourceProvider = __webpack_require__(13);

var _mediaSourceProvider2 = _interopRequireDefault(_mediaSourceProvider);

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

var Html5 = function (_FakeEventTarget) {
  _inherits(Html5, _FakeEventTarget);

  _createClass(Html5, null, [{
    key: 'canPlayType',


    /**
     * Checks if the engine can play a given mime type.
     * @param {string} mimeType - The mime type to check.
     * @returns {boolean} - Whether the engine can play the mime type.
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
    value: function canPlayType(mimeType) {
      ++cov_22t8x5qbf1.f[0];
      ++cov_22t8x5qbf1.s[0];

      return _mediaSourceProvider2.default.canPlayType(mimeType);
    }

    /**
     * @constructor
     * @param {Source} source - The selected source object.
     * @param {Object} config - The player configuration.
     */


    /**
     * @type {string} - The engine name.
     */

    /**
     * The event manager of the engine.
     * @type {EventManager}
     * @private
     */

  }]);

  function Html5(source, config) {
    _classCallCheck(this, Html5);

    ++cov_22t8x5qbf1.f[1];
    ++cov_22t8x5qbf1.s[1];

    var _this = _possibleConstructorReturn(this, (Html5.__proto__ || Object.getPrototypeOf(Html5)).call(this));

    ++cov_22t8x5qbf1.s[2];

    _this._createVideoElement();
    ++cov_22t8x5qbf1.s[3];
    _this._eventManager = new _eventManager2.default();
    ++cov_22t8x5qbf1.s[4];
    _this._loadMediaSourceAdapter(source, config);
    ++cov_22t8x5qbf1.s[5];
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
      ++cov_22t8x5qbf1.f[2];
      ++cov_22t8x5qbf1.s[6];

      this.detach();
      ++cov_22t8x5qbf1.s[7];
      if (this._mediaSourceAdapter) {
        ++cov_22t8x5qbf1.b[0][0];
        ++cov_22t8x5qbf1.s[8];

        this._mediaSourceAdapter.destroy();
      } else {
        ++cov_22t8x5qbf1.b[0][1];
      }
      ++cov_22t8x5qbf1.s[9];
      if (this._el) {
        ++cov_22t8x5qbf1.b[1][0];
        ++cov_22t8x5qbf1.s[10];

        this.pause();
        ++cov_22t8x5qbf1.s[11];
        this._el.removeAttribute('src');
        ++cov_22t8x5qbf1.s[12];
        if (this._el.parentNode) {
          ++cov_22t8x5qbf1.b[2][0];
          ++cov_22t8x5qbf1.s[13];

          this._el.parentNode.removeChild(this._el);
        } else {
          ++cov_22t8x5qbf1.b[2][1];
        }
      } else {
        ++cov_22t8x5qbf1.b[1][1];
      }
      ++cov_22t8x5qbf1.s[14];
      this._eventManager.destroy();
    }

    /**
     * Listen to the video element events and triggers them from the engine.
     * @public
     * @returns {void}
     */

  }, {
    key: 'attach',
    value: function attach() {
      var _this2 = this;

      ++cov_22t8x5qbf1.f[3];
      ++cov_22t8x5qbf1.s[15];

      var _loop = function _loop(playerEvent) {
        ++cov_22t8x5qbf1.s[16];

        _this2._eventManager.listen(_this2._el, _events.HTML5_EVENTS[playerEvent], function () {
          ++cov_22t8x5qbf1.f[4];
          ++cov_22t8x5qbf1.s[17];

          _this2.dispatchEvent(new _fakeEvent2.default(_events.HTML5_EVENTS[playerEvent]));
        });
      };

      for (var playerEvent in _events.HTML5_EVENTS) {
        _loop(playerEvent);
      }
      ++cov_22t8x5qbf1.s[18];
      if (this._mediaSourceAdapter) {
        ++cov_22t8x5qbf1.b[3][0];
        ++cov_22t8x5qbf1.s[19];
        // listen and dispatch adaptive bitrate changed event
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.VIDEO_TRACK_CHANGED, function (event) {
          ++cov_22t8x5qbf1.f[5];
          ++cov_22t8x5qbf1.s[20];

          _this2.dispatchEvent(event);
        });
        ++cov_22t8x5qbf1.s[21];
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.AUDIO_TRACK_CHANGED, function (event) {
          ++cov_22t8x5qbf1.f[6];
          ++cov_22t8x5qbf1.s[22];

          return _this2.dispatchEvent(event);
        });
        ++cov_22t8x5qbf1.s[23];
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.TEXT_TRACK_CHANGED, function (event) {
          ++cov_22t8x5qbf1.f[7];
          ++cov_22t8x5qbf1.s[24];

          return _this2.dispatchEvent(event);
        });
      } else {
        ++cov_22t8x5qbf1.b[3][1];
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
      ++cov_22t8x5qbf1.f[8];
      ++cov_22t8x5qbf1.s[25];

      for (var playerEvent in _events.HTML5_EVENTS) {
        ++cov_22t8x5qbf1.s[26];

        this._eventManager.unlisten(this._el, _events.HTML5_EVENTS[playerEvent]);
      }
      ++cov_22t8x5qbf1.s[27];
      if (this._mediaSourceAdapter) {
        ++cov_22t8x5qbf1.b[4][0];
        ++cov_22t8x5qbf1.s[28];
        // unlisten to adaptive bitrate changed
        this._eventManager.unlisten(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.VIDEO_TRACK_CHANGED);
        ++cov_22t8x5qbf1.s[29];
        this._eventManager.unlisten(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.AUDIO_TRACK_CHANGED);
        ++cov_22t8x5qbf1.s[30];
        this._eventManager.unlisten(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.TEXT_TRACK_CHANGED);
      } else {
        ++cov_22t8x5qbf1.b[4][1];
      }
    }

    /**
     * @returns {HTMLVideoElement} - The video element.
     * @public
     */

  }, {
    key: 'getVideoElement',
    value: function getVideoElement() {
      ++cov_22t8x5qbf1.f[9];
      ++cov_22t8x5qbf1.s[31];

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
      ++cov_22t8x5qbf1.f[10];
      ++cov_22t8x5qbf1.s[32];

      this._el = document.createElement("video");
      //Set attributes
      ++cov_22t8x5qbf1.s[33];
      this._el.style.width = "640px";
      ++cov_22t8x5qbf1.s[34];
      this._el.style.height = "360px";
      ++cov_22t8x5qbf1.s[35];
      this._el.style.backgroundColor = "black";
      ++cov_22t8x5qbf1.s[36];
      this._el.controls = true;
      ++cov_22t8x5qbf1.s[37];
      if ((++cov_22t8x5qbf1.b[6][0], document) && (++cov_22t8x5qbf1.b[6][1], document.body)) {
        ++cov_22t8x5qbf1.b[5][0];
        ++cov_22t8x5qbf1.s[38];

        document.body.appendChild(this._el);
      } else {
        ++cov_22t8x5qbf1.b[5][1];
      }
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
      ++cov_22t8x5qbf1.f[11];
      ++cov_22t8x5qbf1.s[39];

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
      ++cov_22t8x5qbf1.f[12];
      ++cov_22t8x5qbf1.s[40];

      if (this._mediaSourceAdapter) {
        ++cov_22t8x5qbf1.b[7][0];
        ++cov_22t8x5qbf1.s[41];

        this._mediaSourceAdapter.selectVideoTrack(videoTrack);
      } else {
        ++cov_22t8x5qbf1.b[7][1];
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
      ++cov_22t8x5qbf1.f[13];
      ++cov_22t8x5qbf1.s[42];

      if (this._mediaSourceAdapter) {
        ++cov_22t8x5qbf1.b[8][0];
        ++cov_22t8x5qbf1.s[43];

        this._mediaSourceAdapter.selectAudioTrack(audioTrack);
      } else {
        ++cov_22t8x5qbf1.b[8][1];
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
      ++cov_22t8x5qbf1.f[14];
      ++cov_22t8x5qbf1.s[44];

      if (this._mediaSourceAdapter) {
        ++cov_22t8x5qbf1.b[9][0];
        ++cov_22t8x5qbf1.s[45];

        this._mediaSourceAdapter.selectTextTrack(textTrack);
      } else {
        ++cov_22t8x5qbf1.b[9][1];
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
      ++cov_22t8x5qbf1.f[15];
      ++cov_22t8x5qbf1.s[46];

      if (this._mediaSourceAdapter) {
        ++cov_22t8x5qbf1.b[10][0];
        ++cov_22t8x5qbf1.s[47];

        this._mediaSourceAdapter.enableAdaptiveBitrate();
      } else {
        ++cov_22t8x5qbf1.b[10][1];
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
      ++cov_22t8x5qbf1.f[18];
      ++cov_22t8x5qbf1.s[52];

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
      ++cov_22t8x5qbf1.f[19];
      ++cov_22t8x5qbf1.s[53];

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
      ++cov_22t8x5qbf1.f[20];
      ++cov_22t8x5qbf1.s[54];

      return this._mediaSourceAdapter ? (++cov_22t8x5qbf1.b[12][0], this._mediaSourceAdapter.load()) : (++cov_22t8x5qbf1.b[12][1], Promise.resolve({}));
    }

    /**
     * Get the current time in seconds.
     * @returns {Number} - The current playback time.
     * @public
     */

  }, {
    key: 'ready',
    value: function ready() {
      ++cov_22t8x5qbf1.f[26];
    }

    /**
     * Get paused state.
     * @returns {boolean} - The paused value of the video element.
     * @public
     */

  }, {
    key: 'src',
    set: function set(source) {
      ++cov_22t8x5qbf1.f[16];
      ++cov_22t8x5qbf1.s[48];

      this._el.src = source;
    }

    /**
     * Get the source url.
     * @returns {string} - The source url.
     * @public
     */
    ,
    get: function get() {
      ++cov_22t8x5qbf1.f[17];
      ++cov_22t8x5qbf1.s[49];

      if (this._mediaSourceAdapter) {
        ++cov_22t8x5qbf1.b[11][0];
        ++cov_22t8x5qbf1.s[50];

        return this._mediaSourceAdapter.src;
      } else {
        ++cov_22t8x5qbf1.b[11][1];
      }
      ++cov_22t8x5qbf1.s[51];
      return "";
    }
  }, {
    key: 'currentTime',
    get: function get() {
      ++cov_22t8x5qbf1.f[21];
      ++cov_22t8x5qbf1.s[55];

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
      ++cov_22t8x5qbf1.f[22];
      ++cov_22t8x5qbf1.s[56];

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
      ++cov_22t8x5qbf1.f[23];
      ++cov_22t8x5qbf1.s[57];

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
      ++cov_22t8x5qbf1.f[24];
      ++cov_22t8x5qbf1.s[58];

      this._el.volume = vol;
    }

    /**
     * Get playback volume.
     * @returns {Number} - The volume value of the video element.
     * @public
     */
    ,
    get: function get() {
      ++cov_22t8x5qbf1.f[25];
      ++cov_22t8x5qbf1.s[59];

      return this._el.volume;
    }
  }, {
    key: 'paused',
    get: function get() {
      ++cov_22t8x5qbf1.f[27];
      ++cov_22t8x5qbf1.s[60];

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
      ++cov_22t8x5qbf1.f[28];
      ++cov_22t8x5qbf1.s[61];

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
      ++cov_22t8x5qbf1.f[29];
      ++cov_22t8x5qbf1.s[62];

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
      ++cov_22t8x5qbf1.f[30];
      ++cov_22t8x5qbf1.s[63];

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
      ++cov_22t8x5qbf1.f[31];
      ++cov_22t8x5qbf1.s[64];

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
      ++cov_22t8x5qbf1.f[32];
      ++cov_22t8x5qbf1.s[65];

      this._el.muted = mute;
    }

    /**
     * Get player muted state.
     * @returns {boolean} - The muted value of the video element.
     * @public
     */
    ,
    get: function get() {
      ++cov_22t8x5qbf1.f[33];
      ++cov_22t8x5qbf1.s[66];

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
      ++cov_22t8x5qbf1.f[34];
      ++cov_22t8x5qbf1.s[67];

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
      ++cov_22t8x5qbf1.f[35];
      ++cov_22t8x5qbf1.s[68];

      this._el.poster = poster;
    }

    /**
     * Gets an image to be shown while the video is downloading, or until the user hits the play button.
     * @returns {poster} - The image url.
     * @public
     */
    ,
    get: function get() {
      ++cov_22t8x5qbf1.f[36];
      ++cov_22t8x5qbf1.s[69];

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
      ++cov_22t8x5qbf1.f[37];
      ++cov_22t8x5qbf1.s[70];

      this._el.preload = preload;
    }

    /**
     * Gets the preload value of the video element.
     * @returns {string} - The preload value.
     * @public
     */
    ,
    get: function get() {
      ++cov_22t8x5qbf1.f[38];
      ++cov_22t8x5qbf1.s[71];

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
      ++cov_22t8x5qbf1.f[39];
      ++cov_22t8x5qbf1.s[72];

      this._el.autoplay = autoplay;
    }

    /**
     * Gets the autoplay value of the video element.
     * @returns {boolean} - The autoplay value.
     * @public
     */
    ,
    get: function get() {
      ++cov_22t8x5qbf1.f[40];
      ++cov_22t8x5qbf1.s[73];

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
      ++cov_22t8x5qbf1.f[41];
      ++cov_22t8x5qbf1.s[74];

      this._el.loop = loop;
    }

    /**
     * Gets the loop value of the video element.
     * @returns {boolean} - The loop value.
     * @public
     */
    ,
    get: function get() {
      ++cov_22t8x5qbf1.f[42];
      ++cov_22t8x5qbf1.s[75];

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
      ++cov_22t8x5qbf1.f[43];
      ++cov_22t8x5qbf1.s[76];

      this._el.controls = controls;
    }

    /**
     * Gets the controls value of the video element.
     * @returns {boolean} - The controls value.
     * @public
     */
    ,
    get: function get() {
      ++cov_22t8x5qbf1.f[44];
      ++cov_22t8x5qbf1.s[77];

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
      ++cov_22t8x5qbf1.f[45];
      ++cov_22t8x5qbf1.s[78];

      this._el.playbackRate = playbackRate;
    }

    /**
     * Gets the current playback speed of the audio/video.
     * @returns {Number} - The current playback speed value.
     * @public
     */
    ,
    get: function get() {
      ++cov_22t8x5qbf1.f[46];
      ++cov_22t8x5qbf1.s[79];

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
      ++cov_22t8x5qbf1.f[47];
      ++cov_22t8x5qbf1.s[80];

      this._el.defaultPlaybackRate = defaultPlaybackRate;
    }

    /**
     * Gets the default playback speed of the audio/video.
     * @returns {Number} - The default playback speed value.
     * @public
     */
    ,
    get: function get() {
      ++cov_22t8x5qbf1.f[48];
      ++cov_22t8x5qbf1.s[81];

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
      ++cov_22t8x5qbf1.f[49];
      ++cov_22t8x5qbf1.s[82];

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
      ++cov_22t8x5qbf1.f[50];
      ++cov_22t8x5qbf1.s[83];

      return this._el.error;
    }

    /**
     * @returns {Number} - The current network state (activity) of the audio/video.
     * @public
     */

  }, {
    key: 'networkState',
    get: function get() {
      ++cov_22t8x5qbf1.f[51];
      ++cov_22t8x5qbf1.s[84];

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
      ++cov_22t8x5qbf1.f[52];
      ++cov_22t8x5qbf1.s[85];

      return this._el.readyState;
    }

    /**
     * @returns {Number} - The height of the video player, in pixels.
     * @public
     */

  }, {
    key: 'videoHeight',
    get: function get() {
      ++cov_22t8x5qbf1.f[53];
      ++cov_22t8x5qbf1.s[86];

      return this._el.videoHeight;
    }

    /**
     * @returns {Number} - The width of the video player, in pixels.
     * @public
     */

  }, {
    key: 'videoWidth',
    get: function get() {
      ++cov_22t8x5qbf1.f[54];
      ++cov_22t8x5qbf1.s[87];

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
      ++cov_22t8x5qbf1.f[55];
      ++cov_22t8x5qbf1.s[88];

      try {
        ++cov_22t8x5qbf1.s[89];

        Html5.TEST_VID = document.createElement('video');
        ++cov_22t8x5qbf1.s[90];
        Html5.TEST_VID.volume = 0.5;
      } catch (e) {
        ++cov_22t8x5qbf1.s[91];

        return false;
      }
      ++cov_22t8x5qbf1.s[92];
      return !!Html5.TEST_VID.canPlayType;
    }
  }]);

  return Html5;
}(_fakeEventTarget2.default);

Html5.EngineName = "html5";
exports.default = Html5;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_udhe4wxvj = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/engines/html5/media-source/adapters/native-adapter.js',
      hash = 'ef61cee86cc62f12899a3d971846c72b41c66d74',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/engines/html5/media-source/adapters/native-adapter.js',
    statementMap: {
      '0': {
        start: {
          line: 54,
          column: 22
        },
        end: {
          line: 54,
          column: 134
        }
      },
      '1': {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 113
        }
      },
      '2': {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 23
        }
      },
      '3': {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 52
        }
      },
      '4': {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 67,
          column: 40
        }
      },
      '5': {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 44
        }
      },
      '6': {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 95,
          column: 5
        }
      },
      '7': {
        start: {
          line: 78,
          column: 6
        },
        end: {
          line: 94,
          column: 9
        }
      },
      '8': {
        start: {
          line: 80,
          column: 8
        },
        end: {
          line: 85,
          column: 11
        }
      },
      '9': {
        start: {
          line: 81,
          column: 10
        },
        end: {
          line: 81,
          column: 83
        }
      },
      '10': {
        start: {
          line: 82,
          column: 21
        },
        end: {
          line: 82,
          column: 54
        }
      },
      '11': {
        start: {
          line: 83,
          column: 10
        },
        end: {
          line: 83,
          column: 81
        }
      },
      '12': {
        start: {
          line: 84,
          column: 10
        },
        end: {
          line: 84,
          column: 24
        }
      },
      '13': {
        start: {
          line: 86,
          column: 8
        },
        end: {
          line: 90,
          column: 11
        }
      },
      '14': {
        start: {
          line: 87,
          column: 10
        },
        end: {
          line: 87,
          column: 77
        }
      },
      '15': {
        start: {
          line: 88,
          column: 10
        },
        end: {
          line: 88,
          column: 45
        }
      },
      '16': {
        start: {
          line: 89,
          column: 10
        },
        end: {
          line: 89,
          column: 24
        }
      },
      '17': {
        start: {
          line: 91,
          column: 8
        },
        end: {
          line: 93,
          column: 9
        }
      },
      '18': {
        start: {
          line: 92,
          column: 10
        },
        end: {
          line: 92,
          column: 55
        }
      },
      '19': {
        start: {
          line: 96,
          column: 4
        },
        end: {
          line: 96,
          column: 29
        }
      },
      '20': {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 43
        }
      },
      '21': {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 106,
          column: 20
        }
      },
      '22': {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 33
        }
      },
      '23': {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 108,
          column: 29
        }
      },
      '24': {
        start: {
          line: 118,
          column: 22
        },
        end: {
          line: 118,
          column: 50
        }
      },
      '25': {
        start: {
          line: 119,
          column: 22
        },
        end: {
          line: 119,
          column: 50
        }
      },
      '26': {
        start: {
          line: 120,
          column: 21
        },
        end: {
          line: 120,
          column: 48
        }
      },
      '27': {
        start: {
          line: 121,
          column: 4
        },
        end: {
          line: 121,
          column: 62
        }
      },
      '28': {
        start: {
          line: 131,
          column: 22
        },
        end: {
          line: 131,
          column: 52
        }
      },
      '29': {
        start: {
          line: 132,
          column: 23
        },
        end: {
          line: 132,
          column: 25
        }
      },
      '30': {
        start: {
          line: 133,
          column: 4
        },
        end: {
          line: 144,
          column: 5
        }
      },
      '31': {
        start: {
          line: 134,
          column: 6
        },
        end: {
          line: 143,
          column: 7
        }
      },
      '32': {
        start: {
          line: 135,
          column: 23
        },
        end: {
          line: 141,
          column: 9
        }
      },
      '33': {
        start: {
          line: 142,
          column: 8
        },
        end: {
          line: 142,
          column: 52
        }
      },
      '34': {
        start: {
          line: 145,
          column: 4
        },
        end: {
          line: 145,
          column: 24
        }
      },
      '35': {
        start: {
          line: 155,
          column: 22
        },
        end: {
          line: 155,
          column: 52
        }
      },
      '36': {
        start: {
          line: 156,
          column: 23
        },
        end: {
          line: 156,
          column: 25
        }
      },
      '37': {
        start: {
          line: 157,
          column: 4
        },
        end: {
          line: 168,
          column: 5
        }
      },
      '38': {
        start: {
          line: 158,
          column: 6
        },
        end: {
          line: 167,
          column: 7
        }
      },
      '39': {
        start: {
          line: 159,
          column: 23
        },
        end: {
          line: 165,
          column: 9
        }
      },
      '40': {
        start: {
          line: 166,
          column: 8
        },
        end: {
          line: 166,
          column: 52
        }
      },
      '41': {
        start: {
          line: 169,
          column: 4
        },
        end: {
          line: 169,
          column: 24
        }
      },
      '42': {
        start: {
          line: 179,
          column: 21
        },
        end: {
          line: 179,
          column: 50
        }
      },
      '43': {
        start: {
          line: 180,
          column: 23
        },
        end: {
          line: 180,
          column: 25
        }
      },
      '44': {
        start: {
          line: 181,
          column: 4
        },
        end: {
          line: 192,
          column: 5
        }
      },
      '45': {
        start: {
          line: 182,
          column: 6
        },
        end: {
          line: 191,
          column: 7
        }
      },
      '46': {
        start: {
          line: 183,
          column: 23
        },
        end: {
          line: 189,
          column: 9
        }
      },
      '47': {
        start: {
          line: 190,
          column: 8
        },
        end: {
          line: 190,
          column: 51
        }
      },
      '48': {
        start: {
          line: 193,
          column: 4
        },
        end: {
          line: 193,
          column: 24
        }
      },
      '49': {
        start: {
          line: 204,
          column: 22
        },
        end: {
          line: 204,
          column: 52
        }
      },
      '50': {
        start: {
          line: 205,
          column: 4
        },
        end: {
          line: 209,
          column: 5
        }
      },
      '51': {
        start: {
          line: 206,
          column: 6
        },
        end: {
          line: 206,
          column: 33
        }
      },
      '52': {
        start: {
          line: 207,
          column: 6
        },
        end: {
          line: 207,
          column: 52
        }
      },
      '53': {
        start: {
          line: 208,
          column: 6
        },
        end: {
          line: 208,
          column: 39
        }
      },
      '54': {
        start: {
          line: 220,
          column: 22
        },
        end: {
          line: 220,
          column: 52
        }
      },
      '55': {
        start: {
          line: 221,
          column: 4
        },
        end: {
          line: 225,
          column: 5
        }
      },
      '56': {
        start: {
          line: 222,
          column: 6
        },
        end: {
          line: 222,
          column: 33
        }
      },
      '57': {
        start: {
          line: 223,
          column: 6
        },
        end: {
          line: 223,
          column: 51
        }
      },
      '58': {
        start: {
          line: 224,
          column: 6
        },
        end: {
          line: 224,
          column: 39
        }
      },
      '59': {
        start: {
          line: 236,
          column: 21
        },
        end: {
          line: 236,
          column: 50
        }
      },
      '60': {
        start: {
          line: 237,
          column: 4
        },
        end: {
          line: 241,
          column: 5
        }
      },
      '61': {
        start: {
          line: 238,
          column: 6
        },
        end: {
          line: 238,
          column: 32
        }
      },
      '62': {
        start: {
          line: 239,
          column: 6
        },
        end: {
          line: 239,
          column: 51
        }
      },
      '63': {
        start: {
          line: 240,
          column: 6
        },
        end: {
          line: 240,
          column: 38
        }
      },
      '64': {
        start: {
          line: 251,
          column: 4
        },
        end: {
          line: 251,
          column: 75
        }
      },
      '65': {
        start: {
          line: 260,
          column: 22
        },
        end: {
          line: 260,
          column: 52
        }
      },
      '66': {
        start: {
          line: 261,
          column: 4
        },
        end: {
          line: 265,
          column: 5
        }
      },
      '67': {
        start: {
          line: 262,
          column: 6
        },
        end: {
          line: 264,
          column: 7
        }
      },
      '68': {
        start: {
          line: 263,
          column: 8
        },
        end: {
          line: 263,
          column: 40
        }
      },
      '69': {
        start: {
          line: 274,
          column: 22
        },
        end: {
          line: 274,
          column: 52
        }
      },
      '70': {
        start: {
          line: 275,
          column: 4
        },
        end: {
          line: 279,
          column: 5
        }
      },
      '71': {
        start: {
          line: 276,
          column: 6
        },
        end: {
          line: 278,
          column: 7
        }
      },
      '72': {
        start: {
          line: 277,
          column: 8
        },
        end: {
          line: 277,
          column: 39
        }
      },
      '73': {
        start: {
          line: 288,
          column: 21
        },
        end: {
          line: 288,
          column: 50
        }
      },
      '74': {
        start: {
          line: 289,
          column: 4
        },
        end: {
          line: 293,
          column: 5
        }
      },
      '75': {
        start: {
          line: 290,
          column: 6
        },
        end: {
          line: 292,
          column: 7
        }
      },
      '76': {
        start: {
          line: 291,
          column: 8
        },
        end: {
          line: 291,
          column: 40
        }
      },
      '77': {
        start: {
          line: 302,
          column: 4
        },
        end: {
          line: 302,
          column: 34
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 53,
            column: 2
          },
          end: {
            line: 53,
            column: 3
          }
        },
        loc: {
          start: {
            line: 53,
            column: 48
          },
          end: {
            line: 57,
            column: 3
          }
        },
        line: 53
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        },
        loc: {
          start: {
            line: 65,
            column: 78
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 65
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 76,
            column: 3
          }
        },
        loc: {
          start: {
            line: 76,
            column: 26
          },
          end: {
            line: 97,
            column: 3
          }
        },
        line: 76
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 78,
            column: 38
          },
          end: {
            line: 78,
            column: 39
          }
        },
        loc: {
          start: {
            line: 78,
            column: 59
          },
          end: {
            line: 94,
            column: 7
          }
        },
        line: 78
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 80,
            column: 79
          },
          end: {
            line: 80,
            column: 80
          }
        },
        loc: {
          start: {
            line: 80,
            column: 85
          },
          end: {
            line: 85,
            column: 9
          }
        },
        line: 80
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 86,
            column: 73
          },
          end: {
            line: 86,
            column: 74
          }
        },
        loc: {
          start: {
            line: 86,
            column: 84
          },
          end: {
            line: 90,
            column: 9
          }
        },
        line: 86
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 104,
            column: 3
          }
        },
        loc: {
          start: {
            line: 104,
            column: 18
          },
          end: {
            line: 109,
            column: 3
          }
        },
        line: 104
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 117,
            column: 2
          },
          end: {
            line: 117,
            column: 3
          }
        },
        loc: {
          start: {
            line: 117,
            column: 35
          },
          end: {
            line: 122,
            column: 3
          }
        },
        line: 117
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 130,
            column: 2
          },
          end: {
            line: 130,
            column: 3
          }
        },
        loc: {
          start: {
            line: 130,
            column: 40
          },
          end: {
            line: 146,
            column: 3
          }
        },
        line: 130
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 154,
            column: 2
          },
          end: {
            line: 154,
            column: 3
          }
        },
        loc: {
          start: {
            line: 154,
            column: 40
          },
          end: {
            line: 170,
            column: 3
          }
        },
        line: 154
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 178,
            column: 2
          },
          end: {
            line: 178,
            column: 3
          }
        },
        loc: {
          start: {
            line: 178,
            column: 39
          },
          end: {
            line: 194,
            column: 3
          }
        },
        line: 178
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 203,
            column: 2
          },
          end: {
            line: 203,
            column: 3
          }
        },
        loc: {
          start: {
            line: 203,
            column: 49
          },
          end: {
            line: 210,
            column: 3
          }
        },
        line: 203
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 219,
            column: 2
          },
          end: {
            line: 219,
            column: 3
          }
        },
        loc: {
          start: {
            line: 219,
            column: 49
          },
          end: {
            line: 226,
            column: 3
          }
        },
        line: 219
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 235,
            column: 2
          },
          end: {
            line: 235,
            column: 3
          }
        },
        loc: {
          start: {
            line: 235,
            column: 46
          },
          end: {
            line: 242,
            column: 3
          }
        },
        line: 235
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 250,
            column: 2
          },
          end: {
            line: 250,
            column: 3
          }
        },
        loc: {
          start: {
            line: 250,
            column: 32
          },
          end: {
            line: 252,
            column: 3
          }
        },
        line: 250
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 259,
            column: 2
          },
          end: {
            line: 259,
            column: 3
          }
        },
        loc: {
          start: {
            line: 259,
            column: 30
          },
          end: {
            line: 266,
            column: 3
          }
        },
        line: 259
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 273,
            column: 2
          },
          end: {
            line: 273,
            column: 3
          }
        },
        loc: {
          start: {
            line: 273,
            column: 30
          },
          end: {
            line: 280,
            column: 3
          }
        },
        line: 273
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 287,
            column: 2
          },
          end: {
            line: 287,
            column: 3
          }
        },
        loc: {
          start: {
            line: 287,
            column: 29
          },
          end: {
            line: 294,
            column: 3
          }
        },
        line: 287
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 301,
            column: 2
          },
          end: {
            line: 301,
            column: 3
          }
        },
        loc: {
          start: {
            line: 301,
            column: 20
          },
          end: {
            line: 303,
            column: 3
          }
        },
        line: 301
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 54,
            column: 22
          },
          end: {
            line: 54,
            column: 134
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 54,
            column: 55
          },
          end: {
            line: 54,
            column: 126
          }
        }, {
          start: {
            line: 54,
            column: 129
          },
          end: {
            line: 54,
            column: 134
          }
        }],
        line: 54
      },
      '1': {
        loc: {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 95,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 95,
            column: 5
          }
        }, {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 95,
            column: 5
          }
        }],
        line: 77
      },
      '2': {
        loc: {
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        }, {
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        }],
        line: 91
      },
      '3': {
        loc: {
          start: {
            line: 91,
            column: 12
          },
          end: {
            line: 91,
            column: 50
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 91,
            column: 12
          },
          end: {
            line: 91,
            column: 27
          }
        }, {
          start: {
            line: 91,
            column: 31
          },
          end: {
            line: 91,
            column: 50
          }
        }],
        line: 91
      },
      '4': {
        loc: {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        }, {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        }],
        line: 133
      },
      '5': {
        loc: {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 168,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 168,
            column: 5
          }
        }, {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 168,
            column: 5
          }
        }],
        line: 157
      },
      '6': {
        loc: {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 192,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 192,
            column: 5
          }
        }, {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 192,
            column: 5
          }
        }],
        line: 181
      },
      '7': {
        loc: {
          start: {
            line: 205,
            column: 4
          },
          end: {
            line: 209,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 205,
            column: 4
          },
          end: {
            line: 209,
            column: 5
          }
        }, {
          start: {
            line: 205,
            column: 4
          },
          end: {
            line: 209,
            column: 5
          }
        }],
        line: 205
      },
      '8': {
        loc: {
          start: {
            line: 205,
            column: 8
          },
          end: {
            line: 205,
            column: 90
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 205,
            column: 9
          },
          end: {
            line: 205,
            column: 41
          }
        }, {
          start: {
            line: 205,
            column: 46
          },
          end: {
            line: 205,
            column: 57
          }
        }, {
          start: {
            line: 205,
            column: 61
          },
          end: {
            line: 205,
            column: 90
          }
        }],
        line: 205
      },
      '9': {
        loc: {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 225,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 225,
            column: 5
          }
        }, {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 225,
            column: 5
          }
        }],
        line: 221
      },
      '10': {
        loc: {
          start: {
            line: 221,
            column: 8
          },
          end: {
            line: 221,
            column: 90
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 221,
            column: 9
          },
          end: {
            line: 221,
            column: 41
          }
        }, {
          start: {
            line: 221,
            column: 46
          },
          end: {
            line: 221,
            column: 57
          }
        }, {
          start: {
            line: 221,
            column: 61
          },
          end: {
            line: 221,
            column: 90
          }
        }],
        line: 221
      },
      '11': {
        loc: {
          start: {
            line: 237,
            column: 4
          },
          end: {
            line: 241,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 237,
            column: 4
          },
          end: {
            line: 241,
            column: 5
          }
        }, {
          start: {
            line: 237,
            column: 4
          },
          end: {
            line: 241,
            column: 5
          }
        }],
        line: 237
      },
      '12': {
        loc: {
          start: {
            line: 237,
            column: 8
          },
          end: {
            line: 237,
            column: 154
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 237,
            column: 9
          },
          end: {
            line: 237,
            column: 39
          }
        }, {
          start: {
            line: 237,
            column: 45
          },
          end: {
            line: 237,
            column: 75
          }
        }, {
          start: {
            line: 237,
            column: 79
          },
          end: {
            line: 237,
            column: 108
          }
        }, {
          start: {
            line: 237,
            column: 113
          },
          end: {
            line: 237,
            column: 123
          }
        }, {
          start: {
            line: 237,
            column: 127
          },
          end: {
            line: 237,
            column: 154
          }
        }],
        line: 237
      },
      '13': {
        loc: {
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 265,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 265,
            column: 5
          }
        }, {
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 265,
            column: 5
          }
        }],
        line: 261
      },
      '14': {
        loc: {
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 279,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 279,
            column: 5
          }
        }, {
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 279,
            column: 5
          }
        }],
        line: 275
      },
      '15': {
        loc: {
          start: {
            line: 289,
            column: 4
          },
          end: {
            line: 293,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 289,
            column: 4
          },
          end: {
            line: 293,
            column: 5
          }
        }, {
          start: {
            line: 289,
            column: 4
          },
          end: {
            line: 293,
            column: 5
          }
        }],
        line: 289
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0,
      '28': 0,
      '29': 0,
      '30': 0,
      '31': 0,
      '32': 0,
      '33': 0,
      '34': 0,
      '35': 0,
      '36': 0,
      '37': 0,
      '38': 0,
      '39': 0,
      '40': 0,
      '41': 0,
      '42': 0,
      '43': 0,
      '44': 0,
      '45': 0,
      '46': 0,
      '47': 0,
      '48': 0,
      '49': 0,
      '50': 0,
      '51': 0,
      '52': 0,
      '53': 0,
      '54': 0,
      '55': 0,
      '56': 0,
      '57': 0,
      '58': 0,
      '59': 0,
      '60': 0,
      '61': 0,
      '62': 0,
      '63': 0,
      '64': 0,
      '65': 0,
      '66': 0,
      '67': 0,
      '68': 0,
      '69': 0,
      '70': 0,
      '71': 0,
      '72': 0,
      '73': 0,
      '74': 0,
      '75': 0,
      '76': 0,
      '77': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0],
      '6': [0, 0],
      '7': [0, 0],
      '8': [0, 0, 0],
      '9': [0, 0],
      '10': [0, 0, 0],
      '11': [0, 0],
      '12': [0, 0, 0, 0, 0],
      '13': [0, 0],
      '14': [0, 0],
      '15': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventManager = __webpack_require__(6);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _events = __webpack_require__(7);

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
      ++cov_udhe4wxvj.f[0];

      var canPlayType = (++cov_udhe4wxvj.s[0], typeof mimeType === 'string' ? (++cov_udhe4wxvj.b[0][0], !!document.createElement("video").canPlayType(mimeType.toLowerCase())) : (++cov_udhe4wxvj.b[0][1], false));
      ++cov_udhe4wxvj.s[1];
      NativeAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canPlayType.toString());
      ++cov_udhe4wxvj.s[2];
      return canPlayType;
    }

    /**
     * @constructor
     * @param {HTMLVideoElement} videoElement - The video element which bind to NativeAdapter
     * @param {Source} source - The source object
     * @param {Object} config - The media source adapter configuration
     */


    /**
     * The adapter logger
     * @member {any} _logger
     * @private
     * @static
     */

  }]);

  function NativeAdapter(videoElement, source, config) {
    _classCallCheck(this, NativeAdapter);

    ++cov_udhe4wxvj.f[1];
    ++cov_udhe4wxvj.s[3];

    NativeAdapter._logger.debug('Creating adapter');
    ++cov_udhe4wxvj.s[4];

    var _this = _possibleConstructorReturn(this, (NativeAdapter.__proto__ || Object.getPrototypeOf(NativeAdapter)).call(this, videoElement, source, config));

    ++cov_udhe4wxvj.s[5];

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

      ++cov_udhe4wxvj.f[2];
      ++cov_udhe4wxvj.s[6];

      if (!this._loadPromise) {
        ++cov_udhe4wxvj.b[1][0];
        ++cov_udhe4wxvj.s[7];

        this._loadPromise = new Promise(function (resolve, reject) {
          ++cov_udhe4wxvj.f[3];
          ++cov_udhe4wxvj.s[8];

          // We're using 'loadeddata' event for native hls (on 'loadedmetadata' native hls doesn't have tracks yet).
          _this2._eventManager.listen(_this2._videoElement, _events.HTML5_EVENTS.LOADED_DATA, function () {
            ++cov_udhe4wxvj.f[4];
            ++cov_udhe4wxvj.s[9];

            _this2._eventManager.unlisten(_this2._videoElement, _events.HTML5_EVENTS.LOADED_DATA);
            var data = (++cov_udhe4wxvj.s[10], { tracks: _this2._getParsedTracks() });
            ++cov_udhe4wxvj.s[11];
            NativeAdapter._logger.debug('The source has been loaded successfully');
            ++cov_udhe4wxvj.s[12];
            resolve(data);
          });
          ++cov_udhe4wxvj.s[13];
          _this2._eventManager.listen(_this2._videoElement, _events.HTML5_EVENTS.ERROR, function (error) {
            ++cov_udhe4wxvj.f[5];
            ++cov_udhe4wxvj.s[14];

            _this2._eventManager.unlisten(_this2._videoElement, _events.HTML5_EVENTS.ERROR);
            ++cov_udhe4wxvj.s[15];
            NativeAdapter._logger.error(error);
            ++cov_udhe4wxvj.s[16];
            reject(error);
          });
          ++cov_udhe4wxvj.s[17];
          if ((++cov_udhe4wxvj.b[3][0], _this2._sourceObj) && (++cov_udhe4wxvj.b[3][1], _this2._sourceObj.url)) {
            ++cov_udhe4wxvj.b[2][0];
            ++cov_udhe4wxvj.s[18];

            _this2._videoElement.src = _this2._sourceObj.url;
          } else {
            ++cov_udhe4wxvj.b[2][1];
          }
        });
      } else {
        ++cov_udhe4wxvj.b[1][1];
      }
      ++cov_udhe4wxvj.s[19];
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
      ++cov_udhe4wxvj.f[6];
      ++cov_udhe4wxvj.s[20];

      NativeAdapter._logger.debug('destroy');
      ++cov_udhe4wxvj.s[21];
      _get(NativeAdapter.prototype.__proto__ || Object.getPrototypeOf(NativeAdapter.prototype), 'destroy', this).call(this);
      ++cov_udhe4wxvj.s[22];
      this._eventManager.destroy();
      ++cov_udhe4wxvj.s[23];
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
      ++cov_udhe4wxvj.f[7];

      var videoTracks = (++cov_udhe4wxvj.s[24], this._getParsedVideoTracks());
      var audioTracks = (++cov_udhe4wxvj.s[25], this._getParsedAudioTracks());
      var textTracks = (++cov_udhe4wxvj.s[26], this._getParsedTextTracks());
      ++cov_udhe4wxvj.s[27];
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
      ++cov_udhe4wxvj.f[8];

      var videoTracks = (++cov_udhe4wxvj.s[28], this._videoElement.videoTracks);
      var parsedTracks = (++cov_udhe4wxvj.s[29], []);
      ++cov_udhe4wxvj.s[30];
      if (videoTracks) {
        ++cov_udhe4wxvj.b[4][0];
        ++cov_udhe4wxvj.s[31];

        for (var i = 0; i < videoTracks.length; i++) {
          var settings = (++cov_udhe4wxvj.s[32], {
            id: videoTracks[i].id,
            active: videoTracks[i].selected,
            label: videoTracks[i].label,
            language: videoTracks[i].language,
            index: i
          });
          ++cov_udhe4wxvj.s[33];
          parsedTracks.push(new _videoTrack2.default(settings));
        }
      } else {
        ++cov_udhe4wxvj.b[4][1];
      }
      ++cov_udhe4wxvj.s[34];
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
      ++cov_udhe4wxvj.f[9];

      var audioTracks = (++cov_udhe4wxvj.s[35], this._videoElement.audioTracks);
      var parsedTracks = (++cov_udhe4wxvj.s[36], []);
      ++cov_udhe4wxvj.s[37];
      if (audioTracks) {
        ++cov_udhe4wxvj.b[5][0];
        ++cov_udhe4wxvj.s[38];

        for (var i = 0; i < audioTracks.length; i++) {
          var settings = (++cov_udhe4wxvj.s[39], {
            id: audioTracks[i].id,
            active: audioTracks[i].enabled,
            label: audioTracks[i].label,
            language: audioTracks[i].language,
            index: i
          });
          ++cov_udhe4wxvj.s[40];
          parsedTracks.push(new _audioTrack2.default(settings));
        }
      } else {
        ++cov_udhe4wxvj.b[5][1];
      }
      ++cov_udhe4wxvj.s[41];
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
      ++cov_udhe4wxvj.f[10];

      var textTracks = (++cov_udhe4wxvj.s[42], this._videoElement.textTracks);
      var parsedTracks = (++cov_udhe4wxvj.s[43], []);
      ++cov_udhe4wxvj.s[44];
      if (textTracks) {
        ++cov_udhe4wxvj.b[6][0];
        ++cov_udhe4wxvj.s[45];

        for (var i = 0; i < textTracks.length; i++) {
          var settings = (++cov_udhe4wxvj.s[46], {
            kind: textTracks[i].kind,
            active: textTracks[i].mode === 'showing',
            label: textTracks[i].label,
            language: textTracks[i].language,
            index: i
          });
          ++cov_udhe4wxvj.s[47];
          parsedTracks.push(new _textTrack2.default(settings));
        }
      } else {
        ++cov_udhe4wxvj.b[6][1];
      }
      ++cov_udhe4wxvj.s[48];
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
      ++cov_udhe4wxvj.f[11];

      var videoTracks = (++cov_udhe4wxvj.s[49], this._videoElement.videoTracks);
      ++cov_udhe4wxvj.s[50];
      if ((++cov_udhe4wxvj.b[8][0], videoTrack instanceof _videoTrack2.default) && (++cov_udhe4wxvj.b[8][1], videoTracks) && (++cov_udhe4wxvj.b[8][2], videoTracks[videoTrack.index])) {
        ++cov_udhe4wxvj.b[7][0];
        ++cov_udhe4wxvj.s[51];

        this._disableVideoTracks();
        ++cov_udhe4wxvj.s[52];
        videoTracks[videoTrack.index].selected = true;
        ++cov_udhe4wxvj.s[53];
        this._onTrackChanged(videoTrack);
      } else {
        ++cov_udhe4wxvj.b[7][1];
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
      ++cov_udhe4wxvj.f[12];

      var audioTracks = (++cov_udhe4wxvj.s[54], this._videoElement.audioTracks);
      ++cov_udhe4wxvj.s[55];
      if ((++cov_udhe4wxvj.b[10][0], audioTrack instanceof _audioTrack2.default) && (++cov_udhe4wxvj.b[10][1], audioTracks) && (++cov_udhe4wxvj.b[10][2], audioTracks[audioTrack.index])) {
        ++cov_udhe4wxvj.b[9][0];
        ++cov_udhe4wxvj.s[56];

        this._disableAudioTracks();
        ++cov_udhe4wxvj.s[57];
        audioTracks[audioTrack.index].enabled = true;
        ++cov_udhe4wxvj.s[58];
        this._onTrackChanged(audioTrack);
      } else {
        ++cov_udhe4wxvj.b[9][1];
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
      ++cov_udhe4wxvj.f[13];

      var textTracks = (++cov_udhe4wxvj.s[59], this._videoElement.textTracks);
      ++cov_udhe4wxvj.s[60];
      if ((++cov_udhe4wxvj.b[12][0], textTrack instanceof _textTrack2.default) && ((++cov_udhe4wxvj.b[12][1], textTrack.kind === 'subtitles') || (++cov_udhe4wxvj.b[12][2], textTrack.kind === 'captions')) && (++cov_udhe4wxvj.b[12][3], textTracks) && (++cov_udhe4wxvj.b[12][4], textTracks[textTrack.index])) {
        ++cov_udhe4wxvj.b[11][0];
        ++cov_udhe4wxvj.s[61];

        this._disableTextTracks();
        ++cov_udhe4wxvj.s[62];
        textTracks[textTrack.index].mode = 'showing';
        ++cov_udhe4wxvj.s[63];
        this._onTrackChanged(textTrack);
      } else {
        ++cov_udhe4wxvj.b[11][1];
      }
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
      ++cov_udhe4wxvj.f[14];
      ++cov_udhe4wxvj.s[64];

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
      ++cov_udhe4wxvj.f[15];

      var videoTracks = (++cov_udhe4wxvj.s[65], this._videoElement.videoTracks);
      ++cov_udhe4wxvj.s[66];
      if (videoTracks) {
        ++cov_udhe4wxvj.b[13][0];
        ++cov_udhe4wxvj.s[67];

        for (var i = 0; i < videoTracks.length; i++) {
          ++cov_udhe4wxvj.s[68];

          videoTracks[i].selected = false;
        }
      } else {
        ++cov_udhe4wxvj.b[13][1];
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
      ++cov_udhe4wxvj.f[16];

      var audioTracks = (++cov_udhe4wxvj.s[69], this._videoElement.audioTracks);
      ++cov_udhe4wxvj.s[70];
      if (audioTracks) {
        ++cov_udhe4wxvj.b[14][0];
        ++cov_udhe4wxvj.s[71];

        for (var i = 0; i < audioTracks.length; i++) {
          ++cov_udhe4wxvj.s[72];

          audioTracks[i].enabled = false;
        }
      } else {
        ++cov_udhe4wxvj.b[14][1];
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
      ++cov_udhe4wxvj.f[17];

      var textTracks = (++cov_udhe4wxvj.s[73], this._videoElement.textTracks);
      ++cov_udhe4wxvj.s[74];
      if (textTracks) {
        ++cov_udhe4wxvj.b[15][0];
        ++cov_udhe4wxvj.s[75];

        for (var i = 0; i < textTracks.length; i++) {
          ++cov_udhe4wxvj.s[76];

          textTracks[i].mode = 'disabled';
        }
      } else {
        ++cov_udhe4wxvj.b[15][1];
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
      ++cov_udhe4wxvj.f[18];
      ++cov_udhe4wxvj.s[77];

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
exports.VERSION = exports.TextTrack = exports.AudioTrack = exports.VideoTrack = exports.Track = exports.BasePlugin = exports.registerPlugin = exports.BaseMediaSourceAdapter = exports.registerMediaSourceAdapter = undefined;

var cov_20xm2vhcxv = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/playkit.js',
      hash = '41a93c22161f871816b17909358b7d5656c1361d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/playkit.js',
    statementMap: {
      '0': {
        start: {
          line: 15,
          column: 14
        },
        end: {
          line: 15,
          column: 33
        }
      },
      '1': {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 90
        }
      },
      '2': {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 113
        }
      },
      '3': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 28
        }
      }
    },
    fnMap: {
      '0': {
        name: 'playkit',
        decl: {
          start: {
            line: 24,
            column: 16
          },
          end: {
            line: 24,
            column: 23
          }
        },
        loc: {
          start: {
            line: 24,
            column: 45
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 24
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 24,
            column: 24
          },
          end: {
            line: 24,
            column: 43
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 24,
            column: 41
          },
          end: {
            line: 24,
            column: 43
          }
        }],
        line: 24
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

exports.playkit = playkit;

var _player = __webpack_require__(8);

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Playkit version
var VERSION = (++cov_20xm2vhcxv.s[0], packageData.version);

++cov_20xm2vhcxv.s[1];
_logger2.default.getLogger().log("%c Playkit " + VERSION, "color: yellow; font-size: large");
++cov_20xm2vhcxv.s[2];
_logger2.default.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

/**
 * @param {Object} config - The configuration of the player
 * @returns {Player} - The player instance
 */
function playkit() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (++cov_20xm2vhcxv.b[0][0], {});
  ++cov_20xm2vhcxv.f[0];
  ++cov_20xm2vhcxv.s[3];

  return new _player2.default(config);
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

//export version

exports.VERSION = VERSION;
exports.default = playkit;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2h1b1a0826 = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js/src/state/state-manager.js',
      hash = '3a70e3141aaba57aade87a383ca1e399323ba50a',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js/src/state/state-manager.js',
    statementMap: {
      '0': {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 74,
          column: 48
        }
      },
      '1': {
        start: {
          line: 75,
          column: 8
        },
        end: {
          line: 75,
          column: 30
        }
      },
      '2': {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 78,
          column: 50
        }
      },
      '3': {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 79,
          column: 30
        }
      },
      '4': {
        start: {
          line: 84,
          column: 8
        },
        end: {
          line: 88,
          column: 9
        }
      },
      '5': {
        start: {
          line: 85,
          column: 10
        },
        end: {
          line: 85,
          column: 50
        }
      },
      '6': {
        start: {
          line: 87,
          column: 10
        },
        end: {
          line: 87,
          column: 49
        }
      },
      '7': {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 89,
          column: 30
        }
      },
      '8': {
        start: {
          line: 92,
          column: 8
        },
        end: {
          line: 92,
          column: 45
        }
      },
      '9': {
        start: {
          line: 93,
          column: 8
        },
        end: {
          line: 93,
          column: 30
        }
      },
      '10': {
        start: {
          line: 98,
          column: 8
        },
        end: {
          line: 98,
          column: 48
        }
      },
      '11': {
        start: {
          line: 99,
          column: 8
        },
        end: {
          line: 99,
          column: 30
        }
      },
      '12': {
        start: {
          line: 102,
          column: 8
        },
        end: {
          line: 102,
          column: 48
        }
      },
      '13': {
        start: {
          line: 103,
          column: 8
        },
        end: {
          line: 103,
          column: 30
        }
      },
      '14': {
        start: {
          line: 106,
          column: 8
        },
        end: {
          line: 106,
          column: 45
        }
      },
      '15': {
        start: {
          line: 107,
          column: 8
        },
        end: {
          line: 107,
          column: 30
        }
      },
      '16': {
        start: {
          line: 112,
          column: 8
        },
        end: {
          line: 112,
          column: 47
        }
      },
      '17': {
        start: {
          line: 113,
          column: 8
        },
        end: {
          line: 113,
          column: 30
        }
      },
      '18': {
        start: {
          line: 116,
          column: 8
        },
        end: {
          line: 116,
          column: 50
        }
      },
      '19': {
        start: {
          line: 117,
          column: 8
        },
        end: {
          line: 117,
          column: 30
        }
      },
      '20': {
        start: {
          line: 120,
          column: 8
        },
        end: {
          line: 120,
          column: 45
        }
      },
      '21': {
        start: {
          line: 121,
          column: 8
        },
        end: {
          line: 121,
          column: 30
        }
      },
      '22': {
        start: {
          line: 124,
          column: 8
        },
        end: {
          line: 124,
          column: 45
        }
      },
      '23': {
        start: {
          line: 125,
          column: 8
        },
        end: {
          line: 125,
          column: 30
        }
      },
      '24': {
        start: {
          line: 130,
          column: 8
        },
        end: {
          line: 130,
          column: 48
        }
      },
      '25': {
        start: {
          line: 131,
          column: 8
        },
        end: {
          line: 131,
          column: 30
        }
      },
      '26': {
        start: {
          line: 134,
          column: 8
        },
        end: {
          line: 134,
          column: 47
        }
      },
      '27': {
        start: {
          line: 135,
          column: 8
        },
        end: {
          line: 135,
          column: 30
        }
      },
      '28': {
        start: {
          line: 145,
          column: 4
        },
        end: {
          line: 145,
          column: 26
        }
      },
      '29': {
        start: {
          line: 146,
          column: 4
        },
        end: {
          line: 146,
          column: 59
        }
      },
      '30': {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 147,
          column: 44
        }
      },
      '31': {
        start: {
          line: 148,
          column: 4
        },
        end: {
          line: 148,
          column: 23
        }
      },
      '32': {
        start: {
          line: 149,
          column: 4
        },
        end: {
          line: 149,
          column: 27
        }
      },
      '33': {
        start: {
          line: 150,
          column: 4
        },
        end: {
          line: 150,
          column: 50
        }
      },
      '34': {
        start: {
          line: 151,
          column: 4
        },
        end: {
          line: 151,
          column: 28
        }
      },
      '35': {
        start: {
          line: 160,
          column: 4
        },
        end: {
          line: 160,
          column: 94
        }
      },
      '36': {
        start: {
          line: 161,
          column: 4
        },
        end: {
          line: 161,
          column: 94
        }
      },
      '37': {
        start: {
          line: 162,
          column: 4
        },
        end: {
          line: 162,
          column: 93
        }
      },
      '38': {
        start: {
          line: 163,
          column: 4
        },
        end: {
          line: 163,
          column: 99
        }
      },
      '39': {
        start: {
          line: 164,
          column: 4
        },
        end: {
          line: 164,
          column: 96
        }
      },
      '40': {
        start: {
          line: 165,
          column: 4
        },
        end: {
          line: 165,
          column: 104
        }
      },
      '41': {
        start: {
          line: 166,
          column: 4
        },
        end: {
          line: 166,
          column: 94
        }
      },
      '42': {
        start: {
          line: 167,
          column: 4
        },
        end: {
          line: 167,
          column: 96
        }
      },
      '43': {
        start: {
          line: 177,
          column: 4
        },
        end: {
          line: 177,
          column: 55
        }
      },
      '44': {
        start: {
          line: 178,
          column: 21
        },
        end: {
          line: 178,
          column: 59
        }
      },
      '45': {
        start: {
          line: 179,
          column: 4
        },
        end: {
          line: 181,
          column: 5
        }
      },
      '46': {
        start: {
          line: 180,
          column: 6
        },
        end: {
          line: 180,
          column: 31
        }
      },
      '47': {
        start: {
          line: 191,
          column: 4
        },
        end: {
          line: 197,
          column: 5
        }
      },
      '48': {
        start: {
          line: 192,
          column: 6
        },
        end: {
          line: 192,
          column: 50
        }
      },
      '49': {
        start: {
          line: 193,
          column: 6
        },
        end: {
          line: 193,
          column: 41
        }
      },
      '50': {
        start: {
          line: 194,
          column: 6
        },
        end: {
          line: 194,
          column: 39
        }
      },
      '51': {
        start: {
          line: 195,
          column: 6
        },
        end: {
          line: 195,
          column: 39
        }
      },
      '52': {
        start: {
          line: 196,
          column: 6
        },
        end: {
          line: 196,
          column: 103
        }
      },
      '53': {
        start: {
          line: 206,
          column: 16
        },
        end: {
          line: 209,
          column: 6
        }
      },
      '54': {
        start: {
          line: 210,
          column: 4
        },
        end: {
          line: 210,
          column: 38
        }
      },
      '55': {
        start: {
          line: 219,
          column: 4
        },
        end: {
          line: 219,
          column: 23
        }
      },
      '56': {
        start: {
          line: 220,
          column: 4
        },
        end: {
          line: 220,
          column: 33
        }
      },
      '57': {
        start: {
          line: 229,
          column: 4
        },
        end: {
          line: 229,
          column: 26
        }
      },
      '58': {
        start: {
          line: 238,
          column: 4
        },
        end: {
          line: 238,
          column: 27
        }
      },
      '59': {
        start: {
          line: 247,
          column: 4
        },
        end: {
          line: 247,
          column: 25
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 73,
            column: 32
          },
          end: {
            line: 73,
            column: 33
          }
        },
        loc: {
          start: {
            line: 73,
            column: 38
          },
          end: {
            line: 76,
            column: 7
          }
        },
        line: 73
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 77,
            column: 26
          },
          end: {
            line: 77,
            column: 27
          }
        },
        loc: {
          start: {
            line: 77,
            column: 32
          },
          end: {
            line: 80,
            column: 7
          }
        },
        line: 77
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 83,
            column: 37
          },
          end: {
            line: 83,
            column: 38
          }
        },
        loc: {
          start: {
            line: 83,
            column: 43
          },
          end: {
            line: 90,
            column: 7
          }
        },
        line: 83
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 91,
            column: 27
          },
          end: {
            line: 91,
            column: 28
          }
        },
        loc: {
          start: {
            line: 91,
            column: 33
          },
          end: {
            line: 94,
            column: 7
          }
        },
        line: 91
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 97,
            column: 26
          },
          end: {
            line: 97,
            column: 27
          }
        },
        loc: {
          start: {
            line: 97,
            column: 32
          },
          end: {
            line: 100,
            column: 7
          }
        },
        line: 97
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 101,
            column: 29
          },
          end: {
            line: 101,
            column: 30
          }
        },
        loc: {
          start: {
            line: 101,
            column: 35
          },
          end: {
            line: 104,
            column: 7
          }
        },
        line: 101
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 105,
            column: 27
          },
          end: {
            line: 105,
            column: 28
          }
        },
        loc: {
          start: {
            line: 105,
            column: 33
          },
          end: {
            line: 108,
            column: 7
          }
        },
        line: 105
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 111,
            column: 27
          },
          end: {
            line: 111,
            column: 28
          }
        },
        loc: {
          start: {
            line: 111,
            column: 33
          },
          end: {
            line: 114,
            column: 7
          }
        },
        line: 111
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 115,
            column: 29
          },
          end: {
            line: 115,
            column: 30
          }
        },
        loc: {
          start: {
            line: 115,
            column: 35
          },
          end: {
            line: 118,
            column: 7
          }
        },
        line: 115
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 119,
            column: 27
          },
          end: {
            line: 119,
            column: 28
          }
        },
        loc: {
          start: {
            line: 119,
            column: 33
          },
          end: {
            line: 122,
            column: 7
          }
        },
        line: 119
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 123,
            column: 27
          },
          end: {
            line: 123,
            column: 28
          }
        },
        loc: {
          start: {
            line: 123,
            column: 33
          },
          end: {
            line: 126,
            column: 7
          }
        },
        line: 123
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 129,
            column: 29
          },
          end: {
            line: 129,
            column: 30
          }
        },
        loc: {
          start: {
            line: 129,
            column: 35
          },
          end: {
            line: 132,
            column: 7
          }
        },
        line: 129
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 133,
            column: 27
          },
          end: {
            line: 133,
            column: 28
          }
        },
        loc: {
          start: {
            line: 133,
            column: 33
          },
          end: {
            line: 136,
            column: 7
          }
        },
        line: 133
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 144,
            column: 2
          },
          end: {
            line: 144,
            column: 3
          }
        },
        loc: {
          start: {
            line: 144,
            column: 30
          },
          end: {
            line: 152,
            column: 3
          }
        },
        line: 144
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 159,
            column: 2
          },
          end: {
            line: 159,
            column: 3
          }
        },
        loc: {
          start: {
            line: 159,
            column: 27
          },
          end: {
            line: 168,
            column: 3
          }
        },
        line: 159
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 176,
            column: 2
          },
          end: {
            line: 176,
            column: 3
          }
        },
        loc: {
          start: {
            line: 176,
            column: 40
          },
          end: {
            line: 182,
            column: 3
          }
        },
        line: 176
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 190,
            column: 2
          },
          end: {
            line: 190,
            column: 3
          }
        },
        loc: {
          start: {
            line: 190,
            column: 35
          },
          end: {
            line: 198,
            column: 3
          }
        },
        line: 190
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 205,
            column: 2
          },
          end: {
            line: 205,
            column: 3
          }
        },
        loc: {
          start: {
            line: 205,
            column: 25
          },
          end: {
            line: 211,
            column: 3
          }
        },
        line: 205
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 218,
            column: 2
          },
          end: {
            line: 218,
            column: 3
          }
        },
        loc: {
          start: {
            line: 218,
            column: 18
          },
          end: {
            line: 221,
            column: 3
          }
        },
        line: 218
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 228,
            column: 2
          },
          end: {
            line: 228,
            column: 3
          }
        },
        loc: {
          start: {
            line: 228,
            column: 28
          },
          end: {
            line: 230,
            column: 3
          }
        },
        line: 228
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 237,
            column: 2
          },
          end: {
            line: 237,
            column: 3
          }
        },
        loc: {
          start: {
            line: 237,
            column: 36
          },
          end: {
            line: 239,
            column: 3
          }
        },
        line: 237
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 246,
            column: 2
          },
          end: {
            line: 246,
            column: 3
          }
        },
        loc: {
          start: {
            line: 246,
            column: 30
          },
          end: {
            line: 248,
            column: 3
          }
        },
        line: 246
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 84,
            column: 8
          },
          end: {
            line: 88,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 84,
            column: 8
          },
          end: {
            line: 88,
            column: 9
          }
        }, {
          start: {
            line: 84,
            column: 8
          },
          end: {
            line: 88,
            column: 9
          }
        }],
        line: 84
      },
      '1': {
        loc: {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 181,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 181,
            column: 5
          }
        }, {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 181,
            column: 5
          }
        }],
        line: 179
      },
      '2': {
        loc: {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 197,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 197,
            column: 5
          }
        }, {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 197,
            column: 5
          }
        }],
        line: 191
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0,
      '28': 0,
      '29': 0,
      '30': 0,
      '31': 0,
      '32': 0,
      '33': 0,
      '34': 0,
      '35': 0,
      '36': 0,
      '37': 0,
      '38': 0,
      '39': 0,
      '40': 0,
      '41': 0,
      '42': 0,
      '43': 0,
      '44': 0,
      '45': 0,
      '46': 0,
      '47': 0,
      '48': 0,
      '49': 0,
      '50': 0,
      '51': 0,
      '52': 0,
      '53': 0,
      '54': 0,
      '55': 0,
      '56': 0,
      '57': 0,
      '58': 0,
      '59': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(8);

var _player2 = _interopRequireDefault(_player);

var _eventManager = __webpack_require__(6);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _state = __webpack_require__(23);

var _state2 = _interopRequireDefault(_state);

var _stateTypes = __webpack_require__(16);

var _stateTypes2 = _interopRequireDefault(_stateTypes);

var _events = __webpack_require__(7);

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
      ++cov_2h1b1a0826.f[0];
      ++cov_2h1b1a0826.s[0];

      _this._updateState(_stateTypes2.default.LOADING);
      ++cov_2h1b1a0826.s[1];
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$IDLE, _events.HTML5_EVENTS.PLAY, function () {
      ++cov_2h1b1a0826.f[1];
      ++cov_2h1b1a0826.s[2];

      _this._updateState(_stateTypes2.default.BUFFERING);
      ++cov_2h1b1a0826.s[3];
      _this._dispatchEvent();
    }), _PlayerStates$IDLE)), _defineProperty(_transitions, _stateTypes2.default.LOADING, (_PlayerStates$LOADING = {}, _defineProperty(_PlayerStates$LOADING, _events.HTML5_EVENTS.LOADED_METADATA, function () {
      ++cov_2h1b1a0826.f[2];
      ++cov_2h1b1a0826.s[4];

      if (_this._player.config.autoPlay) {
        ++cov_2h1b1a0826.b[0][0];
        ++cov_2h1b1a0826.s[5];

        _this._updateState(_stateTypes2.default.PLAYING);
      } else {
        ++cov_2h1b1a0826.b[0][1];
        ++cov_2h1b1a0826.s[6];

        _this._updateState(_stateTypes2.default.PAUSED);
      }
      ++cov_2h1b1a0826.s[7];
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$LOADING, _events.HTML5_EVENTS.ERROR, function () {
      ++cov_2h1b1a0826.f[3];
      ++cov_2h1b1a0826.s[8];

      _this._updateState(_stateTypes2.default.IDLE);
      ++cov_2h1b1a0826.s[9];
      _this._dispatchEvent();
    }), _PlayerStates$LOADING)), _defineProperty(_transitions, _stateTypes2.default.PAUSED, (_PlayerStates$PAUSED = {}, _defineProperty(_PlayerStates$PAUSED, _events.HTML5_EVENTS.PLAY, function () {
      ++cov_2h1b1a0826.f[4];
      ++cov_2h1b1a0826.s[10];

      _this._updateState(_stateTypes2.default.PLAYING);
      ++cov_2h1b1a0826.s[11];
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PAUSED, _events.HTML5_EVENTS.PLAYING, function () {
      ++cov_2h1b1a0826.f[5];
      ++cov_2h1b1a0826.s[12];

      _this._updateState(_stateTypes2.default.PLAYING);
      ++cov_2h1b1a0826.s[13];
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PAUSED, _events.HTML5_EVENTS.ENDED, function () {
      ++cov_2h1b1a0826.f[6];
      ++cov_2h1b1a0826.s[14];

      _this._updateState(_stateTypes2.default.IDLE);
      ++cov_2h1b1a0826.s[15];
      _this._dispatchEvent();
    }), _PlayerStates$PAUSED)), _defineProperty(_transitions, _stateTypes2.default.PLAYING, (_PlayerStates$PLAYING = {}, _defineProperty(_PlayerStates$PLAYING, _events.HTML5_EVENTS.PAUSE, function () {
      ++cov_2h1b1a0826.f[7];
      ++cov_2h1b1a0826.s[16];

      _this._updateState(_stateTypes2.default.PAUSED);
      ++cov_2h1b1a0826.s[17];
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PLAYING, _events.HTML5_EVENTS.WAITING, function () {
      ++cov_2h1b1a0826.f[8];
      ++cov_2h1b1a0826.s[18];

      _this._updateState(_stateTypes2.default.BUFFERING);
      ++cov_2h1b1a0826.s[19];
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PLAYING, _events.HTML5_EVENTS.ENDED, function () {
      ++cov_2h1b1a0826.f[9];
      ++cov_2h1b1a0826.s[20];

      _this._updateState(_stateTypes2.default.IDLE);
      ++cov_2h1b1a0826.s[21];
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PLAYING, _events.HTML5_EVENTS.ERROR, function () {
      ++cov_2h1b1a0826.f[10];
      ++cov_2h1b1a0826.s[22];

      _this._updateState(_stateTypes2.default.IDLE);
      ++cov_2h1b1a0826.s[23];
      _this._dispatchEvent();
    }), _PlayerStates$PLAYING)), _defineProperty(_transitions, _stateTypes2.default.BUFFERING, (_PlayerStates$BUFFERI = {}, _defineProperty(_PlayerStates$BUFFERI, _events.HTML5_EVENTS.PLAYING, function () {
      ++cov_2h1b1a0826.f[11];
      ++cov_2h1b1a0826.s[24];

      _this._updateState(_stateTypes2.default.PLAYING);
      ++cov_2h1b1a0826.s[25];
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$BUFFERI, _events.HTML5_EVENTS.PAUSE, function () {
      ++cov_2h1b1a0826.f[12];
      ++cov_2h1b1a0826.s[26];

      _this._updateState(_stateTypes2.default.PAUSED);
      ++cov_2h1b1a0826.s[27];
      _this._dispatchEvent();
    }), _PlayerStates$BUFFERI)), _transitions);
    ++cov_2h1b1a0826.f[13];
    ++cov_2h1b1a0826.s[28];

    this._player = player;
    ++cov_2h1b1a0826.s[29];
    this._logger = _logger2.default.getLogger("StateManager");
    ++cov_2h1b1a0826.s[30];
    this._eventManager = new _eventManager2.default();
    ++cov_2h1b1a0826.s[31];
    this._history = [];
    ++cov_2h1b1a0826.s[32];
    this._prevState = null;
    ++cov_2h1b1a0826.s[33];
    this._curState = new _state2.default(_stateTypes2.default.IDLE);
    ++cov_2h1b1a0826.s[34];
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
      ++cov_2h1b1a0826.f[14];
      ++cov_2h1b1a0826.s[35];

      this._eventManager.listen(this._player, _events.HTML5_EVENTS.ERROR, this._doTransition.bind(this));
      ++cov_2h1b1a0826.s[36];
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.ENDED, this._doTransition.bind(this));
      ++cov_2h1b1a0826.s[37];
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.PLAY, this._doTransition.bind(this));
      ++cov_2h1b1a0826.s[38];
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.LOAD_START, this._doTransition.bind(this));
      ++cov_2h1b1a0826.s[39];
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.PLAYING, this._doTransition.bind(this));
      ++cov_2h1b1a0826.s[40];
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.LOADED_METADATA, this._doTransition.bind(this));
      ++cov_2h1b1a0826.s[41];
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.PAUSE, this._doTransition.bind(this));
      ++cov_2h1b1a0826.s[42];
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
      ++cov_2h1b1a0826.f[15];
      ++cov_2h1b1a0826.s[43];

      this._logger.debug('Do transition request', event);
      var transition = (++cov_2h1b1a0826.s[44], this._transitions[this._curState.type]);
      ++cov_2h1b1a0826.s[45];
      if (typeof transition[event.type] === 'function') {
        ++cov_2h1b1a0826.b[1][0];
        ++cov_2h1b1a0826.s[46];

        transition[event.type]();
      } else {
        ++cov_2h1b1a0826.b[1][1];
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
      ++cov_2h1b1a0826.f[16];
      ++cov_2h1b1a0826.s[47];

      if (this._curState.type !== type) {
        ++cov_2h1b1a0826.b[2][0];
        ++cov_2h1b1a0826.s[48];

        this._curState.duration = Date.now() / 1000;
        ++cov_2h1b1a0826.s[49];
        this._history.push(this._curState);
        ++cov_2h1b1a0826.s[50];
        this._prevState = this._curState;
        ++cov_2h1b1a0826.s[51];
        this._curState = new _state2.default(type);
        ++cov_2h1b1a0826.s[52];
        this._logger.debug('Switch player state: from ' + this._prevState.type + ' to ' + this._curState.type);
      } else {
        ++cov_2h1b1a0826.b[2][1];
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
      ++cov_2h1b1a0826.f[17];

      var event = (++cov_2h1b1a0826.s[53], new _fakeEvent2.default(_events.CUSTOM_EVENTS.PLAYER_STATE_CHANGED, {
        'oldState': this._prevState,
        'newState': this._curState
      }));
      ++cov_2h1b1a0826.s[54];
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
      ++cov_2h1b1a0826.f[18];
      ++cov_2h1b1a0826.s[55];

      this._history = [];
      ++cov_2h1b1a0826.s[56];
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
      ++cov_2h1b1a0826.f[19];
      ++cov_2h1b1a0826.s[57];

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
      ++cov_2h1b1a0826.f[20];
      ++cov_2h1b1a0826.s[58];

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
      ++cov_2h1b1a0826.f[21];
      ++cov_2h1b1a0826.s[59];

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

var cov_2d6y5fvzj2 = function () {
  var path = "/Users/dan.ziv/WebstormProjects/playkit-js/src/state/state.js",
      hash = "47c4a49befef6a6e85ec873d7c3017bcb26b2d81",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/dan.ziv/WebstormProjects/playkit-js/src/state/state.js",
    statementMap: {
      "0": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 21
        }
      },
      "1": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 23
        }
      },
      "2": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 40
        }
      },
      "3": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 26
        }
      },
      "4": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 54,
          column: 47
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        loc: {
          start: {
            line: 35,
            column: 28
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 35
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        },
        loc: {
          start: {
            line: 45,
            column: 25
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 45
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 53,
            column: 2
          },
          end: {
            line: 53,
            column: 3
          }
        },
        loc: {
          start: {
            line: 53,
            column: 38
          },
          end: {
            line: 55,
            column: 3
          }
        },
        line: 53
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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

    ++cov_2d6y5fvzj2.f[0];
    ++cov_2d6y5fvzj2.s[0];

    this.type = type;
    ++cov_2d6y5fvzj2.s[1];
    this._duration = 0;
    ++cov_2d6y5fvzj2.s[2];
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
      ++cov_2d6y5fvzj2.f[1];
      ++cov_2d6y5fvzj2.s[3];

      return this._duration;
    }

    /**
     * Setter for the duration of the state.
     * @param {number} endTime - The timestamp of the next state.
     */
    ,
    set: function set(endTime) {
      ++cov_2d6y5fvzj2.f[2];
      ++cov_2d6y5fvzj2.s[4];

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

var cov_bjj14sztj = function () {
  var path = "/Users/dan.ziv/WebstormProjects/playkit-js/src/track/track-types.js",
      hash = "e2fcdc786a5d95e81a682e5d247965e194697026",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/dan.ziv/WebstormProjects/playkit-js/src/track/track-types.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 47
        },
        end: {
          line: 6,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var TRACK_TYPES = (++cov_bjj14sztj.s[0], {
  VIDEO: "video",
  AUDIO: "audio",
  TEXT: "text"
});

exports.default = TRACK_TYPES;

/***/ }),
/* 25 */
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


/***/ })
/******/ ]);
});
//# sourceMappingURL=playkit.js.map