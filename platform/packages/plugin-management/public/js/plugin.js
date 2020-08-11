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
/******/ 	return __webpack_require__(__webpack_require__.s = 167);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./platform/packages/plugin-management/resources/assets/js/plugin.js":
/*!***************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/plugin.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PluginManagement = /*#__PURE__*/function () {\n  function PluginManagement() {\n    _classCallCheck(this, PluginManagement);\n  }\n\n  _createClass(PluginManagement, [{\n    key: \"init\",\n    value: function init() {\n      $('#plugin-list').on('click', '.btn-trigger-change-status', function (event) {\n        event.preventDefault();\n\n        var _self = $(event.currentTarget);\n\n        _self.addClass('button-loading');\n\n        $.ajax({\n          url: route('plugins.change.status', {\n            name: _self.data('plugin')\n          }),\n          type: 'PUT',\n          success: function success(data) {\n            if (data.error) {\n              ZHXCore.showError(data.message);\n            } else {\n              ZHXCore.showSuccess(data.message);\n              $('#plugin-list #app-' + _self.data('plugin')).load(window.location.href + ' #plugin-list #app-' + _self.data('plugin') + ' > *');\n              window.location.reload();\n            }\n\n            _self.removeClass('button-loading');\n          },\n          error: function error(data) {\n            ZHXCore.handleError(data);\n\n            _self.removeClass('button-loading');\n          }\n        });\n      });\n      $(document).on('click', '.btn-trigger-remove-plugin', function (event) {\n        event.preventDefault();\n        $('#confirm-remove-plugin-button').data('plugin', $(event.currentTarget).data('plugin'));\n        $('#remove-plugin-modal').modal('show');\n      });\n      $(document).on('click', '#confirm-remove-plugin-button', function (event) {\n        event.preventDefault();\n\n        var _self = $(event.currentTarget);\n\n        _self.addClass('button-loading');\n\n        $.ajax({\n          url: route('plugins.remove', {\n            plugin: _self.data('plugin')\n          }),\n          type: 'DELETE',\n          success: function success(data) {\n            if (data.error) {\n              ZHXCore.showError(data.message);\n            } else {\n              ZHXCore.showSuccess(data.message);\n              window.location.reload();\n            }\n\n            _self.removeClass('button-loading');\n\n            $('#remove-plugin-modal').modal('hide');\n          },\n          error: function error(data) {\n            ZHXCore.handleError(data);\n\n            _self.removeClass('button-loading');\n\n            $('#remove-plugin-modal').modal('hide');\n          }\n        });\n      });\n    }\n  }]);\n\n  return PluginManagement;\n}();\n\n$(document).ready(function () {\n  new PluginManagement().init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybS9wYWNrYWdlcy9wbHVnaW4tbWFuYWdlbWVudC9yZXNvdXJjZXMvYXNzZXRzL2pzL3BsdWdpbi5qcz84MzE3Il0sIm5hbWVzIjpbIlBsdWdpbk1hbmFnZW1lbnQiLCIkIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiX3NlbGYiLCJjdXJyZW50VGFyZ2V0IiwiYWRkQ2xhc3MiLCJhamF4IiwidXJsIiwicm91dGUiLCJuYW1lIiwiZGF0YSIsInR5cGUiLCJzdWNjZXNzIiwiZXJyb3IiLCJaSFhDb3JlIiwic2hvd0Vycm9yIiwibWVzc2FnZSIsInNob3dTdWNjZXNzIiwibG9hZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlbG9hZCIsInJlbW92ZUNsYXNzIiwiaGFuZGxlRXJyb3IiLCJkb2N1bWVudCIsIm1vZGFsIiwicGx1Z2luIiwicmVhZHkiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsZ0I7Ozs7Ozs7MkJBQ0s7QUFDSEMsT0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkMsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsNEJBQTlCLEVBQTRELFVBQUFDLEtBQUssRUFBSztBQUNsRUEsYUFBSyxDQUFDQyxjQUFOOztBQUNBLFlBQUlDLEtBQUssR0FBR0osQ0FBQyxDQUFDRSxLQUFLLENBQUNHLGFBQVAsQ0FBYjs7QUFDQUQsYUFBSyxDQUFDRSxRQUFOLENBQWUsZ0JBQWY7O0FBRUFOLFNBQUMsQ0FBQ08sSUFBRixDQUFPO0FBQ0hDLGFBQUcsRUFBRUMsS0FBSyxDQUFDLHVCQUFELEVBQTBCO0FBQUNDLGdCQUFJLEVBQUVOLEtBQUssQ0FBQ08sSUFBTixDQUFXLFFBQVg7QUFBUCxXQUExQixDQURQO0FBRUhDLGNBQUksRUFBRSxLQUZIO0FBR0hDLGlCQUFPLEVBQUUsaUJBQUFGLElBQUksRUFBSztBQUNkLGdCQUFJQSxJQUFJLENBQUNHLEtBQVQsRUFBZ0I7QUFDWkMscUJBQU8sQ0FBQ0Ms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b3VyY2VzL2Fzc2V0cy9qcy9wbHVnaW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbHVnaW5NYW5hZ2VtZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgJCgnI3BsdWdpbi1saXN0Jykub24oJ2NsaWNrJywgJy5idG4tdHJpZ2dlci1jaGFuZ2Utc3RhdHVzJywgZXZlbnQgPT4gIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbGV0IF9zZWxmID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgX3NlbGYuYWRkQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiByb3V0ZSgncGx1Z2lucy5jaGFuZ2Uuc3RhdHVzJywge25hbWU6IF9zZWxmLmRhdGEoJ3BsdWdpbicpfSksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBaSFhDb3JlLnNob3dFcnJvcihkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFpIWENvcmUuc2hvd1N1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3BsdWdpbi1saXN0ICNhcHAtJyArIF9zZWxmLmRhdGEoJ3BsdWdpbicpKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgJyAjcGx1Z2luLWxpc3QgI2FwcC0nICsgX3NlbGYuZGF0YSgncGx1Z2luJykgKyAnID4gKicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9zZWxmLnJlbW92ZUNsYXNzKCdidXR0b24tbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBkYXRhID0+ICB7XHJcbiAgICAgICAgICAgICAgICAgICAgWkhYQ29yZS5oYW5kbGVFcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBfc2VsZi5yZW1vdmVDbGFzcygnYnV0dG9uLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuLXRyaWdnZXItcmVtb3ZlLXBsdWdpbicsIGV2ZW50ID0+ICB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoJyNjb25maXJtLXJlbW92ZS1wbHVnaW4tYnV0dG9uJykuZGF0YSgncGx1Z2luJywgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdwbHVnaW4nKSk7XHJcbiAgICAgICAgICAgICQoJyNyZW1vdmUtcGx1Z2luLW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNjb25maXJtLXJlbW92ZS1wbHVnaW4tYnV0dG9uJywgZXZlbnQgPT4gIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbGV0IF9zZWxmID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgX3NlbGYuYWRkQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiByb3V0ZSgncGx1Z2lucy5yZW1vdmUnLCB7cGx1Z2luOiBfc2VsZi5kYXRhKCdwbHVnaW4nKX0pLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+ICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgWkhYQ29yZS5zaG93RXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBaSFhDb3JlLnNob3dTdWNjZXNzKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYucmVtb3ZlQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3JlbW92ZS1wbHVnaW4tbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBkYXRhID0+ICB7XHJcbiAgICAgICAgICAgICAgICAgICAgWkhYQ29yZS5oYW5kbGVFcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBfc2VsZi5yZW1vdmVDbGFzcygnYnV0dG9uLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjcmVtb3ZlLXBsdWdpbi1tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICBuZXcgUGx1Z2luTWFuYWdlbWVudCgpLmluaXQoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./platform/packages/plugin-management/resources/assets/js/plugin.js\n");

/***/ }),

/***/ 167:
/*!*********************************************************************************!*\
  !*** multi ./platform/packages/plugin-management/resources/assets/js/plugin.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jaydeep Mor\Work\Evolution IT Solutions\zhxcore\zhxcore_admin\platform\packages\plugin-management\resources\assets\js\plugin.js */"./platform/packages/plugin-management/resources/assets/js/plugin.js");


/***/ })

/******/ });