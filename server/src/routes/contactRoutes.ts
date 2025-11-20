import { Router } from 'express';
import { sendEmail } from '../controllers/contactControllers';

const router = Router();

router.post('/contact', sendEmail);

export default router;
