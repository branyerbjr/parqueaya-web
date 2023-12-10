import "../styles/Base.css";
import "../styles/Menu.css";
import React from "react";
import FloatingMenu from "../components/FloatingMenu";
import HeadNav from "../components/HeadNav";
import Card from "../components/menu-card";

const cardData = [
    {
      titulo: "Suscripciones",
      icon: "bi bi-folder",
      to: "/suscripciones"
      
    },
    {
      titulo: "Administradores",
      icon: "bi bi-person-rolodex",
      to: "/administradores"
    },
    {
        titulo: "Usuarios",
        icon: "bi bi-person",
        to: "/usuarios"
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
                <div className="cards-container-menu">
                  {cardData.map((card, index) => (
                    <Card
                      key={index}
                      titulo={card.titulo}
                      icon={card.icon}
                      to={card.to}
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
  