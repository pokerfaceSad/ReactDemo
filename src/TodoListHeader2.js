import React, { Component } from 'react';

class TodoListHeader2 extends Component {
    state = {header_content: "Todo Lists"}
    
    render() {
        return (
            <div className="ui center aligned big header">
            <button 
                className='circular ui animated fade button'>
                    <div className="visible content">Sign-up for a Pro account</div>
                    <div className="hidden content">12345</div>
            </button>
            <div className='content'>
                {this.state.header_content}
            </div>
        </div>
        );
    }
}

export default TodoListHeader2;