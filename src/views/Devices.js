import React, { useState, useEffect } from "react";
import FloatingMenu from "../components/FloatingMenu";
import HeadNav from "../components/HeadNav";
// import DetallesVentanaFlotanteUsuario from "./DetallesVentanaFlotanteUsuario";

function Deverices() {
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
              <div className="card"> 
              <video width="100%" height="100%" controls>
                <source
                  src="http://ip:5000/video_feed"
                  type="multipart/x-mixed-replace; boundary=frame"
                />
                Tu navegador no soporta la etiqueta de video.
              </video>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deverices;
