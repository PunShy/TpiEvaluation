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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/profile/profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/profile/profile.js":
/*!********************************************************!*\
  !*** ../src/assets/js/pages/custom/profile/profile.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\r\nvar KTProfile = function () {\r\n    // Base elements\r\n    var formEl;\r\n    var validator;\r\n    var avatar;\r\n\r\n    var initSubmit = function() {\r\n        var btn = formEl.find('[data-ktwizard-action=\"action-submit\"]');\r\n\r\n        btn.on('click', function(e) {\r\n            e.preventDefault();\r\n\r\n            if (validator.form()) {\r\n                // See: src\\js\\framework\\base\\app.js\r\n                KTApp.progress(btn);\r\n                //KTApp.block(formEl);\r\n\r\n                // See: http://malsup.com/jquery/form/#ajaxSubmit\r\n                formEl.ajaxSubmit({\r\n                    success: function() {\r\n                        KTApp.unprogress(btn);\r\n                        //KTApp.unblock(formEl);\r\n\r\n                        swal.fire({\r\n                            \"title\": \"\", \r\n                            \"text\": \"The application has been successfully submitted!\", \r\n                            \"type\": \"success\",\r\n                            \"confirmButtonClass\": \"btn btn-secondary\"\r\n                        });\r\n                    }\r\n                });\r\n            }\r\n        });\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            formEl = $('#kt_profile_form');\r\n\r\n            var avatar = new KTAvatar('kt_profile_avatar');\r\n            initSubmit();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {    \r\n    KTProfile.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/profile/profile.js?");

/***/ })

/******/ });