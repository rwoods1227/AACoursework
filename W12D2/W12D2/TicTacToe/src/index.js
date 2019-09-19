const View = require('./ttt-view') 
const Game = require('./game') 

  $(() => {
    
    const game = new Game();
    const $ttt = $('.ttt')

    const view = new View(game, $ttt);
    const $board = $ttt.children();

    $board.on("click", (e)=>{
      if(game.isOver()){
        $board.addClass("game-over")
        let $winner = game.winner()
        let winnerClass = $(`li.${$winner}`)
        $board.find(winnerClass).attr('id', 'winner')
        if ($winner){
          $ttt.append(`<figcaption>You win, ${$winner}</figcaption>`)
        }
        else { $ttt.append(`<figcaption> It's a draw! </figcaption>`)}
      }
      else{
        let $square = $(e.target);
        // debugger
        view.bindEvents($square);
      }
    })
  });

// var item1 = $("li.item-1")[0];
// $("li.item-ii").find(item1).css("background-color", "red");