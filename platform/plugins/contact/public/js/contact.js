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
/******/ 	return __webpack_require__(__webpack_require__.s = 179);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./platform/plugins/contact/resources/assets/js/contact.js":
/*!*****************************************************************!*\
  !*** ./platform/plugins/contact/resources/assets/js/contact.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ContactPluginManagement = /*#__PURE__*/function () {\n  function ContactPluginManagement() {\n    _classCallCheck(this, ContactPluginManagement);\n  }\n\n  _createClass(ContactPluginManagement, [{\n    key: \"init\",\n    value: function init() {\n      $(document).on('click', '.answer-trigger-button', function (event) {\n        event.preventDefault();\n        event.stopPropagation();\n        var answerWrapper = $('.answer-wrapper');\n\n        if (answerWrapper.is(':visible')) {\n          answerWrapper.fadeOut();\n        } else {\n          answerWrapper.fadeIn();\n        }\n      });\n      $(document).on('click', '.answer-send-button', function (event) {\n        event.preventDefault();\n        event.stopPropagation();\n        $(event.currentTarget).addClass('button-loading');\n        var message = '';\n\n        if (typeof tinymce != 'undefined') {\n          message = tinymce.get('message').getContent();\n        } else if (CKEDITOR.instances['message'] && typeof CKEDITOR.instances['message'] !== 'undefined') {\n          message = CKEDITOR.instances['message'].getData();\n        }\n\n        $.ajax({\n          type: 'POST',\n          cache: false,\n          url: route('contacts.reply', $('#input_contact_id').val()),\n          data: {\n            message: message\n          },\n          success: function success(res) {\n            if (!res.error) {\n              $('.answer-wrapper').fadeOut();\n\n              if (typeof tinymce != 'undefined') {\n                tinymce.get('message').setContent('');\n              } else if (CKEDITOR.instances['message'] && typeof CKEDITOR.instances['message'] !== 'undefined') {\n                CKEDITOR.instances['message'].setData('');\n              }\n\n              ZHXCore.showSuccess(res.message);\n              $('#reply-wrapper').load(window.location.href + ' #reply-wrapper > *');\n            }\n\n            $(event.currentTarget).removeClass('button-loading');\n          },\n          error: function error(res) {\n            $(event.currentTarget).removeClass('button-loading');\n            ZHXCore.handleError(res);\n          }\n        });\n      });\n    }\n  }]);\n\n  return ContactPluginManagement;\n}();\n\n$(document).ready(function () {\n  new ContactPluginManagement().init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybS9wbHVnaW5zL2NvbnRhY3QvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb250YWN0LmpzP2Y1M2YiXSwibmFtZXMiOlsiQ29udGFjdFBsdWdpbk1hbmFnZW1lbnQiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJhbnN3ZXJXcmFwcGVyIiwiaXMiLCJmYWRlT3V0IiwiZmFkZUluIiwiY3VycmVudFRhcmdldCIsImFkZENsYXNzIiwibWVzc2FnZSIsInRpbnltY2UiLCJnZXQiLCJnZXRDb250ZW50IiwiQ0tFRElUT1IiLCJpbnN0YW5jZXMiLCJnZXREYXRhIiwiYWpheCIsInR5cGUiLCJjYWNoZSIsInVybCIsInJvdXRlIiwidmFsIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXMiLCJlcnJvciIsInNldENvbnRlbnQiLCJzZXREYXRhIiwiWkhYQ29yZSIsInNob3dTdWNjZXNzIiwibG9hZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlbW92ZUNsYXNzIiwiaGFuZGxlRXJyb3IiLCJyZWFkeSIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSx1Qjs7Ozs7OzsyQkFDSztBQUNIQyxPQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3Qix3QkFBeEIsRUFBa0QsVUFBQUMsS0FBSyxFQUFLO0FBQ3hEQSxhQUFLLENBQUNDLGNBQU47QUFDQUQsYUFBSyxDQUFDRSxlQUFOO0FBRUEsWUFBTUMsYUFBYSxHQUFHTixDQUFDLENBQUMsaUJBQUQsQ0FBdkI7O0FBQ0EsWUFBSU0sYUFBYSxDQUFDQyxFQUFkLENBQWlCLFVBQWpCLENBQUosRUFBa0M7QUFDOUJELHVCQUFhLENBQUNFLE9BQWQ7QUFDSCxTQUZELE1BRU87QUFDSEYsdUJBQWEsQ0FBQ0csTUFBZDtBQUNIO0FBQ0osT0FWRDtBQVlBVCxPQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixxQkFBeEIsRUFBK0MsVUFBQUMsS0FBSyxFQUFLO0FBQ3JEQSxhQUFLLENBQUNDLGNBQU47QUFDQUQsYUFBSyxDQUFDRSxlQUFOO0FBRUFMLFNBQUMsQ0FBQ0csS0FBSyxDQUFDTyxhQUFQLENBQUQsQ0FBdUJDLFFBQXZCLENBQWdDLGdCQUFoQztBQUVBLFlBQUlDLE9BQU8sR0FBRyxFQUFkOztBQUNBLFlBQUksT0FBT0MsT0FBUCxJQUFrQixXQUF0QixFQUFtQztBQUMvQkQsaUJBQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkMsVUFBdkIsRUFBVjtBQUNILFNBRkQsTUFFTyxJQUFJQyxRQUFRLENBQUNDLFNBQVQsQ0FBbUIsU0FBbkIsS0FBaUMsT0FBT0QsUUFBUSxDQUFDQyxTQUFULENBQW1CLFNBQW5CLENBQVAsS0FBeUMsV0FBOUUsRUFBMkY7QUFDOUZMLGlCQUFPLEdBQUdJLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQixTQUFuQixFQUE4QkMsT0FBOUIsRUFBVjtBQUNIOztBQUVEbEIsU0FBQyxDQUFDbUIsSUFBRixDQUFPO0FBQ0hDLGNBQUksRUFBRSxNQURIO0FBRUhDLGVBQUssRUFBRSxLQUZKO0FBR0hDLGFBQUcsRUFBRUMsS0FBSyxDQUFDLGdCQUFELEVBQW1CdkIsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJ3QixHQUF2QixFQUFuQixDQUhQO0FBSUhDLGNBQUksRUFBRTtBQUNGYixtQkFBTyxFQUFFQTtBQURQLFdBSkg7QUFPSGMsaUJBQU8sRUFBRSxpQkFBQUMsR0FBRyxFQUFLO0FBQ2IsZ0JBQUksQ0FBQ0EsR0FBRyxDQUFDQyxLQUFULEVBQWdCO0FBQ1o1QixlQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlEsT0FBckI7O0FBQ0Esa0JBQUksT0FBT0ssT0FBUCxJQUFrQixXQUF0QixFQUFtQztBQUMvQkEsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJlLFVBQXZCLENBQWtDLEVBQWxDO0FBQ0gsZUFGRCxNQUVPLElBQUliLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQixTQUFuQixLQUFpQyxPQUFPRCxRQUFRLENBQUNDLFNBQVQsQ0FBbUIsU0FBbkIsQ0FBUCxLQUF5QyxXQUE5RSxFQUEyRjtBQUM5RkQsd0JBQVEsQ0FBQ0MsU0FBVCxDQUFtQixTQUFuQixFQUE4QmEsT0FBOUIsQ0FBc0MsRUFBdEM7QUFDSDs7QUFDREMscUJBQU8sQ0FBQ0MsV0FBUixDQUFvQkwsR0FBRyxDQUFDZixPQUF4QjtBQUNBWixlQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmlDLElBQXBCLENBQXlCQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLHFCQUFoRDtBQUNIOztBQUVEcEMsYUFBQyxDQUFDRyxLQUFLLENBQUNPLGFBQVAsQ0FBRCxDQUF1QjJCLFdBQXZCLENBQW1DLGdCQUFuQztBQUNILFdBcEJFO0FBcUJIVCxlQUFLLEVBQUUsZUFBQUQsR0FBRyxFQUFLO0FBQ1gzQixhQUFDLENBQUNHLEtBQUssQ0FBQ08sYUFBUCxDQUFELENBQXVCMkIsV0FBdkIsQ0FBbUMsZ0JBQW5DO0FBQ0FOLG1CQUFPLENBQUNPLFdBQVIsQ0FBb0JYLEdBQXBCO0FBQ0g7QUF4QkUsU0FBUDtBQTBCSCxPQXZDRDtBQXdDSDs7Ozs7O0FBR0wzQixDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZc0MsS0FBWixDQUFrQixZQUFNO0FBQ3BCLE1BQUl4Qyx1QkFBSixHQUE4QnlDLElBQTlCO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL3BsYXRmb3JtL3BsdWdpbnMvY29udGFjdC9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb250YWN0UGx1Z2luTWFuYWdlbWVudCB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYW5zd2VyLXRyaWdnZXItYnV0dG9uJywgZXZlbnQgPT4gIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbnN3ZXJXcmFwcGVyID0gJCgnLmFuc3dlci13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGlmIChhbnN3ZXJXcmFwcGVyLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJXcmFwcGVyLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuc3dlcldyYXBwZXIuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hbnN3ZXItc2VuZC1idXR0b24nLCBldmVudCA9PiAge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRpbnltY2UgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB0aW55bWNlLmdldCgnbWVzc2FnZScpLmdldENvbnRlbnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChDS0VESVRPUi5pbnN0YW5jZXNbJ21lc3NhZ2UnXSAmJiB0eXBlb2YgQ0tFRElUT1IuaW5zdGFuY2VzWydtZXNzYWdlJ10gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gQ0tFRElUT1IuaW5zdGFuY2VzWydtZXNzYWdlJ10uZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXJsOiByb3V0ZSgnY29udGFjdHMucmVwbHknLCAkKCcjaW5wdXRfY29udGFjdF9pZCcpLnZhbCgpKSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+ICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmFuc3dlci13cmFwcGVyJykuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRpbnltY2UgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbnltY2UuZ2V0KCdtZXNzYWdlJykuc2V0Q29udGVudCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoQ0tFRElUT1IuaW5zdGFuY2VzWydtZXNzYWdlJ10gJiYgdHlwZW9mIENLRURJVE9SLmluc3RhbmNlc1snbWVzc2FnZSddICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzWydtZXNzYWdlJ10uc2V0RGF0YSgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgWkhYQ29yZS5zaG93U3VjY2VzcyhyZXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZXBseS13cmFwcGVyJykubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArICcgI3JlcGx5LXdyYXBwZXIgPiAqJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdidXR0b24tbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiByZXMgPT4gIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdidXR0b24tbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIFpIWENvcmUuaGFuZGxlRXJyb3IocmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICBuZXcgQ29udGFjdFBsdWdpbk1hbmFnZW1lbnQoKS5pbml0KCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./platform/plugins/contact/resources/assets/js/contact.js\n");

/***/ }),

/***/ 179:
/*!***********************************************************************!*\
  !*** multi ./platform/plugins/contact/resources/assets/js/contact.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jaydeep Mor\Work\Evolution IT Solutions\zhxcore\zhxcore_admin\platform\plugins\contact\resources\assets\js\contact.js */"./platform/plugins/contact/resources/assets/js/contact.js");


/***/ })

/******/ });