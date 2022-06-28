import React , { Component } from 'react';
import './App.css';

import DVDList from './components/DVDList';

class App extends Component {
  render() {
    return(
      <div>
        <DVDList/>
      </div>
    )
  }
}

export default App;