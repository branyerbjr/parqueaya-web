// __tests__/Login.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../path-to-login-component';

test('renders login form and handles login', () => {
  render(<Login />);
  expect(screen.getByLabelText('Usuario')).toBeInTheDocument();
  expect(screen.getByLabelText('Clave')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Iniciar Sesión' })).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText('Usuario'), { target: { value: 'testUser' } });
  fireEvent.change(screen.getByLabelText('Clave'), { target: { value: 'testPassword' } });

  fireEvent.click(screen.getByRole('button', { name: 'Iniciar Sesión' }));

  // Agrega aserciones según el comportamiento esperado después del inicio de sesión
});
