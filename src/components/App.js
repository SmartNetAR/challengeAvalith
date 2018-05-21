import React, { Component } from 'react';

//componentes
import Header from './global/Header';
import Content from './global/Content';
// import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import Sidebar from './global/Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      filter: "",
      // mode: "Dashboard" 
    };
    this.filtrar = this.filtrar.bind(this);
    this.reset = this.reset.bind(this);
  }

  
  
  filtrar(e){
    // if (e.target.id === "txtSearch") {
      
      this.setState({
        filter: e.target.value
      })
  }

  reset(e) {
    this.setState({
      filter: "", mode: "Dashboard"
    })
  }

  sideIsVisible() {
    const visibleBar = true;    
    alert ("show bar");
    if (visibleBar === true) {
      alert ("show bar");
      return <Sidebar Filtering={this.filtrar}/> 
      
    }
    
    // return <Sidebar/>
  }
  render() {
    const visibleBar = true;
    const bar = visibleBar ? (<Sidebar Filtering={this.filtrar}/>
    ) : <div></div> 
    return (
      
      <div className="App">
        <Header mode={this.reset}/>
        {bar}
        {/* <Sidebar Filtering={this.filtrar}/> */}


        <Content filtro={this.state.filter } mode={this.state.mode}/>        
      </div> 
    );
  }
}

export default App;
