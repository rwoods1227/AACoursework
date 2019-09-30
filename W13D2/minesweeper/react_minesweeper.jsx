import * as Minesweeper from "./minesweeper.js";
import Game from "./components/game";
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Game />, document.getElementById('main'));
});