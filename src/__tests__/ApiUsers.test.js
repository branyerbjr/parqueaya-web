import axios from 'axios';
import { getUsers } from '../path-to-your-file';

// Mock de axios
jest.mock('axios');

const mockedData = [{ id: 1, nombre: 'Usuario1' }];

describe('getUsers', () => {
  test('should fetch users', async () => {
    // Configuración del mock de axios
    axios.get.mockResolvedValue({ data: mockedData });

    // Llamada a la función que estás probando
    const result = await getUsers();

    // Verificación de que la función haya hecho la llamada correcta
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/user/usuarios/'));

    // Verificación de que la función devuelve los datos esperados
    expect(result).toEqual(mockedData);
  });

  test('should throw an error if the API call fails', async () => {
    // Configuración del mock de axios para simular un error
    const errorMessage = 'Error fetching users';
    axios.get.mockRejectedValue(new Error(errorMessage));

    // Llamada a la función que estás probando
    // Aquí puedes usar `await expect(getUsers()).rejects.toThrow('Error fetching users');`
    // o el siguiente enfoque:
    try {
      await getUsers();
    } catch (error) {
      // Verificación de que la función lanzó la excepción esperada
      expect(error.message).toEqual(errorMessage);
    }
  });
});
