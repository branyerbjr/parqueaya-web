import React from 'react';

const Card = ({ titulo, icon }) => {
  return (
    <div className="cardmenu">
      <div className="card-content">
        {icon && <i className={icon}></i>}
        <p className="titulo">{titulo}</p>
      </div>
    </div>
  );
}

export default Card;
