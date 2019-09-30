import React from 'react';



class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tile: props.tile, fnc: props.fnc};
   
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.state.fnc(this.state.tile, (event.altKey));
  }

  
  render(){
    let count = this.state.tile.adjacentBombCount();
    let klasses = "tile";
    let content;
    
    if (count > 0){
      content = count.toString();
    }else {
      content = "";
    }
    
    if (this.state.tile.explored) {
      if (this.state.tile.bombed) {
        klasses += " explored bombed";
        content = "💣";
      } else {
        klasses += " explored";
      }
    } 
    else {
      if (this.state.tile.flagged) {
        klasses += " unexplored flagged";
        content = "🚩";
      } else {
        klasses += " unexplored";
        content = "";
      }
    }
              

    return (
      <div className={klasses} onClick={this.handleClick}>{content}</div>
    )
  }
}

export default Tile;