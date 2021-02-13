(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["floatingLabel"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["floatingLabel"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-floating-label/src/CoCreate-floating-label.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-floating-label/src/CoCreate-floating-label.js":
/*!*************************************************************************************!*\
  !*** ../CoCreate-components/CoCreate-floating-label/src/CoCreate-floating-label.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 'use restrict'\nvar CoCreateFloatingLabel = {\n  className: 'floating-label_field',\n  init: function init() {\n    this.initElement();\n  },\n  initElement: function initElement(container) {\n    var self = this;\n    var mainContainer = container || document;\n\n    if (!mainContainer.querySelectorAll) {\n      return;\n    }\n\n    var elements = mainContainer.querySelectorAll('.floating-label');\n\n    if (elements.length == 0 && mainContainer.classList && mainContainer.classList.contains('floating-label')) {\n      elements = [mainContainer];\n    }\n\n    elements.forEach(function (el) {\n      self.render(el);\n\n      self.__initEvents(el);\n    });\n  },\n  render: function render(node) {\n    if (node.parentNode && !node.parentNode.classList.contains(this.className)) {\n      var placeholder = node.getAttribute('placeholder');\n      var wrapper = document.createElement('div');\n      node.setAttribute(\"placeholder\", \"\");\n      wrapper.className = this.className;\n\n      this.__wrap(node, wrapper, placeholder);\n\n      this.update(node);\n    }\n  },\n  update: function update(node, value) {\n    if (node.classList.contains('floating-label') && node.parentNode.classList.contains('floating-label_field')) {\n      var _parent = node.parentNode;\n      var active = node.hasAttribute('active');\n\n      if (node.value || value || active) {\n        node.classList.add(\"text_color\");\n\n        _parent.classList.add('active');\n      } else {\n        node.classList.remove(\"text_color\");\n\n        _parent.classList.remove('active');\n      }\n    }\n  },\n  __wrap: function __wrap(el, wrapper, placeholder) {\n    el.parentNode.insertBefore(wrapper, el);\n    var div1 = document.createElement('div');\n    div1.className = \"floating-label_outline\";\n    var div2 = document.createElement('div');\n    div2.className = \"floating-label_leading\";\n    var div3 = document.createElement('div');\n    div3.className = \"floating-label_notch\";\n    var label = document.createElement('label');\n    label.className = \"floating-label_label\";\n    label.innerHTML = placeholder;\n    var div4 = document.createElement('div');\n    div4.className = \"floating-label_trailing\";\n    div1.appendChild(div2);\n    div3.appendChild(label);\n    div1.appendChild(div3);\n    div1.appendChild(div4);\n    wrapper.appendChild(div1);\n    wrapper.appendChild(el);\n  },\n  __initEvents: function __initEvents(node) {\n    node.addEventListener('focus', function (event) {\n      var inputContent = node.value;\n      var tag_name = node.tagName.toLowerCase();\n\n      if (inputContent == '' || tag_name == 'select') {\n        node.classList.add(\"text_color\");\n        parent = node.closest(\"div\");\n        parent.classList.add(\"active\");\n      }\n    });\n    node.addEventListener('blur', function (event) {\n      var inputContent = node.value;\n      var active = node.hasAttribute('active');\n\n      if (inputContent == '' && !active) {\n        node.classList.remove(\"text_color\");\n        parent = node.closest(\"div\");\n        parent.classList.remove(\"active\");\n      }\n    });\n    node.addEventListener('CoCreateSelect-open', function (e) {\n      var parent = this.parentNode;\n      parent.classList.add('active');\n    });\n    node.addEventListener('CoCreateSelect-close', function (e) {\n      if (!CoCreate.select) return;\n      var value = CoCreate.select.getValue(this);\n      var active = this.hasAttribute('active');\n      if (!active && (!value || value.length == 0)) this.parentNode.classList.remove('active');\n    });\n    node.addEventListener('selectedValue', function (e) {\n      if (!CoCreate.select) return;\n      var value = CoCreate.select.getValue(this);\n\n      if (value && value.length > 0) {\n        this.parentNode.classList.add('active');\n      } else {\n        this.parentNode.classList.remove('active');\n      }\n    });\n  }\n};\nCoCreateFloatingLabel.init();\nCoCreate.observer.init({\n  name: 'CoCreateFloatingLabelInit',\n  observe: ['subtree', 'childList'],\n  include: '.floating-label',\n  callback: function callback(mutation) {\n    // console.log(mutation)\n    CoCreateFloatingLabel.initElement(mutation.target);\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateFloatingLabel);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5mbG9hdGluZ0xhYmVsLy4uL0NvQ3JlYXRlLWNvbXBvbmVudHMvQ29DcmVhdGUtZmxvYXRpbmctbGFiZWwvc3JjL0NvQ3JlYXRlLWZsb2F0aW5nLWxhYmVsLmpzPzQ0MGQiXSwibmFtZXMiOlsiQ29DcmVhdGVGbG9hdGluZ0xhYmVsIiwiY2xhc3NOYW1lIiwiaW5pdCIsImluaXRFbGVtZW50IiwiY29udGFpbmVyIiwic2VsZiIsIm1haW5Db250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50cyIsImxlbmd0aCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZm9yRWFjaCIsImVsIiwicmVuZGVyIiwiX19pbml0RXZlbnRzIiwibm9kZSIsInBhcmVudE5vZGUiLCJwbGFjZWhvbGRlciIsImdldEF0dHJpYnV0ZSIsIndyYXBwZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiX193cmFwIiwidXBkYXRlIiwidmFsdWUiLCJwYXJlbnQiLCJhY3RpdmUiLCJoYXNBdHRyaWJ1dGUiLCJhZGQiLCJyZW1vdmUiLCJpbnNlcnRCZWZvcmUiLCJkaXYxIiwiZGl2MiIsImRpdjMiLCJsYWJlbCIsImlubmVySFRNTCIsImRpdjQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImlucHV0Q29udGVudCIsInRhZ19uYW1lIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiY2xvc2VzdCIsImUiLCJDb0NyZWF0ZSIsInNlbGVjdCIsImdldFZhbHVlIiwib2JzZXJ2ZXIiLCJuYW1lIiwib2JzZXJ2ZSIsImluY2x1ZGUiLCJjYWxsYmFjayIsIm11dGF0aW9uIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBRUEsSUFBTUEscUJBQXFCLEdBQUc7QUFDNUJDLFdBQVMsRUFBRSxzQkFEaUI7QUFHNUJDLE1BQUksRUFBRSxnQkFBVztBQUNmLFNBQUtDLFdBQUw7QUFD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LEVBQThDLEtBQUtRLFVBQUwsQ0FBZ0JQLFNBQWhCLENBQTBCb0IsTUFBMUIsQ0FBaUMsUUFBakM7QUFDL0MsS0FMRDtBQU9BZCxRQUFJLENBQUN1QixnQkFBTCxDQUFzQixlQUF0QixFQUF1QyxVQUFTTyxDQUFULEVBQVk7QUFDakQsVUFBSSxDQUFDQyxRQUFRLENBQUNDLE1BQWQsRUFBc0I7QUFDdEIsVUFBSXZCLEtBQUssR0FBR3NCLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsUUFBaEIsQ0FBeUIsSUFBekIsQ0FBWjs7QUFFQSxVQUFJeEIsS0FBSyxJQUFJQSxLQUFLLENBQUNoQixNQUFOLEdBQWUsQ0FBNUIsRUFBK0I7QUFDN0IsYUFBS1EsVUFBTCxDQUFnQlAsU0FBaEIsQ0FBMEJtQixHQUExQixDQUE4QixRQUE5QjtBQUNELE9BRkQsTUFHSztBQUNILGFBQUtaLFVBQUwsQ0FBZ0JQLFNBQWhCLENBQTBCb0IsTUFBMUIsQ0FBaUMsUUFBakM7QUFDRDtBQUNGLEtBVkQ7QUFXRDtBQTFIMkIsQ0FBOUI7QUE4SEEvQixxQkFBcUIsQ0FBQ0UsSUFBdEI7QUFFQThDLFFBQVEsQ0FBQ0csUUFBVCxDQUFrQmpELElBQWxCLENBQXVCO0FBQ3JCa0QsTUFBSSxFQUFFLDJCQURlO0FBRXJCQyxTQUFPLEVBQUUsQ0FBQyxTQUFELEVBQVksV0FBWixDQUZZO0FBR3JCQyxTQUFPLEVBQUUsaUJBSFk7QUFJckJDLFVBQVEsRUFBRSxrQkFBU0MsUUFBVCxFQUFtQjtBQUMzQjtBQUNBeEQseUJBQXFCLENBQUNHLFdBQXRCLENBQWtDcUQsUUFBUSxDQUFDQyxNQUEzQztBQUNEO0FBUG9CLENBQXZCO0FBVWV6RCxvRkFBZiIsImZpbGUiOiIuLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLWZsb2F0aW5nLWxhYmVsL3NyYy9Db0NyZWF0ZS1mbG9hdGluZy1sYWJlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICd1c2UgcmVzdHJpY3QnXG5cbmNvbnN0IENvQ3JlYXRlRmxvYXRpbmdMYWJlbCA9IHtcbiAgY2xhc3NOYW1lOiAnZmxvYXRpbmctbGFiZWxfZmllbGQnLFxuXG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdEVsZW1lbnQoKVxuICB9LFxuXG4gIGluaXRFbGVtZW50OiBmdW5jdGlvbihjb250YWluZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGxldCBtYWluQ29udGFpbmVyID0gY29udGFpbmVyIHx8IGRvY3VtZW50O1xuICAgIGlmICghbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGVsZW1lbnRzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvYXRpbmctbGFiZWwnKTtcblxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT0gMCAmJiBtYWluQ29udGFpbmVyLmNsYXNzTGlzdCAmJiBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZmxvYXRpbmctbGFiZWwnKSkge1xuICAgICAgZWxlbWVudHMgPSBbbWFpbkNvbnRhaW5lcl07XG4gICAgfVxuXG4gICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBzZWxmLnJlbmRlcihlbCk7XG4gICAgICBzZWxmLl9faW5pdEV2ZW50cyhlbClcbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24obm9kZSkge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUgJiYgIW5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc05hbWUpKSB7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IG5vZGUuZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpO1xuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlwiKVxuICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZTtcbiAgICAgIHRoaXMuX193cmFwKG5vZGUsIHdyYXBwZXIsIHBsYWNlaG9sZGVyKTtcbiAgICAgIHRoaXMudXBkYXRlKG5vZGUpO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uKG5vZGUsIHZhbHVlKSB7XG4gICAgaWYgKG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbG9hdGluZy1sYWJlbCcpICYmIG5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zsb2F0aW5nLWxhYmVsX2ZpZWxkJykpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IG5vZGUuaGFzQXR0cmlidXRlKCdhY3RpdmUnKVxuICAgICAgaWYgKG5vZGUudmFsdWUgfHwgdmFsdWUgfHwgYWN0aXZlKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcInRleHRfY29sb3JcIik7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0X2NvbG9yXCIpO1xuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9fd3JhcDogZnVuY3Rpb24oZWwsIHdyYXBwZXIsIHBsYWNlaG9sZGVyKSB7XG4gICAgZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWwpO1xuICAgIHZhciBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MS5jbGFzc05hbWUgPSBcImZsb2F0aW5nLWxhYmVsX291dGxpbmVcIjtcbiAgICB2YXIgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjIuY2xhc3NOYW1lID0gXCJmbG9hdGluZy1sYWJlbF9sZWFkaW5nXCI7XG4gICAgdmFyIGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYzLmNsYXNzTmFtZSA9IFwiZmxvYXRpbmctbGFiZWxfbm90Y2hcIjtcbiAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmNsYXNzTmFtZSA9IFwiZmxvYXRpbmctbGFiZWxfbGFiZWxcIjtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSBwbGFjZWhvbGRlcjtcbiAgICB2YXIgZGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjQuY2xhc3NOYW1lID0gXCJmbG9hdGluZy1sYWJlbF90cmFpbGluZ1wiO1xuICAgIGRpdjEuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgZGl2My5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgZGl2MS5hcHBlbmRDaGlsZChkaXYzKTtcbiAgICBkaXYxLmFwcGVuZENoaWxkKGRpdjQpO1xuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkaXYxKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsKTtcbiAgfSxcblxuICBfX2luaXRFdmVudHM6IGZ1bmN0aW9uKG5vZGUpIHtcblxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0Q29udGVudCA9IG5vZGUudmFsdWU7XG4gICAgICBjb25zdCB0YWdfbmFtZSA9IG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICBpZiAoaW5wdXRDb250ZW50ID09ICcnIHx8IHRhZ19uYW1lID09ICdzZWxlY3QnKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcInRleHRfY29sb3JcIik7XG4gICAgICAgIHBhcmVudCA9IG5vZGUuY2xvc2VzdChcImRpdlwiKTtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0Q29udGVudCA9IG5vZGUudmFsdWU7XG4gICAgICBjb25zdCBhY3RpdmUgPSBub2RlLmhhc0F0dHJpYnV0ZSgnYWN0aXZlJylcbiAgICAgIGlmIChpbnB1dENvbnRlbnQgPT0gJycgJiYgIWFjdGl2ZSkge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0X2NvbG9yXCIpO1xuICAgICAgICBwYXJlbnQgPSBub2RlLmNsb3Nlc3QoXCJkaXZcIik7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG5cblxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignQ29DcmVhdGVTZWxlY3Qtb3BlbicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSlcblxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignQ29DcmVhdGVTZWxlY3QtY2xvc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoIUNvQ3JlYXRlLnNlbGVjdCkgcmV0dXJuO1xuICAgICAgbGV0IHZhbHVlID0gQ29DcmVhdGUuc2VsZWN0LmdldFZhbHVlKHRoaXMpO1xuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpXG4gICAgICBpZiAoIWFjdGl2ZSAmJiAoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkgdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG5cbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGVkVmFsdWUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoIUNvQ3JlYXRlLnNlbGVjdCkgcmV0dXJuO1xuICAgICAgbGV0IHZhbHVlID0gQ29DcmVhdGUuc2VsZWN0LmdldFZhbHVlKHRoaXMpO1xuXG4gICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbn1cblxuQ29DcmVhdGVGbG9hdGluZ0xhYmVsLmluaXQoKTtcblxuQ29DcmVhdGUub2JzZXJ2ZXIuaW5pdCh7IFxuICBuYW1lOiAnQ29DcmVhdGVGbG9hdGluZ0xhYmVsSW5pdCcsXG4gIG9ic2VydmU6IFsnc3VidHJlZScsICdjaGlsZExpc3QnXSxcbiAgaW5jbHVkZTogJy5mbG9hdGluZy1sYWJlbCcsXG4gIGNhbGxiYWNrOiBmdW5jdGlvbihtdXRhdGlvbikge1xuICAgIC8vIGNvbnNvbGUubG9nKG11dGF0aW9uKVxuICAgIENvQ3JlYXRlRmxvYXRpbmdMYWJlbC5pbml0RWxlbWVudChtdXRhdGlvbi50YXJnZXQpXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IENvQ3JlYXRlRmxvYXRpbmdMYWJlbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-floating-label/src/CoCreate-floating-label.js\n");

/***/ })

/******/ })["default"];
});