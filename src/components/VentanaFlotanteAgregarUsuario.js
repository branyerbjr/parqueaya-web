import React from 'react';

const DetallesVentanaFlotanteUsuario = ({ onClose }) => {
  // Puedes agregar lógica y contenido para tu ventana flotante aquí

  return (
    <div className="ventana-flotante">
      <h3>Detalles del Usuario</h3>
      {/* Contenido de la ventana flotante */}
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default DetallesVentanaFlotanteUsuario;
