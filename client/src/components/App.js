import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render () {

    return(
    <div>
      <ul>
        <li><Link to="/hello1">Hello1</Link></li>
        <li><Link to="/hello2">Hello2</Link></li>
      </ul>
      {this.props.children}
      <footer>footer</footer>
    </div>
    )
  }
}

export default App;
