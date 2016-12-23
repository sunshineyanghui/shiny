import React from 'react';
import { Link } from 'react-router';
import Header from './Header'
class App extends React.Component {
  render () {

    return(
    <div>
      <Header />
      {this.props.children}
    </div>
    )
  }
}

export default App;
