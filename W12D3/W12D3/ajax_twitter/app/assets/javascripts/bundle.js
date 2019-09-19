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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! exports provided: FollowToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowToggle", function() { return FollowToggle; });
/* harmony import */ var _util_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/api_util */ "./frontend/util/api_util.js");



function FollowToggle(el) { // this is html
  this.$el = $(el); // this is jquery
  this.userId = this.$el.data("user-id");
  this.followState = this.$el.data("initial-follow-state");
  // debugger
  this.render();
  this.$el.on("click",this.handleClick.bind(this)); // e is always passed to callback automatically
}

FollowToggle.prototype.render = function(){
  if (this.followState === "following" || this.followState === "unfollowing"){
    this.$el.prop("disabled", true)
  }
  else{
    this.$el.prop("disabled", false)
  }
    if (this.followState === "unfollowed"){
      this.$el.text("Follow!")
    }
    else if (this.followState === "followed") {
      this.$el.text("Unfollow!")
    }
}

FollowToggle.prototype.handleClick = function(e) {
  e.preventDefault();
  if(this.followState === "unfollowed") {
    // debugger 
    _util_api_util__WEBPACK_IMPORTED_MODULE_0__["APIUtil"].followUser(this.userId).then(() => {
      this.followState = "followed";
      this.render();
    });
    this.followState = "following";
    this.render();
  }
  else if (this.followState === "followed") {
    //debugger
    _util_api_util__WEBPACK_IMPORTED_MODULE_0__["APIUtil"].unfollowUser(this.userId).then(() => {
      this.followState = "unfollowed";
      this.render();
    });
    this.followState = "unfollowing";
    this.render();
  }
  // this.render();
}



/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _follow_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");



$(() => { 
  $("button.follow-toggle").each(function(_idx, el){ //el is html element(button)
    new _follow_toggle__WEBPACK_IMPORTED_MODULE_0__["FollowToggle"](el);
  })
  $("nav.users-search").each(function (_idx, el) { //el is html element(button)
    new UsersSearch(el);
  })
}); 

/***/ }),

/***/ "./frontend/util/api_util.js":
/*!***********************************!*\
  !*** ./frontend/util/api_util.js ***!
  \***********************************/
/*! exports provided: APIUtil */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (24:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|       data: `${queryVal}`\n|   }\n> };");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map