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
/******/ 	return __webpack_require__(__webpack_require__.s = 192);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./platform/plugins/translation/resources/assets/js/translation.js":
/*!*************************************************************************!*\
  !*** ./platform/plugins/translation/resources/assets/js/translation.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("jQuery(document).ready(function ($) {\n  $('.editable').editable().on('hidden', function (e, reason) {\n    var locale = $(event.currentTarget).data('locale');\n\n    if (reason === 'save') {\n      $(event.currentTarget).removeClass('status-0').addClass('status-1');\n    }\n\n    if (reason === 'save' || reason === 'nochange') {\n      var $next = $(event.currentTarget).closest('tr').next().find('.editable.locale-' + locale);\n      setTimeout(function () {\n        $next.editable('show');\n      }, 300);\n    }\n  });\n  $('.group-select').on('change', function (event) {\n    var group = $(event.currentTarget).val();\n\n    if (group) {\n      window.location.href = route('translations.index') + '?group=' + encodeURI($(event.currentTarget).val());\n    } else {\n      window.location.href = route('translations.index');\n    }\n  });\n  $('a.delete-key').click(function (event) {\n    event.preventDefault();\n    var row = $(event.currentTarget).closest('tr');\n    var url = $(event.currentTarget).attr('href');\n    var id = row.attr('id');\n    $.post(url, {\n      id: id\n    }, function () {\n      row.remove();\n    });\n  });\n  $('.box-translation').on('click', '.button-import-groups', function (event) {\n    event.preventDefault();\n\n    var _self = $(event.currentTarget);\n\n    _self.addClass('button-loading');\n\n    var $form = _self.closest('form');\n\n    $.ajax({\n      url: $form.prop('action'),\n      type: 'POST',\n      data: $form.serialize(),\n      success: function success(data) {\n        _self.removeClass('button-loading');\n\n        if (data.error) {\n          ZHXCore.showError(data.message);\n        } else {\n          ZHXCore.showSuccess(data.message);\n          $form.removeClass('dirty');\n        }\n      },\n      error: function error(data) {\n        _self.removeClass('button-loading');\n\n        ZHXCore.handleError(data);\n      }\n    });\n  });\n  $(document).on('click', '.button-publish-groups', function (event) {\n    event.preventDefault();\n    $('#confirm-publish-modal').modal('show');\n  });\n  $('#confirm-publish-modal').on('click', '#button-confirm-publish-groups', function (event) {\n    event.preventDefault();\n\n    var _self = $(event.currentTarget);\n\n    _self.addClass('button-loading');\n\n    var $form = $('.button-publish-groups').closest('form');\n    $.ajax({\n      url: $form.prop('action'),\n      type: 'POST',\n      data: $form.serialize(),\n      success: function success(data) {\n        _self.removeClass('button-loading');\n\n        if (data.error) {\n          ZHXCore.showError(data.message);\n        } else {\n          ZHXCore.showSuccess(data.message);\n          $form.removeClass('dirty');\n        }\n\n        _self.closest('.modal').modal('hide');\n      },\n      error: function error(data) {\n        _self.removeClass('button-loading');\n\n        ZHXCore.handleError(data);\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybS9wbHVnaW5zL3RyYW5zbGF0aW9uL3Jlc291cmNlcy9hc3NldHMvanMvdHJhbnNsYXRpb24uanM/NWNhNCJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsImVkaXRhYmxlIiwib24iLCJlIiwicmVhc29uIiwibG9jYWxlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCIkbmV4dCIsImNsb3Nlc3QiLCJuZXh0IiwiZmluZCIsInNldFRpbWVvdXQiLCJncm91cCIsInZhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJvdXRlIiwiZW5jb2RlVVJJIiwiY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInJvdyIsInVybCIsImF0dHIiLCJpZCIsInBvc3QiLCJyZW1vdmUiLCJfc2VsZiIsIiRmb3JtIiwiYWpheCIsInByb3AiLCJ0eXBlIiwic2VyaWFsaXplIiwic3VjY2VzcyIsImVycm9yIiwiWkhYQ29yZSIsInNob3dFcnJvciIsIm1lc3NhZ2UiLCJzaG93U3VjY2VzcyIsImhhbmRsZUVycm9yIiwibW9kYWwiXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsVUFBQ0MsQ0FBRCxFQUFPO0FBRTFCQSxHQUFDLENBQUMsV0FBRCxDQUFELENBQWVDLFFBQWYsR0FBMEJDLEVBQTFCLENBQTZCLFFBQTdCLEVBQXVDLFVBQUNDLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQ2xELFFBQUlDLE1BQU0sR0FBR0wsQ0FBQyxDQUFDTSxLQUFLLENBQUNDLGFBQVAsQ0FBRCxDQUF1QkMsSUFBdkIsQ0FBNEIsUUFBNUIsQ0FBYjs7QUFDQSxRQUFJSixNQUFNLEtBQUssTUFBZixFQUF1QjtBQUNuQkosT0FBQyxDQUFDTSxLQUFLLENBQUNDLGFBQVAsQ0FBRCxDQUF1QkUsV0FBdkIsQ0FBbUMsVUFB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Q2lDLE9BQXZCO0FBQ0gsU0FGRCxNQUVPO0FBQ0hGLGlCQUFPLENBQUNHLFdBQVIsQ0FBb0JsQyxJQUFJLENBQUNpQyxPQUF6QjtBQUNBVCxlQUFLLENBQUN2QixXQUFOLENBQWtCLE9BQWxCO0FBQ0g7O0FBRURzQixhQUFLLENBQUNuQixPQUFOLENBQWMsUUFBZCxFQUF3QmdDLEtBQXhCLENBQThCLE1BQTlCO0FBQ0gsT0FmRTtBQWdCSE4sV0FBSyxFQUFFLGVBQUE5QixJQUFJLEVBQUk7QUFDWHVCLGFBQUssQ0FBQ3RCLFdBQU4sQ0FBa0IsZ0JBQWxCOztBQUNBOEIsZUFBTyxDQUFDSSxXQUFSLENBQW9CbkMsSUFBcEI7QUFDSDtBQW5CRSxLQUFQO0FBcUJILEdBN0JEO0FBOEJILENBakdEIiwiZmlsZSI6Ii4vcGxhdGZvcm0vcGx1Z2lucy90cmFuc2xhdGlvbi9yZXNvdXJjZXMvYXNzZXRzL2pzL3RyYW5zbGF0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeSgoJCkgPT4ge1xyXG5cclxuICAgICQoJy5lZGl0YWJsZScpLmVkaXRhYmxlKCkub24oJ2hpZGRlbicsIChlLCByZWFzb24pID0+IHtcclxuICAgICAgICBsZXQgbG9jYWxlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdsb2NhbGUnKTtcclxuICAgICAgICBpZiAocmVhc29uID09PSAnc2F2ZScpIHtcclxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnc3RhdHVzLTAnKS5hZGRDbGFzcygnc3RhdHVzLTEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlYXNvbiA9PT0gJ3NhdmUnIHx8IHJlYXNvbiA9PT0gJ25vY2hhbmdlJykge1xyXG4gICAgICAgICAgICBsZXQgJG5leHQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoJ3RyJykubmV4dCgpLmZpbmQoJy5lZGl0YWJsZS5sb2NhbGUtJyArIGxvY2FsZSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJG5leHQuZWRpdGFibGUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuZ3JvdXAtc2VsZWN0Jykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuICAgICAgICBsZXQgZ3JvdXAgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xyXG4gICAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJvdXRlKCd0cmFuc2xhdGlvbnMuaW5kZXgnKSArICc/Z3JvdXA9JyArIGVuY29kZVVSSSgkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJvdXRlKCd0cmFuc2xhdGlvbnMuaW5kZXgnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdhLmRlbGV0ZS1rZXknKS5jbGljayhldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgcm93ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCd0cicpO1xyXG4gICAgICAgIGxldCB1cmwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICBsZXQgaWQgPSByb3cuYXR0cignaWQnKTtcclxuICAgICAgICAkLnBvc3QodXJsLCB7aWQ6IGlkfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICByb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYm94LXRyYW5zbGF0aW9uJykub24oJ2NsaWNrJywgJy5idXR0b24taW1wb3J0LWdyb3VwcycsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBfc2VsZiA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgX3NlbGYuYWRkQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgIGxldCAkZm9ybSA9IF9zZWxmLmNsb3Nlc3QoJ2Zvcm0nKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAkZm9ybS5wcm9wKCdhY3Rpb24nKSxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiAkZm9ybS5zZXJpYWxpemUoKSxcclxuICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfc2VsZi5yZW1vdmVDbGFzcygnYnV0dG9uLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIFpIWENvcmUuc2hvd0Vycm9yKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFpIWENvcmUuc2hvd1N1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnZGlydHknKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3NlbGYucmVtb3ZlQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICBaSFhDb3JlLmhhbmRsZUVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ1dHRvbi1wdWJsaXNoLWdyb3VwcycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnI2NvbmZpcm0tcHVibGlzaC1tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjY29uZmlybS1wdWJsaXNoLW1vZGFsJykub24oJ2NsaWNrJywgJyNidXR0b24tY29uZmlybS1wdWJsaXNoLWdyb3VwcycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBfc2VsZiA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgX3NlbGYuYWRkQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgIGxldCAkZm9ybSA9ICQoJy5idXR0b24tcHVibGlzaC1ncm91cHMnKS5jbG9zZXN0KCdmb3JtJyk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJGZvcm0ucHJvcCgnYWN0aW9uJyksXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTogJGZvcm0uc2VyaWFsaXplKCksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3NlbGYucmVtb3ZlQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBaSFhDb3JlLnNob3dFcnJvcihkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBaSFhDb3JlLnNob3dTdWNjZXNzKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoJ2RpcnR5Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgX3NlbGYuY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3NlbGYucmVtb3ZlQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICBaSFhDb3JlLmhhbmRsZUVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./platform/plugins/translation/resources/assets/js/translation.js\n");

/***/ }),

/***/ 192:
/*!*******************************************************************************!*\
  !*** multi ./platform/plugins/translation/resources/assets/js/translation.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jaydeep Mor\Work\Evolution IT Solutions\zhxcore\zhxcore_admin\platform\plugins\translation\resources\assets\js\translation.js */"./platform/plugins/translation/resources/assets/js/translation.js");


/***/ })

/******/ });