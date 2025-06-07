import dbConnection from './dbConnection';
import { StockProducto } from '../@types/schemaInterfaces';

// Obtener todos los stocks de productos
export const getAllStockProductos = async (): Promise<StockProducto[]> => {
  try {
    return await dbConnection('StockProducto').select('*');
  } catch (error) {
    console.error('Error obteniendo todos los stocks de productos:', error);
    throw error;
  }
};

// Obtener un stock de producto por ID
export const getStockProductoById = async (id: string): Promise<StockProducto | undefined> => {
  try {
    return await dbConnection('StockProducto').where({ id }).first();
  } catch (error) {
    console.error(`Error obteniendo el stock de producto con ID ${id}:`, error);
    throw error;
  }
};

// Agregar un nuevo stock de producto
export const addStockProducto = async (newStockProducto: object): Promise<StockProducto[]> => {
  try {
    console.log('Agregando nuevo stock de producto:', newStockProducto);
    return await dbConnection('StockProducto').insert(newStockProducto).returning('*');
  } catch (error) {
    console.error('Error agregando un nuevo stock de producto:', error);
    throw error;
  }
};

// Modificar un stock de producto
export const updateStockProducto = async (id: string, updatedStockProducto: object): Promise<StockProducto[]> => {
  try {
    return await dbConnection('StockProducto').where({ id }).update(updatedStockProducto).returning('*');
  } catch (error) {
    console.error(`Error modificando el stock de producto con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar un stock de producto
export const deleteStockProducto = async (id: string): Promise<number> => {
  try {
    return await dbConnection('StockProducto').where({ id }).delete();
  } catch (error) {
    console.error(`Error eliminando el stock de producto con ID ${id}:`, error);
    throw error;
  }
}; 
