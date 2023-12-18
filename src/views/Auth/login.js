import "../../styles/Login.css";
import React, { useState, useEffect } from "react";
import FloatingMenu from "../../components/FloatingMenu";
import { useNavigate } from "react-router-dom";
import useAuth from "../Auth/auth";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import { getAdmins } from "../../apis/admins";
import {loginUsuario} from "../../apis/users";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [clearInputs, setClearInputs] = useState(false);

  // Agrega el estado para administradores
  const [admins, setAdmins] = useState([]);

  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener información de los administradores
    const fetchAdmins = async () => {
      try {
        const adminsData = await getAdmins();
        setAdmins(adminsData);
      } catch (error) {
        console.error("Error al obtener administradores:", error);
      }
    };

    fetchAdmins();
  }, []); // Asegúrate de incluir 'admins' en la lista de dependencias

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
    // Validación de campos obligatorios
    if (!username || !password) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }
  
    console.log("Credenciales:", username, password); // Agrega esta línea
  
    try {
      // Use the loginUsuario function for authentication
      const token = await loginUsuario({ correo: username, password: password });
  
      console.log("Token de autenticación:", token); // Agrega esta línea
  
      if (token) {
        // Autenticar como administrador with the obtained token
        await auth.login(username, token);
  
        if (auth.isAuthenticated) {
          navigate("/menu");
        } else {
          setErrorMessage("Credenciales inválidas");
        }
      } else {
        setErrorMessage("Error al obtener el token de autenticación.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error); // Agrega esta línea
      setErrorMessage("Error al iniciar sesión");
    }
  };
  
  
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
                  Correo
                </label>
                <InputField
                  type="text"
                  id="correo"
                  value={clearInputs ? "" : username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="credenciales">
                <label className="mb-2" htmlFor="clave">
                  Clave
                </label>
                <div className="password-input">
                  <InputField
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={clearInputs ? "" : password}
                    onChange={handlePasswordChange}
                  />
                  <span className="eye-icon" onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <i className="fas fa-eye-slash"></i>
                    ) : (
                      <i className="fas fa-eye"></i>
                    )}
                  </span>
                </div>
              </div>
              <div className="error-message" style={{ color: "red" }}>
                {errorMessage}
              </div>
              <div className="boton">
                <button onClick={handleLogin}>Iniciar Sesión</button>
              </div>
              <a className="boton" style={{ textDecoration: 'none' }} href="#">
                ¿Olvidaste tu contraseña?
              </a>
              <div>
                <Link to="/auth/registro" style={{ textDecoration: 'none' }}>
                  <div className="boton">
                    <a>¿No tienes cuenta? Registrate aquí</a>
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

export default Login;
