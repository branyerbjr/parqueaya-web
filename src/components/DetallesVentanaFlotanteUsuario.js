// DetallesVentanaFlotante.js

import React, { useState } from "react";
import { updateUser } from "../apis/users";
import { deleteUser } from "../apis/users";

function DetallesVentanaFlotante({ rowData, setUpdatePage , onClose }) {
  const [editedData, setEditedData] = useState({ ...rowData });

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

  const handleDelete  = async () => {
    try {
      // Llama a la función para eliminar el usuario en el servidor
      await deleteUser(editedData.id);

      console.log("Usuario eliminado:", editedData);
      onClose(); // Cerrar la ventana flotante después de eliminar los datos
      setUpdatePage((prev) => !prev);
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      // Puedes agregar lógica adicional para manejar el error, como mostrar un mensaje al usuario
    }
  };


  return (
    <div className="modal">
      <div className="ventana-flotante">
        <h3>Editar Usuario</h3>
        <div className="content">
          <div className="content-2">
            <label>
              <i className="bi bi-person-circle"></i>
            </label>
            <button className="eliminar" onClick={handleDelete}>Eliminar</button>
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
            <label>
              Nombre:
              <input
                type="text"
                name="nombres"
                value={editedData.nombres}
                onChange={(e) => handleInputChange("nombres", e.target.value)}
              />
            </label>

            <label>
              Apellidos:
              <input
                type="text"
                name="apellidos"
                value={editedData.apellidos}
                onChange={(e) => handleInputChange("apellidos", e.target.value)}
              />
            </label>

            <label>
              Correo:
              <input
                type="text"
                name="correo"
                value={editedData.correo}
                onChange={(e) => handleInputChange("correo", e.target.value)}
              />
            </label>

            <button onClick={handleSaveChanges}>Actualizar</button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallesVentanaFlotante;
