class View {
  constructor(game, $el) {
    this.game = game;
    $el.append(this.setupBoard());
    // bindEvents();  called here to bind listeners to each li element
  }

  bindEvents($square, e) {
    $square.bind("click", () => {
      if ($square.hasClass("filled-square")){
        alert("Invalid move, Try again")
      }

      else{
        this.makeMove($square);
        let pos = $square.data();
        this.game.playMove(pos);
      }

    })

  }

  makeMove($square) {
      let $mark = this.game.currentPlayer;
      $square.append($mark);
      $square.addClass($mark);
      $square.toggleClass("filled-square")
    }

  

  setupBoard() {

    const $ul = $('<ul></ul>')
    $ul.addClass("board")

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $square = $('<li></li>')
        let pos = [i, j];
        $square.data(pos);
        $ul.append($square) 
      }
    }
    return $ul;
  }
}

module.exports = View;


// $(selector).bind("click", function(){


// });
// Parameter: It accepts three parameters that are specified below -

//   event: This is an event type which is passed to the selected elements.
//     data: This is the data which can be shown over the selected elements.
//       function: This is the function which is perform by the selected elements.


//       < script >
//   $(document).ready(function () {
//     $("p").bind("click", function () {
//       alert("Given paragraph was clicked.");
//     });
//   }); 
//     </script > 