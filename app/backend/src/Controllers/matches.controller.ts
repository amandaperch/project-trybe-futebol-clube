import { Request, Response } from 'express';
import MatchesService from '../Service/matches.service';

export default class MatchController {
  static async getAll(req: Request, res: Response) {
    const Match = await MatchesService.getAll();
    return res.status(200).json(Match);
  }
}
