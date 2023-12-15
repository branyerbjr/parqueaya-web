// __tests__/AddUserModal.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { addUser } from '../apis/users'; // Importa la función de la API
import AddUserModal from '../path-to-addusermodal-component';

// Mock de la función addUser de la API
jest.mock('../apis/users', () => ({
  addUser: jest.fn(),
}));

// Mock de las funciones proporcionadas por el componente padre
const mockOnClose = jest.fn();
const mockOnAddUser = jest.fn();

test('renders AddUserModal component and adds user', async () => {
  render(<AddUserModal onClose={mockOnClose} onAddUser={mockOnAddUser} />);

  // Simular la entrada de datos
  fireEvent.change(screen.getByLabelText(/usuario/i), { target: { value: 'testuser' } });
  fireEvent.change(screen.getByLabelText(/nombres/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText(/apellidos/i), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByLabelText(/correo/i), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'password123' } });

  // Simular clic en el botón de agregar
  fireEvent.click(screen.getByText(/agregar/i));

  // Esperar a que se llame a la función addUser de la API
  await waitFor(() => expect(addUser).toHaveBeenCalled());

  // Asegurarse de que se haya llamado a las funciones onClose y onAddUser del componente padre
  expect(mockOnClose).toHaveBeenCalledTimes(1);
  expect(mockOnAddUser).toHaveBeenCalledTimes(1);

  // Puedes agregar más aserciones según el comportamiento esperado del componente
});
