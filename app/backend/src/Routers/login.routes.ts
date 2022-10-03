import { Router } from 'express';
import LoginController from '../Controllers/login.controller';

const router = Router();

router.post('/login', LoginController.login);
router.get('/login/validate', LoginController.loginValidate);

export default router;
