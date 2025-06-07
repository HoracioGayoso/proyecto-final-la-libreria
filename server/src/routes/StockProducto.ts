import { Router, Request, Response, NextFunction } from 'express';
import authenticate from '../middlewares/auth';
import {
  getAllStockProductos,
  getStockProductoById,
  addStockProducto,
  updateStockProducto,
  deleteStockProducto
} from '../controllers/StockProductoController';

const router = Router();
//router.use(authenticate);

// Obtener todos los stocks de productos
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllStockProductos(req, res, next);
});

// Obtener un stock de producto por ID
router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  getStockProductoById(req, res, next);
});

// Agregar un nuevo stock de producto
router.post('/', (req: Request, res: Response, next: NextFunction) => {
  addStockProducto(req, res, next);
});

// Modificar un stock de producto
router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  updateStockProducto(req, res, next);
});

// Eliminar un stock de producto
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  deleteStockProducto(req, res, next);
});

export default router; 
