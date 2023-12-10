// Contenedor.js
import "../styles/Base.css";
import "../styles/Dashboard.css";
import React from "react";
import FloatingMenu from "../components/FloatingMenu";
import HeadNav from "../components/HeadNav";
import { Chart } from "react-google-charts";

export const data = [
  [
    { type: "date", id: "Date" },
    { type: "number", id: "Won/Loss" },
  ],
  [new Date(2023, 2, 4), 10],
  [new Date(2023, 2, 5), 3],
  [new Date(2023, 2, 7), -1],
  [new Date(2023, 2, 8), 2],
  [new Date(2023, 2, 12), -1],
  [new Date(2023, 2, 13), 1],
  [new Date(2023, 2, 15), 1],
  [new Date(2023, 2, 16), -4],
  [new Date(2023, 1, 4), 10],
  [new Date(2023, 1, 5), 3],
  [new Date(2023, 1, 7), -1],
  [new Date(2023, 1, 8), 2],
  [new Date(2023, 1, 12), -1],
  [new Date(2023, 1, 13), 1],
  [new Date(2023, 1, 15), 1],
  [new Date(2023, 1, 16), -4],
];

export const data2 = [
  ["Age", "Weight"],
  [8, 1],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [6.5, 7],
];

const options = {
  title: "Suscripciones",
};

export const options2 = {
  title: "Ganancias",
  hAxis: { title: "Age", minValue: 0, maxValue: 15 },
  vAxis: { title: "Weight", minValue: 0, maxValue: 15 },
  legend: "none",
  animation: {
    startup: true,
    easing: "linear",
    duration: 100,
  },
  enableInteractivity: false,
};

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
            <div className="dashboard-container">
              <Chart
                chartType="Calendar"
                width="auto"
                height="auto"
                data={data}
                options={options}
              />
              <Chart
                chartType="ScatterChart"
                width="auto"
                height="auto"
                data={data2}
                options={options2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contenedor;
