import { Router, Request, Response, NextFunction } from 'express';
import {
  getAllServicios,
  getServicioById,
  addServicio,
  updateServicio,
  deleteServicio
} from '../controllers/ServicioController';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllServicios(req, res, next);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  getServicioById(req, res, next);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  addServicio(req, res, next);
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  updateServicio(req, res, next);
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  deleteServicio(req, res, next);
});

export default router; 