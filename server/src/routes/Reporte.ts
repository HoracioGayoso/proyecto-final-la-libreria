import { Router,Request,Response } from "express";
import { getReporteVentasDiarias } from '../controllers/ReporteController';

const router = Router();

router.get('/ventas', (req: Request, res: Response) => {
  getReporteVentasDiarias(req, res);
});

export default router;

