import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import MessageHeader from './MessageHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class MessageBox extends Component {
    constructor(props) {
        super(props);
        //初始化状态对象
        this.state = {
            messages: [
                {id: 1, name: '张三', content: '今天天气不错!!!', createAt: new Date()}
            ]
        };
    }

    addMessage = (message) => {
        let messages = this.state.messages;
        message.id = messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;
        message.createAt = new Date();
        messages.push(message)
        this.setState({
            messages
        });
    }
    removeMessage = (id)=>{
        let messages = this.state.messages;
        messages= messages.filter(message=>message.id !== id);
        this.setState({
            messages
        });
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <MessageHeader/>
                </div>
                <div className="panel-body">
                    <MessageList removeMessage={this.removeMessage} messages={this.state.messages}/>
                </div>
                <div className="panel-footer">
                    <MessageForm addMessage={this.addMessage}/>
                </div>
            </div>
        );
    }
}

export default MessageBox;
