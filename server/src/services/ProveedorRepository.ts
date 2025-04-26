//import { ProductoFiltro } from '../@types/controller';
import dbConnection from './dbConnection';


// Obtener todos los proveedores
export const getAllProveedores = async () => {
  try {
    return await dbConnection('Proveedor').select('*');
  } catch (error) {
    console.error('Error obteniendo todos los proveedores:', error);
    throw error;
  }
};

// Obtener un único proveedor por nombre
export const getProveedorByName= async (nombre: string) => {
  try {
    return await dbConnection('Proveedor').where({ nombre }).first();
  } catch (error) {
    console.error(`Error obteniendo el proveedor: ${nombre}`, error);
    throw error;
  }
};

// Agregar un proveedor
export const addProveedor = async (newProveedor: object) => {
    try {
      return await dbConnection('Proveedor').insert(newProveedor).returning('*');
    } catch (error) {
      console.error('Error agregando un nuevo Proveedor:', error);
      throw error;
    }
  };
  
  // Modificar un proveedor
  export const updateProveedor = async (nombre: string, updatedProveedor: object) => {
    try {
      return await dbConnection('Proveedor').where({ nombre }).update(updatedProveedor).returning('*');
    } catch (error) {
      console.error(`Error modificando el Proveedor con nombre: ${nombre}:`, error);
      throw error;
    }
  };
  
  // Eliminar un proveedor
  export const deleteProveedor = async (nombre: string) => {
    try {
      return await dbConnection('Proveedor').where({ nombre }).delete();
    } catch (error) {
      console.error(`Error eliminando (soft delete) el Proveedor con ID ${nombre}:`, error);
      throw error;
    }
  };