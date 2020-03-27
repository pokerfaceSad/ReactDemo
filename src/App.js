import React from 'react';
import 'semantic-ui-css/semantic.min.css'

function App() {
  const todoList = [
    'play game',
    'go shopping'
  ]
  return (
    <div className="App">
      <div className="ui two column centered grid container">
          <div className="row"/>
          <div className="column">
            <div className="ui center aligned huge icon header">
              <i className="circular edit outline icon"></i>
              Todo Lists
            </div>
            <div className="ui huge middle aligned selection relaxed divided list">
              <div className="item">
                <i className="ui circle outline icon"></i>
                <div className="content">
                  Learning GoLang
                </div>
              </div>
              <div className="item"> 
                <i className="ui circle outline icon"></i>
                <div className="content">
                  Learning Node.JS
                </div>
              </div>
            </div>
          </div>

      </div>

    </div>
  );
}

export default App;
