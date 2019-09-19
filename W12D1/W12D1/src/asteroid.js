const Util = require("./utils")
const MovingObjects = require("./moving_objects")
const Ship = require("./ship")

const DEFAULTS = {
  COLOR: "yellow",
  RADIUS: 30,
  VEL: Util.randomVec(4)
};

function Asteroid(opts){
  // opts = opts || {};
  opts.color = opts.color || DEFAULTS.COLOR;
  opts.pos = opts.pos;
  opts.vel = opts.vel || DEFAULTS.VEL;
  opts.radius = opts.radius || DEFAULTS.RADIUS;
  opts.game = opts.game;

  
  MovingObjects.call(this, opts); // this = function Asteroid() , opts = {pos, color, etc...}
}

Util.inherits(Asteroid, MovingObjects);

Asteroid.prototype.collidedWith = function(otherObj){
  if(otherObj instanceof Ship) {
    otherObj.relocate();
    return true;
  }
   //sqrt((posX2 - posX1)^2 + (posY2 - posY1)^2) <--- Distance Formula
   const dist = Math.sqrt((otherObj.pos[0] - this.pos[0]) ** 2 + (otherObj.pos[1] - this.pos[1]) ** 2)
   // debugger;
   if (dist < (otherObj.radius + this.radius)) {

     this.game.remove(this);
     this.game.remove(otherObj);
     return true;
   } else {
     return false;
   }
}








module.exports = Asteroid;