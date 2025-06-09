 // ./src/controllers/products.ts
import { Request, Response, NextFunction } from 'express';
import * as databaseOperations from '../services/exportOperations';
import { ProductoFiltro } from '../@types/controller';
import { stringToUUID } from '../utils/uuidMapper';
import multer from 'multer';
import axios from 'axios';


const storage = multer.memoryStorage(); // Store file in memory as Buffer
const upload = multer({ storage });

export default upload;

// Obtener todos los productos
export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await databaseOperations.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// Obtener un único producto por codigo de barra
export const getProductByCodigoBarra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { codigo_barra } = req.params;
    const product = await databaseOperations.getProductByCodigoBarra(codigo_barra);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

// Filtrar productos por columna
export const filterProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filter: ProductoFiltro = req.query;
    const products = await databaseOperations.filterProducts(filter);
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const filterProductsByAlert = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filter: ProductoFiltro = req.query;
    console.log(filter);
    console.log("Paso por aca");
    const products = await databaseOperations.filterProducts(filter);
    res.json(products);
  } catch (error) {
    next(error);
  }
};
// Agregar un nuevo producto
export const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("llego al addProduct");
    
    var newProduct = req.body;
    newProduct.id = stringToUUID(req.body.codigo_barra);

    if (req.file) {
      console.log("llego al req.file");
      // Convert image buffer to base64 string with prefix
      const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
      console.log("llego");
      // Prepare payload
      const payload = new URLSearchParams();
      payload.append('secret', 'jijo_si_che_mau_prrr'); // Your secret key
      payload.append('barcode', req.body.codigo_barra);
      payload.append('image', base64Image);

      // Send POST request to Google Apps Script
      const response = await axios.post(
        'https://script.google.com/macros/s/AKfycbyiNxSuVP_qsVo3z2iQKgZrjE3V3lqrDee7ZrEbt86E2mDDAWN3lZIOXFhhoIy8SYiw/exec',
        payload.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      
      
      newProduct.imagen = req.body.codigo_barra;
    } else {
      newProduct.imagen = null;
    }

    const [insertedProduct] = await databaseOperations.addProduct(newProduct);
    res.status(201).json(insertedProduct);
  } catch (error) {
    next(error);
  }
};

// Modificar un producto
export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { codigo_barra } = req.params;
    const updatedProduct = req.body;
    const [product] = await databaseOperations.updateProduct(codigo_barra, updatedProduct);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

export const updateBatchPrices = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = req.body; 
    if (!Array.isArray(products)) {
      return res.status(400).json({ message: 'Body must be an array of products.' });
    }
    console.log(products);
    const results = [];
    for (const prod of products) {
      console.log('Updating:', prod);
      if (!prod.codigo_barra || typeof prod.precio !== 'number') {
        results.push({ codigo_barra: prod.codigo_barra, success: false, error: 'Missing codigo_barra or precio' });
        continue;
      }
      try {
        // Make sure this matches your DB column name!
        const updateObj = { precio_unidad: prod.precio };
        console.log('Update object:', updateObj);
        const updated = await databaseOperations.updateProduct(prod.codigo_barra, updateObj);
        if (updated && updated.length > 0) {
          results.push({ codigo_barra: prod.codigo_barra, success: true });
        } else {
          results.push({ codigo_barra: prod.codigo_barra, success: false, error: 'Product not found' });
        }
      } catch (err) {
        let errorMsg = 'Unknown error';
        if (err instanceof Error) {
          errorMsg = err.message;
        } else if (typeof err === 'string') {
          errorMsg = err;
        }
        results.push({ codigo_barra: prod.codigo_barra, success: false, error: errorMsg });
      }
    }
    res.json({ results });
  } catch (error) {
    next(error);
  }
};

// Eliminar un producto
export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { codigo_barra } = req.params;
    const deletedProduct = await databaseOperations.deleteProduct(codigo_barra);
    if (deletedProduct){
        res.status(204).json({ message: 'Producto eliminado' });
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) { 
    next(error);
  }
};
