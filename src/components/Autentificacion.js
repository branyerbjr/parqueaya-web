import React from "react";
import { Link } from "react-router-dom";
import '../styles/Login.css';

const AuthenticationError = () => {
  return (
    <div className="App">
      <div className="fondo">
        <div className="contenedor_principal">
          <div className="RoundedRectangle">
          <div className="cards-container-autentificacion">
            <div>
              <h1>Opps... Inicia Sesión primero</h1>
              <p>Para acceder a esta página, necesitas iniciar sesión.</p>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <div className="boton">
                  <button>Login</button>
                </div>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationError;
