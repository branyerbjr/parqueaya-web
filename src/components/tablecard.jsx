import "../styles/TableCard.css";
import React, { useState } from 'react';
import AddUserModal from './AddUserModal';

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
    console.log('Adding user:', newUserData);

    // Llama a la función onAddUser pasada como prop
    onAddUser(newUserData);
    handleCloseModal();
    // Actualiza la página llamando a la función updatePage pasada como prop
    updatePage();
    
  };


  // Función para formatear la fecha
  const formatFechaRegistro = (fechaRegistro) => {
    const fecha = new Date(fechaRegistro);
    return fecha.toLocaleString(); // Puedes ajustar las opciones según tus preferencias
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
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Fecha Registro</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td
                onClick={() => setSelectedCell(user)}
                style={{ fontWeight: 'bold', cursor: 'pointer' }}
              >
                {user.nombres}
              </td>
              <td>{user.apellidos}</td>
              <td>{user.correo}</td>
              <td>{formatFechaRegistro(user.fecha_registro)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default TableCard;