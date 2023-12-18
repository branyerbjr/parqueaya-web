import axios from 'axios';
import API_CONFIG from './settings';


const UrlAdmin = API_CONFIG.apiUrl + '/admin/admins/';
export const getAdmins = async () => {
    try {
      const response = await axios.get(UrlAdmin);
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  export const updateUser = async (userId, userData) => {
    try {
      console.log("ID del usuario a actualizar:", userId);
      const response = await axios.put(UrlAdmin + userId + '/', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const addUser = async (userData) => {
    try {
      const response = await axios.post(UrlAdmin, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteUser = async (userId) => {
    try {
      console.log("ID del usuario a eliminar:", userId);
      const response = await axios.delete(UrlAdmin + userId + '/');
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  export const loginUsuario = async (credentials) => {
    try {
      const response = await axios.post(API_CONFIG.apiUrl + '/admin/inicio-sesion/', credentials);
      // Assuming the response contains a token, you can return it
      return response.data.token;
    } catch (error) {
      throw error;
    }
  };