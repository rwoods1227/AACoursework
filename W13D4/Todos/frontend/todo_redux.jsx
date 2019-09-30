import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import App from './components/app.jsx';
import Root from './components/root.jsx';
//import { receiveTodo, receiveTodos, fetchTodos } from './actions/todo_actions.js';
import  allTodos  from './reducers/selectors.js';
//import { fetchTodos } from './util/todo_api_util.js';

window.store = configureStore;
// window.receiveTodo = receiveTodo;
// window.receiveTodos = receiveTodos;
window.allTodos = allTodos;
// window.fetchTodos = fetchTodos;

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  

  ReactDOM.render(<Root store={configureStore} />, content);

});