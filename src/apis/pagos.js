import axios from 'axios';
import API_CONFIG from './settings';

const URL_TRANSACCIONES = API_CONFIG.apiUrl + '/servicios/transaccion/';
const URL_METODOS_PAGO = API_CONFIG.apiUrl + '/servicios/metodo-pago/';

export const getTransacciones = async () => {
  try {
    const response = await axios.get(URL_TRANSACCIONES);
    console.log('Respuesta de la API - Transacciones:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener transacciones:', error);
    throw error;
  }
};

export const getMetodosDePago = async () => {
  try {
    const response = await axios.get(URL_METODOS_PAGO);
    console.log('Respuesta de la API - Métodos de Pago:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener métodos de pago:', error);
    throw error;
  }
};

export const addTransaccion = async (transaccionData) => {
  try {
    const response = await axios.post(URL_TRANSACCIONES, transaccionData);
    console.log('Respuesta de la API al agregar transacción:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al agregar transacción:', error.response.data);
    throw error;
  }
};

export const addMetodoDePago = async (metodoPagoData) => {
  try {
    const response = await axios.post(URL_METODOS_PAGO, metodoPagoData);
    console.log('Respuesta de la API al agregar método de pago:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al agregar método de pago:', error.response.data);
    throw error;
  }
};
