import "../../styles/Login.css";
import React, { useState } from "react";
import FloatingMenu from "../../components/FloatingMenu";
import { getAdmins } from '../../apis/admins';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Auth/auth';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [clearInputs, setClearInputs] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleLogin = async () => {
    await auth.login(username, password);

    if (auth.isAuthenticated) {
      navigate("/inicio");
    } else {
      // En caso de error en la autenticación, puedes utilizar el mensaje de error del hook de autenticación
      setClearInputs(true);
    }
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
                <input type="text" id="usuario" value={clearInputs ? "" : username} onChange={handleUsernameChange} />
              </div>
              <div className="credenciales">
                <label className="mb-2" htmlFor="clave">
                  Clave
                </label>
                <div className="password-input">
    <input type={showPassword ? "text" : "password"} id="clave"  value={clearInputs ? "" : password} onChange={handlePasswordChange} />
    <span className="eye-icon" onClick={togglePasswordVisibility}>
      {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
    </span>
    

  </div>
              </div>
              <div className="error-message" style={{ color: "red" }}>
  {errorMessage}
</div>
              <div className="boton">
              <button onClick={handleLogin}>Iniciar Sesión</button>
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