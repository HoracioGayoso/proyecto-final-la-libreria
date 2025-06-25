import { Request, Response, NextFunction } from 'express';
import { getEmailTemplate } from '../templates/emailTemplates';
import { sendEmail } from '../services/EmailNotificationsRepository';
import { NotificacionData } from '../@types/notification';

const DESTINATARIO = 'ejemplo_tienda@gmail.com';

export const notificarRetiro = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const datos: NotificacionData = req.body;
    const { subject, html } = getEmailTemplate('retiro', datos);
    await sendEmail({ to: datos.to, subject, html });
    res.status(200).json({ message: 'Notificación de retiro enviada correctamente.' });
  } catch (error) {
    next(error);
  }
};

export const notificarEnvio = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const datos: NotificacionData = req.body;
    const { subject, html } = getEmailTemplate('envio', datos);
    await sendEmail({ to: datos.to, subject, html });
    res.status(200).json({ message: 'Notificación de envío enviada correctamente.' });
  } catch (error) {
    next(error);
  }
};

export const notificarPresupuesto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const datos: NotificacionData = req.body;
    const archivo = req.file;

    const { subject, html } = getEmailTemplate('presupuesto', datos);

    const attachments = archivo ? [{
      filename: archivo.originalname,
      content: archivo.buffer,
      contentType: archivo.mimetype,
    }] : [];

    await sendEmail({ to: datos.to, subject, html, attachments });

    res.status(200).json({ message: 'Notificación de presupuesto enviada correctamente.' });
  } catch (error) {
    next(error);
  }
};
