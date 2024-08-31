// ./src/controllers/products.ts
import { Request, Response, NextFunction } from 'express';
import * as databaseOperations from '../services/exportOperations';
import { ProductoFiltro } from '../@types/controller';

// Obtener todos los productos
export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await databaseOperations.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// Obtener un único producto por codigo de barra
export const getProductByCodigoBarra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { codigo_barra } = req.params;
    const product = await databaseOperations.getProductByCodigoBarra(codigo_barra);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

// Filtrar productos por columna
export const filterProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filter: ProductoFiltro = req.query;
    const products = await databaseOperations.filterProducts(filter);
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// Agregar un nuevo producto
export const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newProduct = req.body;
    const [insertedProduct] = await databaseOperations.addProduct(newProduct);
    res.status(201).json(insertedProduct);
  } catch (error) {
    next(error);
  }
};

// Modificar un producto
export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { codigo_barra } = req.params;
    const updatedProduct = req.body;
    const [product] = await databaseOperations.updateProduct(codigo_barra, updatedProduct);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

// Eliminar un producto
export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { codigo_barra } = req.params;
    const deletedProduct = await databaseOperations.deleteProduct(codigo_barra);
    if (deletedProduct){
        res.status(204).json({ message: 'Producto eliminado' });
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) { 
    next(error);
  }
};
