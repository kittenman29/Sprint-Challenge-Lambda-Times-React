import React from 'react';
import { cardData } from '../../data';

const Card = props => {
  console.log(props);
  return (
    <div className="card">
      <div className="headline">{props.pineapple}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} />
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
