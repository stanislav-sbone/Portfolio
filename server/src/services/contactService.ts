import nodemailer from 'nodemailer';
import { telegramBot } from '../lib/telegramBot';
import { config } from '../config/env';
import escape from 'escape-html';

const chatId = process.env.TELEGRAM_CHAT_ID;

export const sendTelegramNotification = async (
  name: string,
  email: string,
  message: string,
) => {
  if (!chatId) {
    throw new Error('TELEGRAM_CHAT_ID is not set');
  }

  const safeName = escape(name);
  const safeEmail = escape(email);
  const safeMessage = escape(message);

  const text = [
    '<b>Новое сообщение с Portfolio</b>',
    '',
    `Имя:   <b>${safeName}</b>`,
    `Email:   ${safeEmail}`,
    '',
    'Сообщение:',
    `<b>${safeMessage}</b>`,
  ].join('\n');

  await telegramBot.api.sendMessage(chatId, text, {
    parse_mode: 'HTML',
  });
};

export const sendContactEmail = async (
  name: string,
  email: string,
  message: string,
) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email.user,
      pass: config.email.pass,
    },
  });

  const safeName = escape(name);
  const safeEmail = escape(email);
  const safeMessage = escape(message);

  const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Новое сообщение с сайта портфолио</h2>
        
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Имя:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
        </div>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
          <p><strong>Сообщение:</strong></p>
          <p style="white-space: pre-line;">${safeMessage}</p>
        </div>
      </div>
    `;

  await transporter.sendMail({
    from: config.email.user,
    to: config.email.recipient,
    subject: 'Новое сообщение с сайта портфолио',
    html,
  });
};
