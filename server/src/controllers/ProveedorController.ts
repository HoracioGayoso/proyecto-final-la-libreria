 // ./src/controllers/products.ts
 import { Request, Response, NextFunction } from 'express';
 import * as databaseOperations from '../services/exportOperations';
 import { ProductoFiltro } from '../@types/controller';
 import { stringToUUID } from '../utils/uuidMapper';
 
 // Obtener todos los proveedores
 export const getAllProveedores = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const proveedores = await databaseOperations.getAllProveedores();
     res.json(proveedores);
   } catch (error) {
     next(error);
   }
 };
 
 // Obtener un único proveedor por nombre
 export const getProveedorByName = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const { nombre } = req.params;
     const proveedor = await databaseOperations.getProveedorByName(nombre);
     if (proveedor) {
       res.json(proveedor);
     } else {
       res.status(404).json({ message: 'Proveedor no encontrado' });
     }
   } catch (error) {
     next(error);
   }
 };
 

 // Agregar un nuevo proveedor
 export const addProveedor = async (req: Request, res: Response, next: NextFunction) => {
   try {
     
     var newProveedor = req.body;
     newProveedor.id = stringToUUID(req.body.nombre);
     const [insertedProveedor] = await databaseOperations.addProveedor(newProveedor);
     res.status(201).json(insertedProveedor);
   } catch (error) {
     next(error);
   }
 };
 
 // Modificar un proveedor
 export const updateProveedor = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const { nombre } = req.params;
     const updatedProveedor= req.body;
     const [proveedor] = await databaseOperations.updateProveedor(nombre, updatedProveedor);
     if (proveedor) {
       res.json(proveedor);
     } else {
       res.status(404).json({ message: 'Proveedor no encontrado' });
     }
   } catch (error) {
     next(error);
   }
 };
 
 // Eliminar un proveedor
 export const deleteProveedor = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const { nombre } = req.params;
     const deleteProveedor = await databaseOperations.deleteProveedor(nombre);
     if (deleteProveedor){
         res.status(204).json({ message: 'Proveedor eliminado' });
     } else {
         res.status(404).json({ message: 'Proveedor no encontrado' });
     }
   } catch (error) { 
     next(error);
   }
 };
 