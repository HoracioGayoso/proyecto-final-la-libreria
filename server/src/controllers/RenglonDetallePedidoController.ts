import { Request, Response, NextFunction } from 'express';
import * as databaseOperations from '../services/exportOperations';
import { stringToUUID } from '../utils/uuidMapper';

export const getAllRenglonesDetallePedido = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const renglones = await databaseOperations.getAllRenglonesDetallePedido();
    res.json(renglones);
  } catch (error) {
    next(error);
  }
};

export const getRenglonDetallePedidoById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const renglon = await databaseOperations.getRenglonDetallePedidoById(id);
    if (renglon) {
      res.json(renglon);
    } else {
      res.status(404).json({ message: 'Renglón de detalle de pedido no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

export const addRenglonDetallePedido = async (req: Request, res: Response, next: NextFunction) => {
  try {
    var newRenglon = req.body;
    newRenglon.id = stringToUUID(req.body.pedido_id + req.body.producto_id);
    const [insertedRenglon] = await databaseOperations.addRenglonDetallePedido(newRenglon);
    res.status(201).json(insertedRenglon);
  } catch (error) {
    next(error);
  }
};

export const updateRenglonDetallePedido = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedRenglon = req.body;
    const [renglon] = await databaseOperations.updateRenglonDetallePedido(id, updatedRenglon);
    if (renglon) {
      res.json(renglon);
    } else {
      res.status(404).json({ message: 'Renglón de detalle de pedido no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteRenglonDetallePedido = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deleted = await databaseOperations.deleteRenglonDetallePedido(id);
    if (deleted) {
      res.status(204).json({ message: 'Renglón de detalle de pedido eliminado' });
    } else {
      res.status(404).json({ message: 'Renglón de detalle de pedido no encontrado' });
    }
  } catch (error) {
    next(error);
  }
}; 