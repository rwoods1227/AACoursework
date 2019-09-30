import React from 'react'
import TodoListItem from '../todo_list/todo_list_item.jsx';
// import { receiveTodo } from '../../actions/todo_actions.js';
// import uniqueId from '../../util/unique_id.js';
import TodoForm from '../todo_list/todo_form.jsx';
import { fetchTodos } from '../../actions/todo_actions.js';


class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.fetchTodos();

  }

  render () { 
    const {todos, createTodo} = this.props;

    return (
      <div>
        <TodoForm createTodo={createTodo} />
          <ul>
            {todos.map((todo) => {
              return <TodoListItem key={todo.id} todo={todo} />
            })}
        </ul>
      </div>
    );
  }

}


export default TodoList;


// import React from 'react';
// // Components
// import TodoListItem from './todo_list_item';
// import TodoForm from './todo_form';

// class TodoList extends React.Component {

//   render() {
//     const { todos, receiveTodo } = this.props;
//     const todoItems = todos.map(todo => (
//       <TodoListItem
//         key={`todo-list-item${todo.id}`}
//         todo={todo}
//         receiveTodo={receiveTodo} />
//     )
//     );

//     return (
//       <div>
//         <ul className="todo-list">
//           {todoItems}
//         </ul>
//         <TodoForm receiveTodo={receiveTodo} />
//       </div>
//     );
//   }
// }

// export default TodoList;