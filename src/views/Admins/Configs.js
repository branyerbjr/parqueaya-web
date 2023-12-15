import React, { useState, useEffect } from "react";
import FloatingMenu from "../../components/FloatingMenu";
import HeadNav from "../../components/HeadNav";


function Configs() {
  return (
    <div className="Dashboard">
      <div className="fondo">
        <div className="contenedor_principal">
          <div className="RoundedRectangle">
            <div className="FloatingMenu">
              <FloatingMenu />
            </div>
            <HeadNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configs;