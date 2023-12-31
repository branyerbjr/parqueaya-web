import React, { useState, useEffect } from "react";
import useAuth from "../Auth/auth";
import { Navigate } from "react-router-dom";
import { getAdmins } from '../../apis/admins';
import FloatingMenu from "../../components/FloatingMenu";
import HeadNav from "../../components/HeadNav";
import DetallesVentanaFlotanteUsuario from "../../components/DetallesVentanaFlotanteAdministrador";
import TableCard from "../../components/tablecard-admins"; 

function Administradores() {
  const [selectedCell, setSelectedCell] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [updatePage, setUpdatePage] = useState(false);
  const auth = useAuth();

  /*useEffect(() => {
    // Verificar si el usuario está autenticado
    if (!auth.isAuthenticated) {
      // Si no está autenticado, redirigir a la página de inicio de sesión
      window.location.href = "/autentificacion";
    } else {
      const fetchAdmins = async () => {
        try {
          const admins = await getAdmins();
          setAdmins(admins);
        } catch (error) {
          console.error('Error al obtener administradores:', error);
        }
      };

      fetchAdmins();
    }
  }, [auth.isAuthenticated, updatePage]);*/

  /*por ahora*/
  const fetchAdmins = async () => {
    try {
      const admins = await getAdmins();
      setAdmins(admins);
    } catch (error) {
      console.error('Error al obtener administradores:', error);
    }
  };
  fetchAdmins();

  const handleAddUser = (newUserData) => {
    setUpdatePage((prev) => !prev);
    
  };
  
  const handleCloseVentanaFlotante = () => {
    setSelectedCell(null);
  };

  // Crea un array de objetos para cada tarjeta de tabla
  const cardtabla = [
    {
      titulo: "Administradores",
      count: admins.length,
      tableData: admins,
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
                  updatePage={updatePage} // Pasar updatePage como prop
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

export default Administradores;
