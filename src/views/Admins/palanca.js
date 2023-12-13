import React, { useState } from "react";
import axios from 'axios';
import FloatingMenu from "../../components/FloatingMenu";
import HeadNav from "../../components/HeadNav";
import "../../styles/Palanca.css"; 

const Palanca = () => {
  const [isPalancaUp, setPalancaUp] = useState(false);

  const handleToggle = async () => {
    try {
      const data = {
        id: 3,
        nombre: "servo",
        topico: "brazo/control",
        status: !isPalancaUp
      };

      const response = await axios.put('http://yapi.34.23.25.139.sslip.io/v1/iot/servo/3/', data);
      console.log('Respuesta de la API al actualizar palanca:', response.data);

      setPalancaUp(!isPalancaUp);
    } catch (error) {
      console.error('Error al actualizar palanca:', error.response.data);
      // Handle error as needed
    }
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
              {/* Toggle switch */}
              <label className="toggle">
                <input type="checkbox" checked={isPalancaUp} onChange={handleToggle} />
                <span className="slider round"></span>
              </label>
              {/* Display status */}
              <div>{isPalancaUp ? "Palanca arriba" : "Palanca abajo"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Palanca;
