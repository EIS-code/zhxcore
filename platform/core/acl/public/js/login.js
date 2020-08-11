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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./platform/core/acl/resources/assets/js/login.js":
/*!********************************************************!*\
  !*** ./platform/core/acl/resources/assets/js/login.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Login = /*#__PURE__*/function () {\n  function Login() {\n    _classCallCheck(this, Login);\n  }\n\n  _createClass(Login, [{\n    key: \"handleLogin\",\n    value: function handleLogin() {\n      $('.login-form').validate({\n        errorElement: 'span',\n        //default input error message container\n        errorClass: 'help-block',\n        // default input error message class\n        focusInvalid: false,\n        // do not focus the last invalid input\n        rules: {\n          username: {\n            required: true\n          },\n          password: {\n            required: true\n          },\n          remember: {\n            required: false\n          }\n        },\n        messages: {\n          username: {\n            required: 'Username is required.'\n          },\n          password: {\n            required: 'Password is required.'\n          }\n        },\n        invalidHandler: function invalidHandler() {\n          //display error alert on form submit\n          $('.alert-danger', $('.login-form')).show();\n        },\n        highlight: function highlight(element) {\n          // highlight error inputs\n          $(element).closest('.form-group').addClass('has-error'); // set error class to the control group\n        },\n        success: function success(label) {\n          label.closest('.form-group').removeClass('has-error');\n          label.remove();\n        },\n        errorPlacement: function errorPlacement(error, element) {\n          error.insertAfter(element.closest('.form-control'));\n        },\n        submitHandler: function submitHandler(form) {\n          form.submit(); // form validation success, call ajax form submit\n        }\n      });\n      $('.login-form input').keypress(function (e) {\n        if (e.which === 13) {\n          if ($('.login-form').validate().form()) {\n            $('.login-form').submit(); //form validation success, call ajax form submit\n          }\n\n          return false;\n        }\n      });\n    }\n  }, {\n    key: \"handleForgetPassword\",\n    value: function handleForgetPassword() {\n      $('.forget-form').validate({\n        errorElement: 'span',\n        //default input error message container\n        errorClass: 'help-block',\n        // default input error message class\n        focusInvalid: false,\n        // do not focus the last invalid input\n        ignore: '',\n        rules: {\n          email: {\n            required: true,\n            email: true\n          }\n        },\n        messages: {\n          email: {\n            required: 'Email is required.'\n          }\n        },\n        invalidHandler: function invalidHandler() {\n          //display error alert on form submit\n          $('.alert-danger', $('.forget-form')).show();\n        },\n        highlight: function highlight(element) {\n          // hightlight error inputs\n          $(element).closest('.form-group').addClass('has-error'); // set error class to the control group\n        },\n        success: function success(label) {\n          label.closest('.form-group').removeClass('has-error');\n          label.remove();\n        },\n        errorPlacement: function errorPlacement(error, element) {\n          error.insertAfter(element.closest('.form-control'));\n        },\n        submitHandler: function submitHandler(form) {\n          form.submit();\n        }\n      });\n      $('.forget-form input').keypress(function (e) {\n        if (e.which === 13) {\n          if ($('.forget-form').validate().form()) {\n            $('.forget-form').submit();\n          }\n\n          return false;\n        }\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.handleLogin();\n      this.handleForgetPassword();\n    }\n  }]);\n\n  return Login;\n}();\n\n$(document).ready(function () {\n  new Login().init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybS9jb3JlL2FjbC9yZXNvdXJjZXMvYXNzZXRzL2pzL2xvZ2luLmpzPzE1ZGYiXSwibmFtZXMiOlsiTG9naW4iLCIkIiwidmFsaWRhdGUiLCJlcnJvckVsZW1lbnQiLCJlcnJvckNsYXNzIiwiZm9jdXNJbnZhbGlkIiwicnVsZXMiLCJ1c2VybmFtZSIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJyZW1lbWJlciIsIm1lc3NhZ2VzIiwiaW52YWxpZEhhbmRsZXIiLCJzaG93IiwiaGlnaGxpZ2h0IiwiZWxlbWVudCIsImNsb3Nlc3QiLCJhZGRDbGFzcyIsInN1Y2Nlc3MiLCJsYWJlbCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwiZXJyb3JQbGFjZW1lbnQiLCJlcnJvciIsImluc2VydEFmdGVyIiwic3VibWl0SGFuZGxlciIsImZvcm0iLCJzdWJtaXQiLCJrZXlwcmVzcyIsImUiLCJ3aGljaCIsImlnbm9yZSIsImVtYWlsIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVGb3JnZXRQYXNzd29yZCIsImRvY3VtZW50IiwicmVhZHkiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsSzs7Ozs7OztrQ0FDWTtBQUVWQyxPQUFDLENBQUMsYUFBRCxDQUFELENBQWlCQyxRQUFqQixDQUEwQjtBQUN0QkMsb0JBQVksRUFBRSxNQURRO0FBQ0E7QUFDdEJDLGtCQUFVLEVBQUUsWUFGVTtBQUVJO0FBQzFCQyxvQkFBWSxFQUFFLEtBSFE7QUFHRDtBQUNyQkMsYUFBSyxFQUFFO0FBQ0hDLGtCQUFRLEVBQUU7QUFDTkMsb0JBQVEsRUFBRTtBQURKLFdBRFA7QUFJSEMsa0JBQVEsRUFBRTtBQUNORCxvQkFBUSxFQUFFO0FBREosV0FKUDtBQU9IRSxrQkFBUSxFQUFFO0FBQ05GLG9CQUFRLEVBQUU7QUFESjtBQVBQLFNBSmU7QUFnQnRCRyxnQkFBUSxFQUFFO0FBQ05KLGtCQUFRLEVBQUU7QUFDTkMsb0JBQVEsRUFBRTtBQURKLFdBREo7QUFJ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Q0g7QUF0Q3NCLE9BQTNCO0FBeUNBMUIsT0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IyQixRQUF4QixDQUFpQyxVQUFDQyxDQUFELEVBQU87QUFDcEMsWUFBSUEsQ0FBQyxDQUFDQyxLQUFGLEtBQVksRUFBaEIsRUFBb0I7QUFDaEIsY0FBSTdCLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JDLFFBQWxCLEdBQTZCd0IsSUFBN0IsRUFBSixFQUF5QztBQUNyQ3pCLGFBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IwQixNQUFsQjtBQUNIOztBQUNELGlCQUFPLEtBQVA7QUFDSDtBQUNKLE9BUEQ7QUFTSDs7OzJCQUVNO0FBQ0gsV0FBS00sV0FBTDtBQUNBLFdBQUtDLG9CQUFMO0FBQ0g7Ozs7OztBQUdMakMsQ0FBQyxDQUFDa0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBTTtBQUNwQixNQUFJcEMsS0FBSixHQUFZcUMsSUFBWjtBQUNILENBRkQiLCJmaWxlIjoiLi9wbGF0Zm9ybS9jb3JlL2FjbC9yZXNvdXJjZXMvYXNzZXRzL2pzL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTG9naW4ge1xyXG4gICAgaGFuZGxlTG9naW4oKSB7XHJcblxyXG4gICAgICAgICQoJy5sb2dpbi1mb3JtJykudmFsaWRhdGUoe1xyXG4gICAgICAgICAgICBlcnJvckVsZW1lbnQ6ICdzcGFuJywgLy9kZWZhdWx0IGlucHV0IGVycm9yIG1lc3NhZ2UgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGVycm9yQ2xhc3M6ICdoZWxwLWJsb2NrJywgLy8gZGVmYXVsdCBpbnB1dCBlcnJvciBtZXNzYWdlIGNsYXNzXHJcbiAgICAgICAgICAgIGZvY3VzSW52YWxpZDogZmFsc2UsIC8vIGRvIG5vdCBmb2N1cyB0aGUgbGFzdCBpbnZhbGlkIGlucHV0XHJcbiAgICAgICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbWVtYmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1VzZXJuYW1lIGlzIHJlcXVpcmVkLidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnUGFzc3dvcmQgaXMgcmVxdWlyZWQuJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaW52YWxpZEhhbmRsZXI6ICgpID0+IHsgLy9kaXNwbGF5IGVycm9yIGFsZXJ0IG9uIGZvcm0gc3VibWl0XHJcbiAgICAgICAgICAgICAgICAkKCcuYWxlcnQtZGFuZ2VyJywgJCgnLmxvZ2luLWZvcm0nKSkuc2hvdygpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaGlnaGxpZ2h0OiAoZWxlbWVudCkgPT4geyAvLyBoaWdobGlnaHQgZXJyb3IgaW5wdXRzXHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuYWRkQ2xhc3MoJ2hhcy1lcnJvcicpOyAvLyBzZXQgZXJyb3IgY2xhc3MgdG8gdGhlIGNvbnRyb2wgZ3JvdXBcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChsYWJlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGVycm9yUGxhY2VtZW50OiAoZXJyb3IsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQuY2xvc2VzdCgnLmZvcm0tY29udHJvbCcpKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IChmb3JtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpOyAvLyBmb3JtIHZhbGlkYXRpb24gc3VjY2VzcywgY2FsbCBhamF4IGZvcm0gc3VibWl0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmxvZ2luLWZvcm0gaW5wdXQnKS5rZXlwcmVzcygoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcubG9naW4tZm9ybScpLnZhbGlkYXRlKCkuZm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmxvZ2luLWZvcm0nKS5zdWJtaXQoKTsgLy9mb3JtIHZhbGlkYXRpb24gc3VjY2VzcywgY2FsbCBhamF4IGZvcm0gc3VibWl0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVGb3JnZXRQYXNzd29yZCgpIHtcclxuICAgICAgICAkKCcuZm9yZ2V0LWZvcm0nKS52YWxpZGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yRWxlbWVudDogJ3NwYW4nLCAvL2RlZmF1bHQgaW5wdXQgZXJyb3IgbWVzc2FnZSBjb250YWluZXJcclxuICAgICAgICAgICAgZXJyb3JDbGFzczogJ2hlbHAtYmxvY2snLCAvLyBkZWZhdWx0IGlucHV0IGVycm9yIG1lc3NhZ2UgY2xhc3NcclxuICAgICAgICAgICAgZm9jdXNJbnZhbGlkOiBmYWxzZSwgLy8gZG8gbm90IGZvY3VzIHRoZSBsYXN0IGludmFsaWQgaW5wdXRcclxuICAgICAgICAgICAgaWdub3JlOiAnJyxcclxuICAgICAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRW1haWwgaXMgcmVxdWlyZWQuJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaW52YWxpZEhhbmRsZXI6ICgpID0+IHsgLy9kaXNwbGF5IGVycm9yIGFsZXJ0IG9uIGZvcm0gc3VibWl0XHJcbiAgICAgICAgICAgICAgICAkKCcuYWxlcnQtZGFuZ2VyJywgJCgnLmZvcmdldC1mb3JtJykpLnNob3coKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGhpZ2hsaWdodDogKGVsZW1lbnQpID0+IHsgLy8gaGlnaHRsaWdodCBlcnJvciBpbnB1dHNcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5hZGRDbGFzcygnaGFzLWVycm9yJyk7IC8vIHNldCBlcnJvciBjbGFzcyB0byB0aGUgY29udHJvbCBncm91cFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc3VjY2VzczogKGxhYmVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IChlcnJvciwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudC5jbG9zZXN0KCcuZm9ybS1jb250cm9sJykpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc3VibWl0SGFuZGxlcjogKGZvcm0pID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmZvcmdldC1mb3JtIGlucHV0Jykua2V5cHJlc3MoKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmZvcmdldC1mb3JtJykudmFsaWRhdGUoKS5mb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZm9yZ2V0LWZvcm0nKS5zdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTG9naW4oKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUZvcmdldFBhc3N3b3JkKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAgIG5ldyBMb2dpbigpLmluaXQoKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./platform/core/acl/resources/assets/js/login.js\n");

/***/ }),

/***/ 2:
/*!**************************************************************!*\
  !*** multi ./platform/core/acl/resources/assets/js/login.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jaydeep Mor\Work\Evolution IT Solutions\zhxcore\zhxcore_admin\platform\core\acl\resources\assets\js\login.js */"./platform/core/acl/resources/assets/js/login.js");


/***/ })

/******/ });