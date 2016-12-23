import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
class Home extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentWillMount(){
    axios.get('http://localhost:3000/posts')
    .then( res => this.setState({data:res.data.posts}))


  }
  render(){
    let postList = this.state.data.map( (post,i) => (
      <Link to={`/posts/${post._id}`} key={i} className="post-card">
        {post.title}
      </Link>
    ))
    return(
      <div>
        <Link to="/new" className="new-post">New Post</Link>
        {postList}
      </div>
    )
  }
 }

export default Home;
