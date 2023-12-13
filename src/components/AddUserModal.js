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
    if (!newUserData.nombres || !newUserData.apellidos || !newUserData.correo || !newUserData.password) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    try {
      const addedUser = await addUser({
        ...newUserData,
        fecha_registro: new Date().toISOString(),
      });

      onAddUser(addedUser);
      onClose();
    } catch (error) {
      console.error('Error al agregar usuario:', error);
    }
  };

  return (
    <div className="modal-agregar-administrador">
      <div className="ventana-flotante">
        <h3>Agregar Usuario</h3>
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
