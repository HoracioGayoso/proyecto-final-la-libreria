// src/templates/emailTemplates.ts

import { NotificacionData, NotificacionTipo } from '../@types/notification';

export const getEmailTemplate = (
  tipo: NotificacionTipo,
  data: NotificacionData
): { subject: string; html: string } => {
  switch (tipo) {
    case 'retiro':
      return {
        subject: `Nuevo pedido para retiro en tienda - Pedido ${data.pedidoId ?? ''}`,
        html: `
          <h1>Hola equipo de LA Libreria,</h1>
          <p>Se ha registrado un <strong>nuevo pedido para retiro en tienda</strong>.</p>
          <ul>
            <li><strong>Cliente:</strong> ${data.clienteNombre ?? 'No especificado'}</li>
            <li><strong>ID Pedido:</strong> ${data.pedidoId ?? 'No especificado'}</li>
            <li><strong>Fecha de creación:</strong> ${data.fecha ?? 'No especificada'}</li>
          </ul>
          <p>Por favor, preparen el pedido para que el cliente pueda retirarlo.</p>
          <hr />
          <p>Saludos,</p>
          <p>El sistema de notificaciones de LA Libreria</p>
        `
      };

    case 'envio':
      return {
        subject: `Nuevo pedido para envío a domicilio - Pedido ${data.pedidoId ?? ''}`,
        html: `
          <h1>Hola equipo de LA Libreria,</h1>
          <p>Se ha registrado un <strong>nuevo pedido para envío a domicilio</strong>.</p>
          <ul>
            <li><strong>Cliente:</strong> ${data.clienteNombre ?? 'No especificado'}</li>
            <li><strong>ID Pedido:</strong> ${data.pedidoId ?? 'No especificado'}</li>
            <li><strong>Fecha de creación:</strong> ${data.fecha ?? 'No especificada'}</li>
            <li><strong>Dirección de envío:</strong> ${data.direccionEnvio ?? 'No especificada'}</li>
          </ul>
          <p>Por favor, procesen el envío a la brevedad.</p>
          <hr />
          <p>Saludos,</p>
          <p>El sistema de notificaciones de LA Libreria</p>
        `
      };

    case 'presupuesto':
      return {
        subject: `Nueva solicitud de presupuesto - Cliente ${data.clienteNombre ?? ''}`,
        html: `
          <h1>Hola equipo de LA Libreria,</h1>
          <p>Se ha recibido una <strong>nueva solicitud de presupuesto</strong>.</p>
          <ul>
            <li><strong>Cliente:</strong> ${data.clienteNombre ?? 'No especificado'}</li>
            <li><strong>Detalle del presupuesto:</strong> ${data.detallePresupuesto ?? 'No especificado'}</li>
          </ul>
          <p>Por favor, contacten al cliente para brindarle la información solicitada.</p>
          <hr />
          <p>Saludos,</p>
          <p>El sistema de notificaciones de LA Libreria</p>
        `
      };

    default:
      return {
        subject: 'Notificación',
        html: `<p>Notificación sin contenido específico.</p>`
      };
  }
};
