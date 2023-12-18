import axios from 'axios';
import API_CONFIG from './settings';


const Urluser = API_CONFIG.apiUrl + '/admin/usuarios/'; 
export const getUsers = async () => {
  try {
    const response = await axios.get(Urluser);
    return response.data;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    console.log("ID del usuario a actualizar:", userId);
    const response = await axios.put(Urluser + userId + '/', userData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar usuario:', error.response.data);
    throw error;
  }
};

export const addUser = async (userData) => {
  try {
    const response = await axios.post(API_CONFIG.apiUrl + '/admin/registro/', userData);
    return response.data;
  } catch (error) {
    console.error('Error al agregar usuario:', error.response.data);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    console.log("ID del usuario a eliminar:", userId);
    const response = await axios.delete(Urluser + userId + '/');
    return response.data;
  } catch (error) {
    console.error('Error al eliminar usuario:', error.response.data);
    throw error;
  }
};

export const loginUsuario = async (credentials) => {
  try {
    const response = await axios.post(API_CONFIG.apiUrl + '/admin/inicio-sesion/', credentials);
    // Assuming the response contains a token, you can return it
    const token = response.data.token;

    // Almacenar el token en localStorage después de la autenticación exitosa
    localStorage.setItem('authToken', token);

    return token;
  } catch (error) {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error('Error al iniciar sesión:', error.response.data);
    } else if (error.request) {
      // La solicitud fue realizada pero no se recibió respuesta
      console.error('Error de solicitud al iniciar sesión:', error.request);
    } else {
      // Algo sucedió en la configuración de la solicitud que desencadenó un error
      console.error('Error al iniciar sesión:', error.message);
    }
    throw error;
  }
};
