import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
interface SendEmailOptions {
    to: string;
    subject: string;
    html: string;
    attachments?: Array<{
      filename: string;
      content: Buffer | string;
      contentType?: string;
    }>;
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'horaciogayoso9@gmail.com',
      pass: 'lkda mpwa hsgt zevx'
    }
  });
  export const sendEmail = async (options: SendEmailOptions) => {
    const mailOptions = {
      from: `"La Libreria" <${process.env.EMAIL_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      attachments: options.attachments, // opcional, solo para presupuesto
    };
  
    await transporter.sendMail(mailOptions);
  };