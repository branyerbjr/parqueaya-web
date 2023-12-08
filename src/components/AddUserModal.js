import React, { useState } from 'react';
import { addUser } from '../apis/users';
import "../styles/TableCard.css";

const AddUserModal = ({ onClose, onAddUser }) => {
  const [newUserData, setNewUserData] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    contraseña: '',
    // Otros campos según tus necesidades
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddUser = async () => {
    // Validaciones de campos (puedes personalizar según tus necesidades)
    if (!newUserData.nombres || !newUserData.apellidos || !newUserData.correo || !newUserData.contraseña) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    try {
      // Llamar a la función de la API para agregar el usuario
      const addedUser = await addUser({
        ...newUserData,
        fecha_registro: new Date().toISOString(), // Agrega la fecha actual
      });

      // Llamar a la función proporcionada por el componente padre
      // para realizar acciones adicionales con el nuevo usuario
      onAddUser(addedUser);

      // Cerrar la ventana flotante
      onClose();
    } catch (error) {
      console.error('Error al agregar usuario:', error);
      // Puedes agregar un manejo de errores más específico si es necesario
    }
  };

  return (
    
    <div className="modal">
      <div className="modal-content">
        <h2>Agregar Usuario</h2>
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
        <label>Correo:</label>
        <input
          type="email"
          name="correo"
          value={newUserData.correo}
          onChange={handleInputChange}
        />
        <label>Contraseña:</label>
        <input
          type="password"
          name="contraseña"
          value={newUserData.contraseña}
          onChange={handleInputChange}
        />
        {/* Otros campos del usuario */}
        <button onClick={handleAddUser}>Agregar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default AddUserModal;
