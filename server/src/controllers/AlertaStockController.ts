import { Request, Response, NextFunction } from 'express';
import * as databaseOperations from '../services/exportOperations';
import { stringToUUID } from '../utils/uuidMapper';

// Obtener todas las alertas de stock
export const getAllAlertaStocks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const alertaStocks = await databaseOperations.getAllAlertaStocks();
    res.json(alertaStocks);
  } catch (error) {
    next(error);
  }
};

// Obtener una alerta de stock por ID
export const getAlertaStockById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const alertaStock = await databaseOperations.getAlertaStockById(id);
    if (alertaStock) {
      res.json(alertaStock);
    } else {
      res.status(404).json({ message: 'Alerta de stock no encontrada' });
    }
  } catch (error) {
    next(error);
  }
};

// Agregar una nueva alerta de stock
export const addAlertaStock = async (req: Request, res: Response, next: NextFunction) => {
  try {
    var newAlertaStock = req.body;
    newAlertaStock.id = stringToUUID(req.body.producto_id.toString());
    const [insertedAlertaStock] = await databaseOperations.addAlertaStock(newAlertaStock);
    res.status(201).json(insertedAlertaStock);
  } catch (error) {
    next(error);
  }
};

// Modificar una alerta de stock
export const updateAlertaStock = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedAlertaStock = req.body;
    const [alertaStock] = await databaseOperations.updateAlertaStock(id, updatedAlertaStock);
    if (alertaStock) {
      res.json(alertaStock);
    } else {
      res.status(404).json({ message: 'Alerta de stock no encontrada' });
    }
  } catch (error) {
    next(error);
  }
};

// Eliminar una alerta de stock
export const deleteAlertaStock = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedAlertaStock = await databaseOperations.deleteAlertaStock(id);
    if (deletedAlertaStock) {
      res.status(204).json({ message: 'Alerta de stock eliminada' });
    } else {
      res.status(404).json({ message: 'Alerta de stock no encontrada' });
    }
  } catch (error) {
    next(error);
  }
};
