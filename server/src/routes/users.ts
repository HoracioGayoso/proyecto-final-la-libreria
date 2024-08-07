import { Router, Request, Response, NextFunction } from 'express';
import authenticate from '../middlewares/auth';

const router = Router();
router.use(authenticate);
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('User Route');
});

export default router;
