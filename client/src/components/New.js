import React from 'react';
import axios from 'axios';
import {Link,browserHistory} from 'react-router';
class New extends React.Component{
  constructor(){
    super()
    this.state={work:false}
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('handleSubmit...');
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    this.setState({work:true})
    console.log({title,content});
    axios.post('http://localhost:3000/posts',{title,content})
    .then( res =>  {
      console.log(res);
      // browserHistory.push('/');//添加完跳转到首页
      // this.context.router.push('/');
      this.props.router.push('/')
    });
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
            <button type='submit' className="button" key='2' disabled={this.state.work}>提交</button>
            <Link to='/' className="cancel">取消</Link>
          </div>
        </form>
      </div>
    )
  }
 }
New.contextTypes={
  router:React.PropTypes.object.isRequired
}
export default New;
