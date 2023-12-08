// HeadNav.js
import React, { useState } from 'react';
import useAuth from '../views/Auth/auth';
import { Link } from 'react-router-dom'; 

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

const usuario = {
  margin:'40px',
  textDecoration: 'none',
  color: '#141537',
  padding: '8px 16px',
  fontSize: '16px',
  fontWeight: '500',
  cursor: 'pointer',
  backgroundColor: '#141537',
  color: '#ffffff',
  border: 'none',
  borderRadius: '4px',
  width: '100%',   // Añadido para que el botón ocupe el ancho completo del menú desplegable
};

const buttonStyle = {
  padding: '8px 16px',
  fontSize: '16px',
  fontWeight: '500',
  cursor: 'pointer',
  backgroundColor: '#141537',
  color: '#ffffff',
  border: 'none',
  borderRadius: '4px',
  width: '100%',
};

const dropdownStyle = {
  position: 'absolute',
  top: '100%',
  right: '0',
  backgroundColor: '#fff',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  minWidth: '120px',
};


const HeadNav = () => {
  const auth = useAuth();
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleLogout = () => {
    auth.logout();
  };

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };
  return (
    <nav style={containerStyle}>
      <div className="left" style={textStyleLogo}>
        <a href='inicio' style={linkStyle}>ParqueaYA!</a>
      </div>
      <div className="right" style={textStyleMenu}>
        <a href='inicio' style={linkStyle}>Inicio</a>
        <a href='#' style={linkStyle}>Servidor</a>
        <a href='#' style={linkStyle}>Cámara</a>
        <div style={{ position: 'relative' }}>
          {auth.isAuthenticated ? (
            <a href='#' style={usuario} onClick={toggleOptions}>
              {auth.user.username}
            </a>
          ) : (
            <Link to="/">
              <button style={buttonStyle}>Iniciar Sesión</button>
            </Link>
          )}
          {optionsVisible && auth.isAuthenticated && (
            <div style={dropdownStyle}>
              <button onClick={handleLogout}>
                Cerrar Sesión
              </button>
              {/* Otros elementos de opciones si es necesario */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeadNav;
