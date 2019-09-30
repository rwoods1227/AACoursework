import React from 'react';
import { connect } from 'react-redux';
import TodoList from "./todo_list";
import { createTodo, receiveTodo, fetchTodos } from '../../actions/todo_actions.js';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  fetchTodos: todos => dispatch(fetchTodos(todos)),
  createTodo: (title, body) => dispatch(createTodo(title, body))
  // fetchTodos: todos => dispatch(receiveTodos(todos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

//second argument gives access to redux store
//  through mapStateToprops & mapDispatchToProps

// creating objects that have access to redux
// combining them to become props