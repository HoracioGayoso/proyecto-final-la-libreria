import { Request, Response, NextFunction } from 'express';
import * as databaseOperations from '../services/exportOperations';
import { stringToUUID } from '../utils/uuidMapper';

// Obtener todos los stocks de productos
export const getAllStockProductos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stockProductos = await databaseOperations.getAllStockProductos();
    res.json(stockProductos);
  } catch (error) {
    next(error);
  }
};

// Obtener un stock de producto por ID
export const getStockProductoById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const stockProducto = await databaseOperations.getStockProductoById(id);
    if (stockProducto) {
      res.json(stockProducto);
    } else {
      res.status(404).json({ message: 'Stock de producto no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

// Agregar un nuevo stock de producto
export const addStockProducto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    var newStockProducto = req.body;
    newStockProducto.id = stringToUUID(req.body.producto_id.toString());
    const [insertedStockProducto] = await databaseOperations.addStockProducto(newStockProducto);
    res.status(201).json(insertedStockProducto);
  } catch (error) {
    next(error);
  }
};

// Modificar un stock de producto
export const updateStockProducto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedStockProducto = req.body;
    const [stockProducto] = await databaseOperations.updateStockProducto(id, updatedStockProducto);
    if (stockProducto) {
      res.json(stockProducto);
    } else {
      res.status(404).json({ message: 'Stock de producto no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

// Eliminar un stock de producto
export const deleteStockProducto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedStockProducto = await databaseOperations.deleteStockProducto(id);
    if (deletedStockProducto) {
      res.status(204).json({ message: 'Stock de producto eliminado' });
    } else {
      res.status(404).json({ message: 'Stock de producto no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

