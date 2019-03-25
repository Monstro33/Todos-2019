import React, { Component } from 'react';

class AddToDo extends Component {
    onAdd = () => {
        this.props.AddNew(this.props.text);
        this.props.setText("");
    };
    onTextChange = event => {
        this.props.setText(event.target.value);
    };
    render() {
        const {text, setText} = this.props;
        return (
            <>
              <label>
                  Item:
                  <input type="text" value={text} onChange={this.onTextChange} />
              </label>
              <button onClick={this.onAdd}>Add</button>
              </>
        );
    }
}

export default AddToDo;