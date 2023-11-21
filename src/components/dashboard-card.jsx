import React from 'react';

const Card = ({ titulo }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="titulod">{titulo}</p>
      </div>
    </div>
  );
}

export default Card;
