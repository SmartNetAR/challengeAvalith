import React, { Component } from 'react';
import './App.css'
//componentes

import Header from './global/Header';
import Content from './global/Content';
// import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import Sidebar from './global/Sidebar';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      filterText: "",
      filterTech: "",
      visibleBar: true
    };
    this.setVisibleBar = this.setVisibleBar.bind(this);
  }

  filterByText = event => {
    this.setState({
      filterText: event.target.value
    })
  }

  filterByRadio = event => {                                                                                               
    this.setState({
      filterTech: event.target.value
    })
  }

  setVisibleBar(e) {
    this.setState({
      visibleBar: !this.state.visibleBar
    })
  }

  render() {
    const visibleBar = this.state.visibleBar;
    const bar = visibleBar ? (
      <Sidebar 
        filterByText={this.filterByText}
        filterByRadio={this.filterByRadio}
        logoHideBar={this.state.visibleBar}/>
    ) : <div></div> 
    return (
      
      <div className="App">
        <Header clickHideBar={this.setVisibleBar}/>
        {bar}

        <Content
          filterText= {this.state.filterText} 
          filterTech= {this.state.filterTech} 
          visibleBar={this.state.visibleBar}/>        
      </div> 
    );
  }
}

export default App;
