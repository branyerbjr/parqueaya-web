import React, { useState, useEffect } from "react";

import { getUsers, deleteUser, updateUser } from '../../apis/users';
import FloatingMenu from "../../components/FloatingMenu";
import HeadNav from "../../components/HeadNav";
import DetallesVentanaFlotanteUsuario from "../../components/DetallesVentanaFlotanteUsuario";
import TableCard from "../../components/tablecard"; // Asegúrate de que la importación sea correcta
import useAuth from "../Auth/auth";

function Usuarios() {
  const [selectedCell, setSelectedCell] = useState(null);
  const [users, setUsers] = useState([]);
  const [updatePage, setUpdatePage] = useState(false);
  const auth = useAuth();
  useEffect(() => {
    // Verificar si el usuario está autenticado
    if (!auth.isAuthenticated) {
      // Si no está autenticado, redirigir a la página de inicio de sesión
      window.location.href = "/autentificacion";
    } else {
      // Llamar a la función fetchUsers al cargar la página y cuando se actualiza la página
      fetchUsers();
    }
  }, [auth.isAuthenticated, updatePage]);

  /*useEffect(() => {
    // Verificar si el usuario está autenticado
    if (!auth.isAuthenticated) {
      // Si no está autenticado, redirigir a la página de inicio de sesión
      window.location.href = "/autentificacion";
    } else {
      const fetchUsers = async () => {
        try {
          const users = await getUsers();
          setUsers(users);
        } catch (error) {
          console.error('Error al obtener usuarios:', error);
        }
      };

      fetchUsers();
    }
  }, [auth.isAuthenticated, updatePage]);*/

  const fetchUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  fetchUsers();

  const handleAddUser = (newUserData) => {
    setUpdatePage((prev) => !prev);
    
  };
  
  const handleCloseVentanaFlotante = () => {
    setSelectedCell(null);
  };
  const handleEditUser = (editedUserData) => {
    // Lógica para editar un usuario
    console.log('Editar usuario:', editedUserData);
    // Actualiza la página llamando a la función updatePage
    setUpdatePage((prev) => !prev);
  };

  const handleDeleteUser = (userId) => {
    // Lógica para borrar un usuario
    console.log('Borrar usuario ID:', userId);
    // Actualiza la página llamando a la función updatePage
    setUpdatePage((prev) => !prev);
  };

  // Crea un array de objetos para cada tarjeta de tabla
  const cardtabla = [
    {
      titulo: "Usuarios",
      count: users.length,
      tableData: users,
    },
    // Agrega más tarjetas de tabla según tus necesidades
  ];

  return (
    <div className="Dashboard">
      <div className="fondo">
        <div className="contenedor_principal">
          <div className="RoundedRectangle">
            <div className="FloatingMenu">
              <FloatingMenu />
            </div>
            <HeadNav />
            <div className="cards-container">
              <div className="tabla-usuarios">
              {cardtabla.map((card, index) => (
                <TableCard
                key={index}
                title={card.titulo}
                count={card.count}
                tableData={card.tableData}
                setSelectedCell={setSelectedCell}
                onAddUser={handleAddUser}
                onDeleteUser={handleDeleteUser}  // Pasa la función handleDeleteUser como prop
                onEditUser={handleEditUser}  // Pasa la función handleEditUser como prop
                updatePage={updatePage}
                />
              ))}
              </div>
            </div>
            {selectedCell && (
              <DetallesVentanaFlotanteUsuario
                rowData={selectedCell}
                setUpdatePage={setUpdatePage}
                onClose={handleCloseVentanaFlotante}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
