import 'semantic-ui-css/semantic.min.css'


import TodoListHeader from './TodoListHeader'
import TodoList from './TodoList'
import InputModal from "./InputModal";
import './style.css'
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoListContents: [
        {content: 'Learning GoLang', done: true},
        {content: 'Learning Node.JS', done: false},
        ]
    }
  }

  add_todo_item = (todo_item) => {
    const new_todoListContent = [
      ...this.state.todoListContents,
      {content: todo_item, done: false}
    ]
    this.setState({todoListContents: new_todoListContent})
  }

  mark_item_done = (index) => {
    this.setState(() => {
      this.state.todoListContents[index].done = true
      return this.state
    })
  }
 
  show_input_modal = () => {
    this.refs.input_modal.setState({open: true})
  }
  render() {
    return (
          <div className="App">
              <div className="ui one column centered relaxed grid container">
                  <div className="row"/>
                  <div className="row"/>
                  <div className="border-1 ten wide column">
                    <TodoListHeader show_input_modal={this.show_input_modal}/>
                    <TodoList
                      todoListContents={this.state.todoListContents}
                      mark_item_done={this.mark_item_done}
                    />
                  </div>
              </div>
              <InputModal add_todo_item={this.add_todo_item} ref='input_modal'/>
          </div>
    );
  }
}

export default App;