import dotenv from 'dotenv';

dotenv.config();

const REQUIRED_VARS = ['EMAIL_USER', 'EMAIL_PASS', 'RECIPIENT_EMAIL'] as const;

const missingVars = REQUIRED_VARS.filter((key) => !process.env[key]);

if (missingVars.length > 0) {
  throw new Error(
    `Отсутствуют обязательные переменные окружения: ${missingVars.join(', ')}`,
  );
}

export const config = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT) || 5000,
  email: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
    recipient: process.env.RECIPIENT_EMAIL!,
  },
};

export type AppConfig = typeof config;
