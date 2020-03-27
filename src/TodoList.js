import React, { Component } from 'react';
import ListItem from './ListItem'
class TodoList extends Component {
    
    render() {
        const todoList = [
            {content: 'Learning GoLang', done: true},
            {content: 'Learning Node.JS', done: false},
            ];
        return (
            <div className="ui huge middle aligned selection relaxed divided list">
                {todoList.map(item => <ListItem key={item.content} item={item}/>)}
            </div>
        );
    }
}

export default TodoList;