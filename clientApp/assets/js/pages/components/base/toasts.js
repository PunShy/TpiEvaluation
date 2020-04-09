/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/base/toasts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/base/toasts.js":
/*!********************************************************!*\
  !*** ../src/assets/js/pages/components/base/toasts.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n//\r\n// Bootstrap Toasts Demos\r\n//\r\n\r\n\r\n\r\n\r\nvar KTBootstrapToastsDemo = function () {    \r\n    //Private functions\r\n\r\n    // Demo 1\r\n    var demo1 = function () {\r\n        // Move element and append to body\r\n        $('#kt_toast_1').appendTo($('body'));\r\n\r\n        // Init toast\r\n        $('#kt_toast_1').toast({\r\n            delay: 4000\r\n        });\r\n\r\n        // Handle toggle\r\n\t\t$('#kt_toast_toggle_1').click(function() {\r\n            $('#kt_toast_1').toast('show');\r\n        });\r\n    }\r\n\r\n    // Demo 2\r\n    var demo2 = function () {\r\n\t\t// Move element and append to body\r\n        $('#kt_toast_2').appendTo($('body'));\r\n\r\n        // Init toast\r\n        $('#kt_toast_2').toast({\r\n            delay: 4000\r\n        });\r\n\r\n        // Handle toggle\r\n\t\t$('#kt_toast_toggle_2').click(function() {\r\n            $('#kt_toast_2').toast('show');\r\n        });\r\n    }\r\n\r\n    // Demo 3\r\n    var demo3 = function () {\r\n\t\t// Move element and append to body\r\n        $('#kt_toast_3').appendTo($('body'));\r\n\r\n        // Init toast\r\n        $('#kt_toast_3').toast({\r\n            delay: 14000\r\n        });\r\n\r\n        // Handle toggle\r\n\t\t$('#kt_toast_toggle_3').click(function() {\r\n            $('#kt_toast_3').toast('show');\r\n        });\r\n    }\r\n\r\n    // Demo 4\r\n    var demo4 = function () {\r\n\t\t// Move element and append to body\r\n        $('#kt_toast_4').appendTo($('body'));\r\n\r\n        // Init toast\r\n        $('#kt_toast_4').toast({\r\n            delay: 4000\r\n        });\r\n\r\n        // Handle toggle\r\n\t\t$('#kt_toast_toggle_4').click(function() {\r\n            $('#kt_toast_4').toast('show');\r\n        });\r\n    }\r\n\r\n    // Demo 5\r\n    var demo5 = function () {\r\n\t\t// Move element and append to body\r\n        $('#kt_toast_5').appendTo($('body'));\r\n\r\n        // Init toast\r\n        $('#kt_toast_5').toast({\r\n            delay: 4000\r\n        });\r\n\r\n        // Handle toggle\r\n\t\t$('#kt_toast_toggle_5').click(function() {\r\n            $('#kt_toast_5').toast('show');\r\n        });\r\n    }\r\n\r\n    // Demo 6\r\n    var demo6 = function () {\r\n\t\t// Move element and append to body\r\n        $('#kt_toast_6').appendTo($('body'));\r\n\r\n        // Init toast\r\n        $('#kt_toast_6').toast({\r\n            delay: 4000\r\n        });\r\n\r\n        // Handle toggle\r\n\t\t$('#kt_toast_toggle_6').click(function() {\r\n            $('#kt_toast_6').toast('show');\r\n        });\r\n    }\r\n\r\n    return {\r\n        // Public functions\r\n        init: function() {\r\n            demo1();\r\n            demo2();\r\n            demo3();\r\n            demo4();\r\n            demo5();\r\n            demo6();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {    \r\n    KTBootstrapToastsDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/base/toasts.js?");

/***/ })

/******/ });