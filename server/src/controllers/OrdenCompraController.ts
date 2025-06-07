import { Request, Response, NextFunction } from 'express';
import * as databaseOperations from '../services/exportOperations';
import { stringToUUID } from '../utils/uuidMapper';

export const getAllOrdenesCompra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ordenes = await databaseOperations.getAllOrdenesCompra();
    res.json(ordenes);
  } catch (error) {
    next(error);
  }
};

export const getOrdenCompraById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const orden = await databaseOperations.getOrdenCompraById(id);
    if (orden) {
      res.json(orden);
    } else {
      res.status(404).json({ message: 'Orden de compra no encontrada' });
    }
  } catch (error) {
    next(error);
  }
};

export const addOrdenCompra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    var newOrden = req.body;
    newOrden.id = stringToUUID(req.body.proveedor_id + req.body.fecha_orden);
    const [insertedOrden] = await databaseOperations.addOrdenCompra(newOrden);
    res.status(201).json(insertedOrden);
  } catch (error) {
    next(error);
  }
};

export const updateOrdenCompra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedOrden = req.body;
    const [orden] = await databaseOperations.updateOrdenCompra(id, updatedOrden);
    if (orden) {
      res.json(orden);
    } else {
      res.status(404).json({ message: 'Orden de compra no encontrada' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteOrdenCompra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deleted = await databaseOperations.deleteOrdenCompra(id);
    if (deleted) {
      res.status(204).json({ message: 'Orden de compra eliminada' });
    } else {
      res.status(404).json({ message: 'Orden de compra no encontrada' });
    }
  } catch (error) {
    next(error);
  }
}; 