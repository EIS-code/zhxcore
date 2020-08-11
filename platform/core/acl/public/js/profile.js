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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./platform/core/acl/resources/assets/js/profile.js":
/*!**********************************************************!*\
  !*** ./platform/core/acl/resources/assets/js/profile.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * Created on 06/09/2015.\r\n */\nvar CropAvatar = /*#__PURE__*/function () {\n  function CropAvatar($element) {\n    _classCallCheck(this, CropAvatar);\n\n    this.$container = $element;\n    this.$avatarView = this.$container.find('.avatar-view');\n    this.$triggerButton = this.$avatarView.find('.mt-overlay .btn-outline');\n    this.$avatar = this.$avatarView.find('img');\n    this.$avatarModal = this.$container.find('#avatar-modal');\n    this.$loading = this.$container.find('.loading');\n    this.$avatarForm = this.$avatarModal.find('.avatar-form');\n    this.$avatarSrc = this.$avatarForm.find('.avatar-src');\n    this.$avatarData = this.$avatarForm.find('.avatar-data');\n    this.$avatarInput = this.$avatarForm.find('.avatar-input');\n    this.$avatarSave = this.$avatarForm.find('.avatar-save');\n    this.$avatarWrapper = this.$avatarModal.find('.avatar-wrapper');\n    this.$avatarPreview = this.$avatarModal.find('.avatar-preview');\n    this.support = {\n      fileList: !!$('<input type=\"file\">').prop('files'),\n      fileReader: !!window.FileReader,\n      formData: !!window.FormData\n    };\n  }\n\n  _createClass(CropAvatar, [{\n    key: \"init\",\n    value: function init() {\n      this.support.datauri = this.support.fileList && this.support.fileReader;\n\n      if (!this.support.formData) {\n        this.initIframe();\n      }\n\n      this.initTooltip();\n      this.initModal();\n      this.addListener();\n    }\n  }, {\n    key: \"addListener\",\n    value: function addListener() {\n      this.$triggerButton.on('click', $.proxy(this.click, this));\n      this.$avatarInput.on('change', $.proxy(this.change, this));\n      this.$avatarForm.on('submit', $.proxy(this.submit, this));\n    }\n  }, {\n    key: \"initTooltip\",\n    value: function initTooltip() {\n      this.$avatarView.tooltip({\n        placement: 'bottom'\n      });\n    }\n  }, {\n    key: \"initModal\",\n    value: function initModal() {\n      this.$avatarModal.modal('hide');\n      this.initPreview();\n    }\n  }, {\n    key: \"initPreview\",\n    value: function initPreview() {\n      var url = this.$avatar.prop('src');\n      this.$avatarPreview.empty().html('<img src=\"' + url + '\">');\n    }\n  }, {\n    key: \"initIframe\",\n    value: function initIframe() {\n      var iframeName = 'avatar-iframe-' + Math.random().toString().replace('.', ''),\n          $iframe = $('<iframe name=\"' + iframeName + '\" style=\"display:none;\"></iframe>'),\n          firstLoad = true,\n          _this = this;\n\n      this.$iframe = $iframe;\n      this.$avatarForm.attr('target', iframeName).after($iframe);\n      this.$iframe.on('load', function () {\n        var data, win, doc;\n\n        try {\n          win = this.contentWindow;\n          doc = this.contentDocument;\n          doc = doc ? doc : win.document;\n          data = doc ? doc.body.innerText : null;\n        } catch (e) {}\n\n        if (data) {\n          _this.submitDone(data);\n        } else if (firstLoad) {\n          firstLoad = false;\n        } else {\n          _this.submitFail('Image upload failed!');\n        }\n\n        _this.submitEnd();\n      });\n    }\n  }, {\n    key: \"click\",\n    value: function click() {\n      this.$avatarModal.modal('show');\n    }\n  }, {\n    key: \"change\",\n    value: function change() {\n      var files, file;\n\n      if (this.support.datauri) {\n        files = this.$avatarInput.prop('files');\n\n        if (files.length > 0) {\n          file = files[0];\n\n          if (CropAvatar.isImageFile(file)) {\n            this.read(file);\n          }\n        }\n      } else {\n        file = this.$avatarInput.val();\n\n        if (CropAvatar.isImageFile(file)) {\n          this.syncUpload();\n        }\n      }\n    }\n  }, {\n    key: \"submit\",\n    value: function submit() {\n      if (!this.$avatarSrc.val() && !this.$avatarInput.val()) {\n        ZHXCore.showError('Please select image!');\n        return false;\n      }\n\n      if (this.support.formData) {\n        this.ajaxUpload();\n        return false;\n      }\n    }\n  }, {\n    key: \"read\",\n    value: function read(file) {\n      var _this = this,\n          fileReader = new FileReader();\n\n      fileReader.readAsDataURL(file);\n\n      fileReader.onload = function () {\n        _this.url = this.result;\n\n        _this.startCropper();\n      };\n    }\n  }, {\n    key: \"startCropper\",\n    value: function startCropper() {\n      var _this = this;\n\n      if (this.active) {\n        this.$img.cropper('replace', this.url);\n      } else {\n        this.$img = $('<img src=\"' + this.url + '\">');\n        this.$avatarWrapper.empty().html(this.$img);\n        this.$img.cropper({\n          aspectRatio: 1,\n          rotatable: true,\n          preview: this.$avatarPreview.selector,\n          done: function done(data) {\n            var json = ['{\"x\":' + data.x, '\"y\":' + data.y, '\"height\":' + data.height, '\"width\":' + data.width + \"}\"].join();\n\n            _this.$avatarData.val(json);\n          }\n        });\n        this.active = true;\n      }\n    }\n  }, {\n    key: \"stopCropper\",\n    value: function stopCropper() {\n      if (this.active) {\n        this.$img.cropper('destroy');\n        this.$img.remove();\n        this.active = false;\n      }\n    }\n  }, {\n    key: \"ajaxUpload\",\n    value: function ajaxUpload() {\n      var url = this.$avatarForm.attr('action'),\n          data = new FormData(this.$avatarForm[0]),\n          _this = this;\n\n      $.ajax(url, {\n        type: 'POST',\n        data: data,\n        processData: false,\n        contentType: false,\n        beforeSend: function beforeSend() {\n          _this.submitStart();\n        },\n        success: function success(data) {\n          _this.submitDone(data);\n        },\n        error: function error(XMLHttpRequest, textStatus, errorThrown) {\n          _this.submitFail(XMLHttpRequest.responseJSON, textStatus || errorThrown);\n        },\n        complete: function complete() {\n          _this.submitEnd();\n        }\n      });\n    }\n  }, {\n    key: \"syncUpload\",\n    value: function syncUpload() {\n      this.$avatarSave.trigger('click');\n    }\n  }, {\n    key: \"submitStart\",\n    value: function submitStart() {\n      this.$loading.fadeIn();\n      this.$avatarSave.attr('disabled', true).text('Saving...');\n    }\n  }, {\n    key: \"submitDone\",\n    value: function submitDone(data) {\n      try {\n        data = $.parseJSON(data);\n      } catch (e) {}\n\n      if (data && !data.error) {\n        if (data.data) {\n          this.url = data.data.url;\n\n          if (this.support.datauri || this.uploaded) {\n            this.uploaded = false;\n            this.cropDone();\n          } else {\n            this.uploaded = true;\n            this.$avatarSrc.val(this.url);\n            this.startCropper();\n          }\n\n          this.$avatarInput.val('');\n          ZHXCore.showSuccess(data.message);\n        } else {\n          ZHXCore.showError(data.message);\n        }\n      } else {\n        ZHXCore.showError(data.message);\n      }\n    }\n  }, {\n    key: \"submitEnd\",\n    value: function submitEnd() {\n      this.$loading.fadeOut();\n      this.$avatarSave.removeAttr('disabled').text('Save');\n    }\n  }, {\n    key: \"cropDone\",\n    value: function cropDone() {\n      this.$avatarSrc.val('');\n      this.$avatarData.val('');\n      this.$avatar.prop('src', this.url);\n      $('.user-menu img').prop('src', this.url);\n      $('.user.dropdown img').prop('src', this.url);\n      this.stopCropper();\n      this.initModal();\n    }\n  }], [{\n    key: \"isImageFile\",\n    value: function isImageFile(file) {\n      if (file.type) {\n        return /^image\\/\\w+$/.test(file.type);\n      }\n\n      return /\\.(jpg|jpeg|png|gif)$/.test(file);\n    }\n  }, {\n    key: \"submitFail\",\n    value: function submitFail(errors) {\n      ZHXCore.handleError(errors);\n    }\n  }]);\n\n  return CropAvatar;\n}();\n\n$(document).ready(function () {\n  new CropAvatar($('.crop-avatar')).init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybS9jb3JlL2FjbC9yZXNvdXJjZXMvYXNzZXRzL2pzL3Byb2ZpbGUuanM/Y2I5ZSJdLCJuYW1lcyI6WyJDcm9wQXZhdGFyIiwiJGVsZW1lbnQiLCIkY29udGFpbmVyIiwiJGF2YXRhclZpZXciLCJmaW5kIiwiJHRyaWdnZXJCdXR0b24iLCIkYXZhdGFyIiwiJGF2YXRhck1vZGFsIiwiJGxvYWRpbmciLCIkYXZhdGFyRm9ybSIsIiRhdmF0YXJTcmMiLCIkYXZhdGFyRGF0YSIsIiRhdmF0YXJJbnB1dCIsIiRhdmF0YXJTYXZlIiwiJGF2YXRhcldyYXBwZXIiLCIkYXZhdGFyUHJldmlldyIsInN1cHBvcnQiLCJmaWxlTGlzdCIsIiQiLCJwcm9wIiwiZmlsZVJlYWRlciIsIndpbmRvdyIsIkZpbGVSZWFkZXIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZGF0YXVyaSIsImluaXRJZnJhbWUiLCJpbml0VG9vbHRpcCIsImluaXRNb2RhbCIsImFkZExpc3RlbmVyIiwib24iLCJwcm94eSIsImNsaWNrIiwiY2hhbmdlIiwic3VibWl0IiwidG9vbHRpcCIsInBsYWNlbWVudCIsIm1vZGFsIiwiaW5pdFByZXZpZXciLCJ1cmwiLCJlbXB0eSIsImh0bWwiLCJpZnJhbWVOYW1lIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwicmVwbGFjZSIsIiRpZnJhbWUiLCJmaXJzdExvYWQiLCJfdGhpcyIsImF0dHIiLCJhZnRlciIsImRhdGEiLCJ3aW4iLCJkb2MiLCJjb250ZW50V2luZG93IiwiY29udGVudERvY3VtZW50IiwiZG9jdW1lbnQiLCJib2R5IiwiaW5uZXJUZXh0IiwiZSIsInN1Ym1pdERvbmUiLCJzdWJtaXRGYWlsIiwic3VibWl0RW5kIiwiZmlsZXMiLCJmaWxlIiwibGVuZ3RoIiwiaXNJbWFnZUZpbGUiLCJyZWFkIiwidmFsIiwic3luY1VwbG9hZCIsIlpIWENvcmUiLCJzaG93RXJyb3IiLCJhamF4VXBsb2FkIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsInN0YXJ0Q3JvcHBlciIsImFjdGl2ZSIsIiRpbWciLCJjcm9wcGVyIiwiYXNwZWN0UmF0aW8iLCJyb3RhdGFibGUiLCJwcmV2aWV3Iiwic2VsZWN0b3IiLCJkb25lIiwianNvbiIsIngiLCJ5IiwiaGVpZ2h0Iiwid2lkdGgiLCJqb2luIiwicmVtb3ZlIiwiYWpheCIsInR5cGUiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiYmVmb3JlU2VuZCIsInN1Ym1pdFN0YXJ0Iiwic3VjY2VzcyIsImVycm9yIiwiWE1MSHR0cFJlcXVlc3QiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJyZXNwb25zZUpTT04iLCJjb21wbGV0ZSIsInRyaWdnZXIiLCJmYWRlSW4iLCJ0ZXh0IiwicGFyc2VKU09OIiwidXBsb2FkZWQiLCJjcm9wRG9uZSIsInNob3dTdWNjZXNzIiwibWVzc2FnZSIsImZhZGVPdXQiLCJyZW1vdmVBdHRyIiwic3RvcENyb3BwZXIiLCJ0ZXN0IiwiZXJyb3JzIiwiaGFuZGxlRXJyb3IiLCJyZWFkeSIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7SUFJTUEsVTtBQUNGLHNCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ2xCLFNBQUtDLFVBQUwsR0FBa0JELFFBQWxCO0FBRUEsU0FBS0UsV0FBTCxHQUFtQixLQUFLRCxVQUFMLENBQWdCRSxJQUFoQixDQUFxQixjQUFyQixDQUFuQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsS0FBS0YsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsMEJBQXRCLENBQXRCO0FBQ0EsU0FBS0UsT0FBTCxHQUFlLEtBQUtILFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLEtBQXRCLENBQWY7QUFDQSxTQUFLRyxZQUFMLEdBQW9CLEtBQUtMLFVBQUwsQ0FBZ0JFLElBQWhCLENBQXFCLGVBQXJCLENBQXBCO0FBQ0EsU0FBS0ksUUFBTCxHQUFnQixLQUFLTixVQUFMLENBQWdCRSxJQUFoQixDQUFxQixVQUFyQixD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QTdCLENBQVA7QUFDSDs7OytCQXNIaUJxRCxNLEVBQVE7QUFDdEIvQyxhQUFPLENBQUNnRCxXQUFSLENBQW9CRCxNQUFwQjtBQUNIOzs7Ozs7QUFrQkxwRyxDQUFDLENBQUN1QyxRQUFELENBQUQsQ0FBWStELEtBQVosQ0FBa0IsWUFBTTtBQUNwQixNQUFJeEgsVUFBSixDQUFla0IsQ0FBQyxDQUFDLGNBQUQsQ0FBaEIsRUFBa0N1RyxJQUFsQztBQUNILENBRkQiLCJmaWxlIjoiLi9wbGF0Zm9ybS9jb3JlL2FjbC9yZXNvdXJjZXMvYXNzZXRzL2pzL3Byb2ZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBvbiAwNi8wOS8yMDE1LlxyXG4gKi9cclxuXHJcbmNsYXNzIENyb3BBdmF0YXIge1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLiRjb250YWluZXIgPSAkZWxlbWVudDtcclxuXHJcbiAgICAgICAgdGhpcy4kYXZhdGFyVmlldyA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCcuYXZhdGFyLXZpZXcnKTtcclxuICAgICAgICB0aGlzLiR0cmlnZ2VyQnV0dG9uID0gdGhpcy4kYXZhdGFyVmlldy5maW5kKCcubXQtb3ZlcmxheSAuYnRuLW91dGxpbmUnKTtcclxuICAgICAgICB0aGlzLiRhdmF0YXIgPSB0aGlzLiRhdmF0YXJWaWV3LmZpbmQoJ2ltZycpO1xyXG4gICAgICAgIHRoaXMuJGF2YXRhck1vZGFsID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJyNhdmF0YXItbW9kYWwnKTtcclxuICAgICAgICB0aGlzLiRsb2FkaW5nID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJy5sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgIHRoaXMuJGF2YXRhckZvcm0gPSB0aGlzLiRhdmF0YXJNb2RhbC5maW5kKCcuYXZhdGFyLWZvcm0nKTtcclxuICAgICAgICB0aGlzLiRhdmF0YXJTcmMgPSB0aGlzLiRhdmF0YXJGb3JtLmZpbmQoJy5hdmF0YXItc3JjJyk7XHJcbiAgICAgICAgdGhpcy4kYXZhdGFyRGF0YSA9IHRoaXMuJGF2YXRhckZvcm0uZmluZCgnLmF2YXRhci1kYXRhJyk7XHJcbiAgICAgICAgdGhpcy4kYXZhdGFySW5wdXQgPSB0aGlzLiRhdmF0YXJGb3JtLmZpbmQoJy5hdmF0YXItaW5wdXQnKTtcclxuICAgICAgICB0aGlzLiRhdmF0YXJTYXZlID0gdGhpcy4kYXZhdGFyRm9ybS5maW5kKCcuYXZhdGFyLXNhdmUnKTtcclxuXHJcbiAgICAgICAgdGhpcy4kYXZhdGFyV3JhcHBlciA9IHRoaXMuJGF2YXRhck1vZGFsLmZpbmQoJy5hdmF0YXItd3JhcHBlcicpO1xyXG4gICAgICAgIHRoaXMuJGF2YXRhclByZXZpZXcgPSB0aGlzLiRhdmF0YXJNb2RhbC5maW5kKCcuYXZhdGFyLXByZXZpZXcnKTtcclxuICAgICAgICB0aGlzLnN1cHBvcnQgPSB7XHJcbiAgICAgICAgICAgIGZpbGVMaXN0OiAhISQoJzxpbnB1dCB0eXBlPVwiZmlsZVwiPicpLnByb3AoJ2ZpbGVzJyksXHJcbiAgICAgICAgICAgIGZpbGVSZWFkZXI6ICEhd2luZG93LkZpbGVSZWFkZXIsXHJcbiAgICAgICAgICAgIGZvcm1EYXRhOiAhIXdpbmRvdy5Gb3JtRGF0YVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1cHBvcnQuZGF0YXVyaSA9IHRoaXMuc3VwcG9ydC5maWxlTGlzdCAmJiB0aGlzLnN1cHBvcnQuZmlsZVJlYWRlcjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN1cHBvcnQuZm9ybURhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0SWZyYW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluaXRUb29sdGlwKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kYWwoKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy4kdHJpZ2dlckJ1dHRvbi5vbignY2xpY2snLCAkLnByb3h5KHRoaXMuY2xpY2ssIHRoaXMpKTtcclxuICAgICAgICB0aGlzLiRhdmF0YXJJbnB1dC5vbignY2hhbmdlJywgJC5wcm94eSh0aGlzLmNoYW5nZSwgdGhpcykpO1xyXG4gICAgICAgIHRoaXMuJGF2YXRhckZvcm0ub24oJ3N1Ym1pdCcsICQucHJveHkodGhpcy5zdWJtaXQsIHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VG9vbHRpcCgpIHtcclxuICAgICAgICB0aGlzLiRhdmF0YXJWaWV3LnRvb2x0aXAoe1xyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuJGF2YXRhck1vZGFsLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgdGhpcy5pbml0UHJldmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRQcmV2aWV3KCkge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLiRhdmF0YXIucHJvcCgnc3JjJyk7XHJcblxyXG4gICAgICAgIHRoaXMuJGF2YXRhclByZXZpZXcuZW1wdHkoKS5odG1sKCc8aW1nIHNyYz1cIicgKyB1cmwgKyAnXCI+Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdElmcmFtZSgpIHtcclxuICAgICAgICBsZXQgaWZyYW1lTmFtZSA9ICdhdmF0YXItaWZyYW1lLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcnKSxcclxuICAgICAgICAgICAgJGlmcmFtZSA9ICQoJzxpZnJhbWUgbmFtZT1cIicgKyBpZnJhbWVOYW1lICsgJ1wiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPjwvaWZyYW1lPicpLFxyXG4gICAgICAgICAgICBmaXJzdExvYWQgPSB0cnVlLFxyXG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuJGlmcmFtZSA9ICRpZnJhbWU7XHJcbiAgICAgICAgdGhpcy4kYXZhdGFyRm9ybS5hdHRyKCd0YXJnZXQnLCBpZnJhbWVOYW1lKS5hZnRlcigkaWZyYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy4kaWZyYW1lLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSxcclxuICAgICAgICAgICAgICAgIHdpbixcclxuICAgICAgICAgICAgICAgIGRvYztcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB3aW4gPSB0aGlzLmNvbnRlbnRXaW5kb3c7XHJcbiAgICAgICAgICAgICAgICBkb2MgPSB0aGlzLmNvbnRlbnREb2N1bWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2MgPSBkb2MgPyBkb2MgOiB3aW4uZG9jdW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gZG9jID8gZG9jLmJvZHkuaW5uZXJUZXh0IDogbnVsbDtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3VibWl0RG9uZShkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaXJzdExvYWQpIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TG9hZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3VibWl0RmFpbCgnSW1hZ2UgdXBsb2FkIGZhaWxlZCEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgX3RoaXMuc3VibWl0RW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy4kYXZhdGFyTW9kYWwubW9kYWwoJ3Nob3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2UoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVzLFxyXG4gICAgICAgICAgICBmaWxlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdXBwb3J0LmRhdGF1cmkpIHtcclxuICAgICAgICAgICAgZmlsZXMgPSB0aGlzLiRhdmF0YXJJbnB1dC5wcm9wKCdmaWxlcycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZpbGUgPSBmaWxlc1swXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoQ3JvcEF2YXRhci5pc0ltYWdlRmlsZShmaWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZChmaWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbGUgPSB0aGlzLiRhdmF0YXJJbnB1dC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChDcm9wQXZhdGFyLmlzSW1hZ2VGaWxlKGZpbGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNVcGxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLiRhdmF0YXJTcmMudmFsKCkgJiYgIXRoaXMuJGF2YXRhcklucHV0LnZhbCgpKSB7XHJcbiAgICAgICAgICAgIFpIWENvcmUuc2hvd0Vycm9yKCdQbGVhc2Ugc2VsZWN0IGltYWdlIScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdXBwb3J0LmZvcm1EYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWpheFVwbG9hZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc0ltYWdlRmlsZShmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUudHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gL15pbWFnZVxcL1xcdyskLy50ZXN0KGZpbGUudHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAvXFwuKGpwZ3xqcGVnfHBuZ3xnaWYpJC8udGVzdChmaWxlKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkKGZpbGUpIHtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzLFxyXG4gICAgICAgICAgICBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG5cclxuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMudXJsID0gdGhpcy5yZXN1bHQ7XHJcbiAgICAgICAgICAgIF90aGlzLnN0YXJ0Q3JvcHBlcigpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRDcm9wcGVyKCkge1xyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRpbWcuY3JvcHBlcigncmVwbGFjZScsIHRoaXMudXJsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRpbWcgPSAkKCc8aW1nIHNyYz1cIicgKyB0aGlzLnVybCArICdcIj4nKTtcclxuICAgICAgICAgICAgdGhpcy4kYXZhdGFyV3JhcHBlci5lbXB0eSgpLmh0bWwodGhpcy4kaW1nKTtcclxuICAgICAgICAgICAgdGhpcy4kaW1nLmNyb3BwZXIoe1xyXG4gICAgICAgICAgICAgICAgYXNwZWN0UmF0aW86IDEsXHJcbiAgICAgICAgICAgICAgICByb3RhdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3OiB0aGlzLiRhdmF0YXJQcmV2aWV3LnNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgZG9uZShkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd7XCJ4XCI6JyArIGRhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1wieVwiOicgKyBkYXRhLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdcImhlaWdodFwiOicgKyBkYXRhLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1wid2lkdGhcIjonICsgZGF0YS53aWR0aCArIFwifVwiXHJcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRhdmF0YXJEYXRhLnZhbChqc29uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BDcm9wcGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRpbWcuY3JvcHBlcignZGVzdHJveScpO1xyXG4gICAgICAgICAgICB0aGlzLiRpbWcucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFqYXhVcGxvYWQoKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuJGF2YXRhckZvcm0uYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgRm9ybURhdGEodGhpcy4kYXZhdGFyRm9ybVswXSksXHJcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgJC5hamF4KHVybCwge1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3VibWl0U3RhcnQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN1Ym1pdERvbmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBlcnJvcjogKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3VibWl0RmFpbChYTUxIdHRwUmVxdWVzdC5yZXNwb25zZUpTT04sIHRleHRTdGF0dXMgfHwgZXJyb3JUaHJvd24pO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN1Ym1pdEVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3luY1VwbG9hZCgpIHtcclxuICAgICAgICB0aGlzLiRhdmF0YXJTYXZlLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0U3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy4kbG9hZGluZy5mYWRlSW4oKTtcclxuICAgICAgICB0aGlzLiRhdmF0YXJTYXZlLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSkudGV4dCgnU2F2aW5nLi4uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0RG9uZShkYXRhKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSAkLnBhcnNlSlNPTihkYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YSAmJiAhZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVybCA9IGRhdGEuZGF0YS51cmw7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3VwcG9ydC5kYXRhdXJpIHx8IHRoaXMudXBsb2FkZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcm9wRG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhdmF0YXJTcmMudmFsKHRoaXMudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q3JvcHBlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJGF2YXRhcklucHV0LnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICBaSFhDb3JlLnNob3dTdWNjZXNzKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBaSFhDb3JlLnNob3dFcnJvcihkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgWkhYQ29yZS5zaG93RXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHN1Ym1pdEZhaWwoZXJyb3JzKSB7XHJcbiAgICAgICAgWkhYQ29yZS5oYW5kbGVFcnJvcihlcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdEVuZCgpIHtcclxuICAgICAgICB0aGlzLiRsb2FkaW5nLmZhZGVPdXQoKTtcclxuICAgICAgICB0aGlzLiRhdmF0YXJTYXZlLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJykudGV4dCgnU2F2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyb3BEb25lKCkge1xyXG4gICAgICAgIHRoaXMuJGF2YXRhclNyYy52YWwoJycpO1xyXG4gICAgICAgIHRoaXMuJGF2YXRhckRhdGEudmFsKCcnKTtcclxuICAgICAgICB0aGlzLiRhdmF0YXIucHJvcCgnc3JjJywgdGhpcy51cmwpO1xyXG4gICAgICAgICQoJy51c2VyLW1lbnUgaW1nJykucHJvcCgnc3JjJywgdGhpcy51cmwpO1xyXG4gICAgICAgICQoJy51c2VyLmRyb3Bkb3duIGltZycpLnByb3AoJ3NyYycsIHRoaXMudXJsKTtcclxuICAgICAgICB0aGlzLnN0b3BDcm9wcGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kYWwoKTtcclxuICAgIH1cclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgbmV3IENyb3BBdmF0YXIoJCgnLmNyb3AtYXZhdGFyJykpLmluaXQoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./platform/core/acl/resources/assets/js/profile.js\n");

/***/ }),

/***/ 1:
/*!****************************************************************!*\
  !*** multi ./platform/core/acl/resources/assets/js/profile.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jaydeep Mor\Work\Evolution IT Solutions\zhxcore\zhxcore_admin\platform\core\acl\resources\assets\js\profile.js */"./platform/core/acl/resources/assets/js/profile.js");


/***/ })

/******/ });