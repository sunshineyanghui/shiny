import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
class New extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    console.log({title,content});
    axios.post('http://localhost:3000/posts',{title,content})
    .then( res => console.log(res))
  }
  render(){
    return(
      <div className="form-wrap">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <label className="label">标题</label>
            <input type='text' name="title" ref='title' />
          </div>
          <div className="field">
            <label className="label">内容</label>
            <input type='text' name="content" ref='content' />
          </div>
          <div className="actions">
            <button type='submit' className="button" key='2'>提交</button>
            <Link to='/' className="cancel">取消</Link>
          </div>
        </form>
      </div>
    )
  }
 }

export default New;
