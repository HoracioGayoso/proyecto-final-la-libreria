import { Router, Request, Response, NextFunction } from 'express';
import {
  getAllPedidos,
  getPedidoById,
  addPedido,
  updatePedido,
  deletePedido
} from '../controllers/PedidoController';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllPedidos(req, res, next);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  getPedidoById(req, res, next);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  addPedido(req, res, next);
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  updatePedido(req, res, next);
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  deletePedido(req, res, next);
});

export default router; 