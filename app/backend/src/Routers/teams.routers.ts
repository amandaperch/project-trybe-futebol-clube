import { Router } from 'express';
import TeamsController from '../Controllers/Team.controller';

const router = Router();

router.get('/teams', TeamsController.findAll);
router.get('/teams/:id', TeamsController.findById);

export default router;
