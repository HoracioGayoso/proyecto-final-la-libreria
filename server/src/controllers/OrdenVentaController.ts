import { Request, Response, NextFunction } from 'express';
import * as databaseOperations from '../services/exportOperations';
import { stringToUUID } from '../utils/uuidMapper';

export const getAllOrdenesVenta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ordenes = await databaseOperations.getAllOrdenesVenta();
    res.json(ordenes);
  } catch (error) {
    next(error);
  }
};

export const getOrdenVentaById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const orden = await databaseOperations.getOrdenVentaById(id);
    if (orden) {
      res.json(orden);
    } else {
      res.status(404).json({ message: 'Orden de venta no encontrada' });
    }
  } catch (error) {
    next(error);
  }
};

export const addOrdenVenta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    var newOrden = req.body;
    newOrden.id = stringToUUID(req.body.cliente_id + req.body.fecha_orden);
    const [insertedOrden] = await databaseOperations.addOrdenVenta(newOrden);
    res.status(201).json(insertedOrden);
  } catch (error) {
    next(error);
  }
};

export const updateOrdenVenta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedOrden = req.body;
    const [orden] = await databaseOperations.updateOrdenVenta(id, updatedOrden);
    if (orden) {
      res.json(orden);
    } else {
      res.status(404).json({ message: 'Orden de venta no encontrada' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteOrdenVenta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deleted = await databaseOperations.deleteOrdenVenta(id);
    if (deleted) {
      res.status(204).json({ message: 'Orden de venta eliminada' });
    } else {
      res.status(404).json({ message: 'Orden de venta no encontrada' });
    }
  } catch (error) {
    next(error);
  }
}; 