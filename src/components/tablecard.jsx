// Importa las bibliotecas y estilos necesarios
import "../styles/TableCard.css";
import React, { useState } from "react";
import AddUserModal from "./Modals/AddUserModal";
import EditUserModal from "./Modals/EditUserModal";
import DeleteUserModal from "./Modals/DeleteAdminModal";

// Define el componente TableCard
const TableCard = ({
  title,
  tableData,
  setSelectedCell,
  onAddUser,
  onUpdateUser, // Asegúrate de pasar esta función como prop
  onDeleteUser, // Asegúrate de pasar esta función como prop
  onUpdatePage, // Add this prop
  rowData
}) => {
  const [editedData, setEditedData] = useState({ ...rowData });
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleOpenDeleteModal = (user) => {
    setSelectedUser(user);
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
    // Actualiza la página llamando a la función onUpdatePage pasada como prop
    onUpdatePage();
  };

  const handleUpdateUser = (updatedUserData) => {
    // Update user logic
    console.log("Updating user:", updatedUserData);

    // Llama a la función onUpdateUser pasada como prop
    onUpdateUser(updatedUserData);
    handleCloseEditModal();
    // Actualiza la página llamando a la función onUpdatePage pasada como prop
    onUpdatePage();
  };

  const handleDeleteUser = async () => {
    try {
      setIsLoading(true);
      // Replace the following line with the actual delete function
      // await deleteUser(editedData.id);

      console.log("Usuario eliminado:", editedData);
      handleCloseDeleteModal();
      // Actualiza la página llamando a la función onUpdatePage pasada como prop
      onUpdatePage();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
          {isAddModalOpen && (
            <AddUserModal
              onClose={handleCloseAddModal}
              onAddUser={handleAddUser}
            />
          )}
        </div>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Foto</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>DNI.</th>
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
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
