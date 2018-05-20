import React, { Component } from 'react';
import './css/Content.css';
import PropTypes from 'prop-types';

import jsonRecived from '../../data/cards.json'
import CardsContainer from './CardsContainer';
import PostDetails from './PostDetails';


class Content extends Component {
  static propTypes = {
    filtro: PropTypes.string
  };

  constructor () {
    super();

    this.state = {
      mode: "Dashboard",
      // filterText: "CSS"
    };
  }

  componentDidMount() {
    // this.setState.filterText = filtro;
  }

  FilterArray () {
    var tmpArray = new Array;
    if (this.props.filtro !== '') {
      for (var i = 0; i < jsonRecived.length; i++ ) {
        if (jsonRecived[i].cardTitle === this.props.filtro) {
          tmpArray.push(jsonRecived[i]);
          console.log(jsonRecived[i]);
        }
      }
    } else {
      tmpArray = jsonRecived;
    }
    return tmpArray;
  }

  render() {
    const {filtro} = this.props;
    if ( this.state.mode === "Dashboard" ) {
      var arrayCards = this.FilterArray();

      return (
        <div className="Content">
          <CardsContainer cards={arrayCards} />

        </div> 
      );
    }else {
      return (
        <PostDetails title={this.state.filterText}/>
      )
    }
  }
}

export default Content;
