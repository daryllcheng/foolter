import React, { Component } from 'react';
import Search from './containers/Search';
import Foods from './containers/Foods';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Search />
        <Foods /> 
      </div>
    );
  }
}

export default App;