// HeadNav.js
import React, { useState } from "react";
import useAuth from "../views/Auth/auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faUserCog } from "@fortawesome/free-solid-svg-icons";

const containerStyle = {
  margin: "0px 20px",
  color: "#141537",
  height: "100px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: "Inter, sans-serif",
};

const textStyleLogo = {
  fontSize: "24px",
  fontWeight: "bold",
  fontFamily: "Inter, sans-serif",
};

const textStyleMenu = {
  margin: "0px 20px",
  fontSize: "16px",
  fontWeight: "500",
  fontFamily: "Inter, sans-serif",
};

const linkStyle = {
  margin: "0px 20px",
  textDecoration: "none",
  color: "#141537",
};

const usuario = {
  margin: "40px",
  textDecoration: "none",
  color: "#141537",
  padding: "8px 16px",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  backgroundColor: "#6180EC",
  color: "#ffffff",
  border: "none",
  borderRadius: "4px",
  width: "100%", // Añadido para que el botón ocupe el ancho completo del menú desplegable
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const buttonStyle = {
  padding: "8px 16px",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  backgroundColor: "#6180EC",
  color: "#ffffff",
  border: "none",
  borderRadius: "4px",
  width: "100%",
};

const dropdownStyle = {
  position: "absolute",
  top: "100%",
  right: "0",
  backgroundColor: "#fff",
  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
  minWidth: "120px",
  zIndex: 1,
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
        <a href="/" style={linkStyle}>
          ParqueaYA!
        </a>
      </div>
      <div className="right" style={textStyleMenu}>
        
        <div style={{ position: "relative", marginRight: "18px" }}>
          {auth.isAuthenticated ? (
            <div style={usuario} onClick={toggleOptions}>
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "8px" }} />
              {auth.user.username}
              <FontAwesomeIcon icon={faUserCog} style={{ marginLeft: "8px" }} />
            </div>
          ) : (
            <Link to="/">
              <button style={buttonStyle}>Iniciar Sesión</button>
            </Link>
          )}
          {optionsVisible && auth.isAuthenticated && (
            <div style={dropdownStyle}>
              <button onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "8px" }} />
                Cerrar Sesión
              </button>
              {/* Otras opciones de menú si es necesario */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeadNav;
