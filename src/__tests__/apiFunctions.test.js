// __tests__/apiFunctions.test.js
import axios from 'axios';
import {
  getTransacciones,
  getMetodosDePago,
  addTransaccion,
  addMetodoDePago,
} from '../path-to-apiFunctions';

// Mock de axios
jest.mock('axios');

const mockedData = [{ id: 1, monto: 100, fecha: '2023-01-01' }];

describe('API Functions', () => {
  test('getTransacciones should fetch transacciones', async () => {
    axios.get.mockResolvedValue({ data: mockedData });

    const result = await getTransacciones();

    expect(result).toEqual(mockedData);
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/servicios/transaccion/'));
  });

  test('getMetodosDePago should fetch métodos de pago', async () => {
    axios.get.mockResolvedValue({ data: mockedData });

    const result = await getMetodosDePago();

    expect(result).toEqual(mockedData);
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/servicios/metodo-pago/'));
  });

  test('addTransaccion should add a new transacción', async () => {
    const transaccionData = { monto: 150, fecha: '2023-01-02' };
    axios.post.mockResolvedValue({ data: transaccionData });

    const result = await addTransaccion(transaccionData);

    expect(result).toEqual(transaccionData);
    expect(axios.post).toHaveBeenCalledWith(expect.stringContaining('/servicios/transaccion/'), transaccionData);
  });

  test('addMetodoDePago should add a new método de pago', async () => {
    const metodoPagoData = { tipo_metodo_pago: 'tarjeta', datos_metodo_pago: '1234-5678-9101-1121' };
    axios.post.mockResolvedValue({ data: metodoPagoData });

    const result = await addMetodoDePago(metodoPagoData);

    expect(result).toEqual(metodoPagoData);
    expect(axios.post).toHaveBeenCalledWith(expect.stringContaining('/servicios/metodo-pago/'), metodoPagoData);
  });
});
