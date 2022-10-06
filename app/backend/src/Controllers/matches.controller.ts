import { Request, Response } from 'express';
import MatchesService from '../Service/matches.service';

export default class MatchController {
  static async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (!inProgress) {
      const allMatches = await MatchesService.getAll();
      return res.status(200).json(allMatches);
    }
    if (inProgress === 'true') {
      const matchesInProgress = await MatchesService.getByProgress(true);
      return res.status(200).json(matchesInProgress);
    }
    if (inProgress === 'false') {
      const matchesFinished = await MatchesService.getByProgress(false);
      return res.status(200).json(matchesFinished);
    }
  }

  static async create(req: Request, res: Response) {
    const match = req.body;
    if (match.homeTeam === match.awayTeam) {
      return res.status(401)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    const result = await MatchesService.create(match);
    if (!result) return res.status(404).json({ message: 'There is no team with such id!' });
    return res.status(201).json(result);
  }

  static async finish(req: Request, res: Response) {
    const { id } = req.params;
    await MatchesService.finish(Number(id));
    return res.status(200).json({ message: 'finish' });
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const goals = await MatchesService.update(Number(id), homeTeamGoals, awayTeamGoals);
    return res.status(200).json(goals);
  }
}
