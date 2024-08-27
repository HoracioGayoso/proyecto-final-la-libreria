import dbConnection from './dbConnection';

// Obtener todos los productos
export const getAllProducts = async () => {
  return dbConnection('Producto').select('*');
};

// Obtener un único producto por ID
export const getProductById = async (id: string) => {
  return dbConnection('Producto').where({ id }).first();
};

// Filtrar productos por columna
export const filterProducts = async (filter: object) => {
  return dbConnection('Producto').where(filter).select('*');
};
