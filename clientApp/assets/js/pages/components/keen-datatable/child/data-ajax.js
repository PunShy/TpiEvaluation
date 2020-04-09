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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/keen-datatable/child/data-ajax.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/keen-datatable/child/data-ajax.js":
/*!***************************************************************************!*\
  !*** ../src/assets/js/pages/components/keen-datatable/child/data-ajax.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// Class definition\r\n\r\nvar KTDatatableChildRemoteDataDemo = function () {\r\n    // Private functions\r\n\r\n    // demo initializer\r\n    var demo = function () {\r\n\r\n        var datatable = $('.kt_datatable').KTDatatable({\r\n            // datasource definition\r\n            data: {\r\n                type: 'remote',\r\n                source: {\r\n                    read: {\r\n                        url: 'https://keenthemes.com/keen/tools/preview/inc/api/datatables/demos/customers.php',\r\n                    },\r\n                },\r\n                pageSize: 10, // display 20 records per page\r\n                serverPaging: true,\r\n                serverFiltering: false,\r\n                serverSorting: true,\r\n            },\r\n\r\n            // layout definition\r\n            layout: {\r\n                theme: 'default',\r\n                scroll: false,\r\n                height: null,\r\n                footer: false,\r\n            },\r\n\r\n            // column sorting\r\n            sortable: true,\r\n\r\n            pagination: true,\r\n\r\n            detail: {\r\n                title: 'Load sub table',\r\n                content: subTableInit,\r\n            },\r\n\r\n            search: {\r\n                input: $('#generalSearch'),\r\n            },\r\n\r\n            // columns definition\r\n            columns: [\r\n                {\r\n                    field: 'RecordID',\r\n                    title: '',\r\n                    sortable: false,\r\n                    width: 30,\r\n                    textAlign: 'center',\r\n                }, {\r\n                    field: 'checkbox',\r\n                    title: '',\r\n                    template: '{{RecordID}}',\r\n                    sortable: false,\r\n                    width: 20,\r\n                    textAlign: 'center',\r\n                    selector: {class: 'kt-checkbox--solid'},\r\n                }, {\r\n                    field: 'FirstName',\r\n                    title: 'First Name',\r\n                    sortable: 'asc',\r\n                }, {\r\n                    field: 'LastName',\r\n                    title: 'Last Name',\r\n                }, {\r\n                    field: 'Company',\r\n                    title: 'Company',\r\n                }, {\r\n                    field: 'Email',\r\n                    title: 'Email',\r\n                }, {\r\n                    field: 'Phone',\r\n                    title: 'Phone',\r\n                }, {\r\n                    field: 'Status',\r\n                    title: 'Status',\r\n                    // callback function support for column rendering\r\n                    template: function (row) {\r\n                        var status = {\r\n                            1: {'title': 'Pending', 'class': 'kt-badge--brand'},\r\n                            2: {'title': 'Delivered', 'class': ' kt-badge--metal'},\r\n                            3: {'title': 'Canceled', 'class': ' kt-badge--primary'},\r\n                            4: {'title': 'Success', 'class': ' kt-badge--success'},\r\n                            5: {'title': 'Info', 'class': ' kt-badge--info'},\r\n                            6: {'title': 'Danger', 'class': ' kt-badge--danger'},\r\n                            7: {'title': 'Warning', 'class': ' kt-badge--warning'},\r\n                        };\r\n                        return '<span class=\"kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill\">' + status[row.Status].title + '</span>';\r\n                    },\r\n                }, {\r\n                    field: 'Type',\r\n                    title: 'Type',\r\n                    autoHide: false,\r\n                    // callback function support for column rendering\r\n                    template: function (row) {\r\n                        var status = {\r\n                            1: {'title': 'Online', 'state': 'danger'},\r\n                            2: {'title': 'Retail', 'state': 'primary'},\r\n                            3: {'title': 'Direct', 'state': 'accent'},\r\n                        };\r\n                        return '<span class=\"kt-badge kt-badge--' + status[row.Type].state + ' kt-badge--dot\"></span>&nbsp;<span class=\"kt-font-bold kt-font-' + status[row.Type].state +\r\n                            '\">' +\r\n                            status[row.Type].title + '</span>';\r\n                    },\r\n                }, {\r\n                    field: 'Actions',\r\n                    width: 110,\r\n                    title: 'Actions',\r\n                    sortable: false,\r\n                    overflow: 'visible',\r\n                    autoHide: false,\r\n                    template: function () {\r\n                        return '\\\r\n\t\t                  <div class=\"dropdown\">\\\r\n\t\t                      <a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" data-toggle=\"dropdown\">\\\r\n\t\t                          <i class=\"la la-ellipsis-h\"></i>\\\r\n\t\t                      </a>\\\r\n\t\t                      <div class=\"dropdown-menu dropdown-menu-right\">\\\r\n\t\t                          <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a>\\\r\n\t\t                          <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a>\\\r\n\t\t                          <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-print\"></i> Generate Report</a>\\\r\n\t\t                      </div>\\\r\n\t\t                  </div>\\\r\n\t\t                  <a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" title=\"Edit details\">\\\r\n\t\t                      <i class=\"la la-edit\"></i>\\\r\n\t\t                  </a>\\\r\n\t\t                  <a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" title=\"Delete\">\\\r\n\t\t                      <i class=\"la la-trash\"></i>\\\r\n\t\t                  </a>\\\r\n\t\t              ';\r\n                    },\r\n                }],\r\n        });\r\n\r\n        $('#kt_form_status').on('change', function () {\r\n            datatable.search($(this).val().toLowerCase(), 'status');\r\n        });\r\n\r\n        $('#kt_form_type').on('change', function () {\r\n            datatable.search($(this).val().toLowerCase(), 'type');\r\n        });\r\n\r\n        $('#kt_form_status,#kt_form_type').selectpicker();\r\n\r\n        function subTableInit(e) {\r\n            $('<div/>').attr('id', 'child_data_ajax_' + e.data.RecordID).appendTo(e.detailCell).KTDatatable({\r\n                data: {\r\n                    type: 'remote',\r\n                    source: {\r\n                        read: {\r\n                            url: 'https://keenthemes.com/keen/tools/preview/inc/api/datatables/demos/orders.php',\r\n                            headers: {'x-my-custom-header': 'some value', 'x-test-header': 'the value'},\r\n                            params: {\r\n                                // custom query params\r\n                                query: {\r\n                                    generalSearch: '',\r\n                                    CustomerID: e.data.RecordID,\r\n                                },\r\n                            },\r\n                        },\r\n                    },\r\n                    pageSize: 10,\r\n                    serverPaging: true,\r\n                    serverFiltering: false,\r\n                    serverSorting: true,\r\n                },\r\n\r\n                // layout definition\r\n                layout: {\r\n                    theme: 'default',\r\n                    scroll: true,\r\n                    height: 300,\r\n                    footer: false,\r\n\r\n                    // enable/disable datatable spinner.\r\n                    spinner: {\r\n                        type: 1,\r\n                        theme: 'default',\r\n                    },\r\n                },\r\n\r\n                sortable: true,\r\n\r\n                // columns definition\r\n                columns: [\r\n                    {\r\n                        field: 'RecordID',\r\n                        title: '#',\r\n                        sortable: false,\r\n                        width: 30,\r\n                    }, {\r\n                        field: 'OrderID',\r\n                        title: 'Order ID',\r\n                        template: function (row) {\r\n                            return '<span>' + row.OrderID + ' - ' + row.ShipCountry + '</span>';\r\n                        },\r\n                    }, {\r\n                        field: 'ShipCountry',\r\n                        title: 'Country',\r\n                        width: 100,\r\n                    }, {\r\n                        field: 'ShipAddress',\r\n                        title: 'Ship Address',\r\n                    }, {\r\n                        field: 'ShipName',\r\n                        title: 'Ship Name',\r\n                    }, {\r\n                        field: 'TotalPayment',\r\n                        title: 'Payment',\r\n                        type: 'number',\r\n                    }, {\r\n                        field: 'Status',\r\n                        title: 'Status',\r\n                        // callback function support for column rendering\r\n                        template: function (row) {\r\n                            var status = {\r\n                                1: {'title': 'Pending', 'class': 'kt-badge--brand'},\r\n                                2: {'title': 'Delivered', 'class': ' kt-badge--metal'},\r\n                                3: {'title': 'Canceled', 'class': ' kt-badge--primary'},\r\n                                4: {'title': 'Success', 'class': ' kt-badge--success'},\r\n                                5: {'title': 'Info', 'class': ' kt-badge--info'},\r\n                                6: {'title': 'Danger', 'class': ' kt-badge--danger'},\r\n                                7: {'title': 'Warning', 'class': ' kt-badge--warning'},\r\n                            };\r\n                            return '<span class=\"kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill\">' + status[row.Status].title + '</span>';\r\n                        },\r\n                    }, {\r\n                        field: 'Type',\r\n                        title: 'Type',\r\n                        autoHide: false,\r\n                        // callback function support for column rendering\r\n                        template: function (row) {\r\n                            var status = {\r\n                                1: {'title': 'Online', 'state': 'danger'},\r\n                                2: {'title': 'Retail', 'state': 'primary'},\r\n                                3: {'title': 'Direct', 'state': 'accent'},\r\n                            };\r\n                            return '<span class=\"kt-badge kt-badge--' + status[row.Type].state + ' kt-badge--dot\"></span>&nbsp;<span class=\"kt-font-bold kt-font-' +\r\n                                status[row.Type].state + '\">' +\r\n                                status[row.Type].title + '</span>';\r\n                        },\r\n                    }\r\n                ],\r\n            });\r\n        }\r\n    };\r\n\r\n    return {\r\n        // Public functions\r\n        init: function () {\r\n            // init dmeo\r\n            demo();\r\n        },\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function () {\r\n    KTDatatableChildRemoteDataDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/keen-datatable/child/data-ajax.js?");

/***/ })

/******/ });