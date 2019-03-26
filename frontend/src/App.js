import React, { Component } from 'react';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      CurrentItemText: "Foo",
      todos: ["Add a todo", "Remove todo"],
    };
  }

componentDidMount() {
  fetch('https://localhost:44336/api/todos')
.then(res => res.json())
.then(json => this.setState({ todos: json }));
}

  resetAll = () => {
    this.setState({CurrentItemText: "", todos: [] });
  };

  setText = (text) => {
    this.setState({CurrentItemText: text});
  };

  addNew = text => {
    fetch('https://localhost:44336/api/todos', {
      method: "POST",
      body: json.stringify(text),
      headers: {
        "Content-Type": "application/json"
      }
  })
  
  .then(() => {
    if (res.ok){
    const newTodos = [...this.state.todos, text];
    this.setState({ todos: newTodos });
    }
  })
  
  .catch(err => {
    console.error(err);
  });

  render() {
    return (
      <div>
        <AddToDo 
          text={this.state.CurrentItemText} 

          setText={this.setText} 

          addNew = {this .addNew}/> 

        <ToDoList todos={this.state.todos}/>

        <button onClick={this.resetAll}> Reset All</button>
      </div>
    );
  }
}

export default App;
