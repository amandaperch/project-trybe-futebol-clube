import { Request, Response } from 'express';
import MatchesService from '../Service/matches.service';

export default class TeamController {
  static async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (!inProgress) {
      const allMatches = await MatchesService.getAll();
      return res.status(200).json(allMatches);
    }
    if (inProgress === 'true') {
      const matchInProcess = await MatchesService.matcheInProgress(true);
      return res.status(200).json(matchInProcess);
    }
    if (inProgress === 'false') {
      const matchFinished = await MatchesService.matcheInProgress(false);
      return res.status(200).json(matchFinished);
    }
  }
}
