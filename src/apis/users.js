import axios from 'axios';

const API_URL = 'http://yapi.34.23.25.139.sslip.io/api/user/usuarios';

export const getUsers = async () => {
  try {
    const response = await axios.get('${API_URL}/usuarios');
    return response.data;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error; // Puedes manejar el error aquí o dejar que el componente que llama maneje el error
  }
};

