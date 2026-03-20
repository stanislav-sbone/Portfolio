import type { Request, Response } from 'express';
import {
  sendContactEmail,
  sendTelegramNotification,
} from '../services/contactService';

export const sendEmail = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Все поля обязательны для заполнения',
      });
    }

    await Promise.all([
      sendTelegramNotification(name, email, message),
      sendContactEmail(name, email, message),
    ]);

    res.status(200).json({ message: 'Сообщение успешно отправлено' });
  } catch (error) {
    console.error('Ошибка отправки:', error);

    res.status(500).json({
      error: 'Произошла ошибка при отправке сообщения',
    });
  }
};
