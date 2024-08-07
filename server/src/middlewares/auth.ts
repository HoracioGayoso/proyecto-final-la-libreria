import { Request, Response, NextFunction } from 'express';
import admin from '../config/firebase'; // Asegúrate de la ruta correcta
import { DecodedIdToken } from '../types/express/index'; // Import the extended Request type


const authenticate = async (req: Request<any, any, any, any, { user?: DecodedIdToken }>, res: Response, next: NextFunction) => {
    // ...
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    if(decodedToken){
       return next();
    }
    return res.status(401).json({message: "Unauthorized"});
  } catch (error: unknown) {
    return res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

export default authenticate;
