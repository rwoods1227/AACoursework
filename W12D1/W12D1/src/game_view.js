const Game = require("./game.js")

function GameView(game, ctx){
  this.ctx = ctx;
  this.game = game;
}


GameView.prototype.start = function(){
  setInterval(() => {
    this.game.step();
    this.game.draw(this.ctx);
  }, 20); //1 s = 1000ms
}

module.exports = GameView;