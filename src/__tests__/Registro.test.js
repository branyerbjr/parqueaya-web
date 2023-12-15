import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { addUser } from '../../apis/admins'; // Importa la función de la API
import Registro from '../path-to-registro-component';

// Mock de la función addUser de la API
jest.mock('../../apis/admins', () => ({
  addUser: jest.fn(),
}));

// Mock de las funciones proporcionadas por el componente padre
const mockOnClose = jest.fn();
const mockOnAddUser = jest.fn();

test('renders Registro component and adds user', async () => {
  render(<Registro onClose={mockOnClose} onAddUser={mockOnAddUser} />);

  // Simular la entrada de datos
  fireEvent.change(screen.getByLabelText(/usuario/i), { target: { value: 'testuser' } });
  fireEvent.change(screen.getByLabelText(/nombres/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText(/apellidos/i), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'password123' } });

  // Simular clic en el botón de agregar
  fireEvent.click(screen.getByText(/agregar/i));

  // Asegurarse de que se haya llamado a la función addUser de la API con los datos correctos
  expect(addUser).toHaveBeenCalledWith({
    usuario: 'testuser',
    nombres: 'John',
    apellidos: 'Doe',
    contraseña: 'password123',
  });

  // Asegurarse de que se haya llamado a las funciones onClose y onAddUser del componente padre
  expect(mockOnClose).toHaveBeenCalledTimes(1);
  expect(mockOnAddUser).toHaveBeenCalledTimes(1);

  // Puedes agregar más aserciones según el comportamiento esperado del componente
});
