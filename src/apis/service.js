import axios from 'axios';
import API_CONFIG from './settings';

export const getUsers = async () => {
  try {
    const response = await axios.get(API_CONFIG.apiUrl + '/user/usuarios/');
    console.log('Respuesta de la API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};