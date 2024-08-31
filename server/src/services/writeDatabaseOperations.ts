import dbConnection from './dbConnection';

// Agregar un nuevo producto
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
