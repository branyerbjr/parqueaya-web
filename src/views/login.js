import "../styles/Login.css";
import React, { useState } from "react";
import FloatingMenu from "../components/FloatingMenu";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />;
  return (
    <div className="Login">
      <div className="fondo">
        <div className="contenedor_principal">
          <div className="titulo">
            <h1> Bienvenido a ParqueaYa </h1>
          </div>

          <div className="contenedor_secundario">
            <div className="formulario">
              <div className="credenciales">
                <label className="mb-2" htmlFor="usuario">
                  Usuario
                </label>
                <input type="text" id="usuario" />
              </div>
              <div className="credenciales">
                <label className="mb-2" htmlFor="clave">
                  Clave
                </label>
                <div className="password-input">
                  <input type={showPassword ? "text" : "password"} id="clave" />
                  <span className="eye-icon" onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <i className="fas fa-eye-slash"></i>
                    ) : (
                      <i className="fas fa-eye"></i>
                    )}
                  </span>
                </div>
              </div>
              <div className="boton">
                <button>Iniciar Sesión</button>
              </div>
              <a className="boton" href="#">¿Olvidaste tu contraseña?</a>
              <div>
              <a className="boton" href="#">¿No tienes cuenta? Registrate aquí</a>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
