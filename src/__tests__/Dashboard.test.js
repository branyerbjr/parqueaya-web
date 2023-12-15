// __tests__/Dashboard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../path-to-dashboard-component';

// Mock de datos para las transacciones y métodos de pago
jest.mock('../../apis/pagos', () => ({
  getTransacciones: jest.fn(() => Promise.resolve([
    { id: 1, monto: '88.00', fecha: '2023-12-15T03:51:05.483065Z', usuario: 1, metodo_pago: 1 },
    { id: 2, monto: '100.00', fecha: '2023-12-15T04:38:50.068131Z', usuario: 1, metodo_pago: 1 },
  ])),
  getMetodosDePago: jest.fn(() => Promise.resolve([
    { id: 1, tipo_metodo_pago: 'boe', datos_metodo_pago: 'boeboe', usuario: 1 },
    { id: 2, tipo_metodo_pago: 'mercado pago', datos_metodo_pago: 'mercado pago', usuario: 3 },
    { id: 3, tipo_metodo_pago: 'yape', datos_metodo_pago: 'yape', usuario: 4 },
  ])),
}));

test('renders Dashboard component with correct data', async () => {
  render(<Dashboard />);

  // Asegúrate de que los datos se cargan correctamente
  expect(await screen.findByText('Transacciones')).toBeInTheDocument();
  expect(await screen.findByText('Ganancias')).toBeInTheDocument();

  // Aquí puedes agregar más aserciones según el comportamiento esperado del Dashboard
});
