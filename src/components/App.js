import React, { Component } from 'react';

//componentes
import Header from './global/Header';
import Content from './global/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div> 
    );
  }
}

export default App;
