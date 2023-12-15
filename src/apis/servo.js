import axios from 'axios';
import API_CONFIG from './settings';

export const upPalanca = async (data) => {
    try {
      const response = await axios.put(API_CONFIG.apiUrl + 'v1/iot/servo/1/', data);
      console.log('Respuesta de la API al actualizar palanca:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error al agregar usuario:', error.response.data);
      throw error;
    }
  };
  