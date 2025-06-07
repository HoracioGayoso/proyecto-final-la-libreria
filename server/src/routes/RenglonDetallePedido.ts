import { Router, Request, Response, NextFunction } from 'express';
import {
  getAllRenglonesDetallePedido,
  getRenglonDetallePedidoById,
  addRenglonDetallePedido,
  updateRenglonDetallePedido,
  deleteRenglonDetallePedido
} from '../controllers/RenglonDetallePedidoController';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllRenglonesDetallePedido(req, res, next);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  getRenglonDetallePedidoById(req, res, next);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  addRenglonDetallePedido(req, res, next);
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  updateRenglonDetallePedido(req, res, next);
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  deleteRenglonDetallePedido(req, res, next);
});

export default router; 