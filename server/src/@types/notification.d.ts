// src/@types/notificacion.types.ts

export type NotificacionTipo = 'retiro' | 'envio' | 'presupuesto';

export interface NotificacionData {
  to: string;
  clienteNombre: string;
  pedidoId?: string;
  fecha?: string;            // Fecha del pedido o solicitud, opcional
  direccionEnvio?: string;   // Solo para 'envio'
  detallePresupuesto?: string; // Solo para 'presupuesto'
  // Podés agregar más campos que necesites para armar el email
}
