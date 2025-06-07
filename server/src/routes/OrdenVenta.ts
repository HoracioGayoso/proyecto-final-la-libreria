import { Router, Request, Response, NextFunction } from 'express';
import {
  getAllOrdenesVenta,
  getOrdenVentaById,
  addOrdenVenta,
  updateOrdenVenta,
  deleteOrdenVenta
} from '../controllers/OrdenVentaController';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllOrdenesVenta(req, res, next);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  getOrdenVentaById(req, res, next);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  addOrdenVenta(req, res, next);
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  updateOrdenVenta(req, res, next);
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  deleteOrdenVenta(req, res, next);
});

export default router; 