// Importa las bibliotecas y estilos necesarios
import "../styles/TableCard.css";
import React, { useState } from "react";
import AddUserModal from "./Modals/AddUserModal";
import EditUserModal from "./Modals/EditUserModal";
import DeleteUserModal from "./Modals/DeleteUserModal";

// Define el componente TableCard
const TableCard = ({
  title,
  tableData,
  setSelectedCell,
  onAddUser,
  onUpdateUser, // Asegúrate de pasar esta función como prop
  onDeleteUser, // Asegúrate de pasar esta función como prop
  updatePage,
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenAddModal = () => {
    setAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
  };

  const handleOpenEditModal = (user) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedUser(null);
    setEditModalOpen(false);
  };

  const handleOpenDeleteModal = (userId) => {
    setSelectedUser(userId);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedUser(null);
    setDeleteModalOpen(false);
  };

  const filteredData = tableData.filter((user) =>
    user.apellidos.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = (newUserData) => {
    // Add user logic
    console.log("Adding user:", newUserData);

    // Llama a la función onAddUser pasada como prop
    onAddUser(newUserData);
    handleCloseAddModal();
    // Actualiza la página llamando a la función updatePage pasada como prop
    updatePage();
  };

  const handleUpdateUser = (updatedUserData) => {
    // Update user logic
    console.log("Updating user:", updatedUserData);

    // Llama a la función onUpdateUser pasada como prop
    onUpdateUser(updatedUserData);
    handleCloseEditModal();
    // Actualiza la página llamando a la función updatePage pasada como prop
    updatePage();
  };

  const handleDeleteUser = (userId) => {
    // Delete user logic
    console.log("Deleting user ID:", userId);

    // Llama a la función onDeleteUser pasada como prop
    onDeleteUser(userId);
    handleCloseDeleteModal();
    // Actualiza la página llamando a la función updatePage pasada como prop
    updatePage();
  };

  // ... Funciones y código anterior ...

  return (
    <div className="tabla">
      <h2>{title}</h2>
      <div className="menu">
        <div className="filtro">
          <p>Filtro: </p>
          <input
            className="filtro-input"
            type="text"
            placeholder="Buscar por apellidos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="boton-agregar">
          <button className="bot" onClick={handleOpenAddModal}>
            +
          </button>
<<<<<<< HEAD

          {/* Modal para agregar usuario */}
          {isModalOpen && (
            <AddUserModal
              onClose={handleCloseModal}
=======
          {isAddModalOpen && (
            <AddUserModal
              onClose={handleCloseAddModal}
>>>>>>> 66814eff8f3d8034ab0cf741c81204c102b23600
              onAddUser={handleAddUser}
            />
          )}
        </div>
      </div>

<<<<<<< HEAD
      {/* Agregar la clase table-responsive al contenedor */}
=======
>>>>>>> 66814eff8f3d8034ab0cf741c81204c102b23600
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Foto</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correo</th>
<<<<<<< HEAD
              <th>Telefono</th>
              <th>DNI</th>
              <th>Acciones</th> {/* Nueva columna de acciones */}
=======
              <th>DNI.</th>
              <th>Acciones</th>
>>>>>>> 66814eff8f3d8034ab0cf741c81204c102b23600
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                
                <td>
                    <img
                      src={user.photo_url}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td
                  onClick={() => setSelectedCell(user)}
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                >
                  {user.nombres}
                </td>
                <td>{user.apellidos}</td>
                <td>{user.correo}</td>
                <td>{user.telefono}</td>
                <td>{user.dni}</td>
                <td>
                  <i
<<<<<<< HEAD
                    className="bi bi-pencil-square "
                    onClick={() => handleEditUser(user)}
                  ></i>
                  <i
                    className="bi bi-trash bi-danger "
                    onClick={() => handleDeleteUser(user.id)}
=======
                    className="bi bi-pencil-square"
                    onClick={() => handleOpenEditModal(user)}
                  ></i>
                  <i
                    type="button"
                    className="bi bi-trash bi-danger"
                    onClick={() => handleOpenDeleteModal(user.id)}
>>>>>>> 66814eff8f3d8034ab0cf741c81204c102b23600
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modales */}
      {isEditModalOpen && selectedUser && (
        <EditUserModal
          user={selectedUser}
          onClose={handleCloseEditModal}
          onUpdateUser={handleUpdateUser}
        />
      )}

      {isDeleteModalOpen && selectedUser && (
        <DeleteUserModal
          user={selectedUser}
          onClose={handleCloseDeleteModal}
          onDeleteUser={handleDeleteUser}
        />
      )}
    </div>
  );
};

export default TableCard;
