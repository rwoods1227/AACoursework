const Util = require("./utils")
const MovingObjects = require("./moving_objects")
const Asteroid= require("./asteroid")
const Ship = require("./ship")
//CONSTANTS
  const DIM_X = 1000;
  const DIM_Y = 600;
  const NUM_ASTEROIDS = 4;

  function Game(){
    this.asteroids = [];
    this.addAsteroids();
    this.ship = [];
    this.addShips();
  }

  Game.prototype.allObjects = function(){
    return this.ship.concat(this.asteroids);
  }

  Game.prototype.addAsteroids = function() {
    for(let i = 0; i < NUM_ASTEROIDS; i++){
      let randoPos = this.randomPosition();
      this.asteroids.push(new Asteroid({pos: randoPos, game: this}));
    }
  }

  Game.prototype.addShips = function(){
    const newShip = new Ship({
      pos: this.randomPosition(),
      game: this
    });
    this.ship.push(newShip);
  }

  Game.prototype.randomPosition = function(){ 
    return [(DIM_X * Math.random()), (DIM_Y * Math.random())]
  };

  Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1000, 600);
    this.allObjects().forEach(object => {
      object.draw(ctx);
    });
  }

  Game.prototype.moveObjects = function(){
    this.allObjects().forEach(element => {
      element.move();
    });
  }

  Game.prototype.wrap = function (pos) {
    if (pos[0] > DIM_X){
      pos[0] = pos[0] % DIM_X;
    }
    else if (pos[0] < 0){
      pos[0] = DIM_X - (pos[0] % DIM_X);
    }

     if (pos[1] > DIM_Y) {
       pos[1] = pos[1] % DIM_Y;
     } else if (pos[1] < 1) {
       pos[1] = DIM_Y - (pos[1] % DIM_Y);
     }
  
      return pos;
  }

  // 00 ---------- 1000
  // |
  // |
  // |
  // |
  // 600

  Game.prototype.checkCollisons = function(){
    const allObjects = this.allObjects();
    for(let i = 0; i < allObjects.length; i++){
      for (let j = i+1; j < allObjects.length; j++){
       if (allObjects[i].isCollidedWith(allObjects[j])){
        //  alert("Boom!");  
       }
      }
    }
  };
  
  Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisons();
  }

  Game.prototype.remove = function(object) { //element = otherObj or this aka Collisee
    debugger;
    const allObjects = this.allObjects();
    if(object instanceof Ship){
    this.ship.splice(this.ship.indexOf(object), 1)
  } else if (object instanceof Asteroid){
    this.asteroids.splice(this.asteroids.indexOf(object), 1)
  };
  }

  
module.exports = Game;