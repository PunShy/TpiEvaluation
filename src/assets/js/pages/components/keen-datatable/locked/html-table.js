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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/keen-datatable/locked/html-table.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/keen-datatable/locked/html-table.js":
/*!*****************************************************************************!*\
  !*** ../src/assets/js/pages/components/keen-datatable/locked/html-table.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// Class definition\r\n\r\nvar KTDatatableHtmlTableDemo = function () {\r\n\t// Private functions\r\n\r\n\t// demo initializer\r\n\tvar demo = function () {\r\n\r\n\t\tvar datatable = $('.kt-datatable').KTDatatable({\r\n\t\t\tsearch: {\r\n\t\t\t\tinput: $('#generalSearch')\r\n\t\t\t},\r\n\t\t\tlayout: {\r\n\t\t\t\tscroll: true,\r\n\t\t\t\theight: 400\r\n\t\t\t},\r\n\t\t\tcolumns: [\r\n\t\t\t\t{\r\n\t\t\t\t\tfield: \"Deposit Paid\",\r\n\t\t\t\t\ttype: \"number\",\r\n\t\t\t\t\tlocked: {left: \"xl\"}\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\tfield: \"Order Date\",\r\n\t\t\t\t\ttype: \"date\",\r\n\t\t\t\t\tformat: \"YYYY-MM-DD\",\r\n\t\t\t\t\tlocked: {left: \"xl\"}\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t});\r\n\r\n  };\r\n\r\n\treturn {\r\n\t\t// Public functions\r\n\t\tinit: function () {\r\n\t\t\t// init dmeo\r\n\t\t\tdemo();\r\n\t\t}\r\n\t};\r\n}();\r\n\r\njQuery(document).ready(function () {\r\n\tKTDatatableHtmlTableDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/keen-datatable/locked/html-table.js?");

/***/ })

/******/ });