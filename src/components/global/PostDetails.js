import React, { Component } from 'react';
import './css/PostDetails.css';
// import Card from './Card';
import PropTypes from 'prop-types';


class PostDetails extends Component {
  static propTypes ={
    title: PropTypes.string.isRequired,
    cards: PropTypes.array};

  render() {
    const {title, cards} = this.props;
    // var myCards = new Map(cards);
    // var filterCards = new Array;
    return (
      <div className="PostDetails">
        <header className="Title">{`${title}`}</header>
      </div>
    );
  }
}

export default PostDetails;
