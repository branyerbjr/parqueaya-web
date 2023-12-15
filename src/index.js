import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/app';
import NotFoundPage from './views/NotFoundPage';
import Login from './views/Auth/login';
import Dashboard from './views/Admins/dashboard';
import Suscripciones from './views/Admins/suscripciones';
import Usuarios from './views/Admins/usuarios';
import Administradores from '../src/views/Admins/administradores';
import Menu_Secundario from './views/Admins/menu_secundario';
import Autentificacion from './components/Autentificacion';
import Registro from './views/Auth/registro';
import Palanca from './views/Admins/palanca';
import reportWebVitals from './reportWebVitals';
import Deverices from './views/Admins/Devices';
import Brocker from './views/Admins/Brocker';
import Configs from './views/Admins/Configs';
import Imgs from './views/Admins/Imgs';
import Pagos from './views/Admins/Pagos';


// Renderizando enrutador de navegador
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

// Simula el estado de autenticación
const isAuthenticated = true; // Cambia esto según tu lógica de autenticación

// Constante router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: "/auth/registro",
    element: <Registro/>,
  },
  /*{
    path: 'dashboard',
    element: (
      <ProtectedRoute
        element={<Dashboard />}
        isAuthenticated={isAuthenticated}
        fallbackPath="/"
      />
    ),
  },
  {
    path: 'suscripciones',
    element: <ProtectedRoute
                element={<Suscripciones/>}
                isAuthenticated={isAuthenticated}
                fallbackPath="/"
             />,
  },
  {
    path: 'usuarios',
    element: <ProtectedRoute
                element={<Usuarios/>}
                isAuthenticated={isAuthenticated}
                fallbackPath="/"
             />,
  },
  {
    path: 'administradores',
    element: <ProtectedRoute
                element={<Administradores/>}
                isAuthenticated={isAuthenticated}
                fallbackPath="/"
             />,
  },
  {
    path: 'autentificacion',
    element: <ProtectedRoute
                element={<Autentificacion/>}
                isAuthenticated={isAuthenticated}
                fallbackPath="/"
             />,
  },
  {
    path: 'palanca',
    element: <ProtectedRoute
                element={<Palanca/>}
                isAuthenticated={isAuthenticated}
                fallbackPath="/"
             />,
  },
  {
    path: 'cams',
    element: <ProtectedRoute
                element={<Deverices/>}
                isAuthenticated={isAuthenticated}
                fallbackPath="/"
             />,
  },
  {
    path: 'brocker',
    element: <ProtectedRoute
                element={<Brocker/>}
                isAuthenticated={isAuthenticated}
                fallbackPath="/"
             />,
  },*/
  {
    path: "dashboard",
    element: <Dashboard />,
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
  {
    path: "palanca",
    element: <Palanca/>,
  },
  {
    path: "cams",
    element: <Deverices/>
  },
  {
    path: "brocker",
    element: <Brocker/>
  },
  {
    path: 'menu',
    element: (
      <Menu_Secundario>
      </Menu_Secundario>
    ),
  },
  {
    path: "config",
    element: <Configs/>
  },
  {
    path: "photos",
    element: <Imgs/>
  },
  {
    path: "pagos",
    element: <Pagos/>
  },
  // ... otras rutas protegidas de manera similar
   // Ruta para manejar cualquier otra ruta no especificada (404)
  {
    path: '*',
    element: <NotFoundPage />, // Reemplaza 'NotFoundPage' con el componente de tu página 404
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Mide el rendimiento de tu aplicación
reportWebVitals();


/* constante router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login  />,
  },
  {
    path: "dashboard",
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
  {
    path: "palanca",
    element: <Palanca/>,
  },
  {
    path: "cams",
    element: <Deverices/>
  },
  {
    path: "brocker",
    element: <Brocker/>
  }
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
*/