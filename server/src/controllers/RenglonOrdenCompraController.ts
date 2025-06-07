import { Request, Response, NextFunction } from 'express';
import * as databaseOperations from '../services/exportOperations';
import { stringToUUID } from '../utils/uuidMapper';

export const getAllRenglonesOrdenCompra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const renglones = await databaseOperations.getAllRenglonesOrdenCompra();
    res.json(renglones);
  } catch (error) {
    next(error);
  }
};

export const getRenglonOrdenCompraById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const renglon = await databaseOperations.getRenglonOrdenCompraById(id);
    if (renglon) {
      res.json(renglon);
    } else {
      res.status(404).json({ message: 'Renglón de orden de compra no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

export const addRenglonOrdenCompra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    var newRenglon = req.body;
    newRenglon.id = stringToUUID(req.body.orden_compra_id + (req.body.producto_id || req.body.servicio_id));
    const [insertedRenglon] = await databaseOperations.addRenglonOrdenCompra(newRenglon);
    res.status(201).json(insertedRenglon);
  } catch (error) {
    next(error);
  }
};

export const updateRenglonOrdenCompra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedRenglon = req.body;
    const [renglon] = await databaseOperations.updateRenglonOrdenCompra(id, updatedRenglon);
    if (renglon) {
      res.json(renglon);
    } else {
      res.status(404).json({ message: 'Renglón de orden de compra no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteRenglonOrdenCompra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deleted = await databaseOperations.deleteRenglonOrdenCompra(id);
    if (deleted) {
      res.status(204).json({ message: 'Renglón de orden de compra eliminado' });
    } else {
      res.status(404).json({ message: 'Renglón de orden de compra no encontrado' });
    }
  } catch (error) {
    next(error);
  }
}; 