(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("core", [], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory();
	else
		root["playkit"] = root["playkit"] || {}, root["playkit"]["core"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Failed to load plugin prettier: Cannot find module 'eslint-plugin-prettier'\n    at Function.Module._resolveFilename (module.js:489:15)\n    at Function.resolve (internal/module.js:18:19)\n    at Object.load (/Users/oded.hutzler/repositories/playkit-js/node_modules/eslint/lib/config/plugins.js:134:29)\n    at Array.forEach (<anonymous>)\n    at Object.loadAll (/Users/oded.hutzler/repositories/playkit-js/node_modules/eslint/lib/config/plugins.js:162:21)\n    at Object.load (/Users/oded.hutzler/repositories/playkit-js/node_modules/eslint/lib/config/config-file.js:541:21)\n    at loadConfig (/Users/oded.hutzler/repositories/playkit-js/node_modules/eslint/lib/config.js:63:33)\n    at getLocalConfig (/Users/oded.hutzler/repositories/playkit-js/node_modules/eslint/lib/config.js:130:29)\n    at Config.getConfig (/Users/oded.hutzler/repositories/playkit-js/node_modules/eslint/lib/config.js:260:26)\n    at processText (/Users/oded.hutzler/repositories/playkit-js/node_modules/eslint/lib/cli-engine.js:224:33)\n    at CLIEngine.executeOnText (/Users/oded.hutzler/repositories/playkit-js/node_modules/eslint/lib/cli-engine.js:754:26)\n    at lint (/Users/oded.hutzler/repositories/playkit-js/node_modules/eslint-loader/index.js:211:17)\n    at Object.module.exports (/Users/oded.hutzler/repositories/playkit-js/node_modules/eslint-loader/index.js:206:21)");

/***/ })
/******/ ]);
});
//# sourceMappingURL=playkit.js.map