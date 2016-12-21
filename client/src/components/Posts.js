import React from 'react';

class Posts extends React.Component{
  render(){
    return(
      <div>
        {this.props.content}
      </div>
    )
  }
 }

export default Posts;
