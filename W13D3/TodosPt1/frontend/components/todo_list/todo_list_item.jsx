import React from 'react';

// const TodoListItem = (todo) => {
  

// }

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);


  }

  render () {
    return (
      
      // <li key={this.props.todo.id.to_s}>{this.props.todo.title}</li>
      // have to pass key in the props / parent
      <li>{this.props.todo.title}</li>

    );
//ff
  }

}

export default TodoListItem;