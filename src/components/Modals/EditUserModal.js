import React, { useState } from "react";
import { updateUser } from "../../apis/users";
import "../../styles/TableCard.css";

const EditUserModal = ({ user, onClose, onUpdateUser }) => {
  const [editedUserData, setEditedUserData] = useState({
    nombres: user.nombres,
    apellidos: user.apellidos,
    correo: user.correo,
    password: "", // Puedes mantener la contraseña en blanco o manejarla de manera diferente
    usuario: user.usuario,
    foto: user.foto,
  });

  const handleRemoveImage = () => {
    setEditedUserData((prevData) => ({
      ...prevData,
      foto: "",
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setEditedUserData((prevData) => ({
        ...prevData,
        foto: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const updatedUser = await updateUser(user.id, {
        ...editedUserData,
      });

      onUpdateUser(updatedUser);
      onClose();
    } catch (error) {
      console.error("Error al editar usuario:", error);
    }
  };

  return (
    <div className="modal-editar-usuario">
      <div className="ventana-flotante">
        <h3>Editar Usuario</h3>
        <div className="ventana-content">
          <label>Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={editedUserData.usuario}
            onChange={handleInputChange}
          />
          <label>Nombres:</label>
          <input
            type="text"
            name="nombres"
            value={editedUserData.nombres}
            onChange={handleInputChange}
          />
          <label>Apellidos:</label>
          <input
            type="text"
            name="apellidos"
            value={editedUserData.apellidos}
            onChange={handleInputChange}
          />
          <label>Correo:</label>
          <input
            type="text"
            name="correo"
            value={editedUserData.correo}
            onChange={handleInputChange}
          />
          <label>Contraseña:</label>
          <div className="password-input">
            <input
              type="password"
              name="password"
              value={editedUserData.password}
              onChange={handleInputChange}
            />
          </div>
          <label>Foto del Usuario:</label>
          <div className="imagen-container">
            <input
              className="imagen"
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
            />
            {editedUserData.foto && (
              <div className="image-preview-container">
                <span className="close-icon" onClick={handleRemoveImage}>
                  &times;
                </span>
                <img
                  className="preview-imagen"
                  src={editedUserData.foto}
                  alt="Foto de usuario"
                />
              </div>
            )}
          </div>

          <button onClick={handleUpdateUser}>Guardar Cambios</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
