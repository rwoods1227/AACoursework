const allTodos = (state) => {
  // debugger
  let temp = [];
  Object.keys(state.todos).forEach( id => {
    //debugger
    temp.push(state.todos[id]);
  });
  return temp;
};
//test
export default allTodos;
//frontend/reducers/selectors.js