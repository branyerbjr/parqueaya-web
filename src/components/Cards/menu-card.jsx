import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ titulo, icon, to  }) => {
  return (
    <div className="cardmenu">
      <Link to={to} className='link'>
      <div className="card-content">
        {icon && <i className={icon}></i>}
        <p className="titulo">{titulo}</p>
      </div>
      </Link>
      
    </div>
  );
}

export default Card;
