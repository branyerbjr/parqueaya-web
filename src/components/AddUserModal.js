import React, { useState } from 'react';
import { addUser } from '../apis/users';
import '../styles/TableCard.css';

const AddUserModal = ({ onClose, onAddUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [newUserData, setNewUserData] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    password: '',
    usuario: '',
    foto: '',
    telefono: '',
    dni: '',
    provider_id: '',  // Agregado el campo provider_id
    provider_specific_uid: '',  // Agregado el campo provider_specific_uid
  });

  const handleRemoveImage = () => {
    setNewUserData((prevData) => ({
      ...prevData,
      foto: '',
    }));
  };

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

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewUserData((prevData) => ({
        ...prevData,
        foto: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddUser = async () => {
    if (
      !newUserData.nombres ||
      !newUserData.apellidos ||
      !newUserData.correo ||
      !newUserData.password ||
      !newUserData.telefono ||
      !newUserData.provider_id ||
      !newUserData.provider_specific_uid ||
      !newUserData.dni ||
      !newUserData.photo_url
    ) {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    try {
      // Asegúrate de que el usuario sea agregado correctamente antes de continuar
      const addedUser = await addUser({
        ...newUserData,
        fecha_registro: new Date().toISOString(),
      });
  
      // Llama a la función proporcionada onAddUser con el usuario recién agregado
      onAddUser(addedUser);
  
      // Cierra el modal después de agregar el usuario con éxito
      onClose();
    } catch (error) {
      console.error('Error al agregar usuario:', error);
      // Puedes agregar un manejo de error adicional si es necesario
    }
  };
  

  return (
    <div className="modal-agregar-administrador">
      <div className="ventana-flotante">
        <h3>Agregar Usuario 2</h3>
        <div className="ventana-content">
          <label>Usuario:</label>
          <input type="text" name="usuario" value={newUserData.usuario} onChange={handleInputChange} />
          <label>Nombres:</label>
          <input type="text" name="nombres" value={newUserData.nombres} onChange={handleInputChange} />
          <label>Apellidos:</label>
          <input type="text" name="apellidos" value={newUserData.apellidos} onChange={handleInputChange} />
          <label>Correo:</label>
          <input type="text" name="correo" value={newUserData.correo} onChange={handleInputChange} />
          <label>Contraseña:</label>
          <div className="password-input">
            <input type={showPassword ? 'text' : 'password'} name="password" value={newUserData.password} onChange={handleInputChange} />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
            </span>
          </div>
          <label>Teléfono:</label>
          <input type="text" name="telefono" value={newUserData.telefono} onChange={handleInputChange} />
          <label>DNI:</label>
          <input type="text" name="dni" value={newUserData.dni} onChange={handleInputChange} />
          <label>Provider ID:</label>
          <input type="text" name="provider_id" value={newUserData.provider_id} onChange={handleInputChange} />
          <label>Provider Specific UID:</label>
          <input type="text" name="provider_specific_uid" value={newUserData.provider_specific_uid} onChange={handleInputChange} />
          <label>Foto del Usuario:</label>
          <div className="imagen-container">
            <input className="imagen" type="file" accept="image/*" onChange={handleFileInputChange} />
            {newUserData.foto && (
              <div className="image-preview-container">
                <span className="close-icon" onClick={handleRemoveImage}>
                  &times;
                </span>
                <img className="preview-imagen" src={newUserData.foto} alt="Foto de usuario" />
              </div>
            )}
          </div>

          <button onClick={handleAddUser}>Agregar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
