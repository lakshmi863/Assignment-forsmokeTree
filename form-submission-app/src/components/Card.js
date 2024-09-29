import React from 'react';
import './Card.css'; // Add styles for the card here
import './index.css'
const Card = ({ name, address }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{address}</p>
    </div>
  );
};

export default Card;
