import React, { useEffect, useState } from "react";
import "../../styles/Base.css";
import "../../styles/Dashboard.css";
import FloatingMenu from "../../components/FloatingMenu";
import HeadNav from "../../components/HeadNav";
import { Chart } from "react-google-charts";
import { getTransacciones, getMetodosDePago } from "../../apis/pagos";
import { getUsers } from "../../apis/users";

function Contenedor() {
  const [transacciones, setTransacciones] = useState([]);
  const [metodosDePago, setMetodosDePago] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Obtener datos de transacciones, métodos de pago y usuarios al cargar el componente
    const fetchData = async () => {
      try {
        const transaccionesData = await getTransacciones();
        const metodosDePagoData = await getMetodosDePago();
        const usuariosData = await getUsers();

        setTransacciones(transaccionesData);
        setMetodosDePago(metodosDePagoData);
        setUsuarios(usuariosData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  // Calcular el total de dinero ganado por transacciones
  const totalDineroTransacciones = transacciones.reduce(
    (total, transaccion) => total + parseFloat(transaccion.monto),
    0
  );

  return (
    <div className="Dashboard">
      <div className="fondo">
        <div className="contenedor_principal">
          <div className="RoundedRectangle">
            <div className="FloatingMenu">
              <FloatingMenu />
            </div>
            <HeadNav />
            <div className="dashboard-container">
              <h2>Dashboard</h2>
              {/* Gráfico de Transacciones */}
              <Chart
                chartType="Calendar"
                width="auto"
                height="auto"
                data={[
                  ["Fecha", "Monto"],
                  ...transacciones.map((transaccion) => [
                    new Date(transaccion.fecha),
                    parseFloat(transaccion.monto),
                  ]),
                ]}
                options={{ title: "Transacciones"
               
              }}
              />

              
              <div className="dashboard2">
                {/* Gráfico de Métodos de Pago */}
              <div className="card">
              <Chart
                chartType="PieChart"
                width="auto"
                height="auto"
                data={[
                  ["Tipo de Método de Pago", "Cantidad"],
                  ...metodosDePago.map((metodo) => [
                    metodo.tipo_metodo_pago,
                    1, // Puedes ajustar esto según tu lógica o datos disponibles
                  ]),
                ]}
                options={{ title: "Métodos de Pago" }}
              />
              </div>
              {/* Cards con Ganancias y Número de Usuarios */}
             <div className="card ">
             <div className="dashboard-card">
                  <h3>Ganancias</h3>
                  <p>${totalDineroTransacciones.toFixed(2)}</p>
                </div>
             </div>
             <div className="card">
             <div className="dashboard-card">
                  <h3>Número de Usuarios</h3>
                  <p>{usuarios.length}</p>
                </div>
             </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contenedor;
