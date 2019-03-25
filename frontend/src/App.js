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
  resetAll = () => {
    this.setState({CurrentItemText: "", todos: [] });
  };

  setText = (text) => {
    this.setState({CurrentItemText: text});
  };


  
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
