import { Request, Response, NextFunction } from 'express';
import * as databaseOperations from '../services/exportOperations';
import { stringToUUID } from '../utils/uuidMapper';

export const getAllRenglonesOrdenVenta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const renglones = await databaseOperations.getAllRenglonesOrdenVenta();
    res.json(renglones);
  } catch (error) {
    next(error);
  }
};

export const getRenglonOrdenVentaById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const renglon = await databaseOperations.getRenglonOrdenVentaById(id);
    if (renglon) {
      res.json(renglon);
    } else {
      res.status(404).json({ message: 'Renglón de orden de venta no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

export const addRenglonOrdenVenta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    var newRenglon = req.body;
    newRenglon.id = stringToUUID(req.body.orden_venta_id + (req.body.producto_id || req.body.servicio_id));
    const [insertedRenglon] = await databaseOperations.addRenglonOrdenVenta(newRenglon);
    res.status(201).json(insertedRenglon);
  } catch (error) {
    next(error);
  }
};

export const updateRenglonOrdenVenta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedRenglon = req.body;
    const [renglon] = await databaseOperations.updateRenglonOrdenVenta(id, updatedRenglon);
    if (renglon) {
      res.json(renglon);
    } else {
      res.status(404).json({ message: 'Renglón de orden de venta no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteRenglonOrdenVenta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deleted = await databaseOperations.deleteRenglonOrdenVenta(id);
    if (deleted) {
      res.status(204).json({ message: 'Renglón de orden de venta eliminado' });
    } else {
      res.status(404).json({ message: 'Renglón de orden de venta no encontrado' });
    }
  } catch (error) {
    next(error);
  }
}; 