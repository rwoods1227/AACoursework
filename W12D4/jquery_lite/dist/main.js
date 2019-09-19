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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! exports provided: DOMNodeCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMNodeCollection\", function() { return DOMNodeCollection; });\nclass DOMNodeCollection {\n  constructor(arr) {\n    this.arr = arr;\n  }\n\n  html(str){\n    if (str){\n      this.arr.forEach(element => {\n        element.innerHTML = str; \n      });\n    }\n    else{\n      return this.arr[0].innerHTML;\n    }\n  }\n  empty(){\n    this.arr.forEach(element => {\n      element.innerHTML = \"\";\n    });\n  }\n\n  append(ele){\n    if (ele instanceof DOMNodeCollection){\n      ele.arr.forEach(element => {\n        this.append(element);\n      });\n    } else if (ele instanceof HTMLElement){\n      this.arr.forEach(element => {\n        element.innerHTML += ele.outerHTML;\n      });\n    } else if (typeof ele === \"string\"){\n      this.arr.forEach(element => {\n        element.innerHTML += ele;\n      });\n    }\n  }\n\n  attr(attrName, value) {\n    if (value) {\n      this.arr.forEach(element => {\n        element.setAttribute(attrName, value);\n      });\n    } else {\n     return this.arr[0].getAttribute(attrName);\n    }\n  }\n\n  addClass(className) {\n    this.arr.forEach(element => {\n      element.classList.add(className);\n    });\n  }\n\n  removeClass(className) {\n    this.arr.forEach(element => {\n      element.classList.remove(className);\n    });\n  }\n\n  children() {\n    let array = [];\n    this.arr.forEach(element => {\n      const nodeList = element.children;\n      array = array.concat(Array.from(nodeList));\n    });\n    return new DOMNodeCollection(array);\n  }\n\n  parent() {\n    let array = [];\n    this.arr.forEach(element => {\n      const nodeList = [element.parentNode]; \n     array = array.concat(Array.from(nodeList));\n    });\n    return new DOMNodeCollection(array);\n  }\n\n  find(selector){\n    let array = [];\n    this.arr.forEach(element => {\n      const nodeList = element.querySelectorAll(selector);\n      array = array.concat(Array.from(nodeList));\n    });\n    return new DOMNodeCollection(array);\n  }\n\n  remove(selector){\n    if(selector){\n      this.find(selector).empty()\n    }\n    else {\n      this.empty();\n    }\n  }\n\n  on(event, callback){\n    this.arr.forEach(element => {\n      element.addEventListener(event, callback)\n      element.callback = callback;\n    });\n  }\n\n  off(event){\n    this.arr.forEach(element => {\n      element.removeEventListener(event, element.callback)\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\n\nconst functions = [];\nwindow.$l = function (arg) {\n  let collection;\n  if (arg instanceof HTMLElement) {\n    const arr = [arg];\n    collection = new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"DOMNodeCollection\"](arr);\n    return collection\n  } else if (typeof arg === \"string\") {\n    const nodeList = document.querySelectorAll(arg);\n    const arr = Array.from(nodeList);\n    collection = new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"DOMNodeCollection\"](arr);\n    return collection\n  } else if (arg instanceof Function) {\n    if (\n      document.readyState === \"complete\" ||\n      (document.readyState !== \"loading\" && !document.documentElement.doScroll)\n      ) { \n        arg();\n      } else {\n      functions.push(arg);\n      document.addEventListener(\"DOMContentLoaded\", () => {\n        while (functions.length > 0) {\n          let fn = functions.shift();\n          fn();\n        }\n      });\n    }\n  }\n}\n\nwindow.$l.extend = function(arg, ...args) {\n  args.forEach(obj => {\n    Object.keys(obj).forEach(key => {\n      arg[key] = obj[key];\n    })\n  })\n  return arg;\n}\n\nwindow.$l.ajax = function(options){\n  const defaults = {\n    method: 'GET',\n    url: document.URL,\n    data: \"\",\n    success: function (){},\n    error: function(){} }\n  const merged = $l.extend(defaults, options);\n  \n  const xhr = new XMLHttpRequest();\n  xhr.open(merged.method, merged.url)\n  xhr.responseType = merged.contentType;\n\n  xhr.onload = function () {\n    console.log(xhr.status) // for status info\n    console.log(xhr.responseType) //the type of data that was returned\n    console.log(xhr.response) //the actual response. For JSON api calls, this will be a JSON string\n    if (xhr.status === 200) {\n      merged.success(xhr.response);\n    } else {\n      merged.error();\n    }\n  }\n  const optionalData = merged.data;\n  xhr.send(optionalData);\n}\n\n$l(() => {\n  const $ul = $l('ul');\n  $ul.on(\"click\", () => alert('hi'));\n\n\n  $l.ajax({\n    type: 'GET',\n    contentType: \"json\",\n    url: \"http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b\",\n    success(data) {\n      console.log(\"We have your weather!\")\n      console.log(data);\n    },\n    error() {\n      console.error(\"An error occurred.\");\n    },\n  });\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });