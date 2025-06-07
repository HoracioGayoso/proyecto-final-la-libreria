import dbConnection from './dbConnection';
import { AlertaStock } from '../@types/schemaInterfaces';

// Obtener todas las alertas de stock
export const getAllAlertaStocks = async (): Promise<AlertaStock[]> => {
  try {
    return await dbConnection('AlertaStock').select('*');
  } catch (error) {
    console.error('Error obteniendo todas las alertas de stock:', error);
    throw error;
  }
};

// Obtener una alerta de stock por ID
export const getAlertaStockById = async (id: string): Promise<AlertaStock | undefined> => {
  try {
    return await dbConnection('AlertaStock').where({ id }).first();
  } catch (error) {
    console.error(`Error obteniendo la alerta de stock con ID ${id}:`, error);
    throw error;
  }
};

// Agregar una nueva alerta de stock
export const addAlertaStock = async (newAlertaStock: object): Promise<AlertaStock[]> => {
  try {
    return await dbConnection('AlertaStock').insert(newAlertaStock).returning('*');
  } catch (error) {
    console.error('Error agregando una nueva alerta de stock:', error);
    throw error;
  }
};

// Modificar una alerta de stock
export const updateAlertaStock = async (id: string, updatedAlertaStock: object): Promise<AlertaStock[]> => {
  try {
    return await dbConnection('AlertaStock').where({ id }).update(updatedAlertaStock).returning('*');
  } catch (error) {
    console.error(`Error modificando la alerta de stock con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar una alerta de stock
export const deleteAlertaStock = async (id: string): Promise<number> => {
  try {
    return await dbConnection('AlertaStock').where({ id }).delete();
  } catch (error) {
    console.error(`Error eliminando la alerta de stock con ID ${id}:`, error);
    throw error;
  }
};
