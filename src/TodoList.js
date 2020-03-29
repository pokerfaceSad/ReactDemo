import React, { Component } from 'react';
import ListItem from './ListItem'
class TodoList extends Component {
    
    render() {
        console.log("TodoList rending")
        return (
            <div className="ui huge middle aligned selection relaxed divided list">
                {this.props.todoListContents.map(item => <ListItem key={item.content} item={item}/>)}
            </div>
        );
    }
}

export default TodoList;