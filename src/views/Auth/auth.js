// auth.js

import { useState, useEffect } from 'react';
import { getAdmins } from '../../apis/admins'; // Ajusta la ruta según tu estructura

const useAuth = () => {
  const storedAuthData = localStorage.getItem('authData');
  const initialAuthData = storedAuthData ? JSON.parse(storedAuthData) : { isAuthenticated: false, user: null };

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
        localStorage.removeItem('authData'); // Elimina la información si el login falla
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const logout = () => {
    setAuthData({ isAuthenticated: false, user: null });
    localStorage.removeItem('authData');
  };

  return {
    isAuthenticated: authData.isAuthenticated,
    user: authData.user,
    login,
    logout,
  };
};

export default useAuth;
