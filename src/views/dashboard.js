// Contenedor.js
import "../styles/Base.css";
import "../styles/Dashboard.css";
import React from "react";
import FloatingMenu from "../components/FloatingMenu";
import HeadNav from "../components/HeadNav";
import Card from "../components/dashboard-card";


//función para la informacion de la tabla dentro del card
function TableCard({ title,count, tableData }) {
  return (
    <div className="card TableCard">
      <h2 className="title">{title}</h2>
      <p>{count}</p>
      <div className="tabla-scroll">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Ciudad</th>
              <th>Central</th>
              {/* Agrega más encabezados según sea necesario */}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.data1}</td>
                <td>{row.data2}</td>
                <td>{row.data3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


const cardData = [
  {
    titulo: "Nuevos Usuarios",
  },
  {
    titulo: "Ciudades con más Usuarios",
  },
];

// informacion de la tabla en el card
const cardtabla = [
  {
    titulo: "Total de suscripciones",
    count: "3",
    tableData: [
      { data1: "10/11/2023", data2: "ARQ", data3: "Mall Porongoche" },
      { data1: "07/10/2023", data2: "LIM", data3: "Mall del Sur" },
      { data1: "01/06/2022", data2: "ARQ", data3: "Parque Lambramani" },
    ],
  }
];

function Contenedor() {
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
                      />
                    ))}
                  {cardData.map((card, index) => (
                    <Card
                      key={index}
                      titulo={card.titulo}
                    />
                  ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contenedor;