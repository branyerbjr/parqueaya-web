// Contenedor.js
import useAuth from "./Auth/auth";
import { Navigate } from "react-router-dom";
import "../styles/Suscripciones.css";
import React, { useState } from "react";
import FloatingMenu from "../components/FloatingMenu";
import HeadNav from "../components/HeadNav";
import DetallesVentanaFlotante from "../components/DetallesVentanaFlotante";

function TableCard({ title, count, tableData, setSelectedCell }) {
  const handleCellClick = (rowData) => {
    setSelectedCell(rowData);
  };

  return (
    <div className="tabla-card">
      <h2 className="title">{title}</h2>
      <p>{count}</p>
      <div className="tabla">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Ciudad</th>
              <th>Central</th>
              <th>Usuarios</th>
              <th>Administradores</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} >
                <td>{row.data1}</td>
                <td>{row.data2}</td>
                <td>{row.data3}</td>
                <td onClick={() => handleCellClick(row)}>{row.data4}</td>
                <td>{row.data5}</td>
                <td>{row.data6}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const cardtabla = [
  {
    tableData: [
      { data1: "1", data2: "10/11/2023", data3: "ARQ", data4: "Mall Porongoche", data5: "10", data6: "2" },
      { data1: "2", data2: "07/10/2023", data3: "LIM", data4: "Mall del Sur", data5: "9", data6: "1" },
      { data1: "3", data2: "01/06/2022", data3: "ARQ", data4: "Parque Lambramani", data5: "12", data6: "2" },
    ],
  },
];

function Suscripciones() {
  const [selectedCell, setSelectedCell] = useState(null);
  const auth = useAuth();

  // Verificar si el usuario está autenticado
  if (!auth.isAuthenticated) {
    // Si no está autenticado, redirigir a la página de inicio de sesión
    return <Navigate to="/" />;
  }

  const handleCloseVentanaFlotante = () => {
    setSelectedCell(null);
  };

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
              {cardtabla.map((card, index) => (
                <TableCard
                  key={index}
                  title={card.titulo}
                  count={card.count}
                  tableData={card.tableData}
                  setSelectedCell={setSelectedCell} // Pass setSelectedCell as a prop
                />
              ))}
            </div>
            {selectedCell && (
              <DetallesVentanaFlotante
                rowData={selectedCell}
                onClose={handleCloseVentanaFlotante}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suscripciones;
