import React from "react";
import { deleteUser } from "../../apis/users";
import "../../styles/TableCard.css";

const DeleteUserModal = ({ user, onClose, onDeleteUser }) => {
  const handleDeleteUser = async () => {
    try {
      await deleteUser(user.id);
      onDeleteUser(user.id);
      onClose();
    } catch (error) {
      console.error("Error al borrar usuario:", error);
    }
  };

  return (
    <div className="modal-borrar-usuario">
      <div className="ventana-flotante">
        <h3>Eliminar Usuario</h3>
        <p>
          ¿Estás seguro de que quieres eliminar a {user.nombres}{" "}
          {user.apellidos}?
        </p>
        <button onClick={handleDeleteUser}>Eliminar</button>
      </div>
    </div>
  );
};

export default DeleteUserModal;
