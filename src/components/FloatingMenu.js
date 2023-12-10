// FloatingMenu.js

import React from 'react';

const FloatingMenu = () => {
  const menuStyle = {
    background: '#B7C6FF', // Color B7C6FF
    width: '55px',
    height: '350px', // Altura de 55px
    borderRadius: '70px', // Redondeo de las esquinas
    display: 'flex',
    justifyContent: 'space-around', // Espacio uniforme entre íconos
    alignItems: 'center',
  };
  const iconStyle = {
    fontSize: '24px', // Tamaño de los iconos
  };

  return (
    <div className="floating-menu" style={menuStyle}>
      <i className="bi bi-person" style={iconStyle}></i>
      <a href='menu'><i className="bi bi-folder" style={iconStyle}></i></a>
      <i className="bi bi-radar" style={iconStyle}></i>
      <i class="bi bi-cash-coin"></i>
      <a href='cams'><i className="bi bi-camera" style={iconStyle}></i></a>
      <i className="bi bi-image-fill" style={iconStyle}></i>
      <i className="bi bi-gear" style={iconStyle}></i>
    </div>
  );
}

export default FloatingMenu;
