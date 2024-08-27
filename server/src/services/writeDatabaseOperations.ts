import dbConnection from './dbConnection';

// Agregar un nuevo producto
export const addProduct = async (newProduct: object) => {
  return dbConnection('Producto').insert(newProduct).returning('*');
};

// Modificar un producto
export const updateProduct = async (id: string, updatedProduct: object) => {
  return dbConnection('Producto').where({ id }).update(updatedProduct).returning('*');
};

// Eliminar un producto
export const deleteProduct = async (id: string) => {
  return dbConnection('Producto').where({ id }).update({'activo': false });
};
