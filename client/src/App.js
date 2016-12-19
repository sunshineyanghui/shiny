import React from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
class App extends React.Component{
  render(){
    return(
      <div>
        <div>
          <Link to='/hello1'>Hello1</Link>
          <Link to='/hello2'>Hello2</Link>
        </div>
      </div>
    )
  }
 }

export default App;
