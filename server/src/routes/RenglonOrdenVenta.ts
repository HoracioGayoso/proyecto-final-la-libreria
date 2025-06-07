import { Router, Request, Response, NextFunction } from 'express';
import {
  getAllRenglonesOrdenVenta,
  getRenglonOrdenVentaById,
  addRenglonOrdenVenta,
  updateRenglonOrdenVenta,
  deleteRenglonOrdenVenta
} from '../controllers/RenglonOrdenVentaController';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllRenglonesOrdenVenta(req, res, next);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  getRenglonOrdenVentaById(req, res, next);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  addRenglonOrdenVenta(req, res, next);
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  updateRenglonOrdenVenta(req, res, next);
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  deleteRenglonOrdenVenta(req, res, next);
});

export default router; 