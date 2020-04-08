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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/keen-datatable/base/html-table.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/keen-datatable/base/html-table.js":
/*!***************************************************************************!*\
  !*** ../src/assets/js/pages/components/keen-datatable/base/html-table.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// Class definition\r\n\r\nvar KTDatatableHtmlTableDemo = function() {\r\n    // Private functions\r\n\r\n    // demo initializer\r\n    var demo = function() {\r\n\r\n        var datatable = $('.kt-datatable').KTDatatable({\r\n            data: {\r\n                saveState: {\r\n                    cookie: false\r\n                },\r\n            },\r\n            layout: {\r\n                scroll: true,\r\n                height: 550,\r\n                footer: false\r\n            },\r\n            search: {\r\n                input: $('#generalSearch'),\r\n            },\r\n            columns: [\r\n                {\r\n                    field: 'DepositPaid',\r\n                    type: 'number',\r\n                },\r\n                {\r\n                    field: 'OrderDate',\r\n                    type: 'date',\r\n                    format: 'YYYY-MM-DD',\r\n                }, {\r\n                    field: 'Status',\r\n                    title: 'Status',\r\n                    autoHide: false,\r\n                    // callback function support for column rendering\r\n                    template: function(row) {\r\n                        var status = {\r\n                            1: {\r\n                                'title': 'Pending',\r\n                                'class': 'kt-badge--brand'\r\n                            },\r\n                            2: {\r\n                                'title': 'Delivered',\r\n                                'class': ' kt-badge--metal'\r\n                            },\r\n                            3: {\r\n                                'title': 'Canceled',\r\n                                'class': ' kt-badge--primary'\r\n                            },\r\n                            4: {\r\n                                'title': 'Success',\r\n                                'class': ' kt-badge--success'\r\n                            },\r\n                            5: {\r\n                                'title': 'Info',\r\n                                'class': ' kt-badge--info'\r\n                            },\r\n                            6: {\r\n                                'title': 'Danger',\r\n                                'class': ' kt-badge--danger'\r\n                            },\r\n                            7: {\r\n                                'title': 'Warning',\r\n                                'class': ' kt-badge--warning'\r\n                            },\r\n                        };\r\n                        return '<span class=\"kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill\">' + status[row.Status].title + '</span>';\r\n                    },\r\n                }, {\r\n                    field: 'Type',\r\n                    title: 'Type',\r\n                    autoHide: false,\r\n                    // callback function support for column rendering\r\n                    template: function(row) {\r\n                        var status = {\r\n                            1: {\r\n                                'title': 'Online',\r\n                                'state': 'danger'\r\n                            },\r\n                            2: {\r\n                                'title': 'Retail',\r\n                                'state': 'primary'\r\n                            },\r\n                            3: {\r\n                                'title': 'Direct',\r\n                                'state': 'accent'\r\n                            },\r\n                        };\r\n                        return '<span class=\"kt-badge kt-badge--' + status[row.Type].state + ' kt-badge--dot\"></span>&nbsp;<span class=\"kt-font-bold kt-font-' + status[row.Type].state + '\">' + status[row.Type].title + '</span>';\r\n                    },\r\n                },\r\n            ],\r\n        });\r\n\r\n        $('#kt_form_status').on('change', function() {\r\n            datatable.search($(this).val().toLowerCase(), 'Status');\r\n        });\r\n\r\n        $('#kt_form_type').on('change', function() {\r\n            datatable.search($(this).val().toLowerCase(), 'Type');\r\n        });\r\n\r\n        $('#kt_form_status,#kt_form_type').selectpicker();\r\n    };\r\n\r\n    return {\r\n        // Public functions\r\n        init: function() {\r\n            // init dmeo\r\n            demo();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTDatatableHtmlTableDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/keen-datatable/base/html-table.js?");

/***/ })

/******/ });