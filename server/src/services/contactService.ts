import nodemailer from 'nodemailer';

export const sendContactEmail = async (
  name: string,
  email: string,
  message: string,
) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Новое сообщение с сайта портфолио</h2>
        
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
          <p><strong>Сообщение:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      </div>
    `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'Новое сообщение с сайта портфолио',
    html,
  });
};
