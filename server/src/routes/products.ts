// ./src/routes/products.ts
import { Router, Request, Response, NextFunction } from 'express';
import authenticate from '../middlewares/auth';
import {
  getAllProducts,
  getProductByCodigoBarra,
  filterProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductByCodigoBarra
} from '../controllers/products';

const router = Router();
router.use(authenticate);

// Obtener todos los productos
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllProducts(req, res, next);
});

// Obtener un único producto por ID
router.get('/:codigo_barra', (req: Request, res: Response, next: NextFunction) => {
  getProductByCodigoBarra(req, res, next);
});

// Filtrar productos por columna
router.get('/filter', (req: Request, res: Response, next: NextFunction) => {
  filterProducts(req, res, next);
});

// Agregar un nuevo producto
router.post('/', (req: Request, res: Response, next: NextFunction) => {
  addProduct(req, res, next);
});

// Modificar un producto
router.put('/:codigo_barra', (req: Request, res: Response, next: NextFunction) => {
  updateProduct(req, res, next);
});

// Eliminar un producto
router.delete('/:codigo_barra', (req: Request, res: Response, next: NextFunction) => {
  deleteProduct(req, res, next);
});

export default router;
