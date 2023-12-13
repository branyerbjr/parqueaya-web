import axios from 'axios';

export const upPalanca = async (data) => {
    try {
      const response = await axios.put('http://yapi.34.23.25.139.sslip.io/v1/iot/servo/3/', data);
      console.log('Respuesta de la API al actualizar palanca:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error al agregar usuario:', error.response.data);
      throw error;
    }
  };
  