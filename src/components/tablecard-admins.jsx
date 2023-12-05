import "../styles/TableCard.css";
import React, { useState } from 'react';
import AddUserModal from '../views/AddAdminModal';

const TableCard = ({ title, tableData, setSelectedCell, onAddUser, updatePage }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddUser = (newUserData) => {
    // Add user logic
    console.log('Adding admin:', newUserData);

    // Llama a la función onAddUser pasada como prop
    onAddUser(newUserData);
    handleCloseModal();
    // Actualiza la página llamando a la función updatePage pasada como prop
    updatePage();
    
  };


  // Filtrar los usuarios según el término de búsqueda
  const filteredData = tableData.filter(
    (user) =>
      user.apellidos.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // Agregar usuarios
  
  return (
    <div className="tabla">
      <h2>{title}</h2>
      <div className="menu">
      <div className="filtro">
      <p>Filtro: </p>
      <input className="filtro-input"
        type="text"
        placeholder="Buscar por apellidos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <div className="boton-agregar">
        {/* Botón para abrir el modal */}
      <button className="bot" onClick={handleOpenModal}>+</button>

          {/* Modal para agregar usuario */}
          {isModalOpen && (
            <AddUserModal onClose={handleCloseModal} onAddUser={handleAddUser} />
          )}
      </div>
      </div>
      
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Contraseña</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td onClick={() => setSelectedCell(user)}
                style={{ fontWeight: 'bold', cursor: 'pointer' }}>{user.usuario}</td>
              <td>
                {user.nombres}
              </td>
              <td>{user.apellidos}</td>
              <td>{user.contraseña}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default TableCard;