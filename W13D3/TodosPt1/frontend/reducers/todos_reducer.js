import { RECEIVE_TODOS, RECEIVE_TODO} from "../actions/todo_actions"


const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      let tempTodos = {};
      Object.keys(action.todos).forEach((id)=>{
        tempTodos[id] = action.todos[id];
      });
      return tempTodos;

    case RECEIVE_TODO:
      const tempTodo = {};
      const todo = action.todo;
      return Object.assign({}, state, {[todo.id]: todo})
      // todo[id]      
      //return Object.assign({}, state, action.todo.id: action.todo)
    default:
      return state;
  }
};

export default todosReducer;