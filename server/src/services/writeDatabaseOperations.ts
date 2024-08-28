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
export const updateProduct = async (id: string, updatedProduct: object) => {
  try {
    return await dbConnection('Producto').where({ id }).update(updatedProduct).returning('*');
  } catch (error) {
    console.error(`Error modificando el producto con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar un producto (soft delete)
export const deleteProduct = async (id: string) => {
  try {
    return await dbConnection('Producto').where({ id }).update({ activo: false });
  } catch (error) {
    console.error(`Error eliminando (soft delete) el producto con ID ${id}:`, error);
    throw error;
  }
};
