import { Router } from 'express';
import LoginController from '../Controllers/login.controller';
import validateToken from '../middlewares/validateToken.middleware';

const router = Router();

router.post('/login', LoginController.login);
router.get('/login/validate', validateToken, LoginController.loginValidate);

export default router;
