import { Router, Request, Response, NextFunction } from 'express';
import {
  getAllRenglonesOrdenCompra,
  getRenglonOrdenCompraById,
  addRenglonOrdenCompra,
  updateRenglonOrdenCompra,
  deleteRenglonOrdenCompra
} from '../controllers/RenglonOrdenCompraController';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllRenglonesOrdenCompra(req, res, next);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  getRenglonOrdenCompraById(req, res, next);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  addRenglonOrdenCompra(req, res, next);
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  updateRenglonOrdenCompra(req, res, next);
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  deleteRenglonOrdenCompra(req, res, next);
});

export default router; 