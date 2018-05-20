import React, { Component } from 'react';
import './css/Content.css';
import jsonRecived from '../../data/cards.json'
import CardsContainer from './CardsContainer';
import PostDetails from './PostDetails';


class Content extends Component {
  constructor () {
    super();

    this.state = {
      mode: "Dashboard",
      filterText: "CSS"
    };
  }

  FilterArray () {
    var tmpArray = new Array;
      for (var i = 0; i < jsonRecived.length; i++ ) {
        if (this.state.filterText && jsonRecived[i].cardTitle === this.state.filterText) {
            tmpArray.push(jsonRecived[i]);
            console.log(jsonRecived[i]);
        }
      }
    return tmpArray;
  }

  render() {
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
