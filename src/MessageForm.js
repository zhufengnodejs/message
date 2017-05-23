import React from 'react'
export  default class MessageForm extends React.Component{
    //事件处理函数
    handleSubmit = (event)=>{
        event.preventDefault();//阻止默认表单提交事件，如果没有这句话表单页面会进行刷新
        let name = this.name.value;
        let content = this.content.value;
        this.props.addMessage({name,content})
        this.content.value = '';
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">姓名</label>
                    <input type="text" className="form-control" ref={ref=>this.name= ref} id="name" placeholder="姓名"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">内容</label>
                    <textarea className="form-control" id="content" cols="30" rows="10"  ref={ref=>this.content = ref}></textarea>
                </div>
                <div className="container">
                    <button type="submit" className="btn btn-primary">提交</button>
                </div>
            </form>
        )
    }
}