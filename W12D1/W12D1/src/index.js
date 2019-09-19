document.addEventListener('DOMContentLoaded', (event) => {
  const gameCanvas = document.getElementById("game-canvas");
  const ctx = gameCanvas.getContext("2d")
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1000, 600);
  // const circle = new MovingObject({pos: [100, 100], vel: [0, 0], radius: 40, color: "white"})
  // circle.draw(ctx);
    // const newCircle = new Asteroid({
    //   pos: [30, 30]
    // });
    // newCircle.draw(ctx);
    const game = new Game();
    game.draw(ctx);
    const gameView = new GameView(game, ctx);
    gameView.start();
});

console.log("Webpack is Working!")

const Game = require("./game.js");  
const MovingObject = require("./moving_objects.js");
const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js");
const Ship = require("./ship.js");

window.Ship = Ship;
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;



