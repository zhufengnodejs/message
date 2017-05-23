import React from 'react'
export  default class MessageForm extends React.Component{
    render(){
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">姓名</label>
                    <input type="text" className="form-control" id="name" placeholder="姓名"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">内容</label>
                    <textarea className="form-control" id="content" cols="30" rows="10"></textarea>
                </div>
                <div className="container">
                    <button type="submit" className="btn btn-primary">提交</button>
                </div>
            </form>
        )
    }
}