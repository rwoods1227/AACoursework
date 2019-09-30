import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store.js';
import App from './frontend/components/app.jsx';
import Root from './frontend/components/root.jsx';
import { receiveTodo, receiveTodos } from './frontend/actions/todo_actions.js';
import  allTodos  from './frontend/reducers/selectors.js';


window.store = configureStore;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.allTodos = allTodos;

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  

  ReactDOM.render(<Root store={configureStore} />, content);

});