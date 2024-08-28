import { ProductoFiltro } from '../@types/controller';
import dbConnection from './dbConnection';

// Obtener todos los productos
export const getAllProducts = async () => {
  try {
    return await dbConnection('Producto').select('*');
  } catch (error) {
    console.error('Error obteniendo todos los productos:', error);
    throw error;
  }
};

// Obtener un único producto por ID
export const getProductById = async (id: string) => {
  try {
    return await dbConnection('Producto').where({ id }).first();
  } catch (error) {
    console.error(`Error obteniendo el producto con ID ${id}:`, error);
    throw error;
  }
};

// Filtrar productos por columna
export const filterProducts = async (filter: ProductoFiltro) => {
  try {
    let query = dbConnection('Producto').select('*');

    if (filter.nombre) {
      query = query.where('nombre', 'like', `%${filter.nombre}%`);
    }

    if (filter.precio_min !== undefined) {
      query = query.where('precio', '>=', filter.precio_min);
    }

    if (filter.precio_max !== undefined) {
      query = query.where('precio', '<=', filter.precio_max);
    }

    if (filter.categoria_id) {
      query = query.where('categoria_id', filter.categoria_id);
    }

    if (filter.proveedor_id) {
      query = query.where('proveedor_id', filter.proveedor_id);
    }

    if (filter.min_stock !== undefined) {
      query = query.where('min_stock', '>=', filter.min_stock);
    }

    return await query;
  } catch (error) {
    console.error('Error filtrando productos:', error);
    throw error;
  }
};
