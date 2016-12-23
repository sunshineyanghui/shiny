import React from 'react';
import axios from 'axios';
class Post extends React.Component{
  constructor(){
    super();
    this.state={
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
  render(){
    return(
      <div className="post-wrap">
        <h3>{this.state.title}</h3>
        <p>{this.state.content}</p>
      </div>
    )
  }
 }

export default Post;
