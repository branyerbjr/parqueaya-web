import React, {useState} from "react";
import { deleteUser } from "../../apis/admins";
import "../../styles/TableCard.css";
import DetallesVentanaFlotante from "../DetallesVentanaFlotanteUsuario";

const DeleteUserModal = ({ user, onClose, onDeleteUser }) => {
  const [updatePage, setUpdatePage] = useState(false);

  const [isDetallesVentanaOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteUser = async () => {
    try {
      await deleteUser(user.id);
      onDeleteUser(user.id);
      setDeleteModalOpen(false);
      onClose();
      
      setUpdatePage((prev) => !prev);
      
    } catch (error) {
      console.error("Error al borrar usuario:", error);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="modal-borrar-usuario">
      <div className="ventana-flotante">
        <h3>Eliminar Usuario</h3>
        <p>
          ¿Estás seguro de que quieres eliminar a {user.nombres} {user.apellidos}?
        </p>
        <button onClick={handleDeleteUser}>Eliminar</button>
        
        <button onClick={handleCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteUserModal; 