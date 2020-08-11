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
/******/ 	return __webpack_require__(__webpack_require__.s = 177);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./platform/plugins/backup/resources/assets/js/backup.js":
/*!***************************************************************!*\
  !*** ./platform/plugins/backup/resources/assets/js/backup.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar BackupManagement = /*#__PURE__*/function () {\n  function BackupManagement() {\n    _classCallCheck(this, BackupManagement);\n  }\n\n  _createClass(BackupManagement, [{\n    key: \"init\",\n    value: function init() {\n      var table_backup = $('#table-backups');\n      table_backup.on('click', '.deleteDialog', function (event) {\n        event.preventDefault();\n        $('.delete-crud-entry').data('section', $(event.currentTarget).data('section'));\n        $('.modal-confirm-delete').modal('show');\n      });\n      table_backup.on('click', '.restoreBackup', function (event) {\n        event.preventDefault();\n        $('#restore-backup-button').data('section', $(event.currentTarget).data('section'));\n        $('#restore-backup-modal').modal('show');\n      });\n      $('.delete-crud-entry').on('click', function (event) {\n        event.preventDefault();\n        $('.modal-confirm-delete').modal('hide');\n        var deleteURL = $(event.currentTarget).data('section');\n        $.ajax({\n          url: deleteURL,\n          type: 'DELETE',\n          success: function success(data) {\n            if (data.error) {\n              ZHXCore.showError(data.message);\n            } else {\n              table_backup.find('a[data-section=\"' + deleteURL + '\"]').closest('tr').remove();\n              ZHXCore.showSuccess(data.message);\n            }\n          },\n          error: function error(data) {\n            ZHXCore.handleError(data);\n          }\n        });\n      });\n      $('#restore-backup-button').on('click', function (event) {\n        event.preventDefault();\n\n        var _self = $(event.currentTarget);\n\n        _self.addClass('button-loading');\n\n        $.ajax({\n          url: _self.data('section'),\n          type: 'GET',\n          success: function success(data) {\n            _self.removeClass('button-loading');\n\n            _self.closest('.modal').modal('hide');\n\n            if (data.error) {\n              ZHXCore.showError(data.message);\n            } else {\n              ZHXCore.showSuccess(data.message);\n              window.location.reload();\n            }\n          },\n          error: function error(data) {\n            _self.removeClass('button-loading');\n\n            ZHXCore.handleError(data);\n          }\n        });\n      });\n      $(document).on('click', '#generate_backup', function (event) {\n        event.preventDefault();\n        $('#name').val('');\n        $('#description').val('');\n        $('#create-backup-modal').modal('show');\n      });\n      $('#create-backup-modal').on('click', '#create-backup-button', function (event) {\n        event.preventDefault();\n\n        var _self = $(event.currentTarget);\n\n        _self.addClass('button-loading');\n\n        var name = $('#name').val();\n        var description = $('#description').val();\n        var error = false;\n\n        if (name === '' || name === null) {\n          error = true;\n          ZHXCore.showError('Backup name is required!');\n        }\n\n        if (description === '' || description === null) {\n          error = true;\n          ZHXCore.showError('Backup description is required!');\n        }\n\n        if (!error) {\n          $.ajax({\n            url: $('div[data-route-create]').data('route-create'),\n            type: 'POST',\n            data: {\n              name: name,\n              description: description\n            },\n            success: function success(data) {\n              _self.removeClass('button-loading');\n\n              _self.closest('.modal').modal('hide');\n\n              if (data.error) {\n                ZHXCore.showError(data.message);\n              } else {\n                table_backup.find('.no-backup-row').remove();\n                table_backup.find('tbody').append(data.data);\n                ZHXCore.showSuccess(data.message);\n              }\n            },\n            error: function error(data) {\n              _self.removeClass('button-loading');\n\n              ZHXCore.handleError(data);\n            }\n          });\n        } else {\n          _self.removeClass('button-loading');\n        }\n      });\n    }\n  }]);\n\n  return BackupManagement;\n}();\n\n$(document).ready(function () {\n  new BackupManagement().init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybS9wbHVnaW5zL2JhY2t1cC9yZXNvdXJjZXMvYXNzZXRzL2pzL2JhY2t1cC5qcz84MGQ3Il0sIm5hbWVzIjpbIkJhY2t1cE1hbmFnZW1lbnQiLCJ0YWJsZV9iYWNrdXAiLCIkIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImN1cnJlbnRUYXJnZXQiLCJtb2RhbCIsImRlbGV0ZVVSTCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwic3VjY2VzcyIsImVycm9yIiwiWkhYQ29yZSIsInNob3dFcnJvciIsIm1lc3NhZ2UiLCJmaW5kIiwiY2xvc2VzdCIsInJlbW92ZSIsInNob3dTdWNjZXNzIiwiaGFuZGxlRXJyb3IiLCJfc2VsZiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRvY3VtZW50IiwidmFsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiYXBwZW5kIiwicmVhZHkiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsZ0I7Ozs7Ozs7MkJBQ0s7QUFDSCxVQUFJQyxZQUFZLEdBQUdDLENBQUMsQ0FBQyxnQkFBRCxDQUFwQjtBQUNBRCxrQkFBWSxDQUFDRSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLGVBQXpCLEVBQTBDLFVBQUFDLEtBQUssRUFBSTtBQUMvQ0EsYUFBSyxDQUFDQyxjQUFOO0FBRUFILFNBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCSSxJQUF4QixDQUE2QixTQUE3QixFQUF3Q0osQ0FBQyxDQUFDRSxLQUFLLENBQUNHLGFBQVAsQ0FBRCxDQUF1QkQsSUFBdkIsQ0FBNEIsU0FBNUIsQ0FBeEM7QUFDQUosU0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJNLEtBQTNCLENBQWlDLE1BQWpDO0FBQ0gsT0FMRDtBQU9BUCxrQkFBWSxDQUFDRSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLGdCQUF6QixFQUEyQyxVQUFBQyxLQUFLLEVBQUk7QUFD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QUFXLEVBQUVBO0FBRlgsYUFISDtBQU9IbkIsbUJBQU8sRUFBRSxpQkFBQVAsSUFBSSxFQUFJO0FBQ2JpQixtQkFBSyxDQUFDRSxXQUFOLENBQWtCLGdCQUFsQjs7QUFDQUYsbUJBQUssQ0FBQ0osT0FBTixDQUFjLFFBQWQsRUFBd0JYLEtBQXhCLENBQThCLE1BQTlCOztBQUVBLGtCQUFJRixJQUFJLENBQUNRLEtBQVQsRUFBZ0I7QUFDWkMsdUJBQU8sQ0FBQ0MsU0FBUixDQUFrQlYsSUFBSSxDQUFDVyxPQUF2QjtBQUNILGVBRkQsTUFFTztBQUNIaEIsNEJBQVksQ0FBQ2lCLElBQWIsQ0FBa0IsZ0JBQWxCLEVBQW9DRSxNQUFwQztBQUNBbkIsNEJBQVksQ0FBQ2lCLElBQWIsQ0FBa0IsT0FBbEIsRUFBMkJlLE1BQTNCLENBQWtDM0IsSUFBSSxDQUFDQSxJQUF2QztBQUNBUyx1QkFBTyxDQUFDTSxXQUFSLENBQW9CZixJQUFJLENBQUNXLE9BQXpCO0FBQ0g7QUFDSixhQWxCRTtBQW1CSEgsaUJBQUssRUFBRSxlQUFBUixJQUFJLEVBQUk7QUFDWGlCLG1CQUFLLENBQUNFLFdBQU4sQ0FBa0IsZ0JBQWxCOztBQUNBVixxQkFBTyxDQUFDTyxXQUFSLENBQW9CaEIsSUFBcEI7QUFDSDtBQXRCRSxXQUFQO0FBd0JILFNBekJELE1BeUJPO0FBQ0hpQixlQUFLLENBQUNFLFdBQU4sQ0FBa0IsZ0JBQWxCO0FBQ0g7QUFDSixPQTdDRDtBQThDSDs7Ozs7O0FBR0x2QixDQUFDLENBQUMyQixRQUFELENBQUQsQ0FBWUssS0FBWixDQUFrQixZQUFNO0FBQ3BCLE1BQUlsQyxnQkFBSixHQUF1Qm1DLElBQXZCO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL3BsYXRmb3JtL3BsdWdpbnMvYmFja3VwL3Jlc291cmNlcy9hc3NldHMvanMvYmFja3VwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFja3VwTWFuYWdlbWVudCB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGxldCB0YWJsZV9iYWNrdXAgPSAkKCcjdGFibGUtYmFja3VwcycpO1xyXG4gICAgICAgIHRhYmxlX2JhY2t1cC5vbignY2xpY2snLCAnLmRlbGV0ZURpYWxvZycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5kZWxldGUtY3J1ZC1lbnRyeScpLmRhdGEoJ3NlY3Rpb24nLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3NlY3Rpb24nKSk7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1jb25maXJtLWRlbGV0ZScpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRhYmxlX2JhY2t1cC5vbignY2xpY2snLCAnLnJlc3RvcmVCYWNrdXAnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoJyNyZXN0b3JlLWJhY2t1cC1idXR0b24nKS5kYXRhKCdzZWN0aW9uJywgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdzZWN0aW9uJykpO1xyXG4gICAgICAgICAgICAkKCcjcmVzdG9yZS1iYWNrdXAtbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuZGVsZXRlLWNydWQtZW50cnknKS5vbignY2xpY2snLCBldmVudCA9PiAge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcubW9kYWwtY29uZmlybS1kZWxldGUnKS5tb2RhbCgnaGlkZScpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRlbGV0ZVVSTCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnc2VjdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogZGVsZXRlVVJMLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBaSFhDb3JlLnNob3dFcnJvcihkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlX2JhY2t1cC5maW5kKCdhW2RhdGEtc2VjdGlvbj1cIicgKyBkZWxldGVVUkwgKyAnXCJdJykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgWkhYQ29yZS5zaG93U3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgWkhYQ29yZS5oYW5kbGVFcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNyZXN0b3JlLWJhY2t1cC1idXR0b24nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCBfc2VsZiA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIF9zZWxmLmFkZENsYXNzKCdidXR0b24tbG9hZGluZycpO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogX3NlbGYuZGF0YSgnc2VjdGlvbicpLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBfc2VsZi5yZW1vdmVDbGFzcygnYnV0dG9uLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBfc2VsZi5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBaSFhDb3JlLnNob3dFcnJvcihkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFpIWENvcmUuc2hvd1N1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYucmVtb3ZlQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgWkhYQ29yZS5oYW5kbGVFcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjZ2VuZXJhdGVfYmFja3VwJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcjbmFtZScpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbicpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoJyNjcmVhdGUtYmFja3VwLW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2NyZWF0ZS1iYWNrdXAtbW9kYWwnKS5vbignY2xpY2snLCAnI2NyZWF0ZS1iYWNrdXAtYnV0dG9uJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgX3NlbGYgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBfc2VsZi5hZGRDbGFzcygnYnV0dG9uLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gJCgnI25hbWUnKS52YWwoKTtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gJCgnI2Rlc2NyaXB0aW9uJykudmFsKCk7XHJcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJycgfHwgbmFtZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgWkhYQ29yZS5zaG93RXJyb3IoJ0JhY2t1cCBuYW1lIGlzIHJlcXVpcmVkIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJycgfHwgZGVzY3JpcHRpb24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFpIWENvcmUuc2hvd0Vycm9yKCdCYWNrdXAgZGVzY3JpcHRpb24gaXMgcmVxdWlyZWQhJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAkKCdkaXZbZGF0YS1yb3V0ZS1jcmVhdGVdJykuZGF0YSgncm91dGUtY3JlYXRlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGYucmVtb3ZlQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxmLmNsb3Nlc3QoJy5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWkhYQ29yZS5zaG93RXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlX2JhY2t1cC5maW5kKCcubm8tYmFja3VwLXJvdycpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVfYmFja3VwLmZpbmQoJ3Rib2R5JykuYXBwZW5kKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBaSFhDb3JlLnNob3dTdWNjZXNzKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGYucmVtb3ZlQ2xhc3MoJ2J1dHRvbi1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFpIWENvcmUuaGFuZGxlRXJyb3IoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfc2VsZi5yZW1vdmVDbGFzcygnYnV0dG9uLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICBuZXcgQmFja3VwTWFuYWdlbWVudCgpLmluaXQoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./platform/plugins/backup/resources/assets/js/backup.js\n");

/***/ }),

/***/ 177:
/*!*********************************************************************!*\
  !*** multi ./platform/plugins/backup/resources/assets/js/backup.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jaydeep Mor\Work\Evolution IT Solutions\zhxcore\zhxcore_admin\platform\plugins\backup\resources\assets\js\backup.js */"./platform/plugins/backup/resources/assets/js/backup.js");


/***/ })

/******/ });