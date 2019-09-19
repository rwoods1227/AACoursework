function MovingObject() { }

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);


Function.prototype.inherits = function(SuperClass) {
  function Surrogate() {};
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;  // this is the subclass that is inheriting 
}

Function.prototype.inherits2 = function (SuperClass) {
 
  this.prototype = Object.create(SuperClass.prototype)//skips the surrogate entirely 
  this.prototype.constructor = this;  // this is the subclass that is inheriting 
}