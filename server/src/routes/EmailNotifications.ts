import { Router, Request, Response, NextFunction } from 'express';
import { notificarRetiro, notificarEnvio, notificarPresupuesto } from '../controllers/EmailNotificationsController';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() }); // guarda en memoria para adjuntar directo

const router = Router();

router.post('/retiro', (req: Request, res: Response, next: NextFunction) => {
  notificarRetiro(req, res, next);
});

router.post('/envio', (req: Request, res: Response, next: NextFunction) => {
  notificarEnvio(req, res, next);
});

router.post('/presupuesto', upload.single('archivo'), (req: Request, res: Response, next: NextFunction) => {
    notificarPresupuesto(req, res, next);
});

export default router;
