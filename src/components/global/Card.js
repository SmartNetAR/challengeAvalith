import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Card.css';


class Card extends Component {
  static propTypes ={
      title: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      technology: PropTypes.array.isRequired, 
      imageUrl: PropTypes.string
  };

  render() {
    const { title, details, technology, imageUrl } = this.props;
    return (
      <div className="card">
        <div className="image">
          <img width={325} src={imageUrl} alt={title} />
        </div>
        <div className="text">
          <p>{`${details}`}</p>
        </div>
      </div> 
    );
  }
}

export default Card;
