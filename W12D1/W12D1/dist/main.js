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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\")\nconst MovingObjects = __webpack_require__(/*! ./moving_objects */ \"./src/moving_objects.js\")\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\")\n\nconst DEFAULTS = {\n  COLOR: \"yellow\",\n  RADIUS: 30,\n  VEL: Util.randomVec(4)\n};\n\nfunction Asteroid(opts){\n  // opts = opts || {};\n  opts.color = opts.color || DEFAULTS.COLOR;\n  opts.pos = opts.pos;\n  opts.vel = opts.vel || DEFAULTS.VEL;\n  opts.radius = opts.radius || DEFAULTS.RADIUS;\n  opts.game = opts.game;\n\n  \n  MovingObjects.call(this, opts); // this = function Asteroid() , opts = {pos, color, etc...}\n}\n\nUtil.inherits(Asteroid, MovingObjects);\n\nAsteroid.prototype.collidedWith = function(otherObj){\n  if(otherObj instanceof Ship) {\n    otherObj.relocate();\n    return true;\n  }\n   //sqrt((posX2 - posX1)^2 + (posY2 - posY1)^2) <--- Distance Formula\n   const dist = Math.sqrt((otherObj.pos[0] - this.pos[0]) ** 2 + (otherObj.pos[1] - this.pos[1]) ** 2)\n   // debugger;\n   if (dist < (otherObj.radius + this.radius)) {\n\n     this.game.remove(this);\n     this.game.remove(otherObj);\n     return true;\n   } else {\n     return false;\n   }\n}\n\n\n\n\n\n\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\")\nconst MovingObjects = __webpack_require__(/*! ./moving_objects */ \"./src/moving_objects.js\")\nconst Asteroid= __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\")\n//CONSTANTS\n  const DIM_X = 1000;\n  const DIM_Y = 600;\n  const NUM_ASTEROIDS = 4;\n\n  function Game(){\n    this.asteroids = [];\n    this.addAsteroids();\n    this.ship = [];\n    this.addShips();\n  }\n\n  Game.prototype.allObjects = function(){\n    return this.ship.concat(this.asteroids);\n  }\n\n  Game.prototype.addAsteroids = function() {\n    for(let i = 0; i < NUM_ASTEROIDS; i++){\n      let randoPos = this.randomPosition();\n      this.asteroids.push(new Asteroid({pos: randoPos, game: this}));\n    }\n  }\n\n  Game.prototype.addShips = function(){\n    const newShip = new Ship({\n      pos: this.randomPosition(),\n      game: this\n    });\n    this.ship.push(newShip);\n  }\n\n  Game.prototype.randomPosition = function(){ \n    return [(DIM_X * Math.random()), (DIM_Y * Math.random())]\n  };\n\n  Game.prototype.draw = function(ctx){\n    ctx.clearRect(0, 0, DIM_X, DIM_Y);\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, 1000, 600);\n    this.allObjects().forEach(object => {\n      object.draw(ctx);\n    });\n  }\n\n  Game.prototype.moveObjects = function(){\n    this.allObjects().forEach(element => {\n      element.move();\n    });\n  }\n\n  Game.prototype.wrap = function (pos) {\n    if (pos[0] > DIM_X){\n      pos[0] = pos[0] % DIM_X;\n    }\n    else if (pos[0] < 0){\n      pos[0] = DIM_X - (pos[0] % DIM_X);\n    }\n\n     if (pos[1] > DIM_Y) {\n       pos[1] = pos[1] % DIM_Y;\n     } else if (pos[1] < 1) {\n       pos[1] = DIM_Y - (pos[1] % DIM_Y);\n     }\n  \n      return pos;\n  }\n\n  // 00 ---------- 1000\n  // |\n  // |\n  // |\n  // |\n  // 600\n\n  Game.prototype.checkCollisons = function(){\n    const allObjects = this.allObjects();\n    for(let i = 0; i < allObjects.length; i++){\n      for (let j = i+1; j < allObjects.length; j++){\n       if (allObjects[i].isCollidedWith(allObjects[j])){\n        //  alert(\"Boom!\");  \n       }\n      }\n    }\n  };\n  \n  Game.prototype.step = function(){\n    this.moveObjects();\n    this.checkCollisons();\n  }\n\n  Game.prototype.remove = function(object) { //element = otherObj or this aka Collisee\n    debugger;\n    const allObjects = this.allObjects();\n    if(object instanceof Ship){\n    this.ship.splice(this.ship.indexOf(object), 1)\n  } else if (object instanceof Asteroid){\n    this.asteroids.splice(this.asteroids.indexOf(object), 1)\n  };\n  }\n\n  \nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView(game, ctx){\n  this.ctx = ctx;\n  this.game = game;\n}\n\n\nGameView.prototype.start = function(){\n  setInterval(() => {\n    this.game.step();\n    this.game.draw(this.ctx);\n  }, 20); //1 s = 1000ms\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("document.addEventListener('DOMContentLoaded', (event) => {\n  const gameCanvas = document.getElementById(\"game-canvas\");\n  const ctx = gameCanvas.getContext(\"2d\")\n  ctx.fillStyle = \"black\";\n  ctx.fillRect(0, 0, 1000, 600);\n  // const circle = new MovingObject({pos: [100, 100], vel: [0, 0], radius: 40, color: \"white\"})\n  // circle.draw(ctx);\n    // const newCircle = new Asteroid({\n    //   pos: [30, 30]\n    // });\n    // newCircle.draw(ctx);\n    const game = new Game();\n    game.draw(ctx);\n    const gameView = new GameView(game, ctx);\n    gameView.start();\n});\n\nconsole.log(\"Webpack is Working!\")\n\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");  \nconst MovingObject = __webpack_require__(/*! ./moving_objects.js */ \"./src/moving_objects.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nwindow.Ship = Ship;\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_objects.js":
/*!*******************************!*\
  !*** ./src/moving_objects.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\nfunction MovingObject(options){\nthis.pos = options.pos;\nthis.vel = options.vel;\nthis.radius = options.radius;\nthis.color = options.color;\nthis.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx){\n  ctx.beginPath();\n  ctx.arc(\n    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n  );\n  ctx.strokeStyle = this.color;\n  ctx.linewidth = 5;\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\nthis.pos = this.game.wrap(this.pos);\nthis.pos = [(this.pos[0] + this.vel[0]), (this.pos[1] + this.vel[1])];\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObj){\n \n}\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_objects.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\")\nconst MovingObjects = __webpack_require__(/*! ./moving_objects */ \"./src/moving_objects.js\")\n\n\nconst DEFAULTS = {\n  RADIUS: 10,\n  COLOR: \"pink\",\n  VEL: [0,0]\n}\n\n\nfunction Ship(options) {\n  options.radius = DEFAULTS.RADIUS;\n  options.color = DEFAULTS.COLOR;\n  options.vel = options.vel || DEFAULTS.VEL;\n  options.pos = options.pos\n  options.game = options.game\n\n  MovingObjects.call(this, options)\n}\n\n\nUtil.inherits(Ship, MovingObjects)\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0,0];\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate(){}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n\n  },\n  randomVec(length) {\n      const deg = 2 * Math.PI * Math.random();\n      return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });