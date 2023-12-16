import React, { useState } from "react";
import { addUser } from "../apis/admins";
import "../styles/ModalAdmin_Agregar.css";


const AddUserModal = ({ onClose, onAddUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [newUserData, setNewUserData] = useState({
    usuario: "",
    nombres: "",
    apellidos: "",
    contraseña: "",
    // Otros campos según tus necesidades
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddUser = async () => {
    // Validaciones de campos (puedes personalizar según tus necesidades)
    if (
      !newUserData.usuario ||
      !newUserData.nombres ||
      !newUserData.apellidos ||
      !newUserData.contraseña
    ) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    try {
      // Llamar a la función de la API para agregar el usuario
      const addedUser = await addUser({
        ...newUserData,
      });

      // Llamar a la función proporcionada por el componente padre
      // para realizar acciones adicionales con el nuevo usuario
      onAddUser(addedUser);

      // Cerrar la ventana flotante
      onClose();
    } catch (error) {
      console.error("Error al agregar administrador:", error);
      // Puedes agregar un manejo de errores más específico si es necesario
    }
  };

  return (
    
    <div className="modal-agregar-administrador">
      <div className="ventana-flotante">
        <h3>Agregar Administrador</h3>
      
        <div className="ventana-content">
          <label>Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={newUserData.usuario}
            onChange={handleInputChange}
          />
          <label>Nombres:</label>
          <input
            type="text"
            name="nombres"
            value={newUserData.nombres}
            onChange={handleInputChange}
          />
          <label>Apellidos:</label>
          <input
            type="text"
            name="apellidos"
            value={newUserData.apellidos}
            onChange={handleInputChange}
          />
          <label className="mb-2" htmlFor="clave">
          Contraseña
          </label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              name="contraseña"
              value={newUserData.contraseña}
              onChange={handleInputChange}
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </span>
          </div>
          <button onClick={handleAddUser}>Agregar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};
export default AddUserModal;
