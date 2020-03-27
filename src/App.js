import 'semantic-ui-css/semantic.min.css'


import TodoListHeader from './TodoListHeader'
import TodoList from './TodoList'
import InputModal from "./InputModal";
import './style.css'
import React, { Component } from 'react';

class App extends Component {
  show_input_modal = () => {
    console.log("Test")
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
                    <TodoList />
                  </div>
              </div>
              <InputModal ref='input_modal'/>
          </div>
    );
  }
}

export default App;