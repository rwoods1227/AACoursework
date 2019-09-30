import * as Minesweeper from "../minesweeper.js";
import Board from "./board"
import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {board: new Minesweeper.Board(9, 9)};
        this.updateGame = this.updateGame.bind(this);

    }

    updateGame (tile, boolean) {
        if (boolean) {
            tile.toggleFlag();
        }
        else{

            tile.explore();
        }

        this.setState({ board: this.state.board });
    };

    render() {
        let string = "";
        let modalScreen;
        
        // <div className="modal-screen">
        //     <div className="modal-content">
        //         <p>{string}</p>
        //         <button>Replay?</button>
        //     </div>
        // </div>

        if (this.state.board.won()){
            string += "Congrats you won!";
            modalScreen = <div className="won modal-screen"><div className="modal-text">{string}</div></div>
        }
        else if (this.state.board.lost()){
            string += "You exploded!!!";
            modalScreen = <div className="lost modal-screen"><div className="modal-text">{string}</div></div>
        }

        



        return (
            <div>
                <Board board={this.state.board} game={this.updateGame}/>
                {modalScreen}
            </div>
        );

    }


 
}

export default Game;