(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("core", [], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory();
	else
		root["playkit"] = root["playkit"] || {}, root["playkit"]["core"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./playkit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./assets/style.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./assets/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".playkit-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  outline: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.playkit-engine {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  object-fit: contain;\n}\n\n.playkit-engine video::-webkit-media-controls-panel,\n.playkit-engine video::-webkit-media-controls-panel-container,\n.playkit-engine video::-webkit-media-controls-start-playback-button,\n.playkit-engine video::-webkit-media-controls-play-button {\n  display: none;\n  -webkit-appearance: none;\n}\n\n.playkit-poster {\n  position: absolute;\n  display: block;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-color: #000;\n  pointer-events: none;\n}\n\n.playkit-subtitles {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  pointer-events: none;\n  margin-bottom: 5px;\n}\n\n.playkit-black-cover {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  pointer-events: none;\n}\n\n.playkit-size-iframe {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border: 0;\n  z-index: -100;\n}\n\n.playkit-in-browser-fullscreen-mode {\n  width: 100% !important;\n  height: 100% !important;\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  /*added for blocking element with fixed position which could be on the top of the player */\n  z-index: 999999 !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/js-logger/src/logger.js":
/*!***********************************************!*\
  !*** ../node_modules/js-logger/src/logger.js ***!
  \***********************************************/
/*! no static exports found */
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
	Logger.VERSION = "1.6.0";

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
	Logger.TRACE = defineLogLevel(1, 'TRACE');
	Logger.DEBUG = defineLogLevel(2, 'DEBUG');
	Logger.INFO = defineLogLevel(3, 'INFO');
	Logger.TIME = defineLogLevel(4, 'TIME');
	Logger.WARN = defineLogLevel(5, 'WARN');
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
		
		// Gets the current logging level for the logging instance
		getLevel: function () {
			return this.context.filterLevel;
		},

		// Is the logger configured to output messages at the supplied level?
		enabledFor: function (lvl) {
			var filterLevel = this.context.filterLevel;
			return lvl.value >= filterLevel.value;
		},

		trace: function () {
			this.invoke(Logger.TRACE, arguments);
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
		L.trace = bind(globalLogger, globalLogger.trace);
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

	// Gets the global logging filter level
	Logger.getLevel = function() {
		return globalLogger.getLevel();
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
				} else if (context.level === Logger.DEBUG && console.debug) {
					hdlr = console.debug;
				} else if (context.level === Logger.TRACE && console.trace) {
					hdlr = console.trace;
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
	else {}
}(this));


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/ua-parser-js/src/ua-parser.js":
/*!*****************************************************!*\
  !*** ../node_modules/ua-parser-js/src/ua-parser.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.2
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License *//*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */
/////////////////////////////////////////////////////////////////////////////////

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '1.0.2',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major',
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
        EMBEDDED    = 'embedded',
        UA_MAX_LENGTH = 255;

    var AMAZON  = 'Amazon',
        APPLE   = 'Apple',
        ASUS    = 'ASUS',
        BLACKBERRY = 'BlackBerry',
        BROWSER = 'Browser',
        CHROME  = 'Chrome',
        EDGE    = 'Edge',
        FIREFOX = 'Firefox',
        GOOGLE  = 'Google',
        HUAWEI  = 'Huawei',
        LG      = 'LG',
        MICROSOFT = 'Microsoft',
        MOTOROLA  = 'Motorola',
        OPERA   = 'Opera',
        SAMSUNG = 'Samsung',
        SONY    = 'Sony',
        XIAOMI  = 'Xiaomi',
        ZEBRA   = 'Zebra',
        FACEBOOK   = 'Facebook';

    ///////////
    // Helper
    //////////

    var extend = function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        enumerize = function (arr) {
            var enums = {};
            for (var i=0; i<arr.length; i++) {
                enums[arr[i].toUpperCase()] = arr[i];
            }
            return enums;
        },
        has = function (str1, str2) {
            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        },
        lowerize = function (str) {
            return str.toLowerCase();
        },
        majorize = function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined;
        },
        trim = function (str, len) {
            if (typeof(str) === STR_TYPE) {
                str = str.replace(/^\s\s*/, EMPTY).replace(/\s\s*$/, EMPTY);
                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
            }
    };

    ///////////////
    // Map helper
    //////////////

    var rgxMapper = function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

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
                                if (q.length === 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length === 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length === 4) {
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
        },

        strMapper = function (str, map) {

            for (var i in map) {
                // check if current value is array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
    };

    ///////////////
    // String map
    //////////////

    // Safari < 3.0
    var oldSafariMap = {
            '1.0'   : '/8',
            '1.2'   : '/1',
            '1.3'   : '/3',
            '2.0'   : '/412',
            '2.0.2' : '/416',
            '2.0.3' : '/417',
            '2.0.4' : '/419',
            '?'     : '/'
        },
        windowsVersionMap = {
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
    };

    //////////////
    // Regex map
    /////////////

    var regexes = {

        browser : [[

            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
            ], [VERSION, [NAME, 'Chrome']], [
            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
            ], [VERSION, [NAME, 'Edge']], [

            // Presto based
            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
            ], [NAME, VERSION], [
            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
            ], [VERSION, [NAME, OPERA+' Mini']], [
            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
            ], [VERSION, [NAME, OPERA]], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,               // Avant/IEMobile/SlimBrowser
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,                                  // Baidu Browser
            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(weibo)__([\d\.]+)/i                                               // Weibo
            ], [NAME, VERSION], [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
            ], [VERSION, [NAME, 'UC'+BROWSER]], [
            /\bqbcore\/([\w\.]+)/i                                              // WeChat Desktop for Windows Built-in Browser
            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
            /micromessenger\/([\w\.]+)/i                                        // WeChat
            ], [VERSION, [NAME, 'WeChat']], [
            /konqueror\/([\w\.]+)/i                                             // Konqueror
            ], [VERSION, [NAME, 'Konqueror']], [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
            ], [VERSION, [NAME, 'IE']], [
            /yabrowser\/([\w\.]+)/i                                             // Yandex
            ], [VERSION, [NAME, 'Yandex']], [
            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
            ], [VERSION, [NAME, FIREFOX+' Focus']], [
            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
            ], [VERSION, [NAME, OPERA+' Touch']], [
            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
            ], [VERSION, [NAME, 'Coc Coc']], [
            /dolfin\/([\w\.]+)/i                                                // Dolphin
            ], [VERSION, [NAME, 'Dolphin']], [
            /coast\/([\w\.]+)/i                                                 // Opera Coast
            ], [VERSION, [NAME, OPERA+' Coast']], [
            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, FIREFOX]], [
            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
            ], [[NAME, '360 '+BROWSER]], [
            /(oculus|samsung|sailfish)browser\/([\w\.]+)/i
            ], [[NAME, /(.+)/, '$1 '+BROWSER], VERSION], [                      // Oculus/Samsung/Sailfish Browser
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [
            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i            // QQBrowser/Baidu App/2345 Browser
            ], [NAME, VERSION], [
            /(metasr)[\/ ]?([\w\.]+)/i,                                         // SouGouBrowser
            /(lbbrowser)/i                                                      // LieBao Browser
            ], [NAME], [

            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
            ], [[NAME, FACEBOOK], VERSION], [
            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
            /(chromium|instagram)[\/ ]([-\w\.]+)/i                              // Chromium/Instagram
            ], [NAME, VERSION], [
            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
            ], [VERSION, [NAME, 'GSA']], [

            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
            ], [VERSION, [NAME, CHROME+' Headless']], [

            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
            ], [[NAME, CHROME+' WebView'], VERSION], [

            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
            ], [VERSION, [NAME, 'Android '+BROWSER]], [

            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /version\/([\w\.]+) .*mobile\/\w+ (safari)/i                        // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [
            /version\/([\w\.]+) .*(mobile ?safari|safari)/i                     // Safari & Safari Mobile
            ], [VERSION, NAME], [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
            ], [VERSION, [NAME, FIREFOX+' Reality']], [
            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i                                              // Links
            ], [NAME, VERSION]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
            ], [[ARCHITECTURE, 'ia32']], [

            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
            ], [[ARCHITECTURE, 'arm64']], [

            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
            ], [[ARCHITECTURE, 'armhf']], [

            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, lowerize]]
        ],

        device : [[

            //////////////////////////
            // MOBILES & TABLETS
            // Ordered by popularity
            /////////////////////////

            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

            // Apple
            /\((ip(?:hone|od)[\w ]*);/i                                         // iPod/iPhone
            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [

            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

            // Xiaomi
            /\b(poco[\w ]+)(?: bui|\))/i,                                       // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

            // Realme
            /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

            // Google
            /(pixel c)\b/i                                                      // Google Pixel C
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

            // Sony
            /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)( bui|\))/i,                                         // Kindle Fire without Silk
            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i                                                    // BlackBerry 10
            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

            // HTC
            /(nexus 9)/i                                                        // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, MOBILE]], [

            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
            /(asus)-?(\w+)/i,                                                   // Asus
            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
            /(jolla)/i,                                                         // Jolla
            /(oppo) ?([\w ]+) bui/i                                             // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /(archos) (gamepad2?)/i,                                            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(surface duo)/i                                                    // Surface Duo
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
            /(u304aa)/i                                                         // AT&T
            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
            /\bsie-(\w*)/i                                                      // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
            /\b(rct\w+) b/i                                                     // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
            /\b(tm\d{3}\w+) b/i
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
            /\b(k88) b/i                                                        // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
            /\b(ph-1) /i                                                        // Essential PH-1
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
            /\btu_(1491) b/i                                                    // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
            /(sprint) (\w+)/i                                                   // Sprint Phones
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

            ///////////////////
            // CONSOLES
            ///////////////////

            /(ouya)/i,                                                          // Ouya
            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
            /droid.+; (shield) bui/i                                            // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
            /(playstation [345portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

            ///////////////////
            // SMARTTVS
            ///////////////////

            /smart-tv.+(samsung)/i                                              // Samsung
            ], [VENDOR, [TYPE, SMARTTV]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
            /(apple) ?tv/i                                                      // Apple TV
            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
            /droid.+aft(\w)( bui|\))/i                                          // Fire TV
            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i               // HbbTV devices
            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
            ], [[TYPE, SMARTTV]], [

            ///////////////////
            // WEARABLES
            ///////////////////

            /((pebble))app/i                                                    // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
            /droid.+; (glass) \d/i                                              // Google Glass
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
            /droid.+; (wt63?0{2,3})\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
            /(quest( 2)?)/i                                                     // Oculus Quest
            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

            ///////////////////
            // EMBEDDED
            ///////////////////

            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
            ], [VENDOR, [TYPE, EMBEDDED]], [

            ////////////////////
            // MIXED (GENERIC)
            ///////////////////

            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i           // Android Phones from Unidentified Vendors
            ], [MODEL, [TYPE, MOBILE]], [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
            ], [MODEL, [TYPE, TABLET]], [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
            ], [[TYPE, TABLET]], [
            /(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i              // Unidentifiable Mobile
            ], [[TYPE, MOBILE]], [
            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, EDGE+'HTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i                                       // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows
            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows) nt 6\.2; (arm)/i,                                        // Windows RT
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,            // Windows Phone
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, strMapper, windowsVersionMap]], [

            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
            /cfnetwork\/.+darwin/i
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86)/i                              // Android-x86
            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
            /\((series40);/i                                                    // Series 40
            ], [NAME, VERSION], [
            /\(bb(10);/i                                                        // BlackBerry 10
            ], [VERSION, [NAME, BLACKBERRY]], [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
            ], [VERSION, [NAME, 'Symbian']], [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ], [VERSION, [NAME, FIREFOX+' OS']], [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
            ], [VERSION, [NAME, 'webOS']], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, CHROME+'cast']], [
            /(cros) [\w]+ ([\w\.]+\w)/i                                         // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,                                                // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i                                                    // Haiku
            ], [NAME, VERSION], [
            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
            ], [[NAME, 'Solaris'], VERSION], [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX
            /(unix) ?([\w\.]*)/i                                                // UNIX
            ], [NAME, VERSION]
        ]
    };

    /////////////////
    // Constructor
    ////////////////

    var UAParser = function (ua, extensions) {

        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }

        var _ua = ua || ((typeof window !== UNDEF_TYPE && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser.major = majorize(_browser.version);
            return _browser;
        };
        this.getCPU = function () {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function () {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            return _device;
        };
        this.getEngine = function () {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function () {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            return _os;
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
            return _ua;
        };
        this.setUA = function (ua) {
            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
    UAParser.CPU = enumerize([ARCHITECTURE]);
    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

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
        if ("function" === FUNC_TYPE && __webpack_require__(/*! !webpack amd options */ "../node_modules/webpack/buildin/amd-options.js")) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof window !== UNDEF_TYPE) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),

/***/ "../node_modules/webpack/buildin/amd-options.js":
/*!******************************************************!*\
  !*** ../node_modules/webpack/buildin/amd-options.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./ads/ad-break-type.js":
/*!******************************!*\
  !*** ./ads/ad-break-type.js ***!
  \******************************/
/*! exports provided: AdBreakType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdBreakType", function() { return AdBreakType; });
var AdBreakType = {
  PRE: 'preroll',
  MID: 'midroll',
  POST: 'postroll',
  OVERLAY: 'overlay'
};


/***/ }),

/***/ "./ads/ad-error-code.js":
/*!******************************!*\
  !*** ./ads/ad-error-code.js ***!
  \******************************/
/*! exports provided: AdErrorCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdErrorCode", function() { return AdErrorCode; });
var AdErrorCode = {
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


/***/ }),

/***/ "./ads/ad-event-type.js":
/*!******************************!*\
  !*** ./ads/ad-event-type.js ***!
  \******************************/
/*! exports provided: AdEventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdEventType", function() { return AdEventType; });
var AdEventType = {
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
  AD_WATERFALLING_FAILED: 'adwaterfallingfailed',

  /**
   * Fires when browser fails to autoplay an ad.
   */
  AD_AUTOPLAY_FAILED: 'adautoplayfailed'
};


/***/ }),

/***/ "./ads/ad-tag-type.js":
/*!****************************!*\
  !*** ./ads/ad-tag-type.js ***!
  \****************************/
/*! exports provided: AdTagType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdTagType", function() { return AdTagType; });
var AdTagType = {
  VAST: 'vast',
  VMAP: 'vmap'
};


/***/ }),

/***/ "./assets/encoding-sources.json":
/*!**************************************!*\
  !*** ./assets/encoding-sources.json ***!
  \**************************************/
/*! exports provided: Base64Mp4Source, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Base64Mp4Source\":\"data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE=\"}");

/***/ }),

/***/ "./assets/style.css":
/*!**************************!*\
  !*** ./assets/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js!./assets/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./drm/drm-scheme.js":
/*!***************************!*\
  !*** ./drm/drm-scheme.js ***!
  \***************************/
/*! exports provided: DrmScheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrmScheme", function() { return DrmScheme; });
var DrmScheme = {
  WIDEVINE: 'com.widevine.alpha',
  PLAYREADY: 'com.microsoft.playready',
  FAIRPLAY: 'com.apple.fairplay'
};

/***/ }),

/***/ "./drm/fairplay.js":
/*!*************************!*\
  !*** ./drm/fairplay.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/logger */ "./utils/logger.js");
/* harmony import */ var _drm_scheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drm-scheme */ "./drm/drm-scheme.js");



var _logger = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_0__["default"])('FairPlay');

var FairPlay = /*#__PURE__*/function () {
  function FairPlay() {}

  /**
   * FairPlay is the configure key system.
   * @param {Array<PKDrmDataObject>} drmData - The drm data.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @return {boolean} - Whether FairPlay is the configure key system.
   */
  FairPlay.isConfigured = function isConfigured(drmData, drmConfig) {
    return _drm_scheme__WEBPACK_IMPORTED_MODULE_1__["DrmScheme"].FAIRPLAY === drmConfig.keySystem && !!drmData.find(function (drmEntry) {
      return drmEntry.scheme === drmConfig.keySystem;
    });
  }
  /**
   * FairPlay playback supports in case 2 conditions are met:
   * 1. The environment supports FairPlay playback.
   * 2. The drm data of the source object contains entry with FairPlay scheme.
   * @param {Array<PKDrmDataObject>} drmData - The drm data to check.
   * @return {boolean} - Whether FairPlay can be play on the current environment.
   */
  ;

  FairPlay.canPlayDrm = function canPlayDrm(drmData) {
    var result = drmData.some(function (drmEntry) {
      return drmEntry.scheme === _drm_scheme__WEBPACK_IMPORTED_MODULE_1__["DrmScheme"].FAIRPLAY;
    }) && !!window.WebKitMediaKeys;

    _logger.debug("Can play DRM scheme of: " + _drm_scheme__WEBPACK_IMPORTED_MODULE_1__["DrmScheme"].FAIRPLAY + " is " + result.toString());

    return result;
  }
  /**
   * Sets the FairPlay playback.
   * @param {FairPlayDrmConfigType} config - The config to manipulate.
   * @param {Array<PKDrmDataObject>} drmData - The drm data.
   * @returns {void}
   */
  ;

  FairPlay.setDrmPlayback = function setDrmPlayback(config, drmData) {
    _logger.debug('Sets drm playback');

    var drmEntry = drmData.find(function (drmEntry) {
      return drmEntry.scheme === _drm_scheme__WEBPACK_IMPORTED_MODULE_1__["DrmScheme"].FAIRPLAY;
    });

    if (drmEntry) {
      config.licenseUrl = drmEntry.licenseUrl;
      config.certificate = drmEntry.certificate;
    }
  };

  return FairPlay;
}();

/* harmony default export */ __webpack_exports__["default"] = (FairPlay);

/***/ }),

/***/ "./engines/dropped-frames-watcher.js":
/*!*******************************************!*\
  !*** ./engines/dropped-frames-watcher.js ***!
  \*******************************************/
/*! exports provided: DroppedFramesWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroppedFramesWatcher", function() { return DroppedFramesWatcher; });
/* harmony import */ var _event_fake_event_target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event/fake-event-target */ "./event/fake-event-target.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/logger */ "./utils/logger.js");
/* harmony import */ var _event_event_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event/event-type */ "./event/event-type.js");
/* harmony import */ var _event_event_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event/event-manager */ "./event/event-manager.js");
/* harmony import */ var _event_fake_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event/fake-event */ "./event/fake-event.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var NOT_SUPPORTED = -1;

var DroppedFramesWatcher = /*#__PURE__*/function (_FakeEventTarget) {
  _inheritsLoose(DroppedFramesWatcher, _FakeEventTarget);

  function DroppedFramesWatcher(mediaSourceAdapter, config, videoElement) {
    var _this;

    _this = _FakeEventTarget.call(this) || this;

    _defineProperty(_assertThisInitialized(_this), "_droppedFramesInterval", null);

    _defineProperty(_assertThisInitialized(_this), "_lastDroppedFrames", 0);

    _defineProperty(_assertThisInitialized(_this), "_lastDecodedFrames", 0);

    _defineProperty(_assertThisInitialized(_this), "_lastTime", 0);

    _defineProperty(_assertThisInitialized(_this), "_currentBitrate", 0);

    _this._eventManager = new _event_event_manager__WEBPACK_IMPORTED_MODULE_3__["default"]();
    _this._mediaSourceAdapter = mediaSourceAdapter;
    _this._config = config;
    _this._videoElement = videoElement;

    if (_this._mediaSourceAdapter.capabilities.fpsControl) {
      _this._eventManager.listen(_this._mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_2__["CustomEventType"].FPS_DROP, function (event) {
        return _this._triggerFPSDrop(event.payload.data);
      });

      return _assertThisInitialized(_this);
    }

    if (_this._getDroppedAndDecodedFrames()[0] === NOT_SUPPORTED) {
      DroppedFramesWatcher._logger.debug('Dropped frame watcher is not supported');
    } else if (_this._config.capLevelOnFPSDrop) {
      _this._init();
    }

    return _this;
  }

  var _proto = DroppedFramesWatcher.prototype;

  _proto._init = function _init() {
    var _this2 = this;

    this._eventManager.listen(this._mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_2__["CustomEventType"].VIDEO_TRACK_CHANGED, function (event) {
      return _this2._currentBitrate = event.payload.selectedVideoTrack.bandwidth;
    });

    this._droppedFramesInterval = setInterval(function () {
      return _this2._checkFPS();
    }, this._config.fpsDroppedFramesInterval);
  };

  _proto._triggerFPSDrop = function _triggerFPSDrop(data) {
    this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_4__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_2__["CustomEventType"].FPS_DROP, data));
  };

  _proto._getDroppedAndDecodedFrames = function _getDroppedAndDecodedFrames() {
    if (typeof this._videoElement.getVideoPlaybackQuality === 'function') {
      var videoPlaybackQuality = this._videoElement.getVideoPlaybackQuality();

      return [videoPlaybackQuality.droppedVideoFrames, videoPlaybackQuality.totalVideoFrames];
    } else if (typeof this._videoElement.webkitDroppedFrameCount == 'number' && typeof this._videoElement.webkitDecodedFrameCount == 'number') {
      return [this._videoElement.webkitDroppedFrameCount, this._videoElement.webkitDecodedFrameCount];
    } else {
      return [NOT_SUPPORTED, NOT_SUPPORTED];
    }
  };

  _proto._checkFPS = function _checkFPS() {
    var _this$_getDroppedAndD = this._getDroppedAndDecodedFrames(),
        droppedFrames = _this$_getDroppedAndD[0],
        decodedFrames = _this$_getDroppedAndD[1];

    try {
      var currentTime = performance.now();

      if (decodedFrames) {
        if (this._lastTime) {
          var currentPeriod = currentTime - this._lastTime,
              currentDropped = droppedFrames - this._lastDroppedFrames,
              currentDecoded = decodedFrames - this._lastDecodedFrames,
              droppedFPS = 1000 * currentDropped / currentPeriod;

          if (droppedFPS > 0) {
            DroppedFramesWatcher._logger.debug('checkFPS : droppedFPS/decodedFPS:' + droppedFPS / (1000 * currentDecoded / currentPeriod));

            if (currentDropped > this._config.fpsDroppedMonitoringThreshold * currentDecoded) {
              this._mediaSourceAdapter.setMaxBitrate(this._currentBitrate - 1);

              this._triggerFPSDrop({
                currentDropped: currentDropped,
                currentDecoded: currentDecoded,
                totalDroppedFrames: droppedFPS
              });
            }
          }
        }

        this._lastTime = currentTime;
        this._lastDroppedFrames = droppedFrames;
        this._lastDecodedFrames = decodedFrames;
      }
    } catch (error) {
      DroppedFramesWatcher._logger.error('Error occur while trying to check dropFrames: ', error);
    }
  };

  _proto.destroy = function destroy() {
    if (this._droppedFramesInterval) {
      clearInterval(this._droppedFramesInterval);
    }

    this._droppedFramesInterval = null;

    this._eventManager.destroy();
  };

  return DroppedFramesWatcher;
}(_event_fake_event_target__WEBPACK_IMPORTED_MODULE_0__["default"]);

_defineProperty(DroppedFramesWatcher, "_logger", Object(_utils_logger__WEBPACK_IMPORTED_MODULE_1__["default"])('droppedFramesWatcher'));



/***/ }),

/***/ "./engines/engine-decorator-manager.js":
/*!*********************************************!*\
  !*** ./engines/engine-decorator-manager.js ***!
  \*********************************************/
/*! exports provided: EngineDecoratorManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineDecoratorManager", function() { return EngineDecoratorManager; });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/logger */ "./utils/logger.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Engine decorator manager for plugins.
 * @class EngineDecoratorManager
 */

var EngineDecoratorManager = /*#__PURE__*/function () {
  function EngineDecoratorManager() {
    _defineProperty(this, "_decoratorProviders", new Map());

    _defineProperty(this, "_logger", Object(_utils_logger__WEBPACK_IMPORTED_MODULE_0__["default"])('EngineDecoratorManager'));
  }

  var _proto = EngineDecoratorManager.prototype;

  _proto.register = function register(engineDecoratorProvider) {
    if (!this._decoratorProviders.has(engineDecoratorProvider.getName())) {
      this._decoratorProviders.set(engineDecoratorProvider.getName(), engineDecoratorProvider);
    } else {
      this._logger.warn("decorator already registered for " + engineDecoratorProvider.getName());
    }
  };

  _proto.createDecorators = function createDecorators(engine, dispatchEvent) {
    this._logger.debug("decorators created for " + Array.from(this._decoratorProviders.keys()).toString());

    return Array.from(this._decoratorProviders.values(), function (engineDecoratorProvider) {
      return engineDecoratorProvider.getEngineDecorator(engine, dispatchEvent);
    });
  };

  _proto.destroy = function destroy() {
    this._logger.debug("decorators destroyed");

    this._decoratorProviders.clear();
  };

  return EngineDecoratorManager;
}();



/***/ }),

/***/ "./engines/engine-decorator-provider.js":
/*!**********************************************!*\
  !*** ./engines/engine-decorator-provider.js ***!
  \**********************************************/
/*! exports provided: EngineDecoratorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineDecoratorProvider", function() { return EngineDecoratorProvider; });
/**
 * Engine decorator provider.
 * @class EngineDecoratorProvider
 * @param {IEngineDecoratorProvider} plugin - The plugin which have implemented decorator.
 * @implements {IEngineDecorator}
 */
var EngineDecoratorProvider = /*#__PURE__*/function () {
  function EngineDecoratorProvider(plugin) {
    this._name = plugin.getName();
    this._getEngineDecorator = plugin.getEngineDecorator.bind(plugin);
  }

  var _proto = EngineDecoratorProvider.prototype;

  _proto.getEngineDecorator = function getEngineDecorator(engine, dispatchEventHandler) {
    return this._getEngineDecorator(engine, dispatchEventHandler);
  };

  _proto.getName = function getName() {
    return this._name;
  };

  return EngineDecoratorProvider;
}();



/***/ }),

/***/ "./engines/engine-decorator.js":
/*!*************************************!*\
  !*** ./engines/engine-decorator.js ***!
  \*************************************/
/*! exports provided: EngineDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineDecorator", function() { return EngineDecorator; });
/* harmony import */ var _event_fake_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event/fake-event */ "./event/fake-event.js");
/* harmony import */ var _event_event_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event/event-type */ "./event/event-type.js");
/* harmony import */ var _event_event_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event/event-manager */ "./event/event-manager.js");
/* harmony import */ var _event_fake_event_target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event/fake-event-target */ "./event/fake-event-target.js");
/* harmony import */ var _engine_decorator_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine-decorator-manager */ "./engines/engine-decorator-manager.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }






/**
 * Engine decorator for plugin.
 * @class EngineDecorator
 * @param {IEngineDecorator} engine - The engine to decorate.
 * @implements {IEngineDecorator}
 */

var EngineDecorator = /*#__PURE__*/function (_FakeEventTarget) {
  _inheritsLoose(EngineDecorator, _FakeEventTarget);

  function EngineDecorator(engine, decoratorManager) {
    var _this;

    _this = _FakeEventTarget.call(this) || this;
    _this._eventManager = new _event_event_manager__WEBPACK_IMPORTED_MODULE_2__["default"]();
    _this._pluginDecorators = decoratorManager.createDecorators(engine, _FakeEventTarget.prototype.dispatchEvent.bind(_assertThisInitialized(_this)));
    var events = Object.values(_event_event_type__WEBPACK_IMPORTED_MODULE_1__["EventType"]);
    events.forEach(function (event) {
      return _this._eventManager.listen(engine, event, function (e) {
        return _this.dispatchEvent(e);
      });
    });
    return new Proxy(engine, {
      get: function get(obj, prop) {
        if (prop === 'destroy') {
          _this._destroy();
        }

        var activeDecorator = _this._pluginDecorators.find(function (decorator) {
          return decorator.active;
        });

        var target; //For events the proxy is the target - to avoid listening to engine itself

        if (prop === 'addEventListener' || prop === 'removeEventListener') {
          target = _assertThisInitialized(_this);
        } else {
          target = activeDecorator && prop in activeDecorator ? activeDecorator : obj;
        } // $FlowFixMe


        return target[prop] && typeof target[prop].bind === 'function' ? target[prop].bind(target) : target[prop];
      },
      set: function set(obj, prop, value) {
        var activeDecorator = _this._pluginDecorators.find(function (decorator) {
          return prop in decorator && decorator.active;
        }); // $FlowFixMe


        activeDecorator && prop in activeDecorator ? activeDecorator[prop] = value : obj[prop] = value;
        return true;
      }
    }) || _assertThisInitialized(_this);
  }

  var _proto = EngineDecorator.prototype;

  _proto.dispatchEvent = function dispatchEvent(event) {
    var activeDecorator = this._pluginDecorators.find(function (decorator) {
      return decorator.active;
    });

    return activeDecorator && activeDecorator.dispatchEvent ? activeDecorator.dispatchEvent(event) : _FakeEventTarget.prototype.dispatchEvent.call(this, event);
  };

  _proto._destroy = function _destroy() {
    this._pluginDecorators = [];

    this._eventManager.destroy();
  };

  _createClass(EngineDecorator, [{
    key: "active",
    get: function get() {
      return true;
    }
  }]);

  return EngineDecorator;
}(_event_fake_event_target__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./engines/engine-provider.js":
/*!************************************!*\
  !*** ./engines/engine-provider.js ***!
  \************************************/
/*! exports provided: registerEngine, unRegisterEngine, EngineProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEngine", function() { return registerEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unRegisterEngine", function() { return unRegisterEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineProvider", function() { return EngineProvider; });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/logger */ "./utils/logger.js");
/* harmony import */ var _html5_html5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html5/html5 */ "./engines/html5/html5.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Engine Provider
 * @classdesc
 */

var EngineProvider = /*#__PURE__*/function () {
  function EngineProvider() {}

  /**
   * The logger of the Engine provider.
   * @member {any} _logger
   * @static
   * @private
   */

  /**
   * The Engine registry.
   * @member {Object} _engineProviders
   * @static
   * @private
   */

  /**
   * Add an engine to the registry.
   * @function register
   * @param {string} id - The engine id.
   * @param {IEngineStatic} engine -  The engine to register.
   * @static
   * @returns {void}
   */
  EngineProvider.register = function register(id, engine) {
    if (id && !EngineProvider._engineProviders[id]) {
      EngineProvider._logger.debug("Engine <" + id + "> has been registered successfully");

      EngineProvider._engineProviders[id] = engine;
    } else {
      EngineProvider._logger.debug("Engine <" + id + "> is already registered, do not register again");
    }
  }
  /**
   * Remove an engine from the registry.
   * @function unRegister
   * @param {string} id - The engine id.
   * @static
   * @returns {void}
   */
  ;

  EngineProvider.unRegister = function unRegister(id) {
    if (EngineProvider._engineProviders[id]) {
      EngineProvider._logger.debug("Unregistered <" + id + "> Engine");

      delete EngineProvider._engineProviders[id];
    }
  }
  /**
   * Get the appropriate Engines.
   * @function getEngines
   * @returns {Array<IEngineStatic>} - The Array of engines, or null if such doesn't exists.
   * @static
   */
  ;

  EngineProvider.getEngines = function getEngines() {
    return Object.keys(EngineProvider._engineProviders).map(function (key) {
      return EngineProvider._engineProviders[key];
    });
  }
  /**
   * Destroys and clear the registered engines
   * @static
   * @returns {void}
   */
  ;

  EngineProvider.destroy = function destroy() {
    EngineProvider._engineProviders = {};
  };

  return EngineProvider;
}();

_defineProperty(EngineProvider, "_logger", Object(_utils_logger__WEBPACK_IMPORTED_MODULE_0__["default"])('EngineProvider'));

_defineProperty(EngineProvider, "_engineProviders", {});

if (_html5_html5__WEBPACK_IMPORTED_MODULE_1__["default"].isSupported()) {
  EngineProvider.register(_html5_html5__WEBPACK_IMPORTED_MODULE_1__["default"].id, _html5_html5__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

var registerEngine = EngineProvider.register;
var unRegisterEngine = EngineProvider.unRegister;


/***/ }),

/***/ "./engines/engine-type.js":
/*!********************************!*\
  !*** ./engines/engine-type.js ***!
  \********************************/
/*! exports provided: EngineType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineType", function() { return EngineType; });
var EngineType = {
  HTML5: 'html5',
  FLASH: 'flash',
  SILVERLIGHT: 'silverlight',
  CAST: 'cast'
};


/***/ }),

/***/ "./engines/html5/capabilities/html5-autoplay.js":
/*!******************************************************!*\
  !*** ./engines/html5/capabilities/html5-autoplay.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/util */ "./utils/util.js");
/* harmony import */ var _event_event_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../event/event-type */ "./event/event-type.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/logger */ "./utils/logger.js");
/* harmony import */ var _assets_encoding_sources_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/encoding-sources.json */ "./assets/encoding-sources.json");
var _assets_encoding_sources_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/encoding-sources.json */ "./assets/encoding-sources.json", 1);
var _class, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var WAIT_TIME = 500;
var Html5AutoPlayCapability = (_temp = _class = /*#__PURE__*/function () {
  function Html5AutoPlayCapability() {}

  /**
   * Runs the test for autoplay capability.
   * @public
   * @static
   * @returns {void}
   */
  Html5AutoPlayCapability.runCapability = function runCapability() {
    if (Html5AutoPlayCapability._capabilities.autoplay || typeof Html5AutoPlayCapability._capabilities.autoplay === 'boolean' && typeof Html5AutoPlayCapability._capabilities.mutedAutoPlay === 'boolean') {
      Html5AutoPlayCapability._playPromiseResult = Promise.resolve(Html5AutoPlayCapability._capabilities);
      return;
    }

    if (!Html5AutoPlayCapability._vid) {
      Html5AutoPlayCapability._vid = _utils_util__WEBPACK_IMPORTED_MODULE_0__["Dom"].createElement('video');
      Html5AutoPlayCapability._vid.src = _assets_encoding_sources_json__WEBPACK_IMPORTED_MODULE_3__["Base64Mp4Source"]; // For iOS devices needs to turn the playsinline attribute on

      Html5AutoPlayCapability._vid.setAttribute('playsinline', '');
    }

    Html5AutoPlayCapability._playPromiseResult = new Promise(function (resolve) {
      Html5AutoPlayCapability._setMuted(false);

      Html5AutoPlayCapability._getPlayPromise().then(function () {
        return resolve({
          autoplay: true,
          mutedAutoPlay: true
        });
      }).catch(function () {
        Html5AutoPlayCapability._setMuted(true);

        Html5AutoPlayCapability._getPlayPromise().then(function () {
          return resolve({
            autoplay: false,
            mutedAutoPlay: true
          });
        }).catch(function () {
          return resolve({
            autoplay: false,
            mutedAutoPlay: false
          });
        });
      });
    });
  }
  /**
   * Gets the test result for autoplay capability.
   * @returns {Promise<CapabilityResult>} - The result object for autoplay capability.
   * @static
   * @public
   */
  ;

  Html5AutoPlayCapability.getCapability = function getCapability() {
    return Html5AutoPlayCapability._playPromiseResult.then(function (playCapability) {
      var fallbackPlayCapabilityTest;

      if (playCapability.autoplay) {
        fallbackPlayCapabilityTest = Promise.resolve(playCapability);
      } else {
        // If autoplay is not allowed - try again and return the updated result
        Html5AutoPlayCapability.runCapability();
        fallbackPlayCapabilityTest = Html5AutoPlayCapability._playPromiseResult;
      }

      return fallbackPlayCapabilityTest.then(function (fallbackPlayCapability) {
        return _utils_util__WEBPACK_IMPORTED_MODULE_0__["Object"].mergeDeep(fallbackPlayCapability, Html5AutoPlayCapability._capabilities);
      });
    });
  }
  /**
   * Sets an engine capabilities.
   * @param {Object} capabilities - The engine capabilities.
   * @returns {void}
   * @public
   * @static
   */
  ;

  Html5AutoPlayCapability.setCapabilities = function setCapabilities(capabilities) {
    Html5AutoPlayCapability._logger.debug('Set player capabilities', capabilities);

    var autoplay = capabilities.autoplay,
        mutedAutoPlay = capabilities.mutedAutoPlay;

    if (typeof autoplay === 'boolean') {
      Html5AutoPlayCapability._capabilities.autoplay = autoplay;
    }

    if (typeof mutedAutoPlay === 'boolean') {
      Html5AutoPlayCapability._capabilities.mutedAutoPlay = mutedAutoPlay;
    }
  }
  /**
   * Gets the play promise.
   * @return {Promise<*>} - Play promise which resolved or rejected.
   * @private
   */
  ;

  Html5AutoPlayCapability._getPlayPromise = function _getPlayPromise() {
    return Html5AutoPlayCapability._vid.play() || Html5AutoPlayCapability._forcePromiseReturnValue();
  }
  /**
   * Sets the test video element muted value.
   * @param {boolean} muted - The muted value.
   * @private
   * @returns {void}
   * @static
   */
  ;

  Html5AutoPlayCapability._setMuted = function _setMuted(muted) {
    if (muted) {
      Html5AutoPlayCapability._vid.muted = true;

      Html5AutoPlayCapability._vid.setAttribute('muted', '');
    } else {
      Html5AutoPlayCapability._vid.muted = false;

      Html5AutoPlayCapability._vid.removeAttribute('muted');
    }
  }
  /**
   * For browsers which are not supported promise return value from play()
   * request we are simulate the same behaviour.
   * @return {Promise<*>} - Play promise which resolved or rejected.
   * @private
   * @static
   */
  ;

  Html5AutoPlayCapability._forcePromiseReturnValue = function _forcePromiseReturnValue() {
    return new Promise(function (resolve, reject) {
      Html5AutoPlayCapability._vid.addEventListener(_event_event_type__WEBPACK_IMPORTED_MODULE_1__["Html5EventType"].ERROR, function () {
        reject();
      });

      var supported = setTimeout(function () {
        Html5AutoPlayCapability._logger.debug("Timeout " + WAIT_TIME + " ms has been reached");

        reject();
      }, WAIT_TIME);

      if (Html5AutoPlayCapability._vid.paused === true) {
        clearTimeout(supported);
        reject();
      } else {
        clearTimeout(supported);
        resolve();
      }
    });
  };

  return Html5AutoPlayCapability;
}(), _defineProperty(_class, "_logger", Object(_utils_logger__WEBPACK_IMPORTED_MODULE_2__["default"])('Html5AutoPlayCapability')), _defineProperty(_class, "_capabilities", {}), _temp);
/* harmony default export */ __webpack_exports__["default"] = (Html5AutoPlayCapability);

/***/ }),

/***/ "./engines/html5/cors-types.js":
/*!*************************************!*\
  !*** ./engines/html5/cors-types.js ***!
  \*************************************/
/*! exports provided: CorsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorsType", function() { return CorsType; });
var CorsType = {
  ANONYMOUS: 'anonymous',
  USE_CREDENTIALS: 'use-credentials'
};


/***/ }),

/***/ "./engines/html5/html5.js":
/*!********************************!*\
  !*** ./engines/html5/html5.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Html5; });
/* harmony import */ var _event_fake_event_target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event/fake-event-target */ "./event/fake-event-target.js");
/* harmony import */ var _event_fake_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../event/fake-event */ "./event/fake-event.js");
/* harmony import */ var _event_event_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../event/event-manager */ "./event/event-manager.js");
/* harmony import */ var _event_event_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../event/event-type */ "./event/event-type.js");
/* harmony import */ var _media_source_media_source_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-source/media-source-provider */ "./engines/html5/media-source/media-source-provider.js");
/* harmony import */ var _track_video_track__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../track/video-track */ "./track/video-track.js");
/* harmony import */ var _track_audio_track__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../track/audio-track */ "./track/audio-track.js");
/* harmony import */ var _track_text_track__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../track/text-track */ "./track/text-track.js");
/* harmony import */ var _track_image_track__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../track/image-track */ "./track/image-track.js");
/* harmony import */ var _track_vtt_cue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../track/vtt-cue */ "./track/vtt-cue.js");
/* harmony import */ var _track_timed_metadata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../track/timed-metadata */ "./track/timed-metadata.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/util */ "./utils/util.js");
/* harmony import */ var _capabilities_html5_autoplay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./capabilities/html5-autoplay */ "./engines/html5/capabilities/html5-autoplay.js");
/* harmony import */ var _error_error__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../error/error */ "./error/error.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/logger */ "./utils/logger.js");
/* harmony import */ var _dropped_frames_watcher__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../dropped-frames-watcher */ "./engines/dropped-frames-watcher.js");
/* harmony import */ var _thumbnail_thumbnail_info__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../thumbnail/thumbnail-info */ "./thumbnail/thumbnail-info.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















var SHORT_BUFFERING_TIMEOUT = 500;
/**
 * Html5 engine for playback.
 * @classdesc
 */

var Html5 = /*#__PURE__*/function (_FakeEventTarget) {
  _inheritsLoose(Html5, _FakeEventTarget);

  /**
   * The video element.
   * @type {HTMLVideoElement}
   * @private
   */

  /**
   * The event manager of the engine.
   * @type {EventManager}
   * @private
   */

  /**
   * The selected media source adapter of the engine.
   * @type {?IMediaSourceAdapter}
   * @private
   */

  /**
   * The player config object.
   * @type {Object}
   * @private
   */

  /**
   * Promise to indicate when a media source adapter can be loaded.
   * @type {Promise<*>}
   * @private
   */

  /**
   * The html5 class logger.
   * @type {any}
   * @static
   * @private
   */

  /**
   * The html5 capabilities handlers.
   * @private
   * @static
   */

  /**
   * @type {string} - The engine id.
   * @public
   * @static
   */

  /**
   * @type {PKVideoElementStore} - Store object which maps between playerId to its video element.
   */

  /**
   * Checks if html5 is supported.
   * @returns {boolean} - Whether the html5 is supported.
   */
  Html5.isSupported = function isSupported() {
    try {
      var el = _utils_util__WEBPACK_IMPORTED_MODULE_11__["Dom"].createElement('video');
      el.volume = 0.5;
      return !!el.canPlayType;
    } catch (e) {
      return false;
    }
  }
  /**
   * Factory method to create an engine.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @param {Object} config - The player configuration.
   * @param {string} playerId - The player id.
   * @returns {IEngine} - New instance of the run time engine.
   * @public
   * @static
   */
  ;

  Html5.createEngine = function createEngine(source, config, playerId) {
    return new this(source, config, playerId);
  }
  /**
   * Checks if the engine can play a given source.
   * @param {PKMediaSourceObject} source - The source object to check.
   * @param {boolean} preferNative - prefer native flag.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @returns {boolean} - Whether the engine can play the source.
   * @public
   * @static
   */
  ;

  Html5.canPlaySource = function canPlaySource(source, preferNative, drmConfig) {
    return _media_source_media_source_provider__WEBPACK_IMPORTED_MODULE_4__["default"].canPlaySource(source, preferNative, drmConfig);
  }
  /**
   * Runs the html5 capabilities tests.
   * @returns {void}
   * @public
   * @static
   */
  ;

  Html5.runCapabilities = function runCapabilities() {
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
  ;

  Html5.getCapabilities = function getCapabilities() {
    var promises = [];

    Html5._capabilities.forEach(function (capability) {
      return promises.push(capability.getCapability());
    });

    return Promise.all(promises).then(function (arrayOfResults) {
      var _ref;

      var mergedResults = {};
      arrayOfResults.forEach(function (res) {
        return Object.assign(mergedResults, res);
      });
      return _ref = {}, _ref[Html5.id] = mergedResults, _ref;
    });
  }
  /**
   * Sets an engine capabilities.
   * @param {Object} capabilities - The engine capabilities.
   * @returns {void}
   * @public
   * @static
   */
  ;

  Html5.setCapabilities = function setCapabilities(capabilities) {
    Html5._capabilities.forEach(function (capability) {
      return capability.setCapabilities(capabilities);
    });
  }
  /**
   * For browsers which block auto play, use the user gesture to open the video element and enable playing via API.
   * @returns {void}
   * @param {string} playerId - the id to be set as the key of the video element
   * @private
   * @public
   */
  ;

  Html5.prepareVideoElement = function prepareVideoElement(playerId) {
    if (!Html5.videoElementStore[playerId]) {
      Html5._logger.debug("Create the video element for playing " + playerId);

      var videoElement = _utils_util__WEBPACK_IMPORTED_MODULE_11__["Dom"].createElement('video');
      Html5.videoElementStore[playerId] = videoElement;
    }

    Html5._logger.debug("Prepare the video element for playing " + playerId);

    Html5.videoElementStore[playerId].load();
  }
  /**
   * The player playback rates.
   * @type {Array<number>}
   */
  ;

  /**
   * @constructor
   * @param {PKMediaSourceObject} source - The selected source object.
   * @param {Object} config - The player configuration.
   * @param {string} playerId - The player id.
   */
  function Html5(source, config, playerId) {
    var _this;

    _this = _FakeEventTarget.call(this) || this;

    _defineProperty(_assertThisInitialized(_this), "_reset", false);

    _this._eventManager = new _event_event_manager__WEBPACK_IMPORTED_MODULE_2__["default"]();
    _this._canLoadMediaSourceAdapterPromise = Promise.resolve();

    _this._createVideoElement(playerId);

    _this._init(source, config);

    return _this;
  }
  /**
   * Restores the engine.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @param {Object} config - The player configuration.
   * @returns {void}
   */


  var _proto = Html5.prototype;

  _proto.restore = function restore(source, config) {
    this.reset();

    this._init(source, config);
  }
  /**
   * Resets the engine.
   * @returns {void}
   */
  ;

  _proto.reset = function reset() {
    var _this2 = this;

    if (this._reset) return;
    this._reset = true;

    this._eventManager.removeAll();

    if (this._droppedFramesWatcher) {
      this._droppedFramesWatcher.destroy();

      this._droppedFramesWatcher = null;
    }

    this._canLoadMediaSourceAdapterPromise = new Promise(function (resolve, reject) {
      var mediaSourceAdapterDestroyed = _this2._mediaSourceAdapter ? _this2._mediaSourceAdapter.destroy() : Promise.resolve();

      if (_this2._el && _this2._el.src) {
        mediaSourceAdapterDestroyed.then(function () {
          _utils_util__WEBPACK_IMPORTED_MODULE_11__["Dom"].setAttribute(_this2._el, 'src', '');
          _utils_util__WEBPACK_IMPORTED_MODULE_11__["Dom"].removeAttribute(_this2._el, 'src');
          resolve();
        }, reject);
      } else {
        mediaSourceAdapterDestroyed.then(resolve, reject);
      }
    });
    this._mediaSourceAdapter = null;
  }
  /**
   * Destroys the engine.
   * @public
   * @returns {void}
   */
  ;

  _proto.destroy = function destroy() {
    this.detach();

    if (this._el) {
      this.pause();
      _utils_util__WEBPACK_IMPORTED_MODULE_11__["Dom"].removeAttribute(this._el, 'src');
      _utils_util__WEBPACK_IMPORTED_MODULE_11__["Dom"].removeChild(this._el.parentNode, this._el);
    }

    this._eventManager.destroy();

    _media_source_media_source_provider__WEBPACK_IMPORTED_MODULE_4__["default"].destroy();

    if (this._droppedFramesWatcher) {
      this._droppedFramesWatcher.destroy();

      this._droppedFramesWatcher = null;
    }

    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.destroy();

      this._mediaSourceAdapter = null;
    }
  }
  /**
   * Get the engine's id
   * @public
   * @returns {string} the engine's id
   */
  ;

  /**
   * attach media - return the media source to handle the video tag
   * @public
   * @returns {void}
   */
  _proto.attachMediaSource = function attachMediaSource() {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.attachMediaSource();
    }
  }
  /**
   * detach media - will remove the media source from handling the video
   * @public
   * @returns {void}
   */
  ;

  _proto.detachMediaSource = function detachMediaSource() {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.detachMediaSource();
    }
  }
  /**
   * Listen to the video element events and triggers them from the engine.
   * @public
   * @returns {void}
   */
  ;

  _proto.attach = function attach() {
    var _this3 = this;

    Object.keys(_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"]).forEach(function (html5Event) {
      if (![_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].ERROR, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].WAITING].includes(_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"][html5Event])) {
        _this3._eventManager.listen(_this3._el, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"][html5Event], function () {
          return _this3.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"][html5Event]));
        });
      }
    });

    this._eventManager.listen(this._el, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].ERROR, function () {
      return _this3._handleVideoError();
    });

    this._eventManager.listen(this._el, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].WAITING, function () {
      return _this3._handleWaiting();
    });

    this._handleMetadataTrackEvents();

    this._eventManager.listen(this._el.textTracks, 'addtrack', function (event) {
      if (_track_text_track__WEBPACK_IMPORTED_MODULE_7__["default"].isNativeTextTrack(event.track)) {
        _this3.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].TEXT_TRACK_ADDED, {
          track: event.track
        }));
      }
    });

    var mediaSourceAdapter = this._mediaSourceAdapter;

    if (mediaSourceAdapter) {
      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].VIDEO_TRACK_CHANGED, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].AUDIO_TRACK_CHANGED, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].TEXT_TRACK_CHANGED, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].IMAGE_TRACK_CHANGED, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].ABR_MODE_CHANGED, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].TEXT_CUE_CHANGED, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].TRACKS_CHANGED, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].FRAG_LOADED, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].DRM_LICENSE_LOADED, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].MANIFEST_LOADED, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].ERROR, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].TIME_UPDATE, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].PLAYING, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].WAITING, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].MEDIA_RECOVERED, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].TIMED_METADATA_ADDED, function (event) {
        return _this3.dispatchEvent(event);
      });

      this._eventManager.listen(mediaSourceAdapter, 'hlsFragParsingMetadata', function (event) {
        return _this3.dispatchEvent(event);
      });

      if (this._droppedFramesWatcher) {
        this._eventManager.listen(this._droppedFramesWatcher, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].FPS_DROP, function (event) {
          return _this3.dispatchEvent(event);
        });
      }
    }
  }
  /**
   * Remove the listeners of the video element events.
   * @public
   * @returns {void}
   */
  ;

  _proto.detach = function detach() {
    var _this4 = this;

    Object.keys(_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"]).forEach(function (html5Event) {
      _this4._eventManager.unlisten(_this4._el, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"][html5Event]);
    });

    if (this._mediaSourceAdapter) {
      this._eventManager.unlisten(this._mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].VIDEO_TRACK_CHANGED);

      this._eventManager.unlisten(this._mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].AUDIO_TRACK_CHANGED);

      this._eventManager.unlisten(this._mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].TEXT_TRACK_CHANGED);

      this._eventManager.unlisten(this._mediaSourceAdapter, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].TEXT_CUE_CHANGED);
    }
  }
  /**
   * @returns {HTMLVideoElement} - The video element.
   * @public
   */
  ;

  _proto.getVideoElement = function getVideoElement() {
    return this._el;
  }
  /**
   * Select a new video track.
   * @param {VideoTrack} videoTrack - The video track object to set.
   * @returns {void}
   */
  ;

  _proto.selectVideoTrack = function selectVideoTrack(videoTrack) {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectVideoTrack(videoTrack);
    }
  }
  /**
   * Select a new audio track.
   * @param {AudioTrack} audioTrack - The video track object to set.
   * @returns {void}
   */
  ;

  _proto.selectAudioTrack = function selectAudioTrack(audioTrack) {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectAudioTrack(audioTrack);
    }
  }
  /**
   * Select a new text track.
   * @param {PKTextTrack} textTrack - The playkit text track object to set.
   * @returns {void}
   */
  ;

  _proto.selectTextTrack = function selectTextTrack(textTrack) {
    this._removeCueChangeListeners();

    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectTextTrack(textTrack);
    }

    this.resetAllCues();

    this._addCueChangeListener();
  }
  /**
   * Select a new image track.
   * @param {ImageTrack} imageTrack - The image track object to set.
   * @returns {void}
   */
  ;

  _proto.selectImageTrack = function selectImageTrack(imageTrack) {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectImageTrack(imageTrack);
    }
  }
  /**
   * Hide the text track
   * @function hideTextTrack
   * @returns {void}
   * @public
   */
  ;

  _proto.hideTextTrack = function hideTextTrack() {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.hideTextTrack();
    }

    this._removeCueChangeListeners();
  }
  /**
   * Enables adaptive bitrate switching according to the media source extension logic.
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   */
  ;

  _proto.enableAdaptiveBitrate = function enableAdaptiveBitrate() {
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
  ;

  _proto.isAdaptiveBitrateEnabled = function isAdaptiveBitrateEnabled() {
    if (this._mediaSourceAdapter) {
      return this._mediaSourceAdapter.isAdaptiveBitrateEnabled();
    }

    return false;
  }
  /**
   * Apply ABR restriction
   * @function applyABRRestriction
   * @param {PKABRRestrictionObject} restriction - abr restriction config
   * @returns {void}
   * @public
   */
  ;

  _proto.applyABRRestriction = function applyABRRestriction(restriction) {
    if (this._mediaSourceAdapter) {
      return this._mediaSourceAdapter.applyABRRestriction(restriction);
    }
  }
  /**
   * Seeking to live edge.
   * @function seekToLiveEdge
   * @returns {void}
   * @public
   */
  ;

  _proto.seekToLiveEdge = function seekToLiveEdge() {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.seekToLiveEdge();
    }
  };

  _proto.isOnLiveEdge = function isOnLiveEdge() {
    if (this._mediaSourceAdapter) {
      return this._mediaSourceAdapter.isOnLiveEdge();
    }

    return false;
  }
  /**
   * Get the start time of DVR window in live playback in seconds.
   * @returns {Number} - start time of DVR window.
   * @public
   */
  ;

  _proto.getStartTimeOfDvrWindow = function getStartTimeOfDvrWindow() {
    return this._mediaSourceAdapter ? this._mediaSourceAdapter.getStartTimeOfDvrWindow() : 0;
  }
  /**
   * Checking if the current playback is live.
   * @function isLive
   * @returns {boolean} - Whether playback is live.
   * @public
   */
  ;

  _proto.isLive = function isLive() {
    return this._mediaSourceAdapter ? this._mediaSourceAdapter.isLive() : false;
  }
  /**
   * Start/resume playback.
   * @public
   * @returns {?Promise<*>} - play promise
   */
  ;

  _proto.play = function play() {
    var _this5 = this;

    var playPromise = this._el.play();

    if (playPromise) {
      playPromise.catch(function (err) {
        return _this5.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].PLAY_FAILED, {
          error: err
        }));
      });
    }

    return playPromise;
  }
  /**
   * Pause playback.
   * @public
   * @returns {void}
   */
  ;

  _proto.pause = function pause() {
    return this._el.pause();
  }
  /**
   * Load media.
   * @param {number} startTime - Optional time to start the video from.
   * @public
   * @returns {Promise<Object>} - The loaded data
   */
  ;

  _proto.load = function load(startTime) {
    var _this6 = this;

    this._el.load();

    return this._canLoadMediaSourceAdapterPromise.then(function () {
      return _this6._mediaSourceAdapter ? _this6._mediaSourceAdapter.load(startTime) : Promise.resolve({});
    }).catch(function (error) {
      _this6.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].ERROR, error));

      return Promise.reject(error);
    });
  }
  /**
   * Request the engine to enter picture in picture mode
   * @public
   * @returns {void}
   */
  ;

  _proto.enterPictureInPicture = function enterPictureInPicture() {
    var _this7 = this;

    try {
      // Currently it's supported in chrome and in safari. So if we consider checking support before,
      // we can use this flag to distinguish between the two. In the future we might need a different method.
      // Second condition is because flow does not support this API yet
      if (document.pictureInPictureEnabled && typeof this._el.requestPictureInPicture === 'function') {
        this._el.requestPictureInPicture().catch(function (error) {
          _this7.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].ERROR, new _error_error__WEBPACK_IMPORTED_MODULE_13__["default"](_error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Severity.RECOVERABLE, _error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Category.PLAYER, _error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Code.ENTER_PICTURE_IN_PICTURE_FAILED, error)));
        });
      } else if (typeof this._el.webkitSetPresentationMode === 'function') {
        this._el.webkitSetPresentationMode('picture-in-picture'); // Safari does not fire this event but Chrome does, normalizing the behaviour


        setTimeout(function () {
          return _this7.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].ENTER_PICTURE_IN_PICTURE));
        }, 0);
      }
    } catch (error) {
      this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].ERROR, new _error_error__WEBPACK_IMPORTED_MODULE_13__["default"](_error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Severity.RECOVERABLE, _error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Category.PLAYER, _error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Code.ENTER_PICTURE_IN_PICTURE_FAILED, error)));
    }
  }
  /**
   * Request the engine to exit picture in picture mode
   * @public
   * @returns {void}
   */
  ;

  _proto.exitPictureInPicture = function exitPictureInPicture() {
    var _this8 = this;

    try {
      // Currently it's supported in chrome and in safari. So if we consider checking support before,
      // we can use this flag to distinguish between the two. In the future we might need a different method.
      // Second condition is because flow does not support this API yet
      if (document.pictureInPictureEnabled && typeof document.exitPictureInPicture === 'function' && this._el === document.pictureInPictureElement) {
        document.exitPictureInPicture().catch(function (error) {
          _this8.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].ERROR, new _error_error__WEBPACK_IMPORTED_MODULE_13__["default"](_error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Severity.RECOVERABLE, _error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Category.PLAYER, _error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Code.EXIT_PICTURE_IN_PICTURE_FAILED, error)));
        });
      } else if (typeof this._el.webkitSetPresentationMode === 'function') {
        this._el.webkitSetPresentationMode('inline');
      }
    } catch (error) {
      this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].ERROR, new _error_error__WEBPACK_IMPORTED_MODULE_13__["default"](_error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Severity.RECOVERABLE, _error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Category.PLAYER, _error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Code.EXIT_PICTURE_IN_PICTURE_FAILED, error)));
    }
  }
  /**
   * Check if the engine is in picture in picture mode
   * @public
   * @return {boolean} if the engine is in picture in picture mode or not
   */
  ;

  _proto.isPictureInPictureSupported = function isPictureInPictureSupported() {
    // due to a bug in shaka pip_webkit which sets pictureInPictureEnabled to true in unsupported devices like iphones we will
    // first rely on the response of webkitSupportsPresentationMode (if exists) and only if not on the pictureInPictureEnabled property
    if (typeof this._el.webkitSupportsPresentationMode === 'function') {
      return this._el.webkitSupportsPresentationMode('picture-in-picture');
    } else {
      // $FlowFixMe
      return !!document.pictureInPictureEnabled;
    }
  }
  /**
   *  Returns in-stream thumbnail for a chosen time.
   * @param {number} time - playback time.
   * @public
   * @return {?ThumbnailInfo} - Thumbnail info
   */
  ;

  _proto.getThumbnail = function getThumbnail(time) {
    if (this._mediaSourceAdapter) {
      return this._mediaSourceAdapter.getThumbnail(time);
    }
  }
  /**
   * Set a source.
   * @param {string} source - Source to set.
   * @public
   * @returns {void}
   */
  ;

  /**
   * Initializes the engine.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @param {Object} config - The player configuration.
   * @private
   * @returns {void}
   */
  _proto._init = function _init(source, config) {
    this._config = config;
    this._reset = false;

    this._loadMediaSourceAdapter(source);

    this.attach();
  }
  /**
   * Creates a video element dom object.
   * @param {string} playerId - the id to be set as the key of the video element
   * @private
   * @returns {void}
   */
  ;

  _proto._createVideoElement = function _createVideoElement(playerId) {
    this._el = Html5.videoElementStore[playerId] || _utils_util__WEBPACK_IMPORTED_MODULE_11__["Dom"].createElement('video');
    this._el.id = _utils_util__WEBPACK_IMPORTED_MODULE_11__["Generator"].uniqueId(5);
    this._el.controls = false;
  }
  /**
   * Loads the appropriate media source extension adapter.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @private
   * @returns {void}
   */
  ;

  _proto._loadMediaSourceAdapter = function _loadMediaSourceAdapter(source) {
    this._mediaSourceAdapter = _media_source_media_source_provider__WEBPACK_IMPORTED_MODULE_4__["default"].getMediaSourceAdapter(this.getVideoElement(), source, this._config);

    if (this._mediaSourceAdapter) {
      this._droppedFramesWatcher = new _dropped_frames_watcher__WEBPACK_IMPORTED_MODULE_15__["DroppedFramesWatcher"](this._mediaSourceAdapter, this._config.abr, this._el);
    }
  }
  /**
   * Add cuechange listener to active textTrack.
   * @returns {void}
   * @private
   */
  ;

  _proto._addCueChangeListener = function _addCueChangeListener() {
    var _this9 = this;

    var textTrackEl = Array.from(this._el.textTracks).find(function (track) {
      return _track_text_track__WEBPACK_IMPORTED_MODULE_7__["default"].isNativeTextTrack(track) && track.mode !== _track_text_track__WEBPACK_IMPORTED_MODULE_7__["default"].MODE.DISABLED;
    });

    if (textTrackEl) {
      this._eventManager.listen(textTrackEl, 'cuechange', function (e) {
        return _this9._onCueChange(e);
      });
    }
  }
  /**
   * Remove cuechange listeners from textTracks
   * @returns {void}
   * @private
   */
  ;

  _proto._removeCueChangeListeners = function _removeCueChangeListeners() {
    var _this10 = this;

    Array.from(this._el.textTracks).filter(function (track) {
      return !_track_text_track__WEBPACK_IMPORTED_MODULE_7__["default"].isMetaDataTrack(track);
    }).forEach(function (track) {
      _this10._eventManager.unlisten(track, 'cuechange');
    });
  }
  /**
   * oncuechange event handler.
   * @param {FakeEvent} e - The event arg.
   * @returns {void}
   * @private
   */
  ;

  _proto._onCueChange = function _onCueChange(e) {
    var activeCues = e.currentTarget.activeCues;
    var normalizedActiveCues = Object(_track_text_track__WEBPACK_IMPORTED_MODULE_7__["getActiveCues"])(activeCues);
    this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].TEXT_CUE_CHANGED, {
      cues: normalizedActiveCues
    }));
  }
  /**
   * set hasBeenReset to true for all the cues. (use case: when cues should be recalculated for display)
   * @returns {void}
   */
  ;

  _proto.resetAllCues = function resetAllCues() {
    var activeTextTrack = Array.from(this._el.textTracks).find(function (track) {
      return _track_text_track__WEBPACK_IMPORTED_MODULE_7__["default"].isNativeTextTrack(track) && track.mode !== _track_text_track__WEBPACK_IMPORTED_MODULE_7__["default"].MODE.DISABLED;
    });

    if (activeTextTrack) {
      for (var i = 0; i < activeTextTrack.cues.length; i++) {
        activeTextTrack.cues[i].hasBeenReset = true;
      }
    }
  }
  /**
   * Handles errors from the video element
   * @returns {void}
   * @private
   */
  ;

  _proto._handleVideoError = function _handleVideoError() {
    if (!this._el.error) return;
    var code = this._el.error.code;

    if (code === window.MediaError.MEDIA_ERR_ABORTED) {
      // Ignore this error code.js, which should only occur when navigating away or
      // deliberately stopping playback of HTTP content.
      return;
    } // Extra error information from MS Edge and IE11:


    var extended = this._getMsExtendedError(); // Extra error information from Chrome:
    // $FlowFixMe


    var message = this._el.error.message;

    if (this._mediaSourceAdapter && !this._mediaSourceAdapter.handleMediaError(this._el.error)) {
      var error = new _error_error__WEBPACK_IMPORTED_MODULE_13__["default"](_error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Severity.CRITICAL, _error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Category.MEDIA, _error_error__WEBPACK_IMPORTED_MODULE_13__["default"].Code.VIDEO_ERROR, {
        code: code,
        extended: extended,
        message: message
      });
      this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].ERROR, error));
    }
  };

  _proto._handleWaiting = function _handleWaiting() {
    var _this11 = this;

    var playing = false;

    this._eventManager.listenOnce(this._el, _event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].PLAYING, function () {
      return playing = true;
    });

    setTimeout(function () {
      // prevent sending waiting event for too short buffering
      if (!playing) {
        _this11.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].WAITING));
      }
    }, SHORT_BUFFERING_TIMEOUT);
  }
  /**
   * more info about the error
   * @returns {string} info about the video element error
   * @private
   */
  ;

  _proto._getMsExtendedError = function _getMsExtendedError() {
    // $FlowFixMe
    var extended = this._el.error.msExtendedCode;

    if (extended) {
      // Convert to unsigned:
      if (extended < 0) {
        extended += Math.pow(2, 32);
      } // Format as hex:


      extended = extended.toString(16);
    }

    return extended;
  };

  _proto._handleMetadataTrackEvents = function _handleMetadataTrackEvents() {
    var _this12 = this;

    var listenToCueChange = function listenToCueChange(metadataTrack) {
      metadataTrack.mode = _track_text_track__WEBPACK_IMPORTED_MODULE_7__["default"].MODE.HIDDEN;

      _this12._eventManager.listen(metadataTrack, 'cuechange', function () {
        var activeCues = [];
        Array.from(_this12._el.textTracks).forEach(function (track) {
          if (_track_text_track__WEBPACK_IMPORTED_MODULE_7__["default"].isMetaDataTrack(track)) {
            activeCues = activeCues.concat(Object(_track_text_track__WEBPACK_IMPORTED_MODULE_7__["getActiveCues"])(track.activeCues));
          }
        });
        activeCues = activeCues.sort(function (a, b) {
          return a.startTime - b.startTime;
        });

        _this12.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].TIMED_METADATA, {
          cues: activeCues
        }));

        _this12.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_1__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].TIMED_METADATA_CHANGE, {
          cues: activeCues.map(function (cue) {
            return Object(_track_timed_metadata__WEBPACK_IMPORTED_MODULE_10__["createTimedMetadata"])(cue);
          })
        }));
      });
    };

    Array.from(this._el.textTracks).forEach(function (track) {
      if (_track_text_track__WEBPACK_IMPORTED_MODULE_7__["default"].isMetaDataTrack(track)) {
        listenToCueChange(track);
      }
    });

    this._eventManager.listen(this._el.textTracks, 'addtrack', function (event) {
      if (_track_text_track__WEBPACK_IMPORTED_MODULE_7__["default"].isMetaDataTrack(event.track)) {
        listenToCueChange(event.track);
      }
    });

    this._eventManager.listen(this._el.textTracks, 'change', function () {
      Array.from(_this12._el.textTracks).forEach(function (track) {
        if (_track_text_track__WEBPACK_IMPORTED_MODULE_7__["default"].isMetaDataTrack(track) && track.mode !== _track_text_track__WEBPACK_IMPORTED_MODULE_7__["default"].MODE.HIDDEN) {
          track.mode = _track_text_track__WEBPACK_IMPORTED_MODULE_7__["default"].MODE.HIDDEN;
        }
      });
    });
  };

  _proto.addTextTrack = function addTextTrack(kind, label, language) {
    return this._el.addTextTrack(kind, label, language);
  }
  /**
   * get the native text tracks
   * @function getNativeTextTracks
   * @returns {Array<TextTrack>} - The native TextTracks array.
   * @public
   */
  ;

  _proto.getNativeTextTracks = function getNativeTextTracks() {
    return Array.from(this._el.textTracks);
  };

  _proto.getDrmInfo = function getDrmInfo() {
    var _this$_mediaSourceAda;

    return (_this$_mediaSourceAda = this._mediaSourceAdapter) == null ? void 0 : _this$_mediaSourceAda.getDrmInfo();
  };

  _createClass(Html5, [{
    key: "id",
    get: function get() {
      return Html5.id;
    }
  }, {
    key: "src",
    set: function set(source) {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.src = source;
      }
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

      return '';
    }
    /**
     * Get the current time in seconds.
     * @returns {Number} - The current playback time.
     * @public
     */

  }, {
    key: "currentTime",
    get: function get() {
      return this._el ? this._el.currentTime : 0;
    }
    /**
     * Set the current time in seconds.
     * @param {Number} to - The number to set in seconds.
     * @public
     * @returns {void}
     */
    ,
    set: function set(to) {
      if (this._el) {
        this._el.currentTime = to;
      }
    }
    /**
     * Get the duration in seconds.
     * @returns {Number} - The playback duration.
     * @public
     */

  }, {
    key: "duration",
    get: function get() {
      return this._el.duration;
    }
  }, {
    key: "liveDuration",
    get: function get() {
      return this._mediaSourceAdapter ? this._mediaSourceAdapter.liveDuration : -1;
    }
    /**
     * Set playback volume.
     * @param {Number} vol - The volume to set.
     * @public
     * @returns {void}
     */

  }, {
    key: "volume",
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
    /**
     * Get paused state.
     * @returns {boolean} - The paused value of the video element.
     * @public
     */

  }, {
    key: "paused",
    get: function get() {
      return this._el.paused;
    }
    /**
     * Get seeking state.
     * @returns {boolean} - The seeking value of the video element.
     * @public
     */

  }, {
    key: "seeking",
    get: function get() {
      return this._el.seeking;
    }
    /**
     * Get the first seekable range (part) of the video in seconds.
     * @returns {TimeRanges} - First seekable range (part) of the video in seconds.
     * @public
     */

  }, {
    key: "seekable",
    get: function get() {
      return this._el.seekable;
    }
    /**
     * Get the first played range (part) of the video in seconds.
     * @returns {TimeRanges} - First played range (part) of the video in seconds.
     * @public
     */

  }, {
    key: "played",
    get: function get() {
      return this._el.played;
    }
    /**
     * Get the first buffered range (part) of the video in seconds.
     * @returns {TimeRanges} - First buffered range (part) of the video in seconds.
     * @public
     */

  }, {
    key: "buffered",
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
    key: "muted",
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
    key: "defaultMuted",
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
    key: "poster",
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
    key: "preload",
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
    key: "autoplay",
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
    key: "loop",
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
    key: "controls",
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
    key: "playbackRate",
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
    key: "defaultPlaybackRate",
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
    key: "ended",
    get: function get() {
      return this._el.ended;
    }
    /**
     * The error property returns a MediaError object.
     * @returns {MediaError} - The MediaError object has a code property containing the error state of the audio/video.
     * @public
     */

  }, {
    key: "error",
    get: function get() {
      return this._el.error;
    }
    /**
     * @returns {Number} - The current network state (activity) of the audio/video.
     * @public
     */

  }, {
    key: "networkState",
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
    key: "readyState",
    get: function get() {
      return this._el.readyState;
    }
    /**
     * @returns {Number} - The height of the video player, in pixels.
     * @public
     */

  }, {
    key: "videoHeight",
    get: function get() {
      return this._el.videoHeight;
    }
    /**
     * @returns {Number} - The width of the video player, in pixels.
     * @public
     */

  }, {
    key: "videoWidth",
    get: function get() {
      return this._el.videoWidth;
    }
    /**
     * @param {boolean} playsinline - Whether to set on the video tag the playsinline attribute.
     */

  }, {
    key: "playsinline",
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
    /**
     * Set crossOrigin attribute.
     * @param {?string} crossOrigin - 'anonymous' or 'use-credentials'
     */

  }, {
    key: "crossOrigin",
    set: function set(crossOrigin) {
      if (typeof crossOrigin === 'string') {
        this._el.setAttribute('crossorigin', crossOrigin);
      } else {
        this._el.removeAttribute('crossorigin');
      }
    }
    /**
     * Get crossOrigin attribute.
     * @returns {?string} - 'anonymous' or 'use-credentials'
     */
    ,
    get: function get() {
      return this._el.getAttribute('crossorigin');
    }
    /**
     * get the playback rates
     * @return {number[]} - playback rates
     */

  }, {
    key: "playbackRates",
    get: function get() {
      return Html5.PLAYBACK_RATES;
    }
    /**
     * get if the engine's video element is the one in the PIP
     * @return {boolean} boolean - is in PIP
     */

  }, {
    key: "isInPictureInPicture",
    get: function get() {
      // Check if the engine's video element is the one in the PIP
      return !!document.pictureInPictureElement && document.pictureInPictureElement != null && this._el === document.pictureInPictureElement || !!this._el.webkitPresentationMode && this._el.webkitPresentationMode === 'picture-in-picture';
    }
  }, {
    key: "targetBuffer",
    get: function get() {
      if (this._mediaSourceAdapter) {
        return this._mediaSourceAdapter.targetBuffer;
      }

      return NaN;
    }
  }, {
    key: "availableBuffer",
    get: function get() {
      var retVal = 0;

      if (this.buffered) {
        for (var i = 0; i < this.buffered.length; i++) {
          // find the relevant buffer time range containing the current time
          if (this.buffered.start(i) <= this._el.currentTime && this._el.currentTime <= this.buffered.end(i)) {
            retVal = this.buffered.end(i) - this._el.currentTime;
          }
        }
      }

      return retVal;
    }
  }]);

  return Html5;
}(_event_fake_event_target__WEBPACK_IMPORTED_MODULE_0__["default"]);

_defineProperty(Html5, "_logger", Object(_utils_logger__WEBPACK_IMPORTED_MODULE_14__["default"])('Html5'));

_defineProperty(Html5, "_capabilities", [_capabilities_html5_autoplay__WEBPACK_IMPORTED_MODULE_12__["default"]]);

_defineProperty(Html5, "id", 'html5');

_defineProperty(Html5, "videoElementStore", {});

_defineProperty(Html5, "PLAYBACK_RATES", [0.5, 1, 1.5, 2]);



/***/ }),

/***/ "./engines/html5/media-source/adapters/fairplay-drm-handler.js":
/*!*********************************************************************!*\
  !*** ./engines/html5/media-source/adapters/fairplay-drm-handler.js ***!
  \*********************************************************************/
/*! exports provided: FairPlayDrmHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FairPlayDrmHandler", function() { return FairPlayDrmHandler; });
/* harmony import */ var _error_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../error/error */ "./error/error.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/logger */ "./utils/logger.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/util */ "./utils/util.js");
/* harmony import */ var _enums_request_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../enums/request-type */ "./enums/request-type.js");
/* harmony import */ var _drm_drm_scheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../drm/drm-scheme */ "./drm/drm-scheme.js");
/* harmony import */ var _event_event_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../event/event-manager */ "./event/event-manager.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var KeySystem = 'com.apple.fps.1_0';
var WebkitEvents = {
  NEED_KEY: 'webkitneedkey',
  KEY_MESSAGE: 'webkitkeymessage',
  KEY_ADDED: 'webkitkeyadded',
  KEY_ERROR: 'webkitkeyerror'
};

var FairPlayDrmHandler = /*#__PURE__*/function () {
  /**
   * Fairplay DRM handler
   * @param {HTMLVideoElement} videoElement - the video element
   * @param {FairPlayDrmConfigType} config - config object
   * @param {Function} errorCallback - error callback function
   * @param {Function} drmResponseCallback - drm license response callback function
   */
  function FairPlayDrmHandler(videoElement, config, errorCallback, drmResponseCallback) {
    var _this = this;

    _defineProperty(this, "_logger", Object(_utils_logger__WEBPACK_IMPORTED_MODULE_1__["default"])('FairPlayDrmHandler'));

    _defineProperty(this, "_retryLicenseRequest", 4);

    _defineProperty(this, "_defaultConfig", {
      licenseUrl: '',
      certificate: '',
      network: {
        responseFilter: function responseFilter(type, response) {
          var responseObj = {};

          try {
            var dataView = new DataView(response.data);
            var decoder = new TextDecoder();
            var keyText = decoder.decode(dataView).trim();
            responseObj = JSON.parse(keyText);
          } catch (error) {
            _this._onError(_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.BAD_FAIRPLAY_RESPONSE, {
              error: error,
              responseText: response.data
            });

            return;
          }

          var isValidResponse = FairPlayDrmHandler._validateResponse(responseObj);

          if (isValidResponse.valid) {
            response.data = FairPlayDrmHandler._base64DecodeUint8Array(responseObj.ckc);
          } else {
            _this._onError(_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.BAD_FAIRPLAY_RESPONSE, isValidResponse);
          }
        }
      }
    });

    this._config = _utils_util__WEBPACK_IMPORTED_MODULE_2__["Object"].mergeDeep({}, this._defaultConfig, config);
    this._errorCallback = errorCallback;
    this._drmResponseCallback = drmResponseCallback;
    this._videoElement = videoElement;

    this._onWebkitNeedKeyHandler = function (e) {
      return _this._onWebkitNeedKey(e);
    };

    this._eventManager = new _event_event_manager__WEBPACK_IMPORTED_MODULE_5__["default"]();

    this._eventManager.listen(this._videoElement, WebkitEvents.NEED_KEY, this._onWebkitNeedKeyHandler);
  }

  var _proto = FairPlayDrmHandler.prototype;

  _proto._onWebkitNeedKey = function _onWebkitNeedKey(event) {
    var _this2 = this;

    this._logger.debug('Webkit need key triggered');

    var videoElement = event.target;
    var initData = event.initData;

    var contentId = FairPlayDrmHandler._extractContentId(initData);

    var fpsCertificate = FairPlayDrmHandler._base64DecodeUint8Array(this._config.certificate);

    initData = FairPlayDrmHandler._concatInitDataIdAndCertificate(initData, contentId, fpsCertificate);

    if (!videoElement.webkitKeys) {
      var keySystem = this._selectKeySystem();

      this._logger.debug('Sets media keys');

      videoElement.webkitSetMediaKeys(new window.WebKitMediaKeys(keySystem));
    }

    if (!videoElement.webkitKeys) {
      this._onError(_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.COULD_NOT_CREATE_MEDIA_KEYS);
    }

    this._logger.debug('Creates session');

    this._keySession = videoElement.webkitKeys.createSession('video/mp4', initData);

    if (!this._keySession) {
      this._onError(_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.COULD_NOT_CREATE_KEY_SESSION);
    }

    this._keySession.contentId = contentId;

    this._eventManager.listen(this._keySession, WebkitEvents.KEY_MESSAGE, function (e) {
      return _this2._onWebkitKeyMessage(e);
    });

    this._eventManager.listen(this._keySession, WebkitEvents.KEY_ADDED, function () {
      return _this2._onWebkitKeyAdded();
    });

    this._eventManager.listen(this._keySession, WebkitEvents.KEY_ERROR, function (e) {
      return _this2._onWebkitKeyError(e);
    });
  };

  _proto.getDrmInfo = function getDrmInfo() {
    var _this$_config = this._config,
        certificate = _this$_config.certificate,
        licenseUrl = _this$_config.licenseUrl;
    return {
      certificate: certificate,
      licenseUrl: licenseUrl,
      scheme: _drm_drm_scheme__WEBPACK_IMPORTED_MODULE_4__["DrmScheme"].FAIRPLAY
    };
  };

  _proto.destroy = function destroy() {
    this._eventManager.destroy();

    this._keySession.close();

    this._keySession = null;
  };

  _proto._onWebkitKeyMessage = function _onWebkitKeyMessage(event) {
    var _this3 = this;

    this._logger.debug('Webkit key message triggered');

    var message = event.message;
    var request = new XMLHttpRequest();
    request.responseType = 'arraybuffer';

    this._eventManager.listenOnce(request, 'load', function (e) {
      return _this3._licenseRequestLoaded(e);
    });

    var pkRequest = {
      url: this._config.licenseUrl,
      body: FairPlayDrmHandler._base64EncodeUint8Array(message),
      headers: {}
    };
    var requestFilterPromise;
    var requestFilter = this._config.network.requestFilter;

    if (requestFilter) {
      this._logger.debug('Apply request filter');

      try {
        requestFilterPromise = requestFilter(_enums_request_type__WEBPACK_IMPORTED_MODULE_3__["RequestType"].LICENSE, pkRequest);
      } catch (error) {
        requestFilterPromise = Promise.reject(error);
      }
    }

    requestFilterPromise = requestFilterPromise || Promise.resolve(pkRequest);
    requestFilterPromise.then(function (updatedRequest) {
      request.open('POST', updatedRequest.url, true);
      var setContentType = true;

      if (updatedRequest.headers) {
        Object.entries(updatedRequest.headers).forEach(function (_ref) {
          var header = _ref[0],
              value = _ref[1];
          typeof value === 'string' && request.setRequestHeader(header, value);
          setContentType && (setContentType = header.toLowerCase() !== 'content-type');
        });
      }

      if (typeof updatedRequest.withCredentials === 'boolean') {
        request.withCredentials = updatedRequest.withCredentials;
      }

      setContentType && request.setRequestHeader('Content-type', 'application/json');

      _this3._logger.debug('Ready for license request');

      request.onerror = function () {
        _this3._onError(_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.LICENSE_REQUEST_FAILED, {
          status: request.status,
          responseText: request.responseText
        });
      };

      _this3._licenseRequestTime = Date.now();
      request.send(updatedRequest.body);
    }).catch(function (error) {
      _this3._errorCallback(new _error_error__WEBPACK_IMPORTED_MODULE_0__["default"](_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Severity.CRITICAL, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Category.NETWORK, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.REQUEST_FILTER_ERROR, error));

      _this3.destroy();
    });
  };

  _proto._onWebkitKeyAdded = function _onWebkitKeyAdded() {
    this._logger.debug('Decryption key was added to session');
  };

  _proto._onWebkitKeyError = function _onWebkitKeyError(e) {
    this._logger.error('A decryption key error was encountered', e);

    if (this._retryLicenseRequest <= 0) {
      this._onError(_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.LICENSE_REQUEST_FAILED, e.target.error);
    }

    this._retryLicenseRequest--;
  };

  _proto._licenseRequestLoaded = function _licenseRequestLoaded(event) {
    var _this4 = this;

    this._logger.debug('License request loaded');

    var request = event.target;

    if (request.status > 299) {
      this._onError(_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.LICENSE_REQUEST_FAILED, {
        status: request.status,
        error: request.responseText
      });

      return;
    }

    if (this._drmResponseCallback) {
      var licenseTime = Date.now() - this._licenseRequestTime;

      this._drmResponseCallback({
        licenseTime: licenseTime / 1000,
        scheme: _drm_drm_scheme__WEBPACK_IMPORTED_MODULE_4__["DrmScheme"].FAIRPLAY
      });
    }

    var url = request.responseURL,
        data = request.response;
    var originalUrl = this._config.licenseUrl;
    var headers = _utils_util__WEBPACK_IMPORTED_MODULE_2__["Http"].convertHeadersToDictionary(request.getAllResponseHeaders());
    var pkResponse = {
      url: url,
      originalUrl: originalUrl,
      data: data,
      headers: headers
    };

    this._logger.debug('Apply response filter');

    var responseFilterPromise;

    try {
      responseFilterPromise = this._config.network.responseFilter(_enums_request_type__WEBPACK_IMPORTED_MODULE_3__["RequestType"].LICENSE, pkResponse);
    } catch (error) {
      responseFilterPromise = Promise.reject(error);
    }

    responseFilterPromise = responseFilterPromise || Promise.resolve(pkResponse);
    responseFilterPromise.then(function (updatedResponse) {
      _this4._keySession.update(updatedResponse.data);
    }).catch(function (error) {
      _this4._errorCallback(new _error_error__WEBPACK_IMPORTED_MODULE_0__["default"](_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Severity.CRITICAL, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Category.NETWORK, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.RESPONSE_FILTER_ERROR, error));

      _this4.destroy();
    });
  };

  _proto._onError = function _onError(code, data) {
    this._errorCallback(new _error_error__WEBPACK_IMPORTED_MODULE_0__["default"](_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Severity.CRITICAL, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Category.DRM, code, data));
  };

  FairPlayDrmHandler._validateResponse = function _validateResponse(responseObj) {
    if (responseObj.message && responseObj.message.indexOf('error') > 0 || responseObj.reference === null || responseObj.status_code === 500) {
      return {
        //todo: create & edit an error object
        valid: false,
        details: 'internal server error' // would be ERROR.INTERNAL or something like that

      };
    } else if (responseObj.ckc === '') {
      return {
        valid: false,
        details: 'ckc is missing' // would be ERROR.MISSING_CKC or something like that

      };
    } else {
      return {
        valid: true
      };
    }
  };

  _proto._selectKeySystem = function _selectKeySystem() {
    var keySystem = null;

    if (window.WebKitMediaKeys.isTypeSupported(KeySystem, 'video/mp4')) {
      keySystem = KeySystem;
    } else {
      this._logger.warn('Key System not supported');
    }

    return keySystem;
  };

  FairPlayDrmHandler._extractContentId = function _extractContentId(initData) {
    var link = document.createElement('a');
    link.href = FairPlayDrmHandler._arrayToString(initData);
    return link.hostname;
  };

  FairPlayDrmHandler._arrayToString = function _arrayToString(array) {
    return String.fromCharCode.apply(null, new Uint16Array(array.buffer));
  };

  FairPlayDrmHandler._base64DecodeUint8Array = function _base64DecodeUint8Array(input) {
    var raw = window.atob(input);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (var i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }

    return array;
  };

  FairPlayDrmHandler._concatInitDataIdAndCertificate = function _concatInitDataIdAndCertificate(initData, id, cert) {
    if (typeof id === 'string') {
      id = FairPlayDrmHandler._stringToArray(id);
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
  };

  FairPlayDrmHandler._stringToArray = function _stringToArray(string) {
    var buffer = new ArrayBuffer(string.length * 2);
    var array = new Uint16Array(buffer);

    for (var i = 0, strLen = string.length; i < strLen; i++) {
      array[i] = string.charCodeAt(i);
    }

    return array;
  };

  FairPlayDrmHandler._base64EncodeUint8Array = function _base64EncodeUint8Array(input) {
    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var output = '';
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
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
  };

  return FairPlayDrmHandler;
}();

_defineProperty(FairPlayDrmHandler, "WebkitEvents", WebkitEvents);

FairPlayDrmHandler.WebkitEvents = WebkitEvents;


/***/ }),

/***/ "./engines/html5/media-source/adapters/native-adapter-default-config.json":
/*!********************************************************************************!*\
  !*** ./engines/html5/media-source/adapters/native-adapter-default-config.json ***!
  \********************************************************************************/
/*! exports provided: heartbeatTimeout, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"heartbeatTimeout\":30000}");

/***/ }),

/***/ "./engines/html5/media-source/adapters/native-adapter.js":
/*!***************************************************************!*\
  !*** ./engines/html5/media-source/adapters/native-adapter.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NativeAdapter; });
/* harmony import */ var _event_event_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../event/event-type */ "./event/event-type.js");
/* harmony import */ var _track_track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../track/track */ "./track/track.js");
/* harmony import */ var _track_video_track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../track/video-track */ "./track/video-track.js");
/* harmony import */ var _track_audio_track__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../track/audio-track */ "./track/audio-track.js");
/* harmony import */ var _track_text_track__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../track/text-track */ "./track/text-track.js");
/* harmony import */ var _enums_request_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../enums/request-type */ "./enums/request-type.js");
/* harmony import */ var _base_media_source_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base-media-source-adapter */ "./engines/html5/media-source/base-media-source-adapter.js");
/* harmony import */ var _utils_resolution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/resolution */ "./utils/resolution.js");
/* harmony import */ var _utils_restrictions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/restrictions */ "./utils/restrictions.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utils/util */ "./utils/util.js");
/* harmony import */ var _drm_fairplay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../drm/fairplay */ "./drm/fairplay.js");
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utils/env */ "./utils/env.js");
/* harmony import */ var _error_error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../error/error */ "./error/error.js");
/* harmony import */ var _native_adapter_default_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./native-adapter-default-config */ "./engines/html5/media-source/adapters/native-adapter-default-config.json");
var _native_adapter_default_config__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./native-adapter-default-config */ "./engines/html5/media-source/adapters/native-adapter-default-config.json", 1);
/* harmony import */ var _fairplay_drm_handler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fairplay-drm-handler */ "./engines/html5/media-source/adapters/fairplay-drm-handler.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var BACK_TO_FOCUS_TIMEOUT = 1000;
var MAX_MEDIA_RECOVERY_ATTEMPTS = 3;
var NUDGE_SEEK_AFTER_FOCUS = 0.1;
var SAFARI_BUFFERED_SEGMENTS_COUNT = 3;
var LIVE_DURATION_INTERVAL_MS = 1000;
/**
 * An illustration of media source extension for progressive download
 * @classdesc
 * @implements {IMediaSourceAdapter}
 */

var NativeAdapter = /*#__PURE__*/function (_BaseMediaSourceAdapt) {
  _inheritsLoose(NativeAdapter, _BaseMediaSourceAdapt);

  /**
   * The id of the Adapter
   * @member {string} id
   * @static
   * @public
   */

  /**
   * The adapter logger
   * @member {any} _logger
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
   * The DRM protocols implementations for native adapter.
   * @type {Array<Function>}
   * @private
   * @static
   */

  /**
   * The DRM protocol for the current playback.
   * @type {?Function}
   * @private
   * @static
   */

  /**
   * The supported progressive mime types by the native adapter.
   * @member {Array<string>} _progressiveMimeTypes
   * @static
   * @private
   */

  /**
   * A counter to track the number of attempts to recover from media error
   * @type {number}
   * @private
   */

  /**
   * The last time detach occurred
   * @type {number}
   * @private
   */

  /**
   * The start time after attach
   * @type {number}
   * @private
   */

  /**
   * Map from our text track to native text track
   * @type {number}
   * @private
   */

  /**
   *
   * @type {number}
   * @private
   */

  /**
   * Checks if NativeAdapter can play a given mime type.
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @returns {boolean} - Whether the native adapter can play a specific mime type
   * @static
   */
  NativeAdapter.canPlayType = function canPlayType(mimeType) {
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
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @returns {boolean} - Whether the native adapter can play a specific drm data.
   * @static
   */
  ;

  NativeAdapter.canPlayDrm = function canPlayDrm(drmData, drmConfig) {
    NativeAdapter._drmProtocol = null;

    for (var _iterator = _createForOfIteratorHelperLoose(NativeAdapter._drmProtocols), _step; !(_step = _iterator()).done;) {
      var _drmProtocol = _step.value;

      if (_drmProtocol.isConfigured(drmData, drmConfig)) {
        NativeAdapter._drmProtocol = _drmProtocol;
        break;
      }
    }

    if (!NativeAdapter._drmProtocol) {
      for (var _iterator2 = _createForOfIteratorHelperLoose(NativeAdapter._drmProtocols), _step2; !(_step2 = _iterator2()).done;) {
        var drmProtocol = _step2.value;

        if (drmProtocol.canPlayDrm(drmData)) {
          NativeAdapter._drmProtocol = drmProtocol;
        }
      }
    }

    return !!NativeAdapter._drmProtocol;
  }
  /**
   * Factory method to create media source adapter.
   * @function createAdapter
   * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with.
   * @param {PKMediaSourceObject} source - The source Object.
   * @param {Object} config - The player configuration.
   * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter.
   * @static
   */
  ;

  NativeAdapter.createAdapter = function createAdapter(videoElement, source, config) {
    var adapterConfig = {
      displayTextTrack: false,
      progressiveSources: []
    };

    if (_utils_util__WEBPACK_IMPORTED_MODULE_9__["Object"].hasPropertyPath(config, 'text.useNativeTextTrack')) {
      adapterConfig.displayTextTrack = _utils_util__WEBPACK_IMPORTED_MODULE_9__["Object"].getPropertyPath(config, 'text.useNativeTextTrack');
    }

    if (_utils_util__WEBPACK_IMPORTED_MODULE_9__["Object"].hasPropertyPath(config, 'sources.progressive')) {
      adapterConfig.progressiveSources = _utils_util__WEBPACK_IMPORTED_MODULE_9__["Object"].getPropertyPath(config, 'sources.progressive');
    }

    if (_utils_util__WEBPACK_IMPORTED_MODULE_9__["Object"].hasPropertyPath(config, 'text')) {
      adapterConfig.enableCEA708Captions = config.text.enableCEA708Captions;
      adapterConfig.captionsTextTrack1Label = config.text.captionsTextTrack1Label;
      adapterConfig.captionsTextTrack1LanguageCode = config.text.captionsTextTrack1LanguageCode;
      adapterConfig.captionsTextTrack2Label = config.text.captionsTextTrack2Label;
      adapterConfig.captionsTextTrack2LanguageCode = config.text.captionsTextTrack2LanguageCode;
    }

    if (_utils_util__WEBPACK_IMPORTED_MODULE_9__["Object"].hasPropertyPath(config, 'playback')) {
      if (_utils_util__WEBPACK_IMPORTED_MODULE_9__["Object"].hasPropertyPath(config.playback, 'options.html5.native')) {
        _utils_util__WEBPACK_IMPORTED_MODULE_9__["Object"].mergeDeep(adapterConfig, config.playback.options.html5.native);
      }
    }

    if (_utils_util__WEBPACK_IMPORTED_MODULE_9__["Object"].hasPropertyPath(config, 'abr')) {
      var abr = config.abr;

      if (abr.restrictions) {
        _utils_util__WEBPACK_IMPORTED_MODULE_9__["Object"].createPropertyPath(adapterConfig, 'abr.restrictions', abr.restrictions);
      }
    }

    adapterConfig.network = config.network;
    return new this(videoElement, source, adapterConfig);
  }
  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to NativeAdapter
   * @param {PKMediaSourceObject} source - The source object
   * @param {Object} config - The player configuration
   */
  ;

  function NativeAdapter(videoElement, source, config) {
    var _this;

    NativeAdapter._logger.debug('Creating adapter');

    _this = _BaseMediaSourceAdapt.call(this, videoElement, source, config) || this;

    _defineProperty(_assertThisInitialized(_this), "_lastTimeUpdate", 0);

    _defineProperty(_assertThisInitialized(_this), "_waitingEventTriggered", false);

    _defineProperty(_assertThisInitialized(_this), "_segmentDuration", 0);

    _defineProperty(_assertThisInitialized(_this), "_mediaErrorRecoveryAttempts", 0);

    _defineProperty(_assertThisInitialized(_this), "_lastTimeDetach", NaN);

    _defineProperty(_assertThisInitialized(_this), "_startTimeAttach", NaN);

    _defineProperty(_assertThisInitialized(_this), "_nativeTextTracksMap", {});

    _defineProperty(_assertThisInitialized(_this), "_captionsHidden", false);

    _this._config = _utils_util__WEBPACK_IMPORTED_MODULE_9__["Object"].mergeDeep({}, _native_adapter_default_config__WEBPACK_IMPORTED_MODULE_13__, _this._config);
    _this._progressiveSources = config.progressiveSources;
    _this._liveEdge = 0;
    return _this;
  }
  /**
   * dispatches an error (is given to a class the cannot dispatch, like static fair play class)
   * @private
   * @param {Error} error - the error to dispatch
   * @returns {void}
   */


  var _proto = NativeAdapter.prototype;

  _proto._dispatchErrorCallback = function _dispatchErrorCallback(error) {
    this._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].ERROR, error);
  }
  /**
   * dispatches the license response time after received
   * @private
   * @param {number} data - an object containing data regarding the license load
   * @returns {void}
   */
  ;

  _proto._dispatchDRMLicenseLoaded = function _dispatchDRMLicenseLoaded(data) {
    this._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_0__["CustomEventType"].DRM_LICENSE_LOADED, data);
  }
  /**
   * Sets the DRM playback in case such needed.
   * @private
   * @returns {void}
   */
  ;

  _proto._maybeSetDrmPlayback = function _maybeSetDrmPlayback() {
    var _this2 = this;

    if (NativeAdapter._drmProtocol && this._sourceObj && this._sourceObj.drmData) {
      var drmConfig = {
        licenseUrl: '',
        certificate: '',
        network: this._config.network
      };

      NativeAdapter._drmProtocol.setDrmPlayback(drmConfig, this._sourceObj.drmData);

      this._drmHandler = new _fairplay_drm_handler__WEBPACK_IMPORTED_MODULE_14__["FairPlayDrmHandler"](this._videoElement, drmConfig, function (error) {
        return _this2._dispatchErrorCallback(error);
      }, function (data) {
        return _this2._dispatchDRMLicenseLoaded(data);
      });
    }
  }
  /**
   * Set the suitable progressive source according the current resolution
   * @function _setProgressiveSource
   * @returns {void}
   * @private
   */
  ;

  _proto._setProgressiveSource = function _setProgressiveSource() {
    var suitableTrack = Object(_utils_resolution__WEBPACK_IMPORTED_MODULE_7__["getSuitableSourceForResolution"])(this._progressiveSources, this._videoElement.offsetWidth, this._videoElement.offsetHeight);

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
  ;

  _proto._isProgressivePlayback = function _isProgressivePlayback() {
    return this._sourceObj ? NativeAdapter._progressiveMimeTypes.includes(this._sourceObj.mimetype.toLowerCase()) : false;
  }
  /**
   * Load the video source
   * @param {number} startTime - Optional time to start the video from.
   * @function load
   * @returns {Promise<Object>} - The loaded data
   */
  ;

  _proto.load = function load(startTime) {
    var _this3 = this;

    this._wasCurrentTimeSetSuccessfully = false;

    this._maybeSetDrmPlayback();

    if (!this._loadPromise) {
      this._loadPromise = new Promise(function (resolve, reject) {
        _this3._lastTimeUpdate = startTime || 0;
        var playbackStartTime = _this3._startTimeAttach || startTime || 0;
        _this3._loadPromiseReject = reject;

        _this3._eventManager.listenOnce(_this3._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].LOADED_DATA, function () {
          return _this3._onLoadedData(resolve, playbackStartTime);
        });

        _this3._eventManager.listenOnce(_this3._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].PLAYING, function () {
          return _this3._onPlaying(playbackStartTime);
        });

        _this3._eventManager.listen(_this3._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].TIME_UPDATE, function () {
          return _this3._onTimeUpdate();
        });

        _this3._eventManager.listen(_this3._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].PLAY, function () {
          return _this3._resetHeartbeatTimeout();
        });

        _this3._eventManager.listen(_this3._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].PAUSE, function () {
          return _this3._clearHeartbeatTimeout();
        });

        _this3._eventManager.listen(_this3._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].ENDED, function () {
          return _this3._clearHeartbeatTimeout();
        });

        _this3._eventManager.listen(_this3._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].ABORT, function () {
          return _this3._clearHeartbeatTimeout();
        });

        _this3._eventManager.listen(_this3._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].SEEKED, function () {
          return _this3._syncCurrentTime();
        });

        _this3._eventManager.listen(_this3._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].WAITING, function () {
          return _this3._waitingEventTriggered = true;
        });

        _this3._eventManager.listen(_this3._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].PLAYING, function () {
          return _this3._waitingEventTriggered = false;
        }); // Sometimes when playing live in safari and switching between tabs the currentTime goes back with no seek events


        _this3._eventManager.listen(window, 'focus', function () {
          setTimeout(function () {
            if (_utils_env__WEBPACK_IMPORTED_MODULE_11__["default"].isIOS) {
              // In IOS HLS, sometimes when coming back from lock screen/Idle mode, the stream will get stuck, and only a small seek nudge will fix it.
              _this3._videoElement.currentTime = _this3._videoElement.currentTime > NUDGE_SEEK_AFTER_FOCUS ? _this3._videoElement.currentTime - NUDGE_SEEK_AFTER_FOCUS : 0;
            }

            _this3._syncCurrentTime();
          }, BACK_TO_FOCUS_TIMEOUT);
        });

        if (_this3._isProgressivePlayback()) {
          _this3._setProgressiveSource();
        }

        if (_this3._sourceObj && _this3._sourceObj.url) {
          _this3._setSrc().then(function () {
            _this3._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_0__["CustomEventType"].ABR_MODE_CHANGED, {
              mode: _this3._isProgressivePlayback() ? 'manual' : 'auto'
            });

            _this3._videoElement.load();
          });
        } else {
          _this3._videoElement.load();
        }
      });
    }

    return this._loadPromise;
  }
  /**
   * handle decode error - reload the video and seek to last currentTime
   * @param {?MediaError}error - the error object to be printed to log
   * @private
   * @returns {void}
   */
  ;

  _proto._handleDecodeError = function _handleDecodeError(error) {
    var _this4 = this;

    NativeAdapter._logger.debug('handleDecodeError', error);

    var prevCurrTime = this._videoElement.currentTime;

    var prevActiveAudioTrack = this._getActivePKAudioTrack();

    var prevActiveTextTrack = this._getActivePKTextTrack();

    this._videoElement.load();

    this._eventManager.listenOnce(this._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].PLAYING, function () {
      _this4._mediaErrorRecoveryAttempts = 0;
    });

    this._eventManager.listenOnce(this._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].CAN_PLAY, function () {
      _this4._videoElement.currentTime = prevCurrTime;

      _this4._videoElement.play();

      _this4._videoElement.pause();

      if (prevActiveAudioTrack) {
        _this4.selectAudioTrack(prevActiveAudioTrack);
      }

      if (prevActiveTextTrack) {
        _this4.selectTextTrack(prevActiveTextTrack);
      } else {
        _this4.disableNativeTextTracks();
      }
    });
  };

  _proto.handleMediaError = function handleMediaError(error) {
    if (this._loadPromiseReject) {
      this._loadPromiseReject(new _error_error__WEBPACK_IMPORTED_MODULE_12__["default"](_error_error__WEBPACK_IMPORTED_MODULE_12__["default"].Severity.CRITICAL, _error_error__WEBPACK_IMPORTED_MODULE_12__["default"].Category.MEDIA, _error_error__WEBPACK_IMPORTED_MODULE_12__["default"].Code.NATIVE_ADAPTER_LOAD_FAILED, error));

      return true;
    } else if (error && error.code === window.MediaError.MEDIA_ERR_DECODE) {
      this._mediaErrorRecoveryAttempts++;

      if (this._mediaErrorRecoveryAttempts <= MAX_MEDIA_RECOVERY_ATTEMPTS) {
        this._handleDecodeError(error);

        return true;
      }
    }

    return false;
  }
  /**
   * attach media - return the media source to handle the video tag
   * @public
   * @returns {void}
   */
  ;

  _proto.attachMediaSource = function attachMediaSource() {
    this._startTimeAttach = this._lastTimeDetach;
    this._lastTimeDetach = NaN;
  }
  /**
   * detach media - will remove the media source from handling the video
   * @public
   * @returns {void}
   */
  ;

  _proto.detachMediaSource = function detachMediaSource() {
    this._lastTimeDetach = this._videoElement.currentTime;

    if (this._videoElement && this._videoElement.src) {
      _utils_util__WEBPACK_IMPORTED_MODULE_9__["Dom"].setAttribute(this._videoElement, 'src', '');
      _utils_util__WEBPACK_IMPORTED_MODULE_9__["Dom"].removeAttribute(this._videoElement, 'src');
    }

    this._loadPromise = null;
  };

  _proto._setSrc = function _setSrc() {
    var _this5 = this;

    var pkRequest = {
      url: this._sourceObj ? this._sourceObj.url : '',
      body: null,
      headers: {}
    };
    var requestFilterPromise;

    if (typeof _utils_util__WEBPACK_IMPORTED_MODULE_9__["Object"].getPropertyPath(this._config, 'network.requestFilter') === 'function') {
      try {
        NativeAdapter._logger.debug('Apply request filter');

        requestFilterPromise = this._config.network.requestFilter(_enums_request_type__WEBPACK_IMPORTED_MODULE_5__["RequestType"].MANIFEST, pkRequest);
      } catch (error) {
        requestFilterPromise = Promise.reject(error);
      }
    }

    requestFilterPromise = requestFilterPromise || Promise.resolve(pkRequest);
    requestFilterPromise.then(function (updatedRequest) {
      _this5._videoElement.src = updatedRequest.url;
    }).catch(function (error) {
      _this5._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].ERROR, new _error_error__WEBPACK_IMPORTED_MODULE_12__["default"](_error_error__WEBPACK_IMPORTED_MODULE_12__["default"].Severity.CRITICAL, _error_error__WEBPACK_IMPORTED_MODULE_12__["default"].Category.NETWORK, _error_error__WEBPACK_IMPORTED_MODULE_12__["default"].Code.REQUEST_FILTER_ERROR, error));
    });
    return requestFilterPromise;
  }
  /**
   * play event handler.
   * @param {number} startTime - Optional time to start the video from.
   * @private
   * @returns {void}
   */
  ;

  _proto._onPlaying = function _onPlaying(startTime) {
    if (this.isLive()) {
      this._setStartTime(startTime);
    }
  }
  /**
   * Loaded data event handler.
   * @param {Function} resolve - The resolve promise function.
   * @param {number} startTime - Optional time to start the video from.
   * @private
   * @returns {void}
   */
  ;

  _proto._onLoadedData = function _onLoadedData(resolve, startTime) {
    var _this6 = this;

    var parseTracksAndResolve = function parseTracksAndResolve() {
      _this6._playerTracks = _this6._getParsedTracks();

      _this6._addNativeAudioTrackChangeListener();

      _this6._addNativeTextTrackChangeListener();

      _this6._addNativeTextTrackAddedListener();

      NativeAdapter._logger.debug('The source has been loaded successfully');

      _this6._loadPromiseReject = null;
      resolve({
        tracks: _this6._playerTracks
      });

      if (_this6.isLive()) {
        _this6._handleLiveDurationChange();
      }
    };

    if (!this.isLive()) {
      this._setStartTime(startTime);
    }

    if (this._videoElement.textTracks.length > 0) {
      parseTracksAndResolve();
    } else {
      this._eventManager.listenOnce(this._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].CAN_PLAY, parseTracksAndResolve.bind(this));
    }

    this._startTimeAttach = NaN;
  };

  _proto._setStartTime = function _setStartTime(startTime) {
    if (startTime && startTime > -1) {
      this._videoElement.currentTime = startTime;
    }

    this._wasCurrentTimeSetSuccessfully = true;
  };

  _proto._onTimeUpdate = function _onTimeUpdate() {
    if (!this._videoElement.paused) {
      if (this._videoElement.currentTime > this._lastTimeUpdate) {
        if (this._waitingEventTriggered) {
          this._waitingEventTriggered = false;

          this._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].PLAYING);
        }

        this._resetHeartbeatTimeout();
      } else if (this._videoElement.currentTime < this._lastTimeUpdate) {
        this._syncCurrentTime();
      } else {
        this._waitingEventTriggered = true;

        this._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].WAITING);
      }
    }

    this._handleVideoTracksChange();
  };

  _proto._syncCurrentTime = function _syncCurrentTime() {
    this._lastTimeUpdate = this._videoElement.currentTime;
  };

  _proto._resetHeartbeatTimeout = function _resetHeartbeatTimeout() {
    var _this7 = this;

    this._lastTimeUpdate = this._videoElement.currentTime;

    this._clearHeartbeatTimeout();

    var onTimeout = function onTimeout() {
      _this7._clearHeartbeatTimeout();

      _this7._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].ERROR, new _error_error__WEBPACK_IMPORTED_MODULE_12__["default"](_error_error__WEBPACK_IMPORTED_MODULE_12__["default"].Severity.CRITICAL, _error_error__WEBPACK_IMPORTED_MODULE_12__["default"].Category.NETWORK, _error_error__WEBPACK_IMPORTED_MODULE_12__["default"].Code.TIMEOUT, "The player exceeded max buffer time of " + _this7._config.heartbeatTimeout + " ms. No progress has been done during this time."));
    };

    this._heartbeatTimeoutId = setTimeout(onTimeout, this._config.heartbeatTimeout);
  };

  _proto._clearHeartbeatTimeout = function _clearHeartbeatTimeout() {
    if (this._heartbeatTimeoutId) {
      clearTimeout(this._heartbeatTimeoutId);
      this._heartbeatTimeoutId = null;
    }
  };

  _proto._handleVideoTracksChange = function _handleVideoTracksChange() {
    if (!this._isProgressivePlayback()) {
      var _this$_videoElement = this._videoElement,
          videoHeight = _this$_videoElement.videoHeight,
          videoWidth = _this$_videoElement.videoWidth,
          videoTracks = _this$_videoElement.videoTracks;

      if (!this._videoDimensions || videoHeight !== this._videoDimensions.videoHeight || videoWidth !== this._videoDimensions.videoWidth) {
        this._videoDimensions = {
          videoHeight: videoHeight,
          videoWidth: videoWidth
        };
        var setting = {
          language: '',
          height: videoHeight,
          width: videoWidth,
          active: true,
          index: Array.from(videoTracks).findIndex(function (track) {
            return track.selected;
          })
        };

        this._onTrackChanged(new _track_video_track__WEBPACK_IMPORTED_MODULE_2__["default"](setting));
      }
    }
  }
  /**
   * Destroys the native adapter.
   * @function destroy
   * @returns {Promise<*>} - The destroy promise.
   */
  ;

  _proto.destroy = function destroy() {
    var _this8 = this;

    NativeAdapter._logger.debug('destroy');

    return new Promise(function (resolve, reject) {
      _BaseMediaSourceAdapt.prototype.destroy.call(_this8).then(function () {
        _this8._drmHandler && _this8._drmHandler.destroy();
        _this8._waitingEventTriggered = false;
        _this8._progressiveSources = [];
        _this8._loadPromise = null;
        _this8._nativeTextTracksMap = {};
        _this8._loadPromiseReject = null;
        _this8._liveEdge = 0;
        _this8._lastTimeUpdate = 0;
        _this8._lastTimeDetach = NaN;
        _this8._startTimeAttach = NaN;
        _this8._videoDimensions = null;

        _this8._clearHeartbeatTimeout();

        if (_this8._liveDurationChangeInterval) {
          clearInterval(_this8._liveDurationChangeInterval);
          _this8._liveDurationChangeInterval = null;
        }

        resolve();
      }, function () {
        return reject;
      });
    });
  }
  /**
   * Get the parsed tracks
   * @function _getParsedTracks
   * @returns {Array<Track>} - The parsed tracks
   * @private
   */
  ;

  _proto._getParsedTracks = function _getParsedTracks() {
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
  ;

  _proto._getParsedVideoTracks = function _getParsedVideoTracks() {
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
  ;

  _proto._getParsedProgressiveVideoTracks = function _getParsedProgressiveVideoTracks() {
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
        parsedTracks.push(new _track_video_track__WEBPACK_IMPORTED_MODULE_2__["default"](settings));
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
  ;

  _proto._getParsedAdaptiveVideoTracks = function _getParsedAdaptiveVideoTracks() {
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
        parsedTracks.push(new _track_video_track__WEBPACK_IMPORTED_MODULE_2__["default"](settings));
      }
    }

    return parsedTracks;
  }
  /**
   * Get the parsed audio tracks
   * @function _getParsedAudioTracks
   * @returns {Array<AudioTrack>} - The parsed audio tracks
   * @private
   */
  ;

  _proto._getParsedAudioTracks = function _getParsedAudioTracks() {
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
        parsedTracks.push(new _track_audio_track__WEBPACK_IMPORTED_MODULE_3__["default"](settings));
      }
    }

    return parsedTracks;
  }
  /**
   * Get the parsed text tracks
   * @function _getParsedTextTracks
   * @returns {Array<PKTextTrack>} - The parsed text tracks
   * @private
   */
  ;

  _proto._getParsedTextTracks = function _getParsedTextTracks() {
    var captionsTextTrackLabels = [this._config.captionsTextTrack1Label, this._config.captionsTextTrack2Label];
    var captionsTextTrackLanguageCodes = [this._config.captionsTextTrack1LanguageCode, this._config.captionsTextTrack2LanguageCode];
    var textTracks = this._videoElement.textTracks;
    var parsedTracks = [];

    if (textTracks) {
      for (var i = 0; i < textTracks.length; i++) {
        if (!_track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"].isExternalTrack(textTracks[i])) {
          var settings = {
            kind: textTracks[i].kind,
            active: textTracks[i].mode === _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"].MODE.SHOWING,
            label: textTracks[i].label,
            language: textTracks[i].language,
            available: true
          };

          if (settings.kind === _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"].KIND.SUBTITLES) {
            var newTrack = new _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"](settings);
            parsedTracks.push(newTrack);
            this._nativeTextTracksMap[newTrack.index] = textTracks[i];
          } else if (settings.kind === _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"].KIND.CAPTIONS && this._config.enableCEA708Captions) {
            settings.label = settings.label || captionsTextTrackLabels.shift();
            settings.language = settings.language || captionsTextTrackLanguageCodes.shift();
            settings.available = this._captionsHidden;

            var _newTrack = new _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"](settings);

            parsedTracks.push(_newTrack);
            this._nativeTextTracksMap[_newTrack.index] = textTracks[i];
          }
        }
      }

      if (!this._captionsHidden) {
        this._maybeShow708Captions();
      }
    }

    return parsedTracks;
  };

  _proto._maybeShow708Captions = function _maybeShow708Captions() {
    var _this9 = this;

    var captions = Array.from(this._videoElement.textTracks).filter(function (track) {
      return track.kind === _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"].KIND.CAPTIONS;
    });
    var activeCaption = captions.find(function (track) {
      return track.mode === _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"].MODE.SHOWING || track.mode === _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"].MODE.HIDDEN;
    });
    var textTrack = activeCaption || captions[0];

    if (textTrack) {
      textTrack.mode = _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"].MODE.HIDDEN;
      this._captionsHidden = true;

      this._eventManager.listenOnce(textTrack, 'cuechange', function () {
        var textTracks = _this9._getPKTextTracks();

        textTracks.forEach(function (track) {
          return (track.available = true) && (track.mode = _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"].MODE.DISABLED);
        });

        _this9._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_0__["CustomEventType"].TRACKS_CHANGED, {
          tracks: _this9._playerTracks
        });
      });
    }
  }
  /**
   * Select a video track
   * @function selectVideoTrack
   * @param {VideoTrack} videoTrack - the track to select
   * @returns {void}
   * @public
   */
  ;

  _proto.selectVideoTrack = function selectVideoTrack(videoTrack) {
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
  ;

  _proto._selectProgressiveVideoTrack = function _selectProgressiveVideoTrack(videoTrack) {
    var _this10 = this;

    var videoTracks = this._progressiveSources;

    if (videoTrack instanceof _track_video_track__WEBPACK_IMPORTED_MODULE_2__["default"] && videoTracks && videoTracks[videoTrack.index]) {
      var currentTime = this._videoElement.currentTime;
      var paused = this._videoElement.paused;
      videoTrack.active = true;
      this._sourceObj = videoTracks[videoTrack.index];

      this._eventManager.listenOnce(this._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].LOADED_DATA, function () {
        if (_utils_env__WEBPACK_IMPORTED_MODULE_11__["default"].browser.name === 'Android Browser') {
          // In android browser we have to seek only after some playback.
          _this10._eventManager.listenOnce(_this10._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].DURATION_CHANGE, function () {
            _this10._videoElement.currentTime = currentTime;
          });

          _this10._eventManager.listenOnce(_this10._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].SEEKED, function () {
            _this10._onTrackChanged(videoTrack);

            if (paused) {
              _this10._videoElement.pause();
            }
          });

          _this10._videoElement.play();
        } else {
          _this10._eventManager.listenOnce(_this10._videoElement, _event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].SEEKED, function () {
            _this10._onTrackChanged(videoTrack);
          });

          _this10._videoElement.currentTime = currentTime;

          if (!paused) {
            _this10._videoElement.play();
          }
        }
      });

      this._setSrc();
    }
  }
  /**
   * Select a native video track
   * @function selectAdaptiveVideoTrack
   * @param {VideoTrack} videoTrack - the track to select
   * @returns {void}
   * @public
   */
  ;

  _proto.selectAdaptiveVideoTrack = function selectAdaptiveVideoTrack(videoTrack) {
    var videoTracks = this._videoElement.videoTracks;

    if (videoTrack instanceof _track_video_track__WEBPACK_IMPORTED_MODULE_2__["default"] && videoTracks && videoTracks[videoTrack.index]) {
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
  ;

  _proto.selectAudioTrack = function selectAudioTrack(audioTrack) {
    var audioTracks = this._videoElement.audioTracks;

    if (audioTrack instanceof _track_audio_track__WEBPACK_IMPORTED_MODULE_3__["default"] && audioTracks && audioTracks[audioTrack.index]) {
      this._removeNativeAudioTrackChangeListener();

      this._disableAudioTracks();

      audioTracks[audioTrack.index].enabled = true;

      this._onTrackChanged(audioTrack);

      this._addNativeAudioTrackChangeListener();
    }
  }
  /**
   * Remove the onchange listenr of the video element AudioTrackList.
   * @private
   * @returns {void}
   */
  ;

  _proto._removeNativeAudioTrackChangeListener = function _removeNativeAudioTrackChangeListener() {
    if (this._videoElement.audioTracks) {
      this._eventManager.unlisten(this._videoElement.audioTracks, 'change');
    }
  }
  /**
   * Add the onchange listenr of the video element AudioTrackList.
   * @private
   * @returns {void}
   */
  ;

  _proto._addNativeAudioTrackChangeListener = function _addNativeAudioTrackChangeListener() {
    var _this11 = this;

    if (this._videoElement.audioTracks) {
      this._eventManager.listen(this._videoElement.audioTracks, 'change', function () {
        return _this11._onNativeAudioTrackChange();
      });
    }
  };

  _proto._getPKAudioTracks = function _getPKAudioTracks() {
    var audioTracks = this._playerTracks.filter(function (track) {
      return track instanceof _track_audio_track__WEBPACK_IMPORTED_MODULE_3__["default"];
    });

    return audioTracks;
  };

  _proto._getActivePKAudioTrack = function _getActivePKAudioTrack() {
    var pkAudioTracks = this._getPKAudioTracks();

    return pkAudioTracks.find(function (track) {
      return track.active === true;
    });
  }
  /**
   * Handler of the video element AudioTrackList onchange event.
   * @private
   * @returns {void}
   */
  ;

  _proto._onNativeAudioTrackChange = function _onNativeAudioTrackChange() {
    var _this12 = this;

    var getActiveVidAudioTrackIndex = function getActiveVidAudioTrackIndex() {
      for (var i = 0; i < _this12._videoElement.audioTracks.length; i++) {
        var audioTrack = _this12._videoElement.audioTracks[i];

        if (audioTrack.enabled) {
          return i;
        }
      }

      return -1;
    };

    var vidIndex = getActiveVidAudioTrackIndex();

    var activeAudioTrack = this._getActivePKAudioTrack();

    var pkIndex = activeAudioTrack ? activeAudioTrack.index : -1;

    if (vidIndex !== pkIndex) {
      var audioTracks = this._getPKAudioTracks();

      var pkAudioTrack = audioTracks.find(function (track) {
        return track.index === vidIndex;
      });

      if (pkAudioTrack) {
        NativeAdapter._logger.debug('Native selection of track, update the player audio track (' + pkIndex + ' -> ' + vidIndex + ')');

        this._onTrackChanged(pkAudioTrack);
      }
    }
  }
  /**
   * Select a text track
   * @function selectTextTrack
   * @param {PKTextTrack} textTrack - The playkit text track
   * @returns {void}
   * @public
   */
  ;

  _proto.selectTextTrack = function selectTextTrack(textTrack) {
    if (textTrack instanceof _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"] && _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"].isNativeTextTrack(textTrack)) {
      this._removeNativeTextTrackChangeListener();

      var selectedTrack = this._nativeTextTracksMap[textTrack.index];

      if (selectedTrack) {
        this.disableNativeTextTracks();
        selectedTrack.mode = this._getDisplayTextTrackModeString();

        this._onTrackChanged(textTrack);

        this._addNativeTextTrackChangeListener();
      }
    }
  }
  /**
   * Remove the onchange listenr of the video element TextTrackList.
   * @private
   * @returns {void}
   */
  ;

  _proto._removeNativeTextTrackChangeListener = function _removeNativeTextTrackChangeListener() {
    if (this._videoElement.textTracks) {
      this._eventManager.unlisten(this._videoElement.textTracks, 'change');
    }
  }
  /**
   * Add the onchange listenr of the video element TextTrackList.
   * @private
   * @returns {void}
   */
  ;

  _proto._addNativeTextTrackChangeListener = function _addNativeTextTrackChangeListener() {
    var _this13 = this;

    if (this._videoElement.textTracks) {
      this._eventManager.listen(this._videoElement.textTracks, 'change', function () {
        return _this13._onNativeTextTrackChange();
      });
    }
  };

  _proto._getPKTextTracks = function _getPKTextTracks() {
    return this._playerTracks.filter(function (track) {
      return track instanceof _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"];
    });
  };

  _proto._getActivePKTextTrack = function _getActivePKTextTrack() {
    var pkTextTracks = this._getPKTextTracks();

    return pkTextTracks.find(function (track) {
      return track.active === true;
    });
  }
  /**
   * Handler of the video element TextTrackList onchange event.
   * @private
   * @returns {void}
   */
  ;

  _proto._onNativeTextTrackChange = function _onNativeTextTrackChange() {
    var _this14 = this;

    var pkTextTracks = this._getPKTextTracks();

    var pkOffTrack = pkTextTracks.find(function (track) {
      return track.language === 'off';
    });

    var getActiveVidTextTrackIndex = function getActiveVidTextTrackIndex() {
      for (var textTrackId in _this14._nativeTextTracksMap) {
        if (_this14._getDisplayTextTrackModeString() === _this14._nativeTextTracksMap[textTrackId].mode) {
          return Number(textTrackId);
        }
      }

      return -1;
    };

    var vidIndex = getActiveVidTextTrackIndex();

    var activePKtextTrack = this._getActivePKTextTrack();

    var pkIndex = activePKtextTrack ? activePKtextTrack.index : -1;

    if (vidIndex !== pkIndex) {
      // In case no text track with 'showing' mode
      // we need to set the off track
      if (vidIndex == -1) {
        if (pkOffTrack) {
          NativeAdapter._logger.debug('Native selection of track, update the player text track (' + pkIndex + ' -> off)');

          this._onTrackChanged(pkOffTrack);
        }
      } else {
        // In case the text track on the video element is
        // different then the text track of the player
        // we need to set the correct one
        var pkTextTrack = pkTextTracks.find(function (track) {
          return track.index === vidIndex;
        });

        if (pkTextTrack) {
          NativeAdapter._logger.debug('Native selection of track, update the player text track (' + pkIndex + ' -> ' + vidIndex + ')');

          this._onTrackChanged(pkTextTrack);
        }
      }
    }
  }
  /**
   * Returns the mode (hidden / showing) of the native text track should have according to the displayTextTrack config.
   * Both 'showing' and 'hidden' indicates the the text track is active and trigger cue events but 'hidden' hides it
   * from the UI.
   * @returns {string} the mode string
   * @private
   */
  ;

  _proto._getDisplayTextTrackModeString = function _getDisplayTextTrackModeString() {
    return this._config.displayTextTrack ? _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"].MODE.SHOWING : _track_text_track__WEBPACK_IMPORTED_MODULE_4__["default"].MODE.HIDDEN;
  }
  /**
   * Add the onaddtrack listenr of the video element TextTrackList.
   * @private
   * @returns {void}
   */
  ;

  _proto._addNativeTextTrackAddedListener = function _addNativeTextTrackAddedListener() {
    var _this15 = this;

    if (!this._config.displayTextTrack && this._videoElement.textTracks) {
      this._eventManager.listen(this._videoElement.textTracks, 'addtrack', function () {
        return _this15._onNativeTextTrackAdded();
      });
    }
  }
  /**
   * Handler of the video element TextTrackList onaddtrack event.
   * @private
   * @returns {void}
   */
  ;

  _proto._onNativeTextTrackAdded = function _onNativeTextTrackAdded() {
    this._playerTracks = this._getParsedTracks();

    this._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_0__["CustomEventType"].TRACKS_CHANGED, {
      tracks: this._playerTracks
    });
  }
  /**
   * Hide the text track
   * @function hideTextTrack
   * @returns {void}
   * @public
   */
  ;

  _proto.hideTextTrack = function hideTextTrack() {
    this.disableNativeTextTracks();
  }
  /**
   * Enables adaptive bitrate
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   */
  ;

  _proto.enableAdaptiveBitrate = function enableAdaptiveBitrate() {
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
  ;

  _proto.isAdaptiveBitrateEnabled = function isAdaptiveBitrateEnabled() {
    return !this._isProgressivePlayback();
  }
  /**
   * Apply ABR restriction
   * @function applyABRRestriction
   * @param {PKABRRestrictionObject} restrictions - abr restrictions config
   * @returns {void}
   * @public
   */
  ;

  _proto.applyABRRestriction = function applyABRRestriction(restrictions) {
    _utils_util__WEBPACK_IMPORTED_MODULE_9__["Object"].createPropertyPath(this._config, 'abr.restrictions', restrictions);

    this._maybeApplyAbrRestrictions(restrictions);
  }
  /**
   * apply ABR restrictions
   * @private
   * @param {PKABRRestrictionObject} restrictions - abt config object
   * @returns {void}
   */
  ;

  _proto._maybeApplyAbrRestrictions = function _maybeApplyAbrRestrictions(restrictions) {
    if (this._isProgressivePlayback()) {
      var videoTracks = this._playerTracks.filter(function (track) {
        return track instanceof _track_video_track__WEBPACK_IMPORTED_MODULE_2__["default"];
      });

      var availableTracks = Object(_utils_restrictions__WEBPACK_IMPORTED_MODULE_8__["filterTracksByRestriction"])(videoTracks, restrictions);
      var activeTrackInRange = availableTracks.find(function (track) {
        return track.active;
      });

      if (!activeTrackInRange && availableTracks.length) {
        this.selectVideoTrack(availableTracks[0]);
      } else {
        NativeAdapter._logger.warn('Invalid restrictions, there are not tracks within the restriction range');
      }
    }
  }
  /**
   * Disables all the existing video tracks.
   * @private
   * @returns {void}
   */
  ;

  _proto._disableVideoTracks = function _disableVideoTracks() {
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
  ;

  _proto._disableAudioTracks = function _disableAudioTracks() {
    var audioTracks = this._videoElement.audioTracks;

    if (audioTracks) {
      for (var i = 0; i < audioTracks.length; i++) {
        audioTracks[i].enabled = false;
      }
    }
  }
  /**
   * Returns the live edge
   * @returns {number} - live edge
   * @private
   */
  ;

  _proto._getLiveEdge = function _getLiveEdge() {
    if (this._videoElement.seekable.length) {
      return this._videoElement.seekable.end(this._videoElement.seekable.length - 1);
    } else if (this._videoElement.buffered.length) {
      return this._videoElement.buffered.end(this._videoElement.buffered.length - 1);
    } else {
      return this._videoElement.duration;
    }
  };

  /**
   * Seeking to live edge.
   * @function seekToLiveEdge
   * @returns {void}
   * @public
   */
  _proto.seekToLiveEdge = function seekToLiveEdge() {
    try {
      this._videoElement.currentTime = this._getLiveEdge();
    } catch (e) {
      return;
    }
  };

  _proto.getSegmentDuration = function getSegmentDuration() {
    return this._segmentDuration;
  }
  /**
   * Checking if the current playback is live.
   * @function isLive
   * @returns {boolean} - Whether playback is live.
   * @public
   */
  ;

  _proto.isLive = function isLive() {
    return this._videoElement.duration === Infinity;
  };

  _proto.isOnLiveEdge = function isOnLiveEdge() {
    return this._wasCurrentTimeSetSuccessfully ? _BaseMediaSourceAdapt.prototype.isOnLiveEdge.call(this) : false;
  }
  /**
   * Handling live duration change (as safari doesn't trigger durationchange event on live playback)
   * @function _handleLiveDurationChange
   * @returns {void}
   * @private
   */
  ;

  _proto._handleLiveDurationChange = function _handleLiveDurationChange() {
    var _this16 = this;

    this._liveDurationChangeInterval = setInterval(function () {
      _this16._calculateSegmentDuration();

      var liveEdge = _this16._getLiveEdge();

      if (_this16._liveEdge !== liveEdge) {
        _this16._liveEdge = liveEdge;

        _this16._videoElement.dispatchEvent(new window.Event(_event_event_type__WEBPACK_IMPORTED_MODULE_0__["Html5EventType"].DURATION_CHANGE));
      }
    }, LIVE_DURATION_INTERVAL_MS);
  }
  /**
   * Calculate the segment duration
   * @function _calculateSegmentDuration
   * @returns {void}
   * @private
   */
  ;

  _proto._calculateSegmentDuration = function _calculateSegmentDuration() {
    if (this._videoElement.seekable.start(0) === 0) {
      var _this$_videoElement2 = this._videoElement,
          buffered = _this$_videoElement2.buffered,
          seekable = _this$_videoElement2.seekable;

      if (buffered.length && seekable.length) {
        this._segmentDuration = (buffered.end(buffered.length - 1) - seekable.end(seekable.length - 1)) / SAFARI_BUFFERED_SEGMENTS_COUNT;
      }
    } else {
      var liveEdge = this._getLiveEdge();

      if (this._liveEdge && this._liveEdge !== liveEdge) {
        this._segmentDuration = liveEdge - this._liveEdge;
      }
    }
  }
  /**
   * Get the start time of DVR window in live playback in seconds.
   * @returns {Number} - start time of DVR window.
   * @public
   */
  ;

  _proto.getStartTimeOfDvrWindow = function getStartTimeOfDvrWindow() {
    if (this.isLive() && this._videoElement.seekable.length) {
      return this._videoElement.seekable.start(0);
    } else {
      return 0;
    }
  };

  _proto.getDrmInfo = function getDrmInfo() {
    return this._drmHandler ? this._drmHandler.getDrmInfo() : null;
  };

  _createClass(NativeAdapter, [{
    key: "liveDuration",
    get: function get() {
      return this._getLiveEdge();
    }
  }]);

  return NativeAdapter;
}(_base_media_source_adapter__WEBPACK_IMPORTED_MODULE_6__["default"]);

_defineProperty(NativeAdapter, "id", 'NativeAdapter');

_defineProperty(NativeAdapter, "_logger", _base_media_source_adapter__WEBPACK_IMPORTED_MODULE_6__["default"].getLogger(NativeAdapter.id));

_defineProperty(NativeAdapter, "TEST_VIDEO", _utils_util__WEBPACK_IMPORTED_MODULE_9__["Dom"].createElement('video'));

_defineProperty(NativeAdapter, "_drmProtocols", [_drm_fairplay__WEBPACK_IMPORTED_MODULE_10__["default"]]);

_defineProperty(NativeAdapter, "_drmProtocol", null);

_defineProperty(NativeAdapter, "_progressiveMimeTypes", ['video/mp4', 'audio/mp3']);



/***/ }),

/***/ "./engines/html5/media-source/base-media-source-adapter.js":
/*!*****************************************************************!*\
  !*** ./engines/html5/media-source/base-media-source-adapter.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseMediaSourceAdapter; });
/* harmony import */ var _event_fake_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../event/fake-event */ "./event/fake-event.js");
/* harmony import */ var _event_fake_event_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../event/fake-event-target */ "./event/fake-event-target.js");
/* harmony import */ var _error_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../error/error */ "./error/error.js");
/* harmony import */ var _event_event_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../event/event-type */ "./event/event-type.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/logger */ "./utils/logger.js");
/* harmony import */ var _track_track__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../track/track */ "./track/track.js");
/* harmony import */ var _track_video_track__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../track/video-track */ "./track/video-track.js");
/* harmony import */ var _track_audio_track__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../track/audio-track */ "./track/audio-track.js");
/* harmony import */ var _track_text_track__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../track/text-track */ "./track/text-track.js");
/* harmony import */ var _event_event_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../event/event-manager */ "./event/event-manager.js");
/* harmony import */ var _track_image_track__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../track/image-track */ "./track/image-track.js");
/* harmony import */ var _thumbnail_thumbnail_info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../thumbnail/thumbnail-info */ "./thumbnail/thumbnail-info.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-unused-vars */












var CURRENT_OR_NEXT_SEGMENT_COUNT = 2;

var BaseMediaSourceAdapter = /*#__PURE__*/function (_FakeEventTarget) {
  _inheritsLoose(BaseMediaSourceAdapter, _FakeEventTarget);

  /**
   * The id of the adapter.
   * @member {string} id
   * @static
   * @private
   */

  /**
   * Passing the getLogger function to the actual media source adapter.
   * @type {Function}
   * @static
   */

  /**
   * The adapter capabilities
   * @private
   */

  /**
   * Checks if the media source adapter is supported.
   * @function isSupported
   * @returns {boolean} - Whether the media source adapter is supported.
   * @static
   */
  BaseMediaSourceAdapter.isSupported = function isSupported() {
    return true;
  }
  /**
   * check for media source supported on browser
   * @static
   * @returns {boolean} - Whether the media source is supported.
   */
  ;

  BaseMediaSourceAdapter.isMSESupported = function isMSESupported() {
    var mediaSource = window.MediaSource || window.WebKitMediaSource; // isTypeSupported isn't exist or not a function for old MSE implementation

    return !!mediaSource && typeof mediaSource.isTypeSupported === 'function';
  }
  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to media source adapter.
   * @param {PKMediaSourceObject} source - The source object.
   * @param {Object} config - The media source adapter configuration.
   */
  ;

  function BaseMediaSourceAdapter(videoElement, source, config) {
    var _this;

    if (config === void 0) {
      config = {};
    }

    _this = _FakeEventTarget.call(this) || this;

    _defineProperty(_assertThisInitialized(_this), "_capabilities", {
      fpsControl: false
    });

    _this._videoElement = videoElement;
    _this._sourceObj = source;
    _this._config = config;

    _this._onDurationChanged = function () {
      if (_this.isLive() && _this._videoElement.paused) {
        _this._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].TIME_UPDATE);
      }
    };

    _this._eventManager = new _event_event_manager__WEBPACK_IMPORTED_MODULE_9__["default"]();

    _this._handleLiveTimeUpdate();

    return _this;
  }
  /**
   * Destroys the media source adapter.
   * @function destroy
   * @returns {void}
   */


  var _proto = BaseMediaSourceAdapter.prototype;

  _proto.destroy = function destroy() {
    this._sourceObj = null;
    this._config = {};
    this.disableNativeTextTracks();

    this._videoElement.removeEventListener(_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].DURATION_CHANGE, this._onDurationChanged);

    this._eventManager.destroy();

    return Promise.resolve();
  }
  /**
   * Triggers the appropriate track changed event.
   * @param {Track} track - The selected track.
   * @private
   * @returns {void}
   */
  ;

  _proto._onTrackChanged = function _onTrackChanged(track) {
    if (track instanceof _track_video_track__WEBPACK_IMPORTED_MODULE_6__["default"]) {
      BaseMediaSourceAdapter._logger.debug('Video track changed', track);

      this._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].VIDEO_TRACK_CHANGED, {
        selectedVideoTrack: track
      });
    } else if (track instanceof _track_audio_track__WEBPACK_IMPORTED_MODULE_7__["default"]) {
      BaseMediaSourceAdapter._logger.debug('Audio track changed', track);

      this._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].AUDIO_TRACK_CHANGED, {
        selectedAudioTrack: track
      });
    } else if (track instanceof _track_text_track__WEBPACK_IMPORTED_MODULE_8__["default"]) {
      BaseMediaSourceAdapter._logger.debug('Text track changed', track);

      this._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].TEXT_TRACK_CHANGED, {
        selectedTextTrack: track
      });
    } else if (track instanceof _track_image_track__WEBPACK_IMPORTED_MODULE_10__["default"]) {
      BaseMediaSourceAdapter._logger.debug('Image track changed', track);

      this._trigger(_event_event_type__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].IMAGE_TRACK_CHANGED, {
        selectedImageTrack: track
      });
    }
  }
  /**
   * Dispatch an adapter event forward.
   * @param {string} name - The name of the event.
   * @param {?Object} payload - The event payload.
   * @returns {void}
   */
  ;

  _proto._trigger = function _trigger(name, payload) {
    this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_0__["default"](name, payload));
  }
  /** Must implemented methods by the derived media source adapter **/
  ;

  BaseMediaSourceAdapter.canPlayType = function canPlayType(mimeType, preferNative) {
    return BaseMediaSourceAdapter._throwNotImplementedError('static canPlayType');
  };

  _proto.load = function load() {
    return BaseMediaSourceAdapter._throwNotImplementedError('load');
  };

  _proto.selectVideoTrack = function selectVideoTrack(videoTrack) {
    return BaseMediaSourceAdapter._throwNotImplementedError('selectVideoTrack');
  };

  _proto.selectAudioTrack = function selectAudioTrack(audioTrack) {
    BaseMediaSourceAdapter._throwNotImplementedError('selectAudioTrack');
  };

  _proto.selectTextTrack = function selectTextTrack(textTrack) {
    BaseMediaSourceAdapter._throwNotImplementedError('selectTextTrack');
  };

  _proto.selectImageTrack = function selectImageTrack(imageTrack) {};

  _proto.hideTextTrack = function hideTextTrack() {
    BaseMediaSourceAdapter._throwNotImplementedError('hideTextTrack');
  };

  _proto.enableAdaptiveBitrate = function enableAdaptiveBitrate() {
    BaseMediaSourceAdapter._throwNotImplementedError('enableAdaptiveBitrate');
  };

  _proto.isAdaptiveBitrateEnabled = function isAdaptiveBitrateEnabled() {
    return BaseMediaSourceAdapter._throwNotImplementedError('isAdaptiveBitrateEnabled');
  };

  _proto.applyABRRestriction = function applyABRRestriction(restrictions) {
    return BaseMediaSourceAdapter._throwNotImplementedError('applyABRRestriction');
  };

  _proto._getLiveEdge = function _getLiveEdge() {
    return BaseMediaSourceAdapter._throwNotImplementedError('_getLiveEdge');
  };

  _proto.seekToLiveEdge = function seekToLiveEdge() {
    BaseMediaSourceAdapter._throwNotImplementedError('seekToLiveEdge');
  };

  _proto.isLive = function isLive() {
    return BaseMediaSourceAdapter._throwNotImplementedError('isLive');
  };

  _proto.isOnLiveEdge = function isOnLiveEdge() {
    return this.liveDuration - this._videoElement.currentTime <= this.getSegmentDuration() * CURRENT_OR_NEXT_SEGMENT_COUNT;
  };

  _proto.setMaxBitrate = function setMaxBitrate(bitrate) {
    return;
  };

  _proto.attachMediaSource = function attachMediaSource() {};

  _proto.detachMediaSource = function detachMediaSource() {}
  /**
   * Handling live time update (as is not triggered when video is paused, but the current time changed)
   * @function _handleLiveTimeUpdate
   * @returns {void}
   * @private
   */
  ;

  _proto._handleLiveTimeUpdate = function _handleLiveTimeUpdate() {
    this._videoElement.addEventListener(_event_event_type__WEBPACK_IMPORTED_MODULE_3__["Html5EventType"].DURATION_CHANGE, this._onDurationChanged);
  }
  /**
   * Disables all the existing text tracks.
   * @public
   * @returns {void}
   */
  ;

  _proto.disableNativeTextTracks = function disableNativeTextTracks() {
    Array.from(this._videoElement.textTracks).forEach(function (track) {
      if (_track_text_track__WEBPACK_IMPORTED_MODULE_8__["default"].isNativeTextTrack(track) && !_track_text_track__WEBPACK_IMPORTED_MODULE_8__["default"].isExternalTrack(track)) {
        track.mode = _track_text_track__WEBPACK_IMPORTED_MODULE_8__["default"].MODE.DISABLED;
      }
    });
  }
  /**
   * Checks if the adapter can recover from an error triggered by the video element error
   * @param {Event} event - the html5 video element error
   * @returns {boolean} - if it can recover or not
   * @public
   */
  ;

  _proto.handleMediaError = function handleMediaError(event) {
    return false;
  };

  _proto.getStartTimeOfDvrWindow = function getStartTimeOfDvrWindow() {
    return BaseMediaSourceAdapter._throwNotImplementedError('getStartTimeOfDvrWindow');
  };

  _proto.getThumbnail = function getThumbnail(time) {
    return null;
  };

  _proto.getSegmentDuration = function getSegmentDuration() {
    return BaseMediaSourceAdapter._throwNotImplementedError('getSegmentDuration');
  };

  /**
   * throw a run time error
   * @param {string} name of the unimplemented function
   * @returns {any} void/string/boolean
   */
  BaseMediaSourceAdapter._throwNotImplementedError = function _throwNotImplementedError(name) {
    throw new _error_error__WEBPACK_IMPORTED_MODULE_2__["default"](_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Severity.CRITICAL, _error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Category.PLAYER, _error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Code.RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED, name);
  }
  /**
   * Getter for the src that the adapter plays on the video element.
   * In case the adapter preformed a load it will return the manifest url.
   * @public
   * @returns {string} - The src url.
   */
  ;

  _proto.getDrmInfo = function getDrmInfo() {
    return null;
  };

  _createClass(BaseMediaSourceAdapter, [{
    key: "liveDuration",
    get: function get() {
      return BaseMediaSourceAdapter._throwNotImplementedError('liveDuration');
    }
  }, {
    key: "src",
    get: function get() {
      if (this._loadPromise && this._sourceObj) {
        return this._sourceObj.url;
      }

      return '';
    }
    /**
     * Setter for the src that the adapter plays on the video element.
     * @param {string} source - The src url.
     * @public
     * @returns {void}
     */
    ,
    set: function set(source) {
      if (!this._loadPromise && this._sourceObj) {
        this._sourceObj.url = source;
      }
    }
    /**
     * @public
     * @return {PKMediaSourceCapabilities} - The adapter capabilities.
     */

  }, {
    key: "capabilities",
    get: function get() {
      return this._capabilities;
    }
  }, {
    key: "targetBuffer",
    get: function get() {
      return NaN;
    }
  }]);

  return BaseMediaSourceAdapter;
}(_event_fake_event_target__WEBPACK_IMPORTED_MODULE_1__["default"]);

_defineProperty(BaseMediaSourceAdapter, "id", 'BaseAdapter');

_defineProperty(BaseMediaSourceAdapter, "getLogger", _utils_logger__WEBPACK_IMPORTED_MODULE_4__["default"]);

_defineProperty(BaseMediaSourceAdapter, "_logger", BaseMediaSourceAdapter.getLogger(BaseMediaSourceAdapter.id));



/***/ }),

/***/ "./engines/html5/media-source/media-source-provider.js":
/*!*************************************************************!*\
  !*** ./engines/html5/media-source/media-source-provider.js ***!
  \*************************************************************/
/*! exports provided: default, registerMediaSourceAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaSourceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMediaSourceAdapter", function() { return registerMediaSourceAdapter; });
/* harmony import */ var _adapters_native_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapters/native-adapter */ "./engines/html5/media-source/adapters/native-adapter.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/logger */ "./utils/logger.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Media source provider
 * @classdesc
 */

var MediaSourceProvider = /*#__PURE__*/function () {
  function MediaSourceProvider() {}

  /**
   * The logger of the media source provider.
   * @member {any} _logger
   * @static
   * @private
   */

  /**
   * The media source adapter registry.
   * @member {Array<IMediaSourceAdapterStatic>} _mediaSourceAdapters
   * @static
   * @private
   */

  /**
   * The selected adapter for playback.
   * @type {null|IMediaSourceAdapterStatic}
   * @static
   * @private
   */

  /**
   * Add a media source adapter to the registry.
   * @function register
   * @param {IMediaSourceAdapterStatic} mediaSourceAdapter - The media source adapter to register.
   * @static
   * @returns {void}
   */
  MediaSourceProvider.register = function register(mediaSourceAdapter) {
    if (mediaSourceAdapter) {
      if (!MediaSourceProvider._mediaSourceAdapters.includes(mediaSourceAdapter)) {
        MediaSourceProvider._logger.debug("Adapter <" + mediaSourceAdapter.id + "> has been registered successfully");

        MediaSourceProvider._mediaSourceAdapters.push(mediaSourceAdapter);
      } else {
        MediaSourceProvider._logger.debug("Adapter <" + mediaSourceAdapter.id + "> is already registered, do not register again");
      }
    }
  }
  /**
   * Remove a media source adapter from the registry.
   * @function unRegister
   * @param {IMediaSourceAdapterStatic} mediaSourceAdapter - The media source adapter to unRegister.
   * @static
   * @returns {void}
   */
  ;

  MediaSourceProvider.unRegister = function unRegister(mediaSourceAdapter) {
    var index = MediaSourceProvider._mediaSourceAdapters.indexOf(mediaSourceAdapter);

    if (index > -1) {
      MediaSourceProvider._logger.debug("Unregistered <" + mediaSourceAdapter.id + "> adapter");

      MediaSourceProvider._mediaSourceAdapters.splice(index, 1);
    }
  }
  /**
   * Checks if the a media source adapter can play a given source.
   * @param {PKMediaSourceObject} source - The source object to check.
   * @param {boolean} [preferNative=true] - prefer native flag.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @returns {boolean} - Whether a media source adapter can play the source.
   * @public
   * @static
   */
  ;

  MediaSourceProvider.canPlaySource = function canPlaySource(source, preferNative, drmConfig) {
    if (preferNative === void 0) {
      preferNative = true;
    }

    MediaSourceProvider._orderMediaSourceAdapters(preferNative);

    var mediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters;

    if (source && source.mimetype) {
      for (var i = 0; i < mediaSourceAdapters.length; i++) {
        if (mediaSourceAdapters[i].canPlayType(source.mimetype) && (!source.drmData || mediaSourceAdapters[i].canPlayDrm(source.drmData, drmConfig))) {
          MediaSourceProvider._selectedAdapter = mediaSourceAdapters[i];

          MediaSourceProvider._logger.debug("Selected adapter is <" + MediaSourceProvider._selectedAdapter.id + ">");

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
  ;

  MediaSourceProvider._orderMediaSourceAdapters = function _orderMediaSourceAdapters(preferNative) {
    MediaSourceProvider._mediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters.filter(function (mse) {
      return mse.id !== 'NativeAdapter';
    });

    if (preferNative) {
      MediaSourceProvider._mediaSourceAdapters.unshift(_adapters_native_adapter__WEBPACK_IMPORTED_MODULE_0__["default"]);
    } else {
      MediaSourceProvider._mediaSourceAdapters.push(_adapters_native_adapter__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
  }
  /**
   * Get the appropriate media source adapter to the video source.
   * @function getMediaSourceAdapter
   * @param {HTMLVideoElement} videoElement - The video element which requires adapter for a given mimeType.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @param {Object} config - The player configuration.
   * @returns {IMediaSourceAdapter|null} - The selected media source adapter, or null if such doesn't exists.
   * @static
   */
  ;

  MediaSourceProvider.getMediaSourceAdapter = function getMediaSourceAdapter(videoElement, source, config) {
    if (videoElement && source && config) {
      if (!MediaSourceProvider._selectedAdapter) {
        MediaSourceProvider.canPlaySource(source, true, config.drm);
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
  ;

  MediaSourceProvider.destroy = function destroy() {
    MediaSourceProvider._selectedAdapter = null;
  };

  return MediaSourceProvider;
}();

_defineProperty(MediaSourceProvider, "_logger", Object(_utils_logger__WEBPACK_IMPORTED_MODULE_1__["default"])('MediaSourceProvider'));

_defineProperty(MediaSourceProvider, "_mediaSourceAdapters", [_adapters_native_adapter__WEBPACK_IMPORTED_MODULE_0__["default"]]);

_defineProperty(MediaSourceProvider, "_selectedAdapter", null);


var registerMediaSourceAdapter = MediaSourceProvider.register;


/***/ }),

/***/ "./engines/stream-type.js":
/*!********************************!*\
  !*** ./engines/stream-type.js ***!
  \********************************/
/*! exports provided: StreamType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamType", function() { return StreamType; });
var StreamType = {
  DASH: 'dash',
  HLS: 'hls',
  PROGRESSIVE: 'progressive'
};


/***/ }),

/***/ "./enums/auto-play-type.js":
/*!*********************************!*\
  !*** ./enums/auto-play-type.js ***!
  \*********************************/
/*! exports provided: AutoPlayType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoPlayType", function() { return AutoPlayType; });
var AutoPlayType = {
  TRUE: true,
  FALSE: false,
  IN_VIEW: 'inview'
};


/***/ }),

/***/ "./enums/media-type.js":
/*!*****************************!*\
  !*** ./enums/media-type.js ***!
  \*****************************/
/*! exports provided: MediaType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
var MediaType = {
  VOD: 'Vod',
  LIVE: 'Live',
  AUDIO: 'Audio',
  UNKNOWN: 'Unknown'
};


/***/ }),

/***/ "./enums/mime-type.js":
/*!****************************!*\
  !*** ./enums/mime-type.js ***!
  \****************************/
/*! exports provided: MimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeType", function() { return MimeType; });
var MimeType = {
  HLS: ['application/x-mpegurl', 'application/vnd.apple.mpegurl'],
  DASH: ['application/dash+xml'],
  PROGRESSIVE: ['video/mp4'],
  SMOOTH_STREAMING: ['application/vnd.ms-sstr+xml']
};


/***/ }),

/***/ "./enums/request-type.js":
/*!*******************************!*\
  !*** ./enums/request-type.js ***!
  \*******************************/
/*! exports provided: RequestType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestType", function() { return RequestType; });
var RequestType = {
  MANIFEST: 0,
  SEGMENT: 1,
  LICENSE: 2
};


/***/ }),

/***/ "./enums/screen-orientation-type.js":
/*!******************************************!*\
  !*** ./enums/screen-orientation-type.js ***!
  \******************************************/
/*! exports provided: ScreenOrientationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenOrientationType", function() { return ScreenOrientationType; });
var ScreenOrientationType = {
  NONE: 'none',
  ANY: 'any',
  NATURAL: 'natural',
  LANDSCAPE: 'landscape',
  PORTRAIT: 'portrait',
  PORTRAIT_PRIMARY: 'portrait-primary',
  PORTRAIT_SECONDARY: 'portrait-secondary',
  LANDSCAPE_PRIMARY: 'landscape-primary',
  LANDSCAPE_SECONDARY: 'landscape-secondary'
};


/***/ }),

/***/ "./error/category.js":
/*!***************************!*\
  !*** ./error/category.js ***!
  \***************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = {
  /** Errors from the network stack. */
  NETWORK: 1,

  /** Errors parsing text streams. */
  TEXT: 2,

  /** Errors parsing or processing audio or video streams. */
  MEDIA: 3,

  /** Errors parsing the Manifest. */
  MANIFEST: 4,

  /** Errors related to streaming. */
  STREAMING: 5,

  /** Errors related to DRM. */
  DRM: 6,

  /** Miscellaneous errors from the player. */
  PLAYER: 7,

  /** Errors related to ads. */
  ADS: 8,

  /** Errors in the database storage (offline). */
  STORAGE: 9,

  /** Errors related to cast. */
  CAST: 10,

  /** Errors from VR plugin. */
  VR: 11
};


/***/ }),

/***/ "./error/code.js":
/*!***********************!*\
  !*** ./error/code.js ***!
  \***********************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var _ads_ad_error_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ads/ad-error-code */ "./ads/ad-error-code.js");

var Code = {
  /**
   * A network request was made using an unsupported URI scheme.
   */
  UNSUPPORTED_SCHEME: 1000,

  /**
   * An HTTP network request returned an HTTP status that indicated a failure.
   */
  BAD_HTTP_STATUS: 1001,

  /**
   * An HTTP network request failed with an error, but not from the server.
   */
  HTTP_ERROR: 1002,

  /**
   * A network request timed out.
   */
  TIMEOUT: 1003,

  /**
   * A network request was made with a malformed data URI.
   */
  MALFORMED_DATA_URI: 1004,

  /**
   * A network request was made with a data URI using an unknown encoding.
   */
  UNKNOWN_DATA_URI_ENCODING: 1005,

  /**
   * A request filter threw an error.
   */
  REQUEST_FILTER_ERROR: 1006,

  /**
   * A response filter threw an error.
   */
  RESPONSE_FILTER_ERROR: 1007,

  /**
   * Live manifest is refreshed more than a preconfigured amount of times without any new segment.
   */
  LIVE_MANIFEST_REFRESH_ERROR: 1008,

  /** The text parser failed to parse a text stream due to an invalid header. */
  INVALID_TEXT_HEADER: 2000,

  /** The text parser failed to parse a text stream due to an invalid cue. */
  INVALID_TEXT_CUE: 2001,

  /**
   * Was unable to detect the encoding of the response text.  Suggest adding
   * byte-order-markings to the response data.
   */
  UNABLE_TO_DETECT_ENCODING: 2003,

  /** The response data contains invalid Unicode character encoding. */
  BAD_ENCODING: 2004,

  /**
   * The XML parser failed to parse an xml stream, or the XML lacks mandatory
   * elements for TTML.
   * in the data is the URI associated with the XML.
   */
  INVALID_XML: 2005,

  /**
   * MP4 segment does not contain TTML.
   */
  INVALID_MP4_TTML: 2007,

  /**
   * MP4 segment does not contain VTT.
   */
  INVALID_MP4_VTT: 2008,

  /**
   *  VTT module issue, see the date for more details
   */
  UNABLE_TO_CREATE_TEXT_CUE: 2009,

  /**
   * error parsing the dash adapter error (for instance, could not parse an error shaka raised)
   */
  DASH_ADAPTER_ERROR_PARSE_ISSUE: 2010,

  /**
   * the file that the external captions handler is trying to download could not be determined / unsupported.
   */
  UNKNOWN_FILE_TYPE: 2011,

  /**
   * The language key in the caption object is empty / does not exist. Language is a mandatory field.
   * https://github.com/kaltura/playkit-js/blob/master/docs/configuration.md#configsourcescaptions
   */
  UNKNOWN_LANGUAGE: 2012,

  /**
   * invalid thumbnail vtt file format or invalid url option.
   */
  INVALID_VTT_THUMBNAILS_FILE: 2013,

  /**
   * Some component tried to read past the end of a buffer.  The segment index,
   * init segment, or PSSH may be malformed.
   */
  BUFFER_READ_OUT_OF_BOUNDS: 3000,

  /**
   * Some component tried to parse an integer that was too large to fit in a
   * JavaScript number without rounding error.  JavaScript can only natively
   * represent integers up to 53 bits.
   */
  JS_INTEGER_OVERFLOW: 3001,

  /**
   * The EBML parser used to parse the WebM container encountered an integer,
   * ID, or other field larger than the maximum supported by the parser.
   */
  EBML_OVERFLOW: 3002,

  /**
   * The EBML parser used to parse the WebM container encountered a floating-
   * point field of a size not supported by the parser.
   */
  EBML_BAD_FLOATING_POINT_SIZE: 3003,

  /**
   * The MP4 SIDX parser found the wrong box type.
   * Either the segment index range is incorrect or the data is corrupt.
   */
  MP4_SIDX_WRONG_BOX_TYPE: 3004,

  /**
   * The MP4 SIDX parser encountered an invalid timescale.
   * The segment index data may be corrupt.
   */
  MP4_SIDX_INVALID_TIMESCALE: 3005,

  /** The MP4 SIDX parser encountered a type of SIDX that is not supported. */
  MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,

  /**
   * The WebM Cues parser was unable to locate the Cues element.
   * The segment index data may be corrupt.
   */
  WEBM_CUES_ELEMENT_MISSING: 3007,

  /**
   * The WebM header parser was unable to locate the Ebml element.
   * The init segment data may be corrupt.
   */
  WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,

  /**
   * The WebM header parser was unable to locate the Segment element.
   * The init segment data may be corrupt.
   */
  WEBM_SEGMENT_ELEMENT_MISSING: 3009,

  /**
   * The WebM header parser was unable to locate the Info element.
   * The init segment data may be corrupt.
   */
  WEBM_INFO_ELEMENT_MISSING: 3010,

  /**
   * The WebM header parser was unable to locate the Duration element.
   * The init segment data may be corrupt or may have been incorrectly encoded.
   * Shaka requires a duration in WebM DASH content.
   */
  WEBM_DURATION_ELEMENT_MISSING: 3011,

  /**
   * The WebM Cues parser was unable to locate the Cue Track Positions element.
   * The segment index data may be corrupt.
   */
  WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,

  /**
   * The WebM Cues parser was unable to locate the Cue Time element.
   * The segment index data may be corrupt.
   */
  WEBM_CUE_TIME_ELEMENT_MISSING: 3013,

  /**
   * A MediaSource operation failed.
   * a MediaError code from the video element.
   */
  MEDIA_SOURCE_OPERATION_FAILED: 3014,

  /**
   * A MediaSource operation threw an exception.
   */
  MEDIA_SOURCE_OPERATION_THREW: 3015,

  /**
   * The video element reported an error.
   * - error.data[0] is a MediaError code.js from the video element.
   * - On Edge & IE, error.data[1] is a Microsoft extended error code.js in hex.
   * - On Chrome, error.data[2] is a string with details on the error.
   */
  VIDEO_ERROR: 3016,

  /**
   * A MediaSource operation threw QuotaExceededError and recovery failed. The
   * content cannot be played correctly because the segments are too large for
   * the browser/platform. This may occur when attempting to play very high
   * quality, very high bitrate content on low-end devices.
   */
  QUOTA_EXCEEDED_ERROR: 3017,

  /**
   * a media error from hlsjs adapter
   */
  HLS_FATAL_MEDIA_ERROR: 3018,

  /**
   * HLSJS fragment parsing issue
   */
  HLS_FRAG_PARSING_ERROR: 3019,

  /**
   * HLSJS buffer append issue
   */
  HLS_BUFFER_APPEND_ISSUE: 3020,

  /**
   * HLSJS buffer appending error
   */
  HLS_BUFFER_APPENDING_ISSUE: 3021,

  /**
   * Native adapter error, more info in the data part
   */
  NATIVE_ADAPTER_LOAD_FAILED: 3022,

  /**
   * HLSjs buffer stalled issue
   */
  HLS_BUFFER_STALLED_ERROR: 3023,

  /**
   * The Player was unable to guess the manifest type based on file extension
   * or MIME type.  To fix, try one of the following:
   * Rename the manifest so that the URI ends in a well-known extension.
   * Configure the server to send a recognizable Content-Type header.
   * Configure the server to accept a HEAD request for the manifest.
   */
  UNABLE_TO_GUESS_MANIFEST_TYPE: 4000,

  /** The DASH Manifest contained invalid XML markup. */
  DASH_INVALID_XML: 4001,

  /**
   * The DASH Manifest contained a Representation with insufficient segment
   * information.
   */
  DASH_NO_SEGMENT_INFO: 4002,

  /** The DASH Manifest contained an AdaptationSet with no Representations. */
  DASH_EMPTY_ADAPTATION_SET: 4003,

  /** The DASH Manifest contained an Period with no AdaptationSets. */
  DASH_EMPTY_PERIOD: 4004,

  /**
   * The DASH Manifest does not specify an init segment with a WebM container.
   */
  DASH_WEBM_MISSING_INIT: 4005,

  /** The DASH Manifest contained an unsupported container format. */
  DASH_UNSUPPORTED_CONTAINER: 4006,

  /** The embedded PSSH data has invalid encoding. */
  DASH_PSSH_BAD_ENCODING: 4007,

  /**
   * There is an AdaptationSet whose Representations do not have any common
   * key-systems.
   */
  DASH_NO_COMMON_KEY_SYSTEM: 4008,

  /** Having multiple key IDs per Representation is not supported. */
  DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,

  /** The DASH Manifest specifies conflicting key IDs. */
  DASH_CONFLICTING_KEY_IDS: 4010,

  /**
   * The manifest contains a period with no playable streams.
   * Either the period was originally empty, or the streams within cannot be
   * played on this browser or platform.
   */
  UNPLAYABLE_PERIOD: 4011,

  /**
   * There exist some streams that could be decoded, but restrictions imposed
   * by the application or the key system prevent us from playing.  This may
   * happen under the following conditions:
   * The application has given restrictions to the Player that restrict
   * at least one content type completely (e.g. no playable audio),
   * The key system has imposed output restrictions that cannot be met
   * (such as HDCP) and there are no unrestricted alternatives.
   */
  RESTRICTIONS_CANNOT_BE_MET: 4012,

  /**
   * No valid periods were found in the manifest.  Please check that your
   * manifest is correct and free of typos.
   */
  NO_PERIODS: 4014,

  /**
   * HLS playlist doesn't start with a mandory #EXTM3U tag.
   */
  HLS_PLAYLIST_HEADER_MISSING: 4015,

  /**
   * HLS tag has an invalid name that doesn't start with '#EXT'
   */
  INVALID_HLS_TAG: 4016,

  /**
   * HLS playlist has both Master and Media/Segment tags.
   */
  HLS_INVALID_PLAYLIST_HIERARCHY: 4017,

  /**
   * A Representation has an id that is the same as another Representation in
   * the same Period.  This makes manifest updates impossible since we cannot
   * map the updated Representation to the old one.
   */
  DASH_DUPLICATE_REPRESENTATION_ID: 4018,

  /**
   * HLS manifest has several #EXT-X-MAP tags. We can only
   * support one at the moment.
   */
  HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,

  /**
   * HLS parser was unable to guess mime type of a stream.
   */
  HLS_COULD_NOT_GUESS_MIME_TYPE: 4021,

  /**
   * No Master Playlist has been provided. Master playlist provides
   * vital information about the streams (like codecs) that is
   * required for MediaSource. We don't support directly providing
   * a Media Playlist.
   */
  HLS_MASTER_PLAYLIST_NOT_PROVIDED: 4022,

  /**
   * One of the required attributes was not provided.
   * HLS manifest is invalid.
   */
  HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,

  /**
   * One of the required tags was not provided.
   * HLS manifest is invalid.
   */
  HLS_REQUIRED_TAG_MISSING: 4024,

  /**
   * HLS parser was unable to guess codecs of a stream.
   */
  HLS_COULD_NOT_GUESS_CODECS: 4025,

  /**
   * HLS parser has encountered encrypted content with unsupported
   * KEYFORMAT attributes.
   */
  HLS_KEYFORMATS_NOT_SUPPORTED: 4026,

  /**
   * The manifest parser only supports xlink links with
   * xlink:actuate='onLoad'.
   */
  DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,

  /**
   * The manifest parser has hit its depth limit on
   * xlink link chains.
   */
  DASH_XLINK_DEPTH_LIMIT: 4028,

  /**
   * HLS parser encountered a live playlist.
   */
  HLS_LIVE_CONTENT_NOT_SUPPORTED: 4029,

  /**
   * HLSJS cannot parse error
   */
  HLSJS_CANNOT_PARSE: 4030,

  /**
   * The StreamingEngine called onChooseStreams() but the callback receiver
   * did not return the correct number or type of Streams.
   *
   * This can happen when there is multi-Period content where one Period is
   * video+audio and another is video-only or audio-only.  We don't support this
   * case because it is incompatible with MSE.  When the browser reaches the
   * transition, it will pause, waiting for the audio stream.
   */
  INVALID_STREAMS_CHOSEN: 5005,

  /**
   * The manifest indicated protected content, but the manifest parser was
   * unable to determine what key systems should be used.
   */
  NO_RECOGNIZED_KEY_SYSTEMS: 6000,

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
  REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,

  /**
   * The browser found one of the requested key systems, but it failed to
   * create an instance of the CDM for some unknown reason.
   */
  FAILED_TO_CREATE_CDM: 6002,

  /**
   * The browser found one of the requested key systems and created an instance
   * of the CDM, but it failed to attach the CDM to the video for some unknown
   * reason.
   */
  FAILED_TO_ATTACH_TO_VIDEO: 6003,

  /**
   * The CDM rejected the server certificate supplied by the application.
   * The certificate may be malformed or in an unsupported format.
   */
  INVALID_SERVER_CERTIFICATE: 6004,

  /**
   * The CDM refused to create a session for some unknown reason.
   */
  FAILED_TO_CREATE_SESSION: 6005,

  /**
   * The CDM was unable to generate a license request for the init data it was
   * given.  The init data may be malformed or in an unsupported format.
   */
  FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,

  /**
   * The license request failed.  This could be a timeout, a network failure, or
   * a rejection by the server.
   */
  LICENSE_REQUEST_FAILED: 6007,

  /**
   * The license response was rejected by the CDM.  The server's response may be
   * invalid or malformed for this CDM.
   */
  LICENSE_RESPONSE_REJECTED: 6008,

  /**
   * The manifest does not specify any DRM info, but the content is encrypted.
   * Either the manifest or the manifest parser are broken.
   */
  ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,

  /**
   * No license server was given for the key system signaled by the manifest.
   * A license server URI is required for every key system.
   */
  NO_LICENSE_SERVER_GIVEN: 6012,

  /**
   * A required offline session was removed.  The content is not playable.
   */
  OFFLINE_SESSION_REMOVED: 6013,

  /**
   * The license has expired.  This is triggered when playback is stalled on a
   * 'waitingforkeys' event and there are any expired keys in the key status map
   * of any active session.
   */
  EXPIRED: 6014,

  /**
   * DRM
   */
  BAD_FAIRPLAY_RESPONSE: 6015,

  /**
   * DRM
   */
  COULD_NOT_CREATE_MEDIA_KEYS: 6016,

  /**
   * DRM
   */
  COULD_NOT_CREATE_KEY_SESSION: 6017,

  /**
   * The call to Player.load() was interrupted by a call to Player.unload()
   * or another call to Player.load().
   */
  LOAD_INTERRUPTED: 7000,

  /**
   * HLSJS levelSwitchError - bitrate switch issue
   */
  BITRATE_SWITCH_ISSUE: 7001,

  /**
   * The call to Player.load() failed. see other data for more details.
   */
  LOAD_FAILED: 7002,

  /**
   * Build error. unregistered plugin
   */
  RUNTIME_ERROR_NOT_REGISTERED_PLUGIN: 7003,

  /**
   * Build error. Unimplemnted method
   */
  RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED: 7004,

  /**
   * Build error. not a valid handler
   */
  RUNTIME_ERROR_NOT_VALID_HANDLER: 7005,

  /**
   * When the play API called without any source
   */
  NO_SOURCE_PROVIDED: 7006,

  /**
   * When the load API called without compatible engine to play the source
   */
  NO_ENGINE_FOUND_TO_PLAY_THE_SOURCE: 7007,

  /**
   * An error occurred while trying to enter picture in picture mode, more info in the data
   */
  ENTER_PICTURE_IN_PICTURE_FAILED: 7008,

  /**
   * An error occurred while trying to exit picture in picture mode, more info in the data
   */
  EXIT_PICTURE_IN_PICTURE_FAILED: 7009,

  /**
   * An error occurred while trying to init a plugin. The plugin not initialized.
   */
  PLUGIN_LOAD_FAILED: 7010,

  /**
   * The Cast API is unavailable.  This may be because of one of the following:
   * - The browser may not have Cast support
   * - The browser may be missing a necessary Cast extension
   * - The Cast sender library may not be loaded in your app
   */
  CAST_API_UNAVAILABLE: 8000,

  /**
   * No cast receivers are available at this time.
   */
  NO_CAST_RECEIVERS: 8001,

  /**
   * The library is already casting.
   */
  ALREADY_CASTING: 8002,

  /**
   * A Cast SDK error that we did not explicitly plan for has occurred.
   * Check data[0] and refer to the Cast SDK documentation for details.
   */
  UNEXPECTED_CAST_ERROR: 8003,

  /**
   * The cast operation was canceled by the user.
   */
  CAST_CANCELED_BY_USER: 8004,

  /**
   * The cast connection timed out.
   */
  CAST_CONNECTION_TIMED_OUT: 8005,

  /**
   * The requested receiver app ID does not exist or is unavailable.
   * Check the requested app ID for typos.
   */
  CAST_RECEIVER_APP_UNAVAILABLE: 8006,

  /**
   * Offline storage is not supported on this browser; it is required for
   * offline support.
   */
  STORAGE_NOT_SUPPORTED: 9000,

  /**
   * An unknown error occurred in the IndexedDB.
   * On Firefox, one common source for UnknownError calls is reverting
   * Firefox to an old version. This makes the indexedDB storage inaccessible
   * for older versions. The only way to fix this is to delete the storage
   * data in your profile. See https://goo.gl/eKVPPe.
   */
  INDEXED_DB_ERROR: 9001,

  /**
   * The operation was aborted.  For example, by a call to destroy().
   */
  OPERATION_ABORTED: 9002,

  /**
   * The specified item was not found in the IndexedDB.
   */
  REQUESTED_ITEM_NOT_FOUND: 9003,

  /**
   * A network request was made with a malformed offline URI.
   */
  MALFORMED_OFFLINE_URI: 9004,

  /**
   * The specified content is live or in-progress.
   */
  CANNOT_STORE_LIVE_OFFLINE: 9005,

  /**
   * There is already a store operation in-progress, wait until it completes
   * before starting another.
   */
  STORE_ALREADY_IN_PROGRESS: 9006,

  /**
   * The specified manifest is encrypted but does not specify any init data.
   * Without init data specified in the manifest, the content will not be
   * playable offline.
   */
  NO_INIT_DATA_FOR_OFFLINE: 9007,

  /**
   * shaka.offline.Storage was constructed with a Player proxy instead of a
   * local player instance.  To fix this, use Player directly with Storage
   * instead of the results of CastProxy.prototype.getPlayer().
   */
  LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,

  /**
   * When the manifest contains no period playable streams, it means the
   * manifest is unsupported by the browser.
   */
  CONTENT_UNSUPPORTED_BY_BROWSER: 9009,

  /**
   * Cannot add Item to the indexed db
   */
  CANNOT_ADD_ITEM: 9010,

  /**
   * Download operation aborted.
   */
  DOWNLOAD_FAILED: 9011,

  /**
   * Fetching the entry provider information failed.
   */
  COULD_NOT_GET_INFO_FROM_MEDIA_PROVIDER: 9012,

  /**
   * Could not find the entry id in the DB.
   */
  ENTRY_DOES_NOT_EXIST: 9013,

  /**
   * Pause operation failed
   */
  PAUSE_FAILED: 9014,

  /**
   * Resume operation failed
   */
  RESUME_FAILED: 9015,

  /**
   * Renewing the license of the entry failed
   */
  RENEW_LICENSE_FAILED: 9016,

  /**
   * Could not download the entry as it already exists in the data base.
   */
  ENTRY_ALREADY_EXISTS: 9017,

  /**
   * Could not remove the requested entry
   */
  REMOVE_FAILED: 9018,

  /**
   * Load media failed.
   */
  CAST_LOAD_MEDIA_FAILED: 10001,

  /**
   * Custom message parsing error.
   */
  CAST_CUSTOM_MESSAGE_PARSING_ERROR: 10002,

  /**
   * Edit tracks info error.
   */
  CAST_EDIT_TRACKS_INFO_ERROR: 10003,

  /**
   * VR plugin is not supported.
   */
  VR_NOT_SUPPORTED: 11000
};
Object.assign(Code, _ads_ad_error_code__WEBPACK_IMPORTED_MODULE_0__["AdErrorCode"]);


/***/ }),

/***/ "./error/error.js":
/*!************************!*\
  !*** ./error/error.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/logger */ "./utils/logger.js");
/* harmony import */ var _severity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./severity */ "./error/severity.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./error/code.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ "./error/category.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CLASS_NAME = 'Error';
/**
 * @classdesc This is a description of the error class.
 */

var Error =
/**
 * @enum {number}
 */

/**
 * @enum {number}
 */

/**
 * @enum {number}
 */

/**
 * @constructor
 * @param {number} severity - error's severity
 * @param {number} category - error's category.
 * @param {number} code - error's code.
 * @param {any} data - additional data for the error.
 */
function Error(severity, category, code, data) {
  if (data === void 0) {
    data = {};
  }

  this.severity = severity;
  this.category = category;
  this.code = code;
  this.data = data;

  if (Object(_utils_logger__WEBPACK_IMPORTED_MODULE_0__["getLogLevel"])(CLASS_NAME) !== _utils_logger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].OFF) {
    Error._logger.error("Category:" + category + " | Code:" + code + " |", data);
  }
};

_defineProperty(Error, "Severity", _severity__WEBPACK_IMPORTED_MODULE_1__["Severity"]);

_defineProperty(Error, "Category", _category__WEBPACK_IMPORTED_MODULE_3__["Category"]);

_defineProperty(Error, "Code", _code__WEBPACK_IMPORTED_MODULE_2__["Code"]);

_defineProperty(Error, "_logger", Object(_utils_logger__WEBPACK_IMPORTED_MODULE_0__["default"])(CLASS_NAME));



/***/ }),

/***/ "./error/severity.js":
/*!***************************!*\
  !*** ./error/severity.js ***!
  \***************************/
/*! exports provided: Severity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return Severity; });
var Severity = {
  /**
   * An error occurred, but the Player is attempting to recover from the error.
   *
   * If the Player cannot ultimately recover, it still may not throw a CRITICAL
   * error.  For example, retrying for a media segment will never result in
   * a CRITICAL error (the Player will just retry forever).
   */
  RECOVERABLE: 1,

  /**
   * A critical error that the library cannot recover from.  These usually cause
   * the Player to stop loading or updating.  A new manifest must be loaded
   * to reset the library.
   */
  CRITICAL: 2
};


/***/ }),

/***/ "./event/event-manager.js":
/*!********************************!*\
  !*** ./event/event-manager.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_multi_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/multi-map */ "./utils/multi-map.js");
/* harmony import */ var _fake_event_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-event-target */ "./event/fake-event-target.js");
/* harmony import */ var _fake_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-event */ "./event/fake-event.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/**
 * Creates a new EventManager. An EventManager maintains a collection of "event
 * bindings" between event targets and event listeners.
 *
 * @struct
 * @constructor
 * @implements {IDestroyable}
 */

var EventManager = /*#__PURE__*/function () {
  function EventManager() {
    /**
     * Maps an event type to an array of event bindings.
     * @private {MultiMap.<!EventManager.Binding_>}
     */
    this._bindingMap = new _utils_multi_map__WEBPACK_IMPORTED_MODULE_0__["MultiMap"]();
  }
  /**
   * Detaches all event listeners.
   * @override
   */


  var _proto = EventManager.prototype;

  _proto.destroy = function destroy() {
    this.removeAll();
    this._bindingMap = null;
    return Promise.resolve();
  }
  /**
   * Attaches an event listener to an event target for only one time.
   * @param {EventTarget} target - The event target.
   * @param {string} type - The event type.
   * @param {ListenerType} listener - The event listener.
   * @param {?Object} options - The event options.
   * @returns {void}
   */
  ;

  _proto.listenOnce = function listenOnce(target, type, listener, options) {
    var _this = this;

    var oneListener = function oneListener(event) {
      _this.unlisten(target, type, oneListener);

      listener.call(_this, event);
    };

    this.listen(target, type, oneListener, options);
  }
  /**
   * Attaches an event listener to an event target.
   * @param {EventTarget} target The event target.
   * @param {string} type The event type.
   * @param {ListenerType} listener The event listener.
   * @param {?Object} options The event options.
   * @returns {void}
   */
  ;

  _proto.listen = function listen(target, type, listener, options) {
    var binding = new Binding_(target, type, listener, options);

    if (this._bindingMap) {
      this._bindingMap.push(type, binding);
    }
  }
  /**
   * Detaches an event listener from an event target.
   * @param {EventTarget} target The event target.
   * @param {string} type The event type.
   * @param {ListenerType} [listener] The event listener to detach. If no given, detaches all event listeners of the target and type.
   * @returns {void}
   */
  ;

  _proto.unlisten = function unlisten(target, type, listener) {
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
  ;

  _proto.removeAll = function removeAll() {
    if (this._bindingMap) {
      var listeners = this._bindingMap.getAll();

      for (var _iterator = _createForOfIteratorHelperLoose(listeners), _step; !(_step = _iterator()).done;) {
        var listener = _step.value;
        listener.unlisten();
      }

      if (this._bindingMap) {
        this._bindingMap.clear();
      }
    }
  };

  return EventManager;
}();
/**
 * @typedef {function(!Event)}
 */


/**
 * Creates a new Binding_ and attaches the event listener to the event target.
 * @param {EventTarget} target The event target.
 * @param {string} type The event type.
 * @param {ListenerType} listener The event listener.
 * @constructor
 * @private
 */
var Binding_ = /*#__PURE__*/function () {
  function Binding_(target, type, listener, options) {
    /** @type {EventTarget} */
    this.target = target;
    /** @type {string} */

    this.type = type;
    /** @type {?ListenerType} */

    this.listener = listener;
    /** @type {?Object} */

    this.options = options; //$FlowFixMe

    this.target.addEventListener(type, listener, false);
  }
  /**
   * Detaches the event listener from the event target. This does nothing if the
   * event listener is already detached.
   * @returns {void}
   */


  var _proto2 = Binding_.prototype;

  _proto2.unlisten = function unlisten() {
    if (!this.target) return;
    this.target.removeEventListener(this.type, this.listener, this.options);
    this.target = null;
    this.listener = null;
    this.options = null;
  };

  return Binding_;
}();

/* harmony default export */ __webpack_exports__["default"] = (EventManager);

/***/ }),

/***/ "./event/event-type.js":
/*!*****************************!*\
  !*** ./event/event-type.js ***!
  \*****************************/
/*! exports provided: EventType, Html5EventType, CustomEventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html5EventType", function() { return Html5EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEventType", function() { return CustomEventType; });
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");
/* harmony import */ var _ads_ad_event_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ads/ad-event-type */ "./ads/ad-event-type.js");


var Html5EventType = {
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
var CustomEventType = {
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
   * Fires when browser fails to play.
   */
  PLAY_FAILED: 'playfailed',

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
   * Fires when the active image track has been changed.
   */
  IMAGE_TRACK_CHANGED: 'imagetrackchanged',

  /**
   * Fires when the text track added to native
   */
  TEXT_TRACK_ADDED: 'texttrackadded',

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
   * Fired when the timed metadata triggered
   */
  TIMED_METADATA_CHANGE: 'timedmetadatachange',

  /**
   * Fires when new timed metadata added
   */
  TIMED_METADATA_ADDED: 'timedmetadataadded',

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
  USER_GESTURE: 'usergesture',

  /**
   * Fired when the drm license is responded from the DRM server
   */
  DRM_LICENSE_LOADED: 'drmlicenseloaded',

  /**
   * Fired when the source url switched
   */
  SOURCE_URL_SWITCHED: 'sourceurlswitched'
};
var EventType = _utils_util__WEBPACK_IMPORTED_MODULE_0__["Object"].merge([Html5EventType, CustomEventType, _ads_ad_event_type__WEBPACK_IMPORTED_MODULE_1__["AdEventType"]]);


/***/ }),

/***/ "./event/fake-event-target.js":
/*!************************************!*\
  !*** ./event/fake-event-target.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fake-event */ "./event/fake-event.js");
/* harmony import */ var _utils_multi_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/multi-map */ "./utils/multi-map.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/logger */ "./utils/logger.js");



/**
 * A work-alike for EventTarget.  Only DOM elements may be true EventTargets,
 * but this can be used as a base class to provide event dispatch to non-DOM
 * classes.  Only FakeEvents should be dispatched.
 *
 * @struct
 * @constructor
 * @export
 */

var FakeEventTarget = /*#__PURE__*/function () {
  function FakeEventTarget() {
    /**
     * @private {!MultiMap.<FakeEventTarget.EventListener>}
     */
    this._listeners = new _utils_multi_map__WEBPACK_IMPORTED_MODULE_1__["MultiMap"]();
    /**
     * The target of all dispatched events.  Defaults to |this|.
     * @type {FakeEventTarget}
     */

    this.dispatchTarget = this;
    this.__logger = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_2__["default"])('FakeEventTarget');
  }
  /**
   * Add an event listener to this object.
   *
   * @param {string} type The event type to listen for.
   * @param {FakeEventTarget.EventListener} listener The callback or
   *   listener object to invoke.
   * @param {boolean=} opt_capturing Ignored.  FakeEventTargets do not have
   *   parents, so events neither capture nor bubble.
   * @override
   * @export
   */


  var _proto = FakeEventTarget.prototype;

  _proto.addEventListener = function addEventListener(type, listener) {
    this._listeners.push(type, listener);
  }
  /**
   * Remove an event listener from this object.
   *
   * @param {string} type The event type for which you wish to remove a listener.
   * @param {FakeEventTarget.EventListener} listener The callback or
   *   listener object to remove.
   * @param {boolean=} opt_capturing Ignored.  FakeEventTargets do not have
   *   parents, so events neither capture nor bubble.
   * @override
   * @export
   */
  ;

  _proto.removeEventListener = function removeEventListener(type, listener) {
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
  ;

  _proto.dispatchEvent = function dispatchEvent(event) {
    // In many browsers, it is complex to overwrite properties of actual Events.
    // Here we expect only to dispatch FakeEvents, which are simpler.
    //goog.asserts.assert(event instanceof FakeEvent,
    //    'FakeEventTarget can only dispatch FakeEvents!');
    var list = this._listeners.get(event.type) || [];

    for (var i = 0; i < list.length; ++i) {
      // Do this every time, since events can be re-dispatched from handlers.
      //$FlowFixMe - need to cast to event target but can't yet make EventTarget inherited
      event.target = this.dispatchTarget; //$FlowFixMe - need to cast to event target but can't yet make EventTarget inherited

      event.currentTarget = this.dispatchTarget;
      var listener = list[i];

      try {
        // native DOM event handler
        //$FlowFixMe
        if (listener.handleEvent) {
          //$FlowFixMe
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (exception) {
        // Exceptions during event handlers should not affect the caller,
        // but should appear on the console as uncaught, according to MDN:
        // http://goo.gl/N6Ff27
        this.__logger.error("Error occurred when handling event: " + event.type + ".", exception);
      }

      if (event.stopped) {
        break;
      }
    }

    return event.defaultPrevented;
  };

  return FakeEventTarget;
}();
/**
 * These are the listener types defined in the closure extern for EventTarget.
 * @typedef {EventListener|function(!Event):(boolean|undefined)}
 */


/* harmony default export */ __webpack_exports__["default"] = (FakeEventTarget);

/***/ }),

/***/ "./event/fake-event.js":
/*!*****************************!*\
  !*** ./event/fake-event.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Create an Event work-alike object based on the dictionary.
 * The event should contain all of the same properties from the dict.
 * @param {string} type -
 * @param {Object=} opt_dict -
 * @constructor
 * @extends {Event}
 */
var FakeEvent = /*#__PURE__*/function () {
  /** @const {boolean} */

  /** @const {boolean} */

  /** @const {boolean} */

  /**
   * According to MDN, Chrome uses high-res timers instead of epoch time.
   * Follow suit so that timeStamps on FakeEvents use the same base as
   * on native Events.
   * @const {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp
   */

  /** @const {string} */

  /** @const {boolean} */

  /** @type {EventTarget} */

  /** @type {EventTarget} */

  /**
   * Non-standard property read by FakeEventTarget to stop processing listeners.
   * @type {boolean}
   */
  function FakeEvent(type, payload) {
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


  var _proto = FakeEvent.prototype;

  _proto.preventDefault = function preventDefault() {}
  /**
   * Stops processing event listeners for this event.  Provided for compatibility
   * with native Events.
   * @override
   */
  ;

  _proto.stopImmediatePropagation = function stopImmediatePropagation() {
    this.stopped = true;
  }
  /**
   * Does nothing, since FakeEvents do not bubble.  Provided for compatibility
   * with native Events.
   * @override
   */
  ;

  _proto.stopPropagation = function stopPropagation() {};

  return FakeEvent;
}();

/* harmony default export */ __webpack_exports__["default"] = (FakeEvent);

/***/ }),

/***/ "./fullscreen/fullscreen-controller.js":
/*!*********************************************!*\
  !*** ./fullscreen/fullscreen-controller.js ***!
  \*********************************************/
/*! exports provided: FullscreenController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenController", function() { return FullscreenController; });
/* harmony import */ var _event_event_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event/event-manager */ "./event/event-manager.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "./player.js");
/* harmony import */ var _event_fake_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event/fake-event */ "./event/fake-event.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");
/* harmony import */ var _enums_screen_orientation_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/screen-orientation-type */ "./enums/screen-orientation-type.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * The IOS fullscreen class name.
 * @type {string}
 * @const
 */

var IN_BROWSER_FULLSCREEN = 'playkit-in-browser-fullscreen-mode';
var EXIT_PIP_TIMEOUT = 1000;
/**
 * @class FullscreenController
 * @param {Player} player - The player.
 */

var FullscreenController = /*#__PURE__*/function () {
  // Flag to indicate that player is in fullscreen(when different element on fullscreen - api return correct state).
  // Not relevant for IOS
  // Flag to overcome browsers which supports more than one fullscreenchange event

  /**
   * after component mounted, set up event listeners to window fullscreen state change
   * @param {Player} player - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  function FullscreenController(player) {
    _defineProperty(this, "_isElementInFullscreen", false);

    _defineProperty(this, "_isScreenLocked", false);

    _defineProperty(this, "_isScreenOrientationSupport", // $FlowFixMe
    !!screen && !!screen.orientation && typeof screen.orientation.unlock === 'function' && typeof screen.orientation.lock === 'function');

    _defineProperty(this, "_isFullscreenEventDispatched", false);

    this._player = player; //flag to cover the option that inBrowserFullscreen selected and we should know if it's full screen

    this._isInBrowserFullscreen = false;
    this._eventManager = new _event_event_manager__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  /**
   * if native fullscreen mode
   * @memberof FullScreenController
   * @returns {boolean} - the current fullscreen state of the document
   */


  var _proto = FullscreenController.prototype;

  _proto._isNativeDocumentFullscreen = function _isNativeDocumentFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
  }
  /**
   * if native ios fullscreen mode
   * @memberof FullScreenController
   * @returns {boolean} - the current fullscreen state of the video element in ios
   */
  ;

  _proto._isIOSFullscreen = function _isIOSFullscreen() {
    //for ios mobile checking video element
    var videoElement = typeof this._player.getVideoElement === 'function' ? this._player.getVideoElement() : null; // $FlowFixMe for ios mobile

    return this._player.env.os.name === 'iOS' && !!videoElement && (videoElement.webkitPresentationMode === 'fullscreen' || !videoElement.webkitPresentationMode && videoElement.webkitDisplayingFullscreen);
  }
  /**
   * if fullscreen mode
   * @memberof FullScreenController
   * @returns {boolean} - the current fullscreen state of the document
   */
  ;

  _proto.isFullscreen = function isFullscreen() {
    return this._isNativeDocumentFullscreen() && this._isElementInFullscreen || this._isIOSFullscreen() || //indicator for manually full screen in ios - with css flag
    this._isInBrowserFullscreen;
  }
  /**
   * if mobile detected, get the video element and request fullscreen.
   * otherwise, request fullscreen to the parent player view than includes the GUI as well
   * @param {?string} elementId - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto.enterFullscreen = function enterFullscreen(elementId) {
    if (!this.isFullscreen()) {
      this.registerFullScreenEvents();
      var fullScreenElement = elementId && _utils_util__WEBPACK_IMPORTED_MODULE_3__["Dom"].getElementById(elementId);
      var playbackConfig = this._player.config.playback;

      if (!fullScreenElement) {
        fullScreenElement = this._player.getView();
      }

      if (this._player.env.os.name === 'iOS') {
        if (playbackConfig.inBrowserFullscreen && playbackConfig.playsinline) {
          this._enterInBrowserFullscreen(fullScreenElement);
        } else {
          var videoElement = this._player.getVideoElement();

          if (videoElement && typeof videoElement.webkitEnterFullScreen === 'function') {
            if (this._player.isInPictureInPicture()) {
              // iOS < 13 (iPad) has an issue to enter to full screen from PiP
              setTimeout(function () {
                return videoElement.webkitEnterFullScreen();
              }, EXIT_PIP_TIMEOUT);

              this._player.exitPictureInPicture();
            } else {
              videoElement.webkitEnterFullScreen();
            }
          }
        }
      } else {
        this._requestFullscreen(fullScreenElement);
      }
    }
  }
  /**
   * exit fullscreen cross platform function
   *
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto.exitFullscreen = function exitFullscreen() {
    if (this.isFullscreen()) {
      if (this._player.env.os.name === 'iOS') {
        // player will be in full screen with this flag or otherwise will be natively full screen
        if (this._isInBrowserFullscreen) {
          this._exitInBrowserFullscreen();
        } else {
          var videoElement = this._player.getVideoElement();

          if (videoElement && typeof videoElement.webkitExitFullscreen === 'function') {
            videoElement.webkitExitFullscreen();
          }
        }
      } else {
        this._requestExitFullscreen();
      }
    }
  }
  /**
   * get native fullscreen function response
   *
   * @param {HTMLElement} fullScreenElement - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto._nativeEnterFullScreen = function _nativeEnterFullScreen(fullScreenElement) {
    if (typeof fullScreenElement.requestFullscreen === 'function') {
      return fullScreenElement.requestFullscreen();
    } else if (typeof fullScreenElement.mozRequestFullScreen === 'function') {
      return fullScreenElement.mozRequestFullScreen();
    } else if (typeof fullScreenElement.webkitRequestFullScreen === 'function') {
      return fullScreenElement.webkitRequestFullScreen();
    } else if (typeof fullScreenElement.msRequestFullscreen === 'function') {
      return fullScreenElement.msRequestFullscreen();
    }
  }
  /**
   * request fullscreen function to all browsers
   *
   * @param {HTMLElement} fullScreenElement - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto._requestFullscreen = function _requestFullscreen(fullScreenElement) {
    var _this = this;

    if (this._player.isInPictureInPicture()) {
      this._player.exitPictureInPicture();
    }

    Promise.resolve(this._nativeEnterFullScreen(fullScreenElement)).then(function () {
      _this._isElementInFullscreen = true;
      var screenLockOrientionMode = _utils_util__WEBPACK_IMPORTED_MODULE_3__["Object"].getPropertyPath(_this._player, 'config.playback.screenLockOrientionMode');
      var validOrientation = screenLockOrientionMode !== _enums_screen_orientation_type__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientationType"].NONE && Object.values(_enums_screen_orientation_type__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientationType"]).includes(screenLockOrientionMode);

      if (_this._isScreenOrientationSupport && validOrientation) {
        screen.orientation // $FlowFixMe
        .lock(screenLockOrientionMode).then(function () {
          return _this._isScreenLocked = true;
        }).catch(function () {
          return _this._isScreenLocked = false;
        });
      }
    }, function () {});
  }
  /**
   * get native fullscreen function response
   *
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto._nativeExitFullScreen = function _nativeExitFullScreen() {
    if (typeof document.exitFullscreen === 'function') {
      return document.exitFullscreen();
    } else if (typeof document.webkitExitFullscreen === 'function') {
      return document.webkitExitFullscreen();
    } else if (typeof document.mozCancelFullScreen === 'function') {
      return document.mozCancelFullScreen();
    } else if (typeof document.msExitFullscreen === 'function') {
      return document.msExitFullscreen();
    }
  }
  /**
   * request exit from fullscreen function for all browsers
   *
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto._requestExitFullscreen = function _requestExitFullscreen() {
    var _this2 = this;

    Promise.resolve(this._nativeExitFullScreen()).then(function () {
      _this2._isElementInFullscreen = false;

      if (_this2._isScreenOrientationSupport && _this2._isScreenLocked) {
        // $FlowFixMe
        screen.orientation.unlock();
        _this2._isScreenLocked = false;
      }
    }, function () {});
  }
  /**
   * enter from ios manually method enter to fullscreen with css
   * @memberof FullScreenController
   * @param {HTMLElement} fullScreenElement - element to enter fullscreen
   * @returns {void}
   */
  ;

  _proto._enterInBrowserFullscreen = function _enterInBrowserFullscreen(fullScreenElement) {
    if (this._player.isInPictureInPicture()) {
      this._player.exitPictureInPicture();
    } // add class for fullscreen


    _utils_util__WEBPACK_IMPORTED_MODULE_3__["Dom"].addClassName(fullScreenElement, IN_BROWSER_FULLSCREEN);
    this._isInBrowserFullscreen = true;

    this._fullscreenEnterHandler();

    this._player.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_2__["default"](this._player.Event.RESIZE));
  }
  /**
   * exit from ios manually method enter to fullscreen with css
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto._exitInBrowserFullscreen = function _exitInBrowserFullscreen() {
    //get the element with relevant css, otherwise keep the flow of exit manually
    var fullScreenElement = _utils_util__WEBPACK_IMPORTED_MODULE_3__["Dom"].getElementBySelector('.' + IN_BROWSER_FULLSCREEN);

    if (fullScreenElement) {
      _utils_util__WEBPACK_IMPORTED_MODULE_3__["Dom"].removeClassName(fullScreenElement, IN_BROWSER_FULLSCREEN);
    }

    this._isInBrowserFullscreen = false;

    this._fullscreenExitHandler();

    this._player.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_2__["default"](this._player.Event.RESIZE));
  }
  /**
   * set up event listeners to window fullscreen state change
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto.registerFullScreenEvents = function registerFullScreenEvents() {
    var _this3 = this;

    if (this._player.env.os.name === 'iOS') {
      this._handleIosFullscreen();
    } else {
      this._eventManager.listen(document, 'webkitfullscreenchange', function () {
        return _this3._fullscreenChangeHandler();
      });

      this._eventManager.listen(document, 'mozfullscreenchange', function () {
        return _this3._fullscreenChangeHandler();
      });

      this._eventManager.listen(document, 'fullscreenchange', function () {
        return _this3._fullscreenChangeHandler();
      });

      this._eventManager.listen(document, 'MSFullscreenChange', function () {
        return _this3._fullscreenChangeHandler();
      });
    }
  }
  /**
   * Handle iOS full screen changes
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto._handleIosFullscreen = function _handleIosFullscreen() {
    var _this4 = this;

    /**
     * Attach listeners to ios full screen change.
     * @returns {void}
     */
    var attachIosFullscreenListeners = function attachIosFullscreenListeners() {
      var vidEl = _this4._player.getVideoElement();

      if (vidEl) {
        _this4._eventManager.listen(vidEl, 'webkitbeginfullscreen', function () {
          return _this4._fullscreenEnterHandler();
        });

        _this4._eventManager.listen(vidEl, 'webkitendfullscreen', function () {
          return _this4._fullscreenExitHandler();
        });
      }
    };

    if (this._player.getVideoElement()) {
      attachIosFullscreenListeners();
    } else {
      this._eventManager.listenOnce(this._player, this._player.Event.SOURCE_SELECTED, function () {
        return attachIosFullscreenListeners();
      });
    }
  }
  /**
   * fullscreen change handler function.
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto._fullscreenChangeHandler = function _fullscreenChangeHandler() {
    //fire player event for current state, if player is in fullscreen fire player fullscreen event otherwise exit
    this.isFullscreen() ? this._fullscreenEnterHandler() : this._fullscreenExitHandler();
  }
  /**
   * fullscreen enter handler function.
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto._fullscreenEnterHandler = function _fullscreenEnterHandler() {
    if (this.isFullscreen() && !this._isFullscreenEventDispatched) {
      this._isFullscreenEventDispatched = true;

      this._player.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_2__["default"](this._player.Event.ENTER_FULLSCREEN));
    }
  }
  /**
   * fullscreen exit handler function.
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto._fullscreenExitHandler = function _fullscreenExitHandler() {
    if (!this.isFullscreen() && this._isFullscreenEventDispatched) {
      this._isFullscreenEventDispatched = false;

      this._eventManager.removeAll();

      this._player.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_2__["default"](this._player.Event.EXIT_FULLSCREEN));
    }
  }
  /**
   * Destroys the FullScreenController.
   * @returns {void}
   * @public
   */
  ;

  _proto.destroy = function destroy() {
    this._eventManager.destroy();
  };

  return FullscreenController;
}();



/***/ }),

/***/ "./middleware/base-middleware.js":
/*!***************************************!*\
  !*** ./middleware/base-middleware.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseMiddleware; });
/**
 * Base middleware.
 * @classdesc
 */
var BaseMiddleware = /*#__PURE__*/function () {
  function BaseMiddleware() {}

  var _proto = BaseMiddleware.prototype;

  /**
   * Id of the middleware instance.
   * @public
   */

  /**
   * Calls the next handler in the middleware chain.
   * @param {Function} next - The next handler in the middleware chain.
   * @returns {void}
   */
  _proto.callNext = function callNext(next) {
    if (next) {
      next();
    }
  };

  return BaseMiddleware;
}();



/***/ }),

/***/ "./middleware/middleware.js":
/*!**********************************!*\
  !*** ./middleware/middleware.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Middleware; });
/* harmony import */ var _utils_multi_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/multi-map */ "./utils/multi-map.js");
/* harmony import */ var _base_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-middleware */ "./middleware/base-middleware.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/logger */ "./utils/logger.js");



/**
 * Generic middleware implementation.
 */

var Middleware = /*#__PURE__*/function () {
  /**
   * The registered middlewares.
   * @private
   * @member
   */

  /**
   * The actions supported by the middleware.
   * @private
   * @member
   */

  /**
   * The logger of the middleware.
   * @private
   * @member
   */

  /**
   * @constructor
   * @param {Object} actions - The actions for the middleware.
   */
  function Middleware(actions) {
    this._actions = actions;
    this._middlewares = new _utils_multi_map__WEBPACK_IMPORTED_MODULE_0__["MultiMap"]();
    this._logger = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_2__["default"])('Middleware');
  }
  /**
   * Registers a middleware instance to the middleware chain.
   * @param {BaseMiddleware} middlewareInstance - The middleware instance.
   * @public
   * @returns {void}
   */


  var _proto = Middleware.prototype;

  _proto.use = function use(middlewareInstance) {
    for (var _action in this._actions) {
      var apiAction = this._actions[_action]; // $FlowFixMe

      if (typeof middlewareInstance[apiAction] === 'function') {
        this._logger.debug("Register <" + middlewareInstance.id + "> for action " + apiAction); // $FlowFixMe


        this._middlewares.push(apiAction, middlewareInstance[apiAction].bind(middlewareInstance));
      }
    }
  }
  /**
   * Runs a middleware chain for a specific action.
   * @param {string} action - The action to run.
   * @param {Function} callback - The callback function.
   * @param {Array<any>} params - The action params.
   * @public
   * @returns {void}
   */
  ;

  _proto.run = function run(action, callback) {
    var _this = this;

    this._logger.debug('Start middleware chain for action ' + action);

    var middlewares = this._middlewares.get(action);

    for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      params[_key - 2] = arguments[_key];
    }

    this._executeMiddleware(middlewares, function () {
      _this._logger.debug('Finish middleware chain for action ' + action);

      callback.apply(void 0, arguments);
    }, params);
  }
  /**
   * Executes all the middlewares one by one.
   * @param {Array<Function>} middlewares - The middlewares for a specific action.
   * @param {Function} callback - The callback function.
   * @param {Array<any>} origParams - The original action params.
   * @private
   * @returns {void}
   */
  ;

  _proto._executeMiddleware = function _executeMiddleware(middlewares, callback, origParams) {
    var params = origParams;

    var applyFunc = function applyFunc(fn, prevParams, next) {
      var _params;

      if (prevParams == null ? void 0 : prevParams.length) {
        params = prevParams;
      }

      ((_params = params) == null ? void 0 : _params.length) ? fn.apply(void 0, params.concat([next])) : fn(next);
    };

    var composition = middlewares.reduceRight(function (next, fn) {
      return function () {
        for (var _len2 = arguments.length, prevParams = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          prevParams[_key2] = arguments[_key2];
        }

        applyFunc(fn, prevParams, next);
      };
    }, function () {
      for (var _len3 = arguments.length, prevParams = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        prevParams[_key3] = arguments[_key3];
      }

      applyFunc(callback, prevParams);
    });
    composition();
  };

  return Middleware;
}();



/***/ }),

/***/ "./middleware/playback-middleware.js":
/*!*******************************************!*\
  !*** ./middleware/playback-middleware.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlaybackMiddleware; });
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./middleware */ "./middleware/middleware.js");
/* harmony import */ var _base_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-middleware */ "./middleware/base-middleware.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * The playback middleware.
 */

var PlaybackMiddleware = /*#__PURE__*/function () {
  /**
   * The actions of the playback middleware.
   * @static
   */

  /**
   * @constructor
   */
  function PlaybackMiddleware() {
    this._middleware = new _middleware__WEBPACK_IMPORTED_MODULE_0__["default"](PlaybackMiddleware.Actions);
  }
  /**
   * Registers a playback middleware instance to the middleware chain.
   * @param {BaseMiddleware} middlewareInstance - The middleware instance.
   * @public
   * @returns {void}
   */


  var _proto = PlaybackMiddleware.prototype;

  _proto.use = function use(middlewareInstance) {
    this._middleware.use(middlewareInstance);
  }
  /**
   * Runs a load chain.
   * @param {Function} callback - The last load handler in the chain.
   * @public
   * @returns {void}
   */
  ;

  _proto.load = function load(callback) {
    this._middleware.run(PlaybackMiddleware.Actions.LOAD, callback);
  }
  /**
   * Runs a play chain.
   * @param {Function} callback - The last play handler in the chain.
   * @public
   * @returns {void}
   */
  ;

  _proto.play = function play(callback) {
    this._middleware.run(PlaybackMiddleware.Actions.PLAY, callback);
  }
  /**
   * Runs a pause chain.
   * @param {Function} callback - The last pause handler in the chain.
   * @public
   * @returns {void}
   */
  ;

  _proto.pause = function pause(callback) {
    this._middleware.run(PlaybackMiddleware.Actions.PAUSE, callback);
  }
  /**
   * Runs a setCurrentTime chain.
   * @param {Number} to - The number to set in seconds.
   * @param {Function} callback - The last setCurrentTime handler in the chain.
   * @public
   * @returns {void}
   */
  ;

  _proto.setCurrentTime = function setCurrentTime(to, callback) {
    this._middleware.run(PlaybackMiddleware.Actions.SET_CURRENT_TIME, callback, to);
  };

  return PlaybackMiddleware;
}();

_defineProperty(PlaybackMiddleware, "Actions", {
  LOAD: 'load',
  PLAY: 'play',
  PAUSE: 'pause',
  SET_CURRENT_TIME: 'setCurrentTime'
});



/***/ }),

/***/ "./player-config.js":
/*!**************************!*\
  !*** ./player-config.js ***!
  \**************************/
/*! exports provided: DefaultConfig, DefaultSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultConfig", function() { return DefaultConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSources", function() { return DefaultSources; });
/* harmony import */ var _enums_screen_orientation_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums/screen-orientation-type */ "./enums/screen-orientation-type.js");

var DefaultConfig = {
  log: {
    level: 'ERROR'
  },
  text: {
    enableCEA708Captions: true,
    useNativeTextTrack: false,
    forceCenter: false,
    captionsTextTrack1Label: 'English',
    captionsTextTrack1LanguageCode: 'en',
    captionsTextTrack2Label: 'Spanish',
    captionsTextTrack2LanguageCode: 'es'
  },
  playback: {
    audioLanguage: '',
    textLanguage: '',
    volume: 1,
    playsinline: true,
    preload: 'none',
    autoplay: false,
    loop: false,
    autopause: false,
    allowMutedAutoPlay: true,
    muted: false,
    pictureInPicture: true,
    options: {
      html5: {
        hls: {},
        dash: {},
        native: {}
      }
    },
    preferNative: {
      hls: false,
      dash: false
    },
    inBrowserFullscreen: false,
    screenLockOrientionMode: _enums_screen_orientation_type__WEBPACK_IMPORTED_MODULE_0__["ScreenOrientationType"].NONE,
    playAdsWithMSE: false,
    streamPriority: [{
      engine: 'html5',
      format: 'hls'
    }, {
      engine: 'html5',
      format: 'dash'
    }, {
      engine: 'html5',
      format: 'progressive'
    }, {
      engine: 'flash',
      format: 'hls'
    }]
  },
  streaming: {
    forceBreakStall: false
  },
  abr: {
    enabled: true,
    fpsDroppedFramesInterval: 5000,
    fpsDroppedMonitoringThreshold: 0.2,
    capLevelOnFPSDrop: true,
    capLevelToPlayerSize: false,
    restrictions: {
      minHeight: 0,
      maxHeight: Infinity,
      minWidth: 0,
      maxWidth: Infinity,
      minBitrate: 0,
      maxBitrate: Infinity
    }
  },
  drm: {
    keySystem: ''
  },
  network: {
    maxStaleLevelReloads: 20
  }
};
var DefaultSources = {
  options: {},
  metadata: {}
};


/***/ }),

/***/ "./player.js":
/*!*******************!*\
  !*** ./player.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/env */ "./utils/env.js");
/* harmony import */ var _event_event_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event/event-manager */ "./event/event-manager.js");
/* harmony import */ var _utils_poster_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/poster-manager */ "./utils/poster-manager.js");
/* harmony import */ var _event_fake_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event/fake-event */ "./event/fake-event.js");
/* harmony import */ var _event_fake_event_target__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event/fake-event-target */ "./event/fake-event-target.js");
/* harmony import */ var _event_event_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/event-type */ "./event/event-type.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/util */ "./utils/util.js");
/* harmony import */ var _utils_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/locale */ "./utils/locale.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/logger */ "./utils/logger.js");
/* harmony import */ var _state_state_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state/state-manager */ "./state/state-manager.js");
/* harmony import */ var _track_track__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./track/track */ "./track/track.js");
/* harmony import */ var _track_video_track__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./track/video-track */ "./track/video-track.js");
/* harmony import */ var _track_audio_track__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./track/audio-track */ "./track/audio-track.js");
/* harmony import */ var _track_text_track__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./track/text-track */ "./track/text-track.js");
/* harmony import */ var _track_text_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./track/text-style */ "./track/text-style.js");
/* harmony import */ var _track_vtt_cue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./track/vtt-cue */ "./track/vtt-cue.js");
/* harmony import */ var _track_text_track_display__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./track/text-track-display */ "./track/text-track-display.js");
/* harmony import */ var _state_state_type__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./state/state-type */ "./state/state-type.js");
/* harmony import */ var _track_track_type__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./track/track-type */ "./track/track-type.js");
/* harmony import */ var _engines_stream_type__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./engines/stream-type */ "./engines/stream-type.js");
/* harmony import */ var _engines_engine_type__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./engines/engine-type */ "./engines/engine-type.js");
/* harmony import */ var _enums_media_type__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./enums/media-type */ "./enums/media-type.js");
/* harmony import */ var _track_abr_mode_type__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./track/abr-mode-type */ "./track/abr-mode-type.js");
/* harmony import */ var _engines_html5_cors_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./engines/html5/cors-types */ "./engines/html5/cors-types.js");
/* harmony import */ var _middleware_playback_middleware__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./middleware/playback-middleware */ "./middleware/playback-middleware.js");
/* harmony import */ var _player_config_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./player-config.js */ "./player-config.js");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/style.css */ "./assets/style.css");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_style_css__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _error_error__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./error/error */ "./error/error.js");
/* harmony import */ var _engines_engine_provider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./engines/engine-provider */ "./engines/engine-provider.js");
/* harmony import */ var _track_external_captions_handler__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./track/external-captions-handler */ "./track/external-captions-handler.js");
/* harmony import */ var _ads_ad_break_type__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ads/ad-break-type */ "./ads/ad-break-type.js");
/* harmony import */ var _ads_ad_tag_type__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ads/ad-tag-type */ "./ads/ad-tag-type.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./utils */ "./utils/index.js");
/* harmony import */ var _fullscreen_fullscreen_controller__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./fullscreen/fullscreen-controller */ "./fullscreen/fullscreen-controller.js");
/* harmony import */ var _engines_engine_decorator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./engines/engine-decorator */ "./engines/engine-decorator.js");
/* harmony import */ var _track_label_options__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./track/label-options */ "./track/label-options.js");
/* harmony import */ var _enums_auto_play_type__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./enums/auto-play-type */ "./enums/auto-play-type.js");
/* harmony import */ var _track_image_track__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./track/image-track */ "./track/image-track.js");
/* harmony import */ var _thumbnail_thumbnail_info__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./thumbnail/thumbnail-info */ "./thumbnail/thumbnail-info.js");
/* harmony import */ var _engines_engine_decorator_manager__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./engines/engine-decorator-manager */ "./engines/engine-decorator-manager.js");
/* harmony import */ var _utils_restrictions__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./utils/restrictions */ "./utils/restrictions.js");
/* harmony import */ var _thumbnail_external_thumbnails_handler__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./thumbnail/external-thumbnails-handler */ "./thumbnail/external-thumbnails-handler.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











































/**
 * The black cover class name.
 * @type {string}
 * @const
 */

var BLACK_COVER_CLASS_NAME = 'playkit-black-cover';
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
 * The text style class name.
 * @type {string}
 * @const
 */

var SUBTITLES_STYLE_CLASS_NAME = 'playkit-subtitles-style';
/**
 * The subtitles class name.
 * @type {string}
 * @const
 */

var SUBTITLES_CLASS_NAME = 'playkit-subtitles';
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
 * The threshold in seconds from duration that we still consider it as live edge
 * @type {number}
 * @const
 */

var LIVE_EDGE_THRESHOLD = 1;
/**
 * The HTML5 player class.
 * @classdesc
 */

var Player = /*#__PURE__*/function (_FakeEventTarget) {
  _inheritsLoose(Player, _FakeEventTarget);

  /**
   * The player class logger.
   * @type {any}
   * @static
   * @private
   */

  /**
   * Runs the engines capabilities tests.
   * @returns {void}
   * @public
   * @static
   */
  Player.runCapabilities = function runCapabilities() {
    Player._logger.debug('Running player capabilities');

    _engines_engine_provider__WEBPACK_IMPORTED_MODULE_28__["EngineProvider"].getEngines().forEach(function (Engine) {
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
  ;

  Player.getCapabilities = function getCapabilities(engineType) {
    Player._logger.debug('Get player capabilities', engineType);

    var promises = [];
    _engines_engine_provider__WEBPACK_IMPORTED_MODULE_28__["EngineProvider"].getEngines().forEach(function (Engine) {
      return promises.push(Engine.getCapabilities());
    });
    return Promise.all(promises).then(function (arrayOfResults) {
      var playerCapabilities = {};
      arrayOfResults.forEach(function (res) {
        return Object.assign(playerCapabilities, res);
      });
      return engineType ? playerCapabilities[engineType] : playerCapabilities;
    });
  }
  /**
   * Sets an engine capabilities.
   * @param {string} engineType - The engine type.
   * @param {Object} capabilities - The engine capabilities.
   * @returns {void}
   * @public
   * @static
   */
  ;

  Player.setCapabilities = function setCapabilities(engineType, capabilities) {
    Player._logger.debug('Set player capabilities', engineType, capabilities);

    var selectedEngine = _engines_engine_provider__WEBPACK_IMPORTED_MODULE_28__["EngineProvider"].getEngines().find(function (Engine) {
      return Engine.id === engineType;
    });

    if (selectedEngine) {
      selectedEngine.setCapabilities(capabilities);
    }
  }
  /**
   * The event manager of the player.
   * @type {EventManager}
   * @private
   */
  ;

  /**
   * @param {Object} config - The configuration for the player instance.
   * @constructor
   */
  function Player(config) {
    var _this;

    if (config === void 0) {
      config = {};
    }

    _this = _FakeEventTarget.call(this) || this;

    _defineProperty(_assertThisInitialized(_this), "_sources", {});

    _defineProperty(_assertThisInitialized(_this), "_activeTextCues", []);

    _defineProperty(_assertThisInitialized(_this), "_textDisplaySettings", {});

    _defineProperty(_assertThisInitialized(_this), "_playbackAttributesState", {
      muted: undefined,
      volume: undefined,
      rate: undefined,
      videoTrack: undefined,
      audioLanguage: '',
      textLanguage: ''
    });

    _defineProperty(_assertThisInitialized(_this), "_hasUserInteracted", false);

    _defineProperty(_assertThisInitialized(_this), "_isOnLiveEdge", false);

    _defineProperty(_assertThisInitialized(_this), "_shouldLoadAfterAttach", false);

    _this._setConfigLogLevel(config);

    _this._playerId = _utils_util__WEBPACK_IMPORTED_MODULE_6__["Generator"].uniqueId(5);

    _this._prepareVideoElement();

    Player.runCapabilities();
    _this._env = _utils_env__WEBPACK_IMPORTED_MODULE_0__["default"];
    _this._tracks = [];
    _this._firstPlay = true;
    _this._loadingMedia = false;
    _this._loading = false;
    _this._playbackStart = false;
    _this._firstPlaying = false;
    _this._reset = true;
    _this._destroyed = false;
    _this._fallbackToMutedAutoPlay = false;
    _this._config = Player._defaultConfig;
    _this._sources = _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].copyDeep(_player_config_js__WEBPACK_IMPORTED_MODULE_25__["DefaultSources"]);
    _this._eventManager = new _event_event_manager__WEBPACK_IMPORTED_MODULE_1__["default"]();
    _this._posterManager = new _utils_poster_manager__WEBPACK_IMPORTED_MODULE_2__["default"]();
    _this._stateManager = new _state_state_manager__WEBPACK_IMPORTED_MODULE_9__["default"](_assertThisInitialized(_this));
    _this._resizeWatcher = new _utils__WEBPACK_IMPORTED_MODULE_32__["ResizeWatcher"]();
    _this._playbackMiddleware = new _middleware_playback_middleware__WEBPACK_IMPORTED_MODULE_24__["default"]();
    _this._textStyle = new _track_text_style__WEBPACK_IMPORTED_MODULE_14__["default"]();

    _this._createReadyPromise();

    _this._createPlayerContainer();

    _this._appendDomElements();

    _this._externalCaptionsHandler = new _track_external_captions_handler__WEBPACK_IMPORTED_MODULE_29__["ExternalCaptionsHandler"](_assertThisInitialized(_this));
    _this._externalThumbnailsHandler = new _thumbnail_external_thumbnails_handler__WEBPACK_IMPORTED_MODULE_41__["ExternalThumbnailsHandler"]();
    _this._fullscreenController = new _fullscreen_fullscreen_controller__WEBPACK_IMPORTED_MODULE_33__["FullscreenController"](_assertThisInitialized(_this));

    _this.configure(config);

    return _this;
  } // <editor-fold desc="Public API">
  // <editor-fold desc="Playback API">

  /**
   * Configures the player according to a given configuration.
   * @param {Object} config - The configuration for the player instance.
   * @returns {void}
   */


  var _proto = Player.prototype;

  _proto.configure = function configure(config) {
    if (config === void 0) {
      config = {};
    }

    this._setConfigLogLevel(config);

    _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].mergeDeep(this._config, config);

    this._applyTextTrackConfig(config);

    this._applyABRRestriction(config);
  }
  /**
   * Configures the player metadata according to a given configuration.
   * @param {PKMetadataConfigObject} sourcesMetadata - The sources metadata for the player instance.
   * @returns {void}
   */
  ;

  _proto.setSourcesMetadata = function setSourcesMetadata(sourcesMetadata) {
    if (this._sources) {
      if (!this._sources.metadata) {
        this._sources.metadata = {};
      }

      _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].mergeDeep(this._sources.metadata, sourcesMetadata);
    }
  }
  /**
   * Configures the player according to a given configuration.
   * @param {PKSourcesConfigObject} sources - The sources for the player instance.
   * @returns {void}
   */
  ;

  _proto.setSources = function setSources(sources) {
    if (this._hasSources(sources)) {
      this.reset();
      _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].mergeDeep(this._sources, sources);

      this._resizeWatcher.init(_utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].getElementById(this._playerId));

      Player._logger.debug('Change source started');

      this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].CHANGE_SOURCE_STARTED));
      this._reset = false;

      if (this._selectEngineByPriority()) {
        this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].SOURCE_SELECTED, {
          selectedSource: this._sources[this._streamType]
        }));

        this._attachMedia();

        this._handlePlaybackOptions();

        this._posterManager.setSrc(this._sources.poster);

        this._handleDimensions();

        this._handlePreload();

        this._handleAutoPlay();

        Player._logger.debug('Change source ended');

        this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].CHANGE_SOURCE_ENDED));
      } else {
        Player._logger.warn('No playable engines was found to play the given sources');

        this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].ERROR, new _error_error__WEBPACK_IMPORTED_MODULE_27__["default"](_error_error__WEBPACK_IMPORTED_MODULE_27__["default"].Severity.CRITICAL, _error_error__WEBPACK_IMPORTED_MODULE_27__["default"].Category.PLAYER, _error_error__WEBPACK_IMPORTED_MODULE_27__["default"].Code.NO_ENGINE_FOUND_TO_PLAY_THE_SOURCE, 'No Engine Found To Play The Source')));
      }
    } else {
      _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].mergeDeep(this._sources, sources);
    }
  }
  /**
   * The player readiness
   * @public
   * @returns {Promise<*>} - The ready promise
   */
  ;

  _proto.ready = function ready() {
    return this._readyPromise ? this._readyPromise : Promise.resolve();
  }
  /**
   * Load media
   * @public
   * @returns {void}
   */
  ;

  _proto.load = function load() {
    var _this2 = this;

    var loadPlayer = function loadPlayer() {
      if (_this2._engine) {
        _this2._load();
      } else {
        _this2._eventManager.listenOnce(_this2, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].SOURCE_SELECTED, function () {
          return _this2._load();
        });
      }
    };

    if (!this.src) {
      this._playbackMiddleware.load(function () {
        return loadPlayer();
      });
    } else {
      Player._logger.debug('The source has already been loaded. load request ignored');
    }
  }
  /**
   * Start/resume playback.
   * @param {PKPlayOptionsObject} playOptions - additional options to control the play.
   * @param {boolean} playOptions.programmatic - if true, the play call was not initiated by a user gesture and should be handled like auto play.
   * @returns {void}
   * @public
   */
  ;

  _proto.play = function play(playOptions) {
    var _this3 = this;

    if (playOptions && playOptions.programmatic) {
      this._autoPlay();

      return;
    }

    if (!this._playbackStart) {
      this._playbackStart = true;
      this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].PLAYBACK_START));

      if (!this.src) {
        this._prepareVideoElement();
      }

      this.load();
    }

    if (this._engine) {
      this._playbackMiddleware.play(function () {
        return _this3._play();
      });
    } else if (this._loadingMedia) {
      // load media requested but the response is delayed
      this._playbackMiddleware.play(function () {
        return _this3._playAfterAsyncMiddleware();
      });
    } else {
      this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].ERROR, new _error_error__WEBPACK_IMPORTED_MODULE_27__["default"](_error_error__WEBPACK_IMPORTED_MODULE_27__["default"].Severity.CRITICAL, _error_error__WEBPACK_IMPORTED_MODULE_27__["default"].Category.PLAYER, _error_error__WEBPACK_IMPORTED_MODULE_27__["default"].Code.NO_SOURCE_PROVIDED, 'No Source Provided')));
    }
  }
  /**
   * Pause playback.
   * @returns {void}
   * @public
   */
  ;

  _proto.pause = function pause() {
    if (this._engine) {
      this._playbackMiddleware.pause(this._pause.bind(this));
    }
  }
  /**
   * Gets the view of the player (i.e the dom container object).
   * @return {HTMLElement} - The dom container.
   * @public
   */
  ;

  _proto.getView = function getView() {
    return this._el;
  }
  /**
   * @returns {HTMLVideoElement} - The video element.
   * @public
   */
  ;

  _proto.getVideoElement = function getVideoElement() {
    if (this._engine) {
      return this._engine.getVideoElement();
    }
  }
  /**
   * Get video height.
   * @returns {?number} - The intrinsic height of the video.
   * @public
   */
  ;

  /**
   * Resets the necessary components before change media.
   * @public
   * @param {boolean} isChangeMedia - Whether or not this reset triggered due to change media
   * @returns {void}
   */
  _proto.reset = function reset(isChangeMedia) {
    if (isChangeMedia === void 0) {
      isChangeMedia = false;
    }

    if (this._reset) return;
    this.pause(); //make sure all services are reset before engine and engine attributes are reset

    this._externalCaptionsHandler.reset();

    this._externalThumbnailsHandler.reset();

    this._posterManager.reset();

    this._stateManager.reset();

    this._sources = _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].copyDeep(_player_config_js__WEBPACK_IMPORTED_MODULE_25__["DefaultSources"]);
    this._activeTextCues = [];

    this._updateTextDisplay([]);

    this._tracks = [];
    _track_text_track__WEBPACK_IMPORTED_MODULE_13__["default"].reset();

    this._resetStateFlags();

    this._engineType = '';
    this._streamType = '';
    this._pendingSelectedVideoTrack = null;

    if (this._engine) {
      this._engine.reset();
    }

    this.showBlackCover();
    this._reset = true;
    this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].PLAYER_RESET, {
      isChangeMedia: isChangeMedia
    }));

    this._eventManager.removeAll();

    this._resizeWatcher.init(_utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].getElementById(this._playerId));

    this._createReadyPromise();

    this._isOnLiveEdge = false;
    this._shouldLoadAfterAttach = false;
  }
  /**
   * Destroys the player.
   * @returns {void}
   * @public
   */
  ;

  _proto.destroy = function destroy() {
    if (this._destroyed) return; //make sure all services are destroyed before engine and engine attributes are destroyed

    this._externalCaptionsHandler.destroy();

    this._posterManager.destroy();

    this._stateManager.destroy();

    this._fullscreenController.destroy();

    this._activeTextCues = [];
    this._textDisplaySettings = {};
    this._config = {};
    this._tracks = [];
    this._engineType = '';
    this._streamType = '';
    this._readyPromise = null;
    this._pendingSelectedVideoTrack = null;

    this._resetStateFlags();

    this._playbackAttributesState = {};

    if (this._engine) {
      this._engine.destroy();
    }

    if (this._engineDecoratorManager) {
      this._engineDecoratorManager.destroy();
    }

    this._resizeWatcher.destroy();

    if (this._el) {
      _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].removeChild(this._el.parentNode, this._el);
    }

    this._destroyed = true;
    this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].PLAYER_DESTROY));

    this._eventManager.destroy();
  }
  /**
   * Hides the black cover div.
   * @public
   * @returns {void}
   */
  ;

  _proto.hideBlackCover = function hideBlackCover() {
    if (this._blackCoverEl) {
      this._blackCoverEl.style.visibility = 'hidden';
    }
  }
  /**
   * Shows the black cover div.
   * @public
   * @returns {void}
   */
  ;

  _proto.showBlackCover = function showBlackCover() {
    if (this._blackCoverEl) {
      this._blackCoverEl.style.visibility = 'visible';
    }
  }
  /**
   * Attach the engine's media source
   * @public
   * @returns {void}
   */
  ;

  _proto.attachMediaSource = function attachMediaSource() {
    var _this4 = this;

    if (this._engine) {
      this._shouldLoadAfterAttach = true;

      this._engine.attachMediaSource();

      this._eventManager.listenOnce(this, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].CAN_PLAY, function () {
        if (typeof _this4._playbackAttributesState.rate === 'number') {
          _this4.playbackRate = _this4._playbackAttributesState.rate;
        }
      });
    }
  }
  /**
   * detach the engine's media source
   * @public
   * @returns {void}
   */
  ;

  _proto.detachMediaSource = function detachMediaSource() {
    if (this._engine) {
      this.pause();
      this.hideTextTrack();
      this._shouldLoadAfterAttach = false;

      this._createReadyPromise();

      this._engine.detachMediaSource();
    }
  }
  /**
   * detach the engine's media source
   * @public
   * @returns {void}
   * @param {IEngineDecoratorProvider} engineDecoratorProvider - function to create the decorator
   */
  ;

  _proto.registerEngineDecoratorProvider = function registerEngineDecoratorProvider(engineDecoratorProvider) {
    if (!this._engineDecoratorManager) {
      this._engineDecoratorManager = new _engines_engine_decorator_manager__WEBPACK_IMPORTED_MODULE_39__["EngineDecoratorManager"]();
    }

    if (engineDecoratorProvider) {
      this._engineDecoratorManager.register(engineDecoratorProvider);
    }
  }
  /**
   * Get the first buffered range of the engine.
   * @returns {TimeRanges} - First buffered range of the engine in seconds.
   * @public
   */
  ;

  _proto._getTargetElement = function _getTargetElement() {
    return _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].getElementById(this._config.targetId);
  }
  /**
   * Get the dimensions of the player.
   * @returns {PKPlayerDimensions} - The dimensions of the player.
   * @public
   */
  ;

  // </editor-fold>
  // <editor-fold desc="Live API">

  /**
   * Checking if the current playback is live.
   * @function isLive
   * @returns {boolean} - Whether playback is live.
   * @public
   */
  _proto.isLive = function isLive() {
    return !!(this._sources.type !== _enums_media_type__WEBPACK_IMPORTED_MODULE_21__["MediaType"].VOD && (this._sources.type === _enums_media_type__WEBPACK_IMPORTED_MODULE_21__["MediaType"].LIVE || this._engine && this._engine.isLive()));
  }
  /**
   * Checking if the current playback is audio only.
   * @function isAudio
   * @returns {boolean} - Whether playback is audio.
   * @private
   */
  ;

  _proto.isAudio = function isAudio() {
    return this._sources.type === _enums_media_type__WEBPACK_IMPORTED_MODULE_21__["MediaType"].AUDIO;
  }
  /**
   * Get whether the video is seeked to live edge in dvr
   * @returns {boolean} - Whether the video is seeked to live edge in dvr
   * @public
   */
  ;

  _proto.isOnLiveEdge = function isOnLiveEdge() {
    if (this._engine && typeof this._engine.isOnLiveEdge === 'function') {
      return this._engine.isOnLiveEdge();
    }

    return this._isOnLiveEdge;
  }
  /**
   * Checking if the current live playback has DVR window.
   * @function isDvr
   * @returns {boolean} - Whether live playback has DVR window.
   * @public
   */
  ;

  _proto.isDvr = function isDvr() {
    return this.isLive() && this._sources.dvr;
  }
  /**
   * Seeking to live edge.
   * @function seekToLiveEdge
   * @returns {void}
   * @public
   */
  ;

  _proto.seekToLiveEdge = function seekToLiveEdge() {
    if (this._engine && this.isLive()) {
      this._engine.seekToLiveEdge();

      this._isOnLiveEdge = true;
    }
  }
  /**
   * Get the start time of DVR window in live playback in seconds.
   * @returns {Number} - start time of DVR window.
   * @public
   */
  ;

  _proto.getStartTimeOfDvrWindow = function getStartTimeOfDvrWindow() {
    return this._engine ? this._engine.getStartTimeOfDvrWindow() : 0;
  } // </editor-fold>
  // <editor-fold desc="Tracks API">

  /**
   * Returns the tracks according to the filter. if no filter given returns the all tracks.
   * @function getTracks
   * @template {Track | AudioTrack | TextTrack | VideoTrack} T
   * @param {string} [type] - a tracks filter, should be 'video', 'audio' or 'text'.
   * @returns {Array<T>} - The parsed tracks.
   * @public
   */
  ;

  _proto.getTracks = function getTracks(type) {
    switch (type) {
      case _track_track_type__WEBPACK_IMPORTED_MODULE_18__["TrackType"].VIDEO:
        return _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].copyDeep(this._getVideoTracks());

      case _track_track_type__WEBPACK_IMPORTED_MODULE_18__["TrackType"].AUDIO:
        return _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].copyDeep(this._getAudioTracks());

      case _track_track_type__WEBPACK_IMPORTED_MODULE_18__["TrackType"].TEXT:
        return _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].copyDeep(this._getTextTracks());

      case _track_track_type__WEBPACK_IMPORTED_MODULE_18__["TrackType"].IMAGE:
        return _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].copyDeep(this._getImageTracks());

      default:
        return _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].copyDeep(this._tracks);
    }
  }
  /**
   * Get an object includes the active video/audio/text tracks
   * @return {{video: VideoTrack, audio: AudioTrack, text: TextTrack}} - The active tracks object
   */
  ;

  _proto.getActiveTracks = function getActiveTracks() {
    return _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].copyDeep({
      video: this._getVideoTracks().find(function (track) {
        return track.active;
      }),
      audio: this._getAudioTracks().find(function (track) {
        return track.active;
      }),
      text: this._getTextTracks().find(function (track) {
        return track.active;
      })
    });
  }
  /**
   * Select a track
   * @function selectTrack
   * @param {?Track} track - the track to select
   * @returns {void}
   * @public
   */
  ;

  _proto.selectTrack = function selectTrack(track) {
    if (this._engine) {
      if (track instanceof _track_video_track__WEBPACK_IMPORTED_MODULE_11__["default"]) {
        this._playbackAttributesState.videoTrack = track;

        if (this._stateManager.currentState.type === _state_state_type__WEBPACK_IMPORTED_MODULE_17__["StateType"].IDLE) {
          this._pendingSelectedVideoTrack = track;
        } else {
          this._engine.selectVideoTrack(track);
        }
      } else if (track instanceof _track_audio_track__WEBPACK_IMPORTED_MODULE_12__["default"]) {
        this._engine.selectAudioTrack(track);
      } else if (track instanceof _track_text_track__WEBPACK_IMPORTED_MODULE_13__["default"]) {
        this._resetTextDisplay();

        if (track.language === OFF) {
          this.hideTextTrack();

          this._externalCaptionsHandler.hideTextTrack();

          this._playbackAttributesState.textLanguage = OFF;
        } else if (track.external) {
          this._engine.hideTextTrack();

          this._externalCaptionsHandler.selectTextTrack(track);
        } else {
          this._externalCaptionsHandler.hideTextTrack();

          this._engine.selectTextTrack(track);
        }
      } else if (track instanceof _track_image_track__WEBPACK_IMPORTED_MODULE_37__["default"]) {
        this._engine.selectImageTrack(track);
      }
    }
  }
  /**
   * Hide the text track
   * @function hideTextTrack
   * @returns {void}
   * @public
   */
  ;

  _proto.hideTextTrack = function hideTextTrack() {
    if (this._engine) {
      this._engine.hideTextTrack();

      this._resetTextDisplay();

      var textTracks = this._getTextTracks();

      var activeTextTrack = textTracks.find(function (track) {
        return track.active === true;
      });

      if (activeTextTrack && activeTextTrack.external) {
        this._externalCaptionsHandler.hideTextTrack();
      }

      textTracks.map(function (track) {
        return track.active = false;
      });
      var textTrack = textTracks.find(function (track) {
        return track.language === OFF;
      });

      if (textTrack) {
        textTrack.active = true;
        this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TEXT_TRACK_CHANGED, {
          selectedTextTrack: textTrack
        }));
      }

      this._playbackAttributesState.textLanguage = OFF;
    }
  }
  /**
   * Show the text track.
   * @returns {void}
   * @public
   */
  ;

  _proto.showTextTrack = function showTextTrack() {
    var textTracks = this._getTextTracks();

    var prevLanguage = this._playbackAttributesState.textLanguage !== OFF && this._playbackAttributesState.textLanguage;

    var prevOrAutoTextLang = prevLanguage || this._getLanguage(textTracks, AUTO, textTracks.find(function (textTrack) {
      return textTrack.default;
    }));

    this._setDefaultTrack(textTracks, prevOrAutoTextLang);
  }
  /**
   * Add text track
   * @function addTextTrack
   * @param {string} kind - Specifies the kind of text track.
   * @param {?string} label - A string specifying the label for the text track.
   * @param {?string} language - A two-letter language code that specifies the language of the text track.
   * @returns {?TextTrack} - A TextTrack Object, which represents the new text track.
   * @public
   */
  ;

  _proto.addTextTrack = function addTextTrack(kind, label, language) {
    if (this._engine && typeof this._engine.addTextTrack === 'function') {
      return this._engine.addTextTrack(kind, label, language);
    }
  }
  /**
   * get the native text tracks
   * @function getNativeTextTracks
   * @returns {Array<TextTrack>} - The native TextTracks array.
   * @public
   */
  ;

  _proto.getNativeTextTracks = function getNativeTextTracks() {
    if (this._engine && typeof this._engine.getNativeTextTracks === 'function') {
      return this._engine.getNativeTextTracks();
    }

    return [];
  }
  /**
   * Enables adaptive bitrate switching.
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   */
  ;

  _proto.enableAdaptiveBitrate = function enableAdaptiveBitrate() {
    if (this._engine) {
      this._engine.enableAdaptiveBitrate();
    }

    this._playbackAttributesState.videoTrack = undefined;
  }
  /**
   * Checking if adaptive bitrate switching is enabled.
   * @function isAdaptiveBitrateEnabled
   * @returns {boolean} - Whether adaptive bitrate is enabled.
   * @public
   */
  ;

  _proto.isAdaptiveBitrateEnabled = function isAdaptiveBitrateEnabled() {
    if (this._engine) {
      return this._engine.isAdaptiveBitrateEnabled();
    }

    return false;
  }
  /**
   * update the ABR restriction config
   * @function _applyABRRestriction
   * @returns {void}
   * @param {Object} config - new config which configure for checking if it relevant config has changed
   * @private
   */
  ;

  _proto._applyABRRestriction = function _applyABRRestriction(config) {
    if (_utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].hasPropertyPath(config, 'abr.restrictions') && this._engine && this._tracks.length) {
      var restrictions = this._config.abr.restrictions;

      var videoTracks = this._tracks.filter(function (track) {
        return track instanceof _track_video_track__WEBPACK_IMPORTED_MODULE_11__["default"];
      });

      var newVideoTracks = Object(_utils_restrictions__WEBPACK_IMPORTED_MODULE_40__["filterTracksByRestriction"])(videoTracks, restrictions);

      if (newVideoTracks.length) {
        var currentVideoTracks = this._tracks.filter(function (track) {
          return track instanceof _track_video_track__WEBPACK_IMPORTED_MODULE_11__["default"] && track.available;
        });

        var tracksHasChanged = !(currentVideoTracks.length === newVideoTracks.length && currentVideoTracks.every(function (element, index) {
          return element.bandwidth === newVideoTracks[index].bandwidth;
        }));

        if (tracksHasChanged) {
          this._engine.applyABRRestriction(restrictions);

          this._tracks.forEach(function (track) {
            if (newVideoTracks.includes(track) || !(track instanceof _track_video_track__WEBPACK_IMPORTED_MODULE_11__["default"])) {
              track.available = true;
            } else {
              track.available = false;
              track.active = false;
            }
          });

          if (!this.getActiveTracks().video) {
            newVideoTracks[0].active = true;
          }

          this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TRACKS_CHANGED, {
            tracks: this._tracks.filter(function (track) {
              return track.available;
            })
          }));
        }
      } else {
        Player._logger.warn('Invalid restriction, Nothing has changed values do not meet the restriction');
      }
    }
  }
  /**
   * update the text track config from current config
   * @function _applyTextTrackConfig
   * @returns {void}
   * @param {Object} config - new config which configure for checking if it relevant config has changed
   * @private
   */
  ;

  _proto._applyTextTrackConfig = function _applyTextTrackConfig(config) {
    if (_utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].hasPropertyPath(config, 'text.textTrackDisplaySetting') || _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].getPropertyPath(config, 'text.forceCenter')) {
      var textDisplaySettings = {};

      if (_utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].hasPropertyPath(this._config, 'text.textTrackDisplaySetting')) {
        textDisplaySettings = _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].mergeDeep(textDisplaySettings, this._config.text.textTrackDisplaySetting);
      }

      if (_utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].getPropertyPath(this._config, 'text.forceCenter')) {
        textDisplaySettings = _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].mergeDeep(textDisplaySettings, {
          position: 'auto',
          align: 'center',
          size: '100'
        });
      }

      this.setTextDisplaySettings(textDisplaySettings);
    }

    try {
      if (_utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].hasPropertyPath(config, 'text.textStyle')) {
        this.textStyle = _track_text_style__WEBPACK_IMPORTED_MODULE_14__["default"].fromJson(this._config.text.textStyle);
      }
    } catch (e) {
      Player._logger.warn(e);
    }
  }
  /**
   *  Returns in-stream thumbnail for a chosen time.
   * @param {number} time - playback time.
   * @public
   * @return {?ThumbnailInfo} - Thumbnail info
   */
  ;

  _proto.getThumbnail = function getThumbnail(time) {
    if (this._externalThumbnailsHandler.isUsingVttThumbnails()) {
      return this._externalThumbnailsHandler.getThumbnail(time);
    } else if (this._engine) {
      return this._engine.getThumbnail(time);
    }

    return null;
  }
  /**
   * update the text display settings
   * @param {PKTextTrackDisplaySettingObject} settings - text cue display settings
   * @public
   * @returns {void}
   */
  ;

  _proto.setTextDisplaySettings = function setTextDisplaySettings(settings) {
    this._textDisplaySettings = _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].mergeDeep(this._textDisplaySettings, settings);

    this._updateCueDisplaySettings();

    for (var i = 0; i < this._activeTextCues.length; i++) {
      this._activeTextCues[i].hasBeenReset = true;
    }

    this._updateTextDisplay(this._activeTextCues);
  };

  // </editor-fold>
  // <editor-fold desc="Fullscreen API">

  /**
   * @returns {boolean} - Whether the player is in fullscreen mode.
   * @public
   */
  _proto.isFullscreen = function isFullscreen() {
    return this._fullscreenController.isFullscreen();
  }
  /**
   * Notify the player that the ui application entered to fullscreen.
   * @public
   * @returns {void}
   */
  ;

  _proto.notifyEnterFullscreen = function notifyEnterFullscreen() {
    if (this.isFullscreen()) {
      this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].ENTER_FULLSCREEN));
    }
  }
  /**
   * Notify the player that the ui application exited from fullscreen.
   * @public
   * @returns {void}
   */
  ;

  _proto.notifyExitFullscreen = function notifyExitFullscreen() {
    if (!this.isFullscreen()) {
      this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].EXIT_FULLSCREEN));
    }
  }
  /**
   * Request the player to enter fullscreen.
   * @public
   * @param {string} elementId - element id to full screen
   * @returns {void}
   */
  ;

  _proto.enterFullscreen = function enterFullscreen(elementId) {
    this._fullscreenController.enterFullscreen(elementId);
  }
  /**
   * Request the player to exit fullscreen.
   * @public
   * @returns {void}
   */
  ;

  _proto.exitFullscreen = function exitFullscreen() {
    this._fullscreenController.exitFullscreen();
  } // </editor-fold>
  // <editor-fold desc="Picture In Picture API">

  /**
   * Request the player to enter picture in picture mode
   * @public
   * @returns {void}
   */
  ;

  _proto.enterPictureInPicture = function enterPictureInPicture() {
    if (this.isFullscreen()) {
      this.exitFullscreen();
    }

    if (this._engine && !this._engine.isInPictureInPicture) {
      this._engine.enterPictureInPicture();
    }
  }
  /**
   * Request the player to exit picture in picture mode
   * @public
   * @returns {void}
   */
  ;

  _proto.exitPictureInPicture = function exitPictureInPicture() {
    if (this._engine && this._engine.isInPictureInPicture) {
      this._engine.exitPictureInPicture();
    }
  }
  /**
   * Check if the player is in picture in picture mode
   * @public
   * @return {boolean} if the player is in picture in picture mode or not
   */
  ;

  _proto.isInPictureInPicture = function isInPictureInPicture() {
    if (this._engine) {
      return this._engine.isInPictureInPicture;
    }

    return false;
  }
  /**
   * Check if picture in picture supported in this environment
   * @public
   * @return {boolean} if the picture in picture feature is supported in this environment
   */
  ;

  _proto.isPictureInPictureSupported = function isPictureInPictureSupported() {
    return !!this._config.playback.pictureInPicture && this._engine.isPictureInPictureSupported();
  } // </editor-fold>
  // <editor-fold desc="VR API">

  /**
   * Checking if the selected source is VR.
   * @returns {boolean} - Whether is VR.
   * @public
   */
  ;

  _proto.isVr = function isVr() {
    return !!this._sources.vr;
  } // </editor-fold>
  // <editor-fold desc="Logger API">

  /**
   * get the log level
   * @param {?string} name - the logger name
   * @returns {Object} - the log level
   */
  ;

  _proto.getLogLevel = function getLogLevel(name) {
    return Object(_utils_logger__WEBPACK_IMPORTED_MODULE_8__["getLogLevel"])(name);
  }
  /**
   * sets the logger level
   * @param {Object} level - the log level
   * @param {?string} name - the logger name
   * @returns {void}
   */
  ;

  _proto.setLogLevel = function setLogLevel(level, name) {
    Object(_utils_logger__WEBPACK_IMPORTED_MODULE_8__["setLogLevel"])(level, name);
  };

  _proto.getDrmInfo = function getDrmInfo() {
    var _this$_engine;

    return (_this$_engine = this._engine) == null ? void 0 : _this$_engine.getDrmInfo();
  } // </editor-fold>
  // </editor-fold>
  // <editor-fold desc="Private Methods">
  // <editor-fold desc="Playback">

  /**
   * Remove the current text track from the player view.
   * @returns {void}
   * @private
   */
  ;

  _proto._resetTextDisplay = function _resetTextDisplay() {
    this._activeTextCues = [];

    this._updateTextDisplay([]);
  }
  /**
   * For browsers which block auto play, use the user gesture to open the video element and enable playing via API.
   * @returns {void}
   * @private
   */
  ;

  _proto._prepareVideoElement = function _prepareVideoElement() {
    var _this5 = this;

    _engines_engine_provider__WEBPACK_IMPORTED_MODULE_28__["EngineProvider"].getEngines().forEach(function (Engine) {
      Engine.prepareVideoElement(_this5._playerId);
    });
  }
  /**
   * Set the config level of the player
   * @returns {void}
   * @param {Object} config - object containing the log level.
   * @private
   */
  ;

  _proto._setConfigLogLevel = function _setConfigLogLevel(config) {
    if (config.log && config.log.level && _utils_logger__WEBPACK_IMPORTED_MODULE_8__["LogLevel"][config.log.level]) {
      Object(_utils_logger__WEBPACK_IMPORTED_MODULE_8__["setLogLevel"])(_utils_logger__WEBPACK_IMPORTED_MODULE_8__["LogLevel"][config.log.level]);
    }

    if (config.log && typeof config.log.handler === 'function') {
      Object(_utils_logger__WEBPACK_IMPORTED_MODULE_8__["setLogHandler"])(config.log.handler);
    }
  }
  /**
   * Check if sources has been received.
   * @param {PKSourcesConfigObject} sources - sources config.
   * @returns {boolean} - Whether sources has been received to the player.
   * @private
   */
  ;

  _proto._hasSources = function _hasSources(sources) {
    if (sources) {
      // $FlowFixMe
      return !!Object.values(_engines_stream_type__WEBPACK_IMPORTED_MODULE_19__["StreamType"]).find(function (type) {
        return sources[type] && sources[type].length > 0;
      });
    }

    return false;
  }
  /**
   * Creates the player container.
   * @private
   * @returns {void}
   */
  ;

  _proto._createPlayerContainer = function _createPlayerContainer() {
    var el = this._el = _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].createElement('div');
    _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].addClassName(el, CONTAINER_CLASS_NAME);
    _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].setAttribute(el, 'id', this._playerId);
    _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].setAttribute(el, 'tabindex', '-1');
  }
  /**
   * Appends the engine's video element to the player's div container.
   * @private
   * @returns {void}
   */
  ;

  _proto._appendEngineEl = function _appendEngineEl() {
    if (this._el) {
      var engineEl = this._engine.getVideoElement();

      var className = "" + ENGINE_CLASS_NAME;
      _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].addClassName(engineEl, className);
      var classNameWithId = ENGINE_CLASS_NAME + "-" + this._engine.id;
      _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].addClassName(engineEl, classNameWithId);
      _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].prependTo(engineEl, this._el);

      if (this._engine.id === 'youtube') {
        this._el.style.zIndex = 1;
      }
    }
  }
  /**
   * Appends DOM elements by the following priority:
   * 1. poster (strongest)
   * 2. black screen
   * 3. subtitles (weakest)
   * @private
   * @returns {void}
   */
  ;

  _proto._appendDomElements = function _appendDomElements() {
    // Append playkit-black-cover
    this._blackCoverEl = _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].createElement('div');
    _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].addClassName(this._blackCoverEl, BLACK_COVER_CLASS_NAME);
    _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].appendChild(this._el, this._blackCoverEl); // Append playkit-poster

    var el = this._posterManager.getElement();

    _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].addClassName(el, POSTER_CLASS_NAME);
    _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].appendChild(this._el, el); // Append playkit-subtitles

    this._textDisplayEl = _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].createElement('div');
    _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].setAttribute(this._textDisplayEl, 'aria-live', 'polite');
    _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].addClassName(this._textDisplayEl, SUBTITLES_CLASS_NAME);
    _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].appendChild(this._el, this._textDisplayEl);
  }
  /**
   * Creates the ready promise.
   * @private
   * @returns {void}
   */
  ;

  _proto._createReadyPromise = function _createReadyPromise() {
    var _this6 = this;

    this._readyPromise = new Promise(function (resolve, reject) {
      _this6._eventManager.listenOnce(_this6, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TRACKS_CHANGED, function () {
        _this6.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].MEDIA_LOADED));

        resolve();
      });

      _this6._eventManager.listen(_this6, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].ERROR, function (event) {
        if (event.payload.severity === _error_error__WEBPACK_IMPORTED_MODULE_27__["default"].Severity.CRITICAL) {
          reject();
        }
      });
    }).catch(function () {// silence the promise rejection, error is handled by the error event
    });
  }
  /**
   * Selects an engine to play a source according to a given stream priority.
   * @return {boolean} - Whether a proper engine was found to play the given sources
   * according to the priority.
   * @private
   */
  ;

  _proto._selectEngineByPriority = function _selectEngineByPriority() {
    var _this7 = this;

    var streamPriority = this._config.playback.streamPriority;
    var preferNative = this._config.playback.preferNative;
    var sources = this._sources;

    var _loop = function _loop() {
      var priority = _step.value;
      var engineId = typeof priority.engine === 'string' ? priority.engine.toLowerCase() : '';
      var format = typeof priority.format === 'string' ? priority.format.toLowerCase() : '';
      var Engine = _engines_engine_provider__WEBPACK_IMPORTED_MODULE_28__["EngineProvider"].getEngines().find(function (Engine) {
        return Engine.id === engineId;
      });

      if (Engine) {
        // $FlowFixMe
        var formatSources = sources[format];

        if (formatSources && formatSources.length > 0) {
          var source = formatSources[0];

          if (Engine.canPlaySource(source, preferNative[format], _this7._config.drm)) {
            Player._logger.debug('Source selected: ', formatSources);

            _this7._loadEngine(Engine, source);

            _this7._engineType = engineId;
            _this7._streamType = format;
            return {
              v: true
            };
          }
        }
      }
    };

    for (var _iterator = _createForOfIteratorHelperLoose(streamPriority), _step; !(_step = _iterator()).done;) {
      var _ret = _loop();

      if (typeof _ret === "object") return _ret.v;
    }

    return false;
  }
  /**
   * Loads the selected engine.
   * @param {IEngineStatic} Engine - The selected engine.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @private
   * @returns {void}
   */
  ;

  _proto._loadEngine = function _loadEngine(Engine, source) {
    if (!this._engine) {
      this._createEngine(Engine, source);

      this._appendEngineEl();
    } else {
      if (this._engine.id === Engine.id) {
        this._engine.restore(source, _extends({}, this._config, {
          sources: this._sources
        }));
      } else {
        this._engine.destroy();

        this._createEngine(Engine, source);

        this._appendEngineEl();
      }
    }
  }
  /**
   * Creates an engine or an engine decorator.
   * @param {IEngine} Engine - The selected engine.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @returns {void}
   * @private
   */
  ;

  _proto._createEngine = function _createEngine(Engine, source) {
    var engine = Engine.createEngine(source, _extends({}, this._config, {
      sources: this._sources
    }), this._playerId);
    this._engine = this._engineDecoratorManager ? new _engines_engine_decorator__WEBPACK_IMPORTED_MODULE_34__["EngineDecorator"](engine, this._engineDecoratorManager) : engine;
  }
  /**
   * Listen to all HTML5 defined events and trigger them on the player
   * @private
   * @returns {void}
   */
  ;

  _proto._attachMedia = function _attachMedia() {
    var _this8 = this;

    if (this._engine) {
      Object.keys(_event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"]).forEach(function (html5Event) {
        _this8._eventManager.listen(_this8._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"][html5Event], function (event) {
          return _this8.dispatchEvent(event);
        });
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].SEEKING, function () {
        if (_this8.isLive()) {
          _this8._isOnLiveEdge = _this8.duration && _this8.currentTime ? _this8.currentTime >= _this8.duration - LIVE_EDGE_THRESHOLD && !_this8.paused : false;
        }
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].SEEKED, function () {
        var browser = _this8._env.browser.name;

        if (browser === 'Edge' || browser === 'IE') {
          _this8._removeTextCuePatch();
        }
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].MEDIA_RECOVERED, function (event) {
        return _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].IMAGE_TRACK_CHANGED, function (event) {
        return _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TEXT_TRACK_ADDED, function (event) {
        return _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].VIDEO_TRACK_CHANGED, function (event) {
        _this8._markActiveTrack(event.payload.selectedVideoTrack);

        return _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].AUDIO_TRACK_CHANGED, function (event) {
        _this8.ready().then(function () {
          return _this8._playbackAttributesState.audioLanguage = event.payload.selectedAudioTrack.language;
        });

        _this8._markActiveTrack(event.payload.selectedAudioTrack);

        _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TEXT_TRACK_CHANGED, function (event) {
        return _this8._onTextTrackChanged(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TRACKS_CHANGED, function (event) {
        return _this8._onTracksChanged(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TEXT_CUE_CHANGED, function (event) {
        return _this8._onCueChange(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].ABR_MODE_CHANGED, function (event) {
        return _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TIMED_METADATA, function (event) {
        return _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TIMED_METADATA_CHANGE, function (event) {
        return _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TIMED_METADATA_ADDED, function (event) {
        return _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].PLAY_FAILED, function (event) {
        _this8._onPlayFailed(event);

        _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].FPS_DROP, function (event) {
        return _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].FRAG_LOADED, function (event) {
        return _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].DRM_LICENSE_LOADED, function (event) {
        return _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].MANIFEST_LOADED, function (event) {
        return _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].MEDIA_RECOVERED, function () {
        return _this8._handleRecovered();
      });

      this._eventManager.listen(this, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].PLAY, this._onPlay.bind(this));

      this._eventManager.listen(this, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].PAUSE, this._onPause.bind(this));

      this._eventManager.listen(this, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].PLAYING, this._onPlaying.bind(this));

      this._eventManager.listen(this, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].ENDED, this._onEnded.bind(this));

      this._eventManager.listen(this, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].MUTE_CHANGE, function () {
        _this8._playbackAttributesState.muted = _this8.muted;
      });

      this._eventManager.listen(this, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].VOLUME_CHANGE, function () {
        _this8._playbackAttributesState.volume = _this8.volume;
      });

      this._eventManager.listen(this, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].RATE_CHANGE, function () {
        _this8._playbackAttributesState.rate = _this8.playbackRate;
      });

      this._eventManager.listen(this, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].ENTER_FULLSCREEN, function () {
        return _this8._resetTextCuesAndReposition();
      });

      this._eventManager.listen(this, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].EXIT_FULLSCREEN, function () {
        return _this8._resetTextCuesAndReposition();
      });

      this._eventManager.listen(this._resizeWatcher, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].RESIZE, function (event) {
        _this8._resetTextCuesAndReposition();

        _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._externalCaptionsHandler, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TEXT_CUE_CHANGED, function (event) {
        return _this8._onCueChange(event);
      });

      this._eventManager.listen(this._externalCaptionsHandler, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TEXT_TRACK_CHANGED, function (event) {
        return _this8._onTextTrackChanged(event);
      });

      this._eventManager.listen(this._externalCaptionsHandler, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].ERROR, function (event) {
        return _this8.dispatchEvent(event);
      });

      this._eventManager.listen(this._externalThumbnailsHandler, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].ERROR, function (event) {
        return _this8.dispatchEvent(event);
      });

      var rootElement = _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].getElementBySelector("#" + this.config.targetId);

      if (rootElement) {
        this._eventManager.listen(rootElement, 'click', function () {
          _this8._hasUserInteracted = true;

          _this8.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].USER_GESTURE));
        }, {
          capture: true
        });
      }
    }
  }
  /**
   * if the media was recovered (after a media failure) then initiate play again (if that was the state before)
   * @returns {void}
   * @private
   */
  ;

  _proto._handleRecovered = function _handleRecovered() {
    if (this._stateManager.currentState.type === _state_state_type__WEBPACK_IMPORTED_MODULE_17__["StateType"].PLAYING) {
      this.play();
    }
  }
  /**
   * The text track changed event object
   * @param {FakeEvent} event - payload with text track
   * @returns {void}
   * @private
   */
  ;

  _proto._onTextTrackChanged = function _onTextTrackChanged(event) {
    var _this9 = this;

    this.ready().then(function () {
      return _this9._playbackAttributesState.textLanguage = event.payload.selectedTextTrack.language;
    });

    this._markActiveTrack(event.payload.selectedTextTrack);

    this.dispatchEvent(event);
  }
  /**
   * Reset the active cues hasBeenReset = true and then reposition it, timeout here is for the screen to
   * finish render the fullscreen
   * @returns {void}
   * @private
   */
  ;

  _proto._resetTextCuesAndReposition = function _resetTextCuesAndReposition() {
    this._engine.resetAllCues();

    this._externalCaptionsHandler.resetAllCues();

    this._updateTextDisplay([]);

    for (var i = 0; i < this._activeTextCues.length; i++) {
      this._activeTextCues[i].hasBeenReset = true;
    }

    this._updateTextDisplay(this._activeTextCues);
  }
  /**
   * Handles the cue text removal issue, when seeking to a time without captions in IE \ edge the previous captions
   * are not removed
   * @returns {void}
   * @private
   */
  ;

  _proto._removeTextCuePatch = function _removeTextCuePatch() {
    var _this10 = this;

    var filteredActiveTextCues = this._activeTextCues.filter(function (textCue) {
      var cueEndTime = textCue._endTime;
      var cueStartTime = textCue._startTime;
      var currTime = _this10.currentTime;

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
  ;

  _proto._handlePlaybackOptions = function _handlePlaybackOptions() {
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

    if (typeof this._config.playback.crossOrigin === 'string') {
      this.crossOrigin = this._config.playback.crossOrigin;
    }

    if (Array.isArray(this._config.playback.playbackRates)) {
      var validPlaybackRates = this._config.playback.playbackRates.filter(function (number, index, self) {
        return number > 0 && number <= 16 && self.indexOf(number) === index;
      }).sort(function (a, b) {
        return a - b;
      });

      if (validPlaybackRates) {
        this._playbackRates = validPlaybackRates;
      }
    }
  }
  /**
   * Handles preload.
   * @returns {void}
   * @private
   */
  ;

  _proto._handlePreload = function _handlePreload() {
    if (this._config.playback.preload === 'auto' && !this._config.playback.autoplay) {
      this.load();
    }
  };

  _proto._autoPlay = function _autoPlay() {
    var _this11 = this;

    var allowMutedAutoPlay = this._config.playback.allowMutedAutoPlay;
    Player.getCapabilities(this.engineType).then(function (capabilities) {
      if (capabilities.autoplay) {
        onAutoPlay();
      } else {
        if (capabilities.mutedAutoPlay) {
          if (_this11.muted && !_this11._fallbackToMutedAutoPlay) {
            onMutedAutoPlay();
          } else if (allowMutedAutoPlay) {
            onFallbackToMutedAutoPlay();
          } else {
            onAutoPlayFailed();
          }
        } else {
          onAutoPlayFailed();
        }
      }
    });

    var onAutoPlay = function onAutoPlay() {
      Player._logger.debug('Start autoplay'); // If the previous state was fallback to muted autoplay:
      // unmute the player and clear the fallback state


      if (_this11._fallbackToMutedAutoPlay) {
        _this11._fallbackToMutedAutoPlay = false;
        _this11.muted = false;
      }

      _this11.play();
    };

    var onMutedAutoPlay = function onMutedAutoPlay() {
      Player._logger.debug('Start muted autoplay');

      _this11.play();
    };

    var onFallbackToMutedAutoPlay = function onFallbackToMutedAutoPlay() {
      Player._logger.debug('Fallback to muted autoplay');

      _this11._fallbackToMutedAutoPlay = true;
      _this11.muted = true;

      _this11.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].FALLBACK_TO_MUTED_AUTOPLAY));

      _this11.play();
    };

    var onAutoPlayFailed = function onAutoPlayFailed() {
      Player._logger.warn('Autoplay failed, pause player');

      _this11._posterManager.show();

      _this11.load();

      _this11.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].AUTOPLAY_FAILED));
    };
  }
  /**
   }
   * Checks auto play configuration and handles initialization accordingly.
   * @returns {void}
   * @private
   */
  ;

  _proto._handleAutoPlay = function _handleAutoPlay() {
    if (this.isAudio() || this._config.playback.autoplay !== _enums_auto_play_type__WEBPACK_IMPORTED_MODULE_36__["AutoPlayType"].TRUE) {
      this._posterManager.show();
    }

    if (this._config.playback.autoplay === _enums_auto_play_type__WEBPACK_IMPORTED_MODULE_36__["AutoPlayType"].TRUE) {
      this._autoPlay();
    }
  }
  /**
   * Play after async ads
   * @private
   * @returns {void}
   */
  ;

  _proto._playAfterAsyncMiddleware = function _playAfterAsyncMiddleware() {
    var _this12 = this;

    if (this._engine) {
      this._play();
    } else {
      this._eventManager.listenOnce(this, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].SOURCE_SELECTED, function () {
        return _this12._play();
      });
    }
  };

  _proto._load = function _load() {
    var _this13 = this;

    var resetFlags = function resetFlags() {
      _this13._loading = false;
      _this13._reset = false;
    };

    if (this._engine && !this.src && !this._loading) {
      this._loading = true;
      var startTime = this._sources.startTime;

      this._engine.load(startTime).then(function (data) {
        if (_this13.isLive() && (startTime === -1 || Number(startTime) >= Number(_this13.duration))) {
          _this13._isOnLiveEdge = true;
        }

        _this13._updateTracks(data.tracks);

        _this13.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TRACKS_CHANGED, {
          tracks: _this13._tracks
        }));

        _this13._externalThumbnailsHandler.load(_this13.sources.thumbnails);
      }).finally(function () {
        resetFlags();
      });
    }
  }
  /**
   * Handles and sets the initial dimensions configuration if such exists.
   * @private
   * @returns {void}
   */
  ;

  _proto._handleDimensions = function _handleDimensions() {
    var dimensions = this.config.dimensions;

    if (_utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].isObject(dimensions) && !_utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].isEmptyObject(dimensions)) {
      this.dimensions = dimensions;
    }
  }
  /**
   * Start/resume the engine playback.
   * @private
   * @returns {void}
   */
  ;

  _proto._play = function _play() {
    var _this14 = this;

    if (this._shouldLoadAfterAttach) {
      this._load();

      this._shouldLoadAfterAttach = false;
    }

    this.ready().then(function () {
      if (_this14._shouldPlayerSeekToLiveEdge()) {
        _this14.seekToLiveEdge();
      }

      _this14._engine.play();
    });
  }
  /**
   * Checking if player should seek to live edge.
   * @returns {boolean} - Whether player should seek to live edge.
   * @private
   */
  ;

  _proto._shouldPlayerSeekToLiveEdge = function _shouldPlayerSeekToLiveEdge() {
    if (this.isLive()) {
      var outOfDvr = !this.isDvr() || typeof this.currentTime === 'number' && this.currentTime < 0;

      if (!this._firstPlay) {
        return outOfDvr;
      } else {
        return !!this.src && !this.isOnLiveEdge();
      }
    }

    return false;
  }
  /**
   * Starts the engine pause.
   * @private
   * @returns {void}
   */
  ;

  _proto._pause = function _pause() {
    this._engine.pause();
  }
  /**
   * Set the current time in seconds.
   * @param {Number} to - The number to set in seconds.
   * @private
   * @returns {void}
   */
  ;

  _proto._setCurrentTime = function _setCurrentTime(to) {
    if (this._engine) {
      if (_utils_util__WEBPACK_IMPORTED_MODULE_6__["Number"].isNumber(to)) {
        var boundedTo = to;

        if (to < 0) {
          boundedTo = 0;
        }

        var safeDuration = this.isLive() ? this._engine.duration : this._engine.duration - DURATION_OFFSET;

        if (boundedTo > safeDuration) {
          boundedTo = safeDuration;
        }

        this._engine.currentTime = boundedTo;
      }
    }
  }
  /**
   * @function _onPause
   * @return {void}
   * @private
   */
  ;

  _proto._onPause = function _onPause() {
    this._isOnLiveEdge = false;
  }
  /**
   * @function _onPlay
   * @return {void}
   * @private
   */
  ;

  _proto._onPlay = function _onPlay() {
    if (this._firstPlay) {
      this._firstPlay = false;
      this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].FIRST_PLAY));
      this.hideBlackCover();

      if (typeof this._playbackAttributesState.rate === 'number') {
        this.playbackRate = this._playbackAttributesState.rate;
      }
    }
  }
  /**
   * @function _onPlaying
   * @return {void}
   * @private
   */
  ;

  _proto._onPlaying = function _onPlaying() {
    if (!this._firstPlaying) {
      this._firstPlaying = true;

      if (!this.isAudio()) {
        this._posterManager.hide();
      }

      this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].FIRST_PLAYING));
    }

    if (this._engine && this._pendingSelectedVideoTrack) {
      this._engine.selectVideoTrack(this._pendingSelectedVideoTrack);

      this._pendingSelectedVideoTrack = null;
    }
  }
  /**
   * @function _onPlayFailed
   * @param {FakeEvent} event - the play failed event
   * @return {void}
   * @private
   */
  ;

  _proto._onPlayFailed = function _onPlayFailed(event) {
    if (this._firstPlay && this._config.playback.autoplay) {
      this._posterManager.show();

      this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].AUTOPLAY_FAILED, event.payload));
    }
  }
  /**
   * @function _onEnded
   * @return {void}
   * @private
   */
  ;

  _proto._onEnded = function _onEnded() {
    if (!this.paused) {
      this._pause();
    }
  }
  /**
   * Resets the state flags of the player.
   * @returns {void}
   * @private
   */
  ;

  _proto._resetStateFlags = function _resetStateFlags() {
    this._loading = false;
    this._firstPlay = true;
    this._loadingMedia = false;
    this._playbackStart = false;
    this._firstPlaying = false;
  }
  /**
   * Calculates the aspect ratio of the player.
   * @param {HTMLDivElement} targetElement - the player root element.
   * @param {PKDimensionsConfig} dimensions - the player dimensions input.
   * @returns {void}
   * @public
   */
  ;

  _proto._calcRatio = function _calcRatio(targetElement, dimensions) {
    if (typeof dimensions.ratio !== 'undefined') {
      this._aspectRatio = dimensions.ratio;
    }

    if (this._aspectRatio) {
      var _this$_aspectRatio$sp = this._aspectRatio.split(':').map(function (r) {
        return Number(r);
      }),
          ratioWidth = _this$_aspectRatio$sp[0],
          ratioHeight = _this$_aspectRatio$sp[1];

      if (dimensions.width || !dimensions.width && !dimensions.height) {
        var height = ratioHeight / ratioWidth * targetElement.clientWidth;
        targetElement.style.height = height + "px";
      } else if (dimensions.height && !dimensions.width) {
        var width = ratioWidth / ratioHeight * targetElement.clientHeight;
        targetElement.style.width = width + "px";
      }
    }
  }
  /**
   * @returns {Object} - The default configuration of the player.
   * @private
   * @static
   */
  ;

  // </editor-fold>
  // <editor-fold desc="Tracks">

  /**
   * handle tracks change
   * @param {FakeEvent} event - the tracks change event payload
   * @private
   * @returns {void}
   */
  _proto._onTracksChanged = function _onTracksChanged(event) {
    this._updateTracks(event.payload.tracks);

    this.dispatchEvent(event);
  }
  /**
   * update the player tracks
   * @param {Array<Track>} tracks - the player tracks
   * @private
   * @returns {void}
   */
  ;

  _proto._updateTracks = function _updateTracks(tracks) {
    Player._logger.debug('Tracks changed', tracks);

    this._tracks = tracks.concat(this._externalCaptionsHandler.getExternalTracks(tracks));

    this._applyABRRestriction(this._config);

    this._addTextTrackOffOption();

    this._maybeSetTracksLabels();

    this._setDefaultTracks();
  }
  /**
   * Returns the tracks according to a type.
   * @function _getTextTracks
   * @template {TextTrack | AudioTrack | VideoTrack} T
   * @param {T} [type] - a tracks type filter.
   * @returns {Array<T>} - The parsed tracks.
   * @private
   */
  ;

  _proto._getTracksByType = function _getTracksByType(type) {
    return this._tracks.reduce(function (arr, track) {
      if (track instanceof type && track.available) {
        arr.push(track);
      }

      return arr;
    }, []);
  }
  /**
   * Returns the image tracks.
   * @function _getImageTracks
   * @returns {Array<ImageTrack>} - The image tracks.
   * @private
   */
  ;

  _proto._getImageTracks = function _getImageTracks() {
    return this._getTracksByType(_track_image_track__WEBPACK_IMPORTED_MODULE_37__["default"]);
  }
  /**
   * Returns the text tracks.
   * @function _getTextTracks
   * @returns {Array<TextTrack>} - The text tracks.
   * @private
   */
  ;

  _proto._getTextTracks = function _getTextTracks() {
    return this._getTracksByType(_track_text_track__WEBPACK_IMPORTED_MODULE_13__["default"]);
  }
  /**
   * Returns the video tracks.
   * @function _getVideoTracks
   * @returns {Array<VideoTrack>} - The video tracks.
   * @private
   */
  ;

  _proto._getVideoTracks = function _getVideoTracks() {
    return this._getTracksByType(_track_video_track__WEBPACK_IMPORTED_MODULE_11__["default"]);
  }
  /**
   * Returns the audio tracks.
   * @function _getAudioTracks
   * @returns {Array<AudioTrack>} - The audio tracks.
   * @private
   */
  ;

  _proto._getAudioTracks = function _getAudioTracks() {
    return this._getTracksByType(_track_audio_track__WEBPACK_IMPORTED_MODULE_12__["default"]);
  }
  /**
   * Mark the selected track as active
   * @function _markActiveTrack
   * @param {Track} track - the track to mark
   * @returns {void}
   * @private
   */
  ;

  _proto._markActiveTrack = function _markActiveTrack(track) {
    var tracks;

    if (track instanceof _track_video_track__WEBPACK_IMPORTED_MODULE_11__["default"]) {
      tracks = this._getVideoTracks();
    } else if (track instanceof _track_audio_track__WEBPACK_IMPORTED_MODULE_12__["default"]) {
      tracks = this._getAudioTracks();
    } else if (track instanceof _track_text_track__WEBPACK_IMPORTED_MODULE_13__["default"]) {
      tracks = this._getTextTracks();
    }

    if (tracks) {
      for (var i = 0; i < tracks.length; i++) {
        tracks[i].active = track.index === tracks[i].index;
      }
    }
  }
  /**
   * handle text cue change
   * @param {FakeEvent} event - the cue change event payload
   * @private
   * @returns {void}
   */
  ;

  _proto._onCueChange = function _onCueChange(event) {
    Player._logger.debug('Text cue changed', event.payload.cues); //TODO: remove filter once FEC-11048 fix is done


    try {
      this._activeTextCues = event.payload.cues.filter(function (cue, index, cues) {
        var prevCue = cues[index - 1];

        if (!prevCue) {
          return true;
        }

        return !(cue.startTime === prevCue.startTime && cue.endTime === prevCue.endTime && cue.text.trim() === prevCue.text.trim());
      });
    } catch (e) {
      this._activeTextCues = event.payload.cues;
    }

    this._updateCueDisplaySettings();

    this._updateTextDisplay(this._activeTextCues);

    this.dispatchEvent(event);
  }
  /**
   * update the text cue display settings
   * @private
   * @returns {void}
   */
  ;

  _proto._updateCueDisplaySettings = function _updateCueDisplaySettings() {
    var activeCues = this._activeTextCues;
    var settings = this._textDisplaySettings;

    for (var i = 0; i < activeCues.length; i++) {
      var cue = activeCues[i];

      for (var _name in settings) {
        if (settings[_name]) {
          cue[_name] = settings[_name];
        }
      }
    }
  }
  /**
   * update the text display
   * @param {Array<Cue>} cues - list of cues
   * @private
   * @returns {void}
   */
  ;

  _proto._updateTextDisplay = function _updateTextDisplay(cues) {
    if (!this._config.text.useNativeTextTrack) {
      Object(_track_text_track_display__WEBPACK_IMPORTED_MODULE_16__["processCues"])(window, cues, this._textDisplayEl, this._textStyle);
    }
  }
  /**
   * Add off text track if there are actual text tracks associated with media
   * setting this track is the same as calling Player's hideTextTrack
   * @private
   * @returns {void}
   */
  ;

  _proto._addTextTrackOffOption = function _addTextTrackOffOption() {
    var textTracks = this._getTextTracks();

    if (textTracks && textTracks.length) {
      this._tracks.push(new _track_text_track__WEBPACK_IMPORTED_MODULE_13__["default"]({
        active: false,
        kind: _track_text_track__WEBPACK_IMPORTED_MODULE_13__["default"].KIND.SUBTITLES,
        label: 'Off',
        language: OFF
      }));
    }
  }
  /**
   * Sets the default tracks defined in the player config.
   * @returns {void}
   * @private
   */
  ;

  _proto._setDefaultTracks = function _setDefaultTracks() {
    var activeTracks = this.getActiveTracks();
    var playbackConfig = this.config.playback;

    var offTextTrack = this._getTextTracks().find(function (track) {
      return _track_text_track__WEBPACK_IMPORTED_MODULE_13__["default"].langComparer(OFF, track.language);
    });

    var currentOrConfiguredTextLang = window.localStorage.getItem('kaltura-player-js_textLanguage') || this._playbackAttributesState.textLanguage || this._getLanguage(this._getTextTracks(), playbackConfig.textLanguage, activeTracks.text);

    var currentOrConfiguredAudioLang = this._playbackAttributesState.audioLanguage || this._getLanguage(this._getAudioTracks(), playbackConfig.audioLanguage, activeTracks.audio);

    this._setDefaultTrack(this._getTextTracks(), currentOrConfiguredTextLang, offTextTrack);

    this._setDefaultTrack(this._getAudioTracks(), currentOrConfiguredAudioLang, activeTracks.audio);

    this._setDefaultVideoTrack();
  }
  /**
   * Gets the track language that should be set by default.
   * @param {Array<T>} tracks - the audio or text tracks.
   * @param {string} configuredLanguage - The configured language (can be also "auto").
   * @param {?T} defaultTrack - The default track.
   * @private
   * @returns {string} - The track language to set by default.
   */
  ;

  _proto._getLanguage = function _getLanguage(tracks, configuredLanguage, defaultTrack) {
    var language = configuredLanguage;

    if (language === AUTO) {
      var localeTrack = tracks.find(function (track) {
        return _track_track__WEBPACK_IMPORTED_MODULE_10__["default"].langComparer(_utils_locale__WEBPACK_IMPORTED_MODULE_7__["default"].language, track.language);
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
   * @template {TextTrack | AudioTrack} T
   * @param {Array<T>} tracks - the audio or text tracks.
   * @param {string} language - The track language.
   * @param {Track} defaultTrack - The default track to set in case there is no language configured.
   * @returns {void}
   * @private
   */
  ;

  _proto._setDefaultTrack = function _setDefaultTrack(tracks, language, defaultTrack) {
    var _this15 = this;

    var updateTrack = function updateTrack(track) {
      _this15.selectTrack(track);

      _this15._markActiveTrack(track);
    };

    var sameTrack = tracks.find(function (track) {
      return _track_track__WEBPACK_IMPORTED_MODULE_10__["default"].langComparer(language, track.language, true);
    });

    if (sameTrack) {
      updateTrack(sameTrack);
    } else {
      var track = tracks.find(function (track) {
        return _track_track__WEBPACK_IMPORTED_MODULE_10__["default"].langComparer(language, track.language, false);
      });

      if (track) {
        updateTrack(track);
      } else if (defaultTrack && !defaultTrack.active) {
        this.selectTrack(defaultTrack);
      }
    }
  }
  /**
   * Sets the video track selected by the user.
   * @returns {void}
   * @private
   */
  ;

  _proto._setDefaultVideoTrack = function _setDefaultVideoTrack() {
    var _this16 = this;

    var sortedVideoTracks = this._getVideoTracks().sort(function (track1, track2) {
      return track2.bandwidth - track1.bandwidth;
    });

    var selectedVideoTrack = sortedVideoTracks.find(function (track) {
      var _this16$_playbackAttr;

      return track.label && track.label === ((_this16$_playbackAttr = _this16._playbackAttributesState.videoTrack) == null ? void 0 : _this16$_playbackAttr.label);
    });

    if (!selectedVideoTrack) {
      selectedVideoTrack = sortedVideoTracks.find(function (track) {
        var _this16$_playbackAttr2;

        return track.height && track.height === ((_this16$_playbackAttr2 = _this16._playbackAttributesState.videoTrack) == null ? void 0 : _this16$_playbackAttr2.height);
      });
    }

    if (selectedVideoTrack) {
      this.selectTrack(selectedVideoTrack);
    }
  }
  /**
   * Checks for callbacks that should change the tracks, and call them on the
   * respective track group (audio/text/video)
   * @private
   * @returns {void}
   */
  ;

  _proto._maybeSetTracksLabels = function _maybeSetTracksLabels() {
    var customLabels = this._config.customLabels;

    if (customLabels) {
      for (var callbackType in customLabels) {
        if (!Object.prototype.hasOwnProperty.call(customLabels, callbackType)) {
          return;
        }

        switch (callbackType) {
          case _track_label_options__WEBPACK_IMPORTED_MODULE_35__["LabelOptions"].QUALITIES:
            this._setTracksCustomLabels(this._getVideoTracks(), customLabels[callbackType]);

            break;

          case _track_label_options__WEBPACK_IMPORTED_MODULE_35__["LabelOptions"].AUDIO:
            this._setTracksCustomLabels(this._getAudioTracks(), customLabels[callbackType]);

            break;

          case _track_label_options__WEBPACK_IMPORTED_MODULE_35__["LabelOptions"].CAPTIONS:
            this._setTracksCustomLabels(this._getTextTracks(), customLabels[callbackType]);

            break;
        }
      }
    }
  }
  /**
   *
   * @template {AudioTrack | TextTrack | VideoTrack} T
   * @param {Array<T>} tracks - tracks
   * @param {Function} callback - application label callback, returns a string
   * @private
   * @returns {void}
   */
  ;

  _proto._setTracksCustomLabels = function _setTracksCustomLabels(tracks, callback) {
    tracks.forEach(function (track) {
      var result = callback(_utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].copyDeep(track));

      if (result) {
        track.label = result;
      }
    });
  } // </editor-fold>
  // </editor-fold>
  // <editor-fold desc="Enums">

  /**
   * Gets the player event types.
   * @returns {PKEventTypes} - The event types of the player.
   * @public
   */
  ;

  _createClass(Player, [{
    key: "videoHeight",
    get: function get() {
      if (this._engine) {
        return this._engine.videoHeight;
      }

      return null;
    }
    /**
     * Get video width.
     * @returns {?number} - The intrinsic width of the video.
     * @public
     */

  }, {
    key: "videoWidth",
    get: function get() {
      if (this._engine) {
        return this._engine.videoWidth;
      }

      return null;
    }
  }, {
    key: "buffered",
    get: function get() {
      if (this._engine) {
        return this._engine.buffered;
      }

      return null;
    }
  }, {
    key: "stats",
    get: function get() {
      var statsObject = {
        targetBuffer: NaN,
        availableBuffer: NaN
      };

      if (this._engine) {
        statsObject.targetBuffer = this._engine.targetBuffer;
        statsObject.availableBuffer = this._engine.availableBuffer;
      }

      return statsObject;
    }
    /**
     * Set the current time in seconds.
     * @param {Number} to - The number to set in seconds.
     * @public
     */

  }, {
    key: "currentTime",
    set: function set(to) {
      this._playbackMiddleware.setCurrentTime(to, this._setCurrentTime.bind(this));
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

      return null;
    }
    /**
     * Get the duration in seconds.
     * @returns {?Number} - The playback duration.
     * @public
     */

  }, {
    key: "duration",
    get: function get() {
      if (this._engine) {
        return this._engine.duration;
      }

      return null;
    }
    /**
     * Get the live duration in seconds.
     * @returns {?Number} - The live duration.
     * @public
     */

  }, {
    key: "liveDuration",
    get: function get() {
      if (this._engine) {
        return this._engine.liveDuration;
      }

      return null;
    }
    /**
     * Set playback volume.
     * @param {Number} vol - The volume to set.
     * @returns {void}
     * @public
     */

  }, {
    key: "volume",
    set: function set(vol) {
      if (this._engine) {
        if (_utils_util__WEBPACK_IMPORTED_MODULE_6__["Number"].isFloat(vol) || vol === 0 || vol === 1) {
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

      return null;
    }
    /**
     * Get paused state.
     * @returns {?boolean} - Whether the video is paused or not.
     * @public
     */

  }, {
    key: "paused",
    get: function get() {
      if (this._engine) {
        return this._engine.paused;
      }

      return null;
    }
    /**
     * Get seeking state.
     * @returns {?boolean} - Whether the video is seeking or not.
     * @public
     */

  }, {
    key: "seeking",
    get: function get() {
      if (this._engine) {
        return this._engine.seeking;
      }

      return null;
    }
    /**
     * Set playsinline attribute.
     * Relevant for iOS 10 and up:
     * Elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins.
     * @param {boolean} playsinline - Whether the video should plays in line.
     */

  }, {
    key: "playsinline",
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

      return null;
    }
    /**
     * Set player muted state.
     * @param {boolean} mute - The mute value.
     * @returns {void}
     * @public
     */

  }, {
    key: "muted",
    set: function set(mute) {
      if (this._engine) {
        this._engine.muted = mute;
        this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].MUTE_CHANGE, {
          mute: mute
        }));

        if (mute === false) {
          this._fallbackToMutedAutoPlay = mute;
        }
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

      return null;
    }
    /**
     * Get the player source.
     * @returns {?string} - The current source of the player.
     * @public
     */

  }, {
    key: "src",
    get: function get() {
      if (this._engine) {
        return this._engine.src;
      }

      return null;
    }
    /**
     * Sets the dimensions of the player.
     * @param {PKDimensionsConfig} dimensions - the player dimensions config.
     * @returns {void}
     * @public
     */

  }, {
    key: "dimensions",
    set: function set(dimensions) {
      var targetElement = this._getTargetElement();

      if (!dimensions || _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].isEmptyObject(dimensions)) {
        this._aspectRatio = null;
        targetElement.style.width = null;
        targetElement.style.height = null;
      } else {
        var _Utils$Object$mergeDe = _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].mergeDeep(this.dimensions, dimensions),
            height = _Utils$Object$mergeDe.height,
            width = _Utils$Object$mergeDe.width;

        targetElement.style.width = typeof width === 'number' ? width + "px" : width;
        targetElement.style.height = typeof height === 'number' ? height + "px" : height;

        this._calcRatio(targetElement, dimensions);
      }
    },
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
    key: "poster",
    get: function get() {
      return this._posterManager.src;
    }
    /**
     * Sets the playbackRate property.
     * @param {number} rate - The playback speed of the video.
     */

  }, {
    key: "playbackRate",
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

      return null;
    }
    /**
     * Gets the possible playback speeds of the video.
     * @returns {Array<number>} - The possible playback speeds speed of the video.
     */

  }, {
    key: "playbackRates",
    get: function get() {
      if (this._playbackRates) {
        return this._playbackRates;
      } else if (this._engine) {
        return this._engine.playbackRates;
      }

      return [];
    }
    /**
     * Gets the default playback speed of the video.
     * @returns {number} - The default playback speed of the video.
     */

  }, {
    key: "defaultPlaybackRate",
    get: function get() {
      if (this._engine) {
        return this._engine.defaultPlaybackRate;
      }

      return 1;
    }
    /**
     * get the engine type
     * @returns {string} - html5
     */

  }, {
    key: "engineType",
    get: function get() {
      return this._engineType;
    }
    /**
     * get the stream type
     * @returns {string} - hls|dash|progressive
     */

  }, {
    key: "streamType",
    get: function get() {
      return this._streamType;
    }
    /**
     * Getter for the environment of the player instance.
     * @return {Object} - The current environment object.
     * @public
     */

  }, {
    key: "env",
    get: function get() {
      return this._env;
    }
    /**
     * Get the player config.
     * @returns {Object} - A copy of the player configuration.
     * @public
     */

  }, {
    key: "config",
    get: function get() {
      return _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].mergeDeep({}, this._config);
    }
    /**
     * Get the current player sources object.
     * @returns {Object} - A copy of the player configuration.
     * @public
     */

  }, {
    key: "sources",
    get: function get() {
      return _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].mergeDeep({}, this._sources);
    }
    /**
     * Get whether the user already interacted with the player
     * @returns {boolean} - Whether the user interacted with the player
     * @public
     */

  }, {
    key: "hasUserInteracted",
    get: function get() {
      return this._hasUserInteracted;
    }
    /**
     * Set the _loadingMedia flag to inform the player that a load media request has sent.
     * @param {boolean} loading - Whether a load media request has sent.
     * @returns {void}
     * @public
     */

  }, {
    key: "loadingMedia",
    set: function set(loading) {
      this._loadingMedia = loading;
    }
    /**
     * Set crossOrigin attribute.
     * @param {?string} crossOrigin - 'anonymous' or 'use-credentials'
     * anonymous: CORS requests for this element will not have the credentials flag set.
     * use-credentials: CORS requests for this element will have the credentials flag set; this means the request will provide credentials.
     */

  }, {
    key: "crossOrigin",
    set: function set(crossOrigin) {
      if (this._engine) {
        this._engine.crossOrigin = crossOrigin;
      }
    }
    /**
     * Get crossOrigin attribute.
     * @returns {?string} - 'anonymous' or 'use-credentials'
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.crossOrigin;
      }

      return null;
    }
    /**
     * Get ended attribute state.
     * @returns {?boolean} - Whether the media has been ended.
     */

  }, {
    key: "ended",
    get: function get() {
      if (this._engine) {
        return this._engine.ended;
      }

      return null;
    }
    /**
     * Get the playback middleware.
     * @returns {PlaybackMiddleware} - The playback middleware.
     */

  }, {
    key: "playbackMiddleware",
    get: function get() {
      return this._playbackMiddleware;
    }
    /**
     * Get the poster manager.
     * @returns {PlaybackMiddleware} - The poster manager.
     */

  }, {
    key: "posterManager",
    get: function get() {
      return this._posterManager;
    }
  }, {
    key: "textDisplaySetting",
    get: function get() {
      return _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].copyDeep(this._textDisplaySettings);
    }
    /**
     * Sets style attributes for text tracks.
     * @param {TextStyle} style - text styling settings
     * @returns {void}
     */

  }, {
    key: "textStyle",
    set: function set(style) {
      if (!(style instanceof _track_text_style__WEBPACK_IMPORTED_MODULE_14__["default"])) {
        throw new Error('Style must be instance of TextStyle');
      }

      var element = _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].getElementBySelector("." + this._playerId + "." + SUBTITLES_STYLE_CLASS_NAME);

      if (!element) {
        element = _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].createElement('style');
        _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].addClassName(element, this._playerId);
        _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].addClassName(element, SUBTITLES_STYLE_CLASS_NAME);
        _utils_util__WEBPACK_IMPORTED_MODULE_6__["Dom"].appendChild(document.head, element);
      }

      var sheet = element.sheet;

      while (sheet.cssRules.length) {
        sheet.deleteRule(0);
      }

      try {
        this._textStyle = style;

        if (this._config.text.useNativeTextTrack) {
          sheet.insertRule("#" + this._playerId + " video." + ENGINE_CLASS_NAME + "::cue { " + style.toCSS() + " }", 0);
        } else if (this._engine) {
          this._engine.resetAllCues();

          this._externalCaptionsHandler.resetAllCues();

          this._updateTextDisplay(this._activeTextCues);
        }

        this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_3__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TEXT_STYLE_CHANGED));
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
    key: "Event",
    get: function get() {
      return _event_event_type__WEBPACK_IMPORTED_MODULE_5__["EventType"];
    }
    /**
     * Gets the player TextStyle.
     * @returns {TextStyle} - The TextStyle class
     * @public
     */

  }, {
    key: "TextStyle",
    get: function get() {
      return _track_text_style__WEBPACK_IMPORTED_MODULE_14__["default"];
    }
    /**
     * Gets the player state types.
     * @returns {PKStateTypes} - The state types of the player.
     * @public
     */

  }, {
    key: "State",
    get: function get() {
      return _state_state_type__WEBPACK_IMPORTED_MODULE_17__["StateType"];
    }
    /**
     * Gets the player tracks types.
     * @returns {TrackType} - The tracks types of the player.
     * @public
     */

  }, {
    key: "Track",
    get: function get() {
      return _track_track_type__WEBPACK_IMPORTED_MODULE_18__["TrackType"];
    }
    /**
     * Gets the player log level types.
     * @returns {PKLogLevelTypes} - The log level types of the player.
     * @public
     */

  }, {
    key: "LogLevelType",
    get: function get() {
      return _utils_logger__WEBPACK_IMPORTED_MODULE_8__["LogLevelType"];
    }
    /**
     * Gets the player log level objects.
     * @returns {PKLogLevels} - The log levels objects of the player.
     * @public
     */

  }, {
    key: "LogLevel",
    get: function get() {
      return _utils_logger__WEBPACK_IMPORTED_MODULE_8__["LogLevel"];
    }
    /**
     * Gets the player abr modes.
     * @returns {PKAbrModes} - The abr modes of the player.
     * @public
     */

  }, {
    key: "AbrMode",
    get: function get() {
      return _track_abr_mode_type__WEBPACK_IMPORTED_MODULE_22__["AbrMode"];
    }
    /**
     * Gets the player media types.
     * @returns {PKMediaTypes} - The media types of the player.
     * @public
     */

  }, {
    key: "MediaType",
    get: function get() {
      return _enums_media_type__WEBPACK_IMPORTED_MODULE_21__["MediaType"];
    }
    /**
     * Gets the player stream types.
     * @returns {PKStreamTypes} - The stream types of the player.
     * @public
     */

  }, {
    key: "StreamType",
    get: function get() {
      return _engines_stream_type__WEBPACK_IMPORTED_MODULE_19__["StreamType"];
    }
    /**
     * Gets the player engine types.
     * @returns {PKEngineTypes} - The engine types of the player.
     * @public
     */

  }, {
    key: "EngineType",
    get: function get() {
      return _engines_engine_type__WEBPACK_IMPORTED_MODULE_20__["EngineType"];
    }
    /**
     * Gets the player cors types.
     * @returns {PKCorsTypes} - The player cors types.
     * @public
     */

  }, {
    key: "CorsType",
    get: function get() {
      return _engines_html5_cors_types__WEBPACK_IMPORTED_MODULE_23__["CorsType"];
    }
    /**
     * Gets the ad break types.
     * @returns {PKAdBreakTypes} - The ad break types of the player.
     * @public
     */

  }, {
    key: "AdBreakType",
    get: function get() {
      return _ads_ad_break_type__WEBPACK_IMPORTED_MODULE_30__["AdBreakType"];
    }
    /**
     * Gets the ad break tag types.
     * @returns {PKAdTagTypes} - The ad tag types of the player.
     * @public
     */

  }, {
    key: "AdTagType",
    get: function get() {
      return _ads_ad_tag_type__WEBPACK_IMPORTED_MODULE_31__["AdTagType"];
    }
    /**
     * Gets the player static error class.
     * @returns {PKError} - The player static error class.
     * @public
     */

  }, {
    key: "Error",
    get: function get() {
      return _error_error__WEBPACK_IMPORTED_MODULE_27__["default"];
    } // </editor-fold>

  }], [{
    key: "_defaultConfig",
    get: function get() {
      return _utils_util__WEBPACK_IMPORTED_MODULE_6__["Object"].copyDeep(_player_config_js__WEBPACK_IMPORTED_MODULE_25__["DefaultConfig"]);
    }
  }]);

  return Player;
}(_event_fake_event_target__WEBPACK_IMPORTED_MODULE_4__["default"]);

_defineProperty(Player, "_logger", Object(_utils_logger__WEBPACK_IMPORTED_MODULE_8__["default"])('Player'));



/***/ }),

/***/ "./playkit.js":
/*!********************!*\
  !*** ./playkit.js ***!
  \********************/
/*! exports provided: loadPlayer, registerMediaSourceAdapter, BaseMediaSourceAdapter, BaseMiddleware, Track, VideoTrack, AudioTrack, TextTrack, ImageTrack, TextStyle, Cue, TimedMetadata, createTextTrackCue, createTimedMetadata, Utils, utils, Error, FakeEvent, FakeEventTarget, EventManager, VERSION, NAME, Env, State, getCapabilities, setCapabilities, EngineDecoratorProvider, registerEngine, unRegisterEngine, AdBreakType, AdTagType, AdEventType, filterTracksByRestriction, Html5EventType, CustomEventType, EventType, StateType, TrackType, EngineType, MediaType, StreamType, AbrMode, LogLevelType, CorsType, DrmScheme, MimeType, RequestType, ScreenOrientationType, AutoPlayType, ThumbnailInfo, getLogger, LogLevel, getLogLevel, setLogLevel, setLogHandler, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPlayer", function() { return loadPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCapabilities", function() { return getCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCapabilities", function() { return setCapabilities; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./player.js");
/* harmony import */ var _engines_html5_media_source_base_media_source_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engines/html5/media-source/base-media-source-adapter */ "./engines/html5/media-source/base-media-source-adapter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseMediaSourceAdapter", function() { return _engines_html5_media_source_base_media_source_adapter__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _engines_html5_media_source_media_source_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engines/html5/media-source/media-source-provider */ "./engines/html5/media-source/media-source-provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerMediaSourceAdapter", function() { return _engines_html5_media_source_media_source_provider__WEBPACK_IMPORTED_MODULE_2__["registerMediaSourceAdapter"]; });

/* harmony import */ var _engines_engine_decorator_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engines/engine-decorator-provider */ "./engines/engine-decorator-provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EngineDecoratorProvider", function() { return _engines_engine_decorator_provider__WEBPACK_IMPORTED_MODULE_3__["EngineDecoratorProvider"]; });

/* harmony import */ var _engines_engine_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engines/engine-provider */ "./engines/engine-provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEngine", function() { return _engines_engine_provider__WEBPACK_IMPORTED_MODULE_4__["registerEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unRegisterEngine", function() { return _engines_engine_provider__WEBPACK_IMPORTED_MODULE_4__["unRegisterEngine"]; });

/* harmony import */ var _middleware_base_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middleware/base-middleware */ "./middleware/base-middleware.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseMiddleware", function() { return _middleware_base_middleware__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/state */ "./state/state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "State", function() { return _state_state__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _track_track__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./track/track */ "./track/track.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return _track_track__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _track_image_track__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./track/image-track */ "./track/image-track.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageTrack", function() { return _track_image_track__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _track_video_track__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./track/video-track */ "./track/video-track.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoTrack", function() { return _track_video_track__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _track_audio_track__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./track/audio-track */ "./track/audio-track.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioTrack", function() { return _track_audio_track__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _track_text_track__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./track/text-track */ "./track/text-track.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextTrack", function() { return _track_text_track__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _track_timed_metadata__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./track/timed-metadata */ "./track/timed-metadata.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimedMetadata", function() { return _track_timed_metadata__WEBPACK_IMPORTED_MODULE_12__["TimedMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextTrackCue", function() { return _track_timed_metadata__WEBPACK_IMPORTED_MODULE_12__["createTextTrackCue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTimedMetadata", function() { return _track_timed_metadata__WEBPACK_IMPORTED_MODULE_12__["createTimedMetadata"]; });

/* harmony import */ var _track_text_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./track/text-style */ "./track/text-style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextStyle", function() { return _track_text_style__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _track_vtt_cue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./track/vtt-cue */ "./track/vtt-cue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cue", function() { return _track_vtt_cue__WEBPACK_IMPORTED_MODULE_14__["Cue"]; });

/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/env */ "./utils/env.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Env", function() { return _utils_env__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils */ "./utils/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_16__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_16__; });
/* harmony import */ var _error_error__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./error/error */ "./error/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return _error_error__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _event_fake_event__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./event/fake-event */ "./event/fake-event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeEvent", function() { return _event_fake_event__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _event_fake_event_target__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./event/fake-event-target */ "./event/fake-event-target.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeEventTarget", function() { return _event_fake_event_target__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _event_event_manager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./event/event-manager */ "./event/event-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventManager", function() { return _event_event_manager__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _state_state_type__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./state/state-type */ "./state/state-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateType", function() { return _state_state_type__WEBPACK_IMPORTED_MODULE_21__["StateType"]; });

/* harmony import */ var _track_track_type__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./track/track-type */ "./track/track-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrackType", function() { return _track_track_type__WEBPACK_IMPORTED_MODULE_22__["TrackType"]; });

/* harmony import */ var _engines_stream_type__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./engines/stream-type */ "./engines/stream-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StreamType", function() { return _engines_stream_type__WEBPACK_IMPORTED_MODULE_23__["StreamType"]; });

/* harmony import */ var _engines_engine_type__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./engines/engine-type */ "./engines/engine-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EngineType", function() { return _engines_engine_type__WEBPACK_IMPORTED_MODULE_24__["EngineType"]; });

/* harmony import */ var _enums_media_type__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./enums/media-type */ "./enums/media-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return _enums_media_type__WEBPACK_IMPORTED_MODULE_25__["MediaType"]; });

/* harmony import */ var _event_event_type__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./event/event-type */ "./event/event-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html5EventType", function() { return _event_event_type__WEBPACK_IMPORTED_MODULE_26__["Html5EventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomEventType", function() { return _event_event_type__WEBPACK_IMPORTED_MODULE_26__["CustomEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return _event_event_type__WEBPACK_IMPORTED_MODULE_26__["EventType"]; });

/* harmony import */ var _track_abr_mode_type__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./track/abr-mode-type */ "./track/abr-mode-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbrMode", function() { return _track_abr_mode_type__WEBPACK_IMPORTED_MODULE_27__["AbrMode"]; });

/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./utils/logger */ "./utils/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevelType", function() { return _utils_logger__WEBPACK_IMPORTED_MODULE_28__["LogLevelType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLogger", function() { return _utils_logger__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _utils_logger__WEBPACK_IMPORTED_MODULE_28__["LogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLogLevel", function() { return _utils_logger__WEBPACK_IMPORTED_MODULE_28__["getLogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return _utils_logger__WEBPACK_IMPORTED_MODULE_28__["setLogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLogHandler", function() { return _utils_logger__WEBPACK_IMPORTED_MODULE_28__["setLogHandler"]; });

/* harmony import */ var _engines_html5_cors_types__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./engines/html5/cors-types */ "./engines/html5/cors-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CorsType", function() { return _engines_html5_cors_types__WEBPACK_IMPORTED_MODULE_29__["CorsType"]; });

/* harmony import */ var _drm_drm_scheme__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./drm/drm-scheme */ "./drm/drm-scheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrmScheme", function() { return _drm_drm_scheme__WEBPACK_IMPORTED_MODULE_30__["DrmScheme"]; });

/* harmony import */ var _enums_mime_type__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./enums/mime-type */ "./enums/mime-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MimeType", function() { return _enums_mime_type__WEBPACK_IMPORTED_MODULE_31__["MimeType"]; });

/* harmony import */ var _enums_request_type__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./enums/request-type */ "./enums/request-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestType", function() { return _enums_request_type__WEBPACK_IMPORTED_MODULE_32__["RequestType"]; });

/* harmony import */ var _ads_ad_break_type__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ads/ad-break-type */ "./ads/ad-break-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdBreakType", function() { return _ads_ad_break_type__WEBPACK_IMPORTED_MODULE_33__["AdBreakType"]; });

/* harmony import */ var _ads_ad_tag_type__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ads/ad-tag-type */ "./ads/ad-tag-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdTagType", function() { return _ads_ad_tag_type__WEBPACK_IMPORTED_MODULE_34__["AdTagType"]; });

/* harmony import */ var _ads_ad_event_type__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ads/ad-event-type */ "./ads/ad-event-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdEventType", function() { return _ads_ad_event_type__WEBPACK_IMPORTED_MODULE_35__["AdEventType"]; });

/* harmony import */ var _enums_screen_orientation_type__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./enums/screen-orientation-type */ "./enums/screen-orientation-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenOrientationType", function() { return _enums_screen_orientation_type__WEBPACK_IMPORTED_MODULE_36__["ScreenOrientationType"]; });

/* harmony import */ var _enums_auto_play_type__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./enums/auto-play-type */ "./enums/auto-play-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoPlayType", function() { return _enums_auto_play_type__WEBPACK_IMPORTED_MODULE_37__["AutoPlayType"]; });

/* harmony import */ var _thumbnail_thumbnail_info__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./thumbnail/thumbnail-info */ "./thumbnail/thumbnail-info.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThumbnailInfo", function() { return _thumbnail_thumbnail_info__WEBPACK_IMPORTED_MODULE_38__["ThumbnailInfo"]; });

/* harmony import */ var _utils_restrictions__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./utils/restrictions */ "./utils/restrictions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterTracksByRestriction", function() { return _utils_restrictions__WEBPACK_IMPORTED_MODULE_39__["filterTracksByRestriction"]; });









































var VERSION = "0.80.7";
var NAME = "@playkit-js/playkit-js";
/**
 * @param {Object} config - The configuration of the player
 * @returns {Player} - The player instance
 */

function loadPlayer(config) {
  return new _player__WEBPACK_IMPORTED_MODULE_0__["default"](config || {});
} // Export the media source adapters necessary utils

 // Export the middleware framework

 // Export the tracks classes

 // Export the timed metadata class and function

 // Export utils library


 // Export Error class

 // Export Event system

 // Export version and player name

 // Export environment data

 // Export State class

 // Export the player capabilities

var getCapabilities = _player__WEBPACK_IMPORTED_MODULE_0__["default"].getCapabilities;
var setCapabilities = _player__WEBPACK_IMPORTED_MODULE_0__["default"].setCapabilities; // Export capabilities utils

 // Export engineDecoratorProvider

 // Export engine framework

 // Export ads framework

 //filter invalid tracks

 // Export enums


 // Export logger utils


/* harmony default export */ __webpack_exports__["default"] = (loadPlayer);

/***/ }),

/***/ "./state/state-manager.js":
/*!********************************!*\
  !*** ./state/state-manager.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateManager; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player */ "./player.js");
/* harmony import */ var _event_event_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event/event-manager */ "./event/event-manager.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./state/state.js");
/* harmony import */ var _state_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-type */ "./state/state-type.js");
/* harmony import */ var _event_event_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event/event-type */ "./event/event-type.js");
/* harmony import */ var _event_fake_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event/fake-event */ "./event/fake-event.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/logger */ "./utils/logger.js");
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/env */ "./utils/env.js");
/* harmony import */ var _error_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../error/error */ "./error/error.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/**
 * This class responsible to manage all the state machine of the player.
 * @classdesc
 */

var StateManager = /*#__PURE__*/function () {
  /**
   * The logger of the class.
   * @member
   * @type {any}
   * @private
   */

  /**
   * Reference to the actual player.
   * @member
   * @type {Player}
   * @private
   */

  /**
   * The event manager of the class.
   * @member
   * @type {EventManager}
   * @private
   */

  /**
   * Holds the current state of the player.
   * @member
   * @type {State}
   * @private
   */

  /**
   * Holds the previous state of the player.
   * @member
   * @type {State | null}
   * @private
   */

  /**
   * Holds the time of the beginning of the last buffering (waiting event)
   * @member
   * @type {number | null}
   * @private
   */

  /**
   * Holds the state history of the player.
   * @member
   * @type {Array<State>}
   * @private
   */

  /**
   * The possible transitions from one state to another.
   * @type {Array<Transition>}
   * @private
   */

  /**
   * @constructor
   * @param {Player} player - Reference to the player.
   */
  function StateManager(player) {
    var _this = this,
        _StateType$IDLE,
        _StateType$LOADING,
        _StateType$PAUSED,
        _StateType$PLAYING,
        _StateType$BUFFERING,
        _defineProperty2;

    _defineProperty(this, "_transitions", (_defineProperty2 = {}, _defineProperty2[_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].IDLE] = (_StateType$IDLE = {}, _StateType$IDLE[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].LOAD_START] = function () {
      return _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].LOADING);
    }, _StateType$IDLE[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].PLAY] = function () {
      return _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].BUFFERING);
    }, _StateType$IDLE[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].SEEKED] = function () {
      return _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].PAUSED);
    }, _StateType$IDLE), _defineProperty2[_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].LOADING] = (_StateType$LOADING = {}, _StateType$LOADING[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].LOADED_METADATA] = function () {
      return _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].PAUSED);
    }, _StateType$LOADING[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].ERROR] = function (e) {
      return e.payload.severity === _error_error__WEBPACK_IMPORTED_MODULE_8__["default"].Severity.CRITICAL && _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].IDLE);
    }, _StateType$LOADING[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].SEEKED] = function () {
      if (_this._prevState && _this._prevState.type === _state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].PLAYING) {
        _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].PLAYING);
      }
    }, _StateType$LOADING), _defineProperty2[_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].PAUSED] = (_StateType$PAUSED = {}, _StateType$PAUSED[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].PLAY] = function () {
      return _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].PLAYING);
    }, _StateType$PAUSED[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].PLAYING] = function () {
      return _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].PLAYING);
    }, _StateType$PAUSED[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].ENDED] = function () {
      return _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].IDLE);
    }, _StateType$PAUSED), _defineProperty2[_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].PLAYING] = (_StateType$PLAYING = {}, _StateType$PLAYING[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].PAUSE] = function () {
      return _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].PAUSED);
    }, _StateType$PLAYING[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].WAITING] = function () {
      if (_this._player.seeking) {
        _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].LOADING);
      } else {
        _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].BUFFERING);

        _this._lastWaitingTime = _this._player.currentTime;
      }
    }, _StateType$PLAYING[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].ENDED] = function () {
      return _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].IDLE);
    }, _StateType$PLAYING[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].ERROR] = function (e) {
      return e.payload.severity === _error_error__WEBPACK_IMPORTED_MODULE_8__["default"].Severity.CRITICAL && _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].IDLE);
    }, _StateType$PLAYING), _defineProperty2[_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].BUFFERING] = (_StateType$BUFFERING = {}, _StateType$BUFFERING[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].PLAYING] = function () {
      return _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].PLAYING);
    }, _StateType$BUFFERING[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].PAUSE] = function () {
      return _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].PAUSED);
    }, _StateType$BUFFERING[_event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].TIME_UPDATE] = function () {
      if (_utils_env__WEBPACK_IMPORTED_MODULE_7__["default"].browser.name === 'IE' && _this._player.currentTime !== _this._lastWaitingTime && _this._prevState && _this._prevState.type === _state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].PLAYING) {
        _this._lastWaitingTime = null;

        _this._updateState(_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].PLAYING);
      }
    }, _StateType$BUFFERING), _defineProperty2));

    this._player = player;
    this._logger = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_6__["default"])('StateManager');
    this._eventManager = new _event_event_manager__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._history = [];
    this._prevState = null;
    this._curState = new _state__WEBPACK_IMPORTED_MODULE_2__["default"](_state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].IDLE);

    this._attachListeners();
  }
  /**
   * Register to all necessary events which impacts on the player state.
   * @private
   * @returns {void}
   */


  var _proto = StateManager.prototype;

  _proto._attachListeners = function _attachListeners() {
    this._eventManager.listen(this._player, _event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].ERROR, this._doTransition.bind(this));

    this._eventManager.listen(this._player, _event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].ENDED, this._doTransition.bind(this));

    this._eventManager.listen(this._player, _event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].PLAY, this._doTransition.bind(this));

    this._eventManager.listen(this._player, _event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].LOAD_START, this._doTransition.bind(this));

    this._eventManager.listen(this._player, _event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].PLAYING, this._doTransition.bind(this));

    this._eventManager.listen(this._player, _event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].LOADED_METADATA, this._doTransition.bind(this));

    this._eventManager.listen(this._player, _event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].PAUSE, this._doTransition.bind(this));

    this._eventManager.listen(this._player, _event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].WAITING, this._doTransition.bind(this));

    this._eventManager.listen(this._player, _event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].SEEKED, this._doTransition.bind(this));

    this._eventManager.listen(this._player, _event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].TIME_UPDATE, this._doTransition.bind(this));
  }
  /**
   * Performs a state transition depends on the event which occurs in the player system.
   * @param {FakeEvent} event - The event occurs in the player system.
   * @private
   * @returns {void}
   */
  ;

  _proto._doTransition = function _doTransition(event) {
    if (event.type !== _event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].TIME_UPDATE || this._curState === _state_type__WEBPACK_IMPORTED_MODULE_3__["StateType"].BUFFERING && event.type === _event_event_type__WEBPACK_IMPORTED_MODULE_4__["Html5EventType"].TIME_UPDATE) {
      this._logger.debug('Do transition request', event.type); // don't show most of 'timeupdate' events

    }

    var transition = this._transitions[this._curState.type];

    if (typeof transition[event.type] === 'function') {
      transition[event.type](event);
    }
  }
  /**
   * Updates the player's state.
   * @param {string} type - The type of the new state.
   * @private
   * @returns {void}
   */
  ;

  _proto._updateState = function _updateState(type) {
    if (this._curState.type !== type) {
      this._curState.duration = Date.now() / 1000;

      this._history.push(this._curState);

      this._prevState = this._curState;
      this._curState = new _state__WEBPACK_IMPORTED_MODULE_2__["default"](type);

      this._logger.debug("Switch player state: from " + this._prevState.type + " to " + this._curState.type);

      this._dispatchEvent();
    }
  }
  /**
   * Fires the playerStateChanged event after state has been changed.
   * @private
   * @returns {void}
   */
  ;

  _proto._dispatchEvent = function _dispatchEvent() {
    var event = new _event_fake_event__WEBPACK_IMPORTED_MODULE_5__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_4__["CustomEventType"].PLAYER_STATE_CHANGED, {
      oldState: this._prevState,
      newState: this._curState
    });

    this._player.dispatchEvent(event);
  }
  /**
   * Destroys the state manager.
   * @public
   * @returns {void}
   */
  ;

  _proto.destroy = function destroy() {
    this._history = [];

    this._eventManager.destroy();
  }
  /**
   * Resets the state manager.
   * @public
   * @returns {void}
   */
  ;

  _proto.reset = function reset() {
    this._history = [];
  }
  /**
   * Getter to the current state of the player.
   * @public
   * @returns {State} - The current state object
   */
  ;

  _createClass(StateManager, [{
    key: "currentState",
    get: function get() {
      return this._curState;
    }
    /**
     * Getter to the previous state of the player.
     * @public
     * @returns {State|null} - The previous state object, or null if such doesn't exists
     */

  }, {
    key: "previousState",
    get: function get() {
      return this._prevState;
    }
    /**
     * Getter to the state history of the player.
     * @public
     * @returns {Array.<State>} - The full states history objects
     */

  }, {
    key: "history",
    get: function get() {
      return this._history;
    }
  }]);

  return StateManager;
}();



/***/ }),

/***/ "./state/state-type.js":
/*!*****************************!*\
  !*** ./state/state-type.js ***!
  \*****************************/
/*! exports provided: StateType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateType", function() { return StateType; });
var StateType = {
  IDLE: 'idle',
  LOADING: 'loading',
  PLAYING: 'playing',
  PAUSED: 'paused',
  BUFFERING: 'buffering'
};


/***/ }),

/***/ "./state/state.js":
/*!************************!*\
  !*** ./state/state.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return State; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This class describes a player state.
 * @classdesc
 */
var State = /*#__PURE__*/function () {
  /**
   * The type of the state.
   * Can be one of those describes in states.js
   * @member
   * @type {string}
   * @public
   */

  /**
   * The duration that the player was in this state.
   * @member
   * @type {number}
   * @private
   */

  /**
   * The timestamp that this state started.
   * @member
   * @type {number}
   * @private
   */

  /**
   * @constructor
   * @param {string} type - The type of the state.
   */
  function State(type) {
    this.type = type;
    this._duration = 0;
    this._timestamp = Date.now() / 1000;
  }
  /**
   * Getter for the duration of the state.
   * @returns {number} - The duration of the state
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



/***/ }),

/***/ "./thumbnail/external-thumbnails-handler.js":
/*!**************************************************!*\
  !*** ./thumbnail/external-thumbnails-handler.js ***!
  \**************************************************/
/*! exports provided: ExternalThumbnailsHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalThumbnailsHandler", function() { return ExternalThumbnailsHandler; });
/* harmony import */ var _event_event_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event/event-manager */ "./event/event-manager.js");
/* harmony import */ var _event_fake_event_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event/fake-event-target */ "./event/fake-event-target.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/logger */ "./utils/logger.js");
/* harmony import */ var _track_text_track_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../track/text-track-display */ "./track/text-track-display.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");
/* harmony import */ var _thumbnail_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thumbnail-info */ "./thumbnail/thumbnail-info.js");
/* harmony import */ var _track_vtt_cue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../track/vtt-cue */ "./track/vtt-cue.js");
/* harmony import */ var _error_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../error/error */ "./error/error.js");
/* harmony import */ var _event_fake_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event/fake-event */ "./event/fake-event.js");
/* harmony import */ var _event_event_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../event/event-type */ "./event/event-type.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var VTT_INCLUDES_SIZE_ONLY = /#wh=/i;
var VTT_INCLUDES_SIZE_AND_COORDS = /#xywh=/i;
var RELATIVE_PATH_PATTERN = new RegExp('^/[^/].+');

var ExternalThumbnailsHandler = /*#__PURE__*/function (_FakeEventTarget) {
  _inheritsLoose(ExternalThumbnailsHandler, _FakeEventTarget);

  function ExternalThumbnailsHandler() {
    var _this;

    _this = _FakeEventTarget.call(this) || this;

    _defineProperty(_assertThisInitialized(_this), "_cues", []);

    _this._eventManager = new _event_event_manager__WEBPACK_IMPORTED_MODULE_0__["default"]();
    return _this;
  }
  /**
   * The external thumbnails handler class logger.
   * @type {any}
   * @static
   * @private
   */


  var _proto = ExternalThumbnailsHandler.prototype;

  /**
   * start the loading and parsing process of the vtt thumbnails file.
   * @param {PKExternalThumbnailsConfig} thumbnailsConfig - the external vtt thumbnails config
   * @returns {void}
   * @public
   */
  _proto.load =
  /*#__PURE__*/
  function () {
    var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(thumbnailsConfig) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (thumbnailsConfig) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              ExternalThumbnailsHandler._logger.debug('start loading the vtt thumbnails');

              _context.next = 5;
              return this._downloadAndParseCues(thumbnailsConfig);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function load(_x) {
      return _load.apply(this, arguments);
    }

    return load;
  }()
  /**
   * returns the thumbnail info for the requested timing.
   * @param {number} time - timing in th playback timeline in milliseconds.
   * @returns {ThumbnailInfo | null} - the thumbnail img info.
   * @public
   */
  ;

  _proto.getThumbnail = function getThumbnail(time) {
    var cue = this._findCue(time, this._cues);

    if (cue) {
      var size = cue.size,
          coordinates = cue.coordinates,
          imgUrl = cue.imgUrl;
      size = size ? size : this._naturalImgSize;
      coordinates = coordinates ? coordinates : {
        x: 0,
        y: 0
      };

      var thumbnailInfo = _extends({
        url: imgUrl
      }, size, coordinates);

      return new _thumbnail_info__WEBPACK_IMPORTED_MODULE_5__["ThumbnailInfo"](thumbnailInfo);
    }

    return null;
  }
  /**
   * indicate whether or not this player using external vtt thumbnails.
   * @returns {boolean} whether or not this player using external vtt thumbnails.
   * @public
   */
  ;

  _proto.isUsingVttThumbnails = function isUsingVttThumbnails() {
    var _this$_cues;

    return !!((_this$_cues = this._cues) == null ? void 0 : _this$_cues.length);
  }
  /**
   * download and parse the vtt file
   * @param {PKExternalThumbnailsConfig} thumbnailsConfig - the thumbnails user config
   * @returns {Promise<void>} - resolve when the loading and parsing process is complete
   * @private
   */
  ;

  _proto._downloadAndParseCues =
  /*#__PURE__*/
  function () {
    var _downloadAndParseCues2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(thumbnailsConfig) {
      var VttStr, cuesArray;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this._downloadVttFile(thumbnailsConfig);

            case 3:
              VttStr = _context2.sent;
              _context2.next = 6;
              return this._processVtt(VttStr);

            case 6:
              cuesArray = _context2.sent;
              _context2.next = 9;
              return this._formatIntoThumbnailCues(cuesArray, thumbnailsConfig);

            case 9:
              this._cues = _context2.sent;
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_8__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_9__["Html5EventType"].ERROR, _context2.t0));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 12]]);
    }));

    function _downloadAndParseCues(_x2) {
      return _downloadAndParseCues2.apply(this, arguments);
    }

    return _downloadAndParseCues;
  }()
  /**
   * Make a request to download the vtt file.
   * @param {PKExternalThumbnailsConfig} thumbnailsConfig - the thumbnails config object.
   * @returns {Promise<string>} - resolves with the vtt string.
   * @private
   */
  ;

  _proto._downloadVttFile =
  /*#__PURE__*/
  function () {
    var _downloadVttFile2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(thumbnailsConfig) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _utils_util__WEBPACK_IMPORTED_MODULE_4__["Http"].execute(thumbnailsConfig.vttUrl, {}, 'GET');

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              throw new _error_error__WEBPACK_IMPORTED_MODULE_7__["default"](_error_error__WEBPACK_IMPORTED_MODULE_7__["default"].Severity.RECOVERABLE, _error_error__WEBPACK_IMPORTED_MODULE_7__["default"].Category.TEXT, _error_error__WEBPACK_IMPORTED_MODULE_7__["default"].Code.HTTP_ERROR, _context3.t0);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 6]]);
    }));

    function _downloadVttFile(_x3) {
      return _downloadVttFile2.apply(this, arguments);
    }

    return _downloadVttFile;
  }()
  /**
   * this calls the VTTCue parser and parse the .vtt thumbnails string into vttCues objects
   * @param {string} vttStr - a string in a .vtt format to be parsed into VTTCues
   * @returns {Array<Cue>} - parsed cues array
   * @private
   */
  ;

  _proto._processVtt =
  /*#__PURE__*/
  function () {
    var _processVtt2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(vttStr) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve, reject) {
                var parser = new _track_text_track_display__WEBPACK_IMPORTED_MODULE_3__["Parser"](window, Object(_track_text_track_display__WEBPACK_IMPORTED_MODULE_3__["StringDecoder"])());
                var cues = [];

                parser.oncue = function (cue) {
                  return cues.push(cue);
                };

                parser.onflush = function () {
                  ExternalThumbnailsHandler._logger.debug('finished parsing thumbnails cues');

                  resolve(cues);
                };

                parser.parse(vttStr);
                parser.flush();
                parser.onparsingerror(function (error) {
                  return reject(error);
                });
              }));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function _processVtt(_x4) {
      return _processVtt2.apply(this, arguments);
    }

    return _processVtt;
  }()
  /**
   * format vtt text track cues into thumbnails track cues.
   * @param {Array<Cue>} cues - array of VTTCues in the vtt text track format
   * @param {PKExternalThumbnailsConfig} thumbnailsConfig - the external vtt thumbnails config
   * @returns {Array<PKThumbnailVttCue>} - cues contains the thumbnails metadata.
   * @private
   */
  ;

  _proto._formatIntoThumbnailCues =
  /*#__PURE__*/
  function () {
    var _formatIntoThumbnailCues2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(cues, thumbnailsConfig) {
      var sampleProcessedCue, thumbnailCues, _iterator, _step, cue, processedCue;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (this.validateThumbnailsVTTFormat(cues)) {
                _context5.next = 4;
                break;
              }

              throw new _error_error__WEBPACK_IMPORTED_MODULE_7__["default"](_error_error__WEBPACK_IMPORTED_MODULE_7__["default"].Severity.RECOVERABLE, _error_error__WEBPACK_IMPORTED_MODULE_7__["default"].Category.TEXT, _error_error__WEBPACK_IMPORTED_MODULE_7__["default"].Code.INVALID_VTT_THUMBNAILS_FILE, {
                message: 'invalid thumbnail vtt format',
                vttUrl: thumbnailsConfig.vttUrl
              });

            case 4:
              sampleProcessedCue = this._extractCueMetadata(cues[0], thumbnailsConfig);
              _context5.next = 7;
              return this.validateImgUrl(sampleProcessedCue.imgUrl);

            case 7:
              if (_context5.sent) {
                _context5.next = 11;
                break;
              }

              throw new _error_error__WEBPACK_IMPORTED_MODULE_7__["default"](_error_error__WEBPACK_IMPORTED_MODULE_7__["default"].Severity.RECOVERABLE, _error_error__WEBPACK_IMPORTED_MODULE_7__["default"].Category.TEXT, _error_error__WEBPACK_IMPORTED_MODULE_7__["default"].Code.INVALID_VTT_THUMBNAILS_FILE, {
                message: 'failed loading the image - invalid image url',
                imgUrl: sampleProcessedCue.imgUrl
              });

            case 11:
              _context5.next = 13;
              return this.extractImgNaturalDimensions(sampleProcessedCue.imgUrl);

            case 13:
              this._naturalImgSize = _context5.sent;
              thumbnailCues = [];

              for (_iterator = _createForOfIteratorHelperLoose(cues); !(_step = _iterator()).done;) {
                cue = _step.value;
                processedCue = this._extractCueMetadata(cue, thumbnailsConfig);
                thumbnailCues.push(processedCue);
              }

              return _context5.abrupt("return", thumbnailCues);

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function _formatIntoThumbnailCues(_x5, _x6) {
      return _formatIntoThumbnailCues2.apply(this, arguments);
    }

    return _formatIntoThumbnailCues;
  }();

  _proto.validateThumbnailsVTTFormat = function validateThumbnailsVTTFormat(cues) {
    return cues.length && cues[0] instanceof _track_vtt_cue__WEBPACK_IMPORTED_MODULE_6__["Cue"];
  }
  /**
   * extracts the image dimensions based on its natural ratio and save it.
   * @param {string} imgUrl - the img url extracted from the vtt cue
   * @returns {Object} - the natural image dimensions
   * @private
   */
  ;

  _proto.extractImgNaturalDimensions = function extractImgNaturalDimensions(imgUrl) {
    var _this2 = this;

    return new Promise(function (resolve) {
      var img = new Image();
      img.src = imgUrl;

      _this2._eventManager.listenOnce(img, 'load', function () {
        resolve({
          height: img.naturalHeight,
          width: img.naturalWidth
        });
      });

      _this2._eventManager.listenOnce(img, 'error', function () {
        return resolve(null);
      });
    });
  }
  /**
   * make sure the final constructed thumbnail img url is valid.
   * @param {string} imgUrl - the img url extracted from the vtt cue
   * @returns {boolean} - indicates the url is valid or not
   * @private
   */
  ;

  _proto.validateImgUrl = function validateImgUrl(imgUrl) {
    var _this3 = this;

    return new Promise(function (resolve) {
      var img = new Image();
      img.src = imgUrl;

      _this3._eventManager.listenOnce(img, 'load', function () {
        resolve(true);
      });

      _this3._eventManager.listenOnce(img, 'error', function () {
        return resolve(false);
      });
    });
  }
  /**
   * format vtt cue into thumbnail cue - by extracting the img options metadata.
   * @param {VTTCue} vttCue - a parsed VTTCue in the vtt text cue format
   * @param {PKExternalThumbnailsConfig} thumbnailsConfig - the thumbnails config
   * @returns {PKThumbnailVttCue} - cue object contains the img metadata.
   * @private
   */
  ;

  _proto._extractCueMetadata = function _extractCueMetadata(vttCue, thumbnailsConfig) {
    var startTime = vttCue.startTime,
        endTime = vttCue.endTime,
        text = vttCue.text;
    var imgBaseUrl = thumbnailsConfig.vttUrl.substring(0, thumbnailsConfig.vttUrl.lastIndexOf('/'));
    var isVTTIncludesImgSizeOnly = VTT_INCLUDES_SIZE_ONLY.test(text);
    var isVTTIncludesImgSizeAndCoords = VTT_INCLUDES_SIZE_AND_COORDS.test(text);
    var isValidThumbnailVTTFormat = false;
    var imgUrl;
    var imgData;
    var coordinates = null;
    var size = null;

    if (isVTTIncludesImgSizeOnly) {
      var _text$split = text.split(VTT_INCLUDES_SIZE_ONLY);

      imgUrl = _text$split[0];

      ExternalThumbnailsHandler._logger.warn("vtt thumbnails in \"" + VTT_INCLUDES_SIZE_ONLY + "\" form - is supported but the width and height options are ignored and The images will be displayed in their natural dimensions");

      isValidThumbnailVTTFormat = imgUrl !== undefined;
    } else if (isVTTIncludesImgSizeAndCoords) {
      var _text$split2 = text.split(VTT_INCLUDES_SIZE_AND_COORDS);

      imgUrl = _text$split2[0];
      imgData = _text$split2[1];

      var _imgData$split$map = imgData.split(',').map(Number),
          x = _imgData$split$map[0],
          y = _imgData$split$map[1],
          width = _imgData$split$map[2],
          height = _imgData$split$map[3];

      coordinates = {
        x: x,
        y: y
      };
      size = {
        width: width,
        height: height
      };
      isValidThumbnailVTTFormat = [x, y, width, height, imgUrl].every(function (option) {
        return option !== undefined;
      });
    } else {
      imgUrl = text;
      isValidThumbnailVTTFormat = !!text;
    }

    if (!(imgUrl.indexOf('http://') === 0 || imgUrl.indexOf('https://') === 0)) {
      imgUrl = RELATIVE_PATH_PATTERN.test(imgUrl) ? imgUrl.substring(1) : imgUrl;
      imgUrl = imgBaseUrl + "/" + imgUrl;
    }

    if (!isValidThumbnailVTTFormat) {
      throw new _error_error__WEBPACK_IMPORTED_MODULE_7__["default"](_error_error__WEBPACK_IMPORTED_MODULE_7__["default"].Severity.RECOVERABLE, _error_error__WEBPACK_IMPORTED_MODULE_7__["default"].Category.TEXT, _error_error__WEBPACK_IMPORTED_MODULE_7__["default"].Code.INVALID_VTT_THUMBNAILS_FILE, {
        message: 'error while parsing the vtt cues - invalid cue',
        parsedCue: {
          startTime: startTime,
          endTime: endTime,
          options: text
        }
      });
    } else {
      return {
        startTime: startTime,
        endTime: endTime,
        imgUrl: imgUrl,
        size: size,
        coordinates: coordinates
      };
    }
  }
  /**
   * search the cue that matches the requested timing in the timeline - in the cues array.
   * @param {number} time - timing in th playback timeline in milliseconds.
   * @param {Array<PKThumbnailVttCue>} cues - the thumbnails cues array.
   * @returns {PKThumbnailVttCue | null} - the thumbnail cue linked to that timing.
   * @private
   */
  ;

  _proto._findCue = function _findCue(time, cues) {
    var left = 0;
    var right = cues.length - 1;

    while (left <= right) {
      var middle = Math.floor((left + right) / 2);
      var potentialCueMatch = cues[middle];

      if (time >= potentialCueMatch.startTime && time < potentialCueMatch.endTime) {
        return cues[middle];
      } else if (time < potentialCueMatch.startTime) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }

    return null;
  }
  /**
   * resets the handler
   * @returns {void}
   * @public
   */
  ;

  _proto.reset = function reset() {
    this._cues = [];

    this._eventManager.removeAll();

    this._naturalImgSize = {};
  }
  /**
   * destroy the handler
   * @returns {void}
   * @public
   */
  ;

  _proto.destroy = function destroy() {
    this.reset();

    this._eventManager.destroy();
  };

  return ExternalThumbnailsHandler;
}(_event_fake_event_target__WEBPACK_IMPORTED_MODULE_1__["default"]);

_defineProperty(ExternalThumbnailsHandler, "_logger", Object(_utils_logger__WEBPACK_IMPORTED_MODULE_2__["default"])('ExternalThumbnailsHandler'));



/***/ }),

/***/ "./thumbnail/thumbnail-info.js":
/*!*************************************!*\
  !*** ./thumbnail/thumbnail-info.js ***!
  \*************************************/
/*! exports provided: ThumbnailInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailInfo", function() { return ThumbnailInfo; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ThumbnailInfo = /*#__PURE__*/function () {
  function ThumbnailInfo(info) {
    var url = info.url,
        width = info.width,
        height = info.height,
        x = info.x,
        y = info.y;
    this._url = url;
    this._width = width;
    this._height = height;
    this._x = x;
    this._y = y;
  }

  _createClass(ThumbnailInfo, [{
    key: "url",
    get: function get() {
      return this._url;
    }
  }, {
    key: "width",
    get: function get() {
      return this._width;
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
  }, {
    key: "x",
    get: function get() {
      return this._x;
    }
  }, {
    key: "y",
    get: function get() {
      return this._y;
    }
  }]);

  return ThumbnailInfo;
}();



/***/ }),

/***/ "./track/abr-mode-type.js":
/*!********************************!*\
  !*** ./track/abr-mode-type.js ***!
  \********************************/
/*! exports provided: AbrMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbrMode", function() { return AbrMode; });
var AbrMode = {
  MANUAL: 'manual',
  AUTO: 'auto'
};


/***/ }),

/***/ "./track/audio-track.js":
/*!******************************!*\
  !*** ./track/audio-track.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track */ "./track/track.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


/**
 * Audio track representation of the player.
 * @classdesc
 */

var AudioTrack = /*#__PURE__*/function (_Track) {
  _inheritsLoose(AudioTrack, _Track);

  function AudioTrack() {
    return _Track.apply(this, arguments) || this;
  }

  return AudioTrack;
}(_track__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (AudioTrack);

/***/ }),

/***/ "./track/external-captions-handler.js":
/*!********************************************!*\
  !*** ./track/external-captions-handler.js ***!
  \********************************************/
/*! exports provided: ExternalCaptionsHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalCaptionsHandler", function() { return ExternalCaptionsHandler; });
/* harmony import */ var _error_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/error */ "./error/error.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");
/* harmony import */ var _text_track_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-track-display */ "./track/text-track-display.js");
/* harmony import */ var _text_track__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-track */ "./track/text-track.js");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./track */ "./track/track.js");
/* harmony import */ var _event_event_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event/event-type */ "./event/event-type.js");
/* harmony import */ var _event_fake_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event/fake-event */ "./event/fake-event.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/logger */ "./utils/logger.js");
/* harmony import */ var _event_event_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event/event-manager */ "./event/event-manager.js");
/* harmony import */ var _event_fake_event_target__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../event/fake-event-target */ "./event/fake-event-target.js");
/* harmony import */ var _vtt_cue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vtt-cue */ "./track/vtt-cue.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../player */ "./player.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














/**
 * enum for cues statuses
 * @const
 * @type {Object}
 */
var CuesStatus = {
  NOT_DOWNLOADED: 1,
  DOWNLOADING: 2,
  DOWNLOADED: 3
};
var SRT_POSTFIX = 'srt';
var VTT_POSTFIX = 'vtt';

var ExternalCaptionsHandler = /*#__PURE__*/function (_FakeEventTarget) {
  _inheritsLoose(ExternalCaptionsHandler, _FakeEventTarget);

  /**
   * The external captions handler class logger.
   * @type {any}
   * @static
   * @private
   */

  /**
   * Index that specifies the last cue that is playing / played in the text track cue array.
   * @type {number}
   * @private
   */

  /**
   * a map that holds the current cues that are in process. process may be in download or that the cues are being parsed.
   * @type {Object}
   * @private
   */

  /**
   * array of the active text cues of current track
   * @type {Array<Cue>}
   * @private
   */

  /**
   * indicates if a current external (non native) track is active or not.
   * @type {boolean}
   * @private
   */

  /**
   * indicates the last player time in the last time update event.
   * @type {number}
   * @private
   */

  /**
   * constructor
   * @param {Player} player - the player object.
   */
  function ExternalCaptionsHandler(player) {
    var _this;

    _this = _FakeEventTarget.call(this) || this;

    _defineProperty(_assertThisInitialized(_this), "_externalCueIndex", 0);

    _defineProperty(_assertThisInitialized(_this), "_textTrackModel", {});

    _defineProperty(_assertThisInitialized(_this), "_activeTextCues", []);

    _defineProperty(_assertThisInitialized(_this), "_isTextTrackActive", false);

    _defineProperty(_assertThisInitialized(_this), "_lastTimeUpdate", 0);

    _this._player = player;
    _this._eventManager = new _event_event_manager__WEBPACK_IMPORTED_MODULE_8__["default"]();
    return _this;
  }
  /**
   * selects external track start listening to cues
   * @returns {void}
   * @public
   */


  var _proto = ExternalCaptionsHandler.prototype;

  _proto.hideTextTrack = function hideTextTrack() {
    if (this._player.config.text.useNativeTextTrack) {
      this._removeCueChangeListeners();

      this._resetExternalNativeTextTrack();
    } else {
      // only if external text track was active we need to hide it.
      if (this._isTextTrackActive) {
        this._eventManager.unlisten(this._player, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].TIME_UPDATE);

        this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_6__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TEXT_CUE_CHANGED, {
          cues: []
        }));

        this._resetCurrentTrack();
      }
    }
  }
  /**
   * get external tracks (native and/or player module tracks)
   * @returns {Array<TextTrack>} returns an array with the new external tracks
   * @param {Array<Track>} tracks array with the player text tracks.
   * @public
   */
  ;

  _proto.getExternalTracks = function getExternalTracks(tracks) {
    var _this2 = this;

    var captions = this._player.sources.captions;

    if (!captions) {
      return [];
    }

    if (this._player.config.text.useNativeTextTrack) {
      this._addNativeTextTrack();
    }

    var playerTextTracks = tracks.filter(function (track) {
      return track instanceof _text_track__WEBPACK_IMPORTED_MODULE_3__["default"];
    });
    var newTextTracks = [];
    captions.forEach(function (caption) {
      if (!caption.language) {
        var error = new _error_error__WEBPACK_IMPORTED_MODULE_0__["default"](_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Severity.RECOVERABLE, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Category.TEXT, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.UNKNOWN_LANGUAGE, {
          caption: caption
        });

        _this2.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_6__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].ERROR, error));
      } else {
        var track = _this2._createTextTrack(caption);

        _this2._maybeAddTrack(track, caption, playerTextTracks, newTextTracks);
      }
    });
    return newTextTracks;
  }
  /**
   * checking if there is already a track with the same language
   * @param {TextTrack} track - textTrack to be added text tracks array that will be returned to the player
   * @param {PKExternalCaptionObject} caption - caption to be added to the model
   * @param {Array<Text>} playerTextTracks - player text tracks array
   * @param {Array<TextTrack>} newTextTracks - text track array that will be returned to the player
   * @returns {void}
   * @private
   */
  ;

  _proto._maybeAddTrack = function _maybeAddTrack(track, caption, playerTextTracks, newTextTracks) {
    var sameLangTrack = playerTextTracks.find(function (textTrack) {
      return textTrack.available && _track__WEBPACK_IMPORTED_MODULE_4__["default"].langComparer(caption.language, textTrack.language);
    });

    if (!sameLangTrack) {
      newTextTracks.push(track);

      this._updateTextTracksModel(caption);
    } else {
      ExternalCaptionsHandler._logger.warn('duplicated language, taking the inband option. Language: ', sameLangTrack.language);
    }
  }
  /**
   * creates a new text track
   * @param {PKExternalCaptionObject} caption - caption to create the text track with
   * @returns {TextTrack} - new text track
   * @private
   */
  ;

  _proto._createTextTrack = function _createTextTrack(caption) {
    return new _text_track__WEBPACK_IMPORTED_MODULE_3__["default"]({
      active: !!caption.default,
      kind: _text_track__WEBPACK_IMPORTED_MODULE_3__["default"].KIND.SUBTITLES,
      label: caption.label,
      language: caption.language,
      external: true
    });
  }
  /**
   * adding the caption to the class texttracks model
   * @param {PKExternalCaptionObject} caption - the caption to be added
   * @returns {void}
   * @private
   */
  ;

  _proto._updateTextTracksModel = function _updateTextTracksModel(caption) {
    this._textTrackModel[caption.language] = {
      cuesStatus: CuesStatus.NOT_DOWNLOADED,
      cues: [],
      url: caption.url,
      type: caption.type
    };
  }
  /**
   * selects external track start listening to cues
   * @param {TextTrack} textTrack - selected text track
   * @returns {void}
   * @public
   */
  ;

  _proto.selectTextTrack = function selectTextTrack(textTrack) {
    var _this3 = this;

    if (this._textTrackModel[textTrack.language]) {
      if (this._textTrackModel[textTrack.language].cuesStatus === CuesStatus.DOWNLOADED) {
        this._selectTextTrack(textTrack);
      } else if (this._textTrackModel[textTrack.language].cuesStatus === CuesStatus.NOT_DOWNLOADED) {
        this._downloadAndParseCues(textTrack).then(function () {
          _this3._textTrackModel[textTrack.language].cuesStatus = CuesStatus.DOWNLOADED;

          _this3._selectTextTrack(textTrack);
        }).catch(function (error) {
          return _this3.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_6__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].ERROR, error));
        });
      }
    }
  };

  _proto._selectTextTrack = function _selectTextTrack(textTrack) {
    this.hideTextTrack();

    if (this._player.config.text.useNativeTextTrack) {
      this._addCuesToNativeTextTrack(this._textTrackModel[textTrack.language].cues);

      this._addCueChangeListener();
    } else {
      this._setTextTrack(textTrack);
    }

    textTrack.active = true;
    this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_6__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TEXT_TRACK_CHANGED, {
      selectedTextTrack: textTrack
    }));
  }
  /**
   * set hasBeenReset to true for all the cues.
   * @returns {void}
   */
  ;

  _proto.resetAllCues = function resetAllCues() {
    for (var textTrack in this._textTrackModel) {
      this._textTrackModel[textTrack].cues.forEach(function (cue) {
        cue.hasBeenReset = true;
      });
    }
  }
  /**
   * Add cuechange listener to active textTrack.
   * @returns {void}
   * @private
   */
  ;

  _proto._addCueChangeListener = function _addCueChangeListener() {
    var _this4 = this;

    var videoElement = this._player.getVideoElement();

    if (videoElement && videoElement.textTracks) {
      var textTrackEl = Array.from(videoElement.textTracks).find(function (track) {
        return _text_track__WEBPACK_IMPORTED_MODULE_3__["default"].isNativeTextTrack(track) && track.mode === _text_track__WEBPACK_IMPORTED_MODULE_3__["default"].MODE.SHOWING;
      });

      if (textTrackEl) {
        this._eventManager.listen(textTrackEl, 'cuechange', function (e) {
          return _this4._onCueChange(e);
        });
      }
    }
  }
  /**
   * Remove cuechange listeners from textTracks
   * @returns {void}
   * @private
   */
  ;

  _proto._removeCueChangeListeners = function _removeCueChangeListeners() {
    var videoElement = this._player.getVideoElement();

    if (videoElement && videoElement.textTracks) {
      for (var i = 0; i < videoElement.textTracks.length; i++) {
        this._eventManager.unlisten(videoElement.textTracks[i], 'cuechange');
      }
    }
  }
  /**
   * oncuechange event handler.
   * @param {FakeEvent} e - The event arg.
   * @returns {void}
   * @private
   */
  ;

  _proto._onCueChange = function _onCueChange(e) {
    var activeCues = e.currentTarget.activeCues;
    var normalizedActiveCues = Object(_text_track__WEBPACK_IMPORTED_MODULE_3__["getActiveCues"])(activeCues);
    this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_6__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TEXT_CUE_CHANGED, {
      cues: normalizedActiveCues
    }));
  }
  /**
   * resets the handler
   * @returns {void}
   */
  ;

  _proto.reset = function reset() {
    this._resetCurrentTrack();

    this._textTrackModel = {};

    this._resetExternalNativeTextTrack();

    this._eventManager.removeAll();
  }
  /**
   * destroy function
   * @public
   * @returns {void}
   */
  ;

  _proto.destroy = function destroy() {
    this._textTrackModel = {};

    this._eventManager.destroy();

    this._activeTextCues = [];
  }
  /**
   * resets all the params of the current external text track that is playing
   * @returns {void}
   * @private
   */
  ;

  _proto._resetCurrentTrack = function _resetCurrentTrack() {
    this._activeTextCues = [];
    this._isTextTrackActive = false;

    this._maybeSetExternalCueIndex();
  }
  /**
   * Make a request to download a caption and parse it's content to cues.
   * @param {TextTrack} textTrack - download and parse the cues of the text track
   * @returns {Promise<any>} - resolves when the request returns and the caption string is parsed to cues.
   * @private
   */
  ;

  _proto._getCuesString = function _getCuesString(textTrack) {
    var _this5 = this;

    return new Promise(function (resolve, reject) {
      var track = _this5._textTrackModel[textTrack.language];

      var captionType = track.type || _this5._getFileType(track.url);

      if (![SRT_POSTFIX, VTT_POSTFIX].includes(captionType)) {
        _this5._textTrackModel[textTrack.language].cuesStatus = CuesStatus.NOT_DOWNLOADED;
        reject(new _error_error__WEBPACK_IMPORTED_MODULE_0__["default"](_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Severity.RECOVERABLE, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Category.TEXT, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.UNKNOWN_FILE_TYPE, {
          captionType: captionType
        }));
      }

      _utils_util__WEBPACK_IMPORTED_MODULE_1__["Http"].execute(track.url, {}, 'GET').then(function (response) {
        resolve(captionType === SRT_POSTFIX ? _this5._convertSrtToVtt(response) : response);
      }).catch(function () {
        _this5._textTrackModel[textTrack.language].cuesStatus = CuesStatus.NOT_DOWNLOADED;
        reject(new _error_error__WEBPACK_IMPORTED_MODULE_0__["default"](_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Severity.RECOVERABLE, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Category.TEXT, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.HTTP_ERROR, {
          url: track.url
        }));
      });
    });
  }
  /**
   * this calls the VTTCue parser and parse the .vtt captions string into vttCues objects
   * @param {string} vttStr - a string in a .vtt format to parse into VTTCues
   * @returns {Promise<*>} - parsed cues array
   * @private
   */
  ;

  _proto._parseCues = function _parseCues(vttStr) {
    return new Promise(function (resolve, reject) {
      var parser = new _text_track_display__WEBPACK_IMPORTED_MODULE_2__["Parser"](window, Object(_text_track_display__WEBPACK_IMPORTED_MODULE_2__["StringDecoder"])());
      var cues = [];

      parser.oncue = function (cue) {
        return cues.push(cue);
      };

      parser.onflush = function () {
        ExternalCaptionsHandler._logger.debug('finished parsing external cues');

        resolve(cues);
      };

      parser.parse(vttStr);
      parser.flush();
      parser.onparsingerror(function (e) {
        return reject(e);
      });
    });
  }
  /**
   * converts a .SRT string into .VTT string
   * @param {string} str - a string in a .SRT format
   * @returns {string} - a string in a .VTT format
   * @private
   */
  ;

  _proto._convertSrtToVtt = function _convertSrtToVtt(str) {
    var vttStr = str.replace(/(\d\d:\d\d:\d\d),(\d\d\d) --> (\d\d:\d\d:\d\d),(\d\d\d)/g, function (match, part1, part2, part3, part4) {
      return part1 + "." + part2 + " --> " + part3 + "." + part4;
    });
    return "WEBVTT\n\n" + vttStr;
  }
  /**
   * resolves with a caption object that contains all the caption data
   * start the parsing, creation and addition of the external captions.
   * @param {TextTrack} textTrack - create a single caption. when the process ends, this._textTrackModel is updated with
   * DOWNLOADED status
   * @returns {Promise<any>} - a promise that the action ended
   * @private
   */
  ;

  _proto._downloadAndParseCues = function _downloadAndParseCues(textTrack) {
    var _this6 = this;

    this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.DOWNLOADING;
    return new Promise(function (resolve, reject) {
      _this6._getCuesString(textTrack).then(function (vttString) {
        return _this6._parseCues(vttString);
      }).then(function (cuesArray) {
        _this6._textTrackModel[textTrack.language].cues = cuesArray;
        resolve();
      }).catch(function (error) {
        return reject(error);
      });
    });
  }
  /**
   * getting the file extension
   * @param {string} url - the url of the file
   * @returns {string} type of the file
   * @private
   */
  ;

  _proto._getFileType = function _getFileType(url) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
  }
  /**
   * callback for the 'timeupdate' event. on each time update this runs and checks if the active text cues array
   * was changed.
   * @param {TextTrack} track - the text track that that is currently displayed (active)
   * @returns {void}
   * @private
   */
  ;

  _proto._handleCaptionOnTimeUpdate = function _handleCaptionOnTimeUpdate(track) {
    var currentTime = this._player.currentTime;

    if (currentTime) {
      var cueIndexUpdated = false;

      if (this._hadSeeked()) {
        this._activeTextCues = [];
        cueIndexUpdated = this._maybeSetExternalCueIndex();
      }

      var activeCuesRemoved = this._maybeRemoveActiveCues();

      var activeCuesAdded = this._maybeAddToActiveCues(track);

      if (cueIndexUpdated || activeCuesAdded || activeCuesRemoved) {
        this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_6__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TEXT_CUE_CHANGED, {
          cues: this._activeTextCues
        }));
      } // sometimes the timeupdate event is fired before the seeked event - so we need to know the user seeked.


      this._lastTimeUpdate = currentTime;
    }
  }
  /**
   * check if there was a seek. we do that because 'timeupdate' is fired before 'seeked' event.
   * @returns {boolean} if there was a seek before
   * @private
   */
  ;

  _proto._hadSeeked = function _hadSeeked() {
    return !!this._player.currentTime && Math.abs(this._player.currentTime - this._lastTimeUpdate) > 1;
  }
  /**
   * @returns {boolean} if a cue/cues were removed from the active text cues array
   * @private
   */
  ;

  _proto._maybeRemoveActiveCues = function _maybeRemoveActiveCues() {
    var currentTime = this._player.currentTime;

    if (!currentTime) {
      return false;
    }

    var hadRemoved = false;

    for (var activeTextCuesIndex = 0; activeTextCuesIndex < this._activeTextCues.length; activeTextCuesIndex++) {
      var cue = this._activeTextCues[activeTextCuesIndex];

      if (currentTime < cue.startTime || cue.endTime < currentTime) {
        this._activeTextCues.splice(activeTextCuesIndex, 1);

        hadRemoved = true;
      }
    }

    return hadRemoved;
  }
  /**
   * @param {TextTrack} track - the selected text track
   * @returns {boolean} - if cues were added to the active text track
   * @private
   */
  ;

  _proto._maybeAddToActiveCues = function _maybeAddToActiveCues(track) {
    var currentTime = this._player.currentTime;

    if (!currentTime) {
      return false;
    }

    var hadAdded = false;
    var cues = this._textTrackModel[track.language].cues;

    while (this._externalCueIndex < cues.length && currentTime > cues[this._externalCueIndex].startTime) {
      this._activeTextCues.push(cues[this._externalCueIndex]);

      this._externalCueIndex++;
      hadAdded = true;
    }

    return hadAdded;
  }
  /**
   * updating the index of the text cues to the right location after a user seeked.
   * @returns {boolean} if the index was changed
   * @private
   */
  ;

  _proto._maybeSetExternalCueIndex = function _maybeSetExternalCueIndex() {
    var textTrack = this._player._getTextTracks().find(function (track) {
      return track.active && track.external;
    });

    if (textTrack && textTrack.external) {
      var cues = this._textTrackModel[textTrack.language] ? this._textTrackModel[textTrack.language].cues : [];
      var i = 0;

      for (; i < cues.length; i++) {
        // if there is a cue that should be displayed right now, cue start time < current time < cue end time
        if (cues[i].startTime < this._player.currentTime && this._player.currentTime < cues[i].endTime) {
          break; // this is for the first cue that is after the current time
        } else if (cues[i].endTime > this._player.currentTime && cues[i].startTime > this._player.currentTime) {
          break;
        }
      }

      this._externalCueIndex = i;
      return true;
    }

    return false;
  }
  /**
   * delete cues on reset to avoid usage of the text track on the next media
   * @return {void}
   */
  ;

  _proto._resetExternalNativeTextTrack = function _resetExternalNativeTextTrack() {
    var videoElement = this._player.getVideoElement();

    if (videoElement && videoElement.textTracks) {
      var track = Array.from(videoElement.textTracks).find(function (track) {
        return track ? _text_track__WEBPACK_IMPORTED_MODULE_3__["default"].isExternalTrack(track) : false;
      });

      if (track) {
        track.cues && Object.values(track.cues).forEach(function (cue) {
          return track.removeCue(cue);
        });
        track.mode = _text_track__WEBPACK_IMPORTED_MODULE_3__["default"].MODE.DISABLED;
      }
    }
  }
  /**
   * adding cues to an existing text element in a video tag
   * @param {Array<Cue>} cues - the cues to be added
   * @return {void}
   */
  ;

  _proto._addCuesToNativeTextTrack = function _addCuesToNativeTextTrack(cues) {
    var videoElement = this._player.getVideoElement();

    if (videoElement && videoElement.textTracks) {
      var track = Array.from(videoElement.textTracks).find(function (track) {
        return track ? _text_track__WEBPACK_IMPORTED_MODULE_3__["default"].isExternalTrack(track) : false;
      });

      if (track) {
        track.mode = _text_track__WEBPACK_IMPORTED_MODULE_3__["default"].MODE.SHOWING; // For IE 11 which is not support VTTCue API

        if (window.VTTCue === undefined) {
          var convertedCues = this._convertCues(cues);

          convertedCues.forEach(function (cue) {
            return track.addCue(cue);
          });
        } else {
          cues.forEach(function (cue) {
            return track.addCue(cue);
          });
        }
      }
    }
  }
  /**
   * converting cues to be instances of TextTrackCue
   * for browser which dose not support VTTCue API
   * @param {Array<Cue>} cues - the cues to be converted
   * @returns {Array<TextTrackCue>} the converted cues
   */
  ;

  _proto._convertCues = function _convertCues(cues) {
    return cues.map(function (cue) {
      return new window.TextTrackCue(cue.startTime, cue.endTime, cue.text);
    });
  }
  /**
   * adds a new text track element to the video element or set an existing one
   * (when adding a text track with existing language to the video element it will remove all its cues)
   * @returns {void}
   */
  ;

  _proto._addNativeTextTrack = function _addNativeTextTrack() {
    var videoElement = this._player.getVideoElement();

    if (videoElement && videoElement.textTracks) {
      var sameLanguageTrackIndex = Array.from(videoElement.textTracks).findIndex(function (track) {
        return track ? _text_track__WEBPACK_IMPORTED_MODULE_3__["default"].isExternalTrack(track) : false;
      });

      if (sameLanguageTrackIndex > -1) {
        this._resetExternalNativeTextTrack();
      } else {
        videoElement.addTextTrack(_text_track__WEBPACK_IMPORTED_MODULE_3__["default"].KIND.SUBTITLES, _text_track__WEBPACK_IMPORTED_MODULE_3__["default"].EXTERNAL_TRACK_ID, _text_track__WEBPACK_IMPORTED_MODULE_3__["default"].EXTERNAL_TRACK_ID);
      }
    }
  }
  /**
   * triggering the text track changed event and start listening to the time update on the player (for the the external text track).
   * @param {TextTrack} textTrack - text track to be set
   * @returns {void}
   * @private
   */
  ;

  _proto._setTextTrack = function _setTextTrack(textTrack) {
    var _this7 = this;

    if (!this._player.config.text.useNativeTextTrack) {
      this._isTextTrackActive = true;

      ExternalCaptionsHandler._logger.debug('External text track changed', textTrack);

      this._activeTextCues = [];
      this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_6__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_5__["CustomEventType"].TEXT_CUE_CHANGED, {
        cues: this._activeTextCues
      }));

      this._eventManager.listen(this._player, _event_event_type__WEBPACK_IMPORTED_MODULE_5__["Html5EventType"].TIME_UPDATE, function () {
        return _this7._handleCaptionOnTimeUpdate(textTrack);
      });
    }
  };

  return ExternalCaptionsHandler;
}(_event_fake_event_target__WEBPACK_IMPORTED_MODULE_9__["default"]);

_defineProperty(ExternalCaptionsHandler, "_logger", Object(_utils_logger__WEBPACK_IMPORTED_MODULE_7__["default"])('ExternalCaptionsHandler'));



/***/ }),

/***/ "./track/image-track.js":
/*!******************************!*\
  !*** ./track/image-track.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track */ "./track/track.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var ImageTrack = /*#__PURE__*/function (_Track) {
  _inheritsLoose(ImageTrack, _Track);

  function ImageTrack(settings) {
    var _this;

    _this = _Track.call(this, settings) || this;
    var url = settings.url,
        width = settings.width,
        height = settings.height,
        duration = settings.duration,
        rows = settings.rows,
        cols = settings.cols,
        customData = settings.customData;
    _this._url = url;
    _this._width = width;
    _this._height = height;
    _this._duration = duration;
    _this._customData = customData;
    _this._rows = rows || 1;
    _this._cols = cols || 1;
    return _this;
  }

  _createClass(ImageTrack, [{
    key: "url",
    get: function get() {
      return this._url;
    }
  }, {
    key: "width",
    get: function get() {
      return this._width;
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
  }, {
    key: "duration",
    get: function get() {
      return this._duration;
    }
  }, {
    key: "rows",
    get: function get() {
      return this._rows;
    }
  }, {
    key: "cols",
    get: function get() {
      return this._cols;
    }
  }, {
    key: "customData",
    get: function get() {
      return this._customData;
    }
  }, {
    key: "sliceWidth",
    get: function get() {
      return this._width / this._rows;
    }
  }, {
    key: "sliceHeight",
    get: function get() {
      return this._height / this._cols;
    }
  }]);

  return ImageTrack;
}(_track__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ImageTrack);

/***/ }),

/***/ "./track/label-options.js":
/*!********************************!*\
  !*** ./track/label-options.js ***!
  \********************************/
/*! exports provided: LabelOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelOptions", function() { return LabelOptions; });
var LabelOptions = {
  AUDIO: 'audio',
  CAPTIONS: 'captions',
  QUALITIES: 'qualities'
};


/***/ }),

/***/ "./track/text-style.js":
/*!*****************************!*\
  !*** ./track/text-style.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * We use this number to calculate the scale of the text. so it will be : 1 + 0.25 * FontSizes.value
 * So, if the user selects 400% the scale would be: 1 + 0.25 * 4 = 2. so the font size should be multiplied by 2.
 * The calculation of the size of the font is done in text-track-display and not in this module, because
 * the calculation in text-track-display also set the location of the container of the subtitiles according to the
 * font size.
 * @type {number}
 */
var IMPLICIT_SCALE_PERCENTAGE = 0.25;
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

var TextStyle = /*#__PURE__*/function () {
  function TextStyle() {
    _defineProperty(this, "_fontSizeIndex", 2);

    _defineProperty(this, "fontFamily", TextStyle.FontFamily.SANS_SERIF);

    _defineProperty(this, "fontColor", TextStyle.StandardColors.WHITE);

    _defineProperty(this, "fontOpacity", TextStyle.StandardOpacities.OPAQUE);

    _defineProperty(this, "backgroundColor", TextStyle.StandardColors.BLACK);

    _defineProperty(this, "backgroundOpacity", TextStyle.StandardOpacities.OPAQUE);

    _defineProperty(this, "fontEdge", TextStyle.EdgeStyles.NONE);
  }

  /**
   * Creates a CSS RGBA sctring for a given color and opacity values
   * @param {TextStyle.StandardColors} color - color value in RGB
   * @param {TextStyle.StandardOpacities} opacity - opacity value
   * @return {string} - CSS rgba string
   * @private
   */
  TextStyle.toRGBA = function toRGBA(color, opacity) {
    // shaka.asserts.assert(color.length == 3);
    return 'rgba(' + color.concat(opacity).join(',') + ')';
  };

  TextStyle.fromJson = function fromJson(setting) {
    var getValue = function getValue(newValue, defaultValue) {
      return typeof newValue !== 'undefined' && newValue !== null ? newValue : defaultValue;
    };

    var textStyle = new TextStyle();
    textStyle.fontEdge = getValue(setting.fontEdge, textStyle.fontEdge);
    textStyle.fontSize = getValue(setting.fontSize, textStyle.fontSize);
    textStyle.fontScale = getValue(setting.fontScale, textStyle.fontScale);
    textStyle.fontColor = getValue(setting.fontColor, textStyle.fontColor);
    textStyle.fontOpacity = getValue(setting.fontOpacity, textStyle.fontOpacity);
    textStyle.backgroundColor = getValue(setting.backgroundColor, textStyle.backgroundColor);
    textStyle.backgroundOpacity = getValue(setting.backgroundOpacity, textStyle.backgroundOpacity);
    textStyle.fontFamily = getValue(setting.fontFamily, textStyle.fontFamily);
    return textStyle;
  };

  TextStyle.toJson = function toJson(text) {
    return {
      fontEdge: text.fontEdge,
      fontSize: text.fontSize,
      fontScale: text.fontScale,
      fontColor: text.fontColor,
      fontOpacity: text.fontOpacity,
      backgroundColor: text.backgroundColor,
      backgroundOpacity: text.backgroundOpacity,
      fontFamily: text.fontFamily
    };
  };

  var _proto = TextStyle.prototype;

  _proto.getTextShadow = function getTextShadow() {
    // A given edge effect may be implemented with multiple shadows.
    // Collect them all into an array, then combine into one attribute.
    var shadows = [];

    for (var i = 0; i < this.fontEdge.length; i++) {
      // shaka.asserts.assert(this.fontEdge[i].length == 6);
      var color = this.fontEdge[i].slice(0, 3);
      var shadow = this.fontEdge[i].slice(3, 6);
      shadows.push(TextStyle.toRGBA(color, this.fontOpacity) + ' ' + shadow.join('px ') + 'px');
    }

    return shadows.join(',');
  }
  /**
   * Compute the CSS text necessary to represent this TextStyle.
   * Output does not contain any selectors.
   *
   * @return {string} - ::CUE CSS string
   */
  ;

  _proto.toCSS = function toCSS() {
    var attributes = [];
    attributes.push('font-family: ' + this.fontFamily);
    attributes.push('color: ' + TextStyle.toRGBA(this.fontColor, this.fontOpacity));
    attributes.push('background-color: ' + TextStyle.toRGBA(this.backgroundColor, this.backgroundOpacity));
    attributes.push('text-shadow: ' + this.getTextShadow());
    attributes.push('font-size: ' + this.fontSize);
    return attributes.join('!important; ');
  }
  /**
   * clones the textStyle object
   * @returns {TextStyle} the cloned textStyle object
   */
  ;

  _proto.clone = function clone() {
    return TextStyle.fromJson(TextStyle.toJson(this));
  }
  /**
   * comparing between 2 textStyle objects.
   * @param {TextStyle} textStyle - The textStyle to compare with.
   * @returns {boolean} - Whether the text styles are equal.
   */
  ;

  _proto.isEqual = function isEqual(textStyle) {
    return JSON.stringify(TextStyle.toJson(this)) === JSON.stringify(TextStyle.toJson(textStyle));
  };

  _createClass(TextStyle, [{
    key: "fontSize",
    // 100%
    set: function set(fontSize) {
      var index = TextStyle.FontSizes.findIndex(function (_ref) {
        var label = _ref.label;
        return label === fontSize;
      });

      if (index !== -1) {
        this._fontSizeIndex = index;
      }
    }
    /**
     * Percentage string matching a FontSizes entry
     */
    ,
    get: function get() {
      return TextStyle.FontSizes[this._fontSizeIndex].label;
    }
  }, {
    key: "fontScale",
    set: function set(fontScale) {
      var index = TextStyle.FontSizes.findIndex(function (_ref2) {
        var value = _ref2.value;
        return value === fontScale;
      });

      if (index !== -1) {
        this._fontSizeIndex = index;
      }
    }
    /**
     * Numeric value matching a FontSizes entry (for backward compatibility)
     */
    ,
    get: function get() {
      return TextStyle.FontSizes[this._fontSizeIndex].value;
    }
    /**
     * @type {TextStyle.FontFamily}
     */

  }, {
    key: "implicitFontScale",
    get: function get() {
      var fontSizeValue = TextStyle.FontSizes[this._fontSizeIndex].value;
      return IMPLICIT_SCALE_PERCENTAGE * fontSizeValue + 1;
    }
  }]);

  return TextStyle;
}();

_defineProperty(TextStyle, "FontFamily", {
  ARIAL: 'Arial',
  HELVETICA: 'Helvetica',
  VERDANA: 'Verdana',
  SANS_SERIF: 'sans-serif'
});

_defineProperty(TextStyle, "StandardColors", {
  WHITE: [255, 255, 255],
  BLACK: [0, 0, 0],
  RED: [255, 0, 0],
  GREEN: [0, 255, 0],
  BLUE: [0, 0, 255],
  YELLOW: [255, 255, 0],
  MAGENTA: [255, 0, 255],
  CYAN: [0, 255, 255]
});

_defineProperty(TextStyle, "StandardOpacities", {
  OPAQUE: 1,
  SEMI_HIGH: 0.75,
  SEMI_LOW: 0.25,
  TRANSPARENT: 0
});

_defineProperty(TextStyle, "EdgeStyles", {
  NONE: [],
  RAISED: [[34, 34, 34, 1, 1, 0], [34, 34, 34, 2, 2, 0], [34, 34, 34, 3, 3, 0]],
  DEPRESSED: [[204, 204, 204, 1, 1, 0], [204, 204, 204, 0, 1, 0], [34, 34, 34, -1, -1, 0], [34, 34, 34, 0, -1, 0]],
  UNIFORM: [[34, 34, 34, 0, 0, 4], [34, 34, 34, 0, 0, 4], [34, 34, 34, 0, 0, 4], [34, 34, 34, 0, 0, 4]],
  DROP: [[34, 34, 34, 2, 2, 3], [34, 34, 34, 2, 2, 4], [34, 34, 34, 2, 2, 5]]
});

_defineProperty(TextStyle, "FontSizes", [{
  value: -2,
  label: '50%'
}, {
  value: -1,
  label: '75%'
}, {
  value: 0,
  label: '100%'
}, {
  value: 2,
  label: '200%'
}, {
  value: 3,
  label: '300%'
}, {
  value: 4,
  label: '400%'
}]);

/* harmony default export */ __webpack_exports__["default"] = (TextStyle);

/***/ }),

/***/ "./track/text-track-display.js":
/*!*************************************!*\
  !*** ./track/text-track-display.js ***!
  \*************************************/
/*! exports provided: processCues, convertCueToDOMTree, Parser, StringDecoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processCues", function() { return processCues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertCueToDOMTree", function() { return convertCueToDOMTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringDecoder", function() { return StringDecoder; });
/* harmony import */ var _vtt_cue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vtt-cue */ "./track/vtt-cue.js");
/* harmony import */ var _vtt_region__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vtt-region */ "./track/vtt-region.js");
/* harmony import */ var _text_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-style */ "./track/text-style.js");
/* harmony import */ var _text_track__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-track */ "./track/text-track.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





/* eslint-disable */

/*
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

var fontScale = 1; // Try to parse input as a time stamp.

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
    return computeSeconds(m[1], m[2], m[3].replace(':', ''), m[4]);
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
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&lrm;': "\u200E",
  '&rlm;': "\u200F",
  '&nbsp;': "\xA0"
};
var TAG_NAME = {
  c: 'span',
  i: 'i',
  b: 'b',
  u: 'u',
  ruby: 'ruby',
  rt: 'rt',
  v: 'span',
  lang: 'span'
};
var TAG_ANNOTATION = {
  v: 'title',
  lang: 'lang'
};
var NEEDS_PARENT = {
  rt: 'ruby'
}; // A settings object holds key/value pairs and will ignore anything but the first
// assignment to a specific key.

function Settings() {
  this.values = _objCreate(null);
}

Settings.prototype = {
  // Only accept the first assignment to any key.
  set: function set(k, v) {
    if (!this.get(k) && v !== '') {
      this.values[k] = v;
    }
  },
  // Return the value for a key, or a default value.
  // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
  // a number of possible default values as properties where 'defaultKey' is
  // the key of the property that will be chosen; otherwise it's assumed to be
  // a single value.
  get: function get(k, dflt, defaultKey) {
    if (defaultKey) {
      return this.has(k) ? this.values[k] : dflt[defaultKey];
    }

    return this.has(k) ? this.values[k] : dflt;
  },
  // Check whether we have a value for a key.
  has: function has(k) {
    return k in this.values;
  },
  // Accept a setting if its one of the given alternatives.
  alt: function alt(k, v, a) {
    for (var n = 0; n < a.length; ++n) {
      if (v === a[n]) {
        this.set(k, v);
        break;
      }
    }
  },
  // Accept a setting if its a valid (signed) integer.
  integer: function integer(k, v) {
    if (/^-?\d+$/.test(v)) {
      // integer
      this.set(k, parseInt(v, 10));
    }
  },
  // Accept a setting if its a valid percentage.
  percent: function percent(k, v) {
    var m;

    if (m = v.match(/^([\d]{1,3})(\.[\d]*)?%$/)) {
      v = parseFloat(v);

      if (v >= 0 && v <= 100) {
        this.set(k, v);
        return true;
      }
    }

    return false;
  }
}; // Helper function to parse input into groups separated by 'groupDelim', and
// interprete each group as a key/value pair separated by 'keyValueDelim'.

function parseOptions(input, callback, keyValueDelim, groupDelim) {
  var groups = groupDelim ? input.split(groupDelim) : [input];

  for (var i in groups) {
    if (typeof groups[i] !== 'string') {
      continue;
    }

    var kv = groups[i].split(keyValueDelim);

    if (kv.length !== 2) {
      continue;
    }

    var k = kv[0];
    var v = kv[1];
    callback(k, v);
  }
}

function parseCue(input, cue, regionList) {
  // Remember the original input if we need to throw an error.
  var oInput = input; // 4.1 WebVTT timestamp

  function consumeTimeStamp() {
    var ts = parseTimeStamp(input);

    if (ts === null) {
      throw new ParsingError(ParsingError.Errors.BadTimeStamp, 'Malformed timestamp: ' + oInput);
    } // Remove time stamp from input.


    input = input.replace(/^[^\sa-zA-Z-]+/, '');
    return ts;
  } // 4.4.2 WebVTT cue settings


  function consumeCueSettings(input, cue) {
    var settings = new Settings();
    parseOptions(input, function (k, v) {
      switch (k) {
        case 'region':
          // Find the last region we parsed with the same region id.
          for (var i = regionList.length - 1; i >= 0; i--) {
            if (regionList[i].id === v) {
              settings.set(k, regionList[i].region);
              break;
            }
          }

          break;

        case 'vertical':
          settings.alt(k, v, ['rl', 'lr']);
          break;

        case 'line':
          var vals = v.split(','),
              vals0 = vals[0];
          settings.integer(k, vals0);
          settings.percent(k, vals0) ? settings.set('snapToLines', false) : null;
          settings.alt(k, vals0, ['auto']);

          if (vals.length === 2) {
            settings.alt('lineAlign', vals[1], ['start', 'center', 'end']);
          }

          break;

        case 'position':
          vals = v.split(',');
          settings.percent(k, vals[0]);

          if (vals.length === 2) {
            settings.alt('positionAlign', vals[1], ['start', 'center', 'end']);
          }

          break;

        case 'size':
          settings.percent(k, v);
          break;

        case 'align':
          settings.alt(k, v, ['start', 'center', 'end', 'left', 'right']);
          break;
      }
    }, /:/, /\s/); // Apply default values for any missing fields.

    cue.region = settings.get('region', null);
    cue.vertical = settings.get('vertical', '');
    cue.line = settings.get('line', cue.line || 'auto');
    cue.lineAlign = settings.get('lineAlign', 'start');
    cue.snapToLines = settings.get('snapToLines', true);
    cue.size = settings.get('size', 100); // Safari still uses the old middle value and won't accept center

    try {
      cue.align = settings.get('align', 'center');
    } catch (e) {
      cue.align = settings.get('align', 'middle');
    }

    cue.position = settings.get('position', cue.position || 'auto');
    cue.positionAlign = settings.get('positionAlign', {
      start: 'start',
      left: 'start',
      center: 'center',
      middle: 'center',
      end: 'end',
      right: 'end'
    }, cue.align);
  }

  function skipWhitespace() {
    input = input.replace(/^\s+/, '');
  } // 4.1 WebVTT cue timings.


  skipWhitespace();
  cue.startTime = consumeTimeStamp(); // (1) collect cue start time

  skipWhitespace();

  if (input.substr(0, 3) !== '-->') {
    // (3) next characters must match "-->"
    throw new ParsingError(ParsingError.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + oInput);
  }

  input = input.substr(3);
  skipWhitespace();
  cue.endTime = consumeTimeStamp(); // (5) collect cue end time
  // 4.1 WebVTT cue settings list.

  skipWhitespace();
  consumeCueSettings(input, cue);
} // Parse content into a document fragment.


function parseContent(window, input) {
  function nextToken() {
    // Check for end-of-string.
    if (!input) {
      return null;
    } // Consume 'n' characters from the input.


    function consume(result) {
      input = input.substr(result.length);
      return result;
    }

    var m = input.match(/^([^<]*)(<[^>]+>?)?/); // If there is some text before the next tag, return it, otherwise return
    // the tag.

    return consume(m[1] ? m[1] : m[2]);
  } // Unescape a string 's'.


  function unescape1(e) {
    return ESCAPE[e];
  }

  function unescape(s) {
    var m;

    while (m = s.match(/&(amp|lt|gt|lrm|rlm|nbsp);/)) {
      s = s.replace(m[0], unescape1);
    }

    return s;
  }

  function shouldAdd(current, element) {
    return !NEEDS_PARENT[element.localName] || NEEDS_PARENT[element.localName] === current.localName;
  } // Create an element for this tag.


  function createElement(type, annotation) {
    var tagName = TAG_NAME[type];

    if (!tagName) {
      return null;
    }

    var element = window.document.createElement(tagName);
    var name = TAG_ANNOTATION[type];

    if (name && annotation) {
      element[name] = annotation.trim();
    }

    return element;
  }

  var rootDiv = window.document.createElement('div'),
      current = rootDiv,
      t,
      tagStack = [];

  while ((t = nextToken()) !== null) {
    if (t[0] === '<') {
      if (t[1] === '/') {
        // If the closing tag matches, move back up to the parent node.
        if (tagStack.length && tagStack[tagStack.length - 1] === t.substr(2).replace('>', '')) {
          tagStack.pop();
          current = current.parentNode;
        } // Otherwise just ignore the end tag.


        continue;
      }

      var ts = parseTimeStamp(t.substr(1, t.length - 2));
      var node = void 0;

      if (ts) {
        // Timestamps are lead nodes as well.
        node = window.document.createProcessingInstruction('timestamp', ts);
        current.appendChild(node);
        continue;
      }

      var m = t.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/); // If we can't parse the tag, skip to the next tag.

      if (!m) {
        continue;
      } // Try to construct an element, and ignore the tag if we couldn't.


      node = createElement(m[1], m[3]);

      if (!node) {
        continue;
      } // Determine if the tag should be added based on the context of where it
      // is placed in the cuetext.


      if (!shouldAdd(current, node)) {
        continue;
      } // Set the class list (as a list of classes, separated by space).


      if (m[2]) {
        node.className = m[2].substr(1).replace('.', ' ');
      } // Append the node to the current node, and enter the scope of the new
      // node.


      tagStack.push(m[1]);
      current.appendChild(node);
      current = node;
      continue;
    } // Text nodes are leaf nodes.


    current.appendChild(window.document.createTextNode(unescape(t)));
  }

  return rootDiv;
} // This is a list of all the Unicode characters that have a strong
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
      text = '',
      charCode;

  if (!cueDiv || !cueDiv.childNodes) {
    return 'ltr';
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

    if (node.tagName === 'ruby') {
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
        return 'rtl';
      }
    }
  }

  return 'ltr';
}

function computeLinePos(cue) {
  if (typeof cue.line === 'number' && (cue.snapToLines || cue.line >= 0 && cue.line <= 100)) {
    return cue.line;
  }

  if (!cue.track || !cue.track.textTrackList || !cue.track.textTrackList.mediaElement) {
    return -1;
  }

  var track = cue.track;
  var trackList = track.textTrackList;
  var count = 0;

  for (var i = 0; i < trackList.length && trackList[i] !== track; i++) {
    if (trackList[i].mode === _text_track__WEBPACK_IMPORTED_MODULE_3__["default"].MODE.SHOWING) {
      count++;
    }
  }

  return ++count * -1;
}

var StyleBox = /*#__PURE__*/function () {
  function StyleBox() {} // Apply styles to a div. If there is no div passed then it defaults to the
  // div on 'this'.


  var _proto = StyleBox.prototype;

  _proto.applyStyles = function applyStyles(styles, div) {
    div = div || this.div;

    for (var prop in styles) {
      if (styles.hasOwnProperty(prop)) {
        div.style[prop] = styles[prop];
      }
    }
  };

  _proto.formatStyle = function formatStyle(val, unit) {
    return val === 0 ? 0 : val + unit;
  };

  return StyleBox;
}(); // Constructs the computed display state of the cue (a div). Places the div
// into the overlay which should be a block level element (usually a div).


var CueStyleBox = /*#__PURE__*/function (_StyleBox) {
  _inheritsLoose(CueStyleBox, _StyleBox);

  function CueStyleBox(window, cue, styleOptions) {
    var _this;

    _this = _StyleBox.call(this) || this;
    var isIE8 = typeof navigator !== 'undefined' && /MSIE\s8\.0/.test(navigator.userAgent);
    var color = 'rgba(255, 255, 255, 1)';
    var backgroundColor = 'rgba(0, 0, 0, 0.8)';
    var textShadow = '';

    if (typeof WebVTTSet !== 'undefined') {
      color = WebVTTSet.fontSet;
      backgroundColor = WebVTTSet.backgroundSet;
      textShadow = WebVTTSet.edgeSet;
    }

    if (isIE8) {
      color = 'rgb(255, 255, 255)';
      backgroundColor = 'rgb(0, 0, 0)';
    }

    _this.cue = cue; // Parse our cue's text into a DOM tree rooted at 'cueDiv'. This div will
    // have inline positioning and will function as the cue background box.

    _this.cueDiv = parseContent(window, cue.text);
    var styles = {
      color: styleOptions.color,
      backgroundColor: styleOptions.backgroundColor,
      textShadow: styleOptions.textShadow,
      position: 'relative',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'inline'
    };

    if (!isIE8) {
      styles.writingMode = cue.vertical === '' ? 'horizontal-tb' : cue.vertical === 'lr' ? 'vertical-lr' : 'vertical-rl';
      styles.unicodeBidi = 'plaintext';
    }

    _this.applyStyles(styles, _this.cueDiv); // Create an absolutely positioned div that will be used to position the cue
    // div. Note, all WebVTT cue-setting alignments are equivalent to the CSS
    // mirrors of them except "middle" which is "center" in CSS.


    _this.div = window.document.createElement('div');
    styles = {
      textAlign: cue.align === 'middle' ? 'center' : cue.align,
      font: styleOptions.font,
      whiteSpace: 'pre-line',
      position: 'absolute'
    };

    if (!isIE8) {
      styles.direction = determineBidi(_this.cueDiv);
      styles.writingMode = cue.vertical === '' ? 'horizontal-tb' : cue.vertical === 'lr' ? 'vertical-lr' : 'vertical-rl'.stylesunicodeBidi = 'plaintext';
    }

    _this.applyStyles(styles);

    _this.div.appendChild(_this.cueDiv); // Calculate the distance from the reference edge of the viewport to the text
    // position of the cue box. The reference edge will be resolved later when
    // the box orientation styles are applied.


    var textPos = 0;
    var align = cue.positionAlign || cue.align;

    switch (align) {
      case 'start':
      case 'left':
        textPos = cue.position;
        break;

      case 'center':
        textPos = cue.position - cue.size / 2;
        break;

      case 'end':
      case 'right':
        textPos = cue.position - cue.size;
        break;
    } // Horizontal box orientation; textPos is the distance from the left edge of the
    // area to the left edge of the box and cue.size is the distance extending to
    // the right from there.


    if (cue.vertical === '') {
      _this.applyStyles({
        left: _this.formatStyle(textPos, '%'),
        width: _this.formatStyle(Math.min(cue.size, 100 - textPos) || cue.size, '%')
      }); // Vertical box orientation; textPos is the distance from the top edge of the
      // area to the top edge of the box and cue.size is the height extending
      // downwards from there.

    } else {
      _this.applyStyles({
        top: _this.formatStyle(textPos, '%'),
        height: _this.formatStyle(Math.min(cue.size, 100 - textPos) || cue.size, '%')
      });
    }

    _this.move = function (box) {
      this.applyStyles({
        top: this.formatStyle(box.top, 'px'),
        bottom: this.formatStyle(box.bottom, 'px'),
        left: this.formatStyle(box.left, 'px'),
        right: this.formatStyle(box.right, 'px'),
        height: this.formatStyle(box.height, 'px'),
        width: this.formatStyle(box.width, 'px')
      });
    };

    return _this;
  }

  return CueStyleBox;
}(StyleBox); // Represents the co-ordinates of an Element in a way that we can easily
// compute things with such as if it overlaps or intersects with another Element.
// Can initialize it with either a StyleBox or another BoxPosition.


var BoxPosition = /*#__PURE__*/function () {
  function BoxPosition(obj) {
    _defineProperty(this, "overlaps", function (b2) {
      return this.left < b2.right && this.right > b2.left && this.top < b2.bottom && this.bottom > b2.top;
    });

    // Either a BoxPosition was passed in and we need to copy it, or a StyleBox
    // was passed in and we need to copy the results of 'getBoundingClientRect'
    // as the object returned is readonly. All co-ordinate values are in reference
    // to the viewport origin (top left).
    var lh, height, width, top;

    if (obj.div) {
      height = obj.div.offsetHeight;
      width = obj.div.offsetWidth;
      top = obj.div.offsetTop;
      var rects = (rects = obj.div.childNodes) && (rects = rects[0]) && rects.getClientRects && rects.getClientRects();
      obj = obj.div.getBoundingClientRect(); // In certain cases the outter div will be slightly larger then the sum of
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
    this.lineHeight = lh || obj.lineHeight || 13;
  } // Move the box along a particular axis. Optionally pass in an amount to move
  // the box. If no amount is passed then the default is the line height of the
  // box.


  var _proto2 = BoxPosition.prototype;

  _proto2.move = function move(axis, toMove) {
    toMove = toMove !== undefined ? toMove : this.lineHeight;

    switch (axis) {
      case '+x':
        this.left += toMove;
        this.right += toMove;
        break;

      case '-x':
        this.left -= toMove;
        this.right -= toMove;
        break;

      case '+y':
        this.top += toMove;
        this.bottom += toMove;
        break;

      case '-y':
        this.top -= toMove;
        this.bottom -= toMove;
        break;
    }
  } // Check if this box overlaps another box, b2.
  ;

  // Check if this box overlaps any other boxes in boxes.
  _proto2.overlapsAny = function overlapsAny(boxes) {
    for (var i = 0; i < boxes.length; i++) {
      if (this.overlaps(boxes[i])) {
        return true;
      }
    }

    return false;
  } // Check if this box is within another box.
  ;

  _proto2.within = function within(container) {
    return this.top >= container.top && this.bottom <= container.bottom && this.left >= container.left && this.right <= container.right;
  } // Check if this box is entirely within the container or it is overlapping
  // on the edge opposite of the axis direction passed. For example, if "+x" is
  // passed and the box is overlapping on the left edge of the container, then
  // return true.
  ;

  _proto2.overlapsOppositeAxis = function overlapsOppositeAxis(container, axis) {
    switch (axis) {
      case '+x':
        return this.left < container.left;

      case '-x':
        return this.right > container.right;

      case '+y':
        return this.top < container.top;

      case '-y':
        return this.bottom > container.bottom;
    }
  } // Find the percentage of the area that this box is overlapping with another
  // box.
  ;

  _proto2.intersectPercentage = function intersectPercentage(b2) {
    var x = Math.max(0, Math.min(this.right, b2.right) - Math.max(this.left, b2.left)),
        y = Math.max(0, Math.min(this.bottom, b2.bottom) - Math.max(this.top, b2.top)),
        intersectArea = x * y;
    return intersectArea / (this.height * this.width);
  } // Convert the positions from this box to CSS compatible positions using
  // the reference container's positions. This has to be done because this
  // box's positions are in reference to the viewport origin, whereas, CSS
  // values are in referecne to their respective edges.
  ;

  _proto2.toCSSCompatValues = function toCSSCompatValues(reference) {
    return {
      top: this.top - reference.top,
      bottom: reference.bottom - this.bottom,
      left: this.left - reference.left,
      right: reference.right - this.right,
      height: this.height,
      width: this.width
    };
  } // Get an object that represents the box's position without anything extra.
  // Can pass a StyleBox, HTMLElement, or another BoxPositon.
  ;

  BoxPosition.getSimpleBoxPosition = function getSimpleBoxPosition(obj) {
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
  };

  return BoxPosition;
}(); // Move a StyleBox to its specified, or next best, position. The containerBox
// is the box that contains the StyleBox, such as a div. boxPositions are
// a list of other boxes that the styleBox can't overlap with.


function moveBoxToLinePosition(window, styleBox, containerBox, boxPositions) {
  // Find the best position for a cue box, b, on the video. The axis parameter
  // is a list of axis, the order of which, it will move the box along. For example:
  // Passing ["+x", "-x"] will move the box first along the x axis in the positive
  // direction. If it doesn't find a good position for it there it will then move
  // it along the x axis in the negative direction.
  function findBestPosition(b, axis) {
    var bestPosition,
        specifiedPosition = new BoxPosition(b),
        percentage = 1; // Highest possible so the first thing we get is better.

    for (var i = 0; i < axis.length; i++) {
      while (b.overlapsOppositeAxis(containerBox, axis[i]) || b.within(containerBox) && b.overlapsAny(boxPositions)) {
        b.move(axis[i]);
      } // We found a spot where we aren't overlapping anything. This is our
      // best position.


      if (b.within(containerBox)) {
        return b;
      }

      var p = b.intersectPercentage(containerBox); // If we're outside the container box less then we were on our last try
      // then remember this position as the best position.

      if (percentage > p) {
        bestPosition = new BoxPosition(b);
        percentage = p;
      } // Reset the box position to the specified position.


      b = new BoxPosition(specifiedPosition);
    }

    return bestPosition || specifiedPosition;
  }

  var boxPosition = new BoxPosition(styleBox),
      cue = styleBox.cue,
      linePos = computeLinePos(cue),
      axis = []; // If we have a line number to align the cue to.

  if (cue.snapToLines) {
    var size;

    switch (cue.vertical) {
      case '':
        axis = ['+y', '-y'];
        size = 'height';
        break;

      case 'rl':
        axis = ['+x', '-x'];
        size = 'width';
        break;

      case 'lr':
        axis = ['-x', '+x'];
        size = 'width';
        break;
    }

    var step = boxPosition.lineHeight,
        position = step * Math.round(linePos),
        maxPosition = containerBox[size] + step,
        initialAxis = axis[0]; // If the specified intial position is greater then the max position then
    // clamp the box to the amount of steps it would take for the box to
    // reach the max position.

    if (Math.abs(position) > maxPosition) {
      position = position < 0 ? -1 : 1;
      position *= Math.ceil(maxPosition / step) * step;
    } // If computed line position returns negative then line numbers are
    // relative to the bottom of the video instead of the top. Therefore, we
    // need to increase our initial position by the length or width of the
    // video, depending on the writing direction, and reverse our axis directions.


    if (linePos < 0) {
      position += cue.vertical === '' ? containerBox.height : containerBox.width;
      axis = axis.reverse();
    } // Move the box to the specified position. This may not be its best
    // position.


    boxPosition.move(initialAxis, position);
  } else {
    // If we have a percentage line value for the cue.
    var calculatedPercentage = boxPosition.lineHeight / containerBox.height * 100;

    switch (cue.lineAlign) {
      case 'center':
        linePos -= calculatedPercentage / 2;
        break;

      case 'end':
        linePos -= calculatedPercentage;
        break;
    } // Apply initial line position to the cue box.


    switch (cue.vertical) {
      case '':
        styleBox.applyStyles({
          top: styleBox.formatStyle(linePos, '%')
        });
        break;

      case 'rl':
        styleBox.applyStyles({
          left: styleBox.formatStyle(linePos, '%')
        });
        break;

      case 'lr':
        styleBox.applyStyles({
          right: styleBox.formatStyle(linePos, '%')
        });
        break;
    }

    axis = ['+y', '-x', '+x', '-y']; // Get the box position again after we've applied the specified positioning
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

var FONT_SIZE_PERCENT = 0.058;
var FONT_STYLE = 'sans-serif';
var CUE_BACKGROUND_PADDING = '1.5%'; // Runs the processing model over the cues and regions passed to it.
// @param overlay A block level element (usually a div) that the computed cues
//                and regions will be placed into.

function processCues(window, cues, overlay, style) {
  if (!window || !cues || !overlay) {
    return null;
  } // Remove all previous children.


  while (overlay.firstChild) {
    overlay.removeChild(overlay.firstChild);
  }

  var paddedOverlay = window.document.createElement('div');
  paddedOverlay.style.position = 'absolute';
  paddedOverlay.style.left = '0';
  paddedOverlay.style.right = '0';
  paddedOverlay.style.top = '0';
  paddedOverlay.style.bottom = '0';
  paddedOverlay.style.margin = CUE_BACKGROUND_PADDING;
  overlay.appendChild(paddedOverlay); // Determine if we need to compute the display states of the cues. This could
  // be the case if a cue's state has been changed since the last computation or
  // if it has not been computed yet.

  function shouldCompute(cues) {
    for (var i = 0; i < cues.length; i++) {
      if (cues[i].hasBeenReset || !cues[i].displayState) {
        return true;
      }
    }

    return false;
  } // We don't need to recompute the cues' display states. Just reuse them.


  if (!shouldCompute(cues)) {
    for (var i = 0; i < cues.length; i++) {
      paddedOverlay.appendChild(cues[i].displayState);
    }

    return;
  }

  var boxPositions = [],
      containerBox = BoxPosition.getSimpleBoxPosition(paddedOverlay),
      dimensionSize = containerBox.height < containerBox.width ? containerBox.height : containerBox.width,
      fontSize = Math.round(dimensionSize * FONT_SIZE_PERCENT * 100) / 100;
  var styleOptions = {
    font: fontSize * fontScale * style.implicitFontScale + 'px ' + style.fontFamily,
    color: _text_style__WEBPACK_IMPORTED_MODULE_2__["default"].toRGBA(style.fontColor, style.fontOpacity),
    backgroundColor: _text_style__WEBPACK_IMPORTED_MODULE_2__["default"].toRGBA(style.backgroundColor, style.backgroundOpacity),
    textShadow: style.getTextShadow()
  };

  (function () {
    var styleBox, cue;

    for (var _i = 0; _i < cues.length; _i++) {
      cue = cues[_i]; // Compute the intial position and styles of the cue div.

      styleBox = new CueStyleBox(window, cue, styleOptions);
      paddedOverlay.appendChild(styleBox.div); // Move the cue div to it's correct line position.

      moveBoxToLinePosition(window, styleBox, containerBox, boxPositions); // Remember the computed div so that we don't have to recompute it later
      // if we don't have too.

      cue.displayState = styleBox.div;
      boxPositions.push(BoxPosition.getSimpleBoxPosition(styleBox));
    }
  })();
}

var Parser = function Parser(window, decoder) {
  this.window = window;
  this.state = 'INITIAL';
  this.buffer = '';
  this.decoder = decoder || new TextDecoder('utf8');
  this.regionList = [];
};

var StringDecoder = function StringDecoder() {
  return {
    decode: function decode(data) {
      if (!data) {
        return '';
      }

      if (typeof data !== 'string') {
        throw new Error('Error - expected string data.');
      }

      return decodeURIComponent(encodeURIComponent(data));
    }
  };
};

var _objCreate = Object.create || function () {
  function F() {}

  return function (o) {
    if (arguments.length !== 1) {
      throw new Error('Object.create shim only accepts one parameter.');
    }

    F.prototype = o;
    return new F();
  };
}(); // Creates a new ParserError object from an errorData object. The errorData
// object should have default code and message properties. The default message
// property can be overriden by passing in a message parameter.
// See ParsingError.Errors below for acceptable errors.


function ParsingError(errorData, message) {
  this.name = 'ParsingError';
  this.code = errorData.code;
  this.message = message || errorData.message;
}

ParsingError.prototype = _objCreate(Error.prototype);
ParsingError.prototype.constructor = ParsingError; // ParsingError metadata for acceptable ParsingErrors.

ParsingError.Errors = {
  BadSignature: {
    code: 0,
    message: 'Malformed WebVTT signature.'
  },
  BadTimeStamp: {
    code: 1,
    message: 'Malformed time stamp.'
  }
};
Parser.prototype = {
  // If the error is a ParsingError then report it to the consumer if
  // possible. If it's not a ParsingError then throw it like normal.
  reportOrThrowError: function reportOrThrowError(e) {
    if (e instanceof ParsingError) {
      this.onparsingerror && this.onparsingerror(e);
    } else {
      throw e;
    }
  },
  parse: function parse(data) {
    var self = this; // If there is no data then we won't decode it, but will just try to parse
    // whatever is in buffer already. This may occur in circumstances, for
    // example when flush() is called.

    if (data) {
      // Try to decode the data that we received.
      self.buffer += self.decoder.decode(data, {
        stream: true
      });
    }

    function collectNextLine() {
      var buffer = self.buffer;
      var pos = 0;

      while (pos < buffer.length && buffer[pos] !== '\r' && buffer[pos] !== '\n') {
        ++pos;
      }

      var line = buffer.substr(0, pos); // Advance the buffer early in case we fail below.

      if (buffer[pos] === '\r') {
        ++pos;
      }

      if (buffer[pos] === '\n') {
        ++pos;
      }

      self.buffer = buffer.substr(pos);
      return line;
    } // 3.4 WebVTT region and WebVTT region settings syntax


    function parseRegion(input) {
      var settings = new Settings();
      parseOptions(input, function (k, v) {
        switch (k) {
          case 'id':
            settings.set(k, v);
            break;

          case 'width':
            settings.percent(k, v);
            break;

          case 'lines':
            settings.integer(k, v);
            break;

          case 'regionanchor':
          case 'viewportanchor':
            var xy = v.split(',');

            if (xy.length !== 2) {
              break;
            } // We have to make sure both x and y parse, so use a temporary
            // settings object here.


            var anchor = new Settings();
            anchor.percent('x', xy[0]);
            anchor.percent('y', xy[1]);

            if (!anchor.has('x') || !anchor.has('y')) {
              break;
            }

            settings.set(k + 'X', anchor.get('x'));
            settings.set(k + 'Y', anchor.get('y'));
            break;

          case 'scroll':
            settings.alt(k, v, ['up']);
            break;
        }
      }, /=/, /\s/); // Create the region, using default values for any values that were not
      // specified.

      if (settings.has('id')) {
        var region = new _vtt_region__WEBPACK_IMPORTED_MODULE_1__["Region"]();
        region.width = settings.get('width', 100);
        region.lines = settings.get('lines', 3);
        region.regionAnchorX = settings.get('regionanchorX', 0);
        region.regionAnchorY = settings.get('regionanchorY', 100);
        region.viewportAnchorX = settings.get('viewportanchorX', 0);
        region.viewportAnchorY = settings.get('viewportanchorY', 100);
        region.scroll = settings.get('scroll', ''); // Register the region.

        self.onregion && self.onregion(region); // Remember the VTTRegion for later in case we parse any VTTCues that
        // reference it.

        self.regionList.push({
          id: settings.get('id'),
          region: region
        });
      }
    } // 3.2 WebVTT metadata header syntax


    function parseHeader(input) {
      parseOptions(input, function (k, v) {
        switch (k) {
          case 'Region':
            // 3.3 WebVTT region metadata header syntax
            parseRegion(v);
            break;
        }
      }, /:/);
    } // 5.1 WebVTT file parsing.


    try {
      var line;

      if (self.state === 'INITIAL') {
        // We can't start parsing until we have the first line.
        if (!/\r\n|\n/.test(self.buffer)) {
          return this;
        }

        line = collectNextLine();
        var m = line.match(/^WEBVTT([ \t].*)?$/);

        if (!m || !m[0]) {
          throw new ParsingError(ParsingError.Errors.BadSignature);
        }

        self.state = 'HEADER';
      }

      var alreadyCollectedLine = false;

      while (self.buffer) {
        // We can't parse a line until we have the full line.
        if (!/\r\n|\n/.test(self.buffer)) {
          return this;
        }

        if (!alreadyCollectedLine) {
          line = collectNextLine();
        } else {
          alreadyCollectedLine = false;
        }

        switch (self.state) {
          case 'HEADER':
            // 13-18 - Allow a header (metadata) under the WEBVTT line.
            if (/:/.test(line)) {
              parseHeader(line);
            } else if (!line) {
              // An empty line terminates the header and starts the body (cues).
              self.state = 'ID';
            }

            continue;

          case 'NOTE':
            // Ignore NOTE blocks.
            if (!line) {
              self.state = 'ID';
            }

            continue;

          case 'ID':
            // Check for the start of NOTE blocks.
            if (/^NOTE($|[ \t])/.test(line)) {
              self.state = 'NOTE';
              break;
            } // 19-29 - Allow any number of line terminators, then initialize new cue values.


            if (!line) {
              continue;
            }

            self.cue = new _vtt_cue__WEBPACK_IMPORTED_MODULE_0__["Cue"](0, 0, '');
            self.state = 'CUE'; // 30-39 - Check if self line contains an optional identifier or timing data.

            if (line.indexOf('-->') === -1) {
              self.cue.id = line;
              continue;
            }

          // Process line as start of a cue.

          /*falls through*/

          case 'CUE':
            // 40 - Collect cue timings and settings.
            try {
              parseCue(line, self.cue, self.regionList);
            } catch (e) {
              self.reportOrThrowError(e); // In case of an error ignore rest of the cue.

              self.cue = null;
              self.state = 'BADCUE';
              continue;
            }

            self.state = 'CUETEXT';
            continue;

          case 'CUETEXT':
            var hasSubstring = line.indexOf('-->') !== -1; // 34 - If we have an empty line then report the cue.
            // 35 - If we have the special substring '-->' then report the cue,
            // but do not collect the line as we need to process the current
            // one as a new cue.

            if (!line || hasSubstring && (alreadyCollectedLine = true)) {
              // We are done parsing self cue.
              self.oncue && self.oncue(self.cue);
              self.cue = null;
              self.state = 'ID';
              continue;
            }

            if (self.cue.text) {
              self.cue.text += '\n';
            }

            self.cue.text += line;
            continue;

          case 'BADCUE':
            // BADCUE
            // 54-62 - Collect and discard the remaining cue.
            if (!line) {
              self.state = 'ID';
            }

            continue;
        }
      }
    } catch (e) {
      self.reportOrThrowError(e); // If we are currently parsing a cue, report what we have.

      if (self.state === 'CUETEXT' && self.cue && self.oncue) {
        self.oncue(self.cue);
      }

      self.cue = null; // Enter BADWEBVTT state if header was not parsed correctly otherwise
      // another exception occurred so enter BADCUE state.

      self.state = self.state === 'INITIAL' ? 'BADWEBVTT' : 'BADCUE';
    }

    return this;
  },
  flush: function flush() {
    var self = this;

    try {
      // Finish decoding the stream.
      self.buffer += self.decoder.decode(); // Synthesize the end of the current cue or region.

      if (self.cue || self.state === 'HEADER') {
        self.buffer += '\n\n';
        self.parse();
      } // If we've flushed, parsed, and we're still on the INITIAL state then
      // that means we don't have enough of the stream to parse the first
      // line.


      if (self.state === 'INITIAL') {
        throw new ParsingError(ParsingError.Errors.BadSignature);
      }
    } catch (e) {
      self.reportOrThrowError(e);
    }

    self.onflush && self.onflush();
    return this;
  }
};


/***/ }),

/***/ "./track/text-track.js":
/*!*****************************!*\
  !*** ./track/text-track.js ***!
  \*****************************/
/*! exports provided: default, getActiveCues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveCues", function() { return getActiveCues; });
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track */ "./track/track.js");
/* harmony import */ var _vtt_cue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vtt-cue */ "./track/vtt-cue.js");
/* harmony import */ var _error_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error/error */ "./error/error.js");
var _class, _temp;

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Text track representation of the player.
 * @classdesc
 */

var TextTrack = (_temp = _class = /*#__PURE__*/function (_Track) {
  _inheritsLoose(TextTrack, _Track);

  /**
   * use as a uniq identifier of the track.
   * @static
   * @type {number}
   * @private
   */

  /**
   * index generator.
   * @returns {number} - the next track index.
   */
  TextTrack._generateIndex = function _generateIndex() {
    return TextTrack._tracksCount++;
  }
  /**
   * reset the track count.
   * @returns {void}
   */
  ;

  TextTrack.reset = function reset() {
    TextTrack._tracksCount = 0;
  }
  /**
   * The kind of the text track:
   * subtitles/captions/metadata.
   * @member
   * @type {string}
   * @private
   */
  ;

  _createClass(TextTrack, [{
    key: "kind",

    /**
     * Getter for the kind of the text track.
     * @public
     * @returns {string} - The kind of the text track.
     */
    get: function get() {
      return this._kind;
    }
    /**
     * Getter for the external of the text track.
     * @public
     * @returns {boolean} - Whether the text track is external.
     */

  }, {
    key: "external",
    get: function get() {
      return this._external;
    }
    /**
     * Getter for the default of the text track.
     * @public
     * @returns {boolean} - Whether the text track is default.
     */

  }, {
    key: "default",
    get: function get() {
      return this._default;
    }
    /**
     * @constructor
     * @param {Object} settings - The track settings object.
     */

  }]);

  function TextTrack(settings) {
    var _this;

    if (settings === void 0) {
      settings = {};
    }

    _this = _Track.call(this, settings) || this; // use language tag if no display label is available

    _this._label = _this.label || _this.language;
    _this._kind = settings.kind;
    _this._external = settings.external;
    _this._index = TextTrack._generateIndex();
    _this._default = _this.active;
    return _this;
  }

  return TextTrack;
}(_track__WEBPACK_IMPORTED_MODULE_0__["default"]), _defineProperty(_class, "_tracksCount", 0), _temp);
TextTrack.MODE = {
  DISABLED: 'disabled',
  SHOWING: 'showing',
  HIDDEN: 'hidden'
};
TextTrack.KIND = {
  METADATA: 'metadata',
  SUBTITLES: 'subtitles',
  CAPTIONS: 'captions'
};
TextTrack.EXTERNAL_TRACK_ID = 'playkit-external-track';

TextTrack.isMetaDataTrack = function (track) {
  return track && track.kind === TextTrack.KIND.METADATA;
};

TextTrack.isNativeTextTrack = function (track) {
  return track && [TextTrack.KIND.SUBTITLES, TextTrack.KIND.CAPTIONS].includes(track.kind);
};

TextTrack.isExternalTrack = function (track) {
  return track && [track.language, track.label].includes(TextTrack.EXTERNAL_TRACK_ID);
};
/**
 * Normalize cues to be of type of VTT model.
 * @param {TextTrackCueList} textTrackCueList - The text track cue list contains the cues.
 * @returns {void}
 * @private
 */


function getActiveCues(textTrackCueList) {
  var normalizedCues = [];

  for (var _iterator = _createForOfIteratorHelperLoose(textTrackCueList), _step; !(_step = _iterator()).done;) {
    var cue = _step.value;

    //Normalize cues to be of type of VTT model
    if (window.VTTCue && cue instanceof window.VTTCue || window.DataCue && cue instanceof window.DataCue) {
      normalizedCues.push(cue);
    } else if (window.TextTrackCue && cue instanceof window.TextTrackCue) {
      try {
        normalizedCues.push(new _vtt_cue__WEBPACK_IMPORTED_MODULE_1__["Cue"](cue.startTime, cue.endTime, cue.text));
      } catch (error) {
        new _error_error__WEBPACK_IMPORTED_MODULE_2__["default"](_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Severity.RECOVERABLE, _error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Category.TEXT, _error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Code.UNABLE_TO_CREATE_TEXT_CUE, error);
      }
    }
  }

  return normalizedCues;
}

/* harmony default export */ __webpack_exports__["default"] = (TextTrack);


/***/ }),

/***/ "./track/timed-metadata.js":
/*!*********************************!*\
  !*** ./track/timed-metadata.js ***!
  \*********************************/
/*! exports provided: TimedMetadata, createTextTrackCue, createTimedMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimedMetadata", function() { return TimedMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextTrackCue", function() { return createTextTrackCue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTimedMetadata", function() { return createTimedMetadata; });
var TimedMetadata =
/**
 * @constructor
 * @param {number} startTime - start time.
 * @param {number} endTime - end time.
 * @param {string} id - id.
 * @param {string} type - type.
 * @param {any} metadata - metadata.
 */
function TimedMetadata(startTime, endTime, id, type, metadata) {
  this.startTime = startTime;
  this.endTime = endTime;
  this.id = id;
  this.type = type;
  this.metadata = metadata;
};

TimedMetadata.TYPE = {
  ID3: 'id3',
  EMSG: 'emsg',
  CUE_POINT: 'cuepoint',
  CUSTOM: 'custom'
};
/**
 * Create a standard TextTrackCue.
 * @param {TimedMetadata} timedMetadata - timed metadata object.
 * @returns {TextTrackCue} - the created text track cue
 * @private
 */

function createTextTrackCue(timedMetadata) {
  try {
    var startTime = timedMetadata.startTime,
        endTime = timedMetadata.endTime,
        id = timedMetadata.id,
        _type = timedMetadata.type,
        metadata = timedMetadata.metadata;
    var cue = {};

    if (window.VTTCue) {
      cue = new window.VTTCue(startTime, endTime, '');
    } else if (window.TextTrackCue) {
      // IE11 support
      cue = new window.TextTrackCue(startTime, endTime, '');
    }

    var cueValue = {
      key: _type,
      data: metadata
    };
    cue.id = id;
    cue.value = cueValue;
    return cue;
  } catch (e) {
    return null;
  }
}
/**
 * Create a timed metadata object from a standard TextTrackCue.
 * @param {TextTrackCue} cue - text track cue.
 * @returns {?TimedMetadata} - the created timed metadata object.
 * @private
 */


function createTimedMetadata(cue) {
  if (cue) {
    var startTime = cue.startTime,
        endTime = cue.endTime,
        id = cue.id;

    var typeAndMetadata = _getTypeAndMetadata(cue);

    if (typeAndMetadata) {
      var _getTypeAndMetadata2 = _getTypeAndMetadata(cue),
          _type2 = _getTypeAndMetadata2.type,
          metadata = _getTypeAndMetadata2.metadata;

      return new TimedMetadata(startTime, endTime, id, _type2, metadata);
    }
  }

  return null;
}
/**
 * @param {TextTrackCue} cue - cue
 * @return {Object} - type and data
 * @private
 */


function _getTypeAndMetadata(cue) {
  if (cue) {
    var _type3 = cue.type,
        value = cue.value,
        track = cue.track;

    if (value) {
      var key = value.key,
          data = value.data;
      var isId3 = _type3 === 'org.id3' || (track && track.label) === 'id3';
      var timedMetadataType = Object.values(TimedMetadata.TYPE).find(function (type) {
        return type === key;
      });

      if (!timedMetadataType) {
        timedMetadataType = isId3 ? TimedMetadata.TYPE.ID3 : TimedMetadata.TYPE.CUSTOM;
      }

      return {
        type: timedMetadataType,
        metadata: isId3 || !data ? value : data
      };
    }
  }

  return null;
}



/***/ }),

/***/ "./track/track-type.js":
/*!*****************************!*\
  !*** ./track/track-type.js ***!
  \*****************************/
/*! exports provided: TrackType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackType", function() { return TrackType; });
var TrackType = Object.freeze({
  VIDEO: 'video',
  AUDIO: 'audio',
  TEXT: 'text',
  IMAGE: 'image'
});


/***/ }),

/***/ "./track/track.js":
/*!************************!*\
  !*** ./track/track.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Track; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * General track representation of the player.
 * @classdesc
 */
var Track = /*#__PURE__*/function () {
  /**
   * Comparing language strings.
   * @param {string} inputLang - The configured language.
   * @param {string} trackLang - The default track language.
   * @param {boolean} equal - Optional flag to check for matching languages.
   * @returns {boolean} - Whether the strings are equal or starts with the same substring.
   */
  Track.langComparer = function langComparer(inputLang, trackLang, equal) {
    try {
      inputLang = inputLang.toLowerCase();
      trackLang = trackLang.toLowerCase();

      if (equal) {
        return inputLang ? inputLang === trackLang : false;
      } else {
        return inputLang ? inputLang.startsWith(trackLang) || trackLang.startsWith(inputLang) : false;
      }
    } catch (e) {
      return false;
    }
  };

  Track.clone = function clone(track) {
    return Object.assign(Object.create(Object.getPrototypeOf(track)), track);
  }
  /**
   * The id of the track.
   * @member
   * @type {string}
   * @private
   */
  ;

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
    ,

    /**
     * Setter for the label of the track.
     * @public
     * @param {string} value - The label of the track.
     */
    set: function set(value) {
      this._label = value;
    }
    /**
     * Setter for the available indicator
     * @public
     * @param {boolean} isAvailable - The indicator if track available or not
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
     * Getter for the available indicator
     * @public
     * @returns {boolean} - The indicator if track available or not.
     */
    ,

    /**
     * Setter for the index of the track.
     * @public
     * @param {number} value - The index of the track.
     * @returns {void}
     */
    set: function set(value) {
      this._index = value;
    }
  }, {
    key: "available",
    get: function get() {
      return this._available;
    },
    set: function set(isAvailable) {
      this._available = isAvailable;
    }
    /**
     * @constructor
     * @param {Object} settings - The track settings object.
     */

  }]);

  function Track(settings) {
    if (settings === void 0) {
      settings = {};
    }

    this._id = settings.id;
    this._active = settings.active;
    this._label = settings.label;
    this._language = settings.language;
    this._index = settings.index;
    this._available = typeof settings.available === 'boolean' ? settings.available : true;
    this.clone = Track.clone.bind(null, this);
  }

  return Track;
}();



/***/ }),

/***/ "./track/video-track.js":
/*!******************************!*\
  !*** ./track/video-track.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track */ "./track/track.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


/**
 * Video track representation of the player.
 * @classdesc
 */

var VideoTrack = /*#__PURE__*/function (_Track) {
  _inheritsLoose(VideoTrack, _Track);

  _createClass(VideoTrack, [{
    key: "bandwidth",

    /**
     * @member {number} _bandwidth - The bandwidth of the video track
     * @type {number}
     * @private
     */

    /**
     * @member {number} _width - The width of the video track
     * @type {number}
     * @private
     */

    /**
     * @member {number} _height - The height of the video track
     * @type {number}
     * @private
     */

    /**
     * @public
     * @returns {number} - The bandwidth of the video track
     */
    get: function get() {
      return this._bandwidth;
    }
    /**
     * @public
     * @returns {number} - The width of the video track
     */

  }, {
    key: "width",
    get: function get() {
      return this._width;
    }
    /**
     * @public
     * @returns {number} - The height of the video track
     */

  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
    /**
     * @constructor
     * @param {Object} settings - The track settings object
     */

  }]);

  function VideoTrack(settings) {
    var _this;

    if (settings === void 0) {
      settings = {};
    }

    _this = _Track.call(this, settings) || this;
    _this._bandwidth = settings.bandwidth;
    _this._width = settings.width;
    _this._height = settings.height;
    _this._label = settings.label ? settings.label : _this._height ? _this._height + 'p' : undefined;
    return _this;
  }

  return VideoTrack;
}(_track__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (VideoTrack);

/***/ }),

/***/ "./track/vtt-cue.js":
/*!**************************!*\
  !*** ./track/vtt-cue.js ***!
  \**************************/
/*! exports provided: Cue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cue", function() { return Cue; });
/* harmony import */ var _text_track_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-track-display */ "./track/text-track-display.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var autoKeyword = 'auto';
var directionSetting = {
  '': true,
  lr: true,
  rl: true
};
var alignSetting = {
  start: true,
  center: true,
  end: true,
  left: true,
  right: true
};
/**
 * helper
 * @param {string} value - the string to find
 * @returns {string | boolean} - the aligned sting if found
 */

function findDirectionSetting(value) {
  if (typeof value !== 'string') {
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
  if (typeof value !== 'string') {
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


var VTTCue = /*#__PURE__*/function () {
  /**
   * // Lets us know when the VTTCue's data has changed in such a way that we need
   * to recompute its display state. This lets us compute its display state lazily.
   * @type {boolean}
   */

  /**
   * This is used as part of the rendering model, to keep cues in a consistent position.
   * http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
   * @type {undefined}
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
   * A boolean indicating whether playback of the media resource is to pause when the end of the
   * range to which the cue applies is reached.
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
   * configures the cue to use vertical text layout rather than horizontal text layout.
   * Vertical text layout is sometimes used in Japanese, for example. The default is horizontal layout
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
   * The line defines positioning of the cue box.
   * @type {string | number}
   * @private
   */

  /**
   * An alignment for the cue box’s line, one of start/center/end alignment
   * @type {string}
   * @private
   */

  /**
   * The position defines the indent of the cue box in the direction defined by the writing direction
   * @type {number}
   * @private
   */

  /**
   * An alignment for the cue box in the dimension of the writing direction, describing what the position
   * is anchored to
   * @type {string}
   * @private
   */

  /**
   * A number giving the size of the cue box, to be interpreted as a percentage of the video, as defined
   * by the writing direction.
   * @type {number}
   * @private
   */

  /**
   * An alignment for all lines of text within the cue box, in the dimension of the writing direction
   * @type {string}
   * @private
   */
  function VTTCue(startTime, endTime, text) {
    _defineProperty(this, "hasBeenReset", false);

    _defineProperty(this, "displayState", undefined);

    _defineProperty(this, "_id", '');

    _defineProperty(this, "_pauseOnExit", false);

    _defineProperty(this, "_region", null);

    _defineProperty(this, "_vertical", '');

    _defineProperty(this, "_snapToLines", true);

    _defineProperty(this, "_line", 'auto');

    _defineProperty(this, "_lineAlign", 'start');

    _defineProperty(this, "_position", 50);

    _defineProperty(this, "_positionAlign", 'center');

    _defineProperty(this, "_size", 50);

    _defineProperty(this, "_align", 'center');

    this._startTime = startTime;
    this._endTime = endTime;
    this._text = text;
    /**
     * Other <track> spec defined properties
     */
  }

  var _proto = VTTCue.prototype;

  _proto.resetCue = function resetCue() {
    this.hasBeenReset = true;
  };

  _proto.getCueAsHTML = function getCueAsHTML() {
    return Object(_text_track_display__WEBPACK_IMPORTED_MODULE_0__["convertCueToDOMTree"])(window, this.text);
  };

  _createClass(VTTCue, [{
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = '' + value;
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
      return this._startTime;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Start time must be set to a number.');
      }

      this._startTime = value;
      this.resetCue();
    }
  }, {
    key: "endTime",
    get: function get() {
      return this._endTime;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new TypeError('End time must be set to a number.');
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
      this._text = '' + value;
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
      var setting = findDirectionSetting(value); // Have to check for false because the setting an be an empty string.

      if (setting === false) {
        throw new SyntaxError('An invalid or illegal string was specified.');
      } else if (typeof setting === 'string') {
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
      if (typeof value !== 'number' && value !== autoKeyword) {
        throw new SyntaxError('An invalid number or illegal string was specified.');
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
        throw new SyntaxError('An invalid or illegal string was specified.');
      } else if (typeof setting === 'string') {
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
        throw new Error('Position must be between 0 and 100.');
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
        throw new SyntaxError('An invalid or illegal string was specified.');
      } else if (typeof setting === 'string') {
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
        throw new Error('Size must be between 0 and 100.');
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
        throw new SyntaxError('An invalid or illegal string was specified.');
      } else if (typeof setting === 'string') {
        this._align = setting;
        this.resetCue();
      }
    }
  }]);

  return VTTCue;
}();

var Cue;

if (typeof window !== 'undefined' && window.VTTCue) {
  Cue = window.VTTCue;
} else {
  Cue = VTTCue;
}



/***/ }),

/***/ "./track/vtt-region.js":
/*!*****************************!*\
  !*** ./track/vtt-region.js ***!
  \*****************************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var scrollSetting = {
  '': true,
  up: true
};
/**
 * find scroll setting
 * @param {string} value - a string
 * @returns {*} the settings
 */

function findScrollSetting(value) {
  if (typeof value !== 'string') {
    return false;
  }

  var scroll = scrollSetting[value.toLowerCase()];
  return scroll ? value.toLowerCase() : false;
}
/**
 * check percentage validation
 * @param {number} value - percentage
 * @returns {boolean} - boolean
 */


function isValidPercentValue(value) {
  return typeof value === 'number' && value >= 0 && value <= 100;
} // VTTRegion shim http://dev.w3.org/html5/webvtt/#vttregion-interface


var VTTRegion = /*#__PURE__*/function () {
  function VTTRegion() {
    _defineProperty(this, "_width", 100);

    _defineProperty(this, "_lines", 3);

    _defineProperty(this, "_regionAnchorX", 0);

    _defineProperty(this, "_regionAnchorY", 100);

    _defineProperty(this, "_viewportAnchorX", 0);

    _defineProperty(this, "_viewportAnchorY", 100);

    _defineProperty(this, "_scroll", '');
  }

  _createClass(VTTRegion, [{
    key: "width",
    get: function get() {
      return this._width;
    },
    set: function set(value) {
      if (!isValidPercentValue(value)) {
        throw new Error('Width must be between 0 and 100.');
      }

      this._width = value;
    }
  }, {
    key: "scroll",
    get: function get() {
      return this._scroll;
    },
    set: function set(value) {
      var setting = findScrollSetting(value); // Have to check for false as an empty string is a legal value.

      if (setting === false) {
        throw new SyntaxError('An invalid or illegal string was specified.');
      }

      this._scroll = setting;
    }
  }, {
    key: "viewportAnchorY",
    get: function get() {
      return this._viewportAnchorY;
    },
    set: function set(value) {
      if (!isValidPercentValue(value)) {
        throw new Error('ViewportAnchorY must be between 0 and 100.');
      }

      this._viewportAnchorY = value;
    }
  }, {
    key: "viewportAnchorX",
    get: function get() {
      return this._viewportAnchorX;
    },
    set: function set(value) {
      if (!isValidPercentValue(value)) {
        throw new Error('ViewportAnchorX must be between 0 and 100.');
      }

      this._viewportAnchorX = value;
    }
  }, {
    key: "regionAnchorX",
    get: function get() {
      return this._regionAnchorX;
    },
    set: function set(value) {
      if (!isValidPercentValue(value)) {
        throw new Error('RegionAnchorY must be between 0 and 100.');
      }

      this._regionAnchorX = value;
    }
  }, {
    key: "lines",
    get: function get() {
      return this._lines;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Lines must be set to a number.');
      }

      this._lines = value;
    }
  }, {
    key: "regionAnchorY",
    get: function get() {
      return this._regionAnchorY;
    },
    set: function set(value) {
      if (!isValidPercentValue(value)) {
        throw new Error('RegionAnchorX must be between 0 and 100.');
      }

      this._regionAnchorY = value;
    }
  }]);

  return VTTRegion;
}();

var Region;

if (typeof window !== 'undefined' && window.VTTRegion) {
  Region = window.VTTRegion;
} else {
  Region = VTTRegion;
}



/***/ }),

/***/ "./utils/binary-search.js":
/*!********************************!*\
  !*** ./utils/binary-search.js ***!
  \********************************/
/*! exports provided: binarySearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binarySearch", function() { return binarySearch; });
/**
 * @param {Array<any>} list The array to search.
 * @param {Function} comparisonFn
 *      Called and provided a candidate item as the first argument.
 *      Should return:
 *          > -1 if the item should be located at a lower index than the provided item.
 *          > 1 if the item should be located at a higher index than the provided item.
 *          > 0 if the item is the item you're looking for.
 *
 * @return {any} The object if it is found or null otherwise.
 */
function binarySearch(list, comparisonFn) {
  if (list === void 0) {
    list = [];
  }

  if (comparisonFn === void 0) {
    comparisonFn = function comparisonFn() {
      return 1;
    };
  }

  if (list.length === 0 || list.length === 1 && comparisonFn(list[0]) !== 0) {
    return null;
  }

  var mid = Math.floor(list.length / 2);

  if (comparisonFn(list[mid]) === 0) {
    return list[mid];
  }

  if (comparisonFn(list[mid]) > 0) {
    return binarySearch(list.slice(0, mid), comparisonFn);
  } else {
    return binarySearch(list.slice(mid + 1), comparisonFn);
  }
}

/***/ }),

/***/ "./utils/env.js":
/*!**********************!*\
  !*** ./utils/env.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ua-parser-js */ "../node_modules/ua-parser-js/src/ua-parser.js");
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_0__);

var SmartTvRegex = /^.*(smart-tv|smarttv).*$/i;
var LGTVRegex = /^.*(web0s).*(smarttv).*$/i;
var SAMSUNGTVRegex = /^.*(smart-tv).*(tizen).*$/i;
var HISENSETVRegex = /^.*(vidaa).*(smarttv).*$/i; //recognize as safari

var SAMSUNGBrowserParser = [[SAMSUNGTVRegex], [[ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.BROWSER.NAME, 'SAMSUNG_TV_BROWSER'], [ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.BROWSER.MAJOR, ''], [ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.BROWSER.VERSION, '']]]; //recognize os of smartTV devices

var OSParser = [[LGTVRegex], [ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.OS.NAME], [HISENSETVRegex], [ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.OS.NAME]]; //add smart tv as smart tv devices

var DeviceParser = [[LGTVRegex], [[ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.VENDOR, 'LG'], [ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.TYPE, ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.SMARTTV]], [SAMSUNGTVRegex], [[ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.VENDOR, 'SAMSUNG'], [ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.TYPE, ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.SMARTTV]], [HISENSETVRegex], [[ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.VENDOR, 'HISENSE'], [ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.TYPE, ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.SMARTTV]], [SmartTvRegex], [[ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.TYPE, ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.SMARTTV]]];
var EdgeChromiumParser = [[/(edg)\/((\d+)?[\w.]+)/i], [[ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.BROWSER.NAME, 'Edge'], ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.BROWSER.VERSION, ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.BROWSER.MAJOR]];
var BrowserParser = [].concat(EdgeChromiumParser, SAMSUNGBrowserParser);
var Env = new ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a(undefined, {
  browser: BrowserParser,
  device: DeviceParser,
  os: OSParser
}).getResult();
Env.isConsole = Env.device.type === ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.CONSOLE;
Env.isSmartTV = Env.device.type === ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.SMARTTV;
Env.isMobile = Env.device.type === ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.MOBILE;
Env.isTablet = Env.device.type === ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.TABLET;
Env.isWearable = Env.device.type === ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.WEARABLE;
Env.isEmbedded = Env.device.type === ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a.DEVICE.EMBEDDED;
Env.isIPadOS = Env.os.name === 'Mac OS' && 'ontouchend' in document;
Env.isSafari = Env.browser.name.includes('Safari');
Env.isIOS = Env.os.name === 'iOS';
Env.isMacOS = Env.os.name === 'Mac OS';
/* harmony default export */ __webpack_exports__["default"] = (Env);

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: Number, String, Object, Generator, Dom, Http, VERSION, ResizeWatcher, MultiMap, binarySearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./utils/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["Number"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "String", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["String"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Object", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["Object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Generator", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["Generator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dom", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["Dom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["Http"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["VERSION"]; });

/* harmony import */ var _resize_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resize-watcher */ "./utils/resize-watcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResizeWatcher", function() { return _resize_watcher__WEBPACK_IMPORTED_MODULE_1__["ResizeWatcher"]; });

/* harmony import */ var _multi_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multi-map */ "./utils/multi-map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiMap", function() { return _multi_map__WEBPACK_IMPORTED_MODULE_2__["MultiMap"]; });

/* harmony import */ var _binary_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binary-search */ "./utils/binary-search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "binarySearch", function() { return _binary_search__WEBPACK_IMPORTED_MODULE_3__["binarySearch"]; });






/***/ }),

/***/ "./utils/jsonp.js":
/*!************************!*\
  !*** ./utils/jsonp.js ***!
  \************************/
/*! exports provided: jsonp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonp", function() { return jsonp; });
/* harmony import */ var _error_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/error */ "./error/error.js");

var JSONP_TIMEOUT = 5000;
var CALLBACK_PREFIX = 'jsonpcallback';
var JSONP_FORMAT_STRING = 'responseFormat=jsonp&callback=';
/**
 * JSONP utility.
 * @param {string} url - The url of the request.
 * @param {string} callback - Callback function to be called when the request returns.
 * @param {Object} options - Object contains configuration (currently only timeout).
 * @returns {Promise<*>} - A promise with the callback output.
 */

function jsonp(url, callback, options) {
  options = options || {};
  var timeout = options.timeout ? options.timeout : JSONP_TIMEOUT;
  var script = document.createElement('script');
  var callbackId = CALLBACK_PREFIX + Math.round(Date.now() + Math.random() * 1000001);
  var scriptUri = url;
  var timer;
  /**
   * function to clean the DOM from the script tag and from the function
   * @returns {void}
   */

  var _cleanup = function _cleanup() {
    if (script && script.parentNode) {
      script.parentNode.removeChild(script);
    }

    window[callbackId] = function () {};

    if (timer) {
      clearTimeout(timer);
    }
  };

  return new Promise(function (resolve, reject) {
    if (timeout) {
      timer = setTimeout(function () {
        _cleanup();

        reject(new _error_error__WEBPACK_IMPORTED_MODULE_0__["default"](_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Severity.CRITICAL, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Category.NETWORK, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.TIMEOUT, url));
      }, timeout);
    }
    /**
     * a wrapper to the callback function, to save a closure
     * @param {Object} data - the data we get from the server, in response to the request
     * @returns {void}
     */


    window[callbackId] = function (data) {
      var callbackResult = callback(data, url);

      _cleanup();

      resolve(callbackResult);
    };

    if (scriptUri.match(/\?/)) {
      scriptUri += '&' + JSONP_FORMAT_STRING + callbackId;
    } else {
      scriptUri += '?' + JSONP_FORMAT_STRING + callbackId;
    }

    script.type = 'text/javascript';
    script.src = scriptUri;
    document.getElementsByTagName('head')[0].appendChild(script);
  });
}



/***/ }),

/***/ "./utils/locale.js":
/*!*************************!*\
  !*** ./utils/locale.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Locale; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Locale class
 * @class
 *
 */
var Locale = /*#__PURE__*/function () {
  function Locale() {}

  _createClass(Locale, null, [{
    key: "language",

    /**
     * tries to return the locale language in IOS-693-1 format(two-letter codes, one per language for)
     * @returns {string} - the IOS-693-1 language string
     * @static
     */
    get: function get() {
      var lang;

      if (navigator.languages && navigator.languages.length) {
        // latest versions of Chrome and Firefox set this correctly
        lang = navigator.languages[0];
      } else if (navigator.userLanguage) {
        // IE only
        lang = navigator.userLanguage;
      } else {
        // latest versions of Chrome, Firefox, and Safari set this correctly
        lang = navigator.language;
      }

      if (lang && lang.match('-')) {
        lang = lang.split('-')[0];
      }

      return lang;
    }
  }]);

  return Locale;
}();



/***/ }),

/***/ "./utils/logger.js":
/*!*************************!*\
  !*** ./utils/logger.js ***!
  \*************************/
/*! exports provided: default, LogLevel, LogLevelType, getLogLevel, setLogLevel, setLogHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevelType", function() { return LogLevelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogLevel", function() { return getLogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return setLogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogHandler", function() { return setLogHandler; });
/* harmony import */ var js_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-logger */ "../node_modules/js-logger/src/logger.js");
/* harmony import */ var js_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_logger__WEBPACK_IMPORTED_MODULE_0__);

var LogLevel = {
  DEBUG: js_logger__WEBPACK_IMPORTED_MODULE_0__["DEBUG"],
  INFO: js_logger__WEBPACK_IMPORTED_MODULE_0__["INFO"],
  TIME: js_logger__WEBPACK_IMPORTED_MODULE_0__["TIME"],
  WARN: js_logger__WEBPACK_IMPORTED_MODULE_0__["WARN"],
  ERROR: js_logger__WEBPACK_IMPORTED_MODULE_0__["ERROR"],
  OFF: js_logger__WEBPACK_IMPORTED_MODULE_0__["OFF"]
};
var LogLevelType = {}; // Build the log level types enums according to the LogLevel object

Object.keys(LogLevel).forEach(function (key) {
  LogLevelType[key] = key;
});
js_logger__WEBPACK_IMPORTED_MODULE_0__["useDefaults"]({
  defaultLevel: js_logger__WEBPACK_IMPORTED_MODULE_0__["ERROR"]
});
/**
 * sets the logger handler
 * @private
 * @param {LogHandlerType} handler - the log level
 * @returns {void}
 */

function setLogHandler(handler) {
  js_logger__WEBPACK_IMPORTED_MODULE_0__["setHandler"](function (messages, context) {
    return handler(messages, context);
  });
}
/**
 * get a logger
 * @param {?string} name - the logger name
 * @returns {Object} - the logger class
 */


function getLogger(name) {
  if (!name) {
    return js_logger__WEBPACK_IMPORTED_MODULE_0__;
  }

  return js_logger__WEBPACK_IMPORTED_MODULE_0__["get"](name);
}
/**
 * get the log level
 * @param {?string} name - the logger name
 * @returns {PKLogLevelObject} - the log level
 */


function getLogLevel(name) {
  return getLogger(name).getLevel();
}
/**
 * sets the logger level
 * @param {PKLogLevelObject} level - the log level
 * @param {?string} name - the logger name
 * @returns {void}
 */


function setLogLevel(level, name) {
  getLogger(name).setLevel(level);
}

/* harmony default export */ __webpack_exports__["default"] = (getLogger);


/***/ }),

/***/ "./utils/multi-map.js":
/*!****************************!*\
  !*** ./utils/multi-map.js ***!
  \****************************/
/*! exports provided: MultiMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiMap", function() { return MultiMap; });
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * A simple multimap template.
 * @constructor
 * @struct
 * @template T
 */
var MultiMap = /*#__PURE__*/function () {
  function MultiMap() {
    /** @private {!Object.<K, !Array.<T>>} */
    this._map = new Map();
  }
  /**
   * Add a key, value pair to the map.
   * @param {K} key -
   * @param {T} value  -
   * @returns {void}
   */


  var _proto = MultiMap.prototype;

  _proto.push = function push(key, value) {
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
   * @param {K} key -
   * @param {!Array.<T>} values -
   * @returns {void}
   */
  ;

  _proto.set = function set(key, values) {
    this._map.set(key, values);
  }
  /**
   * Check for a key.
   * @param {K} key -
   * @return {boolean} true if the key exists.
   */
  ;

  _proto.has = function has(key) {
    return this._map.has(key);
  }
  /**
   * Get a list of values by key.
   * @param {K} key -
   * @return {Array.<T>} or null if no such key exists.
   */
  ;

  _proto.get = function get(key) {
    var list = this._map.get(key); // slice() clones the list so that it and the map can each be modified
    // without affecting the other.


    return list ? list.slice() : [];
  }
  /**
   * Get a list of all values.
   * @returns {!Array.<T>} -
   */
  ;

  _proto.getAll = function getAll() {
    var list = [];

    for (var _iterator = _createForOfIteratorHelperLoose(this._map.values()), _step; !(_step = _iterator()).done;) {
      var value = _step.value;
      list = list.concat(value);
    }

    return list;
  }
  /**
   * Remove a specific value, if it exists. If there are no more values to the key, the key is removed
   * @param {K} key -
   * @param {T} value -
   * @returns {void}
   */
  ;

  _proto.remove = function remove(key, value) {
    if (!this._map.has(key)) return;

    var list = this._map.get(key);

    if (Array.isArray(list)) {
      for (var i = 0; i < list.length; ++i) {
        if (list[i] == value) {
          list.splice(i, 1);
          --i;
        }
      }

      if (list.length === 0) {
        this._map.delete(key);
      }
    }
  }
  /**
   * Get all keys from the multimap.
   * @return {!Array.<K>}
   */
  // eslint-disable-next-line no-undef
  ;

  _proto.keys = function keys() {
    return this._map.keys();
  }
  /**
   * Clear all keys and values from the multimap.
   * @returns {void}
   */
  ;

  _proto.clear = function clear() {
    this._map.clear();
  };

  return MultiMap;
}();



/***/ }),

/***/ "./utils/poster-manager.js":
/*!*********************************!*\
  !*** ./utils/poster-manager.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./utils/util.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var PosterManager = /*#__PURE__*/function () {
  /**
   * Poster image URL
   * @type {string}
   * @private
   */

  /**
   * The poster HTML Div element.
   * @type {HTMLDivElement}
   * @private
   */
  function PosterManager() {
    this._createEl();
  }
  /**
   * Set the poster source URL
   * @param {string} posterUrl - the poster image URL
   * @public
   * @returns {void}
   */


  var _proto = PosterManager.prototype;

  _proto.setSrc = function setSrc(posterUrl) {
    if (posterUrl) {
      this._posterUrl = posterUrl;
      _util__WEBPACK_IMPORTED_MODULE_0__["Dom"].setStyle(this._el, 'background-image', "url(\"" + this._posterUrl + "\")");
      this.hide();
    }
  }
  /**
   * Get the poster source URL
   * @public
   * @returns {string} - the poster image URL
   */
  ;

  /**
   * Get the poster HTML Div element
   * @public
   * @returns {HTMLDivElement} - Poster HTML Dom element
   */
  _proto.getElement = function getElement() {
    return this._el;
  }
  /**
   * Create the HTML Div element of the poster
   * @private
   * @returns {void}
   */
  ;

  _proto._createEl = function _createEl() {
    if (!this._el) {
      var el = this._el = _util__WEBPACK_IMPORTED_MODULE_0__["Dom"].createElement('div');
      _util__WEBPACK_IMPORTED_MODULE_0__["Dom"].setAttribute(el, 'id', _util__WEBPACK_IMPORTED_MODULE_0__["Generator"].uniqueId(5));
      _util__WEBPACK_IMPORTED_MODULE_0__["Dom"].setAttribute(el, 'tabindex', '-1');
    }
  }
  /**
   * Removes the poster element from the dom
   * @private
   * @returns {void}
   */
  ;

  _proto._removeEl = function _removeEl() {
    if (this._el) {
      _util__WEBPACK_IMPORTED_MODULE_0__["Dom"].removeChild(this._el.parentNode, this._el);
    }
  }
  /**
   * Show the poster image
   * @public
   * @private
   * @returns {void}
   */
  ;

  _proto.show = function show() {
    _util__WEBPACK_IMPORTED_MODULE_0__["Dom"].setStyle(this._el, 'display', '');
  }
  /**
   * Hide the poster image
   * @public
   * @returns {void}
   */
  ;

  _proto.hide = function hide() {
    _util__WEBPACK_IMPORTED_MODULE_0__["Dom"].setStyle(this._el, 'display', 'none');
  }
  /**
   * Resets the poster url and the background image
   * @public
   * @returns {void}
   */
  ;

  _proto.reset = function reset() {
    this._posterUrl = '';
    _util__WEBPACK_IMPORTED_MODULE_0__["Dom"].setStyle(this._el, 'background-image', '');
  }
  /**
   * Destroys the poster element
   * @public
   * @returns {void}
   */
  ;

  _proto.destroy = function destroy() {
    this.reset();

    this._removeEl();
  };

  _createClass(PosterManager, [{
    key: "src",
    get: function get() {
      return this._posterUrl;
    }
  }]);

  return PosterManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (PosterManager);

/***/ }),

/***/ "./utils/resize-watcher.js":
/*!*********************************!*\
  !*** ./utils/resize-watcher.js ***!
  \*********************************/
/*! exports provided: ResizeWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeWatcher", function() { return ResizeWatcher; });
/* harmony import */ var _event_fake_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event/fake-event */ "./event/fake-event.js");
/* harmony import */ var _event_fake_event_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event/fake-event-target */ "./event/fake-event-target.js");
/* harmony import */ var _event_event_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event/event-type */ "./event/event-type.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




/**
 * A Factory class to create a resize observer for the player.
 */

var ResizeWatcher = /*#__PURE__*/function (_FakeEventTarget) {
  _inheritsLoose(ResizeWatcher, _FakeEventTarget);

  function ResizeWatcher() {
    return _FakeEventTarget.call(this) || this;
  }
  /**
   * Removes resize listeners.
   * @returns {void}
   */


  var _proto = ResizeWatcher.prototype;

  _proto.destroy = function destroy() {
    if (this._observer) {
      this._observer.disconnect();
    }

    this._observer = null;
    this._el = null;
  }
  /**
   * Start listening to a resize of the element.
   * @param {HTMLElement} el - the element to listen to.
   * @returns {void}
   */
  ;

  _proto.init = function init(el) {
    if (this._observer) {
      return;
    }

    this._el = el;
    window.ResizeObserver ? this._createNativeObserver() : this._createIframeObserver();

    if (this._el instanceof HTMLElement && this._observer) {
      this._observer.observe(this._el);
    }
  };

  _proto._createNativeObserver = function _createNativeObserver() {
    var _this = this;

    this._observer = new window.ResizeObserver(function (entries) {
      entries.forEach(function () {
        _this._triggerResize();
      });
    });
  };

  _proto._createIframeObserver = function _createIframeObserver() {
    this._observer = new IFrameObserver(this._triggerResize.bind(this));
  };

  _proto._triggerResize = function _triggerResize() {
    this.dispatchEvent(new _event_fake_event__WEBPACK_IMPORTED_MODULE_0__["default"](_event_event_type__WEBPACK_IMPORTED_MODULE_2__["CustomEventType"].RESIZE));
  };

  return ResizeWatcher;
}(_event_fake_event_target__WEBPACK_IMPORTED_MODULE_1__["default"]);

var IFRAME_CLASS_NAME = 'playkit-size-iframe';
/**
 * This class mimics the API of the ResizeObserver API (currently available only in Chrome).
 * Creates an empty iFrame next to the player container, which gets the dimensions of it's parent and listens to
 * the iframes resize event.
 * @param {Function} callback - the function to be called when a resize event is detected.
 */

var IFrameObserver = /*#__PURE__*/function () {
  function IFrameObserver(callback) {
    _defineProperty(this, "_observersStore", {});

    this._onChangeCallback = callback;
  }
  /**
   * start detecting resize event
   * @param {HTMLElement} el - The element that is going to be resized.
   * @returns {void}
   */


  var _proto2 = IFrameObserver.prototype;

  _proto2.observe = function observe(el) {
    var _this2 = this;

    var iframe = this._createIframe();

    var playerId = el.getAttribute('id');
    this._observersStore[playerId] = iframe;
    el.appendChild(iframe);

    iframe.contentWindow.onresize = function () {
      return _this2._onChangeCallback();
    };
  }
  /**
   * remove all resize listeners
   * @returns {void}
   */
  ;

  _proto2.disconnect = function disconnect() {
    for (var target in this._observersStore) {
      var el = document.getElementById(target);
      var iframe = this._observersStore[target];
      iframe.onresize = null;

      if (el) {
        el.removeChild(iframe);
        delete this._observersStore[el.getAttribute('id')];
      }
    }
  };

  _proto2._createIframe = function _createIframe() {
    var iframe = document.createElement('iframe');
    iframe.className = IFRAME_CLASS_NAME;
    return iframe;
  };

  return IFrameObserver;
}();



/***/ }),

/***/ "./utils/resolution.js":
/*!*****************************!*\
  !*** ./utils/resolution.js ***!
  \*****************************/
/*! exports provided: getSuitableSourceForResolution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuitableSourceForResolution", function() { return getSuitableSourceForResolution; });
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

    for (var _iterator = _createForOfIteratorHelperLoose(tracks), _step; !(_step = _iterator()).done;) {
      var _track2 = _step.value;
      // first filter the most width suitable
      var widthDiff = Math.abs(_track2.width - width);

      if (widthDiff < minWidthDiff) {
        minWidthDiff = widthDiff;
        mostSuitableWidthTracks = [_track2];
      } else if (widthDiff === minWidthDiff) {
        mostSuitableWidthTracks.push(_track2);
      }
    }

    var videoRatio = width / height;
    var mostSuitableWidthAndRatioTracks = mostSuitableWidthTracks;
    var minRatioDiff = Infinity;

    for (var _i = 0, _mostSuitableWidthTra = mostSuitableWidthTracks; _i < _mostSuitableWidthTra.length; _i++) {
      var track = _mostSuitableWidthTra[_i];

      // filter the most ratio suitable from the width filter results
      if (track.height) {
        var ratioDiff = Math.abs(track.width / track.height - videoRatio);

        if (ratioDiff < minRatioDiff) {
          minRatioDiff = ratioDiff;
          mostSuitableWidthAndRatioTracks = [track];
        } else if (ratioDiff === minRatioDiff) {
          mostSuitableWidthAndRatioTracks.push(track);
        }
      }
    }

    var maxBandwidth = 0;

    for (var _i2 = 0, _mostSuitableWidthAnd = mostSuitableWidthAndRatioTracks; _i2 < _mostSuitableWidthAnd.length; _i2++) {
      var _track = _mostSuitableWidthAnd[_i2];

      // select the top bitrate from the ratio filter results
      if (_track.bandwidth > maxBandwidth || !_track.bandwidth) {
        maxBandwidth = _track.bandwidth || maxBandwidth;
        mostSuitableWidth = _track;
      }
    }
  }

  return mostSuitableWidth;
}



/***/ }),

/***/ "./utils/restrictions.js":
/*!*******************************!*\
  !*** ./utils/restrictions.js ***!
  \*******************************/
/*! exports provided: filterTracksByRestriction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTracksByRestriction", function() { return filterTracksByRestriction; });
/* harmony import */ var _track_video_track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../track/video-track */ "./track/video-track.js");

/**
 * Filter the video tracks which not in the range
 * @function filterVideoTracksByRestriction
 * @param {Array<VideoTrack>} tracks - The tracks to filter
 * @param {PKABRRestrictionObject} restriction - The restriction
 * @returns {Array<VideoTrack>} - The relevant video tracks after restrictions.
 */

function _filterVideoTracksByRestriction(tracks, restriction) {
  var MIN_DEFAULT_VALUE = 0;
  var MAX_DEFAULT_VALUE = Infinity;

  var inRange = function inRange(x, min, max) {
    return x >= (min || MIN_DEFAULT_VALUE) && x <= (max || MAX_DEFAULT_VALUE);
  };

  var maxHeight = restriction.maxHeight,
      minHeight = restriction.minHeight,
      maxWidth = restriction.maxWidth,
      minWidth = restriction.minWidth;

  if (minHeight !== MIN_DEFAULT_VALUE || minWidth !== MIN_DEFAULT_VALUE || maxHeight !== MAX_DEFAULT_VALUE || maxWidth !== MAX_DEFAULT_VALUE) {
    return tracks.filter(function (track) {
      return inRange(track.height, minHeight, maxHeight);
    }).filter(function (track) {
      return inRange(track.width, minWidth, maxWidth);
    });
  }

  var maxBitrate = restriction.maxBitrate,
      minBitrate = restriction.minBitrate;

  if (minBitrate !== MIN_DEFAULT_VALUE || maxBitrate !== MAX_DEFAULT_VALUE) {
    return tracks.filter(function (track) {
      return inRange(track.bandwidth, minBitrate, maxBitrate);
    });
  }

  return tracks;
}
/**
 * Filter the video tracks which not in the range
 * @function filterVideoTracksByRestriction
 * @param {Array<VideoTrack>} videoTracks - The tracks to filter
 * @param {PKABRRestrictionObject} restriction - The restriction
 * @returns {Array<VideoTrack>} - The relevant video tracks after restrictions.
 */


function filterTracksByRestriction(videoTracks, restriction) {
  var filterVideoTracks = _filterVideoTracksByRestriction(videoTracks, restriction);

  return filterVideoTracks.length ? filterVideoTracks : [];
}



/***/ }),

/***/ "./utils/util.js":
/*!***********************!*\
  !*** ./utils/util.js ***!
  \***********************/
/*! exports provided: Number, String, Object, Generator, Dom, Http, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return _Number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "String", function() { return _String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Object", function() { return _Object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Generator", function() { return _Generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dom", function() { return _Dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return _Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _VERSION; });
/* harmony import */ var _jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonp */ "./utils/jsonp.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


'use strict';

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

    for (var _iterator = _createForOfIteratorHelperLoose(objects), _step; !(_step = _iterator()).done;) {
      var obj = _step.value;
      Object.assign(target, obj);
    }

    return target;
  },

  /**
   * @param {any} item - The item to check.
   * @returns {boolean} - Whether the item is an object.
   */
  isObject: function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  },

  /**
   * @param {any} item - The item to check if it's class
   * @returns {boolean} - Whether the item is a class
   */
  isClassInstance: function isClassInstance(item) {
    return item && item.constructor && item.constructor.name && item.constructor.name !== 'Object';
  },

  /**
   * @param {any} target - The target object.
   * @param {any} sources - The objects to merge.
   * @returns {Object} - The merged object.
   */
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) {
      return target;
    }

    var source = sources.shift();

    if (this.isObject(target) && this.isObject(source)) {
      for (var key in source) {
        if (this.isObject(source[key]) && !this.isClassInstance(source[key])) {
          var _Object$assign;

          if (!target[key]) Object.assign(target, (_Object$assign = {}, _Object$assign[key] = {}, _Object$assign));
          this.mergeDeep(target[key], source[key]);
        } else {
          var _Object$assign2;

          Object.assign(target, (_Object$assign2 = {}, _Object$assign2[key] = source[key], _Object$assign2));
        }
      }
    }

    return this.mergeDeep.apply(this, [target].concat(sources));
  },

  /**
   * @param {any} data - The data to copy.
   * @returns {any} - The copied data.
   */
  copyDeep: function copyDeep(data) {
    var _this = this;

    var node;

    if (Array.isArray(data)) {
      node = data.length > 0 ? data.slice(0) : [];
      node.forEach(function (e, i) {
        if (typeof e === 'object' && e !== {} || Array.isArray(e) && e.length > 0) {
          node[i] = _this.copyDeep(e);
        }
      });
    } else if (data !== null && typeof data === 'object') {
      if (data.clone && typeof data.clone === 'function') {
        node = data.clone();
      } else {
        node = Object.assign({
          __proto__: data.__proto__
        }, data);
        Object.keys(node).forEach(function (key) {
          if (typeof node[key] === 'object' && node[key] !== {} || Array.isArray(node[key]) && node[key].length > 0) {
            node[key] = _this.copyDeep(node[key]);
          }
        });
      }
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
      if (window.Object.prototype.hasOwnProperty.call(obj, key)) return false;
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
    return propertyPath.split('.').reduce(function (o, x) {
      return typeof o === 'undefined' || o === null ? o : o[x];
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

      if (!obj || !window.Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      } else {
        obj = obj[prop];
      }
    }

    return true;
  },

  /**
   * Create an object with a given property path.
   * @param {Object} obj - The object to create on.
   * @param {string} path - The path to create in the object.
   * @param {any} value - The value to set in the path.
   * @returns {Object} - The result object.
   */
  createPropertyPath: function createPropertyPath(obj, path, value) {
    if (value === void 0) {
      value = null;
    }

    var pathArray = path.split('.');
    var current = obj;

    while (pathArray.length > 1) {
      var _pathArray = pathArray,
          head = _pathArray[0],
          tail = _pathArray.slice(1);

      pathArray = tail;

      if (current[head] === undefined) {
        current[head] = {};
      }

      current = current[head];
    }

    current[pathArray[0]] = value;
    return obj;
  },

  /**
   * Deleted a property path from an object.
   * @param {Object} obj - The object to delete the property path from.
   * @param {string} path - The path to delete in the object.
   * @returns {void}
   */
  deletePropertyPath: function deletePropertyPath(obj, path) {
    if (!obj || !path) {
      return;
    }

    var pathArray = path.split('.');

    for (var i = 0; i < pathArray.length - 1; i++) {
      obj = obj[pathArray[i]];

      if (typeof obj === 'undefined') {
        return;
      }
    }

    delete obj[pathArray.pop()];
  },

  /**
   * Creates deferred promise which can resolved/rejected outside the promise scope.
   * @returns {DeferredPromise} - The promise with resolve and reject props.
   */
  defer: function defer() {
    var res, rej; // $FlowFixMe

    var promise = new Promise(function (resolve, reject) {
      res = resolve;
      rej = reject;
    }); // $FlowFixMe

    promise.resolve = res; // $FlowFixMe

    promise.reject = rej; // $FlowFixMe

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

    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
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
    if (element) {
      if (element.classList) {
        element.classList.add(className);
      } else {
        if (!_Dom.hasClassName(element, className)) {
          element.className += className;
        }
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
    if (element) {
      if (element.classList) {
        element.classList.remove(className);
      } else {
        if (_Dom.hasClassName(element, className)) {
          element.className = element.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
        }
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
    return element && element.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(element.className);
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
   * Returns a live HTMLCollection of elements with the given tag name.
   * @param {string} tagName - The desired tag name.
   * @returns {Element} - The elements with the desired tag name.
   */
  getElementsByTagName: function getElementsByTagName(tagName) {
    return document.getElementsByTagName(tagName);
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
   * Loads an external style sheet asynchronously.
   * @param {string} url - The css url to load.
   * @return {Promise} - The loading promise.
   * @public
   */
  loadStyleSheetAsync: function loadStyleSheetAsync(url) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      var resolved = false,
          cssLinkElement = _this2.createElement('link');

      cssLinkElement.type = 'text/css';
      cssLinkElement.rel = 'stylesheet';
      cssLinkElement.href = url;
      cssLinkElement.async = true;

      cssLinkElement.onload = cssLinkElement.onreadystatechange = function () {
        if (!resolved && (!this.readyState || this.readyState === 'complete')) {
          resolved = true;
          resolve(this);
        }
      };

      cssLinkElement.onerror = cssLinkElement.onabort = reject;

      _Dom.appendChild(document.head, cssLinkElement);
    });
  },

  /**
   * Loads script asynchronously.
   * @param {string} url - The url to load.
   * @return {Promise} - The loading promise.
   * @public
   */
  loadScriptAsync: function loadScriptAsync(url) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var r = false,
          t = document.getElementsByTagName('script')[0],
          s = _this3.createElement('script');

      s.type = 'text/javascript';
      s.src = url;
      s.async = true;

      s.onload = s.onreadystatechange = function () {
        if (!r && (!this.readyState || this.readyState === 'complete')) {
          r = true;
          resolve(this);
        }
      };

      s.onerror = s.onabort = reject;

      if (t && t.parentNode) {
        t.parentNode.insertBefore(s, t);
      }
    });
  },

  /**
   * Returns the first element that matches a specified CSS selector(s) in the document.
   * @param {string} selector - One or more CSS selectors to match the element.
   * @returns {Element} - The first element that matches a specified CSS selector(s) in the document.
   */
  getElementBySelector: function getElementBySelector(selector) {
    try {
      return document.querySelector(selector);
    } catch (e) {
      return;
    }
  },

  /**
   * Inserts a node as a child, right before an existing child.
   * @param {HTMLElement} parent -  The parent node object.
   * @param {HTMLElement} newChild -  The node object to insert.
   * @param {?HTMLElement} existingChild - The child node to insert the new node before. If set to null, the insertBefore method will insert the newChild at the end.
   * @returns {Element} - The first element that matches a specified CSS selector(s) in the document.
   */
  insertBefore: function insertBefore(parent, newChild, existingChild) {
    try {
      return parent.insertBefore(newChild, existingChild);
    } catch (e) {
      return null;
    }
  }
};
var _Http = {
  protocol: /^(https?:)/i.test(document.location.protocol) ? document.location.protocol : 'https:',
  execute: function execute(url, params, method, headers, timeout, ontimeout) {
    if (method === void 0) {
      method = 'POST';
    }

    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            try {
              var jsonResponse = JSON.parse(request.responseText);
              resolve(jsonResponse);
            } catch (e) {
              resolve(request.responseText);
            }
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

      if (timeout) {
        request.timeout = timeout;
      }

      if (ontimeout) {
        request.ontimeout = function (e) {
          ontimeout();
          reject(e);
        };
      }

      request.send(params);
    });
  },
  jsonp: _jsonp__WEBPACK_IMPORTED_MODULE_0__["jsonp"],
  convertHeadersToDictionary: function convertHeadersToDictionary(headerRow) {
    var headerMap = {};

    try {
      // Convert the header string into an array of individual headers
      var arr = headerRow.trim().split(/[\r\n]+/); // Create a map of header names to values

      arr.forEach(function (line) {
        var parts = line.split(': ');
        var header = parts.shift().toLowerCase();
        var value = parts.join(': ');
        headerMap[header] = value;
      });
    } catch (e) {// do nothing
    }

    return headerMap;
  }
};
var _VERSION = {
  /**
   * Compares two software version numbers (e.g. "1.7.1" or "1.2b").
   *
   * @param {string} v1 The first version to be compared.
   * @param {string} v2 The second version to be compared.
   * @param {object} [options] Optional flags that affect comparison behavior:
   * lexicographical: (true/[false]) compares each part of the version strings lexicographically instead of naturally;
   *                  this allows suffixes such as "b" or "dev" but will cause "1.10" to be considered smaller than "1.2".
   * zeroExtend: ([true]/false) changes the result if one version string has less parts than the other. In
   *             this case the shorter string will be padded with "zero" parts instead of being considered smaller.
   *
   * @returns {number|NaN}
   * - 0 if the versions are equal
   * - a negative integer iff v1 < v2
   * - a positive integer iff v1 > v2
   * - NaN if either version string is in the wrong format
   */
  compare: function compare(v1, v2, options) {
    if (options === void 0) {
      options = {};
    }

    options = _Object.merge([{
      lexicographical: false,
      zeroExtend: true
    }, options]);
    var lexicographical = options.lexicographical;
    var zeroExtend = options.zeroExtend;
    var v1parts = (v1 || '0').split('.');
    var v2parts = (v2 || '0').split('.');

    var isValidPart = function isValidPart(x) {
      return (lexicographical ? /^\d+[A-Za-zαß]*$/ : /^\d+[A-Za-zαß]?$/).test(x);
    };

    var mapParts = function mapParts(parts) {
      return parts.map(function (x) {
        var match = /[A-Za-zαß]/.exec(x);
        return Number(match ? x.replace(match[0], '.' + x.charCodeAt(match.index)) : x);
      });
    };

    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
      return NaN;
    }

    if (zeroExtend) {
      while (v1parts.length < v2parts.length) {
        v1parts.push('0');
      }

      while (v2parts.length < v1parts.length) {
        v2parts.push('0');
      }
    }

    if (!lexicographical) {
      v1parts = mapParts(v1parts);
      v2parts = mapParts(v2parts);
    }

    for (var i = 0; i < v1parts.length; ++i) {
      if (v2parts.length === i) {
        return 1;
      }

      if (v1parts[i] === v2parts[i]) {
        continue;
      } // $FlowFixMe
      else if (v1parts[i] > v2parts[i]) {
          return 1;
        } else {
          return -1;
        }
    }

    if (v1parts.length !== v2parts.length) {
      return -1;
    }

    return 0;
  }
};


/***/ })

/******/ });
});
//# sourceMappingURL=playkit.js.map