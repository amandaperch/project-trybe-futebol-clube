import { Router } from 'express';
import MatchesController from '../Controllers/matches.controller';
import validateToken from '../middlewares/validateToken.middleware';

const router = Router();

router.get('/matches', MatchesController.getAll);
router.post('/matches', validateToken, MatchesController.create);
router.patch('/matches/:id/finish', MatchesController.finish);

export default router;
