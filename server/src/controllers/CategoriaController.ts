  
 import { Request, Response, NextFunction } from 'express';
 import * as databaseOperations from '../services/exportOperations';
import { stringToUUID } from '../utils/uuidMapper';

 
 // Obtener todas las categorias
 export const getAllCategorias = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const categorias = await databaseOperations.getAllCategorias();
     res.json(categorias);
   } catch (error) {
     next(error);
   }
 };
 
 // Obtener un único categoria por nombre
 export const getCategoriaByName = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const { nombre } = req.params;
     const categoria = await databaseOperations.getCategoriaByName(nombre);
     if (categoria) {
       res.json(categoria);
     } else {
       res.status(404).json({ message: 'Categoria no encontrado' });
     }
   } catch (error) {
     next(error);
   }
 };
 

 // Agregar un nuevo categoria
 export const addCategoria = async (req: Request, res: Response, next: NextFunction) => {
   try {
     
     var newCategoria = req.body;
     newCategoria.id = stringToUUID(req.body.nombre);
     const [insertedCategoria] = await databaseOperations.addCategoria(newCategoria);
     res.status(201).json(insertedCategoria);
   } catch (error) {
     next(error);
   }
 };
 
 // Modificar un categoria
 export const updateCategoria = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const { nombre } = req.params;
     const updatedCategoria= req.body;
     const [categoria] = await databaseOperations.updateCategoria(nombre, updatedCategoria);
     if (categoria) {
       res.json(categoria);
     } else {
       res.status(404).json({ message: 'Categoria no encontrado' });
     }
   } catch (error) {
     next(error);
   }
 };
 
 // Eliminar un categoria
 export const deleteCategoria = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const { nombre } = req.params;
     const deleteCategoria = await databaseOperations.deleteCategoria(nombre);
     if (deleteCategoria){
         res.status(204).json({ message: 'Categoria eliminado' });
     } else {
         res.status(404).json({ message: 'Categoria no encontrado' });
     }
   } catch (error) { 
     next(error);
   }
 };
 
