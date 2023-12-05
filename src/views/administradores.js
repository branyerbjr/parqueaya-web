import React, { useState, useEffect } from "react";

import { getAdmins } from '../apis/admins';
import FloatingMenu from "../components/FloatingMenu";
import HeadNav from "../components/HeadNav";
import DetallesVentanaFlotanteUsuario from "./DetallesVentanaFlotanteAdministrador";
import TableCard from "../components/tablecard-admins"; // Asegúrate de que la importación sea correcta

function Administradores() {
  const [selectedCell, setSelectedCell] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const admins = await getAdmins();
        setAdmins(admins);
      } catch (error) {
        console.error('Error al obtener administradores:', error);
      }
    };

    fetchAdmins();
  }, [updatePage]); // Agrega updatePage como dependencia para que se vuelva a ejecutar cuando cambie

  
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
