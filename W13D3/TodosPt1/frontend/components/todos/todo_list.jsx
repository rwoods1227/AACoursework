import React from 'react'
import TodoListItem from '../todo_list/todo_list_item.jsx';
// import { receiveTodo } from '../../actions/todo_actions.js';
// import uniqueId from '../../util/unique_id.js';
import TodoForm from '../todo_list/todo_form.jsx';


const todoList = ({todos, receiveTodo}) => {
  // let newArray = [];
  // debugger;
return (
  <div>
    
   <TodoForm receiveTodo={receiveTodo} />
    <ul>
      {/* {Object.values(todos)[0].map((todo)=>{
        return <TodoListItem key={todo.id} todo={todo}/>
      })} */}

      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />
      })}
    </ul>
        
  </div>
);

}


export default todoList;