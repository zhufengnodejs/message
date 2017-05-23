import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import MessageHeader from './MessageHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
class MessageBox extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
            <MessageHeader/>
        </div>
        <div className="panel-body">
            <MessageList/>
        </div>
        <div className="panel-footer">
            <MessageForm/>
        </div>
      </div>
    );
  }
}

export default MessageBox;
