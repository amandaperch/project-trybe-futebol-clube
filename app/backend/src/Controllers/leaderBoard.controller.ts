import { Request, Response } from 'express';
import LeaderBoardService from '../Service/leaderBoard.service';

export default class LeaderBoardController {
  static async leardeBoard(req: Request, res: Response) {
    const leaderBoard = await LeaderBoardService.getAll();
    return res.status(200).json(leaderBoard);
  }
}
