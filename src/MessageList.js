import React from 'react';
export default class MessageList extends React.Component{
    render(){
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    张三:今天下雨  <span className="pull-right">2017年5月23日10:07:59</span>
                </li>
            </ul>
        )
    }
}