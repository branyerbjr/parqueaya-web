// DetallesVentanaFlotante.js

import React, { useState } from "react";

function DetallesVentanaFlotante({ rowData, onClose }) {
  const [editedData, setEditedData] = useState({ ...rowData });

  const handleInputChange = (key, value) => {
    setEditedData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleSaveChanges = () => {
    // Aquí puedes implementar la lógica para guardar los cambios, por ejemplo, enviarlos al servidor
    console.log("Datos actualizados:", editedData);
    onClose(); // Cerrar la ventana flotante después de guardar los cambios
  };

  const handleDelete = () => {
    // Aquí puedes implementar la lógica para eliminar los datos, por ejemplo, enviar una solicitud al servidor
    console.log("Eliminar datos:", editedData);
    onClose(); // Cerrar la ventana flotante después de eliminar los datos
  };

  return (
    <div className="ventana-flotante">
        <h3>Editar Suscripción</h3>
        <div className="content-2">
        <label>
          <i className="bi bi-person-circle"></i>
        </label>
        <button onClick={handleDelete}>Eliminar</button>
      </div>
      <div className="ventana-content">
        <label>
          ID:
          <input
            type="text"
            value={editedData.data1}
            onChange={(e) => handleInputChange("data1", e.target.value)}
          />
        </label>
        <label>
          Fecha:
          <input
            type="text"
            value={editedData.data2}
            onChange={(e) => handleInputChange("data2", e.target.value)}
          />
        </label>
        <label>
          Ciudad:
          <input
            type="text"
            value={editedData.data3}
            onChange={(e) => handleInputChange("data3", e.target.value)}
          />
        </label>
        <label>
          Central:
          <input
            type="text"
            value={editedData.data4}
            onChange={(e) => handleInputChange("data4", e.target.value)}
          />
        </label>
        <label>
          Usuarios:
          <input
            type="text"
            value={editedData.data5}
            onChange={(e) => handleInputChange("data5", e.target.value)}
          />
        </label>
        <label>
          Administradores:
          <input
            type="text"
            value={editedData.data6}
            onChange={(e) => handleInputChange("data6", e.target.value)}
          />
        </label>
        <button onClick={handleSaveChanges}>Actualizar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
        </div>
        
  );
}

export default DetallesVentanaFlotante;
