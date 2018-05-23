import React, { Component } from 'react';
// import './css/PostDetails.css';
// import Card from './Card';
import PropTypes from 'prop-types';
import Content from './Content';
import Sidebar from './Controls';


class Main extends Component {
  constructor(){
    super();
    this.state = { 
      filter: "",
      visibleBar: true
      // mode: "Dashboard" 
    };
    this.filtrar = this.filtrar.bind(this);
    this.hideBar = this.hideBar.bind(this);
  }

  static propTypes ={
    setVisibleBar: PropTypes.bool.isRequired
    // title: PropTypes.string.isRequired,
    // details: PropTypes.string.isRequired,
    // technology: PropTypes.array.isRequired, 
    // imageUrl: PropTypes.string
  };

  
  
  filtrar(e){      
    this.setState({
      filter: e.target.value
    })
  }

  hideBar(e) {
    this.setState({
      filter: "", 
      visibleBar: !this.state.visibleBar
      
    })
  }

  render() {
    const {setVisibleBar} = this.props;
    const visibleBar = true /* this.setVisibleBar ; */
    const bar = visibleBar ? (<Sidebar Filtering={this.filtrar}/>
    ) : <div></div> 
    return (
      <div className="Main">
        {bar}
        {/* <Sidebar Filtering={this.filtrar}/> */}


        <Content filtro={this.state.filter } mode={this.state.mode}/>        
      </div> 
    );
  }
}

export default Main;
