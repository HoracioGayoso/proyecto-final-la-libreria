import { Router, Request, Response, NextFunction } from 'express';
import authenticate from '../middlewares/auth';
import upload from '../controllers/ProductoController';

import {
  getAllProducts,
  getProductByCodigoBarra,
  filterProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  updateBatchPrices
} from '../controllers/ProductoController';

const router = Router();
//router.use(authenticate);


// Filtrar productos por columna
router.get('/filter', (req: Request, res: Response, next: NextFunction) => {
  filterProducts(req, res, next);
});


// Obtener todos los productos
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllProducts(req, res, next);
});

// Obtener un único producto por ID
router.get('/:codigo_barra', (req: Request, res: Response, next: NextFunction) => {
  getProductByCodigoBarra(req, res, next);
});




router.post('/', upload.single('imagen'), (req: Request, res: Response, next: NextFunction) => {
  addProduct(req, res, next);
});

router.put('/batchPrecios', (req: Request, res: Response, next: NextFunction) => {
  updateBatchPrices(req, res, next);
});

router.put('/modificarProducto/:codigo_barra', (req: Request, res: Response, next: NextFunction) => {
  updateProduct(req, res, next);
});



router.delete('/:codigo_barra', (req: Request, res: Response, next: NextFunction) => {
  deleteProduct(req, res, next);
});

export default router;
 
