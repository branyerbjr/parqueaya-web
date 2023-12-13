import axios from 'axios';
import API_CONFIG from './settings';


const UrlAdmin = API_CONFIG.apiUrl + '/admin/admins/';
export const getAdmins = async () => {
    try {
      const response = await axios.get(UrlAdmin);
      console.log('Respuesta de la API:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error;
    }
  };


  export const updateUser = async (userId, userData) => {
    try {
      console.log("ID del usuario a actualizar:", userId);
      const response = await axios.put(UrlAdmin + userId + '/', userData);
      console.log('Respuesta de la API al actualizar usuario:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar usuario:', error.response.data);
      throw error;
    }
  };
  
  export const addUser = async (userData) => {
    try {
      const response = await axios.post(UrlAdmin, userData);
      console.log('Respuesta de la API al agregar usuario:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error al agregar usuario:', error.response.data);
      throw error;
    }
  };
  
  export const deleteUser = async (userId) => {
    try {
      console.log("ID del usuario a eliminar:", userId);
      const response = await axios.delete(UrlAdmin + userId + '/');
      console.log('Respuesta de la API al eliminar usuario:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar usuario:', error.response.data);
      throw error;
    }
  };