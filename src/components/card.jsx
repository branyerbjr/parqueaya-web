import React from 'react';

const Card = ({ image, mission, placeName }) => {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
        {/* Contenido de la imagen, como superposiciones o texto */}
      </div>
      <div className="card-content">
        <p className="mission">{mission}</p>
        <p className="place-name">{placeName}</p>
      </div>
    </div>
  );
}

export default Card;
