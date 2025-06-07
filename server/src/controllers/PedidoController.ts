import { Request, Response, NextFunction } from 'express';
import * as databaseOperations from '../services/exportOperations';
import { stringToUUID } from '../utils/uuidMapper';

export const getAllPedidos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pedidos = await databaseOperations.getAllPedidos();
    res.json(pedidos);
  } catch (error) {
    next(error);
  }
};

export const getPedidoById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const pedido = await databaseOperations.getPedidoById(id);
    if (pedido) {
      res.json(pedido);
    } else {
      res.status(404).json({ message: 'Pedido no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

export const addPedido = async (req: Request, res: Response, next: NextFunction) => {
  try {
    var newPedido = req.body;
    newPedido.id = stringToUUID(req.body.cliente_id);
    const [insertedPedido] = await databaseOperations.addPedido(newPedido);
    res.status(201).json(insertedPedido);
  } catch (error) {
    next(error);
  }
};

export const updatePedido = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedPedido = req.body;
    const [pedido] = await databaseOperations.updatePedido(id, updatedPedido);
    if (pedido) {
      res.json(pedido);
    } else {
      res.status(404).json({ message: 'Pedido no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

export const deletePedido = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deleted = await databaseOperations.deletePedido(id);
    if (deleted) {
      res.status(204).json({ message: 'Pedido eliminado' });
    } else {
      res.status(404).json({ message: 'Pedido no encontrado' });
    }
  } catch (error) {
    next(error);
  }
}; 