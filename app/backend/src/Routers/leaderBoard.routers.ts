import { Router } from 'express';
import LeaderBoardController from '../Controllers/leaderBoard.controller';

const router = Router();

router.get('/leaderboard/home', LeaderBoardController.leardeBoard);

export default router;
