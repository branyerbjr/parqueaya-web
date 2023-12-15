import React from 'react';

const NotFoundPage = () => {
    return (
      <div className="container text-center mt-5">
        <h1 className="display-4">404 - Página no encontrada</h1>
        <p className="lead">Lo sentimos, la página que estás buscando no existe.</p>
        <p>Por favor, verifica la URL o vuelve a la <a href="/">página de inicio</a>.</p>
      </div>
    );
  };

export default NotFoundPage;
