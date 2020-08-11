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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 176);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./platform/plugins/audit-log/resources/assets/js/audit-log.js":
/*!*********************************************************************!*\
  !*** ./platform/plugins/audit-log/resources/assets/js/audit-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  BDashboard.loadWidget($('#widget_audit_logs').find('.widget-content'), route('audit-log.widget.activities'));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybS9wbHVnaW5zL2F1ZGl0LWxvZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2F1ZGl0LWxvZy5qcz83MGRkIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiQkRhc2hib2FyZCIsImxvYWRXaWRnZXQiLCJmaW5kIiwicm91dGUiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQU07QUFDcEJDLFlBQVUsQ0FBQ0MsVUFBWCxDQUFzQkosQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JLLElBQXhCLENBQTZCLGlCQUE3QixDQUF0QixFQUF1RUMsS0FBSyxDQUFDLDZCQUFELENBQTVFO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL3BsYXRmb3JtL3BsdWdpbnMvYXVkaXQtbG9nL3Jlc291cmNlcy9hc3NldHMvanMvYXVkaXQtbG9nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgQkRhc2hib2FyZC5sb2FkV2lkZ2V0KCQoJyN3aWRnZXRfYXVkaXRfbG9ncycpLmZpbmQoJy53aWRnZXQtY29udGVudCcpLCByb3V0ZSgnYXVkaXQtbG9nLndpZGdldC5hY3Rpdml0aWVzJykpO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./platform/plugins/audit-log/resources/assets/js/audit-log.js\n");

/***/ }),

/***/ 176:
/*!***************************************************************************!*\
  !*** multi ./platform/plugins/audit-log/resources/assets/js/audit-log.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jaydeep Mor\Work\Evolution IT Solutions\zhxcore\zhxcore_admin\platform\plugins\audit-log\resources\assets\js\audit-log.js */"./platform/plugins/audit-log/resources/assets/js/audit-log.js");


/***/ })

/******/ });