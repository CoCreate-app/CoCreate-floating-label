(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoCreate-floating-label"] = factory();
	else
		root["CoCreate-floating-label"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./CoCreate-components/CoCreate-floating-labels/src/CoCreate-floating-label.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./CoCreate-components/CoCreate-floating-labels/src/CoCreate-floating-label.js":
/*!*************************************************************************************!*\
  !*** ./CoCreate-components/CoCreate-floating-labels/src/CoCreate-floating-label.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 'use restrict'\nvar CoCreateFloatingLabel = {\n  className: 'floating-label_field',\n  init: function init() {\n    this.initElement();\n  },\n  initElement: function initElement(container) {\n    var self = this;\n    var mainContainer = container || document;\n\n    if (!mainContainer.querySelectorAll) {\n      return;\n    }\n\n    var elements = mainContainer.querySelectorAll('.floating-label');\n\n    if (elements.length == 0 && mainContainer.classList && mainContainer.classList.contains('floating-label')) {\n      elements = [mainContainer];\n    }\n\n    elements.forEach(function (el) {\n      self.render(el);\n\n      self.__initEvents(el);\n    });\n  },\n  render: function render(node) {\n    if (!node.parentNode.classList.contains(this.className)) {\n      var placeholder = node.getAttribute('placeholder');\n      var wrapper = document.createElement('div');\n      node.setAttribute(\"placeholder\", \"\");\n      wrapper.className = this.className;\n\n      this.__wrap(node, wrapper, placeholder);\n\n      this.update(node);\n    }\n  },\n  update: function update(node, value) {\n    if (node.classList.contains('floating-label') && node.parentNode.classList.contains('floating-label_field')) {\n      var _parent = node.parentNode;\n      var active = node.hasAttribute('active');\n\n      if (node.value || value || active) {\n        node.classList.add(\"text_color\");\n\n        _parent.classList.add('active');\n      } else {\n        node.classList.remove(\"text_color\");\n\n        _parent.classList.remove('active');\n      }\n    }\n  },\n  __wrap: function __wrap(el, wrapper, placeholder) {\n    el.parentNode.insertBefore(wrapper, el);\n    var div1 = document.createElement('div');\n    div1.className = \"floating-label_outline\";\n    var div2 = document.createElement('div');\n    div2.className = \"floating-label_leading\";\n    var div3 = document.createElement('div');\n    div3.className = \"floating-label_notch\";\n    var label = document.createElement('label');\n    label.className = \"floating-label_label\";\n    label.innerHTML = placeholder;\n    var div4 = document.createElement('div');\n    div4.className = \"floating-label_trailing\";\n    div1.appendChild(div2);\n    div3.appendChild(label);\n    div1.appendChild(div3);\n    div1.appendChild(div4);\n    wrapper.appendChild(div1);\n    wrapper.appendChild(el);\n  },\n  __initEvents: function __initEvents(node) {\n    node.addEventListener('focus', function (event) {\n      var inputContent = node.value;\n      var tag_name = node.tagName.toLowerCase();\n\n      if (inputContent == '' || tag_name == 'select') {\n        node.classList.add(\"text_color\");\n        parent = node.closest(\"div\");\n        parent.classList.add(\"active\");\n      }\n    });\n    node.addEventListener('blur', function (event) {\n      var inputContent = node.value;\n      var active = node.hasAttribute('active');\n\n      if (inputContent == '' && !active) {\n        node.classList.remove(\"text_color\");\n        parent = node.closest(\"div\");\n        parent.classList.remove(\"active\");\n      }\n    });\n    node.addEventListener('CoCreateSelect-open', function (e) {\n      var parent = this.parentNode;\n      parent.classList.add('active');\n    });\n    node.addEventListener('CoCreateSelect-close', function (e) {\n      if (!CoCreateSelect) return;\n      var value = CoCreateSelect.getValue(this);\n      var active = this.hasAttribute('active');\n      if (!active && (!value || value.length == 0)) this.parentNode.classList.remove('active');\n    });\n    node.addEventListener('selectedValue', function (e) {\n      if (!CoCreateSelect) return;\n      var value = CoCreateSelect.getValue(this);\n\n      if (value && value.length > 0) {\n        this.parentNode.classList.add('active');\n      } else {\n        this.parentNode.classList.remove('active');\n      }\n    });\n  }\n};\nCoCreateFloatingLabel.init();\nCoCreateObserver.add({\n  name: 'CoCreateFloatingLabelInit',\n  observe: ['subtree', 'childList'],\n  include: '.floating-label',\n  task: function task(mutation) {\n    // console.log(mutation)\n    CoCreateFloatingLabel.initElement(mutation.target);\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateFloatingLabel);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS1mbG9hdGluZy1sYWJlbC8uL0NvQ3JlYXRlLWNvbXBvbmVudHMvQ29DcmVhdGUtZmxvYXRpbmctbGFiZWxzL3NyYy9Db0NyZWF0ZS1mbG9hdGluZy1sYWJlbC5qcz8yMTVlIl0sIm5hbWVzIjpbIkNvQ3JlYXRlRmxvYXRpbmdMYWJlbCIsImNsYXNzTmFtZSIsImluaXQiLCJpbml0RWxlbWVudCIsImNvbnRhaW5lciIsInNlbGYiLCJtYWluQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudHMiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImZvckVhY2giLCJlbCIsInJlbmRlciIsIl9faW5pdEV2ZW50cyIsIm5vZGUiLCJwYXJlbnROb2RlIiwicGxhY2Vob2xkZXIiLCJnZXRBdHRyaWJ1dGUiLCJ3cmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIl9fd3JhcCIsInVwZGF0ZSIsInZhbHVlIiwicGFyZW50IiwiYWN0aXZlIiwiaGFzQXR0cmlidXRlIiwiYWRkIiwicmVtb3ZlIiwiaW5zZXJ0QmVmb3JlIiwiZGl2MSIsImRpdjIiLCJkaXYzIiwibGFiZWwiLCJpbm5lckhUTUwiLCJkaXY0IiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJpbnB1dENvbnRlbnQiLCJ0YWdfbmFtZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImNsb3Nlc3QiLCJlIiwiQ29DcmVhdGVTZWxlY3QiLCJnZXRWYWx1ZSIsIkNvQ3JlYXRlT2JzZXJ2ZXIiLCJuYW1lIiwib2JzZXJ2ZSIsImluY2x1ZGUiLCJ0YXNrIiwibXV0YXRpb24iLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRztBQUM1QkMsV0FBUyxFQUFFLHNCQURpQjtBQUc1QkMsTUFBSSxFQUFFLGdCQUFXO0FBQ2YsU0FBS0MsV0FBTDtB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QUFpQyxRQUFqQztBQUMvQyxLQUxEO0FBT0FkLFFBQUksQ0FBQ3VCLGdCQUFMLENBQXNCLGVBQXRCLEVBQXVDLFVBQVNPLENBQVQsRUFBWTtBQUNqRCxVQUFJLENBQUNDLGNBQUwsRUFBcUI7QUFDckIsVUFBSXRCLEtBQUssR0FBR3NCLGNBQWMsQ0FBQ0MsUUFBZixDQUF3QixJQUF4QixDQUFaOztBQUVBLFVBQUl2QixLQUFLLElBQUlBLEtBQUssQ0FBQ2hCLE1BQU4sR0FBZSxDQUE1QixFQUErQjtBQUM3QixhQUFLUSxVQUFMLENBQWdCUCxTQUFoQixDQUEwQm1CLEdBQTFCLENBQThCLFFBQTlCO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsYUFBS1osVUFBTCxDQUFnQlAsU0FBaEIsQ0FBMEJvQixNQUExQixDQUFpQyxRQUFqQztBQUNEO0FBQ0YsS0FWRDtBQVdEO0FBMUgyQixDQUE5QjtBQThIQS9CLHFCQUFxQixDQUFDRSxJQUF0QjtBQUVBZ0QsZ0JBQWdCLENBQUNwQixHQUFqQixDQUFxQjtBQUNuQnFCLE1BQUksRUFBRSwyQkFEYTtBQUVuQkMsU0FBTyxFQUFFLENBQUMsU0FBRCxFQUFZLFdBQVosQ0FGVTtBQUduQkMsU0FBTyxFQUFFLGlCQUhVO0FBSW5CQyxNQUFJLEVBQUUsY0FBU0MsUUFBVCxFQUFtQjtBQUN2QjtBQUNBdkQseUJBQXFCLENBQUNHLFdBQXRCLENBQWtDb0QsUUFBUSxDQUFDQyxNQUEzQztBQUNEO0FBUGtCLENBQXJCO0FBVWV4RCxvRkFBZiIsImZpbGUiOiIuL0NvQ3JlYXRlLWNvbXBvbmVudHMvQ29DcmVhdGUtZmxvYXRpbmctbGFiZWxzL3NyYy9Db0NyZWF0ZS1mbG9hdGluZy1sYWJlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICd1c2UgcmVzdHJpY3QnXG5cbmNvbnN0IENvQ3JlYXRlRmxvYXRpbmdMYWJlbCA9IHtcbiAgY2xhc3NOYW1lOiAnZmxvYXRpbmctbGFiZWxfZmllbGQnLFxuXG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdEVsZW1lbnQoKVxuICB9LFxuXG4gIGluaXRFbGVtZW50OiBmdW5jdGlvbihjb250YWluZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGxldCBtYWluQ29udGFpbmVyID0gY29udGFpbmVyIHx8IGRvY3VtZW50O1xuICAgIGlmICghbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGVsZW1lbnRzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvYXRpbmctbGFiZWwnKTtcblxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT0gMCAmJiBtYWluQ29udGFpbmVyLmNsYXNzTGlzdCAmJiBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZmxvYXRpbmctbGFiZWwnKSkge1xuICAgICAgZWxlbWVudHMgPSBbbWFpbkNvbnRhaW5lcl07XG4gICAgfVxuXG4gICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBzZWxmLnJlbmRlcihlbCk7XG4gICAgICBzZWxmLl9faW5pdEV2ZW50cyhlbClcbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghbm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzTmFtZSkpIHtcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiXCIpXG4gICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lO1xuICAgICAgdGhpcy5fX3dyYXAobm9kZSwgd3JhcHBlciwgcGxhY2Vob2xkZXIpO1xuICAgICAgdGhpcy51cGRhdGUobm9kZSk7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24obm9kZSwgdmFsdWUpIHtcbiAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zsb2F0aW5nLWxhYmVsJykgJiYgbm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZmxvYXRpbmctbGFiZWxfZmllbGQnKSkge1xuICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgY29uc3QgYWN0aXZlID0gbm9kZS5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpXG4gICAgICBpZiAobm9kZS52YWx1ZSB8fCB2YWx1ZSB8fCBhY3RpdmUpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwidGV4dF9jb2xvclwiKTtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInRleHRfY29sb3JcIik7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX193cmFwOiBmdW5jdGlvbihlbCwgd3JhcHBlciwgcGxhY2Vob2xkZXIpIHtcbiAgICBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbCk7XG4gICAgdmFyIGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYxLmNsYXNzTmFtZSA9IFwiZmxvYXRpbmctbGFiZWxfb3V0bGluZVwiO1xuICAgIHZhciBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Mi5jbGFzc05hbWUgPSBcImZsb2F0aW5nLWxhYmVsX2xlYWRpbmdcIjtcbiAgICB2YXIgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjMuY2xhc3NOYW1lID0gXCJmbG9hdGluZy1sYWJlbF9ub3RjaFwiO1xuICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuY2xhc3NOYW1lID0gXCJmbG9hdGluZy1sYWJlbF9sYWJlbFwiO1xuICAgIGxhYmVsLmlubmVySFRNTCA9IHBsYWNlaG9sZGVyO1xuICAgIHZhciBkaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2NC5jbGFzc05hbWUgPSBcImZsb2F0aW5nLWxhYmVsX3RyYWlsaW5nXCI7XG4gICAgZGl2MS5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICBkaXYzLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBkaXYxLmFwcGVuZENoaWxkKGRpdjMpO1xuICAgIGRpdjEuYXBwZW5kQ2hpbGQoZGl2NCk7XG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRpdjEpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWwpO1xuICB9LFxuXG4gIF9faW5pdEV2ZW50czogZnVuY3Rpb24obm9kZSkge1xuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXRDb250ZW50ID0gbm9kZS52YWx1ZTtcbiAgICAgIGNvbnN0IHRhZ19uYW1lID0gbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgIGlmIChpbnB1dENvbnRlbnQgPT0gJycgfHwgdGFnX25hbWUgPT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwidGV4dF9jb2xvclwiKTtcbiAgICAgICAgcGFyZW50ID0gbm9kZS5jbG9zZXN0KFwiZGl2XCIpO1xuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXRDb250ZW50ID0gbm9kZS52YWx1ZTtcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IG5vZGUuaGFzQXR0cmlidXRlKCdhY3RpdmUnKVxuICAgICAgaWYgKGlucHV0Q29udGVudCA9PSAnJyAmJiAhYWN0aXZlKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInRleHRfY29sb3JcIik7XG4gICAgICAgIHBhcmVudCA9IG5vZGUuY2xvc2VzdChcImRpdlwiKTtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG5cblxuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdDb0NyZWF0ZVNlbGVjdC1vcGVuJywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KVxuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdDb0NyZWF0ZVNlbGVjdC1jbG9zZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmICghQ29DcmVhdGVTZWxlY3QpIHJldHVybjtcbiAgICAgIGxldCB2YWx1ZSA9IENvQ3JlYXRlU2VsZWN0LmdldFZhbHVlKHRoaXMpO1xuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpXG4gICAgICBpZiAoIWFjdGl2ZSAmJiAoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkgdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG5cbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGVkVmFsdWUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoIUNvQ3JlYXRlU2VsZWN0KSByZXR1cm47XG4gICAgICBsZXQgdmFsdWUgPSBDb0NyZWF0ZVNlbGVjdC5nZXRWYWx1ZSh0aGlzKTtcblxuICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG59XG5cbkNvQ3JlYXRlRmxvYXRpbmdMYWJlbC5pbml0KCk7XG5cbkNvQ3JlYXRlT2JzZXJ2ZXIuYWRkKHsgXG4gIG5hbWU6ICdDb0NyZWF0ZUZsb2F0aW5nTGFiZWxJbml0JyxcbiAgb2JzZXJ2ZTogWydzdWJ0cmVlJywgJ2NoaWxkTGlzdCddLFxuICBpbmNsdWRlOiAnLmZsb2F0aW5nLWxhYmVsJyxcbiAgdGFzazogZnVuY3Rpb24obXV0YXRpb24pIHtcbiAgICAvLyBjb25zb2xlLmxvZyhtdXRhdGlvbilcbiAgICBDb0NyZWF0ZUZsb2F0aW5nTGFiZWwuaW5pdEVsZW1lbnQobXV0YXRpb24udGFyZ2V0KVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBDb0NyZWF0ZUZsb2F0aW5nTGFiZWw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./CoCreate-components/CoCreate-floating-labels/src/CoCreate-floating-label.js\n");

/***/ })

/******/ })["default"];
});