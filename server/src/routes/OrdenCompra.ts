import { Router, Request, Response, NextFunction } from 'express';
import {
  getAllOrdenesCompra,
  getOrdenCompraById,
  addOrdenCompra,
  updateOrdenCompra,
  deleteOrdenCompra
} from '../controllers/OrdenCompraController';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllOrdenesCompra(req, res, next);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  getOrdenCompraById(req, res, next);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  addOrdenCompra(req, res, next);
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  updateOrdenCompra(req, res, next);
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  deleteOrdenCompra(req, res, next);
});

export default router; 