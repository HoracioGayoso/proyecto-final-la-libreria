import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import productoRouter from './routes/Producto'; 
import proveedorRouter from './routes/Proveedor';
import categoriaRouter from './routes/Categoria';
import ordenVentaRouter from './routes/OrdenVenta';
import renglonOrdenVentaRouter from './routes/RenglonOrdenVenta';
import stockProductoRouter from './routes/StockProducto';
import alertaStockRouter from './routes/AlertaStock';
import servicioRouter from './routes/Servicio';
import pedidoRouter from './routes/Pedido';
import renglonDetallePedidoRouter from './routes/RenglonDetallePedido';
import ordenCompraRouter from './routes/OrdenCompra';
import renglonOrdenCompraRouter from './routes/RenglonOrdenCompra';

import cors from 'cors'; // Importa el paquete cors

const app = express();

// Configura CORS
const corsOptions = {
    origin: '*', // Permite todas las solicitudes de cualquier origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization', // Encabezados permitidos
  };
app.use(cors(corsOptions)); // Usa cors con las opciones configuradas
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/productos', productoRouter);
app.use('/proveedores', proveedorRouter);
app.use('/categorias', categoriaRouter);
app.use('/stock-productos', stockProductoRouter);
app.use('/alertas-stock', alertaStockRouter);
app.use('/servicios', servicioRouter);
app.use('/pedidos', pedidoRouter);
app.use('/renglones-detalle-pedido', renglonDetallePedidoRouter);
app.use('/ordenes-compra', ordenCompraRouter);
app.use('/renglones-orden-compra', renglonOrdenCompraRouter);
app.use('/ordenes-venta', ordenVentaRouter);
app.use('/renglones-orden-venta', renglonOrdenVentaRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new Error('Not Found');
  res.status(404).json({ message: err.message });
});


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});

export default app;
