 
 
import { Router, Request, Response, NextFunction } from 'express';
import authenticate from '../middlewares/auth';
import {
    getAllCategorias,
    getCategoriaByName,
    addCategoria,
    updateCategoria,
    deleteCategoria
} from '../controllers/CategoriaController';

const router = Router();
//router.use(authenticate);

// Obtener todos los productos
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    getAllCategorias(req, res, next);
});

// Obtener un único proveedor por nombre
router.get('/:nombre', (req: Request, res: Response, next: NextFunction) => {
    getCategoriaByName(req, res, next);
});


// Agregar un nuevo producto
router.post('/', (req: Request, res: Response, next: NextFunction) => {
    addCategoria(req, res, next);
});

// Modificar un producto
router.put('/:nombre', (req: Request, res: Response, next: NextFunction) => {
    updateCategoria(req, res, next);
});

// Eliminar un producto
router.delete('/:nombre', (req: Request, res: Response, next: NextFunction) => {
    deleteCategoria(req, res, next);
});

export default router;
 
