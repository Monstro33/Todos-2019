import React, { Component } from 'react';

class ToDoList extends Component {
    render() {
        const {todos} = this.props;
        const ToDoListItems = todos.map(item => <li key={item}>{item}</li>);
        return  <ul>{ToDoListItems}</ul>
        ;
    }
}

export default ToDoList;