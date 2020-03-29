import React, { Component } from 'react';

class TodoListHeader extends Component {
    state = {header_content : "Todo Lists",
             header_icon: "circular edit outline icon"}
    change_header = () => {
        this.setState(
            {header_content: "Click To Add Todo",
             header_icon: "circular plus icon"})
    }
    recover_header = () => {
        this.setState(
            {header_content : "Todo Lists",
             header_icon: "circular edit outline icon"})
    }
    render() {
        const show_input_modal = this.props.show_input_modal
        return (
        <div className="ui center aligned big icon header">
            <button 
                onMouseOver={this.change_header}
                onMouseOut={this.recover_header}
                className='circular ui icon button'>
                    <i onClick={show_input_modal} className={this.state.header_icon}></i>
            </button>
            <div className='content'>
                {this.state.header_content}
            </div>
        </div>
        );
    }
}

export default TodoListHeader;