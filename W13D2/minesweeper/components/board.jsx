import Tile from "./tile.jsx";
import React from 'react';

class Board extends React.Component {
    constructor (props) {
        super(props);
        this.state = {board: props.board, fnc: props.game}
    }

    render(){
      // debugger;
      
        const rows = this.props.board.grid.map((row, index1) => {
          // debugger;
          let row2 = [];
          row.map((tile, index2) => {

            row2.push(<Tile tile={tile} fnc={this.state.fnc} key={index2}/>);
          });
          return <div key={index1}>{row2}</div>;
        })
      

      return (
        <div className="grid">
          {rows}
        </div>
      )
    }


}

export default Board;