import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('RenglonOrdenVenta').del();
  await knex('OrdenVenta').del();
  await knex('RenglonOrdenCompra').del();
  await knex('OrdenCompra').del();
  await knex('RenglonDetallePedido').del();
  await knex('Pedido').del();
  await knex('Servicio').del();
  await knex('AlertaStock').del();
  await knex('StockProducto').del();
  await knex('Producto').del();
  await knex('Categoria').del();
  await knex('Proveedor').del();

  
  // Usuarios
  const usuarioIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('Usuario').insert([
    { id: usuarioIds[0], nombre: 'Juan Perez', email: 'juan@example.com' },
    { id: usuarioIds[1], nombre: 'Maria Gomez', email: 'maria@example.com' },
    { id: usuarioIds[2], nombre: 'Carlos Ruiz', email: 'carlos@example.com' }
  ]);
  
  // Proveedores
  const proveedorIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('Proveedor').insert([
    { id: proveedorIds[0], nombre: 'Proveedor Uno', email: 'proveedor1@example.com', telefono: '123456789', sitio_web: 'https://proveedor1.com' },
    { id: proveedorIds[1], nombre: 'Proveedor Dos', email: 'proveedor2@example.com', telefono: '987654321', sitio_web: 'https://proveedor2.com' },
    { id: proveedorIds[2], nombre: 'Proveedor Tres', email: 'proveedor3@example.com', telefono: '555555555', sitio_web: 'https://proveedor3.com' },
  ]);

  // Categorias
  const categoriaIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('Categoria').insert([
    { id: categoriaIds[0], nombre: 'Libros', descripcion: 'Libros de todo tipo' },
    { id: categoriaIds[1], nombre: 'Tecnología', descripcion: 'Productos tecnológicos' },
    { id: categoriaIds[2], nombre: 'Hogar', descripcion: 'Artículos para el hogar' },
  ]);

  // Productos
  const productoIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('Producto').insert([
    { id: productoIds[0], nombre: 'El Quijote', codigo_barra: '1234567890123', descripcion: 'Novela clásica', precio_unidad: 100, categoria_id: categoriaIds[0], proveedor_id: proveedorIds[0], imagen: 'quijote.jpg', activo: true },
    { id: productoIds[1], nombre: 'Laptop', codigo_barra: '9876543210987', descripcion: 'Portátil moderna', precio_unidad: 1500, categoria_id: categoriaIds[1], proveedor_id: proveedorIds[1], imagen: 'laptop.jpg', activo: true },
    { id: productoIds[2], nombre: 'Silla', codigo_barra: '5555555555555', descripcion: 'Silla ergonómica', precio_unidad: 200, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[2], imagen: 'silla.jpg', activo: true },
  ]);

  // StockProducto
  const stockProductoIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('StockProducto').insert([
    { id: stockProductoIds[0], producto_id: productoIds[0], cantidad_contenedores: 10, cantidad_por_contenedor: 5 },
    { id: stockProductoIds[1], producto_id: productoIds[1], cantidad_contenedores: 7, cantidad_por_contenedor: 3 },
    { id: stockProductoIds[2], producto_id: productoIds[2], cantidad_contenedores: 20, cantidad_por_contenedor: 2 },
  ]);

  // AlertaStock
  const alertaStockIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('AlertaStock').insert([
    { id: alertaStockIds[0], stock_id: stockProductoIds[0], mensaje: 'Stock bajo para El Quijote' },
    { id: alertaStockIds[1], stock_id: stockProductoIds[1], mensaje: 'Stock bajo para Laptop' },
    { id: alertaStockIds[2], stock_id: stockProductoIds[2], mensaje: 'Stock bajo para Silla' },
  ]);

  // Servicios (use fake usuario IDs)
  
  const servicioIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('Servicio').insert([
    { id: servicioIds[0], cliente_id: usuarioIds[0], nombre: 'Envío rápido', descripcion: 'Entrega en 24h', precio: 15 },
    { id: servicioIds[1], cliente_id: usuarioIds[1], nombre: 'Instalación', descripcion: 'Instalación a domicilio', precio: 50 },
    { id: servicioIds[2], cliente_id: usuarioIds[2], nombre: 'Garantía extendida', descripcion: 'Cobertura adicional', precio: 30 },
  ]);

  // Pedidos
  const pedidoIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('Pedido').insert([
    { id: pedidoIds[0], cliente_id: usuarioIds[0], fecha_pedido: new Date(), estado: 'PENDIENTE', montoTotal: 200 },
    { id: pedidoIds[1], cliente_id: usuarioIds[1], fecha_pedido: new Date(), estado: 'ENVIADO', montoTotal: 300 },
    { id: pedidoIds[2], cliente_id: usuarioIds[2], fecha_pedido: new Date(), estado: 'CANCELADO', montoTotal: 150 },
  ]);

  // RenglonDetallePedido
  const renglonDetallePedidoIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('RenglonDetallePedido').insert([
    { id: renglonDetallePedidoIds[0], pedido_id: pedidoIds[0], producto_id: productoIds[0], cantidad: 2, precio_renglon: 200, precio_unitario: 100 },
    { id: renglonDetallePedidoIds[1], pedido_id: pedidoIds[1], producto_id: productoIds[1], cantidad: 1, precio_renglon: 1500, precio_unitario: 1500 },
    { id: renglonDetallePedidoIds[2], pedido_id: pedidoIds[2], producto_id: productoIds[2], cantidad: 3, precio_renglon: 600, precio_unitario: 200 },
  ]);

  // OrdenCompra
  const ordenCompraIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('OrdenCompra').insert([
    { id: ordenCompraIds[0], fecha_orden: new Date(), montoTotal: 500, tipo_gasto: 'COMPRA', motivo: 'Reposición', descripcion: 'Compra de libros' },
    { id: ordenCompraIds[1], fecha_orden: new Date(), montoTotal: 1000, tipo_gasto: 'GASTO', motivo: 'Equipamiento', descripcion: 'Compra de laptops' },
    { id: ordenCompraIds[2], fecha_orden: new Date(), montoTotal: 400, tipo_gasto: 'INVERSION', motivo: 'Mobiliario', descripcion: 'Compra de sillas' },
  ]);

  // RenglonOrdenCompra
  const renglonOrdenCompraIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('RenglonOrdenCompra').insert([
    { id: renglonOrdenCompraIds[0], orden_compra_id: ordenCompraIds[0], producto_id: productoIds[0], cantidad: 10, precio_unitario: 50, precio_total: 500 },
    { id: renglonOrdenCompraIds[1], orden_compra_id: ordenCompraIds[1], producto_id: productoIds[1], cantidad: 2, precio_unitario: 500, precio_total: 1000 },
    { id: renglonOrdenCompraIds[2], orden_compra_id: ordenCompraIds[2], producto_id: productoIds[2], cantidad: 2, precio_unitario: 200, precio_total: 400 },
  ]);

  // OrdenVenta
  const ordenVentaIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('OrdenVenta').insert([
    { id: ordenVentaIds[0], cliente_id: usuarioIds[0], fecha_orden: new Date(), estado: 'PENDIENTE', montoTotal: 200, tipo_venta: 'VENTA', descripcion: 'Venta de libros' },
    { id: ordenVentaIds[1], cliente_id: usuarioIds[1], fecha_orden: new Date(), estado: 'COMPLETADO', montoTotal: 1500, tipo_venta: 'VENTA', descripcion: 'Venta de laptops' },
    { id: ordenVentaIds[2], cliente_id: usuarioIds[2], fecha_orden: new Date(), estado: 'CANCELADO', montoTotal: 600, tipo_venta: 'DEVOLUCION', descripcion: 'Devolución de sillas' },
  ]);

  // RenglonOrdenVenta
  const renglonOrdenVentaIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('RenglonOrdenVenta').insert([
    { id: renglonOrdenVentaIds[0], orden_venta_id: ordenVentaIds[0], producto_id: productoIds[0], cantidad: 2, precio_unitario: 100, precio_total: 200, porcentaje_descuento_manual: 0, servicio_id: servicioIds[0] },
    { id: renglonOrdenVentaIds[1], orden_venta_id: ordenVentaIds[1], producto_id: productoIds[1], cantidad: 1, precio_unitario: 1500, precio_total: 1500, porcentaje_descuento_manual: 0, servicio_id: servicioIds[1] },
    { id: renglonOrdenVentaIds[2], orden_venta_id: ordenVentaIds[2], producto_id: productoIds[2], cantidad: 3, precio_unitario: 200, precio_total: 600, porcentaje_descuento_manual: 10, servicio_id: servicioIds[2] },
  ]);
} 