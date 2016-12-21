import React from 'react';

class Post extends React.Component{

  render(){
    return(
      <div className="post-content">
        {this.props.params.id}
      </div>
    )
  }
 }

export default Post;
