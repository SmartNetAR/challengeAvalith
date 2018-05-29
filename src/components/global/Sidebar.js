import React, { Component } from 'react';
import './css/Sidebar.css';
import Controls from './Controls';

class Sidebar extends Component {
  constructor() {
    super(); //para que pueda acceder al obj    
    this.state = {
    };

    // this.filtrar = this.filtrar.bind(this);
  }

  componentDidMount() {

  }

  // filtrar(e){
  //   this.props.Filtering(e);
  // }

  // filtrar = event => {
  //   this.props.Filtering(event);
  // }

  filterByText = event => {
    this.props.filterByText(event);
  }

  filterByRadio = event => {
    this.props.filterByRadio(event);
  }
  
  render() {
    return (
      <div className="sidenav">
        <div className="devname">
          <div className="font-dev-name"><p>LEONARDO CASALES</p></div>
          <div className="font-dev-details">
            <p>DNI 30.195.728</p>
            <p>35 YEARS OLD</p>
          </div>
        </div>
        
        <Controls 
          // controlFilter={this.filtrar} 
          filterByText={this.filterByText} 
          filterByRadio={this.filterByRadio} />


      </div> 
    );
  }
}

export default Sidebar;
