import React from 'react';
export default class Message extends React.Component{
    render(){
        let {message} = this.props;
        return (
            <li className="list-group-item">
                {message.name}:{message.content} <button className="btn btn-danger btn-xs" onClick={()=>this.props.removeMessage(message.id)}>x</button> <span className="pull-right">{message.createAt.toLocaleString()}</span>
            </li>
        )
    }
}