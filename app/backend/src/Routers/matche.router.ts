import { Router } from 'express';
import MatchesController from '../Controllers/matches.controller';

const router = Router();

router.get('/matches', MatchesController.getAll);

export default router;
