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
/******/ 	return __webpack_require__(__webpack_require__.s = 175);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./platform/plugins/analytics/resources/assets/js/analytics.js":
/*!*********************************************************************!*\
  !*** ./platform/plugins/analytics/resources/assets/js/analytics.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PluginAnalytics = /*#__PURE__*/function () {\n  function PluginAnalytics() {\n    _classCallCheck(this, PluginAnalytics);\n  }\n\n  _createClass(PluginAnalytics, null, [{\n    key: \"initCharts\",\n    value: function initCharts() {\n      var stats = $('div[data-stats]').data('stats');\n      var country_stats = $('div[data-country-stats]').data('country-stats');\n      var lang_page_views = $('div[data-lang-pageviews]').data('lang-pageviews');\n      var lang_visits = $('div[data-lang-visits]').data('lang-visits');\n      var statArray = [];\n      $.each(stats, function (index, el) {\n        statArray.push({\n          axis: el.axis,\n          visitors: el.visitors,\n          pageViews: el.pageViews\n        });\n      });\n      new Morris.Area({\n        element: 'stats-chart',\n        resize: true,\n        data: statArray,\n        xkey: 'axis',\n        ykeys: ['visitors', 'pageViews'],\n        labels: [lang_visits, lang_page_views],\n        lineColors: ['#dd4d37', '#3c8dbc'],\n        hideHover: 'auto',\n        parseTime: false\n      });\n      var visitorsData = {};\n      $.each(country_stats, function (index, el) {\n        visitorsData[el[0]] = el[1];\n      });\n      $(document).find('#world-map').vectorMap({\n        map: 'world_mill_en',\n        backgroundColor: 'transparent',\n        regionStyle: {\n          initial: {\n            fill: '#e4e4e4',\n            'fill-opacity': 1,\n            stroke: 'none',\n            'stroke-width': 0,\n            'stroke-opacity': 1\n          }\n        },\n        series: {\n          regions: [{\n            values: visitorsData,\n            scale: ['#c64333', '#dd4b39'],\n            normalizeFunction: 'polynomial'\n          }]\n        },\n        onRegionLabelShow: function onRegionLabelShow(e, el, code) {\n          if (typeof visitorsData[code] !== 'undefined') {\n            el.html(el.html() + ': ' + visitorsData[code] + ' ' + lang_visits);\n          }\n        }\n      });\n    }\n  }]);\n\n  return PluginAnalytics;\n}();\n\n$(document).ready(function () {\n  BDashboard.loadWidget($('#widget_analytics_general').find('.widget-content'), route('analytics.general'), null, function () {\n    PluginAnalytics.initCharts();\n  });\n  $(document).on('click', '#widget_analytics_general .portlet > .portlet-title .tools > a.reload', function (event) {\n    event.preventDefault();\n    BDashboard.loadWidget($('#widget_analytics_general').find('.widget-content'), route('analytics.general'), null, function () {\n      PluginAnalytics.initCharts();\n    });\n  });\n  BDashboard.loadWidget($('#widget_analytics_page').find('.widget-content'), route('analytics.page'));\n  BDashboard.loadWidget($('#widget_analytics_browser').find('.widget-content'), route('analytics.browser'));\n  BDashboard.loadWidget($('#widget_analytics_referrer').find('.widget-content'), route('analytics.referrer'));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybS9wbHVnaW5zL2FuYWx5dGljcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FuYWx5dGljcy5qcz9lYjBkIl0sIm5hbWVzIjpbIlBsdWdpbkFuYWx5dGljcyIsInN0YXRzIiwiJCIsImRhdGEiLCJjb3VudHJ5X3N0YXRzIiwibGFuZ19wYWdlX3ZpZXdzIiwibGFuZ192aXNpdHMiLCJzdGF0QXJyYXkiLCJlYWNoIiwiaW5kZXgiLCJlbCIsInB1c2giLCJheGlzIiwidmlzaXRvcnMiLCJwYWdlVmlld3MiLCJNb3JyaXMiLCJBcmVhIiwiZWxlbWVudCIsInJlc2l6ZSIsInhrZXkiLCJ5a2V5cyIsImxhYmVscyIsImxpbmVDb2xvcnMiLCJoaWRlSG92ZXIiLCJwYXJzZVRpbWUiLCJ2aXNpdG9yc0RhdGEiLCJkb2N1bWVudCIsImZpbmQiLCJ2ZWN0b3JNYXAiLCJtYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZWdpb25TdHlsZSIsImluaXRpYWwiLCJmaWxsIiwic3Ryb2tlIiwic2VyaWVzIiwicmVnaW9ucyIsInZhbHVlcyIsInNjYWxlIiwibm9ybWFsaXplRnVuY3Rpb24iLCJvblJlZ2lvbkxhYmVsU2hvdyIsImUiLCJjb2RlIiwiaHRtbCIsInJlYWR5IiwiQkRhc2hib2FyZCIsImxvYWRXaWRnZXQiLCJyb3V0ZSIsImluaXRDaGFydHMiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxlOzs7Ozs7O2lDQUNrQjtBQUNoQixVQUFJQyxLQUFLLEdBQUdDLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCQyxJQUFyQixDQUEwQixPQUExQixDQUFaO0FBQ0EsVUFBSUMsYUFBYSxHQUFHRixDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkMsSUFBN0IsQ0FBa0MsZUFBbEMsQ0FBcEI7QUFDQSxVQUFJRSxlQUFlLEdBQUdILENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCQyxJQUE5QixDQUFt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Q0MsY0FBTjtBQUNBTixjQUFVLENBQUNDLFVBQVgsQ0FBc0I1QyxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQnlCLElBQS9CLENBQW9DLGlCQUFwQyxDQUF0QixFQUE4RW9CLEtBQUssQ0FBQyxtQkFBRCxDQUFuRixFQUEwRyxJQUExRyxFQUFnSCxZQUFNO0FBQ2xIL0MscUJBQWUsQ0FBQ2dELFVBQWhCO0FBQ0gsS0FGRDtBQUdILEdBTEQ7QUFPQUgsWUFBVSxDQUFDQyxVQUFYLENBQXNCNUMsQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJ5QixJQUE1QixDQUFpQyxpQkFBakMsQ0FBdEIsRUFBMkVvQixLQUFLLENBQUMsZ0JBQUQsQ0FBaEY7QUFDQUYsWUFBVSxDQUFDQyxVQUFYLENBQXNCNUMsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0J5QixJQUEvQixDQUFvQyxpQkFBcEMsQ0FBdEIsRUFBOEVvQixLQUFLLENBQUMsbUJBQUQsQ0FBbkY7QUFDQUYsWUFBVSxDQUFDQyxVQUFYLENBQXNCNUMsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0N5QixJQUFoQyxDQUFxQyxpQkFBckMsQ0FBdEIsRUFBK0VvQixLQUFLLENBQUMsb0JBQUQsQ0FBcEY7QUFDSCxDQWZEIiwiZmlsZSI6Ii4vcGxhdGZvcm0vcGx1Z2lucy9hbmFseXRpY3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9hbmFseXRpY3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbHVnaW5BbmFseXRpY3Mge1xyXG4gICAgc3RhdGljIGluaXRDaGFydHMoKSB7XHJcbiAgICAgICAgbGV0IHN0YXRzID0gJCgnZGl2W2RhdGEtc3RhdHNdJykuZGF0YSgnc3RhdHMnKTtcclxuICAgICAgICBsZXQgY291bnRyeV9zdGF0cyA9ICQoJ2RpdltkYXRhLWNvdW50cnktc3RhdHNdJykuZGF0YSgnY291bnRyeS1zdGF0cycpO1xyXG4gICAgICAgIGxldCBsYW5nX3BhZ2Vfdmlld3MgPSAkKCdkaXZbZGF0YS1sYW5nLXBhZ2V2aWV3c10nKS5kYXRhKCdsYW5nLXBhZ2V2aWV3cycpO1xyXG4gICAgICAgIGxldCBsYW5nX3Zpc2l0cyA9ICQoJ2RpdltkYXRhLWxhbmctdmlzaXRzXScpLmRhdGEoJ2xhbmctdmlzaXRzJyk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0QXJyYXkgPSBbXTtcclxuICAgICAgICAkLmVhY2goc3RhdHMsIChpbmRleCwgZWwpID0+IHtcclxuICAgICAgICAgICAgc3RhdEFycmF5LnB1c2goe2F4aXM6IGVsLmF4aXMsIHZpc2l0b3JzOiBlbC52aXNpdG9ycywgcGFnZVZpZXdzOiBlbC5wYWdlVmlld3N9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbmV3IE1vcnJpcy5BcmVhKHtcclxuICAgICAgICAgICAgZWxlbWVudDogJ3N0YXRzLWNoYXJ0JyxcclxuICAgICAgICAgICAgcmVzaXplOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBzdGF0QXJyYXksXHJcbiAgICAgICAgICAgIHhrZXk6ICdheGlzJyxcclxuICAgICAgICAgICAgeWtleXM6IFsndmlzaXRvcnMnLCAncGFnZVZpZXdzJ10sXHJcbiAgICAgICAgICAgIGxhYmVsczogW2xhbmdfdmlzaXRzLCBsYW5nX3BhZ2Vfdmlld3NdLFxyXG4gICAgICAgICAgICBsaW5lQ29sb3JzOiBbJyNkZDRkMzcnLCAnIzNjOGRiYyddLFxyXG4gICAgICAgICAgICBoaWRlSG92ZXI6ICdhdXRvJyxcclxuICAgICAgICAgICAgcGFyc2VUaW1lOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdmlzaXRvcnNEYXRhID0ge307XHJcblxyXG4gICAgICAgICQuZWFjaChjb3VudHJ5X3N0YXRzLCAoaW5kZXgsIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIHZpc2l0b3JzRGF0YVtlbFswXV0gPSBlbFsxXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuZmluZCgnI3dvcmxkLW1hcCcpLnZlY3Rvck1hcCh7XHJcbiAgICAgICAgICAgIG1hcDogJ3dvcmxkX21pbGxfZW4nLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgIHJlZ2lvblN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogJyNlNGU0ZTQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmaWxsLW9wYWNpdHknOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdHJva2Utd2lkdGgnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdHJva2Utb3BhY2l0eSc6IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICByZWdpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogdmlzaXRvcnNEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbJyNjNjQzMzMnLCAnI2RkNGIzOSddLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiAncG9seW5vbWlhbCdcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uUmVnaW9uTGFiZWxTaG93OiAoZSwgZWwsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmlzaXRvcnNEYXRhW2NvZGVdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmh0bWwoZWwuaHRtbCgpICsgJzogJyArIHZpc2l0b3JzRGF0YVtjb2RlXSArICcgJyArIGxhbmdfdmlzaXRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICBCRGFzaGJvYXJkLmxvYWRXaWRnZXQoJCgnI3dpZGdldF9hbmFseXRpY3NfZ2VuZXJhbCcpLmZpbmQoJy53aWRnZXQtY29udGVudCcpLCByb3V0ZSgnYW5hbHl0aWNzLmdlbmVyYWwnKSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgIFBsdWdpbkFuYWx5dGljcy5pbml0Q2hhcnRzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3dpZGdldF9hbmFseXRpY3NfZ2VuZXJhbCAucG9ydGxldCA+IC5wb3J0bGV0LXRpdGxlIC50b29scyA+IGEucmVsb2FkJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgQkRhc2hib2FyZC5sb2FkV2lkZ2V0KCQoJyN3aWRnZXRfYW5hbHl0aWNzX2dlbmVyYWwnKS5maW5kKCcud2lkZ2V0LWNvbnRlbnQnKSwgcm91dGUoJ2FuYWx5dGljcy5nZW5lcmFsJyksIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgUGx1Z2luQW5hbHl0aWNzLmluaXRDaGFydHMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIEJEYXNoYm9hcmQubG9hZFdpZGdldCgkKCcjd2lkZ2V0X2FuYWx5dGljc19wYWdlJykuZmluZCgnLndpZGdldC1jb250ZW50JyksIHJvdXRlKCdhbmFseXRpY3MucGFnZScpKTtcclxuICAgIEJEYXNoYm9hcmQubG9hZFdpZGdldCgkKCcjd2lkZ2V0X2FuYWx5dGljc19icm93c2VyJykuZmluZCgnLndpZGdldC1jb250ZW50JyksIHJvdXRlKCdhbmFseXRpY3MuYnJvd3NlcicpKTtcclxuICAgIEJEYXNoYm9hcmQubG9hZFdpZGdldCgkKCcjd2lkZ2V0X2FuYWx5dGljc19yZWZlcnJlcicpLmZpbmQoJy53aWRnZXQtY29udGVudCcpLCByb3V0ZSgnYW5hbHl0aWNzLnJlZmVycmVyJykpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./platform/plugins/analytics/resources/assets/js/analytics.js\n");

/***/ }),

/***/ 175:
/*!***************************************************************************!*\
  !*** multi ./platform/plugins/analytics/resources/assets/js/analytics.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jaydeep Mor\Work\Evolution IT Solutions\zhxcore\zhxcore_admin\platform\plugins\analytics\resources\assets\js\analytics.js */"./platform/plugins/analytics/resources/assets/js/analytics.js");


/***/ })

/******/ });