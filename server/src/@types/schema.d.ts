import {
    Usuario,
    Proveedor,
    Categoria,
    Producto,
    StockProducto,
    AlertaStock,
    Servicio,
    Pedido,
    RenglonDetallePedido,
    OrdenCompra,
    RenglonOrdenCompra,
    OrdenVenta,
    RenglonOrdenVenta
  } from './schemaInterfaces';
  
  declare module 'knex/types/tables' {
    interface Tables {
      // Definición de las tablas base
      usuarios: Usuario;
      proveedores: Proveedor;
      categorias: Categoria;
      productos: Producto;
      stock_productos: StockProducto;
      alertas_stock: AlertaStock;
      servicios: Servicio;
      pedidos: Pedido;
      renglones_detalle_pedido: RenglonDetallePedido;
      ordenes_compra: OrdenCompra;
      renglones_orden_compra: RenglonOrdenCompra;
      ordenes_venta: OrdenVenta;
      renglones_orden_venta: RenglonOrdenVenta;
  
      // Configuración para inserciones (insert)
      usuarios_insert: Omit<Usuario, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>;
      proveedores_insert: Omit<Proveedor, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>;
      categorias_insert: Omit<Categoria, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>;
      productos_insert: Omit<Producto, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>;
      stock_productos_insert: Omit<StockProducto, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>;
      alertas_stock_insert: Omit<AlertaStock, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>;
      servicios_insert: Omit<Servicio, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>;
      pedidos_insert: Omit<Pedido, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>;
      renglones_detalle_pedido_insert: Omit<RenglonDetallePedido, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>;
      ordenes_compra_insert: Omit<OrdenCompra, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>;
      renglones_orden_compra_insert: Omit<RenglonOrdenCompra, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>;
      ordenes_venta_insert: Omit<OrdenVenta, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>;
      renglones_orden_venta_insert: Omit<RenglonOrdenVenta, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>;
  
      // Configuración para actualizaciones (update)
      usuarios_update: Partial<Omit<Usuario, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>>;
      proveedores_update: Partial<Omit<Proveedor, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>>;
      categorias_update: Partial<Omit<Categoria, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>>;
      productos_update: Partial<Omit<Producto, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>>;
      stock_productos_update: Partial<Omit<StockProducto, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>>;
      alertas_stock_update: Partial<Omit<AlertaStock, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>>;
      servicios_update: Partial<Omit<Servicio, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>>;
      pedidos_update: Partial<Omit<Pedido, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>>;
      renglones_detalle_pedido_update: Partial<Omit<RenglonDetallePedido, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>>;
      ordenes_compra_update: Partial<Omit<OrdenCompra, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>>;
      renglones_orden_compra_update: Partial<Omit<RenglonOrdenCompra, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>>;
      ordenes_venta_update: Partial<Omit<OrdenVenta, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>>;
      renglones_orden_venta_update: Partial<Omit<RenglonOrdenVenta, 'id' | 'fecha_creacion' | 'fecha_actualizacion'>>;
    }
  }
  