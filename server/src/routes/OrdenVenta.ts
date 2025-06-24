import { Router, Request, Response, NextFunction } from 'express';
import {
  getAllOrdenesVenta,
  getOrdenVentaById,
  addOrdenVenta,
  updateOrdenVenta,
  deleteOrdenVenta
} from '../controllers/OrdenVentaController';
import {vexorInstance} from '../app';
const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllOrdenesVenta(req, res, next);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  getOrdenVentaById(req, res, next);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  addOrdenVenta(req, res, next);
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  updateOrdenVenta(req, res, next);
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  deleteOrdenVenta(req, res, next);
});


router.post('/create-payment', async (req: Request, res: Response, next: NextFunction) => {
  const {product} = req.body;
  if(!product || product.title || product.unit_price || product.quantity) {
    return res.status(400).json({ error: 'Ingrese todos los detalles del producto' });
  }
  try {const paymentRes = await vexorInstance.pay.mercadopago({
    items: [{
      title: product.title,
      unit_price: product.unit_price,
      quantity: product.quantity,
      description: product.description || '',
    }],
  });
  res.status(200).json(paymentRes).json({payment_url:paymentRes.url});
  }catch (error) {
    console.error('Error creando el pago:', error);
    res.status(500).json({ error: 'Error creando el pago' });
  }
});
export default router; 