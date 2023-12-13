import axios from 'axios';

export const getUsers = async () => {
  try {
    const response = await axios.get('http://yapi.34.23.25.139.sslip.io/v1/user/usuarios/');
    console.log('Respuesta de la API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};