import { Router, Request, Response, NextFunction } from 'express';
import authenticate from '../middlewares/auth';
import {
  getAllAlertaStocks,
  getAlertaStockById,
  addAlertaStock,
  updateAlertaStock,
  deleteAlertaStock
} from '../controllers/AlertaStockController';

const router = Router();
//router.use(authenticate);

// Obtener todas las alertas de stock
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllAlertaStocks(req, res, next);
});

// Obtener una alerta de stock por ID
router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  getAlertaStockById(req, res, next);
});

// Agregar una nueva alerta de stock
router.post('/', (req: Request, res: Response, next: NextFunction) => {
  addAlertaStock(req, res, next);
});

// Modificar una alerta de stock
router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  updateAlertaStock(req, res, next);
});

// Eliminar una alerta de stock
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  deleteAlertaStock(req, res, next);
});

export default router; 
