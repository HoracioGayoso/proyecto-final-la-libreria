export interface Usuario {
    id: string;
    nombre: string;
    email: string;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  
  export interface Proveedor {
    id: string;
    nombre: string;
    email?: string;
    telefono?: string;
    sitio_web?: string;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  
  export interface Categoria {
    id: string;
    nombre: string;
    descripcion?: string;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  
  export interface Producto {
    id: string;
    nombre: string;
    codigo_barra?: string;
    descripcion?: string;
    precio?: number;
    min_stock?: number;
    categoria_id?: string;
    proveedor_id?: string;
    imagen?: string;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  
  export interface StockProducto {
    id: string;
    producto_id: string;
    cantidad_contenedores: number;
    cantidad_por_contenedor: number;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  
  export interface AlertaStock {
    id: string;
    stock_id: string;
    mensaje: string;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  
  export interface Servicio {
    id: string;
    client_id: string;
    nombre: string;
    descripcion?: string;
    precio?: number;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  
  export interface Pedido {
    id: string;
    cliente_id: string;
    fecha_pedido: Date;
    estado: 'PENDIENTE' | 'PROCESANDO' | 'ENVIADO' | 'CANCELADO';
    montoTotal: number;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  
  export interface RenglonDetallePedido {
    id: string;
    pedido_id: string;
    producto_id: string;
    cantidad: number;
    precio_renglon: number;
    precio_unitario: number;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  
  export interface OrdenCompra {
    id: string;
    proveedor_id: string;
    fecha_orden: Date;
    estado: 'PENDIENTE' | 'PROCESANDO' | 'RECIBIDO' | 'CANCELADO';
    montoTotal: number;
    tipo_gasto: 'COMPRA' | 'GASTO' | 'INVERSION';
    descripcion?: string;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  
  export interface RenglonOrdenCompra {
    id: string;
    orden_compra_id: string;
    producto_id?: string;
    cantidad: number;
    precio_unitario: number;
    precio_total: number;
    servicio_id?: string;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  
  export interface OrdenVenta {
    id: string;
    cliente_id: string;
    fecha_orden: Date;
    estado: 'PENDIENTE' | 'PROCESANDO' | 'COMPLETADO' | 'CANCELADO';
    montoTotal: number;
    tipo_venta: 'VENTA' | 'DEVOLUCION';
    descripcion?: string;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  
  export interface RenglonOrdenVenta {
    id: string;
    orden_venta_id: string;
    producto_id?: string;
    cantidad: number;
    precio_unitario: number;
    precio_total: number;
    servicio_id?: string;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  