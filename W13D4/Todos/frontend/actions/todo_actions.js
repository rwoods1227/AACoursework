import * as APIUtil from "../util/todo_api_util"


export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const FETCH_TODOS = "FETCH_TODOS";
export const receiveTodos = (todos) => ({ 
  type: RECEIVE_TODOS, 
  todos: todos 
});

export const receiveTodo = (todo) => ({ 
  type: RECEIVE_TODO, 
  todo: todo 
});

// export const fetchTodos = () => {
//   return $.ajax({
//     method: 'GET',
//     url: '/api/todos'
//   });

// };

// export const fetchBleats = () => {
//   return (dispatch) => {
//     return ApiUtil.fetchBleats().then(bleats => {
//       dispatch(receiveBleats(bleats))
//     });
//   };
// };


export const fetchTodos = () => {
 return (dispatch) => {
   return APIUtil.fetchTodos().then(todos => {
     dispatch(receiveTodos(todos))
   })
  };
};

export const createTodo = (title, body) => {
  return (dispatch) => {
    return APIUtil.createTodo(title, body).then(todo => {
      dispatch(receiveTodo(todo))
    })
  };
};



