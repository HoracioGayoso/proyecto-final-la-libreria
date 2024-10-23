// ./src/controllers/products.ts
import { Request, Response, NextFunction } from 'express';
import * as databaseOperations from '../services/exportOperations';


// Obtener stock de un producto
export const getAllStocks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stocks = await databaseOperations.getAllStocks();
      res.json(stocks);
    } catch (error) {
      next(error);
    }
  };

// Obtener stock de un producto
export const getCurrentStock = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { producto_id } = req.params;
    const stocks = await databaseOperations.getCurrentStock(producto_id);
    res.json(stocks);
  } catch (error) {
    next(error);
  }
};

// Obtener stocks dentro de un rango que llega en el body de la req
export const getStocksInRange = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { min_stock, max_stock } = req.query;
    let stocks = null;
    if(min_stock && max_stock){
        stocks = await databaseOperations.getStocksInRange(min_stock, max_stock);
    }
    if (stocks) {
      res.json(stocks);
    } else {
      res.status(404).json({ message: 'Stocks no encontrados' });
    }
  } catch (error) {
    next(error);
  }
};

// Modificar un producto
export const updateStock = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { producto_id } = req.params;
    const newStock = req.body;
    // Aca falta la logica para enviar una alerta si el nuevo stock es menor al minimo,
    // para en ese caso enviar una alerta
    const [stock] = await databaseOperations.updateStock(producto_id, newStock);
    if (stock) {
      res.json(stock);
    } else {
      res.status(404).json({ message: 'Stock no encontrado' });
    }
  } catch (error) {
    next(error);
  }
};