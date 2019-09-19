const Util = require("./utils")
const MovingObjects = require("./moving_objects")


const DEFAULTS = {
  RADIUS: 10,
  COLOR: "pink",
  VEL: [0,0]
}


function Ship(options) {
  options.radius = DEFAULTS.RADIUS;
  options.color = DEFAULTS.COLOR;
  options.vel = options.vel || DEFAULTS.VEL;
  options.pos = options.pos
  options.game = options.game

  MovingObjects.call(this, options)
}


Util.inherits(Ship, MovingObjects)
Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0,0];
}

module.exports = Ship;