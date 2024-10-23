// ./src/routes/products.ts
import { Router, Request, Response, NextFunction } from 'express';
import authenticate from '../middlewares/auth';
import {
    getAllStocks,
    getCurrentStock,
    getStocksInRange,
    updateStock
} from '../controllers/stocks'
const router = Router();
router.use(authenticate);


// Obtener stock para un producto
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    getAllStocks(req, res, next);
  });

// Obtener stock para un producto
router.get('/:producto_id', (req: Request, res: Response, next: NextFunction) => {
  getCurrentStock(req, res, next);
});

// Obtener stocks dentro de un rango
router.get('/range', (req: Request, res: Response, next: NextFunction) => {
  getStocksInRange(req, res, next);
});

// Modificar un stock
router.put('/:producto_id', (req: Request, res: Response, next: NextFunction) => {
  updateStock(req, res, next);
});

export default router;
