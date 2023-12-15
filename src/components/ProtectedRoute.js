import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated, fallbackPath = '/' }) => {
  return isAuthenticated ? (
    <Route element={element} />
  ) : (
    <Navigate to={fallbackPath} replace />
  );
};

export default ProtectedRoute;
