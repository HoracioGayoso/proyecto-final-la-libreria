 
import { Router, Request, Response, NextFunction } from 'express';
import authenticate from '../middlewares/auth';
import {
    getAllProveedores,
    getProveedorByName,
    addProveedor,
    updateProveedor,
    deleteProveedor
} from '../controllers/ProveedorController';

const router = Router();
//router.use(authenticate);

// Obtener todos los productos
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    getAllProveedores(req, res, next);
});

// Obtener un único proveedor por nombre
router.get('/:nombre', (req: Request, res: Response, next: NextFunction) => {
    getProveedorByName(req, res, next);
});


// Agregar un nuevo producto
router.post('/', (req: Request, res: Response, next: NextFunction) => {
    addProveedor(req, res, next);
});

// Modificar un producto
router.put('/:nombre', (req: Request, res: Response, next: NextFunction) => {
    updateProveedor(req, res, next);
});

// Eliminar un producto
router.delete('/:nombre', (req: Request, res: Response, next: NextFunction) => {
    deleteProveedor(req, res, next);
});

export default router;
 
