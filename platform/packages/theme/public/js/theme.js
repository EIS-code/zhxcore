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
/******/ 	return __webpack_require__(__webpack_require__.s = 173);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./platform/packages/theme/resources/assets/js/theme.js":
/*!**************************************************************!*\
  !*** ./platform/packages/theme/resources/assets/js/theme.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ThemeManagement = /*#__PURE__*/function () {\n  function ThemeManagement() {\n    _classCallCheck(this, ThemeManagement);\n  }\n\n  _createClass(ThemeManagement, [{\n    key: \"init\",\n    value: function init() {\n      $(document).on('click', '.btn-trigger-active-theme', function (event) {\n        event.preventDefault();\n\n        var _self = $(event.currentTarget);\n\n        _self.addClass('button-loading');\n\n        $.ajax({\n          url: route('theme.active'),\n          data: {\n            'theme': _self.data('theme')\n          },\n          type: 'POST',\n          success: function success(data) {\n            if (data.error) {\n              ZHXCore.showError(data.message);\n            } else {\n              ZHXCore.showSuccess(data.message);\n              window.location.reload();\n            }\n\n            _self.removeClass('button-loading');\n          },\n          error: function error(data) {\n            ZHXCore.handleError(data);\n\n            _self.removeClass('button-loading');\n          }\n        });\n      });\n      $(document).on('click', '.btn-trigger-remove-theme', function (event) {\n        event.preventDefault();\n        $('#confirm-remove-theme-button').data('theme', $(event.currentTarget).data('theme'));\n        $('#remove-theme-modal').modal('show');\n      });\n      $(document).on('click', '#confirm-remove-theme-button', function (event) {\n        event.preventDefault();\n\n        var _self = $(event.currentTarget);\n\n        _self.addClass('button-loading');\n\n        $.ajax({\n          url: route('theme.remove', {\n            theme: _self.data('theme')\n          }),\n          type: 'POST',\n          success: function success(data) {\n            if (data.error) {\n              ZHXCore.showError(data.message);\n            } else {\n              ZHXCore.showSuccess(data.message);\n              window.location.reload();\n            }\n\n            _self.removeClass('button-loading');\n\n            $('#remove-theme-modal').modal('hide');\n          },\n          error: function error(data) {\n            ZHXCore.handleError(data);\n\n            _self.removeClass('button-loading');\n\n            $('#remove-theme-modal').modal('hide');\n          }\n        });\n      });\n    }\n  }]);\n\n  return ThemeManagement;\n}();\n\n$(document).ready(function () {\n  new ThemeManagement().init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybS9wYWNrYWdlcy90aGVtZS9yZXNvdXJjZXMvYXNzZXRzL2pzL3RoZW1lLmpzP2Q0YzYiXSwibmFtZXMiOlsiVGhlbWVNYW5hZ2VtZW50IiwiJCIsImRvY3VtZW50Iiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiX3NlbGYiLCJjdXJyZW50VGFyZ2V0IiwiYWRkQ2xhc3MiLCJhamF4IiwidXJsIiwicm91dGUiLCJkYXRhIiwidHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsIlpIWENvcmUiLCJzaG93RXJyb3IiLCJtZXNzYWdlIiwic2hvd1N1Y2Nlc3MiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInJlbW92ZUNsYXNzIiwiaGFuZGxlRXJyb3IiLCJtb2RhbCIsInRoZW1lIiwicmVhZHkiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsZTs7Ozs7OzsyQkFDSztBQUNIQyxPQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QiwyQkFBeEIsRUFBcUQsVUFBQUMsS0FBSyxFQUFLO0FBQzNEQSxhQUFLLENBQUNDLGNBQU47O0FBQ0EsWUFBSUMsS0FBSyxHQUFHTCxDQUFDLENBQUNHLEtBQUssQ0FBQ0csYUFBUCxDQUFiOztBQUNBRCxhQUFLLENBQUNFLFFBQU4sQ0FBZSxnQkFBZjs7QUFFQVAsU0FBQyxDQUFDUSxJQUFGLENBQU87QUFDSEMsYUFBRyxFQUFFQyxLQUFLLENBQUMsY0FBRCxDQURQO0FBRUhDLGNBQUksRUFBRTtBQUNGLHFCQUFTTixLQUFLLENBQUNNLElBQU4sQ0FBVyxPQUFYO0FBRFAsV0FGSDtBQUtIQyxjQUFJLEVBQUUsTUFMSDtBQU1IQyxpQkFBTyxFQUFFLGlCQUFBRixJQUFJLEVBQUs7QUFDZCxnQkFBSUEsSUFBSSxDQUFDRyxLQUFULEVBQWdCO0FBQ1pDLHFCQUFPLENBQUNDLFNBQVIsQ0FBa0JMLElBQUksQ0FBQ00sT0FBdkI7QUFDSCxhQUZELE1BRU87QUFDSEYscUJBQU8sQ0FBQ0csV0FBUixDQUFvQlAsSUFBSSxDQUFDTSxPQUF6QjtBQUNBRSxvQkFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNIOztBQUNEaEIsaUJBQUssQ0FBQ2lCLFdBQU4sQ0FBa0IsZ0JBQWxCO0FBQ0gsV0FkRTtBQWVIUixlQUFLLEVBQUUsZUFBQUgsSUFBSSxFQUFLO0FBQ1pJLG1CQUFPLENBQUNRLFdBQVIsQ0FBb0JaLElBQXBCOztBQUNBTixpQkFBSyxDQUFDaUIsV0FBTixDQUFrQixnQkFBbEI7QUFDSDtBQWxCRSxTQUFQO0FBb0JILE9BekJEO0FBMkJBdEIsT0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsMkJBQXhCLEVBQXFELFVBQUFDLEtBQUssRUFBSztBQUMzREEsYUFBSyxDQUFDQyxjQUFOO0FBQ0FKLFNBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDVyxJQUFsQyxDQUF1QyxPQUF2QyxFQUFnRFgsQ0FBQyxDQUFDRyxLQUFLLENBQUNHLGFBQVAsQ0FBRCxDQUF1QkssSUFBdkIsQ0FBNEIsT0FBNUIsQ0FBaEQ7QUFDQVgsU0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJ3QixLQUF6QixDQUErQixNQUEvQjtBQUNILE9BSkQ7QUFNQXhCLE9BQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLDhCQUF4QixFQUF3RCxVQUFBQyxLQUFLLEVBQUs7QUFDOURBLGFBQUssQ0FBQ0MsY0FBTjs7QUFDQSxZQUFJQyxLQUFLLEdBQUdMLENBQUMsQ0FBQ0csS0FBSyxDQUFDRyxhQUFQLENBQWI7O0FBQ0FELGFBQUssQ0FBQ0UsUUFBTixDQUFlLGdCQUFmOztBQUVBUCxTQUFDLENBQUNRLElBQUYsQ0FBTztBQUNIQyxhQUFHLEVBQUVDLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQUNlLGlCQUFLLEVBQUVwQixLQUFLLENBQUNNLElBQU4sQ0FBVyxPQUFYO0FBQVIsV0FBakIsQ0FEUDtBQUVIQyxjQUFJLEVBQUUsTUFGSDtBQUdIQyxpQkFBTyxFQUFFLGlCQUFBRixJQUFJLEVBQUs7QUFDZCxnQkFBSUEsSUFBSSxDQUFDRyxLQUFULEVBQWdCO0FBQ1pDLHFCQUFPLENBQUNDLFNBQVIsQ0FBa0JMLElBQUksQ0FBQ00sT0FBdkI7QUFDSCxhQUZELE1BRU87QUFDSEYscUJBQU8sQ0FBQ0csV0FBUixDQUFvQlAsSUFBSSxDQUFDTSxPQUF6QjtBQUNBRSxvQkFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNIOztBQUNEaEIsaUJBQUssQ0FBQ2lCLFdBQU4sQ0FBa0IsZ0JBQWxCOztBQUNBdEIsYUFBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJ3QixLQUF6QixDQUErQixNQUEvQjtBQUNILFdBWkU7QUFhSFYsZUFBSyxFQUFFLGVBQUFILElBQUksRUFBSztBQUNaSSxtQkFBTyxDQUFDUSxXQUFSLENBQW9CWixJQUFwQjs7QUFDQU4saUJBQUssQ0FBQ2lCLFdBQU4sQ0FBa0IsZ0JBQWxCOztBQUNBdEIsYUFBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJ3QixLQUF6QixDQUErQixNQUEvQjtBQUNIO0FBakJFLFNBQVA7QUFtQkgsT0F4QkQ7QUF5Qkg7Ozs7OztBQUdMeEIsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWXlCLEtBQVosQ0FBa0IsWUFBTTtBQUNwQixNQUFJM0IsZUFBSixHQUFzQjRCLElBQXRCO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL3BsYXRmb3JtL3BhY2thZ2VzL3RoZW1lL3Jlc291cmNlcy9hc3NldHMvanMvdGhlbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUaGVtZU1hbmFnZW1lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0bi10cmlnZ2VyLWFjdGl2ZS10aGVtZScsIGV2ZW50ID0+ICB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCBfc2VsZiA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIF9zZWxmLmFkZENsYXNzKCdidXR0b24tbG9hZGluZycpO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogcm91dGUoJ3RoZW1lLmFjdGl2ZScpLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICd0aGVtZSc6IF9zZWxmLmRhdGEoJ3RoZW1lJylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+ICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgWkhYQ29yZS5zaG93RXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBaSFhDb3JlLnNob3dTdWNjZXNzKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYucmVtb3ZlQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGRhdGEgPT4gIHtcclxuICAgICAgICAgICAgICAgICAgICBaSFhDb3JlLmhhbmRsZUVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9zZWxmLnJlbW92ZUNsYXNzKCdidXR0b24tbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG4tdHJpZ2dlci1yZW1vdmUtdGhlbWUnLCBldmVudCA9PiAge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcjY29uZmlybS1yZW1vdmUtdGhlbWUtYnV0dG9uJykuZGF0YSgndGhlbWUnLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3RoZW1lJykpO1xyXG4gICAgICAgICAgICAkKCcjcmVtb3ZlLXRoZW1lLW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNjb25maXJtLXJlbW92ZS10aGVtZS1idXR0b24nLCBldmVudCA9PiAge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgX3NlbGYgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBfc2VsZi5hZGRDbGFzcygnYnV0dG9uLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHJvdXRlKCd0aGVtZS5yZW1vdmUnLCB7dGhlbWU6IF9zZWxmLmRhdGEoJ3RoZW1lJyl9KSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBaSFhDb3JlLnNob3dFcnJvcihkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFpIWENvcmUuc2hvd1N1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfc2VsZi5yZW1vdmVDbGFzcygnYnV0dG9uLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjcmVtb3ZlLXRoZW1lLW1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZGF0YSA9PiAge1xyXG4gICAgICAgICAgICAgICAgICAgIFpIWENvcmUuaGFuZGxlRXJyb3IoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYucmVtb3ZlQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3JlbW92ZS10aGVtZS1tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICBuZXcgVGhlbWVNYW5hZ2VtZW50KCkuaW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./platform/packages/theme/resources/assets/js/theme.js\n");

/***/ }),

/***/ 173:
/*!********************************************************************!*\
  !*** multi ./platform/packages/theme/resources/assets/js/theme.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jaydeep Mor\Work\Evolution IT Solutions\zhxcore\zhxcore_admin\platform\packages\theme\resources\assets\js\theme.js */"./platform/packages/theme/resources/assets/js/theme.js");


/***/ })

/******/ });