import React, { useState } from "react";
import { updateUser } from "../apis/users";
import { deleteUser } from "../apis/users";
import DeleteUserModal from "./Modals/DeleteUserModal";

function DetallesVentanaFlotante({ rowData, setUpdatePage, onClose }) {
  const [editedData, setEditedData] = useState({ ...rowData });
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (key, value) => {
    setEditedData((prevData) => ({ ...prevData, [key]: value }));
  };


  const handleSaveChanges = async () => {
    try {
      // Llama a la función para actualizar el usuario en el servidor
      await updateUser(editedData.id, editedData);

      console.log("Datos actualizados:", editedData);
      onClose(); // Cierra la ventana flotante después de guardar los cambios
      setUpdatePage(prev => !prev);
    } catch (error) {
      console.error("Error al guardar cambios:", error);
      // Puedes agregar lógica adicional para manejar el error, como mostrar un mensaje al usuario
    }
  };

  const handleDelete = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteUser = async () => {
    try {
      setIsLoading(true);
      // Replace the following line with the actual delete function
      // await deleteUser(editedData.id);

      console.log("Usuario eliminado:", editedData);
      setDeleteModalOpen(false);
      onClose();
      setUpdatePage((prev) => !prev);
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal">
      <div className="ventana-flotante">
        <h3>Editar Usuario</h3>
        <div className="content">
          <div className="content-2">
            <button className="eliminar" onClick={handleDelete} disabled={isLoading}>
              {isLoading ? "Eliminando..." : "Eliminar"}
            </button>
            {isDeleteModalOpen && (
              <DeleteUserModal
                user={editedData}
                onClose={() => setDeleteModalOpen(false)}
                onDeleteUser={handleDeleteUser}
              />
            )}
          </div>
          <div className="ventana-content">
            <label>
              ID:
              <input
                type="text"
                name="id"
                value={editedData.id}
                readOnly
                onChange={(e) => handleInputChange("id", e.target.value)}
              />
            </label>
            {/* Placeholder for Nombre input field */}
            <label>
              Nombre:
              <input
                type="text"
                name="nombres"
                value={editedData.nombres}
                onChange={(e) => handleInputChange("nombres", e.target.value)}
              />
            </label>

            {/* Placeholder for Apellidos input field */}
            <label>
              Apellidos:
              <input
                type="text"
                name="apellidos"
                value={editedData.apellidos}
                onChange={(e) => handleInputChange("apellidos", e.target.value)}
              />
            </label>

            {/* Placeholder for Correo input field */}
            <label>
              Correo:
              <input
                type="text"
                name="correo"
                value={editedData.correo}
                onChange={(e) => handleInputChange("correo", e.target.value)}
              />
            </label>

            <label>
              Telefono:
              <input
                type="number"
                name="telefono"
                value={editedData.telefono}
                onChange={(e) => handleInputChange("telefono", e.target.value)}
              />
            </label>

            <label>
              DNI:
              <input
                type="number"
                name="dni"
                value={editedData.dni}
                onChange={(e) => handleInputChange("dni", e.target.value)}
              />
            </label>

            <label>
            Foto del Usuario:
              <input
                type="text"
                name="photo_url"
                value={editedData.photo_url}
                onChange={(e) => handleInputChange("photo_url", e.target.value)}
              />
            </label>

            <button onClick={handleSaveChanges} disabled={isLoading}>
              {isLoading ? "Guardando..." : "Actualizar"}
            </button>
            <button onClick={onClose} disabled={isLoading}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallesVentanaFlotante;
