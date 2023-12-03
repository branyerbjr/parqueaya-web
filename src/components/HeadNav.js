// HeadNav.js
import React from 'react';

const containerStyle = {
  margin: '0px 20px',
  color: '#141537',
  height: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: 'Inter, sans-serif',
};

const textStyleLogo = {
  fontSize: '24px',
  fontWeight: 'bold',
  fontFamily: 'Inter, sans-serif',
};

const textStyleMenu = {
  margin:'0px 20px',
  fontSize: '16px',
  fontWeight: '500', 
  fontFamily: 'Inter, sans-serif',
};

const linkStyle = {
  margin:'0px 20px',
  textDecoration: 'none',
  color: '#141537', 
};


const HeadNav = () => {
  return (
    <nav style={containerStyle}>
      <div className="left" style={textStyleLogo}>
        <a href='inicio' style={linkStyle}>ParqueaYA!</a>
      </div>
      <div className="right" style={textStyleMenu}>
        <a href='inicio' style={linkStyle}>Inicio</a>
        <a href='#' style={linkStyle}>Servidor</a>
        <a href='#' style={linkStyle}>Cámara</a>
      </div>
    </nav>
  );
};

export default HeadNav;
