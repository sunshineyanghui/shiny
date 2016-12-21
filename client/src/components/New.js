import React from 'react';
import axios from 'axios'
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
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          标题：<input type="text" name="title" ref="title" /><br/>
          内容：<input type="text" name="content" ref="content"/><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
 }

export default New;
