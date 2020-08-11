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
/******/ 	return __webpack_require__(__webpack_require__.s = 191);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./platform/plugins/social-login/resources/assets/js/social-login.js":
/*!***************************************************************************!*\
  !*** ./platform/plugins/social-login/resources/assets/js/social-login.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SocialLoginManagement = /*#__PURE__*/function () {\n  function SocialLoginManagement() {\n    _classCallCheck(this, SocialLoginManagement);\n  }\n\n  _createClass(SocialLoginManagement, [{\n    key: \"init\",\n    value: function init() {\n      $('#social_login_enable').on('change', function (event) {\n        if ($(event.currentTarget).prop('checked')) {\n          $('.wrapper-list-social-login-options').show();\n        } else {\n          $('.wrapper-list-social-login-options').hide();\n        }\n      });\n      $('.enable-social-login-option').on('change', function (event) {\n        var _self = $(event.currentTarget);\n\n        if (_self.prop('checked')) {\n          _self.closest('.wrapper-content').find('.enable-social-login-option-wrapper').show();\n\n          _self.closest('.form-group').removeClass('mb-0');\n        } else {\n          _self.closest('.wrapper-content').find('.enable-social-login-option-wrapper').hide();\n\n          _self.closest('.form-group').addClass('mb-0');\n        }\n      });\n    }\n  }]);\n\n  return SocialLoginManagement;\n}();\n\n$(document).ready(function () {\n  new SocialLoginManagement().init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybS9wbHVnaW5zL3NvY2lhbC1sb2dpbi9yZXNvdXJjZXMvYXNzZXRzL2pzL3NvY2lhbC1sb2dpbi5qcz8xMWRjIl0sIm5hbWVzIjpbIlNvY2lhbExvZ2luTWFuYWdlbWVudCIsIiQiLCJvbiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInByb3AiLCJzaG93IiwiaGlkZSIsIl9zZWxmIiwiY2xvc2VzdCIsImZpbmQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZG9jdW1lbnQiLCJyZWFkeSIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxxQjs7Ozs7OzsyQkFDSztBQUNIQyxPQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQkMsRUFBMUIsQ0FBNkIsUUFBN0IsRUFBdUMsVUFBQUMsS0FBSyxFQUFLO0FBQzdDLFlBQUlGLENBQUMsQ0FBQ0UsS0FBSyxDQUFDQyxhQUFQLENBQUQsQ0FBdUJDLElBQXZCLENBQTRCLFNBQTVCLENBQUosRUFBNEM7QUFDeENKLFdBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDSyxJQUF4QztBQUNILFNBRkQsTUFFTztBQUNITCxXQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3Q00sSUFBeEM7QUFDSDtBQUNKLE9BTkQ7QUFRQU4sT0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNDLEVBQWpDLENBQW9DLFFBQXBDLEVBQThDLFVBQUFDLEtBQUssRUFBSztBQUNwRCxZQUFJSyxLQUFLLEdBQUdQLENBQUMsQ0FBQ0UsS0FBSyxDQUFDQyxhQUFQLENBQWI7O0FBQ0EsWUFBSUksS0FBSyxDQUFDSCxJQUFOLENBQVcsU0FBWCxDQUFKLEVBQTJCO0FBQ3ZCRyxlQUFLLENBQUNDLE9BQU4sQ0FBYyxrQkFBZCxFQUFrQ0MsSUFBbEMsQ0FBdUMscUNBQXZDLEVBQThFSixJQUE5RTs7QUFDQUUsZUFBSyxDQUFDQyxPQUFOLENBQWMsYUFBZCxFQUE2QkUsV0FBN0IsQ0FBeUMsTUFBekM7QUFDSCxTQUhELE1BR087QUFDSEgsZUFBSyxDQUFDQyxPQUFOLENBQWMsa0JBQWQsRUFBa0NDLElBQWxDLENBQXVDLHFDQUF2QyxFQUE4RUgsSUFBOUU7O0FBQ0FDLGVBQUssQ0FBQ0MsT0FBTixDQUFjLGFBQWQsRUFBNkJHLFFBQTdCLENBQXNDLE1BQXRDO0FBQ0g7QUFDSixPQVREO0FBVUg7Ozs7OztBQUdMWCxDQUFDLENBQUNZLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQU07QUFDcEIsTUFBSWQscUJBQUosR0FBNEJlLElBQTVCO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL3BsYXRmb3JtL3BsdWdpbnMvc29jaWFsLWxvZ2luL3Jlc291cmNlcy9hc3NldHMvanMvc29jaWFsLWxvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU29jaWFsTG9naW5NYW5hZ2VtZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgJCgnI3NvY2lhbF9sb2dpbl9lbmFibGUnKS5vbignY2hhbmdlJywgZXZlbnQgPT4gIHtcclxuICAgICAgICAgICAgaWYgKCQoZXZlbnQuY3VycmVudFRhcmdldCkucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcud3JhcHBlci1saXN0LXNvY2lhbC1sb2dpbi1vcHRpb25zJykuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLndyYXBwZXItbGlzdC1zb2NpYWwtbG9naW4tb3B0aW9ucycpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuZW5hYmxlLXNvY2lhbC1sb2dpbi1vcHRpb24nKS5vbignY2hhbmdlJywgZXZlbnQgPT4gIHtcclxuICAgICAgICAgICAgbGV0IF9zZWxmID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKF9zZWxmLnByb3AoJ2NoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgX3NlbGYuY2xvc2VzdCgnLndyYXBwZXItY29udGVudCcpLmZpbmQoJy5lbmFibGUtc29jaWFsLWxvZ2luLW9wdGlvbi13cmFwcGVyJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgX3NlbGYuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnbWItMCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3NlbGYuY2xvc2VzdCgnLndyYXBwZXItY29udGVudCcpLmZpbmQoJy5lbmFibGUtc29jaWFsLWxvZ2luLW9wdGlvbi13cmFwcGVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgX3NlbGYuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5hZGRDbGFzcygnbWItMCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAgIG5ldyBTb2NpYWxMb2dpbk1hbmFnZW1lbnQoKS5pbml0KCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./platform/plugins/social-login/resources/assets/js/social-login.js\n");

/***/ }),

/***/ 191:
/*!*********************************************************************************!*\
  !*** multi ./platform/plugins/social-login/resources/assets/js/social-login.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jaydeep Mor\Work\Evolution IT Solutions\zhxcore\zhxcore_admin\platform\plugins\social-login\resources\assets\js\social-login.js */"./platform/plugins/social-login/resources/assets/js/social-login.js");


/***/ })

/******/ });