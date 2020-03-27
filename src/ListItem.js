import React, { Component } from 'react';

class ListItem extends Component {

    render() {
        const item = this.props.item
        let icon_elem = null
        if(item.done) {
            icon_elem = <i className="ui check circle outline icon"></i>
        } else {
            icon_elem = <i className="ui circle outline icon"></i>
        }
        return (
            <div className="item">
                {icon_elem}
                <div className="content">
                    {item.content}
                </div>
            </div>
        );
    }
}

export default ListItem;