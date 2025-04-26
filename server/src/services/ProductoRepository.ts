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
export const getProductByCodigoBarra = async (codigo_barra: string) => {
  try {
    return await dbConnection('Producto').where({ codigo_barra }).first();
  } catch (error) {
    console.error(`Error obteniendo el producto con codigo de barra: ${codigo_barra}`, error);
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

    if (filter.precio_unidad_min !== undefined) {
      query = query.where('precio_unidad', '>=', filter.precio_unidad_min);
    }

    if (filter.precio_unidad_max !== undefined) {
      query = query.where('precio_unidad', '<=', filter.precio_unidad_max);
    }

    if (filter.precio_contenedor_min !== undefined) {
      query = query.where('precio_contenedor', '>=', filter.precio_contenedor_min);
    }

    if (filter.precio_contenedor_max !== undefined) {
      query = query.where('precio_contenedor', '<=', filter.precio_contenedor_max);
    }

    if (filter.familia) {
      query = query.where('familia', filter.familia);
    }

    if (filter.categoria_id) {
      query = query.where('categoria_id', filter.categoria_id);
    }

    if (filter.proveedor_id) {
      query = query.where('proveedor_id', filter.proveedor_id);
    }

    return await query;
  } catch (error) {
    console.error('Error filtrando productos:', error);
    throw error;
  }
};

export const addProduct = async (newProduct: object) => {
    try {
      return await dbConnection('Producto').insert(newProduct).returning('*');
    } catch (error) {
      console.error('Error agregando un nuevo producto:', error);
      throw error;
    }
  };
  
  // Modificar un producto
  export const updateProduct = async (codigo_barra: string, updatedProduct: object) => {
    try {
      return await dbConnection('Producto').where({ codigo_barra }).update(updatedProduct).returning('*');
    } catch (error) {
      console.error(`Error modificando el producto con ID ${codigo_barra}:`, error);
      throw error;
    }
  };
  
  // Eliminar un producto (soft delete)
  export const deleteProduct = async (codigo_barra: string) => {
    try {
      return await dbConnection('Producto').where({ codigo_barra }).update({ activo: false });
    } catch (error) {
      console.error(`Error eliminando (soft delete) el producto con ID ${codigo_barra}:`, error);
      throw error;
    }
  };