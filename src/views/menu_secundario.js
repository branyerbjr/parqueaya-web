import "../styles/Base.css";
import "../styles/Menu.css";
import React from "react";
import FloatingMenu from "../components/FloatingMenu";
import HeadNav from "../components/HeadNav";
import Card from "../components/menu-card";

const cardData = [
    {
      titulo: "Suscripciones",
      icon: "bi bi-folder"
      
    },
    {
      titulo: "Administradores",
      icon: "bi bi-person-rolodex"
    },
    {
        titulo: "Usuarios",
        icon: "bi bi-person"
      },
  ];
function Menu_Secundario() {
    return (
        <div className="Menu">
          <div className="fondo">
            <div className="contenedor_principal">
              <div className="RoundedRectangle">
                <div className="FloatingMenu">
                  <FloatingMenu />
                </div>
                <HeadNav />
                <div className="cards-container">
                  {cardData.map((card, index) => (
                    <Card
                      key={index}
                      titulo={card.titulo}
                      icon={card.icon}
                    />
                  ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
  
  export default Menu_Secundario;
  