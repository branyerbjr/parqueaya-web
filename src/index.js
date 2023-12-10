import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/app';
import Login from './views/Auth/login';
import Dashboard from './views/dashboard';
import Suscripciones from './views/suscripciones';
import Usuarios from './views/usuarios';
import Administradores from '../src/views/Admins/administradores';
import Menu_Secundario from './views/menu_secundario';
import Autentificacion from './components/Autentificacion';
import Registro from './views/Auth/registro';
import reportWebVitals from './reportWebVitals';
import Deverices from './views/Devices';

// Renderizando enrutador de navegador
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// constante router
const router = createBrowserRouter([
  {
    path: "login",
    element: <Login  />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "menu",
    element: <Menu_Secundario />,
  },
  {
    path: "suscripciones",
    element: <Suscripciones/>,
  },
  {
    path: "usuarios",
    element: <Usuarios/>,
  },
  {
    path: "administradores",
    element: <Administradores/>,
  },
  {
    path: "autentificacion",
    element: <Autentificacion/>,
  },
  {
    path: "/login/registro",
    element: <Registro/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
