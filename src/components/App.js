import React, { Component } from 'react';

//componentes
import Header from './global/Header';
import Content from './global/Content';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import Sidebar from './global/Sidebar';

class App extends Component {
  render() {
    return (
      
      <div> className="App">
        <Header />
        <Sidebar />
        <Content />        
      </div> 
    );
  }
}

export default App;
