import React, { Component } from 'react';
import './App.css';
import Sortedtable from './Sortable';
import dt from './data/data.json';

class App extends Component {
  state = {
    person: dt
  }
  render() {
    return (
      <div className="App">
        <Sortedtable elm={this.state.person}/>
      </div>
    );
  }
}

export default App;
