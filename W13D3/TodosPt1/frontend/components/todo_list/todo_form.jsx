import React from 'react';
import uniqueId from '../../util/unique_id.js';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.props = props;

    this.state={
      id: uniqueId(),
      body: "",
      title: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();

    //debugger
    this.props.receiveTodo(this.state);

  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value} );
    };
  }

  render() {

    return (
      <div>
        Test TODO FORM
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input type="text" 
            onChange={this.update("title")} 
            value={this.state.title}/>
          </label>

          <label>Body
            <input type="text"
              onChange={this.update("body")}
              value={this.state.body} />
          </label>

          <button> Create Todo</button>
        </form>
      </div>

    );
  }

}

export default TodoForm;