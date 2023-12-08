// auth.js

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import { getAdmins } from '../../apis/admins';

const useAuth = () => {
  const navigate = useNavigate(); // Obtiene la función de navegación

  const storedAuthData = localStorage.getItem('authData');
  const initialAuthData = storedAuthData
    ? JSON.parse(storedAuthData)
    : { isAuthenticated: false, user: null };

  const [authData, setAuthData] = useState(initialAuthData);

  const login = async (username, password) => {
    try {
      const admins = await getAdmins();
      const isValidUser = admins.some(
        (admin) => admin.usuario === username && admin.contraseña === password
      );

      if (isValidUser) {
        const newAuthData = { isAuthenticated: true, user: { username } };
        setAuthData(newAuthData);
        localStorage.setItem('authData', JSON.stringify(newAuthData));
      } else {
        setAuthData({ isAuthenticated: false, user: null });
        localStorage.removeItem('authData');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const logout = () => {
    setAuthData({ isAuthenticated: false, user: null });
    localStorage.removeItem('authData');
    navigate('/inicio'); // Utiliza navigate en lugar de history para redirigir al inicio
  };

  return {
    isAuthenticated: authData.isAuthenticated,
    user: authData.user,
    login,
    logout,
  };
};

export default useAuth;
