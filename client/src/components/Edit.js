import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
class Edit extends React.Component{
  constructor(){
    super()
    this.state={
      work:false,
      title:'',
      content:''
    }

  }
  componentWillMount(){
    axios.get(`http://localhost:3000/posts/${this.props.params.id}`)
    .then( res => this.setState({
      title:res.data.post.title,
      content:res.data.post.content
    }))
  }
  handleChange(e){
    this.setState({title:e.target.value})
  }
  handleChange1(e){
    this.setState({content:e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({work:true})
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    console.log(title,content);
    axios.put(`http://localhost:3000/posts/${this.props.params.id}`,{title,content})
    .then( res => {console.log(res); this.props.router.push('/');} )
    .catch( err => console.log(err) )
  }
  render(){
    // console.log(this.state);
    return(
      <div className="form-wrap">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <label className="label">标题</label>
            <input type='text' name="title" ref='title' value={this.state.title} onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="field">
            <label className="label">内容</label>
            <input type='text' name="content" ref='content' value={this.state.content} onChange={this.handleChange1.bind(this)}/>
          </div>
          <div className="actions">
            <button type='submit' className="button" disabled={this.state.work}>更新</button>
            <Link to='/' className="cancel">取消</Link>
          </div>
        </form>
      </div>
    )
  }
 }

export default Edit;
