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
/******/ 	return __webpack_require__(__webpack_require__.s = 193);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./platform/plugins/translation/resources/assets/js/locales.js":
/*!*********************************************************************!*\
  !*** ./platform/plugins/translation/resources/assets/js/locales.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  var _this = this;\n\n  var languageTable = $('.table-language');\n  languageTable.on('click', '.delete-locale-button', function (event) {\n    event.preventDefault();\n    $('.delete-crud-entry').data('url', $(event.currentTarget).data('url'));\n    $('.modal-confirm-delete').modal('show');\n  });\n  $(document).on('click', '.delete-crud-entry', function (event) {\n    event.preventDefault();\n    $('.modal-confirm-delete').modal('hide');\n    var deleteURL = $(event.currentTarget).data('url');\n    $(_this).prop('disabled', true).addClass('button-loading');\n    $.ajax({\n      url: deleteURL,\n      type: 'DELETE',\n      success: function success(data) {\n        if (data.error) {\n          ZHXCore.showError(data.message);\n        } else {\n          if (data.data) {\n            languageTable.find('i[data-locale=' + data.data + ']').unwrap();\n            $('.tooltip').remove();\n          }\n\n          languageTable.find('a[data-url=\"' + deleteURL + '\"]').closest('tr').remove();\n          ZHXCore.showSuccess(data.message);\n        }\n\n        $(_this).prop('disabled', false).removeClass('button-loading');\n      },\n      error: function error(data) {\n        $(_this).prop('disabled', false).removeClass('button-loading');\n        ZHXCore.handleError(data);\n      }\n    });\n  });\n  $(document).on('click', '.add-locale-form button[type=submit]', function (event) {\n    var _this2 = this;\n\n    event.preventDefault();\n    event.stopPropagation();\n    $(this).prop('disabled', true).addClass('button-loading');\n    $.ajax({\n      type: 'POST',\n      cache: false,\n      url: $(this).closest('form').prop('action'),\n      data: new FormData($(this).closest('form')[0]),\n      contentType: false,\n      processData: false,\n      success: function success(res) {\n        if (!res.error) {\n          ZHXCore.showSuccess(res.message);\n          languageTable.load(window.location.href + ' .table-language > *');\n        } else {\n          ZHXCore.showError(res.message);\n        }\n\n        $(_this2).prop('disabled', false).removeClass('button-loading');\n      },\n      error: function error(res) {\n        $(_this2).prop('disabled', false).removeClass('button-loading');\n        ZHXCore.handleError(res);\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybS9wbHVnaW5zL3RyYW5zbGF0aW9uL3Jlc291cmNlcy9hc3NldHMvanMvbG9jYWxlcy5qcz85YTAwIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwibGFuZ3VhZ2VUYWJsZSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJjdXJyZW50VGFyZ2V0IiwibW9kYWwiLCJkZWxldGVVUkwiLCJwcm9wIiwiYWRkQ2xhc3MiLCJhamF4IiwidXJsIiwidHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsIlpIWENvcmUiLCJzaG93RXJyb3IiLCJtZXNzYWdlIiwiZmluZCIsInVud3JhcCIsInJlbW92ZSIsImNsb3Nlc3QiLCJzaG93U3VjY2VzcyIsInJlbW92ZUNsYXNzIiwiaGFuZGxlRXJyb3IiLCJzdG9wUHJvcGFnYXRpb24iLCJjYWNoZSIsIkZvcm1EYXRhIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsInJlcyIsImxvYWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFBQTs7QUFDMUIsTUFBSUMsYUFBYSxHQUFHSCxDQUFDLENBQUMsaUJBQUQsQ0FBckI7QUFFQUcsZUFBYSxDQUFDQyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLHVCQUExQixFQUFtRCxVQUFBQyxLQUFLLEVBQUk7QUFDeERBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBTixLQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qk8sSUFBeEIsQ0FBNkIsS0FBN0IsRUFBb0NQLENBQUMsQ0FBQ0ssS0FBSyxDQUFDRyxhQUFQLENBQUQsQ0FBdUJELElBQXZCLENBQTRCLEtBQTVCLENBQXBDO0FBQ0FQLEtBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCUyxLQUEzQixDQUFpQyxNQUFqQztBQUNILEdBTEQ7QUFPQVQsR0FBQyxDQUFD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QUFoQixHQUF1QixzQkFBMUM7QUFDSCxTQUhELE1BR087QUFDSG5CLGlCQUFPLENBQUNDLFNBQVIsQ0FBa0JjLEdBQUcsQ0FBQ2IsT0FBdEI7QUFDSDs7QUFFRHBCLFNBQUMsQ0FBQyxNQUFELENBQUQsQ0FBUVcsSUFBUixDQUFhLFVBQWIsRUFBeUIsS0FBekIsRUFBZ0NlLFdBQWhDLENBQTRDLGdCQUE1QztBQUNILE9BaEJFO0FBaUJIVCxXQUFLLEVBQUUsZUFBQWdCLEdBQUcsRUFBSTtBQUNWakMsU0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFRVyxJQUFSLENBQWEsVUFBYixFQUF5QixLQUF6QixFQUFnQ2UsV0FBaEMsQ0FBNEMsZ0JBQTVDO0FBQ0FSLGVBQU8sQ0FBQ1MsV0FBUixDQUFvQk0sR0FBcEI7QUFDSDtBQXBCRSxLQUFQO0FBc0JILEdBM0JEO0FBNEJILENBcEVEIiwiZmlsZSI6Ii4vcGxhdGZvcm0vcGx1Z2lucy90cmFuc2xhdGlvbi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xvY2FsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbGFuZ3VhZ2VUYWJsZSA9ICQoJy50YWJsZS1sYW5ndWFnZScpO1xyXG5cclxuICAgIGxhbmd1YWdlVGFibGUub24oJ2NsaWNrJywgJy5kZWxldGUtbG9jYWxlLWJ1dHRvbicsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkKCcuZGVsZXRlLWNydWQtZW50cnknKS5kYXRhKCd1cmwnLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3VybCcpKTtcclxuICAgICAgICAkKCcubW9kYWwtY29uZmlybS1kZWxldGUnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5kZWxldGUtY3J1ZC1lbnRyeScsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5tb2RhbC1jb25maXJtLWRlbGV0ZScpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG4gICAgICAgIGxldCBkZWxldGVVUkwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3VybCcpO1xyXG4gICAgICAgICQodGhpcykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKS5hZGRDbGFzcygnYnV0dG9uLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBkZWxldGVVUkwsXHJcbiAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgWkhYQ29yZS5zaG93RXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZVRhYmxlLmZpbmQoJ2lbZGF0YS1sb2NhbGU9JyArIGRhdGEuZGF0YSArICddJykudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50b29sdGlwJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlVGFibGUuZmluZCgnYVtkYXRhLXVybD1cIicgKyBkZWxldGVVUkwgKyAnXCJdJykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBaSFhDb3JlLnNob3dTdWNjZXNzKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpLnJlbW92ZUNsYXNzKCdidXR0b24tbG9hZGluZycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpLnJlbW92ZUNsYXNzKCdidXR0b24tbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgWkhYQ29yZS5oYW5kbGVFcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hZGQtbG9jYWxlLWZvcm0gYnV0dG9uW3R5cGU9c3VibWl0XScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgJCh0aGlzKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpLmFkZENsYXNzKCdidXR0b24tbG9hZGluZycpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgdXJsOiAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5wcm9wKCdhY3Rpb24nKSxcclxuICAgICAgICAgICAgZGF0YTogbmV3IEZvcm1EYXRhKCQodGhpcykuY2xvc2VzdCgnZm9ybScpWzBdKSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIFpIWENvcmUuc2hvd1N1Y2Nlc3MocmVzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlVGFibGUubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArICcgLnRhYmxlLWxhbmd1YWdlID4gKicpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBaSFhDb3JlLnNob3dFcnJvcihyZXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKS5yZW1vdmVDbGFzcygnYnV0dG9uLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpLnJlbW92ZUNsYXNzKCdidXR0b24tbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgWkhYQ29yZS5oYW5kbGVFcnJvcihyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./platform/plugins/translation/resources/assets/js/locales.js\n");

/***/ }),

/***/ 193:
/*!***************************************************************************!*\
  !*** multi ./platform/plugins/translation/resources/assets/js/locales.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jaydeep Mor\Work\Evolution IT Solutions\zhxcore\zhxcore_admin\platform\plugins\translation\resources\assets\js\locales.js */"./platform/plugins/translation/resources/assets/js/locales.js");


/***/ })

/******/ });