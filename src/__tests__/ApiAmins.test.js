import axios from 'axios';
import { getAdmins, updateUser, addUser, deleteUser } from '../path-to-your-file';

// Mock de axios
jest.mock('axios');

const mockedData = [{ id: 1, username: 'Admin1' }];

describe('Admin API Functions', () => {
  test('getAdmins should fetch admins', async () => {
    // Configuración del mock de axios
    axios.get.mockResolvedValue({ data: mockedData });

    // Llamada a la función que estás probando
    const result = await getAdmins();

    // Verificación de que la función haya hecho la llamada correcta
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/admin/admins/'));

    // Verificación de que la función devuelve los datos esperados
    expect(result).toEqual(mockedData);
  });

  test('updateUser should update an admin', async () => {
    const userId = 1;
    const userData = { username: 'UpdatedAdmin' };

    // Configuración del mock de axios
    axios.put.mockResolvedValue({ data: userData });

    // Llamada a la función que estás probando
    const result = await updateUser(userId, userData);

    // Verificación de que la función haya hecho la llamada correcta
    expect(axios.put).toHaveBeenCalledWith(expect.stringContaining(`/admin/admins/${userId}/`), userData);

    // Verificación de que la función devuelve los datos esperados
    expect(result).toEqual(userData);
  });

  test('addUser should add a new admin', async () => {
    const userData = { username: 'NewAdmin' };

    // Configuración del mock de axios
    axios.post.mockResolvedValue({ data: userData });

    // Llamada a la función que estás probando
    const result = await addUser(userData);

    // Verificación de que la función haya hecho la llamada correcta
    expect(axios.post).toHaveBeenCalledWith(expect.stringContaining('/admin/admins/'), userData);

    // Verificación de que la función devuelve los datos esperados
    expect(result).toEqual(userData);
  });

  test('deleteUser should delete an admin', async () => {
    const userId = 1;

    // Configuración del mock de axios
    axios.delete.mockResolvedValue({ data: {} });

    // Llamada a la función que estás probando
    const result = await deleteUser(userId);

    // Verificación de que la función haya hecho la llamada correcta
    expect(axios.delete).toHaveBeenCalledWith(expect.stringContaining(`/admin/admins/${userId}/`));

    // Verificación de que la función devuelve los datos esperados
    expect(result).toEqual({});
  });
});
