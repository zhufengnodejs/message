import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import MessageHeader from './MessageHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class MessageBox extends Component {
  constructor(props){
     super(props);
     //初始化状态对象
     this.state = {messages:[
         {id:1,name:'张三',content:'今天天气不错!!!',createAt:new Date()}
     ]};
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
            <MessageHeader/>
        </div>
        <div className="panel-body">
            <MessageList messages={this.state.messages}/>
        </div>
        <div className="panel-footer">
            <MessageForm/>
        </div>
      </div>
    );
  }
}

export default MessageBox;
