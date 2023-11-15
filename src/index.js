import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/app';
import Login from './views/login';
import reportWebVitals from './reportWebVitals';

// Renderizando enrutador de navegador
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// constante router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
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
