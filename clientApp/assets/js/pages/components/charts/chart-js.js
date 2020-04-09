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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/charts/chart-js.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/charts/chart-js.js":
/*!************************************************************!*\
  !*** ../src/assets/js/pages/components/charts/chart-js.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// Class definition\r\nvar KTChartJSDemo = function() {\r\n\r\n\tvar demo1 = function() {\r\n\t\tvar barChartData = {\r\n\t\t\tlabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n\t\t\tdatasets: [{\r\n\t\t\t\tlabel: 'Dataset 1',\r\n\t\t\t\tbackgroundColor: '#6e4ff5',\r\n\t\t\t\tborderColor: '#6e4ff5',\r\n\t\t\t\tborderWidth: 1,\r\n\t\t\t\tdata: [\r\n\t\t\t\t\t54,\r\n\t\t\t\t\t47,\r\n\t\t\t\t\t62,\r\n\t\t\t\t\t84,\r\n\t\t\t\t\t79,\r\n\t\t\t\t\t61,\r\n\t\t\t\t\t24\r\n\t\t\t\t]\r\n\t\t\t}, {\r\n\t\t\t\tlabel: 'Dataset 2',\r\n\t\t\t\tbackgroundColor: '#f6aa33',\r\n\t\t\t\tborderColor: '#f6aa33',\r\n\t\t\t\tborderWidth: 1,\r\n\t\t\t\tdata: [\r\n\t\t\t\t\t42,\r\n\t\t\t\t\t52,\r\n\t\t\t\t\t84,\r\n\t\t\t\t\t67,\r\n\t\t\t\t\t32,\r\n\t\t\t\t\t69,\r\n\t\t\t\t\t58\r\n\t\t\t\t]\r\n\t\t\t}]\r\n\r\n\t\t};\r\n\r\n\t\tvar ctx = $('#kt_chartjs_1');\r\n\t\tvar myBarChart = new Chart(ctx, {\r\n\t\t\ttype: 'bar',\r\n\t\t\tdata: barChartData,\r\n\t\t\toptions: {\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tlegend: {\r\n\t\t\t\t\tposition: 'top',\r\n\t\t\t\t},\r\n\t\t\t\ttitle: {\r\n\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\ttext: 'Vertical Bar Chart'\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar demo2 = function() {\r\n\t\tvar barChartData = {\r\n\t\t\tlabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n\t\t\tdatasets: [{\r\n\t\t\t\tlabel: 'Dataset 1',\r\n\t\t\t\tbackgroundColor: '#6e4ff5',\r\n\t\t\t\tborderColor: '#6e4ff5',\r\n\t\t\t\tborderWidth: 1,\r\n\t\t\t\tdata: [\r\n\t\t\t\t\t54,\r\n\t\t\t\t\t47,\r\n\t\t\t\t\t62,\r\n\t\t\t\t\t84,\r\n\t\t\t\t\t79,\r\n\t\t\t\t\t61,\r\n\t\t\t\t\t24\r\n\t\t\t\t]\r\n\t\t\t}, {\r\n\t\t\t\tlabel: 'Dataset 2',\r\n\t\t\t\tbackgroundColor: '#f6aa33',\r\n\t\t\t\tborderColor: '#f6aa33',\r\n\t\t\t\tborderWidth: 1,\r\n\t\t\t\tdata: [\r\n\t\t\t\t\t42,\r\n\t\t\t\t\t52,\r\n\t\t\t\t\t84,\r\n\t\t\t\t\t67,\r\n\t\t\t\t\t32,\r\n\t\t\t\t\t69,\r\n\t\t\t\t\t58\r\n\t\t\t\t]\r\n\t\t\t}]\r\n\r\n\t\t};\r\n\r\n\t\tvar ctx = $('#kt_chartjs_2');\r\n\t\tvar myBarChart = new Chart(ctx, {\r\n\t\t\ttype: 'horizontalBar',\r\n\t\t\tdata: barChartData,\r\n\t\t\toptions: {\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tlegend: {\r\n\t\t\t\t\tposition: 'top',\r\n\t\t\t\t},\r\n\t\t\t\ttitle: {\r\n\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\ttext: 'Horizontal Bar Chart'\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar demo3 = function() {\r\n\t\tvar barChartData = {\r\n\t\t\tlabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n\t\t\tdatasets: [{\r\n\t\t\t\tlabel: 'Dataset 1',\r\n\t\t\t\tbackgroundColor: '#6e4ff5',\r\n\t\t\t\tborderColor: '#6e4ff5',\r\n\t\t\t\tborderWidth: 1,\r\n\t\t\t\tdata: [\r\n\t\t\t\t\t54,\r\n\t\t\t\t\t-47,\r\n\t\t\t\t\t62,\r\n\t\t\t\t\t-84,\r\n\t\t\t\t\t-79,\r\n\t\t\t\t\t61,\r\n\t\t\t\t\t24\r\n\t\t\t\t]\r\n\t\t\t}, {\r\n\t\t\t\tlabel: 'Dataset 2',\r\n\t\t\t\tbackgroundColor: '#f6aa33',\r\n\t\t\t\tborderColor: '#f6aa33',\r\n\t\t\t\tborderWidth: 1,\r\n\t\t\t\tdata: [\r\n\t\t\t\t\t42,\r\n\t\t\t\t\t52,\r\n\t\t\t\t\t84,\r\n\t\t\t\t\t-67,\r\n\t\t\t\t\t32,\r\n\t\t\t\t\t69,\r\n\t\t\t\t\t-58\r\n\t\t\t\t]\r\n\t\t\t}, {\r\n\t\t\t\tlabel: 'Dataset 3',\r\n\t\t\t\tbackgroundColor: '#fe3995',\r\n\t\t\t\tborderColor: '#fe3995',\r\n\t\t\t\tborderWidth: 1,\r\n\t\t\t\tdata: [\r\n\t\t\t\t\t-21,\r\n\t\t\t\t\t43,\r\n\t\t\t\t\t74,\r\n\t\t\t\t\t35,\r\n\t\t\t\t\t-65,\r\n\t\t\t\t\t42,\r\n\t\t\t\t\t34\r\n\t\t\t\t]\r\n\t\t\t}]\r\n\r\n\t\t};\r\n\r\n\t\tvar ctx = $('#kt_chartjs_3');\r\n\t\tvar myBarChart = new Chart(ctx, {\r\n\t\t\ttype: 'bar',\r\n\t\t\tdata: barChartData,\r\n\t\t\toptions: {\r\n\t\t\t\ttitle: {\r\n\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\ttext: 'Bar Chart - Stacked'\r\n\t\t\t\t},\r\n\t\t\t\ttooltips: {\r\n\t\t\t\t\tmode: 'index',\r\n\t\t\t\t\tintersect: false\r\n\t\t\t\t},\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tscales: {\r\n\t\t\t\t\txAxes: [{\r\n\t\t\t\t\t\tstacked: true,\r\n\t\t\t\t\t}],\r\n\t\t\t\t\tyAxes: [{\r\n\t\t\t\t\t\tstacked: true\r\n\t\t\t\t\t}]\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar demo4 = function() {\r\n\t\tvar barChartData = {\r\n\t\t\tlabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n\t\t\tdatasets: [{\r\n\t\t\t\tlabel: 'Dataset 1',\r\n\t\t\t\tbackgroundColor: '#6e4ff5',\r\n\t\t\t\tborderColor: '#6e4ff5',\r\n\t\t\t\tborderWidth: 3,\r\n\t\t\t\tfill: false,\r\n\t\t\t\tdata: [\r\n\t\t\t\t\t54,\r\n\t\t\t\t\t47,\r\n\t\t\t\t\t62,\r\n\t\t\t\t\t84,\r\n\t\t\t\t\t79,\r\n\t\t\t\t\t61,\r\n\t\t\t\t\t24\r\n\t\t\t\t]\r\n\t\t\t}, {\r\n\t\t\t\tlabel: 'Dataset 2',\r\n\t\t\t\tbackgroundColor: '#f6aa33',\r\n\t\t\t\tborderColor: '#f6aa33',\r\n\t\t\t\tborderWidth: 3,\r\n\t\t\t\tfill: false,\r\n\t\t\t\tdata: [\r\n\t\t\t\t\t42,\r\n\t\t\t\t\t52,\r\n\t\t\t\t\t84,\r\n\t\t\t\t\t67,\r\n\t\t\t\t\t32,\r\n\t\t\t\t\t69,\r\n\t\t\t\t\t58\r\n\t\t\t\t]\r\n\t\t\t}]\r\n\r\n\t\t};\r\n\r\n\t\tvar ctx = $('#kt_chartjs_4');\r\n\t\tvar myBarChart = new Chart(ctx, {\r\n\t\t\ttype: 'line',\r\n\t\t\tdata: barChartData,\r\n\t\t\toptions: {\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\ttitle: {\r\n\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\ttext: 'Line Chart'\r\n\t\t\t\t},\r\n\t\t\t\ttooltips: {\r\n\t\t\t\t\tmode: 'index',\r\n\t\t\t\t\tintersect: false,\r\n\t\t\t\t},\r\n\t\t\t\thover: {\r\n\t\t\t\t\tmode: 'nearest',\r\n\t\t\t\t\tintersect: true\r\n\t\t\t\t},\r\n\t\t\t\tscales: {\r\n\t\t\t\t\txAxes: [{\r\n\t\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\t\tscaleLabel: {\r\n\t\t\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\t\t\tlabelString: 'Month'\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}],\r\n\t\t\t\t\tyAxes: [{\r\n\t\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\t\tscaleLabel: {\r\n\t\t\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\t\t\tlabelString: 'Value'\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}]\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar demo5 = function() {\r\n\t\tvar barChartData = {\r\n\t\t\tlabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n\t\t\tdatasets: [{\r\n\t\t\t\tlabel: 'Dataset 1',\r\n\t\t\t\tbackgroundColor: '#6e4ff5',\r\n\t\t\t\tborderColor: '#6e4ff5',\r\n\t\t\t\tborderWidth: 3,\r\n\t\t\t\tfill: false,\r\n\t\t\t\tdata: [\r\n\t\t\t\t\t54,\r\n\t\t\t\t\t-47,\r\n\t\t\t\t\t62,\r\n\t\t\t\t\t-84,\r\n\t\t\t\t\t-79,\r\n\t\t\t\t\t61,\r\n\t\t\t\t\t24\r\n\t\t\t\t]\r\n\t\t\t}, {\r\n\t\t\t\tlabel: 'Dataset 2',\r\n\t\t\t\tbackgroundColor: '#f6aa33',\r\n\t\t\t\tborderColor: '#f6aa33',\r\n\t\t\t\tborderWidth: 3,\r\n\t\t\t\tborderDash: [5, 5],\r\n\t\t\t\tfill: false,\r\n\t\t\t\tdata: [\r\n\t\t\t\t\t42,\r\n\t\t\t\t\t52,\r\n\t\t\t\t\t84,\r\n\t\t\t\t\t-67,\r\n\t\t\t\t\t32,\r\n\t\t\t\t\t69,\r\n\t\t\t\t\t-58\r\n\t\t\t\t]\r\n\t\t\t}, {\r\n\t\t\t\tlabel: 'Dataset 3',\r\n\t\t\t\tbackgroundColor: '#fe3995',\r\n\t\t\t\tborderColor: '#fe3995',\r\n\t\t\t\tborderWidth: 3,\r\n\t\t\t\tfill: true,\r\n\t\t\t\tdata: [\r\n\t\t\t\t\t-21,\r\n\t\t\t\t\t43,\r\n\t\t\t\t\t74,\r\n\t\t\t\t\t35,\r\n\t\t\t\t\t-65,\r\n\t\t\t\t\t42,\r\n\t\t\t\t\t34\r\n\t\t\t\t]\r\n\t\t\t}]\r\n\r\n\t\t};\r\n\r\n\t\tvar ctx = $('#kt_chartjs_5');\r\n\t\tvar myBarChart = new Chart(ctx, {\r\n\t\t\ttype: 'line',\r\n\t\t\tdata: barChartData,\r\n\t\t\toptions: {\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\ttitle: {\r\n\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\ttext: 'Multi Line Chart'\r\n\t\t\t\t},\r\n\t\t\t\ttooltips: {\r\n\t\t\t\t\tmode: 'index',\r\n\t\t\t\t\tintersect: false,\r\n\t\t\t\t},\r\n\t\t\t\thover: {\r\n\t\t\t\t\tmode: 'nearest',\r\n\t\t\t\t\tintersect: true\r\n\t\t\t\t},\r\n\t\t\t\tscales: {\r\n\t\t\t\t\txAxes: [{\r\n\t\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\t\tscaleLabel: {\r\n\t\t\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\t\t\tlabelString: 'Month'\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}],\r\n\t\t\t\t\tyAxes: [{\r\n\t\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\t\tscaleLabel: {\r\n\t\t\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\t\t\tlabelString: 'Value'\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}]\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar demo6 = function() {\r\n\r\n\t\tvar randomScalingFactor = function() {\r\n\t\t\treturn Math.round(Math.random() * 100);\r\n\t\t};\r\n\r\n\t\tvar chartData = {\r\n\t\t\tdatasets: [{\r\n\t\t\t\tdata: [\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t],\r\n\t\t\t\tbackgroundColor: [\r\n\t\t\t\t\t'#fe3995', \r\n\t\t\t\t\t'#f6aa33', \r\n\t\t\t\t\t'#6e4ff5', \r\n\t\t\t\t\t'#2abe81', \r\n\t\t\t\t\t'#c7d2e7',\r\n\t\t\t\t],\r\n\t\t\t\tlabel: 'Dataset 1'\r\n\t\t\t}],\r\n\t\t\tlabels: [\r\n\t\t\t\t'Data 1',\r\n\t\t\t\t'Data 2',\r\n\t\t\t\t'Data 3',\r\n\t\t\t\t'Data 4',\r\n\t\t\t\t'Data 5'\r\n\t\t\t]\r\n\r\n\t\t};\r\n\r\n\t\tvar ctx = $('#kt_chartjs_6');\r\n\t\tvar myBarChart = new Chart(ctx, {\r\n\t\t\ttype: 'doughnut',\r\n\t\t\tdata: chartData,\r\n\t\t\toptions: {\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tlegend: {\r\n\t\t\t\t\tposition: 'top',\r\n\t\t\t\t},\r\n\t\t\t\ttitle: {\r\n\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\ttext: 'Donut Chart'\r\n\t\t\t\t},\r\n\t\t\t\tanimation: {\r\n\t\t\t\t\tanimateScale: true,\r\n\t\t\t\t\tanimateRotate: true\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar demo7 = function() {\r\n\r\n\t\tvar randomScalingFactor = function() {\r\n\t\t\treturn Math.round(Math.random() * 100);\r\n\t\t};\r\n\r\n\t\tvar chartData = {\r\n\t\t\tdatasets: [{\r\n\t\t\t\tdata: [\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t],\r\n\t\t\t\tbackgroundColor: [\r\n\t\t\t\t\t'#fe3995', \r\n\t\t\t\t\t'#f6aa33', \r\n\t\t\t\t\t'#6e4ff5', \r\n\t\t\t\t\t'#2abe81', \r\n\t\t\t\t\t'#c7d2e7',\r\n\t\t\t\t],\r\n\t\t\t\tlabel: 'Dataset 1'\r\n\t\t\t}],\r\n\t\t\tlabels: [\r\n\t\t\t\t'Data 1',\r\n\t\t\t\t'Data 2',\r\n\t\t\t\t'Data 3',\r\n\t\t\t\t'Data 4',\r\n\t\t\t\t'Data 5'\r\n\t\t\t]\r\n\r\n\t\t};\r\n\r\n\t\tvar ctx = $('#kt_chartjs_7');\r\n\t\tvar myBarChart = new Chart(ctx, {\r\n\t\t\ttype: 'pie',\r\n\t\t\tdata: chartData,\r\n\t\t\toptions: {\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tlegend: {\r\n\t\t\t\t\tposition: 'top',\r\n\t\t\t\t},\r\n\t\t\t\ttitle: {\r\n\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\ttext: 'Pie Chart'\r\n\t\t\t\t},\r\n\t\t\t\tanimation: {\r\n\t\t\t\t\tanimateScale: true,\r\n\t\t\t\t\tanimateRotate: true\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar demo8 = function() {\r\n\r\n\t\tvar randomScalingFactor = function() {\r\n\t\t\treturn Math.round(Math.random() * 100);\r\n\t\t};\r\n\r\n\t\tvar chartData = {\r\n\t\t\tdatasets: [{\r\n\t\t\t\tdata: [\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t\trandomScalingFactor(),\r\n\t\t\t\t],\r\n\t\t\t\tbackgroundColor: [\r\n\t\t\t\t\t'#fe3995', \r\n\t\t\t\t\t'#f6aa33', \r\n\t\t\t\t\t'#6e4ff5', \r\n\t\t\t\t\t'#2abe81', \r\n\t\t\t\t\t'#c7d2e7',\r\n\t\t\t\t],\r\n\t\t\t\tlabel: 'Dataset 1',\r\n\t\t\t\tborderWidth: [10,10,10,10,10]\r\n\t\t\t}],\r\n\t\t\tlabels: [\r\n\t\t\t\t'Data 1',\r\n\t\t\t\t'Data 2',\r\n\t\t\t\t'Data 3',\r\n\t\t\t\t'Data 4',\r\n\t\t\t\t'Data 5'\r\n\t\t\t]\r\n\t\t};\r\n\r\n\t\tvar ctx = $('#kt_chartjs_8');\r\n\t\tvar myBarChart = new Chart(ctx, {\r\n\t\t\ttype: 'doughnut',\r\n\t\t\tdata: chartData,\r\n\t\t\toptions: {\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tlegend: {\r\n\t\t\t\t\tdisplay: false,\r\n\t\t\t\t\tposition: 'top',\r\n\t\t\t\t},\r\n\t\t\t\ttitle: {\r\n\t\t\t\t\tdisplay: false,\r\n\t\t\t\t\ttext: 'Donut Chart'\r\n\t\t\t\t},\r\n\t\t\t\tanimation: {\r\n\t\t\t\t\tanimateScale: true,\r\n\t\t\t\t\tanimateRotate: true\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\treturn {\r\n\t\t// public functions\r\n\t\tinit: function() {\r\n\t\t\t// bar charts\r\n\t\t\tdemo1();\r\n\t\t\tdemo2();\r\n\t\t\tdemo3();\r\n\r\n\t\t\t// line charts\r\n\t\t\tdemo4();\r\n\t\t\tdemo5();\r\n\r\n\t\t\t// donut chart\r\n\t\t\tdemo6();\r\n\t\t\t// demo8();\r\n\r\n\t\t\t// pie chart\r\n\t\t\tdemo7();\r\n\t\t}\r\n\t};\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTChartJSDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/charts/chart-js.js?");

/***/ })

/******/ });