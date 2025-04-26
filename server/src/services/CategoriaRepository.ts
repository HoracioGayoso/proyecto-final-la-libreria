 
import { Categoria } from '../@types/schemaInterfaces';
import dbConnection from './dbConnection';


// Obtener todas las categorias
export const getAllCategorias = async () => {
  try {
    return await dbConnection('Categoria').select('*');
  } catch (error) {
    console.error('Error obteniendo todos los categorias:', error);
    throw error;
  }
};

// Obtener una única categoria por nombre
export const getCategoriaByName = async (nombre: string): Promise<Categoria | undefined> => {
  try {
    return await dbConnection('Categoria').where({ nombre }).first();
  } catch (error) {
    console.error(`Error obteniendo la categoria: ${nombre}`, error);
    throw error;
  }
};

// Agregar una categoria
export const addCategoria = async (newCategoria: object) => {
    try {
      return await dbConnection('Categoria').insert(newCategoria).returning('*');
    } catch (error) {
      console.error('Error agregando una nueva Categoria:', error);
      throw error;
    }
  };
  
  // Modificar una categoria
  export const updateCategoria = async (nombre: string, updatedCategoria: object) => {
    try {
      return await dbConnection('Categoria').where({ nombre }).update(updatedCategoria).returning('*');
    } catch (error) {
      console.error(`Error modificando la Categoria con nombre: ${nombre}:`, error);
      throw error;
    }
  };
  
  // Eliminar una categoria
  export const deleteCategoria = async (nombre: string) => {
    try {
      return await dbConnection('Categoria').where({ nombre }).delete();
    } catch (error) {
      console.error(`Error eliminando la Categoria con nombre ${nombre}:`, error);
      throw error;
    }
  };