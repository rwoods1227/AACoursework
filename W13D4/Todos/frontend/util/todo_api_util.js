export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos'
  });

};



export const createTodo = (todo) => {
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: {todo: { title: todo.title, body: todo.body}} 
      
      // : { title: title, body: body, done: false  }} // add id later
  });

};
//Inside frontend/actions/todo_actions, add a new thunk 
// action creator createTodo, which takes a todo as an argument. T



    // data: { bleat: { body: body, author_id: 1 } },

// api_todos GET / api / todos(.: format)                                                                     api / todos#index {: format =>: json }
// POST / api / todos(.: format)                                                                     api / todos#create {: format =>: json }