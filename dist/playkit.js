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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * UAParser.js v0.7.21
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.21',
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
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser
            /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,                      // Baidu Browser
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]*)/i,                                             // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            ], [NAME, VERSION], [

            /(konqueror)\/([\w\.]+)/i                                           // Konqueror
            ], [[NAME, 'Konqueror'], VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i                          // Microsoft Edge
            ], [[NAME, 'Edge'], VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(Avast)\/([\w\.]+)/i                                               // Avast Secure Browser
            ], [[NAME, 'Avast Secure Browser'], VERSION], [

            /(AVG)\/([\w\.]+)/i                                                 // AVG Secure Browser
            ], [[NAME, 'AVG Secure Browser'], VERSION], [

            /(puffin)\/([\w\.]+)/i                                              // Puffin
            ], [[NAME, 'Puffin'], VERSION], [

            /(focus)\/([\w\.]+)/i                                               // Firefox Focus
            ], [[NAME, 'Firefox Focus'], VERSION], [

            /(opt)\/([\w\.]+)/i                                                 // Opera Touch
            ], [[NAME, 'Opera Touch'], VERSION], [

            /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i         // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(windowswechat qbcore)\/([\w\.]+)/i                                // WeChat Desktop for Windows Built-in Browser
            ], [[NAME, 'WeChat(Win) Desktop'], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /(brave)\/([\w\.]+)/i                                               // Brave browser
            ], [[NAME, 'Brave'], VERSION], [

            /(qqbrowserlite)\/([\w\.]+)/i                                       // QQBrowserLite
            ], [NAME, VERSION], [

            /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
            ], [NAME, VERSION], [

            /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
            ], [NAME, VERSION], [

            /(baiduboxapp)[\/\s]?([\w\.]+)/i                                    // Baidu App
            ], [NAME, VERSION], [

            /(2345Explorer)[\/\s]?([\w\.]+)/i                                   // 2345 Browser
            ], [NAME, VERSION], [

            /(MetaSr)[\/\s]?([\w\.]+)/i                                         // SouGouBrowser
            ], [NAME], [

            /(LBBROWSER)/i                                                      // LieBao Browser
            ], [NAME], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
            ], [VERSION, [NAME, 'Facebook']], [

            /safari\s(line)\/([\w\.]+)/i,                                       // Line App for iOS
            /android.+(line)\/([\w\.]+)\/iab/i                                  // Line App for Android
            ], [NAME, VERSION], [

            /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
            ], [VERSION, [NAME, 'Chrome Headless']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /((?:oculus|samsung)browser)\/([\w\.]+)/i
            ], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser

            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(sailfishbrowser)\/([\w\.]+)/i                                     // Sailfish Browser
            ], [[NAME, 'Sailfish Browser'], VERSION], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /(qihu|qhbrowser|qihoobrowser|360browser)/i                         // 360
            ], [[NAME, '360 Browser']], [

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

            /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i  // Google Search Appliance on iOS
            ], [[NAME, 'GSA'], VERSION], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,

                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]*)/i,                                         // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]
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

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i                        // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple'], [TYPE, SMARTTV]], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/.+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i                         // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [
            /android.+aft([bms])\sbuild/i                                       // Fire TV
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
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

            /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,                        // HTC
            /(zte)-(\w*)/i,                                                     // ZTE
            /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
                                                                                // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /d\/huawei([\w\s-]+)[;\)]/i,
            /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i                              // Huawei
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /android.+(bah2?-a?[lw]\d{2})/i                                     // Huawei MediaPad
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, TABLET]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w*)/i,
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
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w*)/i                                                        // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]*)/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i                   // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w*)/i,
            /android.+lg(\-?[\d\w]+)\s+build/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i             // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [
            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [
            /(lenovo)[_\s-]?([\w-]+)/i
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google'], [TYPE, SMARTTV]], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+;\s(pixel c)[\s)]/i                                       // Google Pixel C
            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

            /android.+;\s(pixel( [23])?( xl)?)[\s)]/i                              // Google Pixel
            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

            /android.+;\s(\w+)\s+build\/hm\1/i,                                 // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,    
                                                                                // Xiaomi Mi
            /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i       // Redmi Phones
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
            /android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i            // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [
            /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [
            /(mz)-([\w-]{2,})/i
            ], [[VENDOR, 'Meizu'], MODEL, [TYPE, MOBILE]], [

            /android.+a000(1)\s+build/i,                                        // OnePlus
            /android.+oneplus\s(a\d{4})[\s)]/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [

            /android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i                      // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [

            /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
            ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [

            /android.+;\s(k88)\sbuild/i                                         // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [

            /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
            /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i        // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i                            // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i                    // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones

            /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i                     // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [

            /android.+;\s(PH-1)\s/i
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [                // Essential PH-1

            /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i          // Le Pan Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i                         // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [

            /android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [

            /android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i                      // Gigaset Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL], [

            /[\s\/\(](smart-?tv)[;\)]/i                                         // SmartTV
            ], [[TYPE, SMARTTV]], [

            /(android[\w\.\s\-]{0,9});.+build/i                                 // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,     
                                                                                // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9}).+(gecko)/i                                       // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,                   // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]*)/i,                                     // Blackberry
            /(tizen|kaios)[\/\s]([\w\.]+)/i,                                    // Tizen/KaiOS
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i                  // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w*)/i,                                            // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]*)/i,                                        // Hurd/Linux
            /(gnu)\s?([\w\.]*)/i                                                // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.\d]*)/i                                            // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i                    // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                   // Haiku
            ], [NAME, VERSION],[

            /cfnetwork\/.+darwin/i,
            /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i             // iOS
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [

            /(mac\sos\sx)\s?([\w\s\.]*)/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,                             // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,                                // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
            /(unix)\s?([\w\.]*)/i                                               // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////
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

        this.getBrowser = function () {
            var browser = { name: undefined, version: undefined };
            mapper.rgx.call(browser, ua, rgxmap.browser);
            browser.major = util.major(browser.version); // deprecated
            return browser;
        };
        this.getCPU = function () {
            var cpu = { architecture: undefined };
            mapper.rgx.call(cpu, ua, rgxmap.cpu);
            return cpu;
        };
        this.getDevice = function () {
            var device = { vendor: undefined, model: undefined, type: undefined };
            mapper.rgx.call(device, ua, rgxmap.device);
            return device;
        };
        this.getEngine = function () {
            var engine = { name: undefined, version: undefined };
            mapper.rgx.call(engine, ua, rgxmap.engine);
            return engine;
        };
        this.getOS = function () {
            var os = { name: undefined, version: undefined };
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
        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
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
/* 1 */
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
/* 2 */
/***/ (function(module) {

module.exports = JSON.parse("{\"heartbeatTimeout\":30000}");

/***/ }),
/* 3 */
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE=\"}");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(5);
            var content = __webpack_require__(6);

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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".playkit-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  outline: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.playkit-engine {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  object-fit: contain;\n}\n\n.playkit-engine video::-webkit-media-controls-panel,\n.playkit-engine video::-webkit-media-controls-panel-container,\n.playkit-engine video::-webkit-media-controls-start-playback-button,\n.playkit-engine video::-webkit-media-controls-play-button {\n  display: none;\n  -webkit-appearance: none;\n}\n\n.playkit-poster {\n  position: absolute;\n  display: block;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-color: #000;\n}\n\n.playkit-subtitles {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n\n.playkit-black-cover {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}\n\n.playkit-size-iframe {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border: 0;\n  z-index: -100;\n}\n\n.playkit-in-browser-fullscreen-mode {\n  width: 100% !important;\n  height: 100% !important;\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  /*added for blocking element with fixed position which could be on the top of the player */\n  z-index: 999999 !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "loadPlayer", function() { return /* binding */ playkit_loadPlayer; });
__webpack_require__.d(__webpack_exports__, "registerMediaSourceAdapter", function() { return /* reexport */ registerMediaSourceAdapter; });
__webpack_require__.d(__webpack_exports__, "BaseMediaSourceAdapter", function() { return /* reexport */ base_media_source_adapter_BaseMediaSourceAdapter; });
__webpack_require__.d(__webpack_exports__, "registerPlugin", function() { return /* reexport */ registerPlugin; });
__webpack_require__.d(__webpack_exports__, "BasePlugin", function() { return /* reexport */ base_plugin_BasePlugin; });
__webpack_require__.d(__webpack_exports__, "BaseMiddleware", function() { return /* reexport */ BaseMiddleware; });
__webpack_require__.d(__webpack_exports__, "Track", function() { return /* reexport */ Track; });
__webpack_require__.d(__webpack_exports__, "VideoTrack", function() { return /* reexport */ video_track; });
__webpack_require__.d(__webpack_exports__, "AudioTrack", function() { return /* reexport */ audio_track; });
__webpack_require__.d(__webpack_exports__, "TextTrack", function() { return /* reexport */ text_track; });
__webpack_require__.d(__webpack_exports__, "TextStyle", function() { return /* reexport */ text_style; });
__webpack_require__.d(__webpack_exports__, "Utils", function() { return /* reexport */ utils_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "utils", function() { return /* reexport */ utils_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "Error", function() { return /* reexport */ error_Error; });
__webpack_require__.d(__webpack_exports__, "FakeEvent", function() { return /* reexport */ fake_event; });
__webpack_require__.d(__webpack_exports__, "FakeEventTarget", function() { return /* reexport */ fake_event_target; });
__webpack_require__.d(__webpack_exports__, "EventManager", function() { return /* reexport */ event_manager; });
__webpack_require__.d(__webpack_exports__, "VERSION", function() { return /* binding */ VERSION; });
__webpack_require__.d(__webpack_exports__, "NAME", function() { return /* binding */ NAME; });
__webpack_require__.d(__webpack_exports__, "Env", function() { return /* reexport */ env; });
__webpack_require__.d(__webpack_exports__, "State", function() { return /* reexport */ State; });
__webpack_require__.d(__webpack_exports__, "getCapabilities", function() { return /* binding */ playkit_getCapabilities; });
__webpack_require__.d(__webpack_exports__, "setCapabilities", function() { return /* binding */ playkit_setCapabilities; });
__webpack_require__.d(__webpack_exports__, "registerEngine", function() { return /* reexport */ registerEngine; });
__webpack_require__.d(__webpack_exports__, "unRegisterEngine", function() { return /* reexport */ unRegisterEngine; });
__webpack_require__.d(__webpack_exports__, "Ad", function() { return /* reexport */ Ad; });
__webpack_require__.d(__webpack_exports__, "AdBreak", function() { return /* reexport */ AdBreak; });
__webpack_require__.d(__webpack_exports__, "AdBreakType", function() { return /* reexport */ AdBreakType; });
__webpack_require__.d(__webpack_exports__, "AdTagType", function() { return /* reexport */ AdTagType; });
__webpack_require__.d(__webpack_exports__, "AdsController", function() { return /* reexport */ ads_controller_AdsController; });
__webpack_require__.d(__webpack_exports__, "AdEventType", function() { return /* reexport */ AdEventType; });
__webpack_require__.d(__webpack_exports__, "Html5EventType", function() { return /* reexport */ Html5EventType; });
__webpack_require__.d(__webpack_exports__, "CustomEventType", function() { return /* reexport */ CustomEventType; });
__webpack_require__.d(__webpack_exports__, "EventType", function() { return /* reexport */ EventType; });
__webpack_require__.d(__webpack_exports__, "StateType", function() { return /* reexport */ StateType; });
__webpack_require__.d(__webpack_exports__, "TrackType", function() { return /* reexport */ TrackType; });
__webpack_require__.d(__webpack_exports__, "EngineType", function() { return /* reexport */ EngineType; });
__webpack_require__.d(__webpack_exports__, "MediaType", function() { return /* reexport */ MediaType; });
__webpack_require__.d(__webpack_exports__, "StreamType", function() { return /* reexport */ StreamType; });
__webpack_require__.d(__webpack_exports__, "AbrMode", function() { return /* reexport */ AbrMode; });
__webpack_require__.d(__webpack_exports__, "LogLevelType", function() { return /* reexport */ LogLevelType; });
__webpack_require__.d(__webpack_exports__, "CorsType", function() { return /* reexport */ CorsType; });
__webpack_require__.d(__webpack_exports__, "DrmScheme", function() { return /* reexport */ DrmScheme; });
__webpack_require__.d(__webpack_exports__, "MimeType", function() { return /* reexport */ MimeType; });
__webpack_require__.d(__webpack_exports__, "RequestType", function() { return /* reexport */ RequestType; });
__webpack_require__.d(__webpack_exports__, "getLogger", function() { return /* reexport */ utils_logger; });
__webpack_require__.d(__webpack_exports__, "LogLevel", function() { return /* reexport */ LogLevel; });
__webpack_require__.d(__webpack_exports__, "getLogLevel", function() { return /* reexport */ logger_getLogLevel; });
__webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return /* reexport */ logger_setLogLevel; });

// NAMESPACE OBJECT: ./utils/index.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, "Number", function() { return _Number; });
__webpack_require__.d(utils_namespaceObject, "String", function() { return _String; });
__webpack_require__.d(utils_namespaceObject, "Object", function() { return _Object; });
__webpack_require__.d(utils_namespaceObject, "Generator", function() { return _Generator; });
__webpack_require__.d(utils_namespaceObject, "Dom", function() { return _Dom; });
__webpack_require__.d(utils_namespaceObject, "Http", function() { return _Http; });
__webpack_require__.d(utils_namespaceObject, "VERSION", function() { return _VERSION; });
__webpack_require__.d(utils_namespaceObject, "ResizeWatcher", function() { return resize_watcher_ResizeWatcher; });

// EXTERNAL MODULE: ../node_modules/ua-parser-js/src/ua-parser.js
var ua_parser = __webpack_require__(0);
var ua_parser_default = /*#__PURE__*/__webpack_require__.n(ua_parser);

// CONCATENATED MODULE: ./utils/env.js

const SmartTvRegex = /^.*(smart-tv|smarttv).*$/i;
const LGTVRegex = /^.*(web0s).*(smarttv).*$/i;
const SAMSUNGTVRegex = /^.*(smart-tv).*(tizen).*$/i;
const HISENSETVRegex = /^.*(vidaa).*(smarttv).*$/i; //recognize as safari

const SAMSUNGBrowserParser = [[SAMSUNGTVRegex], [[ua_parser_default.a.BROWSER.NAME, 'SAMSUNG_TV_BROWSER'], [ua_parser_default.a.BROWSER.MAJOR, ''], [ua_parser_default.a.BROWSER.VERSION, '']]]; //recognize os of smartTV devices

const OSParser = [[LGTVRegex], [ua_parser_default.a.OS.NAME], [HISENSETVRegex], [ua_parser_default.a.OS.NAME]]; //add smart tv as smart tv devices

const DeviceParser = [[LGTVRegex], [[ua_parser_default.a.DEVICE.VENDOR, 'LG'], [ua_parser_default.a.DEVICE.TYPE, ua_parser_default.a.DEVICE.SMARTTV]], [SAMSUNGTVRegex], [[ua_parser_default.a.DEVICE.VENDOR, 'SAMSUNG'], [ua_parser_default.a.DEVICE.TYPE, ua_parser_default.a.DEVICE.SMARTTV]], [HISENSETVRegex], [[ua_parser_default.a.DEVICE.VENDOR, 'HISENSE'], [ua_parser_default.a.DEVICE.TYPE, ua_parser_default.a.DEVICE.SMARTTV]], [SmartTvRegex], [[ua_parser_default.a.DEVICE.TYPE, ua_parser_default.a.DEVICE.SMARTTV]]];
const EdgeChromiumParser = [[/(edg)\/((\d+)?[\w.]+)/i], [[ua_parser_default.a.BROWSER.NAME, 'Edge'], ua_parser_default.a.BROWSER.VERSION, ua_parser_default.a.BROWSER.MAJOR]];
const BrowserParser = [...EdgeChromiumParser, ...SAMSUNGBrowserParser];
let Env = new ua_parser_default.a(undefined, {
  browser: BrowserParser,
  device: DeviceParser,
  os: OSParser
}).getResult();
Env.isConsole = Env.device.type === ua_parser_default.a.DEVICE.CONSOLE;
Env.isSmartTV = Env.device.type === ua_parser_default.a.DEVICE.SMARTTV;
Env.isMobile = Env.device.type === ua_parser_default.a.DEVICE.MOBILE;
Env.isTablet = Env.device.type === ua_parser_default.a.DEVICE.TABLET;
Env.isWearable = Env.device.type === ua_parser_default.a.DEVICE.WEARABLE;
Env.isEmbedded = Env.device.type === ua_parser_default.a.DEVICE.EMBEDDED;
Env.isIPadOS = Env.os.name === 'Mac OS' && 'ontouchend' in document;
/* harmony default export */ var env = (Env);
// CONCATENATED MODULE: ./utils/multi-map.js
/**
 * A simple multimap template.
 * @constructor
 * @struct
 * @template T
 */
let MultiMap = /*#__PURE__*/function () {
  function MultiMap() {
    /** @private {!Object.<string, !Array.<T>>} */
    this._map = new Map();
  }
  /**
   * Add a key, value pair to the map.
   * @param {string} key -
   * @param {T} value  -
   * @returns {void}
   */


  var _proto = MultiMap.prototype;

  _proto.push = function push(key, value) {
    if (this._map.has(key)) {
      let list = this._map.get(key);

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
  ;

  _proto.set = function set(key, values) {
    this._map.set(key, values);
  }
  /**
   * Check for a key.
   * @param {string} key -
   * @return {boolean} true if the key exists.
   */
  ;

  _proto.has = function has(key) {
    return this._map.has(key);
  }
  /**
   * Get a list of values by key.
   * @param {string} key -
   * @return {Array.<T>} or null if no suZch key exists.
   */
  ;

  _proto.get = function get(key) {
    let list = this._map.get(key); // slice() clones the list so that it and the map can each be modified
    // without affecting the other.


    return list ? list.slice() : [];
  }
  /**
   * Get a list of all values.
   * @returns {!Array.<T>} -
   */
  ;

  _proto.getAll = function getAll() {
    let list = [];

    for (var value of this._map.values()) {
      list = list.concat(value);
    }

    return list;
  }
  /**
   * Remove a specific value, if it exists.
   * @param {string} key -
   * @param {T} value -
   * @returns {void}
   */
  ;

  _proto.remove = function remove(key, value) {
    if (!this._map.has(key)) return;

    let list = this._map.get(key);

    if (Array.isArray(list)) {
      for (let i = 0; i < list.length; ++i) {
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

/* harmony default export */ var multi_map = (MultiMap);
// CONCATENATED MODULE: ./event/fake-event.js
/**
 * Create an Event work-alike object based on the dictionary.
 * The event should contain all of the same properties from the dict.
 * @param {string} type -
 * @param {Object=} opt_dict -
 * @constructor
 * @extends {Event}
 */
let FakeEvent = /*#__PURE__*/function () {
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

/* harmony default export */ var fake_event = (FakeEvent);
// CONCATENATED MODULE: ./event/fake-event-target.js


/**
 * A work-alike for EventTarget.  Only DOM elements may be true EventTargets,
 * but this can be used as a base class to provide event dispatch to non-DOM
 * classes.  Only FakeEvents should be dispatched.
 *
 * @struct
 * @constructor
 * @export
 */

let fake_event_target_FakeEventTarget = /*#__PURE__*/function () {
  function FakeEventTarget() {
    /**
     * @private {!MultiMap.<FakeEventTarget.EventListener>}
     */
    this._listeners = new multi_map();
    /**
     * The target of all dispatched events.  Defaults to |this|.
     * @type {FakeEventTarget}
     */

    this.dispatchTarget = this;
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
    let list = this._listeners.get(event.type) || [];

    for (let i = 0; i < list.length; ++i) {
      // Do this every time, since events can be re-dispatched from handlers.
      //$FlowFixMe - need to cast to event target but can't yet make EventTarget inherited
      event.target = this.dispatchTarget; //$FlowFixMe - need to cast to event target but can't yet make EventTarget inherited

      event.currentTarget = this.dispatchTarget;
      let listener = list[i];

      try {
        // native DOM event handler
        //$FlowFixMe
        if (listener.handleEvent) {
          //$FlowFixMe
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (exception) {// Exceptions during event handlers should not affect the caller,
        // but should appear on the console as uncaught, according to MDN:
        // http://goo.gl/N6Ff27
        // TODO: add log
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


/* harmony default export */ var fake_event_target = (fake_event_target_FakeEventTarget);
// CONCATENATED MODULE: ./event/event-manager.js



/**
 * Creates a new EventManager. An EventManager maintains a collection of "event
 * bindings" between event targets and event listeners.
 *
 * @struct
 * @constructor
 * @implements {IDestroyable}
 */

let event_manager_EventManager = /*#__PURE__*/function () {
  function EventManager() {
    /**
     * Maps an event type to an array of event bindings.
     * @private {MultiMap.<!EventManager.Binding_>}
     */
    this._bindingMap = new multi_map();
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
    let oneListener = event => {
      this.unlisten(target, type, oneListener);
      listener.call(this, event);
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
    let binding = new Binding_(target, type, listener, options);

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
      let list = this._bindingMap.get(type);

      for (let i = 0; i < list.length; ++i) {
        let binding = list[i];

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
      let listeners = this._bindingMap.getAll();

      for (let listener of listeners) {
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
let Binding_ = /*#__PURE__*/function () {
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

/* harmony default export */ var event_manager = (event_manager_EventManager);
// EXTERNAL MODULE: ../node_modules/js-logger/src/logger.js
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./utils/logger.js

const LogLevel = {
  DEBUG: logger["DEBUG"],
  INFO: logger["INFO"],
  TIME: logger["TIME"],
  WARN: logger["WARN"],
  ERROR: logger["ERROR"],
  OFF: logger["OFF"]
};
const LogLevelType = {}; // Build the log level types enums according to the LogLevel object

Object.keys(LogLevel).forEach(key => {
  LogLevelType[key] = key;
});
logger["useDefaults"]({
  defaultLevel: logger["ERROR"]
});
/**
 * sets the logger handler
 * @private
 * @param {LogHandlerType} handler - the log level
 * @returns {void}
 */

function setLogHandler(handler) {
  logger["setHandler"]((messages, context) => handler(messages, context));
}
/**
 * get a logger
 * @param {?string} name - the logger name
 * @returns {Object} - the logger class
 */


function getLogger(name) {
  if (!name) {
    return logger;
  }

  return logger["get"](name);
}
/**
 * get the log level
 * @param {?string} name - the logger name
 * @returns {PKLogLevelObject} - the log level
 */


function logger_getLogLevel(name) {
  return getLogger(name).getLevel();
}
/**
 * sets the logger level
 * @param {PKLogLevelObject} level - the log level
 * @param {?string} name - the logger name
 * @returns {void}
 */


function logger_setLogLevel(level, name) {
  getLogger(name).setLevel(level);
}

/* harmony default export */ var utils_logger = (getLogger);

// CONCATENATED MODULE: ./error/severity.js
const Severity = {
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

// CONCATENATED MODULE: ./ads/ad-error-code.js
const AdErrorCode = {
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

// CONCATENATED MODULE: ./error/code.js

const Code = {
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
Object.assign(Code, AdErrorCode);

// CONCATENATED MODULE: ./error/category.js
const Category = {
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

// CONCATENATED MODULE: ./error/error.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CLASS_NAME = 'Error';
/**
 * @classdesc This is a description of the error class.
 */

let error_Error =
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
function Error(severity, category, code, data = {}) {
  this.severity = severity;
  this.category = category;
  this.code = code;
  this.data = data;

  if (logger_getLogLevel(CLASS_NAME) !== LogLevel.OFF) {
    Error._logger.error(`Category:${category} | Code:${code} |`, data);
  }
};

_defineProperty(error_Error, "Severity", Severity);

_defineProperty(error_Error, "Category", Category);

_defineProperty(error_Error, "Code", Code);

_defineProperty(error_Error, "_logger", utils_logger(CLASS_NAME));


// CONCATENATED MODULE: ./utils/jsonp.js

const JSONP_TIMEOUT = 5000;
const CALLBACK_PREFIX = 'jsonpcallback';
const JSONP_FORMAT_STRING = 'responseFormat=jsonp&callback=';
/**
 * JSONP utility.
 * @param {string} url - The url of the request.
 * @param {string} callback - Callback function to be called when the request returns.
 * @param {Object} options - Object contains configuration (currently only timeout).
 * @returns {Promise<*>} - A promise with the callback output.
 */

function jsonp(url, callback, options) {
  options = options || {};
  const timeout = options.timeout ? options.timeout : JSONP_TIMEOUT;
  const script = document.createElement('script');
  const callbackId = CALLBACK_PREFIX + Math.round(Date.now() + Math.random() * 1000001);
  let scriptUri = url;
  let timer;
  /**
   * function to clean the DOM from the script tag and from the function
   * @returns {void}
   */

  const _cleanup = () => {
    if (script && script.parentNode) {
      script.parentNode.removeChild(script);
    }

    window[callbackId] = () => {};

    if (timer) {
      clearTimeout(timer);
    }
  };

  return new Promise((resolve, reject) => {
    if (timeout) {
      timer = setTimeout(function () {
        _cleanup();

        reject(new error_Error(error_Error.Severity.CRITICAL, error_Error.Category.NETWORK, error_Error.Code.TIMEOUT, url));
      }, timeout);
    }
    /**
     * a wrapper to the callback function, to save a closure
     * @param {Object} data - the data we get from the server, in response to the request
     * @returns {void}
     */


    window[callbackId] = data => {
      const callbackResult = callback(data, url);

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


// CONCATENATED MODULE: ./utils/util.js

'use strict';

const _Number = {
  /**
   * @param {number} n - A certain number
   * @returns {boolean} - If the input is a number
   */
  isNumber: function (n) {
    return Number(n) === n;
  },

  /**
   * @param {number} n - A certain number
   * @returns {boolean} - If the input is an integer
   */
  isInt: function (n) {
    return this.isNumber(n) && n % 1 === 0;
  },

  /**
   * @param {number} n - A certain number
   * @returns {boolean} - If the input is a float
   */
  isFloat: function (n) {
    return this.isNumber(n) && n % 1 !== 0;
  }
};
const _String = {
  /**
   * Uppercase the first letter of a string
   * @param  {String} string - String to be uppercased
   * @return {String} - The uppercased string
   * @public
   * @method toTitleCase
   */
  capitlize: function (string) {
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
  endsWith: function (string, searchString) {
    if (typeof string !== 'string' || typeof searchString !== 'string') {
      return false;
    }

    return string.indexOf(searchString, string.length - searchString.length) != -1;
  }
};
const _Object = {
  /**
   * @param {Array<Object>} objects - The objects to merge
   * @returns {Object} - The merged object.
   */
  merge: function (objects) {
    let target = {};

    for (let obj of objects) {
      Object.assign(target, obj);
    }

    return target;
  },

  /**
   * @param {any} item - The item to check.
   * @returns {boolean} - Whether the item is an object.
   */
  isObject: function (item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  },

  /**
   * @param {any} target - The target object.
   * @param {any} sources - The objects to merge.
   * @returns {Object} - The merged object.
   */
  mergeDeep: function (target, ...sources) {
    if (!sources.length) {
      return target;
    }

    const source = sources.shift();

    if (this.isObject(target) && this.isObject(source)) {
      for (const key in source) {
        if (this.isObject(source[key])) {
          if (!target[key]) Object.assign(target, {
            [key]: {}
          });
          this.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, {
            [key]: source[key]
          });
        }
      }
    }

    return this.mergeDeep(target, ...sources);
  },

  /**
   * @param {any} data - The data to copy.
   * @returns {any} - The copied data.
   */
  copyDeep: function (data) {
    let node;

    if (Array.isArray(data)) {
      node = data.length > 0 ? data.slice(0) : [];
      node.forEach((e, i) => {
        if (typeof e === 'object' && e !== {} || Array.isArray(e) && e.length > 0) {
          node[i] = this.copyDeep(e);
        }
      });
    } else if (data !== null && typeof data === 'object') {
      if (data.clone && typeof data.clone === 'function') {
        node = data.clone();
      } else {
        node = Object.assign({
          __proto__: data.__proto__
        }, data);
        Object.keys(node).forEach(key => {
          if (typeof node[key] === 'object' && node[key] !== {} || Array.isArray(node[key]) && node[key].length > 0) {
            node[key] = this.copyDeep(node[key]);
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
  isEmptyObject: function (obj) {
    for (let key in obj) {
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
  getPropertyPath: function (obj, propertyPath) {
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
  hasPropertyPath: function (obj, propertyPath) {
    if (!propertyPath) {
      return false;
    }

    let properties = propertyPath.split('.');

    for (let i = 0; i < properties.length; i++) {
      let prop = properties[i];

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
  createPropertyPath: function (obj, path, value = null) {
    let pathArray = path.split('.');
    let current = obj;

    while (pathArray.length > 1) {
      const [head, ...tail] = pathArray;
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
  deletePropertyPath: function (obj, path) {
    if (!obj || !path) {
      return;
    }

    let pathArray = path.split('.');

    for (let i = 0; i < pathArray.length - 1; i++) {
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
  defer: function () {
    let res, rej; // $FlowFixMe

    let promise = new Promise((resolve, reject) => {
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
  bind: function (thisObj, fn) {
    return function () {
      fn.apply(thisObj, arguments);
    };
  }
};
const _Generator = {
  /**
   * Generates unique id.
   * @param {number} length - The length of the id.
   * @returns {string} - The generated id.
   */
  uniqueId: function (length) {
    let from = 2;
    let to = from + (!length || length < 0 ? 0 : length - 2);
    return '_' + Math.random().toString(36).substr(from, to);
  },

  /**
   * Generates GUID.
   * @return {string} - GUID
   * @private
   */
  guid: function () {
    let S4 = () => {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };

    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
  }
};
const _Dom = {
  /**
   * Adds class name to an element
   * @param {Element} element - an HTML element
   * @param {string} className - a class name
   * @returns {void}
   */
  addClassName(element, className) {
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
  removeClassName(element, className) {
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
  hasClassName(element, className) {
    return element.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(element.className);
  },

  /**
   * Add element attribute
   * @param {Element} element - an HTML element
   * @param {string} name - attribute name
   * @param {string} value - attribute value
   * @returns {void}
   */
  setAttribute(element, name, value) {
    element.setAttribute(name, value);
  },

  /**
   * Remove element attribute
   * @param {Element} element - an HTML element
   * @param {string} name - attribute name
   * @returns {void}
   */
  removeAttribute(element, name) {
    element.removeAttribute(name);
  },

  /**
   * Set element style
   * @param {Element} element - an HTML element
   * @param {string} name - style name
   * @param {string} value - style value
   * @returns {void}
   */
  setStyle(element, name, value) {
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
  appendChild(parent, child) {
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
  removeChild(parent, child) {
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
  prependTo(child, parent) {
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
  getElementById(id) {
    return document.getElementById(id);
  },

  /**
   * Returns a live HTMLCollection of elements with the given tag name.
   * @param {string} tagName - The desired tag name.
   * @returns {Element} - The elements with the desired tag name.
   */
  getElementsByTagName(tagName) {
    return document.getElementsByTagName(tagName);
  },

  /**
   * Creates the HTML element specified by tagName.
   * @param {string} tagName - The tag name.
   * @returns {Element} - The element just created.
   */
  createElement(tagName) {
    return document.createElement(tagName);
  },

  /**
   * Loads script asynchronously.
   * @param {string} url - The url to load.
   * @return {Promise} - The loading promise.
   * @public
   */
  loadScriptAsync(url) {
    return new Promise((resolve, reject) => {
      let r = false,
          t = document.getElementsByTagName('script')[0],
          s = this.createElement('script');
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
  getElementBySelector(selector) {
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
  insertBefore(parent, newChild, existingChild) {
    try {
      return parent.insertBefore(newChild, existingChild);
    } catch (e) {
      return null;
    }
  }

};
const _Http = {
  protocol: /^(https?:)/i.test(document.location.protocol) ? document.location.protocol : 'https:',
  execute: function (url, params, method = 'POST', headers) {
    let request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            try {
              let jsonResponse = JSON.parse(request.responseText);
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
        headers.forEach((value, key) => {
          request.setRequestHeader(key, value);
        });
      }

      request.send(params);
    });
  },
  jsonp: jsonp
};
const _VERSION = {
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
  compare: function (v1, v2, options = {}) {
    options = _Object.merge([{
      lexicographical: false,
      zeroExtend: true
    }, options]);
    const lexicographical = options.lexicographical;
    const zeroExtend = options.zeroExtend;
    let v1parts = (v1 || '0').split('.');
    let v2parts = (v2 || '0').split('.');

    const isValidPart = x => {
      return (lexicographical ? /^\d+[A-Za-zαß]*$/ : /^\d+[A-Za-zαß]?$/).test(x);
    };

    const mapParts = parts => {
      return parts.map(x => {
        const match = /[A-Za-zαß]/.exec(x);
        return Number(match ? x.replace(match[0], '.' + x.charCodeAt(match.index)) : x);
      });
    };

    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
      return NaN;
    }

    if (zeroExtend) {
      while (v1parts.length < v2parts.length) v1parts.push('0');

      while (v2parts.length < v1parts.length) v2parts.push('0');
    }

    if (!lexicographical) {
      v1parts = mapParts(v1parts);
      v2parts = mapParts(v2parts);
    }

    for (let i = 0; i < v1parts.length; ++i) {
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

// CONCATENATED MODULE: ./utils/poster-manager.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



let poster_manager_PosterManager = /*#__PURE__*/function () {
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
      _Dom.setStyle(this._el, 'background-image', `url("${this._posterUrl}")`);
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
      const el = this._el = _Dom.createElement('div');
      _Dom.setAttribute(el, 'id', _Generator.uniqueId(5));
      _Dom.setAttribute(el, 'tabindex', '-1');
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
      _Dom.removeChild(this._el.parentNode, this._el);
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
    _Dom.setStyle(this._el, 'display', '');
  }
  /**
   * Hide the poster image
   * @public
   * @returns {void}
   */
  ;

  _proto.hide = function hide() {
    _Dom.setStyle(this._el, 'display', 'none');
  }
  /**
   * Resets the poster url and the background image
   * @public
   * @returns {void}
   */
  ;

  _proto.reset = function reset() {
    this._posterUrl = '';
    _Dom.setStyle(this._el, 'background-image', '');
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
    get: function () {
      return this._posterUrl;
    }
  }]);

  return PosterManager;
}();

/* harmony default export */ var poster_manager = (poster_manager_PosterManager);
// CONCATENATED MODULE: ./ads/ad-event-type.js
const AdEventType = {
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

// CONCATENATED MODULE: ./event/event-type.js


const Html5EventType = {
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
const CustomEventType = {
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
  DRM_LICENSE_LOADED: 'drmlicenseloaded'
};
const EventType = _Object.merge([Html5EventType, CustomEventType, AdEventType]);

// CONCATENATED MODULE: ./utils/locale.js
function locale_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function locale_createClass(Constructor, protoProps, staticProps) { if (protoProps) locale_defineProperties(Constructor.prototype, protoProps); if (staticProps) locale_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Locale class
 * @class
 *
 */
let Locale = /*#__PURE__*/function () {
  function Locale() {}

  locale_createClass(Locale, null, [{
    key: "language",

    /**
     * tries to return the locale language in IOS-693-1 format(two-letter codes, one per language for)
     * @returns {string} - the IOS-693-1 language string
     * @static
     */
    get: function () {
      let lang;

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


// CONCATENATED MODULE: ./middleware/base-middleware.js
/**
 * Base middleware.
 * @classdesc
 */
let BaseMiddleware = /*#__PURE__*/function () {
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


// CONCATENATED MODULE: ./plugin/base-plugin.js
function base_plugin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/** The BasePlugin responsible to implement the plugin interface.
 * Contains several default implementations.
 * Other plugins should extend this class.
 * @classdesc
 */

let base_plugin_BasePlugin = /*#__PURE__*/function () {
  /**
   * The runtime configuration of the plugin.
   * @member
   */

  /**
   * The name of the plugin.
   * @member
   */

  /**
   * The logger of the plugin.
   * @member
   */

  /**
   * Reference to the actual player.
   * @member
   */

  /**
   * The event manager of the plugin.
   * @member
   */

  /**
   * The default configuration of the plugin.
   * Inherited plugins should override this property.
   * @type {Object}
   * @static
   * @member
   */

  /**
   * Factory method to create the actual plugin.
   * @param {string} name - The plugin name
   * @param {Player} player - The player reference
   * @param {Object} config - The plugin configuration
   * @returns {BasePlugin} - New runtime plugin instance
   * @static
   * @public
   */
  BasePlugin.createPlugin = function createPlugin(name, player, config = {}) {
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
  ;

  BasePlugin.isValid = function isValid() {
    throw new error_Error(error_Error.Severity.CRITICAL, error_Error.Category.PLAYER, error_Error.Code.RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED, 'isValid()');
  }
  /**
   * constructor
   * @param {string} name - The plugin name
   * @param {Player} player - The player reference
   * @param {Object} config - The plugin configuration
   * @constructor
   * @private
   */
  ;

  function BasePlugin(name, player, config) {
    this.name = name;
    this.player = player;
    this.eventManager = new event_manager();
    this.logger = utils_logger(_String.capitlize(this.name));
    this.config = {};
    _Object.mergeDeep(this.config, this.constructor.defaultConfig, config);
  }
  /**
   * Getter for the configuration of the plugin.
   * @param {string} attr - The key in the plugin configuration (optional).
   * @returns {*} - If attribute is provided, returns its value. Else, Returns the config of the plugin.
   * @public
   */


  var _proto = BasePlugin.prototype;

  _proto.getConfig = function getConfig(attr) {
    if (attr) {
      return _Object.copyDeep(this.config[attr]);
    }

    return _Object.copyDeep(this.config);
  }
  /**
   * Updates the config of the plugin.
   * @param {Object} update - The updated configuration.
   * @public
   * @returns {void}
   */
  ;

  _proto.updateConfig = function updateConfig(update) {
    _Object.mergeDeep(this.config, update);
  }
  /**
   * Runs the loadMedia logic of the plugin.
   * plugin must implement this method.
   * @public
   * @virtual
   * @returns {void}
   */
  ;

  _proto.loadMedia = function loadMedia() {}
  /**
   * Runs the destroy logic of the plugin.
   * plugin must implement this method.
   * @public
   * @virtual
   * @returns {void}
   */
  ;

  _proto.destroy = function destroy() {}
  /**
   * Runs the reset logic of the plugin.
   * plugin must implement this method.
   * @public
   * @virtual
   * @returns {void}
   */
  ;

  _proto.reset = function reset() {}
  /**
   * Getter for the plugin's name.
   * @returns {string} - The name of the plugin.
   * @public
   */
  ;

  _proto.getName = function getName() {
    return this.name;
  }
  /**
   * Dispatch an event via the plugin.
   * @param {string} name - The event name.
   * @param {any} payload - The event payload.
   * @returns {void}
   */
  ;

  _proto.dispatchEvent = function dispatchEvent(name, payload) {
    this.logger.debug('Fire event: ' + name, payload);
    this.player.dispatchEvent(new fake_event(name, payload));
  };

  _proto.getMiddlewareImpl = function getMiddlewareImpl() {
    return null;
  };

  _proto.getUIComponents = function getUIComponents() {
    return [];
  };

  return BasePlugin;
}();

base_plugin_defineProperty(base_plugin_BasePlugin, "defaultConfig", {});


// CONCATENATED MODULE: ./plugin/plugin-manager.js
function plugin_manager_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * The logger of the PluginManager class.
 * @private
 * @const
 */

const plugin_manager_logger = utils_logger('PluginManager');
/** The PluginManager responsible for register plugins definitions and store plugins instances.
 * @classdesc
 */

let plugin_manager_PluginManager = /*#__PURE__*/function () {
  function PluginManager() {
    plugin_manager_defineProperty(this, "_plugins", {});

    plugin_manager_defineProperty(this, "_isDisabledPluginMap", new Map());
  }

  /**
   * Writes the plugin in the registry.
   * Maps: plugin name -> plugin class.
   * @param {string} name - The plugin name
   * @param {Function} handler - The plugin class
   * @returns {boolean} - If the registration request succeeded
   * @static
   * @public
   */
  PluginManager.register = function register(name, handler) {
    if (typeof handler !== 'function' || handler.prototype instanceof base_plugin_BasePlugin === false) {
      plugin_manager_logger.error(`Plugin <${name}> registration failed, either plugin is not an instance of BasePlugin or plugin handler is not a function`);
      return false;
    }

    if (!PluginManager._registry.has(name)) {
      PluginManager._registry.set(name, handler);

      plugin_manager_logger.debug(`Plugin <${name}> has been registered successfully`);
      return true;
    }

    plugin_manager_logger.debug(`Plugin <${name}> is already registered, do not register again`);
    return false;
  }
  /**
   * Removes the plugin from the registry.
   * @param {string} name - The plugin name
   * @static
   * @public
   * @returns {void}
   */
  ;

  PluginManager.unRegister = function unRegister(name) {
    if (PluginManager._registry.has(name)) {
      PluginManager._registry.delete(name);

      plugin_manager_logger.debug(`Unregistered <${name}> plugin.`);
    }
  }
  /**
   * Creates and store new instance of the plugin in case isValid() of the plugin returns true.
   * @param {string} name - The plugin name
   * @param {Player} player - The player reference
   * @param {Object} [config={}] - The plugin configuration
   * @returns {boolean} - Whether the plugin load was successful
   * @public
   */
  ;

  var _proto = PluginManager.prototype;

  _proto.load = function load(name, player, config = {}) {
    if (!PluginManager._registry.has(name)) {
      plugin_manager_logger.warn(`Plugin <${name}> loading failed, plugin is not registered`);
      throw new error_Error(error_Error.Severity.RECOVERABLE, error_Error.Category.PLAYER, error_Error.Code.RUNTIME_ERROR_NOT_REGISTERED_PLUGIN, name);
    }

    let pluginClass = PluginManager._registry.get(name);

    if (typeof config.disable === 'boolean') {
      this._isDisabledPluginMap.set(name, config.disable);
    }

    const isDisablePlugin = !!this._isDisabledPluginMap.get(name);
    const isValidPlugin = pluginClass ? pluginClass.isValid() : false;

    if (pluginClass && isValidPlugin && !isDisablePlugin) {
      try {
        this._plugins[name] = pluginClass.createPlugin(name, player, config);
      } catch (e) {
        throw new error_Error(error_Error.Severity.RECOVERABLE, error_Error.Category.PLAYER, error_Error.Code.PLUGIN_LOAD_FAILED, e);
      }

      this._isDisabledPluginMap.set(name, false);

      plugin_manager_logger.debug(`Plugin <${name}> has been loaded`);
      return true;
    }

    plugin_manager_logger.debug(`Plugin <${name}> isn't loaded, isValid()=${isValidPlugin.toString()}, disabled=${isDisablePlugin.toString()}`);
    return false;
  }
  /**
   * Iterates over all the plugins and calls loadMedia().
   * @public
   * @returns {void}
   */
  ;

  _proto.loadMedia = function loadMedia() {
    Object.keys(this._plugins).forEach(k => this._plugins[k].loadMedia());
  }
  /**
   * Iterates over all the plugins and calls destroy().
   * @public
   * @returns {void}
   */
  ;

  _proto.destroy = function destroy() {
    Object.keys(this._plugins).forEach(k => {
      this._plugins[k].destroy();

      delete this._plugins[k];
    });
  }
  /**
   * Iterates over all the plugins and calls reset() method of the plugin's impl.
   * @public
   * @returns {void}
   */
  ;

  _proto.reset = function reset() {
    Object.keys(this._plugins).forEach(k => this._plugins[k].reset());
  }
  /**
   * Returns the plugin's instance.
   * @param {string} name - The plugin name.
   * @returns {BasePlugin} - The plugin instance.
   * @public
   */
  ;

  _proto.get = function get(name) {
    return this._plugins[name];
  }
  /**
   * Returns all plugins.
   * @returns {Object} - All plugins.
   * @public
   */
  ;

  _proto.getAll = function getAll() {
    return this._plugins;
  };

  return PluginManager;
}();
/**
 * Export the register method.
 * @type {function}
 * @constant
 */


plugin_manager_defineProperty(plugin_manager_PluginManager, "_registry", new Map());


const registerPlugin = plugin_manager_PluginManager.register;

// CONCATENATED MODULE: ./state/state.js
function state_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function state_createClass(Constructor, protoProps, staticProps) { if (protoProps) state_defineProperties(Constructor.prototype, protoProps); if (staticProps) state_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This class describes a player state.
 * @classdesc
 */
let State = /*#__PURE__*/function () {
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


  state_createClass(State, [{
    key: "duration",
    get: function () {
      return this._duration;
    }
    /**
     * Setter for the duration of the state.
     * @param {number} endTime - The timestamp of the next state.
     */
    ,
    set: function (endTime) {
      this._duration = endTime - this._timestamp;
    }
  }]);

  return State;
}();


// CONCATENATED MODULE: ./state/state-type.js
const StateType = {
  IDLE: 'idle',
  LOADING: 'loading',
  PLAYING: 'playing',
  PAUSED: 'paused',
  BUFFERING: 'buffering'
};

// CONCATENATED MODULE: ./state/state-manager.js
function state_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function state_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) state_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) state_manager_defineProperties(Constructor, staticProps); return Constructor; }

function state_manager_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * This class responsible to manage all the state machine of the player.
 * @classdesc
 */

let state_manager_StateManager = /*#__PURE__*/function () {
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
    state_manager_defineProperty(this, "_transitions", {
      [StateType.IDLE]: {
        [Html5EventType.LOAD_START]: () => {
          this._updateState(StateType.LOADING);

          this._dispatchEvent();
        },
        [Html5EventType.PLAY]: () => {
          this._updateState(StateType.BUFFERING);

          this._dispatchEvent();
        },
        [Html5EventType.SEEKED]: () => {
          this._updateState(StateType.PAUSED);

          this._dispatchEvent();
        }
      },
      [StateType.LOADING]: {
        [Html5EventType.LOADED_METADATA]: () => {
          this._updateState(StateType.PAUSED);

          this._dispatchEvent();
        },
        [Html5EventType.ERROR]: () => {
          this._updateState(StateType.IDLE);

          this._dispatchEvent();
        }
      },
      [StateType.PAUSED]: {
        [Html5EventType.PLAY]: () => {
          this._updateState(StateType.PLAYING);

          this._dispatchEvent();
        },
        [Html5EventType.PLAYING]: () => {
          this._updateState(StateType.PLAYING);

          this._dispatchEvent();
        },
        [Html5EventType.ENDED]: () => {
          this._updateState(StateType.IDLE);

          this._dispatchEvent();
        },
        [CustomEventType.PLAYBACK_ENDED]: () => {
          this._updateState(StateType.IDLE);

          this._dispatchEvent();
        }
      },
      [StateType.PLAYING]: {
        [Html5EventType.PAUSE]: () => {
          this._updateState(StateType.PAUSED);

          this._dispatchEvent();
        },
        [Html5EventType.WAITING]: () => {
          this._updateState(StateType.BUFFERING);

          this._lastWaitingTime = this._player.currentTime;

          this._dispatchEvent();
        },
        [Html5EventType.ENDED]: () => {
          this._updateState(StateType.IDLE);

          this._dispatchEvent();
        },
        [CustomEventType.PLAYBACK_ENDED]: () => {
          this._updateState(StateType.IDLE);

          this._dispatchEvent();
        },
        [Html5EventType.ERROR]: () => {
          this._updateState(StateType.IDLE);

          this._dispatchEvent();
        }
      },
      [StateType.BUFFERING]: {
        [Html5EventType.PLAYING]: () => {
          this._updateState(StateType.PLAYING);

          this._dispatchEvent();
        },
        [Html5EventType.PAUSE]: () => {
          this._updateState(StateType.PAUSED);

          this._dispatchEvent();
        },
        [Html5EventType.SEEKED]: () => {
          if (this._prevState && this._prevState.type === StateType.PLAYING) {
            this._updateState(StateType.PLAYING);

            this._dispatchEvent();
          }
        },
        [Html5EventType.TIME_UPDATE]: () => {
          if (this._player.currentTime !== this._lastWaitingTime && this._prevState && this._prevState.type === StateType.PLAYING) {
            this._lastWaitingTime = null;

            this._updateState(StateType.PLAYING);

            this._dispatchEvent();
          }
        }
      }
    });

    this._player = player;
    this._logger = utils_logger('StateManager');
    this._eventManager = new event_manager();
    this._history = [];
    this._prevState = null;
    this._curState = new State(StateType.IDLE);

    this._attachListeners();
  }
  /**
   * Register to all necessary events which impacts on the player state.
   * @private
   * @returns {void}
   */


  var _proto = StateManager.prototype;

  _proto._attachListeners = function _attachListeners() {
    this._eventManager.listen(this._player, Html5EventType.ERROR, this._doTransition.bind(this));

    this._eventManager.listen(this._player, Html5EventType.ENDED, this._doTransition.bind(this));

    this._eventManager.listen(this._player, Html5EventType.PLAY, this._doTransition.bind(this));

    this._eventManager.listen(this._player, Html5EventType.LOAD_START, this._doTransition.bind(this));

    this._eventManager.listen(this._player, Html5EventType.PLAYING, this._doTransition.bind(this));

    this._eventManager.listen(this._player, Html5EventType.LOADED_METADATA, this._doTransition.bind(this));

    this._eventManager.listen(this._player, Html5EventType.PAUSE, this._doTransition.bind(this));

    this._eventManager.listen(this._player, Html5EventType.WAITING, this._doTransition.bind(this));

    this._eventManager.listen(this._player, Html5EventType.SEEKED, this._doTransition.bind(this));

    this._eventManager.listen(this._player, Html5EventType.TIME_UPDATE, this._doTransition.bind(this));

    this._eventManager.listen(this._player, CustomEventType.PLAYBACK_ENDED, this._doTransition.bind(this));
  }
  /**
   * Performs a state transition depends on the event which occurs in the player system.
   * @param {FakeEvent} event - The event occurs in the player system.
   * @private
   * @returns {void}
   */
  ;

  _proto._doTransition = function _doTransition(event) {
    if (event.type !== Html5EventType.TIME_UPDATE || this._curState === StateType.BUFFERING && event.type === Html5EventType.TIME_UPDATE) {
      this._logger.debug('Do transition request', event.type); // don't show most of 'timeupdate' events

    }

    let transition = this._transitions[this._curState.type];

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
  ;

  _proto._updateState = function _updateState(type) {
    if (this._curState.type !== type) {
      this._curState.duration = Date.now() / 1000;

      this._history.push(this._curState);

      this._prevState = this._curState;
      this._curState = new State(type);

      this._logger.debug(`Switch player state: from ${this._prevState.type} to ${this._curState.type}`);
    }
  }
  /**
   * Fires the playerStateChanged event after state has been changed.
   * @private
   * @returns {void}
   */
  ;

  _proto._dispatchEvent = function _dispatchEvent() {
    let event = new fake_event(CustomEventType.PLAYER_STATE_CHANGED, {
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

  state_manager_createClass(StateManager, [{
    key: "currentState",
    get: function () {
      return this._curState;
    }
    /**
     * Getter to the previous state of the player.
     * @public
     * @returns {State|null} - The previous state object, or null if such doesn't exists
     */

  }, {
    key: "previousState",
    get: function () {
      return this._prevState;
    }
    /**
     * Getter to the state history of the player.
     * @public
     * @returns {Array.<State>} - The full states history objects
     */

  }, {
    key: "history",
    get: function () {
      return this._history;
    }
  }]);

  return StateManager;
}();


// CONCATENATED MODULE: ./track/track.js
function track_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function track_createClass(Constructor, protoProps, staticProps) { if (protoProps) track_defineProperties(Constructor.prototype, protoProps); if (staticProps) track_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * General track representation of the player.
 * @classdesc
 */
let Track = /*#__PURE__*/function () {
  /**
   * Comparing language strings.
   * @param {string} inputLang - The configured language.
   * @param {string} trackLang - The default track language.
   * @returns {boolean} - Whether the strings are equal or starts with the same substring.
   */
  Track.langComparer = function langComparer(inputLang, trackLang) {
    try {
      inputLang = inputLang.toLowerCase();
      trackLang = trackLang.toLowerCase();
      return inputLang ? inputLang.startsWith(trackLang) || trackLang.startsWith(inputLang) : false;
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

  track_createClass(Track, [{
    key: "id",

    /**
     * Getter for the track id.
     * @public
     * @returns {?string} - The track id.
     */
    get: function () {
      return this._id;
    }
    /**
     * Getter for the active mode of the track.
     * @public
     * @returns {boolean} - The active mode of the track.
     */

  }, {
    key: "active",
    get: function () {
      return this._active;
    }
    /**
     * Setter for the active mode of the track.
     * @public
     * @param {boolean} value - Whether the track is active or not.
     */
    ,
    set: function (value) {
      this._active = value;
    }
    /**
     * Getter for the label of the track.
     * @public
     * @returns {string} - The label of the track.
     */

  }, {
    key: "label",
    get: function () {
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
    set: function (value) {
      this._label = value;
    }
    /**
     * @constructor
     * @param {Object} settings - The track settings object.
     */

  }, {
    key: "language",
    get: function () {
      return this._language;
    }
    /**
     * Getter for the index of the track.
     * @public
     * @returns {number} - The index of the track.
     */

  }, {
    key: "index",
    get: function () {
      return this._index;
    }
    /**
     * Setter for the index of the track.
     * @public
     * @param {number} value - The index of the track.
     * @returns {void}
     */
    ,
    set: function (value) {
      this._index = value;
    }
  }]);

  function Track(settings = {}) {
    this._id = settings.id;
    this._active = settings.active;
    this._label = settings.label;
    this._language = settings.language;
    this._index = settings.index;
    this.clone = Track.clone.bind(null, this);
  }

  return Track;
}();


// CONCATENATED MODULE: ./track/video-track.js
function video_track_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function video_track_createClass(Constructor, protoProps, staticProps) { if (protoProps) video_track_defineProperties(Constructor.prototype, protoProps); if (staticProps) video_track_defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


/**
 * Video track representation of the player.
 * @classdesc
 */

const VideoTrack = /*#__PURE__*/function (_Track) {
  _inheritsLoose(VideoTrack, _Track);

  video_track_createClass(VideoTrack, [{
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
    get: function () {
      return this._bandwidth;
    }
    /**
     * @public
     * @returns {number} - The width of the video track
     */

  }, {
    key: "width",
    get: function () {
      return this._width;
    }
    /**
     * @public
     * @returns {number} - The height of the video track
     */

  }, {
    key: "height",
    get: function () {
      return this._height;
    }
    /**
     * @constructor
     * @param {Object} settings - The track settings object
     */

  }]);

  function VideoTrack(settings = {}) {
    var _this;

    _this = _Track.call(this, settings) || this;
    _this._bandwidth = settings.bandwidth;
    _this._width = settings.width;
    _this._height = settings.height;
    _this._label = settings.label ? settings.label : _this._height ? _this._height + 'p' : undefined;
    return _this;
  }

  return VideoTrack;
}(Track);

/* harmony default export */ var video_track = (VideoTrack);
// CONCATENATED MODULE: ./track/audio-track.js
function audio_track_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


/**
 * Audio track representation of the player.
 * @classdesc
 */

const AudioTrack = /*#__PURE__*/function (_Track) {
  audio_track_inheritsLoose(AudioTrack, _Track);

  function AudioTrack() {
    return _Track.apply(this, arguments) || this;
  }

  return AudioTrack;
}(Track);

/* harmony default export */ var audio_track = (AudioTrack);
// CONCATENATED MODULE: ./track/text-track.js
function text_track_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function text_track_createClass(Constructor, protoProps, staticProps) { if (protoProps) text_track_defineProperties(Constructor.prototype, protoProps); if (staticProps) text_track_defineProperties(Constructor, staticProps); return Constructor; }

function text_track_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


/**
 * Text track representation of the player.
 * @classdesc
 */

const TextTrack = /*#__PURE__*/function (_Track) {
  text_track_inheritsLoose(TextTrack, _Track);

  text_track_createClass(TextTrack, [{
    key: "kind",

    /**
     * The kind of the text track:
     * subtitles/captions/metadata.
     * @member
     * @type {string}
     * @private
     */

    /**
     * flag to know if it's external or not
     * @member
     * @type {boolean}
     * @private
     */

    /**
     * Getter for the kind of the text track.
     * @public
     * @returns {string} - The kind of the text track.
     */
    get: function () {
      return this._kind;
    }
    /**
     * Getter for the external of the text track.
     * @public
     * @returns {boolean} - The kind of the text track.
     */

  }, {
    key: "external",
    get: function () {
      return this._external;
    }
    /**
     * @constructor
     * @param {Object} settings - The track settings object.
     */

  }]);

  function TextTrack(settings = {}) {
    var _this;

    _this = _Track.call(this, settings) || this; // use language tag if no display label is available

    _this._label = _this.label || _this.language;
    _this._kind = settings.kind;
    _this._external = settings.external;
    return _this;
  }

  return TextTrack;
}(Track);

/* harmony default export */ var text_track = (TextTrack);
// CONCATENATED MODULE: ./track/text-style.js
function text_style_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function text_style_createClass(Constructor, protoProps, staticProps) { if (protoProps) text_style_defineProperties(Constructor.prototype, protoProps); if (staticProps) text_style_defineProperties(Constructor, staticProps); return Constructor; }

function text_style_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * We use this number to calculate the scale of the text. so it will be : 1 + 0.25 * FontSizes.value
 * So, if the user selects 400% the scale would be: 1 + 0.25 * 4 = 2. so the font size should be multiplied by 2.
 * The calculation of the size of the font is done in text-track-display and not in this module, because
 * the calculation in text-track-display also set the location of the container of the subtitiles according to the
 * font size.
 * @type {number}
 */
const IMPLICIT_SCALE_PERCENTAGE = 0.25;
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

let TextStyle = /*#__PURE__*/function () {
  function TextStyle() {
    text_style_defineProperty(this, "fontSize", '100%');

    text_style_defineProperty(this, "fontScale", 1);

    text_style_defineProperty(this, "fontFamily", TextStyle.FontFamily.SANS_SERIF);

    text_style_defineProperty(this, "fontColor", TextStyle.StandardColors.WHITE);

    text_style_defineProperty(this, "fontOpacity", TextStyle.StandardOpacities.OPAQUE);

    text_style_defineProperty(this, "backgroundColor", TextStyle.StandardColors.BLACK);

    text_style_defineProperty(this, "backgroundOpacity", TextStyle.StandardOpacities.OPAQUE);

    text_style_defineProperty(this, "fontEdge", TextStyle.EdgeStyles.NONE);
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
  }
  /**
   * Font size, such as 1, 2, 3...
   * @type {number}
   */
  ;

  var _proto = TextStyle.prototype;

  _proto.getTextShadow = function getTextShadow() {
    // A given edge effect may be implemented with multiple shadows.
    // Collect them all into an array, then combine into one attribute.
    let shadows = [];

    for (let i = 0; i < this.fontEdge.length; i++) {
      // shaka.asserts.assert(this.fontEdge[i].length == 6);
      const color = this.fontEdge[i].slice(0, 3);
      let shadow = this.fontEdge[i].slice(3, 6);
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
    let attributes = [];
    attributes.push('font-family: ' + this.fontFamily);
    attributes.push('color: ' + TextStyle.toRGBA(this.fontColor, this.fontOpacity));
    attributes.push('background-color: ' + TextStyle.toRGBA(this.backgroundColor, this.backgroundOpacity));
    attributes.push('text-shadow: ' + this.getTextShadow());
    return attributes.join('!important; ');
  }
  /**
   * clones the textStyle object
   * @returns {TextStyle} the cloned textStyle object
   */
  ;

  _proto.clone = function clone() {
    let clonedTextStyle = new TextStyle();
    clonedTextStyle.fontEdge = this.fontEdge;
    clonedTextStyle.fontSize = this.fontSize;
    clonedTextStyle.fontScale = this.fontScale;
    clonedTextStyle.fontColor = this.fontColor;
    clonedTextStyle.fontOpacity = this.fontOpacity;
    clonedTextStyle.backgroundColor = this.backgroundColor;
    clonedTextStyle.backgroundOpacity = this.backgroundOpacity;
    clonedTextStyle.fontFamily = this.fontFamily;
    return clonedTextStyle;
  }
  /**
   * comparing between 2 textStyle objects.
   * @param {TextStyle} textStyle - The textStyle to compare with.
   * @returns {boolean} - Whether the text styles are equal.
   */
  ;

  _proto.isEqual = function isEqual(textStyle) {
    return textStyle.fontEdge === this.fontEdge && textStyle.fontSize === this.fontSize && textStyle.fontColor === this.fontColor && textStyle.fontOpacity === this.fontOpacity && textStyle.backgroundColor === this.backgroundColor && textStyle.backgroundOpacity === this.backgroundOpacity;
  };

  text_style_createClass(TextStyle, [{
    key: "implicitFontScale",
    get: function () {
      return IMPLICIT_SCALE_PERCENTAGE * this.fontScale + 1;
    }
  }]);

  return TextStyle;
}();

text_style_defineProperty(TextStyle, "FontFamily", {
  ARIAL: 'Arial',
  HELVETICA: 'Helvetica',
  VERDANA: 'Verdana',
  SANS_SERIF: 'sans-serif'
});

text_style_defineProperty(TextStyle, "StandardColors", {
  WHITE: [255, 255, 255],
  BLACK: [0, 0, 0],
  RED: [255, 0, 0],
  GREEN: [0, 255, 0],
  BLUE: [0, 0, 255],
  YELLOW: [255, 255, 0],
  MAGENTA: [255, 0, 255],
  CYAN: [0, 255, 255]
});

text_style_defineProperty(TextStyle, "StandardOpacities", {
  OPAQUE: 1,
  SEMI_HIGH: 0.75,
  SEMI_LOW: 0.25,
  TRANSPARENT: 0
});

text_style_defineProperty(TextStyle, "EdgeStyles", {
  NONE: [],
  RAISED: [[34, 34, 34, 1, 1, 0], [34, 34, 34, 2, 2, 0], [34, 34, 34, 3, 3, 0]],
  DEPRESSED: [[204, 204, 204, 1, 1, 0], [204, 204, 204, 0, 1, 0], [34, 34, 34, -1, -1, 0], [34, 34, 34, 0, -1, 0]],
  UNIFORM: [[34, 34, 34, 0, 0, 4], [34, 34, 34, 0, 0, 4], [34, 34, 34, 0, 0, 4], [34, 34, 34, 0, 0, 4]],
  DROP: [[34, 34, 34, 2, 2, 3], [34, 34, 34, 2, 2, 4], [34, 34, 34, 2, 2, 5]]
});

text_style_defineProperty(TextStyle, "FontSizes", [{
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

/* harmony default export */ var text_style = (TextStyle);
// CONCATENATED MODULE: ./track/vtt-region.js
function vtt_region_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vtt_region_createClass(Constructor, protoProps, staticProps) { if (protoProps) vtt_region_defineProperties(Constructor.prototype, protoProps); if (staticProps) vtt_region_defineProperties(Constructor, staticProps); return Constructor; }

function vtt_region_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


let VTTRegion = /*#__PURE__*/function () {
  function VTTRegion() {
    vtt_region_defineProperty(this, "_width", 100);

    vtt_region_defineProperty(this, "_lines", 3);

    vtt_region_defineProperty(this, "_regionAnchorX", 0);

    vtt_region_defineProperty(this, "_regionAnchorY", 100);

    vtt_region_defineProperty(this, "_viewportAnchorX", 0);

    vtt_region_defineProperty(this, "_viewportAnchorY", 100);

    vtt_region_defineProperty(this, "_scroll", '');
  }

  vtt_region_createClass(VTTRegion, [{
    key: "width",
    get: function () {
      return this._width;
    },
    set: function (value) {
      if (!isValidPercentValue(value)) {
        throw new Error('Width must be between 0 and 100.');
      }

      this._width = value;
    }
  }, {
    key: "scroll",
    get: function () {
      return this._scroll;
    },
    set: function (value) {
      var setting = findScrollSetting(value); // Have to check for false as an empty string is a legal value.

      if (setting === false) {
        throw new SyntaxError('An invalid or illegal string was specified.');
      }

      this._scroll = setting;
    }
  }, {
    key: "viewportAnchorY",
    get: function () {
      return this._viewportAnchorY;
    },
    set: function (value) {
      if (!isValidPercentValue(value)) {
        throw new Error('ViewportAnchorY must be between 0 and 100.');
      }

      this._viewportAnchorY = value;
    }
  }, {
    key: "viewportAnchorX",
    get: function () {
      return this._viewportAnchorX;
    },
    set: function (value) {
      if (!isValidPercentValue(value)) {
        throw new Error('ViewportAnchorX must be between 0 and 100.');
      }

      this._viewportAnchorX = value;
    }
  }, {
    key: "regionAnchorX",
    get: function () {
      return this._regionAnchorX;
    },
    set: function (value) {
      if (!isValidPercentValue(value)) {
        throw new Error('RegionAnchorY must be between 0 and 100.');
      }

      this._regionAnchorX = value;
    }
  }, {
    key: "lines",
    get: function () {
      return this._lines;
    },
    set: function (value) {
      if (typeof value !== 'number') {
        throw new TypeError('Lines must be set to a number.');
      }

      this._lines = value;
    }
  }, {
    key: "regionAnchorY",
    get: function () {
      return this._regionAnchorY;
    },
    set: function (value) {
      if (!isValidPercentValue(value)) {
        throw new Error('RegionAnchorX must be between 0 and 100.');
      }

      this._regionAnchorY = value;
    }
  }]);

  return VTTRegion;
}();

let Region;

if (typeof window !== 'undefined' && window.VTTRegion) {
  Region = window.VTTRegion;
} else {
  Region = VTTRegion;
}


// CONCATENATED MODULE: ./track/text-track-display.js
function text_track_display_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function text_track_display_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




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

const fontScale = 1; // Try to parse input as a time stamp.

function parseTimeStamp(input) {
  function computeSeconds(h, m, s, f) {
    return (h | 0) * 3600 + (m | 0) * 60 + (s | 0) + (f | 0) / 1000;
  }

  const m = input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);

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

const ESCAPE = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&lrm;': '\u200e',
  '&rlm;': '\u200f',
  '&nbsp;': '\u00a0'
};
const TAG_NAME = {
  c: 'span',
  i: 'i',
  b: 'b',
  u: 'u',
  ruby: 'ruby',
  rt: 'rt',
  v: 'span',
  lang: 'span'
};
const TAG_ANNOTATION = {
  v: 'title',
  lang: 'lang'
};
const NEEDS_PARENT = {
  rt: 'ruby'
}; // A settings object holds key/value pairs and will ignore anything but the first
// assignment to a specific key.

function Settings() {
  this.values = _objCreate(null);
}

Settings.prototype = {
  // Only accept the first assignment to any key.
  set: function (k, v) {
    if (!this.get(k) && v !== '') {
      this.values[k] = v;
    }
  },
  // Return the value for a key, or a default value.
  // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
  // a number of possible default values as properties where 'defaultKey' is
  // the key of the property that will be chosen; otherwise it's assumed to be
  // a single value.
  get: function (k, dflt, defaultKey) {
    if (defaultKey) {
      return this.has(k) ? this.values[k] : dflt[defaultKey];
    }

    return this.has(k) ? this.values[k] : dflt;
  },
  // Check whether we have a value for a key.
  has: function (k) {
    return k in this.values;
  },
  // Accept a setting if its one of the given alternatives.
  alt: function (k, v, a) {
    for (var n = 0; n < a.length; ++n) {
      if (v === a[n]) {
        this.set(k, v);
        break;
      }
    }
  },
  // Accept a setting if its a valid (signed) integer.
  integer: function (k, v) {
    if (/^-?\d+$/.test(v)) {
      // integer
      this.set(k, parseInt(v, 10));
    }
  },
  // Accept a setting if its a valid percentage.
  percent: function (k, v) {
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

    const m = input.match(/^([^<]*)(<[^>]+>?)?/); // If there is some text before the next tag, return it, otherwise return
    // the tag.

    return consume(m[1] ? m[1] : m[2]);
  } // Unescape a string 's'.


  function unescape1(e) {
    return ESCAPE[e];
  }

  function unescape(s) {
    let m;

    while (m = s.match(/&(amp|lt|gt|lrm|rlm|nbsp);/)) {
      s = s.replace(m[0], unescape1);
    }

    return s;
  }

  function shouldAdd(current, element) {
    return !NEEDS_PARENT[element.localName] || NEEDS_PARENT[element.localName] === current.localName;
  } // Create an element for this tag.


  function createElement(type, annotation) {
    const tagName = TAG_NAME[type];

    if (!tagName) {
      return null;
    }

    let element = window.document.createElement(tagName);
    const name = TAG_ANNOTATION[type];

    if (name && annotation) {
      element[name] = annotation.trim();
    }

    return element;
  }

  let rootDiv = window.document.createElement('div'),
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

      let ts = parseTimeStamp(t.substr(1, t.length - 2));
      let node;

      if (ts) {
        // Timestamps are lead nodes as well.
        node = window.document.createProcessingInstruction('timestamp', ts);
        current.appendChild(node);
        continue;
      }

      const m = t.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/); // If we can't parse the tag, skip to the next tag.

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


const strongRTLRanges = [[0x5be, 0x5be], [0x5c0, 0x5c0], [0x5c3, 0x5c3], [0x5c6, 0x5c6], [0x5d0, 0x5ea], [0x5f0, 0x5f4], [0x608, 0x608], [0x60b, 0x60b], [0x60d, 0x60d], [0x61b, 0x61b], [0x61e, 0x64a], [0x66d, 0x66f], [0x671, 0x6d5], [0x6e5, 0x6e6], [0x6ee, 0x6ef], [0x6fa, 0x70d], [0x70f, 0x710], [0x712, 0x72f], [0x74d, 0x7a5], [0x7b1, 0x7b1], [0x7c0, 0x7ea], [0x7f4, 0x7f5], [0x7fa, 0x7fa], [0x800, 0x815], [0x81a, 0x81a], [0x824, 0x824], [0x828, 0x828], [0x830, 0x83e], [0x840, 0x858], [0x85e, 0x85e], [0x8a0, 0x8a0], [0x8a2, 0x8ac], [0x200f, 0x200f], [0xfb1d, 0xfb1d], [0xfb1f, 0xfb28], [0xfb2a, 0xfb36], [0xfb38, 0xfb3c], [0xfb3e, 0xfb3e], [0xfb40, 0xfb41], [0xfb43, 0xfb44], [0xfb46, 0xfbc1], [0xfbd3, 0xfd3d], [0xfd50, 0xfd8f], [0xfd92, 0xfdc7], [0xfdf0, 0xfdfc], [0xfe70, 0xfe74], [0xfe76, 0xfefc], [0x10800, 0x10805], [0x10808, 0x10808], [0x1080a, 0x10835], [0x10837, 0x10838], [0x1083c, 0x1083c], [0x1083f, 0x10855], [0x10857, 0x1085f], [0x10900, 0x1091b], [0x10920, 0x10939], [0x1093f, 0x1093f], [0x10980, 0x109b7], [0x109be, 0x109bf], [0x10a00, 0x10a00], [0x10a10, 0x10a13], [0x10a15, 0x10a17], [0x10a19, 0x10a33], [0x10a40, 0x10a47], [0x10a50, 0x10a58], [0x10a60, 0x10a7f], [0x10b00, 0x10b35], [0x10b40, 0x10b55], [0x10b58, 0x10b72], [0x10b78, 0x10b7f], [0x10c00, 0x10c48], [0x1ee00, 0x1ee03], [0x1ee05, 0x1ee1f], [0x1ee21, 0x1ee22], [0x1ee24, 0x1ee24], [0x1ee27, 0x1ee27], [0x1ee29, 0x1ee32], [0x1ee34, 0x1ee37], [0x1ee39, 0x1ee39], [0x1ee3b, 0x1ee3b], [0x1ee42, 0x1ee42], [0x1ee47, 0x1ee47], [0x1ee49, 0x1ee49], [0x1ee4b, 0x1ee4b], [0x1ee4d, 0x1ee4f], [0x1ee51, 0x1ee52], [0x1ee54, 0x1ee54], [0x1ee57, 0x1ee57], [0x1ee59, 0x1ee59], [0x1ee5b, 0x1ee5b], [0x1ee5d, 0x1ee5d], [0x1ee5f, 0x1ee5f], [0x1ee61, 0x1ee62], [0x1ee64, 0x1ee64], [0x1ee67, 0x1ee6a], [0x1ee6c, 0x1ee72], [0x1ee74, 0x1ee77], [0x1ee79, 0x1ee7c], [0x1ee7e, 0x1ee7e], [0x1ee80, 0x1ee89], [0x1ee8b, 0x1ee9b], [0x1eea1, 0x1eea3], [0x1eea5, 0x1eea9], [0x1eeab, 0x1eebb], [0x10fffd, 0x10fffd]];

function isStrongRTLChar(charCode) {
  for (let i = 0; i < strongRTLRanges.length; i++) {
    const currentRange = strongRTLRanges[i];

    if (charCode >= currentRange[0] && charCode <= currentRange[1]) {
      return true;
    }
  }

  return false;
}

function determineBidi(cueDiv) {
  let nodeStack = [],
      text = '',
      charCode;

  if (!cueDiv || !cueDiv.childNodes) {
    return 'ltr';
  }

  function pushNodes(nodeStack, node) {
    for (let i = node.childNodes.length - 1; i >= 0; i--) {
      nodeStack.push(node.childNodes[i]);
    }
  }

  function nextTextNode(nodeStack) {
    if (!nodeStack || !nodeStack.length) {
      return null;
    }

    const node = nodeStack.pop(),
          text = node.textContent || node.innerText;

    if (text) {
      // TODO: This should match all unicode type B characters (paragraph
      // separator characters). See issue #115.
      const m = text.match(/^.*(\n|\r)/);

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
    for (let i = 0; i < text.length; i++) {
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

  const track = cue.track;
  const trackList = track.textTrackList;
  let count = 0;

  for (let i = 0; i < trackList.length && trackList[i] !== track; i++) {
    if (trackList[i].mode === 'showing') {
      count++;
    }
  }

  return ++count * -1;
}

let StyleBox = /*#__PURE__*/function () {
  function StyleBox() {} // Apply styles to a div. If there is no div passed then it defaults to the
  // div on 'this'.


  var _proto = StyleBox.prototype;

  _proto.applyStyles = function applyStyles(styles, div) {
    div = div || this.div;

    for (let prop in styles) {
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


let CueStyleBox = /*#__PURE__*/function (_StyleBox) {
  text_track_display_inheritsLoose(CueStyleBox, _StyleBox);

  function CueStyleBox(window, cue, styleOptions) {
    var _this;

    _this = _StyleBox.call(this) || this;
    const isIE8 = typeof navigator !== 'undefined' && /MSIE\s8\.0/.test(navigator.userAgent);
    let color = 'rgba(255, 255, 255, 1)';
    let backgroundColor = 'rgba(0, 0, 0, 0.8)';
    let textShadow = '';

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
    let styles = {
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


    let textPos = 0;

    switch (cue.positionAlign) {
      case 'start':
        textPos = cue.position;
        break;

      case 'center':
        textPos = cue.position - cue.size / 2;
        break;

      case 'end':
        textPos = cue.position - cue.size;
        break;
    } // Horizontal box orientation; textPos is the distance from the left edge of the
    // area to the left edge of the box and cue.size is the distance extending to
    // the right from there.


    if (cue.vertical === '') {
      _this.applyStyles({
        left: _this.formatStyle(textPos, '%'),
        width: _this.formatStyle(cue.size, '%')
      }); // Vertical box orientation; textPos is the distance from the top edge of the
      // area to the top edge of the box and cue.size is the height extending
      // downwards from there.

    } else {
      _this.applyStyles({
        top: _this.formatStyle(textPos, '%'),
        height: _this.formatStyle(cue.size, '%')
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


let BoxPosition = /*#__PURE__*/function () {
  function BoxPosition(obj) {
    text_track_display_defineProperty(this, "overlaps", function (b2) {
      return this.left < b2.right && this.right > b2.left && this.top < b2.bottom && this.bottom > b2.top;
    });

    // Either a BoxPosition was passed in and we need to copy it, or a StyleBox
    // was passed in and we need to copy the results of 'getBoundingClientRect'
    // as the object returned is readonly. All co-ordinate values are in reference
    // to the viewport origin (top left).
    let lh, height, width, top;

    if (obj.div) {
      height = obj.div.offsetHeight;
      width = obj.div.offsetWidth;
      top = obj.div.offsetTop;
      let rects = (rects = obj.div.childNodes) && (rects = rects[0]) && rects.getClientRects && rects.getClientRects();
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
    for (let i = 0; i < boxes.length; i++) {
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
    let x = Math.max(0, Math.min(this.right, b2.right) - Math.max(this.left, b2.left)),
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
    let height = obj.div ? obj.div.offsetHeight : obj.tagName ? obj.offsetHeight : 0;
    let width = obj.div ? obj.div.offsetWidth : obj.tagName ? obj.offsetWidth : 0;
    let top = obj.div ? obj.div.offsetTop : obj.tagName ? obj.offsetTop : 0;
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
    let bestPosition,
        specifiedPosition = new BoxPosition(b),
        percentage = 1; // Highest possible so the first thing we get is better.

    for (let i = 0; i < axis.length; i++) {
      while (b.overlapsOppositeAxis(containerBox, axis[i]) || b.within(containerBox) && b.overlapsAny(boxPositions)) {
        b.move(axis[i]);
      } // We found a spot where we aren't overlapping anything. This is our
      // best position.


      if (b.within(containerBox)) {
        return b;
      }

      let p = b.intersectPercentage(containerBox); // If we're outside the container box less then we were on our last try
      // then remember this position as the best position.

      if (percentage > p) {
        bestPosition = new BoxPosition(b);
        percentage = p;
      } // Reset the box position to the specified position.


      b = new BoxPosition(specifiedPosition);
    }

    return bestPosition || specifiedPosition;
  }

  let boxPosition = new BoxPosition(styleBox),
      cue = styleBox.cue,
      linePos = computeLinePos(cue),
      axis = []; // If we have a line number to align the cue to.

  if (cue.snapToLines) {
    let size;

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

    let step = boxPosition.lineHeight,
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
    let calculatedPercentage = boxPosition.lineHeight / containerBox.height * 100;

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

  let bestPosition = findBestPosition(boxPosition, axis);
  styleBox.move(bestPosition.toCSSCompatValues(containerBox));
}

function convertCueToDOMTree(window, cuetext) {
  if (!window || !cuetext) {
    return null;
  }

  return parseContent(window, cuetext);
}

const FONT_SIZE_PERCENT = 0.058;
const FONT_STYLE = 'sans-serif';
const CUE_BACKGROUND_PADDING = '1.5%'; // Runs the processing model over the cues and regions passed to it.
// @param overlay A block level element (usually a div) that the computed cues
//                and regions will be placed into.

function processCues(window, cues, overlay, style) {
  if (!window || !cues || !overlay) {
    return null;
  } // Remove all previous children.


  while (overlay.firstChild) {
    overlay.removeChild(overlay.firstChild);
  }

  let paddedOverlay = window.document.createElement('div');
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
    for (let i = 0; i < cues.length; i++) {
      if (cues[i].hasBeenReset || !cues[i].displayState) {
        return true;
      }
    }

    return false;
  } // We don't need to recompute the cues' display states. Just reuse them.


  if (!shouldCompute(cues)) {
    for (let i = 0; i < cues.length; i++) {
      paddedOverlay.appendChild(cues[i].displayState);
    }

    return;
  }

  let boxPositions = [],
      containerBox = BoxPosition.getSimpleBoxPosition(paddedOverlay),
      dimensionSize = containerBox.height < containerBox.width ? containerBox.height : containerBox.width,
      fontSize = Math.round(dimensionSize * FONT_SIZE_PERCENT * 100) / 100;
  let styleOptions = {
    font: fontSize * fontScale * style.implicitFontScale + 'px ' + style.fontFamily,
    color: text_style.toRGBA(style.fontColor, style.fontOpacity),
    backgroundColor: text_style.toRGBA(style.backgroundColor, style.backgroundOpacity),
    textShadow: style.getTextShadow()
  };

  (function () {
    let styleBox, cue;

    for (let i = 0; i < cues.length; i++) {
      cue = cues[i]; // Compute the intial position and styles of the cue div.

      styleBox = new CueStyleBox(window, cue, styleOptions);
      paddedOverlay.appendChild(styleBox.div); // Move the cue div to it's correct line position.

      moveBoxToLinePosition(window, styleBox, containerBox, boxPositions); // Remember the computed div so that we don't have to recompute it later
      // if we don't have too.

      cue.displayState = styleBox.div;
      boxPositions.push(BoxPosition.getSimpleBoxPosition(styleBox));
    }
  })();
}

let Parser = function (window, decoder) {
  this.window = window;
  this.state = 'INITIAL';
  this.buffer = '';
  this.decoder = decoder || new TextDecoder('utf8');
  this.regionList = [];
};

let StringDecoder = function () {
  return {
    decode: function (data) {
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
  reportOrThrowError: function (e) {
    if (e instanceof ParsingError) {
      this.onparsingerror && this.onparsingerror(e);
    } else {
      throw e;
    }
  },
  parse: function (data) {
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
        var region = new Region();
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

            self.cue = new Cue(0, 0, '');
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
  flush: function () {
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

// CONCATENATED MODULE: ./track/vtt-cue.js
function vtt_cue_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vtt_cue_createClass(Constructor, protoProps, staticProps) { if (protoProps) vtt_cue_defineProperties(Constructor.prototype, protoProps); if (staticProps) vtt_cue_defineProperties(Constructor, staticProps); return Constructor; }

function vtt_cue_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const autoKeyword = 'auto';
const directionSetting = {
  '': true,
  lr: true,
  rl: true
};
const alignSetting = {
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

  const dir = directionSetting[value.toLowerCase()];
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

  const align = alignSetting[value.toLowerCase()];
  return align ? value.toLowerCase() : false;
}
/**
 * VTTCue model
 * @class
 * @classdesc VTT Cue model to represent VTT cues internally
 */


let vtt_cue_VTTCue = /*#__PURE__*/function () {
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
    vtt_cue_defineProperty(this, "hasBeenReset", false);

    vtt_cue_defineProperty(this, "displayState", undefined);

    vtt_cue_defineProperty(this, "_id", '');

    vtt_cue_defineProperty(this, "_pauseOnExit", false);

    vtt_cue_defineProperty(this, "_region", null);

    vtt_cue_defineProperty(this, "_vertical", '');

    vtt_cue_defineProperty(this, "_snapToLines", true);

    vtt_cue_defineProperty(this, "_line", 'auto');

    vtt_cue_defineProperty(this, "_lineAlign", 'start');

    vtt_cue_defineProperty(this, "_position", 50);

    vtt_cue_defineProperty(this, "_positionAlign", 'center');

    vtt_cue_defineProperty(this, "_size", 50);

    vtt_cue_defineProperty(this, "_align", 'center');

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
    return convertCueToDOMTree(window, this.text);
  };

  vtt_cue_createClass(VTTCue, [{
    key: "id",
    get: function () {
      return this._id;
    },
    set: function (value) {
      this._id = '' + value;
    }
  }, {
    key: "pauseOnExit",
    get: function () {
      return this._pauseOnExit;
    },
    set: function (value) {
      this._pauseOnExit = value;
    }
  }, {
    key: "startTime",
    get: function () {
      return this._startTime;
    },
    set: function (value) {
      if (typeof value !== 'number') {
        throw new TypeError('Start time must be set to a number.');
      }

      this._startTime = value;
      this.resetCue();
    }
  }, {
    key: "endTime",
    get: function () {
      return this._endTime;
    },
    set: function (value) {
      if (typeof value !== 'number') {
        throw new TypeError('End time must be set to a number.');
      }

      this._endTime = value;
      this.resetCue();
    }
  }, {
    key: "text",
    get: function () {
      return this._text;
    },
    set: function (value) {
      this._text = '' + value;
      this.resetCue();
    }
  }, {
    key: "region",
    get: function () {
      return this._region;
    },
    set: function (value) {
      this._region = value;
      this.resetCue();
    }
  }, {
    key: "vertical",
    get: function () {
      return this._vertical;
    },
    set: function (value) {
      const setting = findDirectionSetting(value); // Have to check for false because the setting an be an empty string.

      if (setting === false) {
        throw new SyntaxError('An invalid or illegal string was specified.');
      } else if (typeof setting === 'string') {
        this._vertical = setting;
        this.resetCue();
      }
    }
  }, {
    key: "snapToLines",
    get: function () {
      return this._snapToLines;
    },
    set: function (value) {
      this._snapToLines = value;
      this.resetCue();
    }
  }, {
    key: "line",
    get: function () {
      return this._line;
    },
    set: function (value) {
      if (typeof value !== 'number' && value !== autoKeyword) {
        throw new SyntaxError('An invalid number or illegal string was specified.');
      }

      this._line = value;
      this.resetCue();
    }
  }, {
    key: "lineAlign",
    get: function () {
      return this._lineAlign;
    },
    set: function (value) {
      const setting = findAlignSetting(value);

      if (!setting) {
        throw new SyntaxError('An invalid or illegal string was specified.');
      } else if (typeof setting === 'string') {
        this._lineAlign = setting;
        this.resetCue();
      }
    }
  }, {
    key: "position",
    get: function () {
      return this._position;
    },
    set: function (value) {
      if (value < 0 || value > 100) {
        throw new Error('Position must be between 0 and 100.');
      }

      this._position = value;
      this.resetCue();
    }
  }, {
    key: "positionAlign",
    get: function () {
      return this._positionAlign;
    },
    set: function (value) {
      const setting = findAlignSetting(value);

      if (!setting) {
        throw new SyntaxError('An invalid or illegal string was specified.');
      } else if (typeof setting === 'string') {
        this._positionAlign = setting;
        this.resetCue();
      }
    }
  }, {
    key: "size",
    get: function () {
      return this._size;
    },
    set: function (value) {
      if (value < 0 || value > 100) {
        throw new Error('Size must be between 0 and 100.');
      }

      this._size = value;
      this.resetCue();
    }
  }, {
    key: "align",
    get: function () {
      return this._align;
    },
    set: function (value) {
      const setting = findAlignSetting(value);

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

let Cue;

if (typeof window !== 'undefined' && window.VTTCue) {
  Cue = window.VTTCue;
} else {
  Cue = vtt_cue_VTTCue;
}


// CONCATENATED MODULE: ./track/track-type.js
const TrackType = Object.freeze({
  VIDEO: 'video',
  AUDIO: 'audio',
  TEXT: 'text'
});

// CONCATENATED MODULE: ./engines/stream-type.js
const StreamType = {
  DASH: 'dash',
  HLS: 'hls',
  PROGRESSIVE: 'progressive'
};

// CONCATENATED MODULE: ./engines/engine-type.js
const EngineType = {
  HTML5: 'html5',
  FLASH: 'flash',
  SILVERLIGHT: 'silverlight',
  CAST: 'cast'
};

// CONCATENATED MODULE: ./media-type.js
const MediaType = {
  VOD: 'Vod',
  LIVE: 'Live',
  AUDIO: 'Audio',
  UNKNOWN: 'Unknown'
};

// CONCATENATED MODULE: ./track/abr-mode-type.js
const AbrMode = {
  MANUAL: 'manual',
  AUTO: 'auto'
};

// CONCATENATED MODULE: ./engines/html5/cors-types.js
const CorsType = {
  ANONYMOUS: 'anonymous',
  USE_CREDENTIALS: 'use-credentials'
};

// CONCATENATED MODULE: ./middleware/middleware.js



/**
 * Generic middleware implementation.
 */

let middleware_Middleware = /*#__PURE__*/function () {
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
    this._middlewares = new multi_map();
    this._logger = utils_logger('Middleware');
  }
  /**
   * Registers a middleware instance to the middleware chain.
   * @param {BaseMiddleware} middlewareInstance - The middleware instance.
   * @public
   * @returns {void}
   */


  var _proto = Middleware.prototype;

  _proto.use = function use(middlewareInstance) {
    for (let action in this._actions) {
      let apiAction = this._actions[action]; // $FlowFixMe

      if (typeof middlewareInstance[apiAction] === 'function') {
        this._logger.debug(`Register <${middlewareInstance.id}> for action ${apiAction}`); // $FlowFixMe


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
  ;

  _proto.run = function run(action, callback) {
    this._logger.debug('Start middleware chain for action ' + action);

    let middlewares = this._middlewares.get(action);

    this._executeMiddleware(middlewares, () => {
      this._logger.debug('Finish middleware chain for action ' + action);

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
  ;

  _proto._executeMiddleware = function _executeMiddleware(middlewares, callback) {
    const composition = middlewares.reduceRight( // eslint-disable-next-line no-unused-vars
    (next, fn) => v => {
      fn(next);
    }, callback);
    composition();
  };

  return Middleware;
}();


// CONCATENATED MODULE: ./middleware/playback-middleware.js
function playback_middleware_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * The playback middleware.
 */

let playback_middleware_PlaybackMiddleware = /*#__PURE__*/function () {
  /**
   * The actions of the playback middleware.
   * @static
   */

  /**
   * @constructor
   */
  function PlaybackMiddleware() {
    this._middleware = new middleware_Middleware(PlaybackMiddleware.Actions);
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
  };

  return PlaybackMiddleware;
}();

playback_middleware_defineProperty(playback_middleware_PlaybackMiddleware, "Actions", {
  LOAD: 'load',
  PLAY: 'play',
  PAUSE: 'pause'
});


// CONCATENATED MODULE: ./player-config.js
const DefaultConfig = {
  log: {
    level: 'ERROR'
  },
  sources: {
    options: {
      forceRedirectExternalStreams: false
    },
    metadata: {}
  },
  plugins: {},
  playback: {
    audioLanguage: '',
    textLanguage: '',
    useNativeTextTrack: false,
    enableCEA708Captions: false,
    captionsTextTrack1Label: 'English',
    captionsTextTrack1LanguageCode: 'en',
    captionsTextTrack2Label: 'Spanish',
    captionsTextTrack2LanguageCode: 'es',
    volume: 1,
    startTime: -1,
    playsinline: true,
    preload: 'none',
    autoplay: false,
    loop: false,
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
  abr: {
    enabled: true,
    fpsDroppedFramesInterval: 5000,
    fpsDroppedMonitoringThreshold: 0.2,
    capLevelOnFPSDrop: true,
    capLevelToPlayerSize: false,
    defaultBandwidthEstimate: 500e3,
    restrictions: {
      minBitrate: 0,
      maxBitrate: Infinity
    }
  },
  drm: {
    keySystem: ''
  },
  network: {},
  advertising: {
    adBreaks: []
  }
};

// EXTERNAL MODULE: ./assets/style.css
var assets_style = __webpack_require__(4);

// CONCATENATED MODULE: ./request-type.js
const RequestType = {
  MANIFEST: 0,
  SEGMENT: 1,
  LICENSE: 2
};

// CONCATENATED MODULE: ./engines/html5/media-source/base-media-source-adapter.js
function base_media_source_adapter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function base_media_source_adapter_createClass(Constructor, protoProps, staticProps) { if (protoProps) base_media_source_adapter_defineProperties(Constructor.prototype, protoProps); if (staticProps) base_media_source_adapter_defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function base_media_source_adapter_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function base_media_source_adapter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-unused-vars */











let base_media_source_adapter_BaseMediaSourceAdapter = /*#__PURE__*/function (_FakeEventTarget) {
  base_media_source_adapter_inheritsLoose(BaseMediaSourceAdapter, _FakeEventTarget);

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
    const mediaSource = window.MediaSource || window.WebKitMediaSource; // isTypeSupported isn't exist or not a function for old MSE implementation

    return !!mediaSource && typeof mediaSource.isTypeSupported === 'function';
  }
  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to media source adapter.
   * @param {PKMediaSourceObject} source - The source object.
   * @param {Object} config - The media source adapter configuration.
   */
  ;

  function BaseMediaSourceAdapter(videoElement, source, config = {}) {
    var _this;

    _this = _FakeEventTarget.call(this) || this;

    base_media_source_adapter_defineProperty(_assertThisInitialized(_this), "_capabilities", {
      fpsControl: false
    });

    _this._videoElement = videoElement;
    _this._sourceObj = source;
    _this._config = config;
    _this._eventManager = new event_manager();

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
    if (track instanceof video_track) {
      this._trigger(CustomEventType.VIDEO_TRACK_CHANGED, {
        selectedVideoTrack: track
      });
    } else if (track instanceof audio_track) {
      this._trigger(CustomEventType.AUDIO_TRACK_CHANGED, {
        selectedAudioTrack: track
      });
    } else if (track instanceof text_track) {
      this._trigger(CustomEventType.TEXT_TRACK_CHANGED, {
        selectedTextTrack: track
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
    this.dispatchEvent(new fake_event(name, payload));
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

  _proto.hideTextTrack = function hideTextTrack() {
    BaseMediaSourceAdapter._throwNotImplementedError('hideTextTrack');
  };

  _proto.enableAdaptiveBitrate = function enableAdaptiveBitrate() {
    BaseMediaSourceAdapter._throwNotImplementedError('enableAdaptiveBitrate');
  };

  _proto.isAdaptiveBitrateEnabled = function isAdaptiveBitrateEnabled() {
    return BaseMediaSourceAdapter._throwNotImplementedError('isAdaptiveBitrateEnabled');
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
    this._videoElement.addEventListener(Html5EventType.DURATION_CHANGE, () => {
      if (this.isLive() && this._videoElement.paused) {
        this._trigger(Html5EventType.TIME_UPDATE);
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
  }
  /**
   * throw a run time error
   * @param {string} name of the unimplemented function
   * @returns {any} void/string/boolean
   */
  ;

  BaseMediaSourceAdapter._throwNotImplementedError = function _throwNotImplementedError(name) {
    throw new error_Error(error_Error.Severity.CRITICAL, error_Error.Category.PLAYER, error_Error.Code.RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED, name);
  }
  /**
   * Get the current time in seconds.
   * @returns {Number} - The current playback time.
   * @public
   */
  ;

  base_media_source_adapter_createClass(BaseMediaSourceAdapter, [{
    key: "currentTime",
    get: function () {
      if (this.isLive()) {
        return this._videoElement.currentTime - this.getStartTimeOfDvrWindow();
      } else {
        return this._videoElement.currentTime;
      }
    }
    /**
     * Set the current time in seconds.
     * @param {Number} to - The number to set in seconds.
     * @public
     * @returns {void}
     */
    ,
    set: function (to) {
      if (this.isLive()) {
        to += this.getStartTimeOfDvrWindow();
      }

      this._videoElement.currentTime = to;
    }
    /**
     * Get the duration in seconds.
     * @returns {Number} - The playback duration.
     * @public
     */

  }, {
    key: "duration",
    get: function () {
      if (this.isLive()) {
        return this._getLiveEdge() - this.getStartTimeOfDvrWindow();
      } else {
        return this._videoElement.duration;
      }
    }
    /**
     * Getter for the src that the adapter plays on the video element.
     * In case the adapter preformed a load it will return the manifest url.
     * @public
     * @returns {string} - The src url.
     */

  }, {
    key: "src",
    get: function () {
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
    set: function (source) {
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
    get: function () {
      return this._capabilities;
    }
  }, {
    key: "targetBuffer",
    get: function () {
      return NaN;
    }
  }]);

  return BaseMediaSourceAdapter;
}(fake_event_target);

base_media_source_adapter_defineProperty(base_media_source_adapter_BaseMediaSourceAdapter, "getLogger", utils_logger);


// CONCATENATED MODULE: ./utils/resolution.js
/**
 * Calculates the most suitable source to the container size
 * @function getSuitableSourceForResolution
 * @param {Array<Object>} tracks - The tracks
 * @param {number} width - The width to calculate with
 * @param {number} height - The height to calculate with
 * @returns {Object} - The most suitable source to the container size
 */
function getSuitableSourceForResolution(tracks, width, height) {
  let mostSuitableWidth = null;

  if (height && tracks) {
    let mostSuitableWidthTracks = [];
    let minWidthDiff = Infinity;

    for (let track of tracks) {
      // first filter the most width suitable
      let widthDiff = Math.abs(track.width - width);

      if (widthDiff < minWidthDiff) {
        minWidthDiff = widthDiff;
        mostSuitableWidthTracks = [track];
      } else if (widthDiff === minWidthDiff) {
        mostSuitableWidthTracks.push(track);
      }
    }

    let videoRatio = width / height;
    let mostSuitableWidthAndRatioTracks = mostSuitableWidthTracks;
    let minRatioDiff = Infinity;

    for (let track of mostSuitableWidthTracks) {
      // filter the most ratio suitable from the width filter results
      if (track.height) {
        let ratioDiff = Math.abs(track.width / track.height - videoRatio);

        if (ratioDiff < minRatioDiff) {
          minRatioDiff = ratioDiff;
          mostSuitableWidthAndRatioTracks = [track];
        } else if (ratioDiff === minRatioDiff) {
          mostSuitableWidthAndRatioTracks.push(track);
        }
      }
    }

    let maxBandwidth = 0;

    for (let track of mostSuitableWidthAndRatioTracks) {
      // select the top bitrate from the ratio filter results
      if (track.bandwidth > maxBandwidth || !track.bandwidth) {
        maxBandwidth = track.bandwidth || maxBandwidth;
        mostSuitableWidth = track;
      }
    }
  }

  return mostSuitableWidth;
}


// CONCATENATED MODULE: ./drm/drm-scheme.js
const DrmScheme = {
  WIDEVINE: 'com.widevine.alpha',
  PLAYREADY: 'com.microsoft.playready',
  FAIRPLAY: 'com.apple.fairplay'
};
// CONCATENATED MODULE: ./drm/fairplay.js




const _logger = utils_logger('FairPlay');

const fairplay_FairPlay = /*#__PURE__*/function () {
  function FairPlay() {}

  /**
   * FairPlay is the configure key system.
   * @param {Array<Object>} drmData - The drm data.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @return {boolean} - Whether FairPlay is the configure key system.
   */
  FairPlay.isConfigured = function isConfigured(drmData, drmConfig) {
    return DrmScheme.FAIRPLAY === drmConfig.keySystem && !!drmData.find(drmEntry => drmEntry.scheme === drmConfig.keySystem);
  }
  /**
   * FairPlay playback supports in case 2 conditions are met:
   * 1. The environment supports FairPlay playback.
   * 2. The drm data of the source object contains entry with FairPlay scheme.
   * @param {Array<Object>} drmData - The drm data to check.
   * @return {boolean} - Whether FairPlay can be play on the current environment.
   */
  ;

  FairPlay.canPlayDrm = function canPlayDrm(drmData) {
    _logger.debug('Can play DRM scheme of: ' + DrmScheme.FAIRPLAY);

    const isSafari = env.browser.name && env.browser.name.includes('Safari');
    return !!drmData.find(drmEntry => drmEntry.scheme === DrmScheme.FAIRPLAY) && isSafari;
  }
  /**
   * Sets the FairPlay playback.
   * @param {FairPlayDrmConfigType} config - The config to manipulate.
   * @param {Array<Object>} drmData - The drm data.
   * @returns {void}
   */
  ;

  FairPlay.setDrmPlayback = function setDrmPlayback(config, drmData) {
    _logger.debug('Sets drm playback');

    let drmEntry = drmData.find(drmEntry => drmEntry.scheme === DrmScheme.FAIRPLAY);

    if (drmEntry) {
      config.licenseUrl = drmEntry.licenseUrl;
      config.certificate = drmEntry.certificate;
    }
  };

  return FairPlay;
}();

/* harmony default export */ var fairplay = (fairplay_FairPlay);
// EXTERNAL MODULE: ./engines/html5/media-source/adapters/native-adapter-default-config.json
var native_adapter_default_config = __webpack_require__(2);

// CONCATENATED MODULE: ./engines/html5/media-source/adapters/fairplay-drm-handler.js
function fairplay_drm_handler_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const KeySystem = 'com.apple.fps.1_0';
const WebkitEvents = {
  NEED_KEY: 'webkitneedkey',
  KEY_MESSAGE: 'webkitkeymessage',
  KEY_ADDED: 'webkitkeyadded',
  KEY_ERROR: 'webkitkeyerror'
};

let fairplay_drm_handler_FairPlayDrmHandler = /*#__PURE__*/function () {
  /**
   * Fairplay DRM handler
   * @param {HTMLVideoElement} videoElement - the video element
   * @param {FairPlayDrmConfigType} config - config object
   * @param {Function} errorCallback - error callback function
   * @param {Function} drmResponseCallback - drm license response callback function
   */
  function FairPlayDrmHandler(videoElement, config, errorCallback, drmResponseCallback) {
    fairplay_drm_handler_defineProperty(this, "_logger", utils_logger('FairPlayDrmHandler'));

    fairplay_drm_handler_defineProperty(this, "_retryLicenseRequest", 4);

    fairplay_drm_handler_defineProperty(this, "_defaultConfig", {
      licenseUrl: '',
      certificate: '',
      network: {
        responseFilter: (type, response) => {
          let responseObj = {};

          try {
            const dataView = new DataView(response.data);
            const decoder = new TextDecoder();
            const keyText = decoder.decode(dataView).trim();
            responseObj = JSON.parse(keyText);
          } catch (error) {
            this._onError(error_Error.Code.BAD_FAIRPLAY_RESPONSE, {
              error,
              responseText: response.data
            });

            return;
          }

          let isValidResponse = FairPlayDrmHandler._validateResponse(responseObj);

          if (isValidResponse.valid) {
            response.data = FairPlayDrmHandler._base64DecodeUint8Array(responseObj.ckc);
          } else {
            this._onError(error_Error.Code.BAD_FAIRPLAY_RESPONSE, isValidResponse);
          }
        }
      }
    });

    this._config = _Object.mergeDeep({}, this._defaultConfig, config);
    this._errorCallback = errorCallback;
    this._drmResponseCallback = drmResponseCallback;
    this._videoElement = videoElement;

    this._onWebkitNeedKeyHandler = e => this._onWebkitNeedKey(e);

    this._videoElement.addEventListener(WebkitEvents.NEED_KEY, this._onWebkitNeedKeyHandler, false);
  }

  var _proto = FairPlayDrmHandler.prototype;

  _proto._onWebkitNeedKey = function _onWebkitNeedKey(event) {
    this._logger.debug('Webkit need key triggered');

    let videoElement = event.target;
    let initData = event.initData;

    let contentId = FairPlayDrmHandler._extractContentId(initData);

    let fpsCertificate = FairPlayDrmHandler._base64DecodeUint8Array(this._config.certificate);

    initData = FairPlayDrmHandler._concatInitDataIdAndCertificate(initData, contentId, fpsCertificate);

    if (!videoElement.webkitKeys) {
      let keySystem = this._selectKeySystem();

      this._logger.debug('Sets media keys');

      videoElement.webkitSetMediaKeys(new window.WebKitMediaKeys(keySystem));
    }

    if (!videoElement.webkitKeys) {
      this._onError(error_Error.Code.COULD_NOT_CREATE_MEDIA_KEYS);
    }

    this._logger.debug('Creates session');

    this._keySession = videoElement.webkitKeys.createSession('video/mp4', initData);

    if (!this._keySession) {
      this._onError(error_Error.Code.COULD_NOT_CREATE_KEY_SESSION);
    }

    this._keySession.contentId = contentId;

    this._keySession.addEventListener(WebkitEvents.KEY_MESSAGE, e => this._onWebkitKeyMessage(e), false);

    this._keySession.addEventListener(WebkitEvents.KEY_ADDED, () => this._onWebkitKeyAdded(), false);

    this._keySession.addEventListener(WebkitEvents.KEY_ERROR, e => this._onWebkitKeyError(e), false);
  };

  _proto.destroy = function destroy() {
    this._videoElement.removeEventListener(WebkitEvents.NEED_KEY, this._onWebkitNeedKeyHandler);

    this._keySession.close();

    this._keySession = null;
  };

  _proto._onWebkitKeyMessage = function _onWebkitKeyMessage(event) {
    this._logger.debug('Webkit key message triggered');

    let message = event.message;
    let request = new XMLHttpRequest();
    request.responseType = 'arraybuffer';
    request.addEventListener('load', e => this._licenseRequestLoaded(e), false);
    const pkRequest = {
      url: this._config.licenseUrl,
      body: FairPlayDrmHandler._base64EncodeUint8Array(message),
      headers: {}
    };
    let requestFilterPromise;
    const requestFilter = this._config.network.requestFilter;

    if (requestFilter) {
      this._logger.debug('Apply request filter');

      try {
        requestFilterPromise = requestFilter(RequestType.LICENSE, pkRequest);
      } catch (error) {
        requestFilterPromise = Promise.reject(error);
      }
    }

    requestFilterPromise = requestFilterPromise || Promise.resolve(pkRequest);
    requestFilterPromise.then(updatedRequest => {
      request.open('POST', updatedRequest.url, true);
      let setContentType = true;

      if (updatedRequest.headers) {
        Object.entries(updatedRequest.headers).forEach(([header, value]) => {
          typeof value === 'string' && request.setRequestHeader(header, value);
          setContentType && (setContentType = header.toLowerCase() !== 'content-type');
        });
      }

      setContentType && request.setRequestHeader('Content-type', 'application/json');

      this._logger.debug('Ready for license request');

      request.onerror = () => {
        this._onError(error_Error.Code.LICENSE_REQUEST_FAILED, {
          status: request.status,
          responseText: request.responseText
        });
      };

      this._licenseRequestTime = Date.now();
      request.send(updatedRequest.body);
    }).catch(error => {
      this._errorCallback(new error_Error(error_Error.Severity.CRITICAL, error_Error.Category.NETWORK, error_Error.Code.REQUEST_FILTER_ERROR, error));

      this.destroy();
    });
  };

  _proto._onWebkitKeyAdded = function _onWebkitKeyAdded() {
    this._logger.debug('Decryption key was added to session');
  };

  _proto._onWebkitKeyError = function _onWebkitKeyError(e) {
    this._logger.error('A decryption key error was encountered', e);

    if (this._retryLicenseRequest <= 0) {
      this._onError(error_Error.Code.LICENSE_REQUEST_FAILED, e.target.error);
    }

    this._retryLicenseRequest--;
  };

  _proto._licenseRequestLoaded = function _licenseRequestLoaded(event) {
    this._logger.debug('License request loaded');

    let request = event.target;

    if (request.status > 299) {
      this._onError(error_Error.Code.LICENSE_REQUEST_FAILED, {
        status: request.status,
        error: request.responseText
      });

      return;
    }

    if (this._drmResponseCallback) {
      const licenseTime = Date.now() - this._licenseRequestTime;

      this._drmResponseCallback({
        licenseTime: licenseTime / 1000,
        scheme: DrmScheme.FAIRPLAY
      });
    }

    const response = {
      data: request.response
    };

    this._logger.debug('Apply response filter');

    let responseFilterPromise;

    try {
      responseFilterPromise = this._config.network.responseFilter(RequestType.LICENSE, response);
    } catch (error) {
      responseFilterPromise = Promise.reject(error);
    }

    responseFilterPromise = responseFilterPromise || Promise.resolve(response);
    responseFilterPromise.then(updatedResponse => {
      this._keySession.update(updatedResponse.data);
    }).catch(error => {
      this._errorCallback(new error_Error(error_Error.Severity.CRITICAL, error_Error.Category.NETWORK, error_Error.Code.RESPONSE_FILTER_ERROR, error));

      this.destroy();
    });
  };

  _proto._onError = function _onError(code, data) {
    this._errorCallback(new error_Error(error_Error.Severity.CRITICAL, error_Error.Category.DRM, code, data));
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
    let keySystem = null;

    if (window.WebKitMediaKeys.isTypeSupported(KeySystem, 'video/mp4')) {
      keySystem = KeySystem;
    } else {
      this._logger.warn('Key System not supported');
    }

    return keySystem;
  };

  FairPlayDrmHandler._extractContentId = function _extractContentId(initData) {
    let link = document.createElement('a');
    link.href = FairPlayDrmHandler._arrayToString(initData);
    return link.hostname;
  };

  FairPlayDrmHandler._arrayToString = function _arrayToString(array) {
    return String.fromCharCode.apply(null, new Uint16Array(array.buffer));
  };

  FairPlayDrmHandler._base64DecodeUint8Array = function _base64DecodeUint8Array(input) {
    let raw = window.atob(input);
    let rawLength = raw.length;
    let array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }

    return array;
  };

  FairPlayDrmHandler._concatInitDataIdAndCertificate = function _concatInitDataIdAndCertificate(initData, id, cert) {
    if (typeof id === 'string') {
      id = FairPlayDrmHandler._stringToArray(id);
    }

    let offset = 0;
    let buffer = new ArrayBuffer(initData.byteLength + 4 + id.byteLength + 4 + cert.byteLength);
    let dataView = new DataView(buffer);
    let initDataArray = new Uint8Array(buffer, offset, initData.byteLength);
    initDataArray.set(initData);
    offset += initData.byteLength;
    dataView.setUint32(offset, id.byteLength, true);
    offset += 4;
    let idArray = new Uint8Array(buffer, offset, id.byteLength);
    idArray.set(id);
    offset += idArray.byteLength;
    dataView.setUint32(offset, cert.byteLength, true);
    offset += 4;
    let certArray = new Uint8Array(buffer, offset, cert.byteLength);
    certArray.set(cert);
    return new Uint8Array(buffer, 0, buffer.byteLength);
  };

  FairPlayDrmHandler._stringToArray = function _stringToArray(string) {
    let buffer = new ArrayBuffer(string.length * 2);
    let array = new Uint16Array(buffer);

    for (let i = 0, strLen = string.length; i < strLen; i++) {
      array[i] = string.charCodeAt(i);
    }

    return array;
  };

  FairPlayDrmHandler._base64EncodeUint8Array = function _base64EncodeUint8Array(input) {
    let keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let output = '';
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;

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

fairplay_drm_handler_defineProperty(fairplay_drm_handler_FairPlayDrmHandler, "WebkitEvents", WebkitEvents);

fairplay_drm_handler_FairPlayDrmHandler.WebkitEvents = WebkitEvents;

// CONCATENATED MODULE: ./engines/html5/media-source/adapters/native-adapter.js
function native_adapter_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function native_adapter_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function native_adapter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const BACK_TO_FOCUS_TIMEOUT = 1000;
const MAX_MEDIA_RECOVERY_ATTEMPTS = 3;
/**
 * An illustration of media source extension for progressive download
 * @classdesc
 * @implements {IMediaSourceAdapter}
 */

let native_adapter_NativeAdapter = /*#__PURE__*/function (_BaseMediaSourceAdapt) {
  native_adapter_inheritsLoose(NativeAdapter, _BaseMediaSourceAdapt);

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
   * Checks if NativeAdapter can play a given mime type.
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @returns {boolean} - Whether the native adapter can play a specific mime type
   * @static
   */
  NativeAdapter.canPlayType = function canPlayType(mimeType) {
    let canPlayType = false;

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
    for (let drmProtocol of NativeAdapter._drmProtocols) {
      if (drmProtocol.isConfigured(drmData, drmConfig)) {
        NativeAdapter._drmProtocol = drmProtocol;
        break;
      }
    }

    if (!NativeAdapter._drmProtocol) {
      for (let drmProtocol of NativeAdapter._drmProtocols) {
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
    const adapterConfig = {
      displayTextTrack: false,
      progressiveSources: []
    };

    if (_Object.hasPropertyPath(config, 'playback.useNativeTextTrack')) {
      adapterConfig.displayTextTrack = _Object.getPropertyPath(config, 'playback.useNativeTextTrack');
    }

    if (_Object.hasPropertyPath(config, 'sources.progressive')) {
      adapterConfig.progressiveSources = _Object.getPropertyPath(config, 'sources.progressive');
    }

    if (config.playback) {
      adapterConfig.enableCEA708Captions = config.playback.enableCEA708Captions;
      adapterConfig.captionsTextTrack1Label = config.playback.captionsTextTrack1Label;
      adapterConfig.captionsTextTrack1LanguageCode = config.playback.captionsTextTrack1LanguageCode;
      adapterConfig.captionsTextTrack2Label = config.playback.captionsTextTrack2Label;
      adapterConfig.captionsTextTrack2LanguageCode = config.playback.captionsTextTrack2LanguageCode;

      if (_Object.hasPropertyPath(config.playback, 'options.html5.native')) {
        _Object.mergeDeep(adapterConfig, config.playback.options.html5.native);
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

    native_adapter_defineProperty(native_adapter_assertThisInitialized(_this), "_lastTimeUpdate", 0);

    native_adapter_defineProperty(native_adapter_assertThisInitialized(_this), "_waitingEventTriggered", false);

    native_adapter_defineProperty(native_adapter_assertThisInitialized(_this), "_mediaErrorRecoveryAttempts", 0);

    native_adapter_defineProperty(native_adapter_assertThisInitialized(_this), "_lastTimeDetach", NaN);

    native_adapter_defineProperty(native_adapter_assertThisInitialized(_this), "_startTimeAttach", NaN);

    _this._config = _Object.mergeDeep({}, native_adapter_default_config, _this._config);
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
    this._trigger(Html5EventType.ERROR, error);
  }
  /**
   * dispatches the license response time after received
   * @private
   * @param {number} data - an object containing data regarding the license load
   * @returns {void}
   */
  ;

  _proto._dispatchDRMLicenseLoaded = function _dispatchDRMLicenseLoaded(data) {
    this._trigger(CustomEventType.DRM_LICENSE_LOADED, data);
  }
  /**
   * Sets the DRM playback in case such needed.
   * @private
   * @returns {void}
   */
  ;

  _proto._maybeSetDrmPlayback = function _maybeSetDrmPlayback() {
    if (NativeAdapter._drmProtocol && this._sourceObj && this._sourceObj.drmData) {
      const drmConfig = {
        licenseUrl: '',
        certificate: '',
        network: this._config.network
      };

      NativeAdapter._drmProtocol.setDrmPlayback(drmConfig, this._sourceObj.drmData);

      this._drmHandler = new fairplay_drm_handler_FairPlayDrmHandler(this._videoElement, drmConfig, error => this._dispatchErrorCallback(error), data => this._dispatchDRMLicenseLoaded(data));
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
    let suitableTrack = getSuitableSourceForResolution(this._progressiveSources, this._videoElement.offsetWidth, this._videoElement.offsetHeight);

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
    return this._sourceObj ? this._sourceObj.mimetype === 'video/mp4' : false;
  }
  /**
   * Load the video source
   * @param {number} startTime - Optional time to start the video from.
   * @function load
   * @returns {Promise<Object>} - The loaded data
   */
  ;

  _proto.load = function load(startTime) {
    this._maybeSetDrmPlayback();

    if (!this._loadPromise) {
      this._loadPromise = new Promise((resolve, reject) => {
        this._lastTimeUpdate = startTime || 0;
        const playbackStartTime = this._startTimeAttach || startTime || 0;
        this._loadPromiseReject = reject;

        this._eventManager.listenOnce(this._videoElement, Html5EventType.LOADED_DATA, () => this._onLoadedData(resolve, playbackStartTime));

        this._eventManager.listen(this._videoElement, Html5EventType.TIME_UPDATE, () => this._onTimeUpdate());

        this._eventManager.listen(this._videoElement, Html5EventType.PLAY, () => this._resetHeartbeatTimeout());

        this._eventManager.listen(this._videoElement, Html5EventType.PAUSE, () => this._clearHeartbeatTimeout());

        this._eventManager.listen(this._videoElement, Html5EventType.ENDED, () => this._clearHeartbeatTimeout());

        this._eventManager.listen(this._videoElement, Html5EventType.ABORT, () => this._clearHeartbeatTimeout());

        this._eventManager.listen(this._videoElement, Html5EventType.SEEKED, () => this._syncCurrentTime()); // Sometimes when playing live in safari and switching between tabs the currentTime goes back with no seek events


        this._eventManager.listen(window, 'focus', () => setTimeout(() => this._syncCurrentTime(), BACK_TO_FOCUS_TIMEOUT));

        if (this._isProgressivePlayback()) {
          this._setProgressiveSource();
        }

        if (this._sourceObj && this._sourceObj.url) {
          this._setSrc().then(() => {
            this._trigger(CustomEventType.ABR_MODE_CHANGED, {
              mode: this._isProgressivePlayback() ? 'manual' : 'auto'
            });

            this._videoElement.load();
          });
        } else {
          this._videoElement.load();
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
    NativeAdapter._logger.debug('handleDecodeError', error);

    const prevCurrTime = this._videoElement.currentTime;

    const prevActiveAudioTrack = this._getActivePKAudioTrack();

    const prevActiveTextTrack = this._getActivePKTextTrack();

    this._videoElement.load();

    this._eventManager.listenOnce(this._videoElement, Html5EventType.PLAYING, () => {
      this._mediaErrorRecoveryAttempts = 0;
    });

    this._eventManager.listenOnce(this._videoElement, Html5EventType.CAN_PLAY, () => {
      this._videoElement.currentTime = prevCurrTime;

      this._videoElement.play();

      this._videoElement.pause();

      if (prevActiveAudioTrack) {
        this.selectAudioTrack(prevActiveAudioTrack);
      }

      if (prevActiveTextTrack) {
        this.selectTextTrack(prevActiveTextTrack);
      } else {
        this._disableTextTracks();
      }
    });
  };

  _proto.handleMediaError = function handleMediaError(error) {
    if (this._loadPromiseReject) {
      this._loadPromiseReject(new error_Error(error_Error.Severity.CRITICAL, error_Error.Category.MEDIA, error_Error.Code.NATIVE_ADAPTER_LOAD_FAILED, error));

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
    this._lastTimeDetach = this.currentTime;

    if (this._videoElement && this._videoElement.src) {
      _Dom.setAttribute(this._videoElement, 'src', '');
      _Dom.removeAttribute(this._videoElement, 'src');
    }

    this._loadPromise = null;
  };

  _proto._setSrc = function _setSrc() {
    const pkRequest = {
      url: this._sourceObj ? this._sourceObj.url : '',
      body: null,
      headers: {}
    };
    let requestFilterPromise;

    if (typeof _Object.getPropertyPath(this._config, 'network.requestFilter') === 'function') {
      try {
        NativeAdapter._logger.debug('Apply request filter');

        requestFilterPromise = this._config.network.requestFilter(RequestType.MANIFEST, pkRequest);
      } catch (error) {
        requestFilterPromise = Promise.reject(error);
      }
    }

    requestFilterPromise = requestFilterPromise || Promise.resolve(pkRequest);
    requestFilterPromise.then(updatedRequest => {
      this._videoElement.src = updatedRequest.url;
    }).catch(error => {
      this._trigger(Html5EventType.ERROR, new error_Error(error_Error.Severity.CRITICAL, error_Error.Category.NETWORK, error_Error.Code.REQUEST_FILTER_ERROR, error));
    });
    return requestFilterPromise;
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
    const parseTracksAndResolve = () => {
      this._playerTracks = this._getParsedTracks();

      this._addNativeAudioTrackChangeListener();

      this._addNativeTextTrackChangeListener();

      this._addNativeTextTrackAddedListener();

      NativeAdapter._logger.debug('The source has been loaded successfully');

      this._loadPromiseReject = null;
      resolve({
        tracks: this._playerTracks
      });

      if (this.isLive()) {
        this._handleLiveDurationChange();
      }
    };

    if (startTime && startTime > -1) {
      this._videoElement.currentTime = startTime;
    }

    if (this._videoElement.textTracks.length > 0) {
      parseTracksAndResolve();
    } else {
      this._eventManager.listenOnce(this._videoElement, Html5EventType.CAN_PLAY, parseTracksAndResolve.bind(this));
    }

    this._startTimeAttach = NaN;
  };

  _proto._onTimeUpdate = function _onTimeUpdate() {
    if (!this._videoElement.paused) {
      if (this._videoElement.currentTime > this._lastTimeUpdate) {
        if (this._waitingEventTriggered) {
          this._waitingEventTriggered = false;

          this._trigger(Html5EventType.PLAYING);
        }

        this._resetHeartbeatTimeout();
      } else if (this._videoElement.currentTime < this._lastTimeUpdate) {
        this._syncCurrentTime();
      } else {
        this._waitingEventTriggered = true;

        this._trigger(Html5EventType.WAITING);
      }
    }
  };

  _proto._syncCurrentTime = function _syncCurrentTime() {
    this._lastTimeUpdate = this._videoElement.currentTime;
  };

  _proto._resetHeartbeatTimeout = function _resetHeartbeatTimeout() {
    this._lastTimeUpdate = this._videoElement.currentTime;

    this._clearHeartbeatTimeout();

    const onTimeout = () => {
      this._clearHeartbeatTimeout();

      this._trigger(Html5EventType.ERROR, new error_Error(error_Error.Severity.CRITICAL, error_Error.Category.NETWORK, error_Error.Code.TIMEOUT, `The player exceeded max buffer time of ${this._config.heartbeatTimeout} ms. No progress has been done during this time.`));
    };

    this._heartbeatTimeoutId = setTimeout(onTimeout, this._config.heartbeatTimeout);
  };

  _proto._clearHeartbeatTimeout = function _clearHeartbeatTimeout() {
    if (this._heartbeatTimeoutId) {
      clearTimeout(this._heartbeatTimeoutId);
      this._heartbeatTimeoutId = null;
    }
  }
  /**
   * Destroys the native adapter.
   * @function destroy
   * @returns {Promise<*>} - The destroy promise.
   */
  ;

  _proto.destroy = function destroy() {
    NativeAdapter._logger.debug('destroy');

    return _BaseMediaSourceAdapt.prototype.destroy.call(this).then(() => {
      this._drmHandler && this._drmHandler.destroy();
      this._waitingEventTriggered = false;
      this._progressiveSources = [];
      this._loadPromise = null;
      this._loadPromiseReject = null;
      this._liveEdge = 0;
      this._lastTimeUpdate = 0;
      this._lastTimeDetach = NaN;
      this._startTimeAttach = NaN;

      this._clearHeartbeatTimeout();

      if (this._liveDurationChangeInterval) {
        clearInterval(this._liveDurationChangeInterval);
        this._liveDurationChangeInterval = null;
      }
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
    const videoTracks = this._getParsedVideoTracks();

    const audioTracks = this._getParsedAudioTracks();

    const textTracks = this._getParsedTextTracks();

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
    const videoTracks = this._progressiveSources;
    const parsedTracks = [];

    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
        const settings = {
          id: videoTracks[i].id,
          bandwidth: videoTracks[i].bandwidth,
          width: videoTracks[i].width,
          height: videoTracks[i].height,
          active: this._sourceObj ? videoTracks[i].id === this._sourceObj.id : false,
          index: i
        };
        parsedTracks.push(new video_track(settings));
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
    const videoTracks = this._videoElement.videoTracks;
    const parsedTracks = [];

    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
        const settings = {
          //TODO calculate width/height/bandwidth
          id: videoTracks[i].id,
          active: videoTracks[i].selected,
          label: videoTracks[i].label,
          language: videoTracks[i].language,
          index: i
        };
        parsedTracks.push(new video_track(settings));
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
    const audioTracks = this._videoElement.audioTracks;
    const parsedTracks = [];

    if (audioTracks) {
      for (let i = 0; i < audioTracks.length; i++) {
        const settings = {
          id: audioTracks[i].id,
          active: audioTracks[i].enabled,
          label: audioTracks[i].label,
          language: audioTracks[i].language,
          index: i
        };
        parsedTracks.push(new audio_track(settings));
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
    const captionsTextTrackLabels = [this._config.captionsTextTrack1Label, this._config.captionsTextTrack2Label];
    const captionsTextTrackLanguageCodes = [this._config.captionsTextTrack1LanguageCode, this._config.captionsTextTrack2LanguageCode];
    const textTracks = this._videoElement.textTracks;
    const parsedTracks = [];

    if (textTracks) {
      for (let i = 0; i < textTracks.length; i++) {
        const settings = {
          kind: textTracks[i].kind,
          active: textTracks[i].mode === 'showing',
          label: textTracks[i].label,
          language: textTracks[i].language,
          index: i
        };

        if (settings.kind === 'subtitles') {
          parsedTracks.push(new text_track(settings));
        } else if (settings.kind === 'captions' && this._config.enableCEA708Captions) {
          settings.label = settings.label || captionsTextTrackLabels.shift();
          settings.language = settings.language || captionsTextTrackLanguageCodes.shift();
          parsedTracks.push(new text_track(settings));
        }
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
    let videoTracks = this._progressiveSources;

    if (videoTrack instanceof video_track && videoTracks && videoTracks[videoTrack.index]) {
      let currentTime = this._videoElement.currentTime;
      let paused = this._videoElement.paused;
      this._sourceObj = videoTracks[videoTrack.index];

      this._eventManager.listenOnce(this._videoElement, Html5EventType.LOADED_DATA, () => {
        if (env.browser.name === 'Android Browser') {
          // In android browser we have to seek only after some playback.
          this._eventManager.listenOnce(this._videoElement, Html5EventType.DURATION_CHANGE, () => {
            this._videoElement.currentTime = currentTime;
          });

          this._eventManager.listenOnce(this._videoElement, Html5EventType.SEEKED, () => {
            this._onTrackChanged(videoTrack);

            if (paused) {
              this._videoElement.pause();
            }
          });

          this._videoElement.play();
        } else {
          this._eventManager.listenOnce(this._videoElement, Html5EventType.SEEKED, () => {
            this._onTrackChanged(videoTrack);
          });

          this._videoElement.currentTime = currentTime;

          if (!paused) {
            this._videoElement.play();
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
    const videoTracks = this._videoElement.videoTracks;

    if (videoTrack instanceof video_track && videoTracks && videoTracks[videoTrack.index]) {
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
    const audioTracks = this._videoElement.audioTracks;

    if (audioTrack instanceof audio_track && audioTracks && audioTracks[audioTrack.index]) {
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
    if (this._videoElement.audioTracks) {
      this._eventManager.listen(this._videoElement.audioTracks, 'change', () => this._onNativeAudioTrackChange());
    }
  };

  _proto._getPKAudioTracks = function _getPKAudioTracks() {
    const audioTracks = this._playerTracks.filter(track => track instanceof audio_track);

    return audioTracks;
  };

  _proto._getActivePKAudioTrack = function _getActivePKAudioTrack() {
    const pkAudioTracks = this._getPKAudioTracks();

    return pkAudioTracks.find(track => track.active === true);
  }
  /**
   * Handler of the video element AudioTrackList onchange event.
   * @private
   * @returns {void}
   */
  ;

  _proto._onNativeAudioTrackChange = function _onNativeAudioTrackChange() {
    const getActiveVidAudioTrackIndex = () => {
      for (let i = 0; i < this._videoElement.audioTracks.length; i++) {
        const audioTrack = this._videoElement.audioTracks[i];

        if (audioTrack.enabled) {
          return i;
        }
      }

      return -1;
    };

    NativeAdapter._logger.debug('Video element audio track change');

    const vidIndex = getActiveVidAudioTrackIndex();

    const activeAudioTrack = this._getActivePKAudioTrack();

    const pkIndex = activeAudioTrack ? activeAudioTrack.index : -1;

    if (vidIndex !== pkIndex) {
      const audioTracks = this._getPKAudioTracks();

      const pkAudioTrack = audioTracks.find(track => track.index === vidIndex);

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
    const textTracks = this._videoElement.textTracks;

    if (textTrack instanceof text_track && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions') && textTracks) {
      this._removeNativeTextTrackChangeListener();

      const selectedTrack = Array.from(textTracks).find((track, index) => textTrack.index === index && track && (track.kind === 'subtitles' || track.kind === 'captions'));

      if (selectedTrack) {
        this._disableTextTracks();

        selectedTrack.mode = this._getDisplayTextTrackModeString();

        NativeAdapter._logger.debug('Text track changed', selectedTrack);

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
    if (this._videoElement.textTracks) {
      this._eventManager.listen(this._videoElement.textTracks, 'change', () => this._onNativeTextTrackChange());
    }
  };

  _proto._getPKTextTracks = function _getPKTextTracks() {
    return this._playerTracks.filter(track => track instanceof text_track);
  };

  _proto._getActivePKTextTrack = function _getActivePKTextTrack() {
    const pkTextTracks = this._getPKTextTracks();

    return pkTextTracks.find(track => track.active === true);
  }
  /**
   * Handler of the video element TextTrackList onchange event.
   * @private
   * @returns {void}
   */
  ;

  _proto._onNativeTextTrackChange = function _onNativeTextTrackChange() {
    const pkTextTracks = this._getPKTextTracks();

    const pkOffTrack = pkTextTracks.find(track => track.language === 'off');

    const getActiveVidTextTrackIndex = () => {
      for (let i = 0; i < this._videoElement.textTracks.length; i++) {
        const textTrack = this._videoElement.textTracks[i];

        if (this._getDisplayTextTrackModeString() === textTrack.mode) {
          return i;
        }
      }

      return -1;
    };

    NativeAdapter._logger.debug('Video element text track change');

    const vidIndex = getActiveVidTextTrackIndex();

    const activePKtextTrack = this._getActivePKTextTrack();

    const pkIndex = activePKtextTrack ? activePKtextTrack.index : -1;

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
        const pkTextTrack = pkTextTracks.find(track => track.index === vidIndex);

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
    return this._config.displayTextTrack ? 'showing' : 'hidden';
  }
  /**
   * Add the onaddtrack listenr of the video element TextTrackList.
   * @private
   * @returns {void}
   */
  ;

  _proto._addNativeTextTrackAddedListener = function _addNativeTextTrackAddedListener() {
    if (!this._config.displayTextTrack && this._videoElement.textTracks) {
      this._eventManager.listen(this._videoElement.textTracks, 'addtrack', () => this._onNativeTextTrackAdded());
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

    this._trigger(CustomEventType.TRACKS_CHANGED, {
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
    this._disableTextTracks();
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
   * Disables all the existing video tracks.
   * @private
   * @returns {void}
   */
  ;

  _proto._disableVideoTracks = function _disableVideoTracks() {
    let videoTracks = this._videoElement.videoTracks;

    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
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
    let audioTracks = this._videoElement.audioTracks;

    if (audioTracks) {
      for (let i = 0; i < audioTracks.length; i++) {
        audioTracks[i].enabled = false;
      }
    }
  }
  /**
   * Disables all the existing text tracks.
   * @private
   * @returns {void}
   */
  ;

  _proto._disableTextTracks = function _disableTextTracks() {
    let textTracks = this._videoElement.textTracks;

    if (textTracks) {
      for (let i = 0; i < textTracks.length; i++) {
        (textTracks[i].kind === 'subtitles' || textTracks[i].kind === 'captions') && (textTracks[i].mode = 'disabled');
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
  }
  /**
   * Seeking to live edge.
   * @function seekToLiveEdge
   * @returns {void}
   * @public
   */
  ;

  _proto.seekToLiveEdge = function seekToLiveEdge() {
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
  ;

  _proto.isLive = function isLive() {
    return this._videoElement.duration === Infinity;
  }
  /**
   * Handling live duration change (as safari doesn't trigger durationchange event on live playback)
   * @function _handleLiveDurationChange
   * @returns {void}
   * @private
   */
  ;

  _proto._handleLiveDurationChange = function _handleLiveDurationChange() {
    this._liveDurationChangeInterval = setInterval(() => {
      const liveEdge = this._getLiveEdge();

      if (this._liveEdge !== liveEdge) {
        this._liveEdge = liveEdge;

        this._videoElement.dispatchEvent(new window.Event(Html5EventType.DURATION_CHANGE));
      }
    }, 2000);
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

  return NativeAdapter;
}(base_media_source_adapter_BaseMediaSourceAdapter);

native_adapter_defineProperty(native_adapter_NativeAdapter, "id", 'NativeAdapter');

native_adapter_defineProperty(native_adapter_NativeAdapter, "_logger", base_media_source_adapter_BaseMediaSourceAdapter.getLogger(native_adapter_NativeAdapter.id));

native_adapter_defineProperty(native_adapter_NativeAdapter, "TEST_VIDEO", _Dom.createElement('video'));

native_adapter_defineProperty(native_adapter_NativeAdapter, "_drmProtocols", [fairplay]);

native_adapter_defineProperty(native_adapter_NativeAdapter, "_drmProtocol", null);


// CONCATENATED MODULE: ./engines/html5/media-source/media-source-provider.js
function media_source_provider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Media source provider
 * @classdesc
 */

let media_source_provider_MediaSourceProvider = /*#__PURE__*/function () {
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
        MediaSourceProvider._logger.debug(`Adapter <${mediaSourceAdapter.id}> has been registered successfully`);

        MediaSourceProvider._mediaSourceAdapters.push(mediaSourceAdapter);
      } else {
        MediaSourceProvider._logger.debug(`Adapter <${mediaSourceAdapter.id}> is already registered, do not register again`);
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
    let index = MediaSourceProvider._mediaSourceAdapters.indexOf(mediaSourceAdapter);

    if (index > -1) {
      MediaSourceProvider._logger.debug(`Unregistered <${mediaSourceAdapter.id}> adapter`);

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

  MediaSourceProvider.canPlaySource = function canPlaySource(source, preferNative = true, drmConfig) {
    MediaSourceProvider._orderMediaSourceAdapters(preferNative);

    let mediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters;

    if (source && source.mimetype) {
      for (let i = 0; i < mediaSourceAdapters.length; i++) {
        if (mediaSourceAdapters[i].canPlayType(source.mimetype) && (!source.drmData || mediaSourceAdapters[i].canPlayDrm(source.drmData, drmConfig))) {
          MediaSourceProvider._selectedAdapter = mediaSourceAdapters[i];

          MediaSourceProvider._logger.debug(`Selected adapter is <${MediaSourceProvider._selectedAdapter.id}>`);

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
    MediaSourceProvider._mediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters.filter(mse => mse.id !== 'NativeAdapter');

    if (preferNative) {
      MediaSourceProvider._mediaSourceAdapters.unshift(native_adapter_NativeAdapter);
    } else {
      MediaSourceProvider._mediaSourceAdapters.push(native_adapter_NativeAdapter);
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

media_source_provider_defineProperty(media_source_provider_MediaSourceProvider, "_logger", utils_logger('MediaSourceProvider'));

media_source_provider_defineProperty(media_source_provider_MediaSourceProvider, "_mediaSourceAdapters", [native_adapter_NativeAdapter]);

media_source_provider_defineProperty(media_source_provider_MediaSourceProvider, "_selectedAdapter", null);


const registerMediaSourceAdapter = media_source_provider_MediaSourceProvider.register;

// EXTERNAL MODULE: ./assets/encoding-sources.json
var encoding_sources = __webpack_require__(3);

// CONCATENATED MODULE: ./engines/html5/capabilities/html5-autoplay.js
var _class, _temp;

function html5_autoplay_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const WAIT_TIME = 500;
let html5_autoplay_Html5AutoPlayCapability = (_temp = _class = /*#__PURE__*/function () {
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
      Html5AutoPlayCapability._vid = _Dom.createElement('video');
      Html5AutoPlayCapability._vid.src = encoding_sources["a" /* Base64Mp4Source */]; // For iOS devices needs to turn the playsinline attribute on

      Html5AutoPlayCapability._vid.setAttribute('playsinline', '');
    }

    Html5AutoPlayCapability._playPromiseResult = new Promise(resolve => {
      Html5AutoPlayCapability._setMuted(false);

      Html5AutoPlayCapability._getPlayPromise().then(() => resolve({
        autoplay: true,
        mutedAutoPlay: true
      })).catch(() => {
        Html5AutoPlayCapability._setMuted(true);

        Html5AutoPlayCapability._getPlayPromise().then(() => resolve({
          autoplay: false,
          mutedAutoPlay: true
        })).catch(() => resolve({
          autoplay: false,
          mutedAutoPlay: false
        }));
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
    return Html5AutoPlayCapability._playPromiseResult.then(playCapability => {
      let fallbackPlayCapabilityTest;

      if (playCapability.autoplay) {
        fallbackPlayCapabilityTest = Promise.resolve(playCapability);
      } else {
        // If autoplay is not allowed - try again and return the updated result
        Html5AutoPlayCapability.runCapability();
        fallbackPlayCapabilityTest = Html5AutoPlayCapability._playPromiseResult;
      }

      return fallbackPlayCapabilityTest.then(fallbackPlayCapability => _Object.mergeDeep(fallbackPlayCapability, Html5AutoPlayCapability._capabilities));
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

    const {
      autoplay,
      mutedAutoPlay
    } = capabilities;

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
    return new Promise((resolve, reject) => {
      Html5AutoPlayCapability._vid.addEventListener(Html5EventType.ERROR, () => {
        reject();
      });

      const supported = setTimeout(() => {
        Html5AutoPlayCapability._logger.debug(`Timeout ${WAIT_TIME} ms has been reached`);

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
}(), html5_autoplay_defineProperty(_class, "_logger", utils_logger('Html5AutoPlayCapability')), html5_autoplay_defineProperty(_class, "_capabilities", {}), _temp);
/* harmony default export */ var html5_autoplay = (html5_autoplay_Html5AutoPlayCapability);
// CONCATENATED MODULE: ./engines/dropped-frames-watcher.js
function dropped_frames_watcher_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dropped_frames_watcher_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function dropped_frames_watcher_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const NOT_SUPPORTED = -1;

let dropped_frames_watcher_DroppedFramesWatcher = /*#__PURE__*/function (_FakeEventTarget) {
  dropped_frames_watcher_inheritsLoose(DroppedFramesWatcher, _FakeEventTarget);

  function DroppedFramesWatcher(mediaSourceAdapter, config, videoElement) {
    var _this;

    _this = _FakeEventTarget.call(this) || this;

    dropped_frames_watcher_defineProperty(dropped_frames_watcher_assertThisInitialized(_this), "_droppedFramesInterval", null);

    dropped_frames_watcher_defineProperty(dropped_frames_watcher_assertThisInitialized(_this), "_lastDroppedFrames", 0);

    dropped_frames_watcher_defineProperty(dropped_frames_watcher_assertThisInitialized(_this), "_lastDecodedFrames", 0);

    dropped_frames_watcher_defineProperty(dropped_frames_watcher_assertThisInitialized(_this), "_lastTime", 0);

    dropped_frames_watcher_defineProperty(dropped_frames_watcher_assertThisInitialized(_this), "_currentBitrate", 0);

    _this._eventManager = new event_manager();
    _this._mediaSourceAdapter = mediaSourceAdapter;
    _this._config = config;
    _this._videoElement = videoElement;

    if (_this._mediaSourceAdapter.capabilities.fpsControl) {
      _this._eventManager.listen(_this._mediaSourceAdapter, CustomEventType.FPS_DROP, event => _this._triggerFPSDrop(event.payload.data));

      return dropped_frames_watcher_assertThisInitialized(_this);
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
    this._eventManager.listen(this._mediaSourceAdapter, CustomEventType.VIDEO_TRACK_CHANGED, event => this._currentBitrate = event.payload.selectedVideoTrack.bandwidth);

    this._droppedFramesInterval = setInterval(() => this._checkFPS(), this._config.fpsDroppedFramesInterval);
  };

  _proto._triggerFPSDrop = function _triggerFPSDrop(data) {
    this.dispatchEvent(new fake_event(CustomEventType.FPS_DROP, data));
  };

  _proto._getDroppedAndDecodedFrames = function _getDroppedAndDecodedFrames() {
    if (typeof this._videoElement.getVideoPlaybackQuality === 'function') {
      const videoPlaybackQuality = this._videoElement.getVideoPlaybackQuality();

      return [videoPlaybackQuality.droppedVideoFrames, videoPlaybackQuality.totalVideoFrames];
    } else if (typeof this._videoElement.webkitDroppedFrameCount == 'number' && typeof this._videoElement.webkitDecodedFrameCount == 'number') {
      return [this._videoElement.webkitDroppedFrameCount, this._videoElement.webkitDecodedFrameCount];
    } else {
      return [NOT_SUPPORTED, NOT_SUPPORTED];
    }
  };

  _proto._checkFPS = function _checkFPS() {
    const [droppedFrames, decodedFrames] = this._getDroppedAndDecodedFrames();

    try {
      const currentTime = performance.now();

      if (decodedFrames) {
        if (this._lastTime) {
          const currentPeriod = currentTime - this._lastTime,
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
}(fake_event_target);

dropped_frames_watcher_defineProperty(dropped_frames_watcher_DroppedFramesWatcher, "_logger", utils_logger('droppedFramesWatcher'));


// CONCATENATED MODULE: ./engines/html5/html5.js
function html5_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function html5_createClass(Constructor, protoProps, staticProps) { if (protoProps) html5_defineProperties(Constructor.prototype, protoProps); if (staticProps) html5_defineProperties(Constructor, staticProps); return Constructor; }

function html5_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function html5_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const HIDE_METADATA_TRACK_TIMEOUT = 100;
/**
 * Html5 engine for playback.
 * @classdesc
 */

let html5_Html5 = /*#__PURE__*/function (_FakeEventTarget) {
  html5_inheritsLoose(Html5, _FakeEventTarget);

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
      const el = _Dom.createElement('video');
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
    return media_source_provider_MediaSourceProvider.canPlaySource(source, preferNative, drmConfig);
  }
  /**
   * Runs the html5 capabilities tests.
   * @returns {void}
   * @public
   * @static
   */
  ;

  Html5.runCapabilities = function runCapabilities() {
    Html5._capabilities.forEach(capability => capability.runCapability());
  }
  /**
   * Gets the html5 capabilities.
   * @return {Promise<Object>} - The html5 capabilities object.
   * @public
   * @static
   */
  ;

  Html5.getCapabilities = function getCapabilities() {
    let promises = [];

    Html5._capabilities.forEach(capability => promises.push(capability.getCapability()));

    return Promise.all(promises).then(arrayOfResults => {
      const mergedResults = {};
      arrayOfResults.forEach(res => Object.assign(mergedResults, res));
      return {
        [Html5.id]: mergedResults
      };
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
    Html5._capabilities.forEach(capability => capability.setCapabilities(capabilities));
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
      Html5._logger.debug(`Create the video element for playing ${playerId}`);

      const videoElement = _Dom.createElement('video');
      Html5.videoElementStore[playerId] = videoElement;
    }

    Html5._logger.debug(`Prepare the video element for playing ${playerId}`);

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
    _this._eventManager = new event_manager();
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
    this._eventManager.removeAll();

    if (this._mediaSourceAdapter) {
      this._canLoadMediaSourceAdapterPromise = this._mediaSourceAdapter.destroy();
      this._mediaSourceAdapter = null;
    }

    if (this._el && this._el.src) {
      _Dom.setAttribute(this._el, 'src', '');
      _Dom.removeAttribute(this._el, 'src');
    }
  }
  /**
   * Destroys the engine.
   * @public
   * @returns {void}
   */
  ;

  _proto.destroy = function destroy() {
    this.detach();

    this._droppedFramesWatcher.destroy();

    if (this._el) {
      this.pause();
      _Dom.removeAttribute(this._el, 'src');
      _Dom.removeChild(this._el.parentNode, this._el);
    }

    this._eventManager.destroy();

    media_source_provider_MediaSourceProvider.destroy();

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
    Object.keys(Html5EventType).forEach(html5Event => {
      this._eventManager.listen(this._el, Html5EventType[html5Event], () => {
        if (Html5EventType[html5Event] === Html5EventType.ERROR) {
          this._handleVideoError();
        } else {
          this.dispatchEvent(new fake_event(Html5EventType[html5Event]));
        }
      });
    });

    this._handleMetadataTrackEvents();

    let mediaSourceAdapter = this._mediaSourceAdapter;

    if (mediaSourceAdapter) {
      this._eventManager.listen(mediaSourceAdapter, CustomEventType.VIDEO_TRACK_CHANGED, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, CustomEventType.AUDIO_TRACK_CHANGED, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, CustomEventType.TEXT_TRACK_CHANGED, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, CustomEventType.ABR_MODE_CHANGED, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, CustomEventType.TEXT_CUE_CHANGED, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, CustomEventType.TRACKS_CHANGED, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, CustomEventType.FRAG_LOADED, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, CustomEventType.DRM_LICENSE_LOADED, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, CustomEventType.MANIFEST_LOADED, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, Html5EventType.ERROR, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, Html5EventType.TIME_UPDATE, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, Html5EventType.PLAYING, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, Html5EventType.WAITING, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, CustomEventType.MEDIA_RECOVERED, event => this.dispatchEvent(event));

      this._eventManager.listen(mediaSourceAdapter, 'hlsFragParsingMetadata', event => this.dispatchEvent(event));

      this._eventManager.listen(this._droppedFramesWatcher, CustomEventType.FPS_DROP, event => this.dispatchEvent(event));
    }
  }
  /**
   * Remove the listeners of the video element events.
   * @public
   * @returns {void}
   */
  ;

  _proto.detach = function detach() {
    Object.keys(Html5EventType).forEach(html5Event => {
      this._eventManager.unlisten(this._el, Html5EventType[html5Event]);
    });

    if (this._mediaSourceAdapter) {
      this._eventManager.unlisten(this._mediaSourceAdapter, CustomEventType.VIDEO_TRACK_CHANGED);

      this._eventManager.unlisten(this._mediaSourceAdapter, CustomEventType.AUDIO_TRACK_CHANGED);

      this._eventManager.unlisten(this._mediaSourceAdapter, CustomEventType.TEXT_TRACK_CHANGED);

      this._eventManager.unlisten(this._mediaSourceAdapter, CustomEventType.TEXT_CUE_CHANGED);
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
    let playPromise = this._el.play();

    if (playPromise) {
      playPromise.catch(err => this.dispatchEvent(new fake_event(CustomEventType.PLAY_FAILED, {
        error: err
      })));
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
    this._el.load();

    return this._canLoadMediaSourceAdapterPromise.then(() => {
      if (this._mediaSourceAdapter) {
        return this._mediaSourceAdapter.load(startTime).catch(error => {
          return Promise.reject(error);
        });
      }

      return Promise.resolve({});
    }).catch(error => {
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
    try {
      // Currently it's supported in chrome and in safari. So if we consider checking support before,
      // we can use this flag to distinguish between the two. In the future we might need a different method.
      // Second condition is because flow does not support this API yet
      if (document.pictureInPictureEnabled && typeof this._el.requestPictureInPicture === 'function') {
        this._el.requestPictureInPicture().catch(error => {
          this.dispatchEvent(new fake_event(Html5EventType.ERROR, new error_Error(error_Error.Severity.RECOVERABLE, error_Error.Category.PLAYER, error_Error.Code.ENTER_PICTURE_IN_PICTURE_FAILED, error)));
        });
      } else if (typeof this._el.webkitSetPresentationMode === 'function') {
        this._el.webkitSetPresentationMode('picture-in-picture'); // Safari does not fire this event but Chrome does, normalizing the behaviour


        setTimeout(() => this.dispatchEvent(new fake_event(Html5EventType.ENTER_PICTURE_IN_PICTURE)), 0);
      }
    } catch (error) {
      this.dispatchEvent(new fake_event(Html5EventType.ERROR, new error_Error(error_Error.Severity.RECOVERABLE, error_Error.Category.PLAYER, error_Error.Code.ENTER_PICTURE_IN_PICTURE_FAILED, error)));
    }
  }
  /**
   * Request the engine to exit picture in picture mode
   * @public
   * @returns {void}
   */
  ;

  _proto.exitPictureInPicture = function exitPictureInPicture() {
    try {
      // Currently it's supported in chrome and in safari. So if we consider checking support before,
      // we can use this flag to distinguish between the two. In the future we might need a different method.
      // Second condition is because flow does not support this API yet
      if (document.pictureInPictureEnabled && typeof document.exitPictureInPicture === 'function') {
        document.exitPictureInPicture().catch(error => {
          this.dispatchEvent(new fake_event(Html5EventType.ERROR, new error_Error(error_Error.Severity.RECOVERABLE, error_Error.Category.PLAYER, error_Error.Code.EXIT_PICTURE_IN_PICTURE_FAILED, error)));
        });
      } else if (typeof this._el.webkitSetPresentationMode === 'function') {
        this._el.webkitSetPresentationMode('inline'); // Safari does not fire this event but Chrome does, normalizing the behaviour


        setTimeout(() => this.dispatchEvent(new fake_event(Html5EventType.LEAVE_PICTURE_IN_PICTURE)), 0);
      }
    } catch (error) {
      this.dispatchEvent(new fake_event(Html5EventType.ERROR, new error_Error(error_Error.Severity.RECOVERABLE, error_Error.Category.PLAYER, error_Error.Code.EXIT_PICTURE_IN_PICTURE_FAILED, error)));
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
    this._el = Html5.videoElementStore[playerId] || _Dom.createElement('video');
    this._el.id = _Generator.uniqueId(5);
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
    this._mediaSourceAdapter = media_source_provider_MediaSourceProvider.getMediaSourceAdapter(this.getVideoElement(), source, this._config);

    if (this._mediaSourceAdapter) {
      this._droppedFramesWatcher = new dropped_frames_watcher_DroppedFramesWatcher(this._mediaSourceAdapter, this._config.abr, this._el);
    }
  }
  /**
   * Add cuechange listener to active textTrack.
   * @returns {void}
   * @private
   */
  ;

  _proto._addCueChangeListener = function _addCueChangeListener() {
    let textTrackEl = Array.from(this._el.textTracks).find(track => track && track.mode !== 'disabled');

    if (textTrackEl) {
      this._eventManager.listen(textTrackEl, 'cuechange', e => this._onCueChange(e));
    }
  }
  /**
   * Remove cuechange listeners from textTracks
   * @returns {void}
   * @private
   */
  ;

  _proto._removeCueChangeListeners = function _removeCueChangeListeners() {
    for (let i = 0; i < this._el.textTracks.length; i++) {
      this._eventManager.unlisten(this._el.textTracks[i], 'cuechange');
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
    let textTrack = e.currentTarget;
    let activeCues = [];

    for (let cue of textTrack.activeCues) {
      //Normalize cues to be of type of VTT model
      if (window.VTTCue && cue instanceof window.VTTCue) {
        activeCues.push(cue);
      } else if (window.TextTrackCue && cue instanceof window.TextTrackCue) {
        try {
          activeCues.push(new Cue(cue.startTime, cue.endTime, cue.text));
        } catch (error) {
          new error_Error(error_Error.Severity.RECOVERABLE, error_Error.Category.TEXT, error_Error.Code.UNABLE_TO_CREATE_TEXT_CUE, error);
        }
      }
    }

    this.dispatchEvent(new fake_event(CustomEventType.TEXT_CUE_CHANGED, {
      cues: activeCues
    }));
  }
  /**
   * set hasBeenReset to true for all the cues. (use case: when cues should be recalculated for display)
   * @returns {void}
   */
  ;

  _proto.resetAllCues = function resetAllCues() {
    let activeTextTrack = Array.from(this._el.textTracks).find(track => track && track.mode !== 'disabled');

    if (activeTextTrack) {
      for (let i = 0; i < activeTextTrack.cues.length; i++) {
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
    const code = this._el.error.code;

    if (code === window.MediaError.MEDIA_ERR_ABORTED) {
      // Ignore this error code.js, which should only occur when navigating away or
      // deliberately stopping playback of HTTP content.
      return;
    } // Extra error information from MS Edge and IE11:


    let extended = this._getMsExtendedError(); // Extra error information from Chrome:
    // $FlowFixMe


    const message = this._el.error.message;

    if (this._mediaSourceAdapter && !this._mediaSourceAdapter.handleMediaError(this._el.error)) {
      const error = new error_Error(error_Error.Severity.CRITICAL, error_Error.Category.MEDIA, error_Error.Code.VIDEO_ERROR, {
        code: code,
        extended: extended,
        message: message
      });
      this.dispatchEvent(new fake_event(Html5EventType.ERROR, error));
    }
  }
  /**
   * more info about the error
   * @returns {string} info about the video element error
   * @private
   */
  ;

  _proto._getMsExtendedError = function _getMsExtendedError() {
    // $FlowFixMe
    let extended = this._el.error.msExtendedCode;

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
    const listenToCueChange = track => {
      track.mode = 'hidden';
      track.addEventListener('cuechange', () => {
        this.dispatchEvent(new fake_event(CustomEventType.TIMED_METADATA, {
          cues: Array.from(track.activeCues)
        }));
      });
    };

    const metadataTrack = Array.from(this._el.textTracks).find(track => track.kind === 'metadata');

    if (metadataTrack) {
      listenToCueChange(metadataTrack);
    } else {
      this._eventManager.listen(this._el.textTracks, 'addtrack', event => {
        if (event.track.kind === 'metadata') {
          listenToCueChange(event.track);
        } else {
          // When a non metadata track has added it could change the metadata track mode to disabled. Need to return it to hidden.
          Array.from(this._el.textTracks).forEach(track => {
            if (track.kind === 'metadata') {
              setTimeout(() => track.mode = 'hidden', HIDE_METADATA_TRACK_TIMEOUT);
            }
          });
        }
      });
    }
  };

  html5_createClass(Html5, [{
    key: "id",
    get: function () {
      return Html5.id;
    }
  }, {
    key: "src",
    set: function (source) {
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
    get: function () {
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
    get: function () {
      return this._mediaSourceAdapter ? this._mediaSourceAdapter.currentTime : 0;
    }
    /**
     * Set the current time in seconds.
     * @param {Number} to - The number to set in seconds.
     * @public
     * @returns {void}
     */
    ,
    set: function (to) {
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
    key: "duration",
    get: function () {
      return this._mediaSourceAdapter ? this._mediaSourceAdapter.duration : NaN;
    }
    /**
     * Set playback volume.
     * @param {Number} vol - The volume to set.
     * @public
     * @returns {void}
     */

  }, {
    key: "volume",
    set: function (vol) {
      this._el.volume = vol;
    }
    /**
     * Get playback volume.
     * @returns {Number} - The volume value of the video element.
     * @public
     */
    ,
    get: function () {
      return this._el.volume;
    }
    /**
     * Get paused state.
     * @returns {boolean} - The paused value of the video element.
     * @public
     */

  }, {
    key: "paused",
    get: function () {
      return this._el.paused;
    }
    /**
     * Get seeking state.
     * @returns {boolean} - The seeking value of the video element.
     * @public
     */

  }, {
    key: "seeking",
    get: function () {
      return this._el.seeking;
    }
    /**
     * Get the first seekable range (part) of the video in seconds.
     * @returns {TimeRanges} - First seekable range (part) of the video in seconds.
     * @public
     */

  }, {
    key: "seekable",
    get: function () {
      return this._el.seekable;
    }
    /**
     * Get the first played range (part) of the video in seconds.
     * @returns {TimeRanges} - First played range (part) of the video in seconds.
     * @public
     */

  }, {
    key: "played",
    get: function () {
      return this._el.played;
    }
    /**
     * Get the first buffered range (part) of the video in seconds.
     * @returns {TimeRanges} - First buffered range (part) of the video in seconds.
     * @public
     */

  }, {
    key: "buffered",
    get: function () {
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
    set: function (mute) {
      this._el.muted = mute;
    }
    /**
     * Get player muted state.
     * @returns {boolean} - The muted value of the video element.
     * @public
     */
    ,
    get: function () {
      return this._el.muted;
    }
    /**
     * Get the default mute value.
     * @returns {boolean} - The defaultMuted of the video element.
     * @public
     */

  }, {
    key: "defaultMuted",
    get: function () {
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
    set: function (poster) {
      this._el.poster = poster;
    }
    /**
     * Gets an image to be shown while the video is downloading, or until the user hits the play button.
     * @returns {poster} - The image url.
     * @public
     */
    ,
    get: function () {
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
    set: function (preload) {
      this._el.preload = preload;
    }
    /**
     * Gets the preload value of the video element.
     * @returns {string} - The preload value.
     * @public
     */
    ,
    get: function () {
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
    set: function (autoplay) {
      this._el.autoplay = autoplay;
    }
    /**
     * Gets the autoplay value of the video element.
     * @returns {boolean} - The autoplay value.
     * @public
     */
    ,
    get: function () {
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
    set: function (loop) {
      this._el.loop = loop;
    }
    /**
     * Gets the loop value of the video element.
     * @returns {boolean} - The loop value.
     * @public
     */
    ,
    get: function () {
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
    set: function (controls) {
      this._el.controls = controls;
    }
    /**
     * Gets the controls value of the video element.
     * @returns {boolean} - The controls value.
     * @public
     */
    ,
    get: function () {
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
    set: function (playbackRate) {
      this._el.playbackRate = playbackRate;
    }
    /**
     * Gets the current playback speed of the audio/video.
     * @returns {Number} - The current playback speed value.
     * @public
     */
    ,
    get: function () {
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
    set: function (defaultPlaybackRate) {
      this._el.defaultPlaybackRate = defaultPlaybackRate;
    }
    /**
     * Gets the default playback speed of the audio/video.
     * @returns {Number} - The default playback speed value.
     * @public
     */
    ,
    get: function () {
      return this._el.defaultPlaybackRate;
    }
    /**
     * The ended property returns whether the playback of the audio/video has ended.
     * @returns {boolean} - The ended value.
     * @public
     */

  }, {
    key: "ended",
    get: function () {
      return this._el.ended;
    }
    /**
     * The error property returns a MediaError object.
     * @returns {MediaError} - The MediaError object has a code property containing the error state of the audio/video.
     * @public
     */

  }, {
    key: "error",
    get: function () {
      return this._el.error;
    }
    /**
     * @returns {Number} - The current network state (activity) of the audio/video.
     * @public
     */

  }, {
    key: "networkState",
    get: function () {
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
    get: function () {
      return this._el.readyState;
    }
    /**
     * @returns {Number} - The height of the video player, in pixels.
     * @public
     */

  }, {
    key: "videoHeight",
    get: function () {
      return this._el.videoHeight;
    }
    /**
     * @returns {Number} - The width of the video player, in pixels.
     * @public
     */

  }, {
    key: "videoWidth",
    get: function () {
      return this._el.videoWidth;
    }
    /**
     * @param {boolean} playsinline - Whether to set on the video tag the playsinline attribute.
     */

  }, {
    key: "playsinline",
    set: function (playsinline) {
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
    get: function () {
      return this._el.getAttribute('playsinline') === '';
    }
    /**
     * Set crossOrigin attribute.
     * @param {?string} crossOrigin - 'anonymous' or 'use-credentials'
     */

  }, {
    key: "crossOrigin",
    set: function (crossOrigin) {
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
    get: function () {
      return this._el.getAttribute('crossorigin');
    }
    /**
     * get the playback rates
     * @return {number[]} - playback rates
     */

  }, {
    key: "playbackRates",
    get: function () {
      return Html5.PLAYBACK_RATES;
    }
    /**
     * get if the engine's video element is the one in the PIP
     * @return {boolean} boolean - is in PIP
     */

  }, {
    key: "isInPictureInPicture",
    get: function () {
      // Check if the engine's video element is the one in the PIP
      return !!document.pictureInPictureElement && document.pictureInPictureElement != null && this._el === document.pictureInPictureElement || !!this._el.webkitPresentationMode && this._el.webkitPresentationMode === 'picture-in-picture';
    }
  }, {
    key: "targetBuffer",
    get: function () {
      if (this._mediaSourceAdapter) {
        return this._mediaSourceAdapter.targetBuffer;
      }

      return NaN;
    }
  }, {
    key: "availableBuffer",
    get: function () {
      let retVal = 0;

      if (this.buffered) {
        for (let i = 0; i < this.buffered.length; i++) {
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
}(fake_event_target);

html5_defineProperty(html5_Html5, "_logger", utils_logger('Html5'));

html5_defineProperty(html5_Html5, "_capabilities", [html5_autoplay]);

html5_defineProperty(html5_Html5, "id", 'html5');

html5_defineProperty(html5_Html5, "videoElementStore", {});

html5_defineProperty(html5_Html5, "PLAYBACK_RATES", [0.5, 1, 2, 4]);


// CONCATENATED MODULE: ./engines/engine-provider.js
function engine_provider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Engine Provider
 * @classdesc
 */

let EngineProvider = /*#__PURE__*/function () {
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
      EngineProvider._logger.debug(`Engine <${id}> has been registered successfully`);

      EngineProvider._engineProviders[id] = engine;
    } else {
      EngineProvider._logger.debug(`Engine <${id}> is already registered, do not register again`);
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
      EngineProvider._logger.debug(`Unregistered <${id}> Engine`);

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
    return Object.keys(EngineProvider._engineProviders).map(key => EngineProvider._engineProviders[key]);
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

engine_provider_defineProperty(EngineProvider, "_logger", utils_logger('EngineProvider'));

engine_provider_defineProperty(EngineProvider, "_engineProviders", {});

if (html5_Html5.isSupported()) {
  EngineProvider.register(html5_Html5.id, html5_Html5);
}

const registerEngine = EngineProvider.register;
const unRegisterEngine = EngineProvider.unRegister;

// CONCATENATED MODULE: ./track/external-captions-handler.js
function external_captions_handler_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function external_captions_handler_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function external_captions_handler_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














/**
 * enum for cues statuses
 * @const
 * @type {Object}
 */
const CuesStatus = {
  NOT_DOWNLOADED: 1,
  DOWNLOADING: 2,
  DOWNLOADED: 3
};
const SRT_POSTFIX = 'srt';
const VTT_POSTFIX = 'vtt';

let external_captions_handler_ExternalCaptionsHandler = /*#__PURE__*/function (_FakeEventTarget) {
  external_captions_handler_inheritsLoose(ExternalCaptionsHandler, _FakeEventTarget);

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

    external_captions_handler_defineProperty(external_captions_handler_assertThisInitialized(_this), "_externalCueIndex", 0);

    external_captions_handler_defineProperty(external_captions_handler_assertThisInitialized(_this), "_textTrackModel", {});

    external_captions_handler_defineProperty(external_captions_handler_assertThisInitialized(_this), "_activeTextCues", []);

    external_captions_handler_defineProperty(external_captions_handler_assertThisInitialized(_this), "_isTextTrackActive", false);

    external_captions_handler_defineProperty(external_captions_handler_assertThisInitialized(_this), "_lastTimeUpdate", 0);

    _this._player = player;
    _this._eventManager = new event_manager();
    return _this;
  }
  /**
   * selects external track start listening to cues
   * @returns {void}
   * @public
   */


  var _proto = ExternalCaptionsHandler.prototype;

  _proto.hideTextTrack = function hideTextTrack() {
    // only if external text track was active we need to hide it.
    if (this._isTextTrackActive) {
      this._eventManager.unlisten(this._player, Html5EventType.TIME_UPDATE);

      this.dispatchEvent(new fake_event(CustomEventType.TEXT_CUE_CHANGED, {
        cues: []
      }));

      this._resetCurrentTrack();
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
    const captions = this._player.config.sources.captions;

    if (!captions) {
      return [];
    }

    const playerTextTracks = tracks.filter(track => track instanceof text_track);
    let textTracksLength = playerTextTracks.length || 0;
    const newTextTracks = [];
    captions.forEach(caption => {
      if (!caption.language) {
        const error = new error_Error(error_Error.Severity.RECOVERABLE, error_Error.Category.TEXT, error_Error.Code.UNKNOWN_LANGUAGE, {
          caption: caption
        });
        this.dispatchEvent(new fake_event(Html5EventType.ERROR, error));
      } else {
        const track = this._createTextTrack(caption, textTracksLength++);

        this._maybeAddTrack(track, caption, playerTextTracks, newTextTracks);
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
    const sameLangTrack = playerTextTracks.find(textTrack => Track.langComparer(caption.language, textTrack.language));

    if (!sameLangTrack) {
      if (this._player.config.playback.useNativeTextTrack) {
        this._addNativeTextTrack(track);
      }

      newTextTracks.push(track);

      this._updateTextTracksModel(caption);
    } else {
      ExternalCaptionsHandler._logger.warn('duplicated language, taking the inband option. Language: ', sameLangTrack.language);
    }
  }
  /**
   * creates a new text track
   * @param {PKExternalCaptionObject} caption - caption to create the text track with
   * @param {number} index - index of the text track
   * @returns {TextTrack} - new text track
   * @private
   */
  ;

  _proto._createTextTrack = function _createTextTrack(caption, index) {
    return new text_track({
      active: !!caption.default,
      index: index,
      kind: 'subtitles',
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
    if (this._textTrackModel[textTrack.language]) {
      if (this._textTrackModel[textTrack.language].cuesStatus === CuesStatus.DOWNLOADED && !this._player.config.playback.useNativeTextTrack) {
        textTrack.active = true;
        this.dispatchEvent(new fake_event(CustomEventType.TEXT_TRACK_CHANGED, {
          selectedTextTrack: textTrack
        }));
        this.hideTextTrack();

        this._setTextTrack(textTrack);
      } else if (this._textTrackModel[textTrack.language].cuesStatus === CuesStatus.NOT_DOWNLOADED) {
        textTrack.active = true;

        if (!this._player.config.playback.useNativeTextTrack) {
          this.dispatchEvent(new fake_event(CustomEventType.TEXT_TRACK_CHANGED, {
            selectedTextTrack: textTrack
          }));
        }

        this._downloadAndParseCues(textTrack).then(() => {
          this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.DOWNLOADED;

          if (this._player.config.playback.useNativeTextTrack) {
            this._addCuesToNativeTextTrack(textTrack, this._textTrackModel[textTrack.language].cues);
          } else {
            this.hideTextTrack();

            this._setTextTrack(textTrack);
          }
        }).catch(error => this.dispatchEvent(new fake_event(Html5EventType.ERROR, error)));
      }
    }
  }
  /**
   * set hasBeenReset to true for all the cues.
   * @returns {void}
   */
  ;

  _proto.resetAllCues = function resetAllCues() {
    for (let textTrack in this._textTrackModel) {
      this._textTrackModel[textTrack].cues.forEach(cue => {
        cue.hasBeenReset = true;
      });
    }
  }
  /**
   * resets the handler
   * @returns {void}
   */
  ;

  _proto.reset = function reset() {
    this._resetCurrentTrack();

    this._textTrackModel = {};

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
    return new Promise((resolve, reject) => {
      const track = this._textTrackModel[textTrack.language];

      const captionType = track.type || this._getFileType(track.url);

      if (![SRT_POSTFIX, VTT_POSTFIX].includes(captionType)) {
        this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.NOT_DOWNLOADED;
        reject(new error_Error(error_Error.Severity.RECOVERABLE, error_Error.Category.TEXT, error_Error.Code.UNKNOWN_FILE_TYPE, {
          captionType: captionType
        }));
      }

      _Http.execute(track.url, {}, 'GET').then(response => {
        resolve(captionType === SRT_POSTFIX ? this._convertSrtToVtt(response) : response);
      }).catch(() => {
        this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.NOT_DOWNLOADED;
        reject(new error_Error(error_Error.Severity.RECOVERABLE, error_Error.Category.TEXT, error_Error.Code.HTTP_ERROR, {
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
    return new Promise((resolve, reject) => {
      const parser = new Parser(window, StringDecoder());
      const cues = [];

      parser.oncue = cue => cues.push(cue);

      parser.onflush = () => {
        ExternalCaptionsHandler._logger.debug('finished parsing external cues');

        resolve(cues);
      };

      parser.parse(vttStr);
      parser.flush();
      parser.onparsingerror(e => reject(e));
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
    const vttStr = str.replace(/(\d\d:\d\d:\d\d),(\d\d\d) --> (\d\d:\d\d:\d\d),(\d\d\d)/g, (match, part1, part2, part3, part4) => {
      return `${part1}.${part2} --> ${part3}.${part4}`;
    });
    return `WEBVTT\n\n${vttStr}`;
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
    this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.DOWNLOADING;
    return new Promise((resolve, reject) => {
      this._getCuesString(textTrack).then(vttString => this._parseCues(vttString)).then(cuesArray => {
        this._textTrackModel[textTrack.language].cues = cuesArray;
        resolve();
      }).catch(error => reject(error));
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
    const currentTime = this._player.currentTime;

    if (currentTime) {
      let cueIndexUpdated = false;

      if (this._hadSeeked()) {
        this._activeTextCues = [];
        cueIndexUpdated = this._maybeSetExternalCueIndex();
      }

      const activeCuesRemoved = this._maybeRemoveActiveCues();

      const activeCuesAdded = this._maybeAddToActiveCues(track);

      if (cueIndexUpdated || activeCuesAdded || activeCuesRemoved) {
        this.dispatchEvent(new fake_event(CustomEventType.TEXT_CUE_CHANGED, {
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
    const currentTime = this._player.currentTime;

    if (!currentTime) {
      return false;
    }

    let hadRemoved = false;

    for (let activeTextCuesIndex = 0; activeTextCuesIndex < this._activeTextCues.length; activeTextCuesIndex++) {
      const cue = this._activeTextCues[activeTextCuesIndex];

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
    const currentTime = this._player.currentTime;

    if (!currentTime) {
      return false;
    }

    let hadAdded = false;
    const cues = this._textTrackModel[track.language].cues;

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
    let textTrack = this._player._getTextTracks().find(track => track.active && track.external);

    if (textTrack && textTrack.external) {
      const cues = this._textTrackModel[textTrack.language] ? this._textTrackModel[textTrack.language].cues : [];
      let i = 0;

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
   * adding cues to an existing text element in a video tag
   * @param {TextTrack} textTrack - adding cues to an exiting text track element
   * @param {Array<Cue>} cues - the cues to be added
   * @return {void}
   */
  ;

  _proto._addCuesToNativeTextTrack = function _addCuesToNativeTextTrack(textTrack, cues) {
    const videoElement = this._player.getVideoElement();

    if (videoElement) {
      const track = Array.from(videoElement.textTracks).find(track => track ? track.language === textTrack.language : false);

      if (track) {
        cues.forEach(cue => track.addCue(cue));
      }
    }
  }
  /**
   * adds a new text track element to the video element or set an existing one
   * (when adding a text track with existing language to the video element it will remove all its cues)
   * @param {TextTrack} textTrack - the playkit text track object to be added
   * @returns {void}
   */
  ;

  _proto._addNativeTextTrack = function _addNativeTextTrack(textTrack) {
    const videoElement = this._player.getVideoElement();

    if (videoElement) {
      const sameLanguageTrackIndex = Array.from(videoElement.textTracks).findIndex(track => track ? track.language === textTrack.language : false);

      if (sameLanguageTrackIndex > -1) {
        const domTrack = videoElement.textTracks[sameLanguageTrackIndex];

        if (domTrack.cues) {
          Object.values(domTrack.cues).forEach(cue => domTrack.removeCue(cue));
        }
      } else {
        videoElement.addTextTrack('subtitles', textTrack.label || textTrack.language, textTrack.language);
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
    if (!this._player.config.playback.useNativeTextTrack) {
      this._isTextTrackActive = true;

      ExternalCaptionsHandler._logger.debug('External text track changed', textTrack);

      this._activeTextCues = [];
      this.dispatchEvent(new fake_event(CustomEventType.TEXT_CUE_CHANGED, {
        cues: this._activeTextCues
      }));

      this._eventManager.listen(this._player, Html5EventType.TIME_UPDATE, () => this._handleCaptionOnTimeUpdate(textTrack));
    }
  };

  return ExternalCaptionsHandler;
}(fake_event_target);

external_captions_handler_defineProperty(external_captions_handler_ExternalCaptionsHandler, "_logger", utils_logger('ExternalCaptionsHandler'));


// CONCATENATED MODULE: ./ads/ad-break-type.js
const AdBreakType = {
  PRE: 'preroll',
  MID: 'midroll',
  POST: 'postroll',
  OVERLAY: 'overlay'
};

// CONCATENATED MODULE: ./ads/ad-tag-type.js
const AdTagType = {
  VAST: 'vast',
  VMAP: 'vmap'
};

// CONCATENATED MODULE: ./ads/ad-break.js
function ad_break_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ad_break_createClass(Constructor, protoProps, staticProps) { if (protoProps) ad_break_defineProperties(Constructor.prototype, protoProps); if (staticProps) ad_break_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class AdBreak
 * @param {PKAdBreakOptions} options - Ad break data options.
 */
let AdBreak = /*#__PURE__*/function () {
  function AdBreak(options) {
    this._type = options.type;
    this._position = options.position;
    this._numAds = options.numAds;
  }
  /**
   * @instance
   * @memberof AdBreak
   * @return {string} - Ad break type - pre/mid/post.
   */


  var _proto = AdBreak.prototype;

  _proto.toJSON = function toJSON() {
    return {
      type: this.type,
      position: this.position,
      numAds: this.numAds
    };
  };

  ad_break_createClass(AdBreak, [{
    key: "type",
    get: function () {
      return this._type;
    }
    /**
     * @instance
     * @memberof AdBreak
     * @return {string} - Ad break position on the playback timeline.
     */

  }, {
    key: "position",
    get: function () {
      return this._position;
    }
    /**
     * @instance
     * @memberof AdBreak
     * @return {string} - The number of ads inside the ad break.
     */

  }, {
    key: "numAds",
    get: function () {
      return this._numAds;
    }
  }]);

  return AdBreak;
}();


// CONCATENATED MODULE: ./ads/ad.js
function ad_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ad_createClass(Constructor, protoProps, staticProps) { if (protoProps) ad_defineProperties(Constructor.prototype, protoProps); if (staticProps) ad_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Ad
 * @param {string} id - Ad ID.
 * @param {PKAdOptions} options - Ad data options.
 */
let Ad = /*#__PURE__*/function () {
  function Ad(id, options) {
    this._id = id;
    this._system = options.system;
    this._url = options.url;
    this._contentType = options.contentType;
    this._title = options.title;
    this._position = options.position;
    this._duration = options.duration;
    this._clickThroughUrl = options.clickThroughUrl;
    this._posterUrl = options.posterUrl;
    this._skipOffset = options.skipOffset;
    this._linear = options.linear;
    this._width = options.width || 0;
    this._height = options.height || 0;
    this._bitrate = options.bitrate || 0;
    this._bumper = options.bumper;
  }
  /**
   * @instance
   * @memberof Ad
   * @return {string} - Ad ID.
   */


  var _proto = Ad.prototype;

  _proto.toJSON = function toJSON() {
    return {
      id: this.id,
      system: this.system,
      url: this.url,
      contentType: this.contentType,
      title: this.title,
      position: this.position,
      duration: this.duration,
      clickThroughUrl: this.clickThroughUrl,
      posterUrl: this.posterUrl,
      skipOffset: this.skipOffset,
      linear: this.linear,
      skippable: this.skippable,
      width: this.width,
      height: this.height,
      bitrate: this.bitrate,
      bumper: this.bumper
    };
  };

  ad_createClass(Ad, [{
    key: "id",
    get: function () {
      return this._id;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {?string} - Ad system.
     */

  }, {
    key: "system",
    get: function () {
      return this._system;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {string} - Ad content type.
     */

  }, {
    key: "contentType",
    get: function () {
      return this._contentType;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {string} - Ad URL.
     */

  }, {
    key: "url",
    get: function () {
      return this._url;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {string} - Ad title.
     */

  }, {
    key: "title",
    get: function () {
      return this._title;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {string} - Ad position inside the ad break.
     */

  }, {
    key: "position",
    get: function () {
      return this._position;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {string} - Ad duration.
     */

  }, {
    key: "duration",
    get: function () {
      return this._duration;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {string} - Ad click through URL.
     */

  }, {
    key: "clickThroughUrl",
    get: function () {
      return this._clickThroughUrl;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {string} - Ad poster URL.
     */

  }, {
    key: "posterUrl",
    get: function () {
      return this._posterUrl;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {string} - Ad skip offset.
     */

  }, {
    key: "skipOffset",
    get: function () {
      return this._skipOffset;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {boolean} - Whether the ad is linear.
     */

  }, {
    key: "linear",
    get: function () {
      return this._linear;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {string} - Ad width.
     */

  }, {
    key: "width",
    get: function () {
      return this._width;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {string} - Ad height.
     */

  }, {
    key: "height",
    get: function () {
      return this._height;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {string} - Ad bitrate.
     */

  }, {
    key: "bitrate",
    get: function () {
      return this._bitrate;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {boolean} - Whether the ad is bumper.
     */

  }, {
    key: "bumper",
    get: function () {
      return this._bumper;
    }
    /**
     * @instance
     * @memberof Ad
     * @return {string} - Whether the ad is skippable or not.
     */

  }, {
    key: "skippable",
    get: function () {
      return !!(this.skipOffset && this.skipOffset > 0);
    }
  }]);

  return Ad;
}();


// CONCATENATED MODULE: ./ads/ads-controller.js
function ads_controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ads_controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) ads_controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) ads_controller_defineProperties(Constructor, staticProps); return Constructor; }

function ads_controller_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function ads_controller_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












/**
 * @class AdsController
 * @param {Player} player - The player.
 * @param {IAdsController} adsPluginController - The controller of the current ads plugin instance.
 */
let ads_controller_AdsController = /*#__PURE__*/function (_FakeEventTarget) {
  ads_controller_inheritsLoose(AdsController, _FakeEventTarget);

  function AdsController(player, adsPluginControllers) {
    var _this;

    _this = _FakeEventTarget.call(this) || this;
    _this._player = player;
    _this._eventManager = new event_manager();
    _this._adsPluginControllers = adsPluginControllers;

    _this._init();

    return _this;
  }
  /**
   * @instance
   * @memberof AdsController
   * @returns {boolean} - Whether all ads completed.
   */


  var _proto = AdsController.prototype;

  /**
   * @instance
   * @memberof AdsController
   * @returns {boolean} - Whether we're in an ad break.
   */
  _proto.isAdBreak = function isAdBreak() {
    return !!this._adBreak;
  }
  /**
   * @instance
   * @memberof AdsController
   * @returns {Array<number|string>} - The ad breaks layout (cue points).
   */
  ;

  _proto.getAdBreaksLayout = function getAdBreaksLayout() {
    return this._adBreaksLayout;
  }
  /**
   * @instance
   * @memberof AdsController
   * @returns {?AdBreak} - Gets the current ad break data.
   */
  ;

  _proto.getAdBreak = function getAdBreak() {
    return this._adBreak;
  }
  /**
   * @instance
   * @memberof AdsController
   * @returns {?Ad} - Gets the current ad data.
   */
  ;

  _proto.getAd = function getAd() {
    return this._ad;
  }
  /**
   * Skip on an ad.
   * @instance
   * @memberof AdsController
   * @returns {void}
   */
  ;

  _proto.skipAd = function skipAd() {
    const activeController = this._adsPluginControllers.find(controller => controller.active);

    activeController && activeController.skipAd();
  }
  /**
   * Play an ad on demand.
   * @param {PKAdPod} adPod - The ad pod play.
   * @instance
   * @memberof AdsController
   * @returns {void}
   */
  ;

  _proto.playAdNow = function playAdNow(adPod) {
    if (this.isAdBreak()) {
      AdsController._logger.warn('Tried to call playAdNow during an ad break');
    } else {
      this._playAdBreak({
        position: this._player.currentTime || 0,
        ads: adPod,
        played: false
      });
    }
  };

  _proto._init = function _init() {
    this._initMembers();

    this._addBindings();

    this._handleConfiguredAdBreaks();
  };

  _proto._initMembers = function _initMembers() {
    this._allAdsCompleted = true;
    this._adBreaksLayout = [];
    this._adBreak = null;
    this._ad = null;
    this._adPlayed = false;
    this._snapback = 0;
    this._adIsLoading = false;
  };

  _proto._addBindings = function _addBindings() {
    this._eventManager.listen(this._player, AdEventType.AD_MANIFEST_LOADED, event => this._onAdManifestLoaded(event));

    this._eventManager.listen(this._player, AdEventType.AD_BREAK_START, event => this._onAdBreakStart(event));

    this._eventManager.listen(this._player, AdEventType.AD_LOADED, event => this._onAdLoaded(event));

    this._eventManager.listen(this._player, AdEventType.AD_STARTED, event => this._onAdStarted(event));

    this._eventManager.listen(this._player, AdEventType.AD_BREAK_END, () => this._onAdBreakEnd());

    this._eventManager.listen(this._player, AdEventType.ADS_COMPLETED, () => this._onAdsCompleted());

    this._eventManager.listen(this._player, AdEventType.AD_ERROR, event => this._onAdError(event));

    this._eventManager.listen(this._player, CustomEventType.PLAYER_RESET, () => this._reset());

    this._eventManager.listenOnce(this._player, Html5EventType.ENDED, () => this._onEnded());

    this._eventManager.listenOnce(this._player, CustomEventType.PLAYBACK_ENDED, () => this._onPlaybackEnded());
  };

  _proto._handleConfiguredAdBreaks = function _handleConfiguredAdBreaks() {
    const playAdsAfterTime = this._player.config.advertising.playAdsAfterTime || this._player.config.playback.startTime;
    this._configAdBreaks = this._player.config.advertising.adBreaks.filter(adBreak => (typeof adBreak.every === 'number' || typeof adBreak.position === 'number' || typeof adBreak.percentage === 'number') && adBreak.ads.length).map(adBreak => {
      this._validateOneTimeConfig(adBreak);

      let position = adBreak.position;
      adBreak.percentage === 0 && (position = 0);
      adBreak.percentage === 100 && (position = -1);
      adBreak.every && (position = adBreak.every);
      return {
        position,
        percentage: adBreak.percentage,
        every: adBreak.every,
        ads: adBreak.ads.slice(),
        played: -1 < position && position <= playAdsAfterTime
      };
    });

    if (this._configAdBreaks.length) {
      this._dispatchAdManifestLoaded();

      this._handleConfiguredPreroll();

      this._eventManager.listenOnce(this._player, Html5EventType.DURATION_CHANGE, () => {
        this._handleEveryAndPercentage();

        this._configAdBreaks.sort((a, b) => a.position - b.position);

        if (this._configAdBreaks.some(adBreak => adBreak.position > 0)) {
          this._handleConfiguredMidrolls();
        }
      });
    }
  };

  _proto._validateOneTimeConfig = function _validateOneTimeConfig(adBreak) {
    if (typeof adBreak.position === 'number') {
      if (typeof adBreak.percentage === 'number') {
        AdsController._logger.warn(`Validate ad break - ignore percentage ${adBreak.percentage} as position ${adBreak.position} configured`);

        delete adBreak.percentage;
      }

      if (typeof adBreak.every === 'number') {
        AdsController._logger.warn(`Validate ad break - ignore every ${adBreak.every} as position ${adBreak.position} configured`);

        delete adBreak.every;
      }
    }

    if (typeof adBreak.percentage === 'number' && typeof adBreak.every === 'number') {
      AdsController._logger.warn(`Validate ad break - ignore every ${adBreak.every} as percentage ${adBreak.percentage} configured`);

      delete adBreak.every;
    }
  };

  _proto._dispatchAdManifestLoaded = function _dispatchAdManifestLoaded() {
    const adBreaksPosition = Array.from(new Set(this._configAdBreaks.map(adBreak => adBreak.every && adBreak.every + 's' || typeof adBreak.percentage === 'number' && adBreak.percentage + '%' || adBreak.position)));

    AdsController._logger.debug(AdEventType.AD_MANIFEST_LOADED, adBreaksPosition);

    this._player.dispatchEvent(new fake_event(AdEventType.AD_MANIFEST_LOADED, {
      adBreaksPosition
    }));
  };

  _proto._handleConfiguredPreroll = function _handleConfiguredPreroll() {
    const prerolls = this._configAdBreaks.filter(adBreak => adBreak.position === 0 && !adBreak.played);

    const mergedPreroll = this._mergeAdBreaks(prerolls);

    mergedPreroll && this._playAdBreak(mergedPreroll);
  };

  _proto._handleEveryAndPercentage = function _handleEveryAndPercentage() {
    this._configAdBreaks.forEach(adBreak => {
      if (this._player.duration && adBreak.every) {
        let currentPosition = 2 * adBreak.every;

        while (currentPosition <= this._player.duration) {
          this._configAdBreaks.push({
            position: currentPosition,
            ads: adBreak.ads,
            played: false
          });

          currentPosition += adBreak.every;
        }
      } else if (this._player.duration && adBreak.percentage && !adBreak.position) {
        adBreak.position = Math.floor(this._player.duration * adBreak.percentage / 100);
      }
    });
  };

  _proto._handleConfiguredMidrolls = function _handleConfiguredMidrolls() {
    this._eventManager.listen(this._player, Html5EventType.TIME_UPDATE, () => {
      if (!this._player.paused) {
        const adBreaks = this._configAdBreaks.filter(adBreak => !adBreak.played && this._player.currentTime && adBreak.position <= this._player.currentTime && adBreak.position > this._snapback);

        if (adBreaks.length) {
          const maxPosition = adBreaks[adBreaks.length - 1].position;
          const lastAdBreaks = adBreaks.filter(adBreak => adBreak.position === maxPosition);
          this._snapback = maxPosition;

          AdsController._logger.debug(`Set snapback value ${this._snapback}`);

          const mergedAdBreak = this._mergeAdBreaks(lastAdBreaks);

          mergedAdBreak && this._playAdBreak(mergedAdBreak);
        }
      }
    });

    this._eventManager.listen(this._player, Html5EventType.SEEKED, () => {
      const nextPlayedAdBreakIndex = this._configAdBreaks.findIndex(adBreak => adBreak.played && typeof this._player.currentTime === 'number' && this._player.currentTime < adBreak.position);

      if (nextPlayedAdBreakIndex > 0 && !this._configAdBreaks[nextPlayedAdBreakIndex - 1].played) {
        this._snapback = 0;

        AdsController._logger.debug('Reset snapback value');
      }
    });
  };

  _proto._playAdBreak = function _playAdBreak(adBreak) {
    const adController = this._adsPluginControllers.find(controller => !this._isBumper(controller));

    if (adController) {
      adBreak.played = true;
      this._adIsLoading = true;

      AdsController._logger.debug(`Playing ad break positioned in ${adBreak.position}`);

      adController.playAdNow(adBreak.ads);
    } else {
      AdsController._logger.warn('No ads plugin registered');
    }
  };

  _proto._onAdManifestLoaded = function _onAdManifestLoaded(event) {
    this._adBreaksLayout = Array.from(new Set(this._adBreaksLayout.concat(event.payload.adBreaksPosition))).sort();
    this._allAdsCompleted = false;
  };

  _proto._onAdBreakStart = function _onAdBreakStart(event) {
    this._adBreak = event.payload.adBreak;
  };

  _proto._onAdLoaded = function _onAdLoaded(event) {
    this._adIsLoading = false;
    this._ad = event.payload.ad;
  };

  _proto._onAdStarted = function _onAdStarted(event) {
    this._ad = event.payload.ad;
    this._adPlayed = true;
  };

  _proto._onAdBreakEnd = function _onAdBreakEnd() {
    this._adBreak = null;
    this._ad = null;
  };

  _proto._onAdsCompleted = function _onAdsCompleted() {
    if (this._adsPluginControllers.every(controller => controller.done) && this._configAdBreaks.every(adBreak => adBreak.played)) {
      this._allAdsCompleted = true;

      AdsController._logger.debug(AdEventType.ALL_ADS_COMPLETED);

      this.dispatchEvent(new fake_event(AdEventType.ALL_ADS_COMPLETED));
    }
  };

  _proto._onAdError = function _onAdError(event) {
    this._adIsLoading = false;

    if (event.payload.severity === error_Error.Severity.CRITICAL && this._adsPluginControllers.every(controller => controller.done) && this._configAdBreaks.every(adBreak => adBreak.played)) {
      this._allAdsCompleted = true;

      if (this._adPlayed) {
        AdsController._logger.debug(AdEventType.ALL_ADS_COMPLETED);

        this.dispatchEvent(new fake_event(AdEventType.ALL_ADS_COMPLETED));
      }
    }
  };

  _proto._isBumper = function _isBumper(controller) {
    return controller.name === 'bumper';
  };

  _proto._onEnded = function _onEnded() {
    if (this._adIsLoading) {
      return;
    }

    if (!(this._adBreaksLayout.includes(-1) || this._adBreaksLayout.includes('100%'))) {
      this._allAdsCompleted = true;
    } else {
      const bumperCtrl = this._adsPluginControllers.find(controller => this._isBumper(controller));

      const adCtrl = this._adsPluginControllers.find(controller => !this._isBumper(controller));

      const bumperCompletePromise = bumperCtrl ? bumperCtrl.onPlaybackEnded() : Promise.resolve(); // $FlowFixMe

      bumperCompletePromise.finally(() => {
        adCtrl && // $FlowFixMe
        adCtrl.onPlaybackEnded().finally(() => {
          this._handleConfiguredPostroll();
        });
      });
    }
  };

  _proto._onPlaybackEnded = function _onPlaybackEnded() {
    this._configAdBreaks.forEach(adBreak => adBreak.played = true);
  };

  _proto._handleConfiguredPostroll = function _handleConfiguredPostroll() {
    const postrolls = this._configAdBreaks.filter(adBreak => !adBreak.played && adBreak.position === -1);

    if (postrolls.length) {
      const mergedPostroll = this._mergeAdBreaks(postrolls);

      mergedPostroll && this._playAdBreak(mergedPostroll);
    }

    this._configAdBreaks.forEach(adBreak => adBreak.played = true);
  };

  _proto._reset = function _reset() {
    this._eventManager.removeAll();

    this._init();
  };

  _proto._mergeAdBreaks = function _mergeAdBreaks(adBreaks) {
    if (adBreaks.length) {
      adBreaks.forEach(adBreak => adBreak.played = true);
      return {
        position: adBreaks[0].position,
        ads: adBreaks.reduce((result, adBreak) => result.concat(adBreak.ads), []),
        played: false
      };
    }
  };

  ads_controller_createClass(AdsController, [{
    key: "allAdsCompleted",
    get: function () {
      return this._allAdsCompleted;
    }
  }]);

  return AdsController;
}(fake_event_target);

ads_controller_defineProperty(ads_controller_AdsController, "_logger", utils_logger('AdsController'));


// CONCATENATED MODULE: ./controller/controller-provider.js

/**
 * Controller provider
 * @classdesc
 */

let ControllerProvider = /*#__PURE__*/function () {
  /**
   * @constructor
   * @param {PluginManager} pluginManager - the plugin manager
   */
  function ControllerProvider(pluginManager) {
    this._pluginManager = pluginManager;
  }
  /**
   * Get the ads controller of the all ads plugins.
   * @returns {Array<IAdsPluginController>} - the ads controllers.
   */


  var _proto = ControllerProvider.prototype;

  _proto.getAdsControllers = function getAdsControllers() {
    //$FlowFixMe
    const adPlugins = Object.values(this._pluginManager.getAll()).filter( //$FlowFixMe
    plugin => typeof plugin.getAdsController === 'function');
    return adPlugins.map(plugin => plugin.getAdsController());
  };

  return ControllerProvider;
}();


// CONCATENATED MODULE: ./utils/resize-watcher.js
function resize_watcher_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function resize_watcher_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




/**
 * A Factory class to create a resize observer for the player.
 */

let resize_watcher_ResizeWatcher = /*#__PURE__*/function (_FakeEventTarget) {
  resize_watcher_inheritsLoose(ResizeWatcher, _FakeEventTarget);

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
    this._observer = new window.ResizeObserver(entries => {
      entries.forEach(() => {
        this._triggerResize();
      });
    });
  };

  _proto._createIframeObserver = function _createIframeObserver() {
    this._observer = new IFrameObserver(this._triggerResize.bind(this));
  };

  _proto._triggerResize = function _triggerResize() {
    this.dispatchEvent(new fake_event(CustomEventType.RESIZE));
  };

  return ResizeWatcher;
}(fake_event_target);

const IFRAME_CLASS_NAME = 'playkit-size-iframe';
/**
 * This class mimics the API of the ResizeObserver API (currently available only in Chrome).
 * Creates an empty iFrame next to the player container, which gets the dimensions of it's parent and listens to
 * the iframes resize event.
 * @param {Function} callback - the function to be called when a resize event is detected.
 */

let IFrameObserver = /*#__PURE__*/function () {
  function IFrameObserver(callback) {
    resize_watcher_defineProperty(this, "_observersStore", {});

    this._onChangeCallback = callback;
  }
  /**
   * start detecting resize event
   * @param {HTMLElement} el - The element that is going to be resized.
   * @returns {void}
   */


  var _proto2 = IFrameObserver.prototype;

  _proto2.observe = function observe(el) {
    const iframe = this._createIframe();

    const playerId = el.getAttribute('id');
    this._observersStore[playerId] = iframe;
    el.appendChild(iframe);

    iframe.contentWindow.onresize = () => this._onChangeCallback();
  }
  /**
   * remove all resize listeners
   * @returns {void}
   */
  ;

  _proto2.disconnect = function disconnect() {
    for (let target in this._observersStore) {
      const el = document.getElementById(target);
      const iframe = this._observersStore[target];
      iframe.onresize = null;

      if (el) {
        el.removeChild(iframe);
        delete this._observersStore[el.getAttribute('id')];
      }
    }
  };

  _proto2._createIframe = function _createIframe() {
    let iframe = document.createElement('iframe');
    iframe.className = IFRAME_CLASS_NAME;
    return iframe;
  };

  return IFrameObserver;
}();


// CONCATENATED MODULE: ./fullscreen/fullscreen-controller.js




/**
 * The IOS fullscreen class name.
 * @type {string}
 * @const
 */

const IN_BROWSER_FULLSCREEN = 'playkit-in-browser-fullscreen-mode';
/**
 * @class FullscreenController
 * @param {Player} player - The player.
 */

let fullscreen_controller_FullscreenController = /*#__PURE__*/function () {
  /**
   * after component mounted, set up event listeners to window fullscreen state change
   * @param {Player} player - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  function FullscreenController(player) {
    this._player = player; //flag to cover the option that inBrowserFullscreen selected and we should know if it's full screen

    this._isInBrowserFullscreen = false; //added to avoid duplicate dispatch event

    this.registerFullScreenEvents();
  }
  /**
   * if native fullscreen mode
   * @memberof FullScreenController
   * @returns {boolean} - the current fullscreen state of the document
   */


  var _proto = FullscreenController.prototype;

  _proto._isNativeFullscreen = function _isNativeFullscreen() {
    //for ios mobile checking video element
    const videoElement = typeof this._player.getVideoElement === 'function' ? this._player.getVideoElement() : null;
    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || // $FlowFixMe for ios mobile
    this._player.env.os.name === 'iOS' && !!videoElement && !!videoElement.webkitDisplayingFullscreen);
  }
  /**
   * if fullscreen mode
   * @memberof FullScreenController
   * @returns {boolean} - the current fullscreen state of the document
   */
  ;

  _proto.isFullscreen = function isFullscreen() {
    return this._isNativeFullscreen() || //indicator for manually full screen in ios - with css flag
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
      let fullScreenElement = elementId && _Dom.getElementById(elementId);
      const playbackConfig = this._player.config.playback;

      if (!fullScreenElement) {
        fullScreenElement = this._player.getView();
      }

      if (this._player.env.os.name === 'iOS') {
        if (playbackConfig.inBrowserFullscreen && playbackConfig.playsinline) {
          this._enterInBrowserFullscreen(fullScreenElement);
        } else {
          const videoElement = this._player.getVideoElement();

          if (videoElement && typeof videoElement.webkitEnterFullScreen === 'function') {
            videoElement.webkitEnterFullScreen();
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
          const videoElement = this._player.getVideoElement();

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
   * request fullscreen function to all browsers
   *
   * @param {HTMLElement} fullScreenElement - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto._requestFullscreen = function _requestFullscreen(fullScreenElement) {
    if (this._player.isInPictureInPicture()) {
      this._player.exitPictureInPicture();
    }

    if (typeof fullScreenElement.requestFullscreen === 'function') {
      fullScreenElement.requestFullscreen();
    } else if (typeof fullScreenElement.mozRequestFullScreen === 'function') {
      fullScreenElement.mozRequestFullScreen();
    } else if (typeof fullScreenElement.webkitRequestFullScreen === 'function') {
      fullScreenElement.webkitRequestFullScreen();
    } else if (typeof fullScreenElement.msRequestFullscreen === 'function') {
      fullScreenElement.msRequestFullscreen();
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
    if (typeof document.exitFullscreen === 'function') {
      document.exitFullscreen();
    } else if (typeof document.webkitExitFullscreen === 'function') {
      document.webkitExitFullscreen();
    } else if (typeof document.mozCancelFullScreen === 'function') {
      document.mozCancelFullScreen();
    } else if (typeof document.msExitFullscreen === 'function') {
      document.msExitFullscreen();
    }
  }
  /**
   * enter from ios manually method enter to fullscreen with css
   * @memberof FullScreenController
   * @param {HTMLElement} fullScreenElement - element to enter fullscreen
   * @returns {void}
   */
  ;

  _proto._enterInBrowserFullscreen = function _enterInBrowserFullscreen(fullScreenElement) {
    // add class for fullscreen
    _Dom.addClassName(fullScreenElement, IN_BROWSER_FULLSCREEN);
    this._isInBrowserFullscreen = true;

    this._fullscreenEnterHandler();

    this._player.dispatchEvent(new fake_event(this._player.Event.RESIZE));
  }
  /**
   * exit from ios manually method enter to fullscreen with css
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto._exitInBrowserFullscreen = function _exitInBrowserFullscreen() {
    //get the element with relevant css, otherwise keep the flow of exit manually
    const fullScreenElement = _Dom.getElementBySelector('.' + IN_BROWSER_FULLSCREEN);

    if (fullScreenElement) {
      _Dom.removeClassName(fullScreenElement, IN_BROWSER_FULLSCREEN);
    }

    this._isInBrowserFullscreen = false;

    this._fullscreenExitHandler();

    this._player.dispatchEvent(new fake_event(this._player.Event.RESIZE));
  }
  /**
   * set up event listeners to window fullscreen state change
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto.registerFullScreenEvents = function registerFullScreenEvents() {
    const eventManager = new event_manager();
    eventManager.listen(document, 'webkitfullscreenchange', () => this._fullscreenChangeHandler());
    eventManager.listen(document, 'mozfullscreenchange', () => this._fullscreenChangeHandler());
    eventManager.listen(document, 'fullscreenchange', () => this._fullscreenChangeHandler());
    eventManager.listen(document, 'MSFullscreenChange', () => this._fullscreenChangeHandler());

    this._handleIosFullscreen(eventManager);
  }
  /**
   * Handle iOS full screen changes
   * @param {EventManager} eventManager - event manager
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto._handleIosFullscreen = function _handleIosFullscreen(eventManager) {
    if (this._player.env.os.name === 'iOS') {
      /**
       * Attach listeners to ios full screen change.
       * @returns {void}
       */
      const attachIosFullscreenListeners = () => {
        let vidEl = this._player.getVideoElement();

        if (vidEl) {
          eventManager.listen(vidEl, 'webkitbeginfullscreen', () => this._fullscreenEnterHandler());
          eventManager.listen(vidEl, 'webkitendfullscreen', () => this._fullscreenExitHandler());
        }
      };

      if (this._player.getVideoElement()) {
        attachIosFullscreenListeners();
      } else {
        eventManager.listenOnce(this._player, this._player.Event.SOURCE_SELECTED, () => attachIosFullscreenListeners());
      }
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
    if (this.isFullscreen()) {
      this._player.dispatchEvent(new fake_event(this._player.Event.ENTER_FULLSCREEN));
    }
  }
  /**
   * fullscreen exit handler function.
   * @memberof FullScreenController
   * @returns {void}
   */
  ;

  _proto._fullscreenExitHandler = function _fullscreenExitHandler() {
    if (!this.isFullscreen()) {
      this._player.dispatchEvent(new fake_event(this._player.Event.EXIT_FULLSCREEN));
    }
  };

  return FullscreenController;
}();


// CONCATENATED MODULE: ./engines/engine-decorator.js
function engine_decorator_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function engine_decorator_createClass(Constructor, protoProps, staticProps) { if (protoProps) engine_decorator_defineProperties(Constructor.prototype, protoProps); if (staticProps) engine_decorator_defineProperties(Constructor, staticProps); return Constructor; }

function engine_decorator_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function engine_decorator_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





/**
 * Engine decorator for plugin.
 * @class EngineDecorator
 * @param {IEngineDecorator} engine - The engine to decorate.
 * @implements {IEngineDecorator}
 */

let engine_decorator_EngineDecorator = /*#__PURE__*/function (_FakeEventTarget) {
  engine_decorator_inheritsLoose(EngineDecorator, _FakeEventTarget);

  EngineDecorator.getDecorator = function getDecorator(engine, plugins) {
    const pluginWithDecorators = plugins.filter(plugin => plugin.getEngineDecorator);
    return pluginWithDecorators.length ? new this(engine, pluginWithDecorators) : null;
  };

  function EngineDecorator(engine, pluginWithDecorators) {
    var _this;

    _this = _FakeEventTarget.call(this) || this;
    _this._eventManager = new event_manager();
    _this._pluginDecorators = pluginWithDecorators.map(plugin => plugin.getEngineDecorator(engine, _FakeEventTarget.prototype.dispatchEvent.bind(engine_decorator_assertThisInitialized(_this))));
    const events = Object.values(EventType);
    events.forEach(event => _this._eventManager.listen(engine, event, e => _this.dispatchEvent(e)));
    return new Proxy(engine, {
      get: (obj, prop) => {
        if (prop === '_listeners') {
          return _this._listeners;
        }

        const activeDecorator = _this._pluginDecorators.find(decorator => prop in decorator && decorator.active); // $FlowFixMe


        return activeDecorator ? activeDecorator[prop] : obj[prop];
      },
      set: (obj, prop, value) => {
        const activeDecorator = _this._pluginDecorators.find(decorator => prop in decorator && decorator.active); // $FlowFixMe


        activeDecorator ? activeDecorator[prop] = value : obj[prop] = value;
        return true;
      }
    }) || engine_decorator_assertThisInitialized(_this);
  }

  var _proto = EngineDecorator.prototype;

  _proto.dispatchEvent = function dispatchEvent(event) {
    const activeDecorator = this._pluginDecorators.find(decorator => decorator.active);

    return activeDecorator ? activeDecorator.dispatchEvent && activeDecorator.dispatchEvent(event) : _FakeEventTarget.prototype.dispatchEvent.call(this, event);
  };

  engine_decorator_createClass(EngineDecorator, [{
    key: "active",
    get: function () {
      return true;
    }
  }]);

  return EngineDecorator;
}(fake_event_target);


// CONCATENATED MODULE: ./track/label-options.js
const LabelOptions = {
  AUDIO: 'audio',
  CAPTIONS: 'captions',
  QUALITIES: 'qualities'
};

// CONCATENATED MODULE: ./player.js
function player_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function player_createClass(Constructor, protoProps, staticProps) { if (protoProps) player_defineProperties(Constructor.prototype, protoProps); if (staticProps) player_defineProperties(Constructor, staticProps); return Constructor; }

function player_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function player_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function player_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










































/**
 * The black cover class name.
 * @type {string}
 * @const
 */

const BLACK_COVER_CLASS_NAME = 'playkit-black-cover';
/**
 * The player container class name.
 * @type {string}
 * @const
 */

const CONTAINER_CLASS_NAME = 'playkit-container';
/**
 /**
 * The player poster class name.
 * @type {string}
 * @const
 */

const POSTER_CLASS_NAME = 'playkit-poster';
/**
 * The engine class name.
 * @type {string}
 * @const
 */

const ENGINE_CLASS_NAME = 'playkit-engine';
/**
 * The text style class name.
 * @type {string}
 * @const
 */

const SUBTITLES_STYLE_CLASS_NAME = 'playkit-subtitles-style';
/**
 * The subtitles class name.
 * @type {string}
 * @const
 */

const SUBTITLES_CLASS_NAME = 'playkit-subtitles';
/**
 *  The auto string, for captions
 *  @type {string}
 *  @const
 */

const AUTO = 'auto';
/**
 *  The off string, for captions
 *  @type {string}
 *  @const
 */

const OFF = 'off';
/**
 *  The duration offset, for seeking to duration safety.
 *  @type {number}
 *  @const
 */

const DURATION_OFFSET = 0.1;
/**
 * The toggle fullscreen rendering timeout value
 * @type {number}
 * @const
 */

const REPOSITION_CUES_TIMEOUT = 1000;
/**
 * The threshold in seconds from duration that we still consider it as live edge
 * @type {number}
 * @const
 */

const LIVE_EDGE_THRESHOLD = 1;
/**
 * The HTML5 player class.
 * @classdesc
 */

let player_Player = /*#__PURE__*/function (_FakeEventTarget) {
  player_inheritsLoose(Player, _FakeEventTarget);

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

    EngineProvider.getEngines().forEach(Engine => Engine.runCapabilities());
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

    const promises = [];
    EngineProvider.getEngines().forEach(Engine => promises.push(Engine.getCapabilities()));
    return Promise.all(promises).then(arrayOfResults => {
      const playerCapabilities = {};
      arrayOfResults.forEach(res => Object.assign(playerCapabilities, res));
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

    const selectedEngine = EngineProvider.getEngines().find(Engine => Engine.id === engineType);

    if (selectedEngine) {
      selectedEngine.setCapabilities(capabilities);
    }
  }
  /**
   * The plugin manager of the player.
   * @type {PluginManager}
   * @private
   */
  ;

  /**
   * @param {Object} config - The configuration for the player instance.
   * @constructor
   */
  function Player(config = {}) {
    var _this;

    _this = _FakeEventTarget.call(this) || this;

    player_defineProperty(player_assertThisInitialized(_this), "_activeTextCues", []);

    player_defineProperty(player_assertThisInitialized(_this), "_textDisplaySettings", {});

    player_defineProperty(player_assertThisInitialized(_this), "_playbackAttributesState", {
      muted: undefined,
      volume: undefined,
      rate: undefined,
      audioLanguage: '',
      textLanguage: ''
    });

    player_defineProperty(player_assertThisInitialized(_this), "_hasUserInteracted", false);

    player_defineProperty(player_assertThisInitialized(_this), "_isOnLiveEdge", false);

    player_defineProperty(player_assertThisInitialized(_this), "_shouldLoadAfterAttach", false);

    _this._setConfigLogLevel(config);

    _this._playerId = _Generator.uniqueId(5);

    _this._prepareVideoElement();

    Player.runCapabilities();
    _this._env = env;
    _this._tracks = [];
    _this._uiComponents = [];
    _this._firstPlay = true;
    _this._repositionCuesTimeout = false;
    _this._loadingMedia = false;
    _this._loading = false;
    _this._playbackStart = false;
    _this._playbackEnded = false;
    _this._firstPlaying = false;
    _this._reset = true;
    _this._destroyed = false;
    _this._fallbackToMutedAutoPlay = false;
    _this._config = Player._defaultConfig;
    _this._eventManager = new event_manager();
    _this._posterManager = new poster_manager();
    _this._stateManager = new state_manager_StateManager(player_assertThisInitialized(_this));
    _this._pluginManager = new plugin_manager_PluginManager();
    _this._controllerProvider = new ControllerProvider(_this._pluginManager);
    _this._resizeWatcher = new resize_watcher_ResizeWatcher();
    _this._playbackMiddleware = new playback_middleware_PlaybackMiddleware();
    _this._textStyle = new text_style();

    _this._createReadyPromise();

    _this._createPlayerContainer();

    _this._appendDomElements();

    _this._externalCaptionsHandler = new external_captions_handler_ExternalCaptionsHandler(player_assertThisInitialized(_this));
    _this._fullscreenController = new fullscreen_controller_FullscreenController(player_assertThisInitialized(_this));

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

  _proto.configure = function configure(config = {}) {
    this._setConfigLogLevel(config);

    if (this._hasSources(config.sources)) {
      this._configureOrLoadPlugins(config.plugins);

      this._maybeCreateAdsController();

      this.reset();

      this._resizeWatcher.init(_Dom.getElementById(this._playerId));

      Player._logger.debug('Change source started');

      this.dispatchEvent(new fake_event(CustomEventType.CHANGE_SOURCE_STARTED));

      this._pluginManager.loadMedia();

      _Object.mergeDeep(this._config, config);
      this._reset = false;

      if (this._selectEngineByPriority()) {
        this.dispatchEvent(new fake_event(CustomEventType.SOURCE_SELECTED, {
          selectedSource: this._config.sources[this._streamType]
        }));

        this._attachMedia();

        this._handlePlaybackOptions();

        this._posterManager.setSrc(this._config.sources.poster);

        this._handlePreload();

        this._handleAutoPlay();

        Player._logger.debug('Change source ended');

        this.dispatchEvent(new fake_event(CustomEventType.CHANGE_SOURCE_ENDED));
      } else {
        Player._logger.warn('No playable engines was found to play the given sources');

        this.dispatchEvent(new fake_event(Html5EventType.ERROR, new error_Error(error_Error.Severity.CRITICAL, error_Error.Category.PLAYER, error_Error.Code.NO_ENGINE_FOUND_TO_PLAY_THE_SOURCE, 'No Engine Found To Play The Source')));
      }
    } else {
      _Object.mergeDeep(this._config, config);

      this._configureOrLoadPlugins(config.plugins);

      this._maybeCreateAdsController();
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
    const loadPlayer = () => {
      if (this._engine) {
        this._load();
      } else {
        this._eventManager.listenOnce(this, CustomEventType.SOURCE_SELECTED, () => this._load());
      }
    };

    this._playbackMiddleware.load(() => loadPlayer());
  }
  /**
   * Start/resume playback.
   * @returns {void}
   * @public
   */
  ;

  _proto.play = function play() {
    if (!this._playbackStart) {
      this._playbackStart = true;
      this.dispatchEvent(new fake_event(CustomEventType.PLAYBACK_START));

      if (!this.src) {
        this._prepareVideoElement();
      }

      this.load();
    }

    if (this._engine) {
      this._playbackMiddleware.play(() => this._play());
    } else if (this._loadingMedia) {
      // load media requested but the response is delayed
      this._playbackMiddleware.play(() => this._playAfterAsyncMiddleware());
    } else {
      this.dispatchEvent(new fake_event(Html5EventType.ERROR, new error_Error(error_Error.Severity.CRITICAL, error_Error.Category.PLAYER, error_Error.Code.NO_SOURCE_PROVIDED, 'No Source Provided')));
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
   * Resets the necessary components before change media.
   * @public
   * @returns {void}
   */
  ;

  _proto.reset = function reset() {
    if (this._reset) return;
    this.pause(); //make sure all services are reset before engine and engine attributes are reset

    this._externalCaptionsHandler.reset();

    this._posterManager.reset();

    this._pluginManager.reset();

    this._stateManager.reset();

    this._config.sources = {};
    this._activeTextCues = [];

    this._updateTextDisplay([]);

    this._tracks = [];

    this._resetStateFlags();

    this._engineType = '';
    this._streamType = '';
    this._pendingSelectedVideoTrack = null;

    if (this._engine) {
      this._engine.reset();
    }

    this._showBlackCover();

    this._reset = true;
    this.dispatchEvent(new fake_event(CustomEventType.PLAYER_RESET));

    this._eventManager.removeAll();

    this._resizeWatcher.init(_Dom.getElementById(this._playerId));

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

    this._pluginManager.destroy();

    this._stateManager.destroy();

    this._clearRepositionTimeout();

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

    this._resizeWatcher.destroy();

    if (this._el) {
      _Dom.removeChild(this._el.parentNode, this._el);
    }

    this._destroyed = true;
    this.dispatchEvent(new fake_event(CustomEventType.PLAYER_DESTROY));

    this._eventManager.destroy();
  }
  /**
   * Attach the engine's media source
   * @private
   * @returns {void}
   */
  ;

  _proto._attachMediaSource = function _attachMediaSource() {
    if (this._engine) {
      this._shouldLoadAfterAttach = true;

      this._engine.attachMediaSource();

      this._eventManager.listenOnce(this, Html5EventType.CAN_PLAY, () => {
        if (typeof this._playbackAttributesState.rate === 'number') {
          this.playbackRate = this._playbackAttributesState.rate;
        }
      });
    }
  }
  /**
   * detach the engine's media source
   * @private
   * @returns {void}
   */
  ;

  _proto._detachMediaSource = function _detachMediaSource() {
    if (this._engine) {
      this.pause();
      this.hideTextTrack();
      this._shouldLoadAfterAttach = false;

      this._createReadyPromise();

      this._engine.detachMediaSource();
    }
  }
  /**
   * Get the first buffered range of the engine.
   * @returns {TimeRanges} - First buffered range of the engine in seconds.
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
    return !!(this._config.sources.type !== MediaType.VOD && (this._config.sources.type === MediaType.LIVE || this._engine && this._engine.isLive()));
  }
  /**
   * Get whether the video is seeked to live edge in dvr
   * @returns {boolean} - Whether the video is seeked to live edge in dvr
   * @public
   */
  ;

  _proto.isOnLiveEdge = function isOnLiveEdge() {
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
    return this.isLive() && this._config.sources.dvr;
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
      case TrackType.VIDEO:
        return _Object.copyDeep(this._getVideoTracks());

      case TrackType.AUDIO:
        return _Object.copyDeep(this._getAudioTracks());

      case TrackType.TEXT:
        return _Object.copyDeep(this._getTextTracks());

      default:
        return _Object.copyDeep(this._tracks);
    }
  }
  /**
   * Get an object includes the active video/audio/text tracks
   * @return {{video: VideoTrack, audio: AudioTrack, text: TextTrack}} - The active tracks object
   */
  ;

  _proto.getActiveTracks = function getActiveTracks() {
    return _Object.copyDeep({
      video: this._getVideoTracks().find(track => track.active),
      audio: this._getAudioTracks().find(track => track.active),
      text: this._getTextTracks().find(track => track.active)
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
      if (track instanceof video_track) {
        if (this._playbackEnded) {
          this._pendingSelectedVideoTrack = track;
        } else {
          this._engine.selectVideoTrack(track);
        }
      } else if (track instanceof audio_track) {
        this._engine.selectAudioTrack(track);
      } else if (track instanceof text_track) {
        this._resetTextDisplay();

        if (track.language === OFF) {
          this.hideTextTrack();

          this._externalCaptionsHandler.hideTextTrack();

          this._playbackAttributesState.textLanguage = OFF;
        } else if (track.external && !this._config.playback.useNativeTextTrack) {
          this._engine.hideTextTrack();

          this._externalCaptionsHandler.selectTextTrack(track);
        } else {
          this._externalCaptionsHandler.hideTextTrack();

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
  ;

  _proto.hideTextTrack = function hideTextTrack() {
    if (this._engine) {
      this._engine.hideTextTrack();

      this._resetTextDisplay();

      const textTracks = this._getTextTracks();

      textTracks.map(track => track.active = false);
      const textTrack = textTracks.find(track => track.language === OFF);

      if (textTrack) {
        textTrack.active = true;
        this.dispatchEvent(new fake_event(CustomEventType.TEXT_TRACK_CHANGED, {
          selectedTextTrack: textTrack
        }));
      }
    }
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
   * update the text display settings
   * @param {Object} settings - text cue display settings
   * @public
   * @returns {void}
   */
  ;

  _proto.setTextDisplaySettings = function setTextDisplaySettings(settings) {
    this._textDisplaySettings = settings;

    this._updateCueDisplaySettings();

    for (let i = 0; i < this._activeTextCues.length; i++) {
      this._activeTextCues[i].hasBeenReset = true;
    }

    this._updateTextDisplay(this._activeTextCues);
  }
  /**
   * Sets style attributes for text tracks.
   * @param {TextStyle} style - text styling settings
   * @returns {void}
   */
  ;

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
      this.dispatchEvent(new fake_event(CustomEventType.ENTER_FULLSCREEN));
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
      this.dispatchEvent(new fake_event(CustomEventType.EXIT_FULLSCREEN));
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

    if (!this._engine.isInPictureInPicture) {
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
    if (this._engine.isInPictureInPicture) {
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
    return this._engine.isInPictureInPicture;
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
    return !!this._config.sources.vr;
  }
  /**
   * Toggling the VR mode
   * @returns {void}
   * @public
   */
  ;

  _proto.toggleVrStereoMode = function toggleVrStereoMode() {
    const vrPlugin = this._pluginManager.get('vr'); // $FlowFixMe - remove once we move plugins to kaltura player


    if (vrPlugin && typeof vrPlugin.toggleVrStereoMode === 'function') {
      //$FlowFixMe
      vrPlugin.toggleVrStereoMode();
    }
  }
  /**
   * Checking if the VR stereo mode is active.
   * @returns {boolean} - Whether is active.
   * @public
   */
  ;

  _proto.isInVrStereoMode = function isInVrStereoMode() {
    const vrPlugin = this._pluginManager.get('vr'); // $FlowFixMe - remove once we move plugins to kaltura player


    if (vrPlugin && typeof vrPlugin.isInStereoMode === 'function') {
      //$FlowFixMe
      return vrPlugin.isInStereoMode();
    }

    return false;
  } // </editor-fold>
  // <editor-fold desc="Logger API">

  /**
   * get the log level
   * @param {?string} name - the logger name
   * @returns {Object} - the log level
   */
  ;

  _proto.getLogLevel = function getLogLevel(name) {
    return logger_getLogLevel(name);
  }
  /**
   * sets the logger level
   * @param {Object} level - the log level
   * @param {?string} name - the logger name
   * @returns {void}
   */
  ;

  _proto.setLogLevel = function setLogLevel(level, name) {
    logger_setLogLevel(level, name);
  } // </editor-fold>
  // <editor-fold desc="Plugins API">

  /**
   * Gets the plugins instances.
   * @returns {Object} - Plugin name to plugin instance object map.
   */
  ;

  // </editor-fold>
  // </editor-fold>
  // <editor-fold desc="Private Methods">
  // <editor-fold desc="Playback">

  /**
   * Remove the current text track from the player view.
   * @returns {void}
   * @private
   */
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
    EngineProvider.getEngines().forEach(Engine => {
      Engine.prepareVideoElement(this._playerId);
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
    if (config.log && config.log.level && LogLevel[config.log.level]) {
      logger_setLogLevel(LogLevel[config.log.level]);
    }

    if (config.log && typeof config.log.handler === 'function') {
      setLogHandler(config.log.handler);
    }
  }
  /**
   * Check if sources has been received.
   * @param {Object} sources - sources config object.
   * @returns {boolean} - Whether sources has been received to the player.
   * @private
   */
  ;

  _proto._hasSources = function _hasSources(sources) {
    if (sources) {
      return !!Object.values(StreamType).find(type => sources[type] && sources[type].length > 0);
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
    const el = this._el = _Dom.createElement('div');
    _Dom.addClassName(el, CONTAINER_CLASS_NAME);
    _Dom.setAttribute(el, 'id', this._playerId);
    _Dom.setAttribute(el, 'tabindex', '-1');
  }
  /**
   * Appends the engine's video element to the player's div container.
   * @private
   * @returns {void}
   */
  ;

  _proto._appendEngineEl = function _appendEngineEl() {
    if (this._el) {
      const engineEl = this._engine.getVideoElement();

      const className = `${ENGINE_CLASS_NAME}`;
      _Dom.addClassName(engineEl, className);
      const classNameWithId = `${ENGINE_CLASS_NAME}-${this._engine.id}`;
      _Dom.addClassName(engineEl, classNameWithId);
      _Dom.prependTo(engineEl, this._el);
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
    // Append playkit-subtitles
    this._textDisplayEl = _Dom.createElement('div');
    _Dom.setAttribute(this._textDisplayEl, 'aria-live', 'polite');
    _Dom.addClassName(this._textDisplayEl, SUBTITLES_CLASS_NAME);
    _Dom.appendChild(this._el, this._textDisplayEl); // Append playkit-black-cover

    this._blackCoverEl = _Dom.createElement('div');
    _Dom.addClassName(this._blackCoverEl, BLACK_COVER_CLASS_NAME);
    _Dom.appendChild(this._el, this._blackCoverEl); // Append playkit-poster

    const el = this._posterManager.getElement();

    _Dom.addClassName(el, POSTER_CLASS_NAME);
    _Dom.appendChild(this._el, el);
  }
  /**
   * Configures or load the plugins defined in the configuration.
   * @param {Object} plugins - The new received plugins configuration.
   * @private
   * @returns {void}
   */
  ;

  _proto._configureOrLoadPlugins = function _configureOrLoadPlugins(plugins = {}) {
    if (plugins) {
      const middlewares = [];
      const uiComponents = [];
      Object.keys(plugins).forEach(name => {
        // If the plugin is already exists in the registry we are updating his config
        const plugin = this._pluginManager.get(name);

        if (plugin) {
          plugin.updateConfig(plugins[name]);
          this._config.plugins[name] = plugin.getConfig();
        } else {
          // We allow to load plugins as long as the player has no engine
          if (!this._engine) {
            try {
              this._pluginManager.load(name, this, plugins[name]);
            } catch (error) {
              //bounce the plugin load error up
              this.dispatchEvent(new fake_event(Html5EventType.ERROR, error));
            }

            let plugin = this._pluginManager.get(name);

            if (plugin) {
              this._config.plugins[name] = plugin.getConfig();

              if (typeof plugin.getMiddlewareImpl === 'function') {
                // push the bumper middleware to the end, to play the bumper right before the content
                let middleware = plugin.getMiddlewareImpl();

                if (middleware) {
                  plugin.name === 'bumper' ? middlewares.push(middleware) : middlewares.unshift(middleware);
                }
              }

              if (typeof plugin.getUIComponents === 'function') {
                uiComponents.push(...(plugin.getUIComponents() || []));
              }
            }
          } else {
            delete this._config.plugins[name];
          }
        }
      });
      this._uiComponents = uiComponents;
      middlewares.forEach(middleware => this._playbackMiddleware.use(middleware));
    }
  }
  /**
   * Creates the ready promise.
   * @private
   * @returns {void}
   */
  ;

  _proto._createReadyPromise = function _createReadyPromise() {
    this._readyPromise = new Promise((resolve, reject) => {
      this._eventManager.listenOnce(this, CustomEventType.TRACKS_CHANGED, () => {
        this.dispatchEvent(new fake_event(CustomEventType.MEDIA_LOADED));
        resolve();
      });

      this._eventManager.listen(this, Html5EventType.ERROR, reject);
    }).catch(() => {// silence the promise rejection, error is handled by the error event
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
    const streamPriority = this._config.playback.streamPriority;
    const preferNative = this._config.playback.preferNative;
    const sources = this._config.sources;

    for (let priority of streamPriority) {
      const engineId = typeof priority.engine === 'string' ? priority.engine.toLowerCase() : '';
      const format = typeof priority.format === 'string' ? priority.format.toLowerCase() : '';
      const Engine = EngineProvider.getEngines().find(Engine => Engine.id === engineId);

      if (Engine) {
        const formatSources = sources[format];

        if (formatSources && formatSources.length > 0) {
          const source = formatSources[0];

          if (Engine.canPlaySource(source, preferNative[format], this._config.drm)) {
            Player._logger.debug('Source selected: ', formatSources);

            this._loadEngine(Engine, source);

            this._engineType = engineId;
            this._streamType = format;
            return true;
          }
        }
      }
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
        // The restoring must be done by the engine itself not by the proxy (engine decorator is exists) to make sure the engine events fired by the engine itself.
        this._engine.restore.call(this._engine._engine || this._engine, source, this._config);
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
    const engine = Engine.createEngine(source, this._config, this._playerId);
    const plugins = Object.values(this._pluginManager.getAll());
    this._engine = engine_decorator_EngineDecorator.getDecorator(engine, plugins) || engine;
  }
  /**
   * Listen to all HTML5 defined events and trigger them on the player
   * @private
   * @returns {void}
   */
  ;

  _proto._attachMedia = function _attachMedia() {
    if (this._engine) {
      Object.keys(Html5EventType).forEach(html5Event => {
        this._eventManager.listen(this._engine, Html5EventType[html5Event], event => {
          return this.dispatchEvent(event);
        });
      });

      this._eventManager.listen(this._engine, Html5EventType.SEEKING, () => {
        if (this.isLive()) {
          this._isOnLiveEdge = this.duration && this.currentTime ? this.currentTime >= this.duration - LIVE_EDGE_THRESHOLD && !this.paused : false;
        }
      });

      this._eventManager.listen(this._engine, Html5EventType.SEEKED, () => {
        const browser = this._env.browser.name;

        if (browser === 'Edge' || browser === 'IE') {
          this._removeTextCuePatch();
        }
      });

      this._eventManager.listen(this._engine, CustomEventType.VIDEO_TRACK_CHANGED, event => {
        this._markActiveTrack(event.payload.selectedVideoTrack);

        return this.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, CustomEventType.AUDIO_TRACK_CHANGED, event => {
        this.ready().then(() => this._playbackAttributesState.audioLanguage = event.payload.selectedAudioTrack.language);

        this._markActiveTrack(event.payload.selectedAudioTrack);

        this.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, CustomEventType.TEXT_TRACK_CHANGED, event => this._onTextTrackChanged(event));

      this._eventManager.listen(this._engine, CustomEventType.TRACKS_CHANGED, event => this._onTracksChanged(event));

      this._eventManager.listen(this._engine, CustomEventType.TEXT_CUE_CHANGED, event => this._onCueChange(event));

      this._eventManager.listen(this._engine, CustomEventType.ABR_MODE_CHANGED, event => this.dispatchEvent(event));

      this._eventManager.listen(this._engine, CustomEventType.TIMED_METADATA, event => this.dispatchEvent(event));

      this._eventManager.listen(this._engine, CustomEventType.PLAY_FAILED, event => {
        this.pause();

        this._onPlayFailed(event);

        this.dispatchEvent(event);
      });

      this._eventManager.listen(this, AdEventType.AD_AUTOPLAY_FAILED, event => this._onPlayFailed(event));

      this._eventManager.listen(this._engine, CustomEventType.FPS_DROP, event => this.dispatchEvent(event));

      this._eventManager.listen(this._engine, CustomEventType.FRAG_LOADED, event => this.dispatchEvent(event));

      this._eventManager.listen(this._engine, CustomEventType.DRM_LICENSE_LOADED, event => this.dispatchEvent(event));

      this._eventManager.listen(this._engine, CustomEventType.MANIFEST_LOADED, event => this.dispatchEvent(event));

      this._eventManager.listen(this, Html5EventType.PLAY, this._onPlay.bind(this));

      this._eventManager.listen(this, Html5EventType.PAUSE, this._onPause.bind(this));

      this._eventManager.listen(this, Html5EventType.PLAYING, this._onPlaying.bind(this));

      this._eventManager.listen(this, Html5EventType.ENDED, this._onEnded.bind(this));

      this._eventManager.listen(this, CustomEventType.PLAYBACK_ENDED, this._onPlaybackEnded.bind(this));

      this._eventManager.listen(this, CustomEventType.MUTE_CHANGE, () => {
        this._playbackAttributesState.muted = this.muted;
      });

      this._eventManager.listen(this, Html5EventType.VOLUME_CHANGE, () => {
        this._playbackAttributesState.volume = this.volume;
      });

      this._eventManager.listen(this, Html5EventType.RATE_CHANGE, () => {
        this._playbackAttributesState.rate = this.playbackRate;
      });

      this._eventManager.listen(this, CustomEventType.ENTER_FULLSCREEN, () => this._resetTextCuesAndReposition());

      this._eventManager.listen(this, CustomEventType.EXIT_FULLSCREEN, () => this._resetTextCuesAndReposition());

      this._eventManager.listen(this._resizeWatcher, CustomEventType.RESIZE, event => {
        this._resetTextCuesAndReposition();

        this.dispatchEvent(event);
      });

      this._eventManager.listen(this._engine, CustomEventType.MEDIA_RECOVERED, () => this._handleRecovered());

      this._eventManager.listen(this._externalCaptionsHandler, CustomEventType.TEXT_CUE_CHANGED, event => this._onCueChange(event));

      this._eventManager.listen(this._externalCaptionsHandler, CustomEventType.TEXT_TRACK_CHANGED, event => this._onTextTrackChanged(event));

      this._eventManager.listen(this._externalCaptionsHandler, Html5EventType.ERROR, event => this.dispatchEvent(event));

      this._eventManager.listen(this, AdEventType.AD_STARTED, () => {
        if (this._firstPlay) {
          this._posterManager.hide();

          this._hideBlackCover();
        }
      });

      if (this.config.playback.playAdsWithMSE) {
        this._eventManager.listen(this, AdEventType.AD_LOADED, event => {
          if (event.payload.ad.linear) {
            this._detachMediaSource();
          }
        });

        this._eventManager.listen(this, AdEventType.AD_BREAK_END, this._attachMediaSource);

        this._eventManager.listen(this, AdEventType.AD_ERROR, this._attachMediaSource);
      }

      const rootElement = _Dom.getElementBySelector(`#${this.config.targetId}`);

      if (rootElement) {
        this._eventManager.listen(rootElement, 'click', () => {
          this._hasUserInteracted = true;
          this.dispatchEvent(new fake_event(CustomEventType.USER_GESTURE));
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
    if (this._stateManager.currentState.type === StateType.PLAYING) {
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
    this.ready().then(() => this._playbackAttributesState.textLanguage = event.payload.selectedTextTrack.language);

    this._markActiveTrack(event.payload.selectedTextTrack);

    if (this._config.playback.useNativeTextTrack) {
      this._externalCaptionsHandler.selectTextTrack(event.payload.selectedTextTrack);
    }

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

    this._updateTextDisplay([]);

    for (let i = 0; i < this._activeTextCues.length; i++) {
      this._activeTextCues[i].hasBeenReset = true;
    } // handling only the last reposition


    this._clearRepositionTimeout();

    this._repositionCuesTimeout = setTimeout(() => {
      this._updateTextDisplay(this._activeTextCues);

      this._repositionCuesTimeout = false;
    }, REPOSITION_CUES_TIMEOUT);
  };

  _proto._clearRepositionTimeout = function _clearRepositionTimeout() {
    if (this._repositionCuesTimeout) {
      clearTimeout(this._repositionCuesTimeout);
    }
  }
  /**
   * Handles the cue text removal issue, when seeking to a time without captions in IE \ edge the previous captions
   * are not removed
   * @returns {void}
   * @private
   */
  ;

  _proto._removeTextCuePatch = function _removeTextCuePatch() {
    let filteredActiveTextCues = this._activeTextCues.filter(textCue => {
      const cueEndTime = textCue._endTime;
      const cueStartTime = textCue._startTime;
      const currTime = this.currentTime;

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
      const validPlaybackRates = this._config.playback.playbackRates.filter((number, index, self) => number > 0 && number <= 16 && self.indexOf(number) === index).sort((a, b) => a - b);

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
  }
  /**
   * Handles auto play.
   * @returns {void}
   * @private
   */
  ;

  _proto._handleAutoPlay = function _handleAutoPlay() {
    if (this._config.playback.autoplay === true) {
      const allowMutedAutoPlay = this._config.playback.allowMutedAutoPlay;
      Player.getCapabilities(this.engineType).then(capabilities => {
        if (capabilities.autoplay) {
          onAutoPlay();
        } else {
          if (capabilities.mutedAutoPlay) {
            if (this.muted && !this._fallbackToMutedAutoPlay) {
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
    } else {
      this._posterManager.show();
    }

    const onAutoPlay = () => {
      Player._logger.debug('Start autoplay'); // If the previous state was fallback to muted autoplay:
      // unmute the player and clear the fallback state


      if (this._fallbackToMutedAutoPlay) {
        this._fallbackToMutedAutoPlay = false;
        this.muted = false;
      }

      this.play();
    };

    const onMutedAutoPlay = () => {
      Player._logger.debug('Start muted autoplay');

      this.play();
    };

    const onFallbackToMutedAutoPlay = () => {
      Player._logger.debug('Fallback to muted autoplay');

      this._fallbackToMutedAutoPlay = true;
      this.muted = true;
      this.dispatchEvent(new fake_event(CustomEventType.FALLBACK_TO_MUTED_AUTOPLAY));
      this.play();
    };

    const onAutoPlayFailed = () => {
      Player._logger.warn('Autoplay failed, pause player');

      this._posterManager.show();

      this.load();
      this.ready().then(() => this.pause());
      this.dispatchEvent(new fake_event(CustomEventType.AUTOPLAY_FAILED));
    };
  };

  _proto._maybeCreateAdsController = function _maybeCreateAdsController() {
    if (!this._adsController) {
      const adsPluginControllers = this._controllerProvider.getAdsControllers();

      if (adsPluginControllers.length) {
        this._adsController = new ads_controller_AdsController(this, adsPluginControllers);

        this._eventManager.listen(this._adsController, AdEventType.ALL_ADS_COMPLETED, event => {
          this.dispatchEvent(event);
        });
      }
    }
  }
  /**
   * Play after async ads
   * @private
   * @returns {void}
   */
  ;

  _proto._playAfterAsyncMiddleware = function _playAfterAsyncMiddleware() {
    if (this._engine) {
      this._play();
    } else {
      this._eventManager.listenOnce(this, CustomEventType.SOURCE_SELECTED, () => this._play());
    }
  };

  _proto._load = function _load() {
    const resetFlags = () => {
      this._loading = false;
      this._reset = false;
    };

    if (this._engine && !this.src && !this._loading) {
      this._loading = true;
      let startTime = this._config.playback.startTime;

      this._engine.load(startTime).then(data => {
        if (this.isLive() && (startTime === -1 || startTime >= this.duration)) {
          this._isOnLiveEdge = true;
        }

        try {
          this._updateTracks(data.tracks);
        } catch (e) {
          console.error(e);
        }

        this.dispatchEvent(new fake_event(CustomEventType.TRACKS_CHANGED, {
          tracks: this._tracks
        }));
        resetFlags();
      }).catch(error => {
        this.dispatchEvent(new fake_event(Html5EventType.ERROR, error));
        resetFlags();
      });
    }
  }
  /**
   * Start/resume the engine playback.
   * @private
   * @returns {void}
   */
  ;

  _proto._play = function _play() {
    if (this._shouldLoadAfterAttach) {
      this._load();

      this._shouldLoadAfterAttach = false;
    }

    this.ready().then(() => {
      if (this.isLive() && !this.isDvr()) {
        this.seekToLiveEdge();
      }

      this._engine.play();
    }).catch(error => {
      this.dispatchEvent(new fake_event(Html5EventType.ERROR, error));
    });
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
      this.dispatchEvent(new fake_event(CustomEventType.FIRST_PLAY));

      this._posterManager.hide();

      this._hideBlackCover();

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
      this.dispatchEvent(new fake_event(CustomEventType.FIRST_PLAYING));
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

      this.dispatchEvent(new fake_event(CustomEventType.AUTOPLAY_FAILED, event.payload));
    }
  }
  /**
   * Hides the black cover div.
   * @private
   * @returns {void}
   */
  ;

  _proto._hideBlackCover = function _hideBlackCover() {
    if (this._blackCoverEl) {
      this._blackCoverEl.style.visibility = 'hidden';
    }
  }
  /**
   * Shows the black cover div.
   * @private
   * @returns {void}
   */
  ;

  _proto._showBlackCover = function _showBlackCover() {
    if (this._blackCoverEl) {
      this._blackCoverEl.style.visibility = 'visible';
    }
  }
  /**
   * @function _onEnded
   * @return {void}
   * @private
   */
  ;

  _proto._onEnded = function _onEnded() {
    if (this._adsController && !this._adsController.allAdsCompleted) {
      this._eventManager.listenOnce(this._adsController, AdEventType.ALL_ADS_COMPLETED, () => {
        this.dispatchEvent(new fake_event(CustomEventType.PLAYBACK_ENDED));
      });
    } else {
      // Make sure the all ENDED listeners have been invoked
      setTimeout(() => this.dispatchEvent(new fake_event(CustomEventType.PLAYBACK_ENDED)), 0);
    }

    if (!this.paused) {
      this._pause();
    }
  }
  /**
   * @function _onPlaybackEnded
   * @return {void}
   * @private
   */
  ;

  _proto._onPlaybackEnded = function _onPlaybackEnded() {
    if (this.config.playback.loop) {
      this.currentTime = 0;
      this.play();
    } else {
      this._playbackEnded = true;
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
    this._playbackEnded = false;
    this._firstPlaying = false;
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

    this._addTextTrackOffOption();

    this._maybeSetTracksLabels();

    this._maybeAdjustTextTracksIndexes();

    this._setDefaultTracks();
  }
  /**
   * If we added external tracks to the video element, we might need to adjust the text tracks indexes between the video
   * element and the players tracks list
   * @returns {void}
   * @private
   */
  ;

  _proto._maybeAdjustTextTracksIndexes = function _maybeAdjustTextTracksIndexes() {
    if (this._config.playback.useNativeTextTrack) {
      const getNativeLanguageTrackIndex = textTrack => {
        const videoElement = this.getVideoElement();
        return videoElement ? Array.from(videoElement.textTracks).findIndex(track => track ? track.language === textTrack.language : false) : -1;
      };

      this._getTextTracks().forEach(track => track.index = getNativeLanguageTrackIndex(track));
    }
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
    return this._tracks.reduce((arr, track) => {
      if (track instanceof type) {
        arr.push(track);
      }

      return arr;
    }, []);
  }
  /**
   * Returns the text tracks.
   * @function _getTextTracks
   * @returns {Array<TextTrack>} - The text tracks.
   * @private
   */
  ;

  _proto._getTextTracks = function _getTextTracks() {
    return this._getTracksByType(text_track);
  }
  /**
   * Returns the video tracks.
   * @function _getVideoTracks
   * @returns {Array<VideoTrack>} - The video tracks.
   * @private
   */
  ;

  _proto._getVideoTracks = function _getVideoTracks() {
    return this._getTracksByType(video_track);
  }
  /**
   * Returns the audio tracks.
   * @function _getAudioTracks
   * @returns {Array<AudioTrack>} - The audio tracks.
   * @private
   */
  ;

  _proto._getAudioTracks = function _getAudioTracks() {
    return this._getTracksByType(audio_track);
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
    let tracks;

    if (track instanceof video_track) {
      tracks = this._getVideoTracks();
    } else if (track instanceof audio_track) {
      tracks = this._getAudioTracks();
    } else if (track instanceof text_track) {
      tracks = this._getTextTracks();
    }

    if (tracks) {
      for (let i = 0; i < tracks.length; i++) {
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
  ;

  _proto._updateCueDisplaySettings = function _updateCueDisplaySettings() {
    const activeCues = this._activeTextCues;
    const settings = this._textDisplaySettings;

    for (let i = 0; i < activeCues.length; i++) {
      let cue = activeCues[i];

      for (let name in settings) {
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
  ;

  _proto._updateTextDisplay = function _updateTextDisplay(cues) {
    if (!this._config.playback.useNativeTextTrack) {
      processCues(window, cues, this._textDisplayEl, this._textStyle);
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
    const textTracks = this._getTextTracks();

    if (textTracks && textTracks.length) {
      this._tracks.push(new text_track({
        active: false,
        index: textTracks.length,
        kind: 'subtitles',
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
    const activeTracks = this.getActiveTracks();
    const playbackConfig = this.config.playback;

    const offTextTrack = this._getTextTracks().find(track => text_track.langComparer(OFF, track.language));

    let currentOrConfiguredTextLang = this._playbackAttributesState.textLanguage || this._getLanguage(playbackConfig.textLanguage, activeTracks.text);

    let currentOrConfiguredAudioLang = this._playbackAttributesState.audioLanguage || playbackConfig.audioLanguage;

    this._setDefaultTrack(this._getTextTracks(), currentOrConfiguredTextLang, offTextTrack);

    this._setDefaultTrack(this._getAudioTracks(), currentOrConfiguredAudioLang, activeTracks.audio);
  }
  /**
   * Gets the track language that should be set by default.
   * @param {string} configuredLanguage - The configured language (can be also "auto").
   * @param {?TextTrack} defaultTrack - The default track.
   * @private
   * @returns {string} - The track language to set by default.
   */
  ;

  _proto._getLanguage = function _getLanguage(configuredLanguage, defaultTrack) {
    let language = configuredLanguage;

    if (language === AUTO) {
      const tracks = this._getTextTracks();

      const localeTrack = tracks.find(track => Track.langComparer(Locale.language, track.language));

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
    const track = tracks.find(track => Track.langComparer(language, track.language));

    if (track) {
      this.selectTrack(track);

      this._markActiveTrack(track);
    } else if (defaultTrack && !defaultTrack.active) {
      this.selectTrack(defaultTrack);
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
    const customLabels = this._config.customLabels;

    if (customLabels) {
      for (let callbackType in customLabels) {
        if (!Object.prototype.hasOwnProperty.call(customLabels, callbackType)) {
          return;
        }

        switch (callbackType) {
          case LabelOptions.QUALITIES:
            this._setTracksCustomLabels(this._getVideoTracks(), customLabels[callbackType]);

            break;

          case LabelOptions.AUDIO:
            this._setTracksCustomLabels(this._getAudioTracks(), customLabels[callbackType]);

            break;

          case LabelOptions.CAPTIONS:
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
    tracks.forEach(track => {
      const result = callback(_Object.copyDeep(track));

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

  player_createClass(Player, [{
    key: "buffered",
    get: function () {
      if (this._engine) {
        return this._engine.buffered;
      }

      return undefined;
    }
  }, {
    key: "stats",
    get: function () {
      let statsObject = {
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
    set: function (to) {
      if (this._engine) {
        if (_Number.isNumber(to)) {
          let boundedTo = to;

          if (to < 0) {
            boundedTo = 0;
          }

          const safeDuration = this.isLive() ? this._engine.duration : this._engine.duration - DURATION_OFFSET;

          if (boundedTo > safeDuration) {
            boundedTo = safeDuration;
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
    get: function () {
      if (this._engine) {
        return this._engine.currentTime;
      }

      return undefined;
    }
    /**
     * Get the duration in seconds.
     * @returns {?Number} - The playback duration.
     * @public
     */

  }, {
    key: "duration",
    get: function () {
      if (this._engine) {
        return this._engine.duration;
      }

      return undefined;
    }
    /**
     * Set playback volume.
     * @param {Number} vol - The volume to set.
     * @returns {void}
     * @public
     */

  }, {
    key: "volume",
    set: function (vol) {
      if (this._engine) {
        if (_Number.isFloat(vol) || vol === 0 || vol === 1) {
          let boundedVol = vol;

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
    get: function () {
      if (this._engine) {
        return this._engine.volume;
      }

      return undefined;
    }
    /**
     * Get paused state.
     * @returns {?boolean} - Whether the video is paused or not.
     * @public
     */

  }, {
    key: "paused",
    get: function () {
      if (this._engine) {
        return this._engine.paused;
      }

      return undefined;
    }
    /**
     * Get seeking state.
     * @returns {?boolean} - Whether the video is seeking or not.
     * @public
     */

  }, {
    key: "seeking",
    get: function () {
      if (this._engine) {
        return this._engine.seeking;
      }

      return undefined;
    }
    /**
     * Set playsinline attribute.
     * Relevant for iOS 10 and up:
     * Elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins.
     * @param {boolean} playsinline - Whether the video should plays in line.
     */

  }, {
    key: "playsinline",
    set: function (playsinline) {
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
    get: function () {
      if (this._engine) {
        return this._engine.playsinline;
      }

      return undefined;
    }
    /**
     * Set player muted state.
     * @param {boolean} mute - The mute value.
     * @returns {void}
     * @public
     */

  }, {
    key: "muted",
    set: function (mute) {
      if (this._engine) {
        this._engine.muted = mute;
        this.dispatchEvent(new fake_event(CustomEventType.MUTE_CHANGE, {
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
    get: function () {
      if (this._engine) {
        return this._engine.muted;
      }

      return undefined;
    }
    /**
     * Get the player source.
     * @returns {?string} - The current source of the player.
     * @public
     */

  }, {
    key: "src",
    get: function () {
      if (this._engine) {
        return this._engine.src;
      }

      return undefined;
    }
    /**
     * Get the dimensions of the player.
     * @returns {{width: number, height: number}} - The dimensions of the player.
     * @public
     */

  }, {
    key: "dimensions",
    get: function () {
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
    get: function () {
      return this._posterManager.src;
    }
    /**
     * Sets the playbackRate property.
     * @param {number} rate - The playback speed of the video.
     */

  }, {
    key: "playbackRate",
    set: function (rate) {
      if (this._engine) {
        this._engine.playbackRate = rate;
      }
    }
    /**
     * Gets the current playback speed of the video.
     * @returns {number} - The current playback speed of the video.
     */
    ,
    get: function () {
      if (this._engine) {
        return this._engine.playbackRate;
      }

      return undefined;
    }
    /**
     * Gets the possible playback speeds of the video.
     * @returns {Array<number>} - The possible playback speeds speed of the video.
     */

  }, {
    key: "playbackRates",
    get: function () {
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
    get: function () {
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
    get: function () {
      return this._engineType;
    }
    /**
     * get the stream type
     * @returns {string} - hls|dash|progressive
     */

  }, {
    key: "streamType",
    get: function () {
      return this._streamType;
    }
    /**
     * Getter for the environment of the player instance.
     * @return {Object} - The current environment object.
     * @public
     */

  }, {
    key: "env",
    get: function () {
      return this._env;
    }
    /**
     * Get the player config.
     * @returns {Object} - A copy of the player configuration.
     * @public
     */

  }, {
    key: "config",
    get: function () {
      return _Object.mergeDeep({}, this._config);
    }
  }, {
    key: "uiComponents",
    get: function () {
      return [...this._uiComponents];
    }
    /**
     * Get whether the user already interacted with the player
     * @returns {boolean} - Whether the user interacted with the player
     * @public
     */

  }, {
    key: "hasUserInteracted",
    get: function () {
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
    set: function (loading) {
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
    set: function (crossOrigin) {
      if (this._engine) {
        this._engine.crossOrigin = crossOrigin;
      }
    }
    /**
     * Get crossOrigin attribute.
     * @returns {?string} - 'anonymous' or 'use-credentials'
     */
    ,
    get: function () {
      if (this._engine) {
        return this._engine.crossOrigin;
      }

      return undefined;
    }
    /**
     * Get ended attribute state.
     * @returns {?boolean} - Whether the media has been ended.
     */

  }, {
    key: "ended",
    get: function () {
      if (this._engine) {
        return this._engine.ended;
      }

      return undefined;
    }
  }, {
    key: "textStyle",
    set: function (style) {
      if (!(style instanceof text_style)) {
        throw new Error('Style must be instance of TextStyle');
      }

      let element = _Dom.getElementBySelector(`.${this._playerId}.${SUBTITLES_STYLE_CLASS_NAME}`);

      if (!element) {
        element = _Dom.createElement('style');
        _Dom.addClassName(element, this._playerId);
        _Dom.addClassName(element, SUBTITLES_STYLE_CLASS_NAME);
        _Dom.appendChild(document.head, element);
      }

      let sheet = element.sheet;

      while (sheet.cssRules.length) {
        sheet.deleteRule(0);
      }

      try {
        this._textStyle = style;

        if (this._config.playback.useNativeTextTrack) {
          sheet.insertRule(`#${this._playerId} video.${ENGINE_CLASS_NAME}::cue { ${style.toCSS()} }`, 0);
        } else if (this._engine) {
          this._engine.resetAllCues();

          this._externalCaptionsHandler.resetAllCues();

          this._updateTextDisplay(this._activeTextCues);
        }

        this.dispatchEvent(new fake_event(CustomEventType.TEXT_STYLE_CHANGED));
      } catch (e) {
        Player._logger.error(e.message);
      }
    }
    /**
     * Gets style attributes for text tracks.
     * @returns {?TextStyle} - the current style attribute
     */
    ,
    get: function () {
      return this._textStyle.clone();
    } // </editor-fold>
    // <editor-fold desc="Ads API">

    /**
     * Gets the ads controller.
     * @returns {?AdsController} - the ads controller
     */

  }, {
    key: "ads",
    get: function () {
      return this._adsController;
    }
  }, {
    key: "plugins",
    get: function () {
      return this._pluginManager.getAll();
    }
  }, {
    key: "Event",
    get: function () {
      return EventType;
    }
    /**
     * Gets the player TextStyle.
     * @returns {TextStyle} - The TextStyle class
     * @public
     */

  }, {
    key: "TextStyle",
    get: function () {
      return text_style;
    }
    /**
     * Gets the player state types.
     * @returns {PKStateTypes} - The state types of the player.
     * @public
     */

  }, {
    key: "State",
    get: function () {
      return StateType;
    }
    /**
     * Gets the player tracks types.
     * @returns {TrackType} - The tracks types of the player.
     * @public
     */

  }, {
    key: "Track",
    get: function () {
      return TrackType;
    }
    /**
     * Gets the player log level types.
     * @returns {PKLogLevelTypes} - The log level types of the player.
     * @public
     */

  }, {
    key: "LogLevelType",
    get: function () {
      return LogLevelType;
    }
    /**
     * Gets the player log level objects.
     * @returns {PKLogLevels} - The log levels objects of the player.
     * @public
     */

  }, {
    key: "LogLevel",
    get: function () {
      return LogLevel;
    }
    /**
     * Gets the player abr modes.
     * @returns {PKAbrModes} - The abr modes of the player.
     * @public
     */

  }, {
    key: "AbrMode",
    get: function () {
      return AbrMode;
    }
    /**
     * Gets the player media types.
     * @returns {PKMediaTypes} - The media types of the player.
     * @public
     */

  }, {
    key: "MediaType",
    get: function () {
      return MediaType;
    }
    /**
     * Gets the player stream types.
     * @returns {PKStreamTypes} - The stream types of the player.
     * @public
     */

  }, {
    key: "StreamType",
    get: function () {
      return StreamType;
    }
    /**
     * Gets the player engine types.
     * @returns {PKEngineTypes} - The engine types of the player.
     * @public
     */

  }, {
    key: "EngineType",
    get: function () {
      return EngineType;
    }
    /**
     * Gets the player cors types.
     * @returns {PKCorsTypes} - The player cors types.
     * @public
     */

  }, {
    key: "CorsType",
    get: function () {
      return CorsType;
    }
    /**
     * Gets the ad break types.
     * @returns {PKAdBreakTypes} - The ad break types of the player.
     * @public
     */

  }, {
    key: "AdBreakType",
    get: function () {
      return AdBreakType;
    }
    /**
     * Gets the ad break tag types.
     * @returns {PKAdTagTypes} - The ad tag types of the player.
     * @public
     */

  }, {
    key: "AdTagType",
    get: function () {
      return AdTagType;
    }
    /**
     * Gets the player static error class.
     * @returns {PKError} - The player static error class.
     * @public
     */

  }, {
    key: "Error",
    get: function () {
      return error_Error;
    } // </editor-fold>

  }], [{
    key: "_defaultConfig",
    get: function () {
      return _Object.copyDeep(DefaultConfig);
    }
  }]);

  return Player;
}(fake_event_target);

player_defineProperty(player_Player, "_logger", utils_logger('Player'));


// CONCATENATED MODULE: ./utils/index.js


// CONCATENATED MODULE: ./mime-type.js
const MimeType = {
  HLS: ['application/x-mpegurl', 'application/vnd.apple.mpegurl'],
  DASH: ['application/dash+xml'],
  PROGRESSIVE: ['video/mp4'],
  SMOOTH_STREAMING: ['application/vnd.ms-sstr+xml']
};

// CONCATENATED MODULE: ./playkit.js





































const VERSION = "0.60.0";
const NAME = "@playkit-js/playkit-js";
/**
 * @param {Object} config - The configuration of the player
 * @returns {Player} - The player instance
 */

function playkit_loadPlayer(config) {
  return new player_Player(config || {});
} // Export the media source adapters necessary utils

 // Export the plugin framework

 // Export the tracks classes

 // Export utils library


 // Export Error class

 // Export Event system

 // Export version and player name

 // Export environment data

 // Export State class

 // Export the player capabilities

const playkit_getCapabilities = player_Player.getCapabilities;
const playkit_setCapabilities = player_Player.setCapabilities; // Export capabilities utils

 // Export engine framework

 // Export ads framework

 // Export enums

 // Export logger utils


/* harmony default export */ var playkit = __webpack_exports__["default"] = (playkit_loadPlayer);

/***/ })
/******/ ]);
});
//# sourceMappingURL=playkit.js.map