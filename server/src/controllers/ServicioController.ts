import { Request, Response, NextFunction } from 'express';
import * as databaseOperations from '../services/exportOperations';
import { stringToUUID } from '../utils/uuidMapper';

export const getAllServicios = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const servicios = await databaseOperations.getAllServicios();
    res.json(servicios);
  } catch (error) {
    next(error);
  }
};

export const getServicioById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const servicio = await databaseOperations.getServicioById(id);
    if (servicio) {
      res.json(servicio);
    } else {
      res.status(404).json({ message: 'Servicio no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

export const addServicio = async (req: Request, res: Response, next: NextFunction) => {
  try {
    var newServicio = req.body;
    newServicio.id = stringToUUID(req.body.nombre);
    const [insertedServicio] = await databaseOperations.addServicio(newServicio);
    res.status(201).json(insertedServicio);
  } catch (error) {
    next(error);
  }
};

export const updateServicio = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedServicio = req.body;
    const [servicio] = await databaseOperations.updateServicio(id, updatedServicio);
    if (servicio) {
      res.json(servicio);
    } else {
      res.status(404).json({ message: 'Servicio no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteServicio = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deleted = await databaseOperations.deleteServicio(id);
    if (deleted) {
      res.status(204).json({ message: 'Servicio eliminado' });
    } else {
      res.status(404).json({ message: 'Servicio no encontrado' });
    }
  } catch (error) {
    next(error);
  }
}; 