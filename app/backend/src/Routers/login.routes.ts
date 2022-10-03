import { Router } from 'express';
import LoginController from '../Controllers/login.controller';

const router = Router();

router.post('/login', LoginController.login);

export default router;
