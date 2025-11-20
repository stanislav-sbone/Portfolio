import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { sendEmail } from '../controllers/contactControllers';

const router = Router();

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {
    error: 'Слишком много запросов',
  },
});

router.post('/contact', limiter, sendEmail);

export default router;
